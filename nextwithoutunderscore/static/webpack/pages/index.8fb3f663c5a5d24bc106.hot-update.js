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
  const [stopFetching, setStopFetching] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(false);
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    if (!isFetching || stopFetching) {
      return;
    }

    fetch(`http://www.go/feed/page${page + 1}.json`).then(res => {
      if (res.status == 404) {
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
          lineNumber: 87,
          columnNumber: 13
        }, undefined)
      }, video.id, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
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
}, "F9dLtvQ5E8HtTGQaOM0Gs/VsWhk=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9GZWVkLmpzIl0sIm5hbWVzIjpbInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicm9vdFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiY3VycmVudCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2Nyb2xsWSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJzdG9wRmV0Y2hpbmciLCJzZXRTdG9wRmV0Y2hpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwibmV3SXRlbXMiLCJjb25jYXQiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm9uU2Nyb2xsIiwiZXYiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInJvb3RSZWZCb3R0b20iLCJnZXRDbGllbnRSZWN0cyIsImJvdHRvbSIsImNhcmRIZWlnaHRQYWRkaW5nIiwiY2FyZEhlaWdodCIsImNsaWVudEhlaWdodCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtYXAiLCJ2aWRlbyIsInRodW1ibmFpbCIsInRodW1ibmFpbHMiLCJtYXhyZXNVcmwiLCJzdGFuZGFyZFVybCIsImhpZ2hVcmwiLCJtZWRpdW1VcmwiLCJkZWZhdWx0VXJsIiwiaWQiLCJ0aXRsZSIsIm51bVZpZXdzIiwicHVibGlzaGVkQXQiLCJkdXJhdGlvbiIsIm9uVmlkZW9DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsa0VBQUNBLEtBQUQsSUFBVztBQUFBOztBQUN4QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyw0Q0FBSyxD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QUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQ0QsQ0F0R0Q7QUFBQSxVQUNpQmYscURBRGpCO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGZiM2Y2NjNjNWE1ZDI0YmMxMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9TcGlubmVyJztcclxuaW1wb3J0IFZpZGVvQ2FyZCBmcm9tICcuL1ZpZGVvQ2FyZCc7XHJcbmltcG9ydCBFbmRwb2ludCBmcm9tICcuLi9FbmRwb2ludCc7XHJcbmltcG9ydCBFcnJvck1lc3NhZ2UgZnJvbSAnLi9FcnJvck1lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgcm9vdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBpZiAoIXJvb3RSZWYgfHwgIXJvb3RSZWYuY3VycmVudCkge1xyXG4gICAgLy8gZmlyc3QgdGltZSByZW5kZXIsIGxldCdzIHNjcm9sbCBpbW1lZGlhdGVseSFcclxuICAgIC8vIHdlIGNvdWxkIHB1dCB0aGlzIGluIHVzZUVmZmVjdCwgYnV0IHRoYXQgd2lsbCBoYXBlbiBhZnRlciByZW5kZXIgYW5kXHJcbiAgICAvLyB0aGVyZSB3aWxsIGJlIGEgZGVsYXkgYXMgYSByZXN1bHQuXHJcblxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwcm9wcy5zY3JvbGxZIHx8IDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5pdGVtcyB8fCBbXSk7XHJcbiAgY29uc3QgW2lzRmV0Y2hpbmcsIHNldElzRmV0Y2hpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdG9wRmV0Y2hpbmcsIHNldFN0b3BGZXRjaGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzRmV0Y2hpbmcgfHwgc3RvcEZldGNoaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChgaHR0cDovL3d3dy5nby9mZWVkL3BhZ2Uke3BhZ2UgKyAxfS5qc29uYClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSA0MDQpIHtcclxuICAgICAgICAgIHNldFN0b3BGZXRjaGluZyh0cnVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihuZXdJdGVtcyA9PiB7XHJcbiAgICAgICAgaWYgKCFuZXdJdGVtcykge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGFnZShwYWdlICsgMSk7XHJcbiAgICAgICAgc2V0SXRlbXMoaXRlbXMuY29uY2F0KG5ld0l0ZW1zKSk7XHJcbiAgICAgICAgc2V0SXNGZXRjaGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3ZpZGVvIGZlZWQgZmV0Y2ggZXJyb3InLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbaXNGZXRjaGluZ10pO1xyXG5cclxuICBmdW5jdGlvbiBvblNjcm9sbChldikge1xyXG4gICAgaWYgKCFyb290UmVmLmN1cnJlbnQgfHwgIXJvb3RSZWYuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm9vdFJlZkJvdHRvbSA9IHJvb3RSZWYuY3VycmVudC5nZXRDbGllbnRSZWN0cygpWzBdLmJvdHRvbTtcclxuICAgIGNvbnN0IGNhcmRIZWlnaHRQYWRkaW5nID0gMTAwOyAvLyByb3VnaCB2YWx1ZSwgZ29vZCBlbm91Z2hcclxuICAgIGNvbnN0IGNhcmRIZWlnaHQgPSByb290UmVmLmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50SGVpZ2h0ICsgY2FyZEhlaWdodFBhZGRpbmc7XHJcblxyXG4gICAgaWYgKHJvb3RSZWZCb3R0b20gLSBjYXJkSGVpZ2h0IDw9IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICBzZXRJc0ZldGNoaW5nKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtyb290UmVmfSBjbGFzc05hbWU9XCJ2aWRlby1mZWVkXCI+XHJcbiAgICAgIHtpdGVtcy5tYXAodmlkZW8gPT4ge1xyXG4gICAgICAgIGNvbnN0IHRodW1ibmFpbCA9IFxyXG4gICAgICAgICAgdmlkZW8udGh1bWJuYWlscy5tYXhyZXNVcmwgfHwgXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLnN0YW5kYXJkVXJsIHx8IFxyXG4gICAgICAgICAgdmlkZW8udGh1bWJuYWlscy5oaWdoVXJsIHx8IFxyXG4gICAgICAgICAgdmlkZW8udGh1bWJuYWlscy5tZWRpdW1VcmwgfHwgXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLmRlZmF1bHRVcmw7XHJcblxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17dmlkZW8uaWR9IGNsYXNzTmFtZT1cInZpZGVvLWZlZWQtY2FyZC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPFZpZGVvQ2FyZFxyXG4gICAgICAgICAgICAgIGlkPXt2aWRlby5pZH1cclxuICAgICAgICAgICAgICB0aXRsZT17dmlkZW8udGl0bGV9XHJcbiAgICAgICAgICAgICAgbnVtVmlld3M9e3ZpZGVvLm51bVZpZXdzfVxyXG4gICAgICAgICAgICAgIHB1Ymxpc2hlZEF0PXt2aWRlby5wdWJsaXNoZWRBdH1cclxuICAgICAgICAgICAgICB0aHVtYm5haWw9e3RodW1ibmFpbH1cclxuICAgICAgICAgICAgICBkdXJhdGlvbj17dmlkZW8uZHVyYXRpb259XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcHJvcHMub25WaWRlb0NsaWNrICYmIHByb3BzLm9uVmlkZW9DbGljayh2aWRlby5pZCwgaXRlbXMpfVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8L1ZpZGVvQ2FyZD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pfVxyXG5cclxuICAgICAge2lzRmV0Y2hpbmcgJiYgIXN0b3BGZXRjaGluZyAmJiBcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvLWZlZWQtc3Bpbm5lclwiPlxyXG4gICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgIDwvU3Bpbm5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=