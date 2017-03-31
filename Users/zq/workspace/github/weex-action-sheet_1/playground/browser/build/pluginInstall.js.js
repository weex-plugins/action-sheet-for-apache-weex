// { "framework": "Vue" }

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Weex.install(__webpack_require__(1));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _actionSheet = __webpack_require__(2);

	var _actionSheet2 = _interopRequireDefault(_actionSheet);

	var _actionSheet3 = __webpack_require__(6);

	var _actionSheet4 = _interopRequireDefault(_actionSheet3);

	var _meta = __webpack_require__(11);

	var _meta2 = _interopRequireDefault(_meta);

	var _vendor = __webpack_require__(12);

	var _vendor2 = _interopRequireDefault(_vendor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// weex-actionSheet-web
	var actionSheet = {
	  create: function create(options, callbackID) {
	    var defaultOPtions = {
	      title: '提示',
	      message: '',
	      items: [],
	      callback: function callback() {},
	      hasCancel: true
	    };

	    var opts = Object.assign({}, defaultOPtions, options);
	    if (opts.items.length > 1) {
	      opts.hasCancel = _vendor2.default.findCancel(options.items);
	      opts.items = _vendor2.default.filterData(options.items);
	    }
	    if (typeof callbackID === 'function') {
	      var self = this;
	      opts.callback = function (res) {
	        self.sender.performCallback(callbackID, res);
	      };
	    }
	    var ActionSheet = null;
	    if (window.Vue) {
	      ActionSheet = Vue.extend(_actionSheet2.default);
	    } else {
	      ActionSheet = _actionSheet4.default;
	    }
	    var vueActionSheetInstance = new ActionSheet({
	      el: document.createElement('div'),
	      data: function data() {
	        return opts;
	      }
	    });
	    document.body.appendChild(vueActionSheetInstance.$el);
	  }
	};

	if (window.Vue) {
	  weex.registerModule('actionSheet', actionSheet);
	}

	function init(weex) {
	  weex.registerApiModule('actionSheet', actionSheet, _meta2.default);
	}

	module.exports = {
	  init: init
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(3)
	)

	/* script */
	__vue_exports__ = __webpack_require__(4)

	/* template */
	var __vue_template__ = __webpack_require__(5)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "/Users/zq/workspace/github/weex-action-sheet_1/js/src/vue/action-sheet.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-b6072292"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = {
	  "as-container": {
	    "flex": 1,
	    "position": "fixed",
	    "left": 0,
	    "right": 0,
	    "top": 0,
	    "bottom": 0,
	    "backgroundColor": "rgba(0,0,0,0.5)"
	  },
	  "as-dialog": {
	    "position": "absolute",
	    "left": 10,
	    "right": 10,
	    "bottom": 10,
	    "padding": 20
	  },
	  "as-hd": {
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "borderTopLeftRadius": 15,
	    "borderTopRightRadius": 15
	  },
	  "as-title": {
	    "fontSize": 26,
	    "marginBottom": 15
	  },
	  "as-message": {
	    "fontSize": 24
	  },
	  "as-btn": {
	    "fontSize": 30,
	    "backgroundColor": "#ffffff",
	    "borderTop": "1px solid #ddd"
	  },
	  "as-btn-text": {
	    "flex": 1,
	    "textAlign": "center",
	    "color": "#1ba1e2"
	  },
	  "as-btn-last": {
	    "borderBottomRightRadius": 15,
	    "borderBottomLeftRadius": 15
	  },
	  "as-text-warn": {
	    "color": "#FF0000"
	  },
	  "as-cancel": {
	    "marginTop": 30,
	    "borderRadius": 15
	  }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	module.exports = {
	  data: function data() {
	    return {
	      message: 'your message',
	      title: 'title'
	    };
	  },

	  methods: {
	    cancel: function cancel() {
	      var el = document.querySelector('.as-container');
	      if (el) {
	        el.remove();
	      }
	    },
	    ok: function ok(index) {
	      this.callback({
	        result: 'success',
	        data: {
	          message: this.message,
	          index: index
	        }
	      });
	      this.cancel();
	    }
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["as-container"]
	  }, [_c('div', {
	    staticClass: ["as-dialog"]
	  }, [_c('div', {
	    staticClass: ["as-hd"]
	  }, [_c('div', {
	    staticClass: ["as-title"]
	  }, [_vm._v(_vm._s(_vm.title))]), _c('div', {
	    staticClass: ["as-message"]
	  }, [_vm._v(_vm._s(_vm.message))])]), _vm._l((_vm.items), function(item, index) {
	    return _c('div', {
	      staticClass: ["as-btn"],
	      class: {
	        'as-btn-last': index == _vm.items.length - 1
	      },
	      on: {
	        "click": function($event) {
	          _vm.ok(index)
	        }
	      }
	    }, [_c('text', {
	      staticClass: ["as-btn-text"],
	      class: {
	        'as-text-warn': item.type == 2
	      }
	    }, [_vm._v(_vm._s(item.message))])])
	  }), (_vm.hasCancel) ? _c('div', {
	    staticClass: ["as-btn", "as-cancel"],
	    on: {
	      "click": _vm.cancel
	    }
	  }, [_c('text', {
	    staticClass: ["as-btn-text"]
	  }, [_vm._v("取消")])]) : _vm._e()], 2)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var GLOBAL_CLASS_PREFIX = 'as-';
	var TYPE_WARNING = 2;

	__webpack_require__(7);

	var ActionSheet = function () {
	  function ActionSheet(opts) {
	    _classCallCheck(this, ActionSheet);

	    var options = opts.data();
	    this.clickHandle = options.callback;
	    var container = document.createElement('div');
	    container.className = 'as-container';
	    var dialog = this.createEle('dialog');
	    this.createTitle(options.title, options.message, dialog);
	    this.createList(options.items, dialog);
	    if (options.hasCancel) {
	      this.createCancelButton(dialog, options.hasCancel);
	    }
	    container.appendChild(dialog);
	    this.$el = container;
	  }

	  _createClass(ActionSheet, [{
	    key: 'createTitle',
	    value: function createTitle(title, message, container) {
	      var hd = this.createEle('hd');
	      hd.appendChild(this.createEle('title', title));
	      hd.appendChild(this.createEle('message', message));
	      container.appendChild(hd);
	    }
	  }, {
	    key: 'createEle',
	    value: function createEle(className, text) {
	      var el = document.createElement('div');
	      el.className = className ? GLOBAL_CLASS_PREFIX + className : '';
	      if (text) {
	        el.appendChild(document.createTextNode(text));
	      }
	      return el;
	    }
	  }, {
	    key: 'createList',
	    value: function createList(data, container) {
	      var _this = this;

	      data.forEach(function (item, index) {
	        var btn = _this.createEle('btn');
	        if (index === data.length - 1) {
	          btn.classList.add(GLOBAL_CLASS_PREFIX + 'btn-last');
	        }
	        var btnText = document.createElement('p');
	        btnText.className = GLOBAL_CLASS_PREFIX + 'btn-text';
	        btnText.appendChild(document.createTextNode(item.message));
	        if (item.type === TYPE_WARNING) {
	          btnText.classList.add(GLOBAL_CLASS_PREFIX + 'text-warn');
	        }
	        btn.appendChild(btnText);
	        _this.addEvent(btn, index, item.message);
	        container.appendChild(btn);
	      });
	    }
	  }, {
	    key: 'createCancelButton',
	    value: function createCancelButton(container, text) {
	      var _this2 = this;

	      var btn = this.createEle('btn');
	      btn.classList.add(GLOBAL_CLASS_PREFIX + 'cancel');
	      var btnText = document.createElement('p');
	      btnText.className = GLOBAL_CLASS_PREFIX + 'btn-text';
	      btnText.appendChild(document.createTextNode(text));
	      btn.appendChild(btnText);
	      btn.addEventListener('click', function () {
	        _this2.cancel();
	      }, false);
	      container.appendChild(btn);
	    }
	  }, {
	    key: 'addEvent',
	    value: function addEvent(btn, index, msg) {
	      var _this3 = this;

	      btn.addEventListener('click', function () {
	        console.log(index);
	        _this3.clickHandle({
	          result: 'success',
	          data: {
	            message: msg,
	            index: index
	          }
	        });
	        _this3.cancel();
	      }, false);
	    }
	  }, {
	    key: 'cancel',
	    value: function cancel() {
	      var el = document.querySelector('.as-container');
	      if (el) {
	        el.remove();
	      }
	    }
	  }]);

	  return ActionSheet;
	}();

	module.exports = ActionSheet;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(8);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(10)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./style.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./style.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(9)();
	// imports


	// module
	exports.push([module.id, ".as-container{\n    flex:1;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,.5);  \n  }\n  .as-dialog{\n    position: absolute;\n    left: 10px;\n    right: 10px;\n    bottom: 10px;\n    padding: 20px;\n    \n  }\n  .as-hd{\n    padding: 20px 0;\n    background-color: #fff;\n    align-items: center;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n    text-align: center;\n  }\n  .as-title{\n    font-size: 26px;\n    margin-bottom: 15px;\n    \n  }\n  .as-message{\n    font-size: 24px;\n  }\n  .as-btn{\n    font-size: 30px;\n    padding: 30px 0;\n    background-color: #fff;\n    border-top: 1px solid #ddd;\n    \n  }\n  .as-btn-text{\n    flex:1;\n    text-align: center;\n    color: #1ba1e2;\n  }\n  .as-btn-last{\n    border-bottom-right-radius: 15px;\n    border-bottom-left-radius: 15px;\n  }\n  .as-text-warn{\n    color: red;\n  }\n  .as-cancel{\n    margin-top: 30px;\n    border-radius: 15px;\n  }", ""]);

	// exports


/***/ },
/* 9 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  actionSheet: [{
	    name: 'create',
	    args: ['object', 'string']
	  }]
	};

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var CANCEL_TYPE = 1;

	exports.default = {
	  findCancel: function findCancel(arr) {
	    var flag = false;
	    for (var i = 0; i < arr.length; i++) {
	      if (arr[i].type === CANCEL_TYPE) {
	        flag = arr[i]['message'];
	      }
	    }
	    return flag;
	  },
	  filterData: function filterData(arr) {
	    var data = [];
	    arr.forEach(function (item) {
	      if (item.type !== CANCEL_TYPE) {
	        data.push(item);
	      }
	    });
	    return data;
	  }
	};

/***/ }
/******/ ]);