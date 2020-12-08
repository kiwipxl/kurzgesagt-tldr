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

  const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(1);
  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.items || []);
  const [isFetching, setIsFetching] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [lastFetchError, setLastFetchError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (!isFetching) {
      return;
    }

    fetch(`/feed/page${page + 1}.json`).then(res => res.json()).then(newItems => {
      setPage(page + 1);
      setItems(items.concat(newItems));
      setIsFetching(false);
    }).catch(err => {
      console.error('video feed fetch error', err);
      setLastFetchError(err);
    });
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
      lineNumber: 68,
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
          lineNumber: 87,
          columnNumber: 13
        }, undefined)
      }, video.id, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
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
          lineNumber: 105,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }, undefined);
}, "DJPzY6iBtem50SiuusamNHSjkUE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9GZWVkLmpzIl0sIm5hbWVzIjpbInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicm9vdFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiY3VycmVudCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2Nyb2xsWSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJsYXN0RmV0Y2hFcnJvciIsInNldExhc3RGZXRjaEVycm9yIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIm5ld0l0ZW1zIiwiY29uY2F0IiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJvblNjcm9sbCIsImV2IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJyb290UmVmQm90dG9tIiwiZ2V0Q2xpZW50UmVjdHMiLCJib3R0b20iLCJjYXJkSGVpZ2h0UGFkZGluZyIsImNhcmRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVuZ3RoIiwibWVzc2FnZSIsIm1hcCIsInZpZGVvIiwidGh1bWJuYWlsIiwidGh1bWJuYWlscyIsIm1heHJlc1VybCIsInN0YW5kYXJkVXJsIiwiaGlnaFVybCIsIm1lZGl1bVVybCIsImRlZmF1bHRVcmwiLCJpZCIsInRpdGxlIiwibnVtVmlld3MiLCJwdWJsaXNoZWRBdCIsImR1cmF0aW9uIiwib25WaWRlb0NsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxrRUFBQ0EsS0FBRCxJQUFXO0FBQUE7O0FBQ3hCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxPQUFP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QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBb0NELENBdEdEO0FBQUEsVUFDaUJiLHFEQURqQjtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkMmE3YWI1MjVhYmE2Y2I3ODY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvU3Bpbm5lcic7XHJcbmltcG9ydCBWaWRlb0NhcmQgZnJvbSAnLi9WaWRlb0NhcmQnO1xyXG5pbXBvcnQgRW5kcG9pbnQgZnJvbSAnLi4vRW5kcG9pbnQnO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4vRXJyb3JNZXNzYWdlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHJvb3RSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgaWYgKCFyb290UmVmIHx8ICFyb290UmVmLmN1cnJlbnQpIHtcclxuICAgIC8vIGZpcnN0IHRpbWUgcmVuZGVyLCBsZXQncyBzY3JvbGwgaW1tZWRpYXRlbHkhXHJcbiAgICAvLyB3ZSBjb3VsZCBwdXQgdGhpcyBpbiB1c2VFZmZlY3QsIGJ1dCB0aGF0IHdpbGwgaGFwZW4gYWZ0ZXIgcmVuZGVyIGFuZFxyXG4gICAgLy8gdGhlcmUgd2lsbCBiZSBhIGRlbGF5IGFzIGEgcmVzdWx0LlxyXG5cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcHJvcHMuc2Nyb2xsWSB8fCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuaXRlbXMgfHwgW10pO1xyXG4gIGNvbnN0IFtpc0ZldGNoaW5nLCBzZXRJc0ZldGNoaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbGFzdEZldGNoRXJyb3IsIHNldExhc3RGZXRjaEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzRmV0Y2hpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKGAvZmVlZC9wYWdlJHtwYWdlICsgMX0uanNvbmApXHJcbiAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAudGhlbihuZXdJdGVtcyA9PiB7XHJcbiAgICAgICAgc2V0UGFnZShwYWdlICsgMSk7XHJcbiAgICAgICAgc2V0SXRlbXMoaXRlbXMuY29uY2F0KG5ld0l0ZW1zKSk7XHJcbiAgICAgICAgc2V0SXNGZXRjaGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3ZpZGVvIGZlZWQgZmV0Y2ggZXJyb3InLCBlcnIpO1xyXG4gICAgICAgIHNldExhc3RGZXRjaEVycm9yKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtpc0ZldGNoaW5nXSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uU2Nyb2xsKGV2KSB7XHJcbiAgICBpZiAoIXJvb3RSZWYuY3VycmVudCB8fCAhcm9vdFJlZi5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb290UmVmQm90dG9tID0gcm9vdFJlZi5jdXJyZW50LmdldENsaWVudFJlY3RzKClbMF0uYm90dG9tO1xyXG4gICAgY29uc3QgY2FyZEhlaWdodFBhZGRpbmcgPSAxMDA7IC8vIHJvdWdoIHZhbHVlLCBnb29kIGVub3VnaFxyXG4gICAgY29uc3QgY2FyZEhlaWdodCA9IHJvb3RSZWYuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRIZWlnaHQgKyBjYXJkSGVpZ2h0UGFkZGluZztcclxuXHJcbiAgICBpZiAocm9vdFJlZkJvdHRvbSAtIGNhcmRIZWlnaHQgPD0gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgIHNldElzRmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICAvLyBJZiB0aGUgaW5pdGlhbCBmZXRjaCBmYWlsZWQsIHNob3cgZXJyb3JcclxuICBpZiAobGFzdEZldGNoRXJyb3IgJiYgaXRlbXMubGVuZ3RoID09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxFcnJvck1lc3NhZ2VcclxuICAgICAgICB0aXRsZT1cIlRoZXJlIHdhcyBhbiBlcnJvciB3aGlsZSBmZXRjaGluZyB0aGUgdmlkZW8gZmVlZCFcIlxyXG4gICAgICAgIGRldGFpbHM9e2xhc3RGZXRjaEVycm9yLm1lc3NhZ2V9XHJcbiAgICAgIC8+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtyb290UmVmfSBjbGFzc05hbWU9XCJ2aWRlby1mZWVkXCI+XHJcbiAgICAgIHtpdGVtcy5tYXAodmlkZW8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IFxyXG4gICAgICAgICAgdmlkZW8udGh1bWJuYWlscy5tYXhyZXNVcmwgfHwgXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLnN0YW5kYXJkVXJsIHx8IFxyXG4gICAgICAgICAgdmlkZW8udGh1bWJuYWlscy5oaWdoVXJsIHx8IFxyXG4gICAgICAgICAgdmlkZW8udGh1bWJuYWlscy5tZWRpdW1VcmwgfHwgXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLmRlZmF1bHRVcmw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17dmlkZW8uaWR9IGNsYXNzTmFtZT1cInZpZGVvLWZlZWQtY2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPFZpZGVvQ2FyZFxyXG4gICAgICAgICAgICAgIGlkPXt2aWRlby5pZH1cclxuICAgICAgICAgICAgICB0aXRsZT17dmlkZW8udGl0bGV9XHJcbiAgICAgICAgICAgICAgbnVtVmlld3M9e3ZpZGVvLm51bVZpZXdzfVxyXG4gICAgICAgICAgICAgIHB1Ymxpc2hlZEF0PXt2aWRlby5wdWJsaXNoZWRBdH1cclxuICAgICAgICAgICAgICB0aHVtYm5haWw9e3RodW1ibmFpbH1cclxuICAgICAgICAgICAgICBkdXJhdGlvbj17dmlkZW8uZHVyYXRpb259XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25WaWRlb0NsaWNrICYmIHByb3BzLm9uVmlkZW9DbGljayh2aWRlby5pZCwgaXRlbXMpfVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8L1ZpZGVvQ2FyZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2lzRmV0Y2hpbmcgJiYgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1mZWVkLXNwaW5uZXJcIj5cclxuICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICA8L1NwaW5uZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9