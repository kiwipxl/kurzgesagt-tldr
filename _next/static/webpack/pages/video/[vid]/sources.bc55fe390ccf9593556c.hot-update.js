webpackHotUpdate_N_E("pages/video/[vid]/sources",{

/***/ "./src/pages/video/[vid]/sources.js":
/*!******************************************!*\
  !*** ./src/pages/video/[vid]/sources.js ***!
  \******************************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Card */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_LastUpdatedTimestamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/LastUpdatedTimestamp */ "./src/components/LastUpdatedTimestamp.js");
/* harmony import */ var _components_VideoDetailsContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/VideoDetailsContainer */ "./src/components/VideoDetailsContainer.js");

var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\pages\\video\\[vid]\\sources.js";





const domainTagColours = [chroma_js__WEBPACK_IMPORTED_MODULE_3___default()('#8dd3c7'), chroma_js__WEBPACK_IMPORTED_MODULE_3___default()('#ffffb3'), chroma_js__WEBPACK_IMPORTED_MODULE_3___default()('#bebada'), chroma_js__WEBPACK_IMPORTED_MODULE_3___default()('#fb8072'), chroma_js__WEBPACK_IMPORTED_MODULE_3___default()('#80b1d3'), chroma_js__WEBPACK_IMPORTED_MODULE_3___default()('#fdb462'), chroma_js__WEBPACK_IMPORTED_MODULE_3___default()('#b3de69'), chroma_js__WEBPACK_IMPORTED_MODULE_3___default()('#fccde5'), chroma_js__WEBPACK_IMPORTED_MODULE_3___default()('#d9d9d9'), chroma_js__WEBPACK_IMPORTED_MODULE_3___default()('#bc80bd'), chroma_js__WEBPACK_IMPORTED_MODULE_3___default()('#ccebc5'), chroma_js__WEBPACK_IMPORTED_MODULE_3___default()('#ffed6f')];

function getDomainTagColour(domain) {
  // each unique tag has it's own colour. generate a hash and index into the colour
  // array to find it's colour.
  // generate a 32bit signed integer hash
  // https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
  var hash = 0,
      i,
      chr;

  for (i = 0; i < domain.length; i++) {
    chr = domain.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0;
  }

  return domainTagColours[Math.abs(hash) % domainTagColours.length];
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (props => {
  let renderContent = [];
  let index = 0;
  let citationIndex = 0;

  for (const keyPoint of props.sources.keyPoints) {
    let renderKeyPointContent = [];
    renderKeyPointContent.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
      children: keyPoint.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 36
    }, undefined));

    for (const content of keyPoint.content) {
      switch (content.type) {
        case 'text':
          renderKeyPointContent.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: content.data
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 48
          }, undefined));
          break;

        case 'citation':
          // Find the domain name of the citation url and create a little
          // tag from it that the user can click.
          const pattern = /(http[s]?:\/\/)?(www\.)?([a-zA-Z0-9\.-]+)\//g;
          const matches = pattern.exec(content.data.url);
          let domainTag = null;

          if (matches) {
            const domain = matches[3];
            let colour = getDomainTagColour(domain);
            const borderColour = chroma_js__WEBPACK_IMPORTED_MODULE_3___default()(colour).darken();
            const textColour = chroma_js__WEBPACK_IMPORTED_MODULE_3___default()(colour).darken(2);
            colour = colour.alpha(0.5);
            domainTag = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              className: "sources-domain-tag",
              href: 'http://' + domain,
              target: "_blank",
              style: {
                backgroundColor: colour.hex(),
                borderColor: borderColour.hex(),
                color: textColour.hex()
              },
              children: domain
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 29
            }, undefined);
          } // Render citation


          renderKeyPointContent.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "citation-link",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              className: "sources-number",
              children: citationIndex + 1 + '.'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              href: content.data.url,
              target: "_blank",
              children: content.data.title ? content.data.title : content.data.url
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 29
            }, undefined), domainTag]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 25
          }, undefined));
          renderKeyPointContent.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 48
          }, undefined));
          renderKeyPointContent.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "sources-quote",
            children: content.data.quote
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 48
          }, undefined));
          renderKeyPointContent.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 48
          }, undefined));
          ++citationIndex;
          break;
      }
    }

    renderContent.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "sources-key-point",
      children: renderKeyPointContent
    }, index, false, {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 28
    }, undefined));
    ++index;
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_VideoDetailsContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    vid: props.vid,
    tab: "sources",
    details: props.containerDetails,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "video-details-card",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Card__WEBPACK_IMPORTED_MODULE_2__["default"].Body, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          className: "info-box",
          children: ["This section is the citations and further reading provided by Kurzgesagt at", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: props.sources.url,
            target: "_blank",
            children: ' ' + props.sources.url
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 21
        }, undefined), renderContent]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_LastUpdatedTimestamp__WEBPACK_IMPORTED_MODULE_4__["default"], {
      timestampMillis: props.lastUpdated
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 98,
    columnNumber: 9
  }, undefined);
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/next/node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3ZpZGVvL1t2aWRdL3NvdXJjZXMuanMiXSwibmFtZXMiOlsiZG9tYWluVGFnQ29sb3VycyIsImNocm9tYSIsImdldERvbWFpblRhZ0NvbG91ciIsImRvbWFpbiIsImhhc2giLCJpIiwiY2hyIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsIk1hdGgiLCJhYnMiLCJwcm9wcyIsInJlbmRlckNvbnRlbnQiLCJpbmRleCIsImNpdGF0aW9uSW5kZXgiLCJrZXlQb2ludCIsInNvdXJjZXMiLCJrZXlQb2ludHMiLCJyZW5kZXJLZXlQb2ludENvbnRlbnQiLCJwdXNoIiwidGl0bGUiLCJjb250ZW50IiwidHlwZSIsImRhdGEiLCJwYXR0ZXJuIiwibWF0Y2hlcyIsImV4ZWMiLCJ1cmwiLCJkb21haW5UYWciLCJjb2xvdXIiLCJib3JkZXJDb2xvdXIiLCJkYXJrZW4iLCJ0ZXh0Q29sb3VyIiwiYWxwaGEiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZXgiLCJib3JkZXJDb2xvciIsImNvbG9yIiwicXVvdGUiLCJ2aWQiLCJjb250YWluZXJEZXRhaWxzIiwibGFzdFVwZGF0ZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBLE1BQU1BLGdCQUFnQixHQUFHLENBQUNDLGdEQUFNLENBQUMsU0FBRCxDQUFQLEVBQW1CQSxnREFBTSxDQUFDLFNBQUQsQ0FBekIsRUFBcUNBLGdEQUFNLENBQUMsU0FBRCxDQUEzQyxFQUF1REEsZ0RBQU0sQ0FBQyxTQUFELENBQTdELEVBQXlFQSxnREFBTSxDQUFDLFNBQUQsQ0FBL0UsRUFBMkZBLGdEQUFNLENBQUMsU0FBRCxDQUFqRyxFQUE2R0EsZ0RBQU0sQ0FBQyxTQUFELENBQW5ILEVBQStIQSxnREFBTSxDQUFDLFNBQUQsQ0FBckksRUFBaUpBLGdEQUFNLENBQUMsU0FBRCxDQUF2SixFQUFtS0EsZ0RBQU0sQ0FBQyxTQUFELENB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Q0kscUVBQUMsNERBQUQsQ0FBTSxJQUFOO0FBQUEsZ0NBQ0k7QUFBRyxtQkFBUyxFQUFDLFVBQWI7QUFBQSxpSEFFSTtBQUFHLGdCQUFJLEVBQUU3QixLQUFLLENBQUNLLE9BQU4sQ0FBY1csR0FBdkI7QUFBNEIsa0JBQU0sRUFBQyxRQUFuQztBQUFBLHNCQUE2QyxNQUFNaEIsS0FBSyxDQUFDSyxPQUFOLENBQWNXO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBTUtmLGFBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQVlJLHFFQUFDLHdFQUFEO0FBQXNCLHFCQUFlLEVBQUVELEtBQUssQ0FBQzhCO0FBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFnQkgsQ0F0RkQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlkZW8vW3ZpZF0vc291cmNlcy5iYzU1ZmUzOTBjY2Y5NTkzNTU2Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENhcmQgZnJvbSAncmVhY3QtYm9vdHN0cmFwL0NhcmQnO1xyXG5pbXBvcnQgY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XHJcbmltcG9ydCBMYXN0VXBkYXRlZFRpbWVzdGFtcCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL0xhc3RVcGRhdGVkVGltZXN0YW1wJztcclxuaW1wb3J0IEVuZHBvaW50IGZyb20gJy4uLy4uLy4uL0VuZHBvaW50JztcclxuaW1wb3J0IFZpZGVvRGV0YWlsc0NvbnRhaW5lciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL1ZpZGVvRGV0YWlsc0NvbnRhaW5lcic7XHJcbmltcG9ydCB7IGZldGNoVmlkZW9EZXRhaWxzU3RhdGljUGF0aHMgfSBmcm9tICcuLi8uLi8uLi9QYWdlVXRpbCc7XHJcblxyXG5jb25zdCBkb21haW5UYWdDb2xvdXJzID0gW2Nocm9tYSgnIzhkZDNjNycpLGNocm9tYSgnI2ZmZmZiMycpLGNocm9tYSgnI2JlYmFkYScpLGNocm9tYSgnI2ZiODA3MicpLGNocm9tYSgnIzgwYjFkMycpLGNocm9tYSgnI2ZkYjQ2MicpLGNocm9tYSgnI2IzZGU2OScpLGNocm9tYSgnI2ZjY2RlNScpLGNocm9tYSgnI2Q5ZDlkOScpLGNocm9tYSgnI2JjODBiZCcpLGNocm9tYSgnI2NjZWJjNScpLGNocm9tYSgnI2ZmZWQ2ZicpXTtcclxuXHJcbmZ1bmN0aW9uIGdldERvbWFpblRhZ0NvbG91cihkb21haW4pIHtcclxuICAgIC8vIGVhY2ggdW5pcXVlIHRhZyBoYXMgaXQncyBvd24gY29sb3VyLiBnZW5lcmF0ZSBhIGhhc2ggYW5kIGluZGV4IGludG8gdGhlIGNvbG91clxyXG4gICAgLy8gYXJyYXkgdG8gZmluZCBpdCdzIGNvbG91ci5cclxuXHJcbiAgICAvLyBnZW5lcmF0ZSBhIDMyYml0IHNpZ25lZCBpbnRlZ2VyIGhhc2hcclxuICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzc2MTY0NjEvZ2VuZXJhdGUtYS1oYXNoLWZyb20tc3RyaW5nLWluLWphdmFzY3JpcHRcclxuICAgIHZhciBoYXNoID0gMCwgaSwgY2hyO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IGRvbWFpbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNociA9IGRvbWFpbi5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGhhc2ggPSAoKGhhc2ggPDwgNSkgLSBoYXNoKSArIGNocjtcclxuICAgICAgICBoYXNoIHw9IDA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiBkb21haW5UYWdDb2xvdXJzW01hdGguYWJzKGhhc2gpICUgZG9tYWluVGFnQ29sb3Vycy5sZW5ndGhdO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAocHJvcHMpID0+IHtcclxuICAgIGxldCByZW5kZXJDb250ZW50ID0gW107XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgbGV0IGNpdGF0aW9uSW5kZXggPSAwO1xyXG5cclxuICAgIGZvciAoY29uc3Qga2V5UG9pbnQgb2YgcHJvcHMuc291cmNlcy5rZXlQb2ludHMpIHtcclxuICAgICAgICBsZXQgcmVuZGVyS2V5UG9pbnRDb250ZW50ID0gW107XHJcbiAgICAgICAgcmVuZGVyS2V5UG9pbnRDb250ZW50LnB1c2goPGg0PntrZXlQb2ludC50aXRsZX08L2g0Pik7XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY29udGVudCBvZiBrZXlQb2ludC5jb250ZW50KSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoY29udGVudC50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0JzpcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJLZXlQb2ludENvbnRlbnQucHVzaCg8cD57Y29udGVudC5kYXRhfTwvcD4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NpdGF0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBkb21haW4gbmFtZSBvZiB0aGUgY2l0YXRpb24gdXJsIGFuZCBjcmVhdGUgYSBsaXR0bGVcclxuICAgICAgICAgICAgICAgICAgICAvLyB0YWcgZnJvbSBpdCB0aGF0IHRoZSB1c2VyIGNhbiBjbGljay5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXR0ZXJuID0gLyhodHRwW3NdPzpcXC9cXC8pPyh3d3dcXC4pPyhbYS16QS1aMC05XFwuLV0rKVxcLy9nO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoZXMgPSBwYXR0ZXJuLmV4ZWMoY29udGVudC5kYXRhLnVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRvbWFpblRhZyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvbWFpbiA9IG1hdGNoZXNbM107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xvdXIgPSBnZXREb21haW5UYWdDb2xvdXIoZG9tYWluKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9yZGVyQ29sb3VyID0gY2hyb21hKGNvbG91cikuZGFya2VuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRDb2xvdXIgPSBjaHJvbWEoY29sb3VyKS5kYXJrZW4oMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG91ciA9IGNvbG91ci5hbHBoYSgwLjUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tYWluVGFnID0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nc291cmNlcy1kb21haW4tdGFnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9eydodHRwOi8vJyArIGRvbWFpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9J19ibGFuaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG91ci5oZXgoKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBib3JkZXJDb2xvdXIuaGV4KCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdGV4dENvbG91ci5oZXgoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RvbWFpbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBSZW5kZXIgY2l0YXRpb25cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJLZXlQb2ludENvbnRlbnQucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjaXRhdGlvbi1saW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nc291cmNlcy1udW1iZXInPnsoY2l0YXRpb25JbmRleCArIDEpICsgJy4nfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2NvbnRlbnQuZGF0YS51cmx9IHRhcmdldD0nX2JsYW5rJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y29udGVudC5kYXRhLnRpdGxlID8gY29udGVudC5kYXRhLnRpdGxlIDogY29udGVudC5kYXRhLnVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkb21haW5UYWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJLZXlQb2ludENvbnRlbnQucHVzaCg8YnIvPik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyS2V5UG9pbnRDb250ZW50LnB1c2goPHNwYW4gY2xhc3NOYW1lPSdzb3VyY2VzLXF1b3RlJz57Y29udGVudC5kYXRhLnF1b3RlfTwvc3Bhbj4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcktleVBvaW50Q29udGVudC5wdXNoKDxwLz4pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICArK2NpdGF0aW9uSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlckNvbnRlbnQucHVzaCg8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nc291cmNlcy1rZXktcG9pbnQnPntyZW5kZXJLZXlQb2ludENvbnRlbnR9PC9kaXY+KTtcclxuXHJcbiAgICAgICAgKytpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxWaWRlb0RldGFpbHNDb250YWluZXIgdmlkPXtwcm9wcy52aWR9IHRhYj0nc291cmNlcycgZGV0YWlscz17cHJvcHMuY29udGFpbmVyRGV0YWlsc30+XHJcbiAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT0ndmlkZW8tZGV0YWlscy1jYXJkJz5cclxuICAgICAgICAgICAgICAgIDxDYXJkLkJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbmZvLWJveCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgc2VjdGlvbiBpcyB0aGUgY2l0YXRpb25zIGFuZCBmdXJ0aGVyIHJlYWRpbmcgcHJvdmlkZWQgYnkgS3Vyemdlc2FndCBhdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9wcy5zb3VyY2VzLnVybH0gdGFyZ2V0PSdfYmxhbmsnPnsnICcgKyBwcm9wcy5zb3VyY2VzLnVybH08L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7cmVuZGVyQ29udGVudH1cclxuICAgICAgICAgICAgICAgIDwvQ2FyZC5Cb2R5PlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICA8TGFzdFVwZGF0ZWRUaW1lc3RhbXAgdGltZXN0YW1wTWlsbGlzPXtwcm9wcy5sYXN0VXBkYXRlZH0vPlxyXG4gICAgICAgIDwvVmlkZW9EZXRhaWxzQ29udGFpbmVyPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtFbmRwb2ludC51cmx9L3ZpZGVvL3NvdXJjZXMvJHtwYXJhbXMudmlkfWApO1xyXG4gICAgY29uc3Qgc291cmNlcyA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgY29uc3QgY29udGFpbmVyRGV0YWlscyA9IGF3YWl0IFZpZGVvRGV0YWlsc0NvbnRhaW5lci5mZXRjaERldGFpbHMocGFyYW1zLnZpZCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB2aWQ6IHBhcmFtcy52aWQsIFxyXG4gICAgICAgICAgICBjb250YWluZXJEZXRhaWxzOiBjb250YWluZXJEZXRhaWxzLCBcclxuXHJcbiAgICAgICAgICAgIHNvdXJjZXM6IHNvdXJjZXMsIFxyXG4gICAgICAgICAgICBsYXN0VXBkYXRlZDogc291cmNlcy5sYXN0X3VwZGF0ZWQsIFxyXG5cclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93QmFjazogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2hWaWRlb0RldGFpbHNTdGF0aWNQYXRocygpO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=