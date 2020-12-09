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

const Component = props => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIl0sIm5hbWVzIjpbImxvZ28iLCJDb21wb25lbnQiLCJwcm9wcyIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJSZWFjdCIsInVzZVN0YXRlIiwicm91dGVyIiwidXNlUm91dGVyIiwib25TY3JvbGwiLCJldiIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJvbkNsaWNrQmFjayIsImJhY2tVcmwiLCJwdXNoIiwiYmFjayIsIm1hcmdpblRvcCIsInNob3dCYWNrIiwiYmFzZVBhdGgiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7QUFDQTtBQUNBO0FBRUEsTUFBTUEsSUFBSSxHQUFHLEVBQWI7O0FBRUEsTUFBTUMsU0FBUyxHQUFJQyxLQUFELElBQVc7QUFBQTs7QUFDekIsUUFBTSxDQUFDQyxRQUFELEVBQVdDLFdBQVgsSUFBMEJDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxJQUFmLENBQWhDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFRixXQUFTQyxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtBQUNwQk4sZUFBVyxDQUFDRCxRQUFRLElBQUk7QUFDcEIsYUFBT1EsTUFBTSxDQUFDQyxXQUFQLEdBQXFCLEdBQTVCO0FBQ0gsS0FGVSxDQUFYO0FBR0Q7O0FBQUE7QUFFRFAsOENBQUssQ0FBQ1EsU0FBTixDQUFnQixNQUFNO0FBQ3BCRixVQUFNLENBQUNHLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDTCxRQUFsQztBQUVBLFdBQU8sTUFBTUUsTUFBTSxDQUFDSSxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ04sUUFBckMsQ0FBYjtBQUNELEdBSkQsRUFJRyxFQUpIOztBQU1BLFdBQVNPLFdBQVQsR0FBdUI7QUFDckIsUUFBSWQsS0FBSyxDQUFDZSxPQUFWLEVBQW1CO0FBQ2pCVixZQUFNLENBQUNXLElBQVAsQ0FBWWhCLEtBQUssQ0FBQ2UsT0FBbEI7QUFDRCxLQUZELE1BRU07QUFDSlYsWUFBTSxDQUFDWSxJQUFQO0FBQ0Q7QUFDRjs7QUFFRCxzQkFDRTtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFDLFFBQWY7QUFBd0IsV0FBSyxFQUFFO0FBQUNDLGlCQUFTLEVBQUVqQixRQUFRLEdBQUcsQ0FBSCxHQUFPLENBQUM7QUFBNUIsT0FBL0I7QUFBQSxpQkFDS0QsS0FBSyxDQUFDbUIsUUFBTixpQkFDQztBQUFHLGVBQU8sRUFBRUwsV0FBWjtBQUF5QixpQkFBUyxFQUFDLGFBQW5DO0FBQUEsK0JBQ0UscUVBQUMsMkRBQUQ7QUFBYSxtQkFBUyxFQUFDO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZOLGVBT0k7QUFBRyxZQUFJLEVBQUVULE1BQU0sQ0FBQ2UsUUFBaEI7QUFBMEIsaUJBQVMsRUFBQyxjQUFwQztBQUFBLGdDQUNJO0FBQ0ksbUJBQVMsRUFBQyxhQURkO0FBRUksYUFBRyxFQUFFdEIsSUFGVDtBQUdJLGFBQUcsRUFBQztBQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFPSTtBQUFNLG1CQUFTLEVBQUMsa0JBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQSixlQWlCSTtBQUFHLFlBQUksRUFBQyw0Q0FBUjtBQUFxRCxjQUFNLEVBQUMsUUFBNUQ7QUFBcUUsaUJBQVMsRUFBQyxlQUEvRTtBQUFBLCtCQUNJLHFFQUFDLGlFQUFEO0FBQW1CLG1CQUFTLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQXVCR0UsS0FBSyxDQUFDcUIsUUF2QlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUEyQkQsQ0FuREQ7O0dBQU10QixTO1VBRWFPLHFEOzs7S0FGYlAsUztBQXFEU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC42NTgzNjBiNjJiNGIzMjQ3MmRkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG4vLyBpbXBvcnQgbG9nbyBmcm9tICcuLi9hc3NldHMvbG9nby5wbmcnO1xyXG5pbXBvcnQgeyBWc2NHaXRodWJJbnZlcnRlZCB9IGZyb20gJ3JlYWN0LWljb25zL3ZzYyc7XHJcbmltcG9ydCB7IElvQXJyb3dCYWNrIH0gZnJvbSAncmVhY3QtaWNvbnMvaW81JztcclxuXHJcbmNvbnN0IGxvZ28gPSAnJztcclxuXHJcbmNvbnN0IENvbXBvbmVudCA9IChwcm9wcykgPT4ge1xyXG4gICAgY29uc3QgW2V4cGFuZGVkLCBzZXRFeHBhbmRlZF0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICBmdW5jdGlvbiBvblNjcm9sbChldikge1xyXG4gICAgc2V0RXhwYW5kZWQoZXhwYW5kZWQgPT4ge1xyXG4gICAgICAgIHJldHVybiB3aW5kb3cucGFnZVlPZmZzZXQgPCAxMDA7XHJcbiAgICB9KVxyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgZnVuY3Rpb24gb25DbGlja0JhY2soKSB7XHJcbiAgICBpZiAocHJvcHMuYmFja1VybCkge1xyXG4gICAgICByb3V0ZXIucHVzaChwcm9wcy5iYWNrVXJsKTtcclxuICAgIH1lbHNlIHtcclxuICAgICAgcm91dGVyLmJhY2soKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0naGVhZGVyJyBzdHlsZT17e21hcmdpblRvcDogZXhwYW5kZWQgPyAwIDogLTcwfX0+XHJcbiAgICAgICAgICB7cHJvcHMuc2hvd0JhY2sgJiZcclxuICAgICAgICAgICAgPGEgb25DbGljaz17b25DbGlja0JhY2t9IGNsYXNzTmFtZT0naGVhZGVyLWJhY2snPlxyXG4gICAgICAgICAgICAgIDxJb0Fycm93QmFjayBjbGFzc05hbWU9J2hlYWRlci1iYWNrLWljb24nIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICA8YSBocmVmPXtyb3V0ZXIuYmFzZVBhdGh9IGNsYXNzTmFtZT0naGVhZGVyLWJyYW5kJz5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naGVhZGVyLWxvZ28nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17bG9nb31cclxuICAgICAgICAgICAgICAgICAgYWx0PSdsb2dvJ1xyXG4gICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0naGVhZGVyLWxvZ28tdGV4dCc+a3Vyemdlc2FndC10bGRyPC9zcGFuPlxyXG4gICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgIDxhIGhyZWY9J2h0dHBzOi8vZ2l0aHViLmNvbS9raXdpcHhsL2t1cnpnZXNhZ3QtdGxkcicgdGFyZ2V0PSdfYmxhbmsnIGNsYXNzTmFtZT0naGVhZGVyLWdpdGh1Yic+XHJcbiAgICAgICAgICAgICAgPFZzY0dpdGh1YkludmVydGVkIGNsYXNzTmFtZT0naGVhZGVyLWdpdGh1Yi1pY29uJyAvPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDsiXSwic291cmNlUm9vdCI6IiJ9