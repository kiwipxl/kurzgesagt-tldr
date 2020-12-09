webpackHotUpdate_N_E("pages/video/[vid]",{

/***/ "./src/pages/video/[vid]/index.js":
/*!****************************************!*\
  !*** ./src/pages/video/[vid]/index.js ***!
  \****************************************/
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
/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player/youtube */ "./node_modules/react-player/youtube.js");
/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_player_youtube__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LastUpdatedTimestamp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/LastUpdatedTimestamp */ "./src/components/LastUpdatedTimestamp.js");
/* harmony import */ var _components_VideoDetailsContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/VideoDetailsContainer */ "./src/components/VideoDetailsContainer.js");


var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\pages\\video\\[vid]\\index.js",
    _s = $RefreshSig$();






 // Quick and easy way to convert description to HTML elements

function parseDescription(desc) {
  desc = desc.replace(/\n/g, '\n');
  desc = desc.replace(/(.+)/g, (match, paragraph) => {
    return `<span>${paragraph}</span>`;
  });
  const urlRegex = /(http[s]?:\/\/[a-zA-Z0-9\-\_\*\?\=\&\.\/]+)([ \\n]?)/g;
  desc = desc.replace(urlRegex, (match, url, endChar) => {
    return `<a href="${url}" target="_blank">${url}</a>` + endChar;
  });
  desc = desc.replace(/\n/g, '<br/>');
  return html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(desc);
}

const Component = props => {
  _s();

  const [playerHeight, setPlayerHeight] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  const playerRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      const aspectRatio = 16.0 / 9.0;
      setPlayerHeight(entries[0].target.clientWidth / aspectRatio);
    });
    resizeObserver.observe(playerRef.current);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoDetailsContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    vid: props.vid,
    details: props.containerDetails,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "video-details-card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: playerRef,
        className: "youtube-player",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player_youtube__WEBPACK_IMPORTED_MODULE_4___default.a, {
          width: "100%",
          height: playerHeight,
          url: `https://www.youtube.com/watch?v=${props.vid}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
        children: parseDescription(props.description)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LastUpdatedTimestamp__WEBPACK_IMPORTED_MODULE_5__["default"], {
      timestampMillis: props.lastUpdated
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 9
  }, undefined);
};

_s(Component, "l7dLGo8PcLvS4g4AIQudMaLP7AU=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvL1t2aWRdL2luZGV4LmpzIl0sIm5hbWVzIjpbInBhcnNlRGVzY3JpcHRpb24iLCJkZXNjIiwicmVwbGFjZSIsIm1hdGNoIiwicGFyYWdyYXBoIiwidXJsUmVnZXgiLCJ1cmwiLCJlbmRDaGFyIiwicGFyc2UiLCJDb21wb25lbnQiLCJwcm9wcyIsInBsYXllckhlaWdodCIsInNldFBsYXllckhlaWdodCIsIlJlYWN0IiwidXNlU3RhdGUiLCJwbGF5ZXJSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImFzcGVjdFJhdGlvIiwidGFyZ2V0IiwiY2xpZW50V2lkdGgiLCJvYnNlcnZlIiwiY3VycmVudCIsInZpZCIsImNvbnRhaW5lckRldGFpbHMiLCJkZXNjcmlwdGlvbiIsImxhc3RVcGRhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLFNBQVNBLGdCQUFULENBQTBCQyxJQUExQixFQUFnQztBQUM1QkEsTUFBSSxHQUFHQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxLQUFiLEVBQW9CLElBQXBCLENBQVA7QUFDQUQsTUFBSSxHQUFHQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLENBQUNDLEtBQUQsRUFBUUMsU0FBUixLQUFzQjtBQUMvQyxXQUFRLFNBQVFBLFNBQVUsU0FBMUI7QUFDSCxHQUZNLENBQVA7QUFJQSxRQUFNQyxRQUFRLEdBQUcsdURBQWpCO0FBQ0FKLE1BQUksR0FBR0EsSUFBSSxDQUFDQyxPQUFMLENBQWFHLFFBQWIsRUFBdUIsQ0FBQ0YsS0FBRCxFQUFRRyxHQUFSLEVBQWFDLE9BQWIsS0FBeUI7QUFDbkQsV0FBUSxZQUFXRCxHQUFJLHFCQUFvQkEsR0FBSSxNQUF4QyxHQUFnREMsT0FBdkQ7QUFDSCxHQUZNLENBQVA7QUFJQU4sTUFBSSxHQUFHQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxLQUFiLEVBQW9CLE9BQXBCLENBQVA7QUFFQSxTQUFPTSx3REFBSyxDQUFDUCxJQUFELENBQVo7QUFDSDs7QUFFRCxNQUFNUSxTQUFTLEdBQUlDLEtBQUQsSUFBVztBQUFBOztBQUN6QixRQUFNLENBQUNDLFlBQUQsRUFBZUMsZUFBZixJQUFrQ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FBeEM7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLDRDQUFLLENBQUNHLE1BQU4sQ0FBYSxJQUFiLENBQWxCO0FBRUFILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsTUFBTTtBQUNsQixVQUFNQyxjQUFjLEdBQUcsSUFBSUMsY0FBSixDQUFtQkMsT0FBTyxJQUFJO0FBQ2pELFlBQU1DLFdBQVcsR0FBRyxPQUFPLEdBQTNCO0FBQ0FULHFCQUFlLENBQUNRLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0UsTUFBWCxDQUFrQkMsV0FBbEIsR0FBZ0NGLFdBQWpDLENBQWY7QUFDSCxLQUhzQixDQUF2QjtBQUtBSCxrQkFBYyxDQUFDTSxPQUFmLENBQXVCVCxTQUFTLENBQUNVLE9BQWpDO0FBQ0gsR0FQRCxFQU9HLEVBUEg7QUFTQSxzQkFDSSxxRUFBQyx5RUFBRDtBQUF1QixPQUFHLEVBQUVmLEtBQUssQ0FBQ2dCLEdBQWxDO0FBQXVDLFdBQU8sRUFBRWhCLEtBQUssQ0FBQ2lCLGdCQUF0RDtBQUFBLDRCQUNJLHFFQUFDLDREQUFEO0FBQU0sZUFBUyxFQUFDLG9CQUFoQjtBQUFBLDhCQUNJO0FBQUssV0FBRyxFQUFFWixTQUFWO0FBQXFCLGlCQUFTLEVBQUMsZ0JBQS9CO0FBQUEsK0JBQ0kscUVBQUMsMkRBQUQ7QUFDSSxlQUFLLEVBQUMsTUFEVjtBQUVJLGdCQUFNLEVBQUVKLFlBRlo7QUFHSSxhQUFHLEVBQUcsbUNBQWtDRCxLQUFLLENBQUNnQixHQUFJO0FBSHREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBU0kscUVBQUMsNERBQUQsQ0FBTSxJQUFOO0FBQUEsa0JBQ0sxQixnQkFBZ0IsQ0FBQ1UsS0FBSyxDQUFDa0IsV0FBUDtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQWVJLHFFQUFDLHdFQUFEO0FBQXNCLHFCQUFlLEVBQUVsQixLQUFLLENBQUNtQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBbUJILENBaENEOztHQUFNcEIsUzs7S0FBQUEsUzs7QUFrQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZGVvL1t2aWRdLmYyMzNkOWVmZDM2MjZhNWIwMGNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xyXG5pbXBvcnQgcGFyc2UgZnJvbSAnaHRtbC1yZWFjdC1wYXJzZXInO1xyXG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyL3lvdXR1YmUnO1xyXG5pbXBvcnQgTGFzdFVwZGF0ZWRUaW1lc3RhbXAgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9MYXN0VXBkYXRlZFRpbWVzdGFtcCc7XHJcbmltcG9ydCBFbmRwb2ludCBmcm9tICcuLi8uLi8uLi9FbmRwb2ludCc7XHJcbmltcG9ydCBWaWRlb0RldGFpbHNDb250YWluZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9WaWRlb0RldGFpbHNDb250YWluZXInO1xyXG5cclxuLy8gUXVpY2sgYW5kIGVhc3kgd2F5IHRvIGNvbnZlcnQgZGVzY3JpcHRpb24gdG8gSFRNTCBlbGVtZW50c1xyXG5mdW5jdGlvbiBwYXJzZURlc2NyaXB0aW9uKGRlc2MpIHtcclxuICAgIGRlc2MgPSBkZXNjLnJlcGxhY2UoL1xcbi9nLCAnXFxuJyk7XHJcbiAgICBkZXNjID0gZGVzYy5yZXBsYWNlKC8oLispL2csIChtYXRjaCwgcGFyYWdyYXBoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGA8c3Bhbj4ke3BhcmFncmFwaH08L3NwYW4+YDtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHVybFJlZ2V4ID0gLyhodHRwW3NdPzpcXC9cXC9bYS16QS1aMC05XFwtXFxfXFwqXFw/XFw9XFwmXFwuXFwvXSspKFsgXFxcXG5dPykvZztcclxuICAgIGRlc2MgPSBkZXNjLnJlcGxhY2UodXJsUmVnZXgsIChtYXRjaCwgdXJsLCBlbmRDaGFyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGA8YSBocmVmPVwiJHt1cmx9XCIgdGFyZ2V0PVwiX2JsYW5rXCI+JHt1cmx9PC9hPmAgKyBlbmRDaGFyO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZGVzYyA9IGRlc2MucmVwbGFjZSgvXFxuL2csICc8YnIvPicpO1xyXG5cclxuICAgIHJldHVybiBwYXJzZShkZXNjKTtcclxufVxyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbcGxheWVySGVpZ2h0LCBzZXRQbGF5ZXJIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBwbGF5ZXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYXNwZWN0UmF0aW8gPSAxNi4wIC8gOS4wO1xyXG4gICAgICAgICAgICBzZXRQbGF5ZXJIZWlnaHQoZW50cmllc1swXS50YXJnZXQuY2xpZW50V2lkdGggLyBhc3BlY3RSYXRpbyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUocGxheWVyUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFZpZGVvRGV0YWlsc0NvbnRhaW5lciB2aWQ9e3Byb3BzLnZpZH0gZGV0YWlscz17cHJvcHMuY29udGFpbmVyRGV0YWlsc30+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0ndmlkZW8tZGV0YWlscy1jYXJkJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtwbGF5ZXJSZWZ9IGNsYXNzTmFtZT0neW91dHViZS1wbGF5ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMTAwJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtwbGF5ZXJIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9JHtwcm9wcy52aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICB7cGFyc2VEZXNjcmlwdGlvbihwcm9wcy5kZXNjcmlwdGlvbil9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgPExhc3RVcGRhdGVkVGltZXN0YW1wIHRpbWVzdGFtcE1pbGxpcz17cHJvcHMubGFzdFVwZGF0ZWR9Lz5cclxuICAgICAgICA8L1ZpZGVvRGV0YWlsc0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7RW5kcG9pbnQudXJsfS92aWRlby9pbmZvLyR7cGFyYW1zLnZpZH1gKTtcclxuICAgIGNvbnN0IGluZm8gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhaW5lckRldGFpbHMgPSBhd2FpdCBWaWRlb0RldGFpbHNDb250YWluZXIuZmV0Y2hEZXRhaWxzKHBhcmFtcy52aWQpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmlkOiBwYXJhbXMudmlkLCBcclxuICAgICAgICAgICAgY29udGFpbmVyRGV0YWlsczogY29udGFpbmVyRGV0YWlscywgXHJcblxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogaW5mby5kZXNjcmlwdGlvbiwgXHJcbiAgICAgICAgICAgIGxhc3RVcGRhdGVkOiBpbmZvLmxhc3Rfc2NyYXBlZCwgXHJcblxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgIHNob3dCYWNrOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgc3RhcnRBdDogMCwgXHJcbiAgICAgIG1heFJlc3VsdHM6IDEwMDBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7RW5kcG9pbnQudXJsfS8/JHtxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKX1gKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBwYXRocyA9IGl0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICB7IHBhcmFtczogeyB2aWQ6IGl0ZW0uaWQgfX1cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsIFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=