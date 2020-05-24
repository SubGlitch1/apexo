(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./src/common-components/editable-list.tsx":
/*!*************************************************!*\
  !*** ./src/common-components/editable-list.tsx ***!
  \*************************************************/
/*! exports provided: EditableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditableListComponent\", function() { return EditableListComponent; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobxreact.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n\n\n\n\n\n\nlet EditableListComponent = class EditableListComponent extends react__WEBPACK_IMPORTED_MODULE_4__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.valueToAdd = \"\";\n    }\n    addItem() {\n        if (this.valueToAdd.replace(/\\W/, \"\").length) {\n            this.props.value.push(this.valueToAdd);\n            this.valueToAdd = \"\";\n            (this.props.onChange || (() => { }))(this.props.value);\n        }\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](\"div\", { className: \"elc-c\", style: this.props.style },\n            react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"Label\"], null, this.props.label),\n            react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"TextField\"], { className: \"new-item\", placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_1__[\"text\"])(\"type here\").c, onKeyDown: (keydown) => {\n                    if (keydown.keyCode === 13) {\n                        this.addItem();\n                        keydown.preventDefault();\n                    }\n                }, onKeyUp: (keyUp) => {\n                    if (keyUp.keyCode === 13) {\n                        this.addItem();\n                        keyUp.preventDefault();\n                    }\n                }, value: this.valueToAdd, onChange: (e, value) => (this.valueToAdd = value || \"\"), disabled: this.props.disabled, onRenderSuffix: () => (react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"IconButton\"], { iconProps: { iconName: \"Add\" }, disabled: !this.valueToAdd.replace(/\\W/, \"\").length, onClick: () => this.addItem(), \"data-testid\": \"add-elc-item\" })) }),\n            this.props.value.length ? (react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](\"div\", { className: \"items\" },\n                react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"DetailsList\"], { compact: true, items: [\n                        ...this.props.value.map((x, i) => [\n                            react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](\"div\", { id: i.toString() },\n                                react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](\"div\", { className: \"list-item\" },\n                                    react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"TextField\"], { multiline: true, value: x, disabled: this.props.disabled, onChange: (e, val) => {\n                                            this.props.value[i] = val;\n                                            (this.props.onChange ||\n                                                (() => { }))(this.props.value);\n                                        }, onRenderSuffix: () => {\n                                            return (react__WEBPACK_IMPORTED_MODULE_4__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"IconButton\"], { \"data-testid\": \"delete-elc-item\", iconProps: {\n                                                    iconName: \"trash\",\n                                                }, onClick: () => {\n                                                    this.props.value.splice(i, 1);\n                                                    (this.props\n                                                        .onChange ||\n                                                        (() => { }))(this.props\n                                                        .value);\n                                                }, disabled: this.props\n                                                    .disabled }));\n                                        } }))),\n                        ]),\n                    ], isHeaderVisible: false, selectionMode: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"SelectionMode\"].none }))) : (\"\")));\n    }\n};\nObject(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx__WEBPACK_IMPORTED_MODULE_2__[\"observable\"]\n], EditableListComponent.prototype, \"valueToAdd\", void 0);\nEditableListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"])([\n    mobx_react__WEBPACK_IMPORTED_MODULE_3__[\"observer\"]\n], EditableListComponent);\n\n\n\n//# sourceURL=webpack:///./src/common-components/editable-list.tsx?");

/***/ })

}]);