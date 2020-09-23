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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"#app {\\r\\n    position: relative;\\r\\n}\\r\\n\\r\\n.content {\\r\\n    position: absolute;\\r\\n    top: 0;\\r\\n    right: 0;\\r\\n    left: 200px;\\r\\n}\\r\\n\\r\\n.sidebar {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    left: 0;\\r\\n    width: 200px;\\r\\n    z-index: 100;\\r\\n    padding: 10px;\\r\\n    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\\r\\n    overflow-y: auto;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/image.png":
/*!******************************!*\
  !*** ./src/assets/image.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"a125f931cc80f36ba278746466b69be9.png\");\n\n//# sourceURL=webpack:///./src/assets/image.png?");

/***/ }),

/***/ "./src/classes/blocks.js":
/*!*******************************!*\
  !*** ./src/classes/blocks.js ***!
  \*******************************/
/*! exports provided: TitleBlock, ImageBlock, TextBlock, TextColumnsBlock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TitleBlock\", function() { return TitleBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ImageBlock\", function() { return ImageBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextBlock\", function() { return TextBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TextColumnsBlock\", function() { return TextColumnsBlock; });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n\r\n\r\nclass Block {\r\n    constructor(value, options) {\r\n        this.value = value,\r\n        this.options = options\r\n    }\r\n\r\n    toHTML() {\r\n        throw new Error('Метод toHTML должен быть реализован!')\r\n    }\r\n}\r\n\r\nclass TitleBlock extends Block {\r\n    constructor(value, options) {\r\n        super(value, options)\r\n    }\r\n\r\n    toHTML() {\r\n        const {tag = 'h2', styles} = this.options\r\n        \r\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"row\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"col\"])(`<${tag}>${this.value}</${tag}>`), styles)\r\n    }\r\n}\r\n\r\nclass ImageBlock extends Block {\r\n    constructor(value, options) {\r\n        super(value, options)\r\n    }\r\n\r\n    toHTML() {\r\n        const {alt, styles, imageStyles} = this.options\r\n        const html = `<img src=\"${this.value}\" alt=\"${alt}\" style=\"${imageStyles}\" />`\r\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"row\"])(html, styles)\r\n    }\r\n}\r\n\r\nclass TextBlock extends Block {\r\n    constructor(value, options) {\r\n        super(value, options)\r\n    }\r\n\r\n    toHTML() {\r\n        return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"row\"])(Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"col\"])(`<p>${this.value}</p>`), this.options.styles)\r\n    }\r\n}\r\n\r\nclass TextColumnsBlock extends Block {\r\n    constructor(value, options) {\r\n        super(value, options)\r\n    }\r\n\r\n    toHTML() {\r\n        const html = this.value\r\n        .map((item) => Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"col\"])(`<p>${item}</p>`))\r\n        .join(\"\");\r\n            return Object(_utils__WEBPACK_IMPORTED_MODULE_0__[\"row\"])(html, this.options.styles)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/classes/blocks.js?");

/***/ }),

/***/ "./src/classes/site.js":
/*!*****************************!*\
  !*** ./src/classes/site.js ***!
  \*****************************/
/*! exports provided: Site */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Site\", function() { return Site; });\nclass Site {\r\n    constructor(selector) { \r\n        this.$el = document.querySelector(selector)\r\n    }\r\n\r\n    render(model) {\r\n        this.$el.innerHTML = ''\r\n        model.forEach(block => {\r\n            this.$el.insertAdjacentHTML('beforeend', block.toHTML())\r\n        })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/classes/site.js?");

/***/ }),

/***/ "./src/classes/sitebar.js":
/*!********************************!*\
  !*** ./src/classes/sitebar.js ***!
  \********************************/
/*! exports provided: Sitebar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Sitebar\", function() { return Sitebar; });\n/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ \"./src/classes/blocks.js\");\n\r\n\r\nclass Sitebar {\r\n    constructor(selector, update) {\r\n        this.$el = document.querySelector(selector)\r\n        this.update = update\r\n\r\n        this.init()\r\n    }\r\n\r\n    init() {\r\n        this.$el.addEventListener('submit', this.addBlock.bind(this))\r\n        this.$el.innerHTML = this.template\r\n    }\r\n\r\n    get template() {\r\n        return [\r\n            block('Текст'),\r\n            block('Заголовок')\r\n        ].join('')\r\n    }\r\n\r\n    addBlock(event) {\r\n        event.preventDefault()\r\n    \r\n        const type = event.target.name\r\n        const value = event.target.value.value\r\n        const styles = event.target.styles.value \r\n\r\n        const Constructor = type === 'text' ? _blocks__WEBPACK_IMPORTED_MODULE_0__[\"TextBlock\"] : _blocks__WEBPACK_IMPORTED_MODULE_0__[\"TitleBlock\"]\r\n\r\n        const newBlock = new Constructor(value, {styles})\r\n        this.update(newBlock)\r\n    }\r\n}\r\n\r\nfunction block(type) {\r\n    return `\r\n        <form name=\"${type}\">\r\n            <h5>${type}</h5>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control form-control-sm\" style=\"margin: 0 auto\" name=\"value\" placeholder=\"Значение\">\r\n            </div>\r\n            <div class=\"form-group\">\r\n                <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"css\">\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary btn-sm\">Добавить</button>\r\n        </form>\r\n        <hr />\r\n    `\r\n}\n\n//# sourceURL=webpack:///./src/classes/sitebar.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_main_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ \"./src/model.js\");\n/* harmony import */ var _classes_site__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/site */ \"./src/classes/site.js\");\n/* harmony import */ var _classes_sitebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/sitebar */ \"./src/classes/sitebar.js\");\n\r\n\r\n\r\n\r\n\r\nconst site = new _classes_site__WEBPACK_IMPORTED_MODULE_2__[\"Site\"]('#site')\r\n\r\nconst updateCallback = newBlock => {\r\n  _model__WEBPACK_IMPORTED_MODULE_1__[\"model\"].push(newBlock)\r\n  site.render(_model__WEBPACK_IMPORTED_MODULE_1__[\"model\"])\r\n}\r\n\r\nnew _classes_sitebar__WEBPACK_IMPORTED_MODULE_3__[\"Sitebar\"]('#panel', updateCallback)\r\n\r\nsite.render(_model__WEBPACK_IMPORTED_MODULE_1__[\"model\"])\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"model\", function() { return model; });\n/* harmony import */ var _assets_image_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/image.png */ \"./src/assets/image.png\");\n/* harmony import */ var _classes_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/blocks */ \"./src/classes/blocks.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\n\r\n\r\n\r\nconst text = `\r\n\r\n`\r\n\r\nconst model = [\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_1__[\"TitleBlock\"](' Конструктор сайов на JS ', {\r\n        tag: 'h2',\r\n        styles: Object(_utils__WEBPACK_IMPORTED_MODULE_2__[\"css\"])({\r\n            background: 'linear-gradient(to left, #f2994a, #f2c94c)',\r\n            color: '#fff',\r\n            padding: '1.5rem',\r\n            'text-align': 'center'\r\n        })\r\n    }),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_1__[\"ImageBlock\"](_assets_image_png__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n        styles: 'padding: 2rem 0; display: flex; justify-content: center;',\r\n        alt: 'my image',\r\n        imageStyles: 'width: 500px; hight: auto;'\r\n    }),\r\n    new _classes_blocks__WEBPACK_IMPORTED_MODULE_1__[\"TextColumnsBlock\"]([\r\n        'Являясь всего лишь частью общей картины, сторонники тоталитаризма в науке указаны как претенденты на роль ключевых факторов.',\r\n        'Равным образом, сложившаяся структура организации однозначно фиксирует необходимость как самодостаточных, так и внешне зависимых концептуальных решений.',\r\n        'Как уже неоднократно упомянуто, представители современных социальных резервов формируют глобальную экономическую сеть и при этом - призваны к ответу.'\r\n    ], {\r\n        styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold; text-align: center'\r\n    }),\r\n    \r\n]\n\n//# sourceURL=webpack:///./src/model.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/main.css?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: row, col, css */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"row\", function() { return row; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"col\", function() { return col; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"css\", function() { return css; });\nfunction row(content, styles = '') {\r\n  const style = `margin: 0; ${styles}`\r\n  return `<div class=\"row\" style = \"${style}\">${content}</div>`;\r\n}\r\n\r\nfunction col(content) {\r\n  return `<div class=\"col-sm\">\r\n    ${content}\r\n</div>`;\r\n}\r\n\r\nfunction css(styles = {}) {\r\n  const toString = key => `${key}: ${styles[key]}`\r\n  return Object.keys(styles).map(toString).join(';')\r\n}\r\n\n\n//# sourceURL=webpack:///./src/utils.js?");

/***/ })

/******/ });