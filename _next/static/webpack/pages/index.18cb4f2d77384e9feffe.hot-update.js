webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/VideoFeed.js":
/*!*************************************!*\
  !*** ./src/components/VideoFeed.js ***!
  \*************************************/
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
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "./node_modules/query-string/index.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Spinner */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _VideoCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VideoCard */ "./src/components/VideoCard.js");
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Endpoint */ "./src/Endpoint.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ "./src/components/ErrorMessage.js");


var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\components\\VideoFeed.js",
    _s = $RefreshSig$();








/* harmony default export */ __webpack_exports__["default"] = (_s(props => {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const rootRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);

  if (!rootRef || !rootRef.current) {
    // first time render, let's scroll immediately!
    // we could put this in useEffect, but that will hapen after render and
    // there will be a delay as a result.
    if (true) {
      window.scrollTo(0, props.scrollY || 0);
    }
  }

  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.items || []);
  const [isFetching, setIsFetching] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [lastFetchError, setLastFetchError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (!isFetching) {
      return;
    }

    router.push('/?page=2', undefined, {
      shallow: true
    }); // const params = {
    //   startAt: items.length, 
    //   maxResults: 12
    // };
    // fetch(`${Endpoint.url}/?${queryString.stringify(params)}`)
    //   .then(res => res.json())
    //   .then(newItems => {
    //     setItems(items.concat(newItems));
    //     setIsFetching(false);
    //   })
    //   .catch(err => {
    //     console.error('video feed fetch error', err);
    //     setLastFetchError(err);
    //   });
  }, [isFetching]);

  function onScroll(ev) {
    if (!rootRef.current || !rootRef.current.firstElementChild) {
      return;
    }

    const rootRefBottom = rootRef.current.getClientRects()[0].bottom;
    const cardHeightPadding = 100; // rough value, good enough

    const cardHeight = rootRef.current.firstElementChild.clientHeight + cardHeightPadding;

    if (rootRefBottom - cardHeight <= window.innerHeight) {
      setIsFetching(true);
    }
  }

  ;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []); // If the initial fetch failed, show error

  if (lastFetchError && items.length == 0) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "There was an error while fetching the video feed!",
      details: lastFetchError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: rootRef,
    className: "video-feed",
    children: [items.map(video => {
      const thumbnail = video.thumbnails.maxresUrl || video.thumbnails.standardUrl || video.thumbnails.highUrl || video.thumbnails.mediumUrl || video.thumbnails.defaultUrl;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "video-feed-card-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_VideoCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
          id: video.id,
          title: video.title,
          numViews: video.numViews,
          publishedAt: video.publishedAt,
          thumbnail: thumbnail,
          duration: video.duration,
          onClick: () => props.onVideoClick && props.onVideoClick(video.id, items)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, undefined)
      }, video.id, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 11
      }, undefined);
    }), isFetching && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "video-feed-spinner",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
        animation: "border",
        role: "status",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "sr-only",
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 5
  }, undefined);
}, "/qwBPB/9CrozJ4YtB/KurcAHiVo=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9GZWVkLmpzIl0sIm5hbWVzIjpbInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicm9vdFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiY3VycmVudCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2Nyb2xsWSIsIml0ZW1zIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwibGFzdEZldGNoRXJyb3IiLCJzZXRMYXN0RmV0Y2hFcnJvciIsInVzZUVmZmVjdCIsInB1c2giLCJ1bmRlZmluZWQiLCJzaGFsbG93Iiwib25TY3JvbGwiLCJldiIsImZpcnN0RWxlbWVudENoaWxkIiwicm9vdFJlZkJvdHRvbSIsImdldENsaWVudFJlY3RzIiwiYm90dG9tIiwiY2FyZEhlaWdodFBhZGRpbmciLCJjYXJkSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxlbmd0aCIsIm1lc3NhZ2UiLCJtYXAiLCJ2aWRlbyIsInRodW1ibmFpbCIsInRodW1ibmFpbHMiLCJtYXhyZXNVcmwiLCJzdGFuZGFyZFVybCIsImhpZ2hVcmwiLCJtZWRpdW1VcmwiLCJkZWZhdWx0VXJsIiwiaWQiLCJ0aXRsZSIsIm51bVZpZXdzIiwicHVibGlzaGVkQXQiLCJkdXJhdGlvbiIsIm9uVmlkZW9DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsa0VBQUNBLEtBQUQsSUFBVztBQUFBOztBQUN4QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYixDQUFoQjs7QUFDQSxNQUFJLENBQUNGLE9BQUQsSUFBWSxD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RFo7QUFFRSxlQUFLLEVBQUVSLEtBQUssQ0FBQ1MsS0FGZjtBQUdFLGtCQUFRLEVBQUVULEtBQUssQ0FBQ1UsUUFIbEI7QUFJRSxxQkFBVyxFQUFFVixLQUFLLENBQUNXLFdBSnJCO0FBS0UsbUJBQVMsRUFBRVYsU0FMYjtBQU1FLGtCQUFRLEVBQUVELEtBQUssQ0FBQ1ksUUFObEI7QUFPRSxpQkFBTyxFQUFFLE1BQU1oRCxLQUFLLENBQUNpRCxZQUFOLElBQXNCakQsS0FBSyxDQUFDaUQsWUFBTixDQUFtQmIsS0FBSyxDQUFDUSxFQUF6QixFQUE2QmxDLEtBQTdCO0FBUHZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixTQUFVMEIsS0FBSyxDQUFDUSxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBZUQsS0F2QkEsQ0FESCxFQTBCRy9CLFVBQVUsaUJBQ1Q7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw2QkFDRSxxRUFBQywrREFBRDtBQUFTLGlCQUFTLEVBQUMsUUFBbkI7QUFBNEIsWUFBSSxFQUFDLFFBQWpDO0FBQUEsK0JBQ0U7QUFBTSxtQkFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0NELENBM0dEO0FBQUEsVUFDaUJYLHFEQURqQjtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjE4Y2I0ZjJkNzczODRlOWZlZmZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvU3Bpbm5lcic7XHJcbmltcG9ydCBWaWRlb0NhcmQgZnJvbSAnLi9WaWRlb0NhcmQnO1xyXG5pbXBvcnQgRW5kcG9pbnQgZnJvbSAnLi4vRW5kcG9pbnQnO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHJvb3RSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgaWYgKCFyb290UmVmIHx8ICFyb290UmVmLmN1cnJlbnQpIHtcclxuICAgIC8vIGZpcnN0IHRpbWUgcmVuZGVyLCBsZXQncyBzY3JvbGwgaW1tZWRpYXRlbHkhXHJcbiAgICAvLyB3ZSBjb3VsZCBwdXQgdGhpcyBpbiB1c2VFZmZlY3QsIGJ1dCB0aGF0IHdpbGwgaGFwZW4gYWZ0ZXIgcmVuZGVyIGFuZFxyXG4gICAgLy8gdGhlcmUgd2lsbCBiZSBhIGRlbGF5IGFzIGEgcmVzdWx0LlxyXG5cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcHJvcHMuc2Nyb2xsWSB8fCAwKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5pdGVtcyB8fCBbXSk7XHJcbiAgY29uc3QgW2lzRmV0Y2hpbmcsIHNldElzRmV0Y2hpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtsYXN0RmV0Y2hFcnJvciwgc2V0TGFzdEZldGNoRXJyb3JdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNGZXRjaGluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgcm91dGVyLnB1c2goJy8/cGFnZT0yJywgdW5kZWZpbmVkLCB7c2hhbGxvdzogdHJ1ZX0pO1xyXG5cclxuICAgIC8vIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgIC8vICAgc3RhcnRBdDogaXRlbXMubGVuZ3RoLCBcclxuICAgIC8vICAgbWF4UmVzdWx0czogMTJcclxuICAgIC8vIH07XHJcblxyXG4gICAgLy8gZmV0Y2goYCR7RW5kcG9pbnQudXJsfS8/JHtxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKX1gKVxyXG4gICAgLy8gICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC8vICAgLnRoZW4obmV3SXRlbXMgPT4ge1xyXG4gICAgLy8gICAgIHNldEl0ZW1zKGl0ZW1zLmNvbmNhdChuZXdJdGVtcykpO1xyXG4gICAgLy8gICAgIHNldElzRmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgLy8gICB9KVxyXG4gICAgLy8gICAuY2F0Y2goZXJyID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmVycm9yKCd2aWRlbyBmZWVkIGZldGNoIGVycm9yJywgZXJyKTtcclxuICAgIC8vICAgICBzZXRMYXN0RmV0Y2hFcnJvcihlcnIpO1xyXG4gICAgLy8gICB9KTtcclxuICB9LCBbaXNGZXRjaGluZ10pO1xyXG5cclxuICBmdW5jdGlvbiBvblNjcm9sbChldikge1xyXG4gICAgaWYgKCFyb290UmVmLmN1cnJlbnQgfHwgIXJvb3RSZWYuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm9vdFJlZkJvdHRvbSA9IHJvb3RSZWYuY3VycmVudC5nZXRDbGllbnRSZWN0cygpWzBdLmJvdHRvbTtcclxuICAgIGNvbnN0IGNhcmRIZWlnaHRQYWRkaW5nID0gMTAwOyAvLyByb3VnaCB2YWx1ZSwgZ29vZCBlbm91Z2hcclxuICAgIGNvbnN0IGNhcmRIZWlnaHQgPSByb290UmVmLmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50SGVpZ2h0ICsgY2FyZEhlaWdodFBhZGRpbmc7XHJcblxyXG4gICAgaWYgKHJvb3RSZWZCb3R0b20gLSBjYXJkSGVpZ2h0IDw9IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICBzZXRJc0ZldGNoaW5nKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgLy8gSWYgdGhlIGluaXRpYWwgZmV0Y2ggZmFpbGVkLCBzaG93IGVycm9yXHJcbiAgaWYgKGxhc3RGZXRjaEVycm9yICYmIGl0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RXJyb3JNZXNzYWdlXHJcbiAgICAgICAgdGl0bGU9XCJUaGVyZSB3YXMgYW4gZXJyb3Igd2hpbGUgZmV0Y2hpbmcgdGhlIHZpZGVvIGZlZWQhXCJcclxuICAgICAgICBkZXRhaWxzPXtsYXN0RmV0Y2hFcnJvci5tZXNzYWdlfVxyXG4gICAgICAvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17cm9vdFJlZn0gY2xhc3NOYW1lPVwidmlkZW8tZmVlZFwiPlxyXG4gICAgICB7aXRlbXMubWFwKHZpZGVvID0+IHtcclxuICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMubWF4cmVzVXJsIHx8IFxyXG4gICAgICAgICAgdmlkZW8udGh1bWJuYWlscy5zdGFuZGFyZFVybCB8fCBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMuaGlnaFVybCB8fCBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMubWVkaXVtVXJsIHx8IFxyXG4gICAgICAgICAgdmlkZW8udGh1bWJuYWlscy5kZWZhdWx0VXJsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3ZpZGVvLmlkfSBjbGFzc05hbWU9XCJ2aWRlby1mZWVkLWNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxWaWRlb0NhcmRcclxuICAgICAgICAgICAgICBpZD17dmlkZW8uaWR9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3ZpZGVvLnRpdGxlfVxyXG4gICAgICAgICAgICAgIG51bVZpZXdzPXt2aWRlby5udW1WaWV3c31cclxuICAgICAgICAgICAgICBwdWJsaXNoZWRBdD17dmlkZW8ucHVibGlzaGVkQXR9XHJcbiAgICAgICAgICAgICAgdGh1bWJuYWlsPXt0aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgZHVyYXRpb249e3ZpZGVvLmR1cmF0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uVmlkZW9DbGljayAmJiBwcm9wcy5vblZpZGVvQ2xpY2sodmlkZW8uaWQsIGl0ZW1zKX1cclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPC9WaWRlb0NhcmQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtpc0ZldGNoaW5nICYmIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tZmVlZC1zcGlubmVyXCI+XHJcbiAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgPC9TcGlubmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==