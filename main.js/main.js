/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/countdown.js":
/*!*********************************!*\
  !*** ./js/modules/countdown.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Countdown)\n/* harmony export */ });\nclass Countdown {\n  constructor(datefuture) {\n    this.datefuture = datefuture;\n  }\n  get _actualDate() {\n    return new Date();\n  }\n  get _futureDate() {\n    return new Date(this.datefuture);\n  }\n  get _timeStampDiff() {\n    return this._futureDate.getTime() - this._actualDate.getTime();\n  }\n  get days() {\n    return Math.floor(this._timeStampDiff / (24 * 60 * 60 * 1000));\n  }\n  get hours() {\n    return Math.floor(this._timeStampDiff / (60 * 60 * 1000)) % 24;\n  }\n  get minutes() {\n    return Math.floor(this._timeStampDiff / (60 * 1000)) % 60;\n  }\n  get seconds() {\n    return Math.floor(this._timeStampDiff / 1000) % 60;\n  }\n  get total() {\n    const { days, hours, minutes, seconds } = this;\n    return {\n      days,\n      hours,\n      minutes,\n      seconds,\n    };\n  }\n}\n\n\n//# sourceURL=webpack://plugin-countdown/./js/modules/countdown.js?");

/***/ }),

/***/ "./js/scripts.js":
/*!***********************!*\
  !*** ./js/scripts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countdown.js */ \"./js/modules/countdown.js\");\n\n\nconst dataAtual = new Date();\nconst monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\n\n// take the values\nconst input = document.querySelector('#date');\nconst alertIvalid = document.querySelector('.form span');\nconst play = document.querySelector('.form .btn-play');\nconst reset = document.querySelector('.time-area .btn-reset');\nconst timeArea = document.querySelector('.time-area');\nconst form = document.querySelector('.form');\nconst daysScreen = document.querySelector('[data-time=\"day\"]');\nconst hoursScreen = document.querySelector('[data-time=\"hours\"]');\nconst minutesScreen = document.querySelector('[data-time=\"minutes\"]');\nconst secondsScreen = document.querySelector('[data-time=\"seconds\"]');\nlet clearTime = false;\nlet finaleDate;\n// clear the values\nfunction transformDates(data) {\n  const regespClear = /\\D/g;\n  const regespSelect = /(\\d{2})(\\d{2})(\\d{4})/g;\n  const dataArray = data.replace(regespClear, '').replace(regespSelect, '$1,$2,$3').split(',');\n  const dayValue = dataArray[0];\n  const month = monthArray[dataArray[1] - 1];\n  const year = dataArray[2];\n  const dateValue = `${dayValue} ${month} ${year}`;\n  return dateValue;\n}\n// validate the values\nfunction validData(data) {\n  const valid = new Date(data);\n  if (valid.getTime() > dataAtual.getTime()) {\n    alertIvalid.style.display = 'none';\n    return true;\n  } else {\n    alertIvalid.style.display = 'block';\n  }\n}\n// put the values in the api and screen\nfunction setValues(datavalue) {\n  form.style.display = 'none';\n  timeArea.style.display = 'flex';\n  let datefuture = new _modules_countdown_js__WEBPACK_IMPORTED_MODULE_0__.default(`${datavalue}`);\n  daysScreen.innerText = datefuture.days;\n  hoursScreen.innerText = datefuture.hours;\n  minutesScreen.innerText = datefuture.minutes;\n  secondsScreen.innerText = datefuture.seconds;\n  const intervalTime = setInterval(() => {\n    if (clearTime) {\n      clearInterval(intervalTime);\n    } else {\n      datefuture = new _modules_countdown_js__WEBPACK_IMPORTED_MODULE_0__.default(`${datavalue}`);\n      daysScreen.innerText = datefuture.days;\n      hoursScreen.innerText = datefuture.hours;\n      minutesScreen.innerText = datefuture.minutes;\n      secondsScreen.innerText = datefuture.seconds;\n      localStorage.Savedate = datavalue;\n    }\n  }, 1000);\n  return function resetTime() {\n    datefuture = 0;\n    input.value = '';\n    form.style.display = 'flex';\n    timeArea.style.display = 'none';\n  };\n}\n// reset the values\nfunction hendalReset(event) {\n  event.preventDefault();\n  clearTime = true;\n  localStorage.clear();\n  const reset = setValues();\n  reset();\n}\n// event data transformation\nfunction hendalCountdown(event) {\n  event.preventDefault();\n  const data = input.value;\n  const dateValue = transformDates(data);\n  const dateValid = validData(dateValue);\n  if (dateValid) {\n    finaleDate = dateValue;\n    setValues(finaleDate);\n    clearTime = false;\n  }\n}\n// reload window\nfunction initFunctions() {\n  if (localStorage.Savedate) {\n    setValues(localStorage.Savedate);\n    clearTime = false;\n  } else {\n    form.style.display = 'flex';\n  }\n  play.addEventListener('click', hendalCountdown);\n  reset.addEventListener('click', hendalReset);\n}\nwindow.addEventListener('load', initFunctions);\n\n\n//# sourceURL=webpack://plugin-countdown/./js/scripts.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/scripts.js");
/******/ 	
/******/ })()
;