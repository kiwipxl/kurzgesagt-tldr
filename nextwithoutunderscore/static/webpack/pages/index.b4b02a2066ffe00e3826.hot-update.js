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
/* harmony import */ var react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap/Toast */ "./node_modules/react-bootstrap/esm/Toast.js");
/* harmony import */ var _VideoCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VideoCard */ "./src/components/VideoCard.js");


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

    fetch(`http://www.go/feed/page${page + 1}.json`).then(res => {
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
    children: [fetchError && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "feed-error",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_4__["default"].Header, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("strong", {
          children: "Error when loading feed"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_4__["default"].Body, {
        children: fetchError.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }, undefined), items.map(video => {
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
          lineNumber: 103,
          columnNumber: 13
        }, undefined)
      }, video.id, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
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
          lineNumber: 121,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9GZWVkLmpzIl0sIm5hbWVzIjpbInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicm9vdFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiY3VycmVudCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2Nyb2xsWSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJzdG9wRmV0Y2hpbmciLCJzZXRTdG9wRmV0Y2hpbmciLCJmZXRjaEVycm9yIiwic2V0RmV0Y2hFcnJvciIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJuZXdJdGVtcyIsImNvbmNhdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwib25TY3JvbGwiLCJldiIsImZpcnN0RWxlbWVudENoaWxkIiwicm9vdFJlZkJvdHRvbSIsImdldENsaWVudFJlY3RzIiwiYm90dG9tIiwiY2FyZEhlaWdodFBhZGRpbmciLCJjYXJkSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJtYXAiLCJ2aWRlbyIsInRodW1ibmFpbCIsInRodW1ibmFpbHMiLCJtYXhyZXNVcmwiLCJzdGFuZGFyZFVybCIsImhpZ2hVcmwiLCJtZWRpdW1VcmwiLCJkZWZhdWx0VXJsIiwiaWQiLCJ0aXRsZSIsIm51bVZpZXdzIiwicHVibGlzaGVkQXQiLCJkdXJhdGlvbiIsIm9uVmlkZW9DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxrRUFBQ0EsS0FBRCxJQUFXO0FBQUE7O0FBQ3hCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNQyxPQUFPLEdBQUdDLDRDQUFLLENBQUNDLE1BQU4sQ0FBYSxJQUFiLENBQWhCOztBQUNBLE1BQUksQ0FBQ0YsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ0csT0FBekIsRUFBa0M7QUFDaEM7QUFDQTtBQUNBO0FBRUEsY0FBbUM7QUFDakNDLFlBQU0sQ0FBQ0MsUUFBUCxDQUFnQixDQUFoQixFQUFtQlIsS0FBSyxDQUFDUyxPQUFOLElBQWlCLENBQXBDO0FBQ0Q7QUFDRjs7QUFFRCxRQUFNLENBQUNDLElBQUQsRUFBT0MsT0FBUCxJQUFrQlAsNENBQUssQ0FBQ1EsUUFBTixDQUFlLENBQWYsQ0FBeEI7QUFDQSxRQUFNLENBQUNDLEtBQUQsRUFBUUMsUUFBUixJQUFvQlYsNENBQUssQ0FBQ1EsUUFBTixDQUFlWixLQUFLLENBQUNhLEtBQU4sSUFBZSxFQUE5QixDQUExQjtBQUNBLFFBQU0sQ0FBQ0UsVUFBRCxFQUFhQyxhQUFiLElBQThCWiw0Q0FBSyxDQUFDUSxRQUFOLENBQWUsS0FBZixDQUFwQztBQUNBLFFBQU0sQ0FBQ0ssWUFBRCxFQUFlQyxlQUFmLElBQWtDZCw0Q0FBSyxDQUFDUSxRQUFOLENBQWUsS0FBZixDQUF4QztBQUNBLFFBQU0sQ0FBQ08sVUFBRCxFQUFhQyxhQUFiLElBQThCaEIsNENBQUssQ0FBQ1EsUUFBTixFQUFwQztBQUVBUiw4Q0FBSyxDQUFDaUIsU0FBTixDQUFnQixNQUFNO0FBQ3BCLFFBQUksQ0FBQ04sVUFBRCxJQUFlRSxZQUFuQixFQUFpQztBQUMvQjtBQUNEOztBQUVESyxTQUFLLENBQUUsMEJBQXlCWixJQUFJLEdBQUcsQ0FBRSxPQUFwQyxDQUFMLENBQ0dhLElBREgsQ0FDUUMsR0FBRyxJQUFJO0FBQ1gsVUFBSUEsR0FBRyxDQUFDQyxNQUFKLElBQWMsR0FBbEIsRUFBdUI7QUFDckI7QUFDQTtBQUNBUCx1QkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBO0FBQ0Q7O0FBRUQsYUFBT00sR0FBRyxDQUFDRSxJQUFKLEVBQVA7QUFDRCxLQVZILEVBV0dILElBWEgsQ0FXUUksUUFBUSxJQUFJO0FBQ2hCLFVBQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2I7QUFDRDs7QUFFRGhCLGFBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNBSSxjQUFRLENBQUNELEtBQUssQ0FBQ2UsTUFBTixDQUFhRCxRQUFiLENBQUQsQ0FBUjtBQUNBWCxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNELEtBbkJILEVBb0JHYSxLQXBCSCxDQW9CU0MsR0FBRyxJQUFJO0FBQ1pDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjLHdCQUFkLEVBQXdDRixHQUF4QztBQUVBWixxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBRSxtQkFBYSxDQUFDVSxHQUFELENBQWI7QUFDRCxLQXpCSDtBQTBCRCxHQS9CRCxFQStCRyxDQUFDZixVQUFELENBL0JIOztBQWlDQSxXQUFTa0IsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0I7QUFDcEIsUUFBSSxDQUFDL0IsT0FBTyxDQUFDRyxPQUFULElBQW9CLENBQUNILE9BQU8sQ0FBQ0csT0FBUixDQUFnQjZCLGlCQUF6QyxFQUE0RDtBQUMxRDtBQUNEOztBQUVELFVBQU1DLGFBQWEsR0FBR2pDLE9BQU8sQ0FBQ0csT0FBUixDQUFnQitCLGNBQWhCLEdBQWlDLENBQWpDLEVBQW9DQyxNQUExRDtBQUNBLFVBQU1DLGlCQUFpQixHQUFHLEdBQTFCLENBTm9CLENBTVc7O0FBQy9CLFVBQU1DLFVBQVUsR0FBR3JDLE9BQU8sQ0FBQ0csT0FBUixDQUFnQjZCLGlCQUFoQixDQUFrQ00sWUFBbEMsR0FBaURGLGlCQUFwRTs7QUFFQSxRQUFJSCxhQUFhLEdBQUdJLFVBQWhCLElBQThCakMsTUFBTSxDQUFDbUMsV0FBekMsRUFBc0Q7QUFDcEQxQixtQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNEO0FBQ0Y7O0FBQUE7QUFFRFosOENBQUssQ0FBQ2lCLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQmQsVUFBTSxDQUFDb0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NWLFFBQWxDO0FBRUEsV0FBTyxNQUFNMUIsTUFBTSxDQUFDcUMsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNYLFFBQXJDLENBQWI7QUFDRCxHQUpELEVBSUcsRUFKSDtBQU1BLHNCQUNFO0FBQUssT0FBRyxFQUFFOUIsT0FBVjtBQUFtQixhQUFTLEVBQUMsWUFBN0I7QUFBQSxlQUNHZ0IsVUFBVSxpQkFDVCxxRUFBQyw2REFBRDtBQUFPLGVBQVMsRUFBQyxZQUFqQjtBQUFBLDhCQUNFLHFFQUFDLDZEQUFELENBQU8sTUFBUDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFLHFFQUFDLDZEQUFELENBQU8sSUFBUDtBQUFBLGtCQUNHQSxVQUFVLENBQUMwQjtBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBYUdoQyxLQUFLLENBQUNpQyxHQUFOLENBQVVDLEtBQUssSUFBSTtBQUNsQixZQUFNQyxTQUFTLEdBQ2JELEtBQUssQ0FBQ0UsVUFBTixDQUFpQkMsU0FBakIsSUFDQUgsS0FBSyxDQUFDRSxVQUFOLENBQWlCRSxXQURqQixJQUVBSixLQUFLLENBQUNFLFVBQU4sQ0FBaUJHLE9BRmpCLElBR0FMLEtBQUssQ0FBQ0UsVUFBTixDQUFpQkksU0FIakIsSUFJQU4sS0FBSyxDQUFDRSxVQUFOLENBQWlCSyxVQUxuQjtBQU9BLDBCQUNFO0FBQW9CLGlCQUFTLEVBQUMsMkJBQTlCO0FBQUEsK0JBQ0UscUVBQUMsa0RBQUQ7QUFDRSxZQUFFLEVBQUVQLEtBQUssQ0FBQ1EsRUFEWjtBQUVFLGVBQUssRUFBRVIsS0FBSyxDQUFDUyxLQUZmO0FBR0Usa0JBQVEsRUFBRVQsS0FBSyxDQUFDVSxRQUhsQjtBQUlFLHFCQUFXLEVBQUVWLEtBQUssQ0FBQ1csV0FKckI7QUFLRSxtQkFBUyxFQUFFVixTQUxiO0FBTUUsa0JBQVEsRUFBRUQsS0FBSyxDQUFDWSxRQU5sQjtBQU9FLGlCQUFPLEVBQUUsTUFBTTNELEtBQUssQ0FBQzRELFlBQU4sSUFBc0I1RCxLQUFLLENBQUM0RCxZQUFOLENBQW1CYixLQUFLLENBQUNRLEVBQXpCLEVBQTZCMUMsS0FBN0I7QUFQdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVVrQyxLQUFLLENBQUNRLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFlRCxLQXZCQSxDQWJILEVBc0NHeEMsVUFBVSxJQUFJLENBQUNFLFlBQWYsaUJBQ0M7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw2QkFDRSxxRUFBQywrREFBRDtBQUFTLGlCQUFTLEVBQUMsUUFBbkI7QUFBNEIsWUFBSSxFQUFDLFFBQWpDO0FBQUEsK0JBQ0U7QUFBTSxtQkFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0RELENBeEhEO0FBQUEsVUFDaUJmLHFEQURqQjtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0YjAyYTIwNjZmZmUwMGUzODI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9TcGlubmVyJztcclxuaW1wb3J0IFRvYXN0IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9Ub2FzdCc7XHJcbmltcG9ydCBWaWRlb0NhcmQgZnJvbSAnLi9WaWRlb0NhcmQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3Qgcm9vdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBpZiAoIXJvb3RSZWYgfHwgIXJvb3RSZWYuY3VycmVudCkge1xyXG4gICAgLy8gZmlyc3QgdGltZSByZW5kZXIsIGxldCdzIHNjcm9sbCBpbW1lZGlhdGVseSFcclxuICAgIC8vIHdlIGNvdWxkIHB1dCB0aGlzIGluIHVzZUVmZmVjdCwgYnV0IHRoYXQgd2lsbCBoYXBlbiBhZnRlciByZW5kZXIgYW5kXHJcbiAgICAvLyB0aGVyZSB3aWxsIGJlIGEgZGVsYXkgYXMgYSByZXN1bHQuXHJcblxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCBwcm9wcy5zY3JvbGxZIHx8IDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMSk7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5pdGVtcyB8fCBbXSk7XHJcbiAgY29uc3QgW2lzRmV0Y2hpbmcsIHNldElzRmV0Y2hpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtzdG9wRmV0Y2hpbmcsIHNldFN0b3BGZXRjaGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2ZldGNoRXJyb3IsIHNldEZldGNoRXJyb3JdID0gUmVhY3QudXNlU3RhdGUoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaXNGZXRjaGluZyB8fCBzdG9wRmV0Y2hpbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKGBodHRwOi8vd3d3LmdvL2ZlZWQvcGFnZSR7cGFnZSArIDF9Lmpzb25gKVxyXG4gICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09IDQwNCkge1xyXG4gICAgICAgICAgLy8gV2UndmUgcmVhY2hlZCB0aGUgZW5kIG9mIHRoZSBmZWVkIGFzIHRoZXJlIGFyZSBubyBtb3JlIHBhZ2VzIGxlZnQuXHJcbiAgICAgICAgICAvLyBTbyBzdG9wIGZldGNoaW5nLCB3ZSdyZSBkb25lIVxyXG4gICAgICAgICAgc2V0U3RvcEZldGNoaW5nKHRydWUpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKG5ld0l0ZW1zID0+IHtcclxuICAgICAgICBpZiAoIW5ld0l0ZW1zKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRQYWdlKHBhZ2UgKyAxKTtcclxuICAgICAgICBzZXRJdGVtcyhpdGVtcy5jb25jYXQobmV3SXRlbXMpKTtcclxuICAgICAgICBzZXRJc0ZldGNoaW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcigndmlkZW8gZmVlZCBmZXRjaCBlcnJvcicsIGVycik7XHJcblxyXG4gICAgICAgIHNldFN0b3BGZXRjaGluZyh0cnVlKTtcclxuICAgICAgICBzZXRGZXRjaEVycm9yKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtpc0ZldGNoaW5nXSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uU2Nyb2xsKGV2KSB7XHJcbiAgICBpZiAoIXJvb3RSZWYuY3VycmVudCB8fCAhcm9vdFJlZi5jdXJyZW50LmZpcnN0RWxlbWVudENoaWxkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByb290UmVmQm90dG9tID0gcm9vdFJlZi5jdXJyZW50LmdldENsaWVudFJlY3RzKClbMF0uYm90dG9tO1xyXG4gICAgY29uc3QgY2FyZEhlaWdodFBhZGRpbmcgPSAxMDA7IC8vIHJvdWdoIHZhbHVlLCBnb29kIGVub3VnaFxyXG4gICAgY29uc3QgY2FyZEhlaWdodCA9IHJvb3RSZWYuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZC5jbGllbnRIZWlnaHQgKyBjYXJkSGVpZ2h0UGFkZGluZztcclxuXHJcbiAgICBpZiAocm9vdFJlZkJvdHRvbSAtIGNhcmRIZWlnaHQgPD0gd2luZG93LmlubmVySGVpZ2h0KSB7XHJcbiAgICAgIHNldElzRmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcblxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbCk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiByZWY9e3Jvb3RSZWZ9IGNsYXNzTmFtZT1cInZpZGVvLWZlZWRcIj5cclxuICAgICAge2ZldGNoRXJyb3IgJiYgXHJcbiAgICAgICAgPFRvYXN0IGNsYXNzTmFtZT0nZmVlZC1lcnJvcic+XHJcbiAgICAgICAgICA8VG9hc3QuSGVhZGVyPlxyXG4gICAgICAgICAgICA8c3Ryb25nPkVycm9yIHdoZW4gbG9hZGluZyBmZWVkPC9zdHJvbmc+XHJcbiAgICAgICAgICA8L1RvYXN0LkhlYWRlcj5cclxuXHJcbiAgICAgICAgICA8VG9hc3QuQm9keT5cclxuICAgICAgICAgICAge2ZldGNoRXJyb3IubWVzc2FnZX1cclxuICAgICAgICAgIDwvVG9hc3QuQm9keT5cclxuICAgICAgICA8L1RvYXN0PlxyXG4gICAgICB9XHJcblxyXG4gICAgICB7aXRlbXMubWFwKHZpZGVvID0+IHtcclxuICAgICAgICBjb25zdCB0aHVtYm5haWwgPSBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMubWF4cmVzVXJsIHx8IFxyXG4gICAgICAgICAgdmlkZW8udGh1bWJuYWlscy5zdGFuZGFyZFVybCB8fCBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMuaGlnaFVybCB8fCBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMubWVkaXVtVXJsIHx8IFxyXG4gICAgICAgICAgdmlkZW8udGh1bWJuYWlscy5kZWZhdWx0VXJsO1xyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPGRpdiBrZXk9e3ZpZGVvLmlkfSBjbGFzc05hbWU9XCJ2aWRlby1mZWVkLWNhcmQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxWaWRlb0NhcmRcclxuICAgICAgICAgICAgICBpZD17dmlkZW8uaWR9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3ZpZGVvLnRpdGxlfVxyXG4gICAgICAgICAgICAgIG51bVZpZXdzPXt2aWRlby5udW1WaWV3c31cclxuICAgICAgICAgICAgICBwdWJsaXNoZWRBdD17dmlkZW8ucHVibGlzaGVkQXR9XHJcbiAgICAgICAgICAgICAgdGh1bWJuYWlsPXt0aHVtYm5haWx9XHJcbiAgICAgICAgICAgICAgZHVyYXRpb249e3ZpZGVvLmR1cmF0aW9ufVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHByb3BzLm9uVmlkZW9DbGljayAmJiBwcm9wcy5vblZpZGVvQ2xpY2sodmlkZW8uaWQsIGl0ZW1zKX1cclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPC9WaWRlb0NhcmQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgICB9KX1cclxuXHJcbiAgICAgIHtpc0ZldGNoaW5nICYmICFzdG9wRmV0Y2hpbmcgJiYgXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlby1mZWVkLXNwaW5uZXJcIj5cclxuICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICA8L1NwaW5uZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9