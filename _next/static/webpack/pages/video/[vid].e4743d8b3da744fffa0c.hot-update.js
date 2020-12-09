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

var __N_SSG = true;
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoDetailsContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
}, "l7dLGo8PcLvS4g4AIQudMaLP7AU="));
/*
let detailsEl = null;
switch (tab) {
    case 'video':
        detailsEl = 
            <Video
                id={videoDetails.info.id}
                description={videoDetails.info.description}
                lastUpdated={videoDetails.info.last_scraped}
            />;
        break;

    case 'sources':
        if (hasSources) {
            detailsEl = 
                <VideoSources
                    sources={videoDetails.sources}
                    lastUpdated={videoDetails.sources.last_updated}
                />;
        }else {
            detailsEl = <MissingDetails tab={tab}/>;
        }
        break;

    case 'transcript':
        if (hasTranscript) {
            detailsEl = 
                <VideoTranscript
                    transcript={videoDetails.transcript.en}
                    lastUpdated={videoDetails.transcript.last_updated}
                />;
        }else {
            detailsEl = <MissingDetails tab={tab}/>;
        }
        break;
    
    case 'tags':
        if (hasTags) {
            detailsEl = 
                <VideoTags
                    tags={videoDetails.tags}
                    lastUpdated={videoDetails.info.last_scraped}
                />;
        }else {
            detailsEl = <MissingDetails tab={tab}/>;
        }
        break;
    
    case 'soundtrack':
        if (hasSoundTrack) {
            detailsEl = 
                <VideoSoundTrack
                    url={videoDetails.info.soundtrack.url}
                    lastUpdated={videoDetails.info.soundtrack.last_updated}
                />;
        }else {
            detailsEl = <MissingDetails tab={tab}/>;
        }
}
*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvL1t2aWRdL2luZGV4LmpzIl0sIm5hbWVzIjpbInBhcnNlRGVzY3JpcHRpb24iLCJkZXNjIiwicmVwbGFjZSIsIm1hdGNoIiwicGFyYWdyYXBoIiwidXJsUmVnZXgiLCJ1cmwiLCJlbmRDaGFyIiwicGFyc2UiLCJwcm9wcyIsInBsYXllckhlaWdodCIsInNldFBsYXllckhlaWdodCIsIlJlYWN0IiwidXNlU3RhdGUiLCJwbGF5ZXJSZWYiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImFzcGVjdFJhdGlvIiwidGFyZ2V0IiwiY2xpZW50V2lkdGgiLCJvYnNlcnZlIiwiY3VycmVudCIsImNvbnRhaW5lckRldGFpbHMiLCJ2aWQiLCJkZXNjcmlwdGlvbiIsImxhc3RVcGRhdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtDQUlBOztBQUNBLFNBQVNBLGdCQUFULENBQTBCQyxJQUExQixFQUFnQztBQUM1QkEsTUFBSSxHQUFHQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxLQUFiLEVBQW9CLElBQXBCLENBQVA7QUFDQUQsTUFBSSxHQUFHQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxPQUFiLEVBQXNCLENBQUNDLEtBQUQsRUFBUUMsU0FBUixLQUFzQjtBQUMvQyxXQUFRLFNBQVFBLFNBQVUsU0FBMUI7QUFDSCxHQUZNLENBQVA7QUFJQSxRQUFNQyxRQUFRLEdBQUcsdURBQWpCO0FBQ0FKLE1BQUksR0FBR0EsSUFBSSxDQUFDQyxPQUFMLENBQWFHLFFBQWIsRUFBdUIsQ0FBQ0YsS0FBRCxFQUFRRyxHQUFSLEVBQWFDLE9BQWIsS0FBeUI7QUFDbkQsV0FBUSxZQUFXRCxHQUFJLHFCQUFvQkEsR0FBSSxNQUF4QyxHQUFnREMsT0FBdkQ7QUFDSCxHQUZNLENBQVA7QUFJQU4sTUFBSSxHQUFHQSxJQUFJLENBQUNDLE9BQUwsQ0FBYSxLQUFiLEVBQW9CLE9BQXBCLENBQVA7QUFFQSxTQUFPTSx3REFBSyxDQUFDUCxJQUFELENBQVo7QUFDSDs7O0FBRWMsa0VBQUNRLEtBQUQsSUFBVztBQUFBOztBQUN0QixRQUFNLENBQUNDLFlBQUQsRUFBZUMsZUFBZixJQUFrQ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLENBQWYsQ0FBeEM7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLDRDQUFLLENBQUNHLE1BQU4sQ0FBYSxJQUFiLENBQWxCO0FBRUFILDhDQUFLLENBQUNJLFNBQU4sQ0FBZ0IsTUFBTTtBQUNsQixVQUFNQyxjQUFjLEdBQUcsSUFBSUMsY0FBSixDQUFtQkMsT0FBTyxJQUFJO0FBQ2pELFlBQU1DLFdBQVcsR0FBRyxPQUFPLEdBQTNCO0FBQ0FULHFCQUFlLENBQUNRLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0UsTUFBWCxDQUFrQkMsV0FBbEIsR0FBZ0NGLFdBQWpDLENBQWY7QUFDSCxLQUhzQixDQUF2QjtBQUtBSCxrQkFBYyxDQUFDTSxPQUFmLENBQXVCVCxTQUFTLENBQUNVLE9BQWpDO0FBQ0gsR0FQRCxFQU9HLEVBUEg7QUFTQSxzQkFDSSxxRUFBQyx5RUFBRDtBQUF1QixXQUFPLEVBQUVmLEtBQUssQ0FBQ2dCLGdCQUF0QztBQUFBLDRCQUNJLHFFQUFDLDREQUFEO0FBQU0sZUFBUyxFQUFDLG9CQUFoQjtBQUFBLDhCQUNJO0FBQUssV0FBRyxFQUFFWCxTQUFWO0FBQXFCLGlCQUFTLEVBQUMsZ0JBQS9CO0FBQUEsK0JBQ0kscUVBQUMsMkRBQUQ7QUFDSSxlQUFLLEVBQUMsTUFEVjtBQUVJLGdCQUFNLEVBQUVKLFlBRlo7QUFHSSxhQUFHLEVBQUcsbUNBQWtDRCxLQUFLLENBQUNpQixHQUFJO0FBSHREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBU0kscUVBQUMsNERBQUQsQ0FBTSxJQUFOO0FBQUEsa0JBQ0sxQixnQkFBZ0IsQ0FBQ1MsS0FBSyxDQUFDa0IsV0FBUDtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQWVJLHFFQUFDLHdFQUFEO0FBQXNCLHFCQUFlLEVBQUVsQixLQUFLLENBQUNtQjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBbUJILENBaENEO0FBMEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy92aWRlby9bdmlkXS5lNDc0M2Q4YjNkYTc0NGZmZmEwYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcclxuaW1wb3J0IHBhcnNlIGZyb20gJ2h0bWwtcmVhY3QtcGFyc2VyJztcclxuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllci95b3V0dWJlJztcclxuaW1wb3J0IExhc3RVcGRhdGVkVGltZXN0YW1wIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvTGFzdFVwZGF0ZWRUaW1lc3RhbXAnO1xyXG5pbXBvcnQgRW5kcG9pbnQgZnJvbSAnLi4vLi4vLi4vRW5kcG9pbnQnO1xyXG5pbXBvcnQgVmlkZW9EZXRhaWxzQ29udGFpbmVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvVmlkZW9EZXRhaWxzQ29udGFpbmVyJztcclxuXHJcbi8vIFF1aWNrIGFuZCBlYXN5IHdheSB0byBjb252ZXJ0IGRlc2NyaXB0aW9uIHRvIEhUTUwgZWxlbWVudHNcclxuZnVuY3Rpb24gcGFyc2VEZXNjcmlwdGlvbihkZXNjKSB7XHJcbiAgICBkZXNjID0gZGVzYy5yZXBsYWNlKC9cXG4vZywgJ1xcbicpO1xyXG4gICAgZGVzYyA9IGRlc2MucmVwbGFjZSgvKC4rKS9nLCAobWF0Y2gsIHBhcmFncmFwaCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBgPHNwYW4+JHtwYXJhZ3JhcGh9PC9zcGFuPmA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB1cmxSZWdleCA9IC8oaHR0cFtzXT86XFwvXFwvW2EtekEtWjAtOVxcLVxcX1xcKlxcP1xcPVxcJlxcLlxcL10rKShbIFxcXFxuXT8pL2c7XHJcbiAgICBkZXNjID0gZGVzYy5yZXBsYWNlKHVybFJlZ2V4LCAobWF0Y2gsIHVybCwgZW5kQ2hhcikgPT4ge1xyXG4gICAgICAgIHJldHVybiBgPGEgaHJlZj1cIiR7dXJsfVwiIHRhcmdldD1cIl9ibGFua1wiPiR7dXJsfTwvYT5gICsgZW5kQ2hhcjtcclxuICAgIH0pO1xyXG5cclxuICAgIGRlc2MgPSBkZXNjLnJlcGxhY2UoL1xcbi9nLCAnPGJyLz4nKTtcclxuXHJcbiAgICByZXR1cm4gcGFyc2UoZGVzYyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW3BsYXllckhlaWdodCwgc2V0UGxheWVySGVpZ2h0XSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgcGxheWVyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG5cclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoZW50cmllcyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzcGVjdFJhdGlvID0gMTYuMCAvIDkuMDtcclxuICAgICAgICAgICAgc2V0UGxheWVySGVpZ2h0KGVudHJpZXNbMF0udGFyZ2V0LmNsaWVudFdpZHRoIC8gYXNwZWN0UmF0aW8pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXNpemVPYnNlcnZlci5vYnNlcnZlKHBsYXllclJlZi5jdXJyZW50KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxWaWRlb0RldGFpbHNDb250YWluZXIgZGV0YWlscz17cHJvcHMuY29udGFpbmVyRGV0YWlsc30+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0ndmlkZW8tZGV0YWlscy1jYXJkJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgcmVmPXtwbGF5ZXJSZWZ9IGNsYXNzTmFtZT0neW91dHViZS1wbGF5ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMTAwJSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXtwbGF5ZXJIZWlnaHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9JHtwcm9wcy52aWR9YH1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPENhcmQuQm9keT5cclxuICAgICAgICAgICAgICAgICAgICB7cGFyc2VEZXNjcmlwdGlvbihwcm9wcy5kZXNjcmlwdGlvbil9XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQuQm9keT5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAgPExhc3RVcGRhdGVkVGltZXN0YW1wIHRpbWVzdGFtcE1pbGxpcz17cHJvcHMubGFzdFVwZGF0ZWR9Lz5cclxuICAgICAgICA8L1ZpZGVvRGV0YWlsc0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7RW5kcG9pbnQudXJsfS92aWRlby9pbmZvLyR7cGFyYW1zLnZpZH1gKTtcclxuICAgIGNvbnN0IGluZm8gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgXHJcbiAgICBjb25zdCBjb250YWluZXJEZXRhaWxzID0gYXdhaXQgVmlkZW9EZXRhaWxzQ29udGFpbmVyLmZldGNoRGV0YWlscyhwYXJhbXMudmlkKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZpZDogcGFyYW1zLnZpZCwgXHJcbiAgICAgICAgICAgIGNvbnRhaW5lckRldGFpbHM6IGNvbnRhaW5lckRldGFpbHMsIFxyXG5cclxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGluZm8uZGVzY3JpcHRpb24sIFxyXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogaW5mby5sYXN0X3NjcmFwZWQsIFxyXG5cclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93QmFjazogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgIHN0YXJ0QXQ6IDAsIFxyXG4gICAgICBtYXhSZXN1bHRzOiAxMDAwXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0VuZHBvaW50LnVybH0vPyR7cXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcyl9YCk7XHJcbiAgICBjb25zdCBpdGVtcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgcGF0aHMgPSBpdGVtcy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgeyBwYXJhbXM6IHsgdmlkOiBpdGVtLmlkIH19XHJcbiAgICApKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzLCBcclxuICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuLypcclxubGV0IGRldGFpbHNFbCA9IG51bGw7XHJcbnN3aXRjaCAodGFiKSB7XHJcbiAgICBjYXNlICd2aWRlbyc6XHJcbiAgICAgICAgZGV0YWlsc0VsID0gXHJcbiAgICAgICAgICAgIDxWaWRlb1xyXG4gICAgICAgICAgICAgICAgaWQ9e3ZpZGVvRGV0YWlscy5pbmZvLmlkfVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3ZpZGVvRGV0YWlscy5pbmZvLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ9e3ZpZGVvRGV0YWlscy5pbmZvLmxhc3Rfc2NyYXBlZH1cclxuICAgICAgICAgICAgLz47XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgY2FzZSAnc291cmNlcyc6XHJcbiAgICAgICAgaWYgKGhhc1NvdXJjZXMpIHtcclxuICAgICAgICAgICAgZGV0YWlsc0VsID0gXHJcbiAgICAgICAgICAgICAgICA8VmlkZW9Tb3VyY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlcz17dmlkZW9EZXRhaWxzLnNvdXJjZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ9e3ZpZGVvRGV0YWlscy5zb3VyY2VzLmxhc3RfdXBkYXRlZH1cclxuICAgICAgICAgICAgICAgIC8+O1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgZGV0YWlsc0VsID0gPE1pc3NpbmdEZXRhaWxzIHRhYj17dGFifS8+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICBjYXNlICd0cmFuc2NyaXB0JzpcclxuICAgICAgICBpZiAoaGFzVHJhbnNjcmlwdCkge1xyXG4gICAgICAgICAgICBkZXRhaWxzRWwgPSBcclxuICAgICAgICAgICAgICAgIDxWaWRlb1RyYW5zY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2NyaXB0PXt2aWRlb0RldGFpbHMudHJhbnNjcmlwdC5lbn1cclxuICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZD17dmlkZW9EZXRhaWxzLnRyYW5zY3JpcHQubGFzdF91cGRhdGVkfVxyXG4gICAgICAgICAgICAgICAgLz47XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBkZXRhaWxzRWwgPSA8TWlzc2luZ0RldGFpbHMgdGFiPXt0YWJ9Lz47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICBjYXNlICd0YWdzJzpcclxuICAgICAgICBpZiAoaGFzVGFncykge1xyXG4gICAgICAgICAgICBkZXRhaWxzRWwgPSBcclxuICAgICAgICAgICAgICAgIDxWaWRlb1RhZ3NcclxuICAgICAgICAgICAgICAgICAgICB0YWdzPXt2aWRlb0RldGFpbHMudGFnc31cclxuICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZD17dmlkZW9EZXRhaWxzLmluZm8ubGFzdF9zY3JhcGVkfVxyXG4gICAgICAgICAgICAgICAgLz47XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBkZXRhaWxzRWwgPSA8TWlzc2luZ0RldGFpbHMgdGFiPXt0YWJ9Lz47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgXHJcbiAgICBjYXNlICdzb3VuZHRyYWNrJzpcclxuICAgICAgICBpZiAoaGFzU291bmRUcmFjaykge1xyXG4gICAgICAgICAgICBkZXRhaWxzRWwgPSBcclxuICAgICAgICAgICAgICAgIDxWaWRlb1NvdW5kVHJhY2tcclxuICAgICAgICAgICAgICAgICAgICB1cmw9e3ZpZGVvRGV0YWlscy5pbmZvLnNvdW5kdHJhY2sudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkPXt2aWRlb0RldGFpbHMuaW5mby5zb3VuZHRyYWNrLmxhc3RfdXBkYXRlZH1cclxuICAgICAgICAgICAgICAgIC8+O1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgZGV0YWlsc0VsID0gPE1pc3NpbmdEZXRhaWxzIHRhYj17dGFifS8+O1xyXG4gICAgICAgIH1cclxufVxyXG4qLyJdLCJzb3VyY2VSb290IjoiIn0=