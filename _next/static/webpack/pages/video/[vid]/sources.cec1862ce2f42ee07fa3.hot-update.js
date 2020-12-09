webpackHotUpdate_N_E("pages/video/[vid]/sources",{

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
        defaultActiveKey: props.tab,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            href: `${urlPrefix}`,
            eventKey: "video",
            children: "Video"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            href: `${urlPrefix}/sources`,
            eventKey: "sources",
            disabled: !props.details.hasSources,
            children: "Sources"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            href: `${urlPrefix}/transcript`,
            eventKey: "transcript",
            disabled: !props.details.hasTranscript,
            children: "Transcript"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            href: `${urlPrefix}/tags`,
            eventKey: "tags",
            disabled: !props.details.hasTags,
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            href: `${urlPrefix}/soundtrack`,
            eventKey: "soundtrack",
            disabled: !props.details.hasSoundTrack,
            children: "Soundtrack"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9EZXRhaWxzQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXJsUHJlZml4IiwiYmFzZVBhdGgiLCJ2aWQiLCJkZXRhaWxzIiwidGl0bGUiLCJ0YWIiLCJoYXNTb3VyY2VzIiwiaGFzVHJhbnNjcmlwdCIsImhhc1RhZ3MiLCJoYXNTb3VuZFRyYWNrIiwiY2hpbGRyZW4iLCJmZXRjaERldGFpbHMiLCJyZXMiLCJmZXRjaCIsIkVuZHBvaW50IiwidXJsIiwianNvbiIsImluZm8iLCJzb3VyY2VzIiwidW5kZWZpbmVkIiwidHJhbnNjcmlwdCIsImVuIiwic291bmR0cmFjayIsInRhZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBSUMsS0FBRCxJQUFXO0FBQUE7O0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQSxRQUFNQyxTQUFTLEdBQUksR0FBRUYsTUFBTSxDQUFDRyxRQUFTLFVBQVNKLEtBQUssQ0FBQ0ssR0FBSSxFQUF4RDtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBQyxxQkFBZDtBQUFBLGtCQUNLTCxLQUFLLENBQUNNLE9BQU4sQ0FBY0M7QUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUtJLHFFQUFDLDJEQUFEO0FBQ0ksZUFBTyxFQUFDLE9BRFo7QUFFSSxpQkFBUyxFQUFFUCxLQUFLLENBQUNRLEdBRnJCO0FBR0ksd0JBQWdCLEVBQUVSLEtBQUssQ0FBQ1EsR0FINUI7QUFBQSxnQ0FLSSxxRUFBQywyREFBRCxDQUFLLElBQUw7QUFBQSxpQ0FDSSxxRUFBQywyREFBRCxDQUFLLElBQUw7QUFDSSxnQkFBSSxFQUFHLEdBQUVMLFNBQVUsRUFEdkI7QUFFSSxvQkFBUSxFQUFDLE9BRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLGVBY0kscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQUEsaUNBQ0kscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQ0ksZ0JBQUksRUFBRyxHQUFFQSxTQUFVLFVBRHZCO0FBRUksb0JBQVEsRUFBQyxTQUZiO0FBR0ksb0JBQVEsRUFBRSxDQUFDSCxLQUFLLENBQUNNLE9BQU4sQ0FBY0csVUFIN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWRKLGVBd0JJLHFFQUFDLDJEQUFELENBQUssSUFBTDtBQUFBLGlDQUNJLHFFQUFDLDJEQUFELENBQUssSUFBTDtBQUNJLGdCQUFJLEVBQUcsR0FBRU4sU0FBVSxhQUR2QjtBQUVJLG9CQUFRLEVBQUMsWUFGYjtBQUdJLG9CQUFRLEVBQUUsQ0FBQ0gsS0FBSyxDQUFDTSxPQUFOLENBQWNJLGFBSDdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF4QkosZUFrQ0kscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQUEsaUNBQ0kscUVBQUMsMkRBQUQsQ0FBSyxJQUFMO0FBQ0ksZ0JBQUksRUFBRyxHQUFFUCxTQUFVLE9BRHZCO0FBRUksb0JBQVEsRUFBQyxNQUZiO0FBR0ksb0JBQVEsRUFBRSxDQUFDSCxLQUFLLENBQUNNLE9BQU4sQ0FBY0ssT0FIN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWxDSixlQTRDSSxxRUFBQywyREFBRCxDQUFLLElBQUw7QUFBQSxpQ0FDSSxxRUFBQywyREFBRCxDQUFLLElBQUw7QUFDSSxnQkFBSSxFQUFHLEdBQUVSLFNBQVUsYUFEdkI7QUFFSSxvQkFBUSxFQUFDLFlBRmI7QUFHSSxvQkFBUSxFQUFFLENBQUNILEtBQUssQ0FBQ00sT0FBTixDQUFjTSxhQUg3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBNUNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixFQTRES1osS0FBSyxDQUFDYSxRQTVEWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFrRUgsQ0F2RUQ7O0dBQU1kLFM7VUFDYUcscUQ7OztLQURiSCxTOztBQXlFTkEsU0FBUyxDQUFDZSxZQUFWLEdBQXlCLE1BQU9ULEdBQVAsSUFBZTtBQUNwQyxRQUFNVSxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLGlEQUFRLENBQUNDLEdBQUksVUFBU2IsR0FBSSxFQUE5QixDQUF2QjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxNQUFNUyxHQUFHLENBQUNJLElBQUosRUFBdEI7QUFFQSxTQUFPO0FBQ0haLFNBQUssRUFBRUQsT0FBTyxDQUFDYyxJQUFSLENBQWFiLEtBRGpCO0FBR0hFLGNBQVUsRUFBRUgsT0FBTyxDQUFDZSxPQUFSLElBQW1CQyxTQUg1QjtBQUlIWixpQkFBYSxFQUFFSixPQUFPLENBQUNpQixVQUFSLElBQXNCRCxTQUF0QixJQUFtQ2hCLE9BQU8sQ0FBQ2lCLFVBQVIsQ0FBbUJDLEVBQW5CLElBQXlCRixTQUp4RTtBQUtIVixpQkFBYSxFQUFFTixPQUFPLENBQUNjLElBQVIsQ0FBYUssVUFBYixJQUEyQkgsU0FMdkM7QUFNSFgsV0FBTyxFQUFFTCxPQUFPLENBQUNvQixJQUFSLElBQWdCSjtBQU50QixHQUFQO0FBUUgsQ0FaRDs7QUFjZXZCLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZGVvL1t2aWRdL3NvdXJjZXMuY2VjMTg2MmNlMmY0MmVlMDdmYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBOYXYgZnJvbSAncmVhY3QtYm9vdHN0cmFwL05hdic7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IEVuZHBvaW50IGZyb20gJy4uL0VuZHBvaW50JztcclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gICAgY29uc3QgdXJsUHJlZml4ID0gYCR7cm91dGVyLmJhc2VQYXRofS92aWRlby8ke3Byb3BzLnZpZH1gO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndmlkZW8tZGV0YWlscy10aXRsZSc+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmRldGFpbHMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgICAgIDxOYXZcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwicGlsbHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZUtleT17cHJvcHMudGFifVxyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRBY3RpdmVLZXk9e3Byb3BzLnRhYn1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7dXJsUHJlZml4fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEtleT1cInZpZGVvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlkZW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7dXJsUHJlZml4fS9zb3VyY2VzYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50S2V5PVwic291cmNlc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXByb3BzLmRldGFpbHMuaGFzU291cmNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU291cmNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgJHt1cmxQcmVmaXh9L3RyYW5zY3JpcHRgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRLZXk9XCJ0cmFuc2NyaXB0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXshcHJvcHMuZGV0YWlscy5oYXNUcmFuc2NyaXB0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcmFuc2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2Ake3VybFByZWZpeH0vdGFnc2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudEtleT1cInRhZ3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFwcm9wcy5kZXRhaWxzLmhhc1RhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YCR7dXJsUHJlZml4fS9zb3VuZHRyYWNrYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50S2V5PVwic291bmR0cmFja1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXByb3BzLmRldGFpbHMuaGFzU291bmRUcmFja31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU291bmR0cmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICA8L05hdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbkNvbXBvbmVudC5mZXRjaERldGFpbHMgPSBhc3luYyAodmlkKSA9PiB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtFbmRwb2ludC51cmx9L3ZpZGVvLyR7dmlkfWApO1xyXG4gICAgY29uc3QgZGV0YWlscyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogZGV0YWlscy5pbmZvLnRpdGxlLCBcclxuXHJcbiAgICAgICAgaGFzU291cmNlczogZGV0YWlscy5zb3VyY2VzICE9IHVuZGVmaW5lZCwgXHJcbiAgICAgICAgaGFzVHJhbnNjcmlwdDogZGV0YWlscy50cmFuc2NyaXB0ICE9IHVuZGVmaW5lZCAmJiBkZXRhaWxzLnRyYW5zY3JpcHQuZW4gIT0gdW5kZWZpbmVkLCBcclxuICAgICAgICBoYXNTb3VuZFRyYWNrOiBkZXRhaWxzLmluZm8uc291bmR0cmFjayAhPSB1bmRlZmluZWQsIFxyXG4gICAgICAgIGhhc1RhZ3M6IGRldGFpbHMudGFncyAhPSB1bmRlZmluZWRcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50OyJdLCJzb3VyY2VSb290IjoiIn0=