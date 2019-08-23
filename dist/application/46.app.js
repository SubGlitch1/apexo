(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[46],{

/***/ "./src/common-components/editable-list.tsx":
/*!*************************************************!*\
  !*** ./src/common-components/editable-list.tsx ***!
  \*************************************************/
/*! exports provided: EditableListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EditableListComponent\", function() { return EditableListComponent; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobx-react.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nlet EditableListComponent = class EditableListComponent extends react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.valueToAdd = \"\";\n        this.expandIndex = -1;\n    }\n    addItem() {\n        if (this.valueToAdd.replace(/\\W/, \"\").length) {\n            this.props.value.push(this.valueToAdd);\n            this.valueToAdd = \"\";\n            (this.props.onChange || (() => { }))(this.props.value);\n        }\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", null,\n            react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"Label\"], null, this.props.label),\n            react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", { className: \"elc-c\", style: this.props.style },\n                react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", { className: \"editable-list\" },\n                    react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", { className: \"input\", style: this.props.value.length\n                            ? {}\n                            : { borderBottom: \"none\" } },\n                        react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null,\n                            react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { xs: this.props.disabled ? 24 : 20, sm: this.props.disabled ? 24 : 21 },\n                                react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"input\", { placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Type here...\"), className: \"new-item-input\", style: this.props.value.length > 0\n                                        ? undefined\n                                        : { borderBottom: \"none\" }, onKeyDown: keydown => {\n                                        if (keydown.keyCode === 13) {\n                                            this.addItem();\n                                            keydown.preventDefault();\n                                        }\n                                    }, onKeyUp: keyUp => {\n                                        if (keyUp.keyCode === 13) {\n                                            this.addItem();\n                                            keyUp.preventDefault();\n                                        }\n                                    }, value: this.valueToAdd, onChange: e => (this.valueToAdd = e.target.value), disabled: this.props.disabled })),\n                            react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { xs: 4, sm: 3, style: { textAlign: \"right\" } }, this.props.disabled ? (\"\") : (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"Icon\"], { className: \"input-icon\", iconName: \"Add\", onClick: () => {\n                                    this.addItem();\n                                } }))))),\n                    this.props.value.length ? (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", { className: \"items\" },\n                        react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"DetailsList\"], { compact: true, items: [\n                                ...this.props.value.map((x, i) => [\n                                    react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", { id: i.toString() },\n                                        this.expandIndex === i ? (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", { className: \"list-item\" },\n                                            react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"TextField\"], { multiline: true, value: x, onBlur: () => (this.expandIndex = -1), disabled: this.props\n                                                    .disabled, autoFocus: true, onChange: (e, val) => {\n                                                    this.props.value[i] = val;\n                                                    (this.props\n                                                        .onChange ||\n                                                        (() => { }))(this.props\n                                                        .value);\n                                                } }))) : (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](\"div\", { className: \"el-expander\", onClick: () => {\n                                                this.expandIndex = i;\n                                            } }, x.length > 30\n                                            ? x.substr(0, 25) +\n                                                \"...\"\n                                            : x)),\n                                        react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"IconButton\"], { className: \"delete\", iconProps: {\n                                                iconName: \"trash\"\n                                            }, onClick: e => {\n                                                this.expandIndex = -1;\n                                                this.props.value.splice(i, 1);\n                                                (this.props.onChange ||\n                                                    (() => { }))(this.props.value);\n                                            }, disabled: this.props.disabled }))\n                                ])\n                            ], isHeaderVisible: false, selectionMode: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_5__[\"SelectionMode\"].none }))) : (\"\")))));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_3__[\"observable\"]\n], EditableListComponent.prototype, \"valueToAdd\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_3__[\"observable\"]\n], EditableListComponent.prototype, \"expandIndex\", void 0);\nEditableListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_4__[\"observer\"]\n], EditableListComponent);\n\n\n\n//# sourceURL=webpack:///./src/common-components/editable-list.tsx?");

/***/ })

}]);