webpackHotUpdate(3,{

/***/ "./HOC/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SE_Layout_SE_Layout_js__ = __webpack_require__("./components/SE_Layout/SE_Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Volumes/Dev/motivate-yourself/HOC/Layout.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _default = function _default(Page) {
  var _class, _temp;

  return _temp = _class = function (_Component) {
    _inherits(LayoutHoc, _Component);

    function LayoutHoc() {
      _classCallCheck(this, LayoutHoc);

      return _possibleConstructorReturn(this, (LayoutHoc.__proto__ || Object.getPrototypeOf(LayoutHoc)).apply(this, arguments));
    }

    _createClass(LayoutHoc, [{
      key: "getChildContext",
      value: function getChildContext() {
        return { pathname: this.props.pathname };
      }
    }, {
      key: "render",
      value: function render() {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__components_SE_Layout_SE_Layout_js__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Page, _extends({}, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          }))
        );
      }
    }, {
      key: "__reactstandin__regenerateByEval",
      value: function __reactstandin__regenerateByEval(key, code) {
        this[key] = eval(code);
      }
    }], [{
      key: "getInitialProps",
      value: function getInitialProps(_ref) {
        var pathname = _ref.pathname,
            req = _ref.req;

        return { pathname: req && req.url || pathname };
      }
    }, {
      key: "getInitialProps",
      value: function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
          var pageInitialProps;
          return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  pageInitialProps = {};
                  _context.t0 = Page.getInitialProps;

                  if (!_context.t0) {
                    _context.next = 6;
                    break;
                  }

                  _context.next = 5;
                  return Page.getInitialProps(ctx);

                case 5:
                  pageInitialProps = _context.sent;

                case 6:
                  return _context.abrupt("return", _extends({}, pageInitialProps, {
                    pathname: ctx.req && ctx.req.url || ctx.pathname
                  }));

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function getInitialProps(_x) {
          return _ref2.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return LayoutHoc;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class.childContextTypes = {
    pathname: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
  }, _class.translateNS = Page.translateNS, _temp;
};

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, "default", "/Volumes/Dev/motivate-yourself/HOC/Layout.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/SE_Layout/SE_Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SE_Layout_scss__ = __webpack_require__("./components/SE_Layout/SE_Layout.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SE_Layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SE_Layout_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("./utils/index.js");
var _jsxFileName = '/Volumes/Dev/motivate-yourself/components/SE_Layout/SE_Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





// const cn = cssClassName('SE_Layout')

var SE_Layout = function (_Component) {
  _inherits(SE_Layout, _Component);

  function SE_Layout() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SE_Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SE_Layout.__proto__ || Object.getPrototypeOf(SE_Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SE_Layout, [{
    key: 'render',
    value: function render() {

      //   const {} = this.props
      //   const {} = this.state
      console.log(this.props);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        'layout: SE_Layout',
        this.props.children
      );
    }
  }, {
    key: '__reactstandin__regenerateByEval',
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return SE_Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

SE_Layout.propTypes = {};

SE_Layout.defaultProps = {};

var _default = SE_Layout;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(SE_Layout, 'SE_Layout', '/Volumes/Dev/motivate-yourself/components/SE_Layout/SE_Layout.js');
  reactHotLoader.register(_default, 'default', '/Volumes/Dev/motivate-yourself/components/SE_Layout/SE_Layout.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/camelcase-keys/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var mapObj = __webpack_require__("./node_modules/map-obj/index.js");
var camelCase = __webpack_require__("./node_modules/camelcase-keys/node_modules/camelcase/index.js");

module.exports = function (input, options) {
	options = options || {};
	var exclude = options.exclude || [];
	return mapObj(input, function (key, val) {
		key = exclude.indexOf(key) === -1 ? camelCase(key) : key;
		return [key, val];
	});
};


/***/ }),

/***/ "./node_modules/camelcase-keys/node_modules/camelcase/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function preserveCamelCase(str) {
	var isLastCharLower = false;

	for (var i = 0; i < str.length; i++) {
		var c = str.charAt(i);

		if (isLastCharLower && (/[a-zA-Z]/).test(c) && c.toUpperCase() === c) {
			str = str.substr(0, i) + '-' + str.substr(i);
			isLastCharLower = false;
			i++;
		} else {
			isLastCharLower = (c.toLowerCase() === c);
		}
	}

	return str;
}

module.exports = function () {
	var str = [].map.call(arguments, function (str) {
		return str.trim();
	}).filter(function (str) {
		return str.length;
	}).join('-');

	if (!str.length) {
		return '';
	}

	if (str.length === 1) {
		return str;
	}

	if (!(/[_.\- ]+/).test(str)) {
		if (str === str.toUpperCase()) {
			return str.toLowerCase();
		}

		if (str[0] !== str[0].toLowerCase()) {
			return str[0].toLowerCase() + str.slice(1);
		}

		return str;
	}

	str = preserveCamelCase(str);

	return str
	.replace(/^[_.\- ]+/, '')
	.toLowerCase()
	.replace(/[_.\- ]+(\w|$)/g, function (m, p1) {
		return p1.toUpperCase();
	});
};


/***/ }),

/***/ "./node_modules/catnip/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

function snake(str) {
  return str.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });
}

function getMods(mods) {
  return Object.keys(mods).filter(function (mod) {
    return mods[mod] !== undefined && mods[mod] !== null;
  }).map(function (mod) {
    return snake(mod) + '_' + mods[mod];
  });
}

function getMixes(mixes) {
  return mixes.filter(function (mix) {
    return mix;
  }).map(function (mix) {
    return ' ' + mix;
  }).join('');
}

function getArgs(args) {
  var out = {};
  args.forEach(function (arg) {
    if (typeof arg === 'string') {
      out.element = arg;
      return;
    }
    if (Array.isArray(arg)) {
      out.mixes = getMixes(arg);
      return;
    }
    if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object' && arg !== null) {
      out.mods = getMods(arg);
      return;
    }
  });
  return out;
}

function bem() {
  var block = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

  return function cn() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _getArgs = getArgs(args);

    var _getArgs$element = _getArgs.element;
    var element = _getArgs$element === undefined ? '' : _getArgs$element;
    var _getArgs$mixes = _getArgs.mixes;
    var mixes = _getArgs$mixes === undefined ? [] : _getArgs$mixes;
    var _getArgs$mods = _getArgs.mods;
    var mods = _getArgs$mods === undefined ? [] : _getArgs$mods;

    var namespace = element === '' ? block : block + '__' + element;
    var result = mods.reduce(function (sum, mod) {
      return sum + ' ' + namespace + '_' + mod;
    }, namespace).concat(mixes);
    return result === '' ? null : result;
  };
}

function cssm() {
  var styles = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return function cn() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _getArgs2 = getArgs(args);

    var _getArgs2$element = _getArgs2.element;
    var element = _getArgs2$element === undefined ? 'root' : _getArgs2$element;
    var _getArgs2$mixes = _getArgs2.mixes;
    var mixes = _getArgs2$mixes === undefined ? [] : _getArgs2$mixes;
    var _getArgs2$mods = _getArgs2.mods;
    var mods = _getArgs2$mods === undefined ? [] : _getArgs2$mods;

    var namespace = styles[element] || '';
    var result = mods.reduce(function (sum, mod) {
      var modClassName = element + '_' + mod;
      if (sum === '') {
        return styles[modClassName] || '';
      }
      var modStyle = styles[modClassName] || '';
      return sum + ' ' + modStyle;
    }, namespace).trim().concat(mixes);
    return result === '' ? null : result;
  };
}

module.exports = function catnip(initializer) {
  if ((typeof initializer === 'undefined' ? 'undefined' : _typeof(initializer)) === 'object') {
    return cssm(initializer);
  }
  return bem(initializer);
};

/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
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

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/map-obj/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (obj, cb) {
	var ret = {};
	var keys = Object.keys(obj);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var res = cb(key, obj[key], obj);
		ret[res[0]] = res[1];
	}

	return ret;
};


/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss__ = __webpack_require__("./pages/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("./node_modules/redux/es/redux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__redux_store_store__ = __webpack_require__("./redux-store/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_store_withRedux__ = __webpack_require__("./redux-store/withRedux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_store_ducks_goals__ = __webpack_require__("./redux-store/ducks/goals.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__HOC_Layout_js__ = __webpack_require__("./HOC/Layout.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Volumes/Dev/motivate-yourself/pages/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Index = function (_Component) {
  _inherits(Index, _Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { onClick: function onClick() {
            return _this2.props.addGoal({ id: 1, data: "aa" });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        },
        "path: ",
        this.context.pathname
      );
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    value: function __reactstandin__regenerateByEval(key, code) {
      this[key] = eval(code);
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Index.contextTypes = {
  pathname: __WEBPACK_IMPORTED_MODULE_6_prop_types__["string"]
};


function mapDispatchToProps(dispatch) {
  var actions = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["bindActionCreators"])({ addGoal: __WEBPACK_IMPORTED_MODULE_5__redux_store_ducks_goals__["a" /* addGoal */] }, dispatch);
  return _extends({}, actions);
}

var _default = Object(__WEBPACK_IMPORTED_MODULE_7__HOC_Layout_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_4__redux_store_withRedux__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__redux_store_store__["a" /* initStore */], null, mapDispatchToProps)(Index));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, "Index", "/Volumes/Dev/motivate-yourself/pages/index.js");
  reactHotLoader.register(mapDispatchToProps, "mapDispatchToProps", "/Volumes/Dev/motivate-yourself/pages/index.js");
  reactHotLoader.register(_default, "default", "/Volumes/Dev/motivate-yourself/pages/index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./utils/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* unused harmony export cssClassName */
/* unused harmony export _isContain */
/* unused harmony export simpleSnakeCase */
/* unused harmony export convert */
/* unused harmony export isServer */
/* unused harmony export capitalize */
/* unused harmony export deepValueByString */
/* unused harmony export getArticleLinks */
/* unused harmony export safeDA */
/* unused harmony export rnd */
/* unused harmony export numberFormat */
/* unused harmony export arrayUnique */
/* unused harmony export apiDateFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_catnip__ = __webpack_require__("./node_modules/catnip/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_catnip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_catnip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_camelcase_keys__ = __webpack_require__("./node_modules/camelcase-keys/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_camelcase_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_camelcase_keys__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

//default helpers



function cssDecamelize(string) {
  var newString = string.split('_').filter(function (n) {
    return n !== '';
  }).join('-');
  newString = newString.replace(/([a-z](?=[A-Z]))/g, '$1+');
  return newString.split('+').join('-').toLowerCase();
}

function cssClassName(string) {
  return __WEBPACK_IMPORTED_MODULE_0_catnip___default()(cssDecamelize(string));
}

function _isContain(arr, element) {
  return arr.indexOf(element) > -1;
}
var simpleSnakeCase = function simpleSnakeCase(str) {
  return str.split(/(?=[A-Z])/).join('_').toLowerCase();
};

function toPhone(str) {
  var res = str.replace(/\D/g, '');
  if (res.length > 2) res = res.substr(0, 3) + '-' + res.substr(3, 20);
  if (res.length > 6) res = res.substr(0, 7) + '-' + res.substr(7, 4);

  return res;
}

var convert = {
  toSnake: function toSnake(str) {
    return str.split(/(?=[A-Z])/).join('_').toLowerCase();
  },
  toKebab: function toKebab(str) {
    var newString = str.replace(/(\w(?=[A-Z]))/g, '$1+').replace(/[_-]/g, '+');
    return newString.split('+').join('-').toLowerCase();
  },
  toCleanKebab: function toCleanKebab(str) {
    return str.replace(/[^\w\s_]/g, '').split(/\s+/).join('-').toLowerCase();
  },
  toCamel: function toCamel(str) {
    return str.replace(/[_-]([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  },
  toTitleCase: function toTitleCase(str) {
    var newString = str.replace(/[_-]/, ' ');
    return newString.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  },
  toPhone: toPhone,
  obj: {
    toCamel: function toCamel(str) {
      return __WEBPACK_IMPORTED_MODULE_1_camelcase_keys___default()(str, { deep: true });
    }
  }
};

function isServer() {
  try {
    window === void 0;
    return false;
  } catch (e) {
    return true;
  }
}

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function deepValueByString(obj, path) {
  path = path.split('.');
  var length = path.length;
  for (var i = 0; i < length; i++) {
    obj = obj[path[i]];
  }
  return obj;
}

function getArticleLinks(ids, entities) {
  return ids.map(function (id) {
    var entitie = entities[id];

    return {
      title: entitie.title,
      url: '/wiki/' + entitie.level0 + '/' + id,
      level1: entitie.level1,
      level0: entitie.level0
    };
  });
}

//save deep access to objects and arrays, ex. of use:   safeDA([{a:{b:10}}], ['0', 'a', 'b'], 0),
// return value or noResult value, if there is no noResult value returns false.
var safeDA = function safeDA(object, props) {
  var noResult = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return props.reduce(function (prefix, val) {
    return prefix && prefix[val] ? prefix[val] : noResult;
  }, object);
};

function rndStr(long) {
  var n = Math.ceil(long / 5);
  var string = '';
  for (var i = 0; i < n; i++) {
    string += Math.random().toString(36).substring(8);
  }
  return string.substr(0, long);
}

var rnd = {
  str: rndStr,
  num: function num(long) {
    return Math.round(Math.random() * Math.pow(10, long));
  }

  //number format function ex. of use: numberFormat(100000000000, 2) => '10,000,000.00'
};var numberFormat = function numberFormat(n, dp) {

  if (!n) return '0';
  var e = '',
      s = e + n,
      l = s.length,
      b = n < 0 ? 1 : 0,
      i = s.lastIndexOf('.'),
      j = i == -1 ? l : i,
      r = e,
      d = s.substr(j + 1, dp);
  while ((j -= 3) > b) {
    r = ',' + s.substr(j, 3) + r;
  }
  return s.substr(0, j + 3) + r + (dp ? '.' + d + (d.length < dp ? '00000'.substr(0, dp - d.length) : e) : e);
};

function arrayUnique(array) {
  var a = array.concat();
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (JSON.stringify(a[i]) === JSON.stringify(a[j])) a.splice(j--, 1);
    }
  }

  return a;
}

var apiDateFormat = function apiDateFormat(momentDate) {
  return momentDate.format('YYYYMMDDTHHmmss[Z]');
};
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(cssDecamelize, 'cssDecamelize', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(cssClassName, 'cssClassName', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(_isContain, '_isContain', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(simpleSnakeCase, 'simpleSnakeCase', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(toPhone, 'toPhone', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(convert, 'convert', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(isServer, 'isServer', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(capitalize, 'capitalize', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(deepValueByString, 'deepValueByString', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(getArticleLinks, 'getArticleLinks', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(safeDA, 'safeDA', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(rndStr, 'rndStr', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(rnd, 'rnd', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(numberFormat, 'numberFormat', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(arrayUnique, 'arrayUnique', '/Volumes/Dev/motivate-yourself/utils/index.js');
  reactHotLoader.register(apiDateFormat, 'apiDateFormat', '/Volumes/Dev/motivate-yourself/utils/index.js');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.03e81210aa9beb332604.hot-update.js.map