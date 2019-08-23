(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./src/main-components/choose-user.tsx":
/*!*********************************************!*\
  !*** ./src/main-components/choose-user.tsx ***!
  \*********************************************/
/*! exports provided: ChooseUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChooseUserComponent\", function() { return ChooseUserComponent; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobx-react.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\nlet ChooseUserComponent = class ChooseUserComponent extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.newDocName = \"\";\n    }\n    newDoc() {\n        const newDoc = _modules__WEBPACK_IMPORTED_MODULE_3__[\"staff\"].new();\n        newDoc.name = this.newDocName;\n        _modules__WEBPACK_IMPORTED_MODULE_3__[\"staff\"].add(newDoc);\n        _core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].setUser(newDoc._id);\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"login-component\" }, _modules__WEBPACK_IMPORTED_MODULE_3__[\"staff\"].docs.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { id: \"create-user\" },\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { \"data-testid\": \"new-user-name\", value: this.newDocName, onChange: (ev, v) => (this.newDocName = v), label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Register as new staff member\"), onKeyDown: ev => {\n                    if (ev.keyCode === 13) {\n                        this.newDoc();\n                    }\n                } }),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"PrimaryButton\"], { id: \"create-new-user-btn\", onClick: () => {\n                    this.newDoc();\n                }, text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Register\") }))) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { id: \"choose-user\" },\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"h3\", null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Who are you?\")),\n            _modules__WEBPACK_IMPORTED_MODULE_3__[\"staff\"].docs.map(user => (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { \"data-testid\": \"user-chooser\", className: \"m-t-5 p-5 user-chooser pointer\", onClick: () => {\n                    if (user.pin) {\n                        _core__WEBPACK_IMPORTED_MODULE_2__[\"modals\"].newModal({\n                            id: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"generateID\"])(),\n                            text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Please enter your PIN\"),\n                            onConfirm: providedPin => {\n                                if (providedPin === user.pin) {\n                                    _core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].setUser(user._id);\n                                    _core__WEBPACK_IMPORTED_MODULE_2__[\"messages\"].activeMessages = [];\n                                }\n                                else {\n                                    _core__WEBPACK_IMPORTED_MODULE_2__[\"messages\"].newMessage({\n                                        id: Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"generateID\"])(),\n                                        text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Invalid PIN provided`)\n                                    });\n                                }\n                            },\n                            input: true,\n                            showCancelButton: true,\n                            showConfirmButton: true\n                        });\n                    }\n                    else {\n                        _core__WEBPACK_IMPORTED_MODULE_2__[\"status\"].setUser(user._id);\n                    }\n                }, key: user._id, id: user._id },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileComponent\"], { size: 3, name: user.name }),\n                \" \")))))));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], ChooseUserComponent.prototype, \"newDocName\", void 0);\nChooseUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], ChooseUserComponent);\n\n\n\n//# sourceURL=webpack:///./src/main-components/choose-user.tsx?");

/***/ })

}]);