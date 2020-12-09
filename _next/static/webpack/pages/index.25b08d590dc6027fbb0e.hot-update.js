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
/* harmony import */ var react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap/Spinner */ "./node_modules/react-bootstrap/esm/Spinner.js");
/* harmony import */ var _VideoCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VideoCard */ "./src/components/VideoCard.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ErrorMessage */ "./src/components/ErrorMessage.js");


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
  const [stopFetching, setStopFetching] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [fetchError, setFetchError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (!isFetching || stopFetching) {
      return;
    }

    fetch(`/kurzgesagt-tldr/feed/page${page + 1}.json`).then(res => {
      if (res.status == 404) {
        // We've reached the end of the feed as there are no more pages left.
        // So stop fetching, we're done!
        setStopFetching(true);
        return;
      }

      return res.json();
    }).then(newItems => {
      if (!newItems) {
        return;
      }

      setPage(page + 1);
      setItems(items.concat(newItems));
      setIsFetching(false);
    }).catch(err => {
      console.error('video feed fetch error', err);
      setStopFetching(true);
      setFetchError(err);
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
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    ref: rootRef,
    className: "video-feed",
    children: [items.map(video => {
      const thumbnail = video.thumbnails.maxresUrl || video.thumbnails.standardUrl || video.thumbnails.highUrl || video.thumbnails.mediumUrl || video.thumbnails.defaultUrl;
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "video-feed-card-container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_VideoCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          id: video.id,
          title: video.title,
          numViews: video.numViews,
          publishedAt: video.publishedAt,
          thumbnail: thumbnail,
          duration: video.duration,
          onClick: () => props.onVideoClick && props.onVideoClick(video.id)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 13
        }, undefined)
      }, video.id, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 11
      }, undefined);
    }), isFetching && !stopFetching && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "video-feed-spinner",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], {
        animation: "border",
        role: "status",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "sr-only",
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }, undefined), fetchError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "video-feed-error",
      title: "Error when loading feed",
      message: fetchError.message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, undefined);
}, "HS2LTgU/mTlFAFCvxrDHRIIVfWQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9GZWVkLmpzIl0sIm5hbWVzIjpbInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicm9vdFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiY3VycmVudCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2Nyb2xsWSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJzdG9wRmV0Y2hpbmciLCJzZXRTdG9wRmV0Y2hpbmciLCJmZXRjaEVycm9yIiwic2V0RmV0Y2hFcnJvciIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJuZXdJdGVtcyIsImNvbmNhdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwib25TY3JvbGwiLCJldiIsImZpcnN0RWxlbWVudENoaWxkIiwicm9vdFJlZkJvdHRvbSIsImdldENsaWVudFJlY3RzIiwiYm90dG9tIiwiY2FyZEhlaWdodFBhZGRpbmciLCJjYXJkSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1hcCIsInZpZGVvIiwidGh1bWJuYWlsIiwidGh1bWJuYWlscyIsIm1heHJlc1VybCIsInN0YW5kYXJkVXJsIiwiaGlnaFVybCIsIm1lZGl1bVVybCIsImRlZmF1bHRVcmwiLCJpZCIsInRpdGxlIiwibnVtVmlld3MiLCJwdWJsaXNoZWRBdCIsImR1cmF0aW9uIiwib25WaWRlb0NsaWNrIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxrRUFBQ0EsS0FBRCxJQUFXO0FBQUE7O0FBQ3hCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFD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WUFBSSxFQUFDLFFBQWpDO0FBQUEsK0JBQ0U7QUFBTSxtQkFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBM0JKLEVBa0NHRSxVQUFVLGlCQUNULHFFQUFDLHFEQUFEO0FBQ0UsZUFBUyxFQUFDLGtCQURaO0FBRUUsV0FBSyxFQUFDLHlCQUZSO0FBR0UsYUFBTyxFQUFFQSxVQUFVLENBQUN5QztBQUh0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5DSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQTRDRCxDQXBIRDtBQUFBLFVBQ2lCMUQscURBRGpCO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMjViMDhkNTkwZGM2MDI3ZmJiMGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1NwaW5uZXInO1xyXG5pbXBvcnQgVmlkZW9DYXJkIGZyb20gJy4vVmlkZW9DYXJkJztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCByb290UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGlmICghcm9vdFJlZiB8fCAhcm9vdFJlZi5jdXJyZW50KSB7XHJcbiAgICAvLyBmaXJzdCB0aW1lIHJlbmRlciwgbGV0J3Mgc2Nyb2xsIGltbWVkaWF0ZWx5IVxyXG4gICAgLy8gd2UgY291bGQgcHV0IHRoaXMgaW4gdXNlRWZmZWN0LCBidXQgdGhhdCB3aWxsIGhhcGVuIGFmdGVyIHJlbmRlciBhbmRcclxuICAgIC8vIHRoZXJlIHdpbGwgYmUgYSBkZWxheSBhcyBhIHJlc3VsdC5cclxuXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHByb3BzLnNjcm9sbFkgfHwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbaXRlbXMsIHNldEl0ZW1zXSA9IFJlYWN0LnVzZVN0YXRlKHByb3BzLml0ZW1zIHx8IFtdKTtcclxuICBjb25zdCBbaXNGZXRjaGluZywgc2V0SXNGZXRjaGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3N0b3BGZXRjaGluZywgc2V0U3RvcEZldGNoaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZmV0Y2hFcnJvciwgc2V0RmV0Y2hFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0ZldGNoaW5nIHx8IHN0b3BGZXRjaGluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goYC9rdXJ6Z2VzYWd0LXRsZHIvZmVlZC9wYWdlJHtwYWdlICsgMX0uanNvbmApXHJcbiAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT0gNDA0KSB7XHJcbiAgICAgICAgICAvLyBXZSd2ZSByZWFjaGVkIHRoZSBlbmQgb2YgdGhlIGZlZWQgYXMgdGhlcmUgYXJlIG5vIG1vcmUgcGFnZXMgbGVmdC5cclxuICAgICAgICAgIC8vIFNvIHN0b3AgZmV0Y2hpbmcsIHdlJ3JlIGRvbmUhXHJcbiAgICAgICAgICBzZXRTdG9wRmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4obmV3SXRlbXMgPT4ge1xyXG4gICAgICAgIGlmICghbmV3SXRlbXMpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFBhZ2UocGFnZSArIDEpO1xyXG4gICAgICAgIHNldEl0ZW1zKGl0ZW1zLmNvbmNhdChuZXdJdGVtcykpO1xyXG4gICAgICAgIHNldElzRmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCd2aWRlbyBmZWVkIGZldGNoIGVycm9yJywgZXJyKTtcclxuXHJcbiAgICAgICAgc2V0U3RvcEZldGNoaW5nKHRydWUpO1xyXG4gICAgICAgIHNldEZldGNoRXJyb3IoZXJyKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW2lzRmV0Y2hpbmddKTtcclxuXHJcbiAgZnVuY3Rpb24gb25TY3JvbGwoZXYpIHtcclxuICAgIGlmICghcm9vdFJlZi5jdXJyZW50IHx8ICFyb290UmVmLmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvb3RSZWZCb3R0b20gPSByb290UmVmLmN1cnJlbnQuZ2V0Q2xpZW50UmVjdHMoKVswXS5ib3R0b207XHJcbiAgICBjb25zdCBjYXJkSGVpZ2h0UGFkZGluZyA9IDEwMDsgLy8gcm91Z2ggdmFsdWUsIGdvb2QgZW5vdWdoXHJcbiAgICBjb25zdCBjYXJkSGVpZ2h0ID0gcm9vdFJlZi5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudEhlaWdodCArIGNhcmRIZWlnaHRQYWRkaW5nO1xyXG5cclxuICAgIGlmIChyb290UmVmQm90dG9tIC0gY2FyZEhlaWdodCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgc2V0SXNGZXRjaGluZyh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IHJlZj17cm9vdFJlZn0gY2xhc3NOYW1lPVwidmlkZW8tZmVlZFwiPlxyXG4gICAgICB7aXRlbXMubWFwKHZpZGVvID0+IHtcclxuICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMubWF4cmVzVXJsIHx8IFxyXG4gICAgICAgICAgdmlkZW8udGh1bWJuYWlscy5zdGFuZGFyZFVybCB8fCBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMuaGlnaFVybCB8fCBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMubWVkaXVtVXJsIHx8IFxyXG4gICAgICAgICAgdmlkZW8udGh1bWJuYWlscy5kZWZhdWx0VXJsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3ZpZGVvLmlkfSBjbGFzc05hbWU9XCJ2aWRlby1mZWVkLWNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxWaWRlb0NhcmRcclxuICAgICAgICAgICAgICBpZD17dmlkZW8uaWR9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3ZpZGVvLnRpdGxlfVxyXG4gICAgICAgICAgICAgIG51bVZpZXdzPXt2aWRlby5udW1WaWV3c31cclxuICAgICAgICAgICAgICBwdWJsaXNoZWRBdD17dmlkZW8ucHVibGlzaGVkQXR9XHJcbiAgICAgICAgICAgICAgdGh1bWJuYWlsPXt0aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgZHVyYXRpb249e3ZpZGVvLmR1cmF0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uVmlkZW9DbGljayAmJiBwcm9wcy5vblZpZGVvQ2xpY2sodmlkZW8uaWQpfVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8L1ZpZGVvQ2FyZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2lzRmV0Y2hpbmcgJiYgIXN0b3BGZXRjaGluZyAmJiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWZlZWQtc3Bpbm5lclwiPlxyXG4gICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgIDwvU3Bpbm5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG5cclxuICAgICAge2ZldGNoRXJyb3IgJiYgXHJcbiAgICAgICAgPEVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgY2xhc3NOYW1lPSd2aWRlby1mZWVkLWVycm9yJ1xyXG4gICAgICAgICAgdGl0bGU9XCJFcnJvciB3aGVuIGxvYWRpbmcgZmVlZFwiXHJcbiAgICAgICAgICBtZXNzYWdlPXtmZXRjaEVycm9yLm1lc3NhZ2V9XHJcbiAgICAgICAgLz5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=