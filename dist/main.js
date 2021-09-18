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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  background-color: #f9faff;\\r\\n  font-size: 1.1rem;\\r\\n}\\r\\n\\r\\na,\\r\\n.nav {\\r\\n  text-decoration: none;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.nav:hover {\\r\\n  border-bottom-style: solid;\\r\\n}\\r\\n\\r\\n/* nav & footer */\\r\\n.color-coffee {\\r\\n  color: #f9faff;\\r\\n  background-color: #262626;\\r\\n}\\r\\n\\r\\n.nav-list {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  padding: 24px;\\r\\n  margin-block-start: 0;\\r\\n  margin-block-end: 0;\\r\\n}\\r\\n\\r\\n.content {\\r\\n  margin: 0 15%;\\r\\n}\\r\\n\\r\\n#input {\\r\\n  align-self: center;\\r\\n}\\r\\n\\r\\n.mealsHolder {\\r\\n  display: grid;\\r\\n  grid-template-columns: repeat(3, 1fr);\\r\\n  gap: 20px;\\r\\n  grid-auto-rows: minmax(100px, auto);\\r\\n  background-color: #edeff5;\\r\\n  padding: 30px;\\r\\n}\\r\\n\\r\\n.mealCard {\\r\\n  background-color: rgb(195, 165, 124);\\r\\n  border-radius: 17px;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.mealCard:nth-child(even) {\\r\\n  background-color: rgb(163, 131, 131);\\r\\n}\\r\\n\\r\\n.meal-likes {\\r\\n  display: flex;\\r\\n  justify-content: end;\\r\\n  align-items: center;\\r\\n  padding-right: 16px;\\r\\n  font-weight: 900;\\r\\n  color: darkred;\\r\\n  margin-block-start: 0;\\r\\n  margin-block-end: 0;\\r\\n}\\r\\n\\r\\n.meal-img {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.meal-img:hover {\\r\\n  transform: scale(1.2);\\r\\n}\\r\\n\\r\\n.likes-display {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  margin: 8px 16px 0;\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.meal-recipe {\\r\\n  text-align: justify;\\r\\n  margin: 16px;\\r\\n  line-height: 1.5;\\r\\n  height: 3em;\\r\\n  overflow: hidden;\\r\\n}\\r\\n\\r\\n.icon-wrapper {\\r\\n  color: white;\\r\\n}\\r\\n\\r\\n.icon-wrapper:hover {\\r\\n  color: red;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  display: flex;\\r\\n  text-align: center;\\r\\n  margin: auto;\\r\\n  padding: 10px 36px;\\r\\n  margin-bottom: 16px;\\r\\n  border-radius: 7px;\\r\\n  border: none;\\r\\n  font-weight: 600;\\r\\n  text-transform: uppercase;\\r\\n  color: rgb(61, 45, 23);\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  text-align: center;\\r\\n  padding: 16px;\\r\\n}\\r\\n\\r\\n#errorContainer {\\r\\n  display: flex;\\r\\n  font-size: 2rem;\\r\\n  opacity: 1;\\r\\n  transition: opacity 10s;\\r\\n  z-index: 1;\\r\\n}\\r\\n\\r\\n/* Popup window */\\r\\n.modal {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  left: 0;\\r\\n  top: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  overflow: auto;\\r\\n  background-color: rgb(0, 0, 0);\\r\\n  background-color: rgba(0, 0, 0, 0.4);\\r\\n}\\r\\n\\r\\n.modal-content {\\r\\n  background-color: #fefefe;\\r\\n  margin: 15% auto;\\r\\n  padding: 20px;\\r\\n  border: 1px solid #888;\\r\\n  width: 50%;\\r\\n  border-radius: 17px;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  color: #aaa;\\r\\n  float: right;\\r\\n  font-size: 28px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.close:hover,\\r\\n.close:focus {\\r\\n  color: black;\\r\\n  text-decoration: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n/* Popup styles */\\r\\n#popMealCard {\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\n#meal-title {\\r\\n  font-size: 2.3rem;\\r\\n  margin-top: 4rem;\\r\\n}\\r\\n\\r\\n#popup-meal-recipe {\\r\\n  text-align: justify;\\r\\n  padding: 0 32px 64px;\\r\\n  line-height: 1.8;\\r\\n}\\r\\n\\r\\n#video-link {\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.allComments {\\r\\n  margin-top: 48px;\\r\\n}\\r\\n\\r\\n.formHeader {\\r\\n  font-size: 1.8rem;\\r\\n}\\r\\n\\r\\n.comment-form {\\r\\n  align-items: flex-start;\\r\\n}\\r\\n\\r\\n#username {\\r\\n  height: 1.5rem;\\r\\n  border-radius: 3px;\\r\\n  display: block;\\r\\n  margin-left: auto;\\r\\n  margin-right: auto;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  border-radius: 7px;\\r\\n  margin-top: 16px;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://js-capstone/./src/style.css?./node_modules/css-loader/dist/cjs.js");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _module_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./module/display.js */ \"./src/module/display.js\");\n\n\n\n(0,_module_display_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// // Render page by search result (v2.0)\n// const searchLetter = async(e) => {\n//   fetchMeals();\n//   return e.key;\n// };\n// const input = document\n//   .getElementById('input')\n//   .addEventListener('keyup', searchLetter);\n// // const baseUrl = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`;\n\n// // Add the popup to the enntire card (v2.0)\n// const commentPopUp = (card) => {\n//   card.addEventListener('click', () => {\n//     const popup = open('', 'Popup', 'width=800,height=700');\n//     popup.className = 'popup'; //class stying not working.\n//     popup.document.body.appendChild(card);\n//   });\n// }\n\n\n//# sourceURL=webpack://js-capstone/./src/index.js?");

/***/ }),

/***/ "./src/module/comment.js":
/*!*******************************!*\
  !*** ./src/module/comment.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.js */ \"./src/module/error.js\");\n\n\nconst makeComment = async (username, userComment, id) => {\n  const baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/comments/';\n  try {\n    username = username.value;\n    userComment = userComment.value;\n    if (username !== '' && userComment !== '') {\n      const newComment = {\n        item_id: id,\n        username,\n        comment: userComment,\n      };\n\n      await fetch(baseUrl, {\n        method: 'POST',\n        headers: {\n          'Content-type': 'application/json',\n        },\n        body: JSON.stringify(newComment),\n      });\n    }\n    username = '';\n    userComment = '';\n  } catch (err) {\n    (0,_error_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(err.message);\n  }\n};\n\nconst showAllComments = async (mealId) => {\n  const baseUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/comments?item_id=${mealId}`;\n  let data;\n\n  try {\n    const request = await fetch(baseUrl);\n    const response = await request.json();\n    data = await response;\n  } catch (err) {\n    (0,_error_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(err.message);\n  }\n  return data;\n};\n\nconst commentPopUp = async (meal) => {\n  const mealCard = document.createElement('div');\n  const mealImg = document.createElement('img');\n  const mealTitle = document.createElement('h3');\n  // const mealIgredient = document.createElement('div'); // Add meal ingredient (v2.0)\n  const mealRecipe = document.createElement('div');\n  const mealVideoLink = document.createElement('a');\n  const form = document.createElement('form');\n  const name = document.createElement('input');\n  const comment = document.createElement('textarea');\n  const linebreak = document.createElement('br');\n  const mealId = meal.idMeal;\n  const allComments = document.createElement('ul');\n  const commentButton = document.createElement('button');\n  const modal = document.getElementById('myModal');\n  const modalContent = document.getElementById('modal-content');\n  const formHeader = document.createElement('h3');\n  const commentHeader = document.createElement('h3');\n\n  mealCard.className = 'mealCard';\n  mealCard.id = 'popMealCard';\n  allComments.className = 'allComments';\n\n  mealImg.setAttribute('src', meal.strMealThumb);\n  mealImg.setAttribute('alt', meal.strMeal);\n  mealImg.className = 'meal-img';\n\n  mealTitle.textContent = meal.strMeal;\n  mealTitle.className = 'meal-title';\n  mealTitle.id = 'meal-title';\n  mealVideoLink.id = 'video-link';\n\n  mealRecipe.innerHTML = meal.strInstructions;\n  mealRecipe.className = 'recipe';\n  mealRecipe.id = 'popup-meal-recipe';\n\n  mealVideoLink.setAttribute('href', meal.strYoutube);\n  mealVideoLink.textContent = 'Youtube Video'; // create a popup to play in-app rather that redirect (v2.0)\n\n  commentButton.textContent = 'Comments';\n  commentButton.className = 'comment';\n\n  form.setAttribute('method', 'post');\n  form.id = 'popup-form';\n  name.setAttribute('type', 'text');\n  name.id = 'username';\n  name.setAttribute('placeholder', 'Your name');\n\n  comment.setAttribute('name', 'comment');\n  comment.setAttribute('rows', '10');\n  comment.setAttribute('cols', '60');\n  comment.setAttribute('placeholder', 'Your Comment...');\n\n  formHeader.innerText = 'Add a comment';\n  form.className = 'comment-form';\n  formHeader.className = 'formHeader';\n  form.append(name, linebreak, comment, linebreak);\n\n  showAllComments(mealId).then((data) => {\n    if (data.message === `${mealId} not found.` || data.message === 'item_id\\' not found.') {\n      commentHeader.innerText = 'This Recipe has no comments yet!\\nAdd some comments!';\n    } else {\n      commentHeader.innerText = `Comments (${data.length})`;\n      data.forEach((comm) => {\n        const li = document.createElement('li');\n        li.style.listStyle = 'none';\n        li.style.margin = '0 32px';\n        li.style.color = 'darkbrown';\n        li.append(`${comm.creation_date} ${comm.username} ${comm.comment}`);\n        allComments.append(li);\n      });\n    }\n  });\n\n  commentButton.addEventListener('click', () => {\n    makeComment(name, comment, mealId);\n    showAllComments(mealId).then((data) => {\n      if (data.length === `${mealId} not found.` || data.message === 'item_id\\' not found.') {\n        commentHeader.innerText = 'This Recipe has no comments yet!\\nAdd some comments!';\n      } else {\n        commentHeader.innerText = `Comments (${data.length})`;\n        data.forEach((comm) => {\n          const li = document.createElement('li');\n          li.style.listStyle = 'none';\n          li.style.margin = '0 32px';\n          li.style.color = 'darkbrown';\n          li.append(`${comm.creation_date} ${comm.username} ${comm.comment}`);\n          allComments.append(li);\n        });\n      }\n    });\n  });\n\n  mealCard.append(\n    mealImg,\n    mealTitle,\n    mealRecipe,\n    mealVideoLink,\n    commentHeader,\n    // li,\n    allComments,\n    formHeader,\n    form,\n    commentButton,\n  );\n\n  modalContent.append(mealCard);\n\n  modal.style.display = 'block';\n\n  document.getElementsByClassName('close')[0].addEventListener('click', () => {\n    modal.style.display = 'none';\n    modalContent.removeChild(mealCard);\n  });\n\n  window.onclick = function (event) {\n    if (event.target === modal) {\n      modal.style.display = 'none';\n      modalContent.removeChild(mealCard);\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentPopUp);\n\n//# sourceURL=webpack://js-capstone/./src/module/comment.js?");

/***/ }),

/***/ "./src/module/counter.js":
/*!*******************************!*\
  !*** ./src/module/counter.js ***!
  \*******************************/
/***/ ((module) => {

eval("const recipeCount = (list) => {\n  recipeCount.innerText = `${list.length}`;\n};\n\nmodule.exports = recipeCount;\n\n//# sourceURL=webpack://js-capstone/./src/module/counter.js?");

/***/ }),

/***/ "./src/module/display.js":
/*!*******************************!*\
  !*** ./src/module/display.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.js */ \"./src/module/error.js\");\n/* harmony import */ var _comment_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.js */ \"./src/module/comment.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./counter.js */ \"./src/module/counter.js\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_counter_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ \"./src/module/likes.js\");\n\n\n\n\n\nconst baseUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=e';\nconst mealsHolder = document.getElementById('mealsHolder');\nmealsHolder.className = 'mealsHolder';\n\nconst displayMeals = (list) => {\n  _counter_js__WEBPACK_IMPORTED_MODULE_2___default()(list);\n  list.forEach((meal) => {\n    const mealCard = document.createElement('div');\n    const mealImg = document.createElement('img');\n    const mealTitle = document.createElement('h3');\n    const mealRecipe = document.createElement('p');\n    const mealVideoLink = document.createElement('a');\n    const commentButton = document.createElement('button');\n    const mealLikes = document.createElement('p');\n    const h3Wrapper = document.createElement('div');\n    const mealLink = document.createElement('a');\n    const recipe = meal.strInstructions;\n\n    mealImg.setAttribute('src', meal.strMealThumb);\n    mealImg.setAttribute('alt', meal.strMeal);\n    mealVideoLink.setAttribute('href', meal.strYoutube);\n\n    mealImg.className = 'meal-img';\n    mealLikes.className = 'meal-likes';\n    h3Wrapper.className = 'likes-display';\n    mealLink.className = 'icon-wrapper';\n    mealCard.className = 'mealCard';\n    mealTitle.className = 'meal-title';\n    mealRecipe.className = 'meal-recipe';\n    commentButton.className = 'comment';\n\n    mealTitle.textContent = `${meal.strMeal.slice(0, 15)} ...`;\n    mealRecipe.textContent = recipe;\n    mealVideoLink.textContent = 'Youtube Video'; // create a popup to play in-app rather that redirect (v2.0)\n    commentButton.textContent = 'Comments';\n    mealLink.innerHTML = '<i class=\"fas fa-heart\"></i>';\n\n    commentButton.addEventListener('click', () => (0,_comment_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meal));\n    (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.displayLikes)(meal).then((data) => { mealLikes.innerHTML = data; });\n    mealLink.addEventListener('click', () => {\n      (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.sendLikes)(meal).then(() => {\n        (0,_likes_js__WEBPACK_IMPORTED_MODULE_3__.displayLikes)(meal).then((data) => { mealLikes.innerHTML = data; });\n      });\n    });\n\n    h3Wrapper.append(mealTitle, mealLink);\n    mealCard.append(mealImg, h3Wrapper, mealLikes, mealRecipe, commentButton);\n    mealsHolder.appendChild(mealCard);\n  });\n};\n\nconst fetchMeals = async () => {\n  try {\n    const request = await fetch(baseUrl);\n\n    if (!request.ok) throw new Error('Something went wrong. Try again');\n    const response = await request.json();\n    displayMeals(response.meals);\n  } catch (err) { (0,_error_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(err.message); }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchMeals);\n\n//# sourceURL=webpack://js-capstone/./src/module/display.js?");

/***/ }),

/***/ "./src/module/error.js":
/*!*****************************!*\
  !*** ./src/module/error.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst errorMsg = document.getElementById('errorContainer');\n\nconst renderError = function (msg) {\n  errorMsg.insertAdjacentText('beforeend', msg);\n  errorMsg.style.opacity = 0;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderError);\n\n//# sourceURL=webpack://js-capstone/./src/module/error.js?");

/***/ }),

/***/ "./src/module/likes.js":
/*!*****************************!*\
  !*** ./src/module/likes.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendLikes\": () => (/* binding */ sendLikes),\n/* harmony export */   \"displayLikes\": () => (/* binding */ displayLikes)\n/* harmony export */ });\n/* harmony import */ var _error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.js */ \"./src/module/error.js\");\n\n\nconst baseUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/DG1557loKgI2XXAUI0g2/likes/';\n\nconst sendLikes = async (meal) => {\n  try {\n    await fetch(baseUrl, {\n      method: 'POST',\n      headers: {\n        'Content-type': 'application/json',\n      },\n      body: JSON.stringify({ item_id: meal.idMeal }),\n    });\n  } catch (err) {\n    (0,_error_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(err.message);\n  }\n};\n\nconst displayLikes = async (meal) => {\n  let like = '0 like(s)';\n  try {\n    const res = await fetch(baseUrl);\n    const data = await res.json();\n    data.forEach((eachMeal) => {\n      if (eachMeal.item_id === meal.idMeal) {\n        like = (`${eachMeal.likes} like(s)`);\n      }\n    });\n  } catch (err) {\n    (0,_error_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(err.message);\n  }\n  return like;\n};\n\n\n\n//# sourceURL=webpack://js-capstone/./src/module/likes.js?");

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