webpackHotUpdate_N_E("pages/video/[vid]",{

/***/ "./node_modules/decode-uri-component/index.js":
false,

/***/ "./node_modules/query-string/index.js":
false,

/***/ "./node_modules/split-on-first/index.js":
false,

/***/ "./node_modules/strict-uri-encode/index.js":
false,

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvL1t2aWRdL2luZGV4LmpzIl0sIm5hbWVzIjpbInBhcnNlRGVzY3JpcHRpb24iLCJkZXNjIiwicmVwbGFjZSIsIm1hdGNoIiwicGFyYWdyYXBoIiwidXJsUmVnZXgiLCJ1cmwiLCJlbmRDaGFyIiwicGFyc2UiLCJDb21wb25lbnQiLCJwcm9wcyIsInBsYXllckhlaWdodCIsInNldFBsYXllckhlaWdodCIsIlJlYWN0IiwidXNlU3RhdGUiLCJwbGF5ZXJSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImFzcGVjdFJhdGlvIiwidGFyZ2V0IiwiY2xpZW50V2lkdGgiLCJvYnNlcnZlIiwiY3VycmVudCIsInZpZCIsImNvbnRhaW5lckRldGFpbHMiLCJkZXNjcmlwdGlvbiIsImxhc3RVcGRhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUdBO0FBQ0EsU0FBU0EsZ0JBQVQsQ0FBMEJDLElBQTFCLEVBQWdDO0FBQzVCQSxNQUFJLEdBQUdBLElBQUksQ0FBQ0MsT0FBTCxDQUFhLEtBQWIsRUFBb0IsSUFBcEIsQ0FBUDtBQUNBRCxNQUFJLEdBQUdBLElBQUksQ0FBQ0MsT0FBTCxDQUFhLE9BQWIsRUFBc0IsQ0FBQ0MsS0FBRCxFQUFRQyxTQUFSLEtBQXNCO0FBQy9DLFdBQVEsU0FBUUEsU0FBVSxTQUExQjtBQUNILEdBRk0sQ0FBUDtBQUlBLFFBQU1DLFFBQVEsR0FBRyx1REFBakI7QUFDQUosTUFBSSxHQUFHQSxJQUFJLENBQUNDLE9BQUwsQ0FBYUcsUUFBYixFQUF1QixDQUFDRixLQUFELEVBQVFHLEdBQVIsRUFBYUMsT0FBYixLQUF5QjtBQUNuRCxXQUFRLFlBQVdELEdBQUkscUJBQW9CQSxHQUFJLE1BQXhDLEdBQWdEQyxPQUF2RDtBQUNILEdBRk0sQ0FBUDtBQUlBTixNQUFJLEdBQUdBLElBQUksQ0FBQ0MsT0FBTCxDQUFhLEtBQWIsRUFBb0IsT0FBcEIsQ0FBUDtBQUVBLFNBQU9NLHdEQUFLLENBQUNQLElBQUQsQ0FBWjtBQUNIOztBQUVELE1BQU1RLFNBQVMsR0FBSUMsS0FBRCxJQUFXO0FBQUE7O0FBQ3pCLFFBQU0sQ0FBQ0MsWUFBRCxFQUFlQyxlQUFmLElBQWtDQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUF4QztBQUNBLFFBQU1DLFNBQVMsR0FBR0YsNENBQUssQ0FBQ0csTUFBTixDQUFhLElBQWIsQ0FBbEI7QUFFQUgsOENBQUssQ0FBQ0ksU0FBTixDQUFnQixNQUFNO0FBQ2xCLFVBQU1DLGNBQWMsR0FBRyxJQUFJQyxjQUFKLENBQW1CQyxPQUFPLElBQUk7QUFDakQsWUFBTUMsV0FBVyxHQUFHLE9BQU8sR0FBM0I7QUFDQVQscUJBQWUsQ0FBQ1EsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRSxNQUFYLENBQWtCQyxXQUFsQixHQUFnQ0YsV0FBakMsQ0FBZjtBQUNILEtBSHNCLENBQXZCO0FBS0FILGtCQUFjLENBQUNNLE9BQWYsQ0FBdUJULFNBQVMsQ0FBQ1UsT0FBakM7QUFDSCxHQVBELEVBT0csRUFQSDtBQVNBLHNCQUNJLHFFQUFDLHlFQUFEO0FBQXVCLE9BQUcsRUFBRWYsS0FBSyxDQUFDZ0IsR0FBbEM7QUFBdUMsV0FBTyxFQUFFaEIsS0FBSyxDQUFDaUIsZ0JBQXREO0FBQUEsNEJBQ0kscUVBQUMsNERBQUQ7QUFBTSxlQUFTLEVBQUMsb0JBQWhCO0FBQUEsOEJBQ0k7QUFBSyxXQUFHLEVBQUVaLFNBQVY7QUFBcUIsaUJBQVMsRUFBQyxnQkFBL0I7QUFBQSwrQkFDSSxxRUFBQywyREFBRDtBQUNJLGVBQUssRUFBQyxNQURWO0FBRUksZ0JBQU0sRUFBRUosWUFGWjtBQUdJLGFBQUcsRUFBRyxtQ0FBa0NELEtBQUssQ0FBQ2dCLEdBQUk7QUFIdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFTSSxxRUFBQyw0REFBRCxDQUFNLElBQU47QUFBQSxrQkFDSzFCLGdCQUFnQixDQUFDVSxLQUFLLENBQUNrQixXQUFQO0FBRHJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBZUkscUVBQUMsd0VBQUQ7QUFBc0IscUJBQWUsRUFBRWxCLEtBQUssQ0FBQ21CO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFtQkgsQ0FoQ0Q7O0dBQU1wQixTOztLQUFBQSxTOztBQWtDU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlkZW8vW3ZpZF0uMGQzMjVhMmY3NGIxOGJjMWRmODAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcclxuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllci95b3V0dWJlJztcclxuaW1wb3J0IExhc3RVcGRhdGVkVGltZXN0YW1wIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGFzdFVwZGF0ZWRUaW1lc3RhbXAnO1xyXG5pbXBvcnQgRW5kcG9pbnQgZnJvbSAnLi4vLi4vLi4vRW5kcG9pbnQnO1xyXG5pbXBvcnQgVmlkZW9EZXRhaWxzQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvVmlkZW9EZXRhaWxzQ29udGFpbmVyJztcclxuaW1wb3J0IHsgZmV0Y2hWaWRlb0RldGFpbHNTdGF0aWNQYXRocyB9IGZyb20gJy4uLy4uLy4uL1BhZ2VVdGlsJztcclxuXHJcbi8vIFF1aWNrIGFuZCBlYXN5IHdheSB0byBjb252ZXJ0IGRlc2NyaXB0aW9uIHRvIEhUTUwgZWxlbWVudHNcclxuZnVuY3Rpb24gcGFyc2VEZXNjcmlwdGlvbihkZXNjKSB7XHJcbiAgICBkZXNjID0gZGVzYy5yZXBsYWNlKC9cXG4vZywgJ1xcbicpO1xyXG4gICAgZGVzYyA9IGRlc2MucmVwbGFjZSgvKC4rKS9nLCAobWF0Y2gsIHBhcmFncmFwaCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgPHNwYW4+JHtwYXJhZ3JhcGh9PC9zcGFuPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB1cmxSZWdleCA9IC8oaHR0cFtzXT86XFwvXFwvW2EtekEtWjAtOVxcLVxcX1xcKlxcP1xcPVxcJlxcLlxcL10rKShbIFxcXFxuXT8pL2c7XHJcbiAgICBkZXNjID0gZGVzYy5yZXBsYWNlKHVybFJlZ2V4LCAobWF0Y2gsIHVybCwgZW5kQ2hhcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBgPGEgaHJlZj1cIiR7dXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7dXJsfTwvYT5gICsgZW5kQ2hhcjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRlc2MgPSBkZXNjLnJlcGxhY2UoL1xcbi9nLCAnPGJyLz4nKTtcclxuXHJcbiAgICByZXR1cm4gcGFyc2UoZGVzYyk7XHJcbn1cclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3BsYXllckhlaWdodCwgc2V0UGxheWVySGVpZ2h0XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgcGxheWVyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gMTYuMCAvIDkuMDtcclxuICAgICAgICAgICAgc2V0UGxheWVySGVpZ2h0KGVudHJpZXNbMF0udGFyZ2V0LmNsaWVudFdpZHRoIC8gYXNwZWN0UmF0aW8pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKHBsYXllclJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxWaWRlb0RldGFpbHNDb250YWluZXIgdmlkPXtwcm9wcy52aWR9IGRldGFpbHM9e3Byb3BzLmNvbnRhaW5lckRldGFpbHN9PlxyXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9J3ZpZGVvLWRldGFpbHMtY2FyZCc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHJlZj17cGxheWVyUmVmfSBjbGFzc05hbWU9J3lvdXR1YmUtcGxheWVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17cGxheWVySGVpZ2h0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PSR7cHJvcHMudmlkfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAge3BhcnNlRGVzY3JpcHRpb24ocHJvcHMuZGVzY3JpcHRpb24pfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLkJvZHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgIDxMYXN0VXBkYXRlZFRpbWVzdGFtcCB0aW1lc3RhbXBNaWxsaXM9e3Byb3BzLmxhc3RVcGRhdGVkfS8+XHJcbiAgICAgICAgPC9WaWRlb0RldGFpbHNDb250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0VuZHBvaW50LnVybH0vdmlkZW8vaW5mby8ke3BhcmFtcy52aWR9YCk7XHJcbiAgICBjb25zdCBpbmZvID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBjb250YWluZXJEZXRhaWxzID0gYXdhaXQgVmlkZW9EZXRhaWxzQ29udGFpbmVyLmZldGNoRGV0YWlscyhwYXJhbXMudmlkKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZpZDogcGFyYW1zLnZpZCwgXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckRldGFpbHM6IGNvbnRhaW5lckRldGFpbHMsIFxyXG5cclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGluZm8uZGVzY3JpcHRpb24sIFxyXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogaW5mby5sYXN0X3NjcmFwZWQsIFxyXG5cclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93QmFjazogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2hWaWRlb0RldGFpbHNTdGF0aWNQYXRocygpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=