webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
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
/* harmony import */ var react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/vsc */ "./node_modules/react-icons/vsc/index.esm.js");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");


var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\components\\Header.js",
    _s = $RefreshSig$();


 // import logo from '../assets/logo.png';



const logo = '';
/* harmony default export */ __webpack_exports__["default"] = (_s(props => {
  _s();

  const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function onScroll(ev) {
    setExpanded(expanded => {
      return window.pageYOffset < 100;
    });
  }

  ;
  react__WEBPACK_IMPORTED_MODULE_1___default.a.useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function onClickBack() {
    if (props.backUrl) {
      router.push(props.backUrl);
    } else {
      router.back();
    }
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "header",
      style: {
        marginTop: expanded ? 0 : -70
      },
      children: [props.showBack && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        onClick: onClickBack,
        className: "header-back",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__["IoArrowBack"], {
          className: "header-back-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: router.basePath,
        className: "header-brand",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "header-logo",
          src: logo,
          alt: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "header-logo-text",
          children: "kurzgesagt-tldr"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://github.com/kiwipxl/kurzgesagt-tldr",
        target: "_blank",
        className: "header-github",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__["VscGithubInverted"], {
          className: "header-github-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined);
}, "3eXzdZJUaOfaArkiMs1Bpk6BWKY=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbImxvZ28iLCJwcm9wcyIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwib25TY3JvbGwiLCJldiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrQmFjayIsImJhY2tVcmwiLCJwdXNoIiwiYmFjayIsIm1hcmdpblRvcCIsInNob3dCYWNrIiwiYmFzZVBhdGgiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLEVBQWI7QUFFZSxrRUFBQ0MsS0FBRCxJQUFXO0FBQUE7O0FBQ3RCLFFBQU0sQ0FBQ0MsUUFBRCxFQUFXQyxXQUFYLElBQTBCQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsSUFBZixDQUFoQztBQUNBLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRUYsV0FBU0MsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0I7QUFDcEJOLGVBQVcsQ0FBQ0QsUUFBUSxJQUFJO0FBQ3BCLGFBQU9RLE1BQU0sQ0FBQ0MsV0FBUCxHQUFxQixHQUE1QjtBQUNILEtBRlUsQ0FBWDtBQUdEOztBQUFBO0FBRURQLDhDQUFLLENBQUNRLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQkYsVUFBTSxDQUFDRyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQ0wsUUFBbEM7QUFFQSxXQUFPLE1BQU1FLE1BQU0sQ0FBQ0ksbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNOLFFBQXJDLENBQWI7QUFDRCxHQUpELEVBSUcsRUFKSDs7QUFNQSxXQUFTTyxXQUFULEdBQXVCO0FBQ3JCLFFBQUlkLEtBQUssQ0FBQ2UsT0FBVixFQUFtQjtBQUNqQlYsWUFBTSxDQUFDVyxJQUFQLENBQVloQixLQUFLLENBQUNlLE9BQWxCO0FBQ0QsS0FGRCxNQUVNO0FBQ0pWLFlBQU0sQ0FBQ1ksSUFBUDtBQUNEO0FBQ0Y7O0FBRUQsc0JBQ0U7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyxRQUFmO0FBQXdCLFdBQUssRUFBRTtBQUFDQyxpQkFBUyxFQUFFakIsUUFBUSxHQUFHLENBQUgsR0FBTyxDQUFDO0FBQTVCLE9BQS9CO0FBQUEsaUJBQ0tELEtBQUssQ0FBQ21CLFFBQU4saUJBQ0M7QUFBRyxlQUFPLEVBQUVMLFdBQVo7QUFBeUIsaUJBQVMsRUFBQyxhQUFuQztBQUFBLCtCQUNFLHFFQUFDLDJEQUFEO0FBQWEsbUJBQVMsRUFBQztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGTixlQU9JO0FBQUcsWUFBSSxFQUFFVCxNQUFNLENBQUNlLFFBQWhCO0FBQTBCLGlCQUFTLEVBQUMsY0FBcEM7QUFBQSxnQ0FDSTtBQUNJLG1CQUFTLEVBQUMsYUFEZDtBQUVJLGFBQUcsRUFBRXJCLElBRlQ7QUFHSSxhQUFHLEVBQUM7QUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLGVBT0k7QUFBTSxtQkFBUyxFQUFDLGtCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEosZUFpQkk7QUFBRyxZQUFJLEVBQUMsNENBQVI7QUFBcUQsY0FBTSxFQUFDLFFBQTVEO0FBQXFFLGlCQUFTLEVBQUMsZUFBL0U7QUFBQSwrQkFDSSxxRUFBQyxpRUFBRDtBQUFtQixtQkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUF1QkdDLEtBQUssQ0FBQ3FCLFFBdkJUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBMkJELENBbkREO0FBQUEsVUFFbUJmLHFEQUZuQjtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuNjJiMWE2ZDkyODY2YmE0MTE0MjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuLy8gaW1wb3J0IGxvZ28gZnJvbSAnLi4vYXNzZXRzL2xvZ28ucG5nJztcclxuaW1wb3J0IHsgVnNjR2l0aHViSW52ZXJ0ZWQgfSBmcm9tICdyZWFjdC1pY29ucy92c2MnO1xyXG5pbXBvcnQgeyBJb0Fycm93QmFjayB9IGZyb20gJ3JlYWN0LWljb25zL2lvNSc7XHJcblxyXG5jb25zdCBsb2dvID0gJyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gUmVhY3QudXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgZnVuY3Rpb24gb25TY3JvbGwoZXYpIHtcclxuICAgIHNldEV4cGFuZGVkKGV4cGFuZGVkID0+IHtcclxuICAgICAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IDwgMTAwO1xyXG4gICAgfSlcclxuICB9O1xyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2tCYWNrKCkge1xyXG4gICAgaWYgKHByb3BzLmJhY2tVcmwpIHtcclxuICAgICAgcm91dGVyLnB1c2gocHJvcHMuYmFja1VybCk7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIHJvdXRlci5iYWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2hlYWRlcicgc3R5bGU9e3ttYXJnaW5Ub3A6IGV4cGFuZGVkID8gMCA6IC03MH19PlxyXG4gICAgICAgICAge3Byb3BzLnNob3dCYWNrICYmXHJcbiAgICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2tCYWNrfSBjbGFzc05hbWU9J2hlYWRlci1iYWNrJz5cclxuICAgICAgICAgICAgICA8SW9BcnJvd0JhY2sgY2xhc3NOYW1lPSdoZWFkZXItYmFjay1pY29uJyAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgPGEgaHJlZj17cm91dGVyLmJhc2VQYXRofSBjbGFzc05hbWU9J2hlYWRlci1icmFuZCc+XHJcbiAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2hlYWRlci1sb2dvJ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9e2xvZ299XHJcbiAgICAgICAgICAgICAgICAgIGFsdD0nbG9nbydcclxuICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2hlYWRlci1sb2dvLXRleHQnPmt1cnpnZXNhZ3QtdGxkcjwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuXHJcbiAgICAgICAgICA8YSBocmVmPSdodHRwczovL2dpdGh1Yi5jb20va2l3aXB4bC9rdXJ6Z2VzYWd0LXRsZHInIHRhcmdldD0nX2JsYW5rJyBjbGFzc05hbWU9J2hlYWRlci1naXRodWInPlxyXG4gICAgICAgICAgICAgIDxWc2NHaXRodWJJbnZlcnRlZCBjbGFzc05hbWU9J2hlYWRlci1naXRodWItaWNvbicgLz5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==