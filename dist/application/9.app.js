(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./src/modules/orthodontic/components/case-sheet.tsx":
/*!***********************************************************!*\
  !*** ./src/modules/orthodontic/components/case-sheet.tsx ***!
  \***********************************************************/
/*! exports provided: OrthoCaseSheetPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OrthoCaseSheetPanel\", function() { return OrthoCaseSheetPanel; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nlet OrthoCaseSheetPanel = class OrthoCaseSheetPanel extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    get canEdit() {\n        return _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.canEditOrtho;\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null,\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Extra-Oral Features`) },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Dropdown\"], { disabled: !this.canEdit, placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Lips competency\"), options: Object.keys(_modules__WEBPACK_IMPORTED_MODULE_3__[\"Lips\"]).map(x => ({\n                        key: x,\n                        text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(_modules__WEBPACK_IMPORTED_MODULE_3__[\"Lips\"][x])\n                    })), defaultSelectedKey: this.props.orthoCase.lips, onChange: (ev, has) => {\n                        this.props.orthoCase.lips = has.key;\n                    } }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Dropdown\"], { disabled: !this.canEdit, placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Facial profile\"), options: Object.keys(_modules__WEBPACK_IMPORTED_MODULE_3__[\"FacialProfile\"]).map(x => ({\n                        key: x,\n                        text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(_modules__WEBPACK_IMPORTED_MODULE_3__[\"FacialProfile\"][x])\n                    })), defaultSelectedKey: this.props.orthoCase.facialProfile, onChange: (ev, has) => {\n                        this.props.orthoCase.facialProfile = has.key;\n                    } }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Dropdown\"], { disabled: !this.canEdit, placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Oral hygiene\"), options: Object.keys(_modules__WEBPACK_IMPORTED_MODULE_3__[\"OralHygiene\"]).map(x => ({\n                        key: x,\n                        text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(_modules__WEBPACK_IMPORTED_MODULE_3__[\"OralHygiene\"][x])\n                    })), defaultSelectedKey: this.props.orthoCase.oralHygiene, onChange: (ev, has) => {\n                        this.props.orthoCase.oralHygiene = has.key;\n                    } }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { disabled: !this.canEdit, min: 0, max: 180, value: this.props.orthoCase.nasioLabialAngle.toString(), onChange: (ev, v) => {\n                        this.props.orthoCase.nasioLabialAngle = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(v);\n                    }, type: \"number\", prefix: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Nasio-labial angle`) })),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Jaw-Jaw Relationships`) },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Dropdown\"], { disabled: !this.canEdit, placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Skeletal relationship`), options: [1, 2, 3].map(n => ({\n                        key: n.toString(),\n                        text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Skeletal relationship: Class \") + n\n                    })), defaultSelectedKey: this.props.orthoCase.skeletalRelationship.toString(), onChange: (ev, n) => {\n                        this.props.orthoCase.skeletalRelationship = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(n.key);\n                    } }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Dropdown\"], { disabled: !this.canEdit, placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Molars relationship`), options: [1, 2, 3].map(n => ({\n                        key: n.toString(),\n                        text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Molars relationship: Class \") + n\n                    })), defaultSelectedKey: this.props.orthoCase.molarsRelationship.toString(), onChange: (ev, n) => {\n                        this.props.orthoCase.molarsRelationship = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(n.key);\n                    } }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Dropdown\"], { disabled: !this.canEdit, placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Canine relationship`), options: [1, 2, 3].map(n => ({\n                        key: n.toString(),\n                        text: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Canine relationship: Class \") + n\n                    })), defaultSelectedKey: this.props.orthoCase.canineRelationship.toString(), onChange: (ev, n) => {\n                        this.props.orthoCase.canineRelationship = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(n.key);\n                    } })),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Intercuspal-Interincisal Relationships`) },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { disabled: !this.canEdit, type: \"number\", prefix: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Overjet`), value: this.props.orthoCase.overJet.toString(), onChange: (ev, n) => {\n                        this.props.orthoCase.overJet = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(n);\n                    } }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { disabled: !this.canEdit, type: \"number\", prefix: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Overbite`), value: this.props.orthoCase.overBite.toString(), onChange: (ev, n) => {\n                        this.props.orthoCase.overBite = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(n);\n                    } }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"TagInputComponent\"], { disabled: !this.canEdit, strict: true, placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Cross/scissors bite\"), options: _modules__WEBPACK_IMPORTED_MODULE_3__[\"ISOTeethArr\"].map(x => {\n                        return {\n                            key: x.toString(),\n                            text: x.toString()\n                        };\n                    }), value: Array.from(this.props.orthoCase.crossScissorBite).map(x => ({\n                        key: x.toString(),\n                        text: x.toString()\n                    })), onChange: newValue => {\n                        this.props.orthoCase.crossScissorBite = newValue.map(x => Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(x.key));\n                    } })),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Upper Arch Space Analysis`) },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { disabled: !this.canEdit, type: \"number\", prefix: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Space available`), value: this.props.orthoCase.u_spaceAvailable.toString(), onChange: (ev, v) => {\n                        this.props.orthoCase.u_spaceAvailable = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(v);\n                    } }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { disabled: !this.canEdit, type: \"number\", prefix: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Space required`), value: this.props.orthoCase.u_spaceNeeded.toString(), onChange: (ev, v) => {\n                        this.props.orthoCase.u_spaceNeeded = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(v);\n                    } }),\n                this.props.orthoCase.u_crowding > 0 ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { type: \"number\", disabled: true, prefix: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Crowding`), value: this.props.orthoCase.u_crowding.toString() })) : (\"\"),\n                this.props.orthoCase.u_spacing > 0 ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { type: \"number\", disabled: true, prefix: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Spacing`), value: this.props.orthoCase.u_spacing.toString() })) : (\"\")),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Lower Arch Space Analysis`) },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { type: \"number\", prefix: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Space available`), disabled: !this.canEdit, value: this.props.orthoCase.l_spaceAvailable.toString(), onChange: (ev, v) => {\n                        this.props.orthoCase.l_spaceAvailable = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(v);\n                    } }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { type: \"number\", prefix: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Space required`), disabled: !this.canEdit, value: this.props.orthoCase.l_spaceNeeded.toString(), onChange: (ev, v) => {\n                        this.props.orthoCase.l_spaceNeeded = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(v);\n                    } }),\n                this.props.orthoCase.l_crowding > 0 ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { type: \"number\", disabled: true, prefix: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Crowding`), value: this.props.orthoCase.l_crowding.toString() })) : (\"\"),\n                this.props.orthoCase.l_spacing > 0 ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { type: \"number\", disabled: true, prefix: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Spacing`), value: this.props.orthoCase.l_spacing.toString() })) : (\"\")),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"SectionComponent\"], { title: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(`Problems`) },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"EditableListComponent\"], { disabled: !this.canEdit, label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Patient concerns\"), value: this.props.orthoCase.problemsList, onChange: v => {\n                        this.props.orthoCase.problemsList = v;\n                        this.props.orthoCase.triggerUpdate++;\n                    } }),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"br\", null),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"h3\", null, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Other Problems\")),\n                this.props.orthoCase.computedProblems.length === 0 ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBar\"], { messageBarType: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"MessageBarType\"].info }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"The case sheet of this patient does not show any problems that needs orthodontic treatment\"))) : (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"DetailsList\"], { constrainMode: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"ConstrainMode\"].horizontalConstrained, compact: true, items: [\n                        ...this.props.orthoCase.computedProblems.map((x, i) => [`${i + 1}. ${x}`])\n                    ], isHeaderVisible: false, selectionMode: office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"SelectionMode\"].none })))));\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"computed\"]\n], OrthoCaseSheetPanel.prototype, \"canEdit\", null);\nOrthoCaseSheetPanel = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], OrthoCaseSheetPanel);\n\n\n\n//# sourceURL=webpack:///./src/modules/orthodontic/components/case-sheet.tsx?");

/***/ })

}]);