webpackHotUpdate_N_E("pages/video/[vid]",{

/***/ "./src/components/VideoDetailsContainer.js":
/*!*************************************************!*\
  !*** ./src/components/VideoDetailsContainer.js ***!
  \*************************************************/
/*! exports provided: default, fetchDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDetails", function() { return fetchDetails; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Endpoint */ "./src/Endpoint.js");


var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\components\\VideoDetailsContainer.js",
    _s = $RefreshSig$();




/* harmony default export */ __webpack_exports__["default"] = (_s(props => {
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
}, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
}));
async function fetchDetails(vid) {
  const res = await fetch(`${_Endpoint__WEBPACK_IMPORTED_MODULE_3__["default"].url}/video/${vid}`);
  const details = await res.json();
  return {
    title: details.info.title,
    hasSources: details.sources != undefined,
    hasTranscript: details.transcript != undefined && details.transcript.en != undefined,
    hasSoundTrack: details.info.soundtrack != undefined,
    hasTags: details.tags != undefined
  };
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9EZXRhaWxzQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidGFiIiwib25DbGlja1RhYiIsIm5ld1RhYiIsInB1c2giLCJ2aWQiLCJkZXRhaWxzIiwidGl0bGUiLCJoYXNTb3VyY2VzIiwiaGFzVHJhbnNjcmlwdCIsImhhc1RhZ3MiLCJoYXNTb3VuZFRyYWNrIiwiY2hpbGRyZW4iLCJmZXRjaERldGFpbHMiLCJyZXMiLCJmZXRjaCIsIkVuZHBvaW50IiwidXJsIiwianNvbiIsImluZm8iLCJzb3VyY2VzIiwidW5kZWZpbmVkIiwidHJhbnNjcmlwdCIsImVuIiwic291bmR0cmFjayIsInRhZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLGtFQUFDQSxLQUFELElBQVc7QUFBQTs7QUFDdEIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBLFFBQU1DLEdBQUcsR0FBR0gsS0FBSyxDQUFDRyxHQUFsQjs7QUFFQSxXQUFTQyxVQUFULENBQW9CQyxNQUFwQixFQUE0QjtBQUN4QkosVUFBTSxDQUFDSyxJQUFQLENBQWEsVUFBU04sS0FBSyxDQUFDTyxHQUFJLElBQUdGLE1BQU8sRUFBMUM7QUFDSDs7QUFFRCxzQkFDSTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSw4QkFDSTtBQUFJLGlCQUFTLEVBQUMscUJBQWQ7QUFBQSxrQkFDS0wsS0FBSyxDQUFDUSxPQUFOLENBQWNDO0FBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFLSSxxRUFBQyxHQUFEO0FBQ0ksZUFBTyxFQUFDLE9BRFo7QUFFSSxnQkFBUSxFQUFFTCxVQUZkO0FBR0ksaUJBQVMsRUFBRUQsR0FIZjtBQUFBLGdDQUtJLHFFQUFDLEdBQUQsQ0FBSyxJQUFMO0FBQUEsaUNBQ0kscUVBQUMsR0FBRCxDQUFLLElBQUw7QUFBVSxvQkFBUSxFQUFDLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMSixlQVNJLHFFQUFDLEdBQUQsQ0FBSyxJQUFMO0FBQUEsaUNBQ0kscUVBQUMsR0FBRCxDQUFLLElBQUw7QUFBVSxvQkFBUSxFQUFDLFNBQW5CO0FBQTZCLG9CQUFRLEVBQUUsQ0FBQ0gsS0FBSyxDQUFDUSxPQUFOLENBQWNFLFVBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFUSixlQWFJLHFFQUFDLEdBQUQsQ0FBSyxJQUFMO0FBQUEsaUNBQ0kscUVBQUMsR0FBRCxDQUFLLElBQUw7QUFBVSxvQkFBUSxFQUFDLFlBQW5CO0FBQWdDLG9CQUFRLEVBQUUsQ0FBQ1YsS0FBSyxDQUFDUSxPQUFOLENBQWNHLGFBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiSixlQWlCSSxxRUFBQyxHQUFELENBQUssSUFBTDtBQUFBLGlDQUNJLHFFQUFDLEdBQUQsQ0FBSyxJQUFMO0FBQVUsb0JBQVEsRUFBQyxNQUFuQjtBQUEwQixvQkFBUSxFQUFFLENBQUNYLEtBQUssQ0FBQ1EsT0FBTixDQUFjSSxPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBakJKLGVBcUJJLHFFQUFDLEdBQUQsQ0FBSyxJQUFMO0FBQUEsaUNBQ0kscUVBQUMsR0FBRCxDQUFLLElBQUw7QUFBVSxvQkFBUSxFQUFDLFlBQW5CO0FBQWdDLG9CQUFRLEVBQUUsQ0FBQ1osS0FBSyxDQUFDUSxPQUFOLENBQWNLLGFBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFyQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxKLEVBK0JLYixLQUFLLENBQUNjLFFBL0JYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXFDSCxDQTlDRDtBQUFBLFVBQ21CWixxREFEbkI7QUFBQTtBQWdETyxlQUFlYSxZQUFmLENBQTRCUixHQUE1QixFQUFpQztBQUNwQyxRQUFNUyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLGlEQUFRLENBQUNDLEdBQUksVUFBU1osR0FBSSxFQUE5QixDQUF2QjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxNQUFNUSxHQUFHLENBQUNJLElBQUosRUFBdEI7QUFFQSxTQUFPO0FBQ0hYLFNBQUssRUFBRUQsT0FBTyxDQUFDYSxJQUFSLENBQWFaLEtBRGpCO0FBR0hDLGNBQVUsRUFBRUYsT0FBTyxDQUFDYyxPQUFSLElBQW1CQyxTQUg1QjtBQUlIWixpQkFBYSxFQUFFSCxPQUFPLENBQUNnQixVQUFSLElBQXNCRCxTQUF0QixJQUFtQ2YsT0FBTyxDQUFDZ0IsVUFBUixDQUFtQkMsRUFBbkIsSUFBeUJGLFNBSnhFO0FBS0hWLGlCQUFhLEVBQUVMLE9BQU8sQ0FBQ2EsSUFBUixDQUFhSyxVQUFiLElBQTJCSCxTQUx2QztBQU1IWCxXQUFPLEVBQUVKLE9BQU8sQ0FBQ21CLElBQVIsSUFBZ0JKO0FBTnRCLEdBQVA7QUFRSCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aWRlby9bdmlkXS5lMzdmN2FjN2EwMTc1MjI5NzRmZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgRW5kcG9pbnQgZnJvbSAnLi4vRW5kcG9pbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCB0YWIgPSBwcm9wcy50YWI7XHJcblxyXG4gICAgZnVuY3Rpb24gb25DbGlja1RhYihuZXdUYWIpIHtcclxuICAgICAgICByb3V0ZXIucHVzaChgL3ZpZGVvLyR7cHJvcHMudmlkfS8ke25ld1RhYn1gKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndmlkZW8tZGV0YWlscy10aXRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRldGFpbHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicGlsbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtvbkNsaWNrVGFifVxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUtleT17dGFifVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwidmlkZW9cIj5WaWRlbzwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJzb3VyY2VzXCIgZGlzYWJsZWQ9eyFwcm9wcy5kZXRhaWxzLmhhc1NvdXJjZXN9PlNvdXJjZXM8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwidHJhbnNjcmlwdFwiIGRpc2FibGVkPXshcHJvcHMuZGV0YWlscy5oYXNUcmFuc2NyaXB0fT5UcmFuc2NyaXB0PC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cInRhZ3NcIiBkaXNhYmxlZD17IXByb3BzLmRldGFpbHMuaGFzVGFnc30+VGFnczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJzb3VuZHRyYWNrXCIgZGlzYWJsZWQ9eyFwcm9wcy5kZXRhaWxzLmhhc1NvdW5kVHJhY2t9PlNvdW5kdHJhY2s8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L05hdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaERldGFpbHModmlkKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtFbmRwb2ludC51cmx9L3ZpZGVvLyR7dmlkfWApO1xyXG4gICAgY29uc3QgZGV0YWlscyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogZGV0YWlscy5pbmZvLnRpdGxlLCBcclxuXHJcbiAgICAgICAgaGFzU291cmNlczogZGV0YWlscy5zb3VyY2VzICE9IHVuZGVmaW5lZCwgXHJcbiAgICAgICAgaGFzVHJhbnNjcmlwdDogZGV0YWlscy50cmFuc2NyaXB0ICE9IHVuZGVmaW5lZCAmJiBkZXRhaWxzLnRyYW5zY3JpcHQuZW4gIT0gdW5kZWZpbmVkLCBcclxuICAgICAgICBoYXNTb3VuZFRyYWNrOiBkZXRhaWxzLmluZm8uc291bmR0cmFjayAhPSB1bmRlZmluZWQsIFxyXG4gICAgICAgIGhhc1RhZ3M6IGRldGFpbHMudGFncyAhPSB1bmRlZmluZWRcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=