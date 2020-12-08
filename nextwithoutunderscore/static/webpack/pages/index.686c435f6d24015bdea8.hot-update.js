webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/VideoCard.js":
/*!*************************************!*\
  !*** ./src/components/VideoCard.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ "./node_modules/luxon/build/cjs-browser/luxon.js");
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(luxon__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\components\\VideoCard.js",
    _s = $RefreshSig$();




/* harmony default export */ __webpack_exports__["default"] = (_s(props => {
  _s();

  const [imgHeight, setImgHeight] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0);
  const imgRef = react__WEBPACK_IMPORTED_MODULE_1___default.a.useRef(null);
  let viewsShortHand;

  if (props.numViews >= 1000000) {
    viewsShortHand = (Math.round(props.numViews / 1000000 * 10) / 10).toString() + "M";
  } else if (props.numViews >= 100000) {
    viewsShortHand = Math.round(props.numViews / 1000).toString() + "K";
  } else if (props.numViews >= 1000) {
    viewsShortHand = (Math.round(props.numViews / 1000 * 10) / 10).toString() + "K";
  } else {
    viewsShortHand = props.numViews.toString();
  }

  const publishDateRelative = luxon__WEBPACK_IMPORTED_MODULE_3__["DateTime"].fromISO(props.publishedAt).toRelative();
  const duration = luxon__WEBPACK_IMPORTED_MODULE_3__["Duration"].fromISO(props.duration);
  const durationFormatted = duration.toFormat("hh:mm:ss");
  let durationString = "";
  let foundStart = false;

  for (let char of durationFormatted) {
    if (char != '0' && char != ':') {
      foundStart = true;
    }

    if (foundStart) {
      durationString += char;
    }
  }

  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    // We need to watch when the image height changes (e.g. everytime the window size changes)
    // so that we can offset our duration based on it.
    const resizeObserver = new ResizeObserver(entries => {
      setImgHeight(entries[0].target.clientHeight);
    });
    resizeObserver.observe(imgRef.current);
  }, []);
  let durationPositionY = 100;

  if (imgHeight > 0) {
    durationPositionY = imgHeight - 30;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "video-card",
    onClick: () => {
      if (props.onClick) {
        props.onClick(props.id);
      }
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"].Img, {
      ref: imgRef,
      className: "video-card-img",
      variant: "top",
      src: props.thumbnail
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "video-card-duration",
      style: {
        top: durationPositionY
      },
      children: durationString
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"].Title, {
        className: "video-card-title",
        children: props.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"].Text, {
        className: "video-card-info",
        children: `${viewsShortHand} views | ${publishDateRelative}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, undefined);
}, "X4unjTdsP6SfNiA7y4zKcntCYfs="));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9DYXJkLmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW1nSGVpZ2h0Iiwic2V0SW1nSGVpZ2h0IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImltZ1JlZiIsInVzZVJlZiIsInZpZXdzU2hvcnRIYW5kIiwibnVtVmlld3MiLCJNYXRoIiwicm91bmQiLCJ0b1N0cmluZyIsInB1Ymxpc2hEYXRlUmVsYXRpdmUiLCJEYXRlVGltZSIsImZyb21JU08iLCJwdWJsaXNoZWRBdCIsInRvUmVsYXRpdmUiLCJkdXJhdGlvbiIsIkR1cmF0aW9uIiwiZHVyYXRpb25Gb3JtYXR0ZWQiLCJ0b0Zvcm1hdCIsImR1cmF0aW9uU3RyaW5nIiwiZm91bmRTdGFydCIsImNoYXIiLCJ1c2VFZmZlY3QiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsInRhcmdldCIsImNsaWVudEhlaWdodCIsIm9ic2VydmUiLCJjdXJyZW50IiwiZHVyYXRpb25Qb3NpdGlvblkiLCJvbkNsaWNrIiwiaWQiLCJ0aHVtYm5haWwiLCJ0b3AiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxrRUFBQ0EsS0FBRCxJQUFXO0FBQUE7O0FBQ3RCLFFBQU0sQ0FBQ0MsU0FBRCxFQUFZQyxZQUFaLElBQTRCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUFsQztBQUNBLFFBQU1DLE1BQU0sR0FBR0YsNENBQUssQ0FBQ0csTUFBTixDQUFhLElBQWIsQ0FBZjtBQUVBLE1BQUlDLGNBQUo7O0FBQ0EsTUFBSVAsS0FBSyxDQUFDUSxRQUFOLElBQWtCLE9BQXRCLEVBQStCO0FBQzNCRCxrQkFBYyxHQUFHLENBQUNFLElBQUksQ0FBQ0MsS0FBTCxDQUFXVixLQUFLLENBQUNRLFFBQU4sR0FBaUIsT0FBakIsR0FBMkIsRUFBdEMsSUFBNEMsRUFBN0MsRUFBaURH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bUJBREosZUFHSSxxRUFBQyw0REFBRCxDQUFNLElBQU47QUFBVyxpQkFBUyxFQUFDLGlCQUFyQjtBQUFBLGtCQUNFLEdBQUU5QixjQUFlLFlBQVdLLG1CQUFvQjtBQURsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUEwQkgsQ0F6RUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjg2YzQzNWY2ZDI0MDE1YmRlYTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDYXJkIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9DYXJkJztcclxuaW1wb3J0IHsgRGF0ZVRpbWUsIER1cmF0aW9uIH0gZnJvbSAnbHV4b24nO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBbaW1nSGVpZ2h0LCBzZXRJbWdIZWlnaHRdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBpbWdSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcblxyXG4gICAgbGV0IHZpZXdzU2hvcnRIYW5kO1xyXG4gICAgaWYgKHByb3BzLm51bVZpZXdzID49IDEwMDAwMDApIHtcclxuICAgICAgICB2aWV3c1Nob3J0SGFuZCA9IChNYXRoLnJvdW5kKHByb3BzLm51bVZpZXdzIC8gMTAwMDAwMCAqIDEwKSAvIDEwKS50b1N0cmluZygpICsgXCJNXCI7XHJcbiAgICB9ZWxzZSBpZiAocHJvcHMubnVtVmlld3MgPj0gMTAwMDAwKSB7XHJcbiAgICAgICAgdmlld3NTaG9ydEhhbmQgPSBNYXRoLnJvdW5kKHByb3BzLm51bVZpZXdzIC8gMTAwMCkudG9TdHJpbmcoKSArIFwiS1wiO1xyXG4gICAgfWVsc2UgaWYgKHByb3BzLm51bVZpZXdzID49IDEwMDApIHtcclxuICAgICAgICB2aWV3c1Nob3J0SGFuZCA9IChNYXRoLnJvdW5kKHByb3BzLm51bVZpZXdzIC8gMTAwMCAqIDEwKSAvIDEwKS50b1N0cmluZygpICsgXCJLXCI7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgICAgdmlld3NTaG9ydEhhbmQgPSBwcm9wcy5udW1WaWV3cy50b1N0cmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHB1Ymxpc2hEYXRlUmVsYXRpdmUgPSBEYXRlVGltZS5mcm9tSVNPKHByb3BzLnB1Ymxpc2hlZEF0KS50b1JlbGF0aXZlKCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGR1cmF0aW9uID0gRHVyYXRpb24uZnJvbUlTTyhwcm9wcy5kdXJhdGlvbik7XHJcbiAgICBjb25zdCBkdXJhdGlvbkZvcm1hdHRlZCA9IGR1cmF0aW9uLnRvRm9ybWF0KFwiaGg6bW06c3NcIik7XHJcblxyXG4gICAgbGV0IGR1cmF0aW9uU3RyaW5nID0gXCJcIjtcclxuICAgIGxldCBmb3VuZFN0YXJ0ID0gZmFsc2U7XHJcbiAgICBmb3IgKGxldCBjaGFyIG9mIGR1cmF0aW9uRm9ybWF0dGVkKSB7XHJcbiAgICAgICAgaWYgKGNoYXIgIT0gJzAnICYmIGNoYXIgIT0gJzonKSB7XHJcbiAgICAgICAgICAgIGZvdW5kU3RhcnQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZvdW5kU3RhcnQpIHtcclxuICAgICAgICAgICAgZHVyYXRpb25TdHJpbmcgKz0gY2hhcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy8gV2UgbmVlZCB0byB3YXRjaCB3aGVuIHRoZSBpbWFnZSBoZWlnaHQgY2hhbmdlcyAoZS5nLiBldmVyeXRpbWUgdGhlIHdpbmRvdyBzaXplIGNoYW5nZXMpXHJcbiAgICAgICAgLy8gc28gdGhhdCB3ZSBjYW4gb2Zmc2V0IG91ciBkdXJhdGlvbiBiYXNlZCBvbiBpdC5cclxuICAgICAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcihlbnRyaWVzID0+IHtcclxuICAgICAgICAgICAgc2V0SW1nSGVpZ2h0KGVudHJpZXNbMF0udGFyZ2V0LmNsaWVudEhlaWdodCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUoaW1nUmVmLmN1cnJlbnQpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGxldCBkdXJhdGlvblBvc2l0aW9uWSA9IDEwMDtcclxuICAgIGlmIChpbWdIZWlnaHQgPiAwKSB7XHJcbiAgICAgICAgZHVyYXRpb25Qb3NpdGlvblkgPSBpbWdIZWlnaHQgLSAzMDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9XCJ2aWRlby1jYXJkXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocHJvcHMub25DbGljaykge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMub25DbGljayhwcm9wcy5pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9fT5cclxuICAgICAgICAgICAgPENhcmQuSW1nIHJlZj17aW1nUmVmfSBjbGFzc05hbWU9XCJ2aWRlby1jYXJkLWltZ1wiIHZhcmlhbnQ9XCJ0b3BcIiBzcmM9e3Byb3BzLnRodW1ibmFpbH0vPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgey8qXHJcbiAgICAgICAgICAgIEJlY2F1c2UgQ2FyZC5JbWcgaXMgYSB2b2lkIGVsZW1lbnQsIGl0IGNhbm5vdCBoYXZlIGNoaWxkcmVuLlxyXG4gICAgICAgICAgICBBbmQgc28gaG93IGRvIHdlIHBvc2l0aW9uIG91ciBkdXJhdGlvbiBhdCB0aGUgYm90dG9tIG9mIHRoZSBpbWFnZT9cclxuICAgICAgICAgICAgSGVyZSdzIGFuIG9kZCB3YXkgLSBsZXQncyBjYWxjdWxhdGUgdGhlIGltYWdlIGhlaWdodCBhbmQgb2Zmc2V0IGl0IGR5bmFtaWNhbGx5LlxyXG4gICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpZGVvLWNhcmQtZHVyYXRpb24nIHN0eWxlPXt7dG9wOiBkdXJhdGlvblBvc2l0aW9uWX19PlxyXG4gICAgICAgICAgICAgICAge2R1cmF0aW9uU3RyaW5nfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UaXRsZSBjbGFzc05hbWU9XCJ2aWRlby1jYXJkLXRpdGxlXCI+e3Byb3BzLnRpdGxlfTwvQ2FyZC5UaXRsZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8Q2FyZC5UZXh0IGNsYXNzTmFtZT1cInZpZGVvLWNhcmQtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAge2Ake3ZpZXdzU2hvcnRIYW5kfSB2aWV3cyB8ICR7cHVibGlzaERhdGVSZWxhdGl2ZX1gfVxyXG4gICAgICAgICAgICAgICAgPC9DYXJkLlRleHQ+XHJcbiAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgICk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9