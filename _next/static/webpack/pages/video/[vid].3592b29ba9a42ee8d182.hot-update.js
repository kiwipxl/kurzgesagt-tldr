webpackHotUpdate_N_E("pages/video/[vid]",{

/***/ "./src/components/Video.js":
/*!*********************************!*\
  !*** ./src/components/Video.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html-react-parser */ "./node_modules/html-react-parser/index.js");
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player/youtube */ "./node_modules/react-player/youtube.js");
/* harmony import */ var react_player_youtube__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_player_youtube__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LastUpdatedTimestamp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LastUpdatedTimestamp */ "./src/components/LastUpdatedTimestamp.js");


var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\components\\Video.js",
    _s = $RefreshSig$();





 // Quick and easy way to convert description to HTML elements

function parseDescription(desc) {
  desc = desc.replaceAll("\n", '\n');
  desc = desc.replaceAll(/(.+)/g, (match, paragraph) => {
    return `<span>${paragraph}</span>`;
  });
  const urlRegex = /(http[s]?:\/\/[a-zA-Z0-9\-\_\*\?\=\&\.\/]+)([ \\n]?)/g;
  desc = desc.replaceAll(urlRegex, (match, url, endChar) => {
    return `<a href="${url}" target="_blank">${url}</a>` + endChar;
  });
  desc = desc.replaceAll('\n', "<br/>");
  return html_react_parser__WEBPACK_IMPORTED_MODULE_3___default()(desc);
}

/* harmony default export */ __webpack_exports__["default"] = (_s(props => {
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "video-details-card",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        ref: playerRef,
        className: "youtube-player",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_player_youtube__WEBPACK_IMPORTED_MODULE_4___default.a, {
          width: "100%",
          height: playerHeight,
          url: `https://www.youtube.com/watch?v=${props.id}`
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
        children: parseDescription(props.description)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LastUpdatedTimestamp__WEBPACK_IMPORTED_MODULE_5__["default"], {
      timestampMillis: props.lastUpdated
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 9
  }, undefined);
}, "l7dLGo8PcLvS4g4AIQudMaLP7AU="));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW8uanMiXSwibmFtZXMiOlsicGFyc2VEZXNjcmlwdGlvbiIsImRlc2MiLCJyZXBsYWNlQWxsIiwibWF0Y2giLCJwYXJhZ3JhcGgiLCJ1cmxSZWdleCIsInVybCIsImVuZENoYXIiLCJwYXJzZSIsInByb3BzIiwicGxheWVySGVpZ2h0Iiwic2V0UGxheWVySGVpZ2h0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInBsYXllclJlZiIsInVzZVJlZiIsInVzZUVmZmVjdCIsInJlc2l6ZU9ic2VydmVyIiwiUmVzaXplT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiYXNwZWN0UmF0aW8iLCJ0YXJnZXQiLCJjbGllbnRXaWR0aCIsIm9ic2VydmUiLCJjdXJyZW50IiwiaWQiLCJkZXNjcmlwdGlvbiIsImxhc3RVcGRhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsU0FBU0EsZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQWdDO0FBQzVCQSxNQUFJLEdBQUdBLElBQUksQ0FBQ0MsVUFBTCxDQUFnQixJQUFoQixFQUFzQixJQUF0QixDQUFQO0FBQ0FELE1BQUksR0FBR0EsSUFBSSxDQUFDQyxVQUFMLENBQWdCLE9BQWhCLEVBQXlCLENBQUNDLEtBQUQsRUFBUUMsU0FBUixLQUFzQjtBQUNsRCxXQUFRLFNBQVFBLFNBQVUsU0FBMUI7QUFDSCxHQUZNLENBQVA7QUFJQSxRQUFNQyxRQUFRLEdBQUcsdURBQWpCO0FBQ0FKLE1BQUksR0FBR0EsSUFBSSxDQUFDQyxVQUFMLENBQWdCRyxRQUFoQixFQUEwQixDQUFDRixLQUFELEVBQVFHLEdBQVIsRUFBYUMsT0FBYixLQUF5QjtBQUN0RCxXQUFRLFlBQVdELEdBQUkscUJBQW9CQSxHQUFJLE1BQXhDLEdBQWdEQyxPQUF2RDtBQUNILEdBRk0sQ0FBUDtBQUlBTixNQUFJLEdBQUdBLElBQUksQ0FBQ0MsVUFBTCxDQUFnQixJQUFoQixFQUFzQixPQUF0QixDQUFQO0FBRUEsU0FBT00sd0RBQUssQ0FBQ1AsSUFBRCxDQUFaO0FBQ0g7O0FBRWMsa0VBQUNRLEtBQUQsSUFBVztBQUFBOztBQUN0QixRQUFNLENBQUNDLFlBQUQsRUFBZUMsZUFBZixJQUFrQ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FBeEM7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLDRDQUFLLENBQUNHLE1BQU4sQ0FBYSxJQUFiLENBQWxCO0FBRUFILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsTUFBTTtBQUNsQixVQUFNQyxjQUFjLEdBQUcsSUFBSUMsY0FBSixDQUFtQkMsT0FBTyxJQUFJO0FBQ2pELFlBQU1DLFdBQVcsR0FBRyxPQUFPLEdBQTNCO0FBQ0FULHFCQUFlLENBQUNRLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0UsTUFBWCxDQUFrQkMsV0FBbEIsR0FBZ0NGLFdBQWpDLENBQWY7QUFDSCxLQUhzQixDQUF2QjtBQUtBSCxrQkFBYyxDQUFDTSxPQUFmLENBQXVCVCxTQUFTLENBQUNVLE9BQWpDO0FBQ0gsR0FQRCxFQU9HLEVBUEg7QUFTQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLDREQUFEO0FBQU0sZUFBUyxFQUFDLG9CQUFoQjtBQUFBLDhCQUNJO0FBQUssV0FBRyxFQUFFVixTQUFWO0FBQXFCLGlCQUFTLEVBQUMsZ0JBQS9CO0FBQUEsK0JBQ0kscUVBQUMsMkRBQUQ7QUFDSSxlQUFLLEVBQUMsTUFEVjtBQUVJLGdCQUFNLEVBQUVKLFlBRlo7QUFHSSxhQUFHLEVBQUcsbUNBQWtDRCxLQUFLLENBQUNnQixFQUFHO0FBSHJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBU0kscUVBQUMsNERBQUQsQ0FBTSxJQUFOO0FBQUEsa0JBQ0t6QixnQkFBZ0IsQ0FBQ1MsS0FBSyxDQUFDaUIsV0FBUDtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQWVJLHFFQUFDLDZEQUFEO0FBQXNCLHFCQUFlLEVBQUVqQixLQUFLLENBQUNrQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBbUJILENBaENEIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZGVvL1t2aWRdLjM1OTJiMjliYTlhNDJlZThkMTgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XHJcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XHJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tICdyZWFjdC1wbGF5ZXIveW91dHViZSc7XHJcbmltcG9ydCBMYXN0VXBkYXRlZFRpbWVzdGFtcCBmcm9tICcuL0xhc3RVcGRhdGVkVGltZXN0YW1wJztcclxuXHJcbi8vIFF1aWNrIGFuZCBlYXN5IHdheSB0byBjb252ZXJ0IGRlc2NyaXB0aW9uIHRvIEhUTUwgZWxlbWVudHNcclxuZnVuY3Rpb24gcGFyc2VEZXNjcmlwdGlvbihkZXNjKSB7XHJcbiAgICBkZXNjID0gZGVzYy5yZXBsYWNlQWxsKFwiXFxuXCIsICdcXG4nKTtcclxuICAgIGRlc2MgPSBkZXNjLnJlcGxhY2VBbGwoLyguKykvZywgKG1hdGNoLCBwYXJhZ3JhcGgpID0+IHtcclxuICAgICAgICByZXR1cm4gYDxzcGFuPiR7cGFyYWdyYXBofTwvc3Bhbj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdXJsUmVnZXggPSAvKGh0dHBbc10/OlxcL1xcL1thLXpBLVowLTlcXC1cXF9cXCpcXD9cXD1cXCZcXC5cXC9dKykoWyBcXFxcbl0/KS9nO1xyXG4gICAgZGVzYyA9IGRlc2MucmVwbGFjZUFsbCh1cmxSZWdleCwgKG1hdGNoLCB1cmwsIGVuZENoYXIpID0+IHtcclxuICAgICAgICByZXR1cm4gYDxhIGhyZWY9XCIke3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3VybH08L2E+YCArIGVuZENoYXI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkZXNjID0gZGVzYy5yZXBsYWNlQWxsKCdcXG4nLCBcIjxici8+XCIpO1xyXG5cclxuICAgIHJldHVybiBwYXJzZShkZXNjKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbcGxheWVySGVpZ2h0LCBzZXRQbGF5ZXJIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBwbGF5ZXJSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gMTYuMCAvIDkuMDtcclxuICAgICAgICAgICAgc2V0UGxheWVySGVpZ2h0KGVudHJpZXNbMF0udGFyZ2V0LmNsaWVudFdpZHRoIC8gYXNwZWN0UmF0aW8pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKHBsYXllclJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J3ZpZGVvLWRldGFpbHMtY2FyZCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cGxheWVyUmVmfSBjbGFzc05hbWU9J3lvdXR1YmUtcGxheWVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17cGxheWVySGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSR7cHJvcHMuaWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICB7cGFyc2VEZXNjcmlwdGlvbihwcm9wcy5kZXNjcmlwdGlvbil9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgPExhc3RVcGRhdGVkVGltZXN0YW1wIHRpbWVzdGFtcE1pbGxpcz17cHJvcHMubGFzdFVwZGF0ZWR9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==