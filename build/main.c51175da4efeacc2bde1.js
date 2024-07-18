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

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-onpoint/./src/css/index.css?");

/***/ }),

/***/ "./src/css/slide-1.css":
/*!*****************************!*\
  !*** ./src/css/slide-1.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-onpoint/./src/css/slide-1.css?");

/***/ }),

/***/ "./src/css/slide-2.css":
/*!*****************************!*\
  !*** ./src/css/slide-2.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-onpoint/./src/css/slide-2.css?");

/***/ }),

/***/ "./src/css/slide-3.css":
/*!*****************************!*\
  !*** ./src/css/slide-3.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-onpoint/./src/css/slide-3.css?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pop_up__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pop-up */ \"./src/js/pop-up.js\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_slide_1_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/slide-1.css */ \"./src/css/slide-1.css\");\n/* harmony import */ var _css_slide_2_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/slide-2.css */ \"./src/css/slide-2.css\");\n/* harmony import */ var _css_slide_3_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/slide-3.css */ \"./src/css/slide-3.css\");\n// import './pagination';\r\n// import './swiper.js';\r\n// import { setEvents } from './swiper';\r\n\r\n\r\n\r\n\r\n\r\n\r\n// window.addEventListener('DOMContentLoaded', setEvents);\r\nwindow.addEventListener('DOMContentLoaded', _pop_up__WEBPACK_IMPORTED_MODULE_0__.renderList);\r\n\n\n//# sourceURL=webpack://test-onpoint/./src/js/index.js?");

/***/ }),

/***/ "./src/js/pop-up.js":
/*!**************************!*\
  !*** ./src/js/pop-up.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defaultValue: () => (/* binding */ defaultValue),\n/* harmony export */   renderList: () => (/* binding */ renderList)\n/* harmony export */ });\nconst listItemsContent = [\r\n  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',\r\n  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',\r\n  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',\r\n  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',\r\n  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',\r\n  'Lorem ipsum dolor sit amet consectetur adipisicing elit.',\r\n];\r\n\r\nconst partString = '0';\r\nconst increment = 1;\r\nconst count = 3;\r\nconst defaultValue = 0;\r\nconst empty = '';\r\n\r\nlet start = 0;\r\nlet end = 3;\r\n\r\nconst list = document.querySelector('.list');\r\n\r\nconst arrowButtons = document.querySelectorAll('.pagination_button-arrow');\r\nconst leftCircle = document.getElementById('left');\r\nconst rightCircle = document.getElementById('right');\r\n\r\nconst openPopUpButton = document.querySelector('.slider-3__cards_button');\r\nconst popUpWrapper = document.querySelector('.slider-3__pop-up-wrapper');\r\nconst closePopUpButton = document.querySelector(\r\n  '.slider-3__pop-up_content_close-button'\r\n);\r\nconst openPopUpClass = 'wrapper-open';\r\n\r\nopenPopUpButton.addEventListener('click', () => {\r\n  popUpWrapper.classList.add(openPopUpClass);\r\n\r\n  openPopUpButton.classList.add('button-hidden');\r\n});\r\n\r\nclosePopUpButton.addEventListener('click', () => {\r\n  popUpWrapper.classList.remove(openPopUpClass);\r\n\r\n  openPopUpButton.classList.remove('button-hidden');\r\n});\r\n\r\narrowButtons.forEach((btn) => {\r\n  btn.addEventListener('click', () => {\r\n    const currentList = createElements(listItemsContent);\r\n\r\n    if (btn.classList.contains('right')) {\r\n      if (currentList.length === end) {\r\n        start = currentList.length - count;\r\n        end = currentList.length;\r\n      } else {\r\n        start = start + count;\r\n        end = end + count;\r\n      }\r\n\r\n      if (leftCircle.classList.contains('active')) {\r\n        rightCircle.classList.add('active');\r\n        leftCircle.classList.remove('active');\r\n      }\r\n    } else {\r\n      if (start <= 0) return (start = defaultValue);\r\n      if (end <= 3) return (end = count);\r\n\r\n      start = start - count;\r\n      end = end - count;\r\n\r\n      if (rightCircle.classList.contains('active')) {\r\n        leftCircle.classList.add('active');\r\n        rightCircle.classList.remove('active');\r\n      }\r\n    }\r\n\r\n    renderList();\r\n  });\r\n});\r\n\r\nfunction createElements(arr) {\r\n  const elements = [];\r\n\r\n  arr.forEach((elem, index) => {\r\n    const li = document.createElement('li');\r\n    const span = document.createElement('span');\r\n\r\n    span.textContent = partString + (index + increment);\r\n    li.textContent = elem;\r\n\r\n    li.prepend(span);\r\n\r\n    elements.push(li);\r\n  });\r\n\r\n  return elements;\r\n}\r\n\r\nfunction sliceList(arr, start, end) {\r\n  return arr.slice(start, end);\r\n}\r\n\r\nfunction renderList() {\r\n  const currentList = createElements(listItemsContent);\r\n\r\n  list.innerHTML = empty;\r\n\r\n  const slicedList = sliceList(currentList, start, end);\r\n  slicedList.forEach((elem) => list.append(elem));\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://test-onpoint/./src/js/pop-up.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;