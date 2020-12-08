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

  const [page, setPage] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(100);
  const [items, setItems] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(props.items || []);
  const [isFetching, setIsFetching] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  const [stopFetching, setStopFetching] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (!isFetching || stopFetching) {
      return;
    }

    fetch(`/feed/page${page + 1}.json`).then(res => {
      if (res.status == 404) {
        setStopFetching(true);
        return;
      }

      return res.json();
    }).then(newItems => {
      console.log(newItems);
      setPage(page + 1);
      setItems(items.concat(newItems));
      setIsFetching(false);
    }).catch(err => {
      console.error('video feed fetch error', err);
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
          lineNumber: 85,
          columnNumber: 13
        }, undefined)
      }, video.id, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }, undefined);
    }), isFetching && !stopFetching && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "video-feed-spinner",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_4__["default"], {
        animation: "border",
        role: "status",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "sr-only",
          children: "Loading..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 5
  }, undefined);
}, "WbMoWz2q7c09ABrqhxfUHwFPTYs=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9GZWVkLmpzIl0sIm5hbWVzIjpbInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicm9vdFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiY3VycmVudCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2Nyb2xsWSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJzdG9wRmV0Y2hpbmciLCJzZXRTdG9wRmV0Y2hpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwibmV3SXRlbXMiLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwiY2F0Y2giLCJlcnIiLCJlcnJvciIsIm9uU2Nyb2xsIiwiZXYiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJvb3RSZWZCb3R0b20iLCJnZXRDbGllbnRSZWN0cyIsImJvdHRvbSIsImNhcmRIZWlnaHRQYWRkaW5nIiwiY2FyZEhlaWdodCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJ2aWRlbyIsInRodW1ibmFpbCIsInRodW1ibmFpbHMiLCJtYXhyZXNVcmwiLCJzdGFuZGFyZFVybCIsImhpZ2hVcmwiLCJtZWRpdW1VcmwiLCJkZWZhdWx0VXJsIiwiaWQiLCJ0aXRsZSIsIm51bVZpZXdzIiwicHVibGlzaGVkQXQiLCJkdXJhdGlvbiIsIm9uVmlkZW9DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsa0VBQUNBLEtBQUQsSUFBVztBQUFBOztBQUN4QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyw0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QUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW9DRCxDQXBHRDtBQUFBLFVBQ2lCZixxREFEakI7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41OWUyZmM2YzZlY2YyYmYzNjllYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1NwaW5uZXInO1xyXG5pbXBvcnQgVmlkZW9DYXJkIGZyb20gJy4vVmlkZW9DYXJkJztcclxuaW1wb3J0IEVuZHBvaW50IGZyb20gJy4uL0VuZHBvaW50JztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCByb290UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGlmICghcm9vdFJlZiB8fCAhcm9vdFJlZi5jdXJyZW50KSB7XHJcbiAgICAvLyBmaXJzdCB0aW1lIHJlbmRlciwgbGV0J3Mgc2Nyb2xsIGltbWVkaWF0ZWx5IVxyXG4gICAgLy8gd2UgY291bGQgcHV0IHRoaXMgaW4gdXNlRWZmZWN0LCBidXQgdGhhdCB3aWxsIGhhcGVuIGFmdGVyIHJlbmRlciBhbmRcclxuICAgIC8vIHRoZXJlIHdpbGwgYmUgYSBkZWxheSBhcyBhIHJlc3VsdC5cclxuXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHByb3BzLnNjcm9sbFkgfHwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxMDApO1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuaXRlbXMgfHwgW10pO1xyXG4gIGNvbnN0IFtpc0ZldGNoaW5nLCBzZXRJc0ZldGNoaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3RvcEZldGNoaW5nLCBzZXRTdG9wRmV0Y2hpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpc0ZldGNoaW5nIHx8IHN0b3BGZXRjaGluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goYC9mZWVkL3BhZ2Uke3BhZ2UgKyAxfS5qc29uYClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSA0MDQpIHtcclxuICAgICAgICAgIHNldFN0b3BGZXRjaGluZyh0cnVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihuZXdJdGVtcyA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3SXRlbXMpO1xyXG5cclxuICAgICAgICBzZXRQYWdlKHBhZ2UgKyAxKTtcclxuICAgICAgICBzZXRJdGVtcyhpdGVtcy5jb25jYXQobmV3SXRlbXMpKTtcclxuICAgICAgICBzZXRJc0ZldGNoaW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcigndmlkZW8gZmVlZCBmZXRjaCBlcnJvcicsIGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtpc0ZldGNoaW5nXSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uU2Nyb2xsKGV2KSB7XHJcbiAgICBpZiAoIXJvb3RSZWYuY3VycmVudCB8fCAhcm9vdFJlZi5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb290UmVmQm90dG9tID0gcm9vdFJlZi5jdXJyZW50LmdldENsaWVudFJlY3RzKClbMF0uYm90dG9tO1xyXG4gICAgY29uc3QgY2FyZEhlaWdodFBhZGRpbmcgPSAxMDA7IC8vIHJvdWdoIHZhbHVlLCBnb29kIGVub3VnaFxyXG4gICAgY29uc3QgY2FyZEhlaWdodCA9IHJvb3RSZWYuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRIZWlnaHQgKyBjYXJkSGVpZ2h0UGFkZGluZztcclxuXHJcbiAgICBpZiAocm9vdFJlZkJvdHRvbSAtIGNhcmRIZWlnaHQgPD0gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgIHNldElzRmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3Jvb3RSZWZ9IGNsYXNzTmFtZT1cInZpZGVvLWZlZWRcIj5cclxuICAgICAge2l0ZW1zLm1hcCh2aWRlbyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLm1heHJlc1VybCB8fCBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMuc3RhbmRhcmRVcmwgfHwgXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLmhpZ2hVcmwgfHwgXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLm1lZGl1bVVybCB8fCBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMuZGVmYXVsdFVybDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYga2V5PXt2aWRlby5pZH0gY2xhc3NOYW1lPVwidmlkZW8tZmVlZC1jYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8VmlkZW9DYXJkXHJcbiAgICAgICAgICAgICAgaWQ9e3ZpZGVvLmlkfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXt2aWRlby50aXRsZX1cclxuICAgICAgICAgICAgICBudW1WaWV3cz17dmlkZW8ubnVtVmlld3N9XHJcbiAgICAgICAgICAgICAgcHVibGlzaGVkQXQ9e3ZpZGVvLnB1Ymxpc2hlZEF0fVxyXG4gICAgICAgICAgICAgIHRodW1ibmFpbD17dGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uPXt2aWRlby5kdXJhdGlvbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vblZpZGVvQ2xpY2sgJiYgcHJvcHMub25WaWRlb0NsaWNrKHZpZGVvLmlkLCBpdGVtcyl9XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDwvVmlkZW9DYXJkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7aXNGZXRjaGluZyAmJiAhc3RvcEZldGNoaW5nICYmIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tZmVlZC1zcGlubmVyXCI+XHJcbiAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgPC9TcGlubmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==