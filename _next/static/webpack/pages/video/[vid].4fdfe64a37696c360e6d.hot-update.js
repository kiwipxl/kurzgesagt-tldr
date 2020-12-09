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
    tab: "video",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvL1t2aWRdL2luZGV4LmpzIl0sIm5hbWVzIjpbInBhcnNlRGVzY3JpcHRpb24iLCJkZXNjIiwicmVwbGFjZSIsIm1hdGNoIiwicGFyYWdyYXBoIiwidXJsUmVnZXgiLCJ1cmwiLCJlbmRDaGFyIiwicGFyc2UiLCJDb21wb25lbnQiLCJwcm9wcyIsInBsYXllckhlaWdodCIsInNldFBsYXllckhlaWdodCIsIlJlYWN0IiwidXNlU3RhdGUiLCJwbGF5ZXJSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImFzcGVjdFJhdGlvIiwidGFyZ2V0IiwiY2xpZW50V2lkdGgiLCJvYnNlcnZlIiwiY3VycmVudCIsInZpZCIsImNvbnRhaW5lckRldGFpbHMiLCJkZXNjcmlwdGlvbiIsImxhc3RVcGRhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBQ0EsU0FBU0EsZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQWdDO0FBQzVCQSxNQUFJLEdBQUdBLElBQUksQ0FBQ0MsT0FBTCxDQUFhLEtBQWIsRUFBb0IsSUFBcEIsQ0FBUDtBQUNBRCxNQUFJLEdBQUdBLElBQUksQ0FBQ0MsT0FBTCxDQUFhLE9BQWIsRUFBc0IsQ0FBQ0MsS0FBRCxFQUFRQyxTQUFSLEtBQXNCO0FBQy9DLFdBQVEsU0FBUUEsU0FBVSxTQUExQjtBQUNILEdBRk0sQ0FBUDtBQUlBLFFBQU1DLFFBQVEsR0FBRyx1REFBakI7QUFDQUosTUFBSSxHQUFHQSxJQUFJLENBQUNDLE9BQUwsQ0FBYUcsUUFBYixFQUF1QixDQUFDRixLQUFELEVBQVFHLEdBQVIsRUFBYUMsT0FBYixLQUF5QjtBQUNuRCxXQUFRLFlBQVdELEdBQUkscUJBQW9CQSxHQUFJLE1BQXhDLEdBQWdEQyxPQUF2RDtBQUNILEdBRk0sQ0FBUDtBQUlBTixNQUFJLEdBQUdBLElBQUksQ0FBQ0MsT0FBTCxDQUFhLEtBQWIsRUFBb0IsT0FBcEIsQ0FBUDtBQUVBLFNBQU9NLHdEQUFLLENBQUNQLElBQUQsQ0FBWjtBQUNIOztBQUVELE1BQU1RLFNBQVMsR0FBSUMsS0FBRCxJQUFXO0FBQUE7O0FBQ3pCLFFBQU0sQ0FBQ0MsWUFBRCxFQUFlQyxlQUFmLElBQWtDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUF4QztBQUNBLFFBQU1DLFNBQVMsR0FBR0YsNENBQUssQ0FBQ0csTUFBTixDQUFhLElBQWIsQ0FBbEI7QUFFQUgsOENBQUssQ0FBQ0ksU0FBTixDQUFnQixNQUFNO0FBQ2xCLFVBQU1DLGNBQWMsR0FBRyxJQUFJQyxjQUFKLENBQW1CQyxPQUFPLElBQUk7QUFDakQsWUFBTUMsV0FBVyxHQUFHLE9BQU8sR0FBM0I7QUFDQVQscUJBQWUsQ0FBQ1EsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRSxNQUFYLENBQWtCQyxXQUFsQixHQUFnQ0YsV0FBakMsQ0FBZjtBQUNILEtBSHNCLENBQXZCO0FBS0FILGtCQUFjLENBQUNNLE9BQWYsQ0FBdUJULFNBQVMsQ0FBQ1UsT0FBakM7QUFDSCxHQVBELEVBT0csRUFQSDtBQVNBLHNCQUNJLHFFQUFDLHlFQUFEO0FBQXVCLE9BQUcsRUFBRWYsS0FBSyxDQUFDZ0IsR0FBbEM7QUFBdUMsT0FBRyxFQUFDLE9BQTNDO0FBQW1ELFdBQU8sRUFBRWhCLEtBQUssQ0FBQ2lCLGdCQUFsRTtBQUFBLDRCQUNJLHFFQUFDLDREQUFEO0FBQU0sZUFBUyxFQUFDLG9CQUFoQjtBQUFBLDhCQUNJO0FBQUssV0FBRyxFQUFFWixTQUFWO0FBQXFCLGlCQUFTLEVBQUMsZ0JBQS9CO0FBQUEsK0JBQ0kscUVBQUMsMkRBQUQ7QUFDSSxlQUFLLEVBQUMsTUFEVjtBQUVJLGdCQUFNLEVBQUVKLFlBRlo7QUFHSSxhQUFHLEVBQUcsbUNBQWtDRCxLQUFLLENBQUNnQixHQUFJO0FBSHREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBU0kscUVBQUMsNERBQUQsQ0FBTSxJQUFOO0FBQUEsa0JBQ0sxQixnQkFBZ0IsQ0FBQ1UsS0FBSyxDQUFDa0IsV0FBUDtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQWVJLHFFQUFDLHdFQUFEO0FBQXNCLHFCQUFlLEVBQUVsQixLQUFLLENBQUNtQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBbUJILENBaENEOztHQUFNcEIsUzs7S0FBQUEsUzs7QUFrQ1NBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZGVvL1t2aWRdLjRmZGZlNjRhMzc2OTZjMzYwZTZkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdyZWFjdC1ib290c3RyYXAvQ2FyZCc7XHJcbmltcG9ydCBwYXJzZSBmcm9tICdodG1sLXJlYWN0LXBhcnNlcic7XHJcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tICdyZWFjdC1wbGF5ZXIveW91dHViZSc7XHJcbmltcG9ydCBMYXN0VXBkYXRlZFRpbWVzdGFtcCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xhc3RVcGRhdGVkVGltZXN0YW1wJztcclxuaW1wb3J0IEVuZHBvaW50IGZyb20gJy4uLy4uLy4uL0VuZHBvaW50JztcclxuaW1wb3J0IFZpZGVvRGV0YWlsc0NvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1ZpZGVvRGV0YWlsc0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IGZldGNoVmlkZW9EZXRhaWxzU3RhdGljUGF0aHMgfSBmcm9tICcuLi8uLi8uLi9QYWdlVXRpbCc7XHJcblxyXG4vLyBRdWljayBhbmQgZWFzeSB3YXkgdG8gY29udmVydCBkZXNjcmlwdGlvbiB0byBIVE1MIGVsZW1lbnRzXHJcbmZ1bmN0aW9uIHBhcnNlRGVzY3JpcHRpb24oZGVzYykge1xyXG4gICAgZGVzYyA9IGRlc2MucmVwbGFjZSgvXFxuL2csICdcXG4nKTtcclxuICAgIGRlc2MgPSBkZXNjLnJlcGxhY2UoLyguKykvZywgKG1hdGNoLCBwYXJhZ3JhcGgpID0+IHtcclxuICAgICAgICByZXR1cm4gYDxzcGFuPiR7cGFyYWdyYXBofTwvc3Bhbj5gO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgdXJsUmVnZXggPSAvKGh0dHBbc10/OlxcL1xcL1thLXpBLVowLTlcXC1cXF9cXCpcXD9cXD1cXCZcXC5cXC9dKykoWyBcXFxcbl0/KS9nO1xyXG4gICAgZGVzYyA9IGRlc2MucmVwbGFjZSh1cmxSZWdleCwgKG1hdGNoLCB1cmwsIGVuZENoYXIpID0+IHtcclxuICAgICAgICByZXR1cm4gYDxhIGhyZWY9XCIke3VybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3VybH08L2E+YCArIGVuZENoYXI7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkZXNjID0gZGVzYy5yZXBsYWNlKC9cXG4vZywgJzxici8+Jyk7XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlKGRlc2MpO1xyXG59XHJcblxyXG5jb25zdCBDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtwbGF5ZXJIZWlnaHQsIHNldFBsYXllckhlaWdodF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IHBsYXllclJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKGVudHJpZXMgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBhc3BlY3RSYXRpbyA9IDE2LjAgLyA5LjA7XHJcbiAgICAgICAgICAgIHNldFBsYXllckhlaWdodChlbnRyaWVzWzBdLnRhcmdldC5jbGllbnRXaWR0aCAvIGFzcGVjdFJhdGlvKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShwbGF5ZXJSZWYuY3VycmVudCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VmlkZW9EZXRhaWxzQ29udGFpbmVyIHZpZD17cHJvcHMudmlkfSB0YWI9J3ZpZGVvJyBkZXRhaWxzPXtwcm9wcy5jb250YWluZXJEZXRhaWxzfT5cclxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPSd2aWRlby1kZXRhaWxzLWNhcmQnPlxyXG4gICAgICAgICAgICAgICAgPGRpdiByZWY9e3BsYXllclJlZn0gY2xhc3NOYW1lPSd5b3V0dWJlLXBsYXllcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0UGxheWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPScxMDAlJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9e3BsYXllckhlaWdodH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj0ke3Byb3BzLnZpZH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwYXJzZURlc2NyaXB0aW9uKHByb3BzLmRlc2NyaXB0aW9uKX1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICA8TGFzdFVwZGF0ZWRUaW1lc3RhbXAgdGltZXN0YW1wTWlsbGlzPXtwcm9wcy5sYXN0VXBkYXRlZH0vPlxyXG4gICAgICAgIDwvVmlkZW9EZXRhaWxzQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtFbmRwb2ludC51cmx9L3ZpZGVvL2luZm8vJHtwYXJhbXMudmlkfWApO1xyXG4gICAgY29uc3QgaW5mbyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyRGV0YWlscyA9IGF3YWl0IFZpZGVvRGV0YWlsc0NvbnRhaW5lci5mZXRjaERldGFpbHMocGFyYW1zLnZpZCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2aWQ6IHBhcmFtcy52aWQsIFxyXG4gICAgICAgICAgICBjb250YWluZXJEZXRhaWxzOiBjb250YWluZXJEZXRhaWxzLCBcclxuXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBpbmZvLmRlc2NyaXB0aW9uLCBcclxuICAgICAgICAgICAgbGFzdFVwZGF0ZWQ6IGluZm8ubGFzdF9zY3JhcGVkLCBcclxuXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgc2hvd0JhY2s6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgcmV0dXJuIGF3YWl0IGZldGNoVmlkZW9EZXRhaWxzU3RhdGljUGF0aHMoKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9