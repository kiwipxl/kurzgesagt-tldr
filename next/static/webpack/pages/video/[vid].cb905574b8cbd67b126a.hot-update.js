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

  if (window.location.hash !== '') {
    // Override current tab with hash tab (e.g. /video/3mnSDifDSxQ#transcript)
    const hashTab = window.location.hash.replace('#', '');

    if (hashTab !== tab) {
      setTab(hashTab);
    }
  }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvL1t2aWRdLmpzIl0sIm5hbWVzIjpbIkRldGFpbHNDb250YWluZXIiLCJwcm9wcyIsIm5vQ29udGVudEJveCIsImNoaWxkcmVuIiwicm91dGVyIiwidXNlUm91dGVyIiwidmlkIiwicXVlcnkiLCJkZWZhdWx0VGFiIiwidGFiIiwic2V0VGFiIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInZpZGVvRGV0YWlscyIsInNldFZpZGVvRGV0YWlscyIsImlzRmV0Y2hpbmciLCJzZXRJc0ZldGNoaW5nIiwiZmV0Y2hFcnJvciIsInNldEZldGNoRXJyb3IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhhc2giLCJoYXNoVGFiIiwicmVwbGFjZSIsIm9uQ2xpY2tUYWIiLCJuZXdUYWIiLCJ1c2VFZmZlY3QiLCJmZXRjaCIsIkVuZHBvaW50IiwidXJsIiwidGhlbiIsInJlcyIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJoYXNTb3VyY2VzIiwic291cmNlcyIsInVuZGVmaW5lZCIsImhhc1RyYW5zY3JpcHQiLCJ0cmFuc2NyaXB0IiwiZW4iLCJoYXNTb3VuZFRyYWNrIiwiaW5mbyIsInNvdW5kdHJhY2siLCJoYXNUYWdzIiwidGFncyIsImRldGFpbHNFbCIsImlkIiwiZGVzY3JpcHRpb24iLCJsYXN0X3NjcmFwZWQiLCJsYXN0X3VwZGF0ZWQiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsQ0FBMEJDLEtBQTFCLEVBQWlDO0FBQzdCLHNCQUNJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsZUFDSyxDQUFDQSxLQUFLLENBQUNDLFlBQVAsaUJBQ0c7QUFBSyxlQUFTLEVBQUMsU0FBZjtBQUFB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LElBQWIsQ0FBa0JTO0FBRHZCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFLSSxxRUFBQyxtRUFBRDtBQUNJLGFBQU8sRUFBRWhELEdBRGI7QUFFSSxTQUFHLEVBQUVHLEdBRlQ7QUFHSSxnQkFBVSxFQUFFRCxVQUhoQjtBQUlJLGdCQUFVLEVBQUVnQixVQUpoQjtBQU1JLGdCQUFVLEVBQUVjLFVBTmhCO0FBT0ksbUJBQWEsRUFBRUcsYUFQbkI7QUFRSSxtQkFBYSxFQUFFRyxhQVJuQjtBQVNJLGFBQU8sRUFBRUc7QUFUYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLEVBbUJLRSxTQW5CTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXVCSCxDQXBKRDtBQUFBLFVBQ21CNUMscURBRG5CO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlkZW8vW3ZpZF0uY2I5MDU1NzRiOGNiZDY3YjEyNmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFNwaW5uZXIgZnJvbSAncmVhY3QtYm9vdHN0cmFwL1NwaW5uZXInO1xyXG5pbXBvcnQgVmlkZW9EZXRhaWxzTmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW9EZXRhaWxzTmF2JztcclxuaW1wb3J0IFZpZGVvVHJhbnNjcmlwdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvVHJhbnNjcmlwdCc7XHJcbmltcG9ydCBWaWRlb1NvdXJjZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWRlb1NvdXJjZXMnO1xyXG5pbXBvcnQgVmlkZW9UYWdzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW9UYWdzJztcclxuaW1wb3J0IFZpZGVvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW8nO1xyXG5pbXBvcnQgVmlkZW9Tb3VuZFRyYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW9Tb3VuZFRyYWNrJztcclxuaW1wb3J0IE1pc3NpbmdEZXRhaWxzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWlzc2luZ0RldGFpbHMnO1xyXG5pbXBvcnQgRW5kcG9pbnQgZnJvbSAnLi4vLi4vRW5kcG9pbnQnO1xyXG5pbXBvcnQgRXJyb3JNZXNzYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRXJyb3JNZXNzYWdlJztcclxuXHJcbmZ1bmN0aW9uIERldGFpbHNDb250YWluZXIocHJvcHMpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQtY29udGFpbmVyJz5cclxuICAgICAgICAgICAgeyFwcm9wcy5ub0NvbnRlbnRCb3ggJiZcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50Jz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge3Byb3BzLm5vQ29udGVudEJveCAmJiBcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IHZpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG5cclxuICAgIGNvbnN0IGRlZmF1bHRUYWIgPSAndmlkZW8nO1xyXG5cclxuICAgIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0VGFiKTtcclxuICAgIGNvbnN0IFt2aWRlb0RldGFpbHMsIHNldFZpZGVvRGV0YWlsc10gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbaXNGZXRjaGluZywgc2V0SXNGZXRjaGluZ10gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtmZXRjaEVycm9yLCBzZXRGZXRjaEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblxyXG4gICAgLy8gcHJvcHMuc2V0SGVhZGVyT3B0aW9ucyh0cnVlKTtcclxuXHJcbiAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggIT09ICcnKSB7XHJcbiAgICAgICAgLy8gT3ZlcnJpZGUgY3VycmVudCB0YWIgd2l0aCBoYXNoIHRhYiAoZS5nLiAvdmlkZW8vM21uU0RpZkRTeFEjdHJhbnNjcmlwdClcclxuICAgICAgICBjb25zdCBoYXNoVGFiID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcclxuICAgICAgICBpZiAoaGFzaFRhYiAhPT0gdGFiKSB7XHJcbiAgICAgICAgICAgIHNldFRhYihoYXNoVGFiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DbGlja1RhYihuZXdUYWIpIHtcclxuICAgICAgICBzZXRUYWIobmV3VGFiKTtcclxuICAgIH1cclxuXHJcbiAgICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGZldGNoKGAke0VuZHBvaW50LnVybH0vdmlkZW8vJHt2aWR9YClcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKGpzb24gPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0VmlkZW9EZXRhaWxzKGpzb24pO1xyXG4gICAgICAgICAgICAgICAgc2V0SXNGZXRjaGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgZmFpbGVkIHRvIGZldGNoIHZpZGVvIGRldGFpbHMgZm9yICR7dmlkfWAsIGVycik7XHJcbiAgICAgICAgICAgICAgICBzZXRGZXRjaEVycm9yKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGlmIChmZXRjaEVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPERldGFpbHNDb250YWluZXIgbm9Db250ZW50Qm94PlxyXG4gICAgICAgICAgICAgICAgPEVycm9yTWVzc2FnZVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVGhlcmUgd2FzIGFuIGVycm9yIHdoaWxlIGZldGNoaW5nIHZpZGVvIGRldGFpbHMhXCJcclxuICAgICAgICAgICAgICAgICAgICBkZXRhaWxzPXtmZXRjaEVycm9yLm1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0RldGFpbHNDb250YWluZXI+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNGZXRjaGluZykge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxEZXRhaWxzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NlbnRlcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgYW5pbWF0aW9uPVwiYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1NwaW5uZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9EZXRhaWxzQ29udGFpbmVyPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFzU291cmNlcyA9IHZpZGVvRGV0YWlscy5zb3VyY2VzICE9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGhhc1RyYW5zY3JpcHQgPSB2aWRlb0RldGFpbHMudHJhbnNjcmlwdCAhPSB1bmRlZmluZWQgJiYgdmlkZW9EZXRhaWxzLnRyYW5zY3JpcHQuZW4gIT0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaGFzU291bmRUcmFjayA9IHZpZGVvRGV0YWlscy5pbmZvLnNvdW5kdHJhY2sgIT0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaGFzVGFncyA9IHZpZGVvRGV0YWlscy50YWdzICE9IHVuZGVmaW5lZDtcclxuXHJcbiAgICBsZXQgZGV0YWlsc0VsID0gbnVsbDtcclxuICAgIHN3aXRjaCAodGFiKSB7XHJcbiAgICAgICAgY2FzZSAndmlkZW8nOlxyXG4gICAgICAgICAgICBkZXRhaWxzRWwgPSBcclxuICAgICAgICAgICAgICAgIDxWaWRlb1xyXG4gICAgICAgICAgICAgICAgICAgIGlkPXt2aWRlb0RldGFpbHMuaW5mby5pZH1cclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dmlkZW9EZXRhaWxzLmluZm8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ9e3ZpZGVvRGV0YWlscy5pbmZvLmxhc3Rfc2NyYXBlZH1cclxuICAgICAgICAgICAgICAgIC8+O1xyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAnc291cmNlcyc6XHJcbiAgICAgICAgICAgIGlmIChoYXNTb3VyY2VzKSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzRWwgPSBcclxuICAgICAgICAgICAgICAgICAgICA8VmlkZW9Tb3VyY2VzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXM9e3ZpZGVvRGV0YWlscy5zb3VyY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZD17dmlkZW9EZXRhaWxzLnNvdXJjZXMubGFzdF91cGRhdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+O1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzRWwgPSA8TWlzc2luZ0RldGFpbHMgdGFiPXt0YWJ9Lz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ3RyYW5zY3JpcHQnOlxyXG4gICAgICAgICAgICBpZiAoaGFzVHJhbnNjcmlwdCkge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0VsID0gXHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZGVvVHJhbnNjcmlwdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2NyaXB0PXt2aWRlb0RldGFpbHMudHJhbnNjcmlwdC5lbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ9e3ZpZGVvRGV0YWlscy50cmFuc2NyaXB0Lmxhc3RfdXBkYXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAvPjtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0VsID0gPE1pc3NpbmdEZXRhaWxzIHRhYj17dGFifS8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ3RhZ3MnOlxyXG4gICAgICAgICAgICBpZiAoaGFzVGFncykge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0VsID0gXHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZGVvVGFnc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YWdzPXt2aWRlb0RldGFpbHMudGFnc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ9e3ZpZGVvRGV0YWlscy5pbmZvLmxhc3Rfc2NyYXBlZH1cclxuICAgICAgICAgICAgICAgICAgICAvPjtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0VsID0gPE1pc3NpbmdEZXRhaWxzIHRhYj17dGFifS8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNhc2UgJ3NvdW5kdHJhY2snOlxyXG4gICAgICAgICAgICBpZiAoaGFzU291bmRUcmFjaykge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0VsID0gXHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZGVvU291bmRUcmFja1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw9e3ZpZGVvRGV0YWlscy5pbmZvLnNvdW5kdHJhY2sudXJsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZD17dmlkZW9EZXRhaWxzLmluZm8uc291bmR0cmFjay5sYXN0X3VwZGF0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz47XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IDxNaXNzaW5nRGV0YWlscyB0YWI9e3RhYn0vPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPERldGFpbHNDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9J3ZpZGVvLWRldGFpbHMtdGl0bGUnPlxyXG4gICAgICAgICAgICAgICAge3ZpZGVvRGV0YWlscy5pbmZvLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgICAgPFZpZGVvRGV0YWlsc05hdlxyXG4gICAgICAgICAgICAgICAgdmlkZW9JZD17dmlkfVxyXG4gICAgICAgICAgICAgICAgdGFiPXt0YWJ9XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0VGFiPXtkZWZhdWx0VGFifVxyXG4gICAgICAgICAgICAgICAgb25DbGlja1RhYj17b25DbGlja1RhYn1cclxuXHJcbiAgICAgICAgICAgICAgICBoYXNTb3VyY2VzPXtoYXNTb3VyY2VzfVxyXG4gICAgICAgICAgICAgICAgaGFzVHJhbnNjcmlwdD17aGFzVHJhbnNjcmlwdH1cclxuICAgICAgICAgICAgICAgIGhhc1NvdW5kVHJhY2s9e2hhc1NvdW5kVHJhY2t9XHJcbiAgICAgICAgICAgICAgICBoYXNUYWdzPXtoYXNUYWdzfVxyXG4gICAgICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8L1ZpZGVvRGV0YWlsc05hdj5cclxuXHJcbiAgICAgICAgICAgIHtkZXRhaWxzRWx9XHJcbiAgICAgICAgPC9EZXRhaWxzQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9