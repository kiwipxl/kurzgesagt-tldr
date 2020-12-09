webpackHotUpdate_N_E("pages/video/[vid]",{

/***/ "./src/components/VideoDetailsContainer.js":
/*!*************************************************!*\
  !*** ./src/components/VideoDetailsContainer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Endpoint */ "./src/Endpoint.js");


var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\components\\VideoDetailsContainer.js",
    _s = $RefreshSig$();






const Component = props => {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const urlPrefix = `${router.basePath}/video/${props.vid}`;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "content-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "video-details-title",
        children: props.details.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "pills",
        activeKey: props.tab,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            href: `${urlPrefix}`,
            eventKey: "video",
            children: "Video"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            href: `${urlPrefix}/sources`,
            eventKey: "sources",
            disabled: !props.details.hasSources,
            children: "Sources"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            href: `${urlPrefix}/transcript`,
            eventKey: "transcript",
            disabled: !props.details.hasTranscript,
            children: "Transcript"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            href: `${urlPrefix}/tags`,
            eventKey: "tags",
            disabled: !props.details.hasTags,
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            href: `${urlPrefix}/soundtrack`,
            eventKey: "soundtrack",
            disabled: !props.details.hasSoundTrack,
            children: "Soundtrack"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), props.children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, undefined);
};

_s(Component, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Component;

Component.fetchDetails = async vid => {
  const res = await fetch(`${_Endpoint__WEBPACK_IMPORTED_MODULE_4__["default"].url}/video/${vid}`);
  const details = await res.json();
  return {
    title: details.info.title,
    hasSources: details.sources != undefined,
    hasTranscript: details.transcript != undefined && details.transcript.en != undefined,
    hasSoundTrack: details.info.soundtrack != undefined,
    hasTags: details.tags != undefined
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9EZXRhaWxzQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXJsUHJlZml4IiwiYmFzZVBhdGgiLCJ2aWQiLCJkZXRhaWxzIiwidGl0bGUiLCJ0YWIiLCJoYXNTb3VyY2VzIiwiaGFzVHJhbnNjcmlwdCIsImhhc1RhZ3MiLCJoYXNTb3VuZFRyYWNrIiwiY2hpbGRyZW4iLCJmZXRjaERldGFpbHMiLCJyZXMiLCJmZXRjaCIsIkVuZHBvaW50IiwidXJsIiwianNvbiIsImluZm8iLCJzb3VyY2VzIiwidW5kZWZpbmVkIiwidHJhbnNjcmlwdCIsImVuIiwic291bmR0cmFjayIsInRhZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBSUMsS0FBRCxJQUFXO0FBQUE7O0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxRQUFNQyxTQUFTLEdBQUksR0FBRUYsTUFBTSxDQUFDRyxRQUFTLFVBQVNKLEtBQUssQ0FBQ0ssR0FBSSxFQUF4RDtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyxxQkFBZDtBQUFBLGtCQUNLTCxLQUFLLENBQUNNLE9BQU4sQ0FBY0M7QUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUtJLHFFQUFDLDJEQUFEO0FBQ0ksZUFBTyxFQUFDLE9BRFo7QUFFSSxpQkFBUyxFQUFFUCxLQUFLLENBQUNRLEdBRnJCO0FBQUEsZ0NBSUkscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQUEsaUNBQ0kscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQ0ksZ0JBQUksRUFBRyxHQUFFTCxTQUFVLEVBRHZCO0FBRUksb0JBQVEsRUFBQyxPQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKSixlQWFJLHFFQUFDLDJEQUFELENBQUssSUFBTDtBQUFBLGlDQUNJLHFFQUFDLDJEQUFELENBQUssSUFBTDtBQUNJLGdCQUFJLEVBQUcsR0FBRUEsU0FBVSxVQUR2QjtBQUVJLG9CQUFRLEVBQUMsU0FGYjtBQUdJLG9CQUFRLEVBQUUsQ0FBQ0gsS0FBSyxDQUFDTSxPQUFOLENBQWNHLFVBSDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiSixlQXVCSSxxRUFBQywyREFBRCxDQUFLLElBQUw7QUFBQSxpQ0FDSSxxRUFBQywyREFBRCxDQUFLLElBQUw7QUFDSSxnQkFBSSxFQUFHLEdBQUVOLFNBQVUsYUFEdkI7QUFFSSxvQkFBUSxFQUFDLFlBRmI7QUFHSSxvQkFBUSxFQUFFLENBQUNILEtBQUssQ0FBQ00sT0FBTixDQUFjSSxhQUg3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBdkJKLGVBaUNJLHFFQUFDLDJEQUFELENBQUssSUFBTDtBQUFBLGlDQUNJLHFFQUFDLDJEQUFELENBQUssSUFBTDtBQUNJLGdCQUFJLEVBQUcsR0FBRVAsU0FBVSxPQUR2QjtBQUVJLG9CQUFRLEVBQUMsTUFGYjtBQUdJLG9CQUFRLEVBQUUsQ0FBQ0gsS0FBSyxDQUFDTSxPQUFOLENBQWNLLE9BSDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFqQ0osZUEyQ0kscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQUEsaUNBQ0kscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQ0ksZ0JBQUksRUFBRyxHQUFFUixTQUFVLGFBRHZCO0FBRUksb0JBQVEsRUFBQyxZQUZiO0FBR0ksb0JBQVEsRUFBRSxDQUFDSCxLQUFLLENBQUNNLE9BQU4sQ0FBY00sYUFIN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTNDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEosRUEyREtaLEtBQUssQ0FBQ2EsUUEzRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBaUVILENBdEVEOztHQUFNZCxTO1VBQ2FHLHFEOzs7S0FEYkgsUzs7QUF3RU5BLFNBQVMsQ0FBQ2UsWUFBVixHQUF5QixNQUFPVCxHQUFQLElBQWU7QUFDcEMsUUFBTVUsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyxpREFBUSxDQUFDQyxHQUFJLFVBQVNiLEdBQUksRUFBOUIsQ0FBdkI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsTUFBTVMsR0FBRyxDQUFDSSxJQUFKLEVBQXRCO0FBRUEsU0FBTztBQUNIWixTQUFLLEVBQUVELE9BQU8sQ0FBQ2MsSUFBUixDQUFhYixLQURqQjtBQUdIRSxjQUFVLEVBQUVILE9BQU8sQ0FBQ2UsT0FBUixJQUFtQkMsU0FINUI7QUFJSFosaUJBQWEsRUFBRUosT0FBTyxDQUFDaUIsVUFBUixJQUFzQkQsU0FBdEIsSUFBbUNoQixPQUFPLENBQUNpQixVQUFSLENBQW1CQyxFQUFuQixJQUF5QkYsU0FKeEU7QUFLSFYsaUJBQWEsRUFBRU4sT0FBTyxDQUFDYyxJQUFSLENBQWFLLFVBQWIsSUFBMkJILFNBTHZDO0FBTUhYLFdBQU8sRUFBRUwsT0FBTyxDQUFDb0IsSUFBUixJQUFnQko7QUFOdEIsR0FBUDtBQVFILENBWkQ7O0FBY2V2Qix3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aWRlby9bdmlkXS41MzNmZWI1ZGI4YmVlNzFhZWZlMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE5hdiBmcm9tICdyZWFjdC1ib290c3RyYXAvTmF2JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRW5kcG9pbnQgZnJvbSAnLi4vRW5kcG9pbnQnO1xyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCB1cmxQcmVmaXggPSBgJHtyb3V0ZXIuYmFzZVBhdGh9L3ZpZGVvLyR7cHJvcHMudmlkfWA7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd2aWRlby1kZXRhaWxzLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGV0YWlscy50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwaWxsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlS2V5PXtwcm9wcy50YWJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake3VybFByZWZpeH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRLZXk9XCJ2aWRlb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake3VybFByZWZpeH0vc291cmNlc2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEtleT1cInNvdXJjZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcm9wcy5kZXRhaWxzLmhhc1NvdXJjZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvdXJjZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7dXJsUHJlZml4fS90cmFuc2NyaXB0YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50S2V5PVwidHJhbnNjcmlwdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXByb3BzLmRldGFpbHMuaGFzVHJhbnNjcmlwdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJhbnNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHt1cmxQcmVmaXh9L3RhZ3NgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRLZXk9XCJ0YWdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcHJvcHMuZGV0YWlscy5oYXNUYWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake3VybFByZWZpeH0vc291bmR0cmFja2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEtleT1cInNvdW5kdHJhY2tcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcm9wcy5kZXRhaWxzLmhhc1NvdW5kVHJhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNvdW5kdHJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgPC9OYXY+XHJcblxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07XHJcblxyXG5Db21wb25lbnQuZmV0Y2hEZXRhaWxzID0gYXN5bmMgKHZpZCkgPT4ge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7RW5kcG9pbnQudXJsfS92aWRlby8ke3ZpZH1gKTtcclxuICAgIGNvbnN0IGRldGFpbHMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdGl0bGU6IGRldGFpbHMuaW5mby50aXRsZSwgXHJcblxyXG4gICAgICAgIGhhc1NvdXJjZXM6IGRldGFpbHMuc291cmNlcyAhPSB1bmRlZmluZWQsIFxyXG4gICAgICAgIGhhc1RyYW5zY3JpcHQ6IGRldGFpbHMudHJhbnNjcmlwdCAhPSB1bmRlZmluZWQgJiYgZGV0YWlscy50cmFuc2NyaXB0LmVuICE9IHVuZGVmaW5lZCwgXHJcbiAgICAgICAgaGFzU291bmRUcmFjazogZGV0YWlscy5pbmZvLnNvdW5kdHJhY2sgIT0gdW5kZWZpbmVkLCBcclxuICAgICAgICBoYXNUYWdzOiBkZXRhaWxzLnRhZ3MgIT0gdW5kZWZpbmVkXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDsiXSwic291cmNlUm9vdCI6IiJ9