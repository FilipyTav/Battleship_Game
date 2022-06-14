/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/battleship.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/battleship.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    box-sizing: border-box;\n}\n\nbody {\n    background: #111;\n}\n\n.main_container {\n    width: 100vw;\n    height: 100vh;\n\n    position: relative;\n}\n\n.player1_board,\n.computer_board {\n    width: 500px;\n    height: 500px;\n    outline: 5px solid #666;\n    background: linear-gradient(rgb(95, 95, 245), rgb(144, 247, 247));\n\n    position: absolute;\n\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n}\n\n.player1_board {\n    top: 50%;\n    left: 50px;\n\n    transform: translateY(-50%);\n}\n\n.computer_board {\n    bottom: 50%;\n    right: 50px;\n\n    transform: translateY(50%);\n}\n\n.board_tile {\n    border: 0.1px solid purple;\n    cursor: crosshair;\n}\n\n.ship_part {\n    background: violet;\n}\n\n.board_tile.hit,\n.board_tile.no,\n.board_tile[player=\"human\"] {\n    cursor: not-allowed;\n}\n\n.board_tile.no {\n    user-select: none;\n}\n\n.board_tile.hit {\n    background: blue;\n}\n\n.board_tile.ship_part.hit {\n    background: rgb(243, 64, 64);\n}\n\n.ships_container {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 5px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.ships_container .ship_part {\n    width: 50px;\n    height: 50px;\n    border: 0.1px solid purple;\n}\n\n.ships_container .ship_container {\n    cursor: move;\n    margin: 0 auto;\n}\n\n.ship_container {\n    display: flex;\n    justify-content: center;\n\n    position: relative;\n}\n\nbutton.change_orientation {\n    border: none;\n    background: cyan;\n    box-shadow: inset 2px 0px 3px blue;\n\n    cursor: pointer;\n\n    border-radius: 50%;\n    height: 10px;\n    width: 10px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\nbutton.change_orientation:active {\n    background: blue;\n}\n\n.vertical {\n    flex-flow: column nowrap;\n}\n\n.being_dragged .ship_part {\n    background: rgb(238, 130, 238, 0.7);\n}\n\n.placing_preview {\n    background: lime;\n}\n\n[player=\"human\"].board_tile {\n    user-select: none;\n}\n\n.start_game_btn,\n.restart {\n    padding: 5px 15px;\n    border-radius: 10px;\n    font-weight: bold;\n    font-size: 1.3rem;\n    background: cadetblue;\n    border: none;\n    cursor: crosshair;\n\n    box-shadow: 2px 2px 5px blueviolet;\n}\n\n.start_game_btn:active {\n    background: rgb(35, 98, 100);\n}\n\nbutton.restart {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n", "",{"version":3,"sources":["webpack://./src/css/battleship.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,iEAAiE;;IAEjE,kBAAkB;;IAElB,aAAa;IACb,uCAAuC;AAC3C;;AAEA;IACI,QAAQ;IACR,UAAU;;IAEV,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,WAAW;;IAEX,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;IAGI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,QAAQ;;IAER,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;;IAEvB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kCAAkC;;IAElC,eAAe;;IAEf,kBAAkB;IAClB,YAAY;IACZ,WAAW;;IAEX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;;IAEI,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;;IAEjB,kCAAkC;AACtC;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    box-sizing: border-box;\n}\n\nbody {\n    background: #111;\n}\n\n.main_container {\n    width: 100vw;\n    height: 100vh;\n\n    position: relative;\n}\n\n.player1_board,\n.computer_board {\n    width: 500px;\n    height: 500px;\n    outline: 5px solid #666;\n    background: linear-gradient(rgb(95, 95, 245), rgb(144, 247, 247));\n\n    position: absolute;\n\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n}\n\n.player1_board {\n    top: 50%;\n    left: 50px;\n\n    transform: translateY(-50%);\n}\n\n.computer_board {\n    bottom: 50%;\n    right: 50px;\n\n    transform: translateY(50%);\n}\n\n.board_tile {\n    border: 0.1px solid purple;\n    cursor: crosshair;\n}\n\n.ship_part {\n    background: violet;\n}\n\n.board_tile.hit,\n.board_tile.no,\n.board_tile[player=\"human\"] {\n    cursor: not-allowed;\n}\n\n.board_tile.no {\n    user-select: none;\n}\n\n.board_tile.hit {\n    background: blue;\n}\n\n.board_tile.ship_part.hit {\n    background: rgb(243, 64, 64);\n}\n\n.ships_container {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 5px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.ships_container .ship_part {\n    width: 50px;\n    height: 50px;\n    border: 0.1px solid purple;\n}\n\n.ships_container .ship_container {\n    cursor: move;\n    margin: 0 auto;\n}\n\n.ship_container {\n    display: flex;\n    justify-content: center;\n\n    position: relative;\n}\n\nbutton.change_orientation {\n    border: none;\n    background: cyan;\n    box-shadow: inset 2px 0px 3px blue;\n\n    cursor: pointer;\n\n    border-radius: 50%;\n    height: 10px;\n    width: 10px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\nbutton.change_orientation:active {\n    background: blue;\n}\n\n.vertical {\n    flex-flow: column nowrap;\n}\n\n.being_dragged .ship_part {\n    background: rgb(238, 130, 238, 0.7);\n}\n\n.placing_preview {\n    background: lime;\n}\n\n[player=\"human\"].board_tile {\n    user-select: none;\n}\n\n.start_game_btn,\n.restart {\n    padding: 5px 15px;\n    border-radius: 10px;\n    font-weight: bold;\n    font-size: 1.3rem;\n    background: cadetblue;\n    border: none;\n    cursor: crosshair;\n\n    box-shadow: 2px 2px 5px blueviolet;\n}\n\n.start_game_btn:active {\n    background: rgb(35, 98, 100);\n}\n\nbutton.restart {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/battleship.css":
/*!********************************!*\
  !*** ./src/css/battleship.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_battleship_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./battleship.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/battleship.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_battleship_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_battleship_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_battleship_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_battleship_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/js/DOM_elements.js":
/*!********************************!*\
  !*** ./src/js/DOM_elements.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DOM_el": () => (/* binding */ DOM_el)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/js/game.js");


const DOM_el = (function () {
    // Container that wraps the whole screen
    const main_container = document.querySelector(".main_container");

    // Both boards
    const player1_board = document.querySelector(".player1_board");
    const computer_board = document.querySelector(".computer_board");

    const restart_btn = document.querySelector(".restart");

    // Container for all the player ships at the beginning of a match
    const ships_container = document.querySelector(".ships_container");

    // Generates a board tile
    const create_board_tile = () => {
        const board_tile = document.createElement("div");
        board_tile.classList.add("board_tile");

        return board_tile;
    };

    // Populates a player's board
    const populate_board = (board, player) => {
        // Removes all the tiles in the board
        while (board.lastChild) {
            board.lastChild.remove();
        }

        // Generates 1 tile for each tiles in the gameboard object of each player
        // It should always be 100, but it's better not to hard-code it
        for (let i = 0; i < player.gameboard.tiles.flat().length; i++) {
            const board_tile = create_board_tile();

            // Gives a tile its coordinates as a string
            board_tile.setAttribute(
                "data-id",

                // Secures the number will always have 2 digits
                i.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                })
            );

            // Identifies whose is the board
            board_tile.setAttribute("player", player.type);

            // Class to identify that the tile cannot be clicked
            // The computer's board can only be clicked once all the user's ships have been placed
            board_tile.classList.add("no");

            board.append(board_tile);
        }
    };

    // Gets all the tiles of a certain player
    const get_board_tiles = (player) => {
        const board_tiles = document.querySelectorAll(
            `.board_tile[player=${player.type}]`
        );

        return Array.from(board_tiles);
    };

    // Gets a specific tile from a player, according to its coordinates
    const get_specific_tile = (player, [row, column]) => {
        return document.querySelector(
            `.board_tile[player="${player.type}"][data-id="${row}${column}"]`
        );
    };

    // Gets the next tile on the board, horizontally or vertically
    const get_next_tile = (axis, player, tile) => {
        if (!(axis === "y" || axis === "x")) return;

        switch (axis) {
            case "x":
                return tile.nextElementSibling;

            case "y":
                // The next tile in the y axis is actually 10 tiles away
                return document.querySelector(
                    `[data-id="${
                        Number(tile.getAttribute("data-id")) + 10
                    }"][player="${player.type}"]`
                );

            default:
                return;
        }
    };

    // Creates a ship to be placed at the start of a game
    const create_ship_DOM = (parts) => {
        const ship_container = document.createElement("div");
        ship_container.setAttribute("size", parts);
        ship_container.classList.add("ship_container");
        ship_container.setAttribute("draggable", true);

        // The button in the middle is to change the orientation of the ship
        const change_orientation = document.createElement("button");
        change_orientation.classList.add("change_orientation");
        change_orientation.addEventListener("click", (e) => {
            e.target.closest(".ship_container").classList.toggle("vertical");
        });

        for (let i = 0; i < parts; i++) {
            const indiv_part = document.createElement("div");
            indiv_part.classList.add("ship_part");

            ship_container.append(indiv_part);
        }

        ship_container.append(change_orientation);
        ships_container.append(ship_container);
    };

    // Checks if a certain ship can be placed at a certain tile
    const is_valid = (ship_size, ship_orientation, tile, player) => {
        // The intended coordinates
        const row = Number(tile.getAttribute("data-id")[0]);
        const column = Number(tile.getAttribute("data-id")[1]);

        let next = null;
        switch (ship_orientation) {
            case "x":
                // Ship cannot be too close to the borders
                if (column + ship_size > 10) return false;

                next = tile;
                // Checks if there already is a ship at the location
                for (let i = 0; i < ship_size; i++) {
                    if (
                        next.classList.contains("ship_part") ||
                        player.gameboard.tiles[row][column + i] === 0
                    )
                        return false;
                    next = get_next_tile(ship_orientation, player, next);
                }

                return true;

            case "y":
                // Ship cannot be too close to the borders
                if (row + ship_size > 10) return false;

                next = tile;
                // Checks if there already is a ship at the location
                for (let i = 0; i < ship_size; i++) {
                    if (
                        next.classList.contains("ship_part") ||
                        player.gameboard.tiles[row + i][column] === 0
                    )
                        return false;
                    next = get_next_tile(ship_orientation, player, next);
                }

                return true;

            default:
                return false;
        }
    };

    // Places a ship in both the player gameboard(obj) and in the DOM gameboard
    const place_ship_DOM = (player, length, [row, column], axis) => {
        // The first tile of a ship
        const base_tile = get_board_tiles(player).find(
            (tile) => tile.getAttribute("data-id") === `${row}${column}`
        );

        // If the tile is valid
        if (is_valid(length, axis, base_tile, player)) {
            const ship_tiles = [base_tile];

            // Get the next tiles depending on the size of the ship
            switch (axis) {
                case "x":
                    for (let i = 0; i < length - 1; i++) {
                        ship_tiles.push(
                            get_next_tile(axis, player, ship_tiles[i])
                        );
                    }
                    break;

                case "y":
                    for (let i = 0; i < length - 1; i++) {
                        ship_tiles.push(
                            get_next_tile(axis, player, ship_tiles[i])
                        );
                    }
                    break;

                default:
                    break;
            }

            // Places the ship in the gameboard object
            const placed_ship = player.gameboard.place_ship(
                length,
                [row, column],
                axis
            );

            // Only shows the ships of the user
            if (player.type === "human")
                ship_tiles.forEach((tile) => tile.classList.add("ship_part"));
        } else {
            return false;
        }
    };

    // All the container for the ships at the start
    const all_ship_containers = () => {
        return [...document.querySelectorAll(".ship_container")];
    };

    // Removes all the children from the ships container and adds new ones
    const reset_ships_container = () => {
        while (ships_container.lastChild) ships_container.lastChild.remove();

        create_ship_DOM(2);
        create_ship_DOM(3);
        create_ship_DOM(3);
        create_ship_DOM(4);
        create_ship_DOM(5);
    };

    // Attacks the other player board
    const attack_DOM = (player, [row, column] = [0, 0]) => {
        switch (player.type) {
            // If it is the computer
            case "AI":
                // Attacks randomly
                player.attack();

                const other_player = _game__WEBPACK_IMPORTED_MODULE_0__.Game.player1;

                // The coordinates of the random tile attaked
                const r = _game__WEBPACK_IMPORTED_MODULE_0__.Game.cds[0];
                const c = _game__WEBPACK_IMPORTED_MODULE_0__.Game.cds[1];

                const tile_hit = DOM_el.get_specific_tile(other_player, [r, c]);
                tile_hit.classList.add("hit");
                break;

            // If it is the user
            case "human":
                // Attacks based on the coordinates
                player.attack([row, column]);
                break;

            default:
                return;
        }
    };

    // Allows the user to select a tile and attack the computer board
    const select_tile = (target) => {
        // TODO: Improve the current "turn switch system"
        target.classList.add("hit");
        let coords = target.getAttribute("data-id");

        attack_DOM(_game__WEBPACK_IMPORTED_MODULE_0__.Game.player1, [Number(coords[0]), Number(coords[1])]);

        setTimeout(() => {
            // If the game is not over, it is now the computer's turn
            if (_game__WEBPACK_IMPORTED_MODULE_0__.Game.end[0] === false) play_turn(_game__WEBPACK_IMPORTED_MODULE_0__.Game.computer);
        }, 300);
    };

    // Allows a player to play its turn
    // Honestly, dunno why i did this, but here it is
    const play_turn = (player) => {
        switch (player.type) {
            case "AI":
                attack_DOM(player, [0, 0]);
                break;

            case "human":
                break;

            default:
                return;
        }
    };

    // Adds functionality to the start game button
    const activate_start_button = () => {
        const btn = document.querySelector(".start_game_btn");

        // When clicked, removes itself and allows the computer board to be attacked
        btn.addEventListener("click", () => {
            setTimeout(() => {
                btn.remove();
            }, 300);

            get_board_tiles(_game__WEBPACK_IMPORTED_MODULE_0__.Game.computer).forEach((tile) => {
                tile.classList.remove("no");
                tile.addEventListener(
                    "click",
                    (e) => {
                        select_tile(e.target);
                    },
                    { once: true }
                );
            });
        });
    };

    // Just allows the drop event to work
    // JS is crazy sometimes
    document.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
    });

    // Adds functionality for the ships to be placed at the start of the game
    const activate_drag_over_tiles = (player) => {
        // Adds the event listeners for all the tiles
        get_board_tiles(player).forEach((tile) => {
            tile.addEventListener("drop", (e) => {
                e.preventDefault();

                // The ship being dragged,
                const selected = document.querySelector(".being_dragged");

                // its size, axis, and the coordinates of the tile it was dropped on
                const ship_size = Number(selected.getAttribute("size"));
                const current_row = Number(tile.getAttribute("data-id")[0]);
                const current_column = Number(tile.getAttribute("data-id")[1]);
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                // If is a valid tile, place it there
                if (is_valid(ship_size, orientation, tile, player)) {
                    place_ship_DOM(
                        player,
                        ship_size,
                        [current_row, current_column],
                        orientation
                    );

                    // and removes the preview class added previously
                    let next = tile;
                    for (let i = 0; i < ship_size; i++) {
                        next.classList.remove("placing_preview");
                        next = get_next_tile(orientation, player, next);
                    }

                    // Removes the draggable ship from the DOM
                    selected.remove();
                }

                if (ships_container.childElementCount === 0) {
                    const play_game_button = document.createElement("button");
                    play_game_button.classList.add("start_game_btn");
                    play_game_button.textContent = "Start Game";

                    ships_container.append(play_game_button);

                    activate_start_button();
                }
            });

            // When a ship is dragged into a tile
            tile.addEventListener("dragenter", (e) => {
                // Gets the ship being dragged
                const selected = document.querySelector(".being_dragged");

                // And its characteristics
                const ship_size = Number(selected.getAttribute("size"));
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                // If the ship can be placed in said tile
                if (is_valid(ship_size, orientation, tile, player)) {
                    setTimeout(() => {
                        // Adds the preview class on the tiles where the ship will be
                        let next = tile;
                        for (let i = 0; i < ship_size; i++) {
                            next.classList.add("placing_preview");
                            next = get_next_tile(orientation, player, next);
                        }
                    }, 0.1);
                }
            });

            // When a ship is dragged out of a tile
            tile.addEventListener("dragleave", (e) => {
                const selected = document.querySelector(".being_dragged");

                const ship_size = Number(selected.getAttribute("size"));
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                // Removes the preview class of the tiles
                let next = tile;
                for (let i = 0; i < ship_size; i++) {
                    if (next) {
                        next.classList.remove("placing_preview");
                        next = get_next_tile(orientation, player, next);
                    }
                }
            });
        });
    };

    return {
        main_container,
        player1_board,
        computer_board,
        create_board_tile,
        populate_board,
        get_board_tiles,
        get_next_tile,
        get_specific_tile,
        create_ship_DOM,
        all_ship_containers,
        activate_drag_over_tiles,
        place_ship_DOM,
        reset_ships_container,
        restart_btn,
    };
})();




/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Game": () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_elements */ "./src/js/DOM_elements.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/js/player.js");



// The game details
const Game = (function () {
    // Both players
    const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("human");
    const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("AI");

    // Initializes a new match
    const play_game = () => {
        // Adds all the tiles to both bords
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.populate_board(_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.player1_board, player1);
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.populate_board(_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.computer_board, computer);

        // Adds an attck function to the players
        add_attack_methods(player1);
        add_attack_methods(computer);

        // Lays the computer ships
        choose_tiles_automatically(computer);

        // Adds the draggable ships to the DOM
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.reset_ships_container();

        // When a ship is dragged
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.all_ship_containers().forEach((container) =>
            // Adds a class to it
            container.addEventListener("dragstart", () => {
                container.classList.toggle("being_dragged");
            })
        );

        // Same thing, but opposite
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.all_ship_containers().forEach((container) =>
            container.addEventListener("dragend", () => {
                container.classList.toggle("being_dragged");
            })
        );

        // Adds functionality for the board tiles to be dragged over
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.activate_drag_over_tiles(player1);
    };

    // Gets a random integer between min and max (both inclusive)
    const random_int = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Chooses a random orientation for the computer ship
    const random_axis = () => {
        switch (random_int(0, 1)) {
            case 0:
                return "x";

            case 1:
                return "y";

            default:
                return;
        }
    };

    // Whether the game is finished or not
    const end = [false];

    // Restarts the game
    const reset_game = () => {
        // Game over
        end[0] = true;

        // Removes all the ships from the gameboard obj
        player1.gameboard.ships.splice(0, player1.gameboard.ships.length);
        computer.gameboard.ships.splice(0, computer.gameboard.ships.length);

        // Resets all the board tiles
        for (let i = 0; i < computer.gameboard.tiles.length; i++) {
            for (let j = 0; j < computer.gameboard.tiles[i].length; j++) {
                computer.gameboard.tiles[i][j] = "w";
                player1.gameboard.tiles[i][j] = "w";
            }
        }

        // Start a new game
        play_game();

        setTimeout(() => {
            // A new game begins
            end[0] = false;
        }, 400);
    };

    // The most recent coordinates used by the computer
    const cds = [];

    // Functions used by the players to attack the opponent's board
    const add_attack_methods = (player) => {
        switch (player.type) {
            // The computer
            case "AI":
                player.attack = function () {
                    // Random coordinates
                    const row = random_int(0, 9);
                    const column = random_int(0, 9);

                    // Records the coordinates to be used in the DOM
                    cds[0] = row;
                    cds[1] = column;

                    // Places a ship in the board
                    const result = player1.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    switch (true) {
                        // Returns no if is not possible to place a ship there
                        case result === "no":
                            // Try again
                            player.attack();
                            break;

                        // If the attack wins the game
                        case result.won === true:
                            setTimeout(() => {
                                alert("The computer wins!!!");
                                // Start a new one
                                reset_game();
                            }, 300);
                            break;

                        // TODO: make the AI hit a adjacent tile if it hits a ship
                        case result.won === false && result.hit === "yes":
                            break;

                        default:
                            return;
                    }
                };
                break;

            // The user
            case "human":
                player.attack = ([row, column]) => {
                    // Attacks the computers's board
                    const result = computer.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    // Get the corresponding tile
                    const selected_tile = _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.get_specific_tile(computer, [
                        row,
                        column,
                    ]);

                    switch (true) {
                        // If a ship was hit but the game is not over yet
                        case result.won === false && result.hit === "yes":
                            // Marks the tiles as a ship hit
                            selected_tile.classList.add("ship_part", "hit");
                            break;

                        // If the game is over after the attack
                        case result.won === true:
                            selected_tile.classList.add("ship_part", "hit");

                            // Ends the game
                            setTimeout(() => {
                                alert("You win!!!");
                                reset_game();
                            }, 200);
                            break;

                        default:
                            return "no";
                    }
                };
                break;

            default:
                return;
        }
    };

    // Chooses automatically where to place all the computer's ships
    const choose_tiles_automatically = (player) => {
        // There are only 5 ships
        for (let i = 0; i < 5; i++) {
            let ship_size = null;

            let row = null;
            let column = null;

            // Random orientation
            const axis = random_axis();

            // All the possible ship sizes
            switch (i) {
                case 0:
                    ship_size = 2;
                    break;

                case 1:
                    ship_size = 3;
                    break;

                case 2:
                    ship_size = 3;
                    break;

                case 3:
                    ship_size = 4;
                    break;

                case 4:
                    ship_size = 5;
                    break;

                default:
                    return;
            }

            // Chooses a valid coordinate based on the ship sized
            // Avoids choosing one too close to the borders
            switch (axis) {
                case "x":
                    row = random_int(0, 9);
                    column = random_int(0, 9 - (ship_size - 1));

                case "y":
                    row = random_int(0, 9 - (ship_size - 1));
                    column = random_int(0, 9);
                    break;

                default:
                    return;
            }

            let valid = false;
            // Until it chooses an unvalid tile
            while (valid === false) {
                // Try again with other parameters
                const axis = random_axis();
                switch (axis) {
                    case "x":
                        row = random_int(0, 9);
                        column = random_int(0, 9 - (ship_size - 1));

                    case "y":
                        row = random_int(0, 9 - (ship_size - 1));
                        column = random_int(0, 9);
                        break;

                    default:
                        return;
                }

                // If the function returns false, the tile is invalid
                if (
                    _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.place_ship_DOM(
                        player,
                        ship_size,
                        [row, column],
                        axis
                    ) !== false
                )
                    valid = true;
            }
        }
    };

    return {
        player1,
        computer,
        play_game,
        random_int,
        random_axis,
        end,
        reset_game,
        add_attack_methods,
        cds,
        choose_tiles_automatically,
    };
})();




/***/ }),

/***/ "./src/js/gameboard.js":
/*!*****************************!*\
  !*** ./src/js/gameboard.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");


// All the details about the gameboard obj
const Gameboard = function () {
    // Generates all the tiles (10 x 10)
    const tiles = (function () {
        const rows = [];

        for (let i = 0; i < 10; i++) {
            const array = [];
            array.length = 10;
            array.fill("w");

            rows.push(array);
        }

        return rows;
    })();

    // The ships currently in the board
    const ships = [];

    // Adds a ship to the board
    const place_ship = (length, [row, column], axis) => {
        if (!(axis === "x" || axis === "y")) return;
        if (length < 2 || length > 5) return;

        // Makes a new ship (obj) and initializes some values
        const new_ship = _ship__WEBPACK_IMPORTED_MODULE_0__.Ship.make_ship(length);
        new_ship.orientation = axis;

        new_ship.coordinates = "";

        switch (axis) {
            case "x":
                // The ship cannot be too close to the border
                if (column + length > 10)
                    return "Not possible to place this ship here";

                // The ship must not be placed where there already is a ship at the coordinates
                for (let i = 0; i < length; i++) {
                    if (tiles[row][column + i] !== "w") return;
                }

                // Adds the coordinates to the obj
                // and the ship to the board
                for (let i = 0; i < length; i++) {
                    column + i < 10
                        ? (tiles[row][column + i] = new_ship.parts[i])
                        : tiles[row][column];

                    !(i === length - 1)
                        ? (new_ship.coordinates += `(${[row, column + i]}); `)
                        : (new_ship.coordinates += `(${[row, column + i]})`);
                }

                break;

            case "y":
                if (row + length > 10)
                    return "Not possible to place this ship here";

                for (let i = 0; i < length; i++) {
                    if (tiles[row + i][column] !== "w") return;
                }

                for (let i = 0; i < length; i++) {
                    row + i < 10
                        ? (tiles[row + i][column] = new_ship.parts[i])
                        : tiles[row][column];

                    !(i === length - 1)
                        ? (new_ship.coordinates += `(${[row + i, column]}); `)
                        : (new_ship.coordinates += `(${[row + i, column]})`);
                }

                break;

            default:
                return;
        }

        // The ship is now in the board
        ships.push(new_ship);

        return new_ship;
    };

    // The board receives and attack and changes its tiles depending on what was hit
    const receive_attack = ([row, column]) => {
        let won = null;

        // The tiles in the board obj
        switch (tiles[row][column]) {
            // If there is a 0 at the coordinates it means a ship was hit
            case 0:
                // Marks the ship as hit
                tiles[row][column] = 1;

                // The ship that was hit
                let ship_hit = ships.find(({ coordinates }) =>
                    coordinates.includes(`(${row},${column})`)
                );

                // Gets all the coordinates where the ship hit is
                let coords_array = ship_hit.coordinates.split(";");
                coords_array = coords_array.map((coord) => coord.trim());

                // Identifies which of the was hit
                const part_hit = coords_array.indexOf(`(${row},${column})`);

                // Finally, marks the ship obj as hit
                ship_hit.hit(part_hit);

                // After the attack, checks if the board lost all its ships
                won = ships.every((ship) => ship.is_sunk());

                return { won, hit: "yes" };

            // If the attack hit water
            case "w":
                // Marks the tile as hit
                tiles[row][column] = "m";

                // Checks if the game is over
                // Kinda useless, but you never know
                won = ships.every((ship) => ship.is_sunk());

                return { won, hit: "no" };

            default:
                return "no";
        }
    };

    return {
        tiles,
        place_ship,
        receive_attack,
        ships,
    };
};




/***/ }),

/***/ "./src/js/player.js":
/*!**************************!*\
  !*** ./src/js/player.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/js/gameboard.js");


// The details about the players
const Player = function (type) {
    // Only 2 types allowed
    if (!(type === "human" || type === "AI")) return;

    // Creates its keyboard
    const gameboard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard)();

    return { gameboard, type };
};




/***/ }),

/***/ "./src/js/ship.js":
/*!************************!*\
  !*** ./src/js/ship.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship)
/* harmony export */ });
// The ship obj
const Ship = (function () {
    // All the ships have in its prototype
    const prototype = (function () {
        // A method to be hit
        const hit = function (position) {
            this.parts[position] = 1;
        };

        // A method to check if it is sunk
        const is_sunk = function () {
            return this.parts.every((part) => part === 1);
        };

        return {
            hit,
            is_sunk,
        };
    })();

    ////

    // Creates a new ship
    const make_ship = function (length) {
        if (!Number(length)) return;

        // All the ship parts
        // The part is indicated as 0 if the ship is afloat
        // and 1 if otherwise
        const parts = [];
        parts.length = length;
        parts.fill(0);

        return Object.assign(Object.create(prototype), {
            length,
            parts,
        });
    };

    return {
        make_ship,
    };
})();




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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_battleship_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/battleship.css */ "./src/css/battleship.css");
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_elements */ "./src/js/DOM_elements.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/js/game.js");




const init = function () {
    // Initiates a game
    _game__WEBPACK_IMPORTED_MODULE_2__.Game.play_game();

    // Adds functionallity for the "r" in the keyboard
    document.addEventListener("keydown", (e) => {
        if (e.key === "r") _game__WEBPACK_IMPORTED_MODULE_2__.Game.reset_game();
    });

    // Initializes the restart btn functionallity
    _DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.restart_btn.addEventListener("click", _game__WEBPACK_IMPORTED_MODULE_2__.Game.reset_game);
};

init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NOQTs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7QUFDUztBQUNWOztBQUU5QjtBQUNBO0FBQ0EsSUFBSSxpREFBYzs7QUFFbEI7QUFDQTtBQUNBLDJCQUEyQixrREFBZTtBQUMxQyxLQUFLOztBQUVMO0FBQ0EsSUFBSSw4RUFBbUMsVUFBVSxrREFBZTtBQUNoRTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9jc3MvYmF0dGxlc2hpcC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvY3NzL2JhdHRsZXNoaXAuY3NzP2FiMWIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvanMvRE9NX2VsZW1lbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9qcy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9qcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xcbn1cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXllcjFfYm9hcmQsXFxuLmNvbXB1dGVyX2JvYXJkIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBvdXRsaW5lOiA1cHggc29saWQgIzY2NjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYig5NSwgOTUsIDI0NSksIHJnYigxNDQsIDI0NywgMjQ3KSk7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xcbn1cXG5cXG4ucGxheWVyMV9ib2FyZCB7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MHB4O1xcblxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblxcbi5jb21wdXRlcl9ib2FyZCB7XFxuICAgIGJvdHRvbTogNTAlO1xcbiAgICByaWdodDogNTBweDtcXG5cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XFxufVxcblxcbi5ib2FyZF90aWxlIHtcXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCBwdXJwbGU7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uc2hpcF9wYXJ0IHtcXG4gICAgYmFja2dyb3VuZDogdmlvbGV0O1xcbn1cXG5cXG4uYm9hcmRfdGlsZS5oaXQsXFxuLmJvYXJkX3RpbGUubm8sXFxuLmJvYXJkX3RpbGVbcGxheWVyPVxcXCJodW1hblxcXCJdIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmJvYXJkX3RpbGUubm8ge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmJvYXJkX3RpbGUuaGl0IHtcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuLmJvYXJkX3RpbGUuc2hpcF9wYXJ0LmhpdCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNDMsIDY0LCA2NCk7XFxufVxcblxcbi5zaGlwc19jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uc2hpcHNfY29udGFpbmVyIC5zaGlwX3BhcnQge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIHB1cnBsZTtcXG59XFxuXFxuLnNoaXBzX2NvbnRhaW5lciAuc2hpcF9jb250YWluZXIge1xcbiAgICBjdXJzb3I6IG1vdmU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uc2hpcF9jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5idXR0b24uY2hhbmdlX29yaWVudGF0aW9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBjeWFuO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMHB4IDNweCBibHVlO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTBweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuYnV0dG9uLmNoYW5nZV9vcmllbnRhdGlvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4udmVydGljYWwge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxufVxcblxcbi5iZWluZ19kcmFnZ2VkIC5zaGlwX3BhcnQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM4LCAxMzAsIDIzOCwgMC43KTtcXG59XFxuXFxuLnBsYWNpbmdfcHJldmlldyB7XFxuICAgIGJhY2tncm91bmQ6IGxpbWU7XFxufVxcblxcbltwbGF5ZXI9XFxcImh1bWFuXFxcIl0uYm9hcmRfdGlsZSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uc3RhcnRfZ2FtZV9idG4sXFxuLnJlc3RhcnQge1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsdWV2aW9sZXQ7XFxufVxcblxcbi5zdGFydF9nYW1lX2J0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzUsIDk4LCAxMDApO1xcbn1cXG5cXG5idXR0b24ucmVzdGFydCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmF0dGxlc2hpcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTs7SUFFYixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUVBQWlFOztJQUVqRSxrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsVUFBVTs7SUFFViwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVzs7SUFFWCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFFBQVE7O0lBRVIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7O0lBRXZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0NBQWtDOztJQUVsQyxlQUFlOztJQUVmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCOztJQUVqQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogIzExMTtcXG59XFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGF5ZXIxX2JvYXJkLFxcbi5jb21wdXRlcl9ib2FyZCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgb3V0bGluZTogNXB4IHNvbGlkICM2NjY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoOTUsIDk1LCAyNDUpLCByZ2IoMTQ0LCAyNDcsIDI0NykpO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG59XFxuXFxuLnBsYXllcjFfYm9hcmQge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTBweDtcXG5cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4uY29tcHV0ZXJfYm9hcmQge1xcbiAgICBib3R0b206IDUwJTtcXG4gICAgcmlnaHQ6IDUwcHg7XFxuXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xcbn1cXG5cXG4uYm9hcmRfdGlsZSB7XFxuICAgIGJvcmRlcjogMC4xcHggc29saWQgcHVycGxlO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLnNoaXBfcGFydCB7XFxuICAgIGJhY2tncm91bmQ6IHZpb2xldDtcXG59XFxuXFxuLmJvYXJkX3RpbGUuaGl0LFxcbi5ib2FyZF90aWxlLm5vLFxcbi5ib2FyZF90aWxlW3BsYXllcj1cXFwiaHVtYW5cXFwiXSB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5ib2FyZF90aWxlLm5vIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5ib2FyZF90aWxlLmhpdCB7XFxuICAgIGJhY2tncm91bmQ6IGJsdWU7XFxufVxcblxcbi5ib2FyZF90aWxlLnNoaXBfcGFydC5oaXQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCA2NCwgNjQpO1xcbn1cXG5cXG4uc2hpcHNfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnNoaXBzX2NvbnRhaW5lciAuc2hpcF9wYXJ0IHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCBwdXJwbGU7XFxufVxcblxcbi5zaGlwc19jb250YWluZXIgLnNoaXBfY29udGFpbmVyIHtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnNoaXBfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uLmNoYW5nZV9vcmllbnRhdGlvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogY3lhbjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDBweCAzcHggYmx1ZTtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbmJ1dHRvbi5jaGFuZ2Vfb3JpZW50YXRpb246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuLnZlcnRpY2FsIHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbn1cXG5cXG4uYmVpbmdfZHJhZ2dlZCAuc2hpcF9wYXJ0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzOCwgMTMwLCAyMzgsIDAuNyk7XFxufVxcblxcbi5wbGFjaW5nX3ByZXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW1lO1xcbn1cXG5cXG5bcGxheWVyPVxcXCJodW1hblxcXCJdLmJvYXJkX3RpbGUge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnN0YXJ0X2dhbWVfYnRuLFxcbi5yZXN0YXJ0IHtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcblxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibHVldmlvbGV0O1xcbn1cXG5cXG4uc3RhcnRfZ2FtZV9idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM1LCA5OCwgMTAwKTtcXG59XFxuXFxuYnV0dG9uLnJlc3RhcnQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JhdHRsZXNoaXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXR0bGVzaGlwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBET01fZWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIENvbnRhaW5lciB0aGF0IHdyYXBzIHRoZSB3aG9sZSBzY3JlZW5cbiAgICBjb25zdCBtYWluX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9jb250YWluZXJcIik7XG5cbiAgICAvLyBCb3RoIGJvYXJkc1xuICAgIGNvbnN0IHBsYXllcjFfYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjFfYm9hcmRcIik7XG4gICAgY29uc3QgY29tcHV0ZXJfYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyX2JvYXJkXCIpO1xuXG4gICAgY29uc3QgcmVzdGFydF9idG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJlc3RhcnRcIik7XG5cbiAgICAvLyBDb250YWluZXIgZm9yIGFsbCB0aGUgcGxheWVyIHNoaXBzIGF0IHRoZSBiZWdpbm5pbmcgb2YgYSBtYXRjaFxuICAgIGNvbnN0IHNoaXBzX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHNfY29udGFpbmVyXCIpO1xuXG4gICAgLy8gR2VuZXJhdGVzIGEgYm9hcmQgdGlsZVxuICAgIGNvbnN0IGNyZWF0ZV9ib2FyZF90aWxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBib2FyZF90aWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm9hcmRfdGlsZS5jbGFzc0xpc3QuYWRkKFwiYm9hcmRfdGlsZVwiKTtcblxuICAgICAgICByZXR1cm4gYm9hcmRfdGlsZTtcbiAgICB9O1xuXG4gICAgLy8gUG9wdWxhdGVzIGEgcGxheWVyJ3MgYm9hcmRcbiAgICBjb25zdCBwb3B1bGF0ZV9ib2FyZCA9IChib2FyZCwgcGxheWVyKSA9PiB7XG4gICAgICAgIC8vIFJlbW92ZXMgYWxsIHRoZSB0aWxlcyBpbiB0aGUgYm9hcmRcbiAgICAgICAgd2hpbGUgKGJvYXJkLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgYm9hcmQubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2VuZXJhdGVzIDEgdGlsZSBmb3IgZWFjaCB0aWxlcyBpbiB0aGUgZ2FtZWJvYXJkIG9iamVjdCBvZiBlYWNoIHBsYXllclxuICAgICAgICAvLyBJdCBzaG91bGQgYWx3YXlzIGJlIDEwMCwgYnV0IGl0J3MgYmV0dGVyIG5vdCB0byBoYXJkLWNvZGUgaXRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuZ2FtZWJvYXJkLnRpbGVzLmZsYXQoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYm9hcmRfdGlsZSA9IGNyZWF0ZV9ib2FyZF90aWxlKCk7XG5cbiAgICAgICAgICAgIC8vIEdpdmVzIGEgdGlsZSBpdHMgY29vcmRpbmF0ZXMgYXMgYSBzdHJpbmdcbiAgICAgICAgICAgIGJvYXJkX3RpbGUuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZGF0YS1pZFwiLFxuXG4gICAgICAgICAgICAgICAgLy8gU2VjdXJlcyB0aGUgbnVtYmVyIHdpbGwgYWx3YXlzIGhhdmUgMiBkaWdpdHNcbiAgICAgICAgICAgICAgICBpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtSW50ZWdlckRpZ2l0czogMixcbiAgICAgICAgICAgICAgICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBJZGVudGlmaWVzIHdob3NlIGlzIHRoZSBib2FyZFxuICAgICAgICAgICAgYm9hcmRfdGlsZS5zZXRBdHRyaWJ1dGUoXCJwbGF5ZXJcIiwgcGxheWVyLnR5cGUpO1xuXG4gICAgICAgICAgICAvLyBDbGFzcyB0byBpZGVudGlmeSB0aGF0IHRoZSB0aWxlIGNhbm5vdCBiZSBjbGlja2VkXG4gICAgICAgICAgICAvLyBUaGUgY29tcHV0ZXIncyBib2FyZCBjYW4gb25seSBiZSBjbGlja2VkIG9uY2UgYWxsIHRoZSB1c2VyJ3Mgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZFxuICAgICAgICAgICAgYm9hcmRfdGlsZS5jbGFzc0xpc3QuYWRkKFwibm9cIik7XG5cbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChib2FyZF90aWxlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBHZXRzIGFsbCB0aGUgdGlsZXMgb2YgYSBjZXJ0YWluIHBsYXllclxuICAgIGNvbnN0IGdldF9ib2FyZF90aWxlcyA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgY29uc3QgYm9hcmRfdGlsZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICAgICAgICAgYC5ib2FyZF90aWxlW3BsYXllcj0ke3BsYXllci50eXBlfV1gXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20oYm9hcmRfdGlsZXMpO1xuICAgIH07XG5cbiAgICAvLyBHZXRzIGEgc3BlY2lmaWMgdGlsZSBmcm9tIGEgcGxheWVyLCBhY2NvcmRpbmcgdG8gaXRzIGNvb3JkaW5hdGVzXG4gICAgY29uc3QgZ2V0X3NwZWNpZmljX3RpbGUgPSAocGxheWVyLCBbcm93LCBjb2x1bW5dKSA9PiB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgYC5ib2FyZF90aWxlW3BsYXllcj1cIiR7cGxheWVyLnR5cGV9XCJdW2RhdGEtaWQ9XCIke3Jvd30ke2NvbHVtbn1cIl1gXG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIC8vIEdldHMgdGhlIG5leHQgdGlsZSBvbiB0aGUgYm9hcmQsIGhvcml6b250YWxseSBvciB2ZXJ0aWNhbGx5XG4gICAgY29uc3QgZ2V0X25leHRfdGlsZSA9IChheGlzLCBwbGF5ZXIsIHRpbGUpID0+IHtcbiAgICAgICAgaWYgKCEoYXhpcyA9PT0gXCJ5XCIgfHwgYXhpcyA9PT0gXCJ4XCIpKSByZXR1cm47XG5cbiAgICAgICAgc3dpdGNoIChheGlzKSB7XG4gICAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aWxlLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgICAgICAvLyBUaGUgbmV4dCB0aWxlIGluIHRoZSB5IGF4aXMgaXMgYWN0dWFsbHkgMTAgdGlsZXMgYXdheVxuICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICAgICBgW2RhdGEtaWQ9XCIke1xuICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKHRpbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKSkgKyAxMFxuICAgICAgICAgICAgICAgICAgICB9XCJdW3BsYXllcj1cIiR7cGxheWVyLnR5cGV9XCJdYFxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIENyZWF0ZXMgYSBzaGlwIHRvIGJlIHBsYWNlZCBhdCB0aGUgc3RhcnQgb2YgYSBnYW1lXG4gICAgY29uc3QgY3JlYXRlX3NoaXBfRE9NID0gKHBhcnRzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2hpcF9jb250YWluZXIuc2V0QXR0cmlidXRlKFwic2l6ZVwiLCBwYXJ0cyk7XG4gICAgICAgIHNoaXBfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaGlwX2NvbnRhaW5lclwiKTtcbiAgICAgICAgc2hpcF9jb250YWluZXIuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuXG4gICAgICAgIC8vIFRoZSBidXR0b24gaW4gdGhlIG1pZGRsZSBpcyB0byBjaGFuZ2UgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBzaGlwXG4gICAgICAgIGNvbnN0IGNoYW5nZV9vcmllbnRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNoYW5nZV9vcmllbnRhdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlX29yaWVudGF0aW9uXCIpO1xuICAgICAgICBjaGFuZ2Vfb3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnNoaXBfY29udGFpbmVyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRpdl9wYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGluZGl2X3BhcnQuY2xhc3NMaXN0LmFkZChcInNoaXBfcGFydFwiKTtcblxuICAgICAgICAgICAgc2hpcF9jb250YWluZXIuYXBwZW5kKGluZGl2X3BhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hpcF9jb250YWluZXIuYXBwZW5kKGNoYW5nZV9vcmllbnRhdGlvbik7XG4gICAgICAgIHNoaXBzX2NvbnRhaW5lci5hcHBlbmQoc2hpcF9jb250YWluZXIpO1xuICAgIH07XG5cbiAgICAvLyBDaGVja3MgaWYgYSBjZXJ0YWluIHNoaXAgY2FuIGJlIHBsYWNlZCBhdCBhIGNlcnRhaW4gdGlsZVxuICAgIGNvbnN0IGlzX3ZhbGlkID0gKHNoaXBfc2l6ZSwgc2hpcF9vcmllbnRhdGlvbiwgdGlsZSwgcGxheWVyKSA9PiB7XG4gICAgICAgIC8vIFRoZSBpbnRlbmRlZCBjb29yZGluYXRlc1xuICAgICAgICBjb25zdCByb3cgPSBOdW1iZXIodGlsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpWzBdKTtcbiAgICAgICAgY29uc3QgY29sdW1uID0gTnVtYmVyKHRpbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKVsxXSk7XG5cbiAgICAgICAgbGV0IG5leHQgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHNoaXBfb3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgLy8gU2hpcCBjYW5ub3QgYmUgdG9vIGNsb3NlIHRvIHRoZSBib3JkZXJzXG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbiArIHNoaXBfc2l6ZSA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBuZXh0ID0gdGlsZTtcbiAgICAgICAgICAgICAgICAvLyBDaGVja3MgaWYgdGhlcmUgYWxyZWFkeSBpcyBhIHNoaXAgYXQgdGhlIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwX3NpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBfcGFydFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC50aWxlc1tyb3ddW2NvbHVtbiArIGldID09PSAwXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGdldF9uZXh0X3RpbGUoc2hpcF9vcmllbnRhdGlvbiwgcGxheWVyLCBuZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgICAgICAvLyBTaGlwIGNhbm5vdCBiZSB0b28gY2xvc2UgdG8gdGhlIGJvcmRlcnNcbiAgICAgICAgICAgICAgICBpZiAocm93ICsgc2hpcF9zaXplID4gMTApIHJldHVybiBmYWxzZTtcblxuICAgICAgICAgICAgICAgIG5leHQgPSB0aWxlO1xuICAgICAgICAgICAgICAgIC8vIENoZWNrcyBpZiB0aGVyZSBhbHJlYWR5IGlzIGEgc2hpcCBhdCB0aGUgbG9jYXRpb25cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcF9wYXJ0XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnRpbGVzW3JvdyArIGldW2NvbHVtbl0gPT09IDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gZ2V0X25leHRfdGlsZShzaGlwX29yaWVudGF0aW9uLCBwbGF5ZXIsIG5leHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBQbGFjZXMgYSBzaGlwIGluIGJvdGggdGhlIHBsYXllciBnYW1lYm9hcmQob2JqKSBhbmQgaW4gdGhlIERPTSBnYW1lYm9hcmRcbiAgICBjb25zdCBwbGFjZV9zaGlwX0RPTSA9IChwbGF5ZXIsIGxlbmd0aCwgW3JvdywgY29sdW1uXSwgYXhpcykgPT4ge1xuICAgICAgICAvLyBUaGUgZmlyc3QgdGlsZSBvZiBhIHNoaXBcbiAgICAgICAgY29uc3QgYmFzZV90aWxlID0gZ2V0X2JvYXJkX3RpbGVzKHBsYXllcikuZmluZChcbiAgICAgICAgICAgICh0aWxlKSA9PiB0aWxlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikgPT09IGAke3Jvd30ke2NvbHVtbn1gXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gSWYgdGhlIHRpbGUgaXMgdmFsaWRcbiAgICAgICAgaWYgKGlzX3ZhbGlkKGxlbmd0aCwgYXhpcywgYmFzZV90aWxlLCBwbGF5ZXIpKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwX3RpbGVzID0gW2Jhc2VfdGlsZV07XG5cbiAgICAgICAgICAgIC8vIEdldCB0aGUgbmV4dCB0aWxlcyBkZXBlbmRpbmcgb24gdGhlIHNpemUgb2YgdGhlIHNoaXBcbiAgICAgICAgICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwX3RpbGVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0X25leHRfdGlsZShheGlzLCBwbGF5ZXIsIHNoaXBfdGlsZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBfdGlsZXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRfbmV4dF90aWxlKGF4aXMsIHBsYXllciwgc2hpcF90aWxlc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gUGxhY2VzIHRoZSBzaGlwIGluIHRoZSBnYW1lYm9hcmQgb2JqZWN0XG4gICAgICAgICAgICBjb25zdCBwbGFjZWRfc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2Vfc2hpcChcbiAgICAgICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICAgICAgW3JvdywgY29sdW1uXSxcbiAgICAgICAgICAgICAgICBheGlzXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAvLyBPbmx5IHNob3dzIHRoZSBzaGlwcyBvZiB0aGUgdXNlclxuICAgICAgICAgICAgaWYgKHBsYXllci50eXBlID09PSBcImh1bWFuXCIpXG4gICAgICAgICAgICAgICAgc2hpcF90aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwX3BhcnRcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIEFsbCB0aGUgY29udGFpbmVyIGZvciB0aGUgc2hpcHMgYXQgdGhlIHN0YXJ0XG4gICAgY29uc3QgYWxsX3NoaXBfY29udGFpbmVycyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBfY29udGFpbmVyXCIpXTtcbiAgICB9O1xuXG4gICAgLy8gUmVtb3ZlcyBhbGwgdGhlIGNoaWxkcmVuIGZyb20gdGhlIHNoaXBzIGNvbnRhaW5lciBhbmQgYWRkcyBuZXcgb25lc1xuICAgIGNvbnN0IHJlc2V0X3NoaXBzX2NvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgd2hpbGUgKHNoaXBzX2NvbnRhaW5lci5sYXN0Q2hpbGQpIHNoaXBzX2NvbnRhaW5lci5sYXN0Q2hpbGQucmVtb3ZlKCk7XG5cbiAgICAgICAgY3JlYXRlX3NoaXBfRE9NKDIpO1xuICAgICAgICBjcmVhdGVfc2hpcF9ET00oMyk7XG4gICAgICAgIGNyZWF0ZV9zaGlwX0RPTSgzKTtcbiAgICAgICAgY3JlYXRlX3NoaXBfRE9NKDQpO1xuICAgICAgICBjcmVhdGVfc2hpcF9ET00oNSk7XG4gICAgfTtcblxuICAgIC8vIEF0dGFja3MgdGhlIG90aGVyIHBsYXllciBib2FyZFxuICAgIGNvbnN0IGF0dGFja19ET00gPSAocGxheWVyLCBbcm93LCBjb2x1bW5dID0gWzAsIDBdKSA9PiB7XG4gICAgICAgIHN3aXRjaCAocGxheWVyLnR5cGUpIHtcbiAgICAgICAgICAgIC8vIElmIGl0IGlzIHRoZSBjb21wdXRlclxuICAgICAgICAgICAgY2FzZSBcIkFJXCI6XG4gICAgICAgICAgICAgICAgLy8gQXR0YWNrcyByYW5kb21seVxuICAgICAgICAgICAgICAgIHBsYXllci5hdHRhY2soKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG90aGVyX3BsYXllciA9IEdhbWUucGxheWVyMTtcblxuICAgICAgICAgICAgICAgIC8vIFRoZSBjb29yZGluYXRlcyBvZiB0aGUgcmFuZG9tIHRpbGUgYXR0YWtlZFxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBHYW1lLmNkc1swXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gR2FtZS5jZHNbMV07XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlX2hpdCA9IERPTV9lbC5nZXRfc3BlY2lmaWNfdGlsZShvdGhlcl9wbGF5ZXIsIFtyLCBjXSk7XG4gICAgICAgICAgICAgICAgdGlsZV9oaXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gSWYgaXQgaXMgdGhlIHVzZXJcbiAgICAgICAgICAgIGNhc2UgXCJodW1hblwiOlxuICAgICAgICAgICAgICAgIC8vIEF0dGFja3MgYmFzZWQgb24gdGhlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgcGxheWVyLmF0dGFjayhbcm93LCBjb2x1bW5dKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQWxsb3dzIHRoZSB1c2VyIHRvIHNlbGVjdCBhIHRpbGUgYW5kIGF0dGFjayB0aGUgY29tcHV0ZXIgYm9hcmRcbiAgICBjb25zdCBzZWxlY3RfdGlsZSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgLy8gVE9ETzogSW1wcm92ZSB0aGUgY3VycmVudCBcInR1cm4gc3dpdGNoIHN5c3RlbVwiXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICBsZXQgY29vcmRzID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG5cbiAgICAgICAgYXR0YWNrX0RPTShHYW1lLnBsYXllcjEsIFtOdW1iZXIoY29vcmRzWzBdKSwgTnVtYmVyKGNvb3Jkc1sxXSldKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBnYW1lIGlzIG5vdCBvdmVyLCBpdCBpcyBub3cgdGhlIGNvbXB1dGVyJ3MgdHVyblxuICAgICAgICAgICAgaWYgKEdhbWUuZW5kWzBdID09PSBmYWxzZSkgcGxheV90dXJuKEdhbWUuY29tcHV0ZXIpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH07XG5cbiAgICAvLyBBbGxvd3MgYSBwbGF5ZXIgdG8gcGxheSBpdHMgdHVyblxuICAgIC8vIEhvbmVzdGx5LCBkdW5ubyB3aHkgaSBkaWQgdGhpcywgYnV0IGhlcmUgaXQgaXNcbiAgICBjb25zdCBwbGF5X3R1cm4gPSAocGxheWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAocGxheWVyLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBSVwiOlxuICAgICAgICAgICAgICAgIGF0dGFja19ET00ocGxheWVyLCBbMCwgMF0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiaHVtYW5cIjpcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gQWRkcyBmdW5jdGlvbmFsaXR5IHRvIHRoZSBzdGFydCBnYW1lIGJ1dHRvblxuICAgIGNvbnN0IGFjdGl2YXRlX3N0YXJ0X2J1dHRvbiA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydF9nYW1lX2J0blwiKTtcblxuICAgICAgICAvLyBXaGVuIGNsaWNrZWQsIHJlbW92ZXMgaXRzZWxmIGFuZCBhbGxvd3MgdGhlIGNvbXB1dGVyIGJvYXJkIHRvIGJlIGF0dGFja2VkXG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgMzAwKTtcblxuICAgICAgICAgICAgZ2V0X2JvYXJkX3RpbGVzKEdhbWUuY29tcHV0ZXIpLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJub1wiKTtcbiAgICAgICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdF90aWxlKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICAvLyBKdXN0IGFsbG93cyB0aGUgZHJvcCBldmVudCB0byB3b3JrXG4gICAgLy8gSlMgaXMgY3Jhenkgc29tZXRpbWVzXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgdG8gYWxsb3cgZHJvcFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgLy8gQWRkcyBmdW5jdGlvbmFsaXR5IGZvciB0aGUgc2hpcHMgdG8gYmUgcGxhY2VkIGF0IHRoZSBzdGFydCBvZiB0aGUgZ2FtZVxuICAgIGNvbnN0IGFjdGl2YXRlX2RyYWdfb3Zlcl90aWxlcyA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgLy8gQWRkcyB0aGUgZXZlbnQgbGlzdGVuZXJzIGZvciBhbGwgdGhlIHRpbGVzXG4gICAgICAgIGdldF9ib2FyZF90aWxlcyhwbGF5ZXIpLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgc2hpcCBiZWluZyBkcmFnZ2VkLFxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZWluZ19kcmFnZ2VkXCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gaXRzIHNpemUsIGF4aXMsIGFuZCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHRpbGUgaXQgd2FzIGRyb3BwZWQgb25cbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwX3NpemUgPSBOdW1iZXIoc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKFwic2l6ZVwiKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudF9yb3cgPSBOdW1iZXIodGlsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpWzBdKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50X2NvbHVtbiA9IE51bWJlcih0aWxlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIilbMV0pO1xuICAgICAgICAgICAgICAgIGxldCBvcmllbnRhdGlvbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQuY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWxcIilcbiAgICAgICAgICAgICAgICAgICAgPyAob3JpZW50YXRpb24gPSBcInlcIilcbiAgICAgICAgICAgICAgICAgICAgOiAob3JpZW50YXRpb24gPSBcInhcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBJZiBpcyBhIHZhbGlkIHRpbGUsIHBsYWNlIGl0IHRoZXJlXG4gICAgICAgICAgICAgICAgaWYgKGlzX3ZhbGlkKHNoaXBfc2l6ZSwgb3JpZW50YXRpb24sIHRpbGUsIHBsYXllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vfc2hpcF9ET00oXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwX3NpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBbY3VycmVudF9yb3csIGN1cnJlbnRfY29sdW1uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYW5kIHJlbW92ZXMgdGhlIHByZXZpZXcgY2xhc3MgYWRkZWQgcHJldmlvdXNseVxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcF9zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LnJlbW92ZShcInBsYWNpbmdfcHJldmlld1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBnZXRfbmV4dF90aWxlKG9yaWVudGF0aW9uLCBwbGF5ZXIsIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlcyB0aGUgZHJhZ2dhYmxlIHNoaXAgZnJvbSB0aGUgRE9NXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzaGlwc19jb250YWluZXIuY2hpbGRFbGVtZW50Q291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcGxheV9nYW1lX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlfZ2FtZV9idXR0b24uY2xhc3NMaXN0LmFkZChcInN0YXJ0X2dhbWVfYnRuXCIpO1xuICAgICAgICAgICAgICAgICAgICBwbGF5X2dhbWVfYnV0dG9uLnRleHRDb250ZW50ID0gXCJTdGFydCBHYW1lXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgc2hpcHNfY29udGFpbmVyLmFwcGVuZChwbGF5X2dhbWVfYnV0dG9uKTtcblxuICAgICAgICAgICAgICAgICAgICBhY3RpdmF0ZV9zdGFydF9idXR0b24oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gV2hlbiBhIHNoaXAgaXMgZHJhZ2dlZCBpbnRvIGEgdGlsZVxuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gR2V0cyB0aGUgc2hpcCBiZWluZyBkcmFnZ2VkXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJlaW5nX2RyYWdnZWRcIik7XG5cbiAgICAgICAgICAgICAgICAvLyBBbmQgaXRzIGNoYXJhY3RlcmlzdGljc1xuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBfc2l6ZSA9IE51bWJlcihzZWxlY3RlZC5nZXRBdHRyaWJ1dGUoXCJzaXplXCIpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpXG4gICAgICAgICAgICAgICAgICAgID8gKG9yaWVudGF0aW9uID0gXCJ5XCIpXG4gICAgICAgICAgICAgICAgICAgIDogKG9yaWVudGF0aW9uID0gXCJ4XCIpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHNoaXAgY2FuIGJlIHBsYWNlZCBpbiBzYWlkIHRpbGVcbiAgICAgICAgICAgICAgICBpZiAoaXNfdmFsaWQoc2hpcF9zaXplLCBvcmllbnRhdGlvbiwgdGlsZSwgcGxheWVyKSkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZHMgdGhlIHByZXZpZXcgY2xhc3Mgb24gdGhlIHRpbGVzIHdoZXJlIHRoZSBzaGlwIHdpbGwgYmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcF9zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTGlzdC5hZGQoXCJwbGFjaW5nX3ByZXZpZXdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGdldF9uZXh0X3RpbGUob3JpZW50YXRpb24sIHBsYXllciwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIDAuMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFdoZW4gYSBzaGlwIGlzIGRyYWdnZWQgb3V0IG9mIGEgdGlsZVxuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJlaW5nX2RyYWdnZWRcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwX3NpemUgPSBOdW1iZXIoc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKFwic2l6ZVwiKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgICAgICA/IChvcmllbnRhdGlvbiA9IFwieVwiKVxuICAgICAgICAgICAgICAgICAgICA6IChvcmllbnRhdGlvbiA9IFwieFwiKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZXMgdGhlIHByZXZpZXcgY2xhc3Mgb2YgdGhlIHRpbGVzXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aWxlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcF9zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LnJlbW92ZShcInBsYWNpbmdfcHJldmlld1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBnZXRfbmV4dF90aWxlKG9yaWVudGF0aW9uLCBwbGF5ZXIsIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluX2NvbnRhaW5lcixcbiAgICAgICAgcGxheWVyMV9ib2FyZCxcbiAgICAgICAgY29tcHV0ZXJfYm9hcmQsXG4gICAgICAgIGNyZWF0ZV9ib2FyZF90aWxlLFxuICAgICAgICBwb3B1bGF0ZV9ib2FyZCxcbiAgICAgICAgZ2V0X2JvYXJkX3RpbGVzLFxuICAgICAgICBnZXRfbmV4dF90aWxlLFxuICAgICAgICBnZXRfc3BlY2lmaWNfdGlsZSxcbiAgICAgICAgY3JlYXRlX3NoaXBfRE9NLFxuICAgICAgICBhbGxfc2hpcF9jb250YWluZXJzLFxuICAgICAgICBhY3RpdmF0ZV9kcmFnX292ZXJfdGlsZXMsXG4gICAgICAgIHBsYWNlX3NoaXBfRE9NLFxuICAgICAgICByZXNldF9zaGlwc19jb250YWluZXIsXG4gICAgICAgIHJlc3RhcnRfYnRuLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyBET01fZWwgfTtcbiIsImltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbGVtZW50c1wiO1xuaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5cbi8vIFRoZSBnYW1lIGRldGFpbHNcbmNvbnN0IEdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8vIEJvdGggcGxheWVyc1xuICAgIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoXCJodW1hblwiKTtcbiAgICBjb25zdCBjb21wdXRlciA9IFBsYXllcihcIkFJXCIpO1xuXG4gICAgLy8gSW5pdGlhbGl6ZXMgYSBuZXcgbWF0Y2hcbiAgICBjb25zdCBwbGF5X2dhbWUgPSAoKSA9PiB7XG4gICAgICAgIC8vIEFkZHMgYWxsIHRoZSB0aWxlcyB0byBib3RoIGJvcmRzXG4gICAgICAgIERPTV9lbC5wb3B1bGF0ZV9ib2FyZChET01fZWwucGxheWVyMV9ib2FyZCwgcGxheWVyMSk7XG4gICAgICAgIERPTV9lbC5wb3B1bGF0ZV9ib2FyZChET01fZWwuY29tcHV0ZXJfYm9hcmQsIGNvbXB1dGVyKTtcblxuICAgICAgICAvLyBBZGRzIGFuIGF0dGNrIGZ1bmN0aW9uIHRvIHRoZSBwbGF5ZXJzXG4gICAgICAgIGFkZF9hdHRhY2tfbWV0aG9kcyhwbGF5ZXIxKTtcbiAgICAgICAgYWRkX2F0dGFja19tZXRob2RzKGNvbXB1dGVyKTtcblxuICAgICAgICAvLyBMYXlzIHRoZSBjb21wdXRlciBzaGlwc1xuICAgICAgICBjaG9vc2VfdGlsZXNfYXV0b21hdGljYWxseShjb21wdXRlcik7XG5cbiAgICAgICAgLy8gQWRkcyB0aGUgZHJhZ2dhYmxlIHNoaXBzIHRvIHRoZSBET01cbiAgICAgICAgRE9NX2VsLnJlc2V0X3NoaXBzX2NvbnRhaW5lcigpO1xuXG4gICAgICAgIC8vIFdoZW4gYSBzaGlwIGlzIGRyYWdnZWRcbiAgICAgICAgRE9NX2VsLmFsbF9zaGlwX2NvbnRhaW5lcnMoKS5mb3JFYWNoKChjb250YWluZXIpID0+XG4gICAgICAgICAgICAvLyBBZGRzIGEgY2xhc3MgdG8gaXRcbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJlaW5nX2RyYWdnZWRcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIFNhbWUgdGhpbmcsIGJ1dCBvcHBvc2l0ZVxuICAgICAgICBET01fZWwuYWxsX3NoaXBfY29udGFpbmVycygpLmZvckVhY2goKGNvbnRhaW5lcikgPT5cbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoXCJiZWluZ19kcmFnZ2VkXCIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBBZGRzIGZ1bmN0aW9uYWxpdHkgZm9yIHRoZSBib2FyZCB0aWxlcyB0byBiZSBkcmFnZ2VkIG92ZXJcbiAgICAgICAgRE9NX2VsLmFjdGl2YXRlX2RyYWdfb3Zlcl90aWxlcyhwbGF5ZXIxKTtcbiAgICB9O1xuXG4gICAgLy8gR2V0cyBhIHJhbmRvbSBpbnRlZ2VyIGJldHdlZW4gbWluIGFuZCBtYXggKGJvdGggaW5jbHVzaXZlKVxuICAgIGNvbnN0IHJhbmRvbV9pbnQgPSAobWluLCBtYXgpID0+IHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfTtcblxuICAgIC8vIENob29zZXMgYSByYW5kb20gb3JpZW50YXRpb24gZm9yIHRoZSBjb21wdXRlciBzaGlwXG4gICAgY29uc3QgcmFuZG9tX2F4aXMgPSAoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAocmFuZG9tX2ludCgwLCAxKSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHJldHVybiBcInhcIjtcblxuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiBcInlcIjtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gV2hldGhlciB0aGUgZ2FtZSBpcyBmaW5pc2hlZCBvciBub3RcbiAgICBjb25zdCBlbmQgPSBbZmFsc2VdO1xuXG4gICAgLy8gUmVzdGFydHMgdGhlIGdhbWVcbiAgICBjb25zdCByZXNldF9nYW1lID0gKCkgPT4ge1xuICAgICAgICAvLyBHYW1lIG92ZXJcbiAgICAgICAgZW5kWzBdID0gdHJ1ZTtcblxuICAgICAgICAvLyBSZW1vdmVzIGFsbCB0aGUgc2hpcHMgZnJvbSB0aGUgZ2FtZWJvYXJkIG9ialxuICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5zaGlwcy5zcGxpY2UoMCwgcGxheWVyMS5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoKTtcbiAgICAgICAgY29tcHV0ZXIuZ2FtZWJvYXJkLnNoaXBzLnNwbGljZSgwLCBjb21wdXRlci5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoKTtcblxuICAgICAgICAvLyBSZXNldHMgYWxsIHRoZSBib2FyZCB0aWxlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyLmdhbWVib2FyZC50aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb21wdXRlci5nYW1lYm9hcmQudGlsZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlci5nYW1lYm9hcmQudGlsZXNbaV1bal0gPSBcIndcIjtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC50aWxlc1tpXVtqXSA9IFwid1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RhcnQgYSBuZXcgZ2FtZVxuICAgICAgICBwbGF5X2dhbWUoKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIEEgbmV3IGdhbWUgYmVnaW5zXG4gICAgICAgICAgICBlbmRbMF0gPSBmYWxzZTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xuXG4gICAgLy8gVGhlIG1vc3QgcmVjZW50IGNvb3JkaW5hdGVzIHVzZWQgYnkgdGhlIGNvbXB1dGVyXG4gICAgY29uc3QgY2RzID0gW107XG5cbiAgICAvLyBGdW5jdGlvbnMgdXNlZCBieSB0aGUgcGxheWVycyB0byBhdHRhY2sgdGhlIG9wcG9uZW50J3MgYm9hcmRcbiAgICBjb25zdCBhZGRfYXR0YWNrX21ldGhvZHMgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAocGxheWVyLnR5cGUpIHtcbiAgICAgICAgICAgIC8vIFRoZSBjb21wdXRlclxuICAgICAgICAgICAgY2FzZSBcIkFJXCI6XG4gICAgICAgICAgICAgICAgcGxheWVyLmF0dGFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gUmFuZG9tIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJhbmRvbV9pbnQoMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHJhbmRvbV9pbnQoMCwgOSk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVjb3JkcyB0aGUgY29vcmRpbmF0ZXMgdG8gYmUgdXNlZCBpbiB0aGUgRE9NXG4gICAgICAgICAgICAgICAgICAgIGNkc1swXSA9IHJvdztcbiAgICAgICAgICAgICAgICAgICAgY2RzWzFdID0gY29sdW1uO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFBsYWNlcyBhIHNoaXAgaW4gdGhlIGJvYXJkXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBsYXllcjEuZ2FtZWJvYXJkLnJlY2VpdmVfYXR0YWNrKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm5zIG5vIGlmIGlzIG5vdCBwb3NzaWJsZSB0byBwbGFjZSBhIHNoaXAgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcmVzdWx0ID09PSBcIm5vXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gVHJ5IGFnYWluXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmF0dGFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgYXR0YWNrIHdpbnMgdGhlIGdhbWVcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcmVzdWx0LndvbiA9PT0gdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJUaGUgY29tcHV0ZXIgd2lucyEhIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3RhcnQgYSBuZXcgb25lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0X2dhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBtYWtlIHRoZSBBSSBoaXQgYSBhZGphY2VudCB0aWxlIGlmIGl0IGhpdHMgYSBzaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHJlc3VsdC53b24gPT09IGZhbHNlICYmIHJlc3VsdC5oaXQgPT09IFwieWVzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgLy8gVGhlIHVzZXJcbiAgICAgICAgICAgIGNhc2UgXCJodW1hblwiOlxuICAgICAgICAgICAgICAgIHBsYXllci5hdHRhY2sgPSAoW3JvdywgY29sdW1uXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBBdHRhY2tzIHRoZSBjb21wdXRlcnMncyBib2FyZFxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb21wdXRlci5nYW1lYm9hcmQucmVjZWl2ZV9hdHRhY2soW1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIGNvcnJlc3BvbmRpbmcgdGlsZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZF90aWxlID0gRE9NX2VsLmdldF9zcGVjaWZpY190aWxlKGNvbXB1dGVyLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgYSBzaGlwIHdhcyBoaXQgYnV0IHRoZSBnYW1lIGlzIG5vdCBvdmVyIHlldFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSByZXN1bHQud29uID09PSBmYWxzZSAmJiByZXN1bHQuaGl0ID09PSBcInllc1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1hcmtzIHRoZSB0aWxlcyBhcyBhIHNoaXAgaGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcF9wYXJ0XCIsIFwiaGl0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZ2FtZSBpcyBvdmVyIGFmdGVyIHRoZSBhdHRhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcmVzdWx0LndvbiA9PT0gdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZF90aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwX3BhcnRcIiwgXCJoaXRcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmRzIHRoZSBnYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IHdpbiEhIVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRfZ2FtZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibm9cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIENob29zZXMgYXV0b21hdGljYWxseSB3aGVyZSB0byBwbGFjZSBhbGwgdGhlIGNvbXB1dGVyJ3Mgc2hpcHNcbiAgICBjb25zdCBjaG9vc2VfdGlsZXNfYXV0b21hdGljYWxseSA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgLy8gVGhlcmUgYXJlIG9ubHkgNSBzaGlwc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNoaXBfc2l6ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIGxldCByb3cgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIFJhbmRvbSBvcmllbnRhdGlvblxuICAgICAgICAgICAgY29uc3QgYXhpcyA9IHJhbmRvbV9heGlzKCk7XG5cbiAgICAgICAgICAgIC8vIEFsbCB0aGUgcG9zc2libGUgc2hpcCBzaXplc1xuICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBzaGlwX3NpemUgPSAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgc2hpcF9zaXplID0gMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHNoaXBfc2l6ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBzaGlwX3NpemUgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgc2hpcF9zaXplID0gNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENob29zZXMgYSB2YWxpZCBjb29yZGluYXRlIGJhc2VkIG9uIHRoZSBzaGlwIHNpemVkXG4gICAgICAgICAgICAvLyBBdm9pZHMgY2hvb3Npbmcgb25lIHRvbyBjbG9zZSB0byB0aGUgYm9yZGVyc1xuICAgICAgICAgICAgc3dpdGNoIChheGlzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gcmFuZG9tX2ludCgwLCA5KTtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gcmFuZG9tX2ludCgwLCA5IC0gKHNoaXBfc2l6ZSAtIDEpKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IHJhbmRvbV9pbnQoMCwgOSAtIChzaGlwX3NpemUgLSAxKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IHJhbmRvbV9pbnQoMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIFVudGlsIGl0IGNob29zZXMgYW4gdW52YWxpZCB0aWxlXG4gICAgICAgICAgICB3aGlsZSAodmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy8gVHJ5IGFnYWluIHdpdGggb3RoZXIgcGFyYW1ldGVyc1xuICAgICAgICAgICAgICAgIGNvbnN0IGF4aXMgPSByYW5kb21fYXhpcygpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93ID0gcmFuZG9tX2ludCgwLCA5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IHJhbmRvbV9pbnQoMCwgOSAtIChzaGlwX3NpemUgLSAxKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9IHJhbmRvbV9pbnQoMCwgOSAtIChzaGlwX3NpemUgLSAxKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSByYW5kb21faW50KDAsIDkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBmYWxzZSwgdGhlIHRpbGUgaXMgaW52YWxpZFxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgRE9NX2VsLnBsYWNlX3NoaXBfRE9NKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcF9zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3JvdywgY29sdW1uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNcbiAgICAgICAgICAgICAgICAgICAgKSAhPT0gZmFsc2VcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXIxLFxuICAgICAgICBjb21wdXRlcixcbiAgICAgICAgcGxheV9nYW1lLFxuICAgICAgICByYW5kb21faW50LFxuICAgICAgICByYW5kb21fYXhpcyxcbiAgICAgICAgZW5kLFxuICAgICAgICByZXNldF9nYW1lLFxuICAgICAgICBhZGRfYXR0YWNrX21ldGhvZHMsXG4gICAgICAgIGNkcyxcbiAgICAgICAgY2hvb3NlX3RpbGVzX2F1dG9tYXRpY2FsbHksXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IEdhbWUgfTtcbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbi8vIEFsbCB0aGUgZGV0YWlscyBhYm91dCB0aGUgZ2FtZWJvYXJkIG9ialxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIEdlbmVyYXRlcyBhbGwgdGhlIHRpbGVzICgxMCB4IDEwKVxuICAgIGNvbnN0IHRpbGVzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGFycmF5Lmxlbmd0aCA9IDEwO1xuICAgICAgICAgICAgYXJyYXkuZmlsbChcIndcIik7XG5cbiAgICAgICAgICAgIHJvd3MucHVzaChhcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9KSgpO1xuXG4gICAgLy8gVGhlIHNoaXBzIGN1cnJlbnRseSBpbiB0aGUgYm9hcmRcbiAgICBjb25zdCBzaGlwcyA9IFtdO1xuXG4gICAgLy8gQWRkcyBhIHNoaXAgdG8gdGhlIGJvYXJkXG4gICAgY29uc3QgcGxhY2Vfc2hpcCA9IChsZW5ndGgsIFtyb3csIGNvbHVtbl0sIGF4aXMpID0+IHtcbiAgICAgICAgaWYgKCEoYXhpcyA9PT0gXCJ4XCIgfHwgYXhpcyA9PT0gXCJ5XCIpKSByZXR1cm47XG4gICAgICAgIGlmIChsZW5ndGggPCAyIHx8IGxlbmd0aCA+IDUpIHJldHVybjtcblxuICAgICAgICAvLyBNYWtlcyBhIG5ldyBzaGlwIChvYmopIGFuZCBpbml0aWFsaXplcyBzb21lIHZhbHVlc1xuICAgICAgICBjb25zdCBuZXdfc2hpcCA9IFNoaXAubWFrZV9zaGlwKGxlbmd0aCk7XG4gICAgICAgIG5ld19zaGlwLm9yaWVudGF0aW9uID0gYXhpcztcblxuICAgICAgICBuZXdfc2hpcC5jb29yZGluYXRlcyA9IFwiXCI7XG5cbiAgICAgICAgc3dpdGNoIChheGlzKSB7XG4gICAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgICAgIC8vIFRoZSBzaGlwIGNhbm5vdCBiZSB0b28gY2xvc2UgdG8gdGhlIGJvcmRlclxuICAgICAgICAgICAgICAgIGlmIChjb2x1bW4gKyBsZW5ndGggPiAxMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90IHBvc3NpYmxlIHRvIHBsYWNlIHRoaXMgc2hpcCBoZXJlXCI7XG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgc2hpcCBtdXN0IG5vdCBiZSBwbGFjZWQgd2hlcmUgdGhlcmUgYWxyZWFkeSBpcyBhIHNoaXAgYXQgdGhlIGNvb3JkaW5hdGVzXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGlsZXNbcm93XVtjb2x1bW4gKyBpXSAhPT0gXCJ3XCIpIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBBZGRzIHRoZSBjb29yZGluYXRlcyB0byB0aGUgb2JqXG4gICAgICAgICAgICAgICAgLy8gYW5kIHRoZSBzaGlwIHRvIHRoZSBib2FyZFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uICsgaSA8IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICh0aWxlc1tyb3ddW2NvbHVtbiArIGldID0gbmV3X3NoaXAucGFydHNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRpbGVzW3Jvd11bY29sdW1uXTtcblxuICAgICAgICAgICAgICAgICAgICAhKGkgPT09IGxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChuZXdfc2hpcC5jb29yZGluYXRlcyArPSBgKCR7W3JvdywgY29sdW1uICsgaV19KTsgYClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKG5ld19zaGlwLmNvb3JkaW5hdGVzICs9IGAoJHtbcm93LCBjb2x1bW4gKyBpXX0pYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAgICAgaWYgKHJvdyArIGxlbmd0aCA+IDEwKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJOb3QgcG9zc2libGUgdG8gcGxhY2UgdGhpcyBzaGlwIGhlcmVcIjtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRpbGVzW3JvdyArIGldW2NvbHVtbl0gIT09IFwid1wiKSByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByb3cgKyBpIDwgMTBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKHRpbGVzW3JvdyArIGldW2NvbHVtbl0gPSBuZXdfc2hpcC5wYXJ0c1tpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogdGlsZXNbcm93XVtjb2x1bW5dO1xuXG4gICAgICAgICAgICAgICAgICAgICEoaSA9PT0gbGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgID8gKG5ld19zaGlwLmNvb3JkaW5hdGVzICs9IGAoJHtbcm93ICsgaSwgY29sdW1uXX0pOyBgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiAobmV3X3NoaXAuY29vcmRpbmF0ZXMgKz0gYCgke1tyb3cgKyBpLCBjb2x1bW5dfSlgKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUaGUgc2hpcCBpcyBub3cgaW4gdGhlIGJvYXJkXG4gICAgICAgIHNoaXBzLnB1c2gobmV3X3NoaXApO1xuXG4gICAgICAgIHJldHVybiBuZXdfc2hpcDtcbiAgICB9O1xuXG4gICAgLy8gVGhlIGJvYXJkIHJlY2VpdmVzIGFuZCBhdHRhY2sgYW5kIGNoYW5nZXMgaXRzIHRpbGVzIGRlcGVuZGluZyBvbiB3aGF0IHdhcyBoaXRcbiAgICBjb25zdCByZWNlaXZlX2F0dGFjayA9IChbcm93LCBjb2x1bW5dKSA9PiB7XG4gICAgICAgIGxldCB3b24gPSBudWxsO1xuXG4gICAgICAgIC8vIFRoZSB0aWxlcyBpbiB0aGUgYm9hcmQgb2JqXG4gICAgICAgIHN3aXRjaCAodGlsZXNbcm93XVtjb2x1bW5dKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIDAgYXQgdGhlIGNvb3JkaW5hdGVzIGl0IG1lYW5zIGEgc2hpcCB3YXMgaGl0XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy8gTWFya3MgdGhlIHNoaXAgYXMgaGl0XG4gICAgICAgICAgICAgICAgdGlsZXNbcm93XVtjb2x1bW5dID0gMTtcblxuICAgICAgICAgICAgICAgIC8vIFRoZSBzaGlwIHRoYXQgd2FzIGhpdFxuICAgICAgICAgICAgICAgIGxldCBzaGlwX2hpdCA9IHNoaXBzLmZpbmQoKHsgY29vcmRpbmF0ZXMgfSkgPT5cbiAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXMuaW5jbHVkZXMoYCgke3Jvd30sJHtjb2x1bW59KWApXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIC8vIEdldHMgYWxsIHRoZSBjb29yZGluYXRlcyB3aGVyZSB0aGUgc2hpcCBoaXQgaXNcbiAgICAgICAgICAgICAgICBsZXQgY29vcmRzX2FycmF5ID0gc2hpcF9oaXQuY29vcmRpbmF0ZXMuc3BsaXQoXCI7XCIpO1xuICAgICAgICAgICAgICAgIGNvb3Jkc19hcnJheSA9IGNvb3Jkc19hcnJheS5tYXAoKGNvb3JkKSA9PiBjb29yZC50cmltKCkpO1xuXG4gICAgICAgICAgICAgICAgLy8gSWRlbnRpZmllcyB3aGljaCBvZiB0aGUgd2FzIGhpdFxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRfaGl0ID0gY29vcmRzX2FycmF5LmluZGV4T2YoYCgke3Jvd30sJHtjb2x1bW59KWApO1xuXG4gICAgICAgICAgICAgICAgLy8gRmluYWxseSwgbWFya3MgdGhlIHNoaXAgb2JqIGFzIGhpdFxuICAgICAgICAgICAgICAgIHNoaXBfaGl0LmhpdChwYXJ0X2hpdCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZnRlciB0aGUgYXR0YWNrLCBjaGVja3MgaWYgdGhlIGJvYXJkIGxvc3QgYWxsIGl0cyBzaGlwc1xuICAgICAgICAgICAgICAgIHdvbiA9IHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzX3N1bmsoKSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geyB3b24sIGhpdDogXCJ5ZXNcIiB9O1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgYXR0YWNrIGhpdCB3YXRlclxuICAgICAgICAgICAgY2FzZSBcIndcIjpcbiAgICAgICAgICAgICAgICAvLyBNYXJrcyB0aGUgdGlsZSBhcyBoaXRcbiAgICAgICAgICAgICAgICB0aWxlc1tyb3ddW2NvbHVtbl0gPSBcIm1cIjtcblxuICAgICAgICAgICAgICAgIC8vIENoZWNrcyBpZiB0aGUgZ2FtZSBpcyBvdmVyXG4gICAgICAgICAgICAgICAgLy8gS2luZGEgdXNlbGVzcywgYnV0IHlvdSBuZXZlciBrbm93XG4gICAgICAgICAgICAgICAgd29uID0gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNfc3VuaygpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7IHdvbiwgaGl0OiBcIm5vXCIgfTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJub1wiO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpbGVzLFxuICAgICAgICBwbGFjZV9zaGlwLFxuICAgICAgICByZWNlaXZlX2F0dGFjayxcbiAgICAgICAgc2hpcHMsXG4gICAgfTtcbn07XG5cbmV4cG9ydCB7IEdhbWVib2FyZCB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbi8vIFRoZSBkZXRhaWxzIGFib3V0IHRoZSBwbGF5ZXJzXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgIC8vIE9ubHkgMiB0eXBlcyBhbGxvd2VkXG4gICAgaWYgKCEodHlwZSA9PT0gXCJodW1hblwiIHx8IHR5cGUgPT09IFwiQUlcIikpIHJldHVybjtcblxuICAgIC8vIENyZWF0ZXMgaXRzIGtleWJvYXJkXG4gICAgY29uc3QgZ2FtZWJvYXJkID0gR2FtZWJvYXJkKCk7XG5cbiAgICByZXR1cm4geyBnYW1lYm9hcmQsIHR5cGUgfTtcbn07XG5cbmV4cG9ydCB7IFBsYXllciB9O1xuIiwiLy8gVGhlIHNoaXAgb2JqXG5jb25zdCBTaGlwID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBBbGwgdGhlIHNoaXBzIGhhdmUgaW4gaXRzIHByb3RvdHlwZVxuICAgIGNvbnN0IHByb3RvdHlwZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEEgbWV0aG9kIHRvIGJlIGhpdFxuICAgICAgICBjb25zdCBoaXQgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucGFydHNbcG9zaXRpb25dID0gMTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBIG1ldGhvZCB0byBjaGVjayBpZiBpdCBpcyBzdW5rXG4gICAgICAgIGNvbnN0IGlzX3N1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJ0cy5ldmVyeSgocGFydCkgPT4gcGFydCA9PT0gMSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhpdCxcbiAgICAgICAgICAgIGlzX3N1bmssXG4gICAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIC8vLy9cblxuICAgIC8vIENyZWF0ZXMgYSBuZXcgc2hpcFxuICAgIGNvbnN0IG1ha2Vfc2hpcCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIobGVuZ3RoKSkgcmV0dXJuO1xuXG4gICAgICAgIC8vIEFsbCB0aGUgc2hpcCBwYXJ0c1xuICAgICAgICAvLyBUaGUgcGFydCBpcyBpbmRpY2F0ZWQgYXMgMCBpZiB0aGUgc2hpcCBpcyBhZmxvYXRcbiAgICAgICAgLy8gYW5kIDEgaWYgb3RoZXJ3aXNlXG4gICAgICAgIGNvbnN0IHBhcnRzID0gW107XG4gICAgICAgIHBhcnRzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgcGFydHMuZmlsbCgwKTtcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvdHlwZSksIHtcbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIHBhcnRzLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZV9zaGlwLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9jc3MvYmF0dGxlc2hpcC5jc3NcIjtcbmltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbGVtZW50c1wiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxuY29uc3QgaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBJbml0aWF0ZXMgYSBnYW1lXG4gICAgR2FtZS5wbGF5X2dhbWUoKTtcblxuICAgIC8vIEFkZHMgZnVuY3Rpb25hbGxpdHkgZm9yIHRoZSBcInJcIiBpbiB0aGUga2V5Ym9hcmRcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiclwiKSBHYW1lLnJlc2V0X2dhbWUoKTtcbiAgICB9KTtcblxuICAgIC8vIEluaXRpYWxpemVzIHRoZSByZXN0YXJ0IGJ0biBmdW5jdGlvbmFsbGl0eVxuICAgIERPTV9lbC5yZXN0YXJ0X2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgR2FtZS5yZXNldF9nYW1lKTtcbn07XG5cbmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==