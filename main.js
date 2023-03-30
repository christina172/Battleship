/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    font-family: 'Coming Soon', cursive;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.header {\n    background-color: silver;\n    padding: 10px 0;\n}\n\nh1 {\n    text-align: center;\n}\n\n.main {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n    /* background-color: rgb(241, 241, 241); */\n}\n\n.boards {\n    display: flex;\n    gap: 100px;\n}\n\n.board-container {\n    display: grid;\n    grid-template: repeat(11, 1fr)/repeat(11, 1fr);\n}\n\n.board-container:last-child {\n    display: none;\n}\n\n.board-container .x {\n    text-align: center;\n}\n\n.empty {\n    grid-area: 1/1/2/2;\n}\n\n.x-1 {\n    grid-area: 1/2/2/3;\n}\n\n.x-2 {\n    grid-area: 1/3/2/4;\n}\n\n.x-3 {\n    grid-area: 1/4/2/5;\n}\n\n.x-4 {\n    grid-area: 1/5/2/6;\n}\n\n.x-5 {\n    grid-area: 1/6/2/7;\n}\n\n.x-6 {\n    grid-area: 1/7/2/8;\n}\n\n.x-7 {\n    grid-area: 1/8/2/9;\n}\n\n.x-8 {\n    grid-area: 1/9/2/10;\n}\n\n.x-9 {\n    grid-area: 1/10/2/11;\n}\n\n.x-10 {\n    grid-area: 1/11/2/12;\n}\n\n.y-11 {\n    grid-area: 2/1/3/2;\n}\n\n.y-12 {\n    grid-area: 3/1/4/2;\n}\n\n.y-13 {\n    grid-area: 4/1/5/2;\n}\n\n.y-14 {\n    grid-area: 5/1/6/2;\n}\n\n.y-15 {\n    grid-area: 6/1/7/2;\n}\n\n.y-16 {\n    grid-area: 7/1/8/2;\n}\n\n.y-17 {\n    grid-area: 8/1/9/2;\n}\n\n.y-18 {\n    grid-area: 9/1/10/2;\n}\n\n.y-19 {\n    grid-area: 10/1/11/2;\n}\n\n.y-20 {\n    grid-area: 11/1/12/2;\n}\n\n.player-board,\n.computer-board {\n    border: 1px solid rgb(0, 183, 255);\n    grid-area: 2/2/12/12;\n    width: 240px;\n    height: 240px;\n}\n\n.player,\n.computer {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    background-color: rgb(178, 233, 255);\n}\n\n.player div,\n.computer div {\n    border: 1px solid rgb(0, 183, 255);\n    box-sizing: border-box;\n    width: 24px;\n    height: 24px;\n}\n\n.computer div:hover {\n    background-color: rgb(128, 219, 255);\n}\n\n.player div[data-has-ship=\"true\"],\ndiv[data-success=\"true\"],\n.computer div[data-success=\"true\"]:hover {\n    background-color: rgb(204, 144, 117);\n}\n\ndiv[data-missed=\"true\"],\ndiv[data-around=\"true\"],\n.computer div[data-missed=\"true\"]:hover {\n    background-color: rgb(83, 206, 255);\n}\n\ndiv[data-missed=\"true\"]::before {\n    content: \"x\";\n    text-align: center;\n    color: rgb(0, 145, 202);\n    font-weight: bold;\n}\n\ndiv[data-success=\"true\"]::before {\n    content: \"x\";\n    text-align: center;\n    color: rgb(136, 83, 58);\n    font-weight: bold;\n}\n\n.player div[data-sunk=\"true\"],\n.computer div[data-sunk=\"true\"],\n.computer div[data-sunk=\"true\"]:hover {\n    background-color: rgb(255, 151, 151);\n}\n\ndiv[data-sunk=\"true\"]::before {\n    content: \"x\";\n    text-align: center;\n    color: red;\n    font-weight: bold;\n}\n\n.form-container {\n    border: 3px rgb(163, 101, 73) solid;\n    background-color: rgb(241, 217, 205);\n    border-radius: 20px;\n    padding: 10px;\n    width: 400px;\n    display: none;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nh2 {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\n.coordinate,\n.length {\n    display: flex;\n    gap: 10px;\n    font-weight: bold;\n}\n\ninput[type=\"number\"] {\n    padding: 0 2px;\n    border: 1px rgb(136, 83, 58) solid;\n    border-radius: 4px;\n}\n\nlabel {\n    font-size: 1rem;\n}\n\n.direction {\n    display: flex;\n    gap: 15px;\n}\n\n.direction p {\n    font-weight: bold;\n}\n\n.error {\n    display: none;\n    color: red;\n    font-weight: bold;\n}\n\n.form-buttons {\n    align-self: center;\n    display: flex;\n    gap: 30px;\n}\n\n.result {\n    display: none;\n    font-weight: bold;\n}\n\nbutton {\n    background-color: rgb(230, 230, 230);\n    border: 1px solid grey;\n    border-radius: 8px;\n    padding: 3px 12px;\n}\n\nbutton:hover {\n    /* background-color: rgb(240, 211, 169); */\n    background-color: silver;\n}\n\n.start,\n.restart {\n    display: none;\n}\n\n.footer {\n    background-color: silver;\n    /* background-color: rgb(104, 104, 104);\n    color: white; */\n    text-align: center;\n    padding: 5px 0;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,UAAU;IACV,SAAS;IACT,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8CAA8C;AAClD;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,kCAAkC;IAClC,oBAAoB;IACpB,YAAY;IACZ,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,sCAAsC;IACtC,oCAAoC;AACxC;;AAEA;;IAEI,kCAAkC;IAClC,sBAAsB;IACtB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;;;IAGI,oCAAoC;AACxC;;AAEA;;;IAGI,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;;;IAGI,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,kBAAkB;IAClB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,mCAAmC;IACnC,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;IACpC,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,0CAA0C;IAC1C,wBAAwB;AAC5B;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB;mBACe;IACf,kBAAkB;IAClB,cAAc;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'Coming Soon', cursive;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.header {\n    background-color: silver;\n    padding: 10px 0;\n}\n\nh1 {\n    text-align: center;\n}\n\n.main {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n    /* background-color: rgb(241, 241, 241); */\n}\n\n.boards {\n    display: flex;\n    gap: 100px;\n}\n\n.board-container {\n    display: grid;\n    grid-template: repeat(11, 1fr)/repeat(11, 1fr);\n}\n\n.board-container:last-child {\n    display: none;\n}\n\n.board-container .x {\n    text-align: center;\n}\n\n.empty {\n    grid-area: 1/1/2/2;\n}\n\n.x-1 {\n    grid-area: 1/2/2/3;\n}\n\n.x-2 {\n    grid-area: 1/3/2/4;\n}\n\n.x-3 {\n    grid-area: 1/4/2/5;\n}\n\n.x-4 {\n    grid-area: 1/5/2/6;\n}\n\n.x-5 {\n    grid-area: 1/6/2/7;\n}\n\n.x-6 {\n    grid-area: 1/7/2/8;\n}\n\n.x-7 {\n    grid-area: 1/8/2/9;\n}\n\n.x-8 {\n    grid-area: 1/9/2/10;\n}\n\n.x-9 {\n    grid-area: 1/10/2/11;\n}\n\n.x-10 {\n    grid-area: 1/11/2/12;\n}\n\n.y-11 {\n    grid-area: 2/1/3/2;\n}\n\n.y-12 {\n    grid-area: 3/1/4/2;\n}\n\n.y-13 {\n    grid-area: 4/1/5/2;\n}\n\n.y-14 {\n    grid-area: 5/1/6/2;\n}\n\n.y-15 {\n    grid-area: 6/1/7/2;\n}\n\n.y-16 {\n    grid-area: 7/1/8/2;\n}\n\n.y-17 {\n    grid-area: 8/1/9/2;\n}\n\n.y-18 {\n    grid-area: 9/1/10/2;\n}\n\n.y-19 {\n    grid-area: 10/1/11/2;\n}\n\n.y-20 {\n    grid-area: 11/1/12/2;\n}\n\n.player-board,\n.computer-board {\n    border: 1px solid rgb(0, 183, 255);\n    grid-area: 2/2/12/12;\n    width: 240px;\n    height: 240px;\n}\n\n.player,\n.computer {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    background-color: rgb(178, 233, 255);\n}\n\n.player div,\n.computer div {\n    border: 1px solid rgb(0, 183, 255);\n    box-sizing: border-box;\n    width: 24px;\n    height: 24px;\n}\n\n.computer div:hover {\n    background-color: rgb(128, 219, 255);\n}\n\n.player div[data-has-ship=\"true\"],\ndiv[data-success=\"true\"],\n.computer div[data-success=\"true\"]:hover {\n    background-color: rgb(204, 144, 117);\n}\n\ndiv[data-missed=\"true\"],\ndiv[data-around=\"true\"],\n.computer div[data-missed=\"true\"]:hover {\n    background-color: rgb(83, 206, 255);\n}\n\ndiv[data-missed=\"true\"]::before {\n    content: \"x\";\n    text-align: center;\n    color: rgb(0, 145, 202);\n    font-weight: bold;\n}\n\ndiv[data-success=\"true\"]::before {\n    content: \"x\";\n    text-align: center;\n    color: rgb(136, 83, 58);\n    font-weight: bold;\n}\n\n.player div[data-sunk=\"true\"],\n.computer div[data-sunk=\"true\"],\n.computer div[data-sunk=\"true\"]:hover {\n    background-color: rgb(255, 151, 151);\n}\n\ndiv[data-sunk=\"true\"]::before {\n    content: \"x\";\n    text-align: center;\n    color: red;\n    font-weight: bold;\n}\n\n.form-container {\n    border: 3px rgb(163, 101, 73) solid;\n    background-color: rgb(241, 217, 205);\n    border-radius: 20px;\n    padding: 10px;\n    width: 400px;\n    display: none;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nh2 {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\n.coordinate,\n.length {\n    display: flex;\n    gap: 10px;\n    font-weight: bold;\n}\n\ninput[type=\"number\"] {\n    padding: 0 2px;\n    border: 1px rgb(136, 83, 58) solid;\n    border-radius: 4px;\n}\n\nlabel {\n    font-size: 1rem;\n}\n\n.direction {\n    display: flex;\n    gap: 15px;\n}\n\n.direction p {\n    font-weight: bold;\n}\n\n.error {\n    display: none;\n    color: red;\n    font-weight: bold;\n}\n\n.form-buttons {\n    align-self: center;\n    display: flex;\n    gap: 30px;\n}\n\n.result {\n    display: none;\n    font-weight: bold;\n}\n\nbutton {\n    background-color: rgb(230, 230, 230);\n    border: 1px solid grey;\n    border-radius: 8px;\n    padding: 3px 12px;\n}\n\nbutton:hover {\n    /* background-color: rgb(240, 211, 169); */\n    background-color: silver;\n}\n\n.start,\n.restart {\n    display: none;\n}\n\n.footer {\n    background-color: silver;\n    /* background-color: rgb(104, 104, 104);\n    color: white; */\n    text-align: center;\n    padding: 5px 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEvents": () => (/* binding */ addEvents),
/* harmony export */   "createBoard": () => (/* binding */ createBoard),
/* harmony export */   "displayShip": () => (/* binding */ displayShip),
/* harmony export */   "getAttackedByComputer": () => (/* binding */ getAttackedByComputer)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/logic.js");


function createBoard(board, name) {
    // arguement is playerBoard.board, i. e. Gameboard class board property
    const field = document.createElement("div");
    field.classList.add(`${name}`);

    for (let i = 11; i < 21; i++) {
        for (let j = 1; j < 11; j++) {
            const squareDom = document.createElement("div");
            squareDom.dataset.y = i;
            squareDom.dataset.x = j;

            squareDom.dataset.hasShip = board[i - 11][j - 1].hasShip;
            squareDom.dataset.canPlaceShip = board[i - 11][j - 1].canPlaceShip;
            if (board[i - 11][j - 1].boat != undefined) {
                squareDom.dataset.length = board[i - 11][j - 1].boat.length;
            };

            field.appendChild(squareDom);
        }
    }
    return field;
};

function displayShip(x, y, length, direction, name) {
    // argument is playerBoard, i. e. Gameboard class
    if (length == 1) {
        const ship = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
        ship.dataset.hasShip = true;
        ship.dataset.length = 1
    };
    if (direction == "horizontal") {
        if (length == 2) {
            const ship1 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
            const ship2 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x + 1}"]`);
            ship1.dataset.hasShip = true;
            ship2.dataset.hasShip = true;
            ship1.dataset.length = 2;
            ship2.dataset.length = 2
        } else if (length == 3) {
            const ship1 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
            const ship2 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x + 1}"]`);
            const ship3 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x + 2}"]`);
            ship1.dataset.hasShip = true;
            ship2.dataset.hasShip = true;
            ship3.dataset.hasShip = true;
            ship1.dataset.length = 3;
            ship2.dataset.length = 3;
            ship3.dataset.length = 3;
        } else if (length == 4) {
            const ship1 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
            const ship2 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x + 1}"]`);
            const ship3 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x + 2}"]`);
            const ship4 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x + 3}"]`);
            ship1.dataset.hasShip = true;
            ship2.dataset.hasShip = true;
            ship3.dataset.hasShip = true;
            ship4.dataset.hasShip = true;
            ship1.dataset.length = 4;
            ship2.dataset.length = 4;
            ship3.dataset.length = 4;
            ship4.dataset.length = 4;
        }
    };
    if (direction == "vertical") {
        if (length == 2) {
            const ship1 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
            const ship2 = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${x}"]`);
            ship1.dataset.hasShip = true;
            ship2.dataset.hasShip = true;
            ship1.dataset.length = 2;
            ship2.dataset.length = 2
        } else if (length == 3) {
            const ship1 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
            const ship2 = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${x}"]`);
            const ship3 = document.querySelector(`.${name} div[data-y="${y + 2}"][data-x="${x}"]`);
            ship1.dataset.hasShip = true;
            ship2.dataset.hasShip = true;
            ship3.dataset.hasShip = true;
            ship1.dataset.length = 3;
            ship2.dataset.length = 3;
            ship3.dataset.length = 3;
        } else if (length == 4) {
            const ship1 = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
            const ship2 = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${x}"]`);
            const ship3 = document.querySelector(`.${name} div[data-y="${y + 2}"][data-x="${x}"]`);
            const ship4 = document.querySelector(`.${name} div[data-y="${y + 3}"][data-x="${x}"]`);
            ship1.dataset.hasShip = true;
            ship2.dataset.hasShip = true;
            ship3.dataset.hasShip = true;
            ship4.dataset.hasShip = true;
            ship1.dataset.length = 4;
            ship2.dataset.length = 4;
            ship3.dataset.length = 4;
            ship4.dataset.length = 4;
        }
    }
};

function addEvents(gameboard, name, player, playerBoard, computer) {
    // gameboard arguement playerBoard, i. e. Gameboard class object
    const squaresDom = document.querySelectorAll(`.${name} div`);

    squaresDom.forEach((square) => {
        const x = Number(square.dataset.x);
        const y = Number(square.dataset.y);

        function attack() {
            getAttacked(x, y, gameboard, name);
        };

        square.addEventListener("click", attack, { once: true });

        function getAttacked(x, y, gameboard, name) {
            gameboard.receiveAttack(x, y);
            square.dataset.missed = gameboard.board[y - 11][x - 1].missedAttack;
            square.dataset.success = gameboard.board[y - 11][x - 1].successfulAttack;
            if (gameboard.board[y - 11][x - 1].boat != undefined && gameboard.board[y - 11][x - 1].boat.sunk == true) {
                if (gameboard.board[y - 11][x - 1].boat.length == 1) {
                    square.dataset.sunk = true;
                    // checking current row for around squares
                    for (let i = 0; i < 10; i++) {
                        if (gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) {
                            if (i > 0) {
                                if (gameboard.board[y - 11][i - 1].canPlaceShip == false) {
                                    const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`);
                                    cell.dataset.around = true;
                                }
                            };
                            if (i < 9) {
                                if (gameboard.board[y - 11][i + 1].canPlaceShip == false) {
                                    const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`);
                                    cell.dataset.around = true;
                                }
                            }
                        }
                    };
                    // checking above row for around squares
                    if (y - 1 > 10) {
                        for (let i = 0; i < 10; i++) {
                            if (((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true") && gameboard.board[y - 12][i].canPlaceShip == false) {
                                const cell = document.querySelector(`.${name} div[data-y="${y - 1}"][data-x="${i + 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    };
                    // checking below row for around squares
                    if (y + 1 < 21) {
                        for (let i = 0; i < 10; i++) {
                            if (((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true") && gameboard.board[y - 10][i].canPlaceShip == false) {
                                const cell = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${i + 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    };
                } else if (gameboard.board[y - 11][x - 1].boat.direction == "horizontal") {
                    // displaying sunk ship
                    for (let i = 0; i < 10; i++) {
                        if (gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) {
                            const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`);
                            cell.dataset.sunk = true;
                        }
                    };
                    // checking current row for around squares
                    for (let i = 0; i < 10; i++) {
                        if (gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) {
                            if (i > 0) {
                                if (gameboard.board[y - 11][i - 1].canPlaceShip == false) {
                                    const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`);
                                    cell.dataset.around = true;
                                }
                            };
                            if (i < 9) {
                                if (gameboard.board[y - 11][i + 1].canPlaceShip == false) {
                                    const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`);
                                    cell.dataset.around = true;
                                }
                            }
                        }
                    };
                    // checking above row for around squares
                    if (y - 1 > 10) {
                        for (let i = 0; i < 10; i++) {
                            if (((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true") && gameboard.board[y - 12][i].canPlaceShip == false) {
                                const cell = document.querySelector(`.${name} div[data-y="${y - 1}"][data-x="${i + 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    };
                    // checking below row for around squares
                    if (y + 1 < 21) {
                        for (let i = 0; i < 10; i++) {
                            if (((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true") && gameboard.board[y - 10][i].canPlaceShip == false) {
                                const cell = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${i + 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    };
                } else if (gameboard.board[y - 11][x - 1].boat.direction == "vertical") {
                    // displaying sunk ship
                    for (let i = 0; i < 10; i++) {
                        if (gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) {
                            const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`);
                            cell.dataset.sunk = true;
                        }
                    };
                    // checking current column for around squares
                    for (let i = 0; i < 10; i++) {
                        if (gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) {
                            if (i > 0) {
                                if (gameboard.board[i - 1][x - 1].canPlaceShip == false) {
                                    const cell = document.querySelector(`.${name} div[data-y="${i + 10}"][data-x="${x}"]`);
                                    cell.dataset.around = true;
                                }
                            };
                            if (i < 9) {
                                if (gameboard.board[i + 1][x - 1].canPlaceShip == false) {
                                    const cell = document.querySelector(`.${name} div[data-y="${i + 12}"][data-x="${x}"]`);
                                    cell.dataset.around = true;
                                }
                            }
                        }
                    };
                    // checking before column for around squares
                    if (x - 1 > 0) {
                        for (let i = 0; i < 10; i++) {
                            if (((gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`).dataset.around == "true") && gameboard.board[i][x - 2].canPlaceShip == false) {
                                const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x - 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    };
                    // checking after column for around squares
                    if (x + 1 < 11) {
                        for (let i = 0; i < 10; i++) {
                            if (((gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`).dataset.around == "true") && gameboard.board[i][x].canPlaceShip == false) {
                                const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x + 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    }
                }
            };
            // const disable = document.querySelectorAll(`.${name} div[data-around="true"]`);
            // disable.forEach((square) => {
            //     square.removeEventListener("click", attack, { once: true });
            // });
            player.changeTurns(x, y, gameboard, computer);
            while (player.turn == false) {
                let target = computer.attackEnemy(playerBoard, player);
                getAttackedByComputer(target[0], target[1], playerBoard, "player");
                if (playerBoard.gameOver == true) {
                    gameIsOver("GAME OVER. You lost! All your ships are sunk.");
                    break;
                };
            };
            if (gameboard.gameOver == true) {
                gameIsOver("GAME OVER. You won! Congratulations! All of the opponent's ships are sunk.");
            };
        };
    });
};

function getAttackedByComputer(x, y, gameboard, name) {
    const square = document.querySelector(`.${name} div[data-y="${y}"][data-x="${x}"]`);
    square.dataset.missed = gameboard.board[y - 11][x - 1].missedAttack;
    square.dataset.success = gameboard.board[y - 11][x - 1].successfulAttack;
    if (gameboard.board[y - 11][x - 1].boat != undefined && gameboard.board[y - 11][x - 1].boat.sunk == true) {
        if (gameboard.board[y - 11][x - 1].boat.length == 1) {
            square.dataset.sunk = true;
            // checking current row for around squares
            for (let i = 0; i < 10; i++) {
                if (gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) {
                    if (i > 0) {
                        if (gameboard.board[y - 11][i - 1].canPlaceShip == false) {
                            const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`);
                            cell.dataset.around = true;
                        }
                    };
                    if (i < 9) {
                        if (gameboard.board[y - 11][i + 1].canPlaceShip == false) {
                            const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`);
                            cell.dataset.around = true;
                        }
                    }
                }
            };
            // checking above row for around squares
            if (y - 1 > 10) {
                for (let i = 0; i < 10; i++) {
                    if (((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true") && gameboard.board[y - 12][i].canPlaceShip == false) {
                        const cell = document.querySelector(`.${name} div[data-y="${y - 1}"][data-x="${i + 1}"]`);
                        cell.dataset.around = true;
                    }
                };
            };
            // checking below row for around squares
            if (y + 1 < 21) {
                for (let i = 0; i < 10; i++) {
                    if (((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true") && gameboard.board[y - 10][i].canPlaceShip == false) {
                        const cell = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${i + 1}"]`);
                        cell.dataset.around = true;
                    }
                };
            };
        } else if (gameboard.board[y - 11][x - 1].boat.direction == "horizontal") {
            // displaying sunk ship
            for (let i = 0; i < 10; i++) {
                if (gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) {
                    const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`);
                    cell.dataset.sunk = true;
                }
            };
            // checking current row for around squares
            for (let i = 0; i < 10; i++) {
                if (gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) {
                    if (i > 0) {
                        if (gameboard.board[y - 11][i - 1].canPlaceShip == false) {
                            const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`);
                            cell.dataset.around = true;
                        }
                    };
                    if (i < 9) {
                        if (gameboard.board[y - 11][i + 1].canPlaceShip == false) {
                            const cell = document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`);
                            cell.dataset.around = true;
                        }
                    }
                }
            };
            // checking above row for around squares
            if (y - 1 > 10) {
                for (let i = 0; i < 10; i++) {
                    if (((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true") && gameboard.board[y - 12][i].canPlaceShip == false) {
                        const cell = document.querySelector(`.${name} div[data-y="${y - 1}"][data-x="${i + 1}"]`);
                        cell.dataset.around = true;
                    }
                };
            };
            // checking below row for around squares
            if (y + 1 < 21) {
                for (let i = 0; i < 10; i++) {
                    if (((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true") && gameboard.board[y - 10][i].canPlaceShip == false) {
                        const cell = document.querySelector(`.${name} div[data-y="${y + 1}"][data-x="${i + 1}"]`);
                        cell.dataset.around = true;
                    }
                };
            };
        } else if (gameboard.board[y - 11][x - 1].boat.direction == "vertical") {
            // displaying sunk ship
            for (let i = 0; i < 10; i++) {
                if (gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) {
                    const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`);
                    cell.dataset.sunk = true;
                }
            };
            // checking current column for around squares
            for (let i = 0; i < 10; i++) {
                if (gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) {
                    if (i > 0) {
                        if (gameboard.board[i - 1][x - 1].canPlaceShip == false) {
                            const cell = document.querySelector(`.${name} div[data-y="${i + 10}"][data-x="${x}"]`);
                            cell.dataset.around = true;
                        }
                    };
                    if (i < 9) {
                        if (gameboard.board[i + 1][x - 1].canPlaceShip == false) {
                            const cell = document.querySelector(`.${name} div[data-y="${i + 12}"][data-x="${x}"]`);
                            cell.dataset.around = true;
                        }
                    }
                }
            };
            // checking before column for around squares
            if (x - 1 > 0) {
                for (let i = 0; i < 10; i++) {
                    if (((gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`).dataset.around == "true") && gameboard.board[i][x - 2].canPlaceShip == false) {
                        const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x - 1}"]`);
                        cell.dataset.around = true;
                    }
                };
            };
            // checking after column for around squares
            if (x + 1 < 11) {
                for (let i = 0; i < 10; i++) {
                    if (((gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) || document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`).dataset.around == "true") && gameboard.board[i][x].canPlaceShip == false) {
                        const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x + 1}"]`);
                        cell.dataset.around = true;
                    }
                };
            }
        }
    };
};

function gameIsOver(message) {
    const result = document.querySelector(".result");
    result.textContent = `${message}`;
    result.style.display = "block";
};



/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Player": () => (/* binding */ Player),
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "Square": () => (/* binding */ Square)
/* harmony export */ });
class Ship {
    constructor(length, direction) {
        this.length = length;
        this.direction = direction;
        this.damage = 0;
        this.sunk = false;
    }
    hit() {
        this.damage = this.damage + 1;
        return this.damage;
    }
    isSunk() {
        if (this.length > this.damage) {
            this.sunk = false;
        } else {
            this.sunk = true;
        };
        return this.sunk;
    }
};

class Gameboard {
    constructor() {
        this.board = this.#buildBoard();
        this.ships = [];
        this.gameOver = false;
    }
    #buildBoard() {
        const board = [];
        for (let i = 11; i < 21; i++) {
            const row = [];
            board.push(row);
            for (let j = 1; j < 11; j++) {
                row.push(new Square(j, i));
            }
        }
        return board;
    }
    placeShip(a, b, length, direction) {
        let x = a - 1;
        let y = b - 11;

        const startSquare = this.board[y][x];
        if (startSquare.canPlaceShip == false || startSquare.hasShip == true) {
            throw new Error("You can't place your new ship here. Ships can't overlap and must be at least one square apart from each other.")
        };

        let n = 0;
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].length == length) {
                n++;
            };
        };
        if ((length == 1 && n == 4) || (length == 2 && n == 3) || (length == 3 && n == 2) || (length == 4 && n == 1)) {
            throw new Error("You can't place another ship of this size. Please, change the length of your ship.");
        };

        let before = x - 1;
        let after = x + 1;

        let after2 = x + 2;
        let after3 = x + 3;
        let after4 = x + 4;

        let above = y - 1;
        let below = y + 1;

        let below2 = y + 2;
        let below3 = y + 3;
        let below4 = y + 4;

        if (direction == "horizontal") {
            if ((length == 2 && (after < 0 || after > 9)) || (length == 3 && (after2 < 0 || after2 > 9)) || (length == 4 && (after3 < 0 || after3 > 9))) {
                throw new Error("You can't place a ship like that. It doesn't fit the board. Please, choose another location.");
            };
            if ((length == 2 && this.board[y][after].canPlaceShip == false) || (length == 3 && (this.board[y][after].canPlaceShip == false || this.board[y][after2].canPlaceShip == false)) || (length == 4 && (this.board[y][after].canPlaceShip == false || this.board[y][after2].canPlaceShip == false || this.board[y][after3].canPlaceShip == false))) {
                throw new Error("You can't place a ship like that. It can't overlap other ships and must be at least one square apart from other ships. Please, choose another location.");
            };
        };

        if (direction == "vertical") {
            if ((length == 2 && (below < 0 || below > 9)) || (length == 3 && (below2 < 0 || below2 > 9)) || (length == 4 && (below3 < 0 || below3 > 9))) {
                throw new Error("Can't place a ship like that. It doesn't fit the board. Please, choose another location.");
            };
            if ((length == 2 && this.board[below][x].canPlaceShip == false) || (length == 3 && (this.board[below][x].canPlaceShip == false || this.board[below2][x].canPlaceShip == false)) || (length == 4 && (this.board[below][x].canPlaceShip == false || this.board[below2][x].canPlaceShip == false || this.board[below3][x].canPlaceShip == false))) {
                throw new Error("You can't place a ship like that. It can't overlap other ships and must be at least one square apart from other ships. Please, choose another location.");
            };
        };

        let ship = new Ship(length, direction);

        this.ships.push(ship);

        startSquare.boat = ship;
        startSquare.hasShip = true;

        if (above >= 0 && above <= 9) {
            if (before >= 0 && before <= 9) {
                this.board[above][before].canPlaceShip = false;
            };
            if (after >= 0 && after <= 9) {
                this.board[above][after].canPlaceShip = false;
            };
            this.board[above][x].canPlaceShip = false;
        };
        if (before >= 0 && before <= 9) {
            this.board[y][before].canPlaceShip = false;
            if (below >= 0 && below <= 9) {
                this.board[below][before].canPlaceShip = false;
            };
        };


        if (length == 1) {
            if (after >= 0 && after <= 9) {
                this.board[y][after].canPlaceShip = false;
                if (below >= 0 && below <= 9) {
                    this.board[below][after].canPlaceShip = false;
                };
            };
            if (below >= 0 && below <= 9) {
                this.board[below][x].canPlaceShip = false;
            };
        };


        if (direction == "horizontal") {
            if (length == 2) {
                this.board[y][after].boat = ship;
                this.board[y][after].hasShip = true;
                if (after2 >= 0 && after2 <= 9) {
                    if (above >= 0 && above <= 9) {
                        this.board[above][after2].canPlaceShip = false;
                    };
                    this.board[y][after2].canPlaceShip = false;
                    if (below >= 0 && below <= 9) {
                        this.board[below][after2].canPlaceShip = false;
                    };
                };
                if (below >= 0 && below <= 9) {
                    this.board[below][after].canPlaceShip = false;
                    if (after2 >= 0 && after2 <= 9) {
                        this.board[below][after2].canPlaceShip = false;
                    };
                };
            } else if (length == 3) {
                this.board[y][after].boat = ship;
                this.board[y][after2].boat = ship;
                this.board[y][after].hasShip = true;
                this.board[y][after2].hasShip = true;
                if (below >= 0 && below <= 9) {
                    this.board[below][x].canPlaceShip = false;
                    this.board[below][after].canPlaceShip = false;
                    this.board[below][after2].canPlaceShip = false;
                    if (after3 >= 0 && after3 <= 9) {
                        this.board[below][after3].canPlaceShip = false;
                    };
                };
                if (above >= 0 && above <= 9) {
                    this.board[above][after2].canPlaceShip = false;
                    if (after3 >= 0 && after3 <= 9) {
                        this.board[above][after3].canPlaceShip = false;
                    };
                };
                if (after3 >= 0 && after3 <= 9) {
                    this.board[y][after3].canPlaceShip = false;
                };
            } else if (length == 4) {
                this.board[y][after].boat = ship;
                this.board[y][after2].boat = ship;
                this.board[y][after3].boat = ship;
                this.board[y][after].hasShip = true;
                this.board[y][after2].hasShip = true;
                this.board[y][after3].hasShip = true;
                if (below >= 0 && below <= 9) {
                    this.board[below][x].canPlaceShip = false;
                    this.board[below][after].canPlaceShip = false;
                    this.board[below][after2].canPlaceShip = false;
                    this.board[below][after3].canPlaceShip = false;
                    if (after4 >= 0 && after4 <= 9) {
                        this.board[below][after4].canPlaceShip = false;
                    };
                };
                if (above >= 0 && above <= 9) {
                    this.board[above][after2].canPlaceShip = false;
                    this.board[above][after3].canPlaceShip = false;
                    if (after4 >= 0 && after4 <= 9) {
                        this.board[above][after4].canPlaceShip = false;
                    };
                };
                if (after4 >= 0 && after4 <= 9) {
                    this.board[y][after4].canPlaceShip = false;
                };
            };
        } else {
            if (length == 2) {
                this.board[below][x].boat = ship;
                this.board[below][x].hasShip = true;
                if (below2 >= 0 && below2 <= 9) {
                    if (before >= 0 && before <= 9) {
                        this.board[below2][before].canPlaceShip = false;
                    };
                    this.board[below2][x].canPlaceShip = false;
                    if (after >= 0 && after <= 9) {
                        this.board[below2][after].canPlaceShip = false;
                    };
                };
                if (after >= 0 && after <= 9) {
                    this.board[y][after].canPlaceShip = false;
                    this.board[below][after].canPlaceShip = false;
                };
            } else if (length == 3) {
                this.board[below][x].boat = ship;
                this.board[below2][x].boat = ship;
                this.board[below][x].hasShip = true;
                this.board[below2][x].hasShip = true;
                if (before >= 0 && before <= 9) {
                    this.board[below2][before].canPlaceShip = false;
                    if (below3 >= 0 && below3 <= 9) {
                        this.board[below3][before].canPlaceShip = false;
                    }
                };
                if (below3 >= 0 && below3 <= 9) {
                    this.board[below3][x].canPlaceShip = false;
                    if (after >= 0 && after <= 9) {
                        this.board[below3][after].canPlaceShip = false;
                    };
                };
                if (after >= 0 && after <= 9) {
                    this.board[y][after].canPlaceShip = false;
                    this.board[below][after].canPlaceShip = false;
                    this.board[below2][after].canPlaceShip = false;
                };
            } else if (length == 4) {
                this.board[below][x].boat = ship;
                this.board[below2][x].boat = ship;
                this.board[below3][x].boat = ship;
                this.board[below][x].hasShip = true;
                this.board[below2][x].hasShip = true;
                this.board[below3][x].hasShip = true;
                if (before >= 0 && before <= 9) {
                    this.board[below2][before].canPlaceShip = false;
                    this.board[below3][before].canPlaceShip = false;
                    if (below4 >= 0 && below4 <= 9) {
                        this.board[below4][before].canPlaceShip = false;
                    }
                };
                if (below4 >= 0 && below4 <= 9) {
                    this.board[below4][x].canPlaceShip = false;
                    if (after >= 0 && after <= 9) {
                        this.board[below4][after].canPlaceShip = false;
                    };
                };
                if (after >= 0 && after <= 9) {
                    this.board[y][after].canPlaceShip = false;
                    this.board[below][after].canPlaceShip = false;
                    this.board[below2][after].canPlaceShip = false;
                    this.board[below3][after].canPlaceShip = false;
                };
            };
        };
    };
    receiveAttack(a, b) {
        let x = a - 1;
        let y = b - 11;
        let attackedSquare = this.board[y][x];
        // if (attackedSquare.missedAttack == true || attackedSquare.successfulAttack == true) {
        //     throw new Error("This square has already been attacked");
        // };
        if (attackedSquare.hasShip == true) {
            attackedSquare.successfulAttack = true;
            attackedSquare.boat.hit();
            attackedSquare.boat.isSunk();
            this.allShipsAreSunk();
        } else {
            attackedSquare.missedAttack = true;
        };
    };
    allShipsAreSunk() {
        if (this.ships.every((element) => element.sunk == true)) {
            this.gameOver = true;
        };
    };
};

class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.hasShip = false;
        this.canPlaceShip = true;
        this.missedAttack = false;
        this.successfulAttack = false;

        this.boat = undefined;
    }
};

class Player {
    constructor() {
        this.turn = false;
        this.computerChoices = this.#findChoices();
    }
    #findChoices() {
        let array = [];
        for (let i = 11; i < 21; i++) {
            for (let j = 1; j < 11; j++) {
                let choice = [i, j];
                array.push(choice);
            }
        };
        return array;
    }
    attackEnemy(enemyBoard, opponent) {
        let coordinates = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
        let a = coordinates[1];
        let b = coordinates[0];
        let index = this.computerChoices.indexOf(coordinates);
        this.computerChoices.splice(index, 1);
        enemyBoard.receiveAttack(a, b);
        this.changeTurns(a, b, enemyBoard, opponent);
        return [a, b];
    }
    changeTurns(a, b, enemyBoard, opponent) {
        let x = a - 1;
        let y = b - 11;
        if (enemyBoard.board[y][x].missedAttack == true) {
            this.turn = false;
            opponent.turn = true;
        };
    }
};



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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/logic.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ "./src/dom.js");




const formContainer = document.querySelector(".form-container");
const form = document.querySelector("form");
const computerBoardDom = document.querySelector(".computer-board");
const comp = document.querySelector(".board-container:last-child");
const result = document.querySelector(".result");
const error = document.querySelector(".error");

let module = (function () {
    function createPlayField(playerBoard) {
        let playField = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createBoard)(playerBoard.board, "player");
        const playerBoardDom = document.querySelector(".player-board");
        playerBoardDom.appendChild(playField);
    };
    function createCompField(computerBoard) {
        let compField = (0,_dom__WEBPACK_IMPORTED_MODULE_2__.createBoard)(computerBoard.board, "computer");
        const computerBoardDom = document.querySelector(".computer-board");
        computerBoardDom.appendChild(compField);
    }
    function removePlayerField() {
        let playField = document.querySelector(".player");
        const playerBoardDom = document.querySelector(".player-board");
        playerBoardDom.removeChild(playField);
    }
    function removeFields() {
        let playField = document.querySelector(".player");
        const playerBoardDom = document.querySelector(".player-board");
        playerBoardDom.removeChild(playField);
        let compField = document.querySelector(".computer");
        const computerBoardDom = document.querySelector(".computer-board");
        computerBoardDom.removeChild(compField);
    }
    function createPlayerBoard() {
        let playerBoard = new _logic__WEBPACK_IMPORTED_MODULE_1__.Gameboard();
        return playerBoard;
    };
    function createComputerBoard() {
        let computerBoard = new _logic__WEBPACK_IMPORTED_MODULE_1__.Gameboard();
        return computerBoard;
    };
    function createPlayer() {
        let player = new _logic__WEBPACK_IMPORTED_MODULE_1__.Player();
        return player;
    };
    function createComputer() {
        let computer = new _logic__WEBPACK_IMPORTED_MODULE_1__.Player();
        return computer;
    };
    function start(playerBoard, computerBoard, player, computer) {
        (0,_dom__WEBPACK_IMPORTED_MODULE_2__.addEvents)(computerBoard, "computer", player, playerBoard, computer);
        player.turn = true;
    };
    return {
        createPlayField: createPlayField,
        createCompField: createCompField,
        removePlayerField: removePlayerField,
        removeFields: removeFields,
        createPlayerBoard: createPlayerBoard,
        createComputerBoard: createComputerBoard,
        createPlayer: createPlayer,
        createComputer: createComputer,
        start: start,
    }
})();

function placeAllShips(computerBoard) {
    computerBoard.placeShip(4, 16, 4, "horizontal");
    computerBoard.placeShip(2, 19, 3, "horizontal");
    computerBoard.placeShip(8, 11, 3, "vertical");
    computerBoard.placeShip(3, 12, 2, "horizontal");
    computerBoard.placeShip(2, 14, 2, "vertical");
    computerBoard.placeShip(9, 18, 2, "vertical");
    computerBoard.placeShip(1, 11, 1, "vertical");
    computerBoard.placeShip(6, 14, 1, "vertical");
    computerBoard.placeShip(1, 17, 1, "vertical");
    computerBoard.placeShip(6, 20, 1, "vertical");
};

const placeAShip = document.querySelector(".place-a-ship");
placeAShip.addEventListener("click", () => {
    formContainer.style.display = "block";
    placeAShip.style.display = "none";
});

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", () => {
    error.style.display = "none";
    formContainer.style.display = "none";
    placeAShip.style.display = "block";
});

const submit = document.querySelector(".submit");
submit.addEventListener("click", addShip);
function addShip(e) {
    e.preventDefault();
    const checkVal = form.checkValidity();
    form.reportValidity();
    if (checkVal) {
        const x = Number(document.getElementById("column").value);
        const y = Number(document.getElementById("row").value);
        const length = document.getElementById("length").value;
        const directions = document.getElementsByName('direction');
        let direction;
        for (let i = 0; i < directions.length; i++) {
            if (directions[i].checked) {
                direction = directions[i].value;
            }
        };
        try {
            playerBoard.placeShip(x, y, length, direction);
            (0,_dom__WEBPACK_IMPORTED_MODULE_2__.displayShip)(x, y, length, direction, "player");
            if (playerBoard.ships.length > 0) {
                restart.style.display = "block";
            };
            formContainer.style.display = "none";
            error.style.display = "none";
            placeAShip.style.display = "block";
            if (playerBoard.ships.length == 10) {
                start.style.display = "block";
                placeAShip.style.display = "none";
            };
        } catch (err) {
            error.textContent = err.message;
            error.style.display = "block";
        };
    };
};

const start = document.querySelector(".start");
start.addEventListener("click", () => {
    placeAllShips(computerBoard);
    module.createCompField(computerBoard);
    module.start(playerBoard, computerBoard, player, computer);
    comp.style.display = "grid";
    start.style.display = "none";
});

const restart = document.querySelector(".restart");
restart.addEventListener("click", () => {
    playerBoard = module.createPlayerBoard();
    computerBoard = module.createComputerBoard();
    player = module.createPlayer();
    computer = module.createComputer();

    if (computerBoardDom.hasChildNodes()) {
        module.removeFields();
    } else {
        module.removePlayerField();
    };

    module.createPlayField(playerBoard);

    comp.style.display = "none";
    restart.style.display = "none";
    start.style.display = "none";
    placeAShip.style.display = "block";
    result.style.display = "none";
});

let playerBoard = module.createPlayerBoard();
let computerBoard = module.createComputerBoard();
let player = module.createPlayer();
let computer = module.createComputer();
module.createPlayField(playerBoard);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taW5nK1Nvb24mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb21pbmcgU29vbicsIGN1cnNpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTsgKi9cXG59XFxuXFxuLmJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTEsIDFmcikvcmVwZWF0KDExLCAxZnIpO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyOmxhc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIC54IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcblxcbi54LTEge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxufVxcblxcbi54LTIge1xcbiAgICBncmlkLWFyZWE6IDEvMy8yLzQ7XFxufVxcblxcbi54LTMge1xcbiAgICBncmlkLWFyZWE6IDEvNC8yLzU7XFxufVxcblxcbi54LTQge1xcbiAgICBncmlkLWFyZWE6IDEvNS8yLzY7XFxufVxcblxcbi54LTUge1xcbiAgICBncmlkLWFyZWE6IDEvNi8yLzc7XFxufVxcblxcbi54LTYge1xcbiAgICBncmlkLWFyZWE6IDEvNy8yLzg7XFxufVxcblxcbi54LTcge1xcbiAgICBncmlkLWFyZWE6IDEvOC8yLzk7XFxufVxcblxcbi54LTgge1xcbiAgICBncmlkLWFyZWE6IDEvOS8yLzEwO1xcbn1cXG5cXG4ueC05IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEwLzIvMTE7XFxufVxcblxcbi54LTEwIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzExLzIvMTI7XFxufVxcblxcbi55LTExIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbn1cXG5cXG4ueS0xMiB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXG59XFxuXFxuLnktMTMge1xcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XFxufVxcblxcbi55LTE0IHtcXG4gICAgZ3JpZC1hcmVhOiA1LzEvNi8yO1xcbn1cXG5cXG4ueS0xNSB7XFxuICAgIGdyaWQtYXJlYTogNi8xLzcvMjtcXG59XFxuXFxuLnktMTYge1xcbiAgICBncmlkLWFyZWE6IDcvMS84LzI7XFxufVxcblxcbi55LTE3IHtcXG4gICAgZ3JpZC1hcmVhOiA4LzEvOS8yO1xcbn1cXG5cXG4ueS0xOCB7XFxuICAgIGdyaWQtYXJlYTogOS8xLzEwLzI7XFxufVxcblxcbi55LTE5IHtcXG4gICAgZ3JpZC1hcmVhOiAxMC8xLzExLzI7XFxufVxcblxcbi55LTIwIHtcXG4gICAgZ3JpZC1hcmVhOiAxMS8xLzEyLzI7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQsXFxuLmNvbXB1dGVyLWJvYXJkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE4MywgMjU1KTtcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMTIvMTI7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgaGVpZ2h0OiAyNDBweDtcXG59XFxuXFxuLnBsYXllcixcXG4uY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OCwgMjMzLCAyNTUpO1xcbn1cXG5cXG4ucGxheWVyIGRpdixcXG4uY29tcHV0ZXIgZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE4MywgMjU1KTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG59XFxuXFxuLmNvbXB1dGVyIGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDIxOSwgMjU1KTtcXG59XFxuXFxuLnBsYXllciBkaXZbZGF0YS1oYXMtc2hpcD1cXFwidHJ1ZVxcXCJdLFxcbmRpdltkYXRhLXN1Y2Nlc3M9XFxcInRydWVcXFwiXSxcXG4uY29tcHV0ZXIgZGl2W2RhdGEtc3VjY2Vzcz1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTQ0LCAxMTcpO1xcbn1cXG5cXG5kaXZbZGF0YS1taXNzZWQ9XFxcInRydWVcXFwiXSxcXG5kaXZbZGF0YS1hcm91bmQ9XFxcInRydWVcXFwiXSxcXG4uY29tcHV0ZXIgZGl2W2RhdGEtbWlzc2VkPVxcXCJ0cnVlXFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDIwNiwgMjU1KTtcXG59XFxuXFxuZGl2W2RhdGEtbWlzc2VkPVxcXCJ0cnVlXFxcIl06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJ4XFxcIjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAyKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdltkYXRhLXN1Y2Nlc3M9XFxcInRydWVcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcInhcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMTM2LCA4MywgNTgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBsYXllciBkaXZbZGF0YS1zdW5rPVxcXCJ0cnVlXFxcIl0sXFxuLmNvbXB1dGVyIGRpdltkYXRhLXN1bms9XFxcInRydWVcXFwiXSxcXG4uY29tcHV0ZXIgZGl2W2RhdGEtc3Vuaz1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTUxLCAxNTEpO1xcbn1cXG5cXG5kaXZbZGF0YS1zdW5rPVxcXCJ0cnVlXFxcIl06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJ4XFxcIjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAzcHggcmdiKDE2MywgMTAxLCA3Mykgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIxNywgMjA1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5jb29yZGluYXRlLFxcbi5sZW5ndGgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcbiAgICBib3JkZXI6IDFweCByZ2IoMTM2LCA4MywgNTgpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZGlyZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZGlyZWN0aW9uIHAge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnJlc3VsdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogM3B4IDEycHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIxMSwgMTY5KTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbn1cXG5cXG4uc3RhcnQsXFxuLnJlc3RhcnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA0LCAxMDQsIDEwNCk7XFxuICAgIGNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBOzs7SUFHSSxvQ0FBb0M7QUFDeEM7O0FBRUE7OztJQUdJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTs7O0lBR0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLGFBQWE7SUFDYixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksMENBQTBDO0lBQzFDLHdCQUF3QjtBQUM1Qjs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCO21CQUNlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taW5nK1Nvb24mZGlzcGxheT1zd2FwJyk7XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb21pbmcgU29vbicsIGN1cnNpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTsgKi9cXG59XFxuXFxuLmJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTEsIDFmcikvcmVwZWF0KDExLCAxZnIpO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyOmxhc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIC54IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcblxcbi54LTEge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxufVxcblxcbi54LTIge1xcbiAgICBncmlkLWFyZWE6IDEvMy8yLzQ7XFxufVxcblxcbi54LTMge1xcbiAgICBncmlkLWFyZWE6IDEvNC8yLzU7XFxufVxcblxcbi54LTQge1xcbiAgICBncmlkLWFyZWE6IDEvNS8yLzY7XFxufVxcblxcbi54LTUge1xcbiAgICBncmlkLWFyZWE6IDEvNi8yLzc7XFxufVxcblxcbi54LTYge1xcbiAgICBncmlkLWFyZWE6IDEvNy8yLzg7XFxufVxcblxcbi54LTcge1xcbiAgICBncmlkLWFyZWE6IDEvOC8yLzk7XFxufVxcblxcbi54LTgge1xcbiAgICBncmlkLWFyZWE6IDEvOS8yLzEwO1xcbn1cXG5cXG4ueC05IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEwLzIvMTE7XFxufVxcblxcbi54LTEwIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzExLzIvMTI7XFxufVxcblxcbi55LTExIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbn1cXG5cXG4ueS0xMiB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXG59XFxuXFxuLnktMTMge1xcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XFxufVxcblxcbi55LTE0IHtcXG4gICAgZ3JpZC1hcmVhOiA1LzEvNi8yO1xcbn1cXG5cXG4ueS0xNSB7XFxuICAgIGdyaWQtYXJlYTogNi8xLzcvMjtcXG59XFxuXFxuLnktMTYge1xcbiAgICBncmlkLWFyZWE6IDcvMS84LzI7XFxufVxcblxcbi55LTE3IHtcXG4gICAgZ3JpZC1hcmVhOiA4LzEvOS8yO1xcbn1cXG5cXG4ueS0xOCB7XFxuICAgIGdyaWQtYXJlYTogOS8xLzEwLzI7XFxufVxcblxcbi55LTE5IHtcXG4gICAgZ3JpZC1hcmVhOiAxMC8xLzExLzI7XFxufVxcblxcbi55LTIwIHtcXG4gICAgZ3JpZC1hcmVhOiAxMS8xLzEyLzI7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQsXFxuLmNvbXB1dGVyLWJvYXJkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE4MywgMjU1KTtcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMTIvMTI7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgaGVpZ2h0OiAyNDBweDtcXG59XFxuXFxuLnBsYXllcixcXG4uY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OCwgMjMzLCAyNTUpO1xcbn1cXG5cXG4ucGxheWVyIGRpdixcXG4uY29tcHV0ZXIgZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE4MywgMjU1KTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG59XFxuXFxuLmNvbXB1dGVyIGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDIxOSwgMjU1KTtcXG59XFxuXFxuLnBsYXllciBkaXZbZGF0YS1oYXMtc2hpcD1cXFwidHJ1ZVxcXCJdLFxcbmRpdltkYXRhLXN1Y2Nlc3M9XFxcInRydWVcXFwiXSxcXG4uY29tcHV0ZXIgZGl2W2RhdGEtc3VjY2Vzcz1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTQ0LCAxMTcpO1xcbn1cXG5cXG5kaXZbZGF0YS1taXNzZWQ9XFxcInRydWVcXFwiXSxcXG5kaXZbZGF0YS1hcm91bmQ9XFxcInRydWVcXFwiXSxcXG4uY29tcHV0ZXIgZGl2W2RhdGEtbWlzc2VkPVxcXCJ0cnVlXFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDIwNiwgMjU1KTtcXG59XFxuXFxuZGl2W2RhdGEtbWlzc2VkPVxcXCJ0cnVlXFxcIl06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJ4XFxcIjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAyKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdltkYXRhLXN1Y2Nlc3M9XFxcInRydWVcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcInhcXFwiO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMTM2LCA4MywgNTgpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnBsYXllciBkaXZbZGF0YS1zdW5rPVxcXCJ0cnVlXFxcIl0sXFxuLmNvbXB1dGVyIGRpdltkYXRhLXN1bms9XFxcInRydWVcXFwiXSxcXG4uY29tcHV0ZXIgZGl2W2RhdGEtc3Vuaz1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTUxLCAxNTEpO1xcbn1cXG5cXG5kaXZbZGF0YS1zdW5rPVxcXCJ0cnVlXFxcIl06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJ4XFxcIjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAzcHggcmdiKDE2MywgMTAxLCA3Mykgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIxNywgMjA1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5jb29yZGluYXRlLFxcbi5sZW5ndGgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcbiAgICBib3JkZXI6IDFweCByZ2IoMTM2LCA4MywgNTgpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZGlyZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZGlyZWN0aW9uIHAge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnJlc3VsdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogM3B4IDEycHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIxMSwgMTY5KTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbn1cXG5cXG4uc3RhcnQsXFxuLnJlc3RhcnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA0LCAxMDQsIDEwNCk7XFxuICAgIGNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBTcXVhcmUsIFBsYXllciB9IGZyb20gXCIuL2xvZ2ljXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJvYXJkKGJvYXJkLCBuYW1lKSB7XG4gICAgLy8gYXJndWVtZW50IGlzIHBsYXllckJvYXJkLmJvYXJkLCBpLiBlLiBHYW1lYm9hcmQgY2xhc3MgYm9hcmQgcHJvcGVydHlcbiAgICBjb25zdCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZmllbGQuY2xhc3NMaXN0LmFkZChgJHtuYW1lfWApO1xuXG4gICAgZm9yIChsZXQgaSA9IDExOyBpIDwgMjE7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHNxdWFyZURvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBzcXVhcmVEb20uZGF0YXNldC55ID0gaTtcbiAgICAgICAgICAgIHNxdWFyZURvbS5kYXRhc2V0LnggPSBqO1xuXG4gICAgICAgICAgICBzcXVhcmVEb20uZGF0YXNldC5oYXNTaGlwID0gYm9hcmRbaSAtIDExXVtqIC0gMV0uaGFzU2hpcDtcbiAgICAgICAgICAgIHNxdWFyZURvbS5kYXRhc2V0LmNhblBsYWNlU2hpcCA9IGJvYXJkW2kgLSAxMV1baiAtIDFdLmNhblBsYWNlU2hpcDtcbiAgICAgICAgICAgIGlmIChib2FyZFtpIC0gMTFdW2ogLSAxXS5ib2F0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHNxdWFyZURvbS5kYXRhc2V0Lmxlbmd0aCA9IGJvYXJkW2kgLSAxMV1baiAtIDFdLmJvYXQubGVuZ3RoO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQoc3F1YXJlRG9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmllbGQ7XG59O1xuXG5mdW5jdGlvbiBkaXNwbGF5U2hpcCh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbiwgbmFtZSkge1xuICAgIC8vIGFyZ3VtZW50IGlzIHBsYXllckJvYXJkLCBpLiBlLiBHYW1lYm9hcmQgY2xhc3NcbiAgICBpZiAobGVuZ3RoID09IDEpIHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgc2hpcC5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICBzaGlwLmRhdGFzZXQubGVuZ3RoID0gMVxuICAgIH07XG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgICBpZiAobGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHt4fVwiXWApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke3ggKyAxfVwiXWApO1xuICAgICAgICAgICAgc2hpcDEuZGF0YXNldC5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAyLmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwMS5kYXRhc2V0Lmxlbmd0aCA9IDI7XG4gICAgICAgICAgICBzaGlwMi5kYXRhc2V0Lmxlbmd0aCA9IDJcbiAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT0gMykge1xuICAgICAgICAgICAgY29uc3Qgc2hpcDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7eCArIDF9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7eCArIDJ9XCJdYCk7XG4gICAgICAgICAgICBzaGlwMS5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcDIuZGF0YXNldC5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAzLmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwMS5kYXRhc2V0Lmxlbmd0aCA9IDM7XG4gICAgICAgICAgICBzaGlwMi5kYXRhc2V0Lmxlbmd0aCA9IDM7XG4gICAgICAgICAgICBzaGlwMy5kYXRhc2V0Lmxlbmd0aCA9IDM7XG4gICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHt4fVwiXWApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke3ggKyAxfVwiXWApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke3ggKyAyfVwiXWApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcDQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke3ggKyAzfVwiXWApO1xuICAgICAgICAgICAgc2hpcDEuZGF0YXNldC5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAyLmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwMy5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcDQuZGF0YXNldC5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAxLmRhdGFzZXQubGVuZ3RoID0gNDtcbiAgICAgICAgICAgIHNoaXAyLmRhdGFzZXQubGVuZ3RoID0gNDtcbiAgICAgICAgICAgIHNoaXAzLmRhdGFzZXQubGVuZ3RoID0gNDtcbiAgICAgICAgICAgIHNoaXA0LmRhdGFzZXQubGVuZ3RoID0gNDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGRpcmVjdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgaWYgKGxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eSArIDF9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgIHNoaXAxLmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwMi5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcDEuZGF0YXNldC5sZW5ndGggPSAyO1xuICAgICAgICAgICAgc2hpcDIuZGF0YXNldC5sZW5ndGggPSAyXG4gICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHt4fVwiXWApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5ICsgMX1cIl1bZGF0YS14PVwiJHt4fVwiXWApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5ICsgMn1cIl1bZGF0YS14PVwiJHt4fVwiXWApO1xuICAgICAgICAgICAgc2hpcDEuZGF0YXNldC5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAyLmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwMy5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcDEuZGF0YXNldC5sZW5ndGggPSAzO1xuICAgICAgICAgICAgc2hpcDIuZGF0YXNldC5sZW5ndGggPSAzO1xuICAgICAgICAgICAgc2hpcDMuZGF0YXNldC5sZW5ndGggPSAzO1xuICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eSArIDF9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eSArIDJ9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXA0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eSArIDN9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgIHNoaXAxLmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwMi5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcDMuZGF0YXNldC5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXA0LmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwMS5kYXRhc2V0Lmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICBzaGlwMi5kYXRhc2V0Lmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICBzaGlwMy5kYXRhc2V0Lmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICBzaGlwNC5kYXRhc2V0Lmxlbmd0aCA9IDQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBhZGRFdmVudHMoZ2FtZWJvYXJkLCBuYW1lLCBwbGF5ZXIsIHBsYXllckJvYXJkLCBjb21wdXRlcikge1xuICAgIC8vIGdhbWVib2FyZCBhcmd1ZW1lbnQgcGxheWVyQm9hcmQsIGkuIGUuIEdhbWVib2FyZCBjbGFzcyBvYmplY3RcbiAgICBjb25zdCBzcXVhcmVzRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7bmFtZX0gZGl2YCk7XG5cbiAgICBzcXVhcmVzRG9tLmZvckVhY2goKHNxdWFyZSkgPT4ge1xuICAgICAgICBjb25zdCB4ID0gTnVtYmVyKHNxdWFyZS5kYXRhc2V0LngpO1xuICAgICAgICBjb25zdCB5ID0gTnVtYmVyKHNxdWFyZS5kYXRhc2V0LnkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGF0dGFjaygpIHtcbiAgICAgICAgICAgIGdldEF0dGFja2VkKHgsIHksIGdhbWVib2FyZCwgbmFtZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2ssIHsgb25jZTogdHJ1ZSB9KTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRBdHRhY2tlZCh4LCB5LCBnYW1lYm9hcmQsIG5hbWUpIHtcbiAgICAgICAgICAgIGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHgsIHkpO1xuICAgICAgICAgICAgc3F1YXJlLmRhdGFzZXQubWlzc2VkID0gZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1beCAtIDFdLm1pc3NlZEF0dGFjaztcbiAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LnN1Y2Nlc3MgPSBnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVt4IC0gMV0uc3VjY2Vzc2Z1bEF0dGFjaztcbiAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVt4IC0gMV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1beCAtIDFdLmJvYXQuc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW3ggLSAxXS5ib2F0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2luZyBjdXJyZW50IHJvdyBmb3IgYXJvdW5kIHNxdWFyZXNcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2kgLSAxXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2l9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpICsgMV0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpICsgMn1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2luZyBhYm92ZSByb3cgZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICAgICAgICAgIGlmICh5IC0gMSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpXS5ib2F0ICE9IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpXS5ib2F0LnN1bmsgPT0gdHJ1ZSkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpICsgMX1cIl1gKS5kYXRhc2V0LmFyb3VuZCA9PSBcInRydWVcIikgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMl1baV0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5IC0gMX1cIl1bZGF0YS14PVwiJHtpICsgMX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2tpbmcgYmVsb3cgcm93IGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSArIDEgPCAyMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCgoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aSArIDF9XCJdYCkuZGF0YXNldC5hcm91bmQgPT0gXCJ0cnVlXCIpICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTBdW2ldLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eSArIDF9XCJdW2RhdGEteD1cIiR7aSArIDF9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVt4IC0gMV0uYm9hdC5kaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheWluZyBzdW5rIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpICsgMX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNraW5nIGN1cnJlbnQgcm93IGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpXS5ib2F0ICE9IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpXS5ib2F0LnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baSAtIDFdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2kgKyAxXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2kgKyAyfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNraW5nIGFib3ZlIHJvdyBmb3IgYXJvdW5kIHNxdWFyZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgLSAxID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQuc3VuayA9PSB0cnVlKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApLmRhdGFzZXQuYXJvdW5kID09IFwidHJ1ZVwiKSAmJiBnYW1lYm9hcmQuYm9hcmRbeSAtIDEyXVtpXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3kgLSAxfVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2luZyBiZWxvdyByb3cgZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICAgICAgICAgIGlmICh5ICsgMSA8IDIxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpXS5ib2F0ICE9IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpXS5ib2F0LnN1bmsgPT0gdHJ1ZSkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpICsgMX1cIl1gKS5kYXRhc2V0LmFyb3VuZCA9PSBcInRydWVcIikgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMF1baV0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5ICsgMX1cIl1bZGF0YS14PVwiJHtpICsgMX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW3ggLSAxXS5ib2F0LmRpcmVjdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZGlzcGxheWluZyBzdW5rIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW2ldW3ggLSAxXS5ib2F0ICE9IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDFdLmJvYXQuc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke2kgKyAxMX1cIl1bZGF0YS14PVwiJHt4fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2tpbmcgY3VycmVudCBjb2x1bW4gZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW2ldW3ggLSAxXS5ib2F0LnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW2kgLSAxXVt4IC0gMV0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7aSArIDEwfVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbaSArIDFdW3ggLSAxXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHtpICsgMTJ9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2luZyBiZWZvcmUgY29sdW1uIGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCAtIDEgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDFdLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMV0uYm9hdC5zdW5rID09IHRydWUpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke2kgKyAxMX1cIl1bZGF0YS14PVwiJHt4fVwiXWApLmRhdGFzZXQuYXJvdW5kID09IFwidHJ1ZVwiKSAmJiBnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDJdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7aSArIDExfVwiXVtkYXRhLXg9XCIke3ggLSAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2luZyBhZnRlciBjb2x1bW4gZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICAgICAgICAgIGlmICh4ICsgMSA8IDExKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKChnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDFdLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMV0uYm9hdC5zdW5rID09IHRydWUpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke2kgKyAxMX1cIl1bZGF0YS14PVwiJHt4fVwiXWApLmRhdGFzZXQuYXJvdW5kID09IFwidHJ1ZVwiKSAmJiBnYW1lYm9hcmQuYm9hcmRbaV1beF0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHtpICsgMTF9XCJdW2RhdGEteD1cIiR7eCArIDF9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY29uc3QgZGlzYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke25hbWV9IGRpdltkYXRhLWFyb3VuZD1cInRydWVcIl1gKTtcbiAgICAgICAgICAgIC8vIGRpc2FibGUuZm9yRWFjaCgoc3F1YXJlKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhdHRhY2ssIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgcGxheWVyLmNoYW5nZVR1cm5zKHgsIHksIGdhbWVib2FyZCwgY29tcHV0ZXIpO1xuICAgICAgICAgICAgd2hpbGUgKHBsYXllci50dXJuID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IGNvbXB1dGVyLmF0dGFja0VuZW15KHBsYXllckJvYXJkLCBwbGF5ZXIpO1xuICAgICAgICAgICAgICAgIGdldEF0dGFja2VkQnlDb21wdXRlcih0YXJnZXRbMF0sIHRhcmdldFsxXSwgcGxheWVyQm9hcmQsIFwicGxheWVyXCIpO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5nYW1lT3ZlciA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVJc092ZXIoXCJHQU1FIE9WRVIuIFlvdSBsb3N0ISBBbGwgeW91ciBzaGlwcyBhcmUgc3Vuay5cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5nYW1lT3ZlciA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgZ2FtZUlzT3ZlcihcIkdBTUUgT1ZFUi4gWW91IHdvbiEgQ29uZ3JhdHVsYXRpb25zISBBbGwgb2YgdGhlIG9wcG9uZW50J3Mgc2hpcHMgYXJlIHN1bmsuXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn07XG5cbmZ1bmN0aW9uIGdldEF0dGFja2VkQnlDb21wdXRlcih4LCB5LCBnYW1lYm9hcmQsIG5hbWUpIHtcbiAgICBjb25zdCBzcXVhcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgc3F1YXJlLmRhdGFzZXQubWlzc2VkID0gZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1beCAtIDFdLm1pc3NlZEF0dGFjaztcbiAgICBzcXVhcmUuZGF0YXNldC5zdWNjZXNzID0gZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1beCAtIDFdLnN1Y2Nlc3NmdWxBdHRhY2s7XG4gICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW3ggLSAxXS5ib2F0ICE9IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVt4IC0gMV0uYm9hdC5zdW5rID09IHRydWUpIHtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW3ggLSAxXS5ib2F0Lmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICBzcXVhcmUuZGF0YXNldC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGNoZWNraW5nIGN1cnJlbnQgcm93IGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQuc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2kgLSAxXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpICsgMV0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aSArIDJ9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY2hlY2tpbmcgYWJvdmUgcm93IGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgaWYgKHkgLSAxID4gMTApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aSArIDF9XCJdYCkuZGF0YXNldC5hcm91bmQgPT0gXCJ0cnVlXCIpICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTJdW2ldLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3kgLSAxfVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNoZWNraW5nIGJlbG93IHJvdyBmb3IgYXJvdW5kIHNxdWFyZXNcbiAgICAgICAgICAgIGlmICh5ICsgMSA8IDIxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQuc3VuayA9PSB0cnVlKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApLmRhdGFzZXQuYXJvdW5kID09IFwidHJ1ZVwiKSAmJiBnYW1lYm9hcmQuYm9hcmRbeSAtIDEwXVtpXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5ICsgMX1cIl1bZGF0YS14PVwiJHtpICsgMX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1beCAtIDFdLmJvYXQuZGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAvLyBkaXNwbGF5aW5nIHN1bmsgc2hpcFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQuc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNoZWNraW5nIGN1cnJlbnQgcm93IGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQuc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2kgLSAxXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpICsgMV0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aSArIDJ9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY2hlY2tpbmcgYWJvdmUgcm93IGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgaWYgKHkgLSAxID4gMTApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aSArIDF9XCJdYCkuZGF0YXNldC5hcm91bmQgPT0gXCJ0cnVlXCIpICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTJdW2ldLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3kgLSAxfVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNoZWNraW5nIGJlbG93IHJvdyBmb3IgYXJvdW5kIHNxdWFyZXNcbiAgICAgICAgICAgIGlmICh5ICsgMSA8IDIxKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQuc3VuayA9PSB0cnVlKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApLmRhdGFzZXQuYXJvdW5kID09IFwidHJ1ZVwiKSAmJiBnYW1lYm9hcmQuYm9hcmRbeSAtIDEwXVtpXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5ICsgMX1cIl1bZGF0YS14PVwiJHtpICsgMX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1beCAtIDFdLmJvYXQuZGlyZWN0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgLy8gZGlzcGxheWluZyBzdW5rIHNoaXBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDFdLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMV0uYm9hdC5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke2kgKyAxMX1cIl1bZGF0YS14PVwiJHt4fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuc3VuayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNoZWNraW5nIGN1cnJlbnQgY29sdW1uIGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW2ldW3ggLSAxXS5ib2F0LnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbaSAtIDFdW3ggLSAxXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7aSArIDEwfVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFtpICsgMV1beCAtIDFdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHtpICsgMTJ9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBjaGVja2luZyBiZWZvcmUgY29sdW1uIGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgaWYgKHggLSAxID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKChnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDFdLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMV0uYm9hdC5zdW5rID09IHRydWUpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke2kgKyAxMX1cIl1bZGF0YS14PVwiJHt4fVwiXWApLmRhdGFzZXQuYXJvdW5kID09IFwidHJ1ZVwiKSAmJiBnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDJdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke2kgKyAxMX1cIl1bZGF0YS14PVwiJHt4IC0gMX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBjaGVja2luZyBhZnRlciBjb2x1bW4gZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICBpZiAoeCArIDEgPCAxMSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKChnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDFdLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMV0uYm9hdC5zdW5rID09IHRydWUpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke2kgKyAxMX1cIl1bZGF0YS14PVwiJHt4fVwiXWApLmRhdGFzZXQuYXJvdW5kID09IFwidHJ1ZVwiKSAmJiBnYW1lYm9hcmQuYm9hcmRbaV1beF0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7aSArIDExfVwiXVtkYXRhLXg9XCIke3ggKyAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGdhbWVJc092ZXIobWVzc2FnZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0XCIpO1xuICAgIHJlc3VsdC50ZXh0Q29udGVudCA9IGAke21lc3NhZ2V9YDtcbiAgICByZXN1bHQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZUJvYXJkLCBkaXNwbGF5U2hpcCwgYWRkRXZlbnRzLCBnZXRBdHRhY2tlZEJ5Q29tcHV0ZXIgfTsiLCJjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG4gICAgICAgIHRoaXMuZGFtYWdlID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgfVxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSB0aGlzLmRhbWFnZSArIDE7XG4gICAgICAgIHJldHVybiB0aGlzLmRhbWFnZTtcbiAgICB9XG4gICAgaXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5sZW5ndGggPiB0aGlzLmRhbWFnZSkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGhpcy5zdW5rO1xuICAgIH1cbn07XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSB0aGlzLiNidWlsZEJvYXJkKCk7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuICAgIH1cbiAgICAjYnVpbGRCb2FyZCgpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDExOyBpIDwgMjE7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICAgICAgICBib2FyZC5wdXNoKHJvdyk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqKyspIHtcbiAgICAgICAgICAgICAgICByb3cucHVzaChuZXcgU3F1YXJlKGosIGkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgfVxuICAgIHBsYWNlU2hpcChhLCBiLCBsZW5ndGgsIGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgeCA9IGEgLSAxO1xuICAgICAgICBsZXQgeSA9IGIgLSAxMTtcblxuICAgICAgICBjb25zdCBzdGFydFNxdWFyZSA9IHRoaXMuYm9hcmRbeV1beF07XG4gICAgICAgIGlmIChzdGFydFNxdWFyZS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UgfHwgc3RhcnRTcXVhcmUuaGFzU2hpcCA9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2FuJ3QgcGxhY2UgeW91ciBuZXcgc2hpcCBoZXJlLiBTaGlwcyBjYW4ndCBvdmVybGFwIGFuZCBtdXN0IGJlIGF0IGxlYXN0IG9uZSBzcXVhcmUgYXBhcnQgZnJvbSBlYWNoIG90aGVyLlwiKVxuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBuID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwc1tpXS5sZW5ndGggPT0gbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbisrO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKChsZW5ndGggPT0gMSAmJiBuID09IDQpIHx8IChsZW5ndGggPT0gMiAmJiBuID09IDMpIHx8IChsZW5ndGggPT0gMyAmJiBuID09IDIpIHx8IChsZW5ndGggPT0gNCAmJiBuID09IDEpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2FuJ3QgcGxhY2UgYW5vdGhlciBzaGlwIG9mIHRoaXMgc2l6ZS4gUGxlYXNlLCBjaGFuZ2UgdGhlIGxlbmd0aCBvZiB5b3VyIHNoaXAuXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGxldCBiZWZvcmUgPSB4IC0gMTtcbiAgICAgICAgbGV0IGFmdGVyID0geCArIDE7XG5cbiAgICAgICAgbGV0IGFmdGVyMiA9IHggKyAyO1xuICAgICAgICBsZXQgYWZ0ZXIzID0geCArIDM7XG4gICAgICAgIGxldCBhZnRlcjQgPSB4ICsgNDtcblxuICAgICAgICBsZXQgYWJvdmUgPSB5IC0gMTtcbiAgICAgICAgbGV0IGJlbG93ID0geSArIDE7XG5cbiAgICAgICAgbGV0IGJlbG93MiA9IHkgKyAyO1xuICAgICAgICBsZXQgYmVsb3czID0geSArIDM7XG4gICAgICAgIGxldCBiZWxvdzQgPSB5ICsgNDtcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICBpZiAoKGxlbmd0aCA9PSAyICYmIChhZnRlciA8IDAgfHwgYWZ0ZXIgPiA5KSkgfHwgKGxlbmd0aCA9PSAzICYmIChhZnRlcjIgPCAwIHx8IGFmdGVyMiA+IDkpKSB8fCAobGVuZ3RoID09IDQgJiYgKGFmdGVyMyA8IDAgfHwgYWZ0ZXIzID4gOSkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbid0IHBsYWNlIGEgc2hpcCBsaWtlIHRoYXQuIEl0IGRvZXNuJ3QgZml0IHRoZSBib2FyZC4gUGxlYXNlLCBjaG9vc2UgYW5vdGhlciBsb2NhdGlvbi5cIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKChsZW5ndGggPT0gMiAmJiB0aGlzLmJvYXJkW3ldW2FmdGVyXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHx8IChsZW5ndGggPT0gMyAmJiAodGhpcy5ib2FyZFt5XVthZnRlcl0uY2FuUGxhY2VTaGlwID09IGZhbHNlIHx8IHRoaXMuYm9hcmRbeV1bYWZ0ZXIyXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpKSB8fCAobGVuZ3RoID09IDQgJiYgKHRoaXMuYm9hcmRbeV1bYWZ0ZXJdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSB8fCB0aGlzLmJvYXJkW3ldW2FmdGVyMl0uY2FuUGxhY2VTaGlwID09IGZhbHNlIHx8IHRoaXMuYm9hcmRbeV1bYWZ0ZXIzXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW4ndCBwbGFjZSBhIHNoaXAgbGlrZSB0aGF0LiBJdCBjYW4ndCBvdmVybGFwIG90aGVyIHNoaXBzIGFuZCBtdXN0IGJlIGF0IGxlYXN0IG9uZSBzcXVhcmUgYXBhcnQgZnJvbSBvdGhlciBzaGlwcy4gUGxlYXNlLCBjaG9vc2UgYW5vdGhlciBsb2NhdGlvbi5cIik7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICBpZiAoKGxlbmd0aCA9PSAyICYmIChiZWxvdyA8IDAgfHwgYmVsb3cgPiA5KSkgfHwgKGxlbmd0aCA9PSAzICYmIChiZWxvdzIgPCAwIHx8IGJlbG93MiA+IDkpKSB8fCAobGVuZ3RoID09IDQgJiYgKGJlbG93MyA8IDAgfHwgYmVsb3czID4gOSkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgcGxhY2UgYSBzaGlwIGxpa2UgdGhhdC4gSXQgZG9lc24ndCBmaXQgdGhlIGJvYXJkLiBQbGVhc2UsIGNob29zZSBhbm90aGVyIGxvY2F0aW9uLlwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoKGxlbmd0aCA9PSAyICYmIHRoaXMuYm9hcmRbYmVsb3ddW3hdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkgfHwgKGxlbmd0aCA9PSAzICYmICh0aGlzLmJvYXJkW2JlbG93XVt4XS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UgfHwgdGhpcy5ib2FyZFtiZWxvdzJdW3hdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkpIHx8IChsZW5ndGggPT0gNCAmJiAodGhpcy5ib2FyZFtiZWxvd11beF0uY2FuUGxhY2VTaGlwID09IGZhbHNlIHx8IHRoaXMuYm9hcmRbYmVsb3cyXVt4XS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UgfHwgdGhpcy5ib2FyZFtiZWxvdzNdW3hdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbid0IHBsYWNlIGEgc2hpcCBsaWtlIHRoYXQuIEl0IGNhbid0IG92ZXJsYXAgb3RoZXIgc2hpcHMgYW5kIG11c3QgYmUgYXQgbGVhc3Qgb25lIHNxdWFyZSBhcGFydCBmcm9tIG90aGVyIHNoaXBzLiBQbGVhc2UsIGNob29zZSBhbm90aGVyIGxvY2F0aW9uLlwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IHNoaXAgPSBuZXcgU2hpcChsZW5ndGgsIGRpcmVjdGlvbik7XG5cbiAgICAgICAgdGhpcy5zaGlwcy5wdXNoKHNoaXApO1xuXG4gICAgICAgIHN0YXJ0U3F1YXJlLmJvYXQgPSBzaGlwO1xuICAgICAgICBzdGFydFNxdWFyZS5oYXNTaGlwID0gdHJ1ZTtcblxuICAgICAgICBpZiAoYWJvdmUgPj0gMCAmJiBhYm92ZSA8PSA5KSB7XG4gICAgICAgICAgICBpZiAoYmVmb3JlID49IDAgJiYgYmVmb3JlIDw9IDkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2Fib3ZlXVtiZWZvcmVdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChhZnRlciA+PSAwICYmIGFmdGVyIDw9IDkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2Fib3ZlXVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5ib2FyZFthYm92ZV1beF0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChiZWZvcmUgPj0gMCAmJiBiZWZvcmUgPD0gOSkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVtiZWZvcmVdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGJlbG93ID49IDAgJiYgYmVsb3cgPD0gOSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3ddW2JlZm9yZV0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICBpZiAoYWZ0ZXIgPj0gMCAmJiBhZnRlciA8PSA5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGJlbG93ID49IDAgJiYgYmVsb3cgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoYmVsb3cgPj0gMCAmJiBiZWxvdyA8PSA5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11beF0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcImhvcml6b250YWxcIikge1xuICAgICAgICAgICAgaWYgKGxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcl0uYm9hdCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcl0uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGFmdGVyMiA+PSAwICYmIGFmdGVyMiA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhYm92ZSA+PSAwICYmIGFib3ZlIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYWJvdmVdW2FmdGVyMl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1bYWZ0ZXIyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlbG93ID49IDAgJiYgYmVsb3cgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11bYWZ0ZXIyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChiZWxvdyA+PSAwICYmIGJlbG93IDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11bYWZ0ZXJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWZ0ZXIyID49IDAgJiYgYWZ0ZXIyIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3ddW2FmdGVyMl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyXS5ib2F0ID0gc2hpcDtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyMl0uYm9hdCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcl0uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcjJdLmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChiZWxvdyA+PSAwICYmIGJlbG93IDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11beF0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3ddW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11bYWZ0ZXIyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFmdGVyMyA+PSAwICYmIGFmdGVyMyA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVthZnRlcjNdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGFib3ZlID49IDAgJiYgYWJvdmUgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2Fib3ZlXVthZnRlcjJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWZ0ZXIzID49IDAgJiYgYWZ0ZXIzIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYWJvdmVdW2FmdGVyM10uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoYWZ0ZXIzID49IDAgJiYgYWZ0ZXIzIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcjNdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcl0uYm9hdCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcjJdLmJvYXQgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1bYWZ0ZXIzXS5ib2F0ID0gc2hpcDtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyXS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyMl0uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcjNdLmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChiZWxvdyA+PSAwICYmIGJlbG93IDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11beF0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3ddW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11bYWZ0ZXIyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11bYWZ0ZXIzXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFmdGVyNCA+PSAwICYmIGFmdGVyNCA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVthZnRlcjRdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGFib3ZlID49IDAgJiYgYWJvdmUgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2Fib3ZlXVthZnRlcjJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2Fib3ZlXVthZnRlcjNdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWZ0ZXI0ID49IDAgJiYgYWZ0ZXI0IDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYWJvdmVdW2FmdGVyNF0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoYWZ0ZXI0ID49IDAgJiYgYWZ0ZXI0IDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcjRdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11beF0uYm9hdCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11beF0uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGJlbG93MiA+PSAwICYmIGJlbG93MiA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWZvcmUgPj0gMCAmJiBiZWZvcmUgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzJdW2JlZm9yZV0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3cyXVt4XS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFmdGVyID49IDAgJiYgYWZ0ZXIgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzJdW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChhZnRlciA+PSAwICYmIGFmdGVyIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3ddW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT0gMykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3ddW3hdLmJvYXQgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3cyXVt4XS5ib2F0ID0gc2hpcDtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVt4XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93Ml1beF0uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGJlZm9yZSA+PSAwICYmIGJlZm9yZSA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3cyXVtiZWZvcmVdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmVsb3czID49IDAgJiYgYmVsb3czIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3czXVtiZWZvcmVdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoYmVsb3czID49IDAgJiYgYmVsb3czIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzNdW3hdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWZ0ZXIgPj0gMCAmJiBhZnRlciA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93M11bYWZ0ZXJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGFmdGVyID49IDAgJiYgYWZ0ZXIgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11bYWZ0ZXJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93Ml1bYWZ0ZXJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11beF0uYm9hdCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzJdW3hdLmJvYXQgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3czXVt4XS5ib2F0ID0gc2hpcDtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVt4XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93Ml1beF0uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzNdW3hdLmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChiZWZvcmUgPj0gMCAmJiBiZWZvcmUgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93Ml1bYmVmb3JlXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzNdW2JlZm9yZV0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWxvdzQgPj0gMCAmJiBiZWxvdzQgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzRdW2JlZm9yZV0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChiZWxvdzQgPj0gMCAmJiBiZWxvdzQgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93NF1beF0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZnRlciA+PSAwICYmIGFmdGVyIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3c0XVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoYWZ0ZXIgPj0gMCAmJiBhZnRlciA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1bYWZ0ZXJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3cyXVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3czXVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbiAgICByZWNlaXZlQXR0YWNrKGEsIGIpIHtcbiAgICAgICAgbGV0IHggPSBhIC0gMTtcbiAgICAgICAgbGV0IHkgPSBiIC0gMTE7XG4gICAgICAgIGxldCBhdHRhY2tlZFNxdWFyZSA9IHRoaXMuYm9hcmRbeV1beF07XG4gICAgICAgIC8vIGlmIChhdHRhY2tlZFNxdWFyZS5taXNzZWRBdHRhY2sgPT0gdHJ1ZSB8fCBhdHRhY2tlZFNxdWFyZS5zdWNjZXNzZnVsQXR0YWNrID09IHRydWUpIHtcbiAgICAgICAgLy8gICAgIHRocm93IG5ldyBFcnJvcihcIlRoaXMgc3F1YXJlIGhhcyBhbHJlYWR5IGJlZW4gYXR0YWNrZWRcIik7XG4gICAgICAgIC8vIH07XG4gICAgICAgIGlmIChhdHRhY2tlZFNxdWFyZS5oYXNTaGlwID09IHRydWUpIHtcbiAgICAgICAgICAgIGF0dGFja2VkU3F1YXJlLnN1Y2Nlc3NmdWxBdHRhY2sgPSB0cnVlO1xuICAgICAgICAgICAgYXR0YWNrZWRTcXVhcmUuYm9hdC5oaXQoKTtcbiAgICAgICAgICAgIGF0dGFja2VkU3F1YXJlLmJvYXQuaXNTdW5rKCk7XG4gICAgICAgICAgICB0aGlzLmFsbFNoaXBzQXJlU3VuaygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXR0YWNrZWRTcXVhcmUubWlzc2VkQXR0YWNrID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGFsbFNoaXBzQXJlU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcHMuZXZlcnkoKGVsZW1lbnQpID0+IGVsZW1lbnQuc3VuayA9PSB0cnVlKSkge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIH07XG4gICAgfTtcbn07XG5cbmNsYXNzIFNxdWFyZSB7XG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xuICAgICAgICB0aGlzLnggPSB4O1xuICAgICAgICB0aGlzLnkgPSB5O1xuICAgICAgICB0aGlzLmhhc1NoaXAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jYW5QbGFjZVNoaXAgPSB0cnVlO1xuICAgICAgICB0aGlzLm1pc3NlZEF0dGFjayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN1Y2Nlc3NmdWxBdHRhY2sgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmJvYXQgPSB1bmRlZmluZWQ7XG4gICAgfVxufTtcblxuY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDaG9pY2VzID0gdGhpcy4jZmluZENob2ljZXMoKTtcbiAgICB9XG4gICAgI2ZpbmRDaG9pY2VzKCkge1xuICAgICAgICBsZXQgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDExOyBpIDwgMjE7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNob2ljZSA9IFtpLCBqXTtcbiAgICAgICAgICAgICAgICBhcnJheS5wdXNoKGNob2ljZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgYXR0YWNrRW5lbXkoZW5lbXlCb2FyZCwgb3Bwb25lbnQpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gdGhpcy5jb21wdXRlckNob2ljZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jb21wdXRlckNob2ljZXMubGVuZ3RoKV07XG4gICAgICAgIGxldCBhID0gY29vcmRpbmF0ZXNbMV07XG4gICAgICAgIGxldCBiID0gY29vcmRpbmF0ZXNbMF07XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuY29tcHV0ZXJDaG9pY2VzLmluZGV4T2YoY29vcmRpbmF0ZXMpO1xuICAgICAgICB0aGlzLmNvbXB1dGVyQ2hvaWNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBlbmVteUJvYXJkLnJlY2VpdmVBdHRhY2soYSwgYik7XG4gICAgICAgIHRoaXMuY2hhbmdlVHVybnMoYSwgYiwgZW5lbXlCb2FyZCwgb3Bwb25lbnQpO1xuICAgICAgICByZXR1cm4gW2EsIGJdO1xuICAgIH1cbiAgICBjaGFuZ2VUdXJucyhhLCBiLCBlbmVteUJvYXJkLCBvcHBvbmVudCkge1xuICAgICAgICBsZXQgeCA9IGEgLSAxO1xuICAgICAgICBsZXQgeSA9IGIgLSAxMTtcbiAgICAgICAgaWYgKGVuZW15Qm9hcmQuYm9hcmRbeV1beF0ubWlzc2VkQXR0YWNrID09IHRydWUpIHtcbiAgICAgICAgICAgIHRoaXMudHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgb3Bwb25lbnQudHVybiA9IHRydWU7XG4gICAgICAgIH07XG4gICAgfVxufTtcblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBTcXVhcmUsIFBsYXllciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIsIFNxdWFyZSB9IGZyb20gXCIuL2xvZ2ljXCI7XG5pbXBvcnQgeyBjcmVhdGVCb2FyZCwgZGlzcGxheVNoaXAsIGFkZEV2ZW50cywgZ2V0QXR0YWNrZWRCeUNvbXB1dGVyIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmNvbnN0IGZvcm1Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcm0tY29udGFpbmVyXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb3JtXCIpO1xuY29uc3QgY29tcHV0ZXJCb2FyZERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIik7XG5jb25zdCBjb21wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ib2FyZC1jb250YWluZXI6bGFzdC1jaGlsZFwiKTtcbmNvbnN0IHJlc3VsdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdWx0XCIpO1xuY29uc3QgZXJyb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpO1xuXG5sZXQgbW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQbGF5RmllbGQocGxheWVyQm9hcmQpIHtcbiAgICAgICAgbGV0IHBsYXlGaWVsZCA9IGNyZWF0ZUJvYXJkKHBsYXllckJvYXJkLmJvYXJkLCBcInBsYXllclwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKTtcbiAgICAgICAgcGxheWVyQm9hcmREb20uYXBwZW5kQ2hpbGQocGxheUZpZWxkKTtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbXBGaWVsZChjb21wdXRlckJvYXJkKSB7XG4gICAgICAgIGxldCBjb21wRmllbGQgPSBjcmVhdGVCb2FyZChjb21wdXRlckJvYXJkLmJvYXJkLCBcImNvbXB1dGVyXCIpO1xuICAgICAgICBjb25zdCBjb21wdXRlckJvYXJkRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcbiAgICAgICAgY29tcHV0ZXJCb2FyZERvbS5hcHBlbmRDaGlsZChjb21wRmllbGQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVQbGF5ZXJGaWVsZCgpIHtcbiAgICAgICAgbGV0IHBsYXlGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpO1xuICAgICAgICBwbGF5ZXJCb2FyZERvbS5yZW1vdmVDaGlsZChwbGF5RmllbGQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVGaWVsZHMoKSB7XG4gICAgICAgIGxldCBwbGF5RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllclwiKTtcbiAgICAgICAgY29uc3QgcGxheWVyQm9hcmREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ib2FyZFwiKTtcbiAgICAgICAgcGxheWVyQm9hcmREb20ucmVtb3ZlQ2hpbGQocGxheUZpZWxkKTtcbiAgICAgICAgbGV0IGNvbXBGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXJcIik7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpO1xuICAgICAgICBjb21wdXRlckJvYXJkRG9tLnJlbW92ZUNoaWxkKGNvbXBGaWVsZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVBsYXllckJvYXJkKCkge1xuICAgICAgICBsZXQgcGxheWVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZDtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVyQm9hcmQoKSB7XG4gICAgICAgIGxldCBjb21wdXRlckJvYXJkID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICByZXR1cm4gY29tcHV0ZXJCb2FyZDtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVBsYXllcigpIHtcbiAgICAgICAgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgcmV0dXJuIHBsYXllcjtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIGNyZWF0ZUNvbXB1dGVyKCkge1xuICAgICAgICBsZXQgY29tcHV0ZXIgPSBuZXcgUGxheWVyKCk7XG4gICAgICAgIHJldHVybiBjb21wdXRlcjtcbiAgICB9O1xuICAgIGZ1bmN0aW9uIHN0YXJ0KHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkLCBwbGF5ZXIsIGNvbXB1dGVyKSB7XG4gICAgICAgIGFkZEV2ZW50cyhjb21wdXRlckJvYXJkLCBcImNvbXB1dGVyXCIsIHBsYXllciwgcGxheWVyQm9hcmQsIGNvbXB1dGVyKTtcbiAgICAgICAgcGxheWVyLnR1cm4gPSB0cnVlO1xuICAgIH07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlUGxheUZpZWxkOiBjcmVhdGVQbGF5RmllbGQsXG4gICAgICAgIGNyZWF0ZUNvbXBGaWVsZDogY3JlYXRlQ29tcEZpZWxkLFxuICAgICAgICByZW1vdmVQbGF5ZXJGaWVsZDogcmVtb3ZlUGxheWVyRmllbGQsXG4gICAgICAgIHJlbW92ZUZpZWxkczogcmVtb3ZlRmllbGRzLFxuICAgICAgICBjcmVhdGVQbGF5ZXJCb2FyZDogY3JlYXRlUGxheWVyQm9hcmQsXG4gICAgICAgIGNyZWF0ZUNvbXB1dGVyQm9hcmQ6IGNyZWF0ZUNvbXB1dGVyQm9hcmQsXG4gICAgICAgIGNyZWF0ZVBsYXllcjogY3JlYXRlUGxheWVyLFxuICAgICAgICBjcmVhdGVDb21wdXRlcjogY3JlYXRlQ29tcHV0ZXIsXG4gICAgICAgIHN0YXJ0OiBzdGFydCxcbiAgICB9XG59KSgpO1xuXG5mdW5jdGlvbiBwbGFjZUFsbFNoaXBzKGNvbXB1dGVyQm9hcmQpIHtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCg0LCAxNiwgNCwgXCJob3Jpem9udGFsXCIpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDIsIDE5LCAzLCBcImhvcml6b250YWxcIik7XG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoOCwgMTEsIDMsIFwidmVydGljYWxcIik7XG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoMywgMTIsIDIsIFwiaG9yaXpvbnRhbFwiKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgyLCAxNCwgMiwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCg5LCAxOCwgMiwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgxLCAxMSwgMSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCg2LCAxNCwgMSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgxLCAxNywgMSwgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCg2LCAyMCwgMSwgXCJ2ZXJ0aWNhbFwiKTtcbn07XG5cbmNvbnN0IHBsYWNlQVNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYWNlLWEtc2hpcFwiKTtcbnBsYWNlQVNoaXAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcGxhY2VBU2hpcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuY29uc3QgY2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5jYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZm9ybUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcGxhY2VBU2hpcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufSk7XG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VibWl0XCIpO1xuc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRTaGlwKTtcbmZ1bmN0aW9uIGFkZFNoaXAoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBjaGVja1ZhbCA9IGZvcm0uY2hlY2tWYWxpZGl0eSgpO1xuICAgIGZvcm0ucmVwb3J0VmFsaWRpdHkoKTtcbiAgICBpZiAoY2hlY2tWYWwpIHtcbiAgICAgICAgY29uc3QgeCA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbHVtblwiKS52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHkgPSBOdW1iZXIoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb3dcIikudmFsdWUpO1xuICAgICAgICBjb25zdCBsZW5ndGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxlbmd0aFwiKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGlyZWN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCdkaXJlY3Rpb24nKTtcbiAgICAgICAgbGV0IGRpcmVjdGlvbjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXJlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uc1tpXS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uc1tpXS52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnBsYWNlU2hpcCh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbik7XG4gICAgICAgICAgICBkaXNwbGF5U2hpcCh4LCB5LCBsZW5ndGgsIGRpcmVjdGlvbiwgXCJwbGF5ZXJcIik7XG4gICAgICAgICAgICBpZiAocGxheWVyQm9hcmQuc2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlc3RhcnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgICAgIHBsYWNlQVNoaXAuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5zaGlwcy5sZW5ndGggPT0gMTApIHtcbiAgICAgICAgICAgICAgICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIHBsYWNlQVNoaXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBlcnJvci50ZXh0Q29udGVudCA9IGVyci5tZXNzYWdlO1xuICAgICAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuY29uc3Qgc3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXJ0XCIpO1xuc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwbGFjZUFsbFNoaXBzKGNvbXB1dGVyQm9hcmQpO1xuICAgIG1vZHVsZS5jcmVhdGVDb21wRmllbGQoY29tcHV0ZXJCb2FyZCk7XG4gICAgbW9kdWxlLnN0YXJ0KHBsYXllckJvYXJkLCBjb21wdXRlckJvYXJkLCBwbGF5ZXIsIGNvbXB1dGVyKTtcbiAgICBjb21wLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxuY29uc3QgcmVzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmVzdGFydFwiKTtcbnJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBwbGF5ZXJCb2FyZCA9IG1vZHVsZS5jcmVhdGVQbGF5ZXJCb2FyZCgpO1xuICAgIGNvbXB1dGVyQm9hcmQgPSBtb2R1bGUuY3JlYXRlQ29tcHV0ZXJCb2FyZCgpO1xuICAgIHBsYXllciA9IG1vZHVsZS5jcmVhdGVQbGF5ZXIoKTtcbiAgICBjb21wdXRlciA9IG1vZHVsZS5jcmVhdGVDb21wdXRlcigpO1xuXG4gICAgaWYgKGNvbXB1dGVyQm9hcmREb20uaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgICAgIG1vZHVsZS5yZW1vdmVGaWVsZHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb2R1bGUucmVtb3ZlUGxheWVyRmllbGQoKTtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmNyZWF0ZVBsYXlGaWVsZChwbGF5ZXJCb2FyZCk7XG5cbiAgICBjb21wLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICByZXN0YXJ0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBzdGFydC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgcGxhY2VBU2hpcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIHJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59KTtcblxubGV0IHBsYXllckJvYXJkID0gbW9kdWxlLmNyZWF0ZVBsYXllckJvYXJkKCk7XG5sZXQgY29tcHV0ZXJCb2FyZCA9IG1vZHVsZS5jcmVhdGVDb21wdXRlckJvYXJkKCk7XG5sZXQgcGxheWVyID0gbW9kdWxlLmNyZWF0ZVBsYXllcigpO1xubGV0IGNvbXB1dGVyID0gbW9kdWxlLmNyZWF0ZUNvbXB1dGVyKCk7XG5tb2R1bGUuY3JlYXRlUGxheUZpZWxkKHBsYXllckJvYXJkKTtcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9