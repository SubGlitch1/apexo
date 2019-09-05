import { dbAction, files } from "@core";
import { registerModules, staff } from "@modules";
import * as modules from "@modules";
import {
	checkClient,
	checkServer,
	day,
	num,
	second,
	store
	} from "@utils";
import { computed, observable } from "mobx";
import { Md5 } from "ts-md5";

const demoHosts: string[] = ["demo.apexo.app"];

export enum LoginStep {
	loadingData,
	allDone,
	chooseUser,
	initial
}

export enum LoginType {
	initialActiveSession = "initial-active-session",
	initialLSLHashTS = "initial-lsl-hash-ts",
	loginCredentialsOnline = "login-credentials-online",
	loginCredentialsOffline = "login-credentials-offline"
}

export class Status {
	private currentlyValidating: string | null = null;
	@observable dbActionProgress: string[] = [];
	@observable loadingIndicatorText = "";
	@observable initialLoadingIndicatorText = "";
	@observable server: string = "";
	@observable invalidLogin: boolean = false;
	@observable currentUserID: string = "";

	@observable keepServerOffline = false;

	@observable step: LoginStep = LoginStep.initial;

	@observable isOnline = {
		dropbox: false,
		server: false,
		client: false
	};

	@observable tryOffline: boolean = false;

	@observable loginType: LoginType | "" = "";

	constructor() {
		this.validateOnlineStatus().then(() => {
			setInterval(() => this.validateOnlineStatus(), second * 2);
		});
	}

	async initialCheck(server: string) {
		this.initialLoadingIndicatorText = "running initial check";
		// If we're on a demo host
		if (demoHosts.indexOf(location.host) !== -1) {
			console.log("Login: Demo mode");
			return await this.startDemoServer();
		}

		this.initialLoadingIndicatorText = "checking online status";
		this.server = server;
		await this.validateOnlineStatus();

		this.initialLoadingIndicatorText = "checking active session";
		if (this.isOnline.server) {
			if (await this.activeSession(this.server)) {
				this.loginType = LoginType.initialActiveSession;
				await this.start({ server });
				store.set("LSL_TS", new Date().getTime().toString());
				return;
			}
		} else if (store.found("LSL_hash")) {
			const now = new Date().getTime();
			const then = new Date(num(store.get("LSL_TS"))).getTime();
			if (now - then < 7 * day) {
				this.loginType = LoginType.initialLSLHashTS;
				this.start({ server });
			}
		}
	}

	async loginWithCredentials({
		username,
		password,
		server
	}: {
		username: string;
		password: string;
		server: string;
	}) {
		this.server = server;
		await this.validateOnlineStatus();
		if (!this.isOnline.server && store.found("LSL_hash")) {
			return this.loginWithCredentialsOffline({
				username,
				password,
				server
			});
		}

		if (this.isOnline.server) {
			return this.loginWithCredentialsOnline({
				username,
				password,
				server
			});
		} else {
			if (store.found("LSL_hash")) {
				this.tryOffline = true;
			}
			return `
				An error occurred, please make sure that the server is online and it\'s accessible.
				Click "change" to change into another server
			`;
		}
	}

	async loginWithCredentialsOnline({
		username,
		password,
		server,
		noStart
	}: {
		username: string;
		password: string;
		server: string;
		noStart?: boolean;
	}) {
		const PouchDB: PouchDB.Static =
			((await import("pouchdb-browser")) as any).default ||
			((await import("pouchdb-browser")) as any);
		const auth: PouchDB.Plugin =
			((await import("pouchdb-authentication")) as any).default ||
			((await import("pouchdb-authentication")) as any);
		PouchDB.plugin(auth);
		try {
			await new PouchDB(server, { skip_setup: true }).logIn(
				username,
				password
			);
			if (noStart) {
				return true;
			}
			store.set(
				"LSL_hash",
				Md5.hashStr(server + username + password).toString()
			);
			store.set("LSL_TS", new Date().getTime().toString());
			this.loginType = LoginType.loginCredentialsOnline;
			this.start({ server });
			return true;
		} catch (e) {
			console.error(e);
			return (e.reason as string) || "Could not login";
		}
	}

	async loginWithCredentialsOffline({
		username,
		password,
		server,
		noStart
	}: {
		username: string;
		password: string;
		server: string;
		noStart?: boolean;
	}) {
		const LSL_hash = store.get("LSL_hash");
		if (LSL_hash === Md5.hashStr(server + username + password).toString()) {
			if (noStart) {
				return true;
			} else {
				this.loginType = LoginType.loginCredentialsOffline;
				this.start({ server });
				return true;
			}
		} else {
			return "This was not the last username/password combination you used!";
		}
	}

	async startDemoServer() {
		(await import("core/demo")).loadDemoData();
	}

	async start({ server }: { server: string }) {
		console.log("Login Type:", this.loginType);
		this.server = server;
		store.set("server_location", server);
		this.step = LoginStep.loadingData;
		try {
			this.loadingIndicatorText = "Registering modules";
			await registerModules();
			this.loadingIndicatorText = "Checking and setting user";
			if (!this.checkAndSetUserID()) {
				this.step = LoginStep.chooseUser;
			}
		} catch (e) {
			console.log("Registering modules failed", e);
		}
	}

	async removeCookies() {
		const PouchDB: PouchDB.Static =
			((await import("pouchdb-browser")) as any).default ||
			((await import("pouchdb-browser")) as any);
		const auth: PouchDB.Plugin =
			((await import("pouchdb-authentication")) as any).default ||
			((await import("pouchdb-authentication")) as any);
		return await new PouchDB(this.server, { skip_setup: true }).logOut();
	}

	async logout() {
		if (this.isOnline.server && !this.keepServerOffline) {
			try {
				this.removeCookies();
				await dbAction("logout");
			} catch (e) {
				console.log("Failed to logout", e);
			}
		}
		store.clear();
		location.reload();
	}

	checkAndSetUserID() {
		const userID = store.get("user_id");
		if (userID && staff!.docs.find(x => x._id === userID)) {
			this.setUser(userID);
			return true;
		} else {
			return false;
		}
	}
	resetUser() {
		this.step = LoginStep.chooseUser;
		this.currentUserID = "";
		store.remove("user_id");
	}
	setUser(id: string) {
		this.currentUserID = id;
		this.step = LoginStep.allDone;
		store.set("user_id", id);
	}

	async activeSession(server: string) {
		const PouchDB: PouchDB.Static = ((await import(
			"pouchdb-browser"
		)) as any).default;
		const auth: PouchDB.Plugin = ((await import(
			"pouchdb-authentication"
		)) as any).default;
		PouchDB.plugin(auth);
		try {
			if (this.isOnline.server && !this.keepServerOffline) {
				return !!(await new PouchDB(server, {
					skip_setup: true
				}).getSession()).userCtx.name;
			}
		} catch (e) {}
		return false;
	}

	async validateOnlineStatus() {
		if (this.currentlyValidating === this.server) {
			return;
		} else {
			this.currentlyValidating = this.server;
		}

		try {
			if (this.keepServerOffline) {
				this.isOnline.server = false;
			} else {
				this.initialLoadingIndicatorText =
					"checking server connectivity";
				const serverConnectivityResult = await checkServer(this.server);
				if (!this.isOnline.server && !!serverConnectivityResult) {
					// we were offline, and we're now online
					// resync on online status change
					dbAction("resync");
				}
				this.isOnline.server = !!serverConnectivityResult;
				if (
					serverConnectivityResult &&
					!serverConnectivityResult.name
				) {
					// when server is online but user is invalid
					this.invalidLogin = true;
				} else if (
					serverConnectivityResult &&
					serverConnectivityResult.name
				) {
					this.invalidLogin = false;
				}
			}
			this.initialLoadingIndicatorText = "checking client connectivity";
			this.isOnline.client = await checkClient();
			this.initialLoadingIndicatorText =
				"checking files server connectivity";
			if (modules.setting) {
				this.isOnline.dropbox = await files.status();
			}
		} catch (e) {}
		this.currentlyValidating = null;
	}
	reset() {
		this.server = "";
		this.currentUserID = "";
		this.keepServerOffline = false;
		this.step = LoginStep.initial;
		this.isOnline = {
			server: false,
			client: false,
			dropbox: false
		};
		this.tryOffline = false;
		this.loginType = "";
	}
}

export const status = new Status();
