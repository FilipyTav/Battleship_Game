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
___CSS_LOADER_EXPORT___.push([module.id, "* {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    box-sizing: border-box;\n}\n\nbody {\n    background: #111;\n}\n\n.main_container {\n    width: 100vw;\n    height: 100vh;\n\n    position: relative;\n}\n\n.player1_board,\n.computer_board {\n    width: 500px;\n    height: 500px;\n    outline: 5px solid #666;\n    background: linear-gradient(rgb(95, 95, 245), rgb(144, 247, 247));\n\n    position: absolute;\n\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n}\n\n.player1_board {\n    top: 50%;\n    left: 50px;\n\n    transform: translateY(-50%);\n}\n\n.computer_board {\n    bottom: 50%;\n    right: 50px;\n\n    transform: translateY(50%);\n}\n\n.board_tile {\n    border: 0.1px solid purple;\n    cursor: crosshair;\n}\n\n.ship_part {\n    background: violet;\n}\n\n.board_tile.hit,\n.board_tile.no,\n.board_tile[player=\"human\"] {\n    cursor: not-allowed;\n}\n\n.board_tile.no {\n    user-select: none;\n}\n\n.board_tile.hit {\n    background: blue;\n}\n\n.board_tile.ship_part.hit {\n    background: rgb(243, 64, 64);\n}\n\n.ships_container {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 5px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.ships_container .ship_part {\n    width: 50px;\n    height: 50px;\n    border: 0.1px solid purple;\n}\n\n.ships_container .ship_container {\n    cursor: move;\n    margin: 0 auto;\n}\n\n.ship_container {\n    display: flex;\n    justify-content: center;\n\n    position: relative;\n}\n\nbutton.change_orientation {\n    border: none;\n    background: cyan;\n    box-shadow: inset 2px 0px 3px blue;\n\n    cursor: pointer;\n\n    border-radius: 50%;\n    height: 10px;\n    width: 10px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\nbutton.change_orientation:active {\n    background: blue;\n}\n\n.vertical {\n    flex-flow: column nowrap;\n}\n\n.being_dragged .ship_part {\n    background: rgb(238, 130, 238, 0.7);\n}\n\n.placing_preview {\n    background: lime;\n}\n\n[player=\"human\"].board_tile {\n    user-select: none;\n}\n\n.start_game_btn {\n    padding: 5px 15px;\n    border-radius: 10px;\n    font-weight: bold;\n    font-size: 1.3rem;\n    background: cadetblue;\n    border: none;\n    cursor: crosshair;\n\n    box-shadow: 2px 2px 5px blueviolet;\n}\n\n.start_game_btn:active {\n    background: rgb(35, 98, 100);\n}\n", "",{"version":3,"sources":["webpack://./src/css/battleship.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,eAAe;IACf,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,kBAAkB;AACtB;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,iEAAiE;;IAEjE,kBAAkB;;IAElB,aAAa;IACb,uCAAuC;AAC3C;;AAEA;IACI,QAAQ;IACR,UAAU;;IAEV,2BAA2B;AAC/B;;AAEA;IACI,WAAW;IACX,WAAW;;IAEX,0BAA0B;AAC9B;;AAEA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;IAGI,mBAAmB;AACvB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,wBAAwB;IACxB,QAAQ;;IAER,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,uBAAuB;;IAEvB,kBAAkB;AACtB;;AAEA;IACI,YAAY;IACZ,gBAAgB;IAChB,kCAAkC;;IAElC,eAAe;;IAEf,kBAAkB;IAClB,YAAY;IACZ,WAAW;;IAEX,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,iBAAiB;IACjB,iBAAiB;IACjB,qBAAqB;IACrB,YAAY;IACZ,iBAAiB;;IAEjB,kCAAkC;AACtC;;AAEA;IACI,4BAA4B;AAChC","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    box-sizing: border-box;\n}\n\nbody {\n    background: #111;\n}\n\n.main_container {\n    width: 100vw;\n    height: 100vh;\n\n    position: relative;\n}\n\n.player1_board,\n.computer_board {\n    width: 500px;\n    height: 500px;\n    outline: 5px solid #666;\n    background: linear-gradient(rgb(95, 95, 245), rgb(144, 247, 247));\n\n    position: absolute;\n\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n}\n\n.player1_board {\n    top: 50%;\n    left: 50px;\n\n    transform: translateY(-50%);\n}\n\n.computer_board {\n    bottom: 50%;\n    right: 50px;\n\n    transform: translateY(50%);\n}\n\n.board_tile {\n    border: 0.1px solid purple;\n    cursor: crosshair;\n}\n\n.ship_part {\n    background: violet;\n}\n\n.board_tile.hit,\n.board_tile.no,\n.board_tile[player=\"human\"] {\n    cursor: not-allowed;\n}\n\n.board_tile.no {\n    user-select: none;\n}\n\n.board_tile.hit {\n    background: blue;\n}\n\n.board_tile.ship_part.hit {\n    background: rgb(243, 64, 64);\n}\n\n.ships_container {\n    display: flex;\n    flex-flow: column nowrap;\n    gap: 5px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.ships_container .ship_part {\n    width: 50px;\n    height: 50px;\n    border: 0.1px solid purple;\n}\n\n.ships_container .ship_container {\n    cursor: move;\n    margin: 0 auto;\n}\n\n.ship_container {\n    display: flex;\n    justify-content: center;\n\n    position: relative;\n}\n\nbutton.change_orientation {\n    border: none;\n    background: cyan;\n    box-shadow: inset 2px 0px 3px blue;\n\n    cursor: pointer;\n\n    border-radius: 50%;\n    height: 10px;\n    width: 10px;\n\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\nbutton.change_orientation:active {\n    background: blue;\n}\n\n.vertical {\n    flex-flow: column nowrap;\n}\n\n.being_dragged .ship_part {\n    background: rgb(238, 130, 238, 0.7);\n}\n\n.placing_preview {\n    background: lime;\n}\n\n[player=\"human\"].board_tile {\n    user-select: none;\n}\n\n.start_game_btn {\n    padding: 5px 15px;\n    border-radius: 10px;\n    font-weight: bold;\n    font-size: 1.3rem;\n    background: cadetblue;\n    border: none;\n    cursor: crosshair;\n\n    box-shadow: 2px 2px 5px blueviolet;\n}\n\n.start_game_btn:active {\n    background: rgb(35, 98, 100);\n}\n"],"sourceRoot":""}]);
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
    const main_container = document.querySelector(".main_container");

    const player1_board = document.querySelector(".player1_board");
    const computer_board = document.querySelector(".computer_board");

    const ships_container = document.querySelector(".ships_container");

    const create_board_tile = () => {
        const board_tile = document.createElement("div");
        board_tile.classList.add("board_tile");

        return board_tile;
    };

    const populate_board = (board, player) => {
        while (board.lastChild) {
            board.lastChild.remove();
        }

        for (let i = 0; i < player.gameboard.tiles.flat().length; i++) {
            const board_tile = create_board_tile();
            board_tile.setAttribute(
                "data-id",
                i.toLocaleString("en-US", {
                    minimumIntegerDigits: 2,
                    useGrouping: false,
                })
            );

            board_tile.setAttribute("player", player.type);
            board_tile.classList.add("no");
            board.append(board_tile);
        }
    };

    const get_board_tiles = (player) => {
        const board_tiles = document.querySelectorAll(
            `.board_tile[player=${player.type}]`
        );

        return Array.from(board_tiles);
    };

    const get_next_tile = (axis, player, tile) => {
        if (!(axis === "y" || axis === "x")) return;

        switch (axis) {
            case "x":
                return tile.nextElementSibling;

            case "y":
                return document.querySelector(
                    `[data-id="${
                        Number(tile.getAttribute("data-id")) + 10
                    }"][player="${player.type}"]`
                );

            default:
                return;
        }
    };

    const get_specific_tile = (player, [row, column]) => {
        return document.querySelector(
            `.board_tile[player="${player.type}"][data-id="${row}${column}"]`
        );
    };

    const create_ship_DOM = (parts) => {
        const ship_container = document.createElement("div");
        ship_container.setAttribute("size", parts);
        ship_container.classList.add("ship_container");
        ship_container.setAttribute("draggable", true);

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

    const is_valid = (ship_size, ship_orientation, tile, player) => {
        const row = Number(tile.getAttribute("data-id")[0]);
        const column = Number(tile.getAttribute("data-id")[1]);

        let next = null;
        switch (ship_orientation) {
            case "x":
                if (column + ship_size > 10) return false;

                next = tile;
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
                if (row + ship_size > 10) return false;

                next = tile;
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

    const place_ship_DOM = (player, length, [row, column], axis) => {
        const base_tile = get_board_tiles(player).find(
            (tile) => tile.getAttribute("data-id") === `${row}${column}`
        );

        if (is_valid(length, axis, base_tile, player)) {
            const ship_tiles = [base_tile];

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

            const placed_ship = player.gameboard.place_ship(
                length,
                [row, column],
                axis
            );

            if (player.type === "human")
                ship_tiles.forEach((tile) => tile.classList.add("ship_part"));
        } else {
            return false;
        }
    };

    const all_ship_containers = () => {
        return [...document.querySelectorAll(".ship_container")];
    };

    const reset_ships_container = () => {
        while (ships_container.lastChild) ships_container.lastChild.remove();

        create_ship_DOM(2);
        create_ship_DOM(3);
        create_ship_DOM(3);
        create_ship_DOM(4);
        create_ship_DOM(5);
    };

    const attack_DOM = (player, [row, column] = [0, 0]) => {
        switch (player.type) {
            case "AI":
                player.attack();

                const other_player = _game__WEBPACK_IMPORTED_MODULE_0__.Game.player1;

                const r = _game__WEBPACK_IMPORTED_MODULE_0__.Game.cds[0];
                const c = _game__WEBPACK_IMPORTED_MODULE_0__.Game.cds[1];

                const tile_hit = DOM_el.get_specific_tile(other_player, [r, c]);

                tile_hit.classList.add("hit");
                break;

            case "human":
                player.attack([row, column]);
                break;

            default:
                return;
        }
    };

    const select_tile = (target) => {
        // TODO: Improve the current "turn switch system"
        target.classList.add("hit");
        let coords = target.getAttribute("data-id");
        attack_DOM(_game__WEBPACK_IMPORTED_MODULE_0__.Game.player1, [Number(coords[0]), Number(coords[1])]);

        setTimeout(() => {
            if (_game__WEBPACK_IMPORTED_MODULE_0__.Game.end[0] === false) play_turn(_game__WEBPACK_IMPORTED_MODULE_0__.Game.computer);
        }, 300);
    };

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

    const activate_start_button = () => {
        const btn = document.querySelector(".start_game_btn");
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

    document.addEventListener("dragover", (event) => {
        // prevent default to allow drop
        event.preventDefault();
    });

    const activate_drag_over_tiles = (player) => {
        get_board_tiles(player).forEach((tile) => {
            tile.addEventListener("drop", (e) => {
                e.preventDefault();

                const selected = document.querySelector(".being_dragged");

                const ship_size = Number(selected.getAttribute("size"));
                const current_row = Number(tile.getAttribute("data-id")[0]);
                const current_column = Number(tile.getAttribute("data-id")[1]);
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                if (is_valid(ship_size, orientation, tile, player)) {
                    place_ship_DOM(
                        player,
                        ship_size,
                        [current_row, current_column],
                        orientation
                    );

                    let next = tile;
                    for (let i = 0; i < ship_size; i++) {
                        next.classList.remove("placing_preview");
                        next = get_next_tile(orientation, player, next);
                    }
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

            tile.addEventListener("dragenter", (e) => {
                const selected = document.querySelector(".being_dragged");

                const ship_size = Number(selected.getAttribute("size"));
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

                if (is_valid(ship_size, orientation, tile, player)) {
                    setTimeout(() => {
                        let next = tile;
                        for (let i = 0; i < ship_size; i++) {
                            next.classList.add("placing_preview");
                            next = get_next_tile(orientation, player, next);
                        }
                    }, 0.1);
                }
            });

            tile.addEventListener("dragleave", (e) => {
                const selected = document.querySelector(".being_dragged");

                const ship_size = Number(selected.getAttribute("size"));
                let orientation = null;
                selected.classList.contains("vertical")
                    ? (orientation = "y")
                    : (orientation = "x");

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



const Game = (function () {
    const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("human");
    const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__.Player)("AI");

    const play_game = () => {
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.populate_board(_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.player1_board, player1);
        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.populate_board(_DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.computer_board, computer);

        add_attack_methods(player1);
        add_attack_methods(computer);

        choose_tiles_automatically(computer);

        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.reset_ships_container();

        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.all_ship_containers().forEach((container) =>
            container.addEventListener("dragstart", () => {
                container.classList.toggle("being_dragged");
            })
        );

        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.all_ship_containers().forEach((container) =>
            container.addEventListener("dragend", () => {
                container.classList.toggle("being_dragged");
            })
        );

        _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.activate_drag_over_tiles(player1);
    };

    const random_int = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

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

    const end = [false];
    const reset_game = () => {
        end[0] = true;

        player1.gameboard.ships.splice(0, player1.gameboard.ships.length);
        computer.gameboard.ships.splice(0, computer.gameboard.ships.length);

        for (let i = 0; i < computer.gameboard.tiles.length; i++) {
            for (let j = 0; j < computer.gameboard.tiles[i].length; j++) {
                computer.gameboard.tiles[i][j] = "w";
                player1.gameboard.tiles[i][j] = "w";
            }
        }

        play_game();

        setTimeout(() => {
            end[0] = false;
        }, 400);
    };

    const cds = [];

    const add_attack_methods = (player) => {
        switch (player.type) {
            case "AI":
                player.attack = function (...coords) {
                    const row = random_int(0, 9);
                    const column = random_int(0, 9);

                    cds[0] = row;
                    cds[1] = column;

                    const result = player1.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    switch (true) {
                        case result === "no":
                            player.attack();
                            break;

                        case result.won === true:
                            setTimeout(() => {
                                alert("The computer wins!!!");
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

            case "human":
                player.attack = ([row, column]) => {
                    const result = computer.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    const selected_tile = _DOM_elements__WEBPACK_IMPORTED_MODULE_0__.DOM_el.get_specific_tile(computer, [
                        row,
                        column,
                    ]);

                    switch (true) {
                        case result.won === false && result.hit === "yes":
                            selected_tile.classList.add("ship_part", "hit");
                            break;

                        case result.won === true:
                            selected_tile.classList.add("ship_part", "hit");
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

    const choose_tiles_automatically = (player) => {
        for (let i = 0; i < 5; i++) {
            let ship_size = null;

            let row = null;
            let column = null;

            const axis = random_axis();

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
            while (valid === false) {
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
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM_elements */ "./src/js/DOM_elements.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/js/ship.js");



const Gameboard = function () {
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

    const ships = [];

    const place_ship = (length, [row, column], axis) => {
        if (!(axis === "x" || axis === "y")) return;
        if (length < 2 || length > 5) return;

        const new_ship = _ship__WEBPACK_IMPORTED_MODULE_1__.Ship.make_ship(length);
        new_ship.orientation = axis;

        new_ship.coordinates = "";

        switch (axis) {
            case "x":
                if (column + length > 10)
                    return "Not possible to place this ship here";

                for (let i = 0; i < length; i++) {
                    if (tiles[row][column + i] !== "w") return;
                }

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

        ships.push(new_ship);

        return new_ship;
    };

    const receive_attack = ([row, column]) => {
        let won = null;
        switch (tiles[row][column]) {
            case 0:
                tiles[row][column] = 1;
                let ship_hit = ships.find(({ coordinates }) =>
                    coordinates.includes(`(${row},${column})`)
                );

                let coords_array = ship_hit.coordinates.split(";");
                coords_array = coords_array.map((coord) => coord.trim());

                const part_hit = coords_array.indexOf(`(${row},${column})`);
                ship_hit.hit(part_hit);

                won = ships.every((ship) => ship.is_sunk());

                return { won, hit: "yes" };

            case "w":
                tiles[row][column] = "m";

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


const Player = function (type) {
    if (!(type === "human" || type === "AI")) return;

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
const Ship = (function () {
    const prototype = (function () {
        const hit = function (position) {
            this.parts[position] = 1;
        };

        const is_sunk = function () {
            return this.parts.every((part) => part === 1);
        };

        return {
            hit,
            is_sunk,
        };
    })();

    ////

    const make_ship = function (length) {
        if (!Number(length)) return;

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
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/js/game.js");



const init = function () {
    _game__WEBPACK_IMPORTED_MODULE_1__.Game.play_game();

    document.addEventListener("keydown", (e) => {
        if (e.key === "r") _game__WEBPACK_IMPORTED_MODULE_1__.Game.reset_game();
    });
};

init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQStCO0FBQ0Q7O0FBRTlCO0FBQ0EsSUFBSSxpREFBYzs7QUFFbEI7QUFDQSwyQkFBMkIsa0RBQWU7QUFDMUMsS0FBSztBQUNMOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2Nzcy9iYXR0bGVzaGlwLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9jc3MvYmF0dGxlc2hpcC5jc3M/YWIxYiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9qcy9ET01fZWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2pzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2pzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvanMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9qcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6ICMxMTE7XFxufVxcblxcbi5tYWluX2NvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ucGxheWVyMV9ib2FyZCxcXG4uY29tcHV0ZXJfYm9hcmQge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIG91dGxpbmU6IDVweCBzb2xpZCAjNjY2O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDk1LCA5NSwgMjQ1KSwgcmdiKDE0NCwgMjQ3LCAyNDcpKTtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxufVxcblxcbi5wbGF5ZXIxX2JvYXJkIHtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwcHg7XFxuXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG59XFxuXFxuLmNvbXB1dGVyX2JvYXJkIHtcXG4gICAgYm90dG9tOiA1MCU7XFxuICAgIHJpZ2h0OiA1MHB4O1xcblxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTAlKTtcXG59XFxuXFxuLmJvYXJkX3RpbGUge1xcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIHB1cnBsZTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxufVxcblxcbi5zaGlwX3BhcnQge1xcbiAgICBiYWNrZ3JvdW5kOiB2aW9sZXQ7XFxufVxcblxcbi5ib2FyZF90aWxlLmhpdCxcXG4uYm9hcmRfdGlsZS5ubyxcXG4uYm9hcmRfdGlsZVtwbGF5ZXI9XFxcImh1bWFuXFxcIl0ge1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uYm9hcmRfdGlsZS5ubyB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYm9hcmRfdGlsZS5oaXQge1xcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4uYm9hcmRfdGlsZS5zaGlwX3BhcnQuaGl0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI0MywgNjQsIDY0KTtcXG59XFxuXFxuLnNoaXBzX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG4gICAgZ2FwOiA1cHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5zaGlwc19jb250YWluZXIgLnNoaXBfcGFydCB7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlcjogMC4xcHggc29saWQgcHVycGxlO1xcbn1cXG5cXG4uc2hpcHNfY29udGFpbmVyIC5zaGlwX2NvbnRhaW5lciB7XFxuICAgIGN1cnNvcjogbW92ZTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblxcbi5zaGlwX2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbmJ1dHRvbi5jaGFuZ2Vfb3JpZW50YXRpb24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IGN5YW47XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDJweCAwcHggM3B4IGJsdWU7XFxuXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG5idXR0b24uY2hhbmdlX29yaWVudGF0aW9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6IGJsdWU7XFxufVxcblxcbi52ZXJ0aWNhbCB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcXG59XFxuXFxuLmJlaW5nX2RyYWdnZWQgLnNoaXBfcGFydCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyMzgsIDEzMCwgMjM4LCAwLjcpO1xcbn1cXG5cXG4ucGxhY2luZ19wcmV2aWV3IHtcXG4gICAgYmFja2dyb3VuZDogbGltZTtcXG59XFxuXFxuW3BsYXllcj1cXFwiaHVtYW5cXFwiXS5ib2FyZF90aWxlIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5zdGFydF9nYW1lX2J0biB7XFxuICAgIHBhZGRpbmc6IDVweCAxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG5cXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA1cHggYmx1ZXZpb2xldDtcXG59XFxuXFxuLnN0YXJ0X2dhbWVfYnRuOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzNSwgOTgsIDEwMCk7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmF0dGxlc2hpcC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTs7SUFFYixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsaUVBQWlFOztJQUVqRSxrQkFBa0I7O0lBRWxCLGFBQWE7SUFDYix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxRQUFRO0lBQ1IsVUFBVTs7SUFFViwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVzs7SUFFWCwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isd0JBQXdCO0lBQ3hCLFFBQVE7O0lBRVIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7O0lBRXZCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0NBQWtDOztJQUVsQyxlQUFlOztJQUVmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVzs7SUFFWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixpQkFBaUI7O0lBRWpCLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xcbn1cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXllcjFfYm9hcmQsXFxuLmNvbXB1dGVyX2JvYXJkIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBvdXRsaW5lOiA1cHggc29saWQgIzY2NjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYig5NSwgOTUsIDI0NSksIHJnYigxNDQsIDI0NywgMjQ3KSk7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xcbn1cXG5cXG4ucGxheWVyMV9ib2FyZCB7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MHB4O1xcblxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblxcbi5jb21wdXRlcl9ib2FyZCB7XFxuICAgIGJvdHRvbTogNTAlO1xcbiAgICByaWdodDogNTBweDtcXG5cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XFxufVxcblxcbi5ib2FyZF90aWxlIHtcXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCBwdXJwbGU7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uc2hpcF9wYXJ0IHtcXG4gICAgYmFja2dyb3VuZDogdmlvbGV0O1xcbn1cXG5cXG4uYm9hcmRfdGlsZS5oaXQsXFxuLmJvYXJkX3RpbGUubm8sXFxuLmJvYXJkX3RpbGVbcGxheWVyPVxcXCJodW1hblxcXCJdIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmJvYXJkX3RpbGUubm8ge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmJvYXJkX3RpbGUuaGl0IHtcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuLmJvYXJkX3RpbGUuc2hpcF9wYXJ0LmhpdCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNDMsIDY0LCA2NCk7XFxufVxcblxcbi5zaGlwc19jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uc2hpcHNfY29udGFpbmVyIC5zaGlwX3BhcnQge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIHB1cnBsZTtcXG59XFxuXFxuLnNoaXBzX2NvbnRhaW5lciAuc2hpcF9jb250YWluZXIge1xcbiAgICBjdXJzb3I6IG1vdmU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uc2hpcF9jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5idXR0b24uY2hhbmdlX29yaWVudGF0aW9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBjeWFuO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMHB4IDNweCBibHVlO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTBweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuYnV0dG9uLmNoYW5nZV9vcmllbnRhdGlvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4udmVydGljYWwge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxufVxcblxcbi5iZWluZ19kcmFnZ2VkIC5zaGlwX3BhcnQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM4LCAxMzAsIDIzOCwgMC43KTtcXG59XFxuXFxuLnBsYWNpbmdfcHJldmlldyB7XFxuICAgIGJhY2tncm91bmQ6IGxpbWU7XFxufVxcblxcbltwbGF5ZXI9XFxcImh1bWFuXFxcIl0uYm9hcmRfdGlsZSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uc3RhcnRfZ2FtZV9idG4ge1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsdWV2aW9sZXQ7XFxufVxcblxcbi5zdGFydF9nYW1lX2J0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzUsIDk4LCAxMDApO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2JhdHRsZXNoaXAuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXR0bGVzaGlwLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBET01fZWwgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IG1haW5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluX2NvbnRhaW5lclwiKTtcblxuICAgIGNvbnN0IHBsYXllcjFfYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcjFfYm9hcmRcIik7XG4gICAgY29uc3QgY29tcHV0ZXJfYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyX2JvYXJkXCIpO1xuXG4gICAgY29uc3Qgc2hpcHNfY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwc19jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBjcmVhdGVfYm9hcmRfdGlsZSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYm9hcmRfdGlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJvYXJkX3RpbGUuY2xhc3NMaXN0LmFkZChcImJvYXJkX3RpbGVcIik7XG5cbiAgICAgICAgcmV0dXJuIGJvYXJkX3RpbGU7XG4gICAgfTtcblxuICAgIGNvbnN0IHBvcHVsYXRlX2JvYXJkID0gKGJvYXJkLCBwbGF5ZXIpID0+IHtcbiAgICAgICAgd2hpbGUgKGJvYXJkLmxhc3RDaGlsZCkge1xuICAgICAgICAgICAgYm9hcmQubGFzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIuZ2FtZWJvYXJkLnRpbGVzLmZsYXQoKS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYm9hcmRfdGlsZSA9IGNyZWF0ZV9ib2FyZF90aWxlKCk7XG4gICAgICAgICAgICBib2FyZF90aWxlLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICBcImRhdGEtaWRcIixcbiAgICAgICAgICAgICAgICBpLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIiwge1xuICAgICAgICAgICAgICAgICAgICBtaW5pbXVtSW50ZWdlckRpZ2l0czogMixcbiAgICAgICAgICAgICAgICAgICAgdXNlR3JvdXBpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBib2FyZF90aWxlLnNldEF0dHJpYnV0ZShcInBsYXllclwiLCBwbGF5ZXIudHlwZSk7XG4gICAgICAgICAgICBib2FyZF90aWxlLmNsYXNzTGlzdC5hZGQoXCJub1wiKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChib2FyZF90aWxlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRfYm9hcmRfdGlsZXMgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkX3RpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgIGAuYm9hcmRfdGlsZVtwbGF5ZXI9JHtwbGF5ZXIudHlwZX1dYFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGJvYXJkX3RpbGVzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0X25leHRfdGlsZSA9IChheGlzLCBwbGF5ZXIsIHRpbGUpID0+IHtcbiAgICAgICAgaWYgKCEoYXhpcyA9PT0gXCJ5XCIgfHwgYXhpcyA9PT0gXCJ4XCIpKSByZXR1cm47XG5cbiAgICAgICAgc3dpdGNoIChheGlzKSB7XG4gICAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aWxlLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcih0aWxlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpICsgMTBcbiAgICAgICAgICAgICAgICAgICAgfVwiXVtwbGF5ZXI9XCIke3BsYXllci50eXBlfVwiXWBcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRfc3BlY2lmaWNfdGlsZSA9IChwbGF5ZXIsIFtyb3csIGNvbHVtbl0pID0+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmJvYXJkX3RpbGVbcGxheWVyPVwiJHtwbGF5ZXIudHlwZX1cIl1bZGF0YS1pZD1cIiR7cm93fSR7Y29sdW1ufVwiXWBcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlX3NoaXBfRE9NID0gKHBhcnRzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2hpcF9jb250YWluZXIuc2V0QXR0cmlidXRlKFwic2l6ZVwiLCBwYXJ0cyk7XG4gICAgICAgIHNoaXBfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaGlwX2NvbnRhaW5lclwiKTtcbiAgICAgICAgc2hpcF9jb250YWluZXIuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGNoYW5nZV9vcmllbnRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNoYW5nZV9vcmllbnRhdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlX29yaWVudGF0aW9uXCIpO1xuICAgICAgICBjaGFuZ2Vfb3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnNoaXBfY29udGFpbmVyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRpdl9wYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGluZGl2X3BhcnQuY2xhc3NMaXN0LmFkZChcInNoaXBfcGFydFwiKTtcblxuICAgICAgICAgICAgc2hpcF9jb250YWluZXIuYXBwZW5kKGluZGl2X3BhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hpcF9jb250YWluZXIuYXBwZW5kKGNoYW5nZV9vcmllbnRhdGlvbik7XG4gICAgICAgIHNoaXBzX2NvbnRhaW5lci5hcHBlbmQoc2hpcF9jb250YWluZXIpO1xuICAgIH07XG5cbiAgICBjb25zdCBpc192YWxpZCA9IChzaGlwX3NpemUsIHNoaXBfb3JpZW50YXRpb24sIHRpbGUsIHBsYXllcikgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBOdW1iZXIodGlsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpWzBdKTtcbiAgICAgICAgY29uc3QgY29sdW1uID0gTnVtYmVyKHRpbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKVsxXSk7XG5cbiAgICAgICAgbGV0IG5leHQgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHNoaXBfb3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbiArIHNoaXBfc2l6ZSA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBuZXh0ID0gdGlsZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmNvbnRhaW5zKFwic2hpcF9wYXJ0XCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIuZ2FtZWJvYXJkLnRpbGVzW3Jvd11bY29sdW1uICsgaV0gPT09IDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gZ2V0X25leHRfdGlsZShzaGlwX29yaWVudGF0aW9uLCBwbGF5ZXIsIG5leHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgIGlmIChyb3cgKyBzaGlwX3NpemUgPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgbmV4dCA9IHRpbGU7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwX3NpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBfcGFydFwiKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmdhbWVib2FyZC50aWxlc1tyb3cgKyBpXVtjb2x1bW5dID09PSAwXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGdldF9uZXh0X3RpbGUoc2hpcF9vcmllbnRhdGlvbiwgcGxheWVyLCBuZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2Vfc2hpcF9ET00gPSAocGxheWVyLCBsZW5ndGgsIFtyb3csIGNvbHVtbl0sIGF4aXMpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZV90aWxlID0gZ2V0X2JvYXJkX3RpbGVzKHBsYXllcikuZmluZChcbiAgICAgICAgICAgICh0aWxlKSA9PiB0aWxlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikgPT09IGAke3Jvd30ke2NvbHVtbn1gXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGlzX3ZhbGlkKGxlbmd0aCwgYXhpcywgYmFzZV90aWxlLCBwbGF5ZXIpKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwX3RpbGVzID0gW2Jhc2VfdGlsZV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwX3RpbGVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0X25leHRfdGlsZShheGlzLCBwbGF5ZXIsIHNoaXBfdGlsZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBfdGlsZXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRfbmV4dF90aWxlKGF4aXMsIHBsYXllciwgc2hpcF90aWxlc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgcGxhY2VkX3NoaXAgPSBwbGF5ZXIuZ2FtZWJvYXJkLnBsYWNlX3NoaXAoXG4gICAgICAgICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgICAgICAgIFtyb3csIGNvbHVtbl0sXG4gICAgICAgICAgICAgICAgYXhpc1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKHBsYXllci50eXBlID09PSBcImh1bWFuXCIpXG4gICAgICAgICAgICAgICAgc2hpcF90aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwX3BhcnRcIikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFsbF9zaGlwX2NvbnRhaW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwX2NvbnRhaW5lclwiKV07XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0X3NoaXBzX2NvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgd2hpbGUgKHNoaXBzX2NvbnRhaW5lci5sYXN0Q2hpbGQpIHNoaXBzX2NvbnRhaW5lci5sYXN0Q2hpbGQucmVtb3ZlKCk7XG5cbiAgICAgICAgY3JlYXRlX3NoaXBfRE9NKDIpO1xuICAgICAgICBjcmVhdGVfc2hpcF9ET00oMyk7XG4gICAgICAgIGNyZWF0ZV9zaGlwX0RPTSgzKTtcbiAgICAgICAgY3JlYXRlX3NoaXBfRE9NKDQpO1xuICAgICAgICBjcmVhdGVfc2hpcF9ET00oNSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGF0dGFja19ET00gPSAocGxheWVyLCBbcm93LCBjb2x1bW5dID0gWzAsIDBdKSA9PiB7XG4gICAgICAgIHN3aXRjaCAocGxheWVyLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBSVwiOlxuICAgICAgICAgICAgICAgIHBsYXllci5hdHRhY2soKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG90aGVyX3BsYXllciA9IEdhbWUucGxheWVyMTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHIgPSBHYW1lLmNkc1swXTtcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gR2FtZS5jZHNbMV07XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlX2hpdCA9IERPTV9lbC5nZXRfc3BlY2lmaWNfdGlsZShvdGhlcl9wbGF5ZXIsIFtyLCBjXSk7XG5cbiAgICAgICAgICAgICAgICB0aWxlX2hpdC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiaHVtYW5cIjpcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYXR0YWNrKFtyb3csIGNvbHVtbl0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBzZWxlY3RfdGlsZSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgLy8gVE9ETzogSW1wcm92ZSB0aGUgY3VycmVudCBcInR1cm4gc3dpdGNoIHN5c3RlbVwiXG4gICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKFwiaGl0XCIpO1xuICAgICAgICBsZXQgY29vcmRzID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIik7XG4gICAgICAgIGF0dGFja19ET00oR2FtZS5wbGF5ZXIxLCBbTnVtYmVyKGNvb3Jkc1swXSksIE51bWJlcihjb29yZHNbMV0pXSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAoR2FtZS5lbmRbMF0gPT09IGZhbHNlKSBwbGF5X3R1cm4oR2FtZS5jb21wdXRlcik7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfTtcblxuICAgIGNvbnN0IHBsYXlfdHVybiA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgc3dpdGNoIChwbGF5ZXIudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcIkFJXCI6XG4gICAgICAgICAgICAgICAgYXR0YWNrX0RPTShwbGF5ZXIsIFswLCAwXSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJodW1hblwiOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhY3RpdmF0ZV9zdGFydF9idXR0b24gPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnRfZ2FtZV9idG5cIik7XG4gICAgICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYnRuLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgMzAwKTtcblxuICAgICAgICAgICAgZ2V0X2JvYXJkX3RpbGVzKEdhbWUuY29tcHV0ZXIpLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aWxlLmNsYXNzTGlzdC5yZW1vdmUoXCJub1wiKTtcbiAgICAgICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdF90aWxlKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIHByZXZlbnQgZGVmYXVsdCB0byBhbGxvdyBkcm9wXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBhY3RpdmF0ZV9kcmFnX292ZXJfdGlsZXMgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIGdldF9ib2FyZF90aWxlcyhwbGF5ZXIpLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgIHRpbGUuYWRkRXZlbnRMaXN0ZW5lcihcImRyb3BcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmVpbmdfZHJhZ2dlZFwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBfc2l6ZSA9IE51bWJlcihzZWxlY3RlZC5nZXRBdHRyaWJ1dGUoXCJzaXplXCIpKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50X3JvdyA9IE51bWJlcih0aWxlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIilbMF0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfY29sdW1uID0gTnVtYmVyKHRpbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKVsxXSk7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgICAgICA/IChvcmllbnRhdGlvbiA9IFwieVwiKVxuICAgICAgICAgICAgICAgICAgICA6IChvcmllbnRhdGlvbiA9IFwieFwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc192YWxpZChzaGlwX3NpemUsIG9yaWVudGF0aW9uLCB0aWxlLCBwbGF5ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlX3NoaXBfRE9NKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcF9zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2N1cnJlbnRfcm93LCBjdXJyZW50X2NvbHVtbl0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmllbnRhdGlvblxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwX3NpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2luZ19wcmV2aWV3XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGdldF9uZXh0X3RpbGUob3JpZW50YXRpb24sIHBsYXllciwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBzX2NvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5X2dhbWVfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheV9nYW1lX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3RhcnRfZ2FtZV9idG5cIik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlfZ2FtZV9idXR0b24udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcblxuICAgICAgICAgICAgICAgICAgICBzaGlwc19jb250YWluZXIuYXBwZW5kKHBsYXlfZ2FtZV9idXR0b24pO1xuXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlX3N0YXJ0X2J1dHRvbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmVpbmdfZHJhZ2dlZFwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBfc2l6ZSA9IE51bWJlcihzZWxlY3RlZC5nZXRBdHRyaWJ1dGUoXCJzaXplXCIpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpXG4gICAgICAgICAgICAgICAgICAgID8gKG9yaWVudGF0aW9uID0gXCJ5XCIpXG4gICAgICAgICAgICAgICAgICAgIDogKG9yaWVudGF0aW9uID0gXCJ4XCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzX3ZhbGlkKHNoaXBfc2l6ZSwgb3JpZW50YXRpb24sIHRpbGUsIHBsYXllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dCA9IHRpbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5jbGFzc0xpc3QuYWRkKFwicGxhY2luZ19wcmV2aWV3XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBnZXRfbmV4dF90aWxlKG9yaWVudGF0aW9uLCBwbGF5ZXIsIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAwLjEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnbGVhdmVcIiwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmVpbmdfZHJhZ2dlZFwiKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNoaXBfc2l6ZSA9IE51bWJlcihzZWxlY3RlZC5nZXRBdHRyaWJ1dGUoXCJzaXplXCIpKTtcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpXG4gICAgICAgICAgICAgICAgICAgID8gKG9yaWVudGF0aW9uID0gXCJ5XCIpXG4gICAgICAgICAgICAgICAgICAgIDogKG9yaWVudGF0aW9uID0gXCJ4XCIpO1xuXG4gICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aWxlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcF9zaXplOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LnJlbW92ZShcInBsYWNpbmdfcHJldmlld1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBnZXRfbmV4dF90aWxlKG9yaWVudGF0aW9uLCBwbGF5ZXIsIG5leHQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWluX2NvbnRhaW5lcixcbiAgICAgICAgcGxheWVyMV9ib2FyZCxcbiAgICAgICAgY29tcHV0ZXJfYm9hcmQsXG4gICAgICAgIGNyZWF0ZV9ib2FyZF90aWxlLFxuICAgICAgICBwb3B1bGF0ZV9ib2FyZCxcbiAgICAgICAgZ2V0X2JvYXJkX3RpbGVzLFxuICAgICAgICBnZXRfbmV4dF90aWxlLFxuICAgICAgICBnZXRfc3BlY2lmaWNfdGlsZSxcbiAgICAgICAgY3JlYXRlX3NoaXBfRE9NLFxuICAgICAgICBhbGxfc2hpcF9jb250YWluZXJzLFxuICAgICAgICBhY3RpdmF0ZV9kcmFnX292ZXJfdGlsZXMsXG4gICAgICAgIHBsYWNlX3NoaXBfRE9NLFxuICAgICAgICByZXNldF9zaGlwc19jb250YWluZXIsXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IERPTV9lbCB9O1xuIiwiaW1wb3J0IHsgRE9NX2VsIH0gZnJvbSBcIi4vRE9NX2VsZW1lbnRzXCI7XG5pbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuY29uc3QgR2FtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgcGxheWVyMSA9IFBsYXllcihcImh1bWFuXCIpO1xuICAgIGNvbnN0IGNvbXB1dGVyID0gUGxheWVyKFwiQUlcIik7XG5cbiAgICBjb25zdCBwbGF5X2dhbWUgPSAoKSA9PiB7XG4gICAgICAgIERPTV9lbC5wb3B1bGF0ZV9ib2FyZChET01fZWwucGxheWVyMV9ib2FyZCwgcGxheWVyMSk7XG4gICAgICAgIERPTV9lbC5wb3B1bGF0ZV9ib2FyZChET01fZWwuY29tcHV0ZXJfYm9hcmQsIGNvbXB1dGVyKTtcblxuICAgICAgICBhZGRfYXR0YWNrX21ldGhvZHMocGxheWVyMSk7XG4gICAgICAgIGFkZF9hdHRhY2tfbWV0aG9kcyhjb21wdXRlcik7XG5cbiAgICAgICAgY2hvb3NlX3RpbGVzX2F1dG9tYXRpY2FsbHkoY29tcHV0ZXIpO1xuXG4gICAgICAgIERPTV9lbC5yZXNldF9zaGlwc19jb250YWluZXIoKTtcblxuICAgICAgICBET01fZWwuYWxsX3NoaXBfY29udGFpbmVycygpLmZvckVhY2goKGNvbnRhaW5lcikgPT5cbiAgICAgICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJlaW5nX2RyYWdnZWRcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIERPTV9lbC5hbGxfc2hpcF9jb250YWluZXJzKCkuZm9yRWFjaCgoY29udGFpbmVyKSA9PlxuICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJkcmFnZW5kXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJlaW5nX2RyYWdnZWRcIik7XG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuXG4gICAgICAgIERPTV9lbC5hY3RpdmF0ZV9kcmFnX292ZXJfdGlsZXMocGxheWVyMSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbV9pbnQgPSAobWluLCBtYXgpID0+IHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbV9heGlzID0gKCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHJhbmRvbV9pbnQoMCwgMSkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ4XCI7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ5XCI7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGVuZCA9IFtmYWxzZV07XG4gICAgY29uc3QgcmVzZXRfZ2FtZSA9ICgpID0+IHtcbiAgICAgICAgZW5kWzBdID0gdHJ1ZTtcblxuICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC5zaGlwcy5zcGxpY2UoMCwgcGxheWVyMS5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoKTtcbiAgICAgICAgY29tcHV0ZXIuZ2FtZWJvYXJkLnNoaXBzLnNwbGljZSgwLCBjb21wdXRlci5nYW1lYm9hcmQuc2hpcHMubGVuZ3RoKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbXB1dGVyLmdhbWVib2FyZC50aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb21wdXRlci5nYW1lYm9hcmQudGlsZXNbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb21wdXRlci5nYW1lYm9hcmQudGlsZXNbaV1bal0gPSBcIndcIjtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxLmdhbWVib2FyZC50aWxlc1tpXVtqXSA9IFwid1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGxheV9nYW1lKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBlbmRbMF0gPSBmYWxzZTtcbiAgICAgICAgfSwgNDAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2RzID0gW107XG5cbiAgICBjb25zdCBhZGRfYXR0YWNrX21ldGhvZHMgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAocGxheWVyLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBSVwiOlxuICAgICAgICAgICAgICAgIHBsYXllci5hdHRhY2sgPSBmdW5jdGlvbiAoLi4uY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvdyA9IHJhbmRvbV9pbnQoMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHJhbmRvbV9pbnQoMCwgOSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2RzWzBdID0gcm93O1xuICAgICAgICAgICAgICAgICAgICBjZHNbMV0gPSBjb2x1bW47XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcGxheWVyMS5nYW1lYm9hcmQucmVjZWl2ZV9hdHRhY2soW1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uLFxuICAgICAgICAgICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgcmVzdWx0ID09PSBcIm5vXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmF0dGFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHJlc3VsdC53b24gPT09IHRydWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiVGhlIGNvbXB1dGVyIHdpbnMhISFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0X2dhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBtYWtlIHRoZSBBSSBoaXQgYSBhZGphY2VudCB0aWxlIGlmIGl0IGhpdHMgYSBzaGlwXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHJlc3VsdC53b24gPT09IGZhbHNlICYmIHJlc3VsdC5oaXQgPT09IFwieWVzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImh1bWFuXCI6XG4gICAgICAgICAgICAgICAgcGxheWVyLmF0dGFjayA9IChbcm93LCBjb2x1bW5dKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbXB1dGVyLmdhbWVib2FyZC5yZWNlaXZlX2F0dGFjayhbXG4gICAgICAgICAgICAgICAgICAgICAgICByb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4sXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkX3RpbGUgPSBET01fZWwuZ2V0X3NwZWNpZmljX3RpbGUoY29tcHV0ZXIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHJlc3VsdC53b24gPT09IGZhbHNlICYmIHJlc3VsdC5oaXQgPT09IFwieWVzXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcF9wYXJ0XCIsIFwiaGl0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIHJlc3VsdC53b24gPT09IHRydWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRfdGlsZS5jbGFzc0xpc3QuYWRkKFwic2hpcF9wYXJ0XCIsIFwiaGl0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSB3aW4hISFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0X2dhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBcIm5vXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBjaG9vc2VfdGlsZXNfYXV0b21hdGljYWxseSA9IChwbGF5ZXIpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzaGlwX3NpemUgPSBudWxsO1xuXG4gICAgICAgICAgICBsZXQgcm93ID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBudWxsO1xuXG4gICAgICAgICAgICBjb25zdCBheGlzID0gcmFuZG9tX2F4aXMoKTtcblxuICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICBzaGlwX3NpemUgPSAyO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgc2hpcF9zaXplID0gMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIHNoaXBfc2l6ZSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICBzaGlwX3NpemUgPSA0O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgNDpcbiAgICAgICAgICAgICAgICAgICAgc2hpcF9zaXplID0gNTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IHJhbmRvbV9pbnQoMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IHJhbmRvbV9pbnQoMCwgOSAtIChzaGlwX3NpemUgLSAxKSk7XG5cbiAgICAgICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgICAgICByb3cgPSByYW5kb21faW50KDAsIDkgLSAoc2hpcF9zaXplIC0gMSkpO1xuICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSByYW5kb21faW50KDAsIDkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAodmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgYXhpcyA9IHJhbmRvbV9heGlzKCk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChheGlzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cgPSByYW5kb21faW50KDAsIDkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gcmFuZG9tX2ludCgwLCA5IC0gKHNoaXBfc2l6ZSAtIDEpKTtcblxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgcm93ID0gcmFuZG9tX2ludCgwLCA5IC0gKHNoaXBfc2l6ZSAtIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IHJhbmRvbV9pbnQoMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgRE9NX2VsLnBsYWNlX3NoaXBfRE9NKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpcF9zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgW3JvdywgY29sdW1uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF4aXNcbiAgICAgICAgICAgICAgICAgICAgKSAhPT0gZmFsc2VcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwbGF5ZXIxLFxuICAgICAgICBjb21wdXRlcixcbiAgICAgICAgcGxheV9nYW1lLFxuICAgICAgICByYW5kb21faW50LFxuICAgICAgICByYW5kb21fYXhpcyxcbiAgICAgICAgZW5kLFxuICAgICAgICByZXNldF9nYW1lLFxuICAgICAgICBhZGRfYXR0YWNrX21ldGhvZHMsXG4gICAgICAgIGNkcyxcbiAgICAgICAgY2hvb3NlX3RpbGVzX2F1dG9tYXRpY2FsbHksXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7IEdhbWUgfTtcbiIsImltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbGVtZW50c1wiO1xuaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRpbGVzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGFycmF5Lmxlbmd0aCA9IDEwO1xuICAgICAgICAgICAgYXJyYXkuZmlsbChcIndcIik7XG5cbiAgICAgICAgICAgIHJvd3MucHVzaChhcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9KSgpO1xuXG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IHBsYWNlX3NoaXAgPSAobGVuZ3RoLCBbcm93LCBjb2x1bW5dLCBheGlzKSA9PiB7XG4gICAgICAgIGlmICghKGF4aXMgPT09IFwieFwiIHx8IGF4aXMgPT09IFwieVwiKSkgcmV0dXJuO1xuICAgICAgICBpZiAobGVuZ3RoIDwgMiB8fCBsZW5ndGggPiA1KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgbmV3X3NoaXAgPSBTaGlwLm1ha2Vfc2hpcChsZW5ndGgpO1xuICAgICAgICBuZXdfc2hpcC5vcmllbnRhdGlvbiA9IGF4aXM7XG5cbiAgICAgICAgbmV3X3NoaXAuY29vcmRpbmF0ZXMgPSBcIlwiO1xuXG4gICAgICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uICsgbGVuZ3RoID4gMTApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdCBwb3NzaWJsZSB0byBwbGFjZSB0aGlzIHNoaXAgaGVyZVwiO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGlsZXNbcm93XVtjb2x1bW4gKyBpXSAhPT0gXCJ3XCIpIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiArIGkgPCAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAodGlsZXNbcm93XVtjb2x1bW4gKyBpXSA9IG5ld19zaGlwLnBhcnRzW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aWxlc1tyb3ddW2NvbHVtbl07XG5cbiAgICAgICAgICAgICAgICAgICAgIShpID09PSBsZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAobmV3X3NoaXAuY29vcmRpbmF0ZXMgKz0gYCgke1tyb3csIGNvbHVtbiArIGldfSk7IGApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChuZXdfc2hpcC5jb29yZGluYXRlcyArPSBgKCR7W3JvdywgY29sdW1uICsgaV19KWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgIGlmIChyb3cgKyBsZW5ndGggPiAxMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90IHBvc3NpYmxlIHRvIHBsYWNlIHRoaXMgc2hpcCBoZXJlXCI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aWxlc1tyb3cgKyBpXVtjb2x1bW5dICE9PSBcIndcIikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ICsgaSA8IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICh0aWxlc1tyb3cgKyBpXVtjb2x1bW5dID0gbmV3X3NoaXAucGFydHNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRpbGVzW3Jvd11bY29sdW1uXTtcblxuICAgICAgICAgICAgICAgICAgICAhKGkgPT09IGxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChuZXdfc2hpcC5jb29yZGluYXRlcyArPSBgKCR7W3JvdyArIGksIGNvbHVtbl19KTsgYClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKG5ld19zaGlwLmNvb3JkaW5hdGVzICs9IGAoJHtbcm93ICsgaSwgY29sdW1uXX0pYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hpcHMucHVzaChuZXdfc2hpcCk7XG5cbiAgICAgICAgcmV0dXJuIG5ld19zaGlwO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlX2F0dGFjayA9IChbcm93LCBjb2x1bW5dKSA9PiB7XG4gICAgICAgIGxldCB3b24gPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHRpbGVzW3Jvd11bY29sdW1uXSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIHRpbGVzW3Jvd11bY29sdW1uXSA9IDE7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBfaGl0ID0gc2hpcHMuZmluZCgoeyBjb29yZGluYXRlcyB9KSA9PlxuICAgICAgICAgICAgICAgICAgICBjb29yZGluYXRlcy5pbmNsdWRlcyhgKCR7cm93fSwke2NvbHVtbn0pYClcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgbGV0IGNvb3Jkc19hcnJheSA9IHNoaXBfaGl0LmNvb3JkaW5hdGVzLnNwbGl0KFwiO1wiKTtcbiAgICAgICAgICAgICAgICBjb29yZHNfYXJyYXkgPSBjb29yZHNfYXJyYXkubWFwKChjb29yZCkgPT4gY29vcmQudHJpbSgpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHBhcnRfaGl0ID0gY29vcmRzX2FycmF5LmluZGV4T2YoYCgke3Jvd30sJHtjb2x1bW59KWApO1xuICAgICAgICAgICAgICAgIHNoaXBfaGl0LmhpdChwYXJ0X2hpdCk7XG5cbiAgICAgICAgICAgICAgICB3b24gPSBzaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5pc19zdW5rKCkpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgd29uLCBoaXQ6IFwieWVzXCIgfTtcblxuICAgICAgICAgICAgY2FzZSBcIndcIjpcbiAgICAgICAgICAgICAgICB0aWxlc1tyb3ddW2NvbHVtbl0gPSBcIm1cIjtcblxuICAgICAgICAgICAgICAgIHdvbiA9IHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzX3N1bmsoKSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4geyB3b24sIGhpdDogXCJub1wiIH07XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibm9cIjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4ge1xuICAgICAgICB0aWxlcyxcbiAgICAgICAgcGxhY2Vfc2hpcCxcbiAgICAgICAgcmVjZWl2ZV9hdHRhY2ssXG4gICAgICAgIHNoaXBzLFxuICAgIH07XG59O1xuXG5leHBvcnQgeyBHYW1lYm9hcmQgfTtcbiIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5jb25zdCBQbGF5ZXIgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgIGlmICghKHR5cGUgPT09IFwiaHVtYW5cIiB8fCB0eXBlID09PSBcIkFJXCIpKSByZXR1cm47XG5cbiAgICBjb25zdCBnYW1lYm9hcmQgPSBHYW1lYm9hcmQoKTtcblxuICAgIHJldHVybiB7IGdhbWVib2FyZCwgdHlwZSB9O1xufTtcblxuZXhwb3J0IHsgUGxheWVyIH07XG4iLCJjb25zdCBTaGlwID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBwcm90b3R5cGUgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBoaXQgPSBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMucGFydHNbcG9zaXRpb25dID0gMTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpc19zdW5rID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFydHMuZXZlcnkoKHBhcnQpID0+IHBhcnQgPT09IDEpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBoaXQsXG4gICAgICAgICAgICBpc19zdW5rLFxuICAgICAgICB9O1xuICAgIH0pKCk7XG5cbiAgICAvLy8vXG5cbiAgICBjb25zdCBtYWtlX3NoaXAgPSBmdW5jdGlvbiAobGVuZ3RoKSB7XG4gICAgICAgIGlmICghTnVtYmVyKGxlbmd0aCkpIHJldHVybjtcblxuICAgICAgICBjb25zdCBwYXJ0cyA9IFtdO1xuICAgICAgICBwYXJ0cy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHBhcnRzLmZpbGwoMCk7XG5cbiAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmNyZWF0ZShwcm90b3R5cGUpLCB7XG4gICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICBwYXJ0cyxcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIG1ha2Vfc2hpcCxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IHsgU2hpcCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vY3NzL2JhdHRsZXNoaXAuY3NzXCI7XG5pbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5jb25zdCBpbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIEdhbWUucGxheV9nYW1lKCk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiclwiKSBHYW1lLnJlc2V0X2dhbWUoKTtcbiAgICB9KTtcbn07XG5cbmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==