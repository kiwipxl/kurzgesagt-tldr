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
  const videoDetails = props.videoDetails;
  console.log(videoDetails); // if (window.location.hash !== '') {
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
        lineNumber: 63,
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
          lineNumber: 73,
          columnNumber: 21
        }, undefined);
      } else {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MissingDetails__WEBPACK_IMPORTED_MODULE_9__["default"], {
          tab: tab
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
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
          lineNumber: 85,
          columnNumber: 21
        }, undefined);
      } else {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MissingDetails__WEBPACK_IMPORTED_MODULE_9__["default"], {
          tab: tab
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 90,
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
          lineNumber: 97,
          columnNumber: 21
        }, undefined);
      } else {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MissingDetails__WEBPACK_IMPORTED_MODULE_9__["default"], {
          tab: tab
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
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
          lineNumber: 109,
          columnNumber: 21
        }, undefined);
      } else {
        detailsEl = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_MissingDetails__WEBPACK_IMPORTED_MODULE_9__["default"], {
          tab: tab
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 114,
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
      lineNumber: 120,
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
      lineNumber: 124,
      columnNumber: 13
    }, undefined), detailsEl]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 119,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvL1t2aWRdLmpzIl0sIm5hbWVzIjpbIkRldGFpbHNDb250YWluZXIiLCJwcm9wcyIsIm5vQ29udGVudEJveCIsImNoaWxkcmVuIiwiZGVmYXVsdFRhYiIsInRhYiIsInNldFRhYiIsIlJlYWN0IiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ2aWQiLCJxdWVyeSIsInZpZGVvRGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrVGFiIiwibmV3VGFiIiwiaGFzU291cmNlcyIsInNvdXJjZXMiLCJ1bmRlZmluZWQiLCJoYXNUcmFuc2NyaXB0IiwidHJhbnNjcmlwdCIsImVuIiwiaGFzU291bmRUcmFjayIsImluZm8iLCJzb3VuZHRyYWNrIiwiaGFzVGFncyIsInRhZ3MiLCJkZXRhaWxzRWwiLCJpZCIsImRlc2NyaXB0aW9uIiwibGFzdF9zY3JhcGVkIiwibGFzdF91cGRhdGVkIiwidXJsIiwidGl0bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQSxTQUFTQSxnQkFBVCxDQUEwQkMsS0FBMUIsRUFBaUM7QUFDN0Isc0JBQ0k7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSxlQUNLLENBQUNBLEtBQUssQ0FBQ0MsWUFBUCxpQkFDRztBQUFLLGVBQVMsRUFBQyxTQUFmO0FBQUEsZ0JBQ0tELEtBQUssQ0FBQ0U7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRlIsRUFPS0YsS0FBSyxDQUFDQyxZQUFOLGlCQUNHO0FBQUEsZ0JBQ0tELEtBQUssQ0FBQ0U7QUFEWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFlSDs7S0FoQlFILGdCOztBQWtCTSxrRUFBQ0MsS0FBRCxJQUFXO0FBQUE7O0FBQ3RCLFFBQU1H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QUQ7QUFDSSxhQUFHLEVBQUVoQixZQUFZLENBQUNZLElBQWIsQ0FBa0JDLFVBQWxCLENBQTZCUSxHQUR0QztBQUVJLHFCQUFXLEVBQUVyQixZQUFZLENBQUNZLElBQWIsQ0FBa0JDLFVBQWxCLENBQTZCTztBQUY5QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBS0gsT0FORCxNQU1NO0FBQ0ZKLGlCQUFTLGdCQUFHLHFFQUFDLGtFQUFEO0FBQWdCLGFBQUcsRUFBRXhCO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQVo7QUFDSDs7QUF2RFQ7O0FBMERBLHNCQUNJLHFFQUFDLGdCQUFEO0FBQUEsNEJBQ0k7QUFBSSxlQUFTLEVBQUMscUJBQWQ7QUFBQSxnQkFDS1EsWUFBWSxDQUFDWSxJQUFiLENBQWtCVTtBQUR2QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBS0kscUVBQUMsbUVBQUQ7QUFDSSxhQUFPLEVBQUV4QixHQURiO0FBRUksU0FBRyxFQUFFTixHQUZUO0FBR0ksZ0JBQVUsRUFBRUQsVUFIaEI7QUFJSSxnQkFBVSxFQUFFWSxVQUpoQjtBQU1JLGdCQUFVLEVBQUVFLFVBTmhCO0FBT0ksbUJBQWEsRUFBRUcsYUFQbkI7QUFRSSxtQkFBYSxFQUFFRyxhQVJuQjtBQVNJLGFBQU8sRUFBRUc7QUFUYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKLEVBbUJLRSxTQW5CTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXVCSCxDQTlHRDtBQUFBLFVBSW1CbkIscURBSm5CO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlkZW8vW3ZpZF0uOTU3YjU0ZWFhZDNmYzdmNGZlY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gJ3F1ZXJ5LXN0cmluZyc7XHJcbmltcG9ydCBWaWRlb0RldGFpbHNOYXYgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWRlb0RldGFpbHNOYXYnO1xyXG5pbXBvcnQgVmlkZW9UcmFuc2NyaXB0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW9UcmFuc2NyaXB0JztcclxuaW1wb3J0IFZpZGVvU291cmNlcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvU291cmNlcyc7XHJcbmltcG9ydCBWaWRlb1RhZ3MgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWRlb1RhZ3MnO1xyXG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWRlbyc7XHJcbmltcG9ydCBWaWRlb1NvdW5kVHJhY2sgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWRlb1NvdW5kVHJhY2snO1xyXG5pbXBvcnQgTWlzc2luZ0RldGFpbHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9NaXNzaW5nRGV0YWlscyc7XHJcbmltcG9ydCBFbmRwb2ludCBmcm9tICcuLi8uLi9FbmRwb2ludCc7XHJcblxyXG5mdW5jdGlvbiBEZXRhaWxzQ29udGFpbmVyKHByb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250ZW50LWNvbnRhaW5lcic+XHJcbiAgICAgICAgICAgIHshcHJvcHMubm9Db250ZW50Qm94ICYmXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHtwcm9wcy5ub0NvbnRlbnRCb3ggJiYgXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IGRlZmF1bHRUYWIgPSAndmlkZW8nO1xyXG4gICAgY29uc3QgW3RhYiwgc2V0VGFiXSA9IFJlYWN0LnVzZVN0YXRlKGRlZmF1bHRUYWIpO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyB2aWQgfSA9IHJvdXRlci5xdWVyeTtcclxuXHJcbiAgICBjb25zdCB2aWRlb0RldGFpbHMgPSBwcm9wcy52aWRlb0RldGFpbHM7XHJcblxyXG4gICAgY29uc29sZS5sb2codmlkZW9EZXRhaWxzKTtcclxuXHJcbiAgICAvLyBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggIT09ICcnKSB7XHJcbiAgICAvLyAgICAgLy8gT3ZlcnJpZGUgY3VycmVudCB0YWIgd2l0aCBoYXNoIHRhYiAoZS5nLiAvdmlkZW8vM21uU0RpZkRTeFEjdHJhbnNjcmlwdClcclxuICAgIC8vICAgICBjb25zdCBoYXNoVGFiID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnIycsICcnKTtcclxuICAgIC8vICAgICBpZiAoaGFzaFRhYiAhPT0gdGFiKSB7XHJcbiAgICAvLyAgICAgICAgIHNldFRhYihoYXNoVGFiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25DbGlja1RhYihuZXdUYWIpIHtcclxuICAgICAgICBzZXRUYWIobmV3VGFiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYXNTb3VyY2VzID0gdmlkZW9EZXRhaWxzLnNvdXJjZXMgIT0gdW5kZWZpbmVkO1xyXG4gICAgY29uc3QgaGFzVHJhbnNjcmlwdCA9IHZpZGVvRGV0YWlscy50cmFuc2NyaXB0ICE9IHVuZGVmaW5lZCAmJiB2aWRlb0RldGFpbHMudHJhbnNjcmlwdC5lbiAhPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBoYXNTb3VuZFRyYWNrID0gdmlkZW9EZXRhaWxzLmluZm8uc291bmR0cmFjayAhPSB1bmRlZmluZWQ7XHJcbiAgICBjb25zdCBoYXNUYWdzID0gdmlkZW9EZXRhaWxzLnRhZ3MgIT0gdW5kZWZpbmVkO1xyXG5cclxuICAgIGxldCBkZXRhaWxzRWwgPSBudWxsO1xyXG4gICAgc3dpdGNoICh0YWIpIHtcclxuICAgICAgICBjYXNlICd2aWRlbyc6XHJcbiAgICAgICAgICAgIGRldGFpbHNFbCA9IFxyXG4gICAgICAgICAgICAgICAgPFZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9e3ZpZGVvRGV0YWlscy5pbmZvLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt2aWRlb0RldGFpbHMuaW5mby5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZD17dmlkZW9EZXRhaWxzLmluZm8ubGFzdF9zY3JhcGVkfVxyXG4gICAgICAgICAgICAgICAgLz47XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICBjYXNlICdzb3VyY2VzJzpcclxuICAgICAgICAgICAgaWYgKGhhc1NvdXJjZXMpIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IFxyXG4gICAgICAgICAgICAgICAgICAgIDxWaWRlb1NvdXJjZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlcz17dmlkZW9EZXRhaWxzLnNvdXJjZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkPXt2aWRlb0RldGFpbHMuc291cmNlcy5sYXN0X3VwZGF0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz47XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGRldGFpbHNFbCA9IDxNaXNzaW5nRGV0YWlscyB0YWI9e3RhYn0vPjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgY2FzZSAndHJhbnNjcmlwdCc6XHJcbiAgICAgICAgICAgIGlmIChoYXNUcmFuc2NyaXB0KSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzRWwgPSBcclxuICAgICAgICAgICAgICAgICAgICA8VmlkZW9UcmFuc2NyaXB0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zY3JpcHQ9e3ZpZGVvRGV0YWlscy50cmFuc2NyaXB0LmVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZD17dmlkZW9EZXRhaWxzLnRyYW5zY3JpcHQubGFzdF91cGRhdGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+O1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzRWwgPSA8TWlzc2luZ0RldGFpbHMgdGFiPXt0YWJ9Lz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSAndGFncyc6XHJcbiAgICAgICAgICAgIGlmIChoYXNUYWdzKSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzRWwgPSBcclxuICAgICAgICAgICAgICAgICAgICA8VmlkZW9UYWdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZ3M9e3ZpZGVvRGV0YWlscy50YWdzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXN0VXBkYXRlZD17dmlkZW9EZXRhaWxzLmluZm8ubGFzdF9zY3JhcGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+O1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzRWwgPSA8TWlzc2luZ0RldGFpbHMgdGFiPXt0YWJ9Lz47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2FzZSAnc291bmR0cmFjayc6XHJcbiAgICAgICAgICAgIGlmIChoYXNTb3VuZFRyYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzRWwgPSBcclxuICAgICAgICAgICAgICAgICAgICA8VmlkZW9Tb3VuZFRyYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybD17dmlkZW9EZXRhaWxzLmluZm8uc291bmR0cmFjay51cmx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RVcGRhdGVkPXt2aWRlb0RldGFpbHMuaW5mby5zb3VuZHRyYWNrLmxhc3RfdXBkYXRlZH1cclxuICAgICAgICAgICAgICAgICAgICAvPjtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGV0YWlsc0VsID0gPE1pc3NpbmdEZXRhaWxzIHRhYj17dGFifS8+O1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RGV0YWlsc0NvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ndmlkZW8tZGV0YWlscy10aXRsZSc+XHJcbiAgICAgICAgICAgICAgICB7dmlkZW9EZXRhaWxzLmluZm8udGl0bGV9XHJcbiAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICA8VmlkZW9EZXRhaWxzTmF2XHJcbiAgICAgICAgICAgICAgICB2aWRlb0lkPXt2aWR9XHJcbiAgICAgICAgICAgICAgICB0YWI9e3RhYn1cclxuICAgICAgICAgICAgICAgIGRlZmF1bHRUYWI9e2RlZmF1bHRUYWJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrVGFiPXtvbkNsaWNrVGFifVxyXG5cclxuICAgICAgICAgICAgICAgIGhhc1NvdXJjZXM9e2hhc1NvdXJjZXN9XHJcbiAgICAgICAgICAgICAgICBoYXNUcmFuc2NyaXB0PXtoYXNUcmFuc2NyaXB0fVxyXG4gICAgICAgICAgICAgICAgaGFzU291bmRUcmFjaz17aGFzU291bmRUcmFja31cclxuICAgICAgICAgICAgICAgIGhhc1RhZ3M9e2hhc1RhZ3N9XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDwvVmlkZW9EZXRhaWxzTmF2PlxyXG5cclxuICAgICAgICAgICAge2RldGFpbHNFbH1cclxuICAgICAgICA8L0RldGFpbHNDb250YWluZXI+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHBhcmFtcykge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7RW5kcG9pbnQudXJsfS92aWRlby8ke3BhcmFtcy52aWR9YCk7XHJcbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHZpZGVvRGV0YWlsczoganNvbiwgXHJcblxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgIHNob3dCYWNrOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IHtcclxuICAgICAgc3RhcnRBdDogMCwgXHJcbiAgICAgIG1heFJlc3VsdHM6IDEwMDBcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7RW5kcG9pbnQudXJsfS8/JHtxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKX1gKTtcclxuICAgIGNvbnN0IGl0ZW1zID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICBjb25zdCBwYXRocyA9IGl0ZW1zLm1hcChpdGVtID0+IChcclxuICAgICAgICB7IHBhcmFtczogeyB2aWQ6IGl0ZW0uaWQgfX1cclxuICAgICkpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHMsIFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==