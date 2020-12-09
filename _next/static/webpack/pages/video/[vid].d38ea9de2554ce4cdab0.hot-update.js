webpackHotUpdate_N_E("pages/video/[vid]",{

/***/ "./src/pages/video/[vid].js":
/*!**********************************!*\
  !*** ./src/pages/video/[vid].js ***!
  \**********************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_VideoDetailsNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/VideoDetailsNav */ "./src/components/VideoDetailsNav.js");
/* harmony import */ var _components_VideoTranscript__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/VideoTranscript */ "./src/components/VideoTranscript.js");
/* harmony import */ var _components_VideoSources__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/VideoSources */ "./src/components/VideoSources.js");
/* harmony import */ var _components_VideoTags__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/VideoTags */ "./src/components/VideoTags.js");
/* harmony import */ var _components_Video__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Video */ "./src/components/Video.js");
/* harmony import */ var _components_VideoSoundTrack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/VideoSoundTrack */ "./src/components/VideoSoundTrack.js");
/* harmony import */ var _components_MissingDetails__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/MissingDetails */ "./src/components/MissingDetails.js");


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
      lineNumber: 17,
      columnNumber: 17
    }, this), props.noContentBox && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: props.children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 9
  }, this);
}

_c = DetailsContainer;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (_s(props => {
  _s();

  const defaultTab = 'video';
  const [tab, setTab] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(defaultTab);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    vid
  } = router.query;
  const videoDetails = props.videoDetails; // if (window.location.hash !== '') {
  //     // Override current tab with hash tab (e.g. /video/3mnSDifDSxQ#transcript)
  //     const hashTab = window.location.hash.replace('#', '');
  //     if (hashTab !== tab) {
  //         setTab(hashTab);
  //     }
  // }

  function onClickTab(newTab) {
    setTab(newTab);
  }

  const hasSources = videoDetails.sources != undefined;
  const hasTranscript = videoDetails.transcript != undefined && videoDetails.transcript.en != undefined;
  const hasSoundTrack = videoDetails.info.soundtrack != undefined;
  const hasTags = videoDetails.tags != undefined;
  let detailsEl = null;

  switch (tab) {
    case 'video':
      detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Video__WEBPACK_IMPORTED_MODULE_7__["default"], {
        id: videoDetails.info.id,
        description: videoDetails.info.description,
        lastUpdated: videoDetails.info.last_scraped
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined);
      break;

    case 'sources':
      if (hasSources) {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoSources__WEBPACK_IMPORTED_MODULE_5__["default"], {
          sources: videoDetails.sources,
          lastUpdated: videoDetails.sources.last_updated
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, undefined);
      } else {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MissingDetails__WEBPACK_IMPORTED_MODULE_9__["default"], {
          tab: tab
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 29
        }, undefined);
      }

      break;

    case 'transcript':
      if (hasTranscript) {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoTranscript__WEBPACK_IMPORTED_MODULE_4__["default"], {
          transcript: videoDetails.transcript.en,
          lastUpdated: videoDetails.transcript.last_updated
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, undefined);
      } else {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MissingDetails__WEBPACK_IMPORTED_MODULE_9__["default"], {
          tab: tab
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 29
        }, undefined);
      }

      break;

    case 'tags':
      if (hasTags) {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoTags__WEBPACK_IMPORTED_MODULE_6__["default"], {
          tags: videoDetails.tags,
          lastUpdated: videoDetails.info.last_scraped
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }, undefined);
      } else {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MissingDetails__WEBPACK_IMPORTED_MODULE_9__["default"], {
          tab: tab
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 29
        }, undefined);
      }

      break;

    case 'soundtrack':
      if (hasSoundTrack) {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoSoundTrack__WEBPACK_IMPORTED_MODULE_8__["default"], {
          url: videoDetails.info.soundtrack.url,
          lastUpdated: videoDetails.info.soundtrack.last_updated
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, undefined);
      } else {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MissingDetails__WEBPACK_IMPORTED_MODULE_9__["default"], {
          tab: tab
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
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
      lineNumber: 118,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoDetailsNav__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
      lineNumber: 122,
      columnNumber: 13
    }, undefined), detailsEl]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 117,
    columnNumber: 9
  }, undefined);
}, "2c1yPkxUIkEjB1RsubjyCu9Ls7U=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvL1t2aWRdLmpzIl0sIm5hbWVzIjpbIkRldGFpbHNDb250YWluZXIiLCJwcm9wcyIsIm5vQ29udGVudEJveCIsImNoaWxkcmVuIiwiZGVmYXVsdFRhYiIsInRhYiIsInNldFRhYiIsIlJlYWN0IiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ2aWQiLCJxdWVyeSIsInZpZGVvRGV0YWlscyIsIm9uQ2xpY2tUYWIiLCJuZXdUYWIiLCJoYXNTb3VyY2VzIiwic291cmNlcyIsInVuZGVmaW5lZCIsImhhc1RyYW5zY3JpcHQiLCJ0cmFuc2NyaXB0IiwiZW4iLCJoYXNTb3VuZFRyYWNrIiwiaW5mbyIsInNvdW5kdHJhY2siLCJoYXNUYWdzIiwidGFncyIsImRldGFpbHNFbCIsImlkIiwiZGVzY3JpcHRpb24iLCJsYXN0X3NjcmFwZWQiLCJsYXN0X3VwZGF0ZWQiLCJ1cmwiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUdBLFNBQVNBLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUM3QixzQkFDSTtBQUFLLGFBQVMsRUFBQyxtQkFBZjtBQUFBLGVBQ0ssQ0FBQ0EsS0FBSyxDQUFDQyxZQUFQLGlCQUNHO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQSxnQkFDS0QsS0FBSyxDQUFDRTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGUixFQU9LRixLQUFLLENBQUNDLFlBQU4saUJBQ0c7QUFBQSxnQkFDS0QsS0FBSyxDQUFDRTtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIOztLQWhCUUgsZ0I7O0FBa0JNLGtFQUFDQyxLQUFELElBQVc7QUFBQTs7QUFDdEIsUUFBTUcsVUFBVSxHQUFHLE9BQW5C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R0FEdEM7QUFFSSxxQkFBVyxFQUFFbkIsWUFBWSxDQUFDVSxJQUFiLENBQWtCQyxVQUFsQixDQUE2Qk87QUFGOUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUtILE9BTkQsTUFNTTtBQUNGSixpQkFBUyxnQkFBRyxxRUFBQyxrRUFBRDtBQUFnQixhQUFHLEVBQUV0QjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFaO0FBQ0g7O0FBdkRUOztBQTBEQSxzQkFDSSxxRUFBQyxnQkFBRDtBQUFBLDRCQUNJO0FBQUksZUFBUyxFQUFDLHFCQUFkO0FBQUEsZ0JBQ0tRLFlBQVksQ0FBQ1UsSUFBYixDQUFrQlU7QUFEdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUtJLHFFQUFDLG1FQUFEO0FBQ0ksYUFBTyxFQUFFdEIsR0FEYjtBQUVJLFNBQUcsRUFBRU4sR0FGVDtBQUdJLGdCQUFVLEVBQUVELFVBSGhCO0FBSUksZ0JBQVUsRUFBRVUsVUFKaEI7QUFNSSxnQkFBVSxFQUFFRSxVQU5oQjtBQU9JLG1CQUFhLEVBQUVHLGFBUG5CO0FBUUksbUJBQWEsRUFBRUcsYUFSbkI7QUFTSSxhQUFPLEVBQUVHO0FBVGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMSixFQW1CS0UsU0FuQkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF1QkgsQ0E1R0Q7QUFBQSxVQUltQmpCLHFEQUpuQjtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3ZpZGVvL1t2aWRdLmQzOGVhOWRlMjU1NGNlNGNkYWIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tICdxdWVyeS1zdHJpbmcnO1xyXG5pbXBvcnQgVmlkZW9EZXRhaWxzTmF2IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW9EZXRhaWxzTmF2JztcclxuaW1wb3J0IFZpZGVvVHJhbnNjcmlwdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvVHJhbnNjcmlwdCc7XHJcbmltcG9ydCBWaWRlb1NvdXJjZXMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWRlb1NvdXJjZXMnO1xyXG5pbXBvcnQgVmlkZW9UYWdzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW9UYWdzJztcclxuaW1wb3J0IFZpZGVvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW8nO1xyXG5pbXBvcnQgVmlkZW9Tb3VuZFRyYWNrIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW9Tb3VuZFRyYWNrJztcclxuaW1wb3J0IE1pc3NpbmdEZXRhaWxzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWlzc2luZ0RldGFpbHMnO1xyXG5pbXBvcnQgRW5kcG9pbnQgZnJvbSAnLi4vLi4vRW5kcG9pbnQnO1xyXG5cclxuZnVuY3Rpb24gRGV0YWlsc0NvbnRhaW5lcihwcm9wcykge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1jb250YWluZXInPlxyXG4gICAgICAgICAgICB7IXByb3BzLm5vQ29udGVudEJveCAmJlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB7cHJvcHMubm9Db250ZW50Qm94ICYmIFxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBkZWZhdWx0VGFiID0gJ3ZpZGVvJztcclxuICAgIGNvbnN0IFt0YWIsIHNldFRhYl0gPSBSZWFjdC51c2VTdGF0ZShkZWZhdWx0VGFiKTtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IHsgdmlkIH0gPSByb3V0ZXIucXVlcnk7XHJcblxyXG4gICAgY29uc3QgdmlkZW9EZXRhaWxzID0gcHJvcHMudmlkZW9EZXRhaWxzO1xyXG5cclxuICAgIC8vIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaCAhPT0gJycpIHtcclxuICAgIC8vICAgICAvLyBPdmVycmlkZSBjdXJyZW50IHRhYiB3aXRoIGhhc2ggdGFiIChlLmcuIC92aWRlby8zbW5TRGlmRFN4USN0cmFuc2NyaXB0KVxyXG4gICAgLy8gICAgIGNvbnN0IGhhc2hUYWIgPSB3aW5kb3cubG9jYXRpb24uaGFzaC5yZXBsYWNlKCcjJywgJycpO1xyXG4gICAgLy8gICAgIGlmIChoYXNoVGFiICE9PSB0YWIpIHtcclxuICAgIC8vICAgICAgICAgc2V0VGFiKGhhc2hUYWIpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrVGFiKG5ld1RhYikge1xyXG4gICAgICAgIHNldFRhYihuZXdUYWIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhc1NvdXJjZXMgPSB2aWRlb0RldGFpbHMuc291cmNlcyAhPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBoYXNUcmFuc2NyaXB0ID0gdmlkZW9EZXRhaWxzLnRyYW5zY3JpcHQgIT0gdW5kZWZpbmVkICYmIHZpZGVvRGV0YWlscy50cmFuc2NyaXB0LmVuICE9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGhhc1NvdW5kVHJhY2sgPSB2aWRlb0RldGFpbHMuaW5mby5zb3VuZHRyYWNrICE9IHVuZGVmaW5lZDtcclxuICAgIGNvbnN0IGhhc1RhZ3MgPSB2aWRlb0RldGFpbHMudGFncyAhPSB1bmRlZmluZWQ7XHJcblxyXG4gICAgbGV0IGRldGFpbHNFbCA9IG51bGw7XHJcbiAgICBzd2l0Y2ggKHRhYikge1xyXG4gICAgICAgIGNhc2UgJ3ZpZGVvJzpcclxuICAgICAgICAgICAgZGV0YWlsc0VsID0gXHJcbiAgICAgICAgICAgICAgICA8VmlkZW9cclxuICAgICAgICAgICAgICAgICAgICBpZD17dmlkZW9EZXRhaWxzLmluZm8uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3ZpZGVvRGV0YWlscy5pbmZvLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkPXt2aWRlb0RldGFpbHMuaW5mby5sYXN0X3NjcmFwZWR9XHJcbiAgICAgICAgICAgICAgICAvPjtcclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgIGNhc2UgJ3NvdXJjZXMnOlxyXG4gICAgICAgICAgICBpZiAoaGFzU291cmNlcykge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0VsID0gXHJcbiAgICAgICAgICAgICAgICAgICAgPFZpZGVvU291cmNlc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VzPXt2aWRlb0RldGFpbHMuc291cmNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ9e3ZpZGVvRGV0YWlscy5zb3VyY2VzLmxhc3RfdXBkYXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAvPjtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0VsID0gPE1pc3NpbmdEZXRhaWxzIHRhYj17dGFifS8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICd0cmFuc2NyaXB0JzpcclxuICAgICAgICAgICAgaWYgKGhhc1RyYW5zY3JpcHQpIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IFxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWRlb1RyYW5zY3JpcHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNjcmlwdD17dmlkZW9EZXRhaWxzLnRyYW5zY3JpcHQuZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkPXt2aWRlb0RldGFpbHMudHJhbnNjcmlwdC5sYXN0X3VwZGF0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz47XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IDxNaXNzaW5nRGV0YWlscyB0YWI9e3RhYn0vPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBjYXNlICd0YWdzJzpcclxuICAgICAgICAgICAgaWYgKGhhc1RhZ3MpIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IFxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWRlb1RhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFncz17dmlkZW9EZXRhaWxzLnRhZ3N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkPXt2aWRlb0RldGFpbHMuaW5mby5sYXN0X3NjcmFwZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz47XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IDxNaXNzaW5nRGV0YWlscyB0YWI9e3RhYn0vPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBcclxuICAgICAgICBjYXNlICdzb3VuZHRyYWNrJzpcclxuICAgICAgICAgICAgaWYgKGhhc1NvdW5kVHJhY2spIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IFxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWRlb1NvdW5kVHJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsPXt2aWRlb0RldGFpbHMuaW5mby5zb3VuZHRyYWNrLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFVwZGF0ZWQ9e3ZpZGVvRGV0YWlscy5pbmZvLnNvdW5kdHJhY2subGFzdF91cGRhdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+O1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzRWwgPSA8TWlzc2luZ0RldGFpbHMgdGFiPXt0YWJ9Lz47XHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxEZXRhaWxzQ29udGFpbmVyPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd2aWRlby1kZXRhaWxzLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgIHt2aWRlb0RldGFpbHMuaW5mby50aXRsZX1cclxuICAgICAgICAgICAgPC9oMj5cclxuXHJcbiAgICAgICAgICAgIDxWaWRlb0RldGFpbHNOYXZcclxuICAgICAgICAgICAgICAgIHZpZGVvSWQ9e3ZpZH1cclxuICAgICAgICAgICAgICAgIHRhYj17dGFifVxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdFRhYj17ZGVmYXVsdFRhYn1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2tUYWI9e29uQ2xpY2tUYWJ9XHJcblxyXG4gICAgICAgICAgICAgICAgaGFzU291cmNlcz17aGFzU291cmNlc31cclxuICAgICAgICAgICAgICAgIGhhc1RyYW5zY3JpcHQ9e2hhc1RyYW5zY3JpcHR9XHJcbiAgICAgICAgICAgICAgICBoYXNTb3VuZFRyYWNrPXtoYXNTb3VuZFRyYWNrfVxyXG4gICAgICAgICAgICAgICAgaGFzVGFncz17aGFzVGFnc31cclxuICAgICAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPC9WaWRlb0RldGFpbHNOYXY+XHJcblxyXG4gICAgICAgICAgICB7ZGV0YWlsc0VsfVxyXG4gICAgICAgIDwvRGV0YWlsc0NvbnRhaW5lcj5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMocGFyYW1zKSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtFbmRwb2ludC51cmx9L3ZpZGVvLyR7cGFyYW1zLnZpZH1gKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGpzb24pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgdmlkZW9EZXRhaWxzOiBqc29uLCBcclxuXHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgc2hvd0JhY2s6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgcGFyYW1zID0ge1xyXG4gICAgICBzdGFydEF0OiAwLCBcclxuICAgICAgbWF4UmVzdWx0czogMTAwMFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtFbmRwb2ludC51cmx9Lz8ke3F1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpfWApO1xyXG4gICAgY29uc3QgaXRlbXMgPSBhd2FpdCByZXMuanNvbigpO1xyXG5cclxuICAgIGNvbnN0IHBhdGhzID0gaXRlbXMubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgIHsgcGFyYW1zOiB7IHZpZDogaXRlbS5pZCB9fVxyXG4gICAgKSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocywgXHJcbiAgICAgICAgZmFsbGJhY2s6IGZhbHNlXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9