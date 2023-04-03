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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    padding: 0;\n    margin: 0;\n    font-family: 'Coming Soon', cursive;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.header {\n    background-color: silver;\n    padding: 10px 0;\n}\n\nh1 {\n    text-align: center;\n}\n\n.main {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n    /* background-color: rgb(241, 241, 241); */\n}\n\n.boards {\n    display: flex;\n    gap: 100px;\n}\n\n.board-container {\n    display: grid;\n    grid-template: repeat(11, 1fr)/repeat(11, 1fr);\n}\n\n.board-container:last-child {\n    display: none;\n}\n\n.board-container .x {\n    text-align: center;\n}\n\n.empty {\n    grid-area: 1/1/2/2;\n}\n\n.x-1 {\n    grid-area: 1/2/2/3;\n}\n\n.x-2 {\n    grid-area: 1/3/2/4;\n}\n\n.x-3 {\n    grid-area: 1/4/2/5;\n}\n\n.x-4 {\n    grid-area: 1/5/2/6;\n}\n\n.x-5 {\n    grid-area: 1/6/2/7;\n}\n\n.x-6 {\n    grid-area: 1/7/2/8;\n}\n\n.x-7 {\n    grid-area: 1/8/2/9;\n}\n\n.x-8 {\n    grid-area: 1/9/2/10;\n}\n\n.x-9 {\n    grid-area: 1/10/2/11;\n}\n\n.x-10 {\n    grid-area: 1/11/2/12;\n}\n\n.y-11 {\n    grid-area: 2/1/3/2;\n}\n\n.y-12 {\n    grid-area: 3/1/4/2;\n}\n\n.y-13 {\n    grid-area: 4/1/5/2;\n}\n\n.y-14 {\n    grid-area: 5/1/6/2;\n}\n\n.y-15 {\n    grid-area: 6/1/7/2;\n}\n\n.y-16 {\n    grid-area: 7/1/8/2;\n}\n\n.y-17 {\n    grid-area: 8/1/9/2;\n}\n\n.y-18 {\n    grid-area: 9/1/10/2;\n}\n\n.y-19 {\n    grid-area: 10/1/11/2;\n}\n\n.y-20 {\n    grid-area: 11/1/12/2;\n}\n\n.player-board,\n.computer-board {\n    border: 1px solid rgb(0, 183, 255);\n    grid-area: 2/2/12/12;\n    width: 240px;\n    height: 240px;\n}\n\n.player,\n.computer {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    background-color: rgb(178, 233, 255);\n}\n\n.player div,\n.computer div {\n    border: 1px solid rgb(0, 183, 255);\n    box-sizing: border-box;\n    width: 24px;\n    height: 24px;\n}\n\n.computer div:hover {\n    background-color: rgb(128, 219, 255);\n}\n\n.player div[data-has-ship=\"true\"],\ndiv[data-success=\"true\"],\n.computer div[data-success=\"true\"]:hover {\n    background-color: rgb(204, 144, 117);\n}\n\ndiv[data-missed=\"true\"],\ndiv[data-around=\"true\"],\ndiv[data-around=\"true\"]:hover,\n.computer div[data-missed=\"true\"]:hover {\n    background-color: rgb(83, 206, 255);\n}\n\ndiv[data-missed=\"true\"]::before {\n    content: \"x\";\n    padding: 0 5px;\n    color: rgb(0, 145, 202);\n    font-weight: bold;\n}\n\ndiv[data-success=\"true\"]::before {\n    content: \"x\";\n    padding: 0 5px;\n    color: rgb(136, 83, 58);\n    font-weight: bold;\n}\n\n.player div[data-sunk=\"true\"],\n.computer div[data-sunk=\"true\"],\n.computer div[data-sunk=\"true\"]:hover {\n    background-color: rgb(255, 151, 151);\n}\n\ndiv[data-sunk=\"true\"]::before {\n    content: \"x\";\n    padding: 0 5px;\n    color: red;\n    font-weight: bold;\n}\n\n.form-container {\n    border: 3px rgb(163, 101, 73) solid;\n    background-color: rgb(241, 217, 205);\n    border-radius: 20px;\n    padding: 10px;\n    width: 400px;\n    display: none;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nh2 {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\n.coordinate,\n.length {\n    display: flex;\n    gap: 10px;\n    font-weight: bold;\n}\n\ninput[type=\"number\"] {\n    padding: 0 2px;\n    border: 1px rgb(136, 83, 58) solid;\n    border-radius: 4px;\n}\n\nlabel {\n    font-size: 1rem;\n}\n\n.direction {\n    display: flex;\n    gap: 15px;\n}\n\n.direction p {\n    font-weight: bold;\n}\n\n.error {\n    display: none;\n    color: red;\n    font-weight: bold;\n}\n\n.form-buttons {\n    align-self: center;\n    display: flex;\n    gap: 30px;\n}\n\n.result {\n    display: none;\n    font-weight: bold;\n}\n\nbutton {\n    background-color: rgb(230, 230, 230);\n    border: 1px solid grey;\n    border-radius: 8px;\n    padding: 3px 12px;\n}\n\nbutton:hover {\n    /* background-color: rgb(240, 211, 169); */\n    background-color: silver;\n}\n\n.start,\n.restart {\n    display: none;\n}\n\n.footer {\n    background-color: silver;\n    /* background-color: rgb(104, 104, 104);\n    color: white; */\n    text-align: center;\n    padding: 5px 0;\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAEA;IACI,UAAU;IACV,SAAS;IACT,mCAAmC;AACvC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,wBAAwB;IACxB,eAAe;AACnB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,SAAS;IACT,0CAA0C;AAC9C;;AAEA;IACI,aAAa;IACb,UAAU;AACd;;AAEA;IACI,aAAa;IACb,8CAA8C;AAClD;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;IACI,oBAAoB;AACxB;;AAEA;;IAEI,kCAAkC;IAClC,oBAAoB;IACpB,YAAY;IACZ,aAAa;AACjB;;AAEA;;IAEI,aAAa;IACb,sCAAsC;IACtC,oCAAoC;AACxC;;AAEA;;IAEI,kCAAkC;IAClC,sBAAsB;IACtB,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,oCAAoC;AACxC;;AAEA;;;IAGI,oCAAoC;AACxC;;AAEA;;;;IAII,mCAAmC;AACvC;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,uBAAuB;IACvB,iBAAiB;AACrB;;AAEA;;;IAGI,oCAAoC;AACxC;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,mCAAmC;IACnC,oCAAoC;IACpC,mBAAmB;IACnB,aAAa;IACb,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;;IAEI,aAAa;IACb,SAAS;IACT,iBAAiB;AACrB;;AAEA;IACI,cAAc;IACd,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,oCAAoC;IACpC,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,0CAA0C;IAC1C,wBAAwB;AAC5B;;AAEA;;IAEI,aAAa;AACjB;;AAEA;IACI,wBAAwB;IACxB;mBACe;IACf,kBAAkB;IAClB,cAAc;AAClB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Coming+Soon&display=swap');\n\n* {\n    padding: 0;\n    margin: 0;\n    font-family: 'Coming Soon', cursive;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n}\n\n.header {\n    background-color: silver;\n    padding: 10px 0;\n}\n\nh1 {\n    text-align: center;\n}\n\n.main {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 20px;\n    gap: 20px;\n    /* background-color: rgb(241, 241, 241); */\n}\n\n.boards {\n    display: flex;\n    gap: 100px;\n}\n\n.board-container {\n    display: grid;\n    grid-template: repeat(11, 1fr)/repeat(11, 1fr);\n}\n\n.board-container:last-child {\n    display: none;\n}\n\n.board-container .x {\n    text-align: center;\n}\n\n.empty {\n    grid-area: 1/1/2/2;\n}\n\n.x-1 {\n    grid-area: 1/2/2/3;\n}\n\n.x-2 {\n    grid-area: 1/3/2/4;\n}\n\n.x-3 {\n    grid-area: 1/4/2/5;\n}\n\n.x-4 {\n    grid-area: 1/5/2/6;\n}\n\n.x-5 {\n    grid-area: 1/6/2/7;\n}\n\n.x-6 {\n    grid-area: 1/7/2/8;\n}\n\n.x-7 {\n    grid-area: 1/8/2/9;\n}\n\n.x-8 {\n    grid-area: 1/9/2/10;\n}\n\n.x-9 {\n    grid-area: 1/10/2/11;\n}\n\n.x-10 {\n    grid-area: 1/11/2/12;\n}\n\n.y-11 {\n    grid-area: 2/1/3/2;\n}\n\n.y-12 {\n    grid-area: 3/1/4/2;\n}\n\n.y-13 {\n    grid-area: 4/1/5/2;\n}\n\n.y-14 {\n    grid-area: 5/1/6/2;\n}\n\n.y-15 {\n    grid-area: 6/1/7/2;\n}\n\n.y-16 {\n    grid-area: 7/1/8/2;\n}\n\n.y-17 {\n    grid-area: 8/1/9/2;\n}\n\n.y-18 {\n    grid-area: 9/1/10/2;\n}\n\n.y-19 {\n    grid-area: 10/1/11/2;\n}\n\n.y-20 {\n    grid-area: 11/1/12/2;\n}\n\n.player-board,\n.computer-board {\n    border: 1px solid rgb(0, 183, 255);\n    grid-area: 2/2/12/12;\n    width: 240px;\n    height: 240px;\n}\n\n.player,\n.computer {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    background-color: rgb(178, 233, 255);\n}\n\n.player div,\n.computer div {\n    border: 1px solid rgb(0, 183, 255);\n    box-sizing: border-box;\n    width: 24px;\n    height: 24px;\n}\n\n.computer div:hover {\n    background-color: rgb(128, 219, 255);\n}\n\n.player div[data-has-ship=\"true\"],\ndiv[data-success=\"true\"],\n.computer div[data-success=\"true\"]:hover {\n    background-color: rgb(204, 144, 117);\n}\n\ndiv[data-missed=\"true\"],\ndiv[data-around=\"true\"],\ndiv[data-around=\"true\"]:hover,\n.computer div[data-missed=\"true\"]:hover {\n    background-color: rgb(83, 206, 255);\n}\n\ndiv[data-missed=\"true\"]::before {\n    content: \"x\";\n    padding: 0 5px;\n    color: rgb(0, 145, 202);\n    font-weight: bold;\n}\n\ndiv[data-success=\"true\"]::before {\n    content: \"x\";\n    padding: 0 5px;\n    color: rgb(136, 83, 58);\n    font-weight: bold;\n}\n\n.player div[data-sunk=\"true\"],\n.computer div[data-sunk=\"true\"],\n.computer div[data-sunk=\"true\"]:hover {\n    background-color: rgb(255, 151, 151);\n}\n\ndiv[data-sunk=\"true\"]::before {\n    content: \"x\";\n    padding: 0 5px;\n    color: red;\n    font-weight: bold;\n}\n\n.form-container {\n    border: 3px rgb(163, 101, 73) solid;\n    background-color: rgb(241, 217, 205);\n    border-radius: 20px;\n    padding: 10px;\n    width: 400px;\n    display: none;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\nh2 {\n    text-align: center;\n    font-size: 1.2rem;\n}\n\n.coordinate,\n.length {\n    display: flex;\n    gap: 10px;\n    font-weight: bold;\n}\n\ninput[type=\"number\"] {\n    padding: 0 2px;\n    border: 1px rgb(136, 83, 58) solid;\n    border-radius: 4px;\n}\n\nlabel {\n    font-size: 1rem;\n}\n\n.direction {\n    display: flex;\n    gap: 15px;\n}\n\n.direction p {\n    font-weight: bold;\n}\n\n.error {\n    display: none;\n    color: red;\n    font-weight: bold;\n}\n\n.form-buttons {\n    align-self: center;\n    display: flex;\n    gap: 30px;\n}\n\n.result {\n    display: none;\n    font-weight: bold;\n}\n\nbutton {\n    background-color: rgb(230, 230, 230);\n    border: 1px solid grey;\n    border-radius: 8px;\n    padding: 3px 12px;\n}\n\nbutton:hover {\n    /* background-color: rgb(240, 211, 169); */\n    background-color: silver;\n}\n\n.start,\n.restart {\n    display: none;\n}\n\n.footer {\n    background-color: silver;\n    /* background-color: rgb(104, 104, 104);\n    color: white; */\n    text-align: center;\n    padding: 5px 0;\n}"],"sourceRoot":""}]);
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
                            if ((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || (document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true" && ((i > 0 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`).dataset.sunk == "true") || (i + 2 < 10 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`).dataset.sunk == "true")))) {
                                const cell = document.querySelector(`.${name} div[data-y="${y - 1}"][data-x="${i + 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    };
                    // checking below row for around squares
                    if (y + 1 < 21) {
                        for (let i = 0; i < 10; i++) {
                            if ((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || (document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true" && ((i > 0 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`).dataset.sunk == "true") || (i + 2 < 10 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`).dataset.sunk == "true")))) {
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
                            if ((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || (document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true" && ((i > 0 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`).dataset.sunk == "true") || (i + 2 < 10 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`).dataset.sunk == "true")))) {
                                const cell = document.querySelector(`.${name} div[data-y="${y - 1}"][data-x="${i + 1}"]`);
                                cell.dataset.around = true;
                            };
                        };
                    };
                    // checking below row for around squares
                    if (y + 1 < 21) {
                        for (let i = 0; i < 10; i++) {
                            if ((gameboard.board[y - 11][i].boat != undefined && gameboard.board[y - 11][i].boat.sunk == true) || (document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 1}"]`).dataset.around == "true" && ((i > 0 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i}"]`).dataset.sunk == "true") || (i + 2 < 10 && document.querySelector(`.${name} div[data-y="${y}"][data-x="${i + 2}"]`).dataset.sunk == "true")))) {
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
                            if ((gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) || (document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`).dataset.around == "true" && ((i + 10 > 10 && document.querySelector(`.${name} div[data-y="${i + 10}"][data-x="${x}"]`).dataset.sunk == "true") || (i + 12 < 21 && document.querySelector(`.${name} div[data-y="${i + 12}"][data-x="${x}"]`).dataset.sunk == "true")))) {
                                const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x - 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    };
                    // checking after column for around squares
                    if (x + 1 < 11) {
                        for (let i = 0; i < 10; i++) {
                            if ((gameboard.board[i][x - 1].boat != undefined && gameboard.board[i][x - 1].boat.sunk == true) || (document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x}"]`).dataset.around == "true" && ((i + 10 > 10 && document.querySelector(`.${name} div[data-y="${i + 10}"][data-x="${x}"]`).dataset.sunk == "true") || (i + 12 < 21 && document.querySelector(`.${name} div[data-y="${i + 12}"][data-x="${x}"]`).dataset.sunk == "true")))) {
                                const cell = document.querySelector(`.${name} div[data-y="${i + 11}"][data-x="${x + 1}"]`);
                                cell.dataset.around = true;
                            }
                        };
                    }
                }
            };
            const disable = document.querySelectorAll(`.${name} div[data-around="true"]`);
            disable.forEach(square => square.replaceWith(square.cloneNode()));
            player.changeTurns(x, y, gameboard, computer);
            while (player.turn == false) {
                let target = computer.attackEnemy(playerBoard, player);
                getAttackedByComputer(target[0], target[1], playerBoard, "player");
                if (playerBoard.gameOver == true) {
                    gameIsOver("GAME OVER. You lost! All your ships are sunk.");
                    squaresDom.forEach(spot => spot.replaceWith(spot.cloneNode()));
                    break;
                };
            };
            if (gameboard.gameOver == true) {
                gameIsOver("GAME OVER. You won! Congratulations! All of the opponent's ships are sunk.");
                squaresDom.forEach(spot => spot.replaceWith(spot.cloneNode()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLFFBQVE7QUFDakMsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDM1VBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNvQztBQUN5Qjs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IsaURBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsaURBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qiw2Q0FBUztBQUN2QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNkNBQVM7QUFDekM7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBDQUFNO0FBQy9CO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQ0FBTTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFTO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q29taW5nK1Nvb24mZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdDb21pbmcgU29vbicsIGN1cnNpdmU7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbn1cXG5cXG5oMSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBmbGV4OiAxO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKTsgKi9cXG59XFxuXFxuLmJvYXJkcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTAwcHg7XFxufVxcblxcbi5ib2FyZC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlOiByZXBlYXQoMTEsIDFmcikvcmVwZWF0KDExLCAxZnIpO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyOmxhc3QtY2hpbGQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIC54IHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgICBncmlkLWFyZWE6IDEvMS8yLzI7XFxufVxcblxcbi54LTEge1xcbiAgICBncmlkLWFyZWE6IDEvMi8yLzM7XFxufVxcblxcbi54LTIge1xcbiAgICBncmlkLWFyZWE6IDEvMy8yLzQ7XFxufVxcblxcbi54LTMge1xcbiAgICBncmlkLWFyZWE6IDEvNC8yLzU7XFxufVxcblxcbi54LTQge1xcbiAgICBncmlkLWFyZWE6IDEvNS8yLzY7XFxufVxcblxcbi54LTUge1xcbiAgICBncmlkLWFyZWE6IDEvNi8yLzc7XFxufVxcblxcbi54LTYge1xcbiAgICBncmlkLWFyZWE6IDEvNy8yLzg7XFxufVxcblxcbi54LTcge1xcbiAgICBncmlkLWFyZWE6IDEvOC8yLzk7XFxufVxcblxcbi54LTgge1xcbiAgICBncmlkLWFyZWE6IDEvOS8yLzEwO1xcbn1cXG5cXG4ueC05IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEwLzIvMTE7XFxufVxcblxcbi54LTEwIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzExLzIvMTI7XFxufVxcblxcbi55LTExIHtcXG4gICAgZ3JpZC1hcmVhOiAyLzEvMy8yO1xcbn1cXG5cXG4ueS0xMiB7XFxuICAgIGdyaWQtYXJlYTogMy8xLzQvMjtcXG59XFxuXFxuLnktMTMge1xcbiAgICBncmlkLWFyZWE6IDQvMS81LzI7XFxufVxcblxcbi55LTE0IHtcXG4gICAgZ3JpZC1hcmVhOiA1LzEvNi8yO1xcbn1cXG5cXG4ueS0xNSB7XFxuICAgIGdyaWQtYXJlYTogNi8xLzcvMjtcXG59XFxuXFxuLnktMTYge1xcbiAgICBncmlkLWFyZWE6IDcvMS84LzI7XFxufVxcblxcbi55LTE3IHtcXG4gICAgZ3JpZC1hcmVhOiA4LzEvOS8yO1xcbn1cXG5cXG4ueS0xOCB7XFxuICAgIGdyaWQtYXJlYTogOS8xLzEwLzI7XFxufVxcblxcbi55LTE5IHtcXG4gICAgZ3JpZC1hcmVhOiAxMC8xLzExLzI7XFxufVxcblxcbi55LTIwIHtcXG4gICAgZ3JpZC1hcmVhOiAxMS8xLzEyLzI7XFxufVxcblxcbi5wbGF5ZXItYm9hcmQsXFxuLmNvbXB1dGVyLWJvYXJkIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE4MywgMjU1KTtcXG4gICAgZ3JpZC1hcmVhOiAyLzIvMTIvMTI7XFxuICAgIHdpZHRoOiAyNDBweDtcXG4gICAgaGVpZ2h0OiAyNDBweDtcXG59XFxuXFxuLnBsYXllcixcXG4uY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OCwgMjMzLCAyNTUpO1xcbn1cXG5cXG4ucGxheWVyIGRpdixcXG4uY29tcHV0ZXIgZGl2IHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDAsIDE4MywgMjU1KTtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG59XFxuXFxuLmNvbXB1dGVyIGRpdjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMjgsIDIxOSwgMjU1KTtcXG59XFxuXFxuLnBsYXllciBkaXZbZGF0YS1oYXMtc2hpcD1cXFwidHJ1ZVxcXCJdLFxcbmRpdltkYXRhLXN1Y2Nlc3M9XFxcInRydWVcXFwiXSxcXG4uY29tcHV0ZXIgZGl2W2RhdGEtc3VjY2Vzcz1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTQ0LCAxMTcpO1xcbn1cXG5cXG5kaXZbZGF0YS1taXNzZWQ9XFxcInRydWVcXFwiXSxcXG5kaXZbZGF0YS1hcm91bmQ9XFxcInRydWVcXFwiXSxcXG5kaXZbZGF0YS1hcm91bmQ9XFxcInRydWVcXFwiXTpob3ZlcixcXG4uY29tcHV0ZXIgZGl2W2RhdGEtbWlzc2VkPVxcXCJ0cnVlXFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDIwNiwgMjU1KTtcXG59XFxuXFxuZGl2W2RhdGEtbWlzc2VkPVxcXCJ0cnVlXFxcIl06OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJ4XFxcIjtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGNvbG9yOiByZ2IoMCwgMTQ1LCAyMDIpO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZGl2W2RhdGEtc3VjY2Vzcz1cXFwidHJ1ZVxcXCJdOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwieFxcXCI7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBjb2xvcjogcmdiKDEzNiwgODMsIDU4KTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5wbGF5ZXIgZGl2W2RhdGEtc3Vuaz1cXFwidHJ1ZVxcXCJdLFxcbi5jb21wdXRlciBkaXZbZGF0YS1zdW5rPVxcXCJ0cnVlXFxcIl0sXFxuLmNvbXB1dGVyIGRpdltkYXRhLXN1bms9XFxcInRydWVcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDE1MSwgMTUxKTtcXG59XFxuXFxuZGl2W2RhdGEtc3Vuaz1cXFwidHJ1ZVxcXCJdOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwieFxcXCI7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmZvcm0tY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAzcHggcmdiKDE2MywgMTAxLCA3Mykgc29saWQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDIxNywgMjA1KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG5oMiB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5jb29yZGluYXRlLFxcbi5sZW5ndGgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJudW1iZXJcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcbiAgICBib3JkZXI6IDFweCByZ2IoMTM2LCA4MywgNTgpIHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZGlyZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxNXB4O1xcbn1cXG5cXG4uZGlyZWN0aW9uIHAge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtLWJ1dHRvbnMge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMzBweDtcXG59XFxuXFxuLnJlc3VsdCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzAsIDIzMCk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgcGFkZGluZzogM3B4IDEycHg7XFxufVxcblxcbmJ1dHRvbjpob3ZlciB7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDIxMSwgMTY5KTsgKi9cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbn1cXG5cXG4uc3RhcnQsXFxuLnJlc3RhcnQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTA0LCAxMDQsIDEwNCk7XFxuICAgIGNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFNBQVM7SUFDVCwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhDQUE4QztBQUNsRDs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7O0lBRUksa0NBQWtDO0lBQ2xDLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLG9DQUFvQztBQUN4Qzs7QUFFQTs7SUFFSSxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBOzs7SUFHSSxvQ0FBb0M7QUFDeEM7O0FBRUE7Ozs7SUFJSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLHVCQUF1QjtJQUN2QixpQkFBaUI7QUFDckI7O0FBRUE7OztJQUdJLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2IsU0FBUztJQUNULGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQ0FBa0M7SUFDbEMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyx3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QjttQkFDZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbWluZytTb29uJmRpc3BsYXk9c3dhcCcpO1xcblxcbioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnQ29taW5nIFNvb24nLCBjdXJzaXZlO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBzaWx2ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuXFxuaDEge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSk7ICovXFxufVxcblxcbi5ib2FyZHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEwMHB4O1xcbn1cXG5cXG4uYm9hcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogcmVwZWF0KDExLCAxZnIpL3JlcGVhdCgxMSwgMWZyKTtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lcjpsYXN0LWNoaWxkIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJvYXJkLWNvbnRhaW5lciAueCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmVtcHR5IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzEvMi8yO1xcbn1cXG5cXG4ueC0xIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzIvMi8zO1xcbn1cXG5cXG4ueC0yIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzMvMi80O1xcbn1cXG5cXG4ueC0zIHtcXG4gICAgZ3JpZC1hcmVhOiAxLzQvMi81O1xcbn1cXG5cXG4ueC00IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzUvMi82O1xcbn1cXG5cXG4ueC01IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzYvMi83O1xcbn1cXG5cXG4ueC02IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzcvMi84O1xcbn1cXG5cXG4ueC03IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzgvMi85O1xcbn1cXG5cXG4ueC04IHtcXG4gICAgZ3JpZC1hcmVhOiAxLzkvMi8xMDtcXG59XFxuXFxuLngtOSB7XFxuICAgIGdyaWQtYXJlYTogMS8xMC8yLzExO1xcbn1cXG5cXG4ueC0xMCB7XFxuICAgIGdyaWQtYXJlYTogMS8xMS8yLzEyO1xcbn1cXG5cXG4ueS0xMSB7XFxuICAgIGdyaWQtYXJlYTogMi8xLzMvMjtcXG59XFxuXFxuLnktMTIge1xcbiAgICBncmlkLWFyZWE6IDMvMS80LzI7XFxufVxcblxcbi55LTEzIHtcXG4gICAgZ3JpZC1hcmVhOiA0LzEvNS8yO1xcbn1cXG5cXG4ueS0xNCB7XFxuICAgIGdyaWQtYXJlYTogNS8xLzYvMjtcXG59XFxuXFxuLnktMTUge1xcbiAgICBncmlkLWFyZWE6IDYvMS83LzI7XFxufVxcblxcbi55LTE2IHtcXG4gICAgZ3JpZC1hcmVhOiA3LzEvOC8yO1xcbn1cXG5cXG4ueS0xNyB7XFxuICAgIGdyaWQtYXJlYTogOC8xLzkvMjtcXG59XFxuXFxuLnktMTgge1xcbiAgICBncmlkLWFyZWE6IDkvMS8xMC8yO1xcbn1cXG5cXG4ueS0xOSB7XFxuICAgIGdyaWQtYXJlYTogMTAvMS8xMS8yO1xcbn1cXG5cXG4ueS0yMCB7XFxuICAgIGdyaWQtYXJlYTogMTEvMS8xMi8yO1xcbn1cXG5cXG4ucGxheWVyLWJvYXJkLFxcbi5jb21wdXRlci1ib2FyZCB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAxODMsIDI1NSk7XFxuICAgIGdyaWQtYXJlYTogMi8yLzEyLzEyO1xcbiAgICB3aWR0aDogMjQwcHg7XFxuICAgIGhlaWdodDogMjQwcHg7XFxufVxcblxcbi5wbGF5ZXIsXFxuLmNvbXB1dGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzgsIDIzMywgMjU1KTtcXG59XFxuXFxuLnBsYXllciBkaXYsXFxuLmNvbXB1dGVyIGRpdiB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigwLCAxODMsIDI1NSk7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxufVxcblxcbi5jb21wdXRlciBkaXY6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI4LCAyMTksIDI1NSk7XFxufVxcblxcbi5wbGF5ZXIgZGl2W2RhdGEtaGFzLXNoaXA9XFxcInRydWVcXFwiXSxcXG5kaXZbZGF0YS1zdWNjZXNzPVxcXCJ0cnVlXFxcIl0sXFxuLmNvbXB1dGVyIGRpdltkYXRhLXN1Y2Nlc3M9XFxcInRydWVcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDQsIDE0NCwgMTE3KTtcXG59XFxuXFxuZGl2W2RhdGEtbWlzc2VkPVxcXCJ0cnVlXFxcIl0sXFxuZGl2W2RhdGEtYXJvdW5kPVxcXCJ0cnVlXFxcIl0sXFxuZGl2W2RhdGEtYXJvdW5kPVxcXCJ0cnVlXFxcIl06aG92ZXIsXFxuLmNvbXB1dGVyIGRpdltkYXRhLW1pc3NlZD1cXFwidHJ1ZVxcXCJdOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgzLCAyMDYsIDI1NSk7XFxufVxcblxcbmRpdltkYXRhLW1pc3NlZD1cXFwidHJ1ZVxcXCJdOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwieFxcXCI7XFxuICAgIHBhZGRpbmc6IDAgNXB4O1xcbiAgICBjb2xvcjogcmdiKDAsIDE0NSwgMjAyKTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmRpdltkYXRhLXN1Y2Nlc3M9XFxcInRydWVcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcInhcXFwiO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgY29sb3I6IHJnYigxMzYsIDgzLCA1OCk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucGxheWVyIGRpdltkYXRhLXN1bms9XFxcInRydWVcXFwiXSxcXG4uY29tcHV0ZXIgZGl2W2RhdGEtc3Vuaz1cXFwidHJ1ZVxcXCJdLFxcbi5jb21wdXRlciBkaXZbZGF0YS1zdW5rPVxcXCJ0cnVlXFxcIl06aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAxNTEsIDE1MSk7XFxufVxcblxcbmRpdltkYXRhLXN1bms9XFxcInRydWVcXFwiXTo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcInhcXFwiO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5mb3JtLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogM3B4IHJnYigxNjMsIDEwMSwgNzMpIHNvbGlkO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyMTcsIDIwNSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuaDIge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uY29vcmRpbmF0ZSxcXG4ubGVuZ3RoIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl0ge1xcbiAgICBwYWRkaW5nOiAwIDJweDtcXG4gICAgYm9yZGVyOiAxcHggcmdiKDEzNiwgODMsIDU4KSBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmRpcmVjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMTVweDtcXG59XFxuXFxuLmRpcmVjdGlvbiBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZm9ybS1idXR0b25zIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDMwcHg7XFxufVxcblxcbi5yZXN1bHQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMwLCAyMzApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHBhZGRpbmc6IDNweCAxMnB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCAyMTEsIDE2OSk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG59XFxuXFxuLnN0YXJ0LFxcbi5yZXN0YXJ0IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHNpbHZlcjtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNCwgMTA0LCAxMDQpO1xcbiAgICBjb2xvcjogd2hpdGU7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IFNoaXAsIEdhbWVib2FyZCwgU3F1YXJlLCBQbGF5ZXIgfSBmcm9tIFwiLi9sb2dpY1wiO1xuXG5mdW5jdGlvbiBjcmVhdGVCb2FyZChib2FyZCwgbmFtZSkge1xuICAgIC8vIGFyZ3VlbWVudCBpcyBwbGF5ZXJCb2FyZC5ib2FyZCwgaS4gZS4gR2FtZWJvYXJkIGNsYXNzIGJvYXJkIHByb3BlcnR5XG4gICAgY29uc3QgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoYCR7bmFtZX1gKTtcblxuICAgIGZvciAobGV0IGkgPSAxMTsgaSA8IDIxOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDE7IGogPCAxMTsgaisrKSB7XG4gICAgICAgICAgICBjb25zdCBzcXVhcmVEb20gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgc3F1YXJlRG9tLmRhdGFzZXQueSA9IGk7XG4gICAgICAgICAgICBzcXVhcmVEb20uZGF0YXNldC54ID0gajtcblxuICAgICAgICAgICAgc3F1YXJlRG9tLmRhdGFzZXQuaGFzU2hpcCA9IGJvYXJkW2kgLSAxMV1baiAtIDFdLmhhc1NoaXA7XG4gICAgICAgICAgICBzcXVhcmVEb20uZGF0YXNldC5jYW5QbGFjZVNoaXAgPSBib2FyZFtpIC0gMTFdW2ogLSAxXS5jYW5QbGFjZVNoaXA7XG4gICAgICAgICAgICBpZiAoYm9hcmRbaSAtIDExXVtqIC0gMV0uYm9hdCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVEb20uZGF0YXNldC5sZW5ndGggPSBib2FyZFtpIC0gMTFdW2ogLSAxXS5ib2F0Lmxlbmd0aDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKHNxdWFyZURvbSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpZWxkO1xufTtcblxuZnVuY3Rpb24gZGlzcGxheVNoaXAoeCwgeSwgbGVuZ3RoLCBkaXJlY3Rpb24sIG5hbWUpIHtcbiAgICAvLyBhcmd1bWVudCBpcyBwbGF5ZXJCb2FyZCwgaS4gZS4gR2FtZWJvYXJkIGNsYXNzXG4gICAgaWYgKGxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgICAgIHNoaXAuZGF0YXNldC5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgc2hpcC5kYXRhc2V0Lmxlbmd0aCA9IDFcbiAgICB9O1xuICAgIGlmIChkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgaWYgKGxlbmd0aCA9PSAyKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHt4ICsgMX1cIl1gKTtcbiAgICAgICAgICAgIHNoaXAxLmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwMi5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcDEuZGF0YXNldC5sZW5ndGggPSAyO1xuICAgICAgICAgICAgc2hpcDIuZGF0YXNldC5sZW5ndGggPSAyXG4gICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09IDMpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHt4fVwiXWApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke3ggKyAxfVwiXWApO1xuICAgICAgICAgICAgY29uc3Qgc2hpcDMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke3ggKyAyfVwiXWApO1xuICAgICAgICAgICAgc2hpcDEuZGF0YXNldC5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAyLmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwMy5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcDEuZGF0YXNldC5sZW5ndGggPSAzO1xuICAgICAgICAgICAgc2hpcDIuZGF0YXNldC5sZW5ndGggPSAzO1xuICAgICAgICAgICAgc2hpcDMuZGF0YXNldC5sZW5ndGggPSAzO1xuICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PSA0KSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHt4ICsgMX1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHt4ICsgMn1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXA0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHt4ICsgM31cIl1gKTtcbiAgICAgICAgICAgIHNoaXAxLmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwMi5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcDMuZGF0YXNldC5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXA0LmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwMS5kYXRhc2V0Lmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICBzaGlwMi5kYXRhc2V0Lmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICBzaGlwMy5kYXRhc2V0Lmxlbmd0aCA9IDQ7XG4gICAgICAgICAgICBzaGlwNC5kYXRhc2V0Lmxlbmd0aCA9IDQ7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChkaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgIGlmIChsZW5ndGggPT0gMikge1xuICAgICAgICAgICAgY29uc3Qgc2hpcDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3kgKyAxfVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgICAgICAgICBzaGlwMS5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcDIuZGF0YXNldC5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAxLmRhdGFzZXQubGVuZ3RoID0gMjtcbiAgICAgICAgICAgIHNoaXAyLmRhdGFzZXQubGVuZ3RoID0gMlxuICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eSArIDF9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXAzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eSArIDJ9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgIHNoaXAxLmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwMi5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcDMuZGF0YXNldC5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAxLmRhdGFzZXQubGVuZ3RoID0gMztcbiAgICAgICAgICAgIHNoaXAyLmRhdGFzZXQubGVuZ3RoID0gMztcbiAgICAgICAgICAgIHNoaXAzLmRhdGFzZXQubGVuZ3RoID0gMztcbiAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT0gNCkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcDEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3kgKyAxfVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3kgKyAyfVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwNCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3kgKyAzfVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgICAgICAgICBzaGlwMS5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcDIuZGF0YXNldC5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAzLmRhdGFzZXQuaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICBzaGlwNC5kYXRhc2V0Lmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcDEuZGF0YXNldC5sZW5ndGggPSA0O1xuICAgICAgICAgICAgc2hpcDIuZGF0YXNldC5sZW5ndGggPSA0O1xuICAgICAgICAgICAgc2hpcDMuZGF0YXNldC5sZW5ndGggPSA0O1xuICAgICAgICAgICAgc2hpcDQuZGF0YXNldC5sZW5ndGggPSA0O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuZnVuY3Rpb24gYWRkRXZlbnRzKGdhbWVib2FyZCwgbmFtZSwgcGxheWVyLCBwbGF5ZXJCb2FyZCwgY29tcHV0ZXIpIHtcbiAgICAvLyBnYW1lYm9hcmQgYXJndWVtZW50IHBsYXllckJvYXJkLCBpLiBlLiBHYW1lYm9hcmQgY2xhc3Mgb2JqZWN0XG4gICAgY29uc3Qgc3F1YXJlc0RvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke25hbWV9IGRpdmApO1xuXG4gICAgc3F1YXJlc0RvbS5mb3JFYWNoKChzcXVhcmUpID0+IHtcbiAgICAgICAgY29uc3QgeCA9IE51bWJlcihzcXVhcmUuZGF0YXNldC54KTtcbiAgICAgICAgY29uc3QgeSA9IE51bWJlcihzcXVhcmUuZGF0YXNldC55KTtcblxuICAgICAgICBmdW5jdGlvbiBhdHRhY2soKSB7XG4gICAgICAgICAgICBnZXRBdHRhY2tlZCh4LCB5LCBnYW1lYm9hcmQsIG5hbWUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNxdWFyZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXR0YWNrLCB7IG9uY2U6IHRydWUgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0QXR0YWNrZWQoeCwgeSwgZ2FtZWJvYXJkLCBuYW1lKSB7XG4gICAgICAgICAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4LCB5KTtcbiAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0Lm1pc3NlZCA9IGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW3ggLSAxXS5taXNzZWRBdHRhY2s7XG4gICAgICAgICAgICBzcXVhcmUuZGF0YXNldC5zdWNjZXNzID0gZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1beCAtIDFdLnN1Y2Nlc3NmdWxBdHRhY2s7XG4gICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1beCAtIDFdLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW3ggLSAxXS5ib2F0LnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVt4IC0gMV0uYm9hdC5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmUuZGF0YXNldC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2tpbmcgY3VycmVudCByb3cgZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQuc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpIC0gMV0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baSArIDFdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aSArIDJ9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2tpbmcgYWJvdmUgcm93IGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgICAgICAgICBpZiAoeSAtIDEgPiAxMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpXS5ib2F0ICE9IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpXS5ib2F0LnN1bmsgPT0gdHJ1ZSkgfHwgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aSArIDF9XCJdYCkuZGF0YXNldC5hcm91bmQgPT0gXCJ0cnVlXCIgJiYgKChpID4gMCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2l9XCJdYCkuZGF0YXNldC5zdW5rID09IFwidHJ1ZVwiKSB8fCAoaSArIDIgPCAxMCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2kgKyAyfVwiXWApLmRhdGFzZXQuc3VuayA9PSBcInRydWVcIikpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eSAtIDF9XCJdW2RhdGEteD1cIiR7aSArIDF9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNraW5nIGJlbG93IHJvdyBmb3IgYXJvdW5kIHNxdWFyZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgKyAxIDwgMjEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApLmRhdGFzZXQuYXJvdW5kID09IFwidHJ1ZVwiICYmICgoaSA+IDAgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpfVwiXWApLmRhdGFzZXQuc3VuayA9PSBcInRydWVcIikgfHwgKGkgKyAyIDwgMTAgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpICsgMn1cIl1gKS5kYXRhc2V0LnN1bmsgPT0gXCJ0cnVlXCIpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3kgKyAxfVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1beCAtIDFdLmJvYXQuZGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc3BsYXlpbmcgc3VuayBzaGlwXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQuc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aSArIDF9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2luZyBjdXJyZW50IHJvdyBmb3IgYXJvdW5kIHNxdWFyZXNcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2kgLSAxXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2l9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpICsgMV0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpICsgMn1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2luZyBhYm92ZSByb3cgZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICAgICAgICAgIGlmICh5IC0gMSA+IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2ldLmJvYXQuc3VuayA9PSB0cnVlKSB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpICsgMX1cIl1gKS5kYXRhc2V0LmFyb3VuZCA9PSBcInRydWVcIiAmJiAoKGkgPiAwICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aX1cIl1gKS5kYXRhc2V0LnN1bmsgPT0gXCJ0cnVlXCIpIHx8IChpICsgMiA8IDEwICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aSArIDJ9XCJdYCkuZGF0YXNldC5zdW5rID09IFwidHJ1ZVwiKSkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5IC0gMX1cIl1bZGF0YS14PVwiJHtpICsgMX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNraW5nIGJlbG93IHJvdyBmb3IgYXJvdW5kIHNxdWFyZXNcbiAgICAgICAgICAgICAgICAgICAgaWYgKHkgKyAxIDwgMjEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApLmRhdGFzZXQuYXJvdW5kID09IFwidHJ1ZVwiICYmICgoaSA+IDAgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpfVwiXWApLmRhdGFzZXQuc3VuayA9PSBcInRydWVcIikgfHwgKGkgKyAyIDwgMTAgJiYgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpICsgMn1cIl1gKS5kYXRhc2V0LnN1bmsgPT0gXCJ0cnVlXCIpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3kgKyAxfVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1beCAtIDFdLmJvYXQuZGlyZWN0aW9uID09IFwidmVydGljYWxcIikge1xuICAgICAgICAgICAgICAgICAgICAvLyBkaXNwbGF5aW5nIHN1bmsgc2hpcFxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDFdLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMV0uYm9hdC5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7aSArIDExfVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAvLyBjaGVja2luZyBjdXJyZW50IGNvbHVtbiBmb3IgYXJvdW5kIHNxdWFyZXNcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW2ldW3ggLSAxXS5ib2F0ICE9IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDFdLmJvYXQuc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbaSAtIDFdW3ggLSAxXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHtpICsgMTB9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFtpICsgMV1beCAtIDFdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke2kgKyAxMn1cIl1bZGF0YS14PVwiJHt4fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNraW5nIGJlZm9yZSBjb2x1bW4gZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICAgICAgICAgIGlmICh4IC0gMSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZ2FtZWJvYXJkLmJvYXJkW2ldW3ggLSAxXS5ib2F0ICE9IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDFdLmJvYXQuc3VuayA9PSB0cnVlKSB8fCAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7aSArIDExfVwiXVtkYXRhLXg9XCIke3h9XCJdYCkuZGF0YXNldC5hcm91bmQgPT0gXCJ0cnVlXCIgJiYgKChpICsgMTAgPiAxMCAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHtpICsgMTB9XCJdW2RhdGEteD1cIiR7eH1cIl1gKS5kYXRhc2V0LnN1bmsgPT0gXCJ0cnVlXCIpIHx8IChpICsgMTIgPCAyMSAmJiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHtpICsgMTJ9XCJdW2RhdGEteD1cIiR7eH1cIl1gKS5kYXRhc2V0LnN1bmsgPT0gXCJ0cnVlXCIpKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke2kgKyAxMX1cIl1bZGF0YS14PVwiJHt4IC0gMX1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2tpbmcgYWZ0ZXIgY29sdW1uIGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgICAgICAgICBpZiAoeCArIDEgPCAxMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDFdLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMV0uYm9hdC5zdW5rID09IHRydWUpIHx8IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHtpICsgMTF9XCJdW2RhdGEteD1cIiR7eH1cIl1gKS5kYXRhc2V0LmFyb3VuZCA9PSBcInRydWVcIiAmJiAoKGkgKyAxMCA+IDEwICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke2kgKyAxMH1cIl1bZGF0YS14PVwiJHt4fVwiXWApLmRhdGFzZXQuc3VuayA9PSBcInRydWVcIikgfHwgKGkgKyAxMiA8IDIxICYmIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke2kgKyAxMn1cIl1bZGF0YS14PVwiJHt4fVwiXWApLmRhdGFzZXQuc3VuayA9PSBcInRydWVcIikpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7aSArIDExfVwiXVtkYXRhLXg9XCIke3ggKyAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGRpc2FibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtuYW1lfSBkaXZbZGF0YS1hcm91bmQ9XCJ0cnVlXCJdYCk7XG4gICAgICAgICAgICBkaXNhYmxlLmZvckVhY2goc3F1YXJlID0+IHNxdWFyZS5yZXBsYWNlV2l0aChzcXVhcmUuY2xvbmVOb2RlKCkpKTtcbiAgICAgICAgICAgIHBsYXllci5jaGFuZ2VUdXJucyh4LCB5LCBnYW1lYm9hcmQsIGNvbXB1dGVyKTtcbiAgICAgICAgICAgIHdoaWxlIChwbGF5ZXIudHVybiA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBjb21wdXRlci5hdHRhY2tFbmVteShwbGF5ZXJCb2FyZCwgcGxheWVyKTtcbiAgICAgICAgICAgICAgICBnZXRBdHRhY2tlZEJ5Q29tcHV0ZXIodGFyZ2V0WzBdLCB0YXJnZXRbMV0sIHBsYXllckJvYXJkLCBcInBsYXllclwiKTtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyQm9hcmQuZ2FtZU92ZXIgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBnYW1lSXNPdmVyKFwiR0FNRSBPVkVSLiBZb3UgbG9zdCEgQWxsIHlvdXIgc2hpcHMgYXJlIHN1bmsuXCIpO1xuICAgICAgICAgICAgICAgICAgICBzcXVhcmVzRG9tLmZvckVhY2goc3BvdCA9PiBzcG90LnJlcGxhY2VXaXRoKHNwb3QuY2xvbmVOb2RlKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmdhbWVPdmVyID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBnYW1lSXNPdmVyKFwiR0FNRSBPVkVSLiBZb3Ugd29uISBDb25ncmF0dWxhdGlvbnMhIEFsbCBvZiB0aGUgb3Bwb25lbnQncyBzaGlwcyBhcmUgc3Vuay5cIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlc0RvbS5mb3JFYWNoKHNwb3QgPT4gc3BvdC5yZXBsYWNlV2l0aChzcG90LmNsb25lTm9kZSgpKSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gZ2V0QXR0YWNrZWRCeUNvbXB1dGVyKHgsIHksIGdhbWVib2FyZCwgbmFtZSkge1xuICAgIGNvbnN0IHNxdWFyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICBzcXVhcmUuZGF0YXNldC5taXNzZWQgPSBnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVt4IC0gMV0ubWlzc2VkQXR0YWNrO1xuICAgIHNxdWFyZS5kYXRhc2V0LnN1Y2Nlc3MgPSBnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVt4IC0gMV0uc3VjY2Vzc2Z1bEF0dGFjaztcbiAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1beCAtIDFdLmJvYXQgIT0gdW5kZWZpbmVkICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW3ggLSAxXS5ib2F0LnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1beCAtIDFdLmJvYXQubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIHNxdWFyZS5kYXRhc2V0LnN1bmsgPSB0cnVlO1xuICAgICAgICAgICAgLy8gY2hlY2tpbmcgY3VycmVudCByb3cgZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baSAtIDFdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2l9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2kgKyAxXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpICsgMn1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBjaGVja2luZyBhYm92ZSByb3cgZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICBpZiAoeSAtIDEgPiAxMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpXS5ib2F0ICE9IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpXS5ib2F0LnN1bmsgPT0gdHJ1ZSkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpICsgMX1cIl1gKS5kYXRhc2V0LmFyb3VuZCA9PSBcInRydWVcIikgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMl1baV0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eSAtIDF9XCJdW2RhdGEteD1cIiR7aSArIDF9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY2hlY2tpbmcgYmVsb3cgcm93IGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgaWYgKHkgKyAxIDwgMjEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aSArIDF9XCJdYCkuZGF0YXNldC5hcm91bmQgPT0gXCJ0cnVlXCIpICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTBdW2ldLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3kgKyAxfVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVt4IC0gMV0uYm9hdC5kaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIC8vIGRpc3BsYXlpbmcgc3VuayBzaGlwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aSArIDF9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY2hlY2tpbmcgY3VycmVudCByb3cgZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baSAtIDFdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHt5fVwiXVtkYXRhLXg9XCIke2l9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFt5IC0gMTFdW2kgKyAxXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpICsgMn1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBjaGVja2luZyBhYm92ZSByb3cgZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICBpZiAoeSAtIDEgPiAxMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpXS5ib2F0ICE9IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVtpXS5ib2F0LnN1bmsgPT0gdHJ1ZSkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eX1cIl1bZGF0YS14PVwiJHtpICsgMX1cIl1gKS5kYXRhc2V0LmFyb3VuZCA9PSBcInRydWVcIikgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMl1baV0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7eSAtIDF9XCJdW2RhdGEteD1cIiR7aSArIDF9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY2hlY2tpbmcgYmVsb3cgcm93IGZvciBhcm91bmQgc3F1YXJlc1xuICAgICAgICAgICAgaWYgKHkgKyAxIDwgMjEpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCgoZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW3kgLSAxMV1baV0uYm9hdC5zdW5rID09IHRydWUpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3l9XCJdW2RhdGEteD1cIiR7aSArIDF9XCJdYCkuZGF0YXNldC5hcm91bmQgPT0gXCJ0cnVlXCIpICYmIGdhbWVib2FyZC5ib2FyZFt5IC0gMTBdW2ldLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke3kgKyAxfVwiXVtkYXRhLXg9XCIke2kgKyAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lYm9hcmQuYm9hcmRbeSAtIDExXVt4IC0gMV0uYm9hdC5kaXJlY3Rpb24gPT0gXCJ2ZXJ0aWNhbFwiKSB7XG4gICAgICAgICAgICAvLyBkaXNwbGF5aW5nIHN1bmsgc2hpcFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW2ldW3ggLSAxXS5ib2F0LnN1bmsgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7aSArIDExfVwiXVtkYXRhLXg9XCIke3h9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5zdW5rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gY2hlY2tpbmcgY3VycmVudCBjb2x1bW4gZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW2ldW3ggLSAxXS5ib2F0ICE9IHVuZGVmaW5lZCAmJiBnYW1lYm9hcmQuYm9hcmRbaV1beCAtIDFdLmJvYXQuc3VuayA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFtpIC0gMV1beCAtIDFdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHtpICsgMTB9XCJdW2RhdGEteD1cIiR7eH1cIl1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPCA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW2kgKyAxXVt4IC0gMV0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke25hbWV9IGRpdltkYXRhLXk9XCIke2kgKyAxMn1cIl1bZGF0YS14PVwiJHt4fVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuZGF0YXNldC5hcm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNoZWNraW5nIGJlZm9yZSBjb2x1bW4gZm9yIGFyb3VuZCBzcXVhcmVzXG4gICAgICAgICAgICBpZiAoeCAtIDEgPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoKGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW2ldW3ggLSAxXS5ib2F0LnN1bmsgPT0gdHJ1ZSkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7aSArIDExfVwiXVtkYXRhLXg9XCIke3h9XCJdYCkuZGF0YXNldC5hcm91bmQgPT0gXCJ0cnVlXCIpICYmIGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMl0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7aSArIDExfVwiXVtkYXRhLXg9XCIke3ggLSAxfVwiXWApO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5kYXRhc2V0LmFyb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNoZWNraW5nIGFmdGVyIGNvbHVtbiBmb3IgYXJvdW5kIHNxdWFyZXNcbiAgICAgICAgICAgIGlmICh4ICsgMSA8IDExKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgoKGdhbWVib2FyZC5ib2FyZFtpXVt4IC0gMV0uYm9hdCAhPSB1bmRlZmluZWQgJiYgZ2FtZWJvYXJkLmJvYXJkW2ldW3ggLSAxXS5ib2F0LnN1bmsgPT0gdHJ1ZSkgfHwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7bmFtZX0gZGl2W2RhdGEteT1cIiR7aSArIDExfVwiXVtkYXRhLXg9XCIke3h9XCJdYCkuZGF0YXNldC5hcm91bmQgPT0gXCJ0cnVlXCIpICYmIGdhbWVib2FyZC5ib2FyZFtpXVt4XS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtuYW1lfSBkaXZbZGF0YS15PVwiJHtpICsgMTF9XCJdW2RhdGEteD1cIiR7eCArIDF9XCJdYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmRhdGFzZXQuYXJvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuZnVuY3Rpb24gZ2FtZUlzT3ZlcihtZXNzYWdlKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG4gICAgcmVzdWx0LnRleHRDb250ZW50ID0gYCR7bWVzc2FnZX1gO1xuICAgIHJlc3VsdC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlQm9hcmQsIGRpc3BsYXlTaGlwLCBhZGRFdmVudHMsIGdldEF0dGFja2VkQnlDb21wdXRlciB9OyIsImNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgICAgICAgdGhpcy5kYW1hZ2UgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB9XG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmRhbWFnZSA9IHRoaXMuZGFtYWdlICsgMTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGFtYWdlO1xuICAgIH1cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmxlbmd0aCA+IHRoaXMuZGFtYWdlKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0aGlzLnN1bms7XG4gICAgfVxufTtcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IHRoaXMuI2J1aWxkQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XG4gICAgfVxuICAgICNidWlsZEJvYXJkKCkge1xuICAgICAgICBjb25zdCBib2FyZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTE7IGkgPCAyMTsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgICAgICAgIGJvYXJkLnB1c2gocm93KTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAxOyBqIDwgMTE7IGorKykge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKG5ldyBTcXVhcmUoaiwgaSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZDtcbiAgICB9XG4gICAgcGxhY2VTaGlwKGEsIGIsIGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGxldCB4ID0gYSAtIDE7XG4gICAgICAgIGxldCB5ID0gYiAtIDExO1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0U3F1YXJlID0gdGhpcy5ib2FyZFt5XVt4XTtcbiAgICAgICAgaWYgKHN0YXJ0U3F1YXJlLmNhblBsYWNlU2hpcCA9PSBmYWxzZSB8fCBzdGFydFNxdWFyZS5oYXNTaGlwID09IHRydWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW4ndCBwbGFjZSB5b3VyIG5ldyBzaGlwIGhlcmUuIFNoaXBzIGNhbid0IG92ZXJsYXAgYW5kIG11c3QgYmUgYXQgbGVhc3Qgb25lIHNxdWFyZSBhcGFydCBmcm9tIGVhY2ggb3RoZXIuXCIpXG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IG4gPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzW2ldLmxlbmd0aCA9PSBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBuKys7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBpZiAoKGxlbmd0aCA9PSAxICYmIG4gPT0gNCkgfHwgKGxlbmd0aCA9PSAyICYmIG4gPT0gMykgfHwgKGxlbmd0aCA9PSAzICYmIG4gPT0gMikgfHwgKGxlbmd0aCA9PSA0ICYmIG4gPT0gMSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjYW4ndCBwbGFjZSBhbm90aGVyIHNoaXAgb2YgdGhpcyBzaXplLiBQbGVhc2UsIGNoYW5nZSB0aGUgbGVuZ3RoIG9mIHlvdXIgc2hpcC5cIik7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IGJlZm9yZSA9IHggLSAxO1xuICAgICAgICBsZXQgYWZ0ZXIgPSB4ICsgMTtcblxuICAgICAgICBsZXQgYWZ0ZXIyID0geCArIDI7XG4gICAgICAgIGxldCBhZnRlcjMgPSB4ICsgMztcbiAgICAgICAgbGV0IGFmdGVyNCA9IHggKyA0O1xuXG4gICAgICAgIGxldCBhYm92ZSA9IHkgLSAxO1xuICAgICAgICBsZXQgYmVsb3cgPSB5ICsgMTtcblxuICAgICAgICBsZXQgYmVsb3cyID0geSArIDI7XG4gICAgICAgIGxldCBiZWxvdzMgPSB5ICsgMztcbiAgICAgICAgbGV0IGJlbG93NCA9IHkgKyA0O1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT0gXCJob3Jpem9udGFsXCIpIHtcbiAgICAgICAgICAgIGlmICgobGVuZ3RoID09IDIgJiYgKGFmdGVyIDwgMCB8fCBhZnRlciA+IDkpKSB8fCAobGVuZ3RoID09IDMgJiYgKGFmdGVyMiA8IDAgfHwgYWZ0ZXIyID4gOSkpIHx8IChsZW5ndGggPT0gNCAmJiAoYWZ0ZXIzIDwgMCB8fCBhZnRlcjMgPiA5KSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2FuJ3QgcGxhY2UgYSBzaGlwIGxpa2UgdGhhdC4gSXQgZG9lc24ndCBmaXQgdGhlIGJvYXJkLiBQbGVhc2UsIGNob29zZSBhbm90aGVyIGxvY2F0aW9uLlwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoKGxlbmd0aCA9PSAyICYmIHRoaXMuYm9hcmRbeV1bYWZ0ZXJdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkgfHwgKGxlbmd0aCA9PSAzICYmICh0aGlzLmJvYXJkW3ldW2FmdGVyXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UgfHwgdGhpcy5ib2FyZFt5XVthZnRlcjJdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkpIHx8IChsZW5ndGggPT0gNCAmJiAodGhpcy5ib2FyZFt5XVthZnRlcl0uY2FuUGxhY2VTaGlwID09IGZhbHNlIHx8IHRoaXMuYm9hcmRbeV1bYWZ0ZXIyXS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UgfHwgdGhpcy5ib2FyZFt5XVthZnRlcjNdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSkpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbid0IHBsYWNlIGEgc2hpcCBsaWtlIHRoYXQuIEl0IGNhbid0IG92ZXJsYXAgb3RoZXIgc2hpcHMgYW5kIG11c3QgYmUgYXQgbGVhc3Qgb25lIHNxdWFyZSBhcGFydCBmcm9tIG90aGVyIHNoaXBzLiBQbGVhc2UsIGNob29zZSBhbm90aGVyIGxvY2F0aW9uLlwiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGRpcmVjdGlvbiA9PSBcInZlcnRpY2FsXCIpIHtcbiAgICAgICAgICAgIGlmICgobGVuZ3RoID09IDIgJiYgKGJlbG93IDwgMCB8fCBiZWxvdyA+IDkpKSB8fCAobGVuZ3RoID09IDMgJiYgKGJlbG93MiA8IDAgfHwgYmVsb3cyID4gOSkpIHx8IChsZW5ndGggPT0gNCAmJiAoYmVsb3czIDwgMCB8fCBiZWxvdzMgPiA5KSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBwbGFjZSBhIHNoaXAgbGlrZSB0aGF0LiBJdCBkb2Vzbid0IGZpdCB0aGUgYm9hcmQuIFBsZWFzZSwgY2hvb3NlIGFub3RoZXIgbG9jYXRpb24uXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICgobGVuZ3RoID09IDIgJiYgdGhpcy5ib2FyZFtiZWxvd11beF0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSB8fCAobGVuZ3RoID09IDMgJiYgKHRoaXMuYm9hcmRbYmVsb3ddW3hdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSB8fCB0aGlzLmJvYXJkW2JlbG93Ml1beF0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSkgfHwgKGxlbmd0aCA9PSA0ICYmICh0aGlzLmJvYXJkW2JlbG93XVt4XS5jYW5QbGFjZVNoaXAgPT0gZmFsc2UgfHwgdGhpcy5ib2FyZFtiZWxvdzJdW3hdLmNhblBsYWNlU2hpcCA9PSBmYWxzZSB8fCB0aGlzLmJvYXJkW2JlbG93M11beF0uY2FuUGxhY2VTaGlwID09IGZhbHNlKSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgY2FuJ3QgcGxhY2UgYSBzaGlwIGxpa2UgdGhhdC4gSXQgY2FuJ3Qgb3ZlcmxhcCBvdGhlciBzaGlwcyBhbmQgbXVzdCBiZSBhdCBsZWFzdCBvbmUgc3F1YXJlIGFwYXJ0IGZyb20gb3RoZXIgc2hpcHMuIFBsZWFzZSwgY2hvb3NlIGFub3RoZXIgbG9jYXRpb24uXCIpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBsZXQgc2hpcCA9IG5ldyBTaGlwKGxlbmd0aCwgZGlyZWN0aW9uKTtcblxuICAgICAgICB0aGlzLnNoaXBzLnB1c2goc2hpcCk7XG5cbiAgICAgICAgc3RhcnRTcXVhcmUuYm9hdCA9IHNoaXA7XG4gICAgICAgIHN0YXJ0U3F1YXJlLmhhc1NoaXAgPSB0cnVlO1xuXG4gICAgICAgIGlmIChhYm92ZSA+PSAwICYmIGFib3ZlIDw9IDkpIHtcbiAgICAgICAgICAgIGlmIChiZWZvcmUgPj0gMCAmJiBiZWZvcmUgPD0gOSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYWJvdmVdW2JlZm9yZV0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGFmdGVyID49IDAgJiYgYWZ0ZXIgPD0gOSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYWJvdmVdW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmJvYXJkW2Fib3ZlXVt4XS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGJlZm9yZSA+PSAwICYmIGJlZm9yZSA8PSA5KSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2JlZm9yZV0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoYmVsb3cgPj0gMCAmJiBiZWxvdyA8PSA5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11bYmVmb3JlXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cblxuICAgICAgICBpZiAobGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGlmIChhZnRlciA+PSAwICYmIGFmdGVyIDw9IDkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBpZiAoYmVsb3cgPj0gMCAmJiBiZWxvdyA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3ddW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChiZWxvdyA+PSAwICYmIGJlbG93IDw9IDkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVt4XS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09IFwiaG9yaXpvbnRhbFwiKSB7XG4gICAgICAgICAgICBpZiAobGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyXS5ib2F0ID0gc2hpcDtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyXS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYWZ0ZXIyID49IDAgJiYgYWZ0ZXIyIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFib3ZlID49IDAgJiYgYWJvdmUgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFthYm92ZV1bYWZ0ZXIyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcjJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYmVsb3cgPj0gMCAmJiBiZWxvdyA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVthZnRlcjJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGJlbG93ID49IDAgJiYgYmVsb3cgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZnRlcjIgPj0gMCAmJiBhZnRlcjIgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11bYWZ0ZXIyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsZW5ndGggPT0gMykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1bYWZ0ZXJdLmJvYXQgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1bYWZ0ZXIyXS5ib2F0ID0gc2hpcDtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyXS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyMl0uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGJlbG93ID49IDAgJiYgYmVsb3cgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVt4XS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11bYWZ0ZXJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVthZnRlcjJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWZ0ZXIzID49IDAgJiYgYWZ0ZXIzIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3ddW2FmdGVyM10uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoYWJvdmUgPj0gMCAmJiBhYm92ZSA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYWJvdmVdW2FmdGVyMl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZnRlcjMgPj0gMCAmJiBhZnRlcjMgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFthYm92ZV1bYWZ0ZXIzXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChhZnRlcjMgPj0gMCAmJiBhZnRlcjMgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyM10uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyXS5ib2F0ID0gc2hpcDtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyMl0uYm9hdCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcjNdLmJvYXQgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1bYWZ0ZXJdLmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1bYWZ0ZXIyXS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyM10uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGJlbG93ID49IDAgJiYgYmVsb3cgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVt4XS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11bYWZ0ZXJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVthZnRlcjJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVthZnRlcjNdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWZ0ZXI0ID49IDAgJiYgYWZ0ZXI0IDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3ddW2FmdGVyNF0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoYWJvdmUgPj0gMCAmJiBhYm92ZSA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYWJvdmVdW2FmdGVyMl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYWJvdmVdW2FmdGVyM10uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZnRlcjQgPj0gMCAmJiBhZnRlcjQgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFthYm92ZV1bYWZ0ZXI0XS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChhZnRlcjQgPj0gMCAmJiBhZnRlcjQgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyNF0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAobGVuZ3RoID09IDIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVt4XS5ib2F0ID0gc2hpcDtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVt4XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYmVsb3cyID49IDAgJiYgYmVsb3cyIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlZm9yZSA+PSAwICYmIGJlZm9yZSA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93Ml1bYmVmb3JlXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzJdW3hdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWZ0ZXIgPj0gMCAmJiBhZnRlciA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93Ml1bYWZ0ZXJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGFmdGVyID49IDAgJiYgYWZ0ZXIgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3ldW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11bYWZ0ZXJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvd11beF0uYm9hdCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzJdW3hdLmJvYXQgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3ddW3hdLmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3cyXVt4XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZiAoYmVmb3JlID49IDAgJiYgYmVmb3JlIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzJdW2JlZm9yZV0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChiZWxvdzMgPj0gMCAmJiBiZWxvdzMgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzNdW2JlZm9yZV0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChiZWxvdzMgPj0gMCAmJiBiZWxvdzMgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93M11beF0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhZnRlciA+PSAwICYmIGFmdGVyIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3czXVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBpZiAoYWZ0ZXIgPj0gMCAmJiBhZnRlciA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeV1bYWZ0ZXJdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3cyXVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobGVuZ3RoID09IDQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93XVt4XS5ib2F0ID0gc2hpcDtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93Ml1beF0uYm9hdCA9IHNoaXA7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzNdW3hdLmJvYXQgPSBzaGlwO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3ddW3hdLmhhc1NoaXAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3cyXVt4XS5oYXNTaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93M11beF0uaGFzU2hpcCA9IHRydWU7XG4gICAgICAgICAgICAgICAgaWYgKGJlZm9yZSA+PSAwICYmIGJlZm9yZSA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3cyXVtiZWZvcmVdLmNhblBsYWNlU2hpcCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93M11bYmVmb3JlXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJlbG93NCA+PSAwICYmIGJlbG93NCA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW2JlbG93NF1bYmVmb3JlXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGJlbG93NCA+PSAwICYmIGJlbG93NCA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3c0XVt4XS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFmdGVyID49IDAgJiYgYWZ0ZXIgPD0gOSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzRdW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGlmIChhZnRlciA+PSAwICYmIGFmdGVyIDw9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt5XVthZnRlcl0uY2FuUGxhY2VTaGlwID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbYmVsb3ddW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzJdW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtiZWxvdzNdW2FmdGVyXS5jYW5QbGFjZVNoaXAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHJlY2VpdmVBdHRhY2soYSwgYikge1xuICAgICAgICBsZXQgeCA9IGEgLSAxO1xuICAgICAgICBsZXQgeSA9IGIgLSAxMTtcbiAgICAgICAgbGV0IGF0dGFja2VkU3F1YXJlID0gdGhpcy5ib2FyZFt5XVt4XTtcbiAgICAgICAgLy8gaWYgKGF0dGFja2VkU3F1YXJlLm1pc3NlZEF0dGFjayA9PSB0cnVlIHx8IGF0dGFja2VkU3F1YXJlLnN1Y2Nlc3NmdWxBdHRhY2sgPT0gdHJ1ZSkge1xuICAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhpcyBzcXVhcmUgaGFzIGFscmVhZHkgYmVlbiBhdHRhY2tlZFwiKTtcbiAgICAgICAgLy8gfTtcbiAgICAgICAgaWYgKGF0dGFja2VkU3F1YXJlLmhhc1NoaXAgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgYXR0YWNrZWRTcXVhcmUuc3VjY2Vzc2Z1bEF0dGFjayA9IHRydWU7XG4gICAgICAgICAgICBhdHRhY2tlZFNxdWFyZS5ib2F0LmhpdCgpO1xuICAgICAgICAgICAgYXR0YWNrZWRTcXVhcmUuYm9hdC5pc1N1bmsoKTtcbiAgICAgICAgICAgIHRoaXMuYWxsU2hpcHNBcmVTdW5rKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhdHRhY2tlZFNxdWFyZS5taXNzZWRBdHRhY2sgPSB0cnVlO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgYWxsU2hpcHNBcmVTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5zaGlwcy5ldmVyeSgoZWxlbWVudCkgPT4gZWxlbWVudC5zdW5rID09IHRydWUpKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9O1xufTtcblxuY2xhc3MgU3F1YXJlIHtcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XG4gICAgICAgIHRoaXMueCA9IHg7XG4gICAgICAgIHRoaXMueSA9IHk7XG4gICAgICAgIHRoaXMuaGFzU2hpcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNhblBsYWNlU2hpcCA9IHRydWU7XG4gICAgICAgIHRoaXMubWlzc2VkQXR0YWNrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3VjY2Vzc2Z1bEF0dGFjayA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuYm9hdCA9IHVuZGVmaW5lZDtcbiAgICB9XG59O1xuXG5jbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnR1cm4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21wdXRlckNob2ljZXMgPSB0aGlzLiNmaW5kQ2hvaWNlcygpO1xuICAgIH1cbiAgICAjZmluZENob2ljZXMoKSB7XG4gICAgICAgIGxldCBhcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMTE7IGkgPCAyMTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMTsgaiA8IDExOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2hvaWNlID0gW2ksIGpdO1xuICAgICAgICAgICAgICAgIGFycmF5LnB1c2goY2hvaWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBhdHRhY2tFbmVteShlbmVteUJvYXJkLCBvcHBvbmVudCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZXMgPSB0aGlzLmNvbXB1dGVyQ2hvaWNlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmNvbXB1dGVyQ2hvaWNlcy5sZW5ndGgpXTtcbiAgICAgICAgbGV0IGEgPSBjb29yZGluYXRlc1sxXTtcbiAgICAgICAgbGV0IGIgPSBjb29yZGluYXRlc1swXTtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5jb21wdXRlckNob2ljZXMuaW5kZXhPZihjb29yZGluYXRlcyk7XG4gICAgICAgIHRoaXMuY29tcHV0ZXJDaG9pY2VzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGVuZW15Qm9hcmQucmVjZWl2ZUF0dGFjayhhLCBiKTtcbiAgICAgICAgdGhpcy5jaGFuZ2VUdXJucyhhLCBiLCBlbmVteUJvYXJkLCBvcHBvbmVudCk7XG4gICAgICAgIHJldHVybiBbYSwgYl07XG4gICAgfVxuICAgIGNoYW5nZVR1cm5zKGEsIGIsIGVuZW15Qm9hcmQsIG9wcG9uZW50KSB7XG4gICAgICAgIGxldCB4ID0gYSAtIDE7XG4gICAgICAgIGxldCB5ID0gYiAtIDExO1xuICAgICAgICBpZiAoZW5lbXlCb2FyZC5ib2FyZFt5XVt4XS5taXNzZWRBdHRhY2sgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy50dXJuID0gZmFsc2U7XG4gICAgICAgICAgICBvcHBvbmVudC50dXJuID0gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFNxdWFyZSwgUGxheWVyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgeyBTaGlwLCBHYW1lYm9hcmQsIFBsYXllciwgU3F1YXJlIH0gZnJvbSBcIi4vbG9naWNcIjtcbmltcG9ydCB7IGNyZWF0ZUJvYXJkLCBkaXNwbGF5U2hpcCwgYWRkRXZlbnRzLCBnZXRBdHRhY2tlZEJ5Q29tcHV0ZXIgfSBmcm9tIFwiLi9kb21cIjtcblxuY29uc3QgZm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9ybS1jb250YWluZXJcIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImZvcm1cIik7XG5jb25zdCBjb21wdXRlckJvYXJkRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlci1ib2FyZFwiKTtcbmNvbnN0IGNvbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvYXJkLWNvbnRhaW5lcjpsYXN0LWNoaWxkXCIpO1xuY29uc3QgcmVzdWx0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN1bHRcIik7XG5jb25zdCBlcnJvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIik7XG5cbmxldCBtb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVBsYXlGaWVsZChwbGF5ZXJCb2FyZCkge1xuICAgICAgICBsZXQgcGxheUZpZWxkID0gY3JlYXRlQm9hcmQocGxheWVyQm9hcmQuYm9hcmQsIFwicGxheWVyXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpO1xuICAgICAgICBwbGF5ZXJCb2FyZERvbS5hcHBlbmRDaGlsZChwbGF5RmllbGQpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gY3JlYXRlQ29tcEZpZWxkKGNvbXB1dGVyQm9hcmQpIHtcbiAgICAgICAgbGV0IGNvbXBGaWVsZCA9IGNyZWF0ZUJvYXJkKGNvbXB1dGVyQm9hcmQuYm9hcmQsIFwiY29tcHV0ZXJcIik7XG4gICAgICAgIGNvbnN0IGNvbXB1dGVyQm9hcmREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWJvYXJkXCIpO1xuICAgICAgICBjb21wdXRlckJvYXJkRG9tLmFwcGVuZENoaWxkKGNvbXBGaWVsZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVBsYXllckZpZWxkKCkge1xuICAgICAgICBsZXQgcGxheUZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJcIik7XG4gICAgICAgIGNvbnN0IHBsYXllckJvYXJkRG9tID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXItYm9hcmRcIik7XG4gICAgICAgIHBsYXllckJvYXJkRG9tLnJlbW92ZUNoaWxkKHBsYXlGaWVsZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUZpZWxkcygpIHtcbiAgICAgICAgbGV0IHBsYXlGaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyXCIpO1xuICAgICAgICBjb25zdCBwbGF5ZXJCb2FyZERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyLWJvYXJkXCIpO1xuICAgICAgICBwbGF5ZXJCb2FyZERvbS5yZW1vdmVDaGlsZChwbGF5RmllbGQpO1xuICAgICAgICBsZXQgY29tcEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlclwiKTtcbiAgICAgICAgY29uc3QgY29tcHV0ZXJCb2FyZERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItYm9hcmRcIik7XG4gICAgICAgIGNvbXB1dGVyQm9hcmREb20ucmVtb3ZlQ2hpbGQoY29tcEZpZWxkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY3JlYXRlUGxheWVyQm9hcmQoKSB7XG4gICAgICAgIGxldCBwbGF5ZXJCb2FyZCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgcmV0dXJuIHBsYXllckJvYXJkO1xuICAgIH07XG4gICAgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZXJCb2FyZCgpIHtcbiAgICAgICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBuZXcgR2FtZWJvYXJkKCk7XG4gICAgICAgIHJldHVybiBjb21wdXRlckJvYXJkO1xuICAgIH07XG4gICAgZnVuY3Rpb24gY3JlYXRlUGxheWVyKCkge1xuICAgICAgICBsZXQgcGxheWVyID0gbmV3IFBsYXllcigpO1xuICAgICAgICByZXR1cm4gcGxheWVyO1xuICAgIH07XG4gICAgZnVuY3Rpb24gY3JlYXRlQ29tcHV0ZXIoKSB7XG4gICAgICAgIGxldCBjb21wdXRlciA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVyO1xuICAgIH07XG4gICAgZnVuY3Rpb24gc3RhcnQocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQsIHBsYXllciwgY29tcHV0ZXIpIHtcbiAgICAgICAgYWRkRXZlbnRzKGNvbXB1dGVyQm9hcmQsIFwiY29tcHV0ZXJcIiwgcGxheWVyLCBwbGF5ZXJCb2FyZCwgY29tcHV0ZXIpO1xuICAgICAgICBwbGF5ZXIudHVybiA9IHRydWU7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVQbGF5RmllbGQ6IGNyZWF0ZVBsYXlGaWVsZCxcbiAgICAgICAgY3JlYXRlQ29tcEZpZWxkOiBjcmVhdGVDb21wRmllbGQsXG4gICAgICAgIHJlbW92ZVBsYXllckZpZWxkOiByZW1vdmVQbGF5ZXJGaWVsZCxcbiAgICAgICAgcmVtb3ZlRmllbGRzOiByZW1vdmVGaWVsZHMsXG4gICAgICAgIGNyZWF0ZVBsYXllckJvYXJkOiBjcmVhdGVQbGF5ZXJCb2FyZCxcbiAgICAgICAgY3JlYXRlQ29tcHV0ZXJCb2FyZDogY3JlYXRlQ29tcHV0ZXJCb2FyZCxcbiAgICAgICAgY3JlYXRlUGxheWVyOiBjcmVhdGVQbGF5ZXIsXG4gICAgICAgIGNyZWF0ZUNvbXB1dGVyOiBjcmVhdGVDb21wdXRlcixcbiAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIHBsYWNlQWxsU2hpcHMoY29tcHV0ZXJCb2FyZCkge1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDQsIDE2LCA0LCBcImhvcml6b250YWxcIik7XG4gICAgY29tcHV0ZXJCb2FyZC5wbGFjZVNoaXAoMiwgMTksIDMsIFwiaG9yaXpvbnRhbFwiKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCg4LCAxMSwgMywgXCJ2ZXJ0aWNhbFwiKTtcbiAgICBjb21wdXRlckJvYXJkLnBsYWNlU2hpcCgzLCAxMiwgMiwgXCJob3Jpem9udGFsXCIpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDIsIDE0LCAyLCBcInZlcnRpY2FsXCIpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDksIDE4LCAyLCBcInZlcnRpY2FsXCIpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDEsIDExLCAxLCBcInZlcnRpY2FsXCIpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDYsIDE0LCAxLCBcInZlcnRpY2FsXCIpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDEsIDE3LCAxLCBcInZlcnRpY2FsXCIpO1xuICAgIGNvbXB1dGVyQm9hcmQucGxhY2VTaGlwKDYsIDIwLCAxLCBcInZlcnRpY2FsXCIpO1xufTtcblxuY29uc3QgcGxhY2VBU2hpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxhY2UtYS1zaGlwXCIpO1xucGxhY2VBU2hpcC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgICBwbGFjZUFTaGlwLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5jb25zdCBjYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbmNhbmNlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGVycm9yLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBmb3JtQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBwbGFjZUFTaGlwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59KTtcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXRcIik7XG5zdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFNoaXApO1xuZnVuY3Rpb24gYWRkU2hpcChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGNoZWNrVmFsID0gZm9ybS5jaGVja1ZhbGlkaXR5KCk7XG4gICAgZm9ybS5yZXBvcnRWYWxpZGl0eSgpO1xuICAgIGlmIChjaGVja1ZhbCkge1xuICAgICAgICBjb25zdCB4ID0gTnVtYmVyKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sdW1uXCIpLnZhbHVlKTtcbiAgICAgICAgY29uc3QgeSA9IE51bWJlcihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJvd1wiKS52YWx1ZSk7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibGVuZ3RoXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkaXJlY3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ2RpcmVjdGlvbicpO1xuICAgICAgICBsZXQgZGlyZWN0aW9uO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpcmVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb25zW2ldLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb25zW2ldLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcGxheWVyQm9hcmQucGxhY2VTaGlwKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIGRpc3BsYXlTaGlwKHgsIHksIGxlbmd0aCwgZGlyZWN0aW9uLCBcInBsYXllclwiKTtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZC5zaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdGFydC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGZvcm1Db250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgZXJyb3Iuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgcGxhY2VBU2hpcC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgaWYgKHBsYXllckJvYXJkLnNoaXBzLmxlbmd0aCA9PSAxMCkge1xuICAgICAgICAgICAgICAgIHN0YXJ0LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgICAgICAgICAgcGxhY2VBU2hpcC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGVycm9yLnRleHRDb250ZW50ID0gZXJyLm1lc3NhZ2U7XG4gICAgICAgICAgICBlcnJvci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICB9O1xuICAgIH07XG59O1xuXG5jb25zdCBzdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRcIik7XG5zdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBsYWNlQWxsU2hpcHMoY29tcHV0ZXJCb2FyZCk7XG4gICAgbW9kdWxlLmNyZWF0ZUNvbXBGaWVsZChjb21wdXRlckJvYXJkKTtcbiAgICBtb2R1bGUuc3RhcnQocGxheWVyQm9hcmQsIGNvbXB1dGVyQm9hcmQsIHBsYXllciwgY29tcHV0ZXIpO1xuICAgIGNvbXAuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgIHN0YXJ0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5jb25zdCByZXN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yZXN0YXJ0XCIpO1xucmVzdGFydC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHBsYXllckJvYXJkID0gbW9kdWxlLmNyZWF0ZVBsYXllckJvYXJkKCk7XG4gICAgY29tcHV0ZXJCb2FyZCA9IG1vZHVsZS5jcmVhdGVDb21wdXRlckJvYXJkKCk7XG4gICAgcGxheWVyID0gbW9kdWxlLmNyZWF0ZVBsYXllcigpO1xuICAgIGNvbXB1dGVyID0gbW9kdWxlLmNyZWF0ZUNvbXB1dGVyKCk7XG5cbiAgICBpZiAoY29tcHV0ZXJCb2FyZERvbS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgbW9kdWxlLnJlbW92ZUZpZWxkcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZS5yZW1vdmVQbGF5ZXJGaWVsZCgpO1xuICAgIH07XG5cbiAgICBtb2R1bGUuY3JlYXRlUGxheUZpZWxkKHBsYXllckJvYXJkKTtcblxuICAgIGNvbXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHJlc3RhcnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHN0YXJ0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBwbGFjZUFTaGlwLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgcmVzdWx0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn0pO1xuXG5sZXQgcGxheWVyQm9hcmQgPSBtb2R1bGUuY3JlYXRlUGxheWVyQm9hcmQoKTtcbmxldCBjb21wdXRlckJvYXJkID0gbW9kdWxlLmNyZWF0ZUNvbXB1dGVyQm9hcmQoKTtcbmxldCBwbGF5ZXIgPSBtb2R1bGUuY3JlYXRlUGxheWVyKCk7XG5sZXQgY29tcHV0ZXIgPSBtb2R1bGUuY3JlYXRlQ29tcHV0ZXIoKTtcbm1vZHVsZS5jcmVhdGVQbGF5RmllbGQocGxheWVyQm9hcmQpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=