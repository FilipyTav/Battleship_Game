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
                    if (next.classList.contains("ship_part")) return false;
                    next = get_next_tile(ship_orientation, player, next);
                }

                return true;

            case "y":
                if (row + ship_size > 10) return false;

                next = tile;
                for (let i = 0; i < ship_size; i++) {
                    if (next.classList.contains("ship_part")) return false;
                    next = get_next_tile(ship_orientation, player, next);
                }

                return true;

            default:
                return;
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

            ship_tiles.forEach((tile) => tile.classList.add("ship_part"));

            const placed_ship = player.gameboard.place_ship(
                length,
                [row, column],
                axis
            );
        } else {
            return false;
        }
    };

    const all_ship_containers = () => {
        return [...document.querySelectorAll(".ship_container")];
    };

    const reset_ships_container = () => {
        while (ships_container.lastChild) ships_container.lastChild.remove();

        DOM_el.create_ship_DOM(2);
        DOM_el.create_ship_DOM(3);
        DOM_el.create_ship_DOM(3);
        DOM_el.create_ship_DOM(4);
        DOM_el.create_ship_DOM(5);
    };

    const attack_DOM = (player, [row, column] = [0, 0], other_player) => {
        switch (player.type) {
            case "AI":
                player.attack();

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

    const select_tile = (target, computer, player1) => {
        // TODO: Improve the current "turn switch system"
        target.classList.add("hit");
        let coords = target.getAttribute("data-id");
        attack_DOM(player1, [Number(coords[0]), Number(coords[1])], computer);

        setTimeout(() => {
            if (_game__WEBPACK_IMPORTED_MODULE_0__.Game.end === false) play_turn(computer, player1);
        }, 300);
    };

    const play_turn = (player, other_player) => {
        switch (player.type) {
            case "AI":
                attack_DOM(player, [0, 0], other_player);
                break;

            case "human":
                break;

            default:
                return;
        }
    };

    const activate_start_button = (computer, player1) => {
        const btn = document.querySelector(".start_game_btn");
        btn.addEventListener("click", () => {
            setTimeout(() => {
                btn.remove();
            }, 300);

            get_board_tiles(computer).forEach((tile) => {
                tile.addEventListener(
                    "click",
                    (e) => {
                        select_tile(e.target, computer, player1);
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

    const activate_drag_over_tiles = (player, computer) => {
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

                    activate_start_button(computer, player);
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
/* harmony import */ var _play_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play_game */ "./src/js/play_game.js");



const Game = (function () {
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

    let end = false;
    const reset_game = (player1, player2) => {
        player1.gameboard.ships.splice(0, player1.gameboard.ships.length);

        player2.gameboard.ships.splice(0, player2.gameboard.ships.length);

        for (let i = 0; i < player2.gameboard.tiles.length; i++) {
            for (let j = 0; j < player2.gameboard.tiles[i].length; j++) {
                player1.gameboard.tiles[i][j] = "w";
                player2.gameboard.tiles[i][j] = "w";
            }
        }

        end = true;
        (0,_play_game__WEBPACK_IMPORTED_MODULE_1__.play_game)();
    };

    const cds = [];

    const add_attack_methods = (player, other_player) => {
        switch (player.type) {
            case "AI":
                player.attack = function () {
                    const row = Game.random_int(0, 9);
                    const column = Game.random_int(0, 9);

                    cds[0] = row;
                    cds[1] = column;

                    const result = other_player.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    switch (result) {
                        case "no":
                            player.attack();
                            break;

                        case true:
                            setTimeout(() => {
                                alert("The computer wins!!!");
                                reset_game(player, other_player);
                            }, 300);
                            break;

                        case false:
                            break;

                        default:
                            return;
                    }
                };
                break;

            case "human":
                player.attack = ([row, column]) => {
                    const result = other_player.gameboard.receive_attack([
                        row,
                        column,
                    ]);

                    switch (result) {
                        case true:
                            alert("You win!!!");
                            reset_game(player, other_player);
                            break;

                        case false:
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

        const new_ship = _ship__WEBPACK_IMPORTED_MODULE_0__.Ship.make_ship(length);
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

                break;

            case "w":
                tiles[row][column] = "m";
                break;

            default:
                return "no";
        }

        return ships.every((ship) => ship.is_sunk());
    };

    return {
        tiles,
        place_ship,
        receive_attack,
        ships,
    };
};




/***/ }),

/***/ "./src/js/play_game.js":
/*!*****************************!*\
  !*** ./src/js/play_game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "play_game": () => (/* binding */ play_game)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/js/player.js");
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_elements */ "./src/js/DOM_elements.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ "./src/js/game.js");




const play_game = () => {
    const player1 = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)("human");
    const computer = (0,_player__WEBPACK_IMPORTED_MODULE_0__.Player)("AI");

    _DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.populate_board(_DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.player1_board, player1);
    _DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.populate_board(_DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.computer_board, computer);

    _DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.get_board_tiles(player1).forEach((tile) => tile.classList.add("no"));

    _game__WEBPACK_IMPORTED_MODULE_2__.Game.add_attack_methods(player1, computer);
    _game__WEBPACK_IMPORTED_MODULE_2__.Game.add_attack_methods(computer, player1);

    document.addEventListener("keydown", (e) => {
        if (e.key === "d") console.log(computer.gameboard);
    });

    _game__WEBPACK_IMPORTED_MODULE_2__.Game.choose_tiles_automatically(computer);

    _DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.reset_ships_container();

    _DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.activate_drag_over_tiles(player1, computer);
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
/* harmony import */ var _DOM_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM_elements */ "./src/js/DOM_elements.js");
/* harmony import */ var _play_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./play_game */ "./src/js/play_game.js");




const init = function () {
    (0,_play_game__WEBPACK_IMPORTED_MODULE_2__.play_game)();
    _DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.all_ship_containers().forEach((container) =>
        container.addEventListener("dragstart", () => {
            container.classList.toggle("being_dragged");
        })
    );

    _DOM_elements__WEBPACK_IMPORTED_MODULE_1__.DOM_el.all_ship_containers().forEach((container) =>
        container.addEventListener("dragend", () => {
            container.classList.toggle("being_dragged");
        })
    );
};

init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvY3NzL2JhdHRsZXNoaXAuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2Nzcy9iYXR0bGVzaGlwLmNzcz9hYjFiIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2pzL0RPTV9lbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvanMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvanMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS8uL3NyYy9qcy9wbGF5X2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lLy4vc3JjL2pzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvanMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXBfZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcF9nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwX2dhbWUvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xcbn1cXG5cXG4ubWFpbl9jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnBsYXllcjFfYm9hcmQsXFxuLmNvbXB1dGVyX2JvYXJkIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBvdXRsaW5lOiA1cHggc29saWQgIzY2NjtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYig5NSwgOTUsIDI0NSksIHJnYigxNDQsIDI0NywgMjQ3KSk7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDUwcHgpO1xcbn1cXG5cXG4ucGxheWVyMV9ib2FyZCB7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MHB4O1xcblxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxufVxcblxcbi5jb21wdXRlcl9ib2FyZCB7XFxuICAgIGJvdHRvbTogNTAlO1xcbiAgICByaWdodDogNTBweDtcXG5cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XFxufVxcblxcbi5ib2FyZF90aWxlIHtcXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCBwdXJwbGU7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcbn1cXG5cXG4uc2hpcF9wYXJ0IHtcXG4gICAgYmFja2dyb3VuZDogdmlvbGV0O1xcbn1cXG5cXG4uYm9hcmRfdGlsZS5oaXQsXFxuLmJvYXJkX3RpbGUubm8sXFxuLmJvYXJkX3RpbGVbcGxheWVyPVxcXCJodW1hblxcXCJdIHtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuXFxuLmJvYXJkX3RpbGUubm8ge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmJvYXJkX3RpbGUuaGl0IHtcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuLmJvYXJkX3RpbGUuc2hpcF9wYXJ0LmhpdCB7XFxuICAgIGJhY2tncm91bmQ6IHJnYigyNDMsIDY0LCA2NCk7XFxufVxcblxcbi5zaGlwc19jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxuICAgIGdhcDogNXB4O1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uc2hpcHNfY29udGFpbmVyIC5zaGlwX3BhcnQge1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXI6IDAuMXB4IHNvbGlkIHB1cnBsZTtcXG59XFxuXFxuLnNoaXBzX2NvbnRhaW5lciAuc2hpcF9jb250YWluZXIge1xcbiAgICBjdXJzb3I6IG1vdmU7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4uc2hpcF9jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5idXR0b24uY2hhbmdlX29yaWVudGF0aW9uIHtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBjeWFuO1xcbiAgICBib3gtc2hhZG93OiBpbnNldCAycHggMHB4IDNweCBibHVlO1xcblxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTBweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuYnV0dG9uLmNoYW5nZV9vcmllbnRhdGlvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiBibHVlO1xcbn1cXG5cXG4udmVydGljYWwge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XFxufVxcblxcbi5iZWluZ19kcmFnZ2VkIC5zaGlwX3BhcnQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjM4LCAxMzAsIDIzOCwgMC43KTtcXG59XFxuXFxuLnBsYWNpbmdfcHJldmlldyB7XFxuICAgIGJhY2tncm91bmQ6IGxpbWU7XFxufVxcblxcbltwbGF5ZXI9XFxcImh1bWFuXFxcIl0uYm9hcmRfdGlsZSB7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uc3RhcnRfZ2FtZV9idG4ge1xcbiAgICBwYWRkaW5nOiA1cHggMTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XFxuXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggNXB4IGJsdWV2aW9sZXQ7XFxufVxcblxcbi5zdGFydF9nYW1lX2J0bjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzUsIDk4LCAxMDApO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2JhdHRsZXNoaXAuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2Ysc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7O0lBRWIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLGlFQUFpRTs7SUFFakUsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7O0lBRVYsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7O0lBRVgsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixRQUFROztJQUVSLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCOztJQUV2QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtDQUFrQzs7SUFFbEMsZUFBZTs7SUFFZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7O0lBRVgsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osaUJBQWlCOztJQUVqQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaENcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZDogIzExMTtcXG59XFxuXFxuLm1haW5fY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcblxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5wbGF5ZXIxX2JvYXJkLFxcbi5jb21wdXRlcl9ib2FyZCB7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgb3V0bGluZTogNXB4IHNvbGlkICM2NjY7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoOTUsIDk1LCAyNDUpLCByZ2IoMTQ0LCAyNDcsIDI0NykpO1xcblxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCA1MHB4KTtcXG59XFxuXFxuLnBsYXllcjFfYm9hcmQge1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTBweDtcXG5cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbn1cXG5cXG4uY29tcHV0ZXJfYm9hcmQge1xcbiAgICBib3R0b206IDUwJTtcXG4gICAgcmlnaHQ6IDUwcHg7XFxuXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xcbn1cXG5cXG4uYm9hcmRfdGlsZSB7XFxuICAgIGJvcmRlcjogMC4xcHggc29saWQgcHVycGxlO1xcbiAgICBjdXJzb3I6IGNyb3NzaGFpcjtcXG59XFxuXFxuLnNoaXBfcGFydCB7XFxuICAgIGJhY2tncm91bmQ6IHZpb2xldDtcXG59XFxuXFxuLmJvYXJkX3RpbGUuaGl0LFxcbi5ib2FyZF90aWxlLm5vLFxcbi5ib2FyZF90aWxlW3BsYXllcj1cXFwiaHVtYW5cXFwiXSB7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcblxcbi5ib2FyZF90aWxlLm5vIHtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5ib2FyZF90aWxlLmhpdCB7XFxuICAgIGJhY2tncm91bmQ6IGJsdWU7XFxufVxcblxcbi5ib2FyZF90aWxlLnNoaXBfcGFydC5oaXQge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjQzLCA2NCwgNjQpO1xcbn1cXG5cXG4uc2hpcHNfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbiAgICBnYXA6IDVweDtcXG5cXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XFxuXFxuLnNoaXBzX2NvbnRhaW5lciAuc2hpcF9wYXJ0IHtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyOiAwLjFweCBzb2xpZCBwdXJwbGU7XFxufVxcblxcbi5zaGlwc19jb250YWluZXIgLnNoaXBfY29udGFpbmVyIHtcXG4gICAgY3Vyc29yOiBtb3ZlO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLnNoaXBfY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuYnV0dG9uLmNoYW5nZV9vcmllbnRhdGlvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogY3lhbjtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMnB4IDBweCAzcHggYmx1ZTtcXG5cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbmJ1dHRvbi5jaGFuZ2Vfb3JpZW50YXRpb246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogYmx1ZTtcXG59XFxuXFxuLnZlcnRpY2FsIHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW4gbm93cmFwO1xcbn1cXG5cXG4uYmVpbmdfZHJhZ2dlZCAuc2hpcF9wYXJ0IHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDIzOCwgMTMwLCAyMzgsIDAuNyk7XFxufVxcblxcbi5wbGFjaW5nX3ByZXZpZXcge1xcbiAgICBiYWNrZ3JvdW5kOiBsaW1lO1xcbn1cXG5cXG5bcGxheWVyPVxcXCJodW1hblxcXCJdLmJvYXJkX3RpbGUge1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLnN0YXJ0X2dhbWVfYnRuIHtcXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgYmFja2dyb3VuZDogY2FkZXRibHVlO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xcblxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDVweCBibHVldmlvbGV0O1xcbn1cXG5cXG4uc3RhcnRfZ2FtZV9idG46YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDM1LCA5OCwgMTAwKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXR0bGVzaGlwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYmF0dGxlc2hpcC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxuY29uc3QgRE9NX2VsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBtYWluX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbl9jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBwbGF5ZXIxX2JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXIxX2JvYXJkXCIpO1xuICAgIGNvbnN0IGNvbXB1dGVyX2JvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb21wdXRlcl9ib2FyZFwiKTtcblxuICAgIGNvbnN0IHNoaXBzX2NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcHNfY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3QgY3JlYXRlX2JvYXJkX3RpbGUgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkX3RpbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib2FyZF90aWxlLmNsYXNzTGlzdC5hZGQoXCJib2FyZF90aWxlXCIpO1xuXG4gICAgICAgIHJldHVybiBib2FyZF90aWxlO1xuICAgIH07XG5cbiAgICBjb25zdCBwb3B1bGF0ZV9ib2FyZCA9IChib2FyZCwgcGxheWVyKSA9PiB7XG4gICAgICAgIHdoaWxlIChib2FyZC5sYXN0Q2hpbGQpIHtcbiAgICAgICAgICAgIGJvYXJkLmxhc3RDaGlsZC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllci5nYW1lYm9hcmQudGlsZXMuZmxhdCgpLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBib2FyZF90aWxlID0gY3JlYXRlX2JvYXJkX3RpbGUoKTtcbiAgICAgICAgICAgIGJvYXJkX3RpbGUuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgICAgIFwiZGF0YS1pZFwiLFxuICAgICAgICAgICAgICAgIGkudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIG1pbmltdW1JbnRlZ2VyRGlnaXRzOiAyLFxuICAgICAgICAgICAgICAgICAgICB1c2VHcm91cGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGJvYXJkX3RpbGUuc2V0QXR0cmlidXRlKFwicGxheWVyXCIsIHBsYXllci50eXBlKTtcbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChib2FyZF90aWxlKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRfYm9hcmRfdGlsZXMgPSAocGxheWVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGJvYXJkX3RpbGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAgICAgICAgIGAuYm9hcmRfdGlsZVtwbGF5ZXI9JHtwbGF5ZXIudHlwZX1dYFxuICAgICAgICApO1xuXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKGJvYXJkX3RpbGVzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZ2V0X25leHRfdGlsZSA9IChheGlzLCBwbGF5ZXIsIHRpbGUpID0+IHtcbiAgICAgICAgaWYgKCEoYXhpcyA9PT0gXCJ5XCIgfHwgYXhpcyA9PT0gXCJ4XCIpKSByZXR1cm47XG5cbiAgICAgICAgc3dpdGNoIChheGlzKSB7XG4gICAgICAgICAgICBjYXNlIFwieFwiOlxuICAgICAgICAgICAgICAgIHJldHVybiB0aWxlLm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgICAgICAgYFtkYXRhLWlkPVwiJHtcbiAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcih0aWxlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikpICsgMTBcbiAgICAgICAgICAgICAgICAgICAgfVwiXVtwbGF5ZXI9XCIke3BsYXllci50eXBlfVwiXWBcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBnZXRfc3BlY2lmaWNfdGlsZSA9IChwbGF5ZXIsIFtyb3csIGNvbHVtbl0pID0+IHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBgLmJvYXJkX3RpbGVbcGxheWVyPVwiJHtwbGF5ZXIudHlwZX1cIl1bZGF0YS1pZD1cIiR7cm93fSR7Y29sdW1ufVwiXWBcbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlX3NoaXBfRE9NID0gKHBhcnRzKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBfY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgc2hpcF9jb250YWluZXIuc2V0QXR0cmlidXRlKFwic2l6ZVwiLCBwYXJ0cyk7XG4gICAgICAgIHNoaXBfY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJzaGlwX2NvbnRhaW5lclwiKTtcbiAgICAgICAgc2hpcF9jb250YWluZXIuc2V0QXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIsIHRydWUpO1xuXG4gICAgICAgIGNvbnN0IGNoYW5nZV9vcmllbnRhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNoYW5nZV9vcmllbnRhdGlvbi5jbGFzc0xpc3QuYWRkKFwiY2hhbmdlX29yaWVudGF0aW9uXCIpO1xuICAgICAgICBjaGFuZ2Vfb3JpZW50YXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnNoaXBfY29udGFpbmVyXCIpLmNsYXNzTGlzdC50b2dnbGUoXCJ2ZXJ0aWNhbFwiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0czsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRpdl9wYXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGluZGl2X3BhcnQuY2xhc3NMaXN0LmFkZChcInNoaXBfcGFydFwiKTtcblxuICAgICAgICAgICAgc2hpcF9jb250YWluZXIuYXBwZW5kKGluZGl2X3BhcnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hpcF9jb250YWluZXIuYXBwZW5kKGNoYW5nZV9vcmllbnRhdGlvbik7XG4gICAgICAgIHNoaXBzX2NvbnRhaW5lci5hcHBlbmQoc2hpcF9jb250YWluZXIpO1xuICAgIH07XG5cbiAgICBjb25zdCBpc192YWxpZCA9IChzaGlwX3NpemUsIHNoaXBfb3JpZW50YXRpb24sIHRpbGUsIHBsYXllcikgPT4ge1xuICAgICAgICBjb25zdCByb3cgPSBOdW1iZXIodGlsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpWzBdKTtcbiAgICAgICAgY29uc3QgY29sdW1uID0gTnVtYmVyKHRpbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKVsxXSk7XG5cbiAgICAgICAgbGV0IG5leHQgPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHNoaXBfb3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtbiArIHNoaXBfc2l6ZSA+IDEwKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBuZXh0ID0gdGlsZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0LmNsYXNzTGlzdC5jb250YWlucyhcInNoaXBfcGFydFwiKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBuZXh0ID0gZ2V0X25leHRfdGlsZShzaGlwX29yaWVudGF0aW9uLCBwbGF5ZXIsIG5leHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgIGlmIChyb3cgKyBzaGlwX3NpemUgPiAxMCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgbmV4dCA9IHRpbGU7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwX3NpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dC5jbGFzc0xpc3QuY29udGFpbnMoXCJzaGlwX3BhcnRcIikpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGdldF9uZXh0X3RpbGUoc2hpcF9vcmllbnRhdGlvbiwgcGxheWVyLCBuZXh0KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgcGxhY2Vfc2hpcF9ET00gPSAocGxheWVyLCBsZW5ndGgsIFtyb3csIGNvbHVtbl0sIGF4aXMpID0+IHtcbiAgICAgICAgY29uc3QgYmFzZV90aWxlID0gZ2V0X2JvYXJkX3RpbGVzKHBsYXllcikuZmluZChcbiAgICAgICAgICAgICh0aWxlKSA9PiB0aWxlLmdldEF0dHJpYnV0ZShcImRhdGEtaWRcIikgPT09IGAke3Jvd30ke2NvbHVtbn1gXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGlzX3ZhbGlkKGxlbmd0aCwgYXhpcywgYmFzZV90aWxlLCBwbGF5ZXIpKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwX3RpbGVzID0gW2Jhc2VfdGlsZV07XG5cbiAgICAgICAgICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwX3RpbGVzLnB1c2goXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0X25leHRfdGlsZShheGlzLCBwbGF5ZXIsIHNoaXBfdGlsZXNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBcInlcIjpcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaXBfdGlsZXMucHVzaChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRfbmV4dF90aWxlKGF4aXMsIHBsYXllciwgc2hpcF90aWxlc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2hpcF90aWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB0aWxlLmNsYXNzTGlzdC5hZGQoXCJzaGlwX3BhcnRcIikpO1xuXG4gICAgICAgICAgICBjb25zdCBwbGFjZWRfc2hpcCA9IHBsYXllci5nYW1lYm9hcmQucGxhY2Vfc2hpcChcbiAgICAgICAgICAgICAgICBsZW5ndGgsXG4gICAgICAgICAgICAgICAgW3JvdywgY29sdW1uXSxcbiAgICAgICAgICAgICAgICBheGlzXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGFsbF9zaGlwX2NvbnRhaW5lcnMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwX2NvbnRhaW5lclwiKV07XG4gICAgfTtcblxuICAgIGNvbnN0IHJlc2V0X3NoaXBzX2NvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgd2hpbGUgKHNoaXBzX2NvbnRhaW5lci5sYXN0Q2hpbGQpIHNoaXBzX2NvbnRhaW5lci5sYXN0Q2hpbGQucmVtb3ZlKCk7XG5cbiAgICAgICAgRE9NX2VsLmNyZWF0ZV9zaGlwX0RPTSgyKTtcbiAgICAgICAgRE9NX2VsLmNyZWF0ZV9zaGlwX0RPTSgzKTtcbiAgICAgICAgRE9NX2VsLmNyZWF0ZV9zaGlwX0RPTSgzKTtcbiAgICAgICAgRE9NX2VsLmNyZWF0ZV9zaGlwX0RPTSg0KTtcbiAgICAgICAgRE9NX2VsLmNyZWF0ZV9zaGlwX0RPTSg1KTtcbiAgICB9O1xuXG4gICAgY29uc3QgYXR0YWNrX0RPTSA9IChwbGF5ZXIsIFtyb3csIGNvbHVtbl0gPSBbMCwgMF0sIG90aGVyX3BsYXllcikgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBsYXllci50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQUlcIjpcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYXR0YWNrKCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCByID0gR2FtZS5jZHNbMF07XG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IEdhbWUuY2RzWzFdO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZV9oaXQgPSBET01fZWwuZ2V0X3NwZWNpZmljX3RpbGUob3RoZXJfcGxheWVyLCBbciwgY10pO1xuXG4gICAgICAgICAgICAgICAgdGlsZV9oaXQuY2xhc3NMaXN0LmFkZChcImhpdFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcImh1bWFuXCI6XG4gICAgICAgICAgICAgICAgcGxheWVyLmF0dGFjayhbcm93LCBjb2x1bW5dKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgc2VsZWN0X3RpbGUgPSAodGFyZ2V0LCBjb21wdXRlciwgcGxheWVyMSkgPT4ge1xuICAgICAgICAvLyBUT0RPOiBJbXByb3ZlIHRoZSBjdXJyZW50IFwidHVybiBzd2l0Y2ggc3lzdGVtXCJcbiAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJoaXRcIik7XG4gICAgICAgIGxldCBjb29yZHMgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKTtcbiAgICAgICAgYXR0YWNrX0RPTShwbGF5ZXIxLCBbTnVtYmVyKGNvb3Jkc1swXSksIE51bWJlcihjb29yZHNbMV0pXSwgY29tcHV0ZXIpO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKEdhbWUuZW5kID09PSBmYWxzZSkgcGxheV90dXJuKGNvbXB1dGVyLCBwbGF5ZXIxKTtcbiAgICAgICAgfSwgMzAwKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcGxheV90dXJuID0gKHBsYXllciwgb3RoZXJfcGxheWVyKSA9PiB7XG4gICAgICAgIHN3aXRjaCAocGxheWVyLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJBSVwiOlxuICAgICAgICAgICAgICAgIGF0dGFja19ET00ocGxheWVyLCBbMCwgMF0sIG90aGVyX3BsYXllcik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJodW1hblwiOlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBhY3RpdmF0ZV9zdGFydF9idXR0b24gPSAoY29tcHV0ZXIsIHBsYXllcjEpID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGFydF9nYW1lX2J0blwiKTtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBidG4ucmVtb3ZlKCk7XG4gICAgICAgICAgICB9LCAzMDApO1xuXG4gICAgICAgICAgICBnZXRfYm9hcmRfdGlsZXMoY29tcHV0ZXIpLmZvckVhY2goKHRpbGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aWxlLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdF90aWxlKGUudGFyZ2V0LCBjb21wdXRlciwgcGxheWVyMSk7XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRyYWdvdmVyXCIsIChldmVudCkgPT4ge1xuICAgICAgICAvLyBwcmV2ZW50IGRlZmF1bHQgdG8gYWxsb3cgZHJvcFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWN0aXZhdGVfZHJhZ19vdmVyX3RpbGVzID0gKHBsYXllciwgY29tcHV0ZXIpID0+IHtcbiAgICAgICAgZ2V0X2JvYXJkX3RpbGVzKHBsYXllcikuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJvcFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iZWluZ19kcmFnZ2VkXCIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3Qgc2hpcF9zaXplID0gTnVtYmVyKHNlbGVjdGVkLmdldEF0dHJpYnV0ZShcInNpemVcIikpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRfcm93ID0gTnVtYmVyKHRpbGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1pZFwiKVswXSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudF9jb2x1bW4gPSBOdW1iZXIodGlsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWlkXCIpWzFdKTtcbiAgICAgICAgICAgICAgICBsZXQgb3JpZW50YXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkLmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsXCIpXG4gICAgICAgICAgICAgICAgICAgID8gKG9yaWVudGF0aW9uID0gXCJ5XCIpXG4gICAgICAgICAgICAgICAgICAgIDogKG9yaWVudGF0aW9uID0gXCJ4XCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzX3ZhbGlkKHNoaXBfc2l6ZSwgb3JpZW50YXRpb24sIHRpbGUsIHBsYXllcikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vfc2hpcF9ET00oXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwX3NpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBbY3VycmVudF9yb3csIGN1cnJlbnRfY29sdW1uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWVudGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gdGlsZTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwX3NpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dC5jbGFzc0xpc3QucmVtb3ZlKFwicGxhY2luZ19wcmV2aWV3XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV4dCA9IGdldF9uZXh0X3RpbGUob3JpZW50YXRpb24sIHBsYXllciwgbmV4dCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBzX2NvbnRhaW5lci5jaGlsZEVsZW1lbnRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwbGF5X2dhbWVfYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgcGxheV9nYW1lX2J1dHRvbi5jbGFzc0xpc3QuYWRkKFwic3RhcnRfZ2FtZV9idG5cIik7XG4gICAgICAgICAgICAgICAgICAgIHBsYXlfZ2FtZV9idXR0b24udGV4dENvbnRlbnQgPSBcIlN0YXJ0IEdhbWVcIjtcblxuICAgICAgICAgICAgICAgICAgICBzaGlwc19jb250YWluZXIuYXBwZW5kKHBsYXlfZ2FtZV9idXR0b24pO1xuXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2YXRlX3N0YXJ0X2J1dHRvbihjb21wdXRlciwgcGxheWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VudGVyXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJlaW5nX2RyYWdnZWRcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwX3NpemUgPSBOdW1iZXIoc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKFwic2l6ZVwiKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgICAgICA/IChvcmllbnRhdGlvbiA9IFwieVwiKVxuICAgICAgICAgICAgICAgICAgICA6IChvcmllbnRhdGlvbiA9IFwieFwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc192YWxpZChzaGlwX3NpemUsIG9yaWVudGF0aW9uLCB0aWxlLCBwbGF5ZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSB0aWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwX3NpemU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2xhc3NMaXN0LmFkZChcInBsYWNpbmdfcHJldmlld1wiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gZ2V0X25leHRfdGlsZShvcmllbnRhdGlvbiwgcGxheWVyLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMC4xKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGlsZS5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJlaW5nX2RyYWdnZWRcIik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBzaGlwX3NpemUgPSBOdW1iZXIoc2VsZWN0ZWQuZ2V0QXR0cmlidXRlKFwic2l6ZVwiKSk7XG4gICAgICAgICAgICAgICAgbGV0IG9yaWVudGF0aW9uID0gbnVsbDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZC5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbFwiKVxuICAgICAgICAgICAgICAgICAgICA/IChvcmllbnRhdGlvbiA9IFwieVwiKVxuICAgICAgICAgICAgICAgICAgICA6IChvcmllbnRhdGlvbiA9IFwieFwiKTtcblxuICAgICAgICAgICAgICAgIGxldCBuZXh0ID0gdGlsZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBfc2l6ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0LmNsYXNzTGlzdC5yZW1vdmUoXCJwbGFjaW5nX3ByZXZpZXdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0ID0gZ2V0X25leHRfdGlsZShvcmllbnRhdGlvbiwgcGxheWVyLCBuZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFpbl9jb250YWluZXIsXG4gICAgICAgIHBsYXllcjFfYm9hcmQsXG4gICAgICAgIGNvbXB1dGVyX2JvYXJkLFxuICAgICAgICBjcmVhdGVfYm9hcmRfdGlsZSxcbiAgICAgICAgcG9wdWxhdGVfYm9hcmQsXG4gICAgICAgIGdldF9ib2FyZF90aWxlcyxcbiAgICAgICAgZ2V0X25leHRfdGlsZSxcbiAgICAgICAgZ2V0X3NwZWNpZmljX3RpbGUsXG4gICAgICAgIGNyZWF0ZV9zaGlwX0RPTSxcbiAgICAgICAgYWxsX3NoaXBfY29udGFpbmVycyxcbiAgICAgICAgYWN0aXZhdGVfZHJhZ19vdmVyX3RpbGVzLFxuICAgICAgICBwbGFjZV9zaGlwX0RPTSxcbiAgICAgICAgcmVzZXRfc2hpcHNfY29udGFpbmVyLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyBET01fZWwgfTtcbiIsImltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbGVtZW50c1wiO1xuaW1wb3J0IHsgcGxheV9nYW1lIH0gZnJvbSBcIi4vcGxheV9nYW1lXCI7XG5cbmNvbnN0IEdhbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJhbmRvbV9pbnQgPSAobWluLCBtYXgpID0+IHtcbiAgICAgICAgbWluID0gTWF0aC5jZWlsKG1pbik7XG4gICAgICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gICAgfTtcblxuICAgIGNvbnN0IHJhbmRvbV9heGlzID0gKCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHJhbmRvbV9pbnQoMCwgMSkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ4XCI7XG5cbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ5XCI7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGxldCBlbmQgPSBmYWxzZTtcbiAgICBjb25zdCByZXNldF9nYW1lID0gKHBsYXllcjEsIHBsYXllcjIpID0+IHtcbiAgICAgICAgcGxheWVyMS5nYW1lYm9hcmQuc2hpcHMuc3BsaWNlKDAsIHBsYXllcjEuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCk7XG5cbiAgICAgICAgcGxheWVyMi5nYW1lYm9hcmQuc2hpcHMuc3BsaWNlKDAsIHBsYXllcjIuZ2FtZWJvYXJkLnNoaXBzLmxlbmd0aCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXIyLmdhbWVib2FyZC50aWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXIyLmdhbWVib2FyZC50aWxlc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHBsYXllcjEuZ2FtZWJvYXJkLnRpbGVzW2ldW2pdID0gXCJ3XCI7XG4gICAgICAgICAgICAgICAgcGxheWVyMi5nYW1lYm9hcmQudGlsZXNbaV1bal0gPSBcIndcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGVuZCA9IHRydWU7XG4gICAgICAgIHBsYXlfZ2FtZSgpO1xuICAgIH07XG5cbiAgICBjb25zdCBjZHMgPSBbXTtcblxuICAgIGNvbnN0IGFkZF9hdHRhY2tfbWV0aG9kcyA9IChwbGF5ZXIsIG90aGVyX3BsYXllcikgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBsYXllci50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiQUlcIjpcbiAgICAgICAgICAgICAgICBwbGF5ZXIuYXR0YWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3cgPSBHYW1lLnJhbmRvbV9pbnQoMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IEdhbWUucmFuZG9tX2ludCgwLCA5KTtcblxuICAgICAgICAgICAgICAgICAgICBjZHNbMF0gPSByb3c7XG4gICAgICAgICAgICAgICAgICAgIGNkc1sxXSA9IGNvbHVtbjtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvdGhlcl9wbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVfYXR0YWNrKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJub1wiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllci5hdHRhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIlRoZSBjb21wdXRlciB3aW5zISEhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNldF9nYW1lKHBsYXllciwgb3RoZXJfcGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJodW1hblwiOlxuICAgICAgICAgICAgICAgIHBsYXllci5hdHRhY2sgPSAoW3JvdywgY29sdW1uXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBvdGhlcl9wbGF5ZXIuZ2FtZWJvYXJkLnJlY2VpdmVfYXR0YWNrKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbixcbiAgICAgICAgICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGVydChcIllvdSB3aW4hISFcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzZXRfZ2FtZShwbGF5ZXIsIG90aGVyX3BsYXllcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwibm9cIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGNob29zZV90aWxlc19hdXRvbWF0aWNhbGx5ID0gKHBsYXllcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNoaXBfc2l6ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIGxldCByb3cgPSBudWxsO1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IG51bGw7XG5cbiAgICAgICAgICAgIGNvbnN0IGF4aXMgPSByYW5kb21fYXhpcygpO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIHNoaXBfc2l6ZSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICBzaGlwX3NpemUgPSAzO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgc2hpcF9zaXplID0gMztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgIHNoaXBfc2l6ZSA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICBzaGlwX3NpemUgPSA1O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChheGlzKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICAgICAgcm93ID0gcmFuZG9tX2ludCgwLCA5KTtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gcmFuZG9tX2ludCgwLCA5IC0gKHNoaXBfc2l6ZSAtIDEpKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAgICAgICAgIHJvdyA9IHJhbmRvbV9pbnQoMCwgOSAtIChzaGlwX3NpemUgLSAxKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiA9IHJhbmRvbV9pbnQoMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICh2YWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBheGlzID0gcmFuZG9tX2F4aXMoKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGF4aXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdyA9IHJhbmRvbV9pbnQoMCwgOSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4gPSByYW5kb21faW50KDAsIDkgLSAoc2hpcF9zaXplIC0gMSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJ5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICByb3cgPSByYW5kb21faW50KDAsIDkgLSAoc2hpcF9zaXplIC0gMSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uID0gcmFuZG9tX2ludCgwLCA5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBET01fZWwucGxhY2Vfc2hpcF9ET00oXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGlwX3NpemUsXG4gICAgICAgICAgICAgICAgICAgICAgICBbcm93LCBjb2x1bW5dLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXhpc1xuICAgICAgICAgICAgICAgICAgICApICE9PSBmYWxzZVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHJhbmRvbV9pbnQsXG4gICAgICAgIHJhbmRvbV9heGlzLFxuICAgICAgICBlbmQsXG4gICAgICAgIHJlc2V0X2dhbWUsXG4gICAgICAgIGFkZF9hdHRhY2tfbWV0aG9kcyxcbiAgICAgICAgY2RzLFxuICAgICAgICBjaG9vc2VfdGlsZXNfYXV0b21hdGljYWxseSxcbiAgICB9O1xufSkoKTtcblxuZXhwb3J0IHsgR2FtZSB9O1xuIiwiaW1wb3J0IHsgU2hpcCB9IGZyb20gXCIuL3NoaXBcIjtcblxuY29uc3QgR2FtZWJvYXJkID0gZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHRpbGVzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGFycmF5Lmxlbmd0aCA9IDEwO1xuICAgICAgICAgICAgYXJyYXkuZmlsbChcIndcIik7XG5cbiAgICAgICAgICAgIHJvd3MucHVzaChhcnJheSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9KSgpO1xuXG4gICAgY29uc3Qgc2hpcHMgPSBbXTtcblxuICAgIGNvbnN0IHBsYWNlX3NoaXAgPSAobGVuZ3RoLCBbcm93LCBjb2x1bW5dLCBheGlzKSA9PiB7XG4gICAgICAgIGlmICghKGF4aXMgPT09IFwieFwiIHx8IGF4aXMgPT09IFwieVwiKSkgcmV0dXJuO1xuICAgICAgICBpZiAobGVuZ3RoIDwgMiB8fCBsZW5ndGggPiA1KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgbmV3X3NoaXAgPSBTaGlwLm1ha2Vfc2hpcChsZW5ndGgpO1xuICAgICAgICBuZXdfc2hpcC5vcmllbnRhdGlvbiA9IGF4aXM7XG5cbiAgICAgICAgbmV3X3NoaXAuY29vcmRpbmF0ZXMgPSBcIlwiO1xuXG4gICAgICAgIHN3aXRjaCAoYXhpcykge1xuICAgICAgICAgICAgY2FzZSBcInhcIjpcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1uICsgbGVuZ3RoID4gMTApXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIk5vdCBwb3NzaWJsZSB0byBwbGFjZSB0aGlzIHNoaXAgaGVyZVwiO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGlsZXNbcm93XVtjb2x1bW4gKyBpXSAhPT0gXCJ3XCIpIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbiArIGkgPCAxMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyAodGlsZXNbcm93XVtjb2x1bW4gKyBpXSA9IG5ld19zaGlwLnBhcnRzW2ldKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiB0aWxlc1tyb3ddW2NvbHVtbl07XG5cbiAgICAgICAgICAgICAgICAgICAgIShpID09PSBsZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgPyAobmV3X3NoaXAuY29vcmRpbmF0ZXMgKz0gYCgke1tyb3csIGNvbHVtbiArIGldfSk7IGApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IChuZXdfc2hpcC5jb29yZGluYXRlcyArPSBgKCR7W3JvdywgY29sdW1uICsgaV19KWApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwieVwiOlxuICAgICAgICAgICAgICAgIGlmIChyb3cgKyBsZW5ndGggPiAxMClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwiTm90IHBvc3NpYmxlIHRvIHBsYWNlIHRoaXMgc2hpcCBoZXJlXCI7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aWxlc1tyb3cgKyBpXVtjb2x1bW5dICE9PSBcIndcIikgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcm93ICsgaSA8IDEwXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICh0aWxlc1tyb3cgKyBpXVtjb2x1bW5dID0gbmV3X3NoaXAucGFydHNbaV0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHRpbGVzW3Jvd11bY29sdW1uXTtcblxuICAgICAgICAgICAgICAgICAgICAhKGkgPT09IGxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICA/IChuZXdfc2hpcC5jb29yZGluYXRlcyArPSBgKCR7W3JvdyArIGksIGNvbHVtbl19KTsgYClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogKG5ld19zaGlwLmNvb3JkaW5hdGVzICs9IGAoJHtbcm93ICsgaSwgY29sdW1uXX0pYCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hpcHMucHVzaChuZXdfc2hpcCk7XG5cbiAgICAgICAgcmV0dXJuIG5ld19zaGlwO1xuICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlX2F0dGFjayA9IChbcm93LCBjb2x1bW5dKSA9PiB7XG4gICAgICAgIHN3aXRjaCAodGlsZXNbcm93XVtjb2x1bW5dKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgdGlsZXNbcm93XVtjb2x1bW5dID0gMTtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcF9oaXQgPSBzaGlwcy5maW5kKCh7IGNvb3JkaW5hdGVzIH0pID0+XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzLmluY2x1ZGVzKGAoJHtyb3d9LCR7Y29sdW1ufSlgKVxuICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICBsZXQgY29vcmRzX2FycmF5ID0gc2hpcF9oaXQuY29vcmRpbmF0ZXMuc3BsaXQoXCI7XCIpO1xuICAgICAgICAgICAgICAgIGNvb3Jkc19hcnJheSA9IGNvb3Jkc19hcnJheS5tYXAoKGNvb3JkKSA9PiBjb29yZC50cmltKCkpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcGFydF9oaXQgPSBjb29yZHNfYXJyYXkuaW5kZXhPZihgKCR7cm93fSwke2NvbHVtbn0pYCk7XG4gICAgICAgICAgICAgICAgc2hpcF9oaXQuaGl0KHBhcnRfaGl0KTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwid1wiOlxuICAgICAgICAgICAgICAgIHRpbGVzW3Jvd11bY29sdW1uXSA9IFwibVwiO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5vXCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNfc3VuaygpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGlsZXMsXG4gICAgICAgIHBsYWNlX3NoaXAsXG4gICAgICAgIHJlY2VpdmVfYXR0YWNrLFxuICAgICAgICBzaGlwcyxcbiAgICB9O1xufTtcblxuZXhwb3J0IHsgR2FtZWJvYXJkIH07XG4iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbGVtZW50c1wiO1xuaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxuY29uc3QgcGxheV9nYW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IHBsYXllcjEgPSBQbGF5ZXIoXCJodW1hblwiKTtcbiAgICBjb25zdCBjb21wdXRlciA9IFBsYXllcihcIkFJXCIpO1xuXG4gICAgRE9NX2VsLnBvcHVsYXRlX2JvYXJkKERPTV9lbC5wbGF5ZXIxX2JvYXJkLCBwbGF5ZXIxKTtcbiAgICBET01fZWwucG9wdWxhdGVfYm9hcmQoRE9NX2VsLmNvbXB1dGVyX2JvYXJkLCBjb21wdXRlcik7XG5cbiAgICBET01fZWwuZ2V0X2JvYXJkX3RpbGVzKHBsYXllcjEpLmZvckVhY2goKHRpbGUpID0+IHRpbGUuY2xhc3NMaXN0LmFkZChcIm5vXCIpKTtcblxuICAgIEdhbWUuYWRkX2F0dGFja19tZXRob2RzKHBsYXllcjEsIGNvbXB1dGVyKTtcbiAgICBHYW1lLmFkZF9hdHRhY2tfbWV0aG9kcyhjb21wdXRlciwgcGxheWVyMSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5rZXkgPT09IFwiZFwiKSBjb25zb2xlLmxvZyhjb21wdXRlci5nYW1lYm9hcmQpO1xuICAgIH0pO1xuXG4gICAgR2FtZS5jaG9vc2VfdGlsZXNfYXV0b21hdGljYWxseShjb21wdXRlcik7XG5cbiAgICBET01fZWwucmVzZXRfc2hpcHNfY29udGFpbmVyKCk7XG5cbiAgICBET01fZWwuYWN0aXZhdGVfZHJhZ19vdmVyX3RpbGVzKHBsYXllcjEsIGNvbXB1dGVyKTtcbn07XG5cbmV4cG9ydCB7IHBsYXlfZ2FtZSB9O1xuIiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmNvbnN0IFBsYXllciA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgaWYgKCEodHlwZSA9PT0gXCJodW1hblwiIHx8IHR5cGUgPT09IFwiQUlcIikpIHJldHVybjtcblxuICAgIGNvbnN0IGdhbWVib2FyZCA9IEdhbWVib2FyZCgpO1xuXG4gICAgcmV0dXJuIHsgZ2FtZWJvYXJkLCB0eXBlIH07XG59O1xuXG5leHBvcnQgeyBQbGF5ZXIgfTtcbiIsImNvbnN0IFNoaXAgPSAoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHByb3RvdHlwZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGhpdCA9IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy5wYXJ0c1twb3NpdGlvbl0gPSAxO1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGlzX3N1bmsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYXJ0cy5ldmVyeSgocGFydCkgPT4gcGFydCA9PT0gMSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhpdCxcbiAgICAgICAgICAgIGlzX3N1bmssXG4gICAgICAgIH07XG4gICAgfSkoKTtcblxuICAgIC8vLy9cblxuICAgIGNvbnN0IG1ha2Vfc2hpcCA9IGZ1bmN0aW9uIChsZW5ndGgpIHtcbiAgICAgICAgaWYgKCFOdW1iZXIobGVuZ3RoKSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gW107XG4gICAgICAgIHBhcnRzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgcGFydHMuZmlsbCgwKTtcblxuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuY3JlYXRlKHByb3RvdHlwZSksIHtcbiAgICAgICAgICAgIGxlbmd0aCxcbiAgICAgICAgICAgIHBhcnRzLFxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZV9zaGlwLFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgeyBTaGlwIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9jc3MvYmF0dGxlc2hpcC5jc3NcIjtcbmltcG9ydCB7IERPTV9lbCB9IGZyb20gXCIuL0RPTV9lbGVtZW50c1wiO1xuaW1wb3J0IHsgcGxheV9nYW1lIH0gZnJvbSBcIi4vcGxheV9nYW1lXCI7XG5cbmNvbnN0IGluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcGxheV9nYW1lKCk7XG4gICAgRE9NX2VsLmFsbF9zaGlwX2NvbnRhaW5lcnMoKS5mb3JFYWNoKChjb250YWluZXIpID0+XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ3N0YXJ0XCIsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFwiYmVpbmdfZHJhZ2dlZFwiKTtcbiAgICAgICAgfSlcbiAgICApO1xuXG4gICAgRE9NX2VsLmFsbF9zaGlwX2NvbnRhaW5lcnMoKS5mb3JFYWNoKChjb250YWluZXIpID0+XG4gICAgICAgIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiZHJhZ2VuZFwiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJlaW5nX2RyYWdnZWRcIik7XG4gICAgICAgIH0pXG4gICAgKTtcbn07XG5cbmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==