webpackHotUpdate_N_E("pages/video/[vid]",{

/***/ "./node_modules/@restart/hooks/esm/useForceUpdate.js":
/*!***********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useForceUpdate.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useForceUpdate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

/***/ }),

/***/ "./node_modules/@restart/hooks/esm/useMergedRefs.js":
/*!**********************************************************!*\
  !*** ./node_modules/@restart/hooks/esm/useMergedRefs.js ***!
  \**********************************************************/
/*! exports provided: mergeRefs, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeRefs", function() { return mergeRefs; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ __webpack_exports__["default"] = (useMergedRefs);

/***/ }),

/***/ "./node_modules/dom-helpers/esm/querySelectorAll.js":
/*!**********************************************************!*\
  !*** ./node_modules/dom-helpers/esm/querySelectorAll.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return qsa; });
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/all.js":
/*!**************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/all.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _createChainableTypeChecker = __webpack_require__(/*! ./utils/createChainableTypeChecker */ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js");

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/prop-types-extra/lib/utils/createChainableTypeChecker.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/AbstractNav.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/AbstractNav.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dom-helpers/querySelectorAll */ "./node_modules/dom-helpers/esm/querySelectorAll.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @restart/hooks/useForceUpdate */ "./node_modules/@restart/hooks/esm/useForceUpdate.js");
/* harmony import */ var _restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @restart/hooks/useMergedRefs */ "./node_modules/@restart/hooks/esm/useMergedRefs.js");
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/esm/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/esm/SelectableContext.js");
/* harmony import */ var _TabContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TabContext */ "./node_modules/react-bootstrap/esm/TabContext.js");










// eslint-disable-next-line @typescript-eslint/no-empty-function
var noop = function noop() {};

var AbstractNav = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'ul' : _ref$as,
      onSelect = _ref.onSelect,
      activeKey = _ref.activeKey,
      role = _ref.role,
      onKeyDown = _ref.onKeyDown,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["as", "onSelect", "activeKey", "role", "onKeyDown"]);

  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  var forceUpdate = Object(_restart_hooks_useForceUpdate__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var needsRefocusRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(false);
  var parentOnSelect = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var tabContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_TabContext__WEBPACK_IMPORTED_MODULE_8__["default"]);
  var getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  var listNode = Object(react__WEBPACK_IMPORTED_MODULE_3__["useRef"])(null);

  var getNextActiveChild = function getNextActiveChild(offset) {
    var currentListNode = listNode.current;
    if (!currentListNode) return null;
    var items = Object(dom_helpers_querySelectorAll__WEBPACK_IMPORTED_MODULE_2__["default"])(currentListNode, '[data-rb-event-key]:not(.disabled)');
    var activeChild = currentListNode.querySelector('.active');
    if (!activeChild) return null;
    var index = items.indexOf(activeChild);
    if (index === -1) return null;
    var nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  var handleSelect = function handleSelect(key, event) {
    if (key == null) return;
    if (onSelect) onSelect(key, event);
    if (parentOnSelect) parentOnSelect(key, event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (onKeyDown) onKeyDown(event);
    var nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveChild(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveChild(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset.rbEventKey, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (listNode.current && needsRefocusRef.current) {
      var activeChild = listNode.current.querySelector('[data-rb-event-key].active');
      if (activeChild) activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  var mergedRef = Object(_restart_hooks_useMergedRefs__WEBPACK_IMPORTED_MODULE_5__["default"])(ref, listNode);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_SelectableContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: handleSelect
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_NavContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: {
      role: role,
      // used by NavLink to determine it's role
      activeKey: Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_7__["makeEventKey"])(activeKey),
      getControlledId: getControlledId || noop,
      getControllerId: getControllerId || noop
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    onKeyDown: handleKeyDown,
    ref: mergedRef,
    role: role
  }))));
});
/* harmony default export */ __webpack_exports__["default"] = (AbstractNav);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/AbstractNavItem.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/AbstractNavItem.js ***!
  \*************************************************************/
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
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! warning */ "./node_modules/warning/warning.js");
/* harmony import */ var warning__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(warning__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _NavContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./NavContext */ "./node_modules/react-bootstrap/esm/NavContext.js");
/* harmony import */ var _SelectableContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SelectableContext */ "./node_modules/react-bootstrap/esm/SelectableContext.js");








var defaultProps = {
  disabled: false
};
var AbstractNavItem = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      className = _ref.className,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      onClick = _ref.onClick,
      Component = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["active", "className", "eventKey", "onSelect", "onClick", "as"]);

  var navKey = Object(_SelectableContext__WEBPACK_IMPORTED_MODULE_7__["makeEventKey"])(eventKey, props.href);
  var parentOnSelect = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_SelectableContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var navContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_NavContext__WEBPACK_IMPORTED_MODULE_6__["default"]);
  var isActive = active;

  if (navContext) {
    if (!props.role && navContext.role === 'tablist') props.role = 'tab';
    var contextControllerId = navContext.getControllerId(navKey);
    var contextControlledId = navContext.getControlledId(navKey);
     true ? warning__WEBPACK_IMPORTED_MODULE_5___default()(!contextControllerId || !props.id, "[react-bootstrap] The provided id '" + props.id + "' was overwritten by the current navContext with '" + contextControllerId + "'.") : undefined;
     true ? warning__WEBPACK_IMPORTED_MODULE_5___default()(!contextControlledId || !props['aria-controls'], "[react-bootstrap] The provided aria-controls value '" + props['aria-controls'] + "' was overwritten by the current navContext with '" + contextControlledId + "'.") : undefined;
    props['data-rb-event-key'] = navKey;
    props.id = contextControllerId || props.id;
    props['aria-controls'] = contextControlledId || props['aria-controls'];
    isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
  }

  if (props.role === 'tab') {
    props.tabIndex = isActive ? props.tabIndex : -1;
    props['aria-selected'] = isActive;
  }

  var handleOnclick = Object(_restart_hooks_useEventCallback__WEBPACK_IMPORTED_MODULE_4__["default"])(function (e) {
    if (onClick) onClick(e);
    if (navKey == null) return;
    if (onSelect) onSelect(navKey, e);
    if (parentOnSelect) parentOnSelect(navKey, e);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    onClick: handleOnclick,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, isActive && 'active')
  }));
});
AbstractNavItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (AbstractNavItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/Nav.js":
/*!*************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/Nav.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types-extra/lib/all */ "./node_modules/prop-types-extra/lib/all.js");
/* harmony import */ var prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types_extra_lib_all__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var uncontrollable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uncontrollable */ "./node_modules/uncontrollable/esm/index.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");
/* harmony import */ var _NavbarContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NavbarContext */ "./node_modules/react-bootstrap/esm/NavbarContext.js");
/* harmony import */ var _CardContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardContext */ "./node_modules/react-bootstrap/esm/CardContext.js");
/* harmony import */ var _AbstractNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AbstractNav */ "./node_modules/react-bootstrap/esm/AbstractNav.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./NavItem */ "./node_modules/react-bootstrap/esm/NavItem.js");
/* harmony import */ var _NavLink__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./NavLink */ "./node_modules/react-bootstrap/esm/NavLink.js");












var defaultProps = {
  justify: false,
  fill: false
};
var Nav = react__WEBPACK_IMPORTED_MODULE_4___default.a.forwardRef(function (uncontrolledProps, ref) {
  var _classNames;

  var _useUncontrolled = Object(uncontrollable__WEBPACK_IMPORTED_MODULE_5__["useUncontrolled"])(uncontrolledProps, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      initialBsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      fill = _useUncontrolled.fill,
      justify = _useUncontrolled.justify,
      navbar = _useUncontrolled.navbar,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      activeKey = _useUncontrolled.activeKey,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_useUncontrolled, ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "activeKey"]);

  var bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["useBootstrapPrefix"])(initialBsPrefix, 'nav');
  var navbarBsPrefix;
  var cardHeaderBsPrefix;
  var isNavbar = false;
  var navbarContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_NavbarContext__WEBPACK_IMPORTED_MODULE_7__["default"]);
  var cardContext = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_CardContext__WEBPACK_IMPORTED_MODULE_8__["default"]);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardContext) {
    cardHeaderBsPrefix = cardContext.cardHeaderBsPrefix;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_AbstractNav__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, (_classNames = {}, _classNames[bsPrefix] = !isNavbar, _classNames[navbarBsPrefix + "-nav"] = isNavbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
  }, props), children);
});
Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps;
Nav.Item = _NavItem__WEBPACK_IMPORTED_MODULE_10__["default"];
Nav.Link = _NavLink__WEBPACK_IMPORTED_MODULE_11__["default"];
/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavContext.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // TODO: check this

var NavContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
NavContext.displayName = 'NavContext';
/* harmony default export */ __webpack_exports__["default"] = (NavContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavItem.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavItem.js ***!
  \*****************************************************/
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
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");





var NavItem = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "className", "children", "as"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__["useBootstrapPrefix"])(bsPrefix, 'nav-item');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    ref: ref,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix)
  }), children);
});
NavItem.displayName = 'NavItem';
/* harmony default export */ __webpack_exports__["default"] = (NavItem);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavLink.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavLink.js ***!
  \*****************************************************/
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
/* harmony import */ var _SafeAnchor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SafeAnchor */ "./node_modules/react-bootstrap/esm/SafeAnchor.js");
/* harmony import */ var _AbstractNavItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AbstractNavItem */ "./node_modules/react-bootstrap/esm/AbstractNavItem.js");
/* harmony import */ var _ThemeProvider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ThemeProvider */ "./node_modules/react-bootstrap/esm/ThemeProvider.js");







var defaultProps = {
  disabled: false,
  as: _SafeAnchor__WEBPACK_IMPORTED_MODULE_4__["default"]
};
var NavLink = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      as = _ref.as,
      props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "as"]);

  bsPrefix = Object(_ThemeProvider__WEBPACK_IMPORTED_MODULE_6__["useBootstrapPrefix"])(bsPrefix, 'nav-link');
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_AbstractNavItem__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    href: href,
    ref: ref,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, bsPrefix, disabled && 'disabled')
  }));
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (NavLink);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/NavbarContext.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/NavbarContext.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // TODO: check

var context = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
context.displayName = 'NavbarContext';
/* harmony default export */ __webpack_exports__["default"] = (context);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/SelectableContext.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/SelectableContext.js ***!
  \***************************************************************/
/*! exports provided: makeEventKey, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeEventKey", function() { return makeEventKey; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // TODO (apparently this is a bare "onSelect"?)

var SelectableContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
var makeEventKey = function makeEventKey(eventKey, href) {
  if (href === void 0) {
    href = null;
  }

  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ __webpack_exports__["default"] = (SelectableContext);

/***/ }),

/***/ "./node_modules/react-bootstrap/esm/TabContext.js":
/*!********************************************************!*\
  !*** ./node_modules/react-bootstrap/esm/TabContext.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var TabContext = react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["default"] = (TabContext);

/***/ }),

/***/ "./node_modules/warning/warning.js":
/*!*****************************************!*\
  !*** ./node_modules/warning/warning.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./src/components/VideoDetailsContainer.js":
/*!*************************************************!*\
  !*** ./src/components/VideoDetailsContainer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap/Nav */ "./node_modules/react-bootstrap/esm/Nav.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Endpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Endpoint */ "./src/Endpoint.js");


var _jsxFileName = "C:\\Development\\kurzgesagt-tldr\\SPA\\src\\components\\VideoDetailsContainer.js",
    _s = $RefreshSig$();






const Component = props => {
  _s();

  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const tab = props.tab;

  function onClickTab(newTab) {
    router.push(`/video/${props.vid}/${newTab}`);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "content-container",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "content",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "video-details-title",
        children: props.details.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
        variant: "pills",
        onSelect: onClickTab,
        activeKey: tab,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            eventKey: "video",
            children: "Video"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            eventKey: "sources",
            disabled: !props.details.hasSources,
            children: "Sources"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            eventKey: "transcript",
            disabled: !props.details.hasTranscript,
            children: "Transcript"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            eventKey: "tags",
            disabled: !props.details.hasTags,
            children: "Tags"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Item, {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap_Nav__WEBPACK_IMPORTED_MODULE_2__["default"].Link, {
            eventKey: "soundtrack",
            disabled: !props.details.hasSoundTrack,
            children: "Soundtrack"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined), props.children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, undefined);
};

_s(Component, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Component;

Component.fetchDetails = async vid => {
  const res = await fetch(`${_Endpoint__WEBPACK_IMPORTED_MODULE_4__["default"].url}/video/${vid}`);
  const details = await res.json();
  return {
    title: details.info.title,
    hasSources: details.sources != undefined,
    hasTranscript: details.transcript != undefined && details.transcript.en != undefined,
    hasSoundTrack: details.info.soundtrack != undefined,
    hasTags: details.tags != undefined
  };
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VGb3JjZVVwZGF0ZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0ByZXN0YXJ0L2hvb2tzL2VzbS91c2VNZXJnZWRSZWZzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZG9tLWhlbHBlcnMvZXNtL3F1ZXJ5U2VsZWN0b3JBbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzLWV4dHJhL2xpYi9hbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzLWV4dHJhL2xpYi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vQWJzdHJhY3ROYXYuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1ib290c3RyYXAvZXNtL0Fic3RyYWN0TmF2SXRlbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vTmF2LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9OYXZDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9OYXZJdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9OYXZMaW5rLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9OYXZiYXJDb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtYm9vdHN0cmFwL2VzbS9TZWxlY3RhYmxlQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWJvb3RzdHJhcC9lc20vVGFiQ29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3dhcm5pbmcvd2FybmluZy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVmlkZW9EZXRhaWxzQ29udGFpbmVyLmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwidGFiIiwib25DbGlja1RhYiIsIm5ld1RhYiIsInB1c2giLCJ2aWQiLCJkZXRhaWxzIiwidGl0bGUiLCJoYXNTb3VyY2VzIiwiaGFzVHJhbnNjcmlwdCIsImhhc1RhZ3MiLCJoYXNTb3VuZFRyYWNrIiwiY2hpbGRyZW4iLCJmZXRjaERldGFpbHMiLCJyZXMiLCJmZXRjaCIsIkVuZHBvaW50IiwidXJsIiwianNvbiIsImluZm8iLCJzb3VyY2VzIiwidW5kZWZpbmVkIiwidHJhbnNjcmlwdCIsImVuIiwic291bmR0cmFjayIsInRhZ3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EseUNBQXlDLGNBQWM7QUFDdkQ7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQSxvQkFBb0Isd0RBQVU7QUFDOUI7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsVUFBVSxFQUFFLFNBQVM7QUFDOUMsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQXFDSCxDQTlDRDs7R0FBTWYsUztVQUNhRyxxRDs7O0tBRGJILFM7O0FBZ0ROQSxTQUFTLENBQUNnQixZQUFWLEdBQXlCLE1BQU9SLEdBQVAsSUFBZTtBQUNwQyxRQUFNUyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFFLEdBQUVDLGlEQUFRLENBQUNDLEdBQUksVUFBU1osR0FBSSxFQUE5QixDQUF2QjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxNQUFNUSxHQUFHLENBQUNJLElBQUosRUFBdEI7QUFFQSxTQUFPO0FBQ0hYLFNBQUssRUFBRUQsT0FBTyxDQUFDYSxJQUFSLENBQWFaLEtBRGpCO0FBR0hDLGNBQVUsRUFBRUYsT0FBTyxDQUFDYyxPQUFSLElBQW1CQyxTQUg1QjtBQUlIWixpQkFBYSxFQUFFSCxPQUFPLENBQUNnQixVQUFSLElBQXNCRCxTQUF0QixJQUFtQ2YsT0FBTyxDQUFDZ0IsVUFBUixDQUFtQkMsRUFBbkIsSUFBeUJGLFNBSnhFO0FBS0hWLGlCQUFhLEVBQUVMLE9BQU8sQ0FBQ2EsSUFBUixDQUFhSyxVQUFiLElBQTJCSCxTQUx2QztBQU1IWCxXQUFPLEVBQUVKLE9BQU8sQ0FBQ21CLElBQVIsSUFBZ0JKO0FBTnRCLEdBQVA7QUFRSCxDQVpEOztBQWNleEIsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdmlkZW8vW3ZpZF0uNzkzNDA2ZTA4NDFmOTRhZGU2NGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCc7XG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRyaWdnZXJzIGEgY29tcG9uZW50IHVwZGF0ZS4gdGhlIGhvb2sgZXF1aXZhbGVudCB0b1xuICogYHRoaXMuZm9yY2VVcGRhdGUoKWAgaW4gYSBjbGFzcyBjb21wb25lbnQuIEluIG1vc3QgY2FzZXMgdXNpbmcgYSBzdGF0ZSB2YWx1ZSBkaXJlY3RseVxuICogaXMgcHJlZmVyYWJsZSBidXQgbWF5IGJlIHJlcXVpcmVkIGluIHNvbWUgYWR2YW5jZWQgdXNhZ2VzIG9mIHJlZnMgZm9yIGludGVyb3Agb3JcbiAqIHdoZW4gZGlyZWN0IERPTSBtYW5pcHVsYXRpb24gaXMgcmVxdWlyZWQuXG4gKlxuICogYGBgdHNcbiAqIGNvbnN0IGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAqXG4gKiBjb25zdCB1cGRhdGVPbkNsaWNrID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICogIGZvcmNlVXBkYXRlKClcbiAqIH0sIFtmb3JjZVVwZGF0ZV0pXG4gKlxuICogcmV0dXJuIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3VwZGF0ZU9uQ2xpY2t9PkhpIHRoZXJlPC9idXR0b24+XG4gKiBgYGBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VGb3JjZVVwZGF0ZSgpIHtcbiAgLy8gVGhlIHRvZ2dsaW5nIHN0YXRlIHZhbHVlIGlzIGRlc2lnbmVkIHRvIGRlZmVhdCBSZWFjdCBvcHRpbWl6YXRpb25zIGZvciBza2lwcGluZ1xuICAvLyB1cGRhdGVzIHdoZW4gdGhleSBhcmUgc3RyaWN0aW5nIGVxdWFsIHRvIHRoZSBsYXN0IHN0YXRlIHZhbHVlXG4gIHZhciBfdXNlUmVkdWNlciA9IHVzZVJlZHVjZXIoZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgcmV0dXJuICFzdGF0ZTtcbiAgfSwgZmFsc2UpLFxuICAgICAgZGlzcGF0Y2ggPSBfdXNlUmVkdWNlclsxXTtcblxuICByZXR1cm4gZGlzcGF0Y2g7XG59IiwiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcblxudmFyIHRvRm5SZWYgPSBmdW5jdGlvbiB0b0ZuUmVmKHJlZikge1xuICByZXR1cm4gIXJlZiB8fCB0eXBlb2YgcmVmID09PSAnZnVuY3Rpb24nID8gcmVmIDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgcmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZVJlZnMocmVmQSwgcmVmQikge1xuICB2YXIgYSA9IHRvRm5SZWYocmVmQSk7XG4gIHZhciBiID0gdG9GblJlZihyZWZCKTtcbiAgcmV0dXJuIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmIChhKSBhKHZhbHVlKTtcbiAgICBpZiAoYikgYih2YWx1ZSk7XG4gIH07XG59XG4vKipcbiAqIENyZWF0ZSBhbmQgcmV0dXJucyBhIHNpbmdsZSBjYWxsYmFjayByZWYgY29tcG9zZWQgZnJvbSB0d28gb3RoZXIgUmVmcy5cbiAqXG4gKiBgYGB0c3hcbiAqIGNvbnN0IEJ1dHRvbiA9IFJlYWN0LmZvcndhcmRSZWYoKHByb3BzLCByZWYpID0+IHtcbiAqICAgY29uc3QgW2VsZW1lbnQsIGF0dGFjaFJlZl0gPSB1c2VDYWxsYmFja1JlZjxIVE1MQnV0dG9uRWxlbWVudD4oKTtcbiAqICAgY29uc3QgbWVyZ2VkUmVmID0gdXNlTWVyZ2VkUmVmcyhyZWYsIGF0dGFjaFJlZik7XG4gKlxuICogICByZXR1cm4gPGJ1dHRvbiByZWY9e21lcmdlZFJlZn0gey4uLnByb3BzfS8+XG4gKiB9KVxuICogYGBgXG4gKlxuICogQHBhcmFtIHJlZkEgQSBDYWxsYmFjayBvciBtdXRhYmxlIFJlZlxuICogQHBhcmFtIHJlZkIgQSBDYWxsYmFjayBvciBtdXRhYmxlIFJlZlxuICogQGNhdGVnb3J5IHJlZnNcbiAqL1xuXG5mdW5jdGlvbiB1c2VNZXJnZWRSZWZzKHJlZkEsIHJlZkIpIHtcbiAgcmV0dXJuIHVzZU1lbW8oZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBtZXJnZVJlZnMocmVmQSwgcmVmQik7XG4gIH0sIFtyZWZBLCByZWZCXSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZU1lcmdlZFJlZnM7IiwidmFyIHRvQXJyYXkgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5jYWxsKEZ1bmN0aW9uLnByb3RvdHlwZS5jYWxsLCBbXS5zbGljZSk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBxc2EoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgcmV0dXJuIHRvQXJyYXkoZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gYWxsO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyID0gcmVxdWlyZSgnLi91dGlscy9jcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcicpO1xuXG52YXIgX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxuZnVuY3Rpb24gYWxsKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgdmFsaWRhdG9ycyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHZhbGlkYXRvcnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBmdW5jdGlvbiBhbGxQcm9wVHlwZXMoKSB7XG4gICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICB9XG5cbiAgICB2YXIgZXJyb3IgPSBudWxsO1xuXG4gICAgdmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgIGlmIChlcnJvciAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlc3VsdCA9IHZhbGlkYXRvci5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIGVycm9yID0gcmVzdWx0O1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGVycm9yO1xuICB9XG5cbiAgcmV0dXJuICgwLCBfY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIyLmRlZmF1bHQpKGFsbFByb3BUeXBlcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcjtcbi8qKlxuICogQ29weXJpZ2h0IDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuIEFuIGFkZGl0aW9uYWwgZ3JhbnRcbiAqIG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW4gdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbi8vIE1vc3RseSB0YWtlbiBmcm9tIFJlYWN0UHJvcFR5cGVzLlxuXG5mdW5jdGlvbiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSkge1xuICBmdW5jdGlvbiBjaGVja1R5cGUoaXNSZXF1aXJlZCwgcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgdmFyIGNvbXBvbmVudE5hbWVTYWZlID0gY29tcG9uZW50TmFtZSB8fCAnPDxhbm9ueW1vdXM+Pic7XG4gICAgdmFyIHByb3BGdWxsTmFtZVNhZmUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09IG51bGwpIHtcbiAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXJyb3IoJ1JlcXVpcmVkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWVTYWZlICsgJ2Agd2FzIG5vdCBzcGVjaWZpZWQgJyArICgnaW4gYCcgKyBjb21wb25lbnROYW1lU2FmZSArICdgLicpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gNiA/IF9sZW4gLSA2IDogMCksIF9rZXkgPSA2OyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXkgLSA2XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsaWRhdGUuYXBwbHkodW5kZWZpbmVkLCBbcHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lU2FmZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZVNhZmVdLmNvbmNhdChhcmdzKSk7XG4gIH1cblxuICB2YXIgY2hhaW5lZENoZWNrVHlwZSA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIGZhbHNlKTtcbiAgY2hhaW5lZENoZWNrVHlwZS5pc1JlcXVpcmVkID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgdHJ1ZSk7XG5cbiAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IHFzYSBmcm9tICdkb20taGVscGVycy9xdWVyeVNlbGVjdG9yQWxsJztcbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VGb3JjZVVwZGF0ZSBmcm9tICdAcmVzdGFydC9ob29rcy91c2VGb3JjZVVwZGF0ZSc7XG5pbXBvcnQgdXNlTWVyZ2VkUmVmcyBmcm9tICdAcmVzdGFydC9ob29rcy91c2VNZXJnZWRSZWZzJztcbmltcG9ydCBOYXZDb250ZXh0IGZyb20gJy4vTmF2Q29udGV4dCc7XG5pbXBvcnQgU2VsZWN0YWJsZUNvbnRleHQsIHsgbWFrZUV2ZW50S2V5IH0gZnJvbSAnLi9TZWxlY3RhYmxlQ29udGV4dCc7XG5pbXBvcnQgVGFiQ29udGV4dCBmcm9tICcuL1RhYkNvbnRleHQnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG52YXIgbm9vcCA9IGZ1bmN0aW9uIG5vb3AoKSB7fTtcblxudmFyIEFic3RyYWN0TmF2ID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBfcmVmJGFzID0gX3JlZi5hcyxcbiAgICAgIENvbXBvbmVudCA9IF9yZWYkYXMgPT09IHZvaWQgMCA/ICd1bCcgOiBfcmVmJGFzLFxuICAgICAgb25TZWxlY3QgPSBfcmVmLm9uU2VsZWN0LFxuICAgICAgYWN0aXZlS2V5ID0gX3JlZi5hY3RpdmVLZXksXG4gICAgICByb2xlID0gX3JlZi5yb2xlLFxuICAgICAgb25LZXlEb3duID0gX3JlZi5vbktleURvd24sXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImFzXCIsIFwib25TZWxlY3RcIiwgXCJhY3RpdmVLZXlcIiwgXCJyb2xlXCIsIFwib25LZXlEb3duXCJdKTtcblxuICAvLyBBIHJlZiBhbmQgZm9yY2VVcGRhdGUgZm9yIHJlZm9jdXMsIGIvYyB3ZSBvbmx5IHdhbnQgdG8gdHJpZ2dlciB3aGVuIG5lZWRlZFxuICAvLyBhbmQgZG9uJ3Qgd2FudCB0byByZXNldCB0aGUgc2V0IGluIHRoZSBlZmZlY3RcbiAgdmFyIGZvcmNlVXBkYXRlID0gdXNlRm9yY2VVcGRhdGUoKTtcbiAgdmFyIG5lZWRzUmVmb2N1c1JlZiA9IHVzZVJlZihmYWxzZSk7XG4gIHZhciBwYXJlbnRPblNlbGVjdCA9IHVzZUNvbnRleHQoU2VsZWN0YWJsZUNvbnRleHQpO1xuICB2YXIgdGFiQ29udGV4dCA9IHVzZUNvbnRleHQoVGFiQ29udGV4dCk7XG4gIHZhciBnZXRDb250cm9sbGVkSWQsIGdldENvbnRyb2xsZXJJZDtcblxuICBpZiAodGFiQ29udGV4dCkge1xuICAgIHJvbGUgPSByb2xlIHx8ICd0YWJsaXN0JztcbiAgICBhY3RpdmVLZXkgPSB0YWJDb250ZXh0LmFjdGl2ZUtleTtcbiAgICBnZXRDb250cm9sbGVkSWQgPSB0YWJDb250ZXh0LmdldENvbnRyb2xsZWRJZDtcbiAgICBnZXRDb250cm9sbGVySWQgPSB0YWJDb250ZXh0LmdldENvbnRyb2xsZXJJZDtcbiAgfVxuXG4gIHZhciBsaXN0Tm9kZSA9IHVzZVJlZihudWxsKTtcblxuICB2YXIgZ2V0TmV4dEFjdGl2ZUNoaWxkID0gZnVuY3Rpb24gZ2V0TmV4dEFjdGl2ZUNoaWxkKG9mZnNldCkge1xuICAgIHZhciBjdXJyZW50TGlzdE5vZGUgPSBsaXN0Tm9kZS5jdXJyZW50O1xuICAgIGlmICghY3VycmVudExpc3ROb2RlKSByZXR1cm4gbnVsbDtcbiAgICB2YXIgaXRlbXMgPSBxc2EoY3VycmVudExpc3ROb2RlLCAnW2RhdGEtcmItZXZlbnQta2V5XTpub3QoLmRpc2FibGVkKScpO1xuICAgIHZhciBhY3RpdmVDaGlsZCA9IGN1cnJlbnRMaXN0Tm9kZS5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJyk7XG4gICAgaWYgKCFhY3RpdmVDaGlsZCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIGluZGV4ID0gaXRlbXMuaW5kZXhPZihhY3RpdmVDaGlsZCk7XG4gICAgaWYgKGluZGV4ID09PSAtMSkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG5leHRJbmRleCA9IGluZGV4ICsgb2Zmc2V0O1xuICAgIGlmIChuZXh0SW5kZXggPj0gaXRlbXMubGVuZ3RoKSBuZXh0SW5kZXggPSAwO1xuICAgIGlmIChuZXh0SW5kZXggPCAwKSBuZXh0SW5kZXggPSBpdGVtcy5sZW5ndGggLSAxO1xuICAgIHJldHVybiBpdGVtc1tuZXh0SW5kZXhdO1xuICB9O1xuXG4gIHZhciBoYW5kbGVTZWxlY3QgPSBmdW5jdGlvbiBoYW5kbGVTZWxlY3Qoa2V5LCBldmVudCkge1xuICAgIGlmIChrZXkgPT0gbnVsbCkgcmV0dXJuO1xuICAgIGlmIChvblNlbGVjdCkgb25TZWxlY3Qoa2V5LCBldmVudCk7XG4gICAgaWYgKHBhcmVudE9uU2VsZWN0KSBwYXJlbnRPblNlbGVjdChrZXksIGV2ZW50KTtcbiAgfTtcblxuICB2YXIgaGFuZGxlS2V5RG93biA9IGZ1bmN0aW9uIGhhbmRsZUtleURvd24oZXZlbnQpIHtcbiAgICBpZiAob25LZXlEb3duKSBvbktleURvd24oZXZlbnQpO1xuICAgIHZhciBuZXh0QWN0aXZlQ2hpbGQ7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICBuZXh0QWN0aXZlQ2hpbGQgPSBnZXROZXh0QWN0aXZlQ2hpbGQoLTEpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICBuZXh0QWN0aXZlQ2hpbGQgPSBnZXROZXh0QWN0aXZlQ2hpbGQoMSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFuZXh0QWN0aXZlQ2hpbGQpIHJldHVybjtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGhhbmRsZVNlbGVjdChuZXh0QWN0aXZlQ2hpbGQuZGF0YXNldC5yYkV2ZW50S2V5LCBldmVudCk7XG4gICAgbmVlZHNSZWZvY3VzUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIGZvcmNlVXBkYXRlKCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICBpZiAobGlzdE5vZGUuY3VycmVudCAmJiBuZWVkc1JlZm9jdXNSZWYuY3VycmVudCkge1xuICAgICAgdmFyIGFjdGl2ZUNoaWxkID0gbGlzdE5vZGUuY3VycmVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yYi1ldmVudC1rZXldLmFjdGl2ZScpO1xuICAgICAgaWYgKGFjdGl2ZUNoaWxkKSBhY3RpdmVDaGlsZC5mb2N1cygpO1xuICAgIH1cblxuICAgIG5lZWRzUmVmb2N1c1JlZi5jdXJyZW50ID0gZmFsc2U7XG4gIH0pO1xuICB2YXIgbWVyZ2VkUmVmID0gdXNlTWVyZ2VkUmVmcyhyZWYsIGxpc3ROb2RlKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFNlbGVjdGFibGVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IGhhbmRsZVNlbGVjdFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChOYXZDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHJvbGU6IHJvbGUsXG4gICAgICAvLyB1c2VkIGJ5IE5hdkxpbmsgdG8gZGV0ZXJtaW5lIGl0J3Mgcm9sZVxuICAgICAgYWN0aXZlS2V5OiBtYWtlRXZlbnRLZXkoYWN0aXZlS2V5KSxcbiAgICAgIGdldENvbnRyb2xsZWRJZDogZ2V0Q29udHJvbGxlZElkIHx8IG5vb3AsXG4gICAgICBnZXRDb250cm9sbGVySWQ6IGdldENvbnRyb2xsZXJJZCB8fCBub29wXG4gICAgfVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIG9uS2V5RG93bjogaGFuZGxlS2V5RG93bixcbiAgICByZWY6IG1lcmdlZFJlZixcbiAgICByb2xlOiByb2xlXG4gIH0pKSkpO1xufSk7XG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdE5hdjsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZVwiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJ0ByZXN0YXJ0L2hvb2tzL3VzZUV2ZW50Q2FsbGJhY2snO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZyc7XG5pbXBvcnQgTmF2Q29udGV4dCBmcm9tICcuL05hdkNvbnRleHQnO1xuaW1wb3J0IFNlbGVjdGFibGVDb250ZXh0LCB7IG1ha2VFdmVudEtleSB9IGZyb20gJy4vU2VsZWN0YWJsZUNvbnRleHQnO1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlXG59O1xudmFyIEFic3RyYWN0TmF2SXRlbSA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKF9yZWYsIHJlZikge1xuICB2YXIgYWN0aXZlID0gX3JlZi5hY3RpdmUsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGV2ZW50S2V5ID0gX3JlZi5ldmVudEtleSxcbiAgICAgIG9uU2VsZWN0ID0gX3JlZi5vblNlbGVjdCxcbiAgICAgIG9uQ2xpY2sgPSBfcmVmLm9uQ2xpY2ssXG4gICAgICBDb21wb25lbnQgPSBfcmVmLmFzLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJhY3RpdmVcIiwgXCJjbGFzc05hbWVcIiwgXCJldmVudEtleVwiLCBcIm9uU2VsZWN0XCIsIFwib25DbGlja1wiLCBcImFzXCJdKTtcblxuICB2YXIgbmF2S2V5ID0gbWFrZUV2ZW50S2V5KGV2ZW50S2V5LCBwcm9wcy5ocmVmKTtcbiAgdmFyIHBhcmVudE9uU2VsZWN0ID0gdXNlQ29udGV4dChTZWxlY3RhYmxlQ29udGV4dCk7XG4gIHZhciBuYXZDb250ZXh0ID0gdXNlQ29udGV4dChOYXZDb250ZXh0KTtcbiAgdmFyIGlzQWN0aXZlID0gYWN0aXZlO1xuXG4gIGlmIChuYXZDb250ZXh0KSB7XG4gICAgaWYgKCFwcm9wcy5yb2xlICYmIG5hdkNvbnRleHQucm9sZSA9PT0gJ3RhYmxpc3QnKSBwcm9wcy5yb2xlID0gJ3RhYic7XG4gICAgdmFyIGNvbnRleHRDb250cm9sbGVySWQgPSBuYXZDb250ZXh0LmdldENvbnRyb2xsZXJJZChuYXZLZXkpO1xuICAgIHZhciBjb250ZXh0Q29udHJvbGxlZElkID0gbmF2Q29udGV4dC5nZXRDb250cm9sbGVkSWQobmF2S2V5KTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCFjb250ZXh0Q29udHJvbGxlcklkIHx8ICFwcm9wcy5pZCwgXCJbcmVhY3QtYm9vdHN0cmFwXSBUaGUgcHJvdmlkZWQgaWQgJ1wiICsgcHJvcHMuaWQgKyBcIicgd2FzIG92ZXJ3cml0dGVuIGJ5IHRoZSBjdXJyZW50IG5hdkNvbnRleHQgd2l0aCAnXCIgKyBjb250ZXh0Q29udHJvbGxlcklkICsgXCInLlwiKSA6IHZvaWQgMDtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKCFjb250ZXh0Q29udHJvbGxlZElkIHx8ICFwcm9wc1snYXJpYS1jb250cm9scyddLCBcIltyZWFjdC1ib290c3RyYXBdIFRoZSBwcm92aWRlZCBhcmlhLWNvbnRyb2xzIHZhbHVlICdcIiArIHByb3BzWydhcmlhLWNvbnRyb2xzJ10gKyBcIicgd2FzIG92ZXJ3cml0dGVuIGJ5IHRoZSBjdXJyZW50IG5hdkNvbnRleHQgd2l0aCAnXCIgKyBjb250ZXh0Q29udHJvbGxlZElkICsgXCInLlwiKSA6IHZvaWQgMDtcbiAgICBwcm9wc1snZGF0YS1yYi1ldmVudC1rZXknXSA9IG5hdktleTtcbiAgICBwcm9wcy5pZCA9IGNvbnRleHRDb250cm9sbGVySWQgfHwgcHJvcHMuaWQ7XG4gICAgcHJvcHNbJ2FyaWEtY29udHJvbHMnXSA9IGNvbnRleHRDb250cm9sbGVkSWQgfHwgcHJvcHNbJ2FyaWEtY29udHJvbHMnXTtcbiAgICBpc0FjdGl2ZSA9IGFjdGl2ZSA9PSBudWxsICYmIG5hdktleSAhPSBudWxsID8gbmF2Q29udGV4dC5hY3RpdmVLZXkgPT09IG5hdktleSA6IGFjdGl2ZTtcbiAgfVxuXG4gIGlmIChwcm9wcy5yb2xlID09PSAndGFiJykge1xuICAgIHByb3BzLnRhYkluZGV4ID0gaXNBY3RpdmUgPyBwcm9wcy50YWJJbmRleCA6IC0xO1xuICAgIHByb3BzWydhcmlhLXNlbGVjdGVkJ10gPSBpc0FjdGl2ZTtcbiAgfVxuXG4gIHZhciBoYW5kbGVPbmNsaWNrID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZSkge1xuICAgIGlmIChvbkNsaWNrKSBvbkNsaWNrKGUpO1xuICAgIGlmIChuYXZLZXkgPT0gbnVsbCkgcmV0dXJuO1xuICAgIGlmIChvblNlbGVjdCkgb25TZWxlY3QobmF2S2V5LCBlKTtcbiAgICBpZiAocGFyZW50T25TZWxlY3QpIHBhcmVudE9uU2VsZWN0KG5hdktleSwgZSk7XG4gIH0pO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICByZWY6IHJlZixcbiAgICBvbkNsaWNrOiBoYW5kbGVPbmNsaWNrLFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIGlzQWN0aXZlICYmICdhY3RpdmUnKVxuICB9KSk7XG59KTtcbkFic3RyYWN0TmF2SXRlbS5kZWZhdWx0UHJvcHMgPSBkZWZhdWx0UHJvcHM7XG5leHBvcnQgZGVmYXVsdCBBYnN0cmFjdE5hdkl0ZW07IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2VcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IGFsbCBmcm9tICdwcm9wLXR5cGVzLWV4dHJhL2xpYi9hbGwnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VVbmNvbnRyb2xsZWQgfSBmcm9tICd1bmNvbnRyb2xsYWJsZSc7XG5pbXBvcnQgeyB1c2VCb290c3RyYXBQcmVmaXggfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xuaW1wb3J0IE5hdmJhckNvbnRleHQgZnJvbSAnLi9OYXZiYXJDb250ZXh0JztcbmltcG9ydCBDYXJkQ29udGV4dCBmcm9tICcuL0NhcmRDb250ZXh0JztcbmltcG9ydCBBYnN0cmFjdE5hdiBmcm9tICcuL0Fic3RyYWN0TmF2JztcbmltcG9ydCBOYXZJdGVtIGZyb20gJy4vTmF2SXRlbSc7XG5pbXBvcnQgTmF2TGluayBmcm9tICcuL05hdkxpbmsnO1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAganVzdGlmeTogZmFsc2UsXG4gIGZpbGw6IGZhbHNlXG59O1xudmFyIE5hdiA9IFJlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHVuY29udHJvbGxlZFByb3BzLCByZWYpIHtcbiAgdmFyIF9jbGFzc05hbWVzO1xuXG4gIHZhciBfdXNlVW5jb250cm9sbGVkID0gdXNlVW5jb250cm9sbGVkKHVuY29udHJvbGxlZFByb3BzLCB7XG4gICAgYWN0aXZlS2V5OiAnb25TZWxlY3QnXG4gIH0pLFxuICAgICAgX3VzZVVuY29udHJvbGxlZCRhcyA9IF91c2VVbmNvbnRyb2xsZWQuYXMsXG4gICAgICBhcyA9IF91c2VVbmNvbnRyb2xsZWQkYXMgPT09IHZvaWQgMCA/ICdkaXYnIDogX3VzZVVuY29udHJvbGxlZCRhcyxcbiAgICAgIGluaXRpYWxCc1ByZWZpeCA9IF91c2VVbmNvbnRyb2xsZWQuYnNQcmVmaXgsXG4gICAgICB2YXJpYW50ID0gX3VzZVVuY29udHJvbGxlZC52YXJpYW50LFxuICAgICAgZmlsbCA9IF91c2VVbmNvbnRyb2xsZWQuZmlsbCxcbiAgICAgIGp1c3RpZnkgPSBfdXNlVW5jb250cm9sbGVkLmp1c3RpZnksXG4gICAgICBuYXZiYXIgPSBfdXNlVW5jb250cm9sbGVkLm5hdmJhcixcbiAgICAgIGNsYXNzTmFtZSA9IF91c2VVbmNvbnRyb2xsZWQuY2xhc3NOYW1lLFxuICAgICAgY2hpbGRyZW4gPSBfdXNlVW5jb250cm9sbGVkLmNoaWxkcmVuLFxuICAgICAgYWN0aXZlS2V5ID0gX3VzZVVuY29udHJvbGxlZC5hY3RpdmVLZXksXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF91c2VVbmNvbnRyb2xsZWQsIFtcImFzXCIsIFwiYnNQcmVmaXhcIiwgXCJ2YXJpYW50XCIsIFwiZmlsbFwiLCBcImp1c3RpZnlcIiwgXCJuYXZiYXJcIiwgXCJjbGFzc05hbWVcIiwgXCJjaGlsZHJlblwiLCBcImFjdGl2ZUtleVwiXSk7XG5cbiAgdmFyIGJzUHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGluaXRpYWxCc1ByZWZpeCwgJ25hdicpO1xuICB2YXIgbmF2YmFyQnNQcmVmaXg7XG4gIHZhciBjYXJkSGVhZGVyQnNQcmVmaXg7XG4gIHZhciBpc05hdmJhciA9IGZhbHNlO1xuICB2YXIgbmF2YmFyQ29udGV4dCA9IHVzZUNvbnRleHQoTmF2YmFyQ29udGV4dCk7XG4gIHZhciBjYXJkQ29udGV4dCA9IHVzZUNvbnRleHQoQ2FyZENvbnRleHQpO1xuXG4gIGlmIChuYXZiYXJDb250ZXh0KSB7XG4gICAgbmF2YmFyQnNQcmVmaXggPSBuYXZiYXJDb250ZXh0LmJzUHJlZml4O1xuICAgIGlzTmF2YmFyID0gbmF2YmFyID09IG51bGwgPyB0cnVlIDogbmF2YmFyO1xuICB9IGVsc2UgaWYgKGNhcmRDb250ZXh0KSB7XG4gICAgY2FyZEhlYWRlckJzUHJlZml4ID0gY2FyZENvbnRleHQuY2FyZEhlYWRlckJzUHJlZml4O1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEFic3RyYWN0TmF2LCBfZXh0ZW5kcyh7XG4gICAgYXM6IGFzLFxuICAgIHJlZjogcmVmLFxuICAgIGFjdGl2ZUtleTogYWN0aXZlS2V5LFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIChfY2xhc3NOYW1lcyA9IHt9LCBfY2xhc3NOYW1lc1tic1ByZWZpeF0gPSAhaXNOYXZiYXIsIF9jbGFzc05hbWVzW25hdmJhckJzUHJlZml4ICsgXCItbmF2XCJdID0gaXNOYXZiYXIsIF9jbGFzc05hbWVzW2NhcmRIZWFkZXJCc1ByZWZpeCArIFwiLVwiICsgdmFyaWFudF0gPSAhIWNhcmRIZWFkZXJCc1ByZWZpeCwgX2NsYXNzTmFtZXNbYnNQcmVmaXggKyBcIi1cIiArIHZhcmlhbnRdID0gISF2YXJpYW50LCBfY2xhc3NOYW1lc1tic1ByZWZpeCArIFwiLWZpbGxcIl0gPSBmaWxsLCBfY2xhc3NOYW1lc1tic1ByZWZpeCArIFwiLWp1c3RpZmllZFwiXSA9IGp1c3RpZnksIF9jbGFzc05hbWVzKSlcbiAgfSwgcHJvcHMpLCBjaGlsZHJlbik7XG59KTtcbk5hdi5kaXNwbGF5TmFtZSA9ICdOYXYnO1xuTmF2LmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbk5hdi5JdGVtID0gTmF2SXRlbTtcbk5hdi5MaW5rID0gTmF2TGluaztcbmV4cG9ydCBkZWZhdWx0IE5hdjsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnOyAvLyBUT0RPOiBjaGVjayB0aGlzXG5cbnZhciBOYXZDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dChudWxsKTtcbk5hdkNvbnRleHQuZGlzcGxheU5hbWUgPSAnTmF2Q29udGV4dCc7XG5leHBvcnQgZGVmYXVsdCBOYXZDb250ZXh0OyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VCb290c3RyYXBQcmVmaXggfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xudmFyIE5hdkl0ZW0gPSBSZWFjdC5mb3J3YXJkUmVmKCAvLyBOZWVkIHRvIGRlZmluZSB0aGUgZGVmYXVsdCBcImFzXCIgZHVyaW5nIHByb3AgZGVzdHJ1Y3R1cmluZyB0byBiZSBjb21wYXRpYmxlIHdpdGggc3R5bGVkLWNvbXBvbmVudHMgZ2l0aHViLmNvbS9yZWFjdC1ib290c3RyYXAvcmVhY3QtYm9vdHN0cmFwL2lzc3Vlcy8zNTk1XG5mdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGNoaWxkcmVuID0gX3JlZi5jaGlsZHJlbixcbiAgICAgIF9yZWYkYXMgPSBfcmVmLmFzLFxuICAgICAgQ29tcG9uZW50ID0gX3JlZiRhcyA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcmVmJGFzLFxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfcmVmLCBbXCJic1ByZWZpeFwiLCBcImNsYXNzTmFtZVwiLCBcImNoaWxkcmVuXCIsIFwiYXNcIl0pO1xuXG4gIGJzUHJlZml4ID0gdXNlQm9vdHN0cmFwUHJlZml4KGJzUHJlZml4LCAnbmF2LWl0ZW0nKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe30sIHByb3BzLCB7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbGFzc05hbWVzKGNsYXNzTmFtZSwgYnNQcmVmaXgpXG4gIH0pLCBjaGlsZHJlbik7XG59KTtcbk5hdkl0ZW0uZGlzcGxheU5hbWUgPSAnTmF2SXRlbSc7XG5leHBvcnQgZGVmYXVsdCBOYXZJdGVtOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlXCI7XG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2FmZUFuY2hvciBmcm9tICcuL1NhZmVBbmNob3InO1xuaW1wb3J0IEFic3RyYWN0TmF2SXRlbSBmcm9tICcuL0Fic3RyYWN0TmF2SXRlbSc7XG5pbXBvcnQgeyB1c2VCb290c3RyYXBQcmVmaXggfSBmcm9tICcuL1RoZW1lUHJvdmlkZXInO1xudmFyIGRlZmF1bHRQcm9wcyA9IHtcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBhczogU2FmZUFuY2hvclxufTtcbnZhciBOYXZMaW5rID0gUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiAoX3JlZiwgcmVmKSB7XG4gIHZhciBic1ByZWZpeCA9IF9yZWYuYnNQcmVmaXgsXG4gICAgICBkaXNhYmxlZCA9IF9yZWYuZGlzYWJsZWQsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIGhyZWYgPSBfcmVmLmhyZWYsXG4gICAgICBldmVudEtleSA9IF9yZWYuZXZlbnRLZXksXG4gICAgICBvblNlbGVjdCA9IF9yZWYub25TZWxlY3QsXG4gICAgICBhcyA9IF9yZWYuYXMsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImJzUHJlZml4XCIsIFwiZGlzYWJsZWRcIiwgXCJjbGFzc05hbWVcIiwgXCJocmVmXCIsIFwiZXZlbnRLZXlcIiwgXCJvblNlbGVjdFwiLCBcImFzXCJdKTtcblxuICBic1ByZWZpeCA9IHVzZUJvb3RzdHJhcFByZWZpeChic1ByZWZpeCwgJ25hdi1saW5rJyk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChBYnN0cmFjdE5hdkl0ZW0sIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgIGhyZWY6IGhyZWYsXG4gICAgcmVmOiByZWYsXG4gICAgZXZlbnRLZXk6IGV2ZW50S2V5LFxuICAgIGFzOiBhcyxcbiAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgb25TZWxlY3Q6IG9uU2VsZWN0LFxuICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lcyhjbGFzc05hbWUsIGJzUHJlZml4LCBkaXNhYmxlZCAmJiAnZGlzYWJsZWQnKVxuICB9KSk7XG59KTtcbk5hdkxpbmsuZGlzcGxheU5hbWUgPSAnTmF2TGluayc7XG5OYXZMaW5rLmRlZmF1bHRQcm9wcyA9IGRlZmF1bHRQcm9wcztcbmV4cG9ydCBkZWZhdWx0IE5hdkxpbms7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgLy8gVE9ETzogY2hlY2tcblxudmFyIGNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuY29udGV4dC5kaXNwbGF5TmFtZSA9ICdOYXZiYXJDb250ZXh0JztcbmV4cG9ydCBkZWZhdWx0IGNvbnRleHQ7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JzsgLy8gVE9ETyAoYXBwYXJlbnRseSB0aGlzIGlzIGEgYmFyZSBcIm9uU2VsZWN0XCI/KVxuXG52YXIgU2VsZWN0YWJsZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KG51bGwpO1xuZXhwb3J0IHZhciBtYWtlRXZlbnRLZXkgPSBmdW5jdGlvbiBtYWtlRXZlbnRLZXkoZXZlbnRLZXksIGhyZWYpIHtcbiAgaWYgKGhyZWYgPT09IHZvaWQgMCkge1xuICAgIGhyZWYgPSBudWxsO1xuICB9XG5cbiAgaWYgKGV2ZW50S2V5ICE9IG51bGwpIHJldHVybiBTdHJpbmcoZXZlbnRLZXkpO1xuICByZXR1cm4gaHJlZiB8fCBudWxsO1xufTtcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGFibGVDb250ZXh0OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG52YXIgVGFiQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQobnVsbCk7XG5leHBvcnQgZGVmYXVsdCBUYWJDb250ZXh0OyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgX19ERVZfXyA9IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbic7XG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKF9fREVWX18pIHtcbiAgdmFyIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIHByaW50V2FybmluZyhmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDEgPyBsZW4gLSAxIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMTsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAxXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgZm9ybWF0LnJlcGxhY2UoLyVzL2csIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgIH0pO1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH1cblxuICB3YXJuaW5nID0gZnVuY3Rpb24oY29uZGl0aW9uLCBmb3JtYXQsIGFyZ3MpIHtcbiAgICB2YXIgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBhcmdzID0gbmV3IEFycmF5KGxlbiA+IDIgPyBsZW4gLSAyIDogMCk7XG4gICAgZm9yICh2YXIga2V5ID0gMjsga2V5IDwgbGVuOyBrZXkrKykge1xuICAgICAgYXJnc1trZXkgLSAyXSA9IGFyZ3VtZW50c1trZXldO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgcHJpbnRXYXJuaW5nLmFwcGx5KG51bGwsIFtmb3JtYXRdLmNvbmNhdChhcmdzKSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9OYXYnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBFbmRwb2ludCBmcm9tICcuLi9FbmRwb2ludCc7XHJcblxyXG5jb25zdCBDb21wb25lbnQgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHRhYiA9IHByb3BzLnRhYjtcclxuXHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrVGFiKG5ld1RhYikge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKGAvdmlkZW8vJHtwcm9wcy52aWR9LyR7bmV3VGFifWApXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudC1jb250YWluZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPSd2aWRlby1kZXRhaWxzLXRpdGxlJz5cclxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGV0YWlscy50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgPE5hdlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJwaWxsc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e29uQ2xpY2tUYWJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlS2V5PXt0YWJ9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJ2aWRlb1wiPlZpZGVvPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cInNvdXJjZXNcIiBkaXNhYmxlZD17IXByb3BzLmRldGFpbHMuaGFzU291cmNlc30+U291cmNlczwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdi5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2LkxpbmsgZXZlbnRLZXk9XCJ0cmFuc2NyaXB0XCIgZGlzYWJsZWQ9eyFwcm9wcy5kZXRhaWxzLmhhc1RyYW5zY3JpcHR9PlRyYW5zY3JpcHQ8L05hdi5MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2Lkl0ZW0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdi5MaW5rIGV2ZW50S2V5PVwidGFnc1wiIGRpc2FibGVkPXshcHJvcHMuZGV0YWlscy5oYXNUYWdzfT5UYWdzPC9OYXYuTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L05hdi5JdGVtPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8TmF2Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYXYuTGluayBldmVudEtleT1cInNvdW5kdHJhY2tcIiBkaXNhYmxlZD17IXByb3BzLmRldGFpbHMuaGFzU291bmRUcmFja30+U291bmR0cmFjazwvTmF2Lkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9OYXYuSXRlbT5cclxuICAgICAgICAgICAgICAgIDwvTmF2PlxyXG5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuQ29tcG9uZW50LmZldGNoRGV0YWlscyA9IGFzeW5jICh2aWQpID0+IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0VuZHBvaW50LnVybH0vdmlkZW8vJHt2aWR9YCk7XHJcbiAgICBjb25zdCBkZXRhaWxzID0gYXdhaXQgcmVzLmpzb24oKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlOiBkZXRhaWxzLmluZm8udGl0bGUsIFxyXG5cclxuICAgICAgICBoYXNTb3VyY2VzOiBkZXRhaWxzLnNvdXJjZXMgIT0gdW5kZWZpbmVkLCBcclxuICAgICAgICBoYXNUcmFuc2NyaXB0OiBkZXRhaWxzLnRyYW5zY3JpcHQgIT0gdW5kZWZpbmVkICYmIGRldGFpbHMudHJhbnNjcmlwdC5lbiAhPSB1bmRlZmluZWQsIFxyXG4gICAgICAgIGhhc1NvdW5kVHJhY2s6IGRldGFpbHMuaW5mby5zb3VuZHRyYWNrICE9IHVuZGVmaW5lZCwgXHJcbiAgICAgICAgaGFzVGFnczogZGV0YWlscy50YWdzICE9IHVuZGVmaW5lZFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==