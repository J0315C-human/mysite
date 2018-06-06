/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ \"./src/module.ts\");\n\r\nvar container = document.getElementById('root');\r\nvar letters = [];\r\nvar letterWidth = 16;\r\nvar letterHeight = 27;\r\nvar globals = {\r\n    nCols: 0,\r\n    nRows: 0,\r\n};\r\nvar getColor = function (row, col) {\r\n    var angle = Math.floor((col / globals.nCols) * 360);\r\n    var lightness = Math.floor((row / globals.nRows) * 100);\r\n    return \"hsl(\" + angle + \",100%, \" + lightness + \"%)\";\r\n};\r\nvar setGlobals = function () {\r\n    globals.nCols = Math.floor(container.clientWidth / letterWidth);\r\n    globals.nRows = Math.floor(container.clientHeight / letterHeight);\r\n};\r\nvar fillLetters = function () {\r\n    container.innerHTML = '';\r\n    for (var _i = 0, letters_1 = letters; _i < letters_1.length; _i++) {\r\n        var i = letters_1[_i];\r\n        letters.pop();\r\n    }\r\n    for (var row = 0; row < globals.nRows; row++) {\r\n        var thisRow = [];\r\n        var rowElement = document.createElement('div');\r\n        rowElement.classList.add('letterRow');\r\n        for (var col = 0; col < globals.nCols; col++) {\r\n            var ltr = Object(_module__WEBPACK_IMPORTED_MODULE_0__[\"getLetter\"])(String.fromCharCode(col + 65), getColor(row, col));\r\n            thisRow.push({ el: ltr });\r\n            rowElement.appendChild(ltr);\r\n        }\r\n        letters.push(thisRow);\r\n        container.appendChild(rowElement);\r\n    }\r\n};\r\nvar update = function () {\r\n    var prevNCols = globals.nCols;\r\n    var prevNRows = globals.nRows;\r\n    setGlobals();\r\n    if (globals.nCols === prevNCols && globals.nRows === prevNRows) {\r\n        return;\r\n    }\r\n    fillLetters();\r\n};\r\nupdate();\r\nwindow.onresize = update;\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/module.ts":
/*!***********************!*\
  !*** ./src/module.ts ***!
  \***********************/
/*! exports provided: getLetter, getRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLetter\", function() { return getLetter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getRow\", function() { return getRow; });\nvar getLetter = function (letter, color) {\r\n    var d = document.createElement('div');\r\n    d.classList.add('letter');\r\n    d.textContent = letter;\r\n    d.style.color = color;\r\n    return d;\r\n};\r\nvar getRow = function () {\r\n    var r = document.createElement('div');\r\n    r.classList.add('letterRow');\r\n    return r;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/module.ts?");

/***/ })

/******/ });