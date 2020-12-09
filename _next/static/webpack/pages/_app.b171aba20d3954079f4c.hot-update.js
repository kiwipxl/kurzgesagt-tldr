webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Development_kurzgesagt_tldr_SPA_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);



var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Development_kurzgesagt_tldr_SPA_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function App({
  Component,
  pageProps
}) {
  _s();

  const [headerProps, setHeaderProps] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState({}); // const [feedItems, setFeedItems] = React.useState([]);
  // const [feedScrollY, setFeedScrollY] = React.useState(0);
  // const router = useRouter();
  // function onFeedVideoClick(vid, items) {
  //   setFeedItems(items);
  //   setFeedScrollY(window.pageYOffset);
  //   router.push(`/video/${vid}`);
  // }

  if (pageProps.header) {
    if (JSON.stringify(headerProps) !== JSON.stringify(pageProps.header)) {
      setHeaderProps(pageProps.header);
    }

    setHeaderProps(pageProps.header);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, headerProps), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 5
  }, this);
}

_s(App, "gn2i9lu/gbHM/Z0rbkhNgF1Bi/A=");

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiaGVhZGVyUHJvcHMiLCJzZXRIZWFkZXJQcm9wcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJoZWFkZXIiLCJKU09OIiwic3RyaW5naWZ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsR0FBVCxDQUFhO0FBQUNDLFdBQUQ7QUFBWUM7QUFBWixDQUFiLEVBQXFDO0FBQUE7O0FBQ25DLFFBQU0sQ0FBQ0MsV0FBRCxFQUFjQyxjQUFkLElBQWdDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsRUFBZixDQUF0QyxDQURtQyxDQUduQztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQUlKLFNBQVMsQ0FBQ0ssTUFBZCxFQUFzQjtBQUNwQixRQUFJQyxJQUFJLENBQUNDLFNBQUwsQ0FBZU4sV0FBZixNQUFnQ0ssSUFBSSxDQUFDQyxTQUFMLENBQWVQLFNBQVMsQ0FBQ0ssTUFBekIsQ0FBcEMsRUFBc0U7QUFDcEVILG9CQUFjLENBQUNGLFNBQVMsQ0FBQ0ssTUFBWCxDQUFkO0FBQ0Q7O0FBRURILGtCQUFjLENBQUNGLFNBQVMsQ0FBQ0ssTUFBWCxDQUFkO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsMERBQUQsa0NBQVlKLFdBQVo7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlRCxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0EzQlFGLEc7O0tBQUFBLEc7QUE2Qk1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjE3MWFiYTIwZDM5NTQwNzlmNGMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgJy4uL0FwcC5jc3MnO1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XHJcblxyXG5mdW5jdGlvbiBBcHAoe0NvbXBvbmVudCwgcGFnZVByb3BzfSkge1xyXG4gIGNvbnN0IFtoZWFkZXJQcm9wcywgc2V0SGVhZGVyUHJvcHNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG5cclxuICAvLyBjb25zdCBbZmVlZEl0ZW1zLCBzZXRGZWVkSXRlbXNdID0gUmVhY3QudXNlU3RhdGUoW10pO1xyXG4gIC8vIGNvbnN0IFtmZWVkU2Nyb2xsWSwgc2V0RmVlZFNjcm9sbFldID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIC8vIGZ1bmN0aW9uIG9uRmVlZFZpZGVvQ2xpY2sodmlkLCBpdGVtcykge1xyXG4gIC8vICAgc2V0RmVlZEl0ZW1zKGl0ZW1zKTtcclxuICAvLyAgIHNldEZlZWRTY3JvbGxZKHdpbmRvdy5wYWdlWU9mZnNldCk7XHJcbiAgLy8gICByb3V0ZXIucHVzaChgL3ZpZGVvLyR7dmlkfWApO1xyXG4gIC8vIH1cclxuXHJcbiAgaWYgKHBhZ2VQcm9wcy5oZWFkZXIpIHtcclxuICAgIGlmIChKU09OLnN0cmluZ2lmeShoZWFkZXJQcm9wcykgIT09IEpTT04uc3RyaW5naWZ5KHBhZ2VQcm9wcy5oZWFkZXIpKSB7XHJcbiAgICAgIHNldEhlYWRlclByb3BzKHBhZ2VQcm9wcy5oZWFkZXIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXRIZWFkZXJQcm9wcyhwYWdlUHJvcHMuaGVhZGVyKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZGVyIHsuLi5oZWFkZXJQcm9wc30+XHJcbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30+XHJcbiAgICAgIDwvQ29tcG9uZW50PlxyXG4gICAgPC9IZWFkZXI+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9