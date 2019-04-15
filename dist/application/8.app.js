(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/modules/appointments/components/page.calendar.tsx":
/*!***************************************************************!*\
  !*** ./src/modules/appointments/components/page.calendar.tsx ***!
  \***************************************************************/
/*! exports provided: CalendarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CalendarPage\", function() { return CalendarPage; });\n/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ \"./node_modules/tslib/tslib.es6.js\");\n/* harmony import */ var _common_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @common-components */ \"./src/common-components/index.ts\");\n/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core */ \"./src/core/index.ts\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules */ \"./src/modules/index.ts\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\n/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mobx */ \"./node_modules/mobx/lib/mobx.module.js\");\n/* harmony import */ var mobx_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mobx-react */ \"./node_modules/mobx-react/index.module.js\");\n/* harmony import */ var office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! office-ui-fabric-react */ \"./node_modules/office-ui-fabric-react/lib/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nlet CalendarPage = class CalendarPage extends react__WEBPACK_IMPORTED_MODULE_8__[\"Component\"] {\n    constructor() {\n        super(...arguments);\n        this.filter = \"\";\n        this.appointment = null;\n        this.showAll = true;\n    }\n    componentDidMount() {\n        this.unifyHeight();\n        const dateString = _core__WEBPACK_IMPORTED_MODULE_2__[\"router\"].currentLocation.split(\"/\")[1];\n        if (!dateString) {\n            return;\n        }\n        const dateArray = dateString.split(/\\W/);\n        _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedYear = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(dateArray[0]);\n        _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedMonth = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(dateArray[1]) - 1;\n        _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedDay = Object(_utils__WEBPACK_IMPORTED_MODULE_4__[\"num\"])(dateArray[2]);\n    }\n    componentDidUpdate() {\n        this.unifyHeight();\n    }\n    unifyHeight() {\n        const parent = document.getElementById(\"full-day-cols\");\n        if (!parent) {\n            return;\n        }\n        const els = document.getElementsByClassName(\"full-day-col\");\n        let largest = 0;\n        for (let index = 0; index < els.length; index++) {\n            const height = els[index].clientHeight;\n            if (height > largest) {\n                largest = height;\n            }\n        }\n        for (let index = 0; index < els.length; index++) {\n            els[index].style.minHeight = largest ? largest + \"px\" : \"auto\";\n        }\n    }\n    render() {\n        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"calendar-component container-fluid\" },\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"selector year-selector\" },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, [\n                    _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].currentYear - 2,\n                    _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].currentYear - 1,\n                    _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].currentYear,\n                    _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].currentYear + 1\n                ].map(year => {\n                    return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { key: year, span: 6, className: \"centered\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"a\", { onClick: () => {\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedYear = year;\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedMonth = 0;\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedDay = 1;\n                            }, className: (_modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedYear === year\n                                ? \"selected\"\n                                : \"\") +\n                                (_modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].currentYear === year\n                                    ? \" current\"\n                                    : \"\") }, year)));\n                }))),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"selector month-selector\" },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, _utils__WEBPACK_IMPORTED_MODULE_4__[\"dateNames\"].monthsShort().map((monthShort, index) => {\n                    return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { key: monthShort, sm: 2, xs: 4, className: \"centered\" },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"a\", { onClick: () => {\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedMonth = index;\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedDay = 1;\n                            }, className: (_modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedMonth === index\n                                ? \"selected\"\n                                : \"\") +\n                                (_modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].currentMonth === index &&\n                                    _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].currentYear ===\n                                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedYear\n                                    ? \" current\"\n                                    : \"\") }, monthShort)));\n                }))),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"selector day-selector\" },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"day-selector-wrapper\" },\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null, _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedMonthDays.map(day => {\n                        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { key: day.dateNum, onClick: () => {\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedDay = day.dateNum;\n                                setTimeout(() => {\n                                    scroll(0, this.findPos(document.getElementById(\"day_\" + day.dateNum)));\n                                }, 0);\n                            }, className: \"day-col\" +\n                                (_modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedDay ===\n                                    day.dateNum\n                                    ? \" selected\"\n                                    : \"\") +\n                                (_core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.onDutyDays.indexOf(day.weekDay.dayLiteral) === -1\n                                    ? \" holiday\"\n                                    : \"\") +\n                                (day.weekDay.isWeekend\n                                    ? \" weekend\"\n                                    : \"\") },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"day-name\" }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(day.weekDay.dayLiteralShort\n                                .substr(0, 2)\n                                .toUpperCase())),\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"a\", { className: \"day-number info-row\" +\n                                    (day.dateNum ===\n                                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].currentDay &&\n                                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].currentMonth ===\n                                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedMonth &&\n                                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedYear ===\n                                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].currentYear\n                                        ? \" current\"\n                                        : \"\") }, day.dateNum)));\n                    })),\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", null, _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedMonthDays.map(day => {\n                        const number = _modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"].appointmentsForDay(_modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedYear, _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedMonth + 1, day.dateNum, undefined, this.showAll\n                            ? undefined\n                            : _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser._id).length;\n                        return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { key: day.dateNum, onClick: () => {\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedDay = day.dateNum;\n                            }, className: \"day-col\" +\n                                (_modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedDay ===\n                                    day.dateNum\n                                    ? \" selected\"\n                                    : \"\") +\n                                (_core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.onDutyDays.indexOf(day.weekDay.dayLiteral) === -1\n                                    ? \" holiday\"\n                                    : \"\") +\n                                (day.weekDay.isWeekend\n                                    ? \" weekend\"\n                                    : \"\") },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"info-row appointments-num num-\" +\n                                    number }, number)));\n                    })))),\n            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"week-view\" },\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"filters\" },\n                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null,\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { sm: 12, md: 6, xs: 24 },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Toggle\"], { defaultChecked: this.showAll, onText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"All appointments\"), offText: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"My appointments only\"), onChange: (ev, newValue) => {\n                                    this.showAll = newValue;\n                                } })),\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], { sm: 12, md: 18, xs: 0, className: \"filter\" },\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"TextField\"], { placeholder: Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(\"Type to filter\"), onChange: (ev, newVal) => (this.filter = newVal) })))),\n                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { id: \"full-day-cols\" }, _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedWeekDays.map(day => {\n                    return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { key: day.dateNum, id: \"day\" + \"_\" + day.dateNum, className: \"full-day-col\" +\n                            (_core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser.onDutyDays.indexOf(day.weekDay.dayLiteral) === -1\n                                ? \" holiday\"\n                                : \"\") +\n                            (_modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedDay === day.dateNum\n                                ? \" selected\"\n                                : \"\"), onClick: () => {\n                            _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedDay = day.dateNum;\n                        }, style: {\n                            width: (100 /\n                                _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedWeekDays.length).toString() + \"%\"\n                        } },\n                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"h4\", null,\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"b\", null, day.dateNum),\n                            \"\\u00A0\\u00A0\\u00A0\",\n                            react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"span\", { className: \"day-name\" }, Object(_core__WEBPACK_IMPORTED_MODULE_2__[\"text\"])(day.weekDay.dayLiteral))),\n                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"]\n                            .appointmentsForDay(_modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedYear, _modules__WEBPACK_IMPORTED_MODULE_3__[\"calendar\"].selectedMonth + 1, day.dateNum, this.filter, this.showAll\n                            ? undefined\n                            : _core__WEBPACK_IMPORTED_MODULE_2__[\"user\"].currentUser._id)\n                            .sort((a, b) => a.date - b.date)\n                            .map(appointment => {\n                            return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { key: appointment._id, className: \"appointment\", onClick: () => {\n                                    this.appointment =\n                                        _modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"].list[_modules__WEBPACK_IMPORTED_MODULE_3__[\"appointments\"].getIndexByID(appointment._id)];\n                                } },\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"time\" }, appointment.formattedTime),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { className: \"m-b-5\" },\n                                    react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"ProfileSquaredComponent\"], { text: appointment.treatment\n                                            ? appointment\n                                                .treatment\n                                                .type\n                                            : \"\", size: 1 })),\n                                react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_modules__WEBPACK_IMPORTED_MODULE_3__[\"PatientLinkComponent\"], { id: (appointment.patient ||\n                                        new _modules__WEBPACK_IMPORTED_MODULE_3__[\"Patient\"]())._id }),\n                                appointment.operatingStaff.map(operator => {\n                                    return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](\"div\", { key: operator._id, className: \"m-t-5 fs-11\" },\n                                        react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](office_ui_fabric_react__WEBPACK_IMPORTED_MODULE_7__[\"Icon\"], { iconName: \"Contact\" }),\n                                        \" \",\n                                        operator.name));\n                                })));\n                        })));\n                }))),\n            this.appointment ? (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](_common_components__WEBPACK_IMPORTED_MODULE_1__[\"AsyncComponent\"], { key: \"ae\", loader: () => tslib__WEBPACK_IMPORTED_MODULE_0__[\"__awaiter\"](this, void 0, void 0, function* () {\n                    const AppointmentEditorPanel = (yield __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ./appointment-editor */ \"./src/modules/appointments/components/appointment-editor.tsx\")))\n                        .AppointmentEditorPanel;\n                    return (react__WEBPACK_IMPORTED_MODULE_8__[\"createElement\"](AppointmentEditorPanel, { appointment: this.appointment, onDismiss: () => (this.appointment = null), onDelete: () => (this.appointment = null) }));\n                }) })) : (\"\")));\n    }\n    findPos(obj) {\n        let curtop = 0;\n        if (obj && obj.offsetParent) {\n            do {\n                curtop += obj.offsetTop;\n            } while ((obj = obj.offsetParent));\n            return curtop - 70;\n        }\n        return 0;\n    }\n};\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], CalendarPage.prototype, \"filter\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], CalendarPage.prototype, \"appointment\", void 0);\ntslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx__WEBPACK_IMPORTED_MODULE_5__[\"observable\"]\n], CalendarPage.prototype, \"showAll\", void 0);\nCalendarPage = tslib__WEBPACK_IMPORTED_MODULE_0__[\"__decorate\"]([\n    mobx_react__WEBPACK_IMPORTED_MODULE_6__[\"observer\"]\n], CalendarPage);\n\n\n\n//# sourceURL=webpack:///./src/modules/appointments/components/page.calendar.tsx?");

/***/ })

}]);