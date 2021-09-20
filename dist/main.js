/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-family: Helvetica, Arial, sans-serif;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  background-color: #f9faff;\\r\\n  font-size: 1.1rem;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\na,\\r\\n.nav {\\r\\n  text-decoration: none;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.nav:hover {\\r\\n  border-bottom-style: solid;\\r\\n}\\r\\n\\r\\n/* nav & footer */\\r\\n.color-coffee {\\r\\n  color: #f9faff;\\r\\n  background-color: #262626;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  padding: 24px;\\r\\n  margin-block-start: 0;\\r\\n  margin-block-end: 0;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  margin: 0 15%;\\r\\n}\\r\\n\\r\\n#input,\\r\\n#input2 {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.mealsHolder {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  gap: 20px;\\r\\n  grid-auto-rows: minmax(100px, auto);\\r\\n  background-color: #edeff5;\\r\\n  padding: 30px;\\r\\n}\\r\\n\\r\\n.mealCard {\\r\\n  background-color: rgb(195, 165, 124);\\r\\n  border-radius: 17px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.mealCard:nth-child(even) {\\r\\n  background-color: rgb(163, 131, 131);\\r\\n}\\r\\n\\r\\n.meal-likes {\\r\\n  display: flex;\\r\\n  justify-content: end;\\r\\n  align-items: center;\\r\\n  padding-right: 16px;\\r\\n  font-weight: 900;\\r\\n  color: darkred;\\r\\n  margin-block-start: 0;\\r\\n  margin-block-end: 0;\\r\\n}\\r\\n\\r\\n.meal-img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.meal-img:hover {\\r\\n  transform: scale(1.2);\\r\\n}\\r\\n\\r\\n.likes-display {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  margin: 8px 16px 0;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.meal-recipe {\\r\\n  text-align: justify;\\r\\n  margin: 16px;\\r\\n  line-height: 1.5;\\r\\n  height: 3em;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.icon-wrapper {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.icon-wrapper:hover {\\r\\n  color: red;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  display: flex;\\r\\n  text-align: center;\\r\\n  margin: auto;\\r\\n  padding: 10px 36px;\\r\\n  margin-bottom: 16px;\\r\\n  border-radius: 7px;\\r\\n  border: none;\\r\\n  font-weight: 600;\\r\\n  text-transform: uppercase;\\r\\n  color: rgb(61, 45, 23);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  text-align: center;\\r\\n  padding: 16px;\\r\\n}\\r\\n\\r\\n#errorContainer {\\r\\n  display: flex;\\r\\n  font-size: 2rem;\\r\\n  opacity: 1;\\r\\n  transition: opacity 10s;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n/* Popup window */\\r\\n.modal {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  background-color: rgb(0, 0, 0);\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  background-color: #fefefe;\\r\\n  margin: 15% auto;\\r\\n  padding: 20px;\\r\\n  border: 1px solid #888;\\r\\n  width: 50%;\\r\\n  border-radius: 17px;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  color: #aaa;\\r\\n  float: right;\\r\\n  font-size: 28px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.close:hover,\\r\\n.close:focus {\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* Popup styles */\\r\\n#popMealCard {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#meal-title {\\r\\n  font-size: 2.3rem;\\r\\n  margin-top: 4rem;\\r\\n}\\r\\n\\r\\n#popup-meal-recipe {\\r\\n  text-align: justify;\\r\\n  padding: 0 32px 64px;\\r\\n  line-height: 1.8;\\r\\n}\\r\\n\\r\\n#video-link {\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.allComments {\\r\\n  margin-top: 48px;\\r\\n}\\r\\n\\r\\n.formHeader {\\r\\n  font-size: 1.8rem;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n#username {\\r\\n  height: 1.5rem;\\r\\n  border-radius: 3px;\\r\\n  display: block;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  border-radius: 7px;\\r\\n  margin-top: 16px;\\r\\n}\\r\\n\\r\\n.hamburger {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 768px) {\\r\\n  body {\\r\\n    background-color: brown;\\r\\n  }\\r\\n\\r\\n  .content {\\r\\n    margin: 0 5%;\\r\\n  }\\r\\n\\r\\n  .mealsHolder {\\r\\n    grid-template-columns: repeat(2, 1fr);\\r\\n  }\\r\\n\\r\\n  .modal-content {\\r\\n    width: 85%;\\r\\n  }\\r\\n\\r\\n  .nav-list {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  /* Hamburger */\\r\\n  .mobile-container {\\r\\n    max-width: 480px;\\r\\n    margin: auto;\\r\\n    background-color: #555;\\r\\n    height: 500px;\\r\\n    color: white;\\r\\n    border-radius: 10px;\\r\\n  }\\r\\n\\r\\n  .hamburger {\\r\\n    display: block;\\r\\n    overflow: hidden;\\r\\n    background-color: #333;\\r\\n    position: relative;\\r\\n  }\\r\\n\\r\\n  .hamburger #myLinks {\\r\\n    display: none;\\r\\n  }\\r\\n\\r\\n  .hamburger a {\\r\\n    color: white;\\r\\n    padding: 14px 16px;\\r\\n    text-decoration: none;\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n  .hamburger input {\\r\\n    color: red;\\r\\n    padding: 14px 16px;\\r\\n    margin: 16px;\\r\\n    display: block;\\r\\n  }\\r\\n\\r\\n  .hamburger a.icon {\\r\\n    background: black;\\r\\n    display: block;\\r\\n    position: absolute;\\r\\n    right: 0;\\r\\n    top: 0;\\r\\n  }\\r\\n\\r\\n  .hamburger a:hover {\\r\\n    background-color: #ddd;\\r\\n    color: black;\\r\\n  }\\r\\n\\r\\n  .active {\\r\\n    background-color: black;\\r\\n    color: white;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media screen and (max-width: 425px) {\\r\\n  body {\\r\\n    background-color: darkolivegreen;\\r\\n  }\\r\\n\\r\\n  .content {\\r\\n    margin: 0 5%;\\r\\n  }\\r\\n\\r\\n  .mealsHolder {\\r\\n    grid-template-columns: repeat(1, 1fr);\\r\\n    padding: 10px;\\r\\n  }\\r\\n\\r\\n  .modal-content {\\r\\n    width: auto;\\r\\n  }\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://js-capstone/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://js-capstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/display.js */ \"./src/module/display.js\");\n\r\n\r\n\r\n(0,_module_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\ndocument.getElementsByClassName('icon')[0].addEventListener('click', () => {\r\n  const mobileLinks = document.getElementById('myLinks');\r\n  if (mobileLinks.style.display === 'block') {\r\n    mobileLinks.style.display = 'none';\r\n  } else {\r\n    mobileLinks.style.display = 'block';\r\n  }\r\n});\n\n//# sourceURL=webpack://js-capstone/./src/index.js?");

/***/ }),

/***/ "./src/module/comment.js":
/*!*******************************!*\
  !*** ./src/module/comment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./counter.js */ \"./src/module/counter.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_counter_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.js */ \"./src/module/error.js\");\n\r\n\r\n\r\nconst makeComment = async (username, userComment, id) => {\r\n  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/comments/';\r\n  try {\r\n    username = username.value;\r\n    userComment = userComment.value;\r\n    if (username !== '' && userComment !== '') {\r\n      const newComment = {\r\n        item_id: id,\r\n        username,\r\n        comment: userComment,\r\n      };\r\n\r\n      await fetch(baseUrl, {\r\n        method: 'POST',\r\n        headers: {\r\n          'Content-type': 'application/json',\r\n        },\r\n        body: JSON.stringify(newComment),\r\n      });\r\n    }\r\n    document.getElementById('username').value = '';\r\n    document.getElementById('userComment').value = '';\r\n  } catch (err) {\r\n    (0,_error_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(err.message);\r\n  }\r\n};\r\n\r\nconst showAllComments = async (mealId) => {\r\n  const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/comments?item_id=${mealId}`;\r\n  let data;\r\n\r\n  try {\r\n    const request = await fetch(baseUrl);\r\n    const response = await request.json();\r\n    data = await response;\r\n    if (data.error.message === '\"item_id\" not found.') {\r\n      data = 'No comment found.';\r\n    }\r\n  } catch (err) {\r\n    (0,_error_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(err.message);\r\n  }\r\n  return data;\r\n};\r\n\r\nconst commentPopUp = async (meal) => {\r\n  const mealCard = document.createElement('div');\r\n  const mealImg = document.createElement('img');\r\n  const mealTitle = document.createElement('h3');\r\n  const mealRecipe = document.createElement('div');\r\n  const mealVideoLink = document.createElement('a');\r\n  const form = document.createElement('form');\r\n  const name = document.createElement('input');\r\n  const comment = document.createElement('textarea');\r\n  const linebreak = document.createElement('br');\r\n  const mealId = meal.idMeal;\r\n  const allComments = document.createElement('ul');\r\n  const commentButton = document.createElement('button');\r\n  const modal = document.getElementById('myModal');\r\n  const modalContent = document.getElementById('modal-content');\r\n  const formHeader = document.createElement('h3');\r\n  const commentHeader = document.createElement('h3');\r\n\r\n  mealCard.className = 'mealCard';\r\n  mealCard.id = 'popMealCard';\r\n  allComments.className = 'allComments';\r\n\r\n  mealImg.setAttribute('src', meal.strMealThumb);\r\n  mealImg.setAttribute('alt', meal.strMeal);\r\n  mealImg.className = 'meal-img';\r\n\r\n  mealTitle.textContent = meal.strMeal;\r\n  mealTitle.className = 'meal-title';\r\n  mealTitle.id = 'meal-title';\r\n  mealVideoLink.id = 'video-link';\r\n\r\n  mealRecipe.innerHTML = meal.strInstructions;\r\n  mealRecipe.className = 'recipe';\r\n  mealRecipe.id = 'popup-meal-recipe';\r\n\r\n  mealVideoLink.setAttribute('href', meal.strYoutube);\r\n  mealVideoLink.textContent = 'Youtube Video';\r\n\r\n  commentButton.textContent = 'Comments';\r\n  commentButton.className = 'comment';\r\n\r\n  form.setAttribute('method', 'post');\r\n  form.id = 'popup-form';\r\n  name.setAttribute('type', 'text');\r\n  name.id = 'username';\r\n  name.setAttribute('placeholder', 'Your name');\r\n\r\n  comment.setAttribute('name', 'comment');\r\n  comment.setAttribute('rows', '10');\r\n  comment.setAttribute('cols', '60');\r\n  comment.setAttribute('placeholder', 'Your Comment...');\r\n  comment.id = 'userComment';\r\n\r\n  formHeader.innerText = 'Add a comment';\r\n  form.className = 'comment-form';\r\n  formHeader.className = 'formHeader';\r\n  form.append(name, linebreak, comment, linebreak);\r\n\r\n  showAllComments(mealId).then((data) => {\r\n    if (data === 'No comment found.') {\r\n      commentHeader.innerText = 'Comments (0)';\r\n      allComments.innerText = `No comments yet!\r\n      Add comments`;\r\n    } else {\r\n      commentHeader.innerText = `Comments (${_counter_js__WEBPACK_IMPORTED_MODULE_0___default()(data)})`;\r\n      data.forEach((comm) => {\r\n        const li = document.createElement('li');\r\n        li.style.listStyle = 'none';\r\n        li.style.margin = '0 32px';\r\n        li.style.color = 'darkbrown';\r\n        li.append(`${comm.creation_date} ${comm.username} ${comm.comment}`);\r\n        allComments.append(li);\r\n      });\r\n    }\r\n  });\r\n\r\n  commentButton.addEventListener('click', () => {\r\n    while (allComments.firstChild) {\r\n      allComments.removeChild(allComments.lastChild);\r\n    }\r\n    makeComment(name, comment, mealId).then(() => {\r\n      showAllComments(mealId).then((data) => {\r\n        commentHeader.innerText = `Comments (${_counter_js__WEBPACK_IMPORTED_MODULE_0___default()(data)})`;\r\n        data.forEach((comm) => {\r\n          const li = document.createElement('li');\r\n          li.style.listStyle = 'none';\r\n          li.style.margin = '0 32px';\r\n          li.style.color = 'darkbrown';\r\n          li.append(`${comm.creation_date} ${comm.username} ${comm.comment}`);\r\n          allComments.append(li);\r\n        });\r\n      });\r\n    });\r\n  });\r\n\r\n  mealCard.append(\r\n    mealImg,\r\n    mealTitle,\r\n    mealRecipe,\r\n    mealVideoLink,\r\n    commentHeader,\r\n    allComments,\r\n    formHeader,\r\n    form,\r\n    commentButton,\r\n  );\r\n\r\n  modalContent.append(mealCard);\r\n\r\n  modal.style.display = 'block';\r\n\r\n  document.getElementsByClassName('close')[0].addEventListener('click', () => {\r\n    modal.style.display = 'none';\r\n    modalContent.removeChild(mealCard);\r\n  });\r\n\r\n  window.onclick = function (event) {\r\n    if (event.target === modal) {\r\n      modal.style.display = 'none';\r\n      modalContent.removeChild(mealCard);\r\n    }\r\n  };\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentPopUp);\n\n//# sourceURL=webpack://js-capstone/./src/module/comment.js?");

/***/ }),

/***/ "./src/module/counter.js":
/*!*******************************!*\
  !*** ./src/module/counter.js ***!
  \*******************************/
/***/ ((module) => {

eval("const itemCount = (list) => list.length;\r\n\r\nmodule.exports = itemCount;\n\n//# sourceURL=webpack://js-capstone/./src/module/counter.js?");

/***/ }),

/***/ "./src/module/display.js":
/*!*******************************!*\
  !*** ./src/module/display.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.js */ \"./src/module/error.js\");\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.js */ \"./src/module/comment.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter.js */ \"./src/module/counter.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_counter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ \"./src/module/likes.js\");\n\r\n\r\n\r\n\r\n\r\nconst baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';\r\nconst mealsHolder = document.getElementById('mealsHolder');\r\nmealsHolder.className = 'mealsHolder';\r\n\r\nconst displayMeals = (list) => {\r\n  document.querySelectorAll('.recipeCount').forEach((menuCount) => {\r\n    menuCount.innerHTML = _counter_js__WEBPACK_IMPORTED_MODULE_2___default()(list);\r\n  });\r\n\r\n  list.forEach((meal) => {\r\n    const mealCard = document.createElement('div');\r\n    const mealImg = document.createElement('img');\r\n    const mealTitle = document.createElement('h3');\r\n    const mealRecipe = document.createElement('p');\r\n    const mealVideoLink = document.createElement('a');\r\n    const commentButton = document.createElement('button');\r\n    const mealLikes = document.createElement('p');\r\n    const h3Wrapper = document.createElement('div');\r\n    const mealLink = document.createElement('a');\r\n    const recipe = meal.strInstructions;\r\n\r\n    mealImg.setAttribute('src', meal.strMealThumb);\r\n    mealImg.setAttribute('alt', meal.strMeal);\r\n    mealVideoLink.setAttribute('href', meal.strYoutube);\r\n\r\n    mealImg.className = 'meal-img';\r\n    mealLikes.className = 'meal-likes';\r\n    h3Wrapper.className = 'likes-display';\r\n    mealLink.className = 'icon-wrapper';\r\n    mealCard.className = 'mealCard';\r\n    mealTitle.className = 'meal-title';\r\n    mealRecipe.className = 'meal-recipe';\r\n    commentButton.className = 'comment';\r\n\r\n    mealTitle.textContent = `${meal.strMeal.slice(0, 15)} ...`;\r\n    mealRecipe.textContent = recipe;\r\n    mealVideoLink.textContent = 'Youtube Video';\r\n    commentButton.textContent = 'Comments';\r\n    mealLink.innerHTML = '<i class=\"fas fa-heart\"></i>';\r\n\r\n    commentButton.addEventListener('click', () => (0,_comment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meal));\r\n    (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.displayLikes)(meal).then((data) => { mealLikes.innerHTML = data; });\r\n    mealLink.addEventListener('click', () => {\r\n      (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.sendLikes)(meal).then(() => {\r\n        (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.displayLikes)(meal).then((data) => { mealLikes.innerHTML = data; });\r\n      });\r\n    });\r\n\r\n    h3Wrapper.append(mealTitle, mealLink);\r\n    mealCard.append(mealImg, h3Wrapper, mealLikes, mealRecipe, commentButton);\r\n    mealsHolder.appendChild(mealCard);\r\n  });\r\n};\r\n\r\nconst fetchMeals = async () => {\r\n  try {\r\n    const request = await fetch(baseUrl);\r\n    if (!request.ok) throw new Error('Something went wrong. Try again');\r\n    const response = await request.json();\r\n    displayMeals(response.meals);\r\n  } catch (err) { (0,_error_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(err.message); }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMeals);\n\n//# sourceURL=webpack://js-capstone/./src/module/display.js?");

/***/ }),

/***/ "./src/module/error.js":
/*!*****************************!*\
  !*** ./src/module/error.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst errorMsg = document.getElementById('errorContainer');\r\n\r\nconst renderError = (msg) => {\r\n  errorMsg.insertAdjacentText('beforeend', msg);\r\n  errorMsg.style.opacity = 0;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderError);\n\n//# sourceURL=webpack://js-capstone/./src/module/error.js?");

/***/ }),

/***/ "./src/module/likes.js":
/*!*****************************!*\
  !*** ./src/module/likes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendLikes\": () => (/* binding */ sendLikes),\n/* harmony export */   \"displayLikes\": () => (/* binding */ displayLikes)\n/* harmony export */ });\n/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.js */ \"./src/module/error.js\");\n\r\n\r\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/likes/';\r\n\r\nconst sendLikes = async (meal) => {\r\n  try {\r\n    await fetch(baseUrl, {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-type': 'application/json',\r\n      },\r\n      body: JSON.stringify({ item_id: meal.idMeal }),\r\n    });\r\n  } catch (err) {\r\n    (0,_error_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(err.message);\r\n  }\r\n};\r\n\r\nconst displayLikes = async (meal) => {\r\n  let like = '0 like(s)';\r\n  try {\r\n    const res = await fetch(baseUrl);\r\n    const data = await res.json();\r\n    data.forEach((eachMeal) => {\r\n      if (eachMeal.item_id === meal.idMeal) {\r\n        like = (`${eachMeal.likes} like(s)`);\r\n      }\r\n    });\r\n  } catch (err) {\r\n    (0,_error_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(err.message);\r\n  }\r\n  return like;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://js-capstone/./src/module/likes.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;