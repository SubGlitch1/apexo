import * as dateUtils from "../../../assets/utils/date";
import * as React from "react";
import { API } from "../../../core";
import { Appointment, appointments } from "../data";
import { Col, Row } from "../../../assets/components/grid/index";
import { computed } from "mobx";
import { convert } from "../../../assets/utils/teeth-numbering-systems";
import {
	DatePicker,
	Dropdown,
	Icon,
	IconButton,
	Panel,
	PanelType,
	PrimaryButton,
	TextField,
	Toggle,
	Checkbox,
	Slider
} from "office-ui-fabric-react";
import { staffData } from "../../staff";
import {
	Label,
	LabelType
} from "../../../assets/components/label/label.component";
import { observer } from "mobx-react";
import { patientsData } from "../../patients";
import { prescriptionsData } from "../../prescriptions";
import { Profile } from "../../../assets/components/profile/profile";
import { ProfileSquared } from "../../../assets/components/profile/profile-squared";
import { round } from "../../../assets/utils/round";
import { Section } from "../../../assets/components/section/section";
import { settingsData } from "../../settings";
import { TagInput } from "../../../assets/components/tag-input/tag-input";
import { Treatment } from "../../treatments/data/class.treatment";
import { treatmentsData } from "../../treatments";
import "./appointment-editor.scss";
import { lang } from "../../../core/i18/i18";

@observer
export class AppointmentEditor extends React.Component<
	{
		appointment: Appointment | undefined | null;
		onDismiss: () => void;
		onDelete: () => void;
	},
	{}
> {
	timerInput: TextField[] = [];
	@computed
	get otherAppointmentsNumber() {
		const appointment = this.props.appointment;
		if (!appointment) {
			return [].length - 1;
		}
		return appointments
			.appointmentsForDay(appointment.date, 0, 0)
			.filter(a => a._id !== appointment._id).length;
	}

	@computed
	get treatmentOptions() {
		const list: Treatment[] = JSON.parse(
			JSON.stringify(treatmentsData.treatments.list)
		);
		if (
			this.props.appointment &&
			this.props.appointment.treatmentID.indexOf("|") > -1
		) {
			const arr = this.props.appointment.treatmentID.split("|");
			const _id = this.props.appointment.treatmentID;
			const type = arr[0];
			const expenses = Number(arr[1]);
			list.push(new Treatment({ _id, expenses, type }));
		}
		return list;
	}

	@computed
	get canEdit() {
		return API.user.currentUser.canEditAppointments;
	}

	render() {
		return this.props.appointment ? (
			<Panel
				isOpen={!!this.props.appointment}
				type={PanelType.medium}
				closeButtonAriaLabel="Close"
				isLightDismiss={true}
				onDismiss={this.props.onDismiss}
				onRenderNavigation={() => (
					<Row className="panel-heading">
						<Col span={22}>
							<Profile
								secondaryElement={
									<span>
										{dateUtils.unifiedDateFormat(
											this.props.appointment!.date
										)}{" "}
										/{" "}
										{this.props.appointment
											? this.props.appointment.treatment
												? this.props.appointment
														.treatment.type
												: ""
											: ""}
									</span>
								}
								name={this.props.appointment!.patient.name}
								size={3}
							/>
						</Col>
						<Col span={2} className="close">
							<IconButton
								iconProps={{ iconName: "cancel" }}
								onClick={() => {
									this.props.onDismiss();
								}}
							/>
						</Col>
					</Row>
				)}
			>
				<div className="appointment-editor">
					<Section title={lang("Appointment")} showByDefault>
						<Row gutter={12}>
							<Col sm={12}>
								<div className="appointment-input date">
									<label>{lang("Date:")} </label>
									<DatePicker
										disabled={!this.canEdit}
										className="appointment-date"
										placeholder={lang("Select a date...")}
										value={
											new Date(
												this.props.appointment!.date
											)
										}
										onSelectDate={date => {
											if (date) {
												this.props.appointment!.setDate(
													date.getTime()
												);
											}
										}}
										formatDate={d =>
											dateUtils.unifiedDateFormat(d || 0)
										}
									/>
									<p className="insight">
										{lang("With")}{" "}
										<span
											className={
												"num-" +
												this.otherAppointmentsNumber
											}
										>
											{this.otherAppointmentsNumber}
										</span>{" "}
										{lang("other appointment")}
									</p>
								</div>
							</Col>
							<Col sm={12}>
								<div className="appointment-input time">
									<label>
										{lang("Time:")}{" "}
										{this.props.appointment!.formattedTime}
									</label>
									<Row gutter={12}>
										<Slider
											min={this.props.appointment!.dateFloor.getTime()}
											max={
												this.props.appointment!.dateFloor.getTime() +
												1000 * 60 * 60 * 23.5
											}
											value={this.props.appointment!.date}
											step={1000 * 60 * 30}
											onChange={val => {
												if (
													val >
													this.props.appointment!.dateFloor.getTime()
												) {
													this.props.appointment!.date = val;
												}
											}}
											showValue={false}
											disabled={!this.canEdit}
										/>
									</Row>
								</div>
							</Col>
						</Row>
						<div className="appointment-input date">
							<label>{lang("Operating Staff:")} </label>
							{staffData.staffMembers.list
								.filter(staff => staff.operates)
								.map(staff => {
									const checked =
										this.props.appointment!.staffID.indexOf(
											staff._id
										) > -1;
									return (
										<Checkbox
											key={staff._id}
											label={staff.name}
											disabled={
												!this.canEdit ||
												(!checked &&
													staff.onDuty.indexOf(
														new Date(
															this.props.appointment!.date
														).getDay()
													) === -1)
											}
											checked={checked}
											onChange={(ev, isChecked) => {
												if (isChecked) {
													this.props.appointment!.staffID.push(
														staff._id
													);
												} else {
													this.props.appointment!.staffID.splice(
														this.props.appointment!.staffID.indexOf(
															staff._id
														),
														1
													);
												}
												this.props.appointment!
													.triggerUpdate++;
											}}
										/>
									);
								})}
						</div>
					</Section>

					<Section title={lang("Case Details")} showByDefault>
						<TextField
							multiline
							disabled={!this.canEdit}
							label={lang("Details") + ":"}
							value={this.props.appointment!.notes}
							onChanged={value => {
								this.props.appointment!.notes = value;
							}}
						/>
						<br />
						<Row gutter={12}>
							<Col sm={12}>
								<div className="appointment-input treatment">
									<Dropdown
										label={lang("Treatment") + ":"}
										disabled={!this.canEdit}
										className="treatment-type"
										selectedKey={
											this.props.appointment!.treatmentID
										}
										options={this.treatmentOptions
											.sort((a, b) =>
												a.type.localeCompare(b.type)
											)
											.map(tr => {
												return {
													key: tr._id,
													text: tr.type
												};
											})}
										onChanged={newValue => {
											this.props.appointment!.treatmentID = newValue.key.toString();
										}}
									/>
								</div>
							</Col>
							<Col sm={12}>
								<div className="appointment-input units-number">
									<TextField
										label={lang("Units number") + ":"}
										disabled={!this.canEdit}
										type="number"
										value={this.props.appointment!.units.toString()}
										onChanged={newValue => {
											this.props.appointment!.units = Number(
												newValue
											);
										}}
									/>
								</div>
							</Col>
							<Col span={24}>
								{" "}
								<div className="appointment-input involved-teeth">
									<label>{lang("Involved Teeth")}: </label>
									<TagInput
										disabled={!this.canEdit}
										placeholder={
											lang("Enter tooth number") + "..."
										}
										value={this.props.appointment!.involvedTeeth.map(
											x => ({
												key: x.toString(),
												text: x.toString()
											})
										)}
										strict={true}
										options={patientsData.ISOTeethArr.map(
											x => {
												return {
													key: x.toString(),
													text: x.toString()
												};
											}
										)}
										formatText={x =>
											`${x.toString()} - ${
												convert(Number(x)).Palmer
											}`
										}
										onChange={newValue => {
											this.props.appointment!.involvedTeeth = newValue.map(
												x => Number(x.key)
											);
										}}
									/>
								</div>
							</Col>
						</Row>

						{settingsData.settings.getSetting(
							"module_prescriptions"
						) ? (
							<div>
								<hr className="appointment-hr" />
								<div className="appointment-input prescription">
									<label>{lang("Prescription")}: </label>
									<TagInput
										disabled={!this.canEdit}
										className="prescription"
										value={this.props.appointment!.prescriptions.map(
											x => ({
												key: x.id,
												text: x.prescription
											})
										)}
										options={prescriptionsData.prescriptions.list.map(
											this.prescriptionToTagInput
										)}
										onChange={newValue => {
											this.props.appointment!.prescriptions = newValue.map(
												x => ({
													id: x.key,
													prescription: x.text
												})
											);
										}}
										strict={true}
										placeholder={
											lang("Enter prescription") + "..."
										}
									/>
								</div>

								<div id="prescription-items">
									<div className="print-heading">
										<h2>{API.user.currentUser.name}</h2>
										<hr />
										<h3>
											Patient:{" "}
											{
												this.props.appointment!.patient
													.name
											}
										</h3>
										<Row>
											<Col span={12}>
												<h4>
													Age:{" "}
													{
														this.props.appointment!
															.patient.age
													}
												</h4>
											</Col>
											<Col span={12}>
												<h4>
													Gender:{" "}
													{this.props.appointment!
														.patient.gender
														? "Female"
														: "Male"}
												</h4>
											</Col>
										</Row>
										<hr />
									</div>
									{this.props.appointment!.prescriptions.map(
										item => {
											return (
												<Row key={item.id}>
													<Col
														span={20}
														className="m-b-5"
													>
														<ProfileSquared
															text={
																item.prescription.split(
																	":"
																)[0]
															}
															onRenderInitials={() => (
																<Icon iconName="pill" />
															)}
															subText={
																item.prescription.split(
																	":"
																)[1]
															}
														/>
													</Col>
													<Col
														span={4}
														style={{
															textAlign: "right"
														}}
													>
														{this.canEdit ? (
															<IconButton
																iconProps={{
																	iconName:
																		"delete"
																}}
																onClick={() => {
																	this.props.appointment!.prescriptions = this.props.appointment!.prescriptions.filter(
																		x =>
																			x.id !==
																			item.id
																	);
																}}
															/>
														) : (
															""
														)}
													</Col>
												</Row>
											);
										}
									)}
								</div>

								{this.props.appointment!.prescriptions
									.length ? (
									<PrimaryButton onClick={print}>
										{lang("Print Prescription")}
									</PrimaryButton>
								) : (
									""
								)}
							</div>
						) : (
							""
						)}
					</Section>

					<Section showByDefault title={lang("Expenses & Price")}>
						<Row gutter={12}>
							<Col sm={12}>
								{settingsData.settings.getSetting(
									"time_tracking"
								) ? (
									<div className="appointment-input time">
										<label>
											{lang(
												"Time (Hours, minutes, seconds)"
											)}
										</label>
										<TextField
											className="time-input hours"
											type="number"
											disabled={!this.canEdit}
											ref={el =>
												el
													? (this.timerInput[0] = el)
													: ""
											}
											value={
												this.formatMillisecondsToTime(
													this.props.appointment!.time
												).hours
											}
											onChanged={() =>
												this.manuallyUpdateTime()
											}
										/>
										<TextField
											className="time-input minutes"
											type="number"
											disabled={!this.canEdit}
											ref={el =>
												el
													? (this.timerInput[1] = el)
													: ""
											}
											value={
												this.formatMillisecondsToTime(
													this.props.appointment!.time
												).minutes
											}
											onChanged={() =>
												this.manuallyUpdateTime()
											}
										/>
										<TextField
											className="time-input seconds"
											type="number"
											disabled={!this.canEdit}
											ref={el =>
												el
													? (this.timerInput[2] = el)
													: ""
											}
											value={
												this.formatMillisecondsToTime(
													this.props.appointment!.time
												).seconds
											}
											onChanged={() => {
												this.manuallyUpdateTime();
											}}
										/>
										{this.props.appointment!.timer ? (
											<PrimaryButton
												iconProps={{
													iconName: "Timer"
												}}
												disabled={!this.canEdit}
												className="appendage stop"
												text={lang("Stop")}
												onClick={() => {
													const timer = this.props
														.appointment!.timer;
													if (timer) {
														clearInterval(timer);
													}
													this.props.appointment!.timer = null;
												}}
											/>
										) : (
											<PrimaryButton
												iconProps={{
													iconName: "Timer"
												}}
												disabled={!this.canEdit}
												className="appendage"
												text={lang("Start")}
												onClick={() => {
													const i = appointments.getIndexByID(
														this.props.appointment!
															._id
													);
													const appointment =
														appointments.list[i];
													this.props.appointment!.timer = window.setInterval(
														() => {
															appointment.time =
																appointment.time +
																1000;
														},
														1000
													);
												}}
											/>
										)}
										<p className="payment-insight">
											<Label
												text={
													lang("Time value") +
													": " +
													settingsData.settings.getSetting(
														"currencySymbol"
													) +
													round(
														this.props.appointment!
															.spentTimeValue
													).toString()
												}
												type={LabelType.info}
											/>
											<br />
											<Label
												text={
													lang("Expenses") +
													": " +
													settingsData.settings.getSetting(
														"currencySymbol"
													) +
													round(
														this.props.appointment!
															.expenses
													).toString()
												}
												type={LabelType.info}
											/>
										</p>
									</div>
								) : (
									""
								)}
							</Col>
							<Col sm={24}>
								<div className="appointment-input paid">
									<Row gutter={12}>
										<Col sm={8}>
											<TextField
												type="number"
												disabled={!this.canEdit}
												label={lang("Final Price")}
												value={this.props.appointment!.finalPrice.toString()}
												onChanged={newVal => {
													this.props.appointment!.finalPrice = Number(
														newVal
													);
												}}
												prefix={settingsData.settings.getSetting(
													"currencySymbol"
												)}
											/>
										</Col>
										<Col sm={8}>
											<TextField
												type="number"
												disabled={!this.canEdit}
												label={lang("Paid Amount")}
												value={this.props.appointment!.paidAmount.toString()}
												onChanged={newVal => {
													this.props.appointment!.paidAmount = Number(
														newVal
													);
												}}
												prefix={settingsData.settings.getSetting(
													"currencySymbol"
												)}
											/>
										</Col>
										<Col sm={8}>
											<TextField
												type="number"
												disabled={true}
												label={
													this.props.appointment!
														.outstandingAmount
														? lang(
																"Outstanding Amount"
														  )
														: this.props
																.appointment!
																.overpaidAmount
														? lang(
																"Overpaid Amount"
														  )
														: lang(
																"Outstanding Amount"
														  )
												}
												value={
													this.props.appointment!
														.outstandingAmount
														? this.props.appointment!.outstandingAmount.toString()
														: this.props
																.appointment!
																.overpaidAmount
														? this.props.appointment!.overpaidAmount.toString()
														: this.props.appointment!.outstandingAmount.toString()
												}
												prefix={settingsData.settings.getSetting(
													"currencySymbol"
												)}
											/>
										</Col>
									</Row>
									<p className="payment-insight">
										<Label
											text={
												lang("Profit") +
												": " +
												settingsData.settings.getSetting(
													"currencySymbol"
												) +
												round(
													this.props.appointment!
														.profit
												).toString()
											}
											type={LabelType.success}
										/>
										<br />
										<Label
											text={
												lang("Profit percentage") +
												": " +
												round(
													this.props.appointment!
														.profitPercentage * 100
												).toString() +
												"%"
											}
											type={LabelType.success}
										/>
									</p>
								</div>
							</Col>
						</Row>
						<Row gutter={12}>
							<Col sm={24}>
								<Toggle
									defaultChecked={
										this.props.appointment!.isDone
									}
									onText={lang("Done")}
									offText={lang("Not Done")}
									disabled={!this.canEdit}
									onChanged={newVal => {
										this.props.appointment!.isDone = newVal;
									}}
								/>
							</Col>
						</Row>
					</Section>

					<br />

					{this.canEdit ? (
						<PrimaryButton
							className="delete"
							iconProps={{
								iconName: "delete"
							}}
							text={lang("Delete")}
							onClick={() => {
								const appointment = this.props.appointment;
								appointments.deleteModal(appointment!._id);
								this.props.onDelete();
							}}
						/>
					) : (
						""
					)}

					<br />
					<br />
					<br />
				</div>
			</Panel>
		) : (
			<div />
		);
	}
	formatMillisecondsToTime(ms: number) {
		const msInSecond = 1000;
		const msInMinute = msInSecond * 60;
		const msInHour = msInMinute * 60;
		const hours = Math.floor(ms / msInHour);
		const minutes = Math.floor((ms % msInHour) / msInMinute);
		const seconds = Math.floor(((ms % msInHour) % msInMinute) / msInSecond);
		return {
			hours: padWithZero(hours),
			minutes: padWithZero(minutes),
			seconds: padWithZero(seconds)
		};
		function padWithZero(n: number) {
			return n > 9 ? n.toString() : "0" + n.toString();
		}
	}
	manuallyUpdateTime() {
		const msInSecond = 1000;
		const msInMinute = msInSecond * 60;
		const msInHour = msInMinute * 60;
		const hours = Number(this.timerInput[0].value);
		const minutes = Number(this.timerInput[1].value);
		const seconds = Number(this.timerInput[2].value);
		if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
			return;
		}
		this.props.appointment!.time =
			hours * msInHour + minutes * msInMinute + seconds * msInSecond;
	}
	prescriptionToTagInput(p: prescriptionsData.PrescriptionItem) {
		return {
			key: p._id,
			text: `${p.name}: ${p.doseInMg}mg ${p.timesPerDay}X${
				p.unitsPerTime
			} ${prescriptionsData.itemFormToString(p.form)}`
		};
	}
}
