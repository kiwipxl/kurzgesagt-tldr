webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@restart/hooks/esm/useMounted.js":
/*!*******************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMounted.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useMounted; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  var isMounted = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(function () {
    return mounted.current;
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useTimeout.js":
/*!*******************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useTimeout.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useTimeout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useMounted__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMounted */ "./node_modules/@restart/hooks/esm/useMounted.js");
/* harmony import */ var _useWillUnmount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useWillUnmount */ "./node_modules/@restart/hooks/esm/useWillUnmount.js");



/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */

var MAX_DELAY_MS = Math.pow(2, 31) - 1;

function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  var delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(function () {
    return setChainedTimeout(handleRef, fn, timeoutAtMs);
  }, MAX_DELAY_MS);
}
/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 */


function useTimeout() {
  var isMounted = Object(_useMounted__WEBPACK_IMPORTED_MODULE_1__["default"])(); // types are confused between node and web here IDK

  var handleRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(_useWillUnmount__WEBPACK_IMPORTED_MODULE_2__["default"])(function () {
    return clearTimeout(handleRef.current);
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    var clear = function clear() {
      return clearTimeout(handleRef.current);
    };

    function set(fn, delayMs) {
      if (delayMs === void 0) {
        delayMs = 0;
      }

      if (!isMounted()) return;
      clear();

      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }

    return {
      set: set,
      clear: clear
    };
  }, []);
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useUpdatedRef.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useUpdatedRef.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useUpdatedRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(value);
  valueRef.current = value;
  return valueRef;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useWillUnmount.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useWillUnmount.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useWillUnmount; });
/* harmony import */ var _useUpdatedRef__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useUpdatedRef */ "./node_modules/@restart/hooks/esm/useUpdatedRef.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = Object(_useUpdatedRef__WEBPACK_IMPORTED_MODULE_0__["default"])(fn);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}

/***/ }),

/***/ "./node_modules/decode-uri-component/index.js":
false,

/***/ "./node_modules/invariant/browser.js":
false,

/***/ "./node_modules/query-string/index.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Alert.js":
false,

/***/ "./node_modules/react-bootstrap/esm/SafeAnchor.js":
false,

/***/ "./node_modules/react-bootstrap/esm/Toast.js":
/*!***************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Toast.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useTimeout */ "./node_modules/@restart/hooks/esm/useTimeout.js");
/* harmony import */ var _Fade__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fade */ "./node_modules/react-bootstrap/esm/Fade.js");
/* harmony import */ var _ToastHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ToastHeader */ "./node_modules/react-bootstrap/esm/ToastHeader.js");
/* harmony import */ var _ToastBody__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToastBody */ "./node_modules/react-bootstrap/esm/ToastBody.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _ToastContext__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ToastContext */ "./node_modules/react-bootstrap/esm/ToastContext.js");










var Toast = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$transition = _ref.transition,
      Transition = _ref$transition === void 0 ? _Fade__WEBPACK_IMPORTED_MODULE_5__["default"] : _ref$transition,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? true : _ref$show,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? true : _ref$animation,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 3000 : _ref$delay,
      _ref$autohide = _ref.autohide,
      autohide = _ref$autohide === void 0 ? false : _ref$autohide,
      onClose = _ref.onClose,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "children", "transition", "show", "animation", "delay", "autohide", "onClose"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_8__["useBootstrapPrefix"])(bsPrefix, 'toast'); // We use refs for these, because we don't want to restart the autohide
  // timer in case these values change.

  var delayRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(delay);
  var onCloseRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(onClose);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  var autohideTimeout = Object(_restart_hooks_useTimeout__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var autohideToast = !!(autohide && show);
  var autohideFunc = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // Only reset timer if show or autohide changes.
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  var toastContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return {
      onClose: onClose
    };
  }, [onClose]);
  var hasAnimation = !!(Transition && animation);
  var toast = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(bsPrefix, className, !hasAnimation && (show ? 'show' : 'hide')),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }), children);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_ToastContext__WEBPACK_IMPORTED_MODULE_9__["default"].Provider, {
    value: toastContext
  }, hasAnimation && Transition ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Transition, {
    in: show,
    unmountOnExit: true
  }, toast) : toast);
});
Toast.displayName = 'Toast';
/* harmony default export */ __webpack_exports__["default"] = (Object.assign(Toast, {
  Body: _ToastBody__WEBPACK_IMPORTED_MODULE_7__["default"],
  Header: _ToastHeader__WEBPACK_IMPORTED_MODULE_6__["default"]
}));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ToastBody.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ToastBody.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createWithBsPrefix */ "./node_modules/react-bootstrap/esm/createWithBsPrefix.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(_createWithBsPrefix__WEBPACK_IMPORTED_MODULE_0__["default"])('toast-body'));

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ToastContext.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ToastContext.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // TODO: check

var ToastContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: function onClose() {}
});
/* harmony default export */ __webpack_exports__["default"] = (ToastContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/ToastHeader.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/ToastHeader.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useEventCallback */ "./node_modules/@restart/hooks/esm/useEventCallback.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _CloseButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CloseButton */ "./node_modules/react-bootstrap/esm/CloseButton.js");
/* harmony import */ var _ToastContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ToastContext */ "./node_modules/react-bootstrap/esm/ToastContext.js");








var defaultProps = {
  closeLabel: 'Close',
  closeButton: true
};
var ToastHeader = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      className = _ref.className,
      children = _ref.children,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "closeLabel", "closeButton", "className", "children"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_5__["useBootstrapPrefix"])(bsPrefix, 'toast-header');
  var context = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_ToastContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var handleClick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(function (e) {
    if (context && context.onClose) {
      context.onClose(e);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: ref
  }, props, {
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(bsPrefix, className)
  }), children, closeButton && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_CloseButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: closeLabel,
    onClick: handleClick,
    className: "ml-2 mb-1",
    "data-dismiss": "toast"
  }));
});
ToastHeader.displayName = 'ToastHeader';
ToastHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (ToastHeader);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/createChainedFunction.js":
false,

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
false,

/***/ "./node_modules/split-on-first/index.js":
false,

/***/ "./node_modules/strict-uri-encode/index.js":
false,

/***/ "./node_modules/uncontrollable/esm/hook.js":
false,

/***/ "./node_modules/uncontrollable/esm/index.js":
false,

/***/ "./node_modules/uncontrollable/esm/uncontrollable.js":
false,

/***/ "./node_modules/uncontrollable/esm/utils.js":
false,

/***/ "./src/Endpoint.js":
false,

/***/ "./src/components/ErrorMessage.js":
false,

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
          lineNumber: 82,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Toast__WEBPACK_IMPORTED_MODULE_4__["default"].Body, {
        children: fetchError.message
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 80,
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
          lineNumber: 101,
          columnNumber: 13
        }, undefined)
      }, video.id, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
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
          lineNumber: 119,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 78,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VNb3VudGVkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQHJlc3RhcnQvaG9va3MvZXNtL3VzZVRpbWVvdXQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AcmVzdGFydC9ob29rcy9lc20vdXNlVXBkYXRlZFJlZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VXaWxsVW5tb3VudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vVG9hc3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL1RvYXN0Qm9keS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vVG9hc3RDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9Ub2FzdEhlYWRlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9GZWVkLmpzIl0sIm5hbWVzIjpbInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicm9vdFJlZiIsIlJlYWN0IiwidXNlUmVmIiwiY3VycmVudCIsIndpbmRvdyIsInNjcm9sbFRvIiwic2Nyb2xsWSIsInBhZ2UiLCJzZXRQYWdlIiwidXNlU3RhdGUiLCJpdGVtcyIsInNldEl0ZW1zIiwiaXNGZXRjaGluZyIsInNldElzRmV0Y2hpbmciLCJzdG9wRmV0Y2hpbmciLCJzZXRTdG9wRmV0Y2hpbmciLCJmZXRjaEVycm9yIiwic2V0RmV0Y2hFcnJvciIsInVzZUVmZmVjdCIsImZldGNoIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJuZXdJdGVtcyIsImNvbmNhdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwib25TY3JvbGwiLCJldiIsImZpcnN0RWxlbWVudENoaWxkIiwicm9vdFJlZkJvdHRvbSIsImdldENsaWVudFJlY3RzIiwiYm90dG9tIiwiY2FyZEhlaWdodFBhZGRpbmciLCJjYXJkSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm1lc3NhZ2UiLCJtYXAiLCJ2aWRlbyIsInRodW1ibmFpbCIsInRodW1ibmFpbHMiLCJtYXhyZXNVcmwiLCJzdGFuZGFyZFVybCIsImhpZ2hVcmwiLCJtZWRpdW1VcmwiLCJkZWZhdWx0VXJsIiwiaWQiLCJ0aXRsZSIsIm51bVZpZXdzIiwicHVibGlzaGVkQXQiLCJkdXJhdGlvbiIsIm9uVmlkZW9DbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLElBQUk7QUFDSjtBQUNBOztBQUVlO0FBQ2YsZ0JBQWdCLG9EQUFNO0FBQ3RCLGtCQUFrQixvREFBTTtBQUN4QjtBQUNBLEdBQUc7QUFDSCxFQUFFLHVEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3QztBQUNGO0FBQ1E7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHZTtBQUNmLGtCQUFrQiwyREFBVSxHQUFHOztBQUUvQixrQkFBa0Isb0RBQU07QUFDeEIsRUFBRSwrREFBYztBQUNoQjtBQUNBLEdBQUc7QUFDSCxTQUFTLHFEQUFPO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDM0RBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLGlCQUFpQixvREFBTTtBQUN2QjtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUNWO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmLGtCQUFrQiw4REFBYTtBQUMvQixFQUFFLHVEQUFTO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEwRDtBQUMwQztBQUM3QjtBQUNuQztBQUNlO0FBQ3pCO0FBQ2M7QUFDSjtBQUNpQjtBQUNYO0FBQzFDLFlBQVksNENBQUs7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsNkNBQUk7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1R0FBNkI7O0FBRTNDLGFBQWEseUVBQWtCLG9CQUFvQjtBQUNuRDs7QUFFQSxpQkFBaUIsb0RBQU07QUFDdkIsbUJBQW1CLG9EQUFNO0FBQ3pCLEVBQUUsdURBQVM7QUFDWDtBQUNBO0FBQ0EsR0FBRztBQUNILHdCQUF3Qix5RUFBVTtBQUNsQztBQUNBLHFCQUFxQix5REFBVztBQUNoQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRSx1REFBUztBQUNYO0FBQ0E7QUFDQSxHQUFHO0FBQ0gscUJBQXFCLHFEQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDJCQUEyQiw0Q0FBSyxzQkFBc0Isa0ZBQVEsR0FBRztBQUNqRTtBQUNBLGVBQWUsaURBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQiw0Q0FBSyxlQUFlLHFEQUFZO0FBQ3REO0FBQ0EsR0FBRyw0Q0FBNEMsNENBQUs7QUFDcEQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDZTtBQUNmLFFBQVEsa0RBQVM7QUFDakIsVUFBVSxvREFBVztBQUNyQixDQUFDLENBQUMsRTs7Ozs7Ozs7Ozs7O0FDdkVGO0FBQUE7QUFBc0Q7QUFDdkMsa0lBQWtCLGNBQWMsRTs7Ozs7Ozs7Ozs7O0FDRC9DO0FBQUE7QUFBQTtBQUEwQjs7QUFFMUIsbUJBQW1CLDRDQUFLO0FBQ3hCO0FBQ0E7QUFDQSxDQUFDO0FBQ2MsMkVBQVksRTs7Ozs7Ozs7Ozs7O0FDTjNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMEQ7QUFDMEM7QUFDaEU7QUFDTTtBQUNxQjtBQUNWO0FBQ2I7QUFDRTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiw0Q0FBSztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyx1R0FBNkI7O0FBRTNDLGFBQWEseUVBQWtCO0FBQy9CLGdCQUFnQix3REFBVSxDQUFDLHFEQUFZO0FBQ3ZDLG9CQUFvQiwrRUFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNCQUFzQiw0Q0FBSyxzQkFBc0Isa0ZBQVE7QUFDekQ7QUFDQSxHQUFHO0FBQ0gsZUFBZSxpREFBVTtBQUN6QixHQUFHLHlDQUF5Qyw0Q0FBSyxlQUFlLG9EQUFXO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ2UsMEVBQVcsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsa0VBQUNBLEtBQUQsSUFBVztBQUFBOztBQUN4QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTUMsT0FBTyxHQUFHQyw0Q0FBSyxDQUFDQyxNQUFOLENBQWEsSUFBYixDQUFoQjs7QUFDQSxNQUFJLENBQUNGLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNHLE9BQXpCLEVBQWtDO0FBQ2hDO0FBQ0E7QUFDQTtBQUVBLGNBQW1DO0FBQ2pDQyxZQUFNLENBQUNDLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUJSLEtBQUssQ0FBQ1MsT0FBTixJQUFpQixDQUFwQztBQUNEO0FBQ0Y7O0FBRUQsUUFBTSxDQUFDQyxJQUFELEVBQU9DLE9BQVAsSUFBa0JQLDRDQUFLLENBQUNRLFFBQU4sQ0FBZSxDQUFmLENBQXhCO0FBQ0EsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFBb0JWLDRDQUFLLENBQUNRLFFBQU4sQ0FBZVosS0FBSyxDQUFDYSxLQUFOLElBQWUsRUFBOUIsQ0FBMUI7QUFDQSxRQUFNLENBQUNFLFVBQUQsRUFBYUMsYUFBYixJQUE4QlosNENBQUssQ0FBQ1EsUUFBTixDQUFlLEtBQWYsQ0FBcEM7QUFDQSxRQUFNLENBQUNLLFlBQUQsRUFBZUMsZUFBZixJQUFrQ2QsNENBQUssQ0FBQ1EsUUFBTixDQUFlLEtBQWYsQ0FBeEM7QUFDQSxRQUFNLENBQUNPLFVBQUQsRUFBYUMsYUFBYixJQUE4QmhCLDRDQUFLLENBQUNRLFFBQU4sRUFBcEM7QUFFQVIsOENBQUssQ0FBQ2lCLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQixRQUFJLENBQUNOLFVBQUQsSUFBZUUsWUFBbkIsRUFBaUM7QUFDL0I7QUFDRDs7QUFFREssU0FBSyxDQUFFLDBCQUF5QlosSUFBSSxHQUFHLENBQUUsT0FBcEMsQ0FBTCxDQUNHYSxJQURILENBQ1FDLEdBQUcsSUFBSTtBQUNYLFVBQUlBLEdBQUcsQ0FBQ0MsTUFBSixJQUFjLEdBQWxCLEVBQXVCO0FBQ3JCUCx1QkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBO0FBQ0Q7O0FBRUQsYUFBT00sR0FBRyxDQUFDRSxJQUFKLEVBQVA7QUFDRCxLQVJILEVBU0dILElBVEgsQ0FTUUksUUFBUSxJQUFJO0FBQ2hCLFVBQUksQ0FBQ0EsUUFBTCxFQUFlO0FBQ2I7QUFDRDs7QUFFRGhCLGFBQU8sQ0FBQ0QsSUFBSSxHQUFHLENBQVIsQ0FBUDtBQUNBSSxjQUFRLENBQUNELEtBQUssQ0FBQ2UsTUFBTixDQUFhRCxRQUFiLENBQUQsQ0FBUjtBQUNBWCxtQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNELEtBakJILEVBa0JHYSxLQWxCSCxDQWtCU0MsR0FBRyxJQUFJO0FBQ1pDLGFBQU8sQ0FBQ0MsS0FBUixDQUFjLHdCQUFkLEVBQXdDRixHQUF4QztBQUVBWixxQkFBZSxDQUFDLElBQUQsQ0FBZjtBQUNBRSxtQkFBYSxDQUFDVSxHQUFELENBQWI7QUFDRCxLQXZCSDtBQXdCRCxHQTdCRCxFQTZCRyxDQUFDZixVQUFELENBN0JIOztBQStCQSxXQUFTa0IsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0I7QUFDcEIsUUFBSSxDQUFDL0IsT0FBTyxDQUFDRyxPQUFULElBQW9CLENBQUNILE9BQU8sQ0FBQ0csT0FBUixDQUFnQjZCLGlCQUF6QyxFQUE0RDtBQUMxRDtBQUNEOztBQUVELFVBQU1DLGFBQWEsR0FBR2pDLE9BQU8sQ0FBQ0csT0FBUixDQUFnQitCLGNBQWhCLEdBQWlDLENBQWpDLEVBQW9DQyxNQUExRDtBQUNBLFVBQU1DLGlCQUFpQixHQUFHLEdBQTFCLENBTm9CLENBTVc7O0FBQy9CLFVBQU1DLFVBQVUsR0FBR3JDLE9BQU8sQ0FBQ0csT0FBUixDQUFnQjZCLGlCQUFoQixDQUFrQ00sWUFBbEMsR0FBaURGLGlCQUFwRTs7QUFFQSxRQUFJSCxhQUFhLEdBQUdJLFVBQWhCLElBQThCakMsTUFBTSxDQUFDbUMsV0FBekMsRUFBc0Q7QUFDcEQxQixtQkFBYSxDQUFDLElBQUQsQ0FBYjtBQUNEO0FBQ0Y7O0FBQUE7QUFFRFosOENBQUssQ0FBQ2lCLFNBQU4sQ0FBZ0IsTUFBTTtBQUNwQmQsVUFBTSxDQUFDb0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NWLFFBQWxDO0FBRUEsV0FBTyxNQUFNMUIsTUFBTSxDQUFDcUMsbUJBQVAsQ0FBMkIsUUFBM0IsRUFBcUNYLFFBQXJDLENBQWI7QUFDRCxHQUpELEVBSUcsRUFKSDtBQU1BLHNCQUNFO0FBQUssT0FBRyxFQUFFOUIsT0FBVjtBQUFtQixhQUFTLEVBQUMsWUFBN0I7QUFBQSxlQUNHZ0IsVUFBVSxpQkFDVCxxRUFBQyw2REFBRDtBQUFPLGVBQVMsRUFBQyxZQUFqQjtBQUFBLDhCQUNFLHFFQUFDLDZEQUFELENBQU8sTUFBUDtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFLHFFQUFDLDZEQUFELENBQU8sSUFBUDtBQUFBLGtCQUNHQSxVQUFVLENBQUMwQjtBQURkO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZKLEVBYUdoQyxLQUFLLENBQUNpQyxHQUFOLENBQVVDLEtBQUssSUFBSTtBQUNsQixZQUFNQyxTQUFTLEdBQ2JELEtBQUssQ0FBQ0UsVUFBTixDQUFpQkMsU0FBakIsSUFDQUgsS0FBSyxDQUFDRSxVQUFOLENBQWlCRSxXQURqQixJQUVBSixLQUFLLENBQUNFLFVBQU4sQ0FBaUJHLE9BRmpCLElBR0FMLEtBQUssQ0FBQ0UsVUFBTixDQUFpQkksU0FIakIsSUFJQU4sS0FBSyxDQUFDRSxVQUFOLENBQWlCSyxVQUxuQjtBQU9BLDBCQUNFO0FBQW9CLGlCQUFTLEVBQUMsMkJBQTlCO0FBQUEsK0JBQ0UscUVBQUMsa0RBQUQ7QUFDRSxZQUFFLEVBQUVQLEtBQUssQ0FBQ1EsRUFEWjtBQUVFLGVBQUssRUFBRVIsS0FBSyxDQUFDUyxLQUZmO0FBR0Usa0JBQVEsRUFBRVQsS0FBSyxDQUFDVSxRQUhsQjtBQUlFLHFCQUFXLEVBQUVWLEtBQUssQ0FBQ1csV0FKckI7QUFLRSxtQkFBUyxFQUFFVixTQUxiO0FBTUUsa0JBQVEsRUFBRUQsS0FBSyxDQUFDWSxRQU5sQjtBQU9FLGlCQUFPLEVBQUUsTUFBTTNELEtBQUssQ0FBQzRELFlBQU4sSUFBc0I1RCxLQUFLLENBQUM0RCxZQUFOLENBQW1CYixLQUFLLENBQUNRLEVBQXpCLEVBQTZCMUMsS0FBN0I7QUFQdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLFNBQVVrQyxLQUFLLENBQUNRLEVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREY7QUFlRCxLQXZCQSxDQWJILEVBc0NHeEMsVUFBVSxJQUFJLENBQUNFLFlBQWYsaUJBQ0M7QUFBSyxlQUFTLEVBQUMsb0JBQWY7QUFBQSw2QkFDRSxxRUFBQywrREFBRDtBQUFTLGlCQUFTLEVBQUMsUUFBbkI7QUFBNEIsWUFBSSxFQUFDLFFBQWpDO0FBQUEsK0JBQ0U7QUFBTSxtQkFBUyxFQUFDLFNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBdkNKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZ0RELENBdEhEO0FBQUEsVUFDaUJmLHFEQURqQjtBQUFBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNhNzhkMjJiMDQzODgwNWRmZTQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0Jztcbi8qKlxuICogVHJhY2sgd2hldGhlciBhIGNvbXBvbmVudCBpcyBjdXJyZW50IG1vdW50ZWQuIEdlbmVyYWxseSBsZXNzIHByZWZlcmFibGUgdGhhblxuICogcHJvcGVybGx5IGNhbmNlbGluZyBlZmZlY3RzIHNvIHRoZXkgZG9uJ3QgcnVuIGFmdGVyIGEgY29tcG9uZW50IGlzIHVubW91bnRlZCxcbiAqIGJ1dCBoZWxwZnVsIGluIGNhc2VzIHdoZXJlIHRoYXQgaXNuJ3QgZmVhc2libGUsIHN1Y2ggYXMgYSBgUHJvbWlzZWAgcmVzb2x1dGlvbi5cbiAqXG4gKiBAcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudCBpc01vdW50ZWQgc3RhdGUgb2YgdGhlIGNvbXBvbmVudFxuICpcbiAqIGBgYHRzXG4gKiBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKVxuICogY29uc3QgaXNNb3VudGVkID0gdXNlTW91bnRlZCgpXG4gKlxuICogdXNlRWZmZWN0KCgpID0+IHtcbiAqICAgZmV0Y2hkYXRhKCkudGhlbigobmV3RGF0YSkgPT4ge1xuICogICAgICBpZiAoaXNNb3VudGVkKCkpIHtcbiAqICAgICAgICBzZXREYXRhKG5ld0RhdGEpO1xuICogICAgICB9XG4gKiAgIH0pXG4gKiB9KVxuICogYGBgXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlTW91bnRlZCgpIHtcbiAgdmFyIG1vdW50ZWQgPSB1c2VSZWYodHJ1ZSk7XG4gIHZhciBpc01vdW50ZWQgPSB1c2VSZWYoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtb3VudGVkLmN1cnJlbnQ7XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBtb3VudGVkLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHJldHVybiBpc01vdW50ZWQuY3VycmVudDtcbn0iLCJpbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlTW91bnRlZCBmcm9tICcuL3VzZU1vdW50ZWQnO1xuaW1wb3J0IHVzZVdpbGxVbm1vdW50IGZyb20gJy4vdXNlV2lsbFVubW91bnQnO1xuLypcbiAqIEJyb3dzZXJzIGluY2x1ZGluZyBJbnRlcm5ldCBFeHBsb3JlciwgQ2hyb21lLCBTYWZhcmksIGFuZCBGaXJlZm94IHN0b3JlIHRoZVxuICogZGVsYXkgYXMgYSAzMi1iaXQgc2lnbmVkIGludGVnZXIgaW50ZXJuYWxseS4gVGhpcyBjYXVzZXMgYW4gaW50ZWdlciBvdmVyZmxvd1xuICogd2hlbiB1c2luZyBkZWxheXMgbGFyZ2VyIHRoYW4gMiwxNDcsNDgzLDY0NyBtcyAoYWJvdXQgMjQuOCBkYXlzKSxcbiAqIHJlc3VsdGluZyBpbiB0aGUgdGltZW91dCBiZWluZyBleGVjdXRlZCBpbW1lZGlhdGVseS5cbiAqXG4gKiB2aWE6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dPcldvcmtlckdsb2JhbFNjb3BlL3NldFRpbWVvdXRcbiAqL1xuXG52YXIgTUFYX0RFTEFZX01TID0gTWF0aC5wb3coMiwgMzEpIC0gMTtcblxuZnVuY3Rpb24gc2V0Q2hhaW5lZFRpbWVvdXQoaGFuZGxlUmVmLCBmbiwgdGltZW91dEF0TXMpIHtcbiAgdmFyIGRlbGF5TXMgPSB0aW1lb3V0QXRNcyAtIERhdGUubm93KCk7XG4gIGhhbmRsZVJlZi5jdXJyZW50ID0gZGVsYXlNcyA8PSBNQVhfREVMQVlfTVMgPyBzZXRUaW1lb3V0KGZuLCBkZWxheU1zKSA6IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBzZXRDaGFpbmVkVGltZW91dChoYW5kbGVSZWYsIGZuLCB0aW1lb3V0QXRNcyk7XG4gIH0sIE1BWF9ERUxBWV9NUyk7XG59XG4vKipcbiAqIFJldHVybnMgYSBjb250cm9sbGVyIG9iamVjdCBmb3Igc2V0dGluZyBhIHRpbWVvdXQgdGhhdCBpcyBwcm9wZXJseSBjbGVhbmVkIHVwXG4gKiBvbmNlIHRoZSBjb21wb25lbnQgdW5tb3VudHMuIE5ldyB0aW1lb3V0cyBjYW5jZWwgYW5kIHJlcGxhY2UgZXhpc3Rpbmcgb25lcy5cbiAqL1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVRpbWVvdXQoKSB7XG4gIHZhciBpc01vdW50ZWQgPSB1c2VNb3VudGVkKCk7IC8vIHR5cGVzIGFyZSBjb25mdXNlZCBiZXR3ZWVuIG5vZGUgYW5kIHdlYiBoZXJlIElES1xuXG4gIHZhciBoYW5kbGVSZWYgPSB1c2VSZWYoKTtcbiAgdXNlV2lsbFVubW91bnQoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaGFuZGxlUmVmLmN1cnJlbnQpO1xuICB9KTtcbiAgcmV0dXJuIHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbGVhciA9IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChoYW5kbGVSZWYuY3VycmVudCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHNldChmbiwgZGVsYXlNcykge1xuICAgICAgaWYgKGRlbGF5TXMgPT09IHZvaWQgMCkge1xuICAgICAgICBkZWxheU1zID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc01vdW50ZWQoKSkgcmV0dXJuO1xuICAgICAgY2xlYXIoKTtcblxuICAgICAgaWYgKGRlbGF5TXMgPD0gTUFYX0RFTEFZX01TKSB7XG4gICAgICAgIC8vIEZvciBzaW1wbGljaXR5LCBpZiB0aGUgdGltZW91dCBpcyBzaG9ydCwganVzdCBzZXQgYSBub3JtYWwgdGltZW91dC5cbiAgICAgICAgaGFuZGxlUmVmLmN1cnJlbnQgPSBzZXRUaW1lb3V0KGZuLCBkZWxheU1zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldENoYWluZWRUaW1lb3V0KGhhbmRsZVJlZiwgZm4sIERhdGUubm93KCkgKyBkZWxheU1zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgc2V0OiBzZXQsXG4gICAgICBjbGVhcjogY2xlYXJcbiAgICB9O1xuICB9LCBbXSk7XG59IiwiaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBSZXR1cm5zIGEgcmVmIHRoYXQgaXMgaW1tZWRpYXRlbHkgdXBkYXRlZCB3aXRoIHRoZSBuZXcgdmFsdWVcbiAqXG4gKiBAcGFyYW0gdmFsdWUgVGhlIFJlZiB2YWx1ZVxuICogQGNhdGVnb3J5IHJlZnNcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VVcGRhdGVkUmVmKHZhbHVlKSB7XG4gIHZhciB2YWx1ZVJlZiA9IHVzZVJlZih2YWx1ZSk7XG4gIHZhbHVlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgcmV0dXJuIHZhbHVlUmVmO1xufSIsImltcG9ydCB1c2VVcGRhdGVkUmVmIGZyb20gJy4vdXNlVXBkYXRlZFJlZic7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIEF0dGFjaCBhIGNhbGxiYWNrIHRoYXQgZmlyZXMgd2hlbiBhIGNvbXBvbmVudCB1bm1vdW50c1xuICpcbiAqIEBwYXJhbSBmbiBIYW5kbGVyIHRvIHJ1biB3aGVuIHRoZSBjb21wb25lbnQgdW5tb3VudHNcbiAqIEBjYXRlZ29yeSBlZmZlY3RzXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlV2lsbFVubW91bnQoZm4pIHtcbiAgdmFyIG9uVW5tb3VudCA9IHVzZVVwZGF0ZWRSZWYoZm4pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gb25Vbm1vdW50LmN1cnJlbnQoKTtcbiAgICB9O1xuICB9LCBbXSk7XG59IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZU1lbW8sIHVzZVJlZiwgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB1c2VUaW1lb3V0IGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZVRpbWVvdXQnO1xuaW1wb3J0IEZhZGUgZnJvbSAnLi9GYWRlJztcbmltcG9ydCBUb2FzdEhlYWRlciBmcm9tICcuL1RvYXN0SGVhZGVyJztcbmltcG9ydCBUb2FzdEJvZHkgZnJvbSAnLi9Ub2FzdEJvZHknO1xuaW1wb3J0IHsgdXNlQm9vdHN0cmFwUHJlZml4IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCBUb2FzdENvbnRleHQgZnJvbSAnLi9Ub2FzdENvbnRleHQnO1xudmFyIFRvYXN0ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIF9yZWYkdHJhbnNpdGlvbiA9IF9yZWYudHJhbnNpdGlvbixcbiAgICAgIFRyYW5zaXRpb24gPSBfcmVmJHRyYW5zaXRpb24gPT09IHZvaWQgMCA/IEZhZGUgOiBfcmVmJHRyYW5zaXRpb24sXG4gICAgICBfcmVmJHNob3cgPSBfcmVmLnNob3csXG4gICAgICBzaG93ID0gX3JlZiRzaG93ID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRzaG93LFxuICAgICAgX3JlZiRhbmltYXRpb24gPSBfcmVmLmFuaW1hdGlvbixcbiAgICAgIGFuaW1hdGlvbiA9IF9yZWYkYW5pbWF0aW9uID09PSB2b2lkIDAgPyB0cnVlIDogX3JlZiRhbmltYXRpb24sXG4gICAgICBfcmVmJGRlbGF5ID0gX3JlZi5kZWxheSxcbiAgICAgIGRlbGF5ID0gX3JlZiRkZWxheSA9PT0gdm9pZCAwID8gMzAwMCA6IF9yZWYkZGVsYXksXG4gICAgICBfcmVmJGF1dG9oaWRlID0gX3JlZi5hdXRvaGlkZSxcbiAgICAgIGF1dG9oaWRlID0gX3JlZiRhdXRvaGlkZSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcmVmJGF1dG9oaWRlLFxuICAgICAgb25DbG9zZSA9IF9yZWYub25DbG9zZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcInRyYW5zaXRpb25cIiwgXCJzaG93XCIsIFwiYW5pbWF0aW9uXCIsIFwiZGVsYXlcIiwgXCJhdXRvaGlkZVwiLCBcIm9uQ2xvc2VcIl0pO1xuXG4gIGJzUHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAndG9hc3QnKTsgLy8gV2UgdXNlIHJlZnMgZm9yIHRoZXNlLCBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gcmVzdGFydCB0aGUgYXV0b2hpZGVcbiAgLy8gdGltZXIgaW4gY2FzZSB0aGVzZSB2YWx1ZXMgY2hhbmdlLlxuXG4gIHZhciBkZWxheVJlZiA9IHVzZVJlZihkZWxheSk7XG4gIHZhciBvbkNsb3NlUmVmID0gdXNlUmVmKG9uQ2xvc2UpO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGRlbGF5UmVmLmN1cnJlbnQgPSBkZWxheTtcbiAgICBvbkNsb3NlUmVmLmN1cnJlbnQgPSBvbkNsb3NlO1xuICB9LCBbZGVsYXksIG9uQ2xvc2VdKTtcbiAgdmFyIGF1dG9oaWRlVGltZW91dCA9IHVzZVRpbWVvdXQoKTtcbiAgdmFyIGF1dG9oaWRlVG9hc3QgPSAhIShhdXRvaGlkZSAmJiBzaG93KTtcbiAgdmFyIGF1dG9oaWRlRnVuYyA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXV0b2hpZGVUb2FzdCkge1xuICAgICAgb25DbG9zZVJlZi5jdXJyZW50ID09IG51bGwgPyB2b2lkIDAgOiBvbkNsb3NlUmVmLmN1cnJlbnQoKTtcbiAgICB9XG4gIH0sIFthdXRvaGlkZVRvYXN0XSk7XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgLy8gT25seSByZXNldCB0aW1lciBpZiBzaG93IG9yIGF1dG9oaWRlIGNoYW5nZXMuXG4gICAgYXV0b2hpZGVUaW1lb3V0LnNldChhdXRvaGlkZUZ1bmMsIGRlbGF5UmVmLmN1cnJlbnQpO1xuICB9LCBbYXV0b2hpZGVUaW1lb3V0LCBhdXRvaGlkZUZ1bmNdKTtcbiAgdmFyIHRvYXN0Q29udGV4dCA9IHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvbkNsb3NlOiBvbkNsb3NlXG4gICAgfTtcbiAgfSwgW29uQ2xvc2VdKTtcbiAgdmFyIGhhc0FuaW1hdGlvbiA9ICEhKFRyYW5zaXRpb24gJiYgYW5pbWF0aW9uKTtcbiAgdmFyIHRvYXN0ID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGJzUHJlZml4LCBjbGFzc05hbWUsICFoYXNBbmltYXRpb24gJiYgKHNob3cgPyAnc2hvdycgOiAnaGlkZScpKSxcbiAgICByb2xlOiBcImFsZXJ0XCIsXG4gICAgXCJhcmlhLWxpdmVcIjogXCJhc3NlcnRpdmVcIixcbiAgICBcImFyaWEtYXRvbWljXCI6IFwidHJ1ZVwiXG4gIH0pLCBjaGlsZHJlbik7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUb2FzdENvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogdG9hc3RDb250ZXh0XG4gIH0sIGhhc0FuaW1hdGlvbiAmJiBUcmFuc2l0aW9uID8gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoVHJhbnNpdGlvbiwge1xuICAgIGluOiBzaG93LFxuICAgIHVubW91bnRPbkV4aXQ6IHRydWVcbiAgfSwgdG9hc3QpIDogdG9hc3QpO1xufSk7XG5Ub2FzdC5kaXNwbGF5TmFtZSA9ICdUb2FzdCc7XG5leHBvcnQgZGVmYXVsdCBPYmplY3QuYXNzaWduKFRvYXN0LCB7XG4gIEJvZHk6IFRvYXN0Qm9keSxcbiAgSGVhZGVyOiBUb2FzdEhlYWRlclxufSk7IiwiaW1wb3J0IGNyZWF0ZVdpdGhCc1ByZWZpeCBmcm9tICcuL2NyZWF0ZVdpdGhCc1ByZWZpeCc7XG5leHBvcnQgZGVmYXVsdCBjcmVhdGVXaXRoQnNQcmVmaXgoJ3RvYXN0LWJvZHknKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyAvLyBUT0RPOiBjaGVja1xuXG52YXIgVG9hc3RDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktZnVuY3Rpb25cbiAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHt9XG59KTtcbmV4cG9ydCBkZWZhdWx0IFRvYXN0Q29udGV4dDsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2snO1xuaW1wb3J0IHsgdXNlQm9vdHN0cmFwUHJlZml4IH0gZnJvbSAnLi9UaGVtZVByb3ZpZGVyJztcbmltcG9ydCBDbG9zZUJ1dHRvbiBmcm9tICcuL0Nsb3NlQnV0dG9uJztcbmltcG9ydCBUb2FzdENvbnRleHQgZnJvbSAnLi9Ub2FzdENvbnRleHQnO1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgY2xvc2VMYWJlbDogJ0Nsb3NlJyxcbiAgY2xvc2VCdXR0b246IHRydWVcbn07XG52YXIgVG9hc3RIZWFkZXIgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGJzUHJlZml4ID0gX3JlZi5ic1ByZWZpeCxcbiAgICAgIGNsb3NlTGFiZWwgPSBfcmVmLmNsb3NlTGFiZWwsXG4gICAgICBjbG9zZUJ1dHRvbiA9IF9yZWYuY2xvc2VCdXR0b24sXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiYnNQcmVmaXhcIiwgXCJjbG9zZUxhYmVsXCIsIFwiY2xvc2VCdXR0b25cIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiXSk7XG5cbiAgYnNQcmVmaXggPSB1c2VCb290c3RyYXBQcmVmaXgoYnNQcmVmaXgsICd0b2FzdC1oZWFkZXInKTtcbiAgdmFyIGNvbnRleHQgPSB1c2VDb250ZXh0KFRvYXN0Q29udGV4dCk7XG4gIHZhciBoYW5kbGVDbGljayA9IHVzZUV2ZW50Q2FsbGJhY2soZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Lm9uQ2xvc2UpIHtcbiAgICAgIGNvbnRleHQub25DbG9zZShlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmXG4gIH0sIHByb3BzLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGJzUHJlZml4LCBjbGFzc05hbWUpXG4gIH0pLCBjaGlsZHJlbiwgY2xvc2VCdXR0b24gJiYgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2xvc2VCdXR0b24sIHtcbiAgICBsYWJlbDogY2xvc2VMYWJlbCxcbiAgICBvbkNsaWNrOiBoYW5kbGVDbGljayxcbiAgICBjbGFzc05hbWU6IFwibWwtMiBtYi0xXCIsXG4gICAgXCJkYXRhLWRpc21pc3NcIjogXCJ0b2FzdFwiXG4gIH0pKTtcbn0pO1xuVG9hc3RIZWFkZXIuZGlzcGxheU5hbWUgPSAnVG9hc3RIZWFkZXInO1xuVG9hc3RIZWFkZXIuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzO1xuZXhwb3J0IGRlZmF1bHQgVG9hc3RIZWFkZXI7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgU3Bpbm5lciBmcm9tICdyZWFjdC1ib290c3RyYXAvU3Bpbm5lcic7XHJcbmltcG9ydCBUb2FzdCBmcm9tICdyZWFjdC1ib290c3RyYXAvVG9hc3QnO1xyXG5pbXBvcnQgVmlkZW9DYXJkIGZyb20gJy4vVmlkZW9DYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHJvb3RSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgaWYgKCFyb290UmVmIHx8ICFyb290UmVmLmN1cnJlbnQpIHtcclxuICAgIC8vIGZpcnN0IHRpbWUgcmVuZGVyLCBsZXQncyBzY3JvbGwgaW1tZWRpYXRlbHkhXHJcbiAgICAvLyB3ZSBjb3VsZCBwdXQgdGhpcyBpbiB1c2VFZmZlY3QsIGJ1dCB0aGF0IHdpbGwgaGFwZW4gYWZ0ZXIgcmVuZGVyIGFuZFxyXG4gICAgLy8gdGhlcmUgd2lsbCBiZSBhIGRlbGF5IGFzIGEgcmVzdWx0LlxyXG5cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgcHJvcHMuc2Nyb2xsWSB8fCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEpO1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUocHJvcHMuaXRlbXMgfHwgW10pO1xyXG4gIGNvbnN0IFtpc0ZldGNoaW5nLCBzZXRJc0ZldGNoaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbc3RvcEZldGNoaW5nLCBzZXRTdG9wRmV0Y2hpbmddID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtmZXRjaEVycm9yLCBzZXRGZXRjaEVycm9yXSA9IFJlYWN0LnVzZVN0YXRlKCk7XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWlzRmV0Y2hpbmcgfHwgc3RvcEZldGNoaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChgaHR0cDovL3d3dy5nby9mZWVkL3BhZ2Uke3BhZ2UgKyAxfS5qc29uYClcclxuICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSA0MDQpIHtcclxuICAgICAgICAgIHNldFN0b3BGZXRjaGluZyh0cnVlKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbihuZXdJdGVtcyA9PiB7XHJcbiAgICAgICAgaWYgKCFuZXdJdGVtcykge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0UGFnZShwYWdlICsgMSk7XHJcbiAgICAgICAgc2V0SXRlbXMoaXRlbXMuY29uY2F0KG5ld0l0ZW1zKSk7XHJcbiAgICAgICAgc2V0SXNGZXRjaGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3ZpZGVvIGZlZWQgZmV0Y2ggZXJyb3InLCBlcnIpO1xyXG5cclxuICAgICAgICBzZXRTdG9wRmV0Y2hpbmcodHJ1ZSk7XHJcbiAgICAgICAgc2V0RmV0Y2hFcnJvcihlcnIpO1xyXG4gICAgICB9KTtcclxuICB9LCBbaXNGZXRjaGluZ10pO1xyXG5cclxuICBmdW5jdGlvbiBvblNjcm9sbChldikge1xyXG4gICAgaWYgKCFyb290UmVmLmN1cnJlbnQgfHwgIXJvb3RSZWYuY3VycmVudC5maXJzdEVsZW1lbnRDaGlsZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgcm9vdFJlZkJvdHRvbSA9IHJvb3RSZWYuY3VycmVudC5nZXRDbGllbnRSZWN0cygpWzBdLmJvdHRvbTtcclxuICAgIGNvbnN0IGNhcmRIZWlnaHRQYWRkaW5nID0gMTAwOyAvLyByb3VnaCB2YWx1ZSwgZ29vZCBlbm91Z2hcclxuICAgIGNvbnN0IGNhcmRIZWlnaHQgPSByb290UmVmLmN1cnJlbnQuZmlyc3RFbGVtZW50Q2hpbGQuY2xpZW50SGVpZ2h0ICsgY2FyZEhlaWdodFBhZGRpbmc7XHJcblxyXG4gICAgaWYgKHJvb3RSZWZCb3R0b20gLSBjYXJkSGVpZ2h0IDw9IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICBzZXRJc0ZldGNoaW5nKHRydWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgcmVmPXtyb290UmVmfSBjbGFzc05hbWU9XCJ2aWRlby1mZWVkXCI+XHJcbiAgICAgIHtmZXRjaEVycm9yICYmIFxyXG4gICAgICAgIDxUb2FzdCBjbGFzc05hbWU9J2ZlZWQtZXJyb3InPlxyXG4gICAgICAgICAgPFRvYXN0LkhlYWRlcj5cclxuICAgICAgICAgICAgPHN0cm9uZz5FcnJvciB3aGVuIGxvYWRpbmcgZmVlZDwvc3Ryb25nPlxyXG4gICAgICAgICAgPC9Ub2FzdC5IZWFkZXI+XHJcblxyXG4gICAgICAgICAgPFRvYXN0LkJvZHk+XHJcbiAgICAgICAgICAgIHtmZXRjaEVycm9yLm1lc3NhZ2V9XHJcbiAgICAgICAgICA8L1RvYXN0LkJvZHk+XHJcbiAgICAgICAgPC9Ub2FzdD5cclxuICAgICAgfVxyXG5cclxuICAgICAge2l0ZW1zLm1hcCh2aWRlbyA9PiB7XHJcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsID0gXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLm1heHJlc1VybCB8fCBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMuc3RhbmRhcmRVcmwgfHwgXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLmhpZ2hVcmwgfHwgXHJcbiAgICAgICAgICB2aWRlby50aHVtYm5haWxzLm1lZGl1bVVybCB8fCBcclxuICAgICAgICAgIHZpZGVvLnRodW1ibmFpbHMuZGVmYXVsdFVybDtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxkaXYga2V5PXt2aWRlby5pZH0gY2xhc3NOYW1lPVwidmlkZW8tZmVlZC1jYXJkLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8VmlkZW9DYXJkXHJcbiAgICAgICAgICAgICAgaWQ9e3ZpZGVvLmlkfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXt2aWRlby50aXRsZX1cclxuICAgICAgICAgICAgICBudW1WaWV3cz17dmlkZW8ubnVtVmlld3N9XHJcbiAgICAgICAgICAgICAgcHVibGlzaGVkQXQ9e3ZpZGVvLnB1Ymxpc2hlZEF0fVxyXG4gICAgICAgICAgICAgIHRodW1ibmFpbD17dGh1bWJuYWlsfVxyXG4gICAgICAgICAgICAgIGR1cmF0aW9uPXt2aWRlby5kdXJhdGlvbn1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBwcm9wcy5vblZpZGVvQ2xpY2sgJiYgcHJvcHMub25WaWRlb0NsaWNrKHZpZGVvLmlkLCBpdGVtcyl9XHJcbiAgICAgICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDwvVmlkZW9DYXJkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcblxyXG4gICAgICB7aXNGZXRjaGluZyAmJiAhc3RvcEZldGNoaW5nICYmIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8tZmVlZC1zcGlubmVyXCI+XHJcbiAgICAgICAgICA8U3Bpbm5lciBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxyXG4gICAgICAgICAgPC9TcGlubmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==