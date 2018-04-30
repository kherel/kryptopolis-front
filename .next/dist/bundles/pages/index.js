module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./HOC/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_SE_Layout_SE_Layout_js__ = __webpack_require__("./components/SE_Layout/SE_Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Volumes/Dev/motivate-yourself/HOC/Layout.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






/* harmony default export */ __webpack_exports__["a"] = (function (Page) {
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
        var _props = this.props,
            pathname = _props.pathname,
            props = _objectWithoutProperties(_props, ["pathname"]);

        console.log(props);
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__components_SE_Layout_SE_Layout_js__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Page, _extends({}, props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          }))
        );
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(ctx) {
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
          return _ref.apply(this, arguments);
        }

        return getInitialProps;
      }()
    }]);

    return LayoutHoc;
  }(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]), _class.childContextTypes = {
    pathname: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
  }, _temp;
});

/***/ }),

/***/ "./components/SE_Layout/SE_Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SE_Layout_scss__ = __webpack_require__("./components/SE_Layout/SE_Layout.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__SE_Layout_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__SE_Layout_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__("./utils/index.js");
var _jsxFileName = '/Volumes/Dev/motivate-yourself/components/SE_Layout/SE_Layout.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
      console.log(this.context);
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        'layout: SE_Layout',
        this.props.children
      );
    }
  }]);

  return SE_Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

SE_Layout.contextTypes = {
  pathname: __WEBPACK_IMPORTED_MODULE_1_prop_types__["string"]
};


SE_Layout.propTypes = {};

SE_Layout.defaultProps = {};

/* harmony default export */ __webpack_exports__["a"] = (SE_Layout);

/***/ }),

/***/ "./components/SE_Layout/SE_Layout.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss__ = __webpack_require__("./pages/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__redux_store_store__ = __webpack_require__("./redux-store/store.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__redux_store_withRedux__ = __webpack_require__("./redux-store/withRedux.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__redux_store_ducks_goals__ = __webpack_require__("./redux-store/ducks/goals.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__HOC_Layout_js__ = __webpack_require__("./HOC/Layout.js");


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = "/Volumes/Dev/motivate-yourself/pages/index.js";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        "div",
        { onClick: function onClick() {
            return _this2.props.addGoal({ id: 1, data: "aa" });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        "path: ",
        this.context.pathname,
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        }),
        "hello: ",
        this.props.hello
      );
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
        var store = _ref.store,
            isServer = _ref.isServer;
        return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return store.dispatch(Object(__WEBPACK_IMPORTED_MODULE_6__redux_store_ducks_goals__["a" /* addGoal */])({ id: 0, data: 100 }));

              case 2:
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

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react__["Component"]);

Index.contextTypes = {
  pathname: __WEBPACK_IMPORTED_MODULE_7_prop_types__["string"]
};


function mapDispatchToProps(dispatch) {
  var actions = Object(__WEBPACK_IMPORTED_MODULE_3_redux__["bindActionCreators"])({ addGoal: __WEBPACK_IMPORTED_MODULE_6__redux_store_ducks_goals__["a" /* addGoal */] }, dispatch);
  return _extends({}, actions);
}

/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_8__HOC_Layout_js__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_5__redux_store_withRedux__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4__redux_store_store__["a" /* initStore */], null, mapDispatchToProps)(Index)));

/***/ }),

/***/ "./pages/index.scss":
/***/ (function(module, exports) {



/***/ }),

/***/ "./redux-store/ducks/goals.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ADD_GOAL */
/* unused harmony export REMOVE_GOAL */
/* unused harmony export EDIT_GOAL */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addGoal; });
/* unused harmony export removeGoal */
/* unused harmony export editGoal */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda__ = __webpack_require__("ramda");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ramda___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ramda__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var ADD_GOAL = "ADD_GOAL";
var REMOVE_GOAL = "REMOVE_GOAL";
var EDIT_GOAL = "EDIT_GOAL";


var initialGoals = {
  entities: []
};

/* harmony default export */ __webpack_exports__["b"] = (function () {
  var goals = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialGoals;
  var _ref = arguments[1];
  var type = _ref.type,
      data = _ref.data;

  var entities = void 0,
      entity = void 0;

  switch (type) {
    case ADD_GOAL:
      return _extends({}, goals, { entities: [].concat(_toConsumableArray(goals.entities), [data]) });

    case REMOVE_GOAL:
      entities = goals.entities.filter(el.id !== data);
      return _extends({}, goals, { entities: entities });

    case EDIT_GOAL:
      entities = Object(__WEBPACK_IMPORTED_MODULE_0_ramda__["clone"])(goals.entities);
      entity = goals.entities.find(function (el) {
        return el.id === data.id;
      });
      entity = _extends({}, entity, data);
      return _extends({}, goals, { entities: entities });
  }

  return goals;
});

var addGoal = function addGoal(data) {
  return { type: ADD_GOAL, data: data };
};
var removeGoal = function removeGoal(data) {
  return { type: REMOVE_GOAL, data: data };
};
var editGoal = function editGoal(data) {
  return { type: EDIT_GOAL, data: data };
};

/***/ }),

/***/ "./redux-store/rootReducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ducks_goals__ = __webpack_require__("./redux-store/ducks/goals.js");



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  goals: __WEBPACK_IMPORTED_MODULE_1__ducks_goals__["b" /* default */]
}));

/***/ }),

/***/ "./redux-store/store.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return initStore; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__ = __webpack_require__("redux-devtools-extension");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk__ = __webpack_require__("redux-thunk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rootReducer__ = __webpack_require__("./redux-store/rootReducer.js");





var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3__rootReducer__["a" /* default */], initialState, Object(__WEBPACK_IMPORTED_MODULE_1_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_2_redux_thunk___default.a)));
  store.subscribe(function () {
    return console.log('heelo');
  });
  return store;
};

/***/ }),

/***/ "./redux-store/withRedux.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("babel-runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("react-redux");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);


var _this = this;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

// https://github.com/iliakan/detect-node
var checkServer = function checkServer() {
  return Object.prototype.toString.call(global.process) === '[object process]';
};

var getOrCreateStore = function getOrCreateStore(initStore, initialState) {
  // Always make a new store if server
  if (checkServer() || typeof window === 'undefined') {
    return initStore(initialState);
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (Component) {
    // First argument is initStore, the rest are redux connect arguments and get passed
    var initStore = args[0],
        connectArgs = args.slice(1);


    var ComponentWithRedux = function ComponentWithRedux() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var store = props.store,
          initialProps = props.initialProps,
          initialState = props.initialState;

      // Connect page to redux with connect arguments

      var ConnectedComponent = __WEBPACK_IMPORTED_MODULE_2_react_redux__["connect"].apply(null, connectArgs)(Component);

      // Wrap with redux Provider with store
      // Create connected page with initialProps
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"], { store: store && store.dispatch ? store : getOrCreateStore(initStore, initialState) }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(ConnectedComponent, initialProps));
    };

    ComponentWithRedux.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var isServer, store, initialProps;
      return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isServer = checkServer();
              store = getOrCreateStore(initStore);

              // Run page getInitialProps with store and isServer

              if (!Component.getInitialProps) {
                _context.next = 8;
                break;
              }

              _context.next = 5;
              return Component.getInitialProps(_extends({}, props, { isServer: isServer, store: store }));

            case 5:
              _context.t0 = _context.sent;
              _context.next = 9;
              break;

            case 8:
              _context.t0 = {};

            case 9:
              initialProps = _context.t0;
              return _context.abrupt('return', {
                store: store,
                initialState: store.getState(),
                initialProps: initialProps
              });

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return ComponentWithRedux;
  };
});

/***/ }),

/***/ "./utils/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cssClassName */
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_catnip__ = __webpack_require__("catnip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_catnip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_catnip__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_camelcase_keys__ = __webpack_require__("camelcase-keys");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_camelcase_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_camelcase_keys__);
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

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "babel-runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),

/***/ "camelcase-keys":
/***/ (function(module, exports) {

module.exports = require("camelcase-keys");

/***/ }),

/***/ "catnip":
/***/ (function(module, exports) {

module.exports = require("catnip");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "ramda":
/***/ (function(module, exports) {

module.exports = require("ramda");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map