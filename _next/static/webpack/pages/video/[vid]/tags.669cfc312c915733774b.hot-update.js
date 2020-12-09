webpackHotUpdate_N_E("pages/video/[vid]/tags",{

/***/ "./src/pages/video/[vid]/tags.js":
/*!***************************************!*\
  !*** ./src/pages/video/[vid]/tags.js ***!
  \***************************************/
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
/* harmony import */ var _components_LastUpdatedTimestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/LastUpdatedTimestamp */ "./src/components/LastUpdatedTimestamp.js");
/* harmony import */ var _components_VideoDetailsContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/VideoDetailsContainer */ "./src/components/VideoDetailsContainer.js");

var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\pages\\video\\[vid]\\tags.js";





const Component = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoDetailsContainer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    vid: props.vid,
    tab: "tags",
    details: props.containerDetails,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "video-details-card",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "chip-grid",
          children: props.tags.map(tag => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "chip",
            children: tag
          }, tag, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 29
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LastUpdatedTimestamp__WEBPACK_IMPORTED_MODULE_3__["default"], {
      timestampMillis: props.lastUpdated
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvL1t2aWRdL3RhZ3MuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwicHJvcHMiLCJ2aWQiLCJjb250YWluZXJEZXRhaWxzIiwidGFncyIsIm1hcCIsInRhZyIsImxhc3RVcGRhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUlDLEtBQUQsSUFBVztBQUN6QixzQkFDSSxxRUFBQyx5RUFBRDtBQUF1QixPQUFHLEVBQUVBLEtBQUssQ0FBQ0MsR0FBbEM7QUFBdUMsT0FBRyxFQUFDLE1BQTNDO0FBQWtELFdBQU8sRUFBRUQsS0FBSyxDQUFDRSxnQkFBakU7QUFBQSw0QkFDSSxxRUFBQyw0REFBRDtBQUFNLGVBQVMsRUFBQyxvQkFBaEI7QUFBQSw2QkFDSSxxRUFBQyw0REFBRCxDQUFNLElBQU47QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLG9CQUNLRixLQUFLLENBQUNHLElBQU4sQ0FBV0MsR0FBWCxDQUFnQkMsR0FBRCxpQkFDWjtBQUFlLHFCQUFTLEVBQUMsTUFBekI7QUFBQSxzQkFDS0E7QUFETCxhQUFVQSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREg7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFhSSxxRUFBQyx3RUFBRDtBQUFzQixxQkFBZSxFQUFFTCxLQUFLLENBQUNNO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFpQkgsQ0FsQkQ7O0tBQU1QLFM7O0FBb0JTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aWRlby9bdmlkXS90YWdzLjY2OWNmYzMxMmM5MTU3MzM3NzRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xyXG5pbXBvcnQgTGFzdFVwZGF0ZWRUaW1lc3RhbXAgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXN0VXBkYXRlZFRpbWVzdGFtcCc7XHJcbmltcG9ydCBFbmRwb2ludCBmcm9tICcuLi8uLi8uLi9FbmRwb2ludCc7XHJcbmltcG9ydCBWaWRlb0RldGFpbHNDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9WaWRlb0RldGFpbHNDb250YWluZXInO1xyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxWaWRlb0RldGFpbHNDb250YWluZXIgdmlkPXtwcm9wcy52aWR9IHRhYj0ndGFncycgZGV0YWlscz17cHJvcHMuY29udGFpbmVyRGV0YWlsc30+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0ndmlkZW8tZGV0YWlscy1jYXJkJz5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoaXAtZ3JpZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy50YWdzLm1hcCgodGFnKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17dGFnfSBjbGFzc05hbWU9J2NoaXAnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgPExhc3RVcGRhdGVkVGltZXN0YW1wIHRpbWVzdGFtcE1pbGxpcz17cHJvcHMubGFzdFVwZGF0ZWR9Lz5cclxuICAgICAgICA8L1ZpZGVvRGV0YWlsc0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7RW5kcG9pbnQudXJsfS92aWRlby90YWdzLyR7cGFyYW1zLnZpZH1gKTtcclxuICAgIGNvbnN0IHRhZ3MgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lckRldGFpbHMgPSBhd2FpdCBWaWRlb0RldGFpbHNDb250YWluZXIuZmV0Y2hEZXRhaWxzKHBhcmFtcy52aWQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmlkOiBwYXJhbXMudmlkLCBcclxuICAgICAgICAgICAgY29udGFpbmVyRGV0YWlsczogY29udGFpbmVyRGV0YWlscywgXHJcblxyXG4gICAgICAgICAgICB0YWdzOiB0YWdzLnRhZ3MsIFxyXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogdGFncy5sYXN0X3NjcmFwZWQsIFxyXG5cclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93QmFjazogdHJ1ZSwgXHJcbiAgICAgICAgICAgICAgICBiYWNrVXJsOiAnLydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICBzdGFydEF0OiAwLCBcclxuICAgICAgbWF4UmVzdWx0czogMTAwMFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtFbmRwb2ludC51cmx9Lz8ke3F1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpfWApO1xyXG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhzID0gaXRlbXMubWFwKGFzeW5jIChpdGVtKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7RW5kcG9pbnQudXJsfS92aWRlby90YWdzLyR7aXRlbS5pZH1gKTtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSAyMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgcGFyYW1zOiB7IHZpZDogaXRlbS5pZCB9fTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZygndGFncyBwYXRoczonLCBwYXRocy5sZW5ndGgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsIFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=