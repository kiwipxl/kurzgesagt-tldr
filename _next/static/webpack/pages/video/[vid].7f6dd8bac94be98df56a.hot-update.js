webpackHotUpdate_N_E("pages/video/[vid]",{

/***/ "./src/components/LastUpdatedTimestamp.js":
/*!************************************************!*\
  !*** ./src/components/LastUpdatedTimestamp.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\components\\LastUpdatedTimestamp.js";


const Component = props => {
  if (!props.timestampMillis) {
    return null;
  }

  const lastUpdateTime = luxon__WEBPACK_IMPORTED_MODULE_1__["DateTime"].fromMillis(parseInt(props.timestampMillis)).toRelative();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
    className: "last-updated",
    children: 'Last updated ' + lastUpdateTime
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

_c = Component;
/* harmony default export */ __webpack_exports__["default"] = (Component);

var _c;

$RefreshReg$(_c, "Component");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGFzdFVwZGF0ZWRUaW1lc3RhbXAuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicHJvcHMiLCJ0aW1lc3RhbXBNaWxsaXMiLCJsYXN0VXBkYXRlVGltZSIsIkRhdGVUaW1lIiwiZnJvbU1pbGxpcyIsInBhcnNlSW50IiwidG9SZWxhdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUlDLEtBQUQsSUFBVztBQUN6QixNQUFJLENBQUNBLEtBQUssQ0FBQ0MsZUFBWCxFQUE0QjtBQUN4QixXQUFPLElBQVA7QUFDSDs7QUFFRCxRQUFNQyxjQUFjLEdBQUdDLDhDQUFRLENBQUNDLFVBQVQsQ0FBb0JDLFFBQVEsQ0FBQ0wsS0FBSyxDQUFDQyxlQUFQLENBQTVCLEVBQXFESyxVQUFyRCxFQUF2QjtBQUVBLHNCQUNJO0FBQU0sYUFBUyxFQUFDLGNBQWhCO0FBQUEsY0FBZ0Msa0JBQWtCSjtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFHSCxDQVZEOztLQUFNSCxTO0FBWVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZGVvL1t2aWRdLjdmNmRkOGJhYzk0YmU5OGRmNTZhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRlVGltZSB9IGZyb20gJ2x1eG9uJztcclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgaWYgKCFwcm9wcy50aW1lc3RhbXBNaWxsaXMpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYXN0VXBkYXRlVGltZSA9IERhdGVUaW1lLmZyb21NaWxsaXMocGFyc2VJbnQocHJvcHMudGltZXN0YW1wTWlsbGlzKSkudG9SZWxhdGl2ZSgpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsYXN0LXVwZGF0ZWQnPnsnTGFzdCB1cGRhdGVkICcgKyBsYXN0VXBkYXRlVGltZX08L3NwYW4+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50OyJdLCJzb3VyY2VSb290IjoiIn0=