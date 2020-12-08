webpackHotUpdate_N_E("pages/video/[vid]",{

/***/ "./src/pages/video/[vid].js":
/*!**********************************!*\
  !*** ./src/pages/video/[vid].js ***!
  \**********************************/
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
/* harmony import */ var _components_VideoDetailsNav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/VideoDetailsNav */ "./src/components/VideoDetailsNav.js");
/* harmony import */ var _components_VideoTranscript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/VideoTranscript */ "./src/components/VideoTranscript.js");
/* harmony import */ var _components_VideoSources__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/VideoSources */ "./src/components/VideoSources.js");
/* harmony import */ var _components_VideoTags__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/VideoTags */ "./src/components/VideoTags.js");
/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Video */ "./src/components/Video.js");
/* harmony import */ var _components_VideoSoundTrack__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/VideoSoundTrack */ "./src/components/VideoSoundTrack.js");
/* harmony import */ var _components_MissingDetails__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/MissingDetails */ "./src/components/MissingDetails.js");
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Endpoint */ "./src/Endpoint.js");
/* harmony import */ var _components_ErrorMessage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ErrorMessage */ "./src/components/ErrorMessage.js");


var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\pages\\video\\[vid].js",
    _s = $RefreshSig$();














function DetailsContainer(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "content-container",
    children: [!props.noContentBox && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "content",
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }, this), props.noContentBox && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

_c = DetailsContainer;
/* harmony default export */ __webpack_exports__["default"] = (_s(props => {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    vid
  } = router.query;
  const defaultTab = 'video';
  const [tab, setTab] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(defaultTab);
  const [videoDetails, setVideoDetails] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState({});
  const [isFetching, setIsFetching] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const [fetchError, setFetchError] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(); // props.setHeaderOptions(true);
  // if (window.location.hash !== '') {
  //     // Override current tab with hash tab (e.g. /video/3mnSDifDSxQ#transcript)
  //     const hashTab = window.location.hash.replace('#', '');
  //     if (hashTab !== tab) {
  //         setTab(hashTab);
  //     }
  // }

  function onClickTab(newTab) {
    setTab(newTab);
  }

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    fetch(`${_Endpoint__WEBPACK_IMPORTED_MODULE_11__["default"].url}/video/${vid}`).then(res => res.json()).then(json => {
      setVideoDetails(json);
      setIsFetching(false);
    }).catch(err => {
      console.error(`failed to fetch video details for ${vid}`, err);
      setFetchError(err);
    });
  }, []);

  if (fetchError) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailsContainer, {
      noContentBox: true,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ErrorMessage__WEBPACK_IMPORTED_MODULE_12__["default"], {
        title: "There was an error while fetching video details!",
        details: fetchError.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, undefined);
  }

  if (isFetching) {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailsContainer, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Spinner__WEBPACK_IMPORTED_MODULE_3__["default"], {
          animation: "border",
          role: "status",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "sr-only",
            children: "Loading..."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }, undefined);
  }

  const hasSources = videoDetails.sources != undefined;
  const hasTranscript = videoDetails.transcript != undefined && videoDetails.transcript.en != undefined;
  const hasSoundTrack = videoDetails.info.soundtrack != undefined;
  const hasTags = videoDetails.tags != undefined;
  let detailsEl = null;

  switch (tab) {
    case 'video':
      detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Video__WEBPACK_IMPORTED_MODULE_8__["default"], {
        id: videoDetails.info.id,
        description: videoDetails.info.description,
        lastUpdated: videoDetails.info.last_scraped
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 17
      }, undefined);
      break;

    case 'sources':
      if (hasSources) {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoSources__WEBPACK_IMPORTED_MODULE_6__["default"], {
          sources: videoDetails.sources,
          lastUpdated: videoDetails.sources.last_updated
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 21
        }, undefined);
      } else {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MissingDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
          tab: tab
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 29
        }, undefined);
      }

      break;

    case 'transcript':
      if (hasTranscript) {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoTranscript__WEBPACK_IMPORTED_MODULE_5__["default"], {
          transcript: videoDetails.transcript.en,
          lastUpdated: videoDetails.transcript.last_updated
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }, undefined);
      } else {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MissingDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
          tab: tab
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 29
        }, undefined);
      }

      break;

    case 'tags':
      if (hasTags) {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoTags__WEBPACK_IMPORTED_MODULE_7__["default"], {
          tags: videoDetails.tags,
          lastUpdated: videoDetails.info.last_scraped
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 21
        }, undefined);
      } else {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MissingDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
          tab: tab
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 29
        }, undefined);
      }

      break;

    case 'soundtrack':
      if (hasSoundTrack) {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoSoundTrack__WEBPACK_IMPORTED_MODULE_9__["default"], {
          url: videoDetails.info.soundtrack.url,
          lastUpdated: videoDetails.info.soundtrack.last_updated
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 21
        }, undefined);
      } else {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MissingDetails__WEBPACK_IMPORTED_MODULE_10__["default"], {
          tab: tab
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 29
        }, undefined);
      }

  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(DetailsContainer, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
      className: "video-details-title",
      children: videoDetails.info.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoDetailsNav__WEBPACK_IMPORTED_MODULE_4__["default"], {
      videoId: vid,
      tab: tab,
      defaultTab: defaultTab,
      onClickTab: onClickTab,
      hasSources: hasSources,
      hasTranscript: hasTranscript,
      hasSoundTrack: hasSoundTrack,
      hasTags: hasTags
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }, undefined), detailsEl]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 158,
    columnNumber: 9
  }, undefined);
}, "SLIs9BRYQ6iF8icfz7EVXv+v82k=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
}));

var _c;

$RefreshReg$(_c, "DetailsContainer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvL1t2aWRdLmpzIl0sIm5hbWVzIjpbIkRldGFpbHNDb250YWluZXIiLCJwcm9wcyIsIm5vQ29udGVudEJveCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwidmlkIiwicXVlcnkiLCJkZWZhdWx0VGFiIiwidGFiIiwic2V0VGFiIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpZGVvRGV0YWlscyIsInNldFZpZGVvRGV0YWlscyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiZmV0Y2hFcnJvciIsInNldEZldGNoRXJyb3IiLCJvbkNsaWNrVGFiIiwibmV3VGFiIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJFbmRwb2ludCIsInVybCIsInRoZW4iLCJyZXMiLCJqc29uIiwiY2F0Y2giLCJlcnIiLCJjb25zb2xlIiwiZXJyb3IiLCJtZXNzYWdlIiwiaGFzU291cmNlcyIsInNvdXJjZXMiLCJ1bmRlZmluZWQiLCJoYXNUcmFuc2NyaXB0IiwidHJhbnNjcmlwdCIsImVuIiwiaGFzU291bmRUcmFjayIsImluZm8iLCJzb3VuZHRyYWNrIiwiaGFzVGFncyIsInRhZ3MiLCJkZXRhaWxzRWwiLCJpZCIsImRlc2NyaXB0aW9uIiwibGFzdF9zY3JhcGVkIiwibGFzdF91cGRhdGVkIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUM3QixzQkFDSTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLGVBQ0ssQ0FBQ0EsS0FBSyxDQUFDQyxZQUFQLGlCQUNHO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSxnQkFDS0QsS0FBSyxDQUFDRTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFG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QUE7QUFBQSxpQkFMSixFQW1CS0UsU0FuQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF1QkgsQ0FwSkQ7QUFBQSxVQUNtQnZDLHFEQURuQjtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZGVvL1t2aWRdLmYyNmY3MGQ2NTI3OGRiYTM2NjFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBTcGlubmVyIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9TcGlubmVyJztcclxuaW1wb3J0IFZpZGVvRGV0YWlsc05hdiBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvRGV0YWlsc05hdic7XHJcbmltcG9ydCBWaWRlb1RyYW5zY3JpcHQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWRlb1RyYW5zY3JpcHQnO1xyXG5pbXBvcnQgVmlkZW9Tb3VyY2VzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW9Tb3VyY2VzJztcclxuaW1wb3J0IFZpZGVvVGFncyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvVGFncyc7XHJcbmltcG9ydCBWaWRlbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvJztcclxuaW1wb3J0IFZpZGVvU291bmRUcmFjayBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvU291bmRUcmFjayc7XHJcbmltcG9ydCBNaXNzaW5nRGV0YWlscyBmcm9tICcuLi8uLi9jb21wb25lbnRzL01pc3NpbmdEZXRhaWxzJztcclxuaW1wb3J0IEVuZHBvaW50IGZyb20gJy4uLy4uL0VuZHBvaW50JztcclxuaW1wb3J0IEVycm9yTWVzc2FnZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Vycm9yTWVzc2FnZSc7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxzQ29udGFpbmVyKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIHshcHJvcHMubm9Db250ZW50Qm94ICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtwcm9wcy5ub0NvbnRlbnRCb3ggJiYgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyB2aWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBjb25zdCBkZWZhdWx0VGFiID0gJ3ZpZGVvJztcclxuXHJcbiAgICBjb25zdCBbdGFiLCBzZXRUYWJdID0gUmVhY3QudXNlU3RhdGUoZGVmYXVsdFRhYik7XHJcbiAgICBjb25zdCBbdmlkZW9EZXRhaWxzLCBzZXRWaWRlb0RldGFpbHNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW2lzRmV0Y2hpbmcsIHNldElzRmV0Y2hpbmddID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZmV0Y2hFcnJvciwgc2V0RmV0Y2hFcnJvcl0gPSBSZWFjdC51c2VTdGF0ZSgpO1xyXG5cclxuICAgIC8vIHByb3BzLnNldEhlYWRlck9wdGlvbnModHJ1ZSk7XHJcblxyXG4gICAgLy8gaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICE9PSAnJykge1xyXG4gICAgLy8gICAgIC8vIE92ZXJyaWRlIGN1cnJlbnQgdGFiIHdpdGggaGFzaCB0YWIgKGUuZy4gL3ZpZGVvLzNtblNEaWZEU3hRI3RyYW5zY3JpcHQpXHJcbiAgICAvLyAgICAgY29uc3QgaGFzaFRhYiA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoLnJlcGxhY2UoJyMnLCAnJyk7XHJcbiAgICAvLyAgICAgaWYgKGhhc2hUYWIgIT09IHRhYikge1xyXG4gICAgLy8gICAgICAgICBzZXRUYWIoaGFzaFRhYik7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uQ2xpY2tUYWIobmV3VGFiKSB7XHJcbiAgICAgICAgc2V0VGFiKG5ld1RhYik7XHJcbiAgICB9XHJcblxyXG4gICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBmZXRjaChgJHtFbmRwb2ludC51cmx9L3ZpZGVvLyR7dmlkfWApXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAudGhlbihqc29uID0+IHtcclxuICAgICAgICAgICAgICAgIHNldFZpZGVvRGV0YWlscyhqc29uKTtcclxuICAgICAgICAgICAgICAgIHNldElzRmV0Y2hpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYGZhaWxlZCB0byBmZXRjaCB2aWRlbyBkZXRhaWxzIGZvciAke3ZpZH1gLCBlcnIpO1xyXG4gICAgICAgICAgICAgICAgc2V0RmV0Y2hFcnJvcihlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBpZiAoZmV0Y2hFcnJvcikge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxEZXRhaWxzQ29udGFpbmVyIG5vQ29udGVudEJveD5cclxuICAgICAgICAgICAgICAgIDxFcnJvck1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlRoZXJlIHdhcyBhbiBlcnJvciB3aGlsZSBmZXRjaGluZyB2aWRlbyBkZXRhaWxzIVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGV0YWlscz17ZmV0Y2hFcnJvci5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9EZXRhaWxzQ29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRmV0Y2hpbmcpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8RGV0YWlsc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjZW50ZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9TcGlubmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvRGV0YWlsc0NvbnRhaW5lcj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhc1NvdXJjZXMgPSB2aWRlb0RldGFpbHMuc291cmNlcyAhPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBoYXNUcmFuc2NyaXB0ID0gdmlkZW9EZXRhaWxzLnRyYW5zY3JpcHQgIT0gdW5kZWZpbmVkICYmIHZpZGVvRGV0YWlscy50cmFuc2NyaXB0LmVuICE9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGhhc1NvdW5kVHJhY2sgPSB2aWRlb0RldGFpbHMuaW5mby5zb3VuZHRyYWNrICE9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGhhc1RhZ3MgPSB2aWRlb0RldGFpbHMudGFncyAhPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgbGV0IGRldGFpbHNFbCA9IG51bGw7XHJcbiAgICBzd2l0Y2ggKHRhYikge1xyXG4gICAgICAgIGNhc2UgJ3ZpZGVvJzpcclxuICAgICAgICAgICAgZGV0YWlsc0VsID0gXHJcbiAgICAgICAgICAgICAgICA8VmlkZW9cclxuICAgICAgICAgICAgICAgICAgICBpZD17dmlkZW9EZXRhaWxzLmluZm8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3ZpZGVvRGV0YWlscy5pbmZvLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkPXt2aWRlb0RldGFpbHMuaW5mby5sYXN0X3NjcmFwZWR9XHJcbiAgICAgICAgICAgICAgICAvPjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ3NvdXJjZXMnOlxyXG4gICAgICAgICAgICBpZiAoaGFzU291cmNlcykge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0VsID0gXHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZGVvU291cmNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzPXt2aWRlb0RldGFpbHMuc291cmNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ9e3ZpZGVvRGV0YWlscy5zb3VyY2VzLmxhc3RfdXBkYXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAvPjtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0VsID0gPE1pc3NpbmdEZXRhaWxzIHRhYj17dGFifS8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICd0cmFuc2NyaXB0JzpcclxuICAgICAgICAgICAgaWYgKGhhc1RyYW5zY3JpcHQpIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IFxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWRlb1RyYW5zY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNjcmlwdD17dmlkZW9EZXRhaWxzLnRyYW5zY3JpcHQuZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkPXt2aWRlb0RldGFpbHMudHJhbnNjcmlwdC5sYXN0X3VwZGF0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz47XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IDxNaXNzaW5nRGV0YWlscyB0YWI9e3RhYn0vPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBjYXNlICd0YWdzJzpcclxuICAgICAgICAgICAgaWYgKGhhc1RhZ3MpIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IFxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWRlb1RhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dmlkZW9EZXRhaWxzLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkPXt2aWRlb0RldGFpbHMuaW5mby5sYXN0X3NjcmFwZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz47XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IDxNaXNzaW5nRGV0YWlscyB0YWI9e3RhYn0vPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBjYXNlICdzb3VuZHRyYWNrJzpcclxuICAgICAgICAgICAgaWYgKGhhc1NvdW5kVHJhY2spIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IFxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWRlb1NvdW5kVHJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXt2aWRlb0RldGFpbHMuaW5mby5zb3VuZHRyYWNrLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ9e3ZpZGVvRGV0YWlscy5pbmZvLnNvdW5kdHJhY2subGFzdF91cGRhdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+O1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzRWwgPSA8TWlzc2luZ0RldGFpbHMgdGFiPXt0YWJ9Lz47XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEZXRhaWxzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd2aWRlby1kZXRhaWxzLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgIHt2aWRlb0RldGFpbHMuaW5mby50aXRsZX1cclxuICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxWaWRlb0RldGFpbHNOYXZcclxuICAgICAgICAgICAgICAgIHZpZGVvSWQ9e3ZpZH1cclxuICAgICAgICAgICAgICAgIHRhYj17dGFifVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRhYj17ZGVmYXVsdFRhYn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUYWI9e29uQ2xpY2tUYWJ9XHJcblxyXG4gICAgICAgICAgICAgICAgaGFzU291cmNlcz17aGFzU291cmNlc31cclxuICAgICAgICAgICAgICAgIGhhc1RyYW5zY3JpcHQ9e2hhc1RyYW5zY3JpcHR9XHJcbiAgICAgICAgICAgICAgICBoYXNTb3VuZFRyYWNrPXtoYXNTb3VuZFRyYWNrfVxyXG4gICAgICAgICAgICAgICAgaGFzVGFncz17aGFzVGFnc31cclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPC9WaWRlb0RldGFpbHNOYXY+XHJcblxyXG4gICAgICAgICAgICB7ZGV0YWlsc0VsfVxyXG4gICAgICAgIDwvRGV0YWlsc0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==