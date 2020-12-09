webpackHotUpdate_N_E("pages/video/[vid]/transcript",{

/***/ "./src/pages/video/[vid]/transcript.js":
/*!*********************************************!*\
  !*** ./src/pages/video/[vid]/transcript.js ***!
  \*********************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LastUpdatedTimestamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/LastUpdatedTimestamp */ "./src/components/LastUpdatedTimestamp.js");
/* harmony import */ var _components_VideoDetailsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/VideoDetailsContainer */ "./src/components/VideoDetailsContainer.js");

var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\pages\\video\\[vid]\\transcript.js";






const Component = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoDetailsContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    vid: props.vid,
    tab: "transcript",
    details: props.containerDetails,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "video-details-card",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(props.transcript.replace(/\n/g, '<br/>'))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LastUpdatedTimestamp__WEBPACK_IMPORTED_MODULE_4__["default"], {
      timestampMillis: props.lastUpdated
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, undefined);
};

_c = Component;
var __N_SSG = true;
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvL1t2aWRdL3RyYW5zY3JpcHQuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicHJvcHMiLCJ2aWQiLCJjb250YWluZXJEZXRhaWxzIiwicGFyc2UiLCJ0cmFuc2NyaXB0IiwicmVwbGFjZSIsImxhc3RVcGRhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTUEsU0FBUyxHQUFJQyxLQUFELElBQVc7QUFDekIsc0JBQ0kscUVBQUMseUVBQUQ7QUFBdUIsT0FBRyxFQUFFQSxLQUFLLENBQUNDLEdBQWxDO0FBQXVDLE9BQUcsRUFBQyxZQUEzQztBQUF3RCxXQUFPLEVBQUVELEtBQUssQ0FBQ0UsZ0JBQXZFO0FBQUEsNEJBQ0kscUVBQUMsNERBQUQ7QUFBTSxlQUFTLEVBQUMsb0JBQWhCO0FBQUEsNkJBQ0kscUVBQUMsNERBQUQsQ0FBTSxJQUFOO0FBQUEsK0JBQ0k7QUFBQSxvQkFDS0Msd0RBQUssQ0FBQ0gsS0FBSyxDQUFDSSxVQUFOLENBQWlCQyxPQUFqQixDQUF5QixLQUF6QixFQUFnQyxPQUFoQyxDQUFEO0FBRFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBU0kscUVBQUMsd0VBQUQ7QUFBc0IscUJBQWUsRUFBRUwsS0FBSyxDQUFDTTtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBYUgsQ0FkRDs7S0FBTVAsUzs7QUFnQlNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZGVvL1t2aWRdL3RyYW5zY3JpcHQuZWZkMzhjNWM5NmY1NmU3YzcwNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XHJcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XHJcbmltcG9ydCBMYXN0VXBkYXRlZFRpbWVzdGFtcCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xhc3RVcGRhdGVkVGltZXN0YW1wJztcclxuaW1wb3J0IEVuZHBvaW50IGZyb20gJy4uLy4uLy4uL0VuZHBvaW50JztcclxuaW1wb3J0IFZpZGVvRGV0YWlsc0NvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1ZpZGVvRGV0YWlsc0NvbnRhaW5lcic7XHJcblxyXG5jb25zdCBDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFZpZGVvRGV0YWlsc0NvbnRhaW5lciB2aWQ9e3Byb3BzLnZpZH0gdGFiPSd0cmFuc2NyaXB0JyBkZXRhaWxzPXtwcm9wcy5jb250YWluZXJEZXRhaWxzfT5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPSd2aWRlby1kZXRhaWxzLWNhcmQnPlxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7cGFyc2UocHJvcHMudHJhbnNjcmlwdC5yZXBsYWNlKC9cXG4vZywgJzxici8+JykpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxMYXN0VXBkYXRlZFRpbWVzdGFtcCB0aW1lc3RhbXBNaWxsaXM9e3Byb3BzLmxhc3RVcGRhdGVkfS8+XHJcbiAgICAgICAgPC9WaWRlb0RldGFpbHNDb250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0VuZHBvaW50LnVybH0vdmlkZW8vdHJhbnNjcmlwdC8ke3BhcmFtcy52aWR9YCk7XHJcbiAgICBjb25zdCB0cmFuc2NyaXB0ID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXJEZXRhaWxzID0gYXdhaXQgVmlkZW9EZXRhaWxzQ29udGFpbmVyLmZldGNoRGV0YWlscyhwYXJhbXMudmlkKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZpZDogcGFyYW1zLnZpZCwgXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckRldGFpbHM6IGNvbnRhaW5lckRldGFpbHMsIFxyXG5cclxuICAgICAgICAgICAgdHJhbnNjcmlwdDogdHJhbnNjcmlwdC5lbiwgXHJcbiAgICAgICAgICAgIGxhc3RVcGRhdGVkOiB0cmFuc2NyaXB0Lmxhc3RfdXBkYXRlZCwgXHJcblxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgIHNob3dCYWNrOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgIGJhY2tVcmw6ICcvJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgIHN0YXJ0QXQ6IDAsIFxyXG4gICAgICBtYXhSZXN1bHRzOiAxMDAwXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0VuZHBvaW50LnVybH0vPyR7cXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcyl9YCk7XHJcbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgcGF0aHMgPSBpdGVtcy5tYXAoYXN5bmMgKGl0ZW0pID0+IHtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtFbmRwb2ludC51cmx9L3ZpZGVvL3RyYW5zY3JpcHQvJHtpdGVtLmlkfWApO1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4geyBwYXJhbXM6IHsgdmlkOiBpdGVtLmlkIH19O1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCd0cmFuc2NyaXB0IHBhdGhzOicsIHBhdGhzLmxlbmd0aCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocywgXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==