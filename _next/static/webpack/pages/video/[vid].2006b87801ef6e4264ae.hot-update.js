webpackHotUpdate_N_E("pages/video/[vid]",{

/***/ "./node_modules/history/esm/history.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/mini-create-react-context/dist/esm/index.js":
false,

/***/ "./node_modules/next/node_modules/webpack/buildin/global.js":
false,

/***/ "./node_modules/react-router-dom/esm/react-router-dom.js":
false,

/***/ "./node_modules/react-router/esm/react-router.js":
false,

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
false,

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/resolve-pathname/esm/resolve-pathname.js":
false,

/***/ "./node_modules/tiny-invariant/dist/tiny-invariant.esm.js":
false,

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
false,

/***/ "./node_modules/value-equal/esm/value-equal.js":
false,

/***/ "./src/components/VideoDetailsNav.js":
/*!*******************************************!*\
  !*** ./src/components/VideoDetailsNav.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\components\\VideoDetailsNav.js",
    _s = $RefreshSig$();



/* harmony default export */ __webpack_exports__["default"] = (_s(props => {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  const onClick = eventKey => {
    router.replace(`/video/${props.videoId}#${eventKey}`);

    if (props.onClickTab) {
      props.onClickTab(eventKey);
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    variant: "pills",
    onSelect: onClick,
    activeKey: props.tab || "",
    defaultActiveKey: props.defaultTab,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"].Link, {
        eventKey: "video",
        children: "Video"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"].Link, {
        eventKey: "sources",
        disabled: !props.hasSources,
        children: "Sources"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"].Link, {
        eventKey: "transcript",
        disabled: !props.hasTranscript,
        children: "Transcript"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"].Link, {
        eventKey: "tags",
        disabled: !props.hasTags,
        children: "Tags"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"].Item, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_1__["default"].Link, {
        eventKey: "soundtrack",
        disabled: !props.hasSoundTrack,
        children: "Soundtrack"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined);
}, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9EZXRhaWxzTmF2LmpzIl0sIm5hbWVzIjpbInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwib25DbGljayIsImV2ZW50S2V5IiwicmVwbGFjZSIsInZpZGVvSWQiLCJvbkNsaWNrVGFiIiwidGFiIiwiZGVmYXVsdFRhYiIsImhhc1NvdXJjZXMiLCJoYXNUcmFuc2NyaXB0IiwiaGFzVGFncyIsImhhc1NvdW5kVHJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxrRUFBQ0EsS0FBRCxJQUFXO0FBQUE7O0FBQ3RCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUEsUUFBTUMsT0FBTyxHQUFJQyxRQUFELElBQWM7QUFDMUJILFVBQU0sQ0FBQ0ksT0FBUCxDQUFnQixVQUFTTCxLQUFLLENBQUNNLE9BQVEsSUFBR0YsUUFBUyxFQUFuRDs7QUFFQSxRQUFJSixLQUFLLENBQUNPLFVBQVYsRUFBc0I7QUFDbEJQLFdBQUssQ0FBQ08sVUFBTixDQUFpQkgsUUFBakI7QUFDSDtBQUNKLEdBTkQ7O0FBUUEsc0JBQ0kscUVBQUMsMkRBQUQ7QUFDSSxXQUFPLEVBQUMsT0FEWjtBQUVJLFlBQVEsRUFBRUQsT0FGZDtBQUdJLGFBQVMsRUFBRUgsS0FBSyxDQUFDUSxHQUFOLElBQWEsRUFINUI7QUFJSSxvQkFBZ0IsRUFBRVIsS0FBSyxDQUFDUyxVQUo1QjtBQUFBLDRCQU1JLHFFQUFDLDJEQUFELENBQUssSUFBTDtBQUFBLDZCQUNJLHFFQUFDLDJEQUFELENBQUssSUFBTDtBQUFVLGdCQUFRLEVBQUMsT0FBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQU5KLGVBVUkscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQUEsNkJBQ0kscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQVUsZ0JBQVEsRUFBQyxTQUFuQjtBQUE2QixnQkFBUSxFQUFFLENBQUNULEtBQUssQ0FBQ1UsVUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVZKLGVBY0kscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQUEsNkJBQ0kscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQVUsZ0JBQVEsRUFBQyxZQUFuQjtBQUFnQyxnQkFBUSxFQUFFLENBQUNWLEtBQUssQ0FBQ1csYUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWRKLGVBa0JJLHFFQUFDLDJEQUFELENBQUssSUFBTDtBQUFBLDZCQUNJLHFFQUFDLDJEQUFELENBQUssSUFBTDtBQUFVLGdCQUFRLEVBQUMsTUFBbkI7QUFBMEIsZ0JBQVEsRUFBRSxDQUFDWCxLQUFLLENBQUNZLE9BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFsQkosZUFzQkkscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQUEsNkJBQ0kscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQVUsZ0JBQVEsRUFBQyxZQUFuQjtBQUFnQyxnQkFBUSxFQUFFLENBQUNaLEtBQUssQ0FBQ2EsYUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTRCSCxDQXZDRDtBQUFBLFVBQ21CWCxxREFEbkI7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aWRlby9bdmlkXS4yMDA2Yjg3ODAxZWY2ZTQyNjRhZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrID0gKGV2ZW50S2V5KSA9PiB7XHJcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoYC92aWRlby8ke3Byb3BzLnZpZGVvSWR9IyR7ZXZlbnRLZXl9YCk7XHJcblxyXG4gICAgICAgIGlmIChwcm9wcy5vbkNsaWNrVGFiKSB7XHJcbiAgICAgICAgICAgIHByb3BzLm9uQ2xpY2tUYWIoZXZlbnRLZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TmF2XHJcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJwaWxsc1wiXHJcbiAgICAgICAgICAgIG9uU2VsZWN0PXtvbkNsaWNrfVxyXG4gICAgICAgICAgICBhY3RpdmVLZXk9e3Byb3BzLnRhYiB8fCBcIlwifVxyXG4gICAgICAgICAgICBkZWZhdWx0QWN0aXZlS2V5PXtwcm9wcy5kZWZhdWx0VGFifVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwidmlkZW9cIj5WaWRlbzwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJzb3VyY2VzXCIgZGlzYWJsZWQ9eyFwcm9wcy5oYXNTb3VyY2VzfT5Tb3VyY2VzPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cInRyYW5zY3JpcHRcIiBkaXNhYmxlZD17IXByb3BzLmhhc1RyYW5zY3JpcHR9PlRyYW5zY3JpcHQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwidGFnc1wiIGRpc2FibGVkPXshcHJvcHMuaGFzVGFnc30+VGFnczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJzb3VuZHRyYWNrXCIgZGlzYWJsZWQ9eyFwcm9wcy5oYXNTb3VuZFRyYWNrfT5Tb3VuZHRyYWNrPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICA8L05hdj5cclxuICAgICk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==