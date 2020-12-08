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

    router.push('/feedtest'); // const params = {
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
      lineNumber: 72,
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
          lineNumber: 91,
          columnNumber: 13
        }, undefined)
      }, video.id, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
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
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 80,
    columnNumber: 5
  }, undefined);
}, "iIfAtrcgnDcs6RnOfD5Yhnkt5ho="));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9GZWVkLmpzIl0sIm5hbWVzIjpbInByb3BzIiwicm9vdFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiY3VycmVudCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2Nyb2xsWSIsIml0ZW1zIiwic2V0SXRlbXMiLCJ1c2VTdGF0ZSIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwibGFzdEZldGNoRXJyb3IiLCJzZXRMYXN0RmV0Y2hFcnJvciIsInVzZUVmZmVjdCIsInJvdXRlciIsInB1c2giLCJvblNjcm9sbCIsImV2IiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJyb290UmVmQm90dG9tIiwiZ2V0Q2xpZW50UmVjdHMiLCJib3R0b20iLCJjYXJkSGVpZ2h0UGFkZGluZyIsImNhcmRIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJpbm5lckhlaWdodCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwibGVuZ3RoIiwibWVzc2FnZSIsIm1hcCIsInZpZGVvIiwidGh1bWJuYWlsIiwidGh1bWJuYWlscyIsIm1heHJlc1VybCIsInN0YW5kYXJkVXJsIiwiaGlnaFVybCIsIm1lZGl1bVVybCIsImRlZmF1bHRVcmwiLCJpZCIsInRpdGxlIiwibnVtVmlld3MiLCJwdWJsaXNoZWRBdCIsImR1cmF0aW9uIiwib25WaWRlb0NsaWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxrRUFBQ0EsS0FBRCxJQUFXO0FBQUE7O0FBQ3hCLFFBQU1DLE9BQU8sR0FBR0MsNENBQUssQ0FBQ0MsTUFBTixDQUFhLElBQWIsQ0FBaEI7O0FBQ0EsTUFBSSxDQUFDRixPQUFELElBQVksQ0FBQ0EsT0FBTyxDQUFDRyxPQUF6QixFQUFrQztBQUNoQztBQUNBO0FBQ0E7QUFFQSxjQUFtQztBQUNqQ0MsWUFBTSxD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QUVWLFNBTGI7QUFNRSxrQkFBUSxFQUFFRCxLQUFLLENBQUNZLFFBTmxCO0FBT0UsaUJBQU8sRUFBRSxNQUFNN0MsS0FBSyxDQUFDOEMsWUFBTixJQUFzQjlDLEtBQUssQ0FBQzhDLFlBQU4sQ0FBbUJiLEtBQUssQ0FBQ1EsRUFBekIsRUFBNkJqQyxLQUE3QjtBQVB2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsU0FBVXlCLEtBQUssQ0FBQ1EsRUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQWVELEtBdkJBLENBREgsRUEwQkc5QixVQUFVLGlCQUNUO0FBQUssZUFBUyxFQUFDLG9CQUFmO0FBQUEsNkJBQ0UscUVBQUMsK0RBQUQ7QUFBUyxpQkFBUyxFQUFDLFFBQW5CO0FBQTRCLFlBQUksRUFBQyxRQUFqQztBQUFBLCtCQUNFO0FBQU0sbUJBQVMsRUFBQyxTQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTNCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQW9DRCxDQTFHRCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mZmQ4MjYwOThhNjFhNWRmMTE5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgcXVlcnlTdHJpbmcgZnJvbSAncXVlcnktc3RyaW5nJztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1NwaW5uZXInO1xyXG5pbXBvcnQgVmlkZW9DYXJkIGZyb20gJy4vVmlkZW9DYXJkJztcclxuaW1wb3J0IEVuZHBvaW50IGZyb20gJy4uL0VuZHBvaW50JztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICBjb25zdCByb290UmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGlmICghcm9vdFJlZiB8fCAhcm9vdFJlZi5jdXJyZW50KSB7XHJcbiAgICAvLyBmaXJzdCB0aW1lIHJlbmRlciwgbGV0J3Mgc2Nyb2xsIGltbWVkaWF0ZWx5IVxyXG4gICAgLy8gd2UgY291bGQgcHV0IHRoaXMgaW4gdXNlRWZmZWN0LCBidXQgdGhhdCB3aWxsIGhhcGVuIGFmdGVyIHJlbmRlciBhbmRcclxuICAgIC8vIHRoZXJlIHdpbGwgYmUgYSBkZWxheSBhcyBhIHJlc3VsdC5cclxuXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIHByb3BzLnNjcm9sbFkgfHwgMCk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuaXRlbXMgfHwgW10pO1xyXG4gIGNvbnN0IFtpc0ZldGNoaW5nLCBzZXRJc0ZldGNoaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbbGFzdEZldGNoRXJyb3IsIHNldExhc3RGZXRjaEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzRmV0Y2hpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHJvdXRlci5wdXNoKCcvZmVlZHRlc3QnKTtcclxuXHJcbiAgICAvLyBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAvLyAgIHN0YXJ0QXQ6IGl0ZW1zLmxlbmd0aCwgXHJcbiAgICAvLyAgIG1heFJlc3VsdHM6IDEyXHJcbiAgICAvLyB9O1xyXG5cclxuICAgIC8vIGZldGNoKGAke0VuZHBvaW50LnVybH0vPyR7cXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcyl9YClcclxuICAgIC8vICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAvLyAgIC50aGVuKG5ld0l0ZW1zID0+IHtcclxuICAgIC8vICAgICBzZXRJdGVtcyhpdGVtcy5jb25jYXQobmV3SXRlbXMpKTtcclxuICAgIC8vICAgICBzZXRJc0ZldGNoaW5nKGZhbHNlKTtcclxuICAgIC8vICAgfSlcclxuICAgIC8vICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5lcnJvcigndmlkZW8gZmVlZCBmZXRjaCBlcnJvcicsIGVycik7XHJcbiAgICAvLyAgICAgc2V0TGFzdEZldGNoRXJyb3IoZXJyKTtcclxuICAgIC8vICAgfSk7XHJcbiAgfSwgW2lzRmV0Y2hpbmddKTtcclxuXHJcbiAgZnVuY3Rpb24gb25TY3JvbGwoZXYpIHtcclxuICAgIGlmICghcm9vdFJlZi5jdXJyZW50IHx8ICFyb290UmVmLmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJvb3RSZWZCb3R0b20gPSByb290UmVmLmN1cnJlbnQuZ2V0Q2xpZW50UmVjdHMoKVswXS5ib3R0b207XHJcbiAgICBjb25zdCBjYXJkSGVpZ2h0UGFkZGluZyA9IDEwMDsgLy8gcm91Z2ggdmFsdWUsIGdvb2QgZW5vdWdoXHJcbiAgICBjb25zdCBjYXJkSGVpZ2h0ID0gcm9vdFJlZi5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkLmNsaWVudEhlaWdodCArIGNhcmRIZWlnaHRQYWRkaW5nO1xyXG5cclxuICAgIGlmIChyb290UmVmQm90dG9tIC0gY2FyZEhlaWdodCA8PSB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcclxuICAgICAgc2V0SXNGZXRjaGluZyh0cnVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIC8vIElmIHRoZSBpbml0aWFsIGZldGNoIGZhaWxlZCwgc2hvdyBlcnJvclxyXG4gIGlmIChsYXN0RmV0Y2hFcnJvciAmJiBpdGVtcy5sZW5ndGggPT0gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEVycm9yTWVzc2FnZVxyXG4gICAgICAgIHRpdGxlPVwiVGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIGZldGNoaW5nIHRoZSB2aWRlbyBmZWVkIVwiXHJcbiAgICAgICAgZGV0YWlscz17bGFzdEZldGNoRXJyb3IubWVzc2FnZX1cclxuICAgICAgLz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3Jvb3RSZWZ9IGNsYXNzTmFtZT1cInZpZGVvLWZlZWRcIj5cclxuICAgICAge2l0ZW1zLm1hcCh2aWRlbyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLm1heHJlc1VybCB8fCBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMuc3RhbmRhcmRVcmwgfHwgXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLmhpZ2hVcmwgfHwgXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLm1lZGl1bVVybCB8fCBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMuZGVmYXVsdFVybDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYga2V5PXt2aWRlby5pZH0gY2xhc3NOYW1lPVwidmlkZW8tZmVlZC1jYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8VmlkZW9DYXJkXHJcbiAgICAgICAgICAgICAgaWQ9e3ZpZGVvLmlkfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXt2aWRlby50aXRsZX1cclxuICAgICAgICAgICAgICBudW1WaWV3cz17dmlkZW8ubnVtVmlld3N9XHJcbiAgICAgICAgICAgICAgcHVibGlzaGVkQXQ9e3ZpZGVvLnB1Ymxpc2hlZEF0fVxyXG4gICAgICAgICAgICAgIHRodW1ibmFpbD17dGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uPXt2aWRlby5kdXJhdGlvbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vblZpZGVvQ2xpY2sgJiYgcHJvcHMub25WaWRlb0NsaWNrKHZpZGVvLmlkLCBpdGVtcyl9XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDwvVmlkZW9DYXJkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7aXNGZXRjaGluZyAmJiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWZlZWQtc3Bpbm5lclwiPlxyXG4gICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgIDwvU3Bpbm5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=