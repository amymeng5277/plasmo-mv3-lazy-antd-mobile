(function(define){var __define; typeof define === "function" && (__define=define,define=null);
// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lSBCJ":[function(require,module,exports) {
var $parcel$ReactRefreshHelpers$d936 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$d936.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Advanced);
var _jsxDevRuntime = require("react/jsx-dev-runtime");
var _react = require("react");
var _textArea = require("antd-mobile/es/components/text-area/text-area");
var _s = $RefreshSig$();
function Advanced() {
    _s();
    const [value, setValue] = (0, _react.useState)("");
    return /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("div", {
        className: "tw-mt-4 tw-rounded-lg tw-border tw-border-slate-200 tw-p-3",
        children: [
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)("p", {
                className: "tw-mb-2 tw-mt-0 tw-text-xs tw-font-semibold",
                children: "Second dynamic import() boundary"
            }, void 0, false, {
                fileName: "ui/advanced.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, _jsxDevRuntime.jsxDEV)((0, _textArea.TextArea), {
                value: value,
                onChange: setValue,
                rows: 3,
                placeholder: "Editor code loads on demand"
            }, void 0, false, {
                fileName: "ui/advanced.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "ui/advanced.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_s(Advanced, "dBtK6I2q1m3rcfzPBa0nrbv/iCI=");
_c = Advanced;
var _c;
$RefreshReg$(_c, "Advanced");

  $parcel$ReactRefreshHelpers$d936.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react/jsx-dev-runtime":"enCic","react":"f1OD5","antd-mobile/es/components/text-area/text-area":"98gs4","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"bKSen"}],"enCic":[function(require,module,exports) {
"use strict";
module.exports = require("4a51f345d5509e7a");

},{"4a51f345d5509e7a":"5fE9F"}],"5fE9F":[function(require,module,exports) {
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    var React = require("d54164b73c4f1df3");
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for("react.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") return maybeIterator;
        return null;
    }
    var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning("error", format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== "") {
            format += "%s";
            args = args.concat([
                stack
            ]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
        var argsWithFormat = args.map(function(item) {
            return String(item);
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift("Warning: " + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    // -----------------------------------------------------------------------------
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    var REACT_MODULE_REFERENCE;
    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
    function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
        if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
        }
        return false;
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) return displayName;
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber
    function getContextName(type) {
        return type.displayName || "Context";
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
    function getComponentNameFromType(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === "number") error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        if (typeof type === "function") return type.displayName || type.name || null;
        if (typeof type === "string") return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) return outerName;
                return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentNameFromType(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var assign = Object.assign;
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return "\n" + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === "string") {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = "\n" + sampleLines[s].replace(" at new ", " at "); // If our component frame is labeled "<anonymous>"
                            // but we have a user-provided "displayName"
                            // splice it in to make the stack more readable.
                            if (fn.displayName && _frame.includes("<anonymous>")) _frame = _frame.replace("<anonymous>", fn.displayName);
                            if (typeof fn === "function") componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0);
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        if (typeof fn === "function") componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return "";
        if (typeof type === "function") return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === "string") return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return "";
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== "function") {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
    function isArray(a) {
        return isArrayImpl(a);
    }
    /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        return type;
    } // $FlowFixMe only called in DEV, so void return is not possible.
    function willCoercionThrow(value) {
        try {
            testStringCoercion(value);
            return false;
        } catch (e) {
            return true;
        }
    }
    function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
    }
    var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown;
    var specialPropRefWarningShown;
    var didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function warnIfStringRefCannotBeAutoConverted(config, self) {
        if (typeof config.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */ function jsxDEV(type, config, maybeKey, source, self) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null; // Currently, key can be spread in as a prop. This causes a potential
        // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
        // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
        // but as an intermediary step, we will use jsxDEV for everything except
        // <div {...props} key="Hi" />, because we aren't currently able to tell if
        // key is explicitly declared to be undefined or not.
        if (maybeKey !== undefined) {
            checkKeyStringCoercion(maybeKey);
            key = "" + maybeKey;
        }
        if (hasValidKey(config)) {
            checkKeyStringCoercion(config.key);
            key = "" + config.key;
        }
        if (hasValidRef(config)) {
            ref = config.ref;
            warnIfStringRefCannotBeAutoConverted(config, self);
        } // Remaining properties are added to a new props object
        for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
         // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner$1.current) {
            var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);
            if (name) return "\n\nCheck the render method of `" + name + "`.";
        }
        return "";
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
        }
        return "";
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = "";
        if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== "object") return;
        if (isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === "string") return;
        var propTypes;
        if (typeof type === "function") propTypes = type.propTypes;
        else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
        }
        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
        }
    }
    var didWarnAboutKeySpread = {};
    function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = "";
            if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendum(source);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = "null";
            else if (isArray(type)) typeString = "array";
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
            } else typeString = typeof type;
            error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) {
            var children = props.children;
            if (children !== undefined) {
                if (isStaticChildren) {
                    if (isArray(children)) {
                        for(var i = 0; i < children.length; i++)validateChildKeys(children[i], type);
                        if (Object.freeze) Object.freeze(children);
                    } else error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                } else validateChildKeys(children, type);
            }
        }
        if (hasOwnProperty.call(props, "key")) {
            var componentName = getComponentNameFromType(type);
            var keys = Object.keys(props).filter(function(k) {
                return k !== "key";
            });
            var beforeExample = keys.length > 0 ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            if (!didWarnAboutKeySpread[componentName + beforeExample]) {
                var afterExample = keys.length > 0 ? "{" + keys.join(": ..., ") + ": ...}" : "{}";
                error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', beforeExample, componentName, afterExample, componentName);
                didWarnAboutKeySpread[componentName + beforeExample] = true;
            }
        }
        if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    } // These two functions exist to still get child warnings in dev
    var jsxDEV$1 = jsxWithValidation;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = jsxDEV$1;
})();

},{"d54164b73c4f1df3":"f1OD5"}],"f1OD5":[function(require,module,exports) {
"use strict";
module.exports = require("c39d1112defea06c");

},{"c39d1112defea06c":"eZt2j"}],"eZt2j":[function(require,module,exports) {
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    "use strict";
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var ReactVersion = "18.3.1";
    // ATTENTION
    // When adding new symbols to this file,
    // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
    // The Symbol used to tag the ReactElement-like types.
    var REACT_ELEMENT_TYPE = Symbol.for("react.element");
    var REACT_PORTAL_TYPE = Symbol.for("react.portal");
    var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
    var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
    var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
    var REACT_CONTEXT_TYPE = Symbol.for("react.context");
    var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
    var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
    var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
    var REACT_MEMO_TYPE = Symbol.for("react.memo");
    var REACT_LAZY_TYPE = Symbol.for("react.lazy");
    var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
    var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = "@@iterator";
    function getIteratorFn(maybeIterable) {
        if (maybeIterable === null || typeof maybeIterable !== "object") return null;
        var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
        if (typeof maybeIterator === "function") return maybeIterator;
        return null;
    }
    /**
 * Keeps track of the current dispatcher.
 */ var ReactCurrentDispatcher = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    /**
 * Keeps track of the current batch's configuration such as how long an update
 * should suspend for if it needs to.
 */ var ReactCurrentBatchConfig = {
        transition: null
    };
    var ReactCurrentActQueue = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: false,
        didScheduleLegacyUpdate: false
    };
    /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */ var ReactCurrentOwner = {
        /**
   * @internal
   * @type {ReactComponent}
   */ current: null
    };
    var ReactDebugCurrentFrame = {};
    var currentExtraStackFrame = null;
    function setExtraStackFrame(stack) {
        currentExtraStackFrame = stack;
    }
    ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
        currentExtraStackFrame = stack;
    }; // Stack implementation injected by the current renderer.
    ReactDebugCurrentFrame.getCurrentStack = null;
    ReactDebugCurrentFrame.getStackAddendum = function() {
        var stack = ""; // Add an extra top frame while an element is being validated
        if (currentExtraStackFrame) stack += currentExtraStackFrame;
         // Delegate to the injected renderer-specific implementation
        var impl = ReactDebugCurrentFrame.getCurrentStack;
        if (impl) stack += impl() || "";
        return stack;
    };
    // -----------------------------------------------------------------------------
    var enableScopeAPI = false; // Experimental Create Event Handle API.
    var enableCacheElement = false;
    var enableTransitionTracing = false; // No known bugs, but needs performance testing
    var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
    // stuff. Intended to enable React core members to more easily debug scheduling
    // issues in DEV builds.
    var enableDebugTracing = false; // Track which Fiber(s) schedule render work.
    var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner
    };
    ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
    ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
    // by calls to these methods by a Babel plugin.
    //
    // In PROD (or in packages without access to React internals),
    // they are left as they are instead.
    function warn(format) {
        for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++)args[_key - 1] = arguments[_key];
        printWarning("warn", format, args);
    }
    function error(format) {
        for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
        printWarning("error", format, args);
    }
    function printWarning(level, format, args) {
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        var stack = ReactDebugCurrentFrame.getStackAddendum();
        if (stack !== "") {
            format += "%s";
            args = args.concat([
                stack
            ]);
        } // eslint-disable-next-line react-internal/safe-string-coercion
        var argsWithFormat = args.map(function(item) {
            return String(item);
        }); // Careful: RN currently depends on this prefix
        argsWithFormat.unshift("Warning: " + format); // We intentionally don't use spread (or .apply) directly because it
        // breaks IE9: https://github.com/facebook/react/issues/13610
        // eslint-disable-next-line react-internal/no-production-logging
        Function.prototype.apply.call(console[level], console, argsWithFormat);
    }
    var didWarnStateUpdateForUnmountedComponent = {};
    function warnNoop(publicInstance, callerName) {
        var _constructor = publicInstance.constructor;
        var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
        var warningKey = componentName + "." + callerName;
        if (didWarnStateUpdateForUnmountedComponent[warningKey]) return;
        error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
        didWarnStateUpdateForUnmountedComponent[warningKey] = true;
    }
    /**
 * This is the abstract API for an update queue.
 */ var ReactNoopUpdateQueue = {
        /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */ isMounted: function(publicInstance) {
            return false;
        },
        /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
        },
        /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} callerName name of the calling function in the public API.
   * @internal
   */ enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
        },
        /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after component is updated.
   * @param {?string} Name of the calling function in the public API.
   * @internal
   */ enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
        }
    };
    var assign = Object.assign;
    var emptyObject = {};
    Object.freeze(emptyObject);
    /**
 * Base class helpers for the updating state of a component.
 */ function Component(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.
        this.updater = updater || ReactNoopUpdateQueue;
    }
    Component.prototype.isReactComponent = {};
    /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ Component.prototype.setState = function(partialState, callback) {
        if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    };
    var defineDeprecationWarning = function(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return undefined;
            }
        });
    };
    for(var fnName in deprecatedAPIs)if (deprecatedAPIs.hasOwnProperty(fnName)) defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    function ComponentDummy() {}
    ComponentDummy.prototype = Component.prototype;
    /**
 * Convenience component with default shallow equality check for sCU.
 */ function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
    pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.
    assign(pureComponentPrototype, Component.prototype);
    pureComponentPrototype.isPureReactComponent = true;
    // an immutable object with a single mutable value
    function createRef() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    }
    var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare
    function isArray(a) {
        return isArrayImpl(a);
    }
    /*
 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
 *
 * The functions in this module will throw an easier-to-understand,
 * easier-to-debug exception with a clear errors message message explaining the
 * problem. (Instead of a confusing exception thrown inside the implementation
 * of the `value` object).
 */ // $FlowFixMe only called in DEV, so void return is not possible.
    function typeName(value) {
        // toStringTag is needed for namespaced types like Temporal.Instant
        var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
        var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
        return type;
    } // $FlowFixMe only called in DEV, so void return is not possible.
    function willCoercionThrow(value) {
        try {
            testStringCoercion(value);
            return false;
        } catch (e) {
            return true;
        }
    }
    function testStringCoercion(value) {
        // If you ended up here by following an exception call stack, here's what's
        // happened: you supplied an object or symbol value to React (as a prop, key,
        // DOM attribute, CSS property, string ref, etc.) and when React tried to
        // coerce it to a string using `'' + value`, an exception was thrown.
        //
        // The most common types that will cause this exception are `Symbol` instances
        // and Temporal objects like `Temporal.Instant`. But any object that has a
        // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
        // exception. (Library authors do this to prevent users from using built-in
        // numeric operators like `+` or comparison operators like `>=` because custom
        // methods are needed to perform accurate arithmetic or comparison.)
        //
        // To fix the problem, coerce this object or symbol value to a string before
        // passing it to React. The most reliable way is usually `String(value)`.
        //
        // To find which value is throwing, check the browser or debugger console.
        // Before this exception was thrown, there should be `console.error` output
        // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
        // problem and how that type was used: key, atrribute, input value prop, etc.
        // In most cases, this console output also shows the component and its
        // ancestor components where the exception happened.
        //
        // eslint-disable-next-line react-internal/safe-string-coercion
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        if (willCoercionThrow(value)) {
            error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
            return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
        }
    }
    function getWrappedName(outerType, innerType, wrapperName) {
        var displayName = outerType.displayName;
        if (displayName) return displayName;
        var functionName = innerType.displayName || innerType.name || "";
        return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
    } // Keep in sync with react-reconciler/getComponentNameFromFiber
    function getContextName(type) {
        return type.displayName || "Context";
    } // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.
    function getComponentNameFromType(type) {
        if (type == null) // Host root, text node or just invalid type.
        return null;
        if (typeof type.tag === "number") error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
        if (typeof type === "function") return type.displayName || type.name || null;
        if (typeof type === "string") return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
            case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
            case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
            case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) return outerName;
                return getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    return getComponentNameFromType(init(payload));
                } catch (x) {
                    return null;
                }
        }
        return null;
    }
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
    };
    var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
    didWarnAboutStringRefs = {};
    function hasValidRef(config) {
        if (hasOwnProperty.call(config, "ref")) {
            var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.ref !== undefined;
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return false;
        }
        return config.key !== undefined;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function() {
            if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
        });
    }
    function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function() {
            if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
            }
        };
        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
        });
    }
    function warnIfStringRefCannotBeAutoConverted(config) {
        if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
            }
        }
    }
    /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */ var ReactElement = function(type, key, ref, self, source, owner, props) {
        var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type: type,
            key: key,
            ref: ref,
            props: props,
            // Record the component responsible for creating this element.
            _owner: owner
        };
        // The validation flag is currently mutative. We put it on
        // an external backing store so that we can freeze the whole object.
        // This can be replaced with a WeakMap once they are implemented in
        // commonly used development environments.
        element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
        // the validation flag non-enumerable (where possible, which should
        // include every environment we run tests in), so the test framework
        // ignores it.
        Object.defineProperty(element._store, "validated", {
            configurable: false,
            enumerable: false,
            writable: true,
            value: false
        }); // self and source are DEV only properties.
        Object.defineProperty(element, "_self", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: self
        }); // Two elements created in two different places should be considered
        // equal for testing purposes and therefore we hide it from enumeration.
        Object.defineProperty(element, "_source", {
            configurable: false,
            enumerable: false,
            writable: false,
            value: source
        });
        if (Object.freeze) {
            Object.freeze(element.props);
            Object.freeze(element);
        }
        return element;
    };
    /**
 * Create and return a new ReactElement of the given type.
 * See https://reactjs.org/docs/react-api.html#createelement
 */ function createElement(type, config, children) {
        var propName; // Reserved names are extracted
        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;
        if (config != null) {
            if (hasValidRef(config)) {
                ref = config.ref;
                warnIfStringRefCannotBeAutoConverted(config);
            }
            if (hasValidKey(config)) {
                checkKeyStringCoercion(config.key);
                key = "" + config.key;
            }
            self = config.__self === undefined ? null : config.__self;
            source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) props[propName] = config[propName];
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            if (Object.freeze) Object.freeze(childArray);
            props.children = childArray;
        } // Resolve default props
        if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for(propName in defaultProps)if (props[propName] === undefined) props[propName] = defaultProps[propName];
        }
        if (key || ref) {
            var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
            if (key) defineKeyPropWarningGetter(props, displayName);
            if (ref) defineRefPropWarningGetter(props, displayName);
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
    }
    /**
 * Clone and return a new ReactElement using element as the starting point.
 * See https://reactjs.org/docs/react-api.html#cloneelement
 */ function cloneElement(element, config, children) {
        if (element === null || element === undefined) throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
        var propName; // Original props are copied
        var props = assign({}, element.props); // Reserved names are extracted
        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.
        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.
        var source = element._source; // Owner will be preserved, unless ref is overridden
        var owner = element._owner;
        if (config != null) {
            if (hasValidRef(config)) {
                // Silently steal the ref from the parent.
                ref = config.ref;
                owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
                checkKeyStringCoercion(config.key);
                key = "" + config.key;
            } // Remaining properties override existing props
            var defaultProps;
            if (element.type && element.type.defaultProps) defaultProps = element.type.defaultProps;
            for(propName in config)if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === undefined && defaultProps !== undefined) // Resolve default props
                props[propName] = defaultProps[propName];
                else props[propName] = config[propName];
            }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.
        var childrenLength = arguments.length - 2;
        if (childrenLength === 1) props.children = children;
        else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for(var i = 0; i < childrenLength; i++)childArray[i] = arguments[i + 2];
            props.children = childArray;
        }
        return ReactElement(element.type, key, ref, self, source, owner, props);
    }
    /**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */ function isValidElement(object) {
        return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var SEPARATOR = ".";
    var SUBSEPARATOR = ":";
    /**
 * Escape and wrap key so it is safe to use as a reactid
 *
 * @param {string} key to be escaped.
 * @return {string} the escaped key.
 */ function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
        });
        return "$" + escapedString;
    }
    /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */ var didWarnAboutMaps = false;
    var userProvidedKeyEscapeRegex = /\/+/g;
    function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, "$&/");
    }
    /**
 * Generate a key string that identifies a element within a set.
 *
 * @param {*} element A element that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */ function getElementKey(element, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof element === "object" && element !== null && element.key != null) {
            checkKeyStringCoercion(element.key);
            return escape("" + element.key);
        } // Implicit key determined by the index in the set
        return index.toString(36);
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if (type === "undefined" || type === "boolean") // All of the above are perceived as null.
        children = null;
        var invokeCallback = false;
        if (children === null) invokeCallback = true;
        else switch(type){
            case "string":
            case "number":
                invokeCallback = true;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = true;
                }
        }
        if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
            // so that it's consistent if the number of children grows:
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
                var escapedChildKey = "";
                if (childKey != null) escapedChildKey = escapeUserProvidedKey(childKey) + "/";
                mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                    return c;
                });
            } else if (mappedChild != null) {
                if (isValidElement(mappedChild)) {
                    // The `if` statement here prevents auto-disabling of the safe
                    // coercion ESLint rule, so we must manually disable it below.
                    // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                    if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) checkKeyStringCoercion(mappedChild.key);
                    mappedChild = cloneAndReplaceKey(mappedChild, // traverseAllChildren used to do for objects as children
                    escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey);
                }
                array.push(mappedChild);
            }
            return 1;
        }
        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.
        var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
        if (isArray(children)) for(var i = 0; i < children.length; i++){
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
        }
        else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
                var iterableChildren = children;
                // Warn about using Maps as children
                if (iteratorFn === iterableChildren.entries) {
                    if (!didWarnAboutMaps) warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                    didWarnAboutMaps = true;
                }
                var iterator = iteratorFn.call(iterableChildren);
                var step;
                var ii = 0;
                while(!(step = iterator.next()).done){
                    child = step.value;
                    nextName = nextNamePrefix + getElementKey(child, ii++);
                    subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
                }
            } else if (type === "object") {
                // eslint-disable-next-line react-internal/safe-string-coercion
                var childrenString = String(children);
                throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). " + "If you meant to render a collection of children, use an array " + "instead.");
            }
        }
        return subtreeCount;
    }
    /**
 * Maps children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenmap
 *
 * The provided mapFunction(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */ function mapChildren(children, func, context) {
        if (children == null) return children;
        var result = [];
        var count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrencount
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */ function countChildren(children) {
        var n = 0;
        mapChildren(children, function() {
            n++; // Don't return anything
        });
        return n;
    }
    /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */ function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function() {
            forEachFunc.apply(this, arguments); // Don't return anything.
        }, forEachContext);
    }
    /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */ function toArray(children) {
        return mapChildren(children, function(child) {
            return child;
        }) || [];
    }
    /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrenonly
 *
 * The current implementation of this function assumes that a single child gets
 * passed without a wrapper, but the purpose of this helper function is to
 * abstract away the particular structure of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactElement} The first and only `ReactElement` contained in the
 * structure.
 */ function onlyChild(children) {
        if (!isValidElement(children)) throw new Error("React.Children.only expected to receive a single React element child.");
        return children;
    }
    function createContext(defaultValue) {
        // TODO: Second argument used to be an optional `calculateChangedBits`
        // function. Warn to reserve for future use?
        var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
        };
        context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;
        // A separate object, but proxies back to the original context object for
        // backwards compatibility. It has a different $$typeof, so we can properly
        // warn for the incorrect usage of Context as a Consumer.
        var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context
        }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here
        Object.defineProperties(Consumer, {
            Provider: {
                get: function() {
                    if (!hasWarnedAboutUsingConsumerProvider) {
                        hasWarnedAboutUsingConsumerProvider = true;
                        error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                    }
                    return context.Provider;
                },
                set: function(_Provider) {
                    context.Provider = _Provider;
                }
            },
            _currentValue: {
                get: function() {
                    return context._currentValue;
                },
                set: function(_currentValue) {
                    context._currentValue = _currentValue;
                }
            },
            _currentValue2: {
                get: function() {
                    return context._currentValue2;
                },
                set: function(_currentValue2) {
                    context._currentValue2 = _currentValue2;
                }
            },
            _threadCount: {
                get: function() {
                    return context._threadCount;
                },
                set: function(_threadCount) {
                    context._threadCount = _threadCount;
                }
            },
            Consumer: {
                get: function() {
                    if (!hasWarnedAboutUsingNestedContextConsumers) {
                        hasWarnedAboutUsingNestedContextConsumers = true;
                        error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                    }
                    return context.Consumer;
                }
            },
            displayName: {
                get: function() {
                    return context.displayName;
                },
                set: function(displayName) {
                    if (!hasWarnedAboutDisplayNameOnConsumer) {
                        warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                        hasWarnedAboutDisplayNameOnConsumer = true;
                    }
                }
            }
        }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty
        context.Consumer = Consumer;
        context._currentRenderer = null;
        context._currentRenderer2 = null;
        return context;
    }
    var Uninitialized = -1;
    var Pending = 0;
    var Resolved = 1;
    var Rejected = 2;
    function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor(); // Transition to the next state.
            // This might throw either because it's missing or throws. If so, we treat it
            // as still uninitialized and try again next time. Which is the same as what
            // happens if the ctor or any wrappers processing the ctor throws. This might
            // end up fixing it if the resolution was a concurrency bug.
            thenable.then(function(moduleObject) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                    // Transition to the next state.
                    var resolved = payload;
                    resolved._status = Resolved;
                    resolved._result = moduleObject;
                }
            }, function(error) {
                if (payload._status === Pending || payload._status === Uninitialized) {
                    // Transition to the next state.
                    var rejected = payload;
                    rejected._status = Rejected;
                    rejected._result = error;
                }
            });
            if (payload._status === Uninitialized) {
                // In case, we're still uninitialized, then we're waiting for the thenable
                // to resolve. Set it as pending in the meantime.
                var pending = payload;
                pending._status = Pending;
                pending._result = thenable;
            }
        }
        if (payload._status === Resolved) {
            var moduleObject = payload._result;
            if (moduleObject === undefined) error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
            if (!("default" in moduleObject)) error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
            return moduleObject.default;
        } else throw payload._result;
    }
    function lazy(ctor) {
        var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
        };
        var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
        };
        // In production, this would just set it on the object.
        var defaultProps;
        var propTypes; // $FlowFixMe
        Object.defineProperties(lazyType, {
            defaultProps: {
                configurable: true,
                get: function() {
                    return defaultProps;
                },
                set: function(newDefaultProps) {
                    error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    defaultProps = newDefaultProps; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, "defaultProps", {
                        enumerable: true
                    });
                }
            },
            propTypes: {
                configurable: true,
                get: function() {
                    return propTypes;
                },
                set: function(newPropTypes) {
                    error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                    propTypes = newPropTypes; // Match production behavior more closely:
                    // $FlowFixMe
                    Object.defineProperty(lazyType, "propTypes", {
                        enumerable: true
                    });
                }
            }
        });
        return lazyType;
    }
    function forwardRef(render) {
        if (render != null && render.$$typeof === REACT_MEMO_TYPE) error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
        else if (typeof render !== "function") error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
        else if (render.length !== 0 && render.length !== 2) error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        }
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        };
        var ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.forwardRef((props, ref) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.
                if (!render.name && !render.displayName) render.displayName = name;
            }
        });
        return elementType;
    }
    var REACT_MODULE_REFERENCE;
    REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
    function isValidElementType(type) {
        if (typeof type === "string" || typeof type === "function") return true;
         // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).
        if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) return true;
        if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) return true;
        }
        return false;
    }
    function memo(type, compare) {
        if (!isValidElementType(type)) error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
        var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: compare === undefined ? null : compare
        };
        var ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: false,
            configurable: true,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name; // The inner component shouldn't inherit this display name in most cases,
                // because the component may be used elsewhere.
                // But it's nice for anonymous functions to inherit the name,
                // so that our component-stack generation logic will display their frames.
                // An anonymous function generally suggests a pattern like:
                //   React.memo((props) => {...});
                // This kind of inner function is not used elsewhere so the side effect is okay.
                if (!type.name && !type.displayName) type.displayName = name;
            }
        });
        return elementType;
    }
    function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;
        if (dispatcher === null) error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
        // intentionally don't throw our own error because this is in a hot path.
        // Also helps ensure this is inlined.
        return dispatcher;
    }
    function useContext(Context) {
        var dispatcher = resolveDispatcher();
        // TODO: add a more generic warning for invalid values.
        if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.
            if (realContext.Consumer === Context) error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
            else if (realContext.Provider === Context) error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return dispatcher.useContext(Context);
    }
    function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
    }
    function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
    }
    function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
    }
    function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
    }
    function useInsertionEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useInsertionEffect(create, deps);
    }
    function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
    }
    function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
    }
    function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
    }
    function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
    }
    function useDebugValue(value, formatterFn) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDebugValue(value, formatterFn);
    }
    function useTransition() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useTransition();
    }
    function useDeferredValue(value) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useDeferredValue(value);
    }
    function useId() {
        var dispatcher = resolveDispatcher();
        return dispatcher.useId();
    }
    function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    }
    // Helpers to patch console.logs to avoid logging during side-effect free
    // replaying on render function. This currently only patches the object
    // lazily which won't cover if the log function was extracted eagerly.
    // We could also eagerly patch the method.
    var disabledDepth = 0;
    var prevLog;
    var prevInfo;
    var prevWarn;
    var prevError;
    var prevGroup;
    var prevGroupCollapsed;
    var prevGroupEnd;
    function disabledLog() {}
    disabledLog.__reactDisabledLog = true;
    function disableLogs() {
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099
            var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        /* eslint-enable react-internal/no-production-logging */ }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (disabledDepth === 0) {
            /* eslint-disable react-internal/no-production-logging */ var props = {
                configurable: true,
                enumerable: true,
                writable: true
            }; // $FlowFixMe Flow thinks console is immutable.
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        /* eslint-enable react-internal/no-production-logging */ }
        if (disabledDepth < 0) error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
    var prefix;
    function describeBuiltInComponentFrame(name, source, ownerFn) {
        if (prefix === undefined) // Extract the VM specific prefix used by each line.
        try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
        }
         // We use the prefix to ensure our stacks line up with native stack frames.
        return "\n" + prefix + name;
    }
    var reentry = false;
    var componentFrameCache;
    var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
    componentFrameCache = new PossiblyWeakMap();
    function describeNativeComponentFrame(fn, construct) {
        // If something asked for a stack inside a fake render, it should get ignored.
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (frame !== undefined) return frame;
        var control;
        reentry = true;
        var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.
        Error.prepareStackTrace = undefined;
        var previousDispatcher;
        previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
        // for warnings.
        ReactCurrentDispatcher$1.current = null;
        disableLogs();
        try {
            // This should throw.
            if (construct) {
                // Something should be setting the props in the constructor.
                var Fake = function() {
                    throw Error();
                }; // $FlowFixMe
                Object.defineProperty(Fake.prototype, "props", {
                    set: function() {
                        // We use a throwing setter instead of frozen or non-writable props
                        // because that won't throw in a non-strict mode function.
                        throw Error();
                    }
                });
                if (typeof Reflect === "object" && Reflect.construct) {
                    // We construct a different control for this case to include any extra
                    // frames added by the construct call.
                    try {
                        Reflect.construct(Fake, []);
                    } catch (x) {
                        control = x;
                    }
                    Reflect.construct(fn, [], Fake);
                } else {
                    try {
                        Fake.call();
                    } catch (x) {
                        control = x;
                    }
                    fn.call(Fake.prototype);
                }
            } else {
                try {
                    throw Error();
                } catch (x) {
                    control = x;
                }
                fn();
            }
        } catch (sample) {
            // This is inlined manually because closure doesn't do it for us.
            if (sample && control && typeof sample.stack === "string") {
                // This extracts the first frame from the sample that isn't also in the control.
                // Skipping one frame that we assume is the frame that calls the two.
                var sampleLines = sample.stack.split("\n");
                var controlLines = control.stack.split("\n");
                var s = sampleLines.length - 1;
                var c = controlLines.length - 1;
                while(s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c])// We expect at least one stack frame to be shared.
                // Typically this will be the root most one. However, stack frames may be
                // cut off due to maximum stack limits. In this case, one maybe cut off
                // earlier than the other. We assume that the sample is longer or the same
                // and there for cut off earlier. So we should find the root most frame in
                // the sample somewhere in the control.
                c--;
                for(; s >= 1 && c >= 0; s--, c--)// Next we find the first one that isn't the same which should be the
                // frame that called our sample function and the control.
                if (sampleLines[s] !== controlLines[c]) {
                    // In V8, the first line is describing the message but other VMs don't.
                    // If we're about to return the first line, and the control is also on the same
                    // line, that's a pretty good indicator that our sample threw at same line as
                    // the control. I.e. before we entered the sample frame. So we ignore this result.
                    // This can happen if you passed a class to function component, or non-function.
                    if (s !== 1 || c !== 1) do {
                        s--;
                        c--; // We may still have similar intermediate frames from the construct call.
                        // The next one that isn't the same should be our match though.
                        if (c < 0 || sampleLines[s] !== controlLines[c]) {
                            // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                            var _frame = "\n" + sampleLines[s].replace(" at new ", " at "); // If our component frame is labeled "<anonymous>"
                            // but we have a user-provided "displayName"
                            // splice it in to make the stack more readable.
                            if (fn.displayName && _frame.includes("<anonymous>")) _frame = _frame.replace("<anonymous>", fn.displayName);
                            if (typeof fn === "function") componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                    }while (s >= 1 && c >= 0);
                    break;
                }
            }
        } finally{
            reentry = false;
            ReactCurrentDispatcher$1.current = previousDispatcher;
            reenableLogs();
            Error.prepareStackTrace = previousPrepareStackTrace;
        } // Fallback to just using the name if we couldn't make it throw.
        var name = fn ? fn.displayName || fn.name : "";
        var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
        if (typeof fn === "function") componentFrameCache.set(fn, syntheticFrame);
        return syntheticFrame;
    }
    function describeFunctionComponentFrame(fn, source, ownerFn) {
        return describeNativeComponentFrame(fn, false);
    }
    function shouldConstruct(Component) {
        var prototype = Component.prototype;
        return !!(prototype && prototype.isReactComponent);
    }
    function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
        if (type == null) return "";
        if (typeof type === "function") return describeNativeComponentFrame(type, shouldConstruct(type));
        if (typeof type === "string") return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if (typeof type === "object") switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
            case REACT_MEMO_TYPE:
                // Memo may contain any component type so we recursively resolve it.
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
            case REACT_LAZY_TYPE:
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                    // Lazy may contain any component type so we recursively resolve it.
                    return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {}
        }
        return "";
    }
    var loggedTypeFailures = {};
    var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
    function setCurrentlyValidatingElement(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
        } else ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
    function checkPropTypes(typeSpecs, values, location, componentName, element) {
        // $FlowFixMe This is okay but Flow doesn't know it.
        var has = Function.call.bind(hasOwnProperty);
        for(var typeSpecName in typeSpecs)if (has(typeSpecs, typeSpecName)) {
            var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
            // fail the render phase where it didn't fail before. So we log it.
            // After these have been cleaned up, we'll let them throw.
            try {
                // This is intentionally an invariant that gets caught. It's the same
                // behavior as without this statement except with a better message.
                if (typeof typeSpecs[typeSpecName] !== "function") {
                    // eslint-disable-next-line react-internal/prod-error-codes
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; " + "it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`." + "This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                }
                error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ex) {
                error$1 = ex;
            }
            if (error$1 && !(error$1 instanceof Error)) {
                setCurrentlyValidatingElement(element);
                error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                setCurrentlyValidatingElement(null);
            }
            if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                // Only monitor this failure once because there tends to be a lot of the
                // same error.
                loggedTypeFailures[error$1.message] = true;
                setCurrentlyValidatingElement(element);
                error("Failed %s type: %s", location, error$1.message);
                setCurrentlyValidatingElement(null);
            }
        }
    }
    function setCurrentlyValidatingElement$1(element) {
        if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            setExtraStackFrame(stack);
        } else setExtraStackFrame(null);
    }
    var propTypesMisspellWarningShown;
    propTypesMisspellWarningShown = false;
    function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) return "\n\nCheck the render method of `" + name + "`.";
        }
        return "";
    }
    function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
        }
        return "";
    }
    function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) return getSourceInfoErrorAddendum(elementProps.__source);
        return "";
    }
    /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */ var ownerHasKeyUseWarning = {};
    function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();
        if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) info = "\n\nCheck the top-level render call using <" + parentName + ">.";
        }
        return info;
    }
    /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */ function validateExplicitKey(element, parentType) {
        if (!element._store || element._store.validated || element.key != null) return;
        element._store.validated = true;
        var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
        if (ownerHasKeyUseWarning[currentComponentErrorInfo]) return;
        ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
        // property, it may be the creator of the child that's responsible for
        // assigning it a key.
        var childOwner = "";
        if (element && element._owner && element._owner !== ReactCurrentOwner.current) // Give the component that originally created this child.
        childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
        setCurrentlyValidatingElement$1(element);
        error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
        setCurrentlyValidatingElement$1(null);
    }
    /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */ function validateChildKeys(node, parentType) {
        if (typeof node !== "object") return;
        if (isArray(node)) for(var i = 0; i < node.length; i++){
            var child = node[i];
            if (isValidElement(child)) validateExplicitKey(child, parentType);
        }
        else if (isValidElement(node)) // This element was passed in a valid location.
        {
            if (node._store) node._store.validated = true;
        } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") // Entry iterators used to provide implicit keys,
            // but now we print a separate warning for them later.
            {
                if (iteratorFn !== node.entries) {
                    var iterator = iteratorFn.call(node);
                    var step;
                    while(!(step = iterator.next()).done)if (isValidElement(step.value)) validateExplicitKey(step.value, parentType);
                }
            }
        }
    }
    /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */ function validatePropTypes(element) {
        var type = element.type;
        if (type === null || type === undefined || typeof type === "string") return;
        var propTypes;
        if (typeof type === "function") propTypes = type.propTypes;
        else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        type.$$typeof === REACT_MEMO_TYPE)) propTypes = type.propTypes;
        else return;
        if (propTypes) {
            // Intentionally inside to avoid triggering lazy initializers:
            var name = getComponentNameFromType(type);
            checkPropTypes(propTypes, element.props, "prop", name, element);
        } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
            propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:
            var _name = getComponentNameFromType(type);
            error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
        }
        if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
    }
    /**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */ function validateFragmentProps(fragment) {
        var keys = Object.keys(fragment.props);
        for(var i = 0; i < keys.length; i++){
            var key = keys[i];
            if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
            }
        }
        if (fragment.ref !== null) {
            setCurrentlyValidatingElement$1(fragment);
            error("Invalid attribute `ref` supplied to `React.Fragment`.");
            setCurrentlyValidatingElement$1(null);
        }
    }
    function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.
        if (!validType) {
            var info = "";
            if (type === undefined || typeof type === "object" && type !== null && Object.keys(type).length === 0) info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) info += sourceInfo;
            else info += getDeclarationErrorAddendum();
            var typeString;
            if (type === null) typeString = "null";
            else if (isArray(type)) typeString = "array";
            else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
            } else typeString = typeof type;
            error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
        }
        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.
        if (element == null) return element;
         // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)
        if (validType) for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], type);
        if (type === REACT_FRAGMENT_TYPE) validateFragmentProps(element);
        else validatePropTypes(element);
        return element;
    }
    var didWarnAboutDeprecatedCreateFactory = false;
    function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
        } // Legacy hook: remove it
        Object.defineProperty(validatedFactory, "type", {
            enumerable: false,
            get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                    value: type
                });
                return type;
            }
        });
        return validatedFactory;
    }
    function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);
        for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], newElement.type);
        validatePropTypes(newElement);
        return newElement;
    }
    function startTransition(scope, options) {
        var prevTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition = {};
        var currentTransition = ReactCurrentBatchConfig.transition;
        ReactCurrentBatchConfig.transition._updatedFibers = new Set();
        try {
            scope();
        } finally{
            ReactCurrentBatchConfig.transition = prevTransition;
            if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                currentTransition._updatedFibers.clear();
            }
        }
    }
    var didWarnAboutMessageChannel = false;
    var enqueueTaskImpl = null;
    function enqueueTask(task) {
        if (enqueueTaskImpl === null) try {
            // read require off the module object to get around the bundlers.
            // we don't want them to detect a require and bundle a Node polyfill.
            var requireString = ("require" + Math.random()).slice(0, 7);
            var nodeRequire = module && module[requireString]; // assuming we're in node, let's try to get node's
            // version of setImmediate, bypassing fake timers if any.
            enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
        } catch (_err) {
            // we're in a browser
            // we can't use regular timers because they may still be faked
            // so we try MessageChannel+postMessage instead
            enqueueTaskImpl = function(callback) {
                if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(undefined);
            };
        }
        return enqueueTaskImpl(task);
    }
    var actScopeDepth = 0;
    var didWarnNoAwaitAct = false;
    function act(callback) {
        // `act` calls can be nested, so we track the depth. This represents the
        // number of `act` scopes on the stack.
        var prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        if (ReactCurrentActQueue.current === null) // This is the outermost `act` scope. Initialize the queue. The reconciler
        // will detect the queue and use it instead of Scheduler.
        ReactCurrentActQueue.current = [];
        var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
        var result;
        try {
            // Used to reproduce behavior of `batchedUpdates` in legacy mode. Only
            // set to `true` while the given callback is executed, not for updates
            // triggered during an async event, because this is how the legacy
            // implementation of `act` behaved.
            ReactCurrentActQueue.isBatchingLegacy = true;
            result = callback(); // Replicate behavior of original `act` implementation in legacy mode,
            // which flushed updates immediately after the scope function exits, even
            // if it's an async function.
            if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                    ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                    flushActQueue(queue);
                }
            }
        } catch (error) {
            popActScope(prevActScopeDepth);
            throw error;
        } finally{
            ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
        }
        if (result !== null && typeof result === "object" && typeof result.then === "function") {
            var thenableResult = result; // The callback is an async function (i.e. returned a promise). Wait
            // for it to resolve before exiting the current scope.
            var wasAwaited = false;
            var thenable = {
                then: function(resolve, reject) {
                    wasAwaited = true;
                    thenableResult.then(function(returnValue) {
                        popActScope(prevActScopeDepth);
                        if (actScopeDepth === 0) // We've exited the outermost act scope. Recursively flush the
                        // queue until there's no remaining work.
                        recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                        else resolve(returnValue);
                    }, function(error) {
                        // The callback threw an error.
                        popActScope(prevActScopeDepth);
                        reject(error);
                    });
                }
            };
            if (!didWarnNoAwaitAct && typeof Promise !== "undefined") // eslint-disable-next-line no-undef
            Promise.resolve().then(function() {}).then(function() {
                if (!wasAwaited) {
                    didWarnNoAwaitAct = true;
                    error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                }
            });
            return thenable;
        } else {
            var returnValue = result; // The callback is not an async function. Exit the current scope
            // immediately, without awaiting.
            popActScope(prevActScopeDepth);
            if (actScopeDepth === 0) {
                // Exiting the outermost act scope. Flush the queue.
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                    flushActQueue(_queue);
                    ReactCurrentActQueue.current = null;
                } // Return a thenable. If the user awaits it, we'll flush again in
                // case additional work was scheduled by a microtask.
                var _thenable = {
                    then: function(resolve, reject) {
                        // Confirm we haven't re-entered another `act` scope, in case
                        // the user does something weird like await the thenable
                        // multiple times.
                        if (ReactCurrentActQueue.current === null) {
                            // Recursively flush the queue until there's no remaining work.
                            ReactCurrentActQueue.current = [];
                            recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                        } else resolve(returnValue);
                    }
                };
                return _thenable;
            } else {
                // Since we're inside a nested `act` scope, the returned thenable
                // immediately resolves. The outer scope will flush the queue.
                var _thenable2 = {
                    then: function(resolve, reject) {
                        resolve(returnValue);
                    }
                };
                return _thenable2;
            }
        }
    }
    function popActScope(prevActScopeDepth) {
        if (prevActScopeDepth !== actScopeDepth - 1) error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactCurrentActQueue.current;
        if (queue !== null) try {
            flushActQueue(queue);
            enqueueTask(function() {
                if (queue.length === 0) {
                    // No additional work was scheduled. Finish.
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                } else // Keep flushing work until there's none left.
                recursivelyFlushAsyncActWork(returnValue, resolve, reject);
            });
        } catch (error) {
            reject(error);
        }
        else resolve(returnValue);
    }
    var isFlushing = false;
    function flushActQueue(queue) {
        if (!isFlushing) {
            // Prevent re-entrance.
            isFlushing = true;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do callback = callback(true);
                    while (callback !== null);
                }
                queue.length = 0;
            } catch (error) {
                // If something throws, leave the remaining callbacks on the queue.
                queue = queue.slice(i + 1);
                throw error;
            } finally{
                isFlushing = false;
            }
        }
    }
    var createElement$1 = createElementWithValidation;
    var cloneElement$1 = cloneElementWithValidation;
    var createFactory = createFactoryWithValidation;
    var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
    };
    exports.Children = Children;
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
    exports.act = act;
    exports.cloneElement = cloneElement$1;
    exports.createContext = createContext;
    exports.createElement = createElement$1;
    exports.createFactory = createFactory;
    exports.createRef = createRef;
    exports.forwardRef = forwardRef;
    exports.isValidElement = isValidElement;
    exports.lazy = lazy;
    exports.memo = memo;
    exports.startTransition = startTransition;
    exports.unstable_act = act;
    exports.useCallback = useCallback;
    exports.useContext = useContext;
    exports.useDebugValue = useDebugValue;
    exports.useDeferredValue = useDeferredValue;
    exports.useEffect = useEffect;
    exports.useId = useId;
    exports.useImperativeHandle = useImperativeHandle;
    exports.useInsertionEffect = useInsertionEffect;
    exports.useLayoutEffect = useLayoutEffect;
    exports.useMemo = useMemo;
    exports.useReducer = useReducer;
    exports.useRef = useRef;
    exports.useState = useState;
    exports.useSyncExternalStore = useSyncExternalStore;
    exports.useTransition = useTransition;
    exports.version = ReactVersion;
    /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */ if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
})();

},{}],"98gs4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TextArea", ()=>TextArea);
var _ahooks = require("ahooks");
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _runes2 = require("runes2");
var _runes2Default = parcelHelpers.interopDefault(_runes2);
var _useInputHandleKeyDown = require("../../components/input/useInputHandleKeyDown");
var _useInputHandleKeyDownDefault = parcelHelpers.interopDefault(_useInputHandleKeyDown);
var _devLog = require("../../utils/dev-log");
var _nativeProps = require("../../utils/native-props");
var _usePropsValue = require("../../utils/use-props-value");
var _withDefaultProps = require("../../utils/with-default-props");
const classPrefix = "adm-text-area";
const defaultProps = {
    rows: 2,
    showCount: false,
    autoSize: false,
    defaultValue: ""
};
const TextArea = (0, _react.forwardRef)((p, ref)=>{
    const props = (0, _withDefaultProps.mergeProps)(defaultProps, p);
    const { autoSize, showCount, maxLength } = props;
    const [value, setValue] = (0, _usePropsValue.usePropsValue)(Object.assign(Object.assign({}, props), {
        value: props.value === null ? "" : props.value
    }));
    if (props.value === null) (0, _devLog.devError)("TextArea", "`value` prop on `TextArea` should not be `null`. Consider using an empty string to clear the component.");
    const nativeTextAreaRef = (0, _react.useRef)(null);
    // https://github.com/ant-design/ant-design-mobile/issues/5961
    const heightRef = (0, _react.useRef)("auto");
    // https://github.com/ant-design/ant-design-mobile/issues/6051
    const hiddenTextAreaRef = (0, _react.useRef)(null);
    const handleKeydown = (0, _useInputHandleKeyDownDefault.default)({
        onEnterPress: props.onEnterPress,
        onKeyDown: props.onKeyDown
    });
    (0, _react.useImperativeHandle)(ref, ()=>({
            clear: ()=>{
                setValue("");
            },
            focus: ()=>{
                var _a;
                (_a = nativeTextAreaRef.current) === null || _a === void 0 || _a.focus();
            },
            blur: ()=>{
                var _a;
                (_a = nativeTextAreaRef.current) === null || _a === void 0 || _a.blur();
            },
            get nativeElement () {
                return nativeTextAreaRef.current;
            }
        }));
    (0, _ahooks.useIsomorphicLayoutEffect)(()=>{
        if (!autoSize) return;
        const textArea = nativeTextAreaRef.current;
        const hiddenTextArea = hiddenTextAreaRef.current;
        if (!textArea) return;
        textArea.style.height = heightRef.current;
        if (!hiddenTextArea) return;
        let height = hiddenTextArea.scrollHeight;
        if (typeof autoSize === "object") {
            const computedStyle = window.getComputedStyle(textArea);
            const lineHeight = parseFloat(computedStyle.lineHeight);
            if (autoSize.minRows) height = Math.max(height, autoSize.minRows * lineHeight);
            if (autoSize.maxRows) height = Math.min(height, autoSize.maxRows * lineHeight);
        }
        heightRef.current = `${height}px`;
        textArea.style.height = `${height}px`;
    }, [
        value,
        autoSize
    ]);
    const compositingRef = (0, _react.useRef)(false);
    let count;
    const valueLength = (0, _runes2Default.default)(value).length;
    if (typeof showCount === "function") count = showCount(valueLength, maxLength);
    else if (showCount) count = (0, _reactDefault.default).createElement("div", {
        className: `${classPrefix}-count`
    }, maxLength === undefined ? valueLength : valueLength + "/" + maxLength);
    let rows = props.rows;
    if (typeof autoSize === "object") {
        if (autoSize.maxRows && rows > autoSize.maxRows) rows = autoSize.maxRows;
        if (autoSize.minRows && rows < autoSize.minRows) rows = autoSize.minRows;
    }
    return (0, _nativeProps.withNativeProps)(props, (0, _reactDefault.default).createElement("div", {
        className: classPrefix
    }, (0, _reactDefault.default).createElement("textarea", Object.assign({
        ref: nativeTextAreaRef,
        className: `${classPrefix}-element`,
        rows: rows,
        value: value,
        placeholder: props.placeholder,
        onChange: (e)=>{
            let v = e.target.value;
            if (maxLength && !compositingRef.current) v = (0, _runes2Default.default)(v).slice(0, maxLength).join("");
            setValue(v);
        },
        id: props.id,
        onCompositionStart: (e)=>{
            var _a;
            compositingRef.current = true;
            (_a = props.onCompositionStart) === null || _a === void 0 || _a.call(props, e);
        },
        onCompositionEnd: (e)=>{
            var _a;
            compositingRef.current = false;
            if (maxLength) {
                const v = e.target.value;
                setValue((0, _runes2Default.default)(v).slice(0, maxLength).join(""));
            }
            (_a = props.onCompositionEnd) === null || _a === void 0 || _a.call(props, e);
        },
        autoComplete: props.autoComplete,
        autoFocus: props.autoFocus,
        disabled: props.disabled,
        readOnly: props.readOnly,
        name: props.name,
        onFocus: props.onFocus,
        onBlur: props.onBlur,
        onClick: props.onClick,
        onKeyDown: handleKeydown
    }, {
        enterKeyHint: props.enterKeyHint
    })), count, autoSize && (0, _reactDefault.default).createElement("textarea", {
        ref: hiddenTextAreaRef,
        className: `${classPrefix}-element ${classPrefix}-element-hidden`,
        value: value,
        rows: rows,
        "aria-hidden": true,
        readOnly: true
    })));
});
TextArea.defaultProps = defaultProps;

},{"ahooks":"1RopS","react":"f1OD5","runes2":"2DEi9","../../components/input/useInputHandleKeyDown":"gR9WS","../../utils/dev-log":"7Feeo","../../utils/native-props":"iUHAm","../../utils/use-props-value":"7QePf","../../utils/with-default-props":"8o2Fj","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"1RopS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "useRequest", ()=>(0, _useRequestDefault.default));
parcelHelpers.export(exports, "useControllableValue", ()=>(0, _useControllableValueDefault.default));
parcelHelpers.export(exports, "useDynamicList", ()=>(0, _useDynamicListDefault.default));
parcelHelpers.export(exports, "useVirtualList", ()=>(0, _useVirtualListDefault.default));
parcelHelpers.export(exports, "useResponsive", ()=>(0, _useResponsiveDefault.default));
parcelHelpers.export(exports, "useEventEmitter", ()=>(0, _useEventEmitterDefault.default));
parcelHelpers.export(exports, "useLocalStorageState", ()=>(0, _useLocalStorageStateDefault.default));
parcelHelpers.export(exports, "useSessionStorageState", ()=>(0, _useSessionStorageStateDefault.default));
parcelHelpers.export(exports, "useSize", ()=>(0, _useSizeDefault.default));
parcelHelpers.export(exports, "configResponsive", ()=>(0, _useResponsive.configResponsive));
parcelHelpers.export(exports, "useUpdateEffect", ()=>(0, _useUpdateEffectDefault.default));
parcelHelpers.export(exports, "useUpdateLayoutEffect", ()=>(0, _useUpdateLayoutEffectDefault.default));
parcelHelpers.export(exports, "useBoolean", ()=>(0, _useBooleanDefault.default));
parcelHelpers.export(exports, "useToggle", ()=>(0, _useToggleDefault.default));
parcelHelpers.export(exports, "useDocumentVisibility", ()=>(0, _useDocumentVisibilityDefault.default));
parcelHelpers.export(exports, "useSelections", ()=>(0, _useSelectionsDefault.default));
parcelHelpers.export(exports, "useThrottle", ()=>(0, _useThrottleDefault.default));
parcelHelpers.export(exports, "useThrottleFn", ()=>(0, _useThrottleFnDefault.default));
parcelHelpers.export(exports, "useThrottleEffect", ()=>(0, _useThrottleEffectDefault.default));
parcelHelpers.export(exports, "useDebounce", ()=>(0, _useDebounceDefault.default));
parcelHelpers.export(exports, "useDebounceFn", ()=>(0, _useDebounceFnDefault.default));
parcelHelpers.export(exports, "useDebounceEffect", ()=>(0, _useDebounceEffectDefault.default));
parcelHelpers.export(exports, "usePrevious", ()=>(0, _usePreviousDefault.default));
parcelHelpers.export(exports, "useMouse", ()=>(0, _useMouseDefault.default));
parcelHelpers.export(exports, "useScroll", ()=>(0, _useScrollDefault.default));
parcelHelpers.export(exports, "useClickAway", ()=>(0, _useClickAwayDefault.default));
parcelHelpers.export(exports, "useFullscreen", ()=>(0, _useFullscreenDefault.default));
parcelHelpers.export(exports, "useInViewport", ()=>(0, _useInViewportDefault.default));
parcelHelpers.export(exports, "useKeyPress", ()=>(0, _useKeyPressDefault.default));
parcelHelpers.export(exports, "useEventListener", ()=>(0, _useEventListenerDefault.default));
parcelHelpers.export(exports, "useHover", ()=>(0, _useHoverDefault.default));
parcelHelpers.export(exports, "useUnmount", ()=>(0, _useUnmountDefault.default));
parcelHelpers.export(exports, "useSet", ()=>(0, _useSetDefault.default));
parcelHelpers.export(exports, "useMemoizedFn", ()=>(0, _useMemoizedFnDefault.default));
parcelHelpers.export(exports, "useMap", ()=>(0, _useMapDefault.default));
parcelHelpers.export(exports, "useCreation", ()=>(0, _useCreationDefault.default));
parcelHelpers.export(exports, "useDrag", ()=>(0, _useDragDefault.default));
parcelHelpers.export(exports, "useDrop", ()=>(0, _useDropDefault.default));
parcelHelpers.export(exports, "useMount", ()=>(0, _useMountDefault.default));
parcelHelpers.export(exports, "useCounter", ()=>(0, _useCounterDefault.default));
parcelHelpers.export(exports, "useUpdate", ()=>(0, _useUpdateDefault.default));
parcelHelpers.export(exports, "useTextSelection", ()=>(0, _useTextSelectionDefault.default));
parcelHelpers.export(exports, "useEventTarget", ()=>(0, _useEventTargetDefault.default));
parcelHelpers.export(exports, "useHistoryTravel", ()=>(0, _useHistoryTravelDefault.default));
parcelHelpers.export(exports, "useCookieState", ()=>(0, _useCookieStateDefault.default));
parcelHelpers.export(exports, "useSetState", ()=>(0, _useSetStateDefault.default));
parcelHelpers.export(exports, "useInterval", ()=>(0, _useIntervalDefault.default));
parcelHelpers.export(exports, "useWhyDidYouUpdate", ()=>(0, _useWhyDidYouUpdateDefault.default));
parcelHelpers.export(exports, "useTitle", ()=>(0, _useTitleDefault.default));
parcelHelpers.export(exports, "useNetwork", ()=>(0, _useNetworkDefault.default));
parcelHelpers.export(exports, "useTimeout", ()=>(0, _useTimeoutDefault.default));
parcelHelpers.export(exports, "useReactive", ()=>(0, _useReactiveDefault.default));
parcelHelpers.export(exports, "useFavicon", ()=>(0, _useFaviconDefault.default));
parcelHelpers.export(exports, "useCountDown", ()=>(0, _useCountDownDefault.default));
parcelHelpers.export(exports, "useWebSocket", ()=>(0, _useWebSocketDefault.default));
parcelHelpers.export(exports, "useLockFn", ()=>(0, _useLockFnDefault.default));
parcelHelpers.export(exports, "useUnmountedRef", ()=>(0, _useUnmountedRefDefault.default));
parcelHelpers.export(exports, "useExternal", ()=>(0, _useExternalDefault.default));
parcelHelpers.export(exports, "useSafeState", ()=>(0, _useSafeStateDefault.default));
parcelHelpers.export(exports, "useLatest", ()=>(0, _useLatestDefault.default));
parcelHelpers.export(exports, "useIsomorphicLayoutEffect", ()=>(0, _useIsomorphicLayoutEffectDefault.default));
parcelHelpers.export(exports, "useDeepCompareEffect", ()=>(0, _useDeepCompareEffectDefault.default));
parcelHelpers.export(exports, "useDeepCompareLayoutEffect", ()=>(0, _useDeepCompareLayoutEffectDefault.default));
parcelHelpers.export(exports, "useAsyncEffect", ()=>(0, _useAsyncEffectDefault.default));
parcelHelpers.export(exports, "useLongPress", ()=>(0, _useLongPressDefault.default));
parcelHelpers.export(exports, "useRafState", ()=>(0, _useRafStateDefault.default));
parcelHelpers.export(exports, "useTrackedEffect", ()=>(0, _useTrackedEffectDefault.default));
parcelHelpers.export(exports, "usePagination", ()=>(0, _usePaginationDefault.default));
parcelHelpers.export(exports, "useAntdTable", ()=>(0, _useAntdTableDefault.default));
parcelHelpers.export(exports, "useFusionTable", ()=>(0, _useFusionTableDefault.default));
parcelHelpers.export(exports, "useInfiniteScroll", ()=>(0, _useInfiniteScrollDefault.default));
parcelHelpers.export(exports, "useGetState", ()=>(0, _useGetStateDefault.default));
parcelHelpers.export(exports, "clearCache", ()=>(0, _useRequest.clearCache));
parcelHelpers.export(exports, "CancelledError", ()=>(0, _useRequest.CancelledError));
parcelHelpers.export(exports, "isCancelledError", ()=>(0, _useRequest.isCancelledError));
parcelHelpers.export(exports, "useFocusWithin", ()=>(0, _useFocusWithinDefault.default));
parcelHelpers.export(exports, "createUpdateEffect", ()=>(0, _createUpdateEffect.createUpdateEffect));
parcelHelpers.export(exports, "useRafInterval", ()=>(0, _useRafIntervalDefault.default));
parcelHelpers.export(exports, "useRafTimeout", ()=>(0, _useRafTimeoutDefault.default));
parcelHelpers.export(exports, "useResetState", ()=>(0, _useResetStateDefault.default));
parcelHelpers.export(exports, "useMutationObserver", ()=>(0, _useMutationObserverDefault.default));
parcelHelpers.export(exports, "useTheme", ()=>(0, _useThemeDefault.default));
var _createUpdateEffect = require("./createUpdateEffect");
var _useAntdTable = require("./useAntdTable");
var _useAntdTableDefault = parcelHelpers.interopDefault(_useAntdTable);
var _useAsyncEffect = require("./useAsyncEffect");
var _useAsyncEffectDefault = parcelHelpers.interopDefault(_useAsyncEffect);
var _useBoolean = require("./useBoolean");
var _useBooleanDefault = parcelHelpers.interopDefault(_useBoolean);
var _useClickAway = require("./useClickAway");
var _useClickAwayDefault = parcelHelpers.interopDefault(_useClickAway);
var _useControllableValue = require("./useControllableValue");
var _useControllableValueDefault = parcelHelpers.interopDefault(_useControllableValue);
var _useCookieState = require("./useCookieState");
var _useCookieStateDefault = parcelHelpers.interopDefault(_useCookieState);
var _useCountDown = require("./useCountDown");
var _useCountDownDefault = parcelHelpers.interopDefault(_useCountDown);
var _useCounter = require("./useCounter");
var _useCounterDefault = parcelHelpers.interopDefault(_useCounter);
var _useCreation = require("./useCreation");
var _useCreationDefault = parcelHelpers.interopDefault(_useCreation);
var _useDebounce = require("./useDebounce");
var _useDebounceDefault = parcelHelpers.interopDefault(_useDebounce);
var _useDebounceEffect = require("./useDebounceEffect");
var _useDebounceEffectDefault = parcelHelpers.interopDefault(_useDebounceEffect);
var _useDebounceFn = require("./useDebounceFn");
var _useDebounceFnDefault = parcelHelpers.interopDefault(_useDebounceFn);
var _useDeepCompareEffect = require("./useDeepCompareEffect");
var _useDeepCompareEffectDefault = parcelHelpers.interopDefault(_useDeepCompareEffect);
var _useDeepCompareLayoutEffect = require("./useDeepCompareLayoutEffect");
var _useDeepCompareLayoutEffectDefault = parcelHelpers.interopDefault(_useDeepCompareLayoutEffect);
var _useDocumentVisibility = require("./useDocumentVisibility");
var _useDocumentVisibilityDefault = parcelHelpers.interopDefault(_useDocumentVisibility);
var _useDrag = require("./useDrag");
var _useDragDefault = parcelHelpers.interopDefault(_useDrag);
var _useDrop = require("./useDrop");
var _useDropDefault = parcelHelpers.interopDefault(_useDrop);
var _useDynamicList = require("./useDynamicList");
var _useDynamicListDefault = parcelHelpers.interopDefault(_useDynamicList);
var _useEventEmitter = require("./useEventEmitter");
var _useEventEmitterDefault = parcelHelpers.interopDefault(_useEventEmitter);
var _useEventListener = require("./useEventListener");
var _useEventListenerDefault = parcelHelpers.interopDefault(_useEventListener);
var _useEventTarget = require("./useEventTarget");
var _useEventTargetDefault = parcelHelpers.interopDefault(_useEventTarget);
var _useExternal = require("./useExternal");
var _useExternalDefault = parcelHelpers.interopDefault(_useExternal);
var _useFavicon = require("./useFavicon");
var _useFaviconDefault = parcelHelpers.interopDefault(_useFavicon);
var _useFocusWithin = require("./useFocusWithin");
var _useFocusWithinDefault = parcelHelpers.interopDefault(_useFocusWithin);
var _useFullscreen = require("./useFullscreen");
var _useFullscreenDefault = parcelHelpers.interopDefault(_useFullscreen);
var _useFusionTable = require("./useFusionTable");
var _useFusionTableDefault = parcelHelpers.interopDefault(_useFusionTable);
var _useGetState = require("./useGetState");
var _useGetStateDefault = parcelHelpers.interopDefault(_useGetState);
var _useHistoryTravel = require("./useHistoryTravel");
var _useHistoryTravelDefault = parcelHelpers.interopDefault(_useHistoryTravel);
var _useHover = require("./useHover");
var _useHoverDefault = parcelHelpers.interopDefault(_useHover);
var _useInfiniteScroll = require("./useInfiniteScroll");
var _useInfiniteScrollDefault = parcelHelpers.interopDefault(_useInfiniteScroll);
var _useInterval = require("./useInterval");
var _useIntervalDefault = parcelHelpers.interopDefault(_useInterval);
var _useInViewport = require("./useInViewport");
var _useInViewportDefault = parcelHelpers.interopDefault(_useInViewport);
var _useIsomorphicLayoutEffect = require("./useIsomorphicLayoutEffect");
var _useIsomorphicLayoutEffectDefault = parcelHelpers.interopDefault(_useIsomorphicLayoutEffect);
var _useKeyPress = require("./useKeyPress");
var _useKeyPressDefault = parcelHelpers.interopDefault(_useKeyPress);
var _useLatest = require("./useLatest");
var _useLatestDefault = parcelHelpers.interopDefault(_useLatest);
var _useLocalStorageState = require("./useLocalStorageState");
var _useLocalStorageStateDefault = parcelHelpers.interopDefault(_useLocalStorageState);
var _useLockFn = require("./useLockFn");
var _useLockFnDefault = parcelHelpers.interopDefault(_useLockFn);
var _useLongPress = require("./useLongPress");
var _useLongPressDefault = parcelHelpers.interopDefault(_useLongPress);
var _useMap = require("./useMap");
var _useMapDefault = parcelHelpers.interopDefault(_useMap);
var _useMemoizedFn = require("./useMemoizedFn");
var _useMemoizedFnDefault = parcelHelpers.interopDefault(_useMemoizedFn);
var _useMount = require("./useMount");
var _useMountDefault = parcelHelpers.interopDefault(_useMount);
var _useMouse = require("./useMouse");
var _useMouseDefault = parcelHelpers.interopDefault(_useMouse);
var _useNetwork = require("./useNetwork");
var _useNetworkDefault = parcelHelpers.interopDefault(_useNetwork);
var _usePagination = require("./usePagination");
var _usePaginationDefault = parcelHelpers.interopDefault(_usePagination);
var _usePrevious = require("./usePrevious");
var _usePreviousDefault = parcelHelpers.interopDefault(_usePrevious);
var _useRafInterval = require("./useRafInterval");
var _useRafIntervalDefault = parcelHelpers.interopDefault(_useRafInterval);
var _useRafState = require("./useRafState");
var _useRafStateDefault = parcelHelpers.interopDefault(_useRafState);
var _useRafTimeout = require("./useRafTimeout");
var _useRafTimeoutDefault = parcelHelpers.interopDefault(_useRafTimeout);
var _useReactive = require("./useReactive");
var _useReactiveDefault = parcelHelpers.interopDefault(_useReactive);
var _useRequest = require("./useRequest");
var _useRequestDefault = parcelHelpers.interopDefault(_useRequest);
var _useResetState = require("./useResetState");
var _useResetStateDefault = parcelHelpers.interopDefault(_useResetState);
var _useResponsive = require("./useResponsive");
var _useResponsiveDefault = parcelHelpers.interopDefault(_useResponsive);
var _useSafeState = require("./useSafeState");
var _useSafeStateDefault = parcelHelpers.interopDefault(_useSafeState);
var _useScroll = require("./useScroll");
var _useScrollDefault = parcelHelpers.interopDefault(_useScroll);
var _useSelections = require("./useSelections");
var _useSelectionsDefault = parcelHelpers.interopDefault(_useSelections);
var _useSessionStorageState = require("./useSessionStorageState");
var _useSessionStorageStateDefault = parcelHelpers.interopDefault(_useSessionStorageState);
var _useSet = require("./useSet");
var _useSetDefault = parcelHelpers.interopDefault(_useSet);
var _useSetState = require("./useSetState");
var _useSetStateDefault = parcelHelpers.interopDefault(_useSetState);
var _useSize = require("./useSize");
var _useSizeDefault = parcelHelpers.interopDefault(_useSize);
var _useTextSelection = require("./useTextSelection");
var _useTextSelectionDefault = parcelHelpers.interopDefault(_useTextSelection);
var _useThrottle = require("./useThrottle");
var _useThrottleDefault = parcelHelpers.interopDefault(_useThrottle);
var _useThrottleEffect = require("./useThrottleEffect");
var _useThrottleEffectDefault = parcelHelpers.interopDefault(_useThrottleEffect);
var _useThrottleFn = require("./useThrottleFn");
var _useThrottleFnDefault = parcelHelpers.interopDefault(_useThrottleFn);
var _useTimeout = require("./useTimeout");
var _useTimeoutDefault = parcelHelpers.interopDefault(_useTimeout);
var _useTitle = require("./useTitle");
var _useTitleDefault = parcelHelpers.interopDefault(_useTitle);
var _useToggle = require("./useToggle");
var _useToggleDefault = parcelHelpers.interopDefault(_useToggle);
var _useTrackedEffect = require("./useTrackedEffect");
var _useTrackedEffectDefault = parcelHelpers.interopDefault(_useTrackedEffect);
var _useUnmount = require("./useUnmount");
var _useUnmountDefault = parcelHelpers.interopDefault(_useUnmount);
var _useUnmountedRef = require("./useUnmountedRef");
var _useUnmountedRefDefault = parcelHelpers.interopDefault(_useUnmountedRef);
var _useUpdate = require("./useUpdate");
var _useUpdateDefault = parcelHelpers.interopDefault(_useUpdate);
var _useUpdateEffect = require("./useUpdateEffect");
var _useUpdateEffectDefault = parcelHelpers.interopDefault(_useUpdateEffect);
var _useUpdateLayoutEffect = require("./useUpdateLayoutEffect");
var _useUpdateLayoutEffectDefault = parcelHelpers.interopDefault(_useUpdateLayoutEffect);
var _useVirtualList = require("./useVirtualList");
var _useVirtualListDefault = parcelHelpers.interopDefault(_useVirtualList);
var _useWebSocket = require("./useWebSocket");
var _useWebSocketDefault = parcelHelpers.interopDefault(_useWebSocket);
var _useWhyDidYouUpdate = require("./useWhyDidYouUpdate");
var _useWhyDidYouUpdateDefault = parcelHelpers.interopDefault(_useWhyDidYouUpdate);
var _useMutationObserver = require("./useMutationObserver");
var _useMutationObserverDefault = parcelHelpers.interopDefault(_useMutationObserver);
var _useTheme = require("./useTheme");
var _useThemeDefault = parcelHelpers.interopDefault(_useTheme);

},{"./createUpdateEffect":false,"./useAntdTable":false,"./useAsyncEffect":false,"./useBoolean":false,"./useClickAway":false,"./useControllableValue":false,"./useCookieState":false,"./useCountDown":false,"./useCounter":false,"./useCreation":false,"./useDebounce":false,"./useDebounceEffect":false,"./useDebounceFn":false,"./useDeepCompareEffect":false,"./useDeepCompareLayoutEffect":false,"./useDocumentVisibility":false,"./useDrag":false,"./useDrop":false,"./useDynamicList":false,"./useEventEmitter":false,"./useEventListener":false,"./useEventTarget":false,"./useExternal":false,"./useFavicon":false,"./useFocusWithin":false,"./useFullscreen":false,"./useFusionTable":false,"./useGetState":false,"./useHistoryTravel":false,"./useHover":false,"./useInfiniteScroll":false,"./useInterval":false,"./useInViewport":false,"./useIsomorphicLayoutEffect":"1nhJw","./useKeyPress":false,"./useLatest":false,"./useLocalStorageState":false,"./useLockFn":false,"./useLongPress":false,"./useMap":false,"./useMemoizedFn":"163fR","./useMount":false,"./useMouse":false,"./useNetwork":false,"./usePagination":false,"./usePrevious":false,"./useRafInterval":false,"./useRafState":false,"./useRafTimeout":false,"./useReactive":false,"./useRequest":false,"./useResetState":false,"./useResponsive":false,"./useSafeState":false,"./useScroll":false,"./useSelections":false,"./useSessionStorageState":false,"./useSet":false,"./useSetState":false,"./useSize":false,"./useTextSelection":false,"./useThrottle":false,"./useThrottleEffect":false,"./useThrottleFn":false,"./useTimeout":false,"./useTitle":false,"./useToggle":false,"./useTrackedEffect":false,"./useUnmount":false,"./useUnmountedRef":false,"./useUpdate":"2pW9C","./useUpdateEffect":false,"./useUpdateLayoutEffect":false,"./useVirtualList":false,"./useWebSocket":false,"./useWhyDidYouUpdate":false,"./useMutationObserver":false,"./useTheme":false,"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"1nhJw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _isBrowser = require("../utils/isBrowser");
var _isBrowserDefault = parcelHelpers.interopDefault(_isBrowser);
var _noop = require("../utils/noop");
var _noopDefault = parcelHelpers.interopDefault(_noop);
const useIsomorphicLayoutEffect = (0, _isBrowserDefault.default) ? (0, _react.useLayoutEffect) : (0, _noopDefault.default);
exports.default = useIsomorphicLayoutEffect;

},{"react":"f1OD5","../utils/isBrowser":"2gok8","../utils/noop":"7cBb8","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"2gok8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const isBrowser = !!(typeof window !== "undefined" && window.document && window.document.createElement);
exports.default = isBrowser;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"6dfwG":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"7cBb8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const noop = ()=>{};
exports.default = noop;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"163fR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _utils = require("../utils");
var _isDev = require("../utils/isDev");
var _isDevDefault = parcelHelpers.interopDefault(_isDev);
const useMemoizedFn = (fn)=>{
    if (0, _isDevDefault.default) {
        if (!(0, _utils.isFunction)(fn)) console.error(`useMemoizedFn expected parameter is a function, got ${typeof fn}`);
    }
    const fnRef = (0, _react.useRef)(fn);
    // why not write `fnRef.current = fn`?
    // https://github.com/alibaba/hooks/issues/728
    fnRef.current = (0, _react.useMemo)(()=>fn, [
        fn
    ]);
    const memoizedFn = (0, _react.useRef)(undefined);
    if (!memoizedFn.current) memoizedFn.current = function(...args) {
        return fnRef.current.apply(this, args);
    };
    return memoizedFn.current;
};
exports.default = useMemoizedFn;

},{"react":"f1OD5","../utils":"7AZtx","../utils/isDev":"4iH5S","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"7AZtx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isBoolean", ()=>isBoolean);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
parcelHelpers.export(exports, "isUndef", ()=>isUndef);
parcelHelpers.export(exports, "isNonNullable", ()=>isNonNullable);
parcelHelpers.export(exports, "isThenable", ()=>isThenable);
const isObject = (val)=>{
    return val !== null && typeof val === "object";
};
const isFunction = (val)=>{
    return typeof val === "function";
};
const isString = (val)=>{
    return typeof val === "string";
};
const isBoolean = (val)=>{
    return typeof val === "boolean";
};
const isNumber = (val)=>{
    return typeof val === "number" && !Number.isNaN(val);
};
const isUndef = (val)=>{
    return typeof val === "undefined";
};
const isNonNullable = (val)=>{
    return val !== undefined && val !== null;
};
const isThenable = (val)=>{
    return isNonNullable(val) && isFunction(val.then);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"4iH5S":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const isDev = true;
exports.default = isDev;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"2pW9C":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _useMemoizedFn = require("../useMemoizedFn");
var _useMemoizedFnDefault = parcelHelpers.interopDefault(_useMemoizedFn);
const useUpdate = ()=>{
    const [, setState] = (0, _react.useState)({});
    return (0, _useMemoizedFnDefault.default)(()=>setState({}));
};
exports.default = useUpdate;

},{"react":"f1OD5","../useMemoizedFn":"163fR","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"2DEi9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EnumCodeUnits", ()=>n);
parcelHelpers.export(exports, "EnumRunesCode", ()=>i);
parcelHelpers.export(exports, "GRAPHEMES", ()=>e);
parcelHelpers.export(exports, "betweenInclusive", ()=>betweenInclusive);
parcelHelpers.export(exports, "codePointFromSurrogatePair", ()=>codePointFromSurrogatePair);
parcelHelpers.export(exports, "default", ()=>runes);
parcelHelpers.export(exports, "isDiacriticalMark", ()=>isDiacriticalMark);
parcelHelpers.export(exports, "isFirstOfSurrogatePair", ()=>isFirstOfSurrogatePair);
parcelHelpers.export(exports, "isFitzpatrickModifier", ()=>isFitzpatrickModifier);
parcelHelpers.export(exports, "isGrapheme", ()=>isGrapheme);
parcelHelpers.export(exports, "isRegionalIndicator", ()=>isRegionalIndicator);
parcelHelpers.export(exports, "isSubdivisionFlag", ()=>isSubdivisionFlag);
parcelHelpers.export(exports, "isSupplementarySpecialpurposePlane", ()=>isSupplementarySpecialpurposePlane);
parcelHelpers.export(exports, "isVariationSelector", ()=>isVariationSelector);
parcelHelpers.export(exports, "isZeroWidthJoiner", ()=>isZeroWidthJoiner);
parcelHelpers.export(exports, "nextUnits", ()=>nextUnits);
parcelHelpers.export(exports, "runes", ()=>runes);
parcelHelpers.export(exports, "substr", ()=>substring);
parcelHelpers.export(exports, "substring", ()=>substring);
let i = /*#__PURE__*/ function(i) {
    return i[i.HIGH_SURROGATE_START = 55296] = "HIGH_SURROGATE_START", i[i.HIGH_SURROGATE_END = 56319] = "HIGH_SURROGATE_END", i[i.LOW_SURROGATE_START = 56320] = "LOW_SURROGATE_START", i[i.REGIONAL_INDICATOR_START = 127462] = "REGIONAL_INDICATOR_START", i[i.REGIONAL_INDICATOR_END = 127487] = "REGIONAL_INDICATOR_END", i[i.FITZPATRICK_MODIFIER_START = 127995] = "FITZPATRICK_MODIFIER_START", i[i.FITZPATRICK_MODIFIER_END = 127999] = "FITZPATRICK_MODIFIER_END", i[i.VARIATION_MODIFIER_START = 65024] = "VARIATION_MODIFIER_START", i[i.VARIATION_MODIFIER_END = 65039] = "VARIATION_MODIFIER_END", i[i.DIACRITICAL_MARKS_START = 8400] = "DIACRITICAL_MARKS_START", i[i.DIACRITICAL_MARKS_END = 8447] = "DIACRITICAL_MARKS_END", i[i.SUBDIVISION_INDICATOR_START = 127988] = "SUBDIVISION_INDICATOR_START", i[i.TAGS_START = 917504] = "TAGS_START", i[i.TAGS_END = 917631] = "TAGS_END", i[i.ZWJ = 8205] = "ZWJ", i;
}({});
const e = /*#__PURE__*/ Object.freeze([
    0x0308,
    0x0937,
    0x093F,
    0x0BA8,
    0x0BBF,
    0x0BCD,
    0x0E31,
    0x0E33,
    0x0E40,
    0x0E49,
    0x1100,
    0x1161,
    0x11A8
]);
let n = /*#__PURE__*/ function(i) {
    return i[i.unit_1 = 1] = "unit_1", i[i.unit_2 = 2] = "unit_2", i[i.unit_4 = 4] = "unit_4", i;
}({});
function runes(i) {
    if ("string" != typeof i) throw new TypeError("string cannot be undefined or null");
    const e = [];
    let n = 0, t = 0;
    for(; n < i.length;)t += nextUnits(n + t, i), isGrapheme(i[n + t]) && t++, isVariationSelector(i[n + t]) && t++, isDiacriticalMark(i[n + t]) && t++, isZeroWidthJoiner(i[n + t]) ? t++ : (e.push(i.substring(n, n + t)), n += t, t = 0);
    return e;
}
function nextUnits(e, t) {
    const r = t[e];
    if (!isFirstOfSurrogatePair(r) || e === t.length - 1) return n.unit_1;
    const I = r + t[e + 1];
    let o = t.substring(e + 2, e + 5);
    return isRegionalIndicator(I) && isRegionalIndicator(o) ? n.unit_4 : isSubdivisionFlag(I) && isSupplementarySpecialpurposePlane(o) ? t.slice(e).indexOf(String.fromCodePoint(i.TAGS_END)) + 2 : isFitzpatrickModifier(o) ? n.unit_4 : n.unit_2;
}
function isFirstOfSurrogatePair(e) {
    return e && betweenInclusive(e[0].charCodeAt(0), i.HIGH_SURROGATE_START, i.HIGH_SURROGATE_END);
}
function isRegionalIndicator(e) {
    return betweenInclusive(codePointFromSurrogatePair(e), i.REGIONAL_INDICATOR_START, i.REGIONAL_INDICATOR_END);
}
function isSubdivisionFlag(e) {
    return betweenInclusive(codePointFromSurrogatePair(e), i.SUBDIVISION_INDICATOR_START, i.SUBDIVISION_INDICATOR_START);
}
function isFitzpatrickModifier(e) {
    return betweenInclusive(codePointFromSurrogatePair(e), i.FITZPATRICK_MODIFIER_START, i.FITZPATRICK_MODIFIER_END);
}
function isVariationSelector(e) {
    return "string" == typeof e && betweenInclusive(e.charCodeAt(0), i.VARIATION_MODIFIER_START, i.VARIATION_MODIFIER_END);
}
function isDiacriticalMark(e) {
    return "string" == typeof e && betweenInclusive(e.charCodeAt(0), i.DIACRITICAL_MARKS_START, i.DIACRITICAL_MARKS_END);
}
function isSupplementarySpecialpurposePlane(e) {
    const n = e.codePointAt(0);
    return "string" == typeof e && "number" == typeof n && betweenInclusive(n, i.TAGS_START, i.TAGS_END);
}
function isGrapheme(i) {
    return "string" == typeof i && e.includes(i.charCodeAt(0));
}
function isZeroWidthJoiner(e) {
    return "string" == typeof e && e.charCodeAt(0) === i.ZWJ;
}
function codePointFromSurrogatePair(e) {
    return (e.charCodeAt(0) - i.HIGH_SURROGATE_START << 10) + (e.charCodeAt(1) - i.LOW_SURROGATE_START) + 0x10000;
}
function betweenInclusive(i, e, n) {
    return i >= e && i <= n;
}
function substring(i, e, n) {
    const t = runes(i);
    if (void 0 === e) return i;
    if (e >= t.length) return "";
    const r = t.length - e;
    let I = e + (void 0 === n ? r : n);
    return I > e + r && (I = void 0), t.slice(e, I).join("");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"gR9WS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>useInputHandleKeyDown);
function useInputHandleKeyDown({ onEnterPress, onKeyDown }) {
    const handleKeydown = (e)=>{
        if (onEnterPress && (e.code === "Enter" || e.keyCode === 13)) onEnterPress(e);
        onKeyDown === null || onKeyDown === void 0 || onKeyDown(e);
    };
    return handleKeydown;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"7Feeo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "devWarning", ()=>devWarning);
parcelHelpers.export(exports, "devError", ()=>devError);
parcelHelpers.export(exports, "devPrint", ()=>devPrint);
var _isDev = require("./is-dev");
function devWarning(component, message) {
    if (0, _isDev.isDev) console.warn(`[antd-mobile: ${component}] ${message}`);
}
function devError(component, message) {
    if (0, _isDev.isDev) console.error(`[antd-mobile: ${component}] ${message}`);
}
let infoBox;
function devPrint(...message) {
    if (0, _isDev.isDev) {
        if (!infoBox) {
            infoBox = document.createElement("textarea");
            document.body.append(infoBox);
            infoBox.style.position = "fixed";
            infoBox.style.top = "0";
            infoBox.style.left = "0";
            infoBox.style.width = "100vw";
            infoBox.style.height = "100vh";
            infoBox.style.zIndex = "999999";
            infoBox.style.fontSize = "12px";
            // infoBox.style.opacity = '0.85'
            infoBox.style.pointerEvents = "none";
            infoBox.style.background = "transparent";
            infoBox.style.textShadow = "-1px -1px 0 #FFF, -1px 1px 0 #FFF, 1px -1px 0 #FFF, 1px 1px 0 #FFF";
        }
        infoBox.value = `${infoBox.value}\n${message.join(" ")}`.trim();
        infoBox.scrollTop = infoBox.scrollHeight;
    }
}

},{"./is-dev":"gHgmz","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"gHgmz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDev", ()=>isDev);
const isDev = true;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"iUHAm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "withNativeProps", ()=>withNativeProps);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _classnames = require("classnames");
var _classnamesDefault = parcelHelpers.interopDefault(_classnames);
function withNativeProps(props, element) {
    const p = Object.assign({}, element.props);
    if (props.className) p.className = (0, _classnamesDefault.default)(element.props.className, props.className);
    if (props.style) p.style = Object.assign(Object.assign({}, p.style), props.style);
    if (props.tabIndex !== undefined) p.tabIndex = props.tabIndex;
    for(const key in props){
        if (!props.hasOwnProperty(key)) continue;
        if (key.startsWith("data-") || key.startsWith("aria-")) p[key] = props[key];
    }
    return (0, _reactDefault.default).cloneElement(element, p);
}

},{"react":"f1OD5","classnames":"gVUvu","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"gVUvu":[function(require,module,exports) {
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ /* global define */ (function() {
    "use strict";
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
        var classes = "";
        for(var i = 0; i < arguments.length; i++){
            var arg = arguments[i];
            if (arg) classes = appendClass(classes, parseValue(arg));
        }
        return classes;
    }
    function parseValue(arg) {
        if (typeof arg === "string" || typeof arg === "number") return arg;
        if (typeof arg !== "object") return "";
        if (Array.isArray(arg)) return classNames.apply(null, arg);
        if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) return arg.toString();
        var classes = "";
        for(var key in arg)if (hasOwn.call(arg, key) && arg[key]) classes = appendClass(classes, key);
        return classes;
    }
    function appendClass(value, newClass) {
        if (!newClass) return value;
        if (value) return value + " " + newClass;
        return value + newClass;
    }
    if (0, module.exports) {
        classNames.default = classNames;
        module.exports = classNames;
    } else if (typeof define === "function" && typeof define.amd === "object" && define.amd) // register as 'classnames', consistent with npm package name
    define("classnames", [], function() {
        return classNames;
    });
    else window.classNames = classNames;
})();

},{}],"7QePf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "usePropsValue", ()=>usePropsValue);
var _react = require("react");
var _ahooks = require("ahooks");
function usePropsValue(options) {
    const { value, defaultValue, onChange } = options;
    const update = (0, _ahooks.useUpdate)();
    const stateRef = (0, _react.useRef)(value !== undefined ? value : defaultValue);
    if (value !== undefined) stateRef.current = value;
    const setState = (0, _ahooks.useMemoizedFn)((v, forceTrigger = false)=>{
        // `forceTrigger` means trigger `onChange` even if `v` is the same as `stateRef.current`
        const nextValue = typeof v === "function" ? v(stateRef.current) : v;
        if (!forceTrigger && nextValue === stateRef.current) return;
        stateRef.current = nextValue;
        update();
        return onChange === null || onChange === void 0 ? void 0 : onChange(nextValue);
    });
    return [
        stateRef.current,
        setState
    ];
}

},{"react":"f1OD5","ahooks":"1RopS","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"8o2Fj":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mergeProps", ()=>mergeProps);
/**
 * Merge props and return the first non-undefined value.
 * The later has higher priority. e.g. (10, 1, 5) => 5 wins.
 * This is useful with legacy props that have been deprecated.
 */ parcelHelpers.export(exports, "mergeProp", ()=>mergeProp);
function mergeProps(...items) {
    const ret = {};
    items.forEach((item)=>{
        if (item) Object.keys(item).forEach((key)=>{
            if (item[key] !== undefined) ret[key] = item[key];
        });
    });
    return ret;
}
function mergeProp(defaultProp, ...propList) {
    for(let i = propList.length - 1; i >= 0; i -= 1){
        if (propList[i] !== undefined) return propList[i];
    }
    return defaultProp;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"bKSen":[function(require,module,exports) {
"use strict";
var Refresh = require("e6f09a058c1ec36d");
function debounce(func, delay) {
    {
        let timeout = undefined;
        let lastTime = 0;
        return function(args) {
            // Call immediately if last call was more than the delay ago.
            // Otherwise, set a timeout. This means the first call is fast
            // (for the common case of a single update), and subsequent updates
            // are batched.
            let now = Date.now();
            if (now - lastTime > delay) {
                lastTime = now;
                func.call(null, args);
            } else {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    timeout = undefined;
                    lastTime = Date.now();
                    func.call(null, args);
                }, delay);
            }
        };
    }
}
var enqueueUpdate = debounce(function() {
    Refresh.performReactRefresh();
}, 30);
// Everthing below is either adapted or copied from
// https://github.com/facebook/metro/blob/61de16bd1edd7e738dd0311c89555a644023ab2d/packages/metro/src/lib/polyfills/require.js
// MIT License - Copyright (c) Facebook, Inc. and its affiliates.
module.exports.prelude = function(module1) {
    window.$RefreshReg$ = function(type, id) {
        Refresh.register(type, module1.id + " " + id);
    };
    window.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
};
module.exports.postlude = function(module1) {
    if (isReactRefreshBoundary(module1.exports)) {
        registerExportsForReactRefresh(module1);
        if (module1.hot) {
            module1.hot.dispose(function(data) {
                if (Refresh.hasUnrecoverableErrors()) window.location.reload();
                data.prevExports = module1.exports;
            });
            module1.hot.accept(function(getParents) {
                var prevExports = module1.hot.data.prevExports;
                var nextExports = module1.exports;
                // Since we just executed the code for it, it's possible
                // that the new exports make it ineligible for being a boundary.
                var isNoLongerABoundary = !isReactRefreshBoundary(nextExports);
                // It can also become ineligible if its exports are incompatible
                // with the previous exports.
                // For example, if you add/remove/change exports, we'll want
                // to re-execute the importing modules, and force those components
                // to re-render. Similarly, if you convert a class component
                // to a function, we want to invalidate the boundary.
                var didInvalidate = shouldInvalidateReactRefreshBoundary(prevExports, nextExports);
                if (isNoLongerABoundary || didInvalidate) {
                    // We'll be conservative. The only case in which we won't do a full
                    // reload is if all parent modules are also refresh boundaries.
                    // In that case we'll add them to the current queue.
                    var parents = getParents();
                    if (parents.length === 0) {
                        // Looks like we bubbled to the root. Can't recover from that.
                        window.location.reload();
                        return;
                    }
                    return parents;
                }
                enqueueUpdate();
            });
        }
    }
};
function isReactRefreshBoundary(exports) {
    if (Refresh.isLikelyComponentType(exports)) return true;
    if (exports == null || typeof exports !== "object") // Exit if we can't iterate over exports.
    return false;
    var hasExports = false;
    var areAllExportsComponents = true;
    let isESM = "__esModule" in exports;
    for(var key in exports){
        hasExports = true;
        if (key === "__esModule") continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) // Don't invoke getters for CJS as they may have side effects.
        return false;
        var exportValue = exports[key];
        if (!Refresh.isLikelyComponentType(exportValue)) areAllExportsComponents = false;
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) return true;
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) return true;
    }
    return false;
}
// When this signature changes, it's unsafe to stop at this refresh boundary.
function getRefreshBoundarySignature(exports) {
    var signature = [];
    signature.push(Refresh.getFamilyByType(exports));
    if (exports == null || typeof exports !== "object") // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
    let isESM = "__esModule" in exports;
    for(var key in exports){
        if (key === "__esModule") continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        signature.push(key);
        signature.push(Refresh.getFamilyByType(exportValue));
    }
    return signature;
}
function registerExportsForReactRefresh(module1) {
    var exports = module1.exports, id = module1.id;
    Refresh.register(exports, id + " %exports%");
    if (exports == null || typeof exports !== "object") // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
    let isESM = "__esModule" in exports;
    for(var key in exports){
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        var typeID = id + " %exports% " + key;
        Refresh.register(exportValue, typeID);
    }
}

},{"e6f09a058c1ec36d":"j8e0a"}],"j8e0a":[function(require,module,exports) {
var oe = Object.create;
var H = Object.defineProperty;
var ae = Object.getOwnPropertyDescriptor;
var ue = Object.getOwnPropertyNames;
var se = Object.getPrototypeOf, le = Object.prototype.hasOwnProperty;
var z = (o, f)=>()=>(f || o((f = {
            exports: {}
        }).exports, f), f.exports), ce = (o, f)=>{
    for(var s in f)H(o, s, {
        get: f[s],
        enumerable: !0
    });
}, D = (o, f, s, y)=>{
    if (f && typeof f == "object" || typeof f == "function") for (let m of ue(f))!le.call(o, m) && m !== s && H(o, m, {
        get: ()=>f[m],
        enumerable: !(y = ae(f, m)) || y.enumerable
    });
    return o;
}, S = (o, f, s)=>(D(o, f, "default"), s && D(s, f, "default")), G = (o, f, s)=>(s = o != null ? oe(se(o)) : {}, D(f || !o || !o.__esModule ? H(s, "default", {
        value: o,
        enumerable: !0
    }) : s, o)), de = (o)=>D(H({}, "__esModule", {
        value: !0
    }), o);
var N = z((h)=>{
    "use strict";
    (function() {
        "use strict";
        var o = Symbol.for("react.forward_ref"), f = Symbol.for("react.memo"), s = typeof WeakMap == "function" ? WeakMap : Map, y = new Map, m = new s, b = new s, j = new s, E = [], C = new Map, O = new Map, p = new Set, _ = new Set, F = typeof WeakMap == "function" ? new WeakMap : null, T = !1;
        function B(e) {
            if (e.fullKey !== null) return e.fullKey;
            var r = e.ownKey, n;
            try {
                n = e.getCustomHooks();
            } catch (i) {
                return e.forceReset = !0, e.fullKey = r, r;
            }
            for(var t = 0; t < n.length; t++){
                var l = n[t];
                if (typeof l != "function") return e.forceReset = !0, e.fullKey = r, r;
                var d = b.get(l);
                if (d !== void 0) {
                    var a = B(d);
                    d.forceReset && (e.forceReset = !0), r += "\n---\n" + a;
                }
            }
            return e.fullKey = r, r;
        }
        function q(e, r) {
            var n = b.get(e), t = b.get(r);
            return n === void 0 && t === void 0 ? !0 : !(n === void 0 || t === void 0 || B(n) !== B(t) || t.forceReset);
        }
        function $(e) {
            return e.prototype && e.prototype.isReactComponent;
        }
        function k(e, r) {
            return $(e) || $(r) ? !1 : !!q(e, r);
        }
        function Y(e) {
            return j.get(e);
        }
        function Z(e) {
            var r = new Map;
            return e.forEach(function(n, t) {
                r.set(t, n);
            }), r;
        }
        function W(e) {
            var r = new Set;
            return e.forEach(function(n) {
                r.add(n);
            }), r;
        }
        function M(e, r) {
            try {
                return e[r];
            } catch (n) {
                return;
            }
        }
        function J() {
            if (E.length === 0 || T) return null;
            T = !0;
            try {
                var e = new Set, r = new Set, n = E;
                E = [], n.forEach(function(u) {
                    var c = u[0], v = u[1], R = c.current;
                    j.set(R, c), j.set(v, c), c.current = v, k(R, v) ? r.add(c) : e.add(c);
                });
                var t = {
                    updatedFamilies: r,
                    staleFamilies: e
                };
                C.forEach(function(u) {
                    u.setRefreshHandler(Y);
                });
                var l = !1, d = null, a = W(_), i = W(p), g = Z(O);
                if (a.forEach(function(u) {
                    var c = g.get(u);
                    if (c === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                    if (_.has(u), F !== null && F.has(u)) {
                        var v = F.get(u);
                        try {
                            c.scheduleRoot(u, v);
                        } catch (R) {
                            l || (l = !0, d = R);
                        }
                    }
                }), i.forEach(function(u) {
                    var c = g.get(u);
                    if (c === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                    p.has(u);
                    try {
                        c.scheduleRefresh(u, t);
                    } catch (v) {
                        l || (l = !0, d = v);
                    }
                }), l) throw d;
                return t;
            } finally{
                T = !1;
            }
        }
        function P(e, r) {
            if (e === null || typeof e != "function" && typeof e != "object" || m.has(e)) return;
            var n = y.get(r);
            if (n === void 0 ? (n = {
                current: e
            }, y.set(r, n)) : E.push([
                n,
                e
            ]), m.set(e, n), typeof e == "object" && e !== null) switch(M(e, "$$typeof")){
                case o:
                    P(e.render, r + "$render");
                    break;
                case f:
                    P(e.type, r + "$type");
                    break;
            }
        }
        function K(e, r) {
            var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, t = arguments.length > 3 ? arguments[3] : void 0;
            if (b.has(e) || b.set(e, {
                forceReset: n,
                ownKey: r,
                fullKey: null,
                getCustomHooks: t || function() {
                    return [];
                }
            }), typeof e == "object" && e !== null) switch(M(e, "$$typeof")){
                case o:
                    K(e.render, r, n, t);
                    break;
                case f:
                    K(e.type, r, n, t);
                    break;
            }
        }
        function x(e) {
            var r = b.get(e);
            r !== void 0 && B(r);
        }
        function Q(e) {
            return y.get(e);
        }
        function X(e) {
            return m.get(e);
        }
        function ee(e) {
            var r = new Set;
            return p.forEach(function(n) {
                var t = O.get(n);
                if (t === void 0) throw new Error("Could not find helpers for a root. This is a bug in React Refresh.");
                var l = t.findHostInstancesForRefresh(n, e);
                l.forEach(function(d) {
                    r.add(d);
                });
            }), r;
        }
        function re(e) {
            var r = e.__REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (r === void 0) {
                var n = 0;
                e.__REACT_DEVTOOLS_GLOBAL_HOOK__ = r = {
                    renderers: new Map,
                    supportsFiber: !0,
                    inject: function(a) {
                        return n++;
                    },
                    onScheduleFiberRoot: function(a, i, g) {},
                    onCommitFiberRoot: function(a, i, g, u) {},
                    onCommitFiberUnmount: function() {}
                };
            }
            if (r.isDisabled) {
                console.warn("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");
                return;
            }
            var t = r.inject;
            r.inject = function(a) {
                var i = t.apply(this, arguments);
                return typeof a.scheduleRefresh == "function" && typeof a.setRefreshHandler == "function" && C.set(i, a), i;
            }, r.renderers.forEach(function(a, i) {
                typeof a.scheduleRefresh == "function" && typeof a.setRefreshHandler == "function" && C.set(i, a);
            });
            var l = r.onCommitFiberRoot, d = r.onScheduleFiberRoot || function() {};
            r.onScheduleFiberRoot = function(a, i, g) {
                return T || (_.delete(i), F !== null && F.set(i, g)), d.apply(this, arguments);
            }, r.onCommitFiberRoot = function(a, i, g, u) {
                var c = C.get(a);
                if (c !== void 0) {
                    O.set(i, c);
                    var v = i.current, R = v.alternate;
                    if (R !== null) {
                        var L = R.memoizedState != null && R.memoizedState.element != null && p.has(i), A = v.memoizedState != null && v.memoizedState.element != null;
                        !L && A ? (p.add(i), _.delete(i)) : L && A || (L && !A ? (p.delete(i), u ? _.add(i) : O.delete(i)) : !L && !A && u && _.add(i));
                    } else p.add(i);
                }
                return l.apply(this, arguments);
            };
        }
        function ne() {
            return !1;
        }
        function te() {
            return p.size;
        }
        function fe() {
            var e, r, n = !1;
            return function(t, l, d, a) {
                if (typeof l == "string") return e || (e = t, r = typeof a == "function"), t != null && (typeof t == "function" || typeof t == "object") && K(t, l, d, a), t;
                !n && r && (n = !0, x(e));
            };
        }
        function ie(e) {
            switch(typeof e){
                case "function":
                    if (e.prototype != null) {
                        if (e.prototype.isReactComponent) return !0;
                        var r = Object.getOwnPropertyNames(e.prototype);
                        if (r.length > 1 || r[0] !== "constructor" || e.prototype.__proto__ !== Object.prototype) return !1;
                    }
                    var n = e.name || e.displayName;
                    return typeof n == "string" && /^[A-Z]/.test(n);
                case "object":
                    if (e != null) switch(M(e, "$$typeof")){
                        case o:
                        case f:
                            return !0;
                        default:
                            return !1;
                    }
                    return !1;
                default:
                    return !1;
            }
        }
        h._getMountedRootCount = te, h.collectCustomHooksForSignature = x, h.createSignatureFunctionForTransform = fe, h.findAffectedHostInstances = ee, h.getFamilyByID = Q, h.getFamilyByType = X, h.hasUnrecoverableErrors = ne, h.injectIntoGlobalHook = re, h.isLikelyComponentType = ie, h.performReactRefresh = J, h.register = P, h.setSignature = K;
    })();
});
var I = z((pe, V)=>{
    "use strict";
    V.exports = N();
});
var w = {};
ce(w, {
    default: ()=>he
});
module.exports = de(w);
var U = G(I());
S(w, G(I()), module.exports);
var he = U.default; /*! Bundled license information:

react-refresh/cjs/react-refresh-runtime.development.js:
  (**
   * @license React
   * react-refresh-runtime.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/ 

},{}]},[], null, "parcelRequireda14")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sR0FBRyxLQUFHLENBQUMsR0FBRTtJQUFLLElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRSxHQUFFLEdBQUU7UUFBQyxLQUFJLENBQUMsQ0FBQyxFQUFFO1FBQUMsWUFBVyxDQUFDO0lBQUM7QUFBRSxHQUFFLElBQUUsQ0FBQyxHQUFFLEdBQUUsR0FBRTtJQUFLLElBQUcsS0FBRyxPQUFPLEtBQUcsWUFBVSxPQUFPLEtBQUcsWUFBVyxLQUFJLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRSxNQUFJLE1BQUksS0FBRyxFQUFFLEdBQUUsR0FBRTtRQUFDLEtBQUksSUFBSSxDQUFDLENBQUMsRUFBRTtRQUFDLFlBQVcsQ0FBRSxDQUFBLElBQUUsR0FBRyxHQUFFLEVBQUMsS0FBSSxFQUFFO0lBQVU7SUFBRyxPQUFPO0FBQUMsR0FBRSxJQUFFLENBQUMsR0FBRSxHQUFFLElBQUssQ0FBQSxFQUFFLEdBQUUsR0FBRSxZQUFXLEtBQUcsRUFBRSxHQUFFLEdBQUUsVUFBUyxHQUFHLElBQUUsQ0FBQyxHQUFFLEdBQUUsSUFBSyxDQUFBLElBQUUsS0FBRyxPQUFLLEdBQUcsR0FBRyxNQUFJLENBQUMsR0FBRSxFQUFFLEtBQUcsQ0FBQyxLQUFHLENBQUMsRUFBRSxhQUFXLEVBQUUsR0FBRSxXQUFVO1FBQUMsT0FBTTtRQUFFLFlBQVcsQ0FBQztJQUFDLEtBQUcsR0FBRSxFQUFDLEdBQUcsS0FBRyxDQUFBLElBQUcsRUFBRSxFQUFFLENBQUMsR0FBRSxjQUFhO1FBQUMsT0FBTSxDQUFDO0lBQUMsSUFBRztBQUFHLElBQUksSUFBRSxFQUFFLENBQUE7SUFBSTtJQUFjLENBQUE7UUFBVztRQUFhLElBQUksSUFBRSxPQUFPLElBQUksc0JBQXFCLElBQUUsT0FBTyxJQUFJLGVBQWMsSUFBRSxPQUFPLFdBQVMsYUFBVyxVQUFRLEtBQUksSUFBRSxJQUFJLEtBQUksSUFBRSxJQUFJLEdBQUUsSUFBRSxJQUFJLEdBQUUsSUFBRSxJQUFJLEdBQUUsSUFBRSxFQUFFLEVBQUMsSUFBRSxJQUFJLEtBQUks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SUFBRyxFQUFFLFVBQVUsa0JBQWlCLE9BQU0sQ0FBQzt3QkFBRSxJQUFJLElBQUUsT0FBTyxvQkFBb0IsRUFBRTt3QkFBVyxJQUFHLEVBQUUsU0FBTyxLQUFHLENBQUMsQ0FBQyxFQUFFLEtBQUcsaUJBQWUsRUFBRSxVQUFVLGNBQVksT0FBTyxXQUFVLE9BQU0sQ0FBQztvQkFBQztvQkFBQyxJQUFJLElBQUUsRUFBRSxRQUFNLEVBQUU7b0JBQVksT0FBTyxPQUFPLEtBQUcsWUFBVSxTQUFTLEtBQUs7Z0JBQUcsS0FBSTtvQkFBVSxJQUFHLEtBQUcsTUFBSyxPQUFPLEVBQUUsR0FBRTt3QkFBYSxLQUFLO3dCQUFFLEtBQUs7NEJBQUUsT0FBTSxDQUFDO3dCQUFFOzRCQUFRLE9BQU0sQ0FBQztvQkFBQztvQkFBQyxPQUFNLENBQUM7Z0JBQUU7b0JBQVEsT0FBTSxDQUFDO1lBQUM7UUFBQztRQUFDLEVBQUUsdUJBQXFCLElBQUcsRUFBRSxpQ0FBK0IsR0FBRSxFQUFFLHNDQUFvQyxJQUFHLEVBQUUsNEJBQTBCLElBQUcsRUFBRSxnQkFBYyxHQUFFLEVBQUUsa0JBQWdCLEdBQUUsRUFBRSx5QkFBdUIsSUFBRyxFQUFFLHVCQUFxQixJQUFHLEVBQUUsd0JBQXNCLElBQUcsRUFBRSxzQkFBb0IsR0FBRSxFQUFFLFdBQVMsR0FBRSxFQUFFLGVBQWE7SUFBQyxDQUFBO0FBQUk7QUFBRyxJQUFJLElBQUUsRUFBRSxDQUFDLElBQUc7SUFBSztJQUFhLEVBQUUsVUFBUTtBQUFHO0FBQUcsSUFBSSxJQUFFLENBQUM7QUFBRSxHQUFHLEdBQUU7SUFBQyxTQUFRLElBQUk7QUFBRTtBQUFHLE9BQU8sVUFBUSxHQUFHO0FBQUcsSUFBSSxJQUFFLEVBQUU7QUFBSyxFQUFFLEdBQUUsRUFBRSxNQUFLLE9BQU87QUFBUyxJQUFJLEtBQUcsRUFBRSxTQUNwNUw7Ozs7Ozs7Ozs7OztBQVlBIiwic291cmNlcyI6WyJ1aS9hZHZhbmNlZC50c3giLCJub2RlX21vZHVsZXMvLnBucG0vcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9yZWFjdC9qc3gtZGV2LXJ1bnRpbWUuanMiLCJub2RlX21vZHVsZXMvLnBucG0vcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvcmVhY3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9yZWFjdC9janMvcmVhY3QuZGV2ZWxvcG1lbnQuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYW50ZC1tb2JpbGVANS40My4wX3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9hbnRkLW1vYmlsZS9lcy9jb21wb25lbnRzL3RleHQtYXJlYS90ZXh0LWFyZWEuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYWhvb2tzQDMuMTEuMF9yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2Fob29rc0AzLjExLjBfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0L2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2Fob29rc0AzLjExLjBfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91dGlscy9pc0Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCt0cmFuc2Zvcm1lci1qc0AyLjkuM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYWhvb2tzQDMuMTEuMF9yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3V0aWxzL25vb3AuanMiLCJub2RlX21vZHVsZXMvLnBucG0vYWhvb2tzQDMuMTEuMF9yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3VzZU1lbW9pemVkRm4vaW5kZXguanMiLCJub2RlX21vZHVsZXMvLnBucG0vYWhvb2tzQDMuMTEuMF9yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvYWhvb2tzL2VzL3V0aWxzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2Fob29rc0AzLjExLjBfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL2Fob29rcy9lcy91dGlscy9pc0Rldi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9haG9va3NAMy4xMS4wX3JlYWN0LWRvbUAxOC4zLjFfcmVhY3RAMTguMy4xL25vZGVfbW9kdWxlcy9haG9va3MvZXMvdXNlVXBkYXRlL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL3J1bmVzMkAxLjEuMTAvbm9kZV9tb2R1bGVzL3J1bmVzMi9kaXN0L2luZGV4LmVzbS5tanMiLCJub2RlX21vZHVsZXMvLnBucG0vcnVuZXMyQDEuMS4xMC9ub2RlX21vZHVsZXMvcnVuZXMyL3NyYy9pbmRleC50cyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9hbnRkLW1vYmlsZUA1LjQzLjBfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2VzL2NvbXBvbmVudHMvaW5wdXQvdXNlSW5wdXRIYW5kbGVLZXlEb3duLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2FudGQtbW9iaWxlQDUuNDMuMF9yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvZXMvdXRpbHMvZGV2LWxvZy5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9hbnRkLW1vYmlsZUA1LjQzLjBfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2VzL3V0aWxzL2lzLWRldi5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9hbnRkLW1vYmlsZUA1LjQzLjBfcmVhY3QtZG9tQDE4LjMuMV9yZWFjdEAxOC4zLjEvbm9kZV9tb2R1bGVzL2FudGQtbW9iaWxlL2VzL3V0aWxzL25hdGl2ZS1wcm9wcy5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9jbGFzc25hbWVzQDIuNS4xL25vZGVfbW9kdWxlcy9jbGFzc25hbWVzL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2FudGQtbW9iaWxlQDUuNDMuMF9yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvZXMvdXRpbHMvdXNlLXByb3BzLXZhbHVlLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL2FudGQtbW9iaWxlQDUuNDMuMF9yZWFjdC1kb21AMTguMy4xX3JlYWN0QDE4LjMuMS9ub2RlX21vZHVsZXMvYW50ZC1tb2JpbGUvZXMvdXRpbHMvd2l0aC1kZWZhdWx0LXByb3BzLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrdHJhbnNmb3JtZXItcmVhY3QtcmVmcmVzaC13cmFwQDIuOS4zX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1yZWFjdC1yZWZyZXNoLXdyYXAvbGliL2hlbHBlcnMvaGVscGVycy5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJlc29sdmVyQDAuMTQuMS9ub2RlX21vZHVsZXMvQHBsYXNtb2hxL3BhcmNlbC1yZXNvbHZlci9kaXN0L3BvbHlmaWxscy9yZWFjdC1yZWZyZXNoL3J1bnRpbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgVGV4dEFyZWEgfSBmcm9tIFwiYW50ZC1tb2JpbGUvZXMvY29tcG9uZW50cy90ZXh0LWFyZWEvdGV4dC1hcmVhXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWR2YW5jZWQoKSB7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoXCJcIilcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidHctbXQtNCB0dy1yb3VuZGVkLWxnIHR3LWJvcmRlciB0dy1ib3JkZXItc2xhdGUtMjAwIHR3LXAtM1wiPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidHctbWItMiB0dy1tdC0wIHR3LXRleHQteHMgdHctZm9udC1zZW1pYm9sZFwiPlxuICAgICAgICBTZWNvbmQgZHluYW1pYyBpbXBvcnQoKSBib3VuZGFyeVxuICAgICAgPC9wPlxuICAgICAgPFRleHRBcmVhXG4gICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9e3NldFZhbHVlfVxuICAgICAgICByb3dzPXszfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVkaXRvciBjb2RlIGxvYWRzIG9uIGRlbWFuZFwiXG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtanN4LWRldi1ydW50aW1lLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QtanN4LWRldi1ydW50aW1lLmRldmVsb3BtZW50LmpzXG4gKlxuICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiKSB7XG4gIChmdW5jdGlvbigpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50Jyk7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKTtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKTtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKTtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0Jyk7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG52YXIgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xudmFyIFJFQUNUX01FTU9fVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1lbW8nKTtcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5sYXp5Jyk7XG52YXIgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcbnZhciBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgPSBTeW1ib2wuaXRlcmF0b3I7XG52YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7XG5mdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgaWYgKG1heWJlSXRlcmFibGUgPT09IG51bGwgfHwgdHlwZW9mIG1heWJlSXRlcmFibGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgbWF5YmVJdGVyYXRvciA9IE1BWUJFX0lURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW01BWUJFX0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF07XG5cbiAgaWYgKHR5cGVvZiBtYXliZUl0ZXJhdG9yID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG1heWJlSXRlcmF0b3I7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFJlYWN0U2hhcmVkSW50ZXJuYWxzID0gUmVhY3QuX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG5cbmZ1bmN0aW9uIGVycm9yKGZvcm1hdCkge1xuICB7XG4gICAge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yID4gMSA/IF9sZW4yIC0gMSA6IDApLCBfa2V5MiA9IDE7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAgYXJnc1tfa2V5MiAtIDFdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cblxuICAgICAgcHJpbnRXYXJuaW5nKCdlcnJvcicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG5cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKGl0ZW0pO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSRUFDVF9NT0RVTEVfUkVGRVJFTkNFO1xuXG57XG4gIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgPSBTeW1ib2wuZm9yKCdyZWFjdC5tb2R1bGUucmVmZXJlbmNlJyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCBlbmFibGVEZWJ1Z1RyYWNpbmcgIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgZW5hYmxlTGVnYWN5SGlkZGVuICB8fCB0eXBlID09PSBSRUFDVF9PRkZTQ1JFRU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSAgfHwgZW5hYmxlQ2FjaGVFbGVtZW50ICB8fCBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gVGhpcyBuZWVkcyB0byBpbmNsdWRlIGFsbCBwb3NzaWJsZSBtb2R1bGUgcmVmZXJlbmNlIG9iamVjdFxuICAgIC8vIHR5cGVzIHN1cHBvcnRlZCBieSBhbnkgRmxpZ2h0IGNvbmZpZ3VyYXRpb24gYW55d2hlcmUgc2luY2VcbiAgICAvLyB3ZSBkb24ndCBrbm93IHdoaWNoIEZsaWdodCBidWlsZCB0aGlzIHdpbGwgZW5kIHVwIGJlaW5nIHVzZWRcbiAgICAvLyB3aXRoLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01PRFVMRV9SRUZFUkVOQ0UgfHwgdHlwZS5nZXRNb2R1bGVJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjtcbnZhciBwcmVmaXg7XG5mdW5jdGlvbiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIGlmIChwcmVmaXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gRXh0cmFjdCB0aGUgVk0gc3BlY2lmaWMgcHJlZml4IHVzZWQgYnkgZWFjaCBsaW5lLlxuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgdmFyIG1hdGNoID0geC5zdGFjay50cmltKCkubWF0Y2goL1xcbiggKihhdCApPykvKTtcbiAgICAgICAgcHJlZml4ID0gbWF0Y2ggJiYgbWF0Y2hbMV0gfHwgJyc7XG4gICAgICB9XG4gICAgfSAvLyBXZSB1c2UgdGhlIHByZWZpeCB0byBlbnN1cmUgb3VyIHN0YWNrcyBsaW5lIHVwIHdpdGggbmF0aXZlIHN0YWNrIGZyYW1lcy5cblxuXG4gICAgcmV0dXJuICdcXG4nICsgcHJlZml4ICsgbmFtZTtcbiAgfVxufVxudmFyIHJlZW50cnkgPSBmYWxzZTtcbnZhciBjb21wb25lbnRGcmFtZUNhY2hlO1xuXG57XG4gIHZhciBQb3NzaWJseVdlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyA/IFdlYWtNYXAgOiBNYXA7XG4gIGNvbXBvbmVudEZyYW1lQ2FjaGUgPSBuZXcgUG9zc2libHlXZWFrTWFwKCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGNvbnN0cnVjdCkge1xuICAvLyBJZiBzb21ldGhpbmcgYXNrZWQgZm9yIGEgc3RhY2sgaW5zaWRlIGEgZmFrZSByZW5kZXIsIGl0IHNob3VsZCBnZXQgaWdub3JlZC5cbiAgaWYgKCAhZm4gfHwgcmVlbnRyeSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIHtcbiAgICB2YXIgZnJhbWUgPSBjb21wb25lbnRGcmFtZUNhY2hlLmdldChmbik7XG5cbiAgICBpZiAoZnJhbWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZyYW1lO1xuICAgIH1cbiAgfVxuXG4gIHZhciBjb250cm9sO1xuICByZWVudHJ5ID0gdHJ1ZTtcbiAgdmFyIHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2UgPSBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZTsgLy8gJEZsb3dGaXhNZSBJdCBkb2VzIGFjY2VwdCB1bmRlZmluZWQuXG5cbiAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSB1bmRlZmluZWQ7XG4gIHZhciBwcmV2aW91c0Rpc3BhdGNoZXI7XG5cbiAge1xuICAgIHByZXZpb3VzRGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDsgLy8gU2V0IHRoZSBkaXNwYXRjaGVyIGluIERFViBiZWNhdXNlIHRoaXMgbWlnaHQgYmUgY2FsbCBpbiB0aGUgcmVuZGVyIGZ1bmN0aW9uXG4gICAgLy8gZm9yIHdhcm5pbmdzLlxuXG4gICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQgPSBwcmV2aW91c0Rpc3BhdGNoZXI7XG4gICAgICByZWVuYWJsZUxvZ3MoKTtcbiAgICB9XG5cbiAgICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHByZXZpb3VzUHJlcGFyZVN0YWNrVHJhY2U7XG4gIH0gLy8gRmFsbGJhY2sgdG8ganVzdCB1c2luZyB0aGUgbmFtZSBpZiB3ZSBjb3VsZG4ndCBtYWtlIGl0IHRocm93LlxuXG5cbiAgdmFyIG5hbWUgPSBmbiA/IGZuLmRpc3BsYXlOYW1lIHx8IGZuLm5hbWUgOiAnJztcbiAgdmFyIHN5bnRoZXRpY0ZyYW1lID0gbmFtZSA/IGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUpIDogJyc7XG5cbiAge1xuICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBzeW50aGV0aWNGcmFtZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN5bnRoZXRpY0ZyYW1lO1xufVxuZnVuY3Rpb24gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKGZuLCBzb3VyY2UsIG93bmVyRm4pIHtcbiAge1xuICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKGZuLCBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdWxkQ29uc3RydWN0KENvbXBvbmVudCkge1xuICB2YXIgcHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcbiAgcmV0dXJuICEhKHByb3RvdHlwZSAmJiBwcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudCk7XG59XG5cbmZ1bmN0aW9uIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLCBzb3VyY2UsIG93bmVyRm4pIHtcblxuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAge1xuICAgICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUodHlwZSwgc2hvdWxkQ29uc3RydWN0KHR5cGUpKTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKHR5cGUpO1xuICB9XG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZScpO1xuXG4gICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlTGlzdCcpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUucmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIC8vIE1lbW8gbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZS50eXBlLCBzb3VyY2UsIG93bmVyRm4pO1xuXG4gICAgICBjYXNlIFJFQUNUX0xBWllfVFlQRTpcbiAgICAgICAge1xuICAgICAgICAgIHZhciBsYXp5Q29tcG9uZW50ID0gdHlwZTtcbiAgICAgICAgICB2YXIgcGF5bG9hZCA9IGxhenlDb21wb25lbnQuX3BheWxvYWQ7XG4gICAgICAgICAgdmFyIGluaXQgPSBsYXp5Q29tcG9uZW50Ll9pbml0O1xuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIExhenkgbWF5IGNvbnRhaW4gYW55IGNvbXBvbmVudCB0eXBlIHNvIHdlIHJlY3Vyc2l2ZWx5IHJlc29sdmUgaXQuXG4gICAgICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGluaXQocGF5bG9hZCksIHNvdXJjZSwgb3duZXJGbik7XG4gICAgICAgICAgfSBjYXRjaCAoeCkge31cbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIGxvZ2dlZFR5cGVGYWlsdXJlcyA9IHt9O1xudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KSB7XG4gIHtcbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgdmFyIG93bmVyID0gZWxlbWVudC5fb3duZXI7XG4gICAgICB2YXIgc3RhY2sgPSBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoZWxlbWVudC50eXBlLCBlbGVtZW50Ll9zb3VyY2UsIG93bmVyID8gb3duZXIudHlwZSA6IG51bGwpO1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9wVHlwZXModHlwZVNwZWNzLCB2YWx1ZXMsIGxvY2F0aW9uLCBjb21wb25lbnROYW1lLCBlbGVtZW50KSB7XG4gIHtcbiAgICAvLyAkRmxvd0ZpeE1lIFRoaXMgaXMgb2theSBidXQgRmxvdyBkb2Vzbid0IGtub3cgaXQuXG4gICAgdmFyIGhhcyA9IEZ1bmN0aW9uLmNhbGwuYmluZChoYXNPd25Qcm9wZXJ0eSk7XG5cbiAgICBmb3IgKHZhciB0eXBlU3BlY05hbWUgaW4gdHlwZVNwZWNzKSB7XG4gICAgICBpZiAoaGFzKHR5cGVTcGVjcywgdHlwZVNwZWNOYW1lKSkge1xuICAgICAgICB2YXIgZXJyb3IkMSA9IHZvaWQgMDsgLy8gUHJvcCB0eXBlIHZhbGlkYXRpb24gbWF5IHRocm93LiBJbiBjYXNlIHRoZXkgZG8sIHdlIGRvbid0IHdhbnQgdG9cbiAgICAgICAgLy8gZmFpbCB0aGUgcmVuZGVyIHBoYXNlIHdoZXJlIGl0IGRpZG4ndCBmYWlsIGJlZm9yZS4gU28gd2UgbG9nIGl0LlxuICAgICAgICAvLyBBZnRlciB0aGVzZSBoYXZlIGJlZW4gY2xlYW5lZCB1cCwgd2UnbGwgbGV0IHRoZW0gdGhyb3cuXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIGlzIGludGVudGlvbmFsbHkgYW4gaW52YXJpYW50IHRoYXQgZ2V0cyBjYXVnaHQuIEl0J3MgdGhlIHNhbWVcbiAgICAgICAgICAvLyBiZWhhdmlvciBhcyB3aXRob3V0IHRoaXMgc3RhdGVtZW50IGV4Y2VwdCB3aXRoIGEgYmV0dGVyIG1lc3NhZ2UuXG4gICAgICAgICAgaWYgKHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3Byb2QtZXJyb3ItY29kZXNcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgaXNBcnJheUltcGwgPSBBcnJheS5pc0FycmF5OyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVkZWNsYXJlXG5cbmZ1bmN0aW9uIGlzQXJyYXkoYSkge1xuICByZXR1cm4gaXNBcnJheUltcGwoYSk7XG59XG5cbi8qXG4gKiBUaGUgYCcnICsgdmFsdWVgIHBhdHRlcm4gKHVzZWQgaW4gaW4gcGVyZi1zZW5zaXRpdmUgY29kZSkgdGhyb3dzIGZvciBTeW1ib2xcbiAqIGFuZCBUZW1wb3JhbC4qIHR5cGVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L3B1bGwvMjIwNjQuXG4gKlxuICogVGhlIGZ1bmN0aW9ucyBpbiB0aGlzIG1vZHVsZSB3aWxsIHRocm93IGFuIGVhc2llci10by11bmRlcnN0YW5kLFxuICogZWFzaWVyLXRvLWRlYnVnIGV4Y2VwdGlvbiB3aXRoIGEgY2xlYXIgZXJyb3JzIG1lc3NhZ2UgbWVzc2FnZSBleHBsYWluaW5nIHRoZVxuICogcHJvYmxlbS4gKEluc3RlYWQgb2YgYSBjb25mdXNpbmcgZXhjZXB0aW9uIHRocm93biBpbnNpZGUgdGhlIGltcGxlbWVudGF0aW9uXG4gKiBvZiB0aGUgYHZhbHVlYCBvYmplY3QpLlxuICovXG4vLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuZnVuY3Rpb24gdHlwZU5hbWUodmFsdWUpIHtcbiAge1xuICAgIC8vIHRvU3RyaW5nVGFnIGlzIG5lZWRlZCBmb3IgbmFtZXNwYWNlZCB0eXBlcyBsaWtlIFRlbXBvcmFsLkluc3RhbnRcbiAgICB2YXIgaGFzVG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC50b1N0cmluZ1RhZztcbiAgICB2YXIgdHlwZSA9IGhhc1RvU3RyaW5nVGFnICYmIHZhbHVlW1N5bWJvbC50b1N0cmluZ1RhZ10gfHwgdmFsdWUuY29uc3RydWN0b3IubmFtZSB8fCAnT2JqZWN0JztcbiAgICByZXR1cm4gdHlwZTtcbiAgfVxufSAvLyAkRmxvd0ZpeE1lIG9ubHkgY2FsbGVkIGluIERFViwgc28gdm9pZCByZXR1cm4gaXMgbm90IHBvc3NpYmxlLlxuXG5cbmZ1bmN0aW9uIHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSB7XG4gIHtcbiAgICB0cnkge1xuICAgICAgdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIC8vIElmIHlvdSBlbmRlZCB1cCBoZXJlIGJ5IGZvbGxvd2luZyBhbiBleGNlcHRpb24gY2FsbCBzdGFjaywgaGVyZSdzIHdoYXQnc1xuICAvLyBoYXBwZW5lZDogeW91IHN1cHBsaWVkIGFuIG9iamVjdCBvciBzeW1ib2wgdmFsdWUgdG8gUmVhY3QgKGFzIGEgcHJvcCwga2V5LFxuICAvLyBET00gYXR0cmlidXRlLCBDU1MgcHJvcGVydHksIHN0cmluZyByZWYsIGV0Yy4pIGFuZCB3aGVuIFJlYWN0IHRyaWVkIHRvXG4gIC8vIGNvZXJjZSBpdCB0byBhIHN0cmluZyB1c2luZyBgJycgKyB2YWx1ZWAsIGFuIGV4Y2VwdGlvbiB3YXMgdGhyb3duLlxuICAvL1xuICAvLyBUaGUgbW9zdCBjb21tb24gdHlwZXMgdGhhdCB3aWxsIGNhdXNlIHRoaXMgZXhjZXB0aW9uIGFyZSBgU3ltYm9sYCBpbnN0YW5jZXNcbiAgLy8gYW5kIFRlbXBvcmFsIG9iamVjdHMgbGlrZSBgVGVtcG9yYWwuSW5zdGFudGAuIEJ1dCBhbnkgb2JqZWN0IHRoYXQgaGFzIGFcbiAgLy8gYHZhbHVlT2ZgIG9yIGBbU3ltYm9sLnRvUHJpbWl0aXZlXWAgbWV0aG9kIHRoYXQgdGhyb3dzIHdpbGwgYWxzbyBjYXVzZSB0aGlzXG4gIC8vIGV4Y2VwdGlvbi4gKExpYnJhcnkgYXV0aG9ycyBkbyB0aGlzIHRvIHByZXZlbnQgdXNlcnMgZnJvbSB1c2luZyBidWlsdC1pblxuICAvLyBudW1lcmljIG9wZXJhdG9ycyBsaWtlIGArYCBvciBjb21wYXJpc29uIG9wZXJhdG9ycyBsaWtlIGA+PWAgYmVjYXVzZSBjdXN0b21cbiAgLy8gbWV0aG9kcyBhcmUgbmVlZGVkIHRvIHBlcmZvcm0gYWNjdXJhdGUgYXJpdGhtZXRpYyBvciBjb21wYXJpc29uLilcbiAgLy9cbiAgLy8gVG8gZml4IHRoZSBwcm9ibGVtLCBjb2VyY2UgdGhpcyBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIGEgc3RyaW5nIGJlZm9yZVxuICAvLyBwYXNzaW5nIGl0IHRvIFJlYWN0LiBUaGUgbW9zdCByZWxpYWJsZSB3YXkgaXMgdXN1YWxseSBgU3RyaW5nKHZhbHVlKWAuXG4gIC8vXG4gIC8vIFRvIGZpbmQgd2hpY2ggdmFsdWUgaXMgdGhyb3dpbmcsIGNoZWNrIHRoZSBicm93c2VyIG9yIGRlYnVnZ2VyIGNvbnNvbGUuXG4gIC8vIEJlZm9yZSB0aGlzIGV4Y2VwdGlvbiB3YXMgdGhyb3duLCB0aGVyZSBzaG91bGQgYmUgYGNvbnNvbGUuZXJyb3JgIG91dHB1dFxuICAvLyB0aGF0IHNob3dzIHRoZSB0eXBlIChTeW1ib2wsIFRlbXBvcmFsLlBsYWluRGF0ZSwgZXRjLikgdGhhdCBjYXVzZWQgdGhlXG4gIC8vIHByb2JsZW0gYW5kIGhvdyB0aGF0IHR5cGUgd2FzIHVzZWQ6IGtleSwgYXRycmlidXRlLCBpbnB1dCB2YWx1ZSBwcm9wLCBldGMuXG4gIC8vIEluIG1vc3QgY2FzZXMsIHRoaXMgY29uc29sZSBvdXRwdXQgYWxzbyBzaG93cyB0aGUgY29tcG9uZW50IGFuZCBpdHNcbiAgLy8gYW5jZXN0b3IgY29tcG9uZW50cyB3aGVyZSB0aGUgZXhjZXB0aW9uIGhhcHBlbmVkLlxuICAvL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvc2FmZS1zdHJpbmctY29lcmNpb25cbiAgcmV0dXJuICcnICsgdmFsdWU7XG59XG5mdW5jdGlvbiBjaGVja0tleVN0cmluZ0NvZXJjaW9uKHZhbHVlKSB7XG4gIHtcbiAgICBpZiAod2lsbENvZXJjaW9uVGhyb3codmFsdWUpKSB7XG4gICAgICBlcnJvcignVGhlIHByb3ZpZGVkIGtleSBpcyBhbiB1bnN1cHBvcnRlZCB0eXBlICVzLicgKyAnIFRoaXMgdmFsdWUgbXVzdCBiZSBjb2VyY2VkIHRvIGEgc3RyaW5nIGJlZm9yZSBiZWZvcmUgdXNpbmcgaXQgaGVyZS4nLCB0eXBlTmFtZSh2YWx1ZSkpO1xuXG4gICAgICByZXR1cm4gdGVzdFN0cmluZ0NvZXJjaW9uKHZhbHVlKTsgLy8gdGhyb3cgKHRvIGhlbHAgY2FsbGVycyBmaW5kIHRyb3VibGVzaG9vdGluZyBjb21tZW50cylcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3RDdXJyZW50T3duZXI7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoUmVhY3RDdXJyZW50T3duZXIuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKCFkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdKSB7XG4gICAgICAgIGVycm9yKCdDb21wb25lbnQgXCIlc1wiIGNvbnRhaW5zIHRoZSBzdHJpbmcgcmVmIFwiJXNcIi4gJyArICdTdXBwb3J0IGZvciBzdHJpbmcgcmVmcyB3aWxsIGJlIHJlbW92ZWQgaW4gYSBmdXR1cmUgbWFqb3IgcmVsZWFzZS4gJyArICdUaGlzIGNhc2UgY2Fubm90IGJlIGF1dG9tYXRpY2FsbHkgY29udmVydGVkIHRvIGFuIGFycm93IGZ1bmN0aW9uLiAnICsgJ1dlIGFzayB5b3UgdG8gbWFudWFsbHkgZml4IHRoaXMgY2FzZSBieSB1c2luZyB1c2VSZWYoKSBvciBjcmVhdGVSZWYoKSBpbnN0ZWFkLiAnICsgJ0xlYXJuIG1vcmUgYWJvdXQgdXNpbmcgcmVmcyBzYWZlbHkgaGVyZTogJyArICdodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3RyaWN0LW1vZGUtc3RyaW5nLXJlZicsIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpLCBjb25maWcucmVmKTtcblxuICAgICAgICBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzW2NvbXBvbmVudE5hbWVdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nS2V5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ2tleScsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nS2V5LFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGVmaW5lUmVmUHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHtcbiAgICB2YXIgd2FybkFib3V0QWNjZXNzaW5nUmVmID0gZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcFJlZldhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBgcmVmYCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICAgIGdldDogd2FybkFib3V0QWNjZXNzaW5nUmVmLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH1cbn1cbi8qKlxuICogRmFjdG9yeSBtZXRob2QgdG8gY3JlYXRlIGEgbmV3IFJlYWN0IGVsZW1lbnQuIFRoaXMgbm8gbG9uZ2VyIGFkaGVyZXMgdG9cbiAqIHRoZSBjbGFzcyBwYXR0ZXJuLCBzbyBkbyBub3QgdXNlIG5ldyB0byBjYWxsIGl0LiBBbHNvLCBpbnN0YW5jZW9mIGNoZWNrXG4gKiB3aWxsIG5vdCB3b3JrLiBJbnN0ZWFkIHRlc3QgJCR0eXBlb2YgZmllbGQgYWdhaW5zdCBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgdG8gY2hlY2tcbiAqIGlmIHNvbWV0aGluZyBpcyBhIFJlYWN0IEVsZW1lbnQuXG4gKlxuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0geyp9IHByb3BzXG4gKiBAcGFyYW0geyp9IGtleVxuICogQHBhcmFtIHtzdHJpbmd8b2JqZWN0fSByZWZcbiAqIEBwYXJhbSB7Kn0gb3duZXJcbiAqIEBwYXJhbSB7Kn0gc2VsZiBBICp0ZW1wb3JhcnkqIGhlbHBlciB0byBkZXRlY3QgcGxhY2VzIHdoZXJlIGB0aGlzYCBpc1xuICogZGlmZmVyZW50IGZyb20gdGhlIGBvd25lcmAgd2hlbiBSZWFjdC5jcmVhdGVFbGVtZW50IGlzIGNhbGxlZCwgc28gdGhhdCB3ZVxuICogY2FuIHdhcm4uIFdlIHdhbnQgdG8gZ2V0IHJpZCBvZiBvd25lciBhbmQgcmVwbGFjZSBzdHJpbmcgYHJlZmBzIHdpdGggYXJyb3dcbiAqIGZ1bmN0aW9ucywgYW5kIGFzIGxvbmcgYXMgYHRoaXNgIGFuZCBvd25lciBhcmUgdGhlIHNhbWUsIHRoZXJlIHdpbGwgYmUgbm9cbiAqIGNoYW5nZSBpbiBiZWhhdmlvci5cbiAqIEBwYXJhbSB7Kn0gc291cmNlIEFuIGFubm90YXRpb24gb2JqZWN0IChhZGRlZCBieSBhIHRyYW5zcGlsZXIgb3Igb3RoZXJ3aXNlKVxuICogaW5kaWNhdGluZyBmaWxlbmFtZSwgbGluZSBudW1iZXIsIGFuZC9vciBvdGhlciBpbmZvcm1hdGlvbi5cbiAqIEBpbnRlcm5hbFxuICovXG5cblxudmFyIFJlYWN0RWxlbWVudCA9IGZ1bmN0aW9uICh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBvd25lciwgcHJvcHMpIHtcbiAgdmFyIGVsZW1lbnQgPSB7XG4gICAgLy8gVGhpcyB0YWcgYWxsb3dzIHVzIHRvIHVuaXF1ZWx5IGlkZW50aWZ5IHRoaXMgYXMgYSBSZWFjdCBFbGVtZW50XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0VMRU1FTlRfVFlQRSxcbiAgICAvLyBCdWlsdC1pbiBwcm9wZXJ0aWVzIHRoYXQgYmVsb25nIG9uIHRoZSBlbGVtZW50XG4gICAgdHlwZTogdHlwZSxcbiAgICBrZXk6IGtleSxcbiAgICByZWY6IHJlZixcbiAgICBwcm9wczogcHJvcHMsXG4gICAgLy8gUmVjb3JkIHRoZSBjb21wb25lbnQgcmVzcG9uc2libGUgZm9yIGNyZWF0aW5nIHRoaXMgZWxlbWVudC5cbiAgICBfb3duZXI6IG93bmVyXG4gIH07XG5cbiAge1xuICAgIC8vIFRoZSB2YWxpZGF0aW9uIGZsYWcgaXMgY3VycmVudGx5IG11dGF0aXZlLiBXZSBwdXQgaXQgb25cbiAgICAvLyBhbiBleHRlcm5hbCBiYWNraW5nIHN0b3JlIHNvIHRoYXQgd2UgY2FuIGZyZWV6ZSB0aGUgd2hvbGUgb2JqZWN0LlxuICAgIC8vIFRoaXMgY2FuIGJlIHJlcGxhY2VkIHdpdGggYSBXZWFrTWFwIG9uY2UgdGhleSBhcmUgaW1wbGVtZW50ZWQgaW5cbiAgICAvLyBjb21tb25seSB1c2VkIGRldmVsb3BtZW50IGVudmlyb25tZW50cy5cbiAgICBlbGVtZW50Ll9zdG9yZSA9IHt9OyAvLyBUbyBtYWtlIGNvbXBhcmluZyBSZWFjdEVsZW1lbnRzIGVhc2llciBmb3IgdGVzdGluZyBwdXJwb3Nlcywgd2UgbWFrZVxuICAgIC8vIHRoZSB2YWxpZGF0aW9uIGZsYWcgbm9uLWVudW1lcmFibGUgKHdoZXJlIHBvc3NpYmxlLCB3aGljaCBzaG91bGRcbiAgICAvLyBpbmNsdWRlIGV2ZXJ5IGVudmlyb25tZW50IHdlIHJ1biB0ZXN0cyBpbiksIHNvIHRoZSB0ZXN0IGZyYW1ld29ya1xuICAgIC8vIGlnbm9yZXMgaXQuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudC5fc3RvcmUsICd2YWxpZGF0ZWQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0pOyAvLyBzZWxmIGFuZCBzb3VyY2UgYXJlIERFViBvbmx5IHByb3BlcnRpZXMuXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zZWxmJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNlbGZcbiAgICB9KTsgLy8gVHdvIGVsZW1lbnRzIGNyZWF0ZWQgaW4gdHdvIGRpZmZlcmVudCBwbGFjZXMgc2hvdWxkIGJlIGNvbnNpZGVyZWRcbiAgICAvLyBlcXVhbCBmb3IgdGVzdGluZyBwdXJwb3NlcyBhbmQgdGhlcmVmb3JlIHdlIGhpZGUgaXQgZnJvbSBlbnVtZXJhdGlvbi5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NvdXJjZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzb3VyY2VcbiAgICB9KTtcblxuICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQucHJvcHMpO1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JmY3MvcHVsbC8xMDdcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHtvYmplY3R9IHByb3BzXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5XG4gKi9cblxuZnVuY3Rpb24ganN4REVWKHR5cGUsIGNvbmZpZywgbWF5YmVLZXksIHNvdXJjZSwgc2VsZikge1xuICB7XG4gICAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgICB2YXIgcHJvcHMgPSB7fTtcbiAgICB2YXIga2V5ID0gbnVsbDtcbiAgICB2YXIgcmVmID0gbnVsbDsgLy8gQ3VycmVudGx5LCBrZXkgY2FuIGJlIHNwcmVhZCBpbiBhcyBhIHByb3AuIFRoaXMgY2F1c2VzIGEgcG90ZW50aWFsXG4gICAgLy8gaXNzdWUgaWYga2V5IGlzIGFsc28gZXhwbGljaXRseSBkZWNsYXJlZCAoaWUuIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+XG4gICAgLy8gb3IgPGRpdiBrZXk9XCJIaVwiIHsuLi5wcm9wc30gLz4gKS4gV2Ugd2FudCB0byBkZXByZWNhdGUga2V5IHNwcmVhZCxcbiAgICAvLyBidXQgYXMgYW4gaW50ZXJtZWRpYXJ5IHN0ZXAsIHdlIHdpbGwgdXNlIGpzeERFViBmb3IgZXZlcnl0aGluZyBleGNlcHRcbiAgICAvLyA8ZGl2IHsuLi5wcm9wc30ga2V5PVwiSGlcIiAvPiwgYmVjYXVzZSB3ZSBhcmVuJ3QgY3VycmVudGx5IGFibGUgdG8gdGVsbCBpZlxuICAgIC8vIGtleSBpcyBleHBsaWNpdGx5IGRlY2xhcmVkIHRvIGJlIHVuZGVmaW5lZCBvciBub3QuXG5cbiAgICBpZiAobWF5YmVLZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKG1heWJlS2V5KTtcbiAgICAgIH1cblxuICAgICAga2V5ID0gJycgKyBtYXliZUtleTtcbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnQob2JqZWN0KSB7XG4gIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAge1xuICAgIGlmIChSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKFJlYWN0Q3VycmVudE93bmVyJDEuY3VycmVudC50eXBlKTtcblxuICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuICdcXG5cXG5DaGVjayB0aGUgcmVuZGVyIG1ldGhvZCBvZiBgJyArIG5hbWUgKyAnYC4nO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpIHtcbiAge1xuICAgIGlmIChzb3VyY2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGZpbGVOYW1lID0gc291cmNlLmZpbGVOYW1lLnJlcGxhY2UoL14uKltcXFxcXFwvXS8sICcnKTtcbiAgICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHlvdXIgY29kZSBhdCAnICsgZmlsZU5hbWUgKyAnOicgKyBsaW5lTnVtYmVyICsgJy4nO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB7XG4gICAgdmFyIGluZm8gPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcblxuICAgIGlmICghaW5mbykge1xuICAgICAgdmFyIHBhcmVudE5hbWUgPSB0eXBlb2YgcGFyZW50VHlwZSA9PT0gJ3N0cmluZycgPyBwYXJlbnRUeXBlIDogcGFyZW50VHlwZS5kaXNwbGF5TmFtZSB8fCBwYXJlbnRUeXBlLm5hbWU7XG5cbiAgICAgIGlmIChwYXJlbnROYW1lKSB7XG4gICAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5mbztcbiAgfVxufVxuLyoqXG4gKiBXYXJuIGlmIHRoZSBlbGVtZW50IGRvZXNuJ3QgaGF2ZSBhbiBleHBsaWNpdCBrZXkgYXNzaWduZWQgdG8gaXQuXG4gKiBUaGlzIGVsZW1lbnQgaXMgaW4gYW4gYXJyYXkuIFRoZSBhcnJheSBjb3VsZCBncm93IGFuZCBzaHJpbmsgb3IgYmVcbiAqIHJlb3JkZXJlZC4gQWxsIGNoaWxkcmVuIHRoYXQgaGF2ZW4ndCBhbHJlYWR5IGJlZW4gdmFsaWRhdGVkIGFyZSByZXF1aXJlZCB0b1xuICogaGF2ZSBhIFwia2V5XCIgcHJvcGVydHkgYXNzaWduZWQgdG8gaXQuIEVycm9yIHN0YXR1c2VzIGFyZSBjYWNoZWQgc28gYSB3YXJuaW5nXG4gKiB3aWxsIG9ubHkgYmUgc2hvd24gb25jZS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBlbGVtZW50IEVsZW1lbnQgdGhhdCByZXF1aXJlcyBhIGtleS5cbiAqIEBwYXJhbSB7Kn0gcGFyZW50VHlwZSBlbGVtZW50J3MgcGFyZW50J3MgdHlwZS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRXhwbGljaXRLZXkoZWxlbWVudCwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgdmFyIGN1cnJlbnRDb21wb25lbnRFcnJvckluZm8gPSBnZXRDdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvKHBhcmVudFR5cGUpO1xuXG4gICAgaWYgKG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG93bmVySGFzS2V5VXNlV2FybmluZ1tjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvXSA9IHRydWU7IC8vIFVzdWFsbHkgdGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIG9mZmVuZGVyLCBidXQgaWYgaXQgYWNjZXB0cyBjaGlsZHJlbiBhcyBhXG4gICAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAgIC8vIGFzc2lnbmluZyBpdCBhIGtleS5cblxuICAgIHZhciBjaGlsZE93bmVyID0gJyc7XG5cbiAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICAvLyBHaXZlIHRoZSBjb21wb25lbnQgdGhhdCBvcmlnaW5hbGx5IGNyZWF0ZWQgdGhpcyBjaGlsZC5cbiAgICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGRpZFdhcm5BYm91dEtleVNwcmVhZCA9IHt9O1xuZnVuY3Rpb24ganN4V2l0aFZhbGlkYXRpb24odHlwZSwgcHJvcHMsIGtleSwgaXNTdGF0aWNDaGlsZHJlbiwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgdmFsaWRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpOyAvLyBXZSB3YXJuIGluIHRoaXMgY2FzZSBidXQgZG9uJ3QgdGhyb3cuIFdlIGV4cGVjdCB0aGUgZWxlbWVudCBjcmVhdGlvbiB0b1xuICAgIC8vIHN1Y2NlZWQgYW5kIHRoZXJlIHdpbGwgbGlrZWx5IGJlIGVycm9ycyBpbiByZW5kZXIuXG5cbiAgICBpZiAoIXZhbGlkVHlwZSkge1xuICAgICAgdmFyIGluZm8gPSAnJztcblxuICAgICAgaWYgKHR5cGUgPT09IHVuZGVmaW5lZCB8fCB0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCAmJiBPYmplY3Qua2V5cyh0eXBlKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICAgIH1cblxuICAgICAgdmFyIHNvdXJjZUluZm8gPSBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShzb3VyY2UpO1xuXG4gICAgICBpZiAoc291cmNlSW5mbykge1xuICAgICAgICBpbmZvICs9IHNvdXJjZUluZm87XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpbmZvICs9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdHlwZVN0cmluZztcblxuICAgICAgaWYgKHR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgdHlwZVN0cmluZyA9ICdudWxsJztcbiAgICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ2FycmF5JztcbiAgICAgIH0gZWxzZSBpZiAodHlwZSAhPT0gdW5kZWZpbmVkICYmIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRSkge1xuICAgICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCAna2V5JykpIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSk7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMocHJvcHMpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgICAgIHJldHVybiBrICE9PSAna2V5JztcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBiZWZvcmVFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3trZXk6IHNvbWVLZXksICcgKyBrZXlzLmpvaW4oJzogLi4uLCAnKSArICc6IC4uLn0nIDogJ3trZXk6IHNvbWVLZXl9JztcblxuICAgICAgICBpZiAoIWRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0pIHtcbiAgICAgICAgICB2YXIgYWZ0ZXJFeGFtcGxlID0ga2V5cy5sZW5ndGggPiAwID8gJ3snICsga2V5cy5qb2luKCc6IC4uLiwgJykgKyAnOiAuLi59JyA6ICd7fSc7XG5cbiAgICAgICAgICBlcnJvcignQSBwcm9wcyBvYmplY3QgY29udGFpbmluZyBhIFwia2V5XCIgcHJvcCBpcyBiZWluZyBzcHJlYWQgaW50byBKU1g6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMgey4uLnByb3BzfSAvPlxcbicgKyAnUmVhY3Qga2V5cyBtdXN0IGJlIHBhc3NlZCBkaXJlY3RseSB0byBKU1ggd2l0aG91dCB1c2luZyBzcHJlYWQ6XFxuJyArICcgIGxldCBwcm9wcyA9ICVzO1xcbicgKyAnICA8JXMga2V5PXtzb21lS2V5fSB7Li4ucHJvcHN9IC8+JywgYmVmb3JlRXhhbXBsZSwgY29tcG9uZW50TmFtZSwgYWZ0ZXJFeGFtcGxlLCBjb21wb25lbnROYW1lKTtcblxuICAgICAgICAgIGRpZFdhcm5BYm91dEtleVNwcmVhZFtjb21wb25lbnROYW1lICsgYmVmb3JlRXhhbXBsZV0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUpIHtcbiAgICAgIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhlbGVtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH1cbn0gLy8gVGhlc2UgdHdvIGZ1bmN0aW9ucyBleGlzdCB0byBzdGlsbCBnZXQgY2hpbGQgd2FybmluZ3MgaW4gZGV2XG5cbnZhciBqc3hERVYkMSA9ICBqc3hXaXRoVmFsaWRhdGlvbiA7XG5cbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5qc3hERVYgPSBqc3hERVYkMTtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC5kZXZlbG9wbWVudC5qcycpO1xufVxuIiwiLyoqXG4gKiBAbGljZW5zZSBSZWFjdFxuICogcmVhY3QuZGV2ZWxvcG1lbnQuanNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIEZhY2Vib29rLCBJbmMuIGFuZCBpdHMgYWZmaWxpYXRlcy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuXG4vKiBnbG9iYWwgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICovXG5pZiAoXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18gIT09ICd1bmRlZmluZWQnICYmXG4gIHR5cGVvZiBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0ID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0YXJ0KG5ldyBFcnJvcigpKTtcbn1cbiAgICAgICAgICB2YXIgUmVhY3RWZXJzaW9uID0gJzE4LjMuMSc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpO1xudmFyIFJFQUNUX1BPUlRBTF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QucG9ydGFsJyk7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG52YXIgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QuY29udGV4dCcpO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZScpO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IFN5bWJvbC5mb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSBTeW1ib2wuZm9yKCdyZWFjdC5tZW1vJyk7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gU3ltYm9sLmZvcigncmVhY3QubGF6eScpO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gU3ltYm9sLmZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG52YXIgTUFZQkVfSVRFUkFUT1JfU1lNQk9MID0gU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgZGlzcGF0Y2hlci5cbiAqL1xudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxuLyoqXG4gKiBLZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCBiYXRjaCdzIGNvbmZpZ3VyYXRpb24gc3VjaCBhcyBob3cgbG9uZyBhbiB1cGRhdGVcbiAqIHNob3VsZCBzdXNwZW5kIGZvciBpZiBpdCBuZWVkcyB0by5cbiAqL1xudmFyIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnID0ge1xuICB0cmFuc2l0aW9uOiBudWxsXG59O1xuXG52YXIgUmVhY3RDdXJyZW50QWN0UXVldWUgPSB7XG4gIGN1cnJlbnQ6IG51bGwsXG4gIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuXG4gIGlzQmF0Y2hpbmdMZWdhY3k6IGZhbHNlLFxuICBkaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZTogZmFsc2Vcbn07XG5cbi8qKlxuICogS2VlcHMgdHJhY2sgb2YgdGhlIGN1cnJlbnQgb3duZXIuXG4gKlxuICogVGhlIGN1cnJlbnQgb3duZXIgaXMgdGhlIGNvbXBvbmVudCB3aG8gc2hvdWxkIG93biBhbnkgY29tcG9uZW50cyB0aGF0IGFyZVxuICogY3VycmVudGx5IGJlaW5nIGNvbnN0cnVjdGVkLlxuICovXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSB7XG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICogQHR5cGUge1JlYWN0Q29tcG9uZW50fVxuICAgKi9cbiAgY3VycmVudDogbnVsbFxufTtcblxudmFyIFJlYWN0RGVidWdDdXJyZW50RnJhbWUgPSB7fTtcbnZhciBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gbnVsbDtcbmZ1bmN0aW9uIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjaykge1xuICB7XG4gICAgY3VycmVudEV4dHJhU3RhY2tGcmFtZSA9IHN0YWNrO1xuICB9XG59XG5cbntcbiAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5zZXRFeHRyYVN0YWNrRnJhbWUgPSBmdW5jdGlvbiAoc3RhY2spIHtcbiAgICB7XG4gICAgICBjdXJyZW50RXh0cmFTdGFja0ZyYW1lID0gc3RhY2s7XG4gICAgfVxuICB9OyAvLyBTdGFjayBpbXBsZW1lbnRhdGlvbiBpbmplY3RlZCBieSB0aGUgY3VycmVudCByZW5kZXJlci5cblxuXG4gIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuZ2V0Q3VycmVudFN0YWNrID0gbnVsbDtcblxuICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0YWNrID0gJyc7IC8vIEFkZCBhbiBleHRyYSB0b3AgZnJhbWUgd2hpbGUgYW4gZWxlbWVudCBpcyBiZWluZyB2YWxpZGF0ZWRcblxuICAgIGlmIChjdXJyZW50RXh0cmFTdGFja0ZyYW1lKSB7XG4gICAgICBzdGFjayArPSBjdXJyZW50RXh0cmFTdGFja0ZyYW1lO1xuICAgIH0gLy8gRGVsZWdhdGUgdG8gdGhlIGluamVjdGVkIHJlbmRlcmVyLXNwZWNpZmljIGltcGxlbWVudGF0aW9uXG5cblxuICAgIHZhciBpbXBsID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRDdXJyZW50U3RhY2s7XG5cbiAgICBpZiAoaW1wbCkge1xuICAgICAgc3RhY2sgKz0gaW1wbCgpIHx8ICcnO1xuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cbnZhciBlbmFibGVDYWNoZUVsZW1lbnQgPSBmYWxzZTtcbnZhciBlbmFibGVUcmFuc2l0aW9uVHJhY2luZyA9IGZhbHNlOyAvLyBObyBrbm93biBidWdzLCBidXQgbmVlZHMgcGVyZm9ybWFuY2UgdGVzdGluZ1xuXG52YXIgZW5hYmxlTGVnYWN5SGlkZGVuID0gZmFsc2U7IC8vIEVuYWJsZXMgdW5zdGFibGVfYXZvaWRUaGlzRmFsbGJhY2sgZmVhdHVyZSBpbiBGaWJlclxuLy8gc3R1ZmYuIEludGVuZGVkIHRvIGVuYWJsZSBSZWFjdCBjb3JlIG1lbWJlcnMgdG8gbW9yZSBlYXNpbHkgZGVidWcgc2NoZWR1bGluZ1xuLy8gaXNzdWVzIGluIERFViBidWlsZHMuXG5cbnZhciBlbmFibGVEZWJ1Z1RyYWNpbmcgPSBmYWxzZTsgLy8gVHJhY2sgd2hpY2ggRmliZXIocykgc2NoZWR1bGUgcmVuZGVyIHdvcmsuXG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IHtcbiAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlcjogUmVhY3RDdXJyZW50RGlzcGF0Y2hlcixcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWc6IFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLFxuICBSZWFjdEN1cnJlbnRPd25lcjogUmVhY3RDdXJyZW50T3duZXJcbn07XG5cbntcbiAgUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gIFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0Q3VycmVudEFjdFF1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWU7XG59XG5cbi8vIGJ5IGNhbGxzIHRvIHRoZXNlIG1ldGhvZHMgYnkgYSBCYWJlbCBwbHVnaW4uXG4vL1xuLy8gSW4gUFJPRCAob3IgaW4gcGFja2FnZXMgd2l0aG91dCBhY2Nlc3MgdG8gUmVhY3QgaW50ZXJuYWxzKSxcbi8vIHRoZXkgYXJlIGxlZnQgYXMgdGhleSBhcmUgaW5zdGVhZC5cblxuZnVuY3Rpb24gd2Fybihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4gPiAxID8gX2xlbiAtIDEgOiAwKSwgX2tleSA9IDE7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnd2FybicsIGZvcm1hdCwgYXJncyk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTIgLSAxXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG5cbiAgICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwcmludFdhcm5pbmcobGV2ZWwsIGZvcm1hdCwgYXJncykge1xuICAvLyBXaGVuIGNoYW5naW5nIHRoaXMgbG9naWMsIHlvdSBtaWdodCB3YW50IHRvIGFsc29cbiAgLy8gdXBkYXRlIGNvbnNvbGVXaXRoU3RhY2tEZXYud3d3LmpzIGFzIHdlbGwuXG4gIHtcbiAgICB2YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG4gICAgdmFyIHN0YWNrID0gUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZS5nZXRTdGFja0FkZGVuZHVtKCk7XG5cbiAgICBpZiAoc3RhY2sgIT09ICcnKSB7XG4gICAgICBmb3JtYXQgKz0gJyVzJztcbiAgICAgIGFyZ3MgPSBhcmdzLmNvbmNhdChbc3RhY2tdKTtcbiAgICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuXG5cbiAgICB2YXIgYXJnc1dpdGhGb3JtYXQgPSBhcmdzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIFN0cmluZyhpdGVtKTtcbiAgICB9KTsgLy8gQ2FyZWZ1bDogUk4gY3VycmVudGx5IGRlcGVuZHMgb24gdGhpcyBwcmVmaXhcblxuICAgIGFyZ3NXaXRoRm9ybWF0LnVuc2hpZnQoJ1dhcm5pbmc6ICcgKyBmb3JtYXQpOyAvLyBXZSBpbnRlbnRpb25hbGx5IGRvbid0IHVzZSBzcHJlYWQgKG9yIC5hcHBseSkgZGlyZWN0bHkgYmVjYXVzZSBpdFxuICAgIC8vIGJyZWFrcyBJRTk6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTM2MTBcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nXG5cbiAgICBGdW5jdGlvbi5wcm90b3R5cGUuYXBwbHkuY2FsbChjb25zb2xlW2xldmVsXSwgY29uc29sZSwgYXJnc1dpdGhGb3JtYXQpO1xuICB9XG59XG5cbnZhciBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnQgPSB7fTtcblxuZnVuY3Rpb24gd2Fybk5vb3AocHVibGljSW5zdGFuY2UsIGNhbGxlck5hbWUpIHtcbiAge1xuICAgIHZhciBfY29uc3RydWN0b3IgPSBwdWJsaWNJbnN0YW5jZS5jb25zdHJ1Y3RvcjtcbiAgICB2YXIgY29tcG9uZW50TmFtZSA9IF9jb25zdHJ1Y3RvciAmJiAoX2NvbnN0cnVjdG9yLmRpc3BsYXlOYW1lIHx8IF9jb25zdHJ1Y3Rvci5uYW1lKSB8fCAnUmVhY3RDbGFzcyc7XG4gICAgdmFyIHdhcm5pbmdLZXkgPSBjb21wb25lbnROYW1lICsgXCIuXCIgKyBjYWxsZXJOYW1lO1xuXG4gICAgaWYgKGRpZFdhcm5TdGF0ZVVwZGF0ZUZvclVubW91bnRlZENvbXBvbmVudFt3YXJuaW5nS2V5XSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGVycm9yKFwiQ2FuJ3QgY2FsbCAlcyBvbiBhIGNvbXBvbmVudCB0aGF0IGlzIG5vdCB5ZXQgbW91bnRlZC4gXCIgKyAnVGhpcyBpcyBhIG5vLW9wLCBidXQgaXQgbWlnaHQgaW5kaWNhdGUgYSBidWcgaW4geW91ciBhcHBsaWNhdGlvbi4gJyArICdJbnN0ZWFkLCBhc3NpZ24gdG8gYHRoaXMuc3RhdGVgIGRpcmVjdGx5IG9yIGRlZmluZSBhIGBzdGF0ZSA9IHt9O2AgJyArICdjbGFzcyBwcm9wZXJ0eSB3aXRoIHRoZSBkZXNpcmVkIHN0YXRlIGluIHRoZSAlcyBjb21wb25lbnQuJywgY2FsbGVyTmFtZSwgY29tcG9uZW50TmFtZSk7XG5cbiAgICBkaWRXYXJuU3RhdGVVcGRhdGVGb3JVbm1vdW50ZWRDb21wb25lbnRbd2FybmluZ0tleV0gPSB0cnVlO1xuICB9XG59XG4vKipcbiAqIFRoaXMgaXMgdGhlIGFic3RyYWN0IEFQSSBmb3IgYW4gdXBkYXRlIHF1ZXVlLlxuICovXG5cblxudmFyIFJlYWN0Tm9vcFVwZGF0ZVF1ZXVlID0ge1xuICAvKipcbiAgICogQ2hlY2tzIHdoZXRoZXIgb3Igbm90IHRoaXMgY29tcG9zaXRlIGNvbXBvbmVudCBpcyBtb3VudGVkLlxuICAgKiBAcGFyYW0ge1JlYWN0Q2xhc3N9IHB1YmxpY0luc3RhbmNlIFRoZSBpbnN0YW5jZSB3ZSB3YW50IHRvIHRlc3QuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgbW91bnRlZCwgZmFsc2Ugb3RoZXJ3aXNlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqIEBmaW5hbFxuICAgKi9cbiAgaXNNb3VudGVkOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvcmNlcyBhbiB1cGRhdGUuIFRoaXMgc2hvdWxkIG9ubHkgYmUgaW52b2tlZCB3aGVuIGl0IGlzIGtub3duIHdpdGhcbiAgICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gICAqXG4gICAqIFlvdSBtYXkgd2FudCB0byBjYWxsIHRoaXMgd2hlbiB5b3Uga25vdyB0aGF0IHNvbWUgZGVlcGVyIGFzcGVjdCBvZiB0aGVcbiAgICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBub3QgaW52b2tlIGBzaG91bGRDb21wb25lbnRVcGRhdGVgLCBidXQgaXQgd2lsbCBpbnZva2VcbiAgICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7P2Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsZWQgYWZ0ZXIgY29tcG9uZW50IGlzIHVwZGF0ZWQuXG4gICAqIEBwYXJhbSB7P3N0cmluZ30gY2FsbGVyTmFtZSBuYW1lIG9mIHRoZSBjYWxsaW5nIGZ1bmN0aW9uIGluIHRoZSBwdWJsaWMgQVBJLlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIGVucXVldWVGb3JjZVVwZGF0ZTogZnVuY3Rpb24gKHB1YmxpY0luc3RhbmNlLCBjYWxsYmFjaywgY2FsbGVyTmFtZSkge1xuICAgIHdhcm5Ob29wKHB1YmxpY0luc3RhbmNlLCAnZm9yY2VVcGRhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgYWxsIG9mIHRoZSBzdGF0ZS4gQWx3YXlzIHVzZSB0aGlzIG9yIGBzZXRTdGF0ZWAgdG8gbXV0YXRlIHN0YXRlLlxuICAgKiBZb3Ugc2hvdWxkIHRyZWF0IGB0aGlzLnN0YXRlYCBhcyBpbW11dGFibGUuXG4gICAqXG4gICAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gICAqIGFjY2Vzc2luZyBgdGhpcy5zdGF0ZWAgYWZ0ZXIgY2FsbGluZyB0aGlzIG1ldGhvZCBtYXkgcmV0dXJuIHRoZSBvbGQgdmFsdWUuXG4gICAqXG4gICAqIEBwYXJhbSB7UmVhY3RDbGFzc30gcHVibGljSW5zdGFuY2UgVGhlIGluc3RhbmNlIHRoYXQgc2hvdWxkIHJlcmVuZGVyLlxuICAgKiBAcGFyYW0ge29iamVjdH0gY29tcGxldGVTdGF0ZSBOZXh0IHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IGNhbGxlck5hbWUgbmFtZSBvZiB0aGUgY2FsbGluZyBmdW5jdGlvbiBpbiB0aGUgcHVibGljIEFQSS5cbiAgICogQGludGVybmFsXG4gICAqL1xuICBlbnF1ZXVlUmVwbGFjZVN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIGNvbXBsZXRlU3RhdGUsIGNhbGxiYWNrLCBjYWxsZXJOYW1lKSB7XG4gICAgd2Fybk5vb3AocHVibGljSW5zdGFuY2UsICdyZXBsYWNlU3RhdGUnKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBhIHN1YnNldCBvZiB0aGUgc3RhdGUuIFRoaXMgb25seSBleGlzdHMgYmVjYXVzZSBfcGVuZGluZ1N0YXRlIGlzXG4gICAqIGludGVybmFsLiBUaGlzIHByb3ZpZGVzIGEgbWVyZ2luZyBzdHJhdGVneSB0aGF0IGlzIG5vdCBhdmFpbGFibGUgdG8gZGVlcFxuICAgKiBwcm9wZXJ0aWVzIHdoaWNoIGlzIGNvbmZ1c2luZy4gVE9ETzogRXhwb3NlIHBlbmRpbmdTdGF0ZSBvciBkb24ndCB1c2UgaXRcbiAgICogZHVyaW5nIHRoZSBtZXJnZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZWFjdENsYXNzfSBwdWJsaWNJbnN0YW5jZSBUaGUgaW5zdGFuY2UgdGhhdCBzaG91bGQgcmVyZW5kZXIuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJ0aWFsU3RhdGUgTmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIHN0YXRlLlxuICAgKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIGNvbXBvbmVudCBpcyB1cGRhdGVkLlxuICAgKiBAcGFyYW0gez9zdHJpbmd9IE5hbWUgb2YgdGhlIGNhbGxpbmcgZnVuY3Rpb24gaW4gdGhlIHB1YmxpYyBBUEkuXG4gICAqIEBpbnRlcm5hbFxuICAgKi9cbiAgZW5xdWV1ZVNldFN0YXRlOiBmdW5jdGlvbiAocHVibGljSW5zdGFuY2UsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssIGNhbGxlck5hbWUpIHtcbiAgICB3YXJuTm9vcChwdWJsaWNJbnN0YW5jZSwgJ3NldFN0YXRlJyk7XG4gIH1cbn07XG5cbnZhciBhc3NpZ24gPSBPYmplY3QuYXNzaWduO1xuXG52YXIgZW1wdHlPYmplY3QgPSB7fTtcblxue1xuICBPYmplY3QuZnJlZXplKGVtcHR5T2JqZWN0KTtcbn1cbi8qKlxuICogQmFzZSBjbGFzcyBoZWxwZXJzIGZvciB0aGUgdXBkYXRpbmcgc3RhdGUgb2YgYSBjb21wb25lbnQuXG4gKi9cblxuXG5mdW5jdGlvbiBDb21wb25lbnQocHJvcHMsIGNvbnRleHQsIHVwZGF0ZXIpIHtcbiAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICB0aGlzLmNvbnRleHQgPSBjb250ZXh0OyAvLyBJZiBhIGNvbXBvbmVudCBoYXMgc3RyaW5nIHJlZnMsIHdlIHdpbGwgYXNzaWduIGEgZGlmZmVyZW50IG9iamVjdCBsYXRlci5cblxuICB0aGlzLnJlZnMgPSBlbXB0eU9iamVjdDsgLy8gV2UgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCB1cGRhdGVyIGJ1dCB0aGUgcmVhbCBvbmUgZ2V0cyBpbmplY3RlZCBieSB0aGVcbiAgLy8gcmVuZGVyZXIuXG5cbiAgdGhpcy51cGRhdGVyID0gdXBkYXRlciB8fCBSZWFjdE5vb3BVcGRhdGVRdWV1ZTtcbn1cblxuQ29tcG9uZW50LnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50ID0ge307XG4vKipcbiAqIFNldHMgYSBzdWJzZXQgb2YgdGhlIHN0YXRlLiBBbHdheXMgdXNlIHRoaXMgdG8gbXV0YXRlXG4gKiBzdGF0ZS4gWW91IHNob3VsZCB0cmVhdCBgdGhpcy5zdGF0ZWAgYXMgaW1tdXRhYmxlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGB0aGlzLnN0YXRlYCB3aWxsIGJlIGltbWVkaWF0ZWx5IHVwZGF0ZWQsIHNvXG4gKiBhY2Nlc3NpbmcgYHRoaXMuc3RhdGVgIGFmdGVyIGNhbGxpbmcgdGhpcyBtZXRob2QgbWF5IHJldHVybiB0aGUgb2xkIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzIG5vIGd1YXJhbnRlZSB0aGF0IGNhbGxzIHRvIGBzZXRTdGF0ZWAgd2lsbCBydW4gc3luY2hyb25vdXNseSxcbiAqIGFzIHRoZXkgbWF5IGV2ZW50dWFsbHkgYmUgYmF0Y2hlZCB0b2dldGhlci4gIFlvdSBjYW4gcHJvdmlkZSBhbiBvcHRpb25hbFxuICogY2FsbGJhY2sgdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gdGhlIGNhbGwgdG8gc2V0U3RhdGUgaXMgYWN0dWFsbHlcbiAqIGNvbXBsZXRlZC5cbiAqXG4gKiBXaGVuIGEgZnVuY3Rpb24gaXMgcHJvdmlkZWQgdG8gc2V0U3RhdGUsIGl0IHdpbGwgYmUgY2FsbGVkIGF0IHNvbWUgcG9pbnQgaW5cbiAqIHRoZSBmdXR1cmUgKG5vdCBzeW5jaHJvbm91c2x5KS4gSXQgd2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgdXAgdG8gZGF0ZVxuICogY29tcG9uZW50IGFyZ3VtZW50cyAoc3RhdGUsIHByb3BzLCBjb250ZXh0KS4gVGhlc2UgdmFsdWVzIGNhbiBiZSBkaWZmZXJlbnRcbiAqIGZyb20gdGhpcy4qIGJlY2F1c2UgeW91ciBmdW5jdGlvbiBtYXkgYmUgY2FsbGVkIGFmdGVyIHJlY2VpdmVQcm9wcyBidXQgYmVmb3JlXG4gKiBzaG91bGRDb21wb25lbnRVcGRhdGUsIGFuZCB0aGlzIG5ldyBzdGF0ZSwgcHJvcHMsIGFuZCBjb250ZXh0IHdpbGwgbm90IHlldCBiZVxuICogYXNzaWduZWQgdG8gdGhpcy5cbiAqXG4gKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gcGFydGlhbFN0YXRlIE5leHQgcGFydGlhbCBzdGF0ZSBvciBmdW5jdGlvbiB0b1xuICogICAgICAgIHByb2R1Y2UgbmV4dCBwYXJ0aWFsIHN0YXRlIHRvIGJlIG1lcmdlZCB3aXRoIGN1cnJlbnQgc3RhdGUuXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHN0YXRlIGlzIHVwZGF0ZWQuXG4gKiBAZmluYWxcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuXG5Db21wb25lbnQucHJvdG90eXBlLnNldFN0YXRlID0gZnVuY3Rpb24gKHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2spIHtcbiAgaWYgKHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdvYmplY3QnICYmIHR5cGVvZiBwYXJ0aWFsU3RhdGUgIT09ICdmdW5jdGlvbicgJiYgcGFydGlhbFN0YXRlICE9IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFN0YXRlKC4uLik6IHRha2VzIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMgdG8gdXBkYXRlIG9yIGEgJyArICdmdW5jdGlvbiB3aGljaCByZXR1cm5zIGFuIG9iamVjdCBvZiBzdGF0ZSB2YXJpYWJsZXMuJyk7XG4gIH1cblxuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZVNldFN0YXRlKHRoaXMsIHBhcnRpYWxTdGF0ZSwgY2FsbGJhY2ssICdzZXRTdGF0ZScpO1xufTtcbi8qKlxuICogRm9yY2VzIGFuIHVwZGF0ZS4gVGhpcyBzaG91bGQgb25seSBiZSBpbnZva2VkIHdoZW4gaXQgaXMga25vd24gd2l0aFxuICogY2VydGFpbnR5IHRoYXQgd2UgYXJlICoqbm90KiogaW4gYSBET00gdHJhbnNhY3Rpb24uXG4gKlxuICogWW91IG1heSB3YW50IHRvIGNhbGwgdGhpcyB3aGVuIHlvdSBrbm93IHRoYXQgc29tZSBkZWVwZXIgYXNwZWN0IG9mIHRoZVxuICogY29tcG9uZW50J3Mgc3RhdGUgaGFzIGNoYW5nZWQgYnV0IGBzZXRTdGF0ZWAgd2FzIG5vdCBjYWxsZWQuXG4gKlxuICogVGhpcyB3aWxsIG5vdCBpbnZva2UgYHNob3VsZENvbXBvbmVudFVwZGF0ZWAsIGJ1dCBpdCB3aWxsIGludm9rZVxuICogYGNvbXBvbmVudFdpbGxVcGRhdGVgIGFuZCBgY29tcG9uZW50RGlkVXBkYXRlYC5cbiAqXG4gKiBAcGFyYW0gez9mdW5jdGlvbn0gY2FsbGJhY2sgQ2FsbGVkIGFmdGVyIHVwZGF0ZSBpcyBjb21wbGV0ZS5cbiAqIEBmaW5hbFxuICogQHByb3RlY3RlZFxuICovXG5cblxuQ29tcG9uZW50LnByb3RvdHlwZS5mb3JjZVVwZGF0ZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICB0aGlzLnVwZGF0ZXIuZW5xdWV1ZUZvcmNlVXBkYXRlKHRoaXMsIGNhbGxiYWNrLCAnZm9yY2VVcGRhdGUnKTtcbn07XG4vKipcbiAqIERlcHJlY2F0ZWQgQVBJcy4gVGhlc2UgQVBJcyB1c2VkIHRvIGV4aXN0IG9uIGNsYXNzaWMgUmVhY3QgY2xhc3NlcyBidXQgc2luY2VcbiAqIHdlIHdvdWxkIGxpa2UgdG8gZGVwcmVjYXRlIHRoZW0sIHdlJ3JlIG5vdCBnb2luZyB0byBtb3ZlIHRoZW0gb3ZlciB0byB0aGlzXG4gKiBtb2Rlcm4gYmFzZSBjbGFzcy4gSW5zdGVhZCwgd2UgZGVmaW5lIGEgZ2V0dGVyIHRoYXQgd2FybnMgaWYgaXQncyBhY2Nlc3NlZC5cbiAqL1xuXG5cbntcbiAgdmFyIGRlcHJlY2F0ZWRBUElzID0ge1xuICAgIGlzTW91bnRlZDogWydpc01vdW50ZWQnLCAnSW5zdGVhZCwgbWFrZSBzdXJlIHRvIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnMgYW5kIHBlbmRpbmcgcmVxdWVzdHMgaW4gJyArICdjb21wb25lbnRXaWxsVW5tb3VudCB0byBwcmV2ZW50IG1lbW9yeSBsZWFrcy4nXSxcbiAgICByZXBsYWNlU3RhdGU6IFsncmVwbGFjZVN0YXRlJywgJ1JlZmFjdG9yIHlvdXIgY29kZSB0byB1c2Ugc2V0U3RhdGUgaW5zdGVhZCAoc2VlICcgKyAnaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8zMjM2KS4nXVxuICB9O1xuXG4gIHZhciBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSwgaW5mbykge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb21wb25lbnQucHJvdG90eXBlLCBtZXRob2ROYW1lLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignJXMoLi4uKSBpcyBkZXByZWNhdGVkIGluIHBsYWluIEphdmFTY3JpcHQgUmVhY3QgY2xhc3Nlcy4gJXMnLCBpbmZvWzBdLCBpbmZvWzFdKTtcblxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGZvciAodmFyIGZuTmFtZSBpbiBkZXByZWNhdGVkQVBJcykge1xuICAgIGlmIChkZXByZWNhdGVkQVBJcy5oYXNPd25Qcm9wZXJ0eShmbk5hbWUpKSB7XG4gICAgICBkZWZpbmVEZXByZWNhdGlvbldhcm5pbmcoZm5OYW1lLCBkZXByZWNhdGVkQVBJc1tmbk5hbWVdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gQ29tcG9uZW50RHVtbXkoKSB7fVxuXG5Db21wb25lbnREdW1teS5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuLyoqXG4gKiBDb252ZW5pZW5jZSBjb21wb25lbnQgd2l0aCBkZWZhdWx0IHNoYWxsb3cgZXF1YWxpdHkgY2hlY2sgZm9yIHNDVS5cbiAqL1xuXG5mdW5jdGlvbiBQdXJlQ29tcG9uZW50KHByb3BzLCBjb250ZXh0LCB1cGRhdGVyKSB7XG4gIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgdGhpcy5jb250ZXh0ID0gY29udGV4dDsgLy8gSWYgYSBjb21wb25lbnQgaGFzIHN0cmluZyByZWZzLCB3ZSB3aWxsIGFzc2lnbiBhIGRpZmZlcmVudCBvYmplY3QgbGF0ZXIuXG5cbiAgdGhpcy5yZWZzID0gZW1wdHlPYmplY3Q7XG4gIHRoaXMudXBkYXRlciA9IHVwZGF0ZXIgfHwgUmVhY3ROb29wVXBkYXRlUXVldWU7XG59XG5cbnZhciBwdXJlQ29tcG9uZW50UHJvdG90eXBlID0gUHVyZUNvbXBvbmVudC5wcm90b3R5cGUgPSBuZXcgQ29tcG9uZW50RHVtbXkoKTtcbnB1cmVDb21wb25lbnRQcm90b3R5cGUuY29uc3RydWN0b3IgPSBQdXJlQ29tcG9uZW50OyAvLyBBdm9pZCBhbiBleHRyYSBwcm90b3R5cGUganVtcCBmb3IgdGhlc2UgbWV0aG9kcy5cblxuYXNzaWduKHB1cmVDb21wb25lbnRQcm90b3R5cGUsIENvbXBvbmVudC5wcm90b3R5cGUpO1xucHVyZUNvbXBvbmVudFByb3RvdHlwZS5pc1B1cmVSZWFjdENvbXBvbmVudCA9IHRydWU7XG5cbi8vIGFuIGltbXV0YWJsZSBvYmplY3Qgd2l0aCBhIHNpbmdsZSBtdXRhYmxlIHZhbHVlXG5mdW5jdGlvbiBjcmVhdGVSZWYoKSB7XG4gIHZhciByZWZPYmplY3QgPSB7XG4gICAgY3VycmVudDogbnVsbFxuICB9O1xuXG4gIHtcbiAgICBPYmplY3Quc2VhbChyZWZPYmplY3QpO1xuICB9XG5cbiAgcmV0dXJuIHJlZk9iamVjdDtcbn1cblxudmFyIGlzQXJyYXlJbXBsID0gQXJyYXkuaXNBcnJheTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlZGVjbGFyZVxuXG5mdW5jdGlvbiBpc0FycmF5KGEpIHtcbiAgcmV0dXJuIGlzQXJyYXlJbXBsKGEpO1xufVxuXG4vKlxuICogVGhlIGAnJyArIHZhbHVlYCBwYXR0ZXJuICh1c2VkIGluIGluIHBlcmYtc2Vuc2l0aXZlIGNvZGUpIHRocm93cyBmb3IgU3ltYm9sXG4gKiBhbmQgVGVtcG9yYWwuKiB0eXBlcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9wdWxsLzIyMDY0LlxuICpcbiAqIFRoZSBmdW5jdGlvbnMgaW4gdGhpcyBtb2R1bGUgd2lsbCB0aHJvdyBhbiBlYXNpZXItdG8tdW5kZXJzdGFuZCxcbiAqIGVhc2llci10by1kZWJ1ZyBleGNlcHRpb24gd2l0aCBhIGNsZWFyIGVycm9ycyBtZXNzYWdlIG1lc3NhZ2UgZXhwbGFpbmluZyB0aGVcbiAqIHByb2JsZW0uIChJbnN0ZWFkIG9mIGEgY29uZnVzaW5nIGV4Y2VwdGlvbiB0aHJvd24gaW5zaWRlIHRoZSBpbXBsZW1lbnRhdGlvblxuICogb2YgdGhlIGB2YWx1ZWAgb2JqZWN0KS5cbiAqL1xuLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cbmZ1bmN0aW9uIHR5cGVOYW1lKHZhbHVlKSB7XG4gIHtcbiAgICAvLyB0b1N0cmluZ1RhZyBpcyBuZWVkZWQgZm9yIG5hbWVzcGFjZWQgdHlwZXMgbGlrZSBUZW1wb3JhbC5JbnN0YW50XG4gICAgdmFyIGhhc1RvU3RyaW5nVGFnID0gdHlwZW9mIFN5bWJvbCA9PT0gJ2Z1bmN0aW9uJyAmJiBTeW1ib2wudG9TdHJpbmdUYWc7XG4gICAgdmFyIHR5cGUgPSBoYXNUb1N0cmluZ1RhZyAmJiB2YWx1ZVtTeW1ib2wudG9TdHJpbmdUYWddIHx8IHZhbHVlLmNvbnN0cnVjdG9yLm5hbWUgfHwgJ09iamVjdCc7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cbn0gLy8gJEZsb3dGaXhNZSBvbmx5IGNhbGxlZCBpbiBERVYsIHNvIHZvaWQgcmV0dXJuIGlzIG5vdCBwb3NzaWJsZS5cblxuXG5mdW5jdGlvbiB3aWxsQ29lcmNpb25UaHJvdyh2YWx1ZSkge1xuICB7XG4gICAgdHJ5IHtcbiAgICAgIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICAvLyBJZiB5b3UgZW5kZWQgdXAgaGVyZSBieSBmb2xsb3dpbmcgYW4gZXhjZXB0aW9uIGNhbGwgc3RhY2ssIGhlcmUncyB3aGF0J3NcbiAgLy8gaGFwcGVuZWQ6IHlvdSBzdXBwbGllZCBhbiBvYmplY3Qgb3Igc3ltYm9sIHZhbHVlIHRvIFJlYWN0IChhcyBhIHByb3AsIGtleSxcbiAgLy8gRE9NIGF0dHJpYnV0ZSwgQ1NTIHByb3BlcnR5LCBzdHJpbmcgcmVmLCBldGMuKSBhbmQgd2hlbiBSZWFjdCB0cmllZCB0b1xuICAvLyBjb2VyY2UgaXQgdG8gYSBzdHJpbmcgdXNpbmcgYCcnICsgdmFsdWVgLCBhbiBleGNlcHRpb24gd2FzIHRocm93bi5cbiAgLy9cbiAgLy8gVGhlIG1vc3QgY29tbW9uIHR5cGVzIHRoYXQgd2lsbCBjYXVzZSB0aGlzIGV4Y2VwdGlvbiBhcmUgYFN5bWJvbGAgaW5zdGFuY2VzXG4gIC8vIGFuZCBUZW1wb3JhbCBvYmplY3RzIGxpa2UgYFRlbXBvcmFsLkluc3RhbnRgLiBCdXQgYW55IG9iamVjdCB0aGF0IGhhcyBhXG4gIC8vIGB2YWx1ZU9mYCBvciBgW1N5bWJvbC50b1ByaW1pdGl2ZV1gIG1ldGhvZCB0aGF0IHRocm93cyB3aWxsIGFsc28gY2F1c2UgdGhpc1xuICAvLyBleGNlcHRpb24uIChMaWJyYXJ5IGF1dGhvcnMgZG8gdGhpcyB0byBwcmV2ZW50IHVzZXJzIGZyb20gdXNpbmcgYnVpbHQtaW5cbiAgLy8gbnVtZXJpYyBvcGVyYXRvcnMgbGlrZSBgK2Agb3IgY29tcGFyaXNvbiBvcGVyYXRvcnMgbGlrZSBgPj1gIGJlY2F1c2UgY3VzdG9tXG4gIC8vIG1ldGhvZHMgYXJlIG5lZWRlZCB0byBwZXJmb3JtIGFjY3VyYXRlIGFyaXRobWV0aWMgb3IgY29tcGFyaXNvbi4pXG4gIC8vXG4gIC8vIFRvIGZpeCB0aGUgcHJvYmxlbSwgY29lcmNlIHRoaXMgb2JqZWN0IG9yIHN5bWJvbCB2YWx1ZSB0byBhIHN0cmluZyBiZWZvcmVcbiAgLy8gcGFzc2luZyBpdCB0byBSZWFjdC4gVGhlIG1vc3QgcmVsaWFibGUgd2F5IGlzIHVzdWFsbHkgYFN0cmluZyh2YWx1ZSlgLlxuICAvL1xuICAvLyBUbyBmaW5kIHdoaWNoIHZhbHVlIGlzIHRocm93aW5nLCBjaGVjayB0aGUgYnJvd3NlciBvciBkZWJ1Z2dlciBjb25zb2xlLlxuICAvLyBCZWZvcmUgdGhpcyBleGNlcHRpb24gd2FzIHRocm93biwgdGhlcmUgc2hvdWxkIGJlIGBjb25zb2xlLmVycm9yYCBvdXRwdXRcbiAgLy8gdGhhdCBzaG93cyB0aGUgdHlwZSAoU3ltYm9sLCBUZW1wb3JhbC5QbGFpbkRhdGUsIGV0Yy4pIHRoYXQgY2F1c2VkIHRoZVxuICAvLyBwcm9ibGVtIGFuZCBob3cgdGhhdCB0eXBlIHdhcyB1c2VkOiBrZXksIGF0cnJpYnV0ZSwgaW5wdXQgdmFsdWUgcHJvcCwgZXRjLlxuICAvLyBJbiBtb3N0IGNhc2VzLCB0aGlzIGNvbnNvbGUgb3V0cHV0IGFsc28gc2hvd3MgdGhlIGNvbXBvbmVudCBhbmQgaXRzXG4gIC8vIGFuY2VzdG9yIGNvbXBvbmVudHMgd2hlcmUgdGhlIGV4Y2VwdGlvbiBoYXBwZW5lZC5cbiAgLy9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gIHJldHVybiAnJyArIHZhbHVlO1xufVxuZnVuY3Rpb24gY2hlY2tLZXlTdHJpbmdDb2VyY2lvbih2YWx1ZSkge1xuICB7XG4gICAgaWYgKHdpbGxDb2VyY2lvblRocm93KHZhbHVlKSkge1xuICAgICAgZXJyb3IoJ1RoZSBwcm92aWRlZCBrZXkgaXMgYW4gdW5zdXBwb3J0ZWQgdHlwZSAlcy4nICsgJyBUaGlzIHZhbHVlIG11c3QgYmUgY29lcmNlZCB0byBhIHN0cmluZyBiZWZvcmUgYmVmb3JlIHVzaW5nIGl0IGhlcmUuJywgdHlwZU5hbWUodmFsdWUpKTtcblxuICAgICAgcmV0dXJuIHRlc3RTdHJpbmdDb2VyY2lvbih2YWx1ZSk7IC8vIHRocm93ICh0byBoZWxwIGNhbGxlcnMgZmluZCB0cm91Ymxlc2hvb3RpbmcgY29tbWVudHMpXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZGlzcGxheU5hbWUgPSBvdXRlclR5cGUuZGlzcGxheU5hbWU7XG5cbiAgaWYgKGRpc3BsYXlOYW1lKSB7XG4gICAgcmV0dXJuIGRpc3BsYXlOYW1lO1xuICB9XG5cbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGlubmVyVHlwZS5kaXNwbGF5TmFtZSB8fCBpbm5lclR5cGUubmFtZSB8fCAnJztcbiAgcmV0dXJuIGZ1bmN0aW9uTmFtZSAhPT0gJycgPyB3cmFwcGVyTmFtZSArIFwiKFwiICsgZnVuY3Rpb25OYW1lICsgXCIpXCIgOiB3cmFwcGVyTmFtZTtcbn0gLy8gS2VlcCBpbiBzeW5jIHdpdGggcmVhY3QtcmVjb25jaWxlci9nZXRDb21wb25lbnROYW1lRnJvbUZpYmVyXG5cblxuZnVuY3Rpb24gZ2V0Q29udGV4dE5hbWUodHlwZSkge1xuICByZXR1cm4gdHlwZS5kaXNwbGF5TmFtZSB8fCAnQ29udGV4dCc7XG59IC8vIE5vdGUgdGhhdCB0aGUgcmVjb25jaWxlciBwYWNrYWdlIHNob3VsZCBnZW5lcmFsbHkgcHJlZmVyIHRvIHVzZSBnZXRDb21wb25lbnROYW1lRnJvbUZpYmVyKCkgaW5zdGVhZC5cblxuXG5mdW5jdGlvbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZSkge1xuICBpZiAodHlwZSA9PSBudWxsKSB7XG4gICAgLy8gSG9zdCByb290LCB0ZXh0IG5vZGUgb3IganVzdCBpbnZhbGlkIHR5cGUuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB7XG4gICAgaWYgKHR5cGVvZiB0eXBlLnRhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgIGVycm9yKCdSZWNlaXZlZCBhbiB1bmV4cGVjdGVkIG9iamVjdCBpbiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuXG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0NPTlRFWFRfVFlQRTpcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUoY29udGV4dCkgKyAnLkNvbnN1bWVyJztcblxuICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICB2YXIgcHJvdmlkZXIgPSB0eXBlO1xuICAgICAgICByZXR1cm4gZ2V0Q29udGV4dE5hbWUocHJvdmlkZXIuX2NvbnRleHQpICsgJy5Qcm92aWRlcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldFdyYXBwZWROYW1lKHR5cGUsIHR5cGUucmVuZGVyLCAnRm9yd2FyZFJlZicpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgdmFyIG91dGVyTmFtZSA9IHR5cGUuZGlzcGxheU5hbWUgfHwgbnVsbDtcblxuICAgICAgICBpZiAob3V0ZXJOYW1lICE9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG91dGVyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lRnJvbVR5cGUodHlwZS50eXBlKSB8fCAnTWVtbyc7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWZhbGx0aHJvdWdoXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBSRVNFUlZFRF9QUk9QUyA9IHtcbiAga2V5OiB0cnVlLFxuICByZWY6IHRydWUsXG4gIF9fc2VsZjogdHJ1ZSxcbiAgX19zb3VyY2U6IHRydWVcbn07XG52YXIgc3BlY2lhbFByb3BLZXlXYXJuaW5nU2hvd24sIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duLCBkaWRXYXJuQWJvdXRTdHJpbmdSZWZzO1xuXG57XG4gIGRpZFdhcm5BYm91dFN0cmluZ1JlZnMgPSB7fTtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRSZWYoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdyZWYnKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAncmVmJykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5yZWYgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaGFzVmFsaWRLZXkoY29uZmlnKSB7XG4gIHtcbiAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChjb25maWcsICdrZXknKSkge1xuICAgICAgdmFyIGdldHRlciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoY29uZmlnLCAna2V5JykuZ2V0O1xuXG4gICAgICBpZiAoZ2V0dGVyICYmIGdldHRlci5pc1JlYWN0V2FybmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNvbmZpZy5rZXkgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKSB7XG4gIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAge1xuICAgICAgaWYgKCFzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93bikge1xuICAgICAgICBzcGVjaWFsUHJvcEtleVdhcm5pbmdTaG93biA9IHRydWU7XG5cbiAgICAgICAgZXJyb3IoJyVzOiBga2V5YCBpcyBub3QgYSBwcm9wLiBUcnlpbmcgdG8gYWNjZXNzIGl0IHdpbGwgcmVzdWx0ICcgKyAnaW4gYHVuZGVmaW5lZGAgYmVpbmcgcmV0dXJuZWQuIElmIHlvdSBuZWVkIHRvIGFjY2VzcyB0aGUgc2FtZSAnICsgJ3ZhbHVlIHdpdGhpbiB0aGUgY2hpbGQgY29tcG9uZW50LCB5b3Ugc2hvdWxkIHBhc3MgaXQgYXMgYSBkaWZmZXJlbnQgJyArICdwcm9wLiAoaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3NwZWNpYWwtcHJvcHMpJywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkuaXNSZWFjdFdhcm5pbmcgPSB0cnVlO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkocHJvcHMsICdrZXknLCB7XG4gICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgY29uZmlndXJhYmxlOiB0cnVlXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAgdmFyIHdhcm5BYm91dEFjY2Vzc2luZ1JlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShwcm9wcywgJ3JlZicsIHtcbiAgICBnZXQ6IHdhcm5BYm91dEFjY2Vzc2luZ1JlZixcbiAgICBjb25maWd1cmFibGU6IHRydWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHdhcm5JZlN0cmluZ1JlZkNhbm5vdEJlQXV0b0NvbnZlcnRlZChjb25maWcpIHtcbiAge1xuICAgIGlmICh0eXBlb2YgY29uZmlnLnJlZiA9PT0gJ3N0cmluZycgJiYgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCAmJiBjb25maWcuX19zZWxmICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQuc3RhdGVOb2RlICE9PSBjb25maWcuX19zZWxmKSB7XG4gICAgICB2YXIgY29tcG9uZW50TmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAoIWRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0pIHtcbiAgICAgICAgZXJyb3IoJ0NvbXBvbmVudCBcIiVzXCIgY29udGFpbnMgdGhlIHN0cmluZyByZWYgXCIlc1wiLiAnICsgJ1N1cHBvcnQgZm9yIHN0cmluZyByZWZzIHdpbGwgYmUgcmVtb3ZlZCBpbiBhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiAnICsgJ1RoaXMgY2FzZSBjYW5ub3QgYmUgYXV0b21hdGljYWxseSBjb252ZXJ0ZWQgdG8gYW4gYXJyb3cgZnVuY3Rpb24uICcgKyAnV2UgYXNrIHlvdSB0byBtYW51YWxseSBmaXggdGhpcyBjYXNlIGJ5IHVzaW5nIHVzZVJlZigpIG9yIGNyZWF0ZVJlZigpIGluc3RlYWQuICcgKyAnTGVhcm4gbW9yZSBhYm91dCB1c2luZyByZWZzIHNhZmVseSBoZXJlOiAnICsgJ2h0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9zdHJpY3QtbW9kZS1zdHJpbmctcmVmJywgY29tcG9uZW50TmFtZSwgY29uZmlnLnJlZik7XG5cbiAgICAgICAgZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRvIGNyZWF0ZSBhIG5ldyBSZWFjdCBlbGVtZW50LiBUaGlzIG5vIGxvbmdlciBhZGhlcmVzIHRvXG4gKiB0aGUgY2xhc3MgcGF0dGVybiwgc28gZG8gbm90IHVzZSBuZXcgdG8gY2FsbCBpdC4gQWxzbywgaW5zdGFuY2VvZiBjaGVja1xuICogd2lsbCBub3Qgd29yay4gSW5zdGVhZCB0ZXN0ICQkdHlwZW9mIGZpZWxkIGFnYWluc3QgU3ltYm9sLmZvcigncmVhY3QuZWxlbWVudCcpIHRvIGNoZWNrXG4gKiBpZiBzb21ldGhpbmcgaXMgYSBSZWFjdCBFbGVtZW50LlxuICpcbiAqIEBwYXJhbSB7Kn0gdHlwZVxuICogQHBhcmFtIHsqfSBwcm9wc1xuICogQHBhcmFtIHsqfSBrZXlcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gcmVmXG4gKiBAcGFyYW0geyp9IG93bmVyXG4gKiBAcGFyYW0geyp9IHNlbGYgQSAqdGVtcG9yYXJ5KiBoZWxwZXIgdG8gZGV0ZWN0IHBsYWNlcyB3aGVyZSBgdGhpc2AgaXNcbiAqIGRpZmZlcmVudCBmcm9tIHRoZSBgb3duZXJgIHdoZW4gUmVhY3QuY3JlYXRlRWxlbWVudCBpcyBjYWxsZWQsIHNvIHRoYXQgd2VcbiAqIGNhbiB3YXJuLiBXZSB3YW50IHRvIGdldCByaWQgb2Ygb3duZXIgYW5kIHJlcGxhY2Ugc3RyaW5nIGByZWZgcyB3aXRoIGFycm93XG4gKiBmdW5jdGlvbnMsIGFuZCBhcyBsb25nIGFzIGB0aGlzYCBhbmQgb3duZXIgYXJlIHRoZSBzYW1lLCB0aGVyZSB3aWxsIGJlIG5vXG4gKiBjaGFuZ2UgaW4gYmVoYXZpb3IuXG4gKiBAcGFyYW0geyp9IHNvdXJjZSBBbiBhbm5vdGF0aW9uIG9iamVjdCAoYWRkZWQgYnkgYSB0cmFuc3BpbGVyIG9yIG90aGVyd2lzZSlcbiAqIGluZGljYXRpbmcgZmlsZW5hbWUsIGxpbmUgbnVtYmVyLCBhbmQvb3Igb3RoZXIgaW5mb3JtYXRpb24uXG4gKiBAaW50ZXJuYWxcbiAqL1xuXG5cbnZhciBSZWFjdEVsZW1lbnQgPSBmdW5jdGlvbiAodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgb3duZXIsIHByb3BzKSB7XG4gIHZhciBlbGVtZW50ID0ge1xuICAgIC8vIFRoaXMgdGFnIGFsbG93cyB1cyB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzIGFzIGEgUmVhY3QgRWxlbWVudFxuICAgICQkdHlwZW9mOiBSRUFDVF9FTEVNRU5UX1RZUEUsXG4gICAgLy8gQnVpbHQtaW4gcHJvcGVydGllcyB0aGF0IGJlbG9uZyBvbiB0aGUgZWxlbWVudFxuICAgIHR5cGU6IHR5cGUsXG4gICAga2V5OiBrZXksXG4gICAgcmVmOiByZWYsXG4gICAgcHJvcHM6IHByb3BzLFxuICAgIC8vIFJlY29yZCB0aGUgY29tcG9uZW50IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGlzIGVsZW1lbnQuXG4gICAgX293bmVyOiBvd25lclxuICB9O1xuXG4gIHtcbiAgICAvLyBUaGUgdmFsaWRhdGlvbiBmbGFnIGlzIGN1cnJlbnRseSBtdXRhdGl2ZS4gV2UgcHV0IGl0IG9uXG4gICAgLy8gYW4gZXh0ZXJuYWwgYmFja2luZyBzdG9yZSBzbyB0aGF0IHdlIGNhbiBmcmVlemUgdGhlIHdob2xlIG9iamVjdC5cbiAgICAvLyBUaGlzIGNhbiBiZSByZXBsYWNlZCB3aXRoIGEgV2Vha01hcCBvbmNlIHRoZXkgYXJlIGltcGxlbWVudGVkIGluXG4gICAgLy8gY29tbW9ubHkgdXNlZCBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMuXG4gICAgZWxlbWVudC5fc3RvcmUgPSB7fTsgLy8gVG8gbWFrZSBjb21wYXJpbmcgUmVhY3RFbGVtZW50cyBlYXNpZXIgZm9yIHRlc3RpbmcgcHVycG9zZXMsIHdlIG1ha2VcbiAgICAvLyB0aGUgdmFsaWRhdGlvbiBmbGFnIG5vbi1lbnVtZXJhYmxlICh3aGVyZSBwb3NzaWJsZSwgd2hpY2ggc2hvdWxkXG4gICAgLy8gaW5jbHVkZSBldmVyeSBlbnZpcm9ubWVudCB3ZSBydW4gdGVzdHMgaW4pLCBzbyB0aGUgdGVzdCBmcmFtZXdvcmtcbiAgICAvLyBpZ25vcmVzIGl0LlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQuX3N0b3JlLCAndmFsaWRhdGVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZmFsc2VcbiAgICB9KTsgLy8gc2VsZiBhbmQgc291cmNlIGFyZSBERVYgb25seSBwcm9wZXJ0aWVzLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc2VsZicsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIHZhbHVlOiBzZWxmXG4gICAgfSk7IC8vIFR3byBlbGVtZW50cyBjcmVhdGVkIGluIHR3byBkaWZmZXJlbnQgcGxhY2VzIHNob3VsZCBiZSBjb25zaWRlcmVkXG4gICAgLy8gZXF1YWwgZm9yIHRlc3RpbmcgcHVycG9zZXMgYW5kIHRoZXJlZm9yZSB3ZSBoaWRlIGl0IGZyb20gZW51bWVyYXRpb24uXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZWxlbWVudCwgJ19zb3VyY2UnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc291cmNlXG4gICAgfSk7XG5cbiAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgT2JqZWN0LmZyZWV6ZShlbGVtZW50LnByb3BzKTtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuLyoqXG4gKiBDcmVhdGUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgb2YgdGhlIGdpdmVuIHR5cGUuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2NyZWF0ZWVsZW1lbnRcbiAqL1xuXG5mdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIGNvbmZpZywgY2hpbGRyZW4pIHtcbiAgdmFyIHByb3BOYW1lOyAvLyBSZXNlcnZlZCBuYW1lcyBhcmUgZXh0cmFjdGVkXG5cbiAgdmFyIHByb3BzID0ge307XG4gIHZhciBrZXkgPSBudWxsO1xuICB2YXIgcmVmID0gbnVsbDtcbiAgdmFyIHNlbGYgPSBudWxsO1xuICB2YXIgc291cmNlID0gbnVsbDtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgcmVmID0gY29uZmlnLnJlZjtcblxuICAgICAge1xuICAgICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoaGFzVmFsaWRLZXkoY29uZmlnKSkge1xuICAgICAge1xuICAgICAgICBjaGVja0tleVN0cmluZ0NvZXJjaW9uKGNvbmZpZy5rZXkpO1xuICAgICAgfVxuXG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgc2VsZiA9IGNvbmZpZy5fX3NlbGYgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb25maWcuX19zZWxmO1xuICAgIHNvdXJjZSA9IGNvbmZpZy5fX3NvdXJjZSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGNvbmZpZy5fX3NvdXJjZTsgLy8gUmVtYWluaW5nIHByb3BlcnRpZXMgYXJlIGFkZGVkIHRvIGEgbmV3IHByb3BzIG9iamVjdFxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gQ2hpbGRyZW4gY2FuIGJlIG1vcmUgdGhhbiBvbmUgYXJndW1lbnQsIGFuZCB0aG9zZSBhcmUgdHJhbnNmZXJyZWQgb250b1xuICAvLyB0aGUgbmV3bHkgYWxsb2NhdGVkIHByb3BzIG9iamVjdC5cblxuXG4gIHZhciBjaGlsZHJlbkxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuXG4gIGlmIChjaGlsZHJlbkxlbmd0aCA9PT0gMSkge1xuICAgIHByb3BzLmNoaWxkcmVuID0gY2hpbGRyZW47XG4gIH0gZWxzZSBpZiAoY2hpbGRyZW5MZW5ndGggPiAxKSB7XG4gICAgdmFyIGNoaWxkQXJyYXkgPSBBcnJheShjaGlsZHJlbkxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkQXJyYXlbaV0gPSBhcmd1bWVudHNbaSArIDJdO1xuICAgIH1cblxuICAgIHtcbiAgICAgIGlmIChPYmplY3QuZnJlZXplKSB7XG4gICAgICAgIE9iamVjdC5mcmVlemUoY2hpbGRBcnJheSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgaWYgKHR5cGUgJiYgdHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICB2YXIgZGVmYXVsdFByb3BzID0gdHlwZS5kZWZhdWx0UHJvcHM7XG5cbiAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAge1xuICAgIGlmIChrZXkgfHwgcmVmKSB7XG4gICAgICB2YXIgZGlzcGxheU5hbWUgPSB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8ICdVbmtub3duJyA6IHR5cGU7XG5cbiAgICAgIGlmIChrZXkpIHtcbiAgICAgICAgZGVmaW5lS2V5UHJvcFdhcm5pbmdHZXR0ZXIocHJvcHMsIGRpc3BsYXlOYW1lKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlZikge1xuICAgICAgICBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBSZWFjdEVsZW1lbnQodHlwZSwga2V5LCByZWYsIHNlbGYsIHNvdXJjZSwgUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCwgcHJvcHMpO1xufVxuZnVuY3Rpb24gY2xvbmVBbmRSZXBsYWNlS2V5KG9sZEVsZW1lbnQsIG5ld0tleSkge1xuICB2YXIgbmV3RWxlbWVudCA9IFJlYWN0RWxlbWVudChvbGRFbGVtZW50LnR5cGUsIG5ld0tleSwgb2xkRWxlbWVudC5yZWYsIG9sZEVsZW1lbnQuX3NlbGYsIG9sZEVsZW1lbnQuX3NvdXJjZSwgb2xkRWxlbWVudC5fb3duZXIsIG9sZEVsZW1lbnQucHJvcHMpO1xuICByZXR1cm4gbmV3RWxlbWVudDtcbn1cbi8qKlxuICogQ2xvbmUgYW5kIHJldHVybiBhIG5ldyBSZWFjdEVsZW1lbnQgdXNpbmcgZWxlbWVudCBhcyB0aGUgc3RhcnRpbmcgcG9pbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2Nsb25lZWxlbWVudFxuICovXG5cbmZ1bmN0aW9uIGNsb25lRWxlbWVudChlbGVtZW50LCBjb25maWcsIGNoaWxkcmVuKSB7XG4gIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIlJlYWN0LmNsb25lRWxlbWVudCguLi4pOiBUaGUgYXJndW1lbnQgbXVzdCBiZSBhIFJlYWN0IGVsZW1lbnQsIGJ1dCB5b3UgcGFzc2VkIFwiICsgZWxlbWVudCArIFwiLlwiKTtcbiAgfVxuXG4gIHZhciBwcm9wTmFtZTsgLy8gT3JpZ2luYWwgcHJvcHMgYXJlIGNvcGllZFxuXG4gIHZhciBwcm9wcyA9IGFzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICB2YXIga2V5ID0gZWxlbWVudC5rZXk7XG4gIHZhciByZWYgPSBlbGVtZW50LnJlZjsgLy8gU2VsZiBpcyBwcmVzZXJ2ZWQgc2luY2UgdGhlIG93bmVyIGlzIHByZXNlcnZlZC5cblxuICB2YXIgc2VsZiA9IGVsZW1lbnQuX3NlbGY7IC8vIFNvdXJjZSBpcyBwcmVzZXJ2ZWQgc2luY2UgY2xvbmVFbGVtZW50IGlzIHVubGlrZWx5IHRvIGJlIHRhcmdldGVkIGJ5IGFcbiAgLy8gdHJhbnNwaWxlciwgYW5kIHRoZSBvcmlnaW5hbCBzb3VyY2UgaXMgcHJvYmFibHkgYSBiZXR0ZXIgaW5kaWNhdG9yIG9mIHRoZVxuICAvLyB0cnVlIG93bmVyLlxuXG4gIHZhciBzb3VyY2UgPSBlbGVtZW50Ll9zb3VyY2U7IC8vIE93bmVyIHdpbGwgYmUgcHJlc2VydmVkLCB1bmxlc3MgcmVmIGlzIG92ZXJyaWRkZW5cblxuICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcblxuICBpZiAoY29uZmlnICE9IG51bGwpIHtcbiAgICBpZiAoaGFzVmFsaWRSZWYoY29uZmlnKSkge1xuICAgICAgLy8gU2lsZW50bHkgc3RlYWwgdGhlIHJlZiBmcm9tIHRoZSBwYXJlbnQuXG4gICAgICByZWYgPSBjb25maWcucmVmO1xuICAgICAgb3duZXIgPSBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICB7XG4gICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oY29uZmlnLmtleSk7XG4gICAgICB9XG5cbiAgICAgIGtleSA9ICcnICsgY29uZmlnLmtleTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIG92ZXJyaWRlIGV4aXN0aW5nIHByb3BzXG5cblxuICAgIHZhciBkZWZhdWx0UHJvcHM7XG5cbiAgICBpZiAoZWxlbWVudC50eXBlICYmIGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHMpIHtcbiAgICAgIGRlZmF1bHRQcm9wcyA9IGVsZW1lbnQudHlwZS5kZWZhdWx0UHJvcHM7XG4gICAgfVxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgaWYgKGNvbmZpZ1twcm9wTmFtZV0gPT09IHVuZGVmaW5lZCAmJiBkZWZhdWx0UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuICAgICAgICAgIHByb3BzW3Byb3BOYW1lXSA9IGRlZmF1bHRQcm9wc1twcm9wTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSAvLyBDaGlsZHJlbiBjYW4gYmUgbW9yZSB0aGFuIG9uZSBhcmd1bWVudCwgYW5kIHRob3NlIGFyZSB0cmFuc2ZlcnJlZCBvbnRvXG4gIC8vIHRoZSBuZXdseSBhbGxvY2F0ZWQgcHJvcHMgb2JqZWN0LlxuXG5cbiAgdmFyIGNoaWxkcmVuTGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aCAtIDI7XG5cbiAgaWYgKGNoaWxkcmVuTGVuZ3RoID09PSAxKSB7XG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgfSBlbHNlIGlmIChjaGlsZHJlbkxlbmd0aCA+IDEpIHtcbiAgICB2YXIgY2hpbGRBcnJheSA9IEFycmF5KGNoaWxkcmVuTGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRBcnJheVtpXSA9IGFyZ3VtZW50c1tpICsgMl07XG4gICAgfVxuXG4gICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZEFycmF5O1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0RWxlbWVudChlbGVtZW50LnR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcyk7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuXG52YXIgU0VQQVJBVE9SID0gJy4nO1xudmFyIFNVQlNFUEFSQVRPUiA9ICc6Jztcbi8qKlxuICogRXNjYXBlIGFuZCB3cmFwIGtleSBzbyBpdCBpcyBzYWZlIHRvIHVzZSBhcyBhIHJlYWN0aWRcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30ga2V5IHRvIGJlIGVzY2FwZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9IHRoZSBlc2NhcGVkIGtleS5cbiAqL1xuXG5mdW5jdGlvbiBlc2NhcGUoa2V5KSB7XG4gIHZhciBlc2NhcGVSZWdleCA9IC9bPTpdL2c7XG4gIHZhciBlc2NhcGVyTG9va3VwID0ge1xuICAgICc9JzogJz0wJyxcbiAgICAnOic6ICc9MidcbiAgfTtcbiAgdmFyIGVzY2FwZWRTdHJpbmcgPSBrZXkucmVwbGFjZShlc2NhcGVSZWdleCwgZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgcmV0dXJuIGVzY2FwZXJMb29rdXBbbWF0Y2hdO1xuICB9KTtcbiAgcmV0dXJuICckJyArIGVzY2FwZWRTdHJpbmc7XG59XG4vKipcbiAqIFRPRE86IFRlc3QgdGhhdCBhIHNpbmdsZSBjaGlsZCBhbmQgYW4gYXJyYXkgd2l0aCBvbmUgaXRlbSBoYXZlIHRoZSBzYW1lIGtleVxuICogcGF0dGVybi5cbiAqL1xuXG5cbnZhciBkaWRXYXJuQWJvdXRNYXBzID0gZmFsc2U7XG52YXIgdXNlclByb3ZpZGVkS2V5RXNjYXBlUmVnZXggPSAvXFwvKy9nO1xuXG5mdW5jdGlvbiBlc2NhcGVVc2VyUHJvdmlkZWRLZXkodGV4dCkge1xuICByZXR1cm4gdGV4dC5yZXBsYWNlKHVzZXJQcm92aWRlZEtleUVzY2FwZVJlZ2V4LCAnJCYvJyk7XG59XG4vKipcbiAqIEdlbmVyYXRlIGEga2V5IHN0cmluZyB0aGF0IGlkZW50aWZpZXMgYSBlbGVtZW50IHdpdGhpbiBhIHNldC5cbiAqXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgQSBlbGVtZW50IHRoYXQgY291bGQgY29udGFpbiBhIG1hbnVhbCBrZXkuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggSW5kZXggdGhhdCBpcyB1c2VkIGlmIGEgbWFudWFsIGtleSBpcyBub3QgcHJvdmlkZWQuXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cblxuXG5mdW5jdGlvbiBnZXRFbGVtZW50S2V5KGVsZW1lbnQsIGluZGV4KSB7XG4gIC8vIERvIHNvbWUgdHlwZWNoZWNraW5nIGhlcmUgc2luY2Ugd2UgY2FsbCB0aGlzIGJsaW5kbHkuIFdlIHdhbnQgdG8gZW5zdXJlXG4gIC8vIHRoYXQgd2UgZG9uJ3QgYmxvY2sgcG90ZW50aWFsIGZ1dHVyZSBFUyBBUElzLlxuICBpZiAodHlwZW9mIGVsZW1lbnQgPT09ICdvYmplY3QnICYmIGVsZW1lbnQgIT09IG51bGwgJiYgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIC8vIEV4cGxpY2l0IGtleVxuICAgIHtcbiAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24oZWxlbWVudC5rZXkpO1xuICAgIH1cblxuICAgIHJldHVybiBlc2NhcGUoJycgKyBlbGVtZW50LmtleSk7XG4gIH0gLy8gSW1wbGljaXQga2V5IGRldGVybWluZWQgYnkgdGhlIGluZGV4IGluIHRoZSBzZXRcblxuXG4gIHJldHVybiBpbmRleC50b1N0cmluZygzNik7XG59XG5cbmZ1bmN0aW9uIG1hcEludG9BcnJheShjaGlsZHJlbiwgYXJyYXksIGVzY2FwZWRQcmVmaXgsIG5hbWVTb0ZhciwgY2FsbGJhY2spIHtcbiAgdmFyIHR5cGUgPSB0eXBlb2YgY2hpbGRyZW47XG5cbiAgaWYgKHR5cGUgPT09ICd1bmRlZmluZWQnIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgIC8vIEFsbCBvZiB0aGUgYWJvdmUgYXJlIHBlcmNlaXZlZCBhcyBudWxsLlxuICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgfVxuXG4gIHZhciBpbnZva2VDYWxsYmFjayA9IGZhbHNlO1xuXG4gIGlmIChjaGlsZHJlbiA9PT0gbnVsbCkge1xuICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdudW1iZXInOlxuICAgICAgICBpbnZva2VDYWxsYmFjayA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdvYmplY3QnOlxuICAgICAgICBzd2l0Y2ggKGNoaWxkcmVuLiQkdHlwZW9mKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcbiAgICAgICAgICAgIGludm9rZUNhbGxiYWNrID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9XG5cbiAgaWYgKGludm9rZUNhbGxiYWNrKSB7XG4gICAgdmFyIF9jaGlsZCA9IGNoaWxkcmVuO1xuICAgIHZhciBtYXBwZWRDaGlsZCA9IGNhbGxiYWNrKF9jaGlsZCk7IC8vIElmIGl0J3MgdGhlIG9ubHkgY2hpbGQsIHRyZWF0IHRoZSBuYW1lIGFzIGlmIGl0IHdhcyB3cmFwcGVkIGluIGFuIGFycmF5XG4gICAgLy8gc28gdGhhdCBpdCdzIGNvbnNpc3RlbnQgaWYgdGhlIG51bWJlciBvZiBjaGlsZHJlbiBncm93czpcblxuICAgIHZhciBjaGlsZEtleSA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgKyBnZXRFbGVtZW50S2V5KF9jaGlsZCwgMCkgOiBuYW1lU29GYXI7XG5cbiAgICBpZiAoaXNBcnJheShtYXBwZWRDaGlsZCkpIHtcbiAgICAgIHZhciBlc2NhcGVkQ2hpbGRLZXkgPSAnJztcblxuICAgICAgaWYgKGNoaWxkS2V5ICE9IG51bGwpIHtcbiAgICAgICAgZXNjYXBlZENoaWxkS2V5ID0gZXNjYXBlVXNlclByb3ZpZGVkS2V5KGNoaWxkS2V5KSArICcvJztcbiAgICAgIH1cblxuICAgICAgbWFwSW50b0FycmF5KG1hcHBlZENoaWxkLCBhcnJheSwgZXNjYXBlZENoaWxkS2V5LCAnJywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKG1hcHBlZENoaWxkICE9IG51bGwpIHtcbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChtYXBwZWRDaGlsZCkpIHtcbiAgICAgICAge1xuICAgICAgICAgIC8vIFRoZSBgaWZgIHN0YXRlbWVudCBoZXJlIHByZXZlbnRzIGF1dG8tZGlzYWJsaW5nIG9mIHRoZSBzYWZlXG4gICAgICAgICAgLy8gY29lcmNpb24gRVNMaW50IHJ1bGUsIHNvIHdlIG11c3QgbWFudWFsbHkgZGlzYWJsZSBpdCBiZWxvdy5cbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lIEZsb3cgaW5jb3JyZWN0bHkgdGhpbmtzIFJlYWN0LlBvcnRhbCBkb2Vzbid0IGhhdmUgYSBrZXlcbiAgICAgICAgICBpZiAobWFwcGVkQ2hpbGQua2V5ICYmICghX2NoaWxkIHx8IF9jaGlsZC5rZXkgIT09IG1hcHBlZENoaWxkLmtleSkpIHtcbiAgICAgICAgICAgIGNoZWNrS2V5U3RyaW5nQ29lcmNpb24obWFwcGVkQ2hpbGQua2V5KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtYXBwZWRDaGlsZCA9IGNsb25lQW5kUmVwbGFjZUtleShtYXBwZWRDaGlsZCwgLy8gS2VlcCBib3RoIHRoZSAobWFwcGVkKSBhbmQgb2xkIGtleXMgaWYgdGhleSBkaWZmZXIsIGp1c3QgYXNcbiAgICAgICAgLy8gdHJhdmVyc2VBbGxDaGlsZHJlbiB1c2VkIHRvIGRvIGZvciBvYmplY3RzIGFzIGNoaWxkcmVuXG4gICAgICAgIGVzY2FwZWRQcmVmaXggKyAoIC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgUmVhY3QuUG9ydGFsIGRvZXNuJ3QgaGF2ZSBhIGtleVxuICAgICAgICBtYXBwZWRDaGlsZC5rZXkgJiYgKCFfY2hpbGQgfHwgX2NoaWxkLmtleSAhPT0gbWFwcGVkQ2hpbGQua2V5KSA/IC8vICRGbG93Rml4TWUgRmxvdyBpbmNvcnJlY3RseSB0aGlua3MgZXhpc3RpbmcgZWxlbWVudCdzIGtleSBjYW4gYmUgYSBudW1iZXJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWludGVybmFsL3NhZmUtc3RyaW5nLWNvZXJjaW9uXG4gICAgICAgIGVzY2FwZVVzZXJQcm92aWRlZEtleSgnJyArIG1hcHBlZENoaWxkLmtleSkgKyAnLycgOiAnJykgKyBjaGlsZEtleSk7XG4gICAgICB9XG5cbiAgICAgIGFycmF5LnB1c2gobWFwcGVkQ2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiAxO1xuICB9XG5cbiAgdmFyIGNoaWxkO1xuICB2YXIgbmV4dE5hbWU7XG4gIHZhciBzdWJ0cmVlQ291bnQgPSAwOyAvLyBDb3VudCBvZiBjaGlsZHJlbiBmb3VuZCBpbiB0aGUgY3VycmVudCBzdWJ0cmVlLlxuXG4gIHZhciBuZXh0TmFtZVByZWZpeCA9IG5hbWVTb0ZhciA9PT0gJycgPyBTRVBBUkFUT1IgOiBuYW1lU29GYXIgKyBTVUJTRVBBUkFUT1I7XG5cbiAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgIG5leHROYW1lID0gbmV4dE5hbWVQcmVmaXggKyBnZXRFbGVtZW50S2V5KGNoaWxkLCBpKTtcbiAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4oY2hpbGRyZW4pO1xuXG4gICAgaWYgKHR5cGVvZiBpdGVyYXRvckZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB2YXIgaXRlcmFibGVDaGlsZHJlbiA9IGNoaWxkcmVuO1xuXG4gICAgICB7XG4gICAgICAgIC8vIFdhcm4gYWJvdXQgdXNpbmcgTWFwcyBhcyBjaGlsZHJlblxuICAgICAgICBpZiAoaXRlcmF0b3JGbiA9PT0gaXRlcmFibGVDaGlsZHJlbi5lbnRyaWVzKSB7XG4gICAgICAgICAgaWYgKCFkaWRXYXJuQWJvdXRNYXBzKSB7XG4gICAgICAgICAgICB3YXJuKCdVc2luZyBNYXBzIGFzIGNoaWxkcmVuIGlzIG5vdCBzdXBwb3J0ZWQuICcgKyAnVXNlIGFuIGFycmF5IG9mIGtleWVkIFJlYWN0RWxlbWVudHMgaW5zdGVhZC4nKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaWRXYXJuQWJvdXRNYXBzID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwoaXRlcmFibGVDaGlsZHJlbik7XG4gICAgICB2YXIgc3RlcDtcbiAgICAgIHZhciBpaSA9IDA7XG5cbiAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgY2hpbGQgPSBzdGVwLnZhbHVlO1xuICAgICAgICBuZXh0TmFtZSA9IG5leHROYW1lUHJlZml4ICsgZ2V0RWxlbWVudEtleShjaGlsZCwgaWkrKyk7XG4gICAgICAgIHN1YnRyZWVDb3VudCArPSBtYXBJbnRvQXJyYXkoY2hpbGQsIGFycmF5LCBlc2NhcGVkUHJlZml4LCBuZXh0TmFtZSwgY2FsbGJhY2spO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9zYWZlLXN0cmluZy1jb2VyY2lvblxuICAgICAgdmFyIGNoaWxkcmVuU3RyaW5nID0gU3RyaW5nKGNoaWxkcmVuKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9iamVjdHMgYXJlIG5vdCB2YWxpZCBhcyBhIFJlYWN0IGNoaWxkIChmb3VuZDogXCIgKyAoY2hpbGRyZW5TdHJpbmcgPT09ICdbb2JqZWN0IE9iamVjdF0nID8gJ29iamVjdCB3aXRoIGtleXMgeycgKyBPYmplY3Qua2V5cyhjaGlsZHJlbikuam9pbignLCAnKSArICd9JyA6IGNoaWxkcmVuU3RyaW5nKSArIFwiKS4gXCIgKyAnSWYgeW91IG1lYW50IHRvIHJlbmRlciBhIGNvbGxlY3Rpb24gb2YgY2hpbGRyZW4sIHVzZSBhbiBhcnJheSAnICsgJ2luc3RlYWQuJyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN1YnRyZWVDb3VudDtcbn1cblxuLyoqXG4gKiBNYXBzIGNoaWxkcmVuIHRoYXQgYXJlIHR5cGljYWxseSBzcGVjaWZpZWQgYXMgYHByb3BzLmNoaWxkcmVuYC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI3JlYWN0Y2hpbGRyZW5tYXBcbiAqXG4gKiBUaGUgcHJvdmlkZWQgbWFwRnVuY3Rpb24oY2hpbGQsIGluZGV4KSB3aWxsIGJlIGNhbGxlZCBmb3IgZWFjaFxuICogbGVhZiBjaGlsZC5cbiAqXG4gKiBAcGFyYW0gez8qfSBjaGlsZHJlbiBDaGlsZHJlbiB0cmVlIGNvbnRhaW5lci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKiwgaW50KX0gZnVuYyBUaGUgbWFwIGZ1bmN0aW9uLlxuICogQHBhcmFtIHsqfSBjb250ZXh0IENvbnRleHQgZm9yIG1hcEZ1bmN0aW9uLlxuICogQHJldHVybiB7b2JqZWN0fSBPYmplY3QgY29udGFpbmluZyB0aGUgb3JkZXJlZCBtYXAgb2YgcmVzdWx0cy5cbiAqL1xuZnVuY3Rpb24gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmMsIGNvbnRleHQpIHtcbiAgaWYgKGNoaWxkcmVuID09IG51bGwpIHtcbiAgICByZXR1cm4gY2hpbGRyZW47XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBjb3VudCA9IDA7XG4gIG1hcEludG9BcnJheShjaGlsZHJlbiwgcmVzdWx0LCAnJywgJycsIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBmdW5jLmNhbGwoY29udGV4dCwgY2hpbGQsIGNvdW50KyspO1xuICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cbi8qKlxuICogQ291bnQgdGhlIG51bWJlciBvZiBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzXG4gKiBgcHJvcHMuY2hpbGRyZW5gLlxuICpcbiAqIFNlZSBodHRwczovL3JlYWN0anMub3JnL2RvY3MvcmVhY3QtYXBpLmh0bWwjcmVhY3RjaGlsZHJlbmNvdW50XG4gKlxuICogQHBhcmFtIHs/Kn0gY2hpbGRyZW4gQ2hpbGRyZW4gdHJlZSBjb250YWluZXIuXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgY2hpbGRyZW4uXG4gKi9cblxuXG5mdW5jdGlvbiBjb3VudENoaWxkcmVuKGNoaWxkcmVuKSB7XG4gIHZhciBuID0gMDtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBuKys7IC8vIERvbid0IHJldHVybiBhbnl0aGluZ1xuICB9KTtcbiAgcmV0dXJuIG47XG59XG5cbi8qKlxuICogSXRlcmF0ZXMgdGhyb3VnaCBjaGlsZHJlbiB0aGF0IGFyZSB0eXBpY2FsbHkgc3BlY2lmaWVkIGFzIGBwcm9wcy5jaGlsZHJlbmAuXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVuZm9yZWFjaFxuICpcbiAqIFRoZSBwcm92aWRlZCBmb3JFYWNoRnVuYyhjaGlsZCwgaW5kZXgpIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoXG4gKiBsZWFmIGNoaWxkLlxuICpcbiAqIEBwYXJhbSB7Pyp9IGNoaWxkcmVuIENoaWxkcmVuIHRyZWUgY29udGFpbmVyLlxuICogQHBhcmFtIHtmdW5jdGlvbigqLCBpbnQpfSBmb3JFYWNoRnVuY1xuICogQHBhcmFtIHsqfSBmb3JFYWNoQ29udGV4dCBDb250ZXh0IGZvciBmb3JFYWNoQ29udGV4dC5cbiAqL1xuZnVuY3Rpb24gZm9yRWFjaENoaWxkcmVuKGNoaWxkcmVuLCBmb3JFYWNoRnVuYywgZm9yRWFjaENvbnRleHQpIHtcbiAgbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uICgpIHtcbiAgICBmb3JFYWNoRnVuYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyAvLyBEb24ndCByZXR1cm4gYW55dGhpbmcuXG4gIH0sIGZvckVhY2hDb250ZXh0KTtcbn1cbi8qKlxuICogRmxhdHRlbiBhIGNoaWxkcmVuIG9iamVjdCAodHlwaWNhbGx5IHNwZWNpZmllZCBhcyBgcHJvcHMuY2hpbGRyZW5gKSBhbmRcbiAqIHJldHVybiBhbiBhcnJheSB3aXRoIGFwcHJvcHJpYXRlbHkgcmUta2V5ZWQgY2hpbGRyZW4uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVudG9hcnJheVxuICovXG5cblxuZnVuY3Rpb24gdG9BcnJheShjaGlsZHJlbikge1xuICByZXR1cm4gbWFwQ2hpbGRyZW4oY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIHJldHVybiBjaGlsZDtcbiAgfSkgfHwgW107XG59XG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGNoaWxkIGluIGEgY29sbGVjdGlvbiBvZiBjaGlsZHJlbiBhbmQgdmVyaWZpZXMgdGhhdCB0aGVyZVxuICogaXMgb25seSBvbmUgY2hpbGQgaW4gdGhlIGNvbGxlY3Rpb24uXG4gKlxuICogU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9yZWFjdC1hcGkuaHRtbCNyZWFjdGNoaWxkcmVub25seVxuICpcbiAqIFRoZSBjdXJyZW50IGltcGxlbWVudGF0aW9uIG9mIHRoaXMgZnVuY3Rpb24gYXNzdW1lcyB0aGF0IGEgc2luZ2xlIGNoaWxkIGdldHNcbiAqIHBhc3NlZCB3aXRob3V0IGEgd3JhcHBlciwgYnV0IHRoZSBwdXJwb3NlIG9mIHRoaXMgaGVscGVyIGZ1bmN0aW9uIGlzIHRvXG4gKiBhYnN0cmFjdCBhd2F5IHRoZSBwYXJ0aWN1bGFyIHN0cnVjdHVyZSBvZiBjaGlsZHJlbi5cbiAqXG4gKiBAcGFyYW0gez9vYmplY3R9IGNoaWxkcmVuIENoaWxkIGNvbGxlY3Rpb24gc3RydWN0dXJlLlxuICogQHJldHVybiB7UmVhY3RFbGVtZW50fSBUaGUgZmlyc3QgYW5kIG9ubHkgYFJlYWN0RWxlbWVudGAgY29udGFpbmVkIGluIHRoZVxuICogc3RydWN0dXJlLlxuICovXG5cblxuZnVuY3Rpb24gb25seUNoaWxkKGNoaWxkcmVuKSB7XG4gIGlmICghaXNWYWxpZEVsZW1lbnQoY2hpbGRyZW4pKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdC5DaGlsZHJlbi5vbmx5IGV4cGVjdGVkIHRvIHJlY2VpdmUgYSBzaW5nbGUgUmVhY3QgZWxlbWVudCBjaGlsZC4nKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZHJlbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGV4dChkZWZhdWx0VmFsdWUpIHtcbiAgLy8gVE9ETzogU2Vjb25kIGFyZ3VtZW50IHVzZWQgdG8gYmUgYW4gb3B0aW9uYWwgYGNhbGN1bGF0ZUNoYW5nZWRCaXRzYFxuICAvLyBmdW5jdGlvbi4gV2FybiB0byByZXNlcnZlIGZvciBmdXR1cmUgdXNlP1xuICB2YXIgY29udGV4dCA9IHtcbiAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0byBzdXBwb3J0IG11bHRpcGxlIGNvbmN1cnJlbnQgcmVuZGVyZXJzLCB3ZSBjYXRlZ29yaXplXG4gICAgLy8gc29tZSByZW5kZXJlcnMgYXMgcHJpbWFyeSBhbmQgb3RoZXJzIGFzIHNlY29uZGFyeS4gV2Ugb25seSBleHBlY3RcbiAgICAvLyB0aGVyZSB0byBiZSB0d28gY29uY3VycmVudCByZW5kZXJlcnMgYXQgbW9zdDogUmVhY3QgTmF0aXZlIChwcmltYXJ5KSBhbmRcbiAgICAvLyBGYWJyaWMgKHNlY29uZGFyeSk7IFJlYWN0IERPTSAocHJpbWFyeSkgYW5kIFJlYWN0IEFSVCAoc2Vjb25kYXJ5KS5cbiAgICAvLyBTZWNvbmRhcnkgcmVuZGVyZXJzIHN0b3JlIHRoZWlyIGNvbnRleHQgdmFsdWVzIG9uIHNlcGFyYXRlIGZpZWxkcy5cbiAgICBfY3VycmVudFZhbHVlOiBkZWZhdWx0VmFsdWUsXG4gICAgX2N1cnJlbnRWYWx1ZTI6IGRlZmF1bHRWYWx1ZSxcbiAgICAvLyBVc2VkIHRvIHRyYWNrIGhvdyBtYW55IGNvbmN1cnJlbnQgcmVuZGVyZXJzIHRoaXMgY29udGV4dCBjdXJyZW50bHlcbiAgICAvLyBzdXBwb3J0cyB3aXRoaW4gaW4gYSBzaW5nbGUgcmVuZGVyZXIuIFN1Y2ggYXMgcGFyYWxsZWwgc2VydmVyIHJlbmRlcmluZy5cbiAgICBfdGhyZWFkQ291bnQ6IDAsXG4gICAgLy8gVGhlc2UgYXJlIGNpcmN1bGFyXG4gICAgUHJvdmlkZXI6IG51bGwsXG4gICAgQ29uc3VtZXI6IG51bGwsXG4gICAgLy8gQWRkIHRoZXNlIHRvIHVzZSBzYW1lIGhpZGRlbiBjbGFzcyBpbiBWTSBhcyBTZXJ2ZXJDb250ZXh0XG4gICAgX2RlZmF1bHRWYWx1ZTogbnVsbCxcbiAgICBfZ2xvYmFsTmFtZTogbnVsbFxuICB9O1xuICBjb250ZXh0LlByb3ZpZGVyID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9QUk9WSURFUl9UWVBFLFxuICAgIF9jb250ZXh0OiBjb250ZXh0XG4gIH07XG4gIHZhciBoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycyA9IGZhbHNlO1xuICB2YXIgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSBmYWxzZTtcbiAgdmFyIGhhc1dhcm5lZEFib3V0RGlzcGxheU5hbWVPbkNvbnN1bWVyID0gZmFsc2U7XG5cbiAge1xuICAgIC8vIEEgc2VwYXJhdGUgb2JqZWN0LCBidXQgcHJveGllcyBiYWNrIHRvIHRoZSBvcmlnaW5hbCBjb250ZXh0IG9iamVjdCBmb3JcbiAgICAvLyBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS4gSXQgaGFzIGEgZGlmZmVyZW50ICQkdHlwZW9mLCBzbyB3ZSBjYW4gcHJvcGVybHlcbiAgICAvLyB3YXJuIGZvciB0aGUgaW5jb3JyZWN0IHVzYWdlIG9mIENvbnRleHQgYXMgYSBDb25zdW1lci5cbiAgICB2YXIgQ29uc3VtZXIgPSB7XG4gICAgICAkJHR5cGVvZjogUkVBQ1RfQ09OVEVYVF9UWVBFLFxuICAgICAgX2NvbnRleHQ6IGNvbnRleHRcbiAgICB9OyAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBhYm91dCBub3Qgc2V0dGluZyBhIHZhbHVlLCB3aGljaCBpcyBpbnRlbnRpb25hbCBoZXJlXG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhDb25zdW1lciwge1xuICAgICAgUHJvdmlkZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nQ29uc3VtZXJQcm92aWRlcikge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ0NvbnN1bWVyUHJvdmlkZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLlByb3ZpZGVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LlByb3ZpZGVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LlByb3ZpZGVyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfUHJvdmlkZXIpIHtcbiAgICAgICAgICBjb250ZXh0LlByb3ZpZGVyID0gX1Byb3ZpZGVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgX2N1cnJlbnRWYWx1ZToge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fY3VycmVudFZhbHVlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlKSB7XG4gICAgICAgICAgY29udGV4dC5fY3VycmVudFZhbHVlID0gX2N1cnJlbnRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF9jdXJyZW50VmFsdWUyOiB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBjb250ZXh0Ll9jdXJyZW50VmFsdWUyO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChfY3VycmVudFZhbHVlMikge1xuICAgICAgICAgIGNvbnRleHQuX2N1cnJlbnRWYWx1ZTIgPSBfY3VycmVudFZhbHVlMjtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIF90aHJlYWRDb3VudDoge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5fdGhyZWFkQ291bnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKF90aHJlYWRDb3VudCkge1xuICAgICAgICAgIGNvbnRleHQuX3RocmVhZENvdW50ID0gX3RocmVhZENvdW50O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgQ29uc3VtZXI6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dFVzaW5nTmVzdGVkQ29udGV4dENvbnN1bWVycykge1xuICAgICAgICAgICAgaGFzV2FybmVkQWJvdXRVc2luZ05lc3RlZENvbnRleHRDb25zdW1lcnMgPSB0cnVlO1xuXG4gICAgICAgICAgICBlcnJvcignUmVuZGVyaW5nIDxDb250ZXh0LkNvbnN1bWVyLkNvbnN1bWVyPiBpcyBub3Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gJyArICdhIGZ1dHVyZSBtYWpvciByZWxlYXNlLiBEaWQgeW91IG1lYW4gdG8gcmVuZGVyIDxDb250ZXh0LkNvbnN1bWVyPiBpbnN0ZWFkPycpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBjb250ZXh0LkNvbnN1bWVyO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheU5hbWU6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnRleHQuZGlzcGxheU5hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogZnVuY3Rpb24gKGRpc3BsYXlOYW1lKSB7XG4gICAgICAgICAgaWYgKCFoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lcikge1xuICAgICAgICAgICAgd2FybignU2V0dGluZyBgZGlzcGxheU5hbWVgIG9uIENvbnRleHQuQ29uc3VtZXIgaGFzIG5vIGVmZmVjdC4gJyArIFwiWW91IHNob3VsZCBzZXQgaXQgZGlyZWN0bHkgb24gdGhlIGNvbnRleHQgd2l0aCBDb250ZXh0LmRpc3BsYXlOYW1lID0gJyVzJy5cIiwgZGlzcGxheU5hbWUpO1xuXG4gICAgICAgICAgICBoYXNXYXJuZWRBYm91dERpc3BsYXlOYW1lT25Db25zdW1lciA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7IC8vICRGbG93Rml4TWU6IEZsb3cgY29tcGxhaW5zIGFib3V0IG1pc3NpbmcgcHJvcGVydGllcyBiZWNhdXNlIGl0IGRvZXNuJ3QgdW5kZXJzdGFuZCBkZWZpbmVQcm9wZXJ0eVxuXG4gICAgY29udGV4dC5Db25zdW1lciA9IENvbnN1bWVyO1xuICB9XG5cbiAge1xuICAgIGNvbnRleHQuX2N1cnJlbnRSZW5kZXJlciA9IG51bGw7XG4gICAgY29udGV4dC5fY3VycmVudFJlbmRlcmVyMiA9IG51bGw7XG4gIH1cblxuICByZXR1cm4gY29udGV4dDtcbn1cblxudmFyIFVuaW5pdGlhbGl6ZWQgPSAtMTtcbnZhciBQZW5kaW5nID0gMDtcbnZhciBSZXNvbHZlZCA9IDE7XG52YXIgUmVqZWN0ZWQgPSAyO1xuXG5mdW5jdGlvbiBsYXp5SW5pdGlhbGl6ZXIocGF5bG9hZCkge1xuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgdmFyIGN0b3IgPSBwYXlsb2FkLl9yZXN1bHQ7XG4gICAgdmFyIHRoZW5hYmxlID0gY3RvcigpOyAvLyBUcmFuc2l0aW9uIHRvIHRoZSBuZXh0IHN0YXRlLlxuICAgIC8vIFRoaXMgbWlnaHQgdGhyb3cgZWl0aGVyIGJlY2F1c2UgaXQncyBtaXNzaW5nIG9yIHRocm93cy4gSWYgc28sIHdlIHRyZWF0IGl0XG4gICAgLy8gYXMgc3RpbGwgdW5pbml0aWFsaXplZCBhbmQgdHJ5IGFnYWluIG5leHQgdGltZS4gV2hpY2ggaXMgdGhlIHNhbWUgYXMgd2hhdFxuICAgIC8vIGhhcHBlbnMgaWYgdGhlIGN0b3Igb3IgYW55IHdyYXBwZXJzIHByb2Nlc3NpbmcgdGhlIGN0b3IgdGhyb3dzLiBUaGlzIG1pZ2h0XG4gICAgLy8gZW5kIHVwIGZpeGluZyBpdCBpZiB0aGUgcmVzb2x1dGlvbiB3YXMgYSBjb25jdXJyZW5jeSBidWcuXG5cbiAgICB0aGVuYWJsZS50aGVuKGZ1bmN0aW9uIChtb2R1bGVPYmplY3QpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZXNvbHZlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlc29sdmVkLl9zdGF0dXMgPSBSZXNvbHZlZDtcbiAgICAgICAgcmVzb2x2ZWQuX3Jlc3VsdCA9IG1vZHVsZU9iamVjdDtcbiAgICAgIH1cbiAgICB9LCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGlmIChwYXlsb2FkLl9zdGF0dXMgPT09IFBlbmRpbmcgfHwgcGF5bG9hZC5fc3RhdHVzID09PSBVbmluaXRpYWxpemVkKSB7XG4gICAgICAgIC8vIFRyYW5zaXRpb24gdG8gdGhlIG5leHQgc3RhdGUuXG4gICAgICAgIHZhciByZWplY3RlZCA9IHBheWxvYWQ7XG4gICAgICAgIHJlamVjdGVkLl9zdGF0dXMgPSBSZWplY3RlZDtcbiAgICAgICAgcmVqZWN0ZWQuX3Jlc3VsdCA9IGVycm9yO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHBheWxvYWQuX3N0YXR1cyA9PT0gVW5pbml0aWFsaXplZCkge1xuICAgICAgLy8gSW4gY2FzZSwgd2UncmUgc3RpbGwgdW5pbml0aWFsaXplZCwgdGhlbiB3ZSdyZSB3YWl0aW5nIGZvciB0aGUgdGhlbmFibGVcbiAgICAgIC8vIHRvIHJlc29sdmUuIFNldCBpdCBhcyBwZW5kaW5nIGluIHRoZSBtZWFudGltZS5cbiAgICAgIHZhciBwZW5kaW5nID0gcGF5bG9hZDtcbiAgICAgIHBlbmRpbmcuX3N0YXR1cyA9IFBlbmRpbmc7XG4gICAgICBwZW5kaW5nLl9yZXN1bHQgPSB0aGVuYWJsZTtcbiAgICB9XG4gIH1cblxuICBpZiAocGF5bG9hZC5fc3RhdHVzID09PSBSZXNvbHZlZCkge1xuICAgIHZhciBtb2R1bGVPYmplY3QgPSBwYXlsb2FkLl9yZXN1bHQ7XG5cbiAgICB7XG4gICAgICBpZiAobW9kdWxlT2JqZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXJyb3IoJ2xhenk6IEV4cGVjdGVkIHRoZSByZXN1bHQgb2YgYSBkeW5hbWljIGltcCcgKyAnb3J0KCkgY2FsbC4gJyArICdJbnN0ZWFkIHJlY2VpdmVkOiAlc1xcblxcbllvdXIgY29kZSBzaG91bGQgbG9vayBsaWtlOiBcXG4gICcgKyAvLyBCcmVhayB1cCBpbXBvcnRzIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwYXJzaW5nIHRoZW0gYXMgZGVwZW5kZW5jaWVzLlxuICAgICAgICAnY29uc3QgTXlDb21wb25lbnQgPSBsYXp5KCgpID0+IGltcCcgKyBcIm9ydCgnLi9NeUNvbXBvbmVudCcpKVxcblxcblwiICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHB1dCBjdXJseSBicmFjZXMgYXJvdW5kIHRoZSBpbXBvcnQ/JywgbW9kdWxlT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB7XG4gICAgICBpZiAoISgnZGVmYXVsdCcgaW4gbW9kdWxlT2JqZWN0KSkge1xuICAgICAgICBlcnJvcignbGF6eTogRXhwZWN0ZWQgdGhlIHJlc3VsdCBvZiBhIGR5bmFtaWMgaW1wJyArICdvcnQoKSBjYWxsLiAnICsgJ0luc3RlYWQgcmVjZWl2ZWQ6ICVzXFxuXFxuWW91ciBjb2RlIHNob3VsZCBsb29rIGxpa2U6IFxcbiAgJyArIC8vIEJyZWFrIHVwIGltcG9ydHMgdG8gYXZvaWQgYWNjaWRlbnRhbGx5IHBhcnNpbmcgdGhlbSBhcyBkZXBlbmRlbmNpZXMuXG4gICAgICAgICdjb25zdCBNeUNvbXBvbmVudCA9IGxhenkoKCkgPT4gaW1wJyArIFwib3J0KCcuL015Q29tcG9uZW50JykpXCIsIG1vZHVsZU9iamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vZHVsZU9iamVjdC5kZWZhdWx0O1xuICB9IGVsc2Uge1xuICAgIHRocm93IHBheWxvYWQuX3Jlc3VsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsYXp5KGN0b3IpIHtcbiAgdmFyIHBheWxvYWQgPSB7XG4gICAgLy8gV2UgdXNlIHRoZXNlIGZpZWxkcyB0byBzdG9yZSB0aGUgcmVzdWx0LlxuICAgIF9zdGF0dXM6IFVuaW5pdGlhbGl6ZWQsXG4gICAgX3Jlc3VsdDogY3RvclxuICB9O1xuICB2YXIgbGF6eVR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX0xBWllfVFlQRSxcbiAgICBfcGF5bG9hZDogcGF5bG9hZCxcbiAgICBfaW5pdDogbGF6eUluaXRpYWxpemVyXG4gIH07XG5cbiAge1xuICAgIC8vIEluIHByb2R1Y3Rpb24sIHRoaXMgd291bGQganVzdCBzZXQgaXQgb24gdGhlIG9iamVjdC5cbiAgICB2YXIgZGVmYXVsdFByb3BzO1xuICAgIHZhciBwcm9wVHlwZXM7IC8vICRGbG93Rml4TWVcblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGxhenlUeXBlLCB7XG4gICAgICBkZWZhdWx0UHJvcHM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gZGVmYXVsdFByb3BzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdEZWZhdWx0UHJvcHMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgZGVmYXVsdFByb3BzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgZGVmYXVsdFByb3BzID0gbmV3RGVmYXVsdFByb3BzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdkZWZhdWx0UHJvcHMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBwcm9wVHlwZXM6IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFR5cGVzO1xuICAgICAgICB9LFxuICAgICAgICBzZXQ6IGZ1bmN0aW9uIChuZXdQcm9wVHlwZXMpIHtcbiAgICAgICAgICBlcnJvcignUmVhY3QubGF6eSguLi4pOiBJdCBpcyBub3Qgc3VwcG9ydGVkIHRvIGFzc2lnbiBgcHJvcFR5cGVzYCB0byAnICsgJ2EgbGF6eSBjb21wb25lbnQgaW1wb3J0LiBFaXRoZXIgc3BlY2lmeSB0aGVtIHdoZXJlIHRoZSBjb21wb25lbnQgJyArICdpcyBkZWZpbmVkLCBvciBjcmVhdGUgYSB3cmFwcGluZyBjb21wb25lbnQgYXJvdW5kIGl0LicpO1xuXG4gICAgICAgICAgcHJvcFR5cGVzID0gbmV3UHJvcFR5cGVzOyAvLyBNYXRjaCBwcm9kdWN0aW9uIGJlaGF2aW9yIG1vcmUgY2xvc2VseTpcbiAgICAgICAgICAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobGF6eVR5cGUsICdwcm9wVHlwZXMnLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBsYXp5VHlwZTtcbn1cblxuZnVuY3Rpb24gZm9yd2FyZFJlZihyZW5kZXIpIHtcbiAge1xuICAgIGlmIChyZW5kZXIgIT0gbnVsbCAmJiByZW5kZXIuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHJlY2VpdmVkIGEgYG1lbW9gICcgKyAnY29tcG9uZW50LiBJbnN0ZWFkIG9mIGZvcndhcmRSZWYobWVtbyguLi4pKSwgdXNlICcgKyAnbWVtbyhmb3J3YXJkUmVmKC4uLikpLicpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHJlbmRlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVxdWlyZXMgYSByZW5kZXIgZnVuY3Rpb24gYnV0IHdhcyBnaXZlbiAlcy4nLCByZW5kZXIgPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcmVuZGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHJlbmRlci5sZW5ndGggIT09IDAgJiYgcmVuZGVyLmxlbmd0aCAhPT0gMikge1xuICAgICAgICBlcnJvcignZm9yd2FyZFJlZiByZW5kZXIgZnVuY3Rpb25zIGFjY2VwdCBleGFjdGx5IHR3byBwYXJhbWV0ZXJzOiBwcm9wcyBhbmQgcmVmLiAlcycsIHJlbmRlci5sZW5ndGggPT09IDEgPyAnRGlkIHlvdSBmb3JnZXQgdG8gdXNlIHRoZSByZWYgcGFyYW1ldGVyPycgOiAnQW55IGFkZGl0aW9uYWwgcGFyYW1ldGVyIHdpbGwgYmUgdW5kZWZpbmVkLicpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChyZW5kZXIgIT0gbnVsbCkge1xuICAgICAgaWYgKHJlbmRlci5kZWZhdWx0UHJvcHMgIT0gbnVsbCB8fCByZW5kZXIucHJvcFR5cGVzICE9IG51bGwpIHtcbiAgICAgICAgZXJyb3IoJ2ZvcndhcmRSZWYgcmVuZGVyIGZ1bmN0aW9ucyBkbyBub3Qgc3VwcG9ydCBwcm9wVHlwZXMgb3IgZGVmYXVsdFByb3BzLiAnICsgJ0RpZCB5b3UgYWNjaWRlbnRhbGx5IHBhc3MgYSBSZWFjdCBjb21wb25lbnQ/Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGVsZW1lbnRUeXBlID0ge1xuICAgICQkdHlwZW9mOiBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFLFxuICAgIHJlbmRlcjogcmVuZGVyXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QuZm9yd2FyZFJlZigocHJvcHMsIHJlZikgPT4gey4uLn0pO1xuICAgICAgICAvLyBUaGlzIGtpbmQgb2YgaW5uZXIgZnVuY3Rpb24gaXMgbm90IHVzZWQgZWxzZXdoZXJlIHNvIHRoZSBzaWRlIGVmZmVjdCBpcyBva2F5LlxuXG4gICAgICAgIGlmICghcmVuZGVyLm5hbWUgJiYgIXJlbmRlci5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHJlbmRlci5kaXNwbGF5TmFtZSA9IG5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50VHlwZTtcbn1cblxudmFyIFJFQUNUX01PRFVMRV9SRUZFUkVOQ0U7XG5cbntcbiAgUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSA9IFN5bWJvbC5mb3IoJ3JlYWN0Lm1vZHVsZS5yZWZlcmVuY2UnKTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IGVuYWJsZURlYnVnVHJhY2luZyAgfHwgdHlwZSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSB8fCBlbmFibGVMZWdhY3lIaWRkZW4gIHx8IHR5cGUgPT09IFJFQUNUX09GRlNDUkVFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICB8fCBlbmFibGVDYWNoZUVsZW1lbnQgIHx8IGVuYWJsZVRyYW5zaXRpb25UcmFjaW5nICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCAvLyBUaGlzIG5lZWRzIHRvIGluY2x1ZGUgYWxsIHBvc3NpYmxlIG1vZHVsZSByZWZlcmVuY2Ugb2JqZWN0XG4gICAgLy8gdHlwZXMgc3VwcG9ydGVkIGJ5IGFueSBGbGlnaHQgY29uZmlndXJhdGlvbiBhbnl3aGVyZSBzaW5jZVxuICAgIC8vIHdlIGRvbid0IGtub3cgd2hpY2ggRmxpZ2h0IGJ1aWxkIHRoaXMgd2lsbCBlbmQgdXAgYmVpbmcgdXNlZFxuICAgIC8vIHdpdGguXG4gICAgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTU9EVUxFX1JFRkVSRU5DRSB8fCB0eXBlLmdldE1vZHVsZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gbWVtbyh0eXBlLCBjb21wYXJlKSB7XG4gIHtcbiAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSkge1xuICAgICAgZXJyb3IoJ21lbW86IFRoZSBmaXJzdCBhcmd1bWVudCBtdXN0IGJlIGEgY29tcG9uZW50LiBJbnN0ZWFkICcgKyAncmVjZWl2ZWQ6ICVzJywgdHlwZSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiB0eXBlKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudFR5cGUgPSB7XG4gICAgJCR0eXBlb2Y6IFJFQUNUX01FTU9fVFlQRSxcbiAgICB0eXBlOiB0eXBlLFxuICAgIGNvbXBhcmU6IGNvbXBhcmUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiBjb21wYXJlXG4gIH07XG5cbiAge1xuICAgIHZhciBvd25OYW1lO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50VHlwZSwgJ2Rpc3BsYXlOYW1lJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG93bk5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBvd25OYW1lID0gbmFtZTsgLy8gVGhlIGlubmVyIGNvbXBvbmVudCBzaG91bGRuJ3QgaW5oZXJpdCB0aGlzIGRpc3BsYXkgbmFtZSBpbiBtb3N0IGNhc2VzLFxuICAgICAgICAvLyBiZWNhdXNlIHRoZSBjb21wb25lbnQgbWF5IGJlIHVzZWQgZWxzZXdoZXJlLlxuICAgICAgICAvLyBCdXQgaXQncyBuaWNlIGZvciBhbm9ueW1vdXMgZnVuY3Rpb25zIHRvIGluaGVyaXQgdGhlIG5hbWUsXG4gICAgICAgIC8vIHNvIHRoYXQgb3VyIGNvbXBvbmVudC1zdGFjayBnZW5lcmF0aW9uIGxvZ2ljIHdpbGwgZGlzcGxheSB0aGVpciBmcmFtZXMuXG4gICAgICAgIC8vIEFuIGFub255bW91cyBmdW5jdGlvbiBnZW5lcmFsbHkgc3VnZ2VzdHMgYSBwYXR0ZXJuIGxpa2U6XG4gICAgICAgIC8vICAgUmVhY3QubWVtbygocHJvcHMpID0+IHsuLi59KTtcbiAgICAgICAgLy8gVGhpcyBraW5kIG9mIGlubmVyIGZ1bmN0aW9uIGlzIG5vdCB1c2VkIGVsc2V3aGVyZSBzbyB0aGUgc2lkZSBlZmZlY3QgaXMgb2theS5cblxuICAgICAgICBpZiAoIXR5cGUubmFtZSAmJiAhdHlwZS5kaXNwbGF5TmFtZSkge1xuICAgICAgICAgIHR5cGUuZGlzcGxheU5hbWUgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gZWxlbWVudFR5cGU7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmVEaXNwYXRjaGVyKCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudDtcblxuICB7XG4gICAgaWYgKGRpc3BhdGNoZXIgPT09IG51bGwpIHtcbiAgICAgIGVycm9yKCdJbnZhbGlkIGhvb2sgY2FsbC4gSG9va3MgY2FuIG9ubHkgYmUgY2FsbGVkIGluc2lkZSBvZiB0aGUgYm9keSBvZiBhIGZ1bmN0aW9uIGNvbXBvbmVudC4gVGhpcyBjb3VsZCBoYXBwZW4gZm9yJyArICcgb25lIG9mIHRoZSBmb2xsb3dpbmcgcmVhc29uczpcXG4nICsgJzEuIFlvdSBtaWdodCBoYXZlIG1pc21hdGNoaW5nIHZlcnNpb25zIG9mIFJlYWN0IGFuZCB0aGUgcmVuZGVyZXIgKHN1Y2ggYXMgUmVhY3QgRE9NKVxcbicgKyAnMi4gWW91IG1pZ2h0IGJlIGJyZWFraW5nIHRoZSBSdWxlcyBvZiBIb29rc1xcbicgKyAnMy4gWW91IG1pZ2h0IGhhdmUgbW9yZSB0aGFuIG9uZSBjb3B5IG9mIFJlYWN0IGluIHRoZSBzYW1lIGFwcFxcbicgKyAnU2VlIGh0dHBzOi8vcmVhY3Rqcy5vcmcvbGluay9pbnZhbGlkLWhvb2stY2FsbCBmb3IgdGlwcyBhYm91dCBob3cgdG8gZGVidWcgYW5kIGZpeCB0aGlzIHByb2JsZW0uJyk7XG4gICAgfVxuICB9IC8vIFdpbGwgcmVzdWx0IGluIGEgbnVsbCBhY2Nlc3MgZXJyb3IgaWYgYWNjZXNzZWQgb3V0c2lkZSByZW5kZXIgcGhhc2UuIFdlXG4gIC8vIGludGVudGlvbmFsbHkgZG9uJ3QgdGhyb3cgb3VyIG93biBlcnJvciBiZWNhdXNlIHRoaXMgaXMgaW4gYSBob3QgcGF0aC5cbiAgLy8gQWxzbyBoZWxwcyBlbnN1cmUgdGhpcyBpcyBpbmxpbmVkLlxuXG5cbiAgcmV0dXJuIGRpc3BhdGNoZXI7XG59XG5mdW5jdGlvbiB1c2VDb250ZXh0KENvbnRleHQpIHtcbiAgdmFyIGRpc3BhdGNoZXIgPSByZXNvbHZlRGlzcGF0Y2hlcigpO1xuXG4gIHtcbiAgICAvLyBUT0RPOiBhZGQgYSBtb3JlIGdlbmVyaWMgd2FybmluZyBmb3IgaW52YWxpZCB2YWx1ZXMuXG4gICAgaWYgKENvbnRleHQuX2NvbnRleHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHJlYWxDb250ZXh0ID0gQ29udGV4dC5fY29udGV4dDsgLy8gRG9uJ3QgZGVkdXBsaWNhdGUgYmVjYXVzZSB0aGlzIGxlZ2l0aW1hdGVseSBjYXVzZXMgYnVnc1xuICAgICAgLy8gYW5kIG5vYm9keSBzaG91bGQgYmUgdXNpbmcgdGhpcyBpbiBleGlzdGluZyBjb2RlLlxuXG4gICAgICBpZiAocmVhbENvbnRleHQuQ29uc3VtZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LkNvbnN1bWVyKSBpcyBub3Qgc3VwcG9ydGVkLCBtYXkgY2F1c2UgYnVncywgYW5kIHdpbGwgYmUgJyArICdyZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuIERpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH0gZWxzZSBpZiAocmVhbENvbnRleHQuUHJvdmlkZXIgPT09IENvbnRleHQpIHtcbiAgICAgICAgZXJyb3IoJ0NhbGxpbmcgdXNlQ29udGV4dChDb250ZXh0LlByb3ZpZGVyKSBpcyBub3Qgc3VwcG9ydGVkLiAnICsgJ0RpZCB5b3UgbWVhbiB0byBjYWxsIHVzZUNvbnRleHQoQ29udGV4dCkgaW5zdGVhZD8nKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGlzcGF0Y2hlci51c2VDb250ZXh0KENvbnRleHQpO1xufVxuZnVuY3Rpb24gdXNlU3RhdGUoaW5pdGlhbFN0YXRlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3RhdGUoaW5pdGlhbFN0YXRlKTtcbn1cbmZ1bmN0aW9uIHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbEFyZywgaW5pdCk7XG59XG5mdW5jdGlvbiB1c2VSZWYoaW5pdGlhbFZhbHVlKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlUmVmKGluaXRpYWxWYWx1ZSk7XG59XG5mdW5jdGlvbiB1c2VFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VJbnNlcnRpb25FZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSW5zZXJ0aW9uRWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VMYXlvdXRFZmZlY3QoY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTGF5b3V0RWZmZWN0KGNyZWF0ZSwgZGVwcyk7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFjayhjYWxsYmFjaywgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUNhbGxiYWNrKGNhbGxiYWNrLCBkZXBzKTtcbn1cbmZ1bmN0aW9uIHVzZU1lbW8oY3JlYXRlLCBkZXBzKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlTWVtbyhjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlSW1wZXJhdGl2ZUhhbmRsZShyZWYsIGNyZWF0ZSwgZGVwcykge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZUltcGVyYXRpdmVIYW5kbGUocmVmLCBjcmVhdGUsIGRlcHMpO1xufVxuZnVuY3Rpb24gdXNlRGVidWdWYWx1ZSh2YWx1ZSwgZm9ybWF0dGVyRm4pIHtcbiAge1xuICAgIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgICByZXR1cm4gZGlzcGF0Y2hlci51c2VEZWJ1Z1ZhbHVlKHZhbHVlLCBmb3JtYXR0ZXJGbik7XG4gIH1cbn1cbmZ1bmN0aW9uIHVzZVRyYW5zaXRpb24oKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlVHJhbnNpdGlvbigpO1xufVxuZnVuY3Rpb24gdXNlRGVmZXJyZWRWYWx1ZSh2YWx1ZSkge1xuICB2YXIgZGlzcGF0Y2hlciA9IHJlc29sdmVEaXNwYXRjaGVyKCk7XG4gIHJldHVybiBkaXNwYXRjaGVyLnVzZURlZmVycmVkVmFsdWUodmFsdWUpO1xufVxuZnVuY3Rpb24gdXNlSWQoKSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlSWQoKTtcbn1cbmZ1bmN0aW9uIHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgZ2V0U25hcHNob3QsIGdldFNlcnZlclNuYXBzaG90KSB7XG4gIHZhciBkaXNwYXRjaGVyID0gcmVzb2x2ZURpc3BhdGNoZXIoKTtcbiAgcmV0dXJuIGRpc3BhdGNoZXIudXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCBnZXRTbmFwc2hvdCwgZ2V0U2VydmVyU25hcHNob3QpO1xufVxuXG4vLyBIZWxwZXJzIHRvIHBhdGNoIGNvbnNvbGUubG9ncyB0byBhdm9pZCBsb2dnaW5nIGR1cmluZyBzaWRlLWVmZmVjdCBmcmVlXG4vLyByZXBsYXlpbmcgb24gcmVuZGVyIGZ1bmN0aW9uLiBUaGlzIGN1cnJlbnRseSBvbmx5IHBhdGNoZXMgdGhlIG9iamVjdFxuLy8gbGF6aWx5IHdoaWNoIHdvbid0IGNvdmVyIGlmIHRoZSBsb2cgZnVuY3Rpb24gd2FzIGV4dHJhY3RlZCBlYWdlcmx5LlxuLy8gV2UgY291bGQgYWxzbyBlYWdlcmx5IHBhdGNoIHRoZSBtZXRob2QuXG52YXIgZGlzYWJsZWREZXB0aCA9IDA7XG52YXIgcHJldkxvZztcbnZhciBwcmV2SW5mbztcbnZhciBwcmV2V2FybjtcbnZhciBwcmV2RXJyb3I7XG52YXIgcHJldkdyb3VwO1xudmFyIHByZXZHcm91cENvbGxhcHNlZDtcbnZhciBwcmV2R3JvdXBFbmQ7XG5cbmZ1bmN0aW9uIGRpc2FibGVkTG9nKCkge31cblxuZGlzYWJsZWRMb2cuX19yZWFjdERpc2FibGVkTG9nID0gdHJ1ZTtcbmZ1bmN0aW9uIGRpc2FibGVMb2dzKCkge1xuICB7XG4gICAgaWYgKGRpc2FibGVkRGVwdGggPT09IDApIHtcbiAgICAgIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0LWludGVybmFsL25vLXByb2R1Y3Rpb24tbG9nZ2luZyAqL1xuICAgICAgcHJldkxvZyA9IGNvbnNvbGUubG9nO1xuICAgICAgcHJldkluZm8gPSBjb25zb2xlLmluZm87XG4gICAgICBwcmV2V2FybiA9IGNvbnNvbGUud2FybjtcbiAgICAgIHByZXZFcnJvciA9IGNvbnNvbGUuZXJyb3I7XG4gICAgICBwcmV2R3JvdXAgPSBjb25zb2xlLmdyb3VwO1xuICAgICAgcHJldkdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZDtcbiAgICAgIHByZXZHcm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQ7IC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMTkwOTlcblxuICAgICAgdmFyIHByb3BzID0ge1xuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiBkaXNhYmxlZExvZyxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgaW5mbzogcHJvcHMsXG4gICAgICAgIGxvZzogcHJvcHMsXG4gICAgICAgIHdhcm46IHByb3BzLFxuICAgICAgICBlcnJvcjogcHJvcHMsXG4gICAgICAgIGdyb3VwOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBDb2xsYXBzZWQ6IHByb3BzLFxuICAgICAgICBncm91cEVuZDogcHJvcHNcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBkaXNhYmxlZERlcHRoKys7XG4gIH1cbn1cbmZ1bmN0aW9uIHJlZW5hYmxlTG9ncygpIHtcbiAge1xuICAgIGRpc2FibGVkRGVwdGgtLTtcblxuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgfTsgLy8gJEZsb3dGaXhNZSBGbG93IHRoaW5rcyBjb25zb2xlIGlzIGltbXV0YWJsZS5cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoY29uc29sZSwge1xuICAgICAgICBsb2c6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkxvZ1xuICAgICAgICB9KSxcbiAgICAgICAgaW5mbzogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2V2FyblxuICAgICAgICB9KSxcbiAgICAgICAgZXJyb3I6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkVycm9yXG4gICAgICAgIH0pLFxuICAgICAgICBncm91cDogYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBhc3NpZ24oe30sIHByb3BzLCB7XG4gICAgICAgICAgdmFsdWU6IHByZXZHcm91cENvbGxhcHNlZFxuICAgICAgICB9KSxcbiAgICAgICAgZ3JvdXBFbmQ6IGFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldkdyb3VwRW5kXG4gICAgICAgIH0pXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgaWYgKGRpc2FibGVkRGVwdGggPCAwKSB7XG4gICAgICBlcnJvcignZGlzYWJsZWREZXB0aCBmZWxsIGJlbG93IHplcm8uICcgKyAnVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG59XG5cbnZhciBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoICFmbiB8fCByZWVudHJ5KSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAge1xuICAgIHZhciBmcmFtZSA9IGNvbXBvbmVudEZyYW1lQ2FjaGUuZ2V0KGZuKTtcblxuICAgIGlmIChmcmFtZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZnJhbWU7XG4gICAgfVxuICB9XG5cbiAgdmFyIGNvbnRyb2w7XG4gIHJlZW50cnkgPSB0cnVlO1xuICB2YXIgcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZSA9IEVycm9yLnByZXBhcmVTdGFja1RyYWNlOyAvLyAkRmxvd0ZpeE1lIEl0IGRvZXMgYWNjZXB0IHVuZGVmaW5lZC5cblxuICBFcnJvci5wcmVwYXJlU3RhY2tUcmFjZSA9IHVuZGVmaW5lZDtcbiAgdmFyIHByZXZpb3VzRGlzcGF0Y2hlcjtcblxuICB7XG4gICAgcHJldmlvdXNEaXNwYXRjaGVyID0gUmVhY3RDdXJyZW50RGlzcGF0Y2hlciQxLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIkMS5jdXJyZW50ID0gbnVsbDtcbiAgICBkaXNhYmxlTG9ncygpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHNob3VsZCB0aHJvdy5cbiAgICBpZiAoY29uc3RydWN0KSB7XG4gICAgICAvLyBTb21ldGhpbmcgc2hvdWxkIGJlIHNldHRpbmcgdGhlIHByb3BzIGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgIHZhciBGYWtlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfTsgLy8gJEZsb3dGaXhNZVxuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShGYWtlLnByb3RvdHlwZSwgJ3Byb3BzJywge1xuICAgICAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBXZSB1c2UgYSB0aHJvd2luZyBzZXR0ZXIgaW5zdGVhZCBvZiBmcm96ZW4gb3Igbm9uLXdyaXRhYmxlIHByb3BzXG4gICAgICAgICAgLy8gYmVjYXVzZSB0aGF0IHdvbid0IHRocm93IGluIGEgbm9uLXN0cmljdCBtb2RlIGZ1bmN0aW9uLlxuICAgICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnICYmIFJlZmxlY3QuY29uc3RydWN0KSB7XG4gICAgICAgIC8vIFdlIGNvbnN0cnVjdCBhIGRpZmZlcmVudCBjb250cm9sIGZvciB0aGlzIGNhc2UgdG8gaW5jbHVkZSBhbnkgZXh0cmFcbiAgICAgICAgLy8gZnJhbWVzIGFkZGVkIGJ5IHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChGYWtlLCBbXSk7XG4gICAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgICBjb250cm9sID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIFJlZmxlY3QuY29uc3RydWN0KGZuLCBbXSwgRmFrZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIEZha2UuY2FsbCgpO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBmbi5jYWxsKEZha2UucHJvdG90eXBlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH0gY2F0Y2ggKHgpIHtcbiAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICB9XG5cbiAgICAgIGZuKCk7XG4gICAgfVxuICB9IGNhdGNoIChzYW1wbGUpIHtcbiAgICAvLyBUaGlzIGlzIGlubGluZWQgbWFudWFsbHkgYmVjYXVzZSBjbG9zdXJlIGRvZXNuJ3QgZG8gaXQgZm9yIHVzLlxuICAgIGlmIChzYW1wbGUgJiYgY29udHJvbCAmJiB0eXBlb2Ygc2FtcGxlLnN0YWNrID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gVGhpcyBleHRyYWN0cyB0aGUgZmlyc3QgZnJhbWUgZnJvbSB0aGUgc2FtcGxlIHRoYXQgaXNuJ3QgYWxzbyBpbiB0aGUgY29udHJvbC5cbiAgICAgIC8vIFNraXBwaW5nIG9uZSBmcmFtZSB0aGF0IHdlIGFzc3VtZSBpcyB0aGUgZnJhbWUgdGhhdCBjYWxscyB0aGUgdHdvLlxuICAgICAgdmFyIHNhbXBsZUxpbmVzID0gc2FtcGxlLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBjb250cm9sTGluZXMgPSBjb250cm9sLnN0YWNrLnNwbGl0KCdcXG4nKTtcbiAgICAgIHZhciBzID0gc2FtcGxlTGluZXMubGVuZ3RoIC0gMTtcbiAgICAgIHZhciBjID0gY29udHJvbExpbmVzLmxlbmd0aCAtIDE7XG5cbiAgICAgIHdoaWxlIChzID49IDEgJiYgYyA+PSAwICYmIHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgLy8gV2UgZXhwZWN0IGF0IGxlYXN0IG9uZSBzdGFjayBmcmFtZSB0byBiZSBzaGFyZWQuXG4gICAgICAgIC8vIFR5cGljYWxseSB0aGlzIHdpbGwgYmUgdGhlIHJvb3QgbW9zdCBvbmUuIEhvd2V2ZXIsIHN0YWNrIGZyYW1lcyBtYXkgYmVcbiAgICAgICAgLy8gY3V0IG9mZiBkdWUgdG8gbWF4aW11bSBzdGFjayBsaW1pdHMuIEluIHRoaXMgY2FzZSwgb25lIG1heWJlIGN1dCBvZmZcbiAgICAgICAgLy8gZWFybGllciB0aGFuIHRoZSBvdGhlci4gV2UgYXNzdW1lIHRoYXQgdGhlIHNhbXBsZSBpcyBsb25nZXIgb3IgdGhlIHNhbWVcbiAgICAgICAgLy8gYW5kIHRoZXJlIGZvciBjdXQgb2ZmIGVhcmxpZXIuIFNvIHdlIHNob3VsZCBmaW5kIHRoZSByb290IG1vc3QgZnJhbWUgaW5cbiAgICAgICAgLy8gdGhlIHNhbXBsZSBzb21ld2hlcmUgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgIGMtLTtcbiAgICAgIH1cblxuICAgICAgZm9yICg7IHMgPj0gMSAmJiBjID49IDA7IHMtLSwgYy0tKSB7XG4gICAgICAgIC8vIE5leHQgd2UgZmluZCB0aGUgZmlyc3Qgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgd2hpY2ggc2hvdWxkIGJlIHRoZVxuICAgICAgICAvLyBmcmFtZSB0aGF0IGNhbGxlZCBvdXIgc2FtcGxlIGZ1bmN0aW9uIGFuZCB0aGUgY29udHJvbC5cbiAgICAgICAgaWYgKHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAvLyBJbiBWOCwgdGhlIGZpcnN0IGxpbmUgaXMgZGVzY3JpYmluZyB0aGUgbWVzc2FnZSBidXQgb3RoZXIgVk1zIGRvbid0LlxuICAgICAgICAgIC8vIElmIHdlJ3JlIGFib3V0IHRvIHJldHVybiB0aGUgZmlyc3QgbGluZSwgYW5kIHRoZSBjb250cm9sIGlzIGFsc28gb24gdGhlIHNhbWVcbiAgICAgICAgICAvLyBsaW5lLCB0aGF0J3MgYSBwcmV0dHkgZ29vZCBpbmRpY2F0b3IgdGhhdCBvdXIgc2FtcGxlIHRocmV3IGF0IHNhbWUgbGluZSBhc1xuICAgICAgICAgIC8vIHRoZSBjb250cm9sLiBJLmUuIGJlZm9yZSB3ZSBlbnRlcmVkIHRoZSBzYW1wbGUgZnJhbWUuIFNvIHdlIGlnbm9yZSB0aGlzIHJlc3VsdC5cbiAgICAgICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gaWYgeW91IHBhc3NlZCBhIGNsYXNzIHRvIGZ1bmN0aW9uIGNvbXBvbmVudCwgb3Igbm9uLWZ1bmN0aW9uLlxuICAgICAgICAgIGlmIChzICE9PSAxIHx8IGMgIT09IDEpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgcy0tO1xuICAgICAgICAgICAgICBjLS07IC8vIFdlIG1heSBzdGlsbCBoYXZlIHNpbWlsYXIgaW50ZXJtZWRpYXRlIGZyYW1lcyBmcm9tIHRoZSBjb25zdHJ1Y3QgY2FsbC5cbiAgICAgICAgICAgICAgLy8gVGhlIG5leHQgb25lIHRoYXQgaXNuJ3QgdGhlIHNhbWUgc2hvdWxkIGJlIG91ciBtYXRjaCB0aG91Z2guXG5cbiAgICAgICAgICAgICAgaWYgKGMgPCAwIHx8IHNhbXBsZUxpbmVzW3NdICE9PSBjb250cm9sTGluZXNbY10pIHtcbiAgICAgICAgICAgICAgICAvLyBWOCBhZGRzIGEgXCJuZXdcIiBwcmVmaXggZm9yIG5hdGl2ZSBjbGFzc2VzLiBMZXQncyByZW1vdmUgaXQgdG8gbWFrZSBpdCBwcmV0dGllci5cbiAgICAgICAgICAgICAgICB2YXIgX2ZyYW1lID0gJ1xcbicgKyBzYW1wbGVMaW5lc1tzXS5yZXBsYWNlKCcgYXQgbmV3ICcsICcgYXQgJyk7IC8vIElmIG91ciBjb21wb25lbnQgZnJhbWUgaXMgbGFiZWxlZCBcIjxhbm9ueW1vdXM+XCJcbiAgICAgICAgICAgICAgICAvLyBidXQgd2UgaGF2ZSBhIHVzZXItcHJvdmlkZWQgXCJkaXNwbGF5TmFtZVwiXG4gICAgICAgICAgICAgICAgLy8gc3BsaWNlIGl0IGluIHRvIG1ha2UgdGhlIHN0YWNrIG1vcmUgcmVhZGFibGUuXG5cblxuICAgICAgICAgICAgICAgIGlmIChmbi5kaXNwbGF5TmFtZSAmJiBfZnJhbWUuaW5jbHVkZXMoJzxhbm9ueW1vdXM+JykpIHtcbiAgICAgICAgICAgICAgICAgIF9mcmFtZSA9IF9mcmFtZS5yZXBsYWNlKCc8YW5vbnltb3VzPicsIGZuLmRpc3BsYXlOYW1lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudEZyYW1lQ2FjaGUuc2V0KGZuLCBfZnJhbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gLy8gUmV0dXJuIHRoZSBsaW5lIHdlIGZvdW5kLlxuXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gX2ZyYW1lO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IHdoaWxlIChzID49IDEgJiYgYyA+PSAwKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICByZWVudHJ5ID0gZmFsc2U7XG5cbiAgICB7XG4gICAgICBSZWFjdEN1cnJlbnREaXNwYXRjaGVyJDEuY3VycmVudCA9IHByZXZpb3VzRGlzcGF0Y2hlcjtcbiAgICAgIHJlZW5hYmxlTG9ncygpO1xuICAgIH1cblxuICAgIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gcHJldmlvdXNQcmVwYXJlU3RhY2tUcmFjZTtcbiAgfSAvLyBGYWxsYmFjayB0byBqdXN0IHVzaW5nIHRoZSBuYW1lIGlmIHdlIGNvdWxkbid0IG1ha2UgaXQgdGhyb3cuXG5cblxuICB2YXIgbmFtZSA9IGZuID8gZm4uZGlzcGxheU5hbWUgfHwgZm4ubmFtZSA6ICcnO1xuICB2YXIgc3ludGhldGljRnJhbWUgPSBuYW1lID8gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUobmFtZSkgOiAnJztcblxuICB7XG4gICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29tcG9uZW50RnJhbWVDYWNoZS5zZXQoZm4sIHN5bnRoZXRpY0ZyYW1lKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3ludGhldGljRnJhbWU7XG59XG5mdW5jdGlvbiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUoZm4sIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgcmV0dXJuIGRlc2NyaWJlTmF0aXZlQ29tcG9uZW50RnJhbWUoZm4sIGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG91bGRDb25zdHJ1Y3QoQ29tcG9uZW50KSB7XG4gIHZhciBwcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuICByZXR1cm4gISEocHJvdG90eXBlICYmIHByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50KTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUsIHNvdXJjZSwgb3duZXJGbikge1xuXG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICB7XG4gICAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZSh0eXBlLCBzaG91bGRDb25zdHJ1Y3QodHlwZSkpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUodHlwZSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gZGVzY3JpYmVCdWlsdEluQ29tcG9uZW50RnJhbWUoJ1N1c3BlbnNlJyk7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2VMaXN0Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgc3dpdGNoICh0eXBlLiQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBkZXNjcmliZUZ1bmN0aW9uQ29tcG9uZW50RnJhbWUodHlwZS5yZW5kZXIpO1xuXG4gICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgLy8gTWVtbyBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVih0eXBlLnR5cGUsIHNvdXJjZSwgb3duZXJGbik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcblxuZnVuY3Rpb24gc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUkMS5zZXRFeHRyYVN0YWNrRnJhbWUoc3RhY2spO1xuICAgIH0gZWxzZSB7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKGhhc093blByb3BlcnR5KTtcblxuICAgIGZvciAodmFyIHR5cGVTcGVjTmFtZSBpbiB0eXBlU3BlY3MpIHtcbiAgICAgIGlmIChoYXModHlwZVNwZWNzLCB0eXBlU3BlY05hbWUpKSB7XG4gICAgICAgIHZhciBlcnJvciQxID0gdm9pZCAwOyAvLyBQcm9wIHR5cGUgdmFsaWRhdGlvbiBtYXkgdGhyb3cuIEluIGNhc2UgdGhleSBkbywgd2UgZG9uJ3Qgd2FudCB0b1xuICAgICAgICAvLyBmYWlsIHRoZSByZW5kZXIgcGhhc2Ugd2hlcmUgaXQgZGlkbid0IGZhaWwgYmVmb3JlLiBTbyB3ZSBsb2cgaXQuXG4gICAgICAgIC8vIEFmdGVyIHRoZXNlIGhhdmUgYmVlbiBjbGVhbmVkIHVwLCB3ZSdsbCBsZXQgdGhlbSB0aHJvdy5cblxuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgaXMgaW50ZW50aW9uYWxseSBhbiBpbnZhcmlhbnQgdGhhdCBnZXRzIGNhdWdodC4gSXQncyB0aGUgc2FtZVxuICAgICAgICAgIC8vIGJlaGF2aW9yIGFzIHdpdGhvdXQgdGhpcyBzdGF0ZW1lbnQgZXhjZXB0IHdpdGggYSBiZXR0ZXIgbWVzc2FnZS5cbiAgICAgICAgICBpZiAodHlwZW9mIHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaW50ZXJuYWwvcHJvZC1lcnJvci1jb2Rlc1xuICAgICAgICAgICAgdmFyIGVyciA9IEVycm9yKChjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycpICsgJzogJyArIGxvY2F0aW9uICsgJyB0eXBlIGAnICsgdHlwZVNwZWNOYW1lICsgJ2AgaXMgaW52YWxpZDsgJyArICdpdCBtdXN0IGJlIGEgZnVuY3Rpb24sIHVzdWFsbHkgZnJvbSB0aGUgYHByb3AtdHlwZXNgIHBhY2thZ2UsIGJ1dCByZWNlaXZlZCBgJyArIHR5cGVvZiB0eXBlU3BlY3NbdHlwZVNwZWNOYW1lXSArICdgLicgKyAnVGhpcyBvZnRlbiBoYXBwZW5zIGJlY2F1c2Ugb2YgdHlwb3Mgc3VjaCBhcyBgUHJvcFR5cGVzLmZ1bmN0aW9uYCBpbnN0ZWFkIG9mIGBQcm9wVHlwZXMuZnVuY2AuJyk7XG4gICAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICAgIHRocm93IGVycjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBlcnJvciQxID0gdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0odmFsdWVzLCB0eXBlU3BlY05hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBudWxsLCAnU0VDUkVUX0RPX05PVF9QQVNTX1RISVNfT1JfWU9VX1dJTExfQkVfRklSRUQnKTtcbiAgICAgICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgICAgICBlcnJvciQxID0gZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSAmJiAhKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCclczogdHlwZSBzcGVjaWZpY2F0aW9uIG9mICVzJyArICcgYCVzYCBpcyBpbnZhbGlkOyB0aGUgdHlwZSBjaGVja2VyICcgKyAnZnVuY3Rpb24gbXVzdCByZXR1cm4gYG51bGxgIG9yIGFuIGBFcnJvcmAgYnV0IHJldHVybmVkIGEgJXMuICcgKyAnWW91IG1heSBoYXZlIGZvcmdvdHRlbiB0byBwYXNzIGFuIGFyZ3VtZW50IHRvIHRoZSB0eXBlIGNoZWNrZXIgJyArICdjcmVhdG9yIChhcnJheU9mLCBpbnN0YW5jZU9mLCBvYmplY3RPZiwgb25lT2YsIG9uZU9mVHlwZSwgYW5kICcgKyAnc2hhcGUgYWxsIHJlcXVpcmUgYW4gYXJndW1lbnQpLicsIGNvbXBvbmVudE5hbWUgfHwgJ1JlYWN0IGNsYXNzJywgbG9jYXRpb24sIHR5cGVTcGVjTmFtZSwgdHlwZW9mIGVycm9yJDEpO1xuXG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQobnVsbCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyb3IkMSBpbnN0YW5jZW9mIEVycm9yICYmICEoZXJyb3IkMS5tZXNzYWdlIGluIGxvZ2dlZFR5cGVGYWlsdXJlcykpIHtcbiAgICAgICAgICAvLyBPbmx5IG1vbml0b3IgdGhpcyBmYWlsdXJlIG9uY2UgYmVjYXVzZSB0aGVyZSB0ZW5kcyB0byBiZSBhIGxvdCBvZiB0aGVcbiAgICAgICAgICAvLyBzYW1lIGVycm9yLlxuICAgICAgICAgIGxvZ2dlZFR5cGVGYWlsdXJlc1tlcnJvciQxLm1lc3NhZ2VdID0gdHJ1ZTtcbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChlbGVtZW50KTtcblxuICAgICAgICAgIGVycm9yKCdGYWlsZWQgJXMgdHlwZTogJXMnLCBsb2NhdGlvbiwgZXJyb3IkMS5tZXNzYWdlKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCkge1xuICB7XG4gICAgaWYgKGVsZW1lbnQpIHtcbiAgICAgIHZhciBvd25lciA9IGVsZW1lbnQuX293bmVyO1xuICAgICAgdmFyIHN0YWNrID0gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKGVsZW1lbnQudHlwZSwgZWxlbWVudC5fc291cmNlLCBvd25lciA/IG93bmVyLnR5cGUgOiBudWxsKTtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpIHtcbiAgaWYgKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQpIHtcbiAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnR5cGUpO1xuXG4gICAgaWYgKG5hbWUpIHtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgdGhlIHJlbmRlciBtZXRob2Qgb2YgYCcgKyBuYW1lICsgJ2AuJztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICBpZiAoc291cmNlICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgIHZhciBsaW5lTnVtYmVyID0gc291cmNlLmxpbmVOdW1iZXI7XG4gICAgcmV0dXJuICdcXG5cXG5DaGVjayB5b3VyIGNvZGUgYXQgJyArIGZpbGVOYW1lICsgJzonICsgbGluZU51bWJlciArICcuJztcbiAgfVxuXG4gIHJldHVybiAnJztcbn1cblxuZnVuY3Rpb24gZ2V0U291cmNlSW5mb0Vycm9yQWRkZW5kdW1Gb3JQcm9wcyhlbGVtZW50UHJvcHMpIHtcbiAgaWYgKGVsZW1lbnRQcm9wcyAhPT0gbnVsbCAmJiBlbGVtZW50UHJvcHMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBnZXRTb3VyY2VJbmZvRXJyb3JBZGRlbmR1bShlbGVtZW50UHJvcHMuX19zb3VyY2UpO1xuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuLyoqXG4gKiBXYXJuIGlmIHRoZXJlJ3Mgbm8ga2V5IGV4cGxpY2l0bHkgc2V0IG9uIGR5bmFtaWMgYXJyYXlzIG9mIGNoaWxkcmVuIG9yXG4gKiBvYmplY3Qga2V5cyBhcmUgbm90IHZhbGlkLiBUaGlzIGFsbG93cyB1cyB0byBrZWVwIHRyYWNrIG9mIGNoaWxkcmVuIGJldHdlZW5cbiAqIHVwZGF0ZXMuXG4gKi9cblxuXG52YXIgb3duZXJIYXNLZXlVc2VXYXJuaW5nID0ge307XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSkge1xuICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gIGlmICghaW5mbykge1xuICAgIHZhciBwYXJlbnROYW1lID0gdHlwZW9mIHBhcmVudFR5cGUgPT09ICdzdHJpbmcnID8gcGFyZW50VHlwZSA6IHBhcmVudFR5cGUuZGlzcGxheU5hbWUgfHwgcGFyZW50VHlwZS5uYW1lO1xuXG4gICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgIGluZm8gPSBcIlxcblxcbkNoZWNrIHRoZSB0b3AtbGV2ZWwgcmVuZGVyIGNhbGwgdXNpbmcgPFwiICsgcGFyZW50TmFtZSArIFwiPi5cIjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gaW5mbztcbn1cbi8qKlxuICogV2FybiBpZiB0aGUgZWxlbWVudCBkb2Vzbid0IGhhdmUgYW4gZXhwbGljaXQga2V5IGFzc2lnbmVkIHRvIGl0LlxuICogVGhpcyBlbGVtZW50IGlzIGluIGFuIGFycmF5LiBUaGUgYXJyYXkgY291bGQgZ3JvdyBhbmQgc2hyaW5rIG9yIGJlXG4gKiByZW9yZGVyZWQuIEFsbCBjaGlsZHJlbiB0aGF0IGhhdmVuJ3QgYWxyZWFkeSBiZWVuIHZhbGlkYXRlZCBhcmUgcmVxdWlyZWQgdG9cbiAqIGhhdmUgYSBcImtleVwiIHByb3BlcnR5IGFzc2lnbmVkIHRvIGl0LiBFcnJvciBzdGF0dXNlcyBhcmUgY2FjaGVkIHNvIGEgd2FybmluZ1xuICogd2lsbCBvbmx5IGJlIHNob3duIG9uY2UuXG4gKlxuICogQGludGVybmFsXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudCBFbGVtZW50IHRoYXQgcmVxdWlyZXMgYSBrZXkuXG4gKiBAcGFyYW0geyp9IHBhcmVudFR5cGUgZWxlbWVudCdzIHBhcmVudCdzIHR5cGUuXG4gKi9cblxuXG5mdW5jdGlvbiB2YWxpZGF0ZUV4cGxpY2l0S2V5KGVsZW1lbnQsIHBhcmVudFR5cGUpIHtcbiAgaWYgKCFlbGVtZW50Ll9zdG9yZSB8fCBlbGVtZW50Ll9zdG9yZS52YWxpZGF0ZWQgfHwgZWxlbWVudC5rZXkgIT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gIHZhciBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvID0gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKTtcblxuICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgLy8gcHJvcGVydHksIGl0IG1heSBiZSB0aGUgY3JlYXRvciBvZiB0aGUgY2hpbGQgdGhhdCdzIHJlc3BvbnNpYmxlIGZvclxuICAvLyBhc3NpZ25pbmcgaXQgYSBrZXkuXG5cbiAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICBpZiAoZWxlbWVudCAmJiBlbGVtZW50Ll9vd25lciAmJiBlbGVtZW50Ll9vd25lciAhPT0gUmVhY3RDdXJyZW50T3duZXIuY3VycmVudCkge1xuICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgIGNoaWxkT3duZXIgPSBcIiBJdCB3YXMgcGFzc2VkIGEgY2hpbGQgZnJvbSBcIiArIGdldENvbXBvbmVudE5hbWVGcm9tVHlwZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICB9XG5cbiAge1xuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICBpZiAodHlwZW9mIG5vZGUgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGlzQXJyYXkobm9kZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBjaGlsZCA9IG5vZGVbaV07XG5cbiAgICAgIGlmIChpc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgLy8gVGhpcyBlbGVtZW50IHdhcyBwYXNzZWQgaW4gYSB2YWxpZCBsb2NhdGlvbi5cbiAgICBpZiAobm9kZS5fc3RvcmUpIHtcbiAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5vZGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICBpZiAodHlwZW9mIGl0ZXJhdG9yRm4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEVudHJ5IGl0ZXJhdG9ycyB1c2VkIHRvIHByb3ZpZGUgaW1wbGljaXQga2V5cyxcbiAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgaWYgKGl0ZXJhdG9yRm4gIT09IG5vZGUuZW50cmllcykge1xuICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwobm9kZSk7XG4gICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuICAgICAgY2hlY2tQcm9wVHlwZXMocHJvcFR5cGVzLCBlbGVtZW50LnByb3BzLCAncHJvcCcsIG5hbWUsIGVsZW1lbnQpO1xuICAgIH0gZWxzZSBpZiAodHlwZS5Qcm9wVHlwZXMgIT09IHVuZGVmaW5lZCAmJiAhcHJvcFR5cGVzTWlzc3BlbGxXYXJuaW5nU2hvd24pIHtcbiAgICAgIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gdHJ1ZTsgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcblxuICAgICAgdmFyIF9uYW1lID0gZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUpO1xuXG4gICAgICBlcnJvcignQ29tcG9uZW50ICVzIGRlY2xhcmVkIGBQcm9wVHlwZXNgIGluc3RlYWQgb2YgYHByb3BUeXBlc2AuIERpZCB5b3UgbWlzc3BlbGwgdGhlIHByb3BlcnR5IGFzc2lnbm1lbnQ/JywgX25hbWUgfHwgJ1Vua25vd24nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHR5cGUuZ2V0RGVmYXVsdFByb3BzID09PSAnZnVuY3Rpb24nICYmICF0eXBlLmdldERlZmF1bHRQcm9wcy5pc1JlYWN0Q2xhc3NBcHByb3ZlZCkge1xuICAgICAgZXJyb3IoJ2dldERlZmF1bHRQcm9wcyBpcyBvbmx5IHVzZWQgb24gY2xhc3NpYyBSZWFjdC5jcmVhdGVDbGFzcyAnICsgJ2RlZmluaXRpb25zLiBVc2UgYSBzdGF0aWMgcHJvcGVydHkgbmFtZWQgYGRlZmF1bHRQcm9wc2AgaW5zdGVhZC4nKTtcbiAgICB9XG4gIH1cbn1cbi8qKlxuICogR2l2ZW4gYSBmcmFnbWVudCwgdmFsaWRhdGUgdGhhdCBpdCBjYW4gb25seSBiZSBwcm92aWRlZCB3aXRoIGZyYWdtZW50IHByb3BzXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZnJhZ21lbnRcbiAqL1xuXG5cbmZ1bmN0aW9uIHZhbGlkYXRlRnJhZ21lbnRQcm9wcyhmcmFnbWVudCkge1xuICB7XG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhmcmFnbWVudC5wcm9wcyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoa2V5ICE9PSAnY2hpbGRyZW4nICYmIGtleSAhPT0gJ2tleScpIHtcbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgICAgZXJyb3IoJ0ludmFsaWQgcHJvcCBgJXNgIHN1cHBsaWVkIHRvIGBSZWFjdC5GcmFnbWVudGAuICcgKyAnUmVhY3QuRnJhZ21lbnQgY2FuIG9ubHkgaGF2ZSBga2V5YCBhbmQgYGNoaWxkcmVuYCBwcm9wcy4nLCBrZXkpO1xuXG4gICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChmcmFnbWVudC5yZWYgIT09IG51bGwpIHtcbiAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZnJhZ21lbnQpO1xuXG4gICAgICBlcnJvcignSW52YWxpZCBhdHRyaWJ1dGUgYHJlZmAgc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4nKTtcblxuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICB9XG4gIH1cbn1cbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgdmFyIHZhbGlkVHlwZSA9IGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKTsgLy8gV2Ugd2FybiBpbiB0aGlzIGNhc2UgYnV0IGRvbid0IHRocm93LiBXZSBleHBlY3QgdGhlIGVsZW1lbnQgY3JlYXRpb24gdG9cbiAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICBpZiAoIXZhbGlkVHlwZSkge1xuICAgIHZhciBpbmZvID0gJyc7XG5cbiAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgaW5mbyArPSAnIFlvdSBsaWtlbHkgZm9yZ290IHRvIGV4cG9ydCB5b3VyIGNvbXBvbmVudCBmcm9tIHRoZSBmaWxlICcgKyBcIml0J3MgZGVmaW5lZCBpbiwgb3IgeW91IG1pZ2h0IGhhdmUgbWl4ZWQgdXAgZGVmYXVsdCBhbmQgbmFtZWQgaW1wb3J0cy5cIjtcbiAgICB9XG5cbiAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtRm9yUHJvcHMocHJvcHMpO1xuXG4gICAgaWYgKHNvdXJjZUluZm8pIHtcbiAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICB9IGVsc2Uge1xuICAgICAgaW5mbyArPSBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKTtcbiAgICB9XG5cbiAgICB2YXIgdHlwZVN0cmluZztcblxuICAgIGlmICh0eXBlID09PSBudWxsKSB7XG4gICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheSh0eXBlKSkge1xuICAgICAgdHlwZVN0cmluZyA9ICdhcnJheSc7XG4gICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICB0eXBlU3RyaW5nID0gXCI8XCIgKyAoZ2V0Q29tcG9uZW50TmFtZUZyb21UeXBlKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICBpbmZvID0gJyBEaWQgeW91IGFjY2lkZW50YWxseSBleHBvcnQgYSBKU1ggbGl0ZXJhbCBpbnN0ZWFkIG9mIGEgY29tcG9uZW50Pyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICB9XG5cbiAgICB7XG4gICAgICBlcnJvcignUmVhY3QuY3JlYXRlRWxlbWVudDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG4gIH1cblxuICB2YXIgZWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTsgLy8gVGhlIHJlc3VsdCBjYW4gYmUgbnVsbGlzaCBpZiBhIG1vY2sgb3IgYSBjdXN0b20gZnVuY3Rpb24gaXMgdXNlZC5cbiAgLy8gVE9ETzogRHJvcCB0aGlzIHdoZW4gdGhlc2UgYXJlIG5vIGxvbmdlciBhbGxvd2VkIGFzIHRoZSB0eXBlIGFyZ3VtZW50LlxuXG4gIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfSAvLyBTa2lwIGtleSB3YXJuaW5nIGlmIHRoZSB0eXBlIGlzbid0IHZhbGlkIHNpbmNlIG91ciBrZXkgdmFsaWRhdGlvbiBsb2dpY1xuICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gIC8vIFdlIGRvbid0IHdhbnQgZXhjZXB0aW9uIGJlaGF2aW9yIHRvIGRpZmZlciBiZXR3ZWVuIGRldiBhbmQgcHJvZC5cbiAgLy8gKFJlbmRlcmluZyB3aWxsIHRocm93IHdpdGggYSBoZWxwZnVsIG1lc3NhZ2UgYW5kIGFzIHNvb24gYXMgdGhlIHR5cGUgaXNcbiAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgaWYgKHZhbGlkVHlwZSkge1xuICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YWxpZGF0ZUNoaWxkS2V5cyhhcmd1bWVudHNbaV0sIHR5cGUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlID09PSBSRUFDVF9GUkFHTUVOVF9UWVBFKSB7XG4gICAgdmFsaWRhdGVGcmFnbWVudFByb3BzKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG52YXIgZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkgPSBmYWxzZTtcbmZ1bmN0aW9uIGNyZWF0ZUZhY3RvcnlXaXRoVmFsaWRhdGlvbih0eXBlKSB7XG4gIHZhciB2YWxpZGF0ZWRGYWN0b3J5ID0gY3JlYXRlRWxlbWVudFdpdGhWYWxpZGF0aW9uLmJpbmQobnVsbCwgdHlwZSk7XG4gIHZhbGlkYXRlZEZhY3RvcnkudHlwZSA9IHR5cGU7XG5cbiAge1xuICAgIGlmICghZGlkV2FybkFib3V0RGVwcmVjYXRlZENyZWF0ZUZhY3RvcnkpIHtcbiAgICAgIGRpZFdhcm5BYm91dERlcHJlY2F0ZWRDcmVhdGVGYWN0b3J5ID0gdHJ1ZTtcblxuICAgICAgd2FybignUmVhY3QuY3JlYXRlRmFjdG9yeSgpIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiAnICsgJ2EgZnV0dXJlIG1ham9yIHJlbGVhc2UuIENvbnNpZGVyIHVzaW5nIEpTWCAnICsgJ29yIHVzZSBSZWFjdC5jcmVhdGVFbGVtZW50KCkgZGlyZWN0bHkgaW5zdGVhZC4nKTtcbiAgICB9IC8vIExlZ2FjeSBob29rOiByZW1vdmUgaXRcblxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHZhbGlkYXRlZEZhY3RvcnksICd0eXBlJywge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2FybignRmFjdG9yeS50eXBlIGlzIGRlcHJlY2F0ZWQuIEFjY2VzcyB0aGUgY2xhc3MgZGlyZWN0bHkgJyArICdiZWZvcmUgcGFzc2luZyBpdCB0byBjcmVhdGVGYWN0b3J5LicpO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAndHlwZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHlwZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsaWRhdGVkRmFjdG9yeTtcbn1cbmZ1bmN0aW9uIGNsb25lRWxlbWVudFdpdGhWYWxpZGF0aW9uKGVsZW1lbnQsIHByb3BzLCBjaGlsZHJlbikge1xuICB2YXIgbmV3RWxlbWVudCA9IGNsb25lRWxlbWVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXG4gIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFsaWRhdGVDaGlsZEtleXMoYXJndW1lbnRzW2ldLCBuZXdFbGVtZW50LnR5cGUpO1xuICB9XG5cbiAgdmFsaWRhdGVQcm9wVHlwZXMobmV3RWxlbWVudCk7XG4gIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBzdGFydFRyYW5zaXRpb24oc2NvcGUsIG9wdGlvbnMpIHtcbiAgdmFyIHByZXZUcmFuc2l0aW9uID0gUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbjtcbiAgUmVhY3RDdXJyZW50QmF0Y2hDb25maWcudHJhbnNpdGlvbiA9IHt9O1xuICB2YXIgY3VycmVudFRyYW5zaXRpb24gPSBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uO1xuXG4gIHtcbiAgICBSZWFjdEN1cnJlbnRCYXRjaENvbmZpZy50cmFuc2l0aW9uLl91cGRhdGVkRmliZXJzID0gbmV3IFNldCgpO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBzY29wZSgpO1xuICB9IGZpbmFsbHkge1xuICAgIFJlYWN0Q3VycmVudEJhdGNoQ29uZmlnLnRyYW5zaXRpb24gPSBwcmV2VHJhbnNpdGlvbjtcblxuICAgIHtcbiAgICAgIGlmIChwcmV2VHJhbnNpdGlvbiA9PT0gbnVsbCAmJiBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycykge1xuICAgICAgICB2YXIgdXBkYXRlZEZpYmVyc0NvdW50ID0gY3VycmVudFRyYW5zaXRpb24uX3VwZGF0ZWRGaWJlcnMuc2l6ZTtcblxuICAgICAgICBpZiAodXBkYXRlZEZpYmVyc0NvdW50ID4gMTApIHtcbiAgICAgICAgICB3YXJuKCdEZXRlY3RlZCBhIGxhcmdlIG51bWJlciBvZiB1cGRhdGVzIGluc2lkZSBzdGFydFRyYW5zaXRpb24uICcgKyAnSWYgdGhpcyBpcyBkdWUgdG8gYSBzdWJzY3JpcHRpb24gcGxlYXNlIHJlLXdyaXRlIGl0IHRvIHVzZSBSZWFjdCBwcm92aWRlZCBob29rcy4gJyArICdPdGhlcndpc2UgY29uY3VycmVudCBtb2RlIGd1YXJhbnRlZXMgYXJlIG9mZiB0aGUgdGFibGUuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50VHJhbnNpdGlvbi5fdXBkYXRlZEZpYmVycy5jbGVhcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPSBmYWxzZTtcbnZhciBlbnF1ZXVlVGFza0ltcGwgPSBudWxsO1xuZnVuY3Rpb24gZW5xdWV1ZVRhc2sodGFzaykge1xuICBpZiAoZW5xdWV1ZVRhc2tJbXBsID09PSBudWxsKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHJlYWQgcmVxdWlyZSBvZmYgdGhlIG1vZHVsZSBvYmplY3QgdG8gZ2V0IGFyb3VuZCB0aGUgYnVuZGxlcnMuXG4gICAgICAvLyB3ZSBkb24ndCB3YW50IHRoZW0gdG8gZGV0ZWN0IGEgcmVxdWlyZSBhbmQgYnVuZGxlIGEgTm9kZSBwb2x5ZmlsbC5cbiAgICAgIHZhciByZXF1aXJlU3RyaW5nID0gKCdyZXF1aXJlJyArIE1hdGgucmFuZG9tKCkpLnNsaWNlKDAsIDcpO1xuICAgICAgdmFyIG5vZGVSZXF1aXJlID0gbW9kdWxlICYmIG1vZHVsZVtyZXF1aXJlU3RyaW5nXTsgLy8gYXNzdW1pbmcgd2UncmUgaW4gbm9kZSwgbGV0J3MgdHJ5IHRvIGdldCBub2RlJ3NcbiAgICAgIC8vIHZlcnNpb24gb2Ygc2V0SW1tZWRpYXRlLCBieXBhc3NpbmcgZmFrZSB0aW1lcnMgaWYgYW55LlxuXG4gICAgICBlbnF1ZXVlVGFza0ltcGwgPSBub2RlUmVxdWlyZS5jYWxsKG1vZHVsZSwgJ3RpbWVycycpLnNldEltbWVkaWF0ZTtcbiAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAvLyB3ZSdyZSBpbiBhIGJyb3dzZXJcbiAgICAgIC8vIHdlIGNhbid0IHVzZSByZWd1bGFyIHRpbWVycyBiZWNhdXNlIHRoZXkgbWF5IHN0aWxsIGJlIGZha2VkXG4gICAgICAvLyBzbyB3ZSB0cnkgTWVzc2FnZUNoYW5uZWwrcG9zdE1lc3NhZ2UgaW5zdGVhZFxuICAgICAgZW5xdWV1ZVRhc2tJbXBsID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoZGlkV2FybkFib3V0TWVzc2FnZUNoYW5uZWwgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBkaWRXYXJuQWJvdXRNZXNzYWdlQ2hhbm5lbCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgIGVycm9yKCdUaGlzIGJyb3dzZXIgZG9lcyBub3QgaGF2ZSBhIE1lc3NhZ2VDaGFubmVsIGltcGxlbWVudGF0aW9uLCAnICsgJ3NvIGVucXVldWluZyB0YXNrcyB2aWEgYXdhaXQgYWN0KGFzeW5jICgpID0+IC4uLikgd2lsbCBmYWlsLiAnICsgJ1BsZWFzZSBmaWxlIGFuIGlzc3VlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMgJyArICdpZiB5b3UgZW5jb3VudGVyIHRoaXMgd2FybmluZy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGNhbGxiYWNrO1xuICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKHVuZGVmaW5lZCk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbnF1ZXVlVGFza0ltcGwodGFzayk7XG59XG5cbnZhciBhY3RTY29wZURlcHRoID0gMDtcbnZhciBkaWRXYXJuTm9Bd2FpdEFjdCA9IGZhbHNlO1xuZnVuY3Rpb24gYWN0KGNhbGxiYWNrKSB7XG4gIHtcbiAgICAvLyBgYWN0YCBjYWxscyBjYW4gYmUgbmVzdGVkLCBzbyB3ZSB0cmFjayB0aGUgZGVwdGguIFRoaXMgcmVwcmVzZW50cyB0aGVcbiAgICAvLyBudW1iZXIgb2YgYGFjdGAgc2NvcGVzIG9uIHRoZSBzdGFjay5cbiAgICB2YXIgcHJldkFjdFNjb3BlRGVwdGggPSBhY3RTY29wZURlcHRoO1xuICAgIGFjdFNjb3BlRGVwdGgrKztcblxuICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAvLyBUaGlzIGlzIHRoZSBvdXRlcm1vc3QgYGFjdGAgc2NvcGUuIEluaXRpYWxpemUgdGhlIHF1ZXVlLiBUaGUgcmVjb25jaWxlclxuICAgICAgLy8gd2lsbCBkZXRlY3QgdGhlIHF1ZXVlIGFuZCB1c2UgaXQgaW5zdGVhZCBvZiBTY2hlZHVsZXIuXG4gICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgfVxuXG4gICAgdmFyIHByZXZJc0JhdGNoaW5nTGVnYWN5ID0gUmVhY3RDdXJyZW50QWN0UXVldWUuaXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB2YXIgcmVzdWx0O1xuXG4gICAgdHJ5IHtcbiAgICAgIC8vIFVzZWQgdG8gcmVwcm9kdWNlIGJlaGF2aW9yIG9mIGBiYXRjaGVkVXBkYXRlc2AgaW4gbGVnYWN5IG1vZGUuIE9ubHlcbiAgICAgIC8vIHNldCB0byBgdHJ1ZWAgd2hpbGUgdGhlIGdpdmVuIGNhbGxiYWNrIGlzIGV4ZWN1dGVkLCBub3QgZm9yIHVwZGF0ZXNcbiAgICAgIC8vIHRyaWdnZXJlZCBkdXJpbmcgYW4gYXN5bmMgZXZlbnQsIGJlY2F1c2UgdGhpcyBpcyBob3cgdGhlIGxlZ2FjeVxuICAgICAgLy8gaW1wbGVtZW50YXRpb24gb2YgYGFjdGAgYmVoYXZlZC5cbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gY2FsbGJhY2soKTsgLy8gUmVwbGljYXRlIGJlaGF2aW9yIG9mIG9yaWdpbmFsIGBhY3RgIGltcGxlbWVudGF0aW9uIGluIGxlZ2FjeSBtb2RlLFxuICAgICAgLy8gd2hpY2ggZmx1c2hlZCB1cGRhdGVzIGltbWVkaWF0ZWx5IGFmdGVyIHRoZSBzY29wZSBmdW5jdGlvbiBleGl0cywgZXZlblxuICAgICAgLy8gaWYgaXQncyBhbiBhc3luYyBmdW5jdGlvbi5cblxuICAgICAgaWYgKCFwcmV2SXNCYXRjaGluZ0xlZ2FjeSAmJiBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5kaWRTY2hlZHVsZUxlZ2FjeVVwZGF0ZSkge1xuICAgICAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgICAgIGlmIChxdWV1ZSAhPT0gbnVsbCkge1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmRpZFNjaGVkdWxlTGVnYWN5VXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShxdWV1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmlzQmF0Y2hpbmdMZWdhY3kgPSBwcmV2SXNCYXRjaGluZ0xlZ2FjeTtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0ICE9PSBudWxsICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdmFyIHRoZW5hYmxlUmVzdWx0ID0gcmVzdWx0OyAvLyBUaGUgY2FsbGJhY2sgaXMgYW4gYXN5bmMgZnVuY3Rpb24gKGkuZS4gcmV0dXJuZWQgYSBwcm9taXNlKS4gV2FpdFxuICAgICAgLy8gZm9yIGl0IHRvIHJlc29sdmUgYmVmb3JlIGV4aXRpbmcgdGhlIGN1cnJlbnQgc2NvcGUuXG5cbiAgICAgIHZhciB3YXNBd2FpdGVkID0gZmFsc2U7XG4gICAgICB2YXIgdGhlbmFibGUgPSB7XG4gICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB3YXNBd2FpdGVkID0gdHJ1ZTtcbiAgICAgICAgICB0aGVuYWJsZVJlc3VsdC50aGVuKGZ1bmN0aW9uIChyZXR1cm5WYWx1ZSkge1xuICAgICAgICAgICAgcG9wQWN0U2NvcGUocHJldkFjdFNjb3BlRGVwdGgpO1xuXG4gICAgICAgICAgICBpZiAoYWN0U2NvcGVEZXB0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAvLyBXZSd2ZSBleGl0ZWQgdGhlIG91dGVybW9zdCBhY3Qgc2NvcGUuIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZVxuICAgICAgICAgICAgICAvLyBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXR1cm5WYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBUaGUgY2FsbGJhY2sgdGhyZXcgYW4gZXJyb3IuXG4gICAgICAgICAgICBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCk7XG4gICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICB7XG4gICAgICAgIGlmICghZGlkV2Fybk5vQXdhaXRBY3QgJiYgdHlwZW9mIFByb21pc2UgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7fSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoIXdhc0F3YWl0ZWQpIHtcbiAgICAgICAgICAgICAgZGlkV2Fybk5vQXdhaXRBY3QgPSB0cnVlO1xuXG4gICAgICAgICAgICAgIGVycm9yKCdZb3UgY2FsbGVkIGFjdChhc3luYyAoKSA9PiAuLi4pIHdpdGhvdXQgYXdhaXQuICcgKyAnVGhpcyBjb3VsZCBsZWFkIHRvIHVuZXhwZWN0ZWQgdGVzdGluZyBiZWhhdmlvdXIsICcgKyAnaW50ZXJsZWF2aW5nIG11bHRpcGxlIGFjdCBjYWxscyBhbmQgbWl4aW5nIHRoZWlyICcgKyAnc2NvcGVzLiAnICsgJ1lvdSBzaG91bGQgLSBhd2FpdCBhY3QoYXN5bmMgKCkgPT4gLi4uKTsnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhlbmFibGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXR1cm5WYWx1ZSA9IHJlc3VsdDsgLy8gVGhlIGNhbGxiYWNrIGlzIG5vdCBhbiBhc3luYyBmdW5jdGlvbi4gRXhpdCB0aGUgY3VycmVudCBzY29wZVxuICAgICAgLy8gaW1tZWRpYXRlbHksIHdpdGhvdXQgYXdhaXRpbmcuXG5cbiAgICAgIHBvcEFjdFNjb3BlKHByZXZBY3RTY29wZURlcHRoKTtcblxuICAgICAgaWYgKGFjdFNjb3BlRGVwdGggPT09IDApIHtcbiAgICAgICAgLy8gRXhpdGluZyB0aGUgb3V0ZXJtb3N0IGFjdCBzY29wZS4gRmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3F1ZXVlID0gUmVhY3RDdXJyZW50QWN0UXVldWUuY3VycmVudDtcblxuICAgICAgICBpZiAoX3F1ZXVlICE9PSBudWxsKSB7XG4gICAgICAgICAgZmx1c2hBY3RRdWV1ZShfcXVldWUpO1xuICAgICAgICAgIFJlYWN0Q3VycmVudEFjdFF1ZXVlLmN1cnJlbnQgPSBudWxsO1xuICAgICAgICB9IC8vIFJldHVybiBhIHRoZW5hYmxlLiBJZiB0aGUgdXNlciBhd2FpdHMgaXQsIHdlJ2xsIGZsdXNoIGFnYWluIGluXG4gICAgICAgIC8vIGNhc2UgYWRkaXRpb25hbCB3b3JrIHdhcyBzY2hlZHVsZWQgYnkgYSBtaWNyb3Rhc2suXG5cblxuICAgICAgICB2YXIgX3RoZW5hYmxlID0ge1xuICAgICAgICAgIHRoZW46IGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIC8vIENvbmZpcm0gd2UgaGF2ZW4ndCByZS1lbnRlcmVkIGFub3RoZXIgYGFjdGAgc2NvcGUsIGluIGNhc2VcbiAgICAgICAgICAgIC8vIHRoZSB1c2VyIGRvZXMgc29tZXRoaW5nIHdlaXJkIGxpa2UgYXdhaXQgdGhlIHRoZW5hYmxlXG4gICAgICAgICAgICAvLyBtdWx0aXBsZSB0aW1lcy5cbiAgICAgICAgICAgIGlmIChSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIC8vIFJlY3Vyc2l2ZWx5IGZsdXNoIHRoZSBxdWV1ZSB1bnRpbCB0aGVyZSdzIG5vIHJlbWFpbmluZyB3b3JrLlxuICAgICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gW107XG4gICAgICAgICAgICAgIHJlY3Vyc2l2ZWx5Rmx1c2hBc3luY0FjdFdvcmsocmV0dXJuVmFsdWUsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBTaW5jZSB3ZSdyZSBpbnNpZGUgYSBuZXN0ZWQgYGFjdGAgc2NvcGUsIHRoZSByZXR1cm5lZCB0aGVuYWJsZVxuICAgICAgICAvLyBpbW1lZGlhdGVseSByZXNvbHZlcy4gVGhlIG91dGVyIHNjb3BlIHdpbGwgZmx1c2ggdGhlIHF1ZXVlLlxuICAgICAgICB2YXIgX3RoZW5hYmxlMiA9IHtcbiAgICAgICAgICB0aGVuOiBmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBfdGhlbmFibGUyO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwb3BBY3RTY29wZShwcmV2QWN0U2NvcGVEZXB0aCkge1xuICB7XG4gICAgaWYgKHByZXZBY3RTY29wZURlcHRoICE9PSBhY3RTY29wZURlcHRoIC0gMSkge1xuICAgICAgZXJyb3IoJ1lvdSBzZWVtIHRvIGhhdmUgb3ZlcmxhcHBpbmcgYWN0KCkgY2FsbHMsIHRoaXMgaXMgbm90IHN1cHBvcnRlZC4gJyArICdCZSBzdXJlIHRvIGF3YWl0IHByZXZpb3VzIGFjdCgpIGNhbGxzIGJlZm9yZSBtYWtpbmcgYSBuZXcgb25lLiAnKTtcbiAgICB9XG5cbiAgICBhY3RTY29wZURlcHRoID0gcHJldkFjdFNjb3BlRGVwdGg7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlbHlGbHVzaEFzeW5jQWN0V29yayhyZXR1cm5WYWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gIHtcbiAgICB2YXIgcXVldWUgPSBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50O1xuXG4gICAgaWYgKHF1ZXVlICE9PSBudWxsKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmbHVzaEFjdFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgZW5xdWV1ZVRhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIE5vIGFkZGl0aW9uYWwgd29yayB3YXMgc2NoZWR1bGVkLiBGaW5pc2guXG4gICAgICAgICAgICBSZWFjdEN1cnJlbnRBY3RRdWV1ZS5jdXJyZW50ID0gbnVsbDtcbiAgICAgICAgICAgIHJlc29sdmUocmV0dXJuVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBLZWVwIGZsdXNoaW5nIHdvcmsgdW50aWwgdGhlcmUncyBub25lIGxlZnQuXG4gICAgICAgICAgICByZWN1cnNpdmVseUZsdXNoQXN5bmNBY3RXb3JrKHJldHVyblZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXNvbHZlKHJldHVyblZhbHVlKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIGlzRmx1c2hpbmcgPSBmYWxzZTtcblxuZnVuY3Rpb24gZmx1c2hBY3RRdWV1ZShxdWV1ZSkge1xuICB7XG4gICAgaWYgKCFpc0ZsdXNoaW5nKSB7XG4gICAgICAvLyBQcmV2ZW50IHJlLWVudHJhbmNlLlxuICAgICAgaXNGbHVzaGluZyA9IHRydWU7XG4gICAgICB2YXIgaSA9IDA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoOyBpIDwgcXVldWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcblxuICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgfSB3aGlsZSAoY2FsbGJhY2sgIT09IG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vIElmIHNvbWV0aGluZyB0aHJvd3MsIGxlYXZlIHRoZSByZW1haW5pbmcgY2FsbGJhY2tzIG9uIHRoZSBxdWV1ZS5cbiAgICAgICAgcXVldWUgPSBxdWV1ZS5zbGljZShpICsgMSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaXNGbHVzaGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgY3JlYXRlRWxlbWVudCQxID0gIGNyZWF0ZUVsZW1lbnRXaXRoVmFsaWRhdGlvbiA7XG52YXIgY2xvbmVFbGVtZW50JDEgPSAgY2xvbmVFbGVtZW50V2l0aFZhbGlkYXRpb24gO1xudmFyIGNyZWF0ZUZhY3RvcnkgPSAgY3JlYXRlRmFjdG9yeVdpdGhWYWxpZGF0aW9uIDtcbnZhciBDaGlsZHJlbiA9IHtcbiAgbWFwOiBtYXBDaGlsZHJlbixcbiAgZm9yRWFjaDogZm9yRWFjaENoaWxkcmVuLFxuICBjb3VudDogY291bnRDaGlsZHJlbixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgb25seTogb25seUNoaWxkXG59O1xuXG5leHBvcnRzLkNoaWxkcmVuID0gQ2hpbGRyZW47XG5leHBvcnRzLkNvbXBvbmVudCA9IENvbXBvbmVudDtcbmV4cG9ydHMuRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xuZXhwb3J0cy5Qcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG5leHBvcnRzLlB1cmVDb21wb25lbnQgPSBQdXJlQ29tcG9uZW50O1xuZXhwb3J0cy5TdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbmV4cG9ydHMuU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xuZXhwb3J0cy5fX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzO1xuZXhwb3J0cy5hY3QgPSBhY3Q7XG5leHBvcnRzLmNsb25lRWxlbWVudCA9IGNsb25lRWxlbWVudCQxO1xuZXhwb3J0cy5jcmVhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dDtcbmV4cG9ydHMuY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQkMTtcbmV4cG9ydHMuY3JlYXRlRmFjdG9yeSA9IGNyZWF0ZUZhY3Rvcnk7XG5leHBvcnRzLmNyZWF0ZVJlZiA9IGNyZWF0ZVJlZjtcbmV4cG9ydHMuZm9yd2FyZFJlZiA9IGZvcndhcmRSZWY7XG5leHBvcnRzLmlzVmFsaWRFbGVtZW50ID0gaXNWYWxpZEVsZW1lbnQ7XG5leHBvcnRzLmxhenkgPSBsYXp5O1xuZXhwb3J0cy5tZW1vID0gbWVtbztcbmV4cG9ydHMuc3RhcnRUcmFuc2l0aW9uID0gc3RhcnRUcmFuc2l0aW9uO1xuZXhwb3J0cy51bnN0YWJsZV9hY3QgPSBhY3Q7XG5leHBvcnRzLnVzZUNhbGxiYWNrID0gdXNlQ2FsbGJhY2s7XG5leHBvcnRzLnVzZUNvbnRleHQgPSB1c2VDb250ZXh0O1xuZXhwb3J0cy51c2VEZWJ1Z1ZhbHVlID0gdXNlRGVidWdWYWx1ZTtcbmV4cG9ydHMudXNlRGVmZXJyZWRWYWx1ZSA9IHVzZURlZmVycmVkVmFsdWU7XG5leHBvcnRzLnVzZUVmZmVjdCA9IHVzZUVmZmVjdDtcbmV4cG9ydHMudXNlSWQgPSB1c2VJZDtcbmV4cG9ydHMudXNlSW1wZXJhdGl2ZUhhbmRsZSA9IHVzZUltcGVyYXRpdmVIYW5kbGU7XG5leHBvcnRzLnVzZUluc2VydGlvbkVmZmVjdCA9IHVzZUluc2VydGlvbkVmZmVjdDtcbmV4cG9ydHMudXNlTGF5b3V0RWZmZWN0ID0gdXNlTGF5b3V0RWZmZWN0O1xuZXhwb3J0cy51c2VNZW1vID0gdXNlTWVtbztcbmV4cG9ydHMudXNlUmVkdWNlciA9IHVzZVJlZHVjZXI7XG5leHBvcnRzLnVzZVJlZiA9IHVzZVJlZjtcbmV4cG9ydHMudXNlU3RhdGUgPSB1c2VTdGF0ZTtcbmV4cG9ydHMudXNlU3luY0V4dGVybmFsU3RvcmUgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZTtcbmV4cG9ydHMudXNlVHJhbnNpdGlvbiA9IHVzZVRyYW5zaXRpb247XG5leHBvcnRzLnZlcnNpb24gPSBSZWFjdFZlcnNpb247XG4gICAgICAgICAgLyogZ2xvYmFsIF9fUkVBQ1RfREVWVE9PTFNfR0xPQkFMX0hPT0tfXyAqL1xuaWYgKFxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fICE9PSAndW5kZWZpbmVkJyAmJlxuICB0eXBlb2YgX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fLnJlZ2lzdGVySW50ZXJuYWxNb2R1bGVTdG9wID09PVxuICAgICdmdW5jdGlvbidcbikge1xuICBfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18ucmVnaXN0ZXJJbnRlcm5hbE1vZHVsZVN0b3AobmV3IEVycm9yKCkpO1xufVxuICAgICAgICBcbiAgfSkoKTtcbn1cbiIsImltcG9ydCB7IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgfSBmcm9tICdhaG9va3MnO1xuaW1wb3J0IFJlYWN0LCB7IGZvcndhcmRSZWYsIHVzZUltcGVyYXRpdmVIYW5kbGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBydW5lcyBmcm9tICdydW5lczInO1xuaW1wb3J0IHVzZUlucHV0SGFuZGxlS2V5RG93biBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0L3VzZUlucHV0SGFuZGxlS2V5RG93bic7XG5pbXBvcnQgeyBkZXZFcnJvciB9IGZyb20gJy4uLy4uL3V0aWxzL2Rldi1sb2cnO1xuaW1wb3J0IHsgd2l0aE5hdGl2ZVByb3BzIH0gZnJvbSAnLi4vLi4vdXRpbHMvbmF0aXZlLXByb3BzJztcbmltcG9ydCB7IHVzZVByb3BzVmFsdWUgfSBmcm9tICcuLi8uLi91dGlscy91c2UtcHJvcHMtdmFsdWUnO1xuaW1wb3J0IHsgbWVyZ2VQcm9wcyB9IGZyb20gJy4uLy4uL3V0aWxzL3dpdGgtZGVmYXVsdC1wcm9wcyc7XG5jb25zdCBjbGFzc1ByZWZpeCA9ICdhZG0tdGV4dC1hcmVhJztcbmNvbnN0IGRlZmF1bHRQcm9wcyA9IHtcbiAgcm93czogMixcbiAgc2hvd0NvdW50OiBmYWxzZSxcbiAgYXV0b1NpemU6IGZhbHNlLFxuICBkZWZhdWx0VmFsdWU6ICcnXG59O1xuZXhwb3J0IGNvbnN0IFRleHRBcmVhID0gZm9yd2FyZFJlZigocCwgcmVmKSA9PiB7XG4gIGNvbnN0IHByb3BzID0gbWVyZ2VQcm9wcyhkZWZhdWx0UHJvcHMsIHApO1xuICBjb25zdCB7XG4gICAgYXV0b1NpemUsXG4gICAgc2hvd0NvdW50LFxuICAgIG1heExlbmd0aFxuICB9ID0gcHJvcHM7XG4gIGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlUHJvcHNWYWx1ZShPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwge1xuICAgIHZhbHVlOiBwcm9wcy52YWx1ZSA9PT0gbnVsbCA/ICcnIDogcHJvcHMudmFsdWVcbiAgfSkpO1xuICBpZiAocHJvcHMudmFsdWUgPT09IG51bGwpIHtcbiAgICBkZXZFcnJvcignVGV4dEFyZWEnLCAnYHZhbHVlYCBwcm9wIG9uIGBUZXh0QXJlYWAgc2hvdWxkIG5vdCBiZSBgbnVsbGAuIENvbnNpZGVyIHVzaW5nIGFuIGVtcHR5IHN0cmluZyB0byBjbGVhciB0aGUgY29tcG9uZW50LicpO1xuICB9XG4gIGNvbnN0IG5hdGl2ZVRleHRBcmVhUmVmID0gdXNlUmVmKG51bGwpO1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50LWRlc2lnbi9hbnQtZGVzaWduLW1vYmlsZS9pc3N1ZXMvNTk2MVxuICBjb25zdCBoZWlnaHRSZWYgPSB1c2VSZWYoJ2F1dG8nKTtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudC1kZXNpZ24vYW50LWRlc2lnbi1tb2JpbGUvaXNzdWVzLzYwNTFcbiAgY29uc3QgaGlkZGVuVGV4dEFyZWFSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGhhbmRsZUtleWRvd24gPSB1c2VJbnB1dEhhbmRsZUtleURvd24oe1xuICAgIG9uRW50ZXJQcmVzczogcHJvcHMub25FbnRlclByZXNzLFxuICAgIG9uS2V5RG93bjogcHJvcHMub25LZXlEb3duXG4gIH0pO1xuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgKCkgPT4gKHtcbiAgICBjbGVhcjogKCkgPT4ge1xuICAgICAgc2V0VmFsdWUoJycpO1xuICAgIH0sXG4gICAgZm9jdXM6ICgpID0+IHtcbiAgICAgIHZhciBfYTtcbiAgICAgIChfYSA9IG5hdGl2ZVRleHRBcmVhUmVmLmN1cnJlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5mb2N1cygpO1xuICAgIH0sXG4gICAgYmx1cjogKCkgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgKF9hID0gbmF0aXZlVGV4dEFyZWFSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmJsdXIoKTtcbiAgICB9LFxuICAgIGdldCBuYXRpdmVFbGVtZW50KCkge1xuICAgICAgcmV0dXJuIG5hdGl2ZVRleHRBcmVhUmVmLmN1cnJlbnQ7XG4gICAgfVxuICB9KSk7XG4gIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghYXV0b1NpemUpIHJldHVybjtcbiAgICBjb25zdCB0ZXh0QXJlYSA9IG5hdGl2ZVRleHRBcmVhUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgaGlkZGVuVGV4dEFyZWEgPSBoaWRkZW5UZXh0QXJlYVJlZi5jdXJyZW50O1xuICAgIGlmICghdGV4dEFyZWEpIHJldHVybjtcbiAgICB0ZXh0QXJlYS5zdHlsZS5oZWlnaHQgPSBoZWlnaHRSZWYuY3VycmVudDtcbiAgICBpZiAoIWhpZGRlblRleHRBcmVhKSByZXR1cm47XG4gICAgbGV0IGhlaWdodCA9IGhpZGRlblRleHRBcmVhLnNjcm9sbEhlaWdodDtcbiAgICBpZiAodHlwZW9mIGF1dG9TaXplID09PSAnb2JqZWN0Jykge1xuICAgICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRleHRBcmVhKTtcbiAgICAgIGNvbnN0IGxpbmVIZWlnaHQgPSBwYXJzZUZsb2F0KGNvbXB1dGVkU3R5bGUubGluZUhlaWdodCk7XG4gICAgICBpZiAoYXV0b1NpemUubWluUm93cykge1xuICAgICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIGF1dG9TaXplLm1pblJvd3MgKiBsaW5lSGVpZ2h0KTtcbiAgICAgIH1cbiAgICAgIGlmIChhdXRvU2l6ZS5tYXhSb3dzKSB7XG4gICAgICAgIGhlaWdodCA9IE1hdGgubWluKGhlaWdodCwgYXV0b1NpemUubWF4Um93cyAqIGxpbmVIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgICBoZWlnaHRSZWYuY3VycmVudCA9IGAke2hlaWdodH1weGA7XG4gICAgdGV4dEFyZWEuc3R5bGUuaGVpZ2h0ID0gYCR7aGVpZ2h0fXB4YDtcbiAgfSwgW3ZhbHVlLCBhdXRvU2l6ZV0pO1xuICBjb25zdCBjb21wb3NpdGluZ1JlZiA9IHVzZVJlZihmYWxzZSk7XG4gIGxldCBjb3VudDtcbiAgY29uc3QgdmFsdWVMZW5ndGggPSBydW5lcyh2YWx1ZSkubGVuZ3RoO1xuICBpZiAodHlwZW9mIHNob3dDb3VudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNvdW50ID0gc2hvd0NvdW50KHZhbHVlTGVuZ3RoLCBtYXhMZW5ndGgpO1xuICB9IGVsc2UgaWYgKHNob3dDb3VudCkge1xuICAgIGNvdW50ID0gUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGAke2NsYXNzUHJlZml4fS1jb3VudGBcbiAgICB9LCBtYXhMZW5ndGggPT09IHVuZGVmaW5lZCA/IHZhbHVlTGVuZ3RoIDogdmFsdWVMZW5ndGggKyAnLycgKyBtYXhMZW5ndGgpO1xuICB9XG4gIGxldCByb3dzID0gcHJvcHMucm93cztcbiAgaWYgKHR5cGVvZiBhdXRvU2l6ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoYXV0b1NpemUubWF4Um93cyAmJiByb3dzID4gYXV0b1NpemUubWF4Um93cykge1xuICAgICAgcm93cyA9IGF1dG9TaXplLm1heFJvd3M7XG4gICAgfVxuICAgIGlmIChhdXRvU2l6ZS5taW5Sb3dzICYmIHJvd3MgPCBhdXRvU2l6ZS5taW5Sb3dzKSB7XG4gICAgICByb3dzID0gYXV0b1NpemUubWluUm93cztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHdpdGhOYXRpdmVQcm9wcyhwcm9wcywgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc1ByZWZpeFxuICB9LCBSZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiBuYXRpdmVUZXh0QXJlYVJlZixcbiAgICBjbGFzc05hbWU6IGAke2NsYXNzUHJlZml4fS1lbGVtZW50YCxcbiAgICByb3dzOiByb3dzLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBwbGFjZWhvbGRlcjogcHJvcHMucGxhY2Vob2xkZXIsXG4gICAgb25DaGFuZ2U6IGUgPT4ge1xuICAgICAgbGV0IHYgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgIGlmIChtYXhMZW5ndGggJiYgIWNvbXBvc2l0aW5nUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgdiA9IHJ1bmVzKHYpLnNsaWNlKDAsIG1heExlbmd0aCkuam9pbignJyk7XG4gICAgICB9XG4gICAgICBzZXRWYWx1ZSh2KTtcbiAgICB9LFxuICAgIGlkOiBwcm9wcy5pZCxcbiAgICBvbkNvbXBvc2l0aW9uU3RhcnQ6IGUgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29tcG9zaXRpbmdSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICAoX2EgPSBwcm9wcy5vbkNvbXBvc2l0aW9uU3RhcnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jYWxsKHByb3BzLCBlKTtcbiAgICB9LFxuICAgIG9uQ29tcG9zaXRpb25FbmQ6IGUgPT4ge1xuICAgICAgdmFyIF9hO1xuICAgICAgY29tcG9zaXRpbmdSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgICAgaWYgKG1heExlbmd0aCkge1xuICAgICAgICBjb25zdCB2ID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHNldFZhbHVlKHJ1bmVzKHYpLnNsaWNlKDAsIG1heExlbmd0aCkuam9pbignJykpO1xuICAgICAgfVxuICAgICAgKF9hID0gcHJvcHMub25Db21wb3NpdGlvbkVuZCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNhbGwocHJvcHMsIGUpO1xuICAgIH0sXG4gICAgYXV0b0NvbXBsZXRlOiBwcm9wcy5hdXRvQ29tcGxldGUsXG4gICAgYXV0b0ZvY3VzOiBwcm9wcy5hdXRvRm9jdXMsXG4gICAgZGlzYWJsZWQ6IHByb3BzLmRpc2FibGVkLFxuICAgIHJlYWRPbmx5OiBwcm9wcy5yZWFkT25seSxcbiAgICBuYW1lOiBwcm9wcy5uYW1lLFxuICAgIG9uRm9jdXM6IHByb3BzLm9uRm9jdXMsXG4gICAgb25CbHVyOiBwcm9wcy5vbkJsdXIsXG4gICAgb25DbGljazogcHJvcHMub25DbGljayxcbiAgICBvbktleURvd246IGhhbmRsZUtleWRvd25cbiAgfSwge1xuICAgIGVudGVyS2V5SGludDogcHJvcHMuZW50ZXJLZXlIaW50XG4gIH0pKSwgY291bnQsIGF1dG9TaXplICYmIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgcmVmOiBoaWRkZW5UZXh0QXJlYVJlZixcbiAgICBjbGFzc05hbWU6IGAke2NsYXNzUHJlZml4fS1lbGVtZW50ICR7Y2xhc3NQcmVmaXh9LWVsZW1lbnQtaGlkZGVuYCxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgcm93czogcm93cyxcbiAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfSkpKTtcbn0pO1xuVGV4dEFyZWEuZGVmYXVsdFByb3BzID0gZGVmYXVsdFByb3BzOyIsImltcG9ydCB7IGNyZWF0ZVVwZGF0ZUVmZmVjdCB9IGZyb20gJy4vY3JlYXRlVXBkYXRlRWZmZWN0JztcbmltcG9ydCB1c2VBbnRkVGFibGUgZnJvbSAnLi91c2VBbnRkVGFibGUnO1xuaW1wb3J0IHVzZUFzeW5jRWZmZWN0IGZyb20gJy4vdXNlQXN5bmNFZmZlY3QnO1xuaW1wb3J0IHVzZUJvb2xlYW4gZnJvbSAnLi91c2VCb29sZWFuJztcbmltcG9ydCB1c2VDbGlja0F3YXkgZnJvbSAnLi91c2VDbGlja0F3YXknO1xuaW1wb3J0IHVzZUNvbnRyb2xsYWJsZVZhbHVlIGZyb20gJy4vdXNlQ29udHJvbGxhYmxlVmFsdWUnO1xuaW1wb3J0IHVzZUNvb2tpZVN0YXRlIGZyb20gJy4vdXNlQ29va2llU3RhdGUnO1xuaW1wb3J0IHVzZUNvdW50RG93biBmcm9tICcuL3VzZUNvdW50RG93bic7XG5pbXBvcnQgdXNlQ291bnRlciBmcm9tICcuL3VzZUNvdW50ZXInO1xuaW1wb3J0IHVzZUNyZWF0aW9uIGZyb20gJy4vdXNlQ3JlYXRpb24nO1xuaW1wb3J0IHVzZURlYm91bmNlIGZyb20gJy4vdXNlRGVib3VuY2UnO1xuaW1wb3J0IHVzZURlYm91bmNlRWZmZWN0IGZyb20gJy4vdXNlRGVib3VuY2VFZmZlY3QnO1xuaW1wb3J0IHVzZURlYm91bmNlRm4gZnJvbSAnLi91c2VEZWJvdW5jZUZuJztcbmltcG9ydCB1c2VEZWVwQ29tcGFyZUVmZmVjdCBmcm9tICcuL3VzZURlZXBDb21wYXJlRWZmZWN0JztcbmltcG9ydCB1c2VEZWVwQ29tcGFyZUxheW91dEVmZmVjdCBmcm9tICcuL3VzZURlZXBDb21wYXJlTGF5b3V0RWZmZWN0JztcbmltcG9ydCB1c2VEb2N1bWVudFZpc2liaWxpdHkgZnJvbSAnLi91c2VEb2N1bWVudFZpc2liaWxpdHknO1xuaW1wb3J0IHVzZURyYWcgZnJvbSAnLi91c2VEcmFnJztcbmltcG9ydCB1c2VEcm9wIGZyb20gJy4vdXNlRHJvcCc7XG5pbXBvcnQgdXNlRHluYW1pY0xpc3QgZnJvbSAnLi91c2VEeW5hbWljTGlzdCc7XG5pbXBvcnQgdXNlRXZlbnRFbWl0dGVyIGZyb20gJy4vdXNlRXZlbnRFbWl0dGVyJztcbmltcG9ydCB1c2VFdmVudExpc3RlbmVyIGZyb20gJy4vdXNlRXZlbnRMaXN0ZW5lcic7XG5pbXBvcnQgdXNlRXZlbnRUYXJnZXQgZnJvbSAnLi91c2VFdmVudFRhcmdldCc7XG5pbXBvcnQgdXNlRXh0ZXJuYWwgZnJvbSAnLi91c2VFeHRlcm5hbCc7XG5pbXBvcnQgdXNlRmF2aWNvbiBmcm9tICcuL3VzZUZhdmljb24nO1xuaW1wb3J0IHVzZUZvY3VzV2l0aGluIGZyb20gJy4vdXNlRm9jdXNXaXRoaW4nO1xuaW1wb3J0IHVzZUZ1bGxzY3JlZW4gZnJvbSAnLi91c2VGdWxsc2NyZWVuJztcbmltcG9ydCB1c2VGdXNpb25UYWJsZSBmcm9tICcuL3VzZUZ1c2lvblRhYmxlJztcbmltcG9ydCB1c2VHZXRTdGF0ZSBmcm9tICcuL3VzZUdldFN0YXRlJztcbmltcG9ydCB1c2VIaXN0b3J5VHJhdmVsIGZyb20gJy4vdXNlSGlzdG9yeVRyYXZlbCc7XG5pbXBvcnQgdXNlSG92ZXIgZnJvbSAnLi91c2VIb3Zlcic7XG5pbXBvcnQgdXNlSW5maW5pdGVTY3JvbGwgZnJvbSAnLi91c2VJbmZpbml0ZVNjcm9sbCc7XG5pbXBvcnQgdXNlSW50ZXJ2YWwgZnJvbSAnLi91c2VJbnRlcnZhbCc7XG5pbXBvcnQgdXNlSW5WaWV3cG9ydCBmcm9tICcuL3VzZUluVmlld3BvcnQnO1xuaW1wb3J0IHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QgZnJvbSAnLi91c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0JztcbmltcG9ydCB1c2VLZXlQcmVzcyBmcm9tICcuL3VzZUtleVByZXNzJztcbmltcG9ydCB1c2VMYXRlc3QgZnJvbSAnLi91c2VMYXRlc3QnO1xuaW1wb3J0IHVzZUxvY2FsU3RvcmFnZVN0YXRlIGZyb20gJy4vdXNlTG9jYWxTdG9yYWdlU3RhdGUnO1xuaW1wb3J0IHVzZUxvY2tGbiBmcm9tICcuL3VzZUxvY2tGbic7XG5pbXBvcnQgdXNlTG9uZ1ByZXNzIGZyb20gJy4vdXNlTG9uZ1ByZXNzJztcbmltcG9ydCB1c2VNYXAgZnJvbSAnLi91c2VNYXAnO1xuaW1wb3J0IHVzZU1lbW9pemVkRm4gZnJvbSAnLi91c2VNZW1vaXplZEZuJztcbmltcG9ydCB1c2VNb3VudCBmcm9tICcuL3VzZU1vdW50JztcbmltcG9ydCB1c2VNb3VzZSBmcm9tICcuL3VzZU1vdXNlJztcbmltcG9ydCB1c2VOZXR3b3JrIGZyb20gJy4vdXNlTmV0d29yayc7XG5pbXBvcnQgdXNlUGFnaW5hdGlvbiBmcm9tICcuL3VzZVBhZ2luYXRpb24nO1xuaW1wb3J0IHVzZVByZXZpb3VzIGZyb20gJy4vdXNlUHJldmlvdXMnO1xuaW1wb3J0IHVzZVJhZkludGVydmFsIGZyb20gJy4vdXNlUmFmSW50ZXJ2YWwnO1xuaW1wb3J0IHVzZVJhZlN0YXRlIGZyb20gJy4vdXNlUmFmU3RhdGUnO1xuaW1wb3J0IHVzZVJhZlRpbWVvdXQgZnJvbSAnLi91c2VSYWZUaW1lb3V0JztcbmltcG9ydCB1c2VSZWFjdGl2ZSBmcm9tICcuL3VzZVJlYWN0aXZlJztcbmltcG9ydCB1c2VSZXF1ZXN0LCB7IENhbmNlbGxlZEVycm9yLCBjbGVhckNhY2hlLCBpc0NhbmNlbGxlZEVycm9yIH0gZnJvbSAnLi91c2VSZXF1ZXN0JztcbmltcG9ydCB1c2VSZXNldFN0YXRlIGZyb20gJy4vdXNlUmVzZXRTdGF0ZSc7XG5pbXBvcnQgdXNlUmVzcG9uc2l2ZSwgeyBjb25maWdSZXNwb25zaXZlIH0gZnJvbSAnLi91c2VSZXNwb25zaXZlJztcbmltcG9ydCB1c2VTYWZlU3RhdGUgZnJvbSAnLi91c2VTYWZlU3RhdGUnO1xuaW1wb3J0IHVzZVNjcm9sbCBmcm9tICcuL3VzZVNjcm9sbCc7XG5pbXBvcnQgdXNlU2VsZWN0aW9ucyBmcm9tICcuL3VzZVNlbGVjdGlvbnMnO1xuaW1wb3J0IHVzZVNlc3Npb25TdG9yYWdlU3RhdGUgZnJvbSAnLi91c2VTZXNzaW9uU3RvcmFnZVN0YXRlJztcbmltcG9ydCB1c2VTZXQgZnJvbSAnLi91c2VTZXQnO1xuaW1wb3J0IHVzZVNldFN0YXRlIGZyb20gJy4vdXNlU2V0U3RhdGUnO1xuaW1wb3J0IHVzZVNpemUgZnJvbSAnLi91c2VTaXplJztcbmltcG9ydCB1c2VUZXh0U2VsZWN0aW9uIGZyb20gJy4vdXNlVGV4dFNlbGVjdGlvbic7XG5pbXBvcnQgdXNlVGhyb3R0bGUgZnJvbSAnLi91c2VUaHJvdHRsZSc7XG5pbXBvcnQgdXNlVGhyb3R0bGVFZmZlY3QgZnJvbSAnLi91c2VUaHJvdHRsZUVmZmVjdCc7XG5pbXBvcnQgdXNlVGhyb3R0bGVGbiBmcm9tICcuL3VzZVRocm90dGxlRm4nO1xuaW1wb3J0IHVzZVRpbWVvdXQgZnJvbSAnLi91c2VUaW1lb3V0JztcbmltcG9ydCB1c2VUaXRsZSBmcm9tICcuL3VzZVRpdGxlJztcbmltcG9ydCB1c2VUb2dnbGUgZnJvbSAnLi91c2VUb2dnbGUnO1xuaW1wb3J0IHVzZVRyYWNrZWRFZmZlY3QgZnJvbSAnLi91c2VUcmFja2VkRWZmZWN0JztcbmltcG9ydCB1c2VVbm1vdW50IGZyb20gJy4vdXNlVW5tb3VudCc7XG5pbXBvcnQgdXNlVW5tb3VudGVkUmVmIGZyb20gJy4vdXNlVW5tb3VudGVkUmVmJztcbmltcG9ydCB1c2VVcGRhdGUgZnJvbSAnLi91c2VVcGRhdGUnO1xuaW1wb3J0IHVzZVVwZGF0ZUVmZmVjdCBmcm9tICcuL3VzZVVwZGF0ZUVmZmVjdCc7XG5pbXBvcnQgdXNlVXBkYXRlTGF5b3V0RWZmZWN0IGZyb20gJy4vdXNlVXBkYXRlTGF5b3V0RWZmZWN0JztcbmltcG9ydCB1c2VWaXJ0dWFsTGlzdCBmcm9tICcuL3VzZVZpcnR1YWxMaXN0JztcbmltcG9ydCB1c2VXZWJTb2NrZXQgZnJvbSAnLi91c2VXZWJTb2NrZXQnO1xuaW1wb3J0IHVzZVdoeURpZFlvdVVwZGF0ZSBmcm9tICcuL3VzZVdoeURpZFlvdVVwZGF0ZSc7XG5pbXBvcnQgdXNlTXV0YXRpb25PYnNlcnZlciBmcm9tICcuL3VzZU11dGF0aW9uT2JzZXJ2ZXInO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4vdXNlVGhlbWUnO1xuZXhwb3J0IHsgdXNlUmVxdWVzdCwgdXNlQ29udHJvbGxhYmxlVmFsdWUsIHVzZUR5bmFtaWNMaXN0LCB1c2VWaXJ0dWFsTGlzdCwgdXNlUmVzcG9uc2l2ZSwgdXNlRXZlbnRFbWl0dGVyLCB1c2VMb2NhbFN0b3JhZ2VTdGF0ZSwgdXNlU2Vzc2lvblN0b3JhZ2VTdGF0ZSwgdXNlU2l6ZSwgY29uZmlnUmVzcG9uc2l2ZSwgdXNlVXBkYXRlRWZmZWN0LCB1c2VVcGRhdGVMYXlvdXRFZmZlY3QsIHVzZUJvb2xlYW4sIHVzZVRvZ2dsZSwgdXNlRG9jdW1lbnRWaXNpYmlsaXR5LCB1c2VTZWxlY3Rpb25zLCB1c2VUaHJvdHRsZSwgdXNlVGhyb3R0bGVGbiwgdXNlVGhyb3R0bGVFZmZlY3QsIHVzZURlYm91bmNlLCB1c2VEZWJvdW5jZUZuLCB1c2VEZWJvdW5jZUVmZmVjdCwgdXNlUHJldmlvdXMsIHVzZU1vdXNlLCB1c2VTY3JvbGwsIHVzZUNsaWNrQXdheSwgdXNlRnVsbHNjcmVlbiwgdXNlSW5WaWV3cG9ydCwgdXNlS2V5UHJlc3MsIHVzZUV2ZW50TGlzdGVuZXIsIHVzZUhvdmVyLCB1c2VVbm1vdW50LCB1c2VTZXQsIHVzZU1lbW9pemVkRm4sIHVzZU1hcCwgdXNlQ3JlYXRpb24sIHVzZURyYWcsIHVzZURyb3AsIHVzZU1vdW50LCB1c2VDb3VudGVyLCB1c2VVcGRhdGUsIHVzZVRleHRTZWxlY3Rpb24sIHVzZUV2ZW50VGFyZ2V0LCB1c2VIaXN0b3J5VHJhdmVsLCB1c2VDb29raWVTdGF0ZSwgdXNlU2V0U3RhdGUsIHVzZUludGVydmFsLCB1c2VXaHlEaWRZb3VVcGRhdGUsIHVzZVRpdGxlLCB1c2VOZXR3b3JrLCB1c2VUaW1lb3V0LCB1c2VSZWFjdGl2ZSwgdXNlRmF2aWNvbiwgdXNlQ291bnREb3duLCB1c2VXZWJTb2NrZXQsIHVzZUxvY2tGbiwgdXNlVW5tb3VudGVkUmVmLCB1c2VFeHRlcm5hbCwgdXNlU2FmZVN0YXRlLCB1c2VMYXRlc3QsIHVzZUlzb21vcnBoaWNMYXlvdXRFZmZlY3QsIHVzZURlZXBDb21wYXJlRWZmZWN0LCB1c2VEZWVwQ29tcGFyZUxheW91dEVmZmVjdCwgdXNlQXN5bmNFZmZlY3QsIHVzZUxvbmdQcmVzcywgdXNlUmFmU3RhdGUsIHVzZVRyYWNrZWRFZmZlY3QsIHVzZVBhZ2luYXRpb24sIHVzZUFudGRUYWJsZSwgdXNlRnVzaW9uVGFibGUsIHVzZUluZmluaXRlU2Nyb2xsLCB1c2VHZXRTdGF0ZSwgY2xlYXJDYWNoZSwgQ2FuY2VsbGVkRXJyb3IsIGlzQ2FuY2VsbGVkRXJyb3IsIHVzZUZvY3VzV2l0aGluLCBjcmVhdGVVcGRhdGVFZmZlY3QsIHVzZVJhZkludGVydmFsLCB1c2VSYWZUaW1lb3V0LCB1c2VSZXNldFN0YXRlLCB1c2VNdXRhdGlvbk9ic2VydmVyLCB1c2VUaGVtZSwgfTtcbiIsImltcG9ydCB7IHVzZUxheW91dEVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc0Jyb3dzZXIgZnJvbSAnLi4vdXRpbHMvaXNCcm93c2VyJztcbmltcG9ydCBub29wIGZyb20gJy4uL3V0aWxzL25vb3AnO1xuY29uc3QgdXNlSXNvbW9ycGhpY0xheW91dEVmZmVjdCA9IGlzQnJvd3NlciA/IHVzZUxheW91dEVmZmVjdCA6IG5vb3A7XG5leHBvcnQgZGVmYXVsdCB1c2VJc29tb3JwaGljTGF5b3V0RWZmZWN0O1xuIiwiY29uc3QgaXNCcm93c2VyID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICB3aW5kb3cuZG9jdW1lbnQgJiZcbiAgICB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5leHBvcnQgZGVmYXVsdCBpc0Jyb3dzZXI7XG4iLCJleHBvcnRzLmludGVyb3BEZWZhdWx0ID0gZnVuY3Rpb24gKGEpIHtcbiAgcmV0dXJuIGEgJiYgYS5fX2VzTW9kdWxlID8gYSA6IHtkZWZhdWx0OiBhfTtcbn07XG5cbmV4cG9ydHMuZGVmaW5lSW50ZXJvcEZsYWcgPSBmdW5jdGlvbiAoYSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgJ19fZXNNb2R1bGUnLCB7dmFsdWU6IHRydWV9KTtcbn07XG5cbmV4cG9ydHMuZXhwb3J0QWxsID0gZnVuY3Rpb24gKHNvdXJjZSwgZGVzdCkge1xuICBPYmplY3Qua2V5cyhzb3VyY2UpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIGlmIChrZXkgPT09ICdkZWZhdWx0JyB8fCBrZXkgPT09ICdfX2VzTW9kdWxlJyB8fCBkZXN0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwga2V5LCB7XG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzb3VyY2Vba2V5XTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBkZXN0O1xufTtcblxuZXhwb3J0cy5leHBvcnQgPSBmdW5jdGlvbiAoZGVzdCwgZGVzdE5hbWUsIGdldCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGVzdCwgZGVzdE5hbWUsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZ2V0LFxuICB9KTtcbn07XG4iLCJjb25zdCBub29wID0gKCkgPT4geyB9O1xuZXhwb3J0IGRlZmF1bHQgbm9vcDtcbiIsImltcG9ydCB7IHVzZU1lbW8sIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgaXNEZXYgZnJvbSAnLi4vdXRpbHMvaXNEZXYnO1xuY29uc3QgdXNlTWVtb2l6ZWRGbiA9IChmbikgPT4ge1xuICAgIGlmIChpc0Rldikge1xuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGB1c2VNZW1vaXplZEZuIGV4cGVjdGVkIHBhcmFtZXRlciBpcyBhIGZ1bmN0aW9uLCBnb3QgJHt0eXBlb2YgZm59YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZm5SZWYgPSB1c2VSZWYoZm4pO1xuICAgIC8vIHdoeSBub3Qgd3JpdGUgYGZuUmVmLmN1cnJlbnQgPSBmbmA/XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FsaWJhYmEvaG9va3MvaXNzdWVzLzcyOFxuICAgIGZuUmVmLmN1cnJlbnQgPSB1c2VNZW1vKCgpID0+IGZuLCBbZm5dKTtcbiAgICBjb25zdCBtZW1vaXplZEZuID0gdXNlUmVmKHVuZGVmaW5lZCk7XG4gICAgaWYgKCFtZW1vaXplZEZuLmN1cnJlbnQpIHtcbiAgICAgICAgbWVtb2l6ZWRGbi5jdXJyZW50ID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIHJldHVybiBmblJlZi5jdXJyZW50LmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gbWVtb2l6ZWRGbi5jdXJyZW50O1xufTtcbmV4cG9ydCBkZWZhdWx0IHVzZU1lbW9pemVkRm47XG4iLCJleHBvcnQgY29uc3QgaXNPYmplY3QgPSAodmFsKSA9PiB7XG4gICAgcmV0dXJuIHZhbCAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jztcbn07XG5leHBvcnQgY29uc3QgaXNGdW5jdGlvbiA9ICh2YWwpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAodmFsKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnO1xufTtcbmV4cG9ydCBjb25zdCBpc0Jvb2xlYW4gPSAodmFsKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdib29sZWFuJztcbn07XG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAodmFsKSA9PiB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdudW1iZXInICYmICFOdW1iZXIuaXNOYU4odmFsKTtcbn07XG5leHBvcnQgY29uc3QgaXNVbmRlZiA9ICh2YWwpID0+IHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ3VuZGVmaW5lZCc7XG59O1xuZXhwb3J0IGNvbnN0IGlzTm9uTnVsbGFibGUgPSAodmFsKSA9PiB7XG4gICAgcmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbDtcbn07XG5leHBvcnQgY29uc3QgaXNUaGVuYWJsZSA9ICh2YWwpID0+IHtcbiAgICByZXR1cm4gaXNOb25OdWxsYWJsZSh2YWwpICYmIGlzRnVuY3Rpb24odmFsLnRoZW4pO1xufTtcbiIsImNvbnN0IGlzRGV2ID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfHwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICd0ZXN0JztcbmV4cG9ydCBkZWZhdWx0IGlzRGV2O1xuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlTWVtb2l6ZWRGbiBmcm9tICcuLi91c2VNZW1vaXplZEZuJztcbmNvbnN0IHVzZVVwZGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBbLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7fSk7XG4gICAgcmV0dXJuIHVzZU1lbW9pemVkRm4oKCkgPT4gc2V0U3RhdGUoe30pKTtcbn07XG5leHBvcnQgZGVmYXVsdCB1c2VVcGRhdGU7XG4iLCJsZXQgaSA9IC8qI19fUFVSRV9fKi8gZnVuY3Rpb24oaSkge1xuICByZXR1cm4gaVtpLkhJR0hfU1VSUk9HQVRFX1NUQVJUID0gNTUyOTZdID0gXCJISUdIX1NVUlJPR0FURV9TVEFSVFwiLCBpW2kuSElHSF9TVVJST0dBVEVfRU5EID0gNTYzMTldID0gXCJISUdIX1NVUlJPR0FURV9FTkRcIiwgXG4gIGlbaS5MT1dfU1VSUk9HQVRFX1NUQVJUID0gNTYzMjBdID0gXCJMT1dfU1VSUk9HQVRFX1NUQVJUXCIsIGlbaS5SRUdJT05BTF9JTkRJQ0FUT1JfU1RBUlQgPSAxMjc0NjJdID0gXCJSRUdJT05BTF9JTkRJQ0FUT1JfU1RBUlRcIiwgXG4gIGlbaS5SRUdJT05BTF9JTkRJQ0FUT1JfRU5EID0gMTI3NDg3XSA9IFwiUkVHSU9OQUxfSU5ESUNBVE9SX0VORFwiLCBpW2kuRklUWlBBVFJJQ0tfTU9ESUZJRVJfU1RBUlQgPSAxMjc5OTVdID0gXCJGSVRaUEFUUklDS19NT0RJRklFUl9TVEFSVFwiLCBcbiAgaVtpLkZJVFpQQVRSSUNLX01PRElGSUVSX0VORCA9IDEyNzk5OV0gPSBcIkZJVFpQQVRSSUNLX01PRElGSUVSX0VORFwiLCBpW2kuVkFSSUFUSU9OX01PRElGSUVSX1NUQVJUID0gNjUwMjRdID0gXCJWQVJJQVRJT05fTU9ESUZJRVJfU1RBUlRcIiwgXG4gIGlbaS5WQVJJQVRJT05fTU9ESUZJRVJfRU5EID0gNjUwMzldID0gXCJWQVJJQVRJT05fTU9ESUZJRVJfRU5EXCIsIGlbaS5ESUFDUklUSUNBTF9NQVJLU19TVEFSVCA9IDg0MDBdID0gXCJESUFDUklUSUNBTF9NQVJLU19TVEFSVFwiLCBcbiAgaVtpLkRJQUNSSVRJQ0FMX01BUktTX0VORCA9IDg0NDddID0gXCJESUFDUklUSUNBTF9NQVJLU19FTkRcIiwgaVtpLlNVQkRJVklTSU9OX0lORElDQVRPUl9TVEFSVCA9IDEyNzk4OF0gPSBcIlNVQkRJVklTSU9OX0lORElDQVRPUl9TVEFSVFwiLCBcbiAgaVtpLlRBR1NfU1RBUlQgPSA5MTc1MDRdID0gXCJUQUdTX1NUQVJUXCIsIGlbaS5UQUdTX0VORCA9IDkxNzYzMV0gPSBcIlRBR1NfRU5EXCIsIGlbaS5aV0ogPSA4MjA1XSA9IFwiWldKXCIsIFxuICBpO1xufSh7fSk7XG5cbmNvbnN0IGUgPSAvKiNfX1BVUkVfXyovIE9iamVjdC5mcmVlemUoWyAweDAzMDgsIDB4MDkzNywgMHgwOTNGLCAweDBCQTgsIDB4MEJCRiwgMHgwQkNELCAweDBFMzEsIDB4MEUzMywgMHgwRTQwLCAweDBFNDksIDB4MTEwMCwgMHgxMTYxLCAweDExQTggXSk7XG5cbmxldCBuID0gLyojX19QVVJFX18qLyBmdW5jdGlvbihpKSB7XG4gIHJldHVybiBpW2kudW5pdF8xID0gMV0gPSBcInVuaXRfMVwiLCBpW2kudW5pdF8yID0gMl0gPSBcInVuaXRfMlwiLCBpW2kudW5pdF80ID0gNF0gPSBcInVuaXRfNFwiLCBcbiAgaTtcbn0oe30pO1xuXG5mdW5jdGlvbiBydW5lcyhpKSB7XG4gIGlmIChcInN0cmluZ1wiICE9IHR5cGVvZiBpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwic3RyaW5nIGNhbm5vdCBiZSB1bmRlZmluZWQgb3IgbnVsbFwiKTtcbiAgY29uc3QgZSA9IFtdO1xuICBsZXQgbiA9IDAsIHQgPSAwO1xuICBmb3IgKDtuIDwgaS5sZW5ndGg7ICkgdCArPSBuZXh0VW5pdHMobiArIHQsIGkpLCBpc0dyYXBoZW1lKGlbbiArIHRdKSAmJiB0KyssIGlzVmFyaWF0aW9uU2VsZWN0b3IoaVtuICsgdF0pICYmIHQrKywgXG4gIGlzRGlhY3JpdGljYWxNYXJrKGlbbiArIHRdKSAmJiB0KyssIGlzWmVyb1dpZHRoSm9pbmVyKGlbbiArIHRdKSA/IHQrKyA6IChlLnB1c2goaS5zdWJzdHJpbmcobiwgbiArIHQpKSwgXG4gIG4gKz0gdCwgdCA9IDApO1xuICByZXR1cm4gZTtcbn1cblxuZnVuY3Rpb24gbmV4dFVuaXRzKGUsIHQpIHtcbiAgY29uc3QgciA9IHRbZV07XG4gIGlmICghaXNGaXJzdE9mU3Vycm9nYXRlUGFpcihyKSB8fCBlID09PSB0Lmxlbmd0aCAtIDEpIHJldHVybiBuLnVuaXRfMTtcbiAgY29uc3QgSSA9IHIgKyB0W2UgKyAxXTtcbiAgbGV0IG8gPSB0LnN1YnN0cmluZyhlICsgMiwgZSArIDUpO1xuICByZXR1cm4gaXNSZWdpb25hbEluZGljYXRvcihJKSAmJiBpc1JlZ2lvbmFsSW5kaWNhdG9yKG8pID8gbi51bml0XzQgOiBpc1N1YmRpdmlzaW9uRmxhZyhJKSAmJiBpc1N1cHBsZW1lbnRhcnlTcGVjaWFscHVycG9zZVBsYW5lKG8pID8gdC5zbGljZShlKS5pbmRleE9mKFN0cmluZy5mcm9tQ29kZVBvaW50KGkuVEFHU19FTkQpKSArIDIgOiBpc0ZpdHpwYXRyaWNrTW9kaWZpZXIobykgPyBuLnVuaXRfNCA6IG4udW5pdF8yO1xufVxuXG5mdW5jdGlvbiBpc0ZpcnN0T2ZTdXJyb2dhdGVQYWlyKGUpIHtcbiAgcmV0dXJuIGUgJiYgYmV0d2VlbkluY2x1c2l2ZShlWzBdLmNoYXJDb2RlQXQoMCksIGkuSElHSF9TVVJST0dBVEVfU1RBUlQsIGkuSElHSF9TVVJST0dBVEVfRU5EKTtcbn1cblxuZnVuY3Rpb24gaXNSZWdpb25hbEluZGljYXRvcihlKSB7XG4gIHJldHVybiBiZXR3ZWVuSW5jbHVzaXZlKGNvZGVQb2ludEZyb21TdXJyb2dhdGVQYWlyKGUpLCBpLlJFR0lPTkFMX0lORElDQVRPUl9TVEFSVCwgaS5SRUdJT05BTF9JTkRJQ0FUT1JfRU5EKTtcbn1cblxuZnVuY3Rpb24gaXNTdWJkaXZpc2lvbkZsYWcoZSkge1xuICByZXR1cm4gYmV0d2VlbkluY2x1c2l2ZShjb2RlUG9pbnRGcm9tU3Vycm9nYXRlUGFpcihlKSwgaS5TVUJESVZJU0lPTl9JTkRJQ0FUT1JfU1RBUlQsIGkuU1VCRElWSVNJT05fSU5ESUNBVE9SX1NUQVJUKTtcbn1cblxuZnVuY3Rpb24gaXNGaXR6cGF0cmlja01vZGlmaWVyKGUpIHtcbiAgcmV0dXJuIGJldHdlZW5JbmNsdXNpdmUoY29kZVBvaW50RnJvbVN1cnJvZ2F0ZVBhaXIoZSksIGkuRklUWlBBVFJJQ0tfTU9ESUZJRVJfU1RBUlQsIGkuRklUWlBBVFJJQ0tfTU9ESUZJRVJfRU5EKTtcbn1cblxuZnVuY3Rpb24gaXNWYXJpYXRpb25TZWxlY3RvcihlKSB7XG4gIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIGJldHdlZW5JbmNsdXNpdmUoZS5jaGFyQ29kZUF0KDApLCBpLlZBUklBVElPTl9NT0RJRklFUl9TVEFSVCwgaS5WQVJJQVRJT05fTU9ESUZJRVJfRU5EKTtcbn1cblxuZnVuY3Rpb24gaXNEaWFjcml0aWNhbE1hcmsoZSkge1xuICByZXR1cm4gXCJzdHJpbmdcIiA9PSB0eXBlb2YgZSAmJiBiZXR3ZWVuSW5jbHVzaXZlKGUuY2hhckNvZGVBdCgwKSwgaS5ESUFDUklUSUNBTF9NQVJLU19TVEFSVCwgaS5ESUFDUklUSUNBTF9NQVJLU19FTkQpO1xufVxuXG5mdW5jdGlvbiBpc1N1cHBsZW1lbnRhcnlTcGVjaWFscHVycG9zZVBsYW5lKGUpIHtcbiAgY29uc3QgbiA9IGUuY29kZVBvaW50QXQoMCk7XG4gIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIFwibnVtYmVyXCIgPT0gdHlwZW9mIG4gJiYgYmV0d2VlbkluY2x1c2l2ZShuLCBpLlRBR1NfU1RBUlQsIGkuVEFHU19FTkQpO1xufVxuXG5mdW5jdGlvbiBpc0dyYXBoZW1lKGkpIHtcbiAgcmV0dXJuIFwic3RyaW5nXCIgPT0gdHlwZW9mIGkgJiYgZS5pbmNsdWRlcyhpLmNoYXJDb2RlQXQoMCkpO1xufVxuXG5mdW5jdGlvbiBpc1plcm9XaWR0aEpvaW5lcihlKSB7XG4gIHJldHVybiBcInN0cmluZ1wiID09IHR5cGVvZiBlICYmIGUuY2hhckNvZGVBdCgwKSA9PT0gaS5aV0o7XG59XG5cbmZ1bmN0aW9uIGNvZGVQb2ludEZyb21TdXJyb2dhdGVQYWlyKGUpIHtcbiAgcmV0dXJuIChlLmNoYXJDb2RlQXQoMCkgLSBpLkhJR0hfU1VSUk9HQVRFX1NUQVJUIDw8IDEwKSArIChlLmNoYXJDb2RlQXQoMSkgLSBpLkxPV19TVVJST0dBVEVfU1RBUlQpICsgMHgxMDAwMDtcbn1cblxuZnVuY3Rpb24gYmV0d2VlbkluY2x1c2l2ZShpLCBlLCBuKSB7XG4gIHJldHVybiBpID49IGUgJiYgaSA8PSBuO1xufVxuXG5mdW5jdGlvbiBzdWJzdHJpbmcoaSwgZSwgbikge1xuICBjb25zdCB0ID0gcnVuZXMoaSk7XG4gIGlmICh2b2lkIDAgPT09IGUpIHJldHVybiBpO1xuICBpZiAoZSA+PSB0Lmxlbmd0aCkgcmV0dXJuIFwiXCI7XG4gIGNvbnN0IHIgPSB0Lmxlbmd0aCAtIGU7XG4gIGxldCBJID0gZSArICh2b2lkIDAgPT09IG4gPyByIDogbik7XG4gIHJldHVybiBJID4gZSArIHIgJiYgKEkgPSB2b2lkIDApLCB0LnNsaWNlKGUsIEkpLmpvaW4oXCJcIik7XG59XG5cbmV4cG9ydCB7IG4gYXMgRW51bUNvZGVVbml0cywgaSBhcyBFbnVtUnVuZXNDb2RlLCBlIGFzIEdSQVBIRU1FUywgYmV0d2VlbkluY2x1c2l2ZSwgY29kZVBvaW50RnJvbVN1cnJvZ2F0ZVBhaXIsIHJ1bmVzIGFzIGRlZmF1bHQsIGlzRGlhY3JpdGljYWxNYXJrLCBpc0ZpcnN0T2ZTdXJyb2dhdGVQYWlyLCBpc0ZpdHpwYXRyaWNrTW9kaWZpZXIsIGlzR3JhcGhlbWUsIGlzUmVnaW9uYWxJbmRpY2F0b3IsIGlzU3ViZGl2aXNpb25GbGFnLCBpc1N1cHBsZW1lbnRhcnlTcGVjaWFscHVycG9zZVBsYW5lLCBpc1ZhcmlhdGlvblNlbGVjdG9yLCBpc1plcm9XaWR0aEpvaW5lciwgbmV4dFVuaXRzLCBydW5lcywgc3Vic3RyaW5nIGFzIHN1YnN0ciwgc3Vic3RyaW5nIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20ubWpzLm1hcFxuIiwiZXhwb3J0IGNvbnN0IGVudW0gRW51bVJ1bmVzQ29kZVxue1xuXHRISUdIX1NVUlJPR0FURV9TVEFSVCA9IDB4ZDgwMCxcblx0SElHSF9TVVJST0dBVEVfRU5EID0gMHhkYmZmLFxuXG5cdExPV19TVVJST0dBVEVfU1RBUlQgPSAweGRjMDAsXG5cblx0UkVHSU9OQUxfSU5ESUNBVE9SX1NUQVJUID0gMHgxZjFlNixcblx0UkVHSU9OQUxfSU5ESUNBVE9SX0VORCA9IDB4MWYxZmYsXG5cblx0RklUWlBBVFJJQ0tfTU9ESUZJRVJfU1RBUlQgPSAweDFmM2ZiLFxuXHRGSVRaUEFUUklDS19NT0RJRklFUl9FTkQgPSAweDFmM2ZmLFxuXG5cdFZBUklBVElPTl9NT0RJRklFUl9TVEFSVCA9IDB4ZmUwMCxcblx0VkFSSUFUSU9OX01PRElGSUVSX0VORCA9IDB4ZmUwZixcblxuXHRESUFDUklUSUNBTF9NQVJLU19TVEFSVCA9IDB4MjBkMCxcblx0RElBQ1JJVElDQUxfTUFSS1NfRU5EID0gMHgyMGZmLFxuXG5cdFNVQkRJVklTSU9OX0lORElDQVRPUl9TVEFSVCA9IDB4MWYzZjQsXG5cdFRBR1NfU1RBUlQgPSAweGUwMDAwLFxuXHRUQUdTX0VORCA9IDB4ZTAwN2YsXG5cblx0WldKID0gMHgyMDBkLFxufVxuXG5leHBvcnQgY29uc3QgR1JBUEhFTUVTID0gT2JqZWN0LmZyZWV6ZShbXG5cdDB4MDMwOCwgLy8gKCDil4zMiCApIENPTUJJTklORyBESUFFUkVTSVNcblx0MHgwOTM3LCAvLyAoIOCktyApIERFVkFOQUdBUkkgTEVUVEVSIFNTQVxuXHQweDA5M0YsIC8vICgg4KS/ICkgREVWQU5BR0FSSSBWT1dFTCBTSUdOIElcblx0MHgwQkE4LCAvLyAoIOCuqCApIFRBTUlMIExFVFRFUiBOQVxuXHQweDBCQkYsIC8vICgg4K6/ICkgVEFNSUwgVk9XRUwgU0lHTiBJXG5cdDB4MEJDRCwgLy8gKCDil4zgr40pIFRBTUlMIFNJR04gVklSQU1BXG5cdDB4MEUzMSwgLy8gKCDil4zguLEgKSBUSEFJIENIQVJBQ1RFUiBNQUkgSEFOLUFLQVRcblx0MHgwRTMzLCAvLyAoIOC4syApIFRIQUkgQ0hBUkFDVEVSIFNBUkEgQU1cblx0MHgwRTQwLCAvLyAoIOC5gCApIFRIQUkgQ0hBUkFDVEVSIFNBUkEgRVxuXHQweDBFNDksIC8vICgg4LmAICkgVEhBSSBDSEFSQUNURVIgTUFJIFRIT1xuXHQweDExMDAsIC8vICgg4YSAICkgSEFOR1VMIENIT1NFT05HIEtJWUVPS1xuXHQweDExNjEsIC8vICgg4YWhICkgSEFOR1VMIEpVTkdTRU9ORyBBXG5cdDB4MTFBOCwgLy8gKCDhhqggKSBIQU5HVUwgSk9OR1NFT05HIEtJWUVPS1xuXSk7XG5cbmV4cG9ydCBjb25zdCBlbnVtIEVudW1Db2RlVW5pdHNcbntcblx0dW5pdF8xID0gMSxcblx0dW5pdF8yID0gMixcblx0dW5pdF80ID0gNCxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJ1bmVzKHN0cmluZzogc3RyaW5nKTogc3RyaW5nW11cbntcblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKVxuXHR7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignc3RyaW5nIGNhbm5vdCBiZSB1bmRlZmluZWQgb3IgbnVsbCcpXG5cdH1cblx0Y29uc3QgcmVzdWx0OiBzdHJpbmdbXSA9IFtdXG5cdGxldCBpID0gMFxuXHRsZXQgaW5jcmVtZW50ID0gMFxuXHR3aGlsZSAoaSA8IHN0cmluZy5sZW5ndGgpXG5cdHtcblx0XHRpbmNyZW1lbnQgKz0gbmV4dFVuaXRzKGkgKyBpbmNyZW1lbnQsIHN0cmluZylcblx0XHRpZiAoaXNHcmFwaGVtZShzdHJpbmdbaSArIGluY3JlbWVudF0pKVxuXHRcdHtcblx0XHRcdGluY3JlbWVudCsrXG5cdFx0fVxuXHRcdGlmIChpc1ZhcmlhdGlvblNlbGVjdG9yKHN0cmluZ1tpICsgaW5jcmVtZW50XSkpXG5cdFx0e1xuXHRcdFx0aW5jcmVtZW50Kytcblx0XHR9XG5cdFx0aWYgKGlzRGlhY3JpdGljYWxNYXJrKHN0cmluZ1tpICsgaW5jcmVtZW50XSkpXG5cdFx0e1xuXHRcdFx0aW5jcmVtZW50Kytcblx0XHR9XG5cdFx0aWYgKGlzWmVyb1dpZHRoSm9pbmVyKHN0cmluZ1tpICsgaW5jcmVtZW50XSkpXG5cdFx0e1xuXHRcdFx0aW5jcmVtZW50Kytcblx0XHRcdGNvbnRpbnVlXG5cdFx0fVxuXHRcdHJlc3VsdC5wdXNoKHN0cmluZy5zdWJzdHJpbmcoaSwgaSArIGluY3JlbWVudCkpXG5cdFx0aSArPSBpbmNyZW1lbnRcblx0XHRpbmNyZW1lbnQgPSAwXG5cdH1cblx0cmV0dXJuIHJlc3VsdFxufVxuXG4vLyBEZWNpZGUgaG93IG1hbnkgY29kZSB1bml0cyBtYWtlIHVwIHRoZSBjdXJyZW50IGNoYXJhY3Rlci5cbi8vIEJNUCBjaGFyYWN0ZXJzOiAxIGNvZGUgdW5pdFxuLy8gTm9uLUJNUCBjaGFyYWN0ZXJzIChyZXByZXNlbnRlZCBieSBzdXJyb2dhdGUgcGFpcnMpOiAyIGNvZGUgdW5pdHNcbi8vIEVtb2ppIHdpdGggc2tpbi10b25lIG1vZGlmaWVyczogNCBjb2RlIHVuaXRzICgyIGNvZGUgcG9pbnRzKVxuLy8gQ291bnRyeSBmbGFnczogNCBjb2RlIHVuaXRzICgyIGNvZGUgcG9pbnRzKVxuLy8gVmFyaWF0aW9uczogMiBjb2RlIHVuaXRzXG4vLyBTdWJkaXZpc2lvbiBmbGFnczogMTQgY29kZSB1bml0cyAoNyBjb2RlIHBvaW50cylcbmV4cG9ydCBmdW5jdGlvbiBuZXh0VW5pdHMoaTogbnVtYmVyLCBzdHJpbmc6IHN0cmluZylcbntcblx0Y29uc3QgY3VycmVudCA9IHN0cmluZ1tpXVxuXHQvLyBJZiB3ZSBkb24ndCBoYXZlIGEgdmFsdWUgdGhhdCBpcyBwYXJ0IG9mIGEgc3Vycm9nYXRlIHBhaXIsIG9yIHdlJ3JlIGF0XG5cdC8vIHRoZSBlbmQsIG9ubHkgdGFrZSB0aGUgdmFsdWUgYXQgaVxuXHRpZiAoIWlzRmlyc3RPZlN1cnJvZ2F0ZVBhaXIoY3VycmVudCkgfHwgaSA9PT0gc3RyaW5nLmxlbmd0aCAtIDEpXG5cdHtcblx0XHRyZXR1cm4gRW51bUNvZGVVbml0cy51bml0XzFcblx0fVxuXG5cdGNvbnN0IGN1cnJlbnRQYWlyID0gY3VycmVudCArIHN0cmluZ1tpICsgMV1cblx0bGV0IG5leHRQYWlyID0gc3RyaW5nLnN1YnN0cmluZyhpICsgMiwgaSArIDUpXG5cblx0Ly8gQ291bnRyeSBmbGFncyBhcmUgY29tcHJpc2VkIG9mIHR3byByZWdpb25hbCBpbmRpY2F0b3Igc3ltYm9scyxcblx0Ly8gZWFjaCByZXByZXNlbnRlZCBieSBhIHN1cnJvZ2F0ZSBwYWlyLlxuXHQvLyBTZWUgaHR0cDovL2Vtb2ppcGVkaWEub3JnL2ZsYWdzL1xuXHQvLyBJZiBib3RoIHBhaXJzIGFyZSByZWdpb25hbCBpbmRpY2F0b3Igc3ltYm9scywgdGFrZSA0XG5cdGlmIChpc1JlZ2lvbmFsSW5kaWNhdG9yKGN1cnJlbnRQYWlyKSAmJiBpc1JlZ2lvbmFsSW5kaWNhdG9yKG5leHRQYWlyKSlcblx0e1xuXHRcdHJldHVybiBFbnVtQ29kZVVuaXRzLnVuaXRfNFxuXHR9XG5cblx0Ly8gaHR0cHM6Ly91bmljb2RlLm9yZy9lbW9qaS9jaGFydHMvZnVsbC1lbW9qaS1saXN0Lmh0bWwjc3ViZGl2aXNpb24tZmxhZ1xuXHQvLyBTZWUgaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZy9lbW9qaS10YWctc2VxdWVuY2UvXG5cdC8vIElmIG5leHRQYWlyIGlzIGluIFRhZ3MoaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvVGFnc18oVW5pY29kZV9ibG9jaykpLFxuXHQvLyB0aGVuIGZpbmQgbmV4dCBjbG9zZXN0IFUrRTAwN0YoQ0FOQ0VMIFRBRylcblx0aWYgKGlzU3ViZGl2aXNpb25GbGFnKGN1cnJlbnRQYWlyKSAmJlx0aXNTdXBwbGVtZW50YXJ5U3BlY2lhbHB1cnBvc2VQbGFuZShuZXh0UGFpcikpXG5cdHtcblx0XHRyZXR1cm4gc3RyaW5nLnNsaWNlKGkpLmluZGV4T2YoU3RyaW5nLmZyb21Db2RlUG9pbnQoRW51bVJ1bmVzQ29kZS5UQUdTX0VORCkpICsgMlxuXHR9XG5cblx0Ly8gSWYgdGhlIG5leHQgcGFpciBtYWtlIGEgRml0enBhdHJpY2sgc2tpbiB0b25lXG5cdC8vIG1vZGlmaWVyLCB0YWtlIDRcblx0Ly8gU2VlIGh0dHA6Ly9lbW9qaXBlZGlhLm9yZy9tb2RpZmllcnMvXG5cdC8vIFRlY2huaWNhbGx5LCBvbmx5IHNvbWUgY29kZSBwb2ludHMgYXJlIG1lYW50IHRvIGJlXG5cdC8vIGNvbWJpbmVkIHdpdGggdGhlIHNraW4gdG9uZSBtb2RpZmllcnMuIFRoaXMgZnVuY3Rpb25cblx0Ly8gZG9lcyBub3QgY2hlY2sgdGhlIGN1cnJlbnQgcGFpciB0byBzZWUgaWYgaXQgaXNcblx0Ly8gb25lIG9mIHRoZW0uXG5cdGlmIChpc0ZpdHpwYXRyaWNrTW9kaWZpZXIobmV4dFBhaXIpKVxuXHR7XG5cdFx0cmV0dXJuIEVudW1Db2RlVW5pdHMudW5pdF80XG5cdH1cblx0cmV0dXJuIEVudW1Db2RlVW5pdHMudW5pdF8yXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ZpcnN0T2ZTdXJyb2dhdGVQYWlyKHN0cmluZzogc3RyaW5nKVxue1xuXHRyZXR1cm4gc3RyaW5nICYmIGJldHdlZW5JbmNsdXNpdmUoc3RyaW5nWzBdLmNoYXJDb2RlQXQoMCksIEVudW1SdW5lc0NvZGUuSElHSF9TVVJST0dBVEVfU1RBUlQsIEVudW1SdW5lc0NvZGUuSElHSF9TVVJST0dBVEVfRU5EKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZWdpb25hbEluZGljYXRvcihzdHJpbmc6IHN0cmluZylcbntcblx0cmV0dXJuIGJldHdlZW5JbmNsdXNpdmUoY29kZVBvaW50RnJvbVN1cnJvZ2F0ZVBhaXIoc3RyaW5nKSwgRW51bVJ1bmVzQ29kZS5SRUdJT05BTF9JTkRJQ0FUT1JfU1RBUlQsIEVudW1SdW5lc0NvZGUuUkVHSU9OQUxfSU5ESUNBVE9SX0VORClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3ViZGl2aXNpb25GbGFnKHN0cmluZzogc3RyaW5nKVxue1xuXHRyZXR1cm4gYmV0d2VlbkluY2x1c2l2ZShjb2RlUG9pbnRGcm9tU3Vycm9nYXRlUGFpcihzdHJpbmcpLFx0RW51bVJ1bmVzQ29kZS5TVUJESVZJU0lPTl9JTkRJQ0FUT1JfU1RBUlQsIEVudW1SdW5lc0NvZGUuU1VCRElWSVNJT05fSU5ESUNBVE9SX1NUQVJUKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNGaXR6cGF0cmlja01vZGlmaWVyKHN0cmluZzogc3RyaW5nKVxue1xuXHRyZXR1cm4gYmV0d2VlbkluY2x1c2l2ZShjb2RlUG9pbnRGcm9tU3Vycm9nYXRlUGFpcihzdHJpbmcpLCBFbnVtUnVuZXNDb2RlLkZJVFpQQVRSSUNLX01PRElGSUVSX1NUQVJULCBFbnVtUnVuZXNDb2RlLkZJVFpQQVRSSUNLX01PRElGSUVSX0VORClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzVmFyaWF0aW9uU2VsZWN0b3Ioc3RyaW5nOiBzdHJpbmcpXG57XG5cdHJldHVybiB0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJyAmJiBiZXR3ZWVuSW5jbHVzaXZlKHN0cmluZy5jaGFyQ29kZUF0KDApLCBFbnVtUnVuZXNDb2RlLlZBUklBVElPTl9NT0RJRklFUl9TVEFSVCwgRW51bVJ1bmVzQ29kZS5WQVJJQVRJT05fTU9ESUZJRVJfRU5EKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaWFjcml0aWNhbE1hcmsoc3RyaW5nOiBzdHJpbmcpXG57XG5cdHJldHVybiB0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJyAmJiBiZXR3ZWVuSW5jbHVzaXZlKHN0cmluZy5jaGFyQ29kZUF0KDApLCBFbnVtUnVuZXNDb2RlLkRJQUNSSVRJQ0FMX01BUktTX1NUQVJULCBFbnVtUnVuZXNDb2RlLkRJQUNSSVRJQ0FMX01BUktTX0VORClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3VwcGxlbWVudGFyeVNwZWNpYWxwdXJwb3NlUGxhbmUoc3RyaW5nOiBzdHJpbmcpXG57XG5cdGNvbnN0IGNvZGVQb2ludCA9IHN0cmluZy5jb2RlUG9pbnRBdCgwKVxuXHRyZXR1cm4gKHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnICYmXHR0eXBlb2YgY29kZVBvaW50ID09PSAnbnVtYmVyJyAmJiBiZXR3ZWVuSW5jbHVzaXZlKGNvZGVQb2ludCwgRW51bVJ1bmVzQ29kZS5UQUdTX1NUQVJULCBFbnVtUnVuZXNDb2RlLlRBR1NfRU5EKSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzR3JhcGhlbWUoc3RyaW5nOiBzdHJpbmcpXG57XG5cdHJldHVybiB0eXBlb2Ygc3RyaW5nID09PSAnc3RyaW5nJyAmJiBHUkFQSEVNRVMuaW5jbHVkZXMoc3RyaW5nLmNoYXJDb2RlQXQoMCkpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1plcm9XaWR0aEpvaW5lcihzdHJpbmc6IHN0cmluZylcbntcblx0cmV0dXJuIHR5cGVvZiBzdHJpbmcgPT09ICdzdHJpbmcnICYmIHN0cmluZy5jaGFyQ29kZUF0KDApID09PSBFbnVtUnVuZXNDb2RlLlpXSlxufVxuXG5leHBvcnQgZnVuY3Rpb24gY29kZVBvaW50RnJvbVN1cnJvZ2F0ZVBhaXIocGFpcjogc3RyaW5nKVxue1xuXHRjb25zdCBoaWdoT2Zmc2V0ID0gcGFpci5jaGFyQ29kZUF0KDApIC0gRW51bVJ1bmVzQ29kZS5ISUdIX1NVUlJPR0FURV9TVEFSVFxuXHRjb25zdCBsb3dPZmZzZXQgPSBwYWlyLmNoYXJDb2RlQXQoMSkgLSBFbnVtUnVuZXNDb2RlLkxPV19TVVJST0dBVEVfU1RBUlRcblx0cmV0dXJuIChoaWdoT2Zmc2V0IDw8IDEwKSArIGxvd09mZnNldCArIDB4MTAwMDBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJldHdlZW5JbmNsdXNpdmUodmFsdWU6IG51bWJlciwgbG93ZXI6IG51bWJlciwgdXBwZXI6IG51bWJlcilcbntcblx0cmV0dXJuIHZhbHVlID49IGxvd2VyICYmIHZhbHVlIDw9IHVwcGVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdWJzdHJpbmcoc3RyaW5nOiBzdHJpbmcsIHN0YXJ0PzogbnVtYmVyLCB3aWR0aD86IG51bWJlcilcbntcblx0Y29uc3QgY2hhcnMgPSBydW5lcyhzdHJpbmcpXG5cdGlmIChzdGFydCA9PT0gdW5kZWZpbmVkKVxuXHR7XG5cdFx0cmV0dXJuIHN0cmluZ1xuXHR9XG5cdGlmIChzdGFydCA+PSBjaGFycy5sZW5ndGgpXG5cdHtcblx0XHRyZXR1cm4gJydcblx0fVxuXHRjb25zdCByZXN0ID0gY2hhcnMubGVuZ3RoIC0gc3RhcnRcblx0Y29uc3Qgc3RyaW5nV2lkdGggPSB3aWR0aCA9PT0gdW5kZWZpbmVkID8gcmVzdCA6IHdpZHRoXG5cdGxldCBlbmRJbmRleCA9IHN0YXJ0ICsgc3RyaW5nV2lkdGhcblx0aWYgKGVuZEluZGV4ID4gKHN0YXJ0ICsgcmVzdCkpXG5cdHtcblx0XHRlbmRJbmRleCA9IHVuZGVmaW5lZFxuXHR9XG5cdHJldHVybiBjaGFycy5zbGljZShzdGFydCwgZW5kSW5kZXgpLmpvaW4oJycpXG59XG5cbmV4cG9ydCB7IHN1YnN0cmluZyBhcyBzdWJzdHIgfVxuXG4vLyBAdHMtaWdub3JlXG5pZiAocHJvY2Vzcy5lbnYuVFNEWF9GT1JNQVQgIT09ICdlc20nKVxue1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkocnVuZXMsICdydW5lcycsIHsgdmFsdWU6IHJ1bmVzIH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkocnVuZXMsICdkZWZhdWx0JywgeyB2YWx1ZTogcnVuZXMgfSk7XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShydW5lcywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHJ1bmVzLCAnc3Vic3RyJywgeyB2YWx1ZTogc3Vic3RyaW5nIH0pO1xuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkocnVuZXMsICdzdWJzdHJpbmcnLCB7IHZhbHVlOiBzdWJzdHJpbmcgfSk7XG5cblx0Ly8gQHRzLWlnbm9yZVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkocnVuZXMsICdFbnVtUnVuZXNDb2RlJywgeyB2YWx1ZTogRW51bVJ1bmVzQ29kZSB9KTtcblx0Ly8gQHRzLWlnbm9yZVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkocnVuZXMsICdFbnVtQ29kZVVuaXRzJywgeyB2YWx1ZTogRW51bUNvZGVVbml0cyB9KTtcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KHJ1bmVzLCAnR1JBUEhFTUVTJywgeyB2YWx1ZTogR1JBUEhFTUVTIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBydW5lc1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlSW5wdXRIYW5kbGVLZXlEb3duKHtcbiAgb25FbnRlclByZXNzLFxuICBvbktleURvd25cbn0pIHtcbiAgY29uc3QgaGFuZGxlS2V5ZG93biA9IGUgPT4ge1xuICAgIGlmIChvbkVudGVyUHJlc3MgJiYgKGUuY29kZSA9PT0gJ0VudGVyJyB8fCBlLmtleUNvZGUgPT09IDEzKSkge1xuICAgICAgb25FbnRlclByZXNzKGUpO1xuICAgIH1cbiAgICBvbktleURvd24gPT09IG51bGwgfHwgb25LZXlEb3duID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbktleURvd24oZSk7XG4gIH07XG4gIHJldHVybiBoYW5kbGVLZXlkb3duO1xufSIsImltcG9ydCB7IGlzRGV2IH0gZnJvbSAnLi9pcy1kZXYnO1xuZXhwb3J0IGZ1bmN0aW9uIGRldldhcm5pbmcoY29tcG9uZW50LCBtZXNzYWdlKSB7XG4gIGlmIChpc0Rldikge1xuICAgIGNvbnNvbGUud2FybihgW2FudGQtbW9iaWxlOiAke2NvbXBvbmVudH1dICR7bWVzc2FnZX1gKTtcbiAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGRldkVycm9yKGNvbXBvbmVudCwgbWVzc2FnZSkge1xuICBpZiAoaXNEZXYpIHtcbiAgICBjb25zb2xlLmVycm9yKGBbYW50ZC1tb2JpbGU6ICR7Y29tcG9uZW50fV0gJHttZXNzYWdlfWApO1xuICB9XG59XG5sZXQgaW5mb0JveDtcbmV4cG9ydCBmdW5jdGlvbiBkZXZQcmludCguLi5tZXNzYWdlKSB7XG4gIGlmIChpc0Rldikge1xuICAgIGlmICghaW5mb0JveCkge1xuICAgICAgaW5mb0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChpbmZvQm94KTtcbiAgICAgIGluZm9Cb3guc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgaW5mb0JveC5zdHlsZS50b3AgPSAnMCc7XG4gICAgICBpbmZvQm94LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICBpbmZvQm94LnN0eWxlLndpZHRoID0gJzEwMHZ3JztcbiAgICAgIGluZm9Cb3guc3R5bGUuaGVpZ2h0ID0gJzEwMHZoJztcbiAgICAgIGluZm9Cb3guc3R5bGUuekluZGV4ID0gJzk5OTk5OSc7XG4gICAgICBpbmZvQm94LnN0eWxlLmZvbnRTaXplID0gJzEycHgnO1xuICAgICAgLy8gaW5mb0JveC5zdHlsZS5vcGFjaXR5ID0gJzAuODUnXG4gICAgICBpbmZvQm94LnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgICBpbmZvQm94LnN0eWxlLmJhY2tncm91bmQgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgaW5mb0JveC5zdHlsZS50ZXh0U2hhZG93ID0gJy0xcHggLTFweCAwICNGRkYsIC0xcHggMXB4IDAgI0ZGRiwgMXB4IC0xcHggMCAjRkZGLCAxcHggMXB4IDAgI0ZGRic7XG4gICAgfVxuICAgIGluZm9Cb3gudmFsdWUgPSBgJHtpbmZvQm94LnZhbHVlfVxcbiR7bWVzc2FnZS5qb2luKCcgJyl9YC50cmltKCk7XG4gICAgaW5mb0JveC5zY3JvbGxUb3AgPSBpbmZvQm94LnNjcm9sbEhlaWdodDtcbiAgfVxufSIsImV4cG9ydCBjb25zdCBpc0RldiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnIHx8IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhOYXRpdmVQcm9wcyhwcm9wcywgZWxlbWVudCkge1xuICBjb25zdCBwID0gT2JqZWN0LmFzc2lnbih7fSwgZWxlbWVudC5wcm9wcyk7XG4gIGlmIChwcm9wcy5jbGFzc05hbWUpIHtcbiAgICBwLmNsYXNzTmFtZSA9IGNsYXNzTmFtZXMoZWxlbWVudC5wcm9wcy5jbGFzc05hbWUsIHByb3BzLmNsYXNzTmFtZSk7XG4gIH1cbiAgaWYgKHByb3BzLnN0eWxlKSB7XG4gICAgcC5zdHlsZSA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgcC5zdHlsZSksIHByb3BzLnN0eWxlKTtcbiAgfVxuICBpZiAocHJvcHMudGFiSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgIHAudGFiSW5kZXggPSBwcm9wcy50YWJJbmRleDtcbiAgfVxuICBmb3IgKGNvbnN0IGtleSBpbiBwcm9wcykge1xuICAgIGlmICghcHJvcHMuaGFzT3duUHJvcGVydHkoa2V5KSkgY29udGludWU7XG4gICAgaWYgKGtleS5zdGFydHNXaXRoKCdkYXRhLScpIHx8IGtleS5zdGFydHNXaXRoKCdhcmlhLScpKSB7XG4gICAgICBwW2tleV0gPSBwcm9wc1trZXldO1xuICAgIH1cbiAgfVxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGVsZW1lbnQsIHApO1xufSIsIi8qIVxuXHRDb3B5cmlnaHQgKGMpIDIwMTggSmVkIFdhdHNvbi5cblx0TGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlIChNSVQpLCBzZWVcblx0aHR0cDovL2plZHdhdHNvbi5naXRodWIuaW8vY2xhc3NuYW1lc1xuKi9cbi8qIGdsb2JhbCBkZWZpbmUgKi9cblxuKGZ1bmN0aW9uICgpIHtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBoYXNPd24gPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuXHRmdW5jdGlvbiBjbGFzc05hbWVzICgpIHtcblx0XHR2YXIgY2xhc3NlcyA9ICcnO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cdFx0XHRpZiAoYXJnKSB7XG5cdFx0XHRcdGNsYXNzZXMgPSBhcHBlbmRDbGFzcyhjbGFzc2VzLCBwYXJzZVZhbHVlKGFyZykpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzO1xuXHR9XG5cblx0ZnVuY3Rpb24gcGFyc2VWYWx1ZSAoYXJnKSB7XG5cdFx0aWYgKHR5cGVvZiBhcmcgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBhcmcgPT09ICdudW1iZXInKSB7XG5cdFx0XHRyZXR1cm4gYXJnO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgYXJnICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuICcnO1xuXHRcdH1cblxuXHRcdGlmIChBcnJheS5pc0FycmF5KGFyZykpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzLmFwcGx5KG51bGwsIGFyZyk7XG5cdFx0fVxuXG5cdFx0aWYgKGFyZy50b1N0cmluZyAhPT0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyAmJiAhYXJnLnRvU3RyaW5nLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ1tuYXRpdmUgY29kZV0nKSkge1xuXHRcdFx0cmV0dXJuIGFyZy50b1N0cmluZygpO1xuXHRcdH1cblxuXHRcdHZhciBjbGFzc2VzID0gJyc7XG5cblx0XHRmb3IgKHZhciBrZXkgaW4gYXJnKSB7XG5cdFx0XHRpZiAoaGFzT3duLmNhbGwoYXJnLCBrZXkpICYmIGFyZ1trZXldKSB7XG5cdFx0XHRcdGNsYXNzZXMgPSBhcHBlbmRDbGFzcyhjbGFzc2VzLCBrZXkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBjbGFzc2VzO1xuXHR9XG5cblx0ZnVuY3Rpb24gYXBwZW5kQ2xhc3MgKHZhbHVlLCBuZXdDbGFzcykge1xuXHRcdGlmICghbmV3Q2xhc3MpIHtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cdFxuXHRcdGlmICh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIHZhbHVlICsgJyAnICsgbmV3Q2xhc3M7XG5cdFx0fVxuXHRcblx0XHRyZXR1cm4gdmFsdWUgKyBuZXdDbGFzcztcblx0fVxuXG5cdGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuXHRcdGNsYXNzTmFtZXMuZGVmYXVsdCA9IGNsYXNzTmFtZXM7XG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBjbGFzc05hbWVzO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIGRlZmluZS5hbWQgPT09ICdvYmplY3QnICYmIGRlZmluZS5hbWQpIHtcblx0XHQvLyByZWdpc3RlciBhcyAnY2xhc3NuYW1lcycsIGNvbnNpc3RlbnQgd2l0aCBucG0gcGFja2FnZSBuYW1lXG5cdFx0ZGVmaW5lKCdjbGFzc25hbWVzJywgW10sIGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjbGFzc05hbWVzO1xuXHRcdH0pO1xuXHR9IGVsc2Uge1xuXHRcdHdpbmRvdy5jbGFzc05hbWVzID0gY2xhc3NOYW1lcztcblx0fVxufSgpKTtcbiIsImltcG9ydCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU1lbW9pemVkRm4sIHVzZVVwZGF0ZSB9IGZyb20gJ2Fob29rcyc7XG5leHBvcnQgZnVuY3Rpb24gdXNlUHJvcHNWYWx1ZShvcHRpb25zKSB7XG4gIGNvbnN0IHtcbiAgICB2YWx1ZSxcbiAgICBkZWZhdWx0VmFsdWUsXG4gICAgb25DaGFuZ2VcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHVwZGF0ZSA9IHVzZVVwZGF0ZSgpO1xuICBjb25zdCBzdGF0ZVJlZiA9IHVzZVJlZih2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiBkZWZhdWx0VmFsdWUpO1xuICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgIHN0YXRlUmVmLmN1cnJlbnQgPSB2YWx1ZTtcbiAgfVxuICBjb25zdCBzZXRTdGF0ZSA9IHVzZU1lbW9pemVkRm4oKHYsIGZvcmNlVHJpZ2dlciA9IGZhbHNlKSA9PiB7XG4gICAgLy8gYGZvcmNlVHJpZ2dlcmAgbWVhbnMgdHJpZ2dlciBgb25DaGFuZ2VgIGV2ZW4gaWYgYHZgIGlzIHRoZSBzYW1lIGFzIGBzdGF0ZVJlZi5jdXJyZW50YFxuICAgIGNvbnN0IG5leHRWYWx1ZSA9IHR5cGVvZiB2ID09PSAnZnVuY3Rpb24nID8gdihzdGF0ZVJlZi5jdXJyZW50KSA6IHY7XG4gICAgaWYgKCFmb3JjZVRyaWdnZXIgJiYgbmV4dFZhbHVlID09PSBzdGF0ZVJlZi5jdXJyZW50KSByZXR1cm47XG4gICAgc3RhdGVSZWYuY3VycmVudCA9IG5leHRWYWx1ZTtcbiAgICB1cGRhdGUoKTtcbiAgICByZXR1cm4gb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKG5leHRWYWx1ZSk7XG4gIH0pO1xuICByZXR1cm4gW3N0YXRlUmVmLmN1cnJlbnQsIHNldFN0YXRlXTtcbn0iLCJleHBvcnQgZnVuY3Rpb24gbWVyZ2VQcm9wcyguLi5pdGVtcykge1xuICBjb25zdCByZXQgPSB7fTtcbiAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBpZiAoaXRlbSkge1xuICAgICAgT2JqZWN0LmtleXMoaXRlbSkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoaXRlbVtrZXldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXRba2V5XSA9IGl0ZW1ba2V5XTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHJldDtcbn1cbi8qKlxuICogTWVyZ2UgcHJvcHMgYW5kIHJldHVybiB0aGUgZmlyc3Qgbm9uLXVuZGVmaW5lZCB2YWx1ZS5cbiAqIFRoZSBsYXRlciBoYXMgaGlnaGVyIHByaW9yaXR5LiBlLmcuICgxMCwgMSwgNSkgPT4gNSB3aW5zLlxuICogVGhpcyBpcyB1c2VmdWwgd2l0aCBsZWdhY3kgcHJvcHMgdGhhdCBoYXZlIGJlZW4gZGVwcmVjYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlUHJvcChkZWZhdWx0UHJvcCwgLi4ucHJvcExpc3QpIHtcbiAgZm9yIChsZXQgaSA9IHByb3BMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgaWYgKHByb3BMaXN0W2ldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBwcm9wTGlzdFtpXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGRlZmF1bHRQcm9wO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgUmVmcmVzaCA9IHJlcXVpcmUoJ3JlYWN0LXJlZnJlc2gvcnVudGltZScpO1xuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgZGVsYXkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgIGZ1bmMuY2FsbChudWxsLCBhcmdzKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIGxldCB0aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIGxldCBsYXN0VGltZSA9IDA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAvLyBDYWxsIGltbWVkaWF0ZWx5IGlmIGxhc3QgY2FsbCB3YXMgbW9yZSB0aGFuIHRoZSBkZWxheSBhZ28uXG4gICAgICAvLyBPdGhlcndpc2UsIHNldCBhIHRpbWVvdXQuIFRoaXMgbWVhbnMgdGhlIGZpcnN0IGNhbGwgaXMgZmFzdFxuICAgICAgLy8gKGZvciB0aGUgY29tbW9uIGNhc2Ugb2YgYSBzaW5nbGUgdXBkYXRlKSwgYW5kIHN1YnNlcXVlbnQgdXBkYXRlc1xuICAgICAgLy8gYXJlIGJhdGNoZWQuXG4gICAgICBsZXQgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgIGlmIChub3cgLSBsYXN0VGltZSA+IGRlbGF5KSB7XG4gICAgICAgIGxhc3RUaW1lID0gbm93O1xuICAgICAgICBmdW5jLmNhbGwobnVsbCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICBmdW5jLmNhbGwobnVsbCwgYXJncyk7XG4gICAgICAgIH0sIGRlbGF5KTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG59XG52YXIgZW5xdWV1ZVVwZGF0ZSA9IGRlYm91bmNlKGZ1bmN0aW9uICgpIHtcbiAgUmVmcmVzaC5wZXJmb3JtUmVhY3RSZWZyZXNoKCk7XG59LCAzMCk7XG5cbi8vIEV2ZXJ0aGluZyBiZWxvdyBpcyBlaXRoZXIgYWRhcHRlZCBvciBjb3BpZWQgZnJvbVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL21ldHJvL2Jsb2IvNjFkZTE2YmQxZWRkN2U3MzhkZDAzMTFjODk1NTVhNjQ0MDIzYWIyZC9wYWNrYWdlcy9tZXRyby9zcmMvbGliL3BvbHlmaWxscy9yZXF1aXJlLmpzXG4vLyBNSVQgTGljZW5zZSAtIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuXG5tb2R1bGUuZXhwb3J0cy5wcmVsdWRlID0gZnVuY3Rpb24gKG1vZHVsZSkge1xuICB3aW5kb3cuJFJlZnJlc2hSZWckID0gZnVuY3Rpb24gKHR5cGUsIGlkKSB7XG4gICAgUmVmcmVzaC5yZWdpc3Rlcih0eXBlLCBtb2R1bGUuaWQgKyAnICcgKyBpZCk7XG4gIH07XG4gIHdpbmRvdy4kUmVmcmVzaFNpZyQgPSBSZWZyZXNoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtO1xufTtcbm1vZHVsZS5leHBvcnRzLnBvc3RsdWRlID0gZnVuY3Rpb24gKG1vZHVsZSkge1xuICBpZiAoaXNSZWFjdFJlZnJlc2hCb3VuZGFyeShtb2R1bGUuZXhwb3J0cykpIHtcbiAgICByZWdpc3RlckV4cG9ydHNGb3JSZWFjdFJlZnJlc2gobW9kdWxlKTtcbiAgICBpZiAobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIGlmIChSZWZyZXNoLmhhc1VucmVjb3ZlcmFibGVFcnJvcnMoKSkge1xuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLnByZXZFeHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG4gICAgICB9KTtcbiAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KGZ1bmN0aW9uIChnZXRQYXJlbnRzKSB7XG4gICAgICAgIHZhciBwcmV2RXhwb3J0cyA9IG1vZHVsZS5ob3QuZGF0YS5wcmV2RXhwb3J0cztcbiAgICAgICAgdmFyIG5leHRFeHBvcnRzID0gbW9kdWxlLmV4cG9ydHM7XG4gICAgICAgIC8vIFNpbmNlIHdlIGp1c3QgZXhlY3V0ZWQgdGhlIGNvZGUgZm9yIGl0LCBpdCdzIHBvc3NpYmxlXG4gICAgICAgIC8vIHRoYXQgdGhlIG5ldyBleHBvcnRzIG1ha2UgaXQgaW5lbGlnaWJsZSBmb3IgYmVpbmcgYSBib3VuZGFyeS5cbiAgICAgICAgdmFyIGlzTm9Mb25nZXJBQm91bmRhcnkgPSAhaXNSZWFjdFJlZnJlc2hCb3VuZGFyeShuZXh0RXhwb3J0cyk7XG4gICAgICAgIC8vIEl0IGNhbiBhbHNvIGJlY29tZSBpbmVsaWdpYmxlIGlmIGl0cyBleHBvcnRzIGFyZSBpbmNvbXBhdGlibGVcbiAgICAgICAgLy8gd2l0aCB0aGUgcHJldmlvdXMgZXhwb3J0cy5cbiAgICAgICAgLy8gRm9yIGV4YW1wbGUsIGlmIHlvdSBhZGQvcmVtb3ZlL2NoYW5nZSBleHBvcnRzLCB3ZSdsbCB3YW50XG4gICAgICAgIC8vIHRvIHJlLWV4ZWN1dGUgdGhlIGltcG9ydGluZyBtb2R1bGVzLCBhbmQgZm9yY2UgdGhvc2UgY29tcG9uZW50c1xuICAgICAgICAvLyB0byByZS1yZW5kZXIuIFNpbWlsYXJseSwgaWYgeW91IGNvbnZlcnQgYSBjbGFzcyBjb21wb25lbnRcbiAgICAgICAgLy8gdG8gYSBmdW5jdGlvbiwgd2Ugd2FudCB0byBpbnZhbGlkYXRlIHRoZSBib3VuZGFyeS5cbiAgICAgICAgdmFyIGRpZEludmFsaWRhdGUgPSBzaG91bGRJbnZhbGlkYXRlUmVhY3RSZWZyZXNoQm91bmRhcnkocHJldkV4cG9ydHMsIG5leHRFeHBvcnRzKTtcbiAgICAgICAgaWYgKGlzTm9Mb25nZXJBQm91bmRhcnkgfHwgZGlkSW52YWxpZGF0ZSkge1xuICAgICAgICAgIC8vIFdlJ2xsIGJlIGNvbnNlcnZhdGl2ZS4gVGhlIG9ubHkgY2FzZSBpbiB3aGljaCB3ZSB3b24ndCBkbyBhIGZ1bGxcbiAgICAgICAgICAvLyByZWxvYWQgaXMgaWYgYWxsIHBhcmVudCBtb2R1bGVzIGFyZSBhbHNvIHJlZnJlc2ggYm91bmRhcmllcy5cbiAgICAgICAgICAvLyBJbiB0aGF0IGNhc2Ugd2UnbGwgYWRkIHRoZW0gdG8gdGhlIGN1cnJlbnQgcXVldWUuXG4gICAgICAgICAgdmFyIHBhcmVudHMgPSBnZXRQYXJlbnRzKCk7XG4gICAgICAgICAgaWYgKHBhcmVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyBMb29rcyBsaWtlIHdlIGJ1YmJsZWQgdG8gdGhlIHJvb3QuIENhbid0IHJlY292ZXIgZnJvbSB0aGF0LlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcGFyZW50cztcbiAgICAgICAgfVxuICAgICAgICBlbnF1ZXVlVXBkYXRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5mdW5jdGlvbiBpc1JlYWN0UmVmcmVzaEJvdW5kYXJ5KGV4cG9ydHMpIHtcbiAgaWYgKFJlZnJlc2guaXNMaWtlbHlDb21wb25lbnRUeXBlKGV4cG9ydHMpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgaWYgKGV4cG9ydHMgPT0gbnVsbCB8fCB0eXBlb2YgZXhwb3J0cyAhPT0gJ29iamVjdCcpIHtcbiAgICAvLyBFeGl0IGlmIHdlIGNhbid0IGl0ZXJhdGUgb3ZlciBleHBvcnRzLlxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgaGFzRXhwb3J0cyA9IGZhbHNlO1xuICB2YXIgYXJlQWxsRXhwb3J0c0NvbXBvbmVudHMgPSB0cnVlO1xuICBsZXQgaXNFU00gPSAoJ19fZXNNb2R1bGUnIGluIGV4cG9ydHMpO1xuICBmb3IgKHZhciBrZXkgaW4gZXhwb3J0cykge1xuICAgIGhhc0V4cG9ydHMgPSB0cnVlO1xuICAgIGlmIChrZXkgPT09ICdfX2VzTW9kdWxlJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihleHBvcnRzLCBrZXkpO1xuICAgIGlmIChkZXNjICYmIGRlc2MuZ2V0ICYmICFpc0VTTSkge1xuICAgICAgLy8gRG9uJ3QgaW52b2tlIGdldHRlcnMgZm9yIENKUyBhcyB0aGV5IG1heSBoYXZlIHNpZGUgZWZmZWN0cy5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGV4cG9ydFZhbHVlID0gZXhwb3J0c1trZXldO1xuICAgIGlmICghUmVmcmVzaC5pc0xpa2VseUNvbXBvbmVudFR5cGUoZXhwb3J0VmFsdWUpKSB7XG4gICAgICBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gaGFzRXhwb3J0cyAmJiBhcmVBbGxFeHBvcnRzQ29tcG9uZW50cztcbn1cbmZ1bmN0aW9uIHNob3VsZEludmFsaWRhdGVSZWFjdFJlZnJlc2hCb3VuZGFyeShwcmV2RXhwb3J0cywgbmV4dEV4cG9ydHMpIHtcbiAgdmFyIHByZXZTaWduYXR1cmUgPSBnZXRSZWZyZXNoQm91bmRhcnlTaWduYXR1cmUocHJldkV4cG9ydHMpO1xuICB2YXIgbmV4dFNpZ25hdHVyZSA9IGdldFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShuZXh0RXhwb3J0cyk7XG4gIGlmIChwcmV2U2lnbmF0dXJlLmxlbmd0aCAhPT0gbmV4dFNpZ25hdHVyZS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBmb3IgKHZhciBpID0gMDsgaSA8IG5leHRTaWduYXR1cmUubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJldlNpZ25hdHVyZVtpXSAhPT0gbmV4dFNpZ25hdHVyZVtpXSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLy8gV2hlbiB0aGlzIHNpZ25hdHVyZSBjaGFuZ2VzLCBpdCdzIHVuc2FmZSB0byBzdG9wIGF0IHRoaXMgcmVmcmVzaCBib3VuZGFyeS5cbmZ1bmN0aW9uIGdldFJlZnJlc2hCb3VuZGFyeVNpZ25hdHVyZShleHBvcnRzKSB7XG4gIHZhciBzaWduYXR1cmUgPSBbXTtcbiAgc2lnbmF0dXJlLnB1c2goUmVmcmVzaC5nZXRGYW1pbHlCeVR5cGUoZXhwb3J0cykpO1xuICBpZiAoZXhwb3J0cyA9PSBudWxsIHx8IHR5cGVvZiBleHBvcnRzICE9PSAnb2JqZWN0Jykge1xuICAgIC8vIEV4aXQgaWYgd2UgY2FuJ3QgaXRlcmF0ZSBvdmVyIGV4cG9ydHMuXG4gICAgLy8gKFRoaXMgaXMgaW1wb3J0YW50IGZvciBsZWdhY3kgZW52aXJvbm1lbnRzLilcbiAgICByZXR1cm4gc2lnbmF0dXJlO1xuICB9XG4gIGxldCBpc0VTTSA9ICgnX19lc01vZHVsZScgaW4gZXhwb3J0cyk7XG4gIGZvciAodmFyIGtleSBpbiBleHBvcnRzKSB7XG4gICAgaWYgKGtleSA9PT0gJ19fZXNNb2R1bGUnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGV4cG9ydHMsIGtleSk7XG4gICAgaWYgKGRlc2MgJiYgZGVzYy5nZXQgJiYgIWlzRVNNKSB7XG4gICAgICAvLyBEb24ndCBpbnZva2UgZ2V0dGVycyBmb3IgQ0pTIGFzIHRoZXkgbWF5IGhhdmUgc2lkZSBlZmZlY3RzLlxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIHZhciBleHBvcnRWYWx1ZSA9IGV4cG9ydHNba2V5XTtcbiAgICBzaWduYXR1cmUucHVzaChrZXkpO1xuICAgIHNpZ25hdHVyZS5wdXNoKFJlZnJlc2guZ2V0RmFtaWx5QnlUeXBlKGV4cG9ydFZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIHNpZ25hdHVyZTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyRXhwb3J0c0ZvclJlYWN0UmVmcmVzaChtb2R1bGUpIHtcbiAgdmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyxcbiAgICBpZCA9IG1vZHVsZS5pZDtcbiAgUmVmcmVzaC5yZWdpc3RlcihleHBvcnRzLCBpZCArICcgJWV4cG9ydHMlJyk7XG4gIGlmIChleHBvcnRzID09IG51bGwgfHwgdHlwZW9mIGV4cG9ydHMgIT09ICdvYmplY3QnKSB7XG4gICAgLy8gRXhpdCBpZiB3ZSBjYW4ndCBpdGVyYXRlIG92ZXIgZXhwb3J0cy5cbiAgICAvLyAoVGhpcyBpcyBpbXBvcnRhbnQgZm9yIGxlZ2FjeSBlbnZpcm9ubWVudHMuKVxuICAgIHJldHVybjtcbiAgfVxuICBsZXQgaXNFU00gPSAoJ19fZXNNb2R1bGUnIGluIGV4cG9ydHMpO1xuICBmb3IgKHZhciBrZXkgaW4gZXhwb3J0cykge1xuICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihleHBvcnRzLCBrZXkpO1xuICAgIGlmIChkZXNjICYmIGRlc2MuZ2V0ICYmICFpc0VTTSkge1xuICAgICAgLy8gRG9uJ3QgaW52b2tlIGdldHRlcnMgZm9yIENKUyBhcyB0aGV5IG1heSBoYXZlIHNpZGUgZWZmZWN0cy5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICB2YXIgZXhwb3J0VmFsdWUgPSBleHBvcnRzW2tleV07XG4gICAgdmFyIHR5cGVJRCA9IGlkICsgJyAlZXhwb3J0cyUgJyArIGtleTtcbiAgICBSZWZyZXNoLnJlZ2lzdGVyKGV4cG9ydFZhbHVlLCB0eXBlSUQpO1xuICB9XG59IiwidmFyIG9lPU9iamVjdC5jcmVhdGU7dmFyIEg9T2JqZWN0LmRlZmluZVByb3BlcnR5O3ZhciBhZT1PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO3ZhciB1ZT1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lczt2YXIgc2U9T2JqZWN0LmdldFByb3RvdHlwZU9mLGxlPU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7dmFyIHo9KG8sZik9PigpPT4oZnx8bygoZj17ZXhwb3J0czp7fX0pLmV4cG9ydHMsZiksZi5leHBvcnRzKSxjZT0obyxmKT0+e2Zvcih2YXIgcyBpbiBmKUgobyxzLHtnZXQ6ZltzXSxlbnVtZXJhYmxlOiEwfSl9LEQ9KG8sZixzLHkpPT57aWYoZiYmdHlwZW9mIGY9PVwib2JqZWN0XCJ8fHR5cGVvZiBmPT1cImZ1bmN0aW9uXCIpZm9yKGxldCBtIG9mIHVlKGYpKSFsZS5jYWxsKG8sbSkmJm0hPT1zJiZIKG8sbSx7Z2V0OigpPT5mW21dLGVudW1lcmFibGU6ISh5PWFlKGYsbSkpfHx5LmVudW1lcmFibGV9KTtyZXR1cm4gb30sUz0obyxmLHMpPT4oRChvLGYsXCJkZWZhdWx0XCIpLHMmJkQocyxmLFwiZGVmYXVsdFwiKSksRz0obyxmLHMpPT4ocz1vIT1udWxsP29lKHNlKG8pKTp7fSxEKGZ8fCFvfHwhby5fX2VzTW9kdWxlP0gocyxcImRlZmF1bHRcIix7dmFsdWU6byxlbnVtZXJhYmxlOiEwfSk6cyxvKSksZGU9bz0+RChIKHt9LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLG8pO3ZhciBOPXooaD0+e1widXNlIHN0cmljdFwiOyhmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBvPVN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKSxmPVN5bWJvbC5mb3IoXCJyZWFjdC5tZW1vXCIpLHM9dHlwZW9mIFdlYWtNYXA9PVwiZnVuY3Rpb25cIj9XZWFrTWFwOk1hcCx5PW5ldyBNYXAsbT1uZXcgcyxiPW5ldyBzLGo9bmV3IHMsRT1bXSxDPW5ldyBNYXAsTz1uZXcgTWFwLHA9bmV3IFNldCxfPW5ldyBTZXQsRj10eXBlb2YgV2Vha01hcD09XCJmdW5jdGlvblwiP25ldyBXZWFrTWFwOm51bGwsVD0hMTtmdW5jdGlvbiBCKGUpe2lmKGUuZnVsbEtleSE9PW51bGwpcmV0dXJuIGUuZnVsbEtleTt2YXIgcj1lLm93bktleSxuO3RyeXtuPWUuZ2V0Q3VzdG9tSG9va3MoKX1jYXRjaChpKXtyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHJ9Zm9yKHZhciB0PTA7dDxuLmxlbmd0aDt0Kyspe3ZhciBsPW5bdF07aWYodHlwZW9mIGwhPVwiZnVuY3Rpb25cIilyZXR1cm4gZS5mb3JjZVJlc2V0PSEwLGUuZnVsbEtleT1yLHI7dmFyIGQ9Yi5nZXQobCk7aWYoZCE9PXZvaWQgMCl7dmFyIGE9QihkKTtkLmZvcmNlUmVzZXQmJihlLmZvcmNlUmVzZXQ9ITApLHIrPVwiXFxuLS0tXFxuXCIrYX19cmV0dXJuIGUuZnVsbEtleT1yLHJ9ZnVuY3Rpb24gcShlLHIpe3ZhciBuPWIuZ2V0KGUpLHQ9Yi5nZXQocik7cmV0dXJuIG49PT12b2lkIDAmJnQ9PT12b2lkIDA/ITA6IShuPT09dm9pZCAwfHx0PT09dm9pZCAwfHxCKG4pIT09Qih0KXx8dC5mb3JjZVJlc2V0KX1mdW5jdGlvbiAkKGUpe3JldHVybiBlLnByb3RvdHlwZSYmZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudH1mdW5jdGlvbiBrKGUscil7cmV0dXJuICQoZSl8fCQocik/ITE6ISFxKGUscil9ZnVuY3Rpb24gWShlKXtyZXR1cm4gai5nZXQoZSl9ZnVuY3Rpb24gWihlKXt2YXIgcj1uZXcgTWFwO3JldHVybiBlLmZvckVhY2goZnVuY3Rpb24obix0KXtyLnNldCh0LG4pfSkscn1mdW5jdGlvbiBXKGUpe3ZhciByPW5ldyBTZXQ7cmV0dXJuIGUuZm9yRWFjaChmdW5jdGlvbihuKXtyLmFkZChuKX0pLHJ9ZnVuY3Rpb24gTShlLHIpe3RyeXtyZXR1cm4gZVtyXX1jYXRjaChuKXtyZXR1cm59fWZ1bmN0aW9uIEooKXtpZihFLmxlbmd0aD09PTB8fFQpcmV0dXJuIG51bGw7VD0hMDt0cnl7dmFyIGU9bmV3IFNldCxyPW5ldyBTZXQsbj1FO0U9W10sbi5mb3JFYWNoKGZ1bmN0aW9uKHUpe3ZhciBjPXVbMF0sdj11WzFdLFI9Yy5jdXJyZW50O2ouc2V0KFIsYyksai5zZXQodixjKSxjLmN1cnJlbnQ9dixrKFIsdik/ci5hZGQoYyk6ZS5hZGQoYyl9KTt2YXIgdD17dXBkYXRlZEZhbWlsaWVzOnIsc3RhbGVGYW1pbGllczplfTtDLmZvckVhY2goZnVuY3Rpb24odSl7dS5zZXRSZWZyZXNoSGFuZGxlcihZKX0pO3ZhciBsPSExLGQ9bnVsbCxhPVcoXyksaT1XKHApLGc9WihPKTtpZihhLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7aWYoXy5oYXModSksRiE9PW51bGwmJkYuaGFzKHUpKXt2YXIgdj1GLmdldCh1KTt0cnl7Yy5zY2hlZHVsZVJvb3QodSx2KX1jYXRjaChSKXtsfHwobD0hMCxkPVIpfX19KSxpLmZvckVhY2goZnVuY3Rpb24odSl7dmFyIGM9Zy5nZXQodSk7aWYoYz09PXZvaWQgMCl0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZCBub3QgZmluZCBoZWxwZXJzIGZvciBhIHJvb3QuIFRoaXMgaXMgYSBidWcgaW4gUmVhY3QgUmVmcmVzaC5cIik7cC5oYXModSk7dHJ5e2Muc2NoZWR1bGVSZWZyZXNoKHUsdCl9Y2F0Y2godil7bHx8KGw9ITAsZD12KX19KSxsKXRocm93IGQ7cmV0dXJuIHR9ZmluYWxseXtUPSExfX1mdW5jdGlvbiBQKGUscil7e2lmKGU9PT1udWxsfHx0eXBlb2YgZSE9XCJmdW5jdGlvblwiJiZ0eXBlb2YgZSE9XCJvYmplY3RcInx8bS5oYXMoZSkpcmV0dXJuO3ZhciBuPXkuZ2V0KHIpO2lmKG49PT12b2lkIDA/KG49e2N1cnJlbnQ6ZX0seS5zZXQocixuKSk6RS5wdXNoKFtuLGVdKSxtLnNldChlLG4pLHR5cGVvZiBlPT1cIm9iamVjdFwiJiZlIT09bnVsbClzd2l0Y2goTShlLFwiJCR0eXBlb2ZcIikpe2Nhc2UgbzpQKGUucmVuZGVyLHIrXCIkcmVuZGVyXCIpO2JyZWFrO2Nhc2UgZjpQKGUudHlwZSxyK1wiJHR5cGVcIik7YnJlYWt9fX1mdW5jdGlvbiBLKGUscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZhcmd1bWVudHNbMl0hPT12b2lkIDA/YXJndW1lbnRzWzJdOiExLHQ9YXJndW1lbnRzLmxlbmd0aD4zP2FyZ3VtZW50c1szXTp2b2lkIDA7aWYoYi5oYXMoZSl8fGIuc2V0KGUse2ZvcmNlUmVzZXQ6bixvd25LZXk6cixmdWxsS2V5Om51bGwsZ2V0Q3VzdG9tSG9va3M6dHx8ZnVuY3Rpb24oKXtyZXR1cm5bXX19KSx0eXBlb2YgZT09XCJvYmplY3RcIiYmZSE9PW51bGwpc3dpdGNoKE0oZSxcIiQkdHlwZW9mXCIpKXtjYXNlIG86SyhlLnJlbmRlcixyLG4sdCk7YnJlYWs7Y2FzZSBmOksoZS50eXBlLHIsbix0KTticmVha319ZnVuY3Rpb24geChlKXt7dmFyIHI9Yi5nZXQoZSk7ciE9PXZvaWQgMCYmQihyKX19ZnVuY3Rpb24gUShlKXtyZXR1cm4geS5nZXQoZSl9ZnVuY3Rpb24gWChlKXtyZXR1cm4gbS5nZXQoZSl9ZnVuY3Rpb24gZWUoZSl7e3ZhciByPW5ldyBTZXQ7cmV0dXJuIHAuZm9yRWFjaChmdW5jdGlvbihuKXt2YXIgdD1PLmdldChuKTtpZih0PT09dm9pZCAwKXRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGhlbHBlcnMgZm9yIGEgcm9vdC4gVGhpcyBpcyBhIGJ1ZyBpbiBSZWFjdCBSZWZyZXNoLlwiKTt2YXIgbD10LmZpbmRIb3N0SW5zdGFuY2VzRm9yUmVmcmVzaChuLGUpO2wuZm9yRWFjaChmdW5jdGlvbihkKXtyLmFkZChkKX0pfSkscn19ZnVuY3Rpb24gcmUoZSl7e3ZhciByPWUuX19SRUFDVF9ERVZUT09MU19HTE9CQUxfSE9PS19fO2lmKHI9PT12b2lkIDApe3ZhciBuPTA7ZS5fX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX189cj17cmVuZGVyZXJzOm5ldyBNYXAsc3VwcG9ydHNGaWJlcjohMCxpbmplY3Q6ZnVuY3Rpb24oYSl7cmV0dXJuIG4rK30sb25TY2hlZHVsZUZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyl7fSxvbkNvbW1pdEZpYmVyUm9vdDpmdW5jdGlvbihhLGksZyx1KXt9LG9uQ29tbWl0RmliZXJVbm1vdW50OmZ1bmN0aW9uKCl7fX19aWYoci5pc0Rpc2FibGVkKXtjb25zb2xlLndhcm4oXCJTb21ldGhpbmcgaGFzIHNoaW1tZWQgdGhlIFJlYWN0IERldlRvb2xzIGdsb2JhbCBob29rIChfX1JFQUNUX0RFVlRPT0xTX0dMT0JBTF9IT09LX18pLiBGYXN0IFJlZnJlc2ggaXMgbm90IGNvbXBhdGlibGUgd2l0aCB0aGlzIHNoaW0gYW5kIHdpbGwgYmUgZGlzYWJsZWQuXCIpO3JldHVybn12YXIgdD1yLmluamVjdDtyLmluamVjdD1mdW5jdGlvbihhKXt2YXIgaT10LmFwcGx5KHRoaXMsYXJndW1lbnRzKTtyZXR1cm4gdHlwZW9mIGEuc2NoZWR1bGVSZWZyZXNoPT1cImZ1bmN0aW9uXCImJnR5cGVvZiBhLnNldFJlZnJlc2hIYW5kbGVyPT1cImZ1bmN0aW9uXCImJkMuc2V0KGksYSksaX0sci5yZW5kZXJlcnMuZm9yRWFjaChmdW5jdGlvbihhLGkpe3R5cGVvZiBhLnNjaGVkdWxlUmVmcmVzaD09XCJmdW5jdGlvblwiJiZ0eXBlb2YgYS5zZXRSZWZyZXNoSGFuZGxlcj09XCJmdW5jdGlvblwiJiZDLnNldChpLGEpfSk7dmFyIGw9ci5vbkNvbW1pdEZpYmVyUm9vdCxkPXIub25TY2hlZHVsZUZpYmVyUm9vdHx8ZnVuY3Rpb24oKXt9O3Iub25TY2hlZHVsZUZpYmVyUm9vdD1mdW5jdGlvbihhLGksZyl7cmV0dXJuIFR8fChfLmRlbGV0ZShpKSxGIT09bnVsbCYmRi5zZXQoaSxnKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LHIub25Db21taXRGaWJlclJvb3Q9ZnVuY3Rpb24oYSxpLGcsdSl7dmFyIGM9Qy5nZXQoYSk7aWYoYyE9PXZvaWQgMCl7Ty5zZXQoaSxjKTt2YXIgdj1pLmN1cnJlbnQsUj12LmFsdGVybmF0ZTtpZihSIT09bnVsbCl7dmFyIEw9Ui5tZW1vaXplZFN0YXRlIT1udWxsJiZSLm1lbW9pemVkU3RhdGUuZWxlbWVudCE9bnVsbCYmcC5oYXMoaSksQT12Lm1lbW9pemVkU3RhdGUhPW51bGwmJnYubWVtb2l6ZWRTdGF0ZS5lbGVtZW50IT1udWxsOyFMJiZBPyhwLmFkZChpKSxfLmRlbGV0ZShpKSk6TCYmQXx8KEwmJiFBPyhwLmRlbGV0ZShpKSx1P18uYWRkKGkpOk8uZGVsZXRlKGkpKTohTCYmIUEmJnUmJl8uYWRkKGkpKX1lbHNlIHAuYWRkKGkpfXJldHVybiBsLmFwcGx5KHRoaXMsYXJndW1lbnRzKX19fWZ1bmN0aW9uIG5lKCl7cmV0dXJuITF9ZnVuY3Rpb24gdGUoKXtyZXR1cm4gcC5zaXplfWZ1bmN0aW9uIGZlKCl7e3ZhciBlLHIsbj0hMTtyZXR1cm4gZnVuY3Rpb24odCxsLGQsYSl7aWYodHlwZW9mIGw9PVwic3RyaW5nXCIpcmV0dXJuIGV8fChlPXQscj10eXBlb2YgYT09XCJmdW5jdGlvblwiKSx0IT1udWxsJiYodHlwZW9mIHQ9PVwiZnVuY3Rpb25cInx8dHlwZW9mIHQ9PVwib2JqZWN0XCIpJiZLKHQsbCxkLGEpLHQ7IW4mJnImJihuPSEwLHgoZSkpfX19ZnVuY3Rpb24gaWUoZSl7c3dpdGNoKHR5cGVvZiBlKXtjYXNlXCJmdW5jdGlvblwiOntpZihlLnByb3RvdHlwZSE9bnVsbCl7aWYoZS5wcm90b3R5cGUuaXNSZWFjdENvbXBvbmVudClyZXR1cm4hMDt2YXIgcj1PYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhlLnByb3RvdHlwZSk7aWYoci5sZW5ndGg+MXx8clswXSE9PVwiY29uc3RydWN0b3JcInx8ZS5wcm90b3R5cGUuX19wcm90b19fIT09T2JqZWN0LnByb3RvdHlwZSlyZXR1cm4hMX12YXIgbj1lLm5hbWV8fGUuZGlzcGxheU5hbWU7cmV0dXJuIHR5cGVvZiBuPT1cInN0cmluZ1wiJiYvXltBLVpdLy50ZXN0KG4pfWNhc2VcIm9iamVjdFwiOntpZihlIT1udWxsKXN3aXRjaChNKGUsXCIkJHR5cGVvZlwiKSl7Y2FzZSBvOmNhc2UgZjpyZXR1cm4hMDtkZWZhdWx0OnJldHVybiExfXJldHVybiExfWRlZmF1bHQ6cmV0dXJuITF9fWguX2dldE1vdW50ZWRSb290Q291bnQ9dGUsaC5jb2xsZWN0Q3VzdG9tSG9va3NGb3JTaWduYXR1cmU9eCxoLmNyZWF0ZVNpZ25hdHVyZUZ1bmN0aW9uRm9yVHJhbnNmb3JtPWZlLGguZmluZEFmZmVjdGVkSG9zdEluc3RhbmNlcz1lZSxoLmdldEZhbWlseUJ5SUQ9USxoLmdldEZhbWlseUJ5VHlwZT1YLGguaGFzVW5yZWNvdmVyYWJsZUVycm9ycz1uZSxoLmluamVjdEludG9HbG9iYWxIb29rPXJlLGguaXNMaWtlbHlDb21wb25lbnRUeXBlPWllLGgucGVyZm9ybVJlYWN0UmVmcmVzaD1KLGgucmVnaXN0ZXI9UCxoLnNldFNpZ25hdHVyZT1LfSkoKX0pO3ZhciBJPXooKHBlLFYpPT57XCJ1c2Ugc3RyaWN0XCI7Vi5leHBvcnRzPU4oKX0pO3ZhciB3PXt9O2NlKHcse2RlZmF1bHQ6KCk9PmhlfSk7bW9kdWxlLmV4cG9ydHM9ZGUodyk7dmFyIFU9RyhJKCkpO1ModyxHKEkoKSksbW9kdWxlLmV4cG9ydHMpO3ZhciBoZT1VLmRlZmF1bHQ7XG4vKiEgQnVuZGxlZCBsaWNlbnNlIGluZm9ybWF0aW9uOlxuXG5yZWFjdC1yZWZyZXNoL2Nqcy9yZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanM6XG4gICgqKlxuICAgKiBAbGljZW5zZSBSZWFjdFxuICAgKiByZWFjdC1yZWZyZXNoLXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanNcbiAgICpcbiAgICogQ29weXJpZ2h0IChjKSBGYWNlYm9vaywgSW5jLiBhbmQgaXRzIGFmZmlsaWF0ZXMuXG4gICAqXG4gICAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICAgKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gICAqKVxuKi9cbiJdLCJuYW1lcyI6WyJFbnVtUnVuZXNDb2RlIiwiR1JBUEhFTUVTIiwiT2JqZWN0IiwiZnJlZXplIiwiRW51bUNvZGVVbml0cyIsInJ1bmVzIiwic3RyaW5nIiwiVHlwZUVycm9yIiwicmVzdWx0IiwiaSIsImluY3JlbWVudCIsImxlbmd0aCIsIm5leHRVbml0cyIsImlzR3JhcGhlbWUiLCJpc1ZhcmlhdGlvblNlbGVjdG9yIiwiaXNEaWFjcml0aWNhbE1hcmsiLCJpc1plcm9XaWR0aEpvaW5lciIsInB1c2giLCJzdWJzdHJpbmciLCJjdXJyZW50IiwiaXNGaXJzdE9mU3Vycm9nYXRlUGFpciIsInVuaXRfMSIsImN1cnJlbnRQYWlyIiwibmV4dFBhaXIiLCJpc1JlZ2lvbmFsSW5kaWNhdG9yIiwidW5pdF80IiwiaXNTdWJkaXZpc2lvbkZsYWciLCJpc1N1cHBsZW1lbnRhcnlTcGVjaWFscHVycG9zZVBsYW5lIiwic2xpY2UiLCJpbmRleE9mIiwiU3RyaW5nIiwiZnJvbUNvZGVQb2ludCIsIlRBR1NfRU5EIiwiaXNGaXR6cGF0cmlja01vZGlmaWVyIiwidW5pdF8yIiwiYmV0d2VlbkluY2x1c2l2ZSIsImNoYXJDb2RlQXQiLCJISUdIX1NVUlJPR0FURV9TVEFSVCIsIkhJR0hfU1VSUk9HQVRFX0VORCIsImNvZGVQb2ludEZyb21TdXJyb2dhdGVQYWlyIiwiUkVHSU9OQUxfSU5ESUNBVE9SX1NUQVJUIiwiUkVHSU9OQUxfSU5ESUNBVE9SX0VORCIsIlNVQkRJVklTSU9OX0lORElDQVRPUl9TVEFSVCIsIkZJVFpQQVRSSUNLX01PRElGSUVSX1NUQVJUIiwiRklUWlBBVFJJQ0tfTU9ESUZJRVJfRU5EIiwiVkFSSUFUSU9OX01PRElGSUVSX1NUQVJUIiwiVkFSSUFUSU9OX01PRElGSUVSX0VORCIsIkRJQUNSSVRJQ0FMX01BUktTX1NUQVJUIiwiRElBQ1JJVElDQUxfTUFSS1NfRU5EIiwiY29kZVBvaW50IiwiY29kZVBvaW50QXQiLCJUQUdTX1NUQVJUIiwiaW5jbHVkZXMiLCJaV0oiLCJwYWlyIiwiTE9XX1NVUlJPR0FURV9TVEFSVCIsInZhbHVlIiwibG93ZXIiLCJ1cHBlciIsInN0YXJ0Iiwid2lkdGgiLCJjaGFycyIsInVuZGVmaW5lZCIsInJlc3QiLCJlbmRJbmRleCIsImpvaW4iXSwidmVyc2lvbiI6MywiZmlsZSI6ImFkdmFuY2VkLjZhYTk1ZTY1LmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);