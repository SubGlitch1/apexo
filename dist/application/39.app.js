(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./src/modules/statistics/components/chart.gender.tsx":
/*!************************************************************!*\
  !*** ./src/modules/statistics/components/chart.gender.tsx ***!
  \************************************************************/
/*! exports provided: GenderPieChart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GenderPieChart\", function() { return GenderPieChart; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/dist/mobx-react.module.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nlet GenderPieChart = class GenderPieChart extends react__WEBPACK_IMPORTED_MODULE_6__[\"Component\"] {\n    get malePercentile() {\n        return this.calculateGenderPercentile(_modules__WEBPACK_IMPORTED_MODULE_3__[\"gender\"].male);\n    }\n    get femalePercentile() {\n        return this.calculateGenderPercentile(_modules__WEBPACK_IMPORTED_MODULE_3__[\"gender\"].female);\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_6__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"PieChartComponent\"], Object.assign({ height: 400 }, {\n            data: [\n                { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Male\"), value: this.malePercentile },\n                { label: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Female\"), value: this.femalePercentile }\n            ]\n        })));\n    }\n    calculateGenderPercentile(requiredG) {\n        return this.props.selectedPatients.filter(patient => patient.gender === requiredG).length;\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], GenderPieChart.prototype, \"malePercentile\", null);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_4__[\"computed\"]\n], GenderPieChart.prototype, \"femalePercentile\", null);\nGenderPieChart = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_5__[\"observer\"]\n], GenderPieChart);\n\n\n\n//# sourceURL=webpack:///./src/modules/statistics/components/chart.gender.tsx?");

/***/ })

}]);