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
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Header */ "./src/components/Header.js");



var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Development_kurzgesagt_tldr_SPA_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function App({
  Component,
  pageProps
}) {
  _s();

  const [showBackButton, setShowBackButton] = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false);

  function setHeaderOptions(showBack) {
    setShowBackButton(showBack);
  }

  console.log('is app.js used at all??'); // const [feedItems, setFeedItems] = React.useState([]);
  // const [feedScrollY, setFeedScrollY] = React.useState(0);
  // const router = useRouter();
  // function onFeedVideoClick(vid, items) {
  //   setFeedItems(items);
  //   setFeedScrollY(window.pageYOffset);
  //   router.push(`/video/${vid}`);
  // }

  console.log(pageProps);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      showBack: showBackButton
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)
  }), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(App, "ewDOOoNdOqdHbprZY2kYHTKLdFo=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwic2hvd0JhY2tCdXR0b24iLCJzZXRTaG93QmFja0J1dHRvbiIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZXRIZWFkZXJPcHRpb25zIiwic2hvd0JhY2siLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxHQUFULENBQWE7QUFBQ0MsV0FBRDtBQUFZQztBQUFaLENBQWIsRUFBcUM7QUFBQTs7QUFDbkMsUUFBTSxDQUFDQyxjQUFELEVBQWlCQyxpQkFBakIsSUFBc0NDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBQTVDOztBQUVBLFdBQVNDLGdCQUFULENBQTBCQyxRQUExQixFQUFvQztBQUNsQ0oscUJBQWlCLENBQUNJLFFBQUQsQ0FBakI7QUFDRDs7QUFFREMsU0FBTyxDQUFDQyxHQUFSLENBQVkseUJBQVosRUFQbUMsQ0FTbkM7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUQsU0FBTyxDQUFDQyxHQUFSLENBQVlSLFNBQVo7QUFFQSxzQkFDRSxxRUFBQyxTQUFELGtDQUFlQSxTQUFmO0FBQUEsMkJBQ0UscUVBQUMsMERBQUQ7QUFBUSxjQUFRLEVBQUVDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0EzQlFILEc7O0tBQUFBLEc7QUE2Qk1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2ExOGI2MTgzODc3NzYwMGJjM2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCAnLi4vQXBwLmNzcyc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5cclxuZnVuY3Rpb24gQXBwKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pIHtcclxuICBjb25zdCBbc2hvd0JhY2tCdXR0b24sIHNldFNob3dCYWNrQnV0dG9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgZnVuY3Rpb24gc2V0SGVhZGVyT3B0aW9ucyhzaG93QmFjaykge1xyXG4gICAgc2V0U2hvd0JhY2tCdXR0b24oc2hvd0JhY2spO1xyXG4gIH1cclxuXHJcbiAgY29uc29sZS5sb2coJ2lzIGFwcC5qcyB1c2VkIGF0IGFsbD8/Jyk7XHJcblxyXG4gIC8vIGNvbnN0IFtmZWVkSXRlbXMsIHNldEZlZWRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XHJcbiAgLy8gY29uc3QgW2ZlZWRTY3JvbGxZLCBzZXRGZWVkU2Nyb2xsWV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgLy8gZnVuY3Rpb24gb25GZWVkVmlkZW9DbGljayh2aWQsIGl0ZW1zKSB7XHJcbiAgLy8gICBzZXRGZWVkSXRlbXMoaXRlbXMpO1xyXG4gIC8vICAgc2V0RmVlZFNjcm9sbFkod2luZG93LnBhZ2VZT2Zmc2V0KTtcclxuICAvLyAgIHJvdXRlci5wdXNoKGAvdmlkZW8vJHt2aWR9YCk7XHJcbiAgLy8gfVxyXG5cclxuICBjb25zb2xlLmxvZyhwYWdlUHJvcHMpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfT5cclxuICAgICAgPEhlYWRlciBzaG93QmFjaz17c2hvd0JhY2tCdXR0b259PlxyXG4gICAgICA8L0hlYWRlcj5cclxuICAgIDwvQ29tcG9uZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==