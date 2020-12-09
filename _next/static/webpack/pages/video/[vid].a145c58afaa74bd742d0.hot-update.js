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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Endpoint */ "./src/Endpoint.js");


var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\components\\VideoDetailsContainer.js",
    _s = $RefreshSig$();





const Component = props => {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const tab = props.tab;

  function onClickTab(newTab) {
    router.push(`/video/${props.vid}/${newTab}`);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "content-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "video-details-title",
        children: props.details.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav, {
        variant: "pills",
        onSelect: onClickTab,
        activeKey: tab,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav.Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav.Link, {
            eventKey: "video",
            children: "Video"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav.Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav.Link, {
            eventKey: "sources",
            disabled: !props.details.hasSources,
            children: "Sources"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav.Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav.Link, {
            eventKey: "transcript",
            disabled: !props.details.hasTranscript,
            children: "Transcript"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav.Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav.Link, {
            eventKey: "tags",
            disabled: !props.details.hasTags,
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav.Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Nav.Link, {
            eventKey: "soundtrack",
            disabled: !props.details.hasSoundTrack,
            children: "Soundtrack"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, undefined), props.children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, undefined);
};

_s(Component, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Component;

Component.fetchDetails = async vid => {
  const res = await fetch(`${_Endpoint__WEBPACK_IMPORTED_MODULE_3__["default"].url}/video/${vid}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9EZXRhaWxzQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidGFiIiwib25DbGlja1RhYiIsIm5ld1RhYiIsInB1c2giLCJ2aWQiLCJkZXRhaWxzIiwidGl0bGUiLCJoYXNTb3VyY2VzIiwiaGFzVHJhbnNjcmlwdCIsImhhc1RhZ3MiLCJoYXNTb3VuZFRyYWNrIiwiY2hpbGRyZW4iLCJmZXRjaERldGFpbHMiLCJyZXMiLCJmZXRjaCIsIkVuZHBvaW50IiwidXJsIiwianNvbiIsImluZm8iLCJzb3VyY2VzIiwidW5kZWZpbmVkIiwidHJhbnNjcmlwdCIsImVuIiwic291bmR0cmFjayIsInRhZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBSUMsS0FBRCxJQUFXO0FBQUE7O0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxRQUFNQyxHQUFHLEdBQUdILEtBQUssQ0FBQ0csR0FBbEI7O0FBRUEsV0FBU0MsVUFBVCxDQUFvQkMsTUFBcEIsRUFBNEI7QUFDeEJKLFVBQU0sQ0FBQ0ssSUFBUCxDQUFhLFVBQVNOLEtBQUssQ0FBQ08sR0FBSSxJQUFHRixNQUFPLEVBQTFDO0FBQ0g7O0FBRUQsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSwyQkFDSTtBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLHFCQUFkO0FBQUEsa0JBQ0tMLEtBQUssQ0FBQ1EsT0FBTixDQUFjQztBQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBS0kscUVBQUMsR0FBRDtBQUNJLGVBQU8sRUFBQyxPQURaO0FBRUksZ0JBQVEsRUFBRUwsVUFGZDtBQUdJLGlCQUFTLEVBQUVELEdBSGY7QUFBQSxnQ0FLSSxxRUFBQyxHQUFELENBQUssSUFBTDtBQUFBLGlDQUNJLHFFQUFDLEdBQUQsQ0FBSyxJQUFMO0FBQVUsb0JBQVEsRUFBQyxPQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTEosZUFTSSxxRUFBQyxHQUFELENBQUssSUFBTDtBQUFBLGlDQUNJLHFFQUFDLEdBQUQsQ0FBSyxJQUFMO0FBQVUsb0JBQVEsRUFBQyxTQUFuQjtBQUE2QixvQkFBUSxFQUFFLENBQUNILEtBQUssQ0FBQ1EsT0FBTixDQUFjRSxVQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEosZUFhSSxxRUFBQyxHQUFELENBQUssSUFBTDtBQUFBLGlDQUNJLHFFQUFDLEdBQUQsQ0FBSyxJQUFMO0FBQVUsb0JBQVEsRUFBQyxZQUFuQjtBQUFnQyxvQkFBUSxFQUFFLENBQUNWLEtBQUssQ0FBQ1EsT0FBTixDQUFjRyxhQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkosZUFpQkkscUVBQUMsR0FBRCxDQUFLLElBQUw7QUFBQSxpQ0FDSSxxRUFBQyxHQUFELENBQUssSUFBTDtBQUFVLG9CQUFRLEVBQUMsTUFBbkI7QUFBMEIsb0JBQVEsRUFBRSxDQUFDWCxLQUFLLENBQUNRLE9BQU4sQ0FBY0ksT0FBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWpCSixlQXFCSSxxRUFBQyxHQUFELENBQUssSUFBTDtBQUFBLGlDQUNJLHFFQUFDLEdBQUQsQ0FBSyxJQUFMO0FBQVUsb0JBQVEsRUFBQyxZQUFuQjtBQUFnQyxvQkFBUSxFQUFFLENBQUNaLEtBQUssQ0FBQ1EsT0FBTixDQUFjSyxhQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBckJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixFQStCS2IsS0FBSyxDQUFDYyxRQS9CWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFxQ0gsQ0E5Q0Q7O0dBQU1mLFM7VUFDYUcscUQ7OztLQURiSCxTOztBQWdETkEsU0FBUyxDQUFDZ0IsWUFBVixHQUF5QixNQUFPUixHQUFQLElBQWU7QUFDcEMsUUFBTVMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSxHQUFFQyxpREFBUSxDQUFDQyxHQUFJLFVBQVNaLEdBQUksRUFBOUIsQ0FBdkI7QUFDQSxRQUFNQyxPQUFPLEdBQUcsTUFBTVEsR0FBRyxDQUFDSSxJQUFKLEVBQXRCO0FBRUEsU0FBTztBQUNIWCxTQUFLLEVBQUVELE9BQU8sQ0FBQ2EsSUFBUixDQUFhWixLQURqQjtBQUdIQyxjQUFVLEVBQUVGLE9BQU8sQ0FBQ2MsT0FBUixJQUFtQkMsU0FINUI7QUFJSFosaUJBQWEsRUFBRUgsT0FBTyxDQUFDZ0IsVUFBUixJQUFzQkQsU0FBdEIsSUFBbUNmLE9BQU8sQ0FBQ2dCLFVBQVIsQ0FBbUJDLEVBQW5CLElBQXlCRixTQUp4RTtBQUtIVixpQkFBYSxFQUFFTCxPQUFPLENBQUNhLElBQVIsQ0FBYUssVUFBYixJQUEyQkgsU0FMdkM7QUFNSFgsV0FBTyxFQUFFSixPQUFPLENBQUNtQixJQUFSLElBQWdCSjtBQU50QixHQUFQO0FBUUgsQ0FaRDs7QUFjZXhCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZGVvL1t2aWRdLmExNDVjNThhZmFhNzRiZDc0MmQwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBFbmRwb2ludCBmcm9tICcuLi9FbmRwb2ludCc7XHJcblxyXG5jb25zdCBDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHRhYiA9IHByb3BzLnRhYjtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrVGFiKG5ld1RhYikge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvdmlkZW8vJHtwcm9wcy52aWR9LyR7bmV3VGFifWApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd2aWRlby1kZXRhaWxzLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGV0YWlscy50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwaWxsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e29uQ2xpY2tUYWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlS2V5PXt0YWJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJ2aWRlb1wiPlZpZGVvPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cInNvdXJjZXNcIiBkaXNhYmxlZD17IXByb3BzLmRldGFpbHMuaGFzU291cmNlc30+U291cmNlczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJ0cmFuc2NyaXB0XCIgZGlzYWJsZWQ9eyFwcm9wcy5kZXRhaWxzLmhhc1RyYW5zY3JpcHR9PlRyYW5zY3JpcHQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwidGFnc1wiIGRpc2FibGVkPXshcHJvcHMuZGV0YWlscy5oYXNUYWdzfT5UYWdzPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cInNvdW5kdHJhY2tcIiBkaXNhYmxlZD17IXByb3BzLmRldGFpbHMuaGFzU291bmRUcmFja30+U291bmR0cmFjazwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTmF2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LmZldGNoRGV0YWlscyA9IGFzeW5jICh2aWQpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0VuZHBvaW50LnVybH0vdmlkZW8vJHt2aWR9YCk7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiBkZXRhaWxzLmluZm8udGl0bGUsIFxyXG5cclxuICAgICAgICBoYXNTb3VyY2VzOiBkZXRhaWxzLnNvdXJjZXMgIT0gdW5kZWZpbmVkLCBcclxuICAgICAgICBoYXNUcmFuc2NyaXB0OiBkZXRhaWxzLnRyYW5zY3JpcHQgIT0gdW5kZWZpbmVkICYmIGRldGFpbHMudHJhbnNjcmlwdC5lbiAhPSB1bmRlZmluZWQsIFxyXG4gICAgICAgIGhhc1NvdW5kVHJhY2s6IGRldGFpbHMuaW5mby5zb3VuZHRyYWNrICE9IHVuZGVmaW5lZCwgXHJcbiAgICAgICAgaGFzVGFnczogZGV0YWlscy50YWdzICE9IHVuZGVmaW5lZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==