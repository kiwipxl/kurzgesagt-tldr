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






const Component = props => {
  _s();

  const [expanded, setExpanded] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(true);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  function onScroll(ev) {
    setExpanded(expanded => {
      return window.pageYOffset < 100;
    });
  }

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
          lineNumber: 35,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: router.basePath,
        className: "header-brand",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          className: "header-logo",
          src: '/kurzgesagt-tldr/logo.png',
          alt: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          className: "header-logo-text",
          children: "kurzgesagt-tldr"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
        href: "https://github.com/kiwipxl/kurzgesagt-tldr",
        target: "_blank",
        className: "header-github",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_vsc__WEBPACK_IMPORTED_MODULE_3__["VscGithubInverted"], {
          className: "header-github-icon"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, undefined), props.children]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, undefined);
};

_s(Component, "3eXzdZJUaOfaArkiMs1Bpk6BWKY=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Component;
/* harmony default export */ __webpack_exports__["default"] = (Component);

var _c;

$RefreshReg$(_c, "Component");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwiZXhwYW5kZWQiLCJzZXRFeHBhbmRlZCIsIlJlYWN0IiwidXNlU3RhdGUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJvblNjcm9sbCIsImV2Iiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9uQ2xpY2tCYWNrIiwiYmFja1VybCIsInB1c2giLCJiYWNrIiwibWFyZ2luVG9wIiwic2hvd0JhY2siLCJiYXNlUGF0aCIsImNoaWxkcmVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxTQUFTLEdBQUlDLEtBQUQsSUFBVztBQUFBOztBQUMzQixRQUFNLENBQUNDLFFBQUQsRUFBV0MsV0FBWCxJQUEwQkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLElBQWYsQ0FBaEM7QUFDQSxRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFdBQVNDLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCO0FBQ3BCTixlQUFXLENBQUVELFFBQUQsSUFBYztBQUN4QixhQUFPUSxNQUFNLENBQUNDLFdBQVAsR0FBcUIsR0FBNUI7QUFDRCxLQUZVLENBQVg7QUFHRDs7QUFFRFAsOENBQUssQ0FBQ1EsU0FBTixDQUFnQixNQUFNO0FBQ3BCRixVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDTCxRQUFsQztBQUVBLFdBQU8sTUFBTUUsTUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ04sUUFBckMsQ0FBYjtBQUNELEdBSkQsRUFJRyxFQUpIOztBQU1BLFdBQVNPLFdBQVQsR0FBdUI7QUFDckIsUUFBSWQsS0FBSyxDQUFDZSxPQUFWLEVBQW1CO0FBQ2pCVixZQUFNLENBQUNXLElBQVAsQ0FBWWhCLEtBQUssQ0FBQ2UsT0FBbEI7QUFDRCxLQUZELE1BRU87QUFDTFYsWUFBTSxDQUFDWSxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBd0IsV0FBSyxFQUFFO0FBQUVDLGlCQUFTLEVBQUVqQixRQUFRLEdBQUcsQ0FBSCxHQUFPLENBQUM7QUFBN0IsT0FBL0I7QUFBQSxpQkFDR0QsS0FBSyxDQUFDbUIsUUFBTixpQkFDQztBQUFHLGVBQU8sRUFBRUwsV0FBWjtBQUF5QixpQkFBUyxFQUFDLGFBQW5DO0FBQUEsK0JBQ0UscUVBQUMsMkRBQUQ7QUFBYSxtQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKLGVBT0U7QUFBRyxZQUFJLEVBQUVULE1BQU0sQ0FBQ2UsUUFBaEI7QUFBMEIsaUJBQVMsRUFBQyxjQUFwQztBQUFBLGdDQUNFO0FBQ0UsbUJBQVMsRUFBQyxhQURaO0FBRUUsYUFBRyxFQUFFLDJCQUZQO0FBR0UsYUFBRyxFQUFDO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FO0FBQU0sbUJBQVMsRUFBQyxrQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGLGVBaUJFO0FBQ0UsWUFBSSxFQUFDLDRDQURQO0FBRUUsY0FBTSxFQUFDLFFBRlQ7QUFHRSxpQkFBUyxFQUFDLGVBSFo7QUFBQSwrQkFLRSxxRUFBQyxpRUFBRDtBQUFtQixtQkFBUyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWpCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsRUEyQkdwQixLQUFLLENBQUNxQixRQTNCVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQStCRCxDQXZERDs7R0FBTXRCLFM7VUFFV08scUQ7OztLQUZYUCxTO0FBeURTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjUxZWMwYjdhM2ZlM2NkODQ4OGI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IFZzY0dpdGh1YkludmVydGVkIH0gZnJvbSAncmVhY3QtaWNvbnMvdnNjJztcclxuaW1wb3J0IHsgSW9BcnJvd0JhY2sgfSBmcm9tICdyZWFjdC1pY29ucy9pbzUnO1xyXG5cclxuY29uc3QgQ29tcG9uZW50ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgZnVuY3Rpb24gb25TY3JvbGwoZXYpIHtcclxuICAgIHNldEV4cGFuZGVkKChleHBhbmRlZCkgPT4ge1xyXG4gICAgICByZXR1cm4gd2luZG93LnBhZ2VZT2Zmc2V0IDwgMTAwO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGZ1bmN0aW9uIG9uQ2xpY2tCYWNrKCkge1xyXG4gICAgaWYgKHByb3BzLmJhY2tVcmwpIHtcclxuICAgICAgcm91dGVyLnB1c2gocHJvcHMuYmFja1VybCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByb3V0ZXIuYmFjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBleHBhbmRlZCA/IDAgOiAtNzAgfX0+XHJcbiAgICAgICAge3Byb3BzLnNob3dCYWNrICYmIChcclxuICAgICAgICAgIDxhIG9uQ2xpY2s9e29uQ2xpY2tCYWNrfSBjbGFzc05hbWU9XCJoZWFkZXItYmFja1wiPlxyXG4gICAgICAgICAgICA8SW9BcnJvd0JhY2sgY2xhc3NOYW1lPVwiaGVhZGVyLWJhY2staWNvblwiIC8+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAgPGEgaHJlZj17cm91dGVyLmJhc2VQYXRofSBjbGFzc05hbWU9XCJoZWFkZXItYnJhbmRcIj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLWxvZ29cIlxyXG4gICAgICAgICAgICBzcmM9eycva3Vyemdlc2FndC10bGRyL2xvZ28ucG5nJ31cclxuICAgICAgICAgICAgYWx0PVwibG9nb1wiXHJcbiAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvLXRleHRcIj5rdXJ6Z2VzYWd0LXRsZHI8L3NwYW4+XHJcbiAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9raXdpcHhsL2t1cnpnZXNhZ3QtdGxkclwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLWdpdGh1YlwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFZzY0dpdGh1YkludmVydGVkIGNsYXNzTmFtZT1cImhlYWRlci1naXRodWItaWNvblwiIC8+XHJcbiAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=