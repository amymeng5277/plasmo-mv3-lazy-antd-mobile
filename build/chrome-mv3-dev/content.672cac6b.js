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
})({"3Cj9a":[function(require,module,exports) {
var d = globalThis.process?.argv || [];
var y = ()=>globalThis.process?.env || {};
var H = new Set(d), _ = (e)=>H.has(e), G = d.filter((e)=>e.startsWith("--") && e.includes("=")).map((e)=>e.split("=")).reduce((e, [t, o])=>(e[t] = o, e), {});
var Z = _("--dry-run"), p = ()=>_("--verbose") || y().VERBOSE === "true", q = p();
var u = (e = "", ...t)=>console.log(e.padEnd(9), "|", ...t);
var x = (...e)=>console.error("\uD83D\uDD34 ERROR".padEnd(9), "|", ...e), v = (...e)=>u("\uD83D\uDD35 INFO", ...e), m = (...e)=>u("\uD83D\uDFE0 WARN", ...e), S = 0, c = (...e)=>p() && u(`\u{1F7E1} ${S++}`, ...e);
var n = {
    "isContentScript": true,
    "isBackground": false,
    "isReact": false,
    "runtimes": [
        "script-runtime"
    ],
    "host": "localhost",
    "port": 1815,
    "entryFilePath": "/Users/mengdongqi/Documents/Projects/plasmo-mv3-lazy-antd-mobile/content.ts",
    "bundleId": "3716c965672cac6b",
    "envHash": "e792fbbdaa78ee84",
    "verbose": "false",
    "secure": false,
    "serverPort": 55649
};
module.bundle.HMR_BUNDLE_ID = n.bundleId;
globalThis.process = {
    argv: [],
    env: {
        VERBOSE: n.verbose
    }
};
var D = module.bundle.Module;
function I(e) {
    D.call(this, e), this.hot = {
        data: module.bundle.hotData[e],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(t) {
            this._acceptCallbacks.push(t || function() {});
        },
        dispose: function(t) {
            this._disposeCallbacks.push(t);
        }
    }, module.bundle.hotData[e] = void 0;
}
module.bundle.Module = I;
module.bundle.hotData = {};
var l = globalThis.browser || globalThis.chrome || null;
function b() {
    return !n.host || n.host === "0.0.0.0" ? "localhost" : n.host;
}
function C() {
    return n.port || location.port;
}
var E = "__plasmo_runtime_script_";
function L(e, t) {
    let { modules: o } = e;
    return o ? !!o[t] : !1;
}
function O(e = C()) {
    let t = b();
    return `${n.secure || location.protocol === "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(t) ? "wss" : "ws"}://${t}:${e}/`;
}
function B(e) {
    typeof e.message == "string" && x("[plasmo/parcel-runtime]: " + e.message);
}
function P(e) {
    if (typeof globalThis.WebSocket > "u") return;
    let t = new WebSocket(O());
    return t.addEventListener("message", async function(o) {
        let r = JSON.parse(o.data);
        if (r.type === "update" && await e(r.assets), r.type === "error") for (let a of r.diagnostics.ansi){
            let w = a.codeframe || a.stack;
            m("[plasmo/parcel-runtime]: " + a.message + `
` + w + `

` + a.hints.join(`
`));
        }
    }), t.addEventListener("error", B), t.addEventListener("open", ()=>{
        v(`[plasmo/parcel-runtime]: Connected to HMR server for ${n.entryFilePath}`);
    }), t.addEventListener("close", ()=>{
        m(`[plasmo/parcel-runtime]: Connection to the HMR server is closed for ${n.entryFilePath}`);
    }), t;
}
var s = "__plasmo-loading__";
function $() {
    let e = globalThis.window?.trustedTypes;
    if (typeof e > "u") return;
    let t = document.querySelector('meta[name="trusted-types"]')?.content?.split(" "), o = t ? t[t?.length - 1].replace(/;/g, "") : void 0;
    return typeof e < "u" ? e.createPolicy(o || `trusted-html-${s}`, {
        createHTML: (a)=>a
    }) : void 0;
}
var T = $();
function g() {
    return document.getElementById(s);
}
function f() {
    return !g();
}
function F() {
    let e = document.createElement("div");
    e.id = s;
    let t = `
  <style>
    #${s} {
      background: #f3f3f3;
      color: #333;
      border: 1px solid #333;
      box-shadow: #333 4.7px 4.7px;
    }

    #${s}:hover {
      background: #e3e3e3;
      color: #444;
    }

    @keyframes plasmo-loading-animate-svg-fill {
      0% {
        fill: transparent;
      }
    
      100% {
        fill: #333;
      }
    }

    #${s} .svg-elem-1 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both infinite;
    }

    #${s} .svg-elem-2 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 0.9s both infinite;
    }
    
    #${s} .svg-elem-3 {
      animation: plasmo-loading-animate-svg-fill 1.47s cubic-bezier(0.47, 0, 0.745, 0.715) 1s both infinite;
    }

    #${s} .hidden {
      display: none;
    }

  </style>
  
  <svg height="32" width="32" viewBox="0 0 264 354" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M139.221 282.243C154.252 282.243 166.903 294.849 161.338 308.812C159.489 313.454 157.15 317.913 154.347 322.109C146.464 333.909 135.26 343.107 122.151 348.538C109.043 353.969 94.6182 355.39 80.7022 352.621C66.7861 349.852 54.0034 343.018 43.9705 332.983C33.9375 322.947 27.105 310.162 24.3369 296.242C21.5689 282.323 22.9895 267.895 28.4193 254.783C33.8491 241.671 43.0441 230.464 54.8416 222.579C59.0353 219.777 63.4908 217.438 68.1295 215.588C82.0915 210.021 94.6978 222.671 94.6978 237.703L94.6978 255.027C94.6978 270.058 106.883 282.243 121.914 282.243H139.221Z" fill="#333" class="svg-elem-1" ></path>
    <path d="M192.261 142.028C192.261 126.996 204.867 114.346 218.829 119.913C223.468 121.763 227.923 124.102 232.117 126.904C243.915 134.789 253.11 145.996 258.539 159.108C263.969 172.22 265.39 186.648 262.622 200.567C259.854 214.487 253.021 227.272 242.988 237.308C232.955 247.343 220.173 254.177 206.256 256.946C192.34 259.715 177.916 258.294 164.807 252.863C151.699 247.432 140.495 238.234 132.612 226.434C129.808 222.238 127.47 217.779 125.62 213.137C120.056 199.174 132.707 186.568 147.738 186.568L165.044 186.568C180.076 186.568 192.261 174.383 192.261 159.352L192.261 142.028Z" fill="#333" class="svg-elem-2" ></path>
    <path d="M95.6522 164.135C95.6522 179.167 83.2279 191.725 68.8013 187.505C59.5145 184.788 50.6432 180.663 42.5106 175.227C26.7806 164.714 14.5206 149.772 7.28089 132.289C0.041183 114.807 -1.85305 95.5697 1.83772 77.0104C5.52849 58.4511 14.6385 41.4033 28.0157 28.0228C41.393 14.6423 58.4366 5.53006 76.9914 1.83839C95.5461 -1.85329 114.779 0.0414162 132.257 7.2829C149.735 14.5244 164.674 26.7874 175.184 42.5212C180.62 50.6576 184.744 59.5332 187.46 68.8245C191.678 83.2519 179.119 95.6759 164.088 95.6759L122.869 95.6759C107.837 95.6759 95.6522 107.861 95.6522 122.892L95.6522 164.135Z" fill="#333" class="svg-elem-3"></path>
  </svg>
  <span class="hidden">Context Invalidated, Press to Reload</span>
  `;
    return e.innerHTML = T ? T.createHTML(t) : t, e.style.pointerEvents = "none", e.style.position = "fixed", e.style.bottom = "14.7px", e.style.right = "14.7px", e.style.fontFamily = "sans-serif", e.style.display = "flex", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.padding = "14.7px", e.style.gap = "14.7px", e.style.borderRadius = "4.7px", e.style.zIndex = "2147483647", e.style.opacity = "0", e.style.transition = "all 0.47s ease-in-out", e;
}
function N(e) {
    return new Promise((t)=>{
        document.documentElement ? (f() && (document.documentElement.appendChild(e), t()), t()) : globalThis.addEventListener("DOMContentLoaded", ()=>{
            f() && document.documentElement.appendChild(e), t();
        });
    });
}
var k = ()=>{
    let e;
    if (f()) {
        let t = F();
        e = N(t);
    }
    return {
        show: async ({ reloadButton: t = !1 } = {})=>{
            await e;
            let o = g();
            o.style.opacity = "1", t && (o.onclick = (r)=>{
                r.stopPropagation(), globalThis.location.reload();
            }, o.querySelector("span").classList.remove("hidden"), o.style.cursor = "pointer", o.style.pointerEvents = "all");
        },
        hide: async ()=>{
            await e;
            let t = g();
            t.style.opacity = "0";
        }
    };
};
var W = `${E}${module.id}__`, i, A = !1, M = k();
async function h() {
    c("Script Runtime - reloading"), A ? globalThis.location?.reload?.() : M.show({
        reloadButton: !0
    });
}
function R() {
    i?.disconnect(), i = l?.runtime.connect({
        name: W
    }), i.onDisconnect.addListener(()=>{
        h();
    }), i.onMessage.addListener((e)=>{
        e.__plasmo_cs_reload__ && h(), e.__plasmo_cs_active_tab__ && (A = !0);
    });
}
function j() {
    if (l?.runtime) try {
        R(), setInterval(R, 24e3);
    } catch  {
        return;
    }
}
j();
P(async (e)=>{
    c("Script runtime - on updated assets"), e.filter((o)=>o.envHash === n.envHash).some((o)=>L(module.bundle, o.id)) && (M.show(), l?.runtime ? i.postMessage({
        __plasmo_cs_changed__: !0
    }) : setTimeout(()=>{
        h();
    }, 4700));
});

},{}],"71ecL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
const config = {
    matches: [
        "https://example.com/*"
    ],
    run_at: "document_idle"
};
const host = document.createElement("div");
host.id = "plasmo-lazy-demo-host";
host.style.cssText = [
    "position:fixed",
    "right:16px",
    "bottom:16px",
    "z-index:2147483647",
    "pointer-events:auto"
].join(";");
// The host page can see the element, but not the content script's JS variables.
const shadowRoot = host.attachShadow({
    mode: "open"
});
const launcher = document.createElement("button");
launcher.type = "button";
launcher.textContent = "Open UI";
launcher.title = "Load Ant Design Mobile only on first click";
launcher.style.cssText = [
    "font:600 13px system-ui,sans-serif",
    "color:white",
    "background:#1677ff",
    "border:0",
    "border-radius:999px",
    "box-shadow:0 5px 22px #0003",
    "padding:12px 18px",
    "cursor:pointer"
].join(";");
shadowRoot.appendChild(launcher);
document.documentElement.appendChild(host);
let controllerPromise;
let opening = false;
async function toggleUi() {
    // Prevent two rapid clicks from opening and immediately closing the panel.
    if (opening) return;
    opening = true;
    launcher.disabled = true;
    launcher.textContent = "Loading...";
    try {
        // This relative, statically analyzable import is the code-splitting boundary.
        // Parcel resolves the emitted chunk filename and WAR during build.
        controllerPromise ??= require("5179608730212446").then(({ mountPanel })=>mountPanel(shadowRoot, (isOpen)=>{
                launcher.textContent = isOpen ? "Close UI" : "Open UI";
            })).catch((error)=>{
            controllerPromise = undefined;
            throw error;
        });
        const controller = await controllerPromise;
        const isOpen = controller.toggle();
        launcher.textContent = isOpen ? "Close UI" : "Open UI";
    } catch (error) {
        console.error("[lazy-plasmo] UI load failed", error);
        launcher.textContent = "Retry UI";
    } finally{
        launcher.disabled = false;
        opening = false;
    }
}
launcher.addEventListener("click", ()=>{
    toggleUi();
});
// Optional keyboard trigger with no React initialization.
document.addEventListener("keydown", (event)=>{
    if (event.altKey && event.shiftKey && event.key.toLowerCase() === "l") {
        event.preventDefault();
        toggleUi();
    }
});

},{"5179608730212446":"7uZRV","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"7uZRV":[function(require,module,exports) {
module.exports = Promise.all([
    require("73a3b0c911d2bc44")(require("ef70906883cfe770").getBundleURL("4JeIZ") + "mount.9c9303b1.css" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("28f52cbf908acdcd")(require("ef70906883cfe770").getBundleURL("4JeIZ") + "mount.8524bf97.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("1g9rH"));

},{"73a3b0c911d2bc44":"2oB2s","ef70906883cfe770":"lSi2Y","28f52cbf908acdcd":"dUmEu"}],"2oB2s":[function(require,module,exports) {
"use strict";
var cacheLoader = require("d4cf6bcd4aee8b78");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same link element twice (e.g. if it was already in the HTML)
        var existingLinks = document.getElementsByTagName("link");
        if ([].concat(existingLinks).some(function isCurrentBundle(link) {
            return link.href === bundle && link.rel.indexOf("stylesheet") > -1;
        })) {
            resolve();
            return;
        }
        var link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = bundle;
        link.onerror = function(e) {
            link.onerror = link.onload = null;
            link.remove();
            reject(e);
        };
        link.onload = function() {
            link.onerror = link.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(link);
    });
});

},{"d4cf6bcd4aee8b78":"j3SmZ"}],"j3SmZ":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"lSi2Y":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"dUmEu":[function(require,module,exports) {
"use strict";
var cacheLoader = require("83e44af0887950b5");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"83e44af0887950b5":"j3SmZ"}],"6dfwG":[function(require,module,exports) {
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

},{}]},["3Cj9a","71ecL"], "71ecL", "parcelRequireda14")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TyxTQUFTO1lBQ2pDO1FBQ0Y7UUFFQSxTQUFTLHFCQUFxQixPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVk7SUFDdkQ7QUFDRjs7O0FDeENBLFFBQVEsaUJBQWlCLFNBQVUsQ0FBQztJQUNsQyxPQUFPLEtBQUssRUFBRSxhQUFhLElBQUk7UUFBQyxTQUFTO0lBQUM7QUFDNUM7QUFFQSxRQUFRLG9CQUFvQixTQUFVLENBQUM7SUFDckMsT0FBTyxlQUFlLEdBQUcsY0FBYztRQUFDLE9BQU87SUFBSTtBQUNyRDtBQUVBLFFBQVEsWUFBWSxTQUFVLE1BQU0sRUFBRSxJQUFJO0lBQ3hDLE9BQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO1FBQ3ZDLElBQUksUUFBUSxhQUFhLFFBQVEsZ0JBQWdCLEtBQUssZUFBZSxNQUNuRTtRQUdGLE9BQU8sZUFBZSxNQUFNLEtBQUs7WUFDL0IsWUFBWTtZQUNaLEtBQUs7Z0JBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSTtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLFNBQVMsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7SUFDNUMsT0FBTyxlQUFlLE1BQU0sVUFBVTtRQUNwQyxZQUFZO1FBQ1osS0FBSztJQUNQO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJ1bnRpbWVAMC4yNS4yL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLWQ3Y2I3NjgxOTQzMzkzM2QuanMiLCJjb250ZW50LnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvcnVudGltZS0wNWYxOGFhN2I1NzE0NDM5LmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvaGVscGVycy9icm93c2VyL2Nzcy1sb2FkZXIuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCtydW50aW1lLWpzQDIuOC4zX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWpzL2xpYi9oZWxwZXJzL2NhY2hlTG9hZGVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvaGVscGVycy9idW5kbGUtdXJsLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvcnVudGltZS1qcy9saWIvaGVscGVycy9icm93c2VyL2pzLWxvYWRlci5qcyIsIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGFyY2VsK3RyYW5zZm9ybWVyLWpzQDIuOS4zX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC90cmFuc2Zvcm1lci1qcy9zcmMvZXNtb2R1bGUtaGVscGVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZD1nbG9iYWxUaGlzLnByb2Nlc3M/LmFyZ3Z8fFtdO3ZhciB5PSgpPT5nbG9iYWxUaGlzLnByb2Nlc3M/LmVudnx8e307dmFyIEg9bmV3IFNldChkKSxfPWU9PkguaGFzKGUpLEc9ZC5maWx0ZXIoZT0+ZS5zdGFydHNXaXRoKFwiLS1cIikmJmUuaW5jbHVkZXMoXCI9XCIpKS5tYXAoZT0+ZS5zcGxpdChcIj1cIikpLnJlZHVjZSgoZSxbdCxvXSk9PihlW3RdPW8sZSkse30pO3ZhciBaPV8oXCItLWRyeS1ydW5cIikscD0oKT0+XyhcIi0tdmVyYm9zZVwiKXx8eSgpLlZFUkJPU0U9PT1cInRydWVcIixxPXAoKTt2YXIgdT0oZT1cIlwiLC4uLnQpPT5jb25zb2xlLmxvZyhlLnBhZEVuZCg5KSxcInxcIiwuLi50KTt2YXIgeD0oLi4uZSk9PmNvbnNvbGUuZXJyb3IoXCJcXHV7MUY1MzR9IEVSUk9SXCIucGFkRW5kKDkpLFwifFwiLC4uLmUpLHY9KC4uLmUpPT51KFwiXFx1ezFGNTM1fSBJTkZPXCIsLi4uZSksbT0oLi4uZSk9PnUoXCJcXHV7MUY3RTB9IFdBUk5cIiwuLi5lKSxTPTAsYz0oLi4uZSk9PnAoKSYmdShgXFx1ezFGN0UxfSAke1MrK31gLC4uLmUpO3ZhciBuPXtcImlzQ29udGVudFNjcmlwdFwiOnRydWUsXCJpc0JhY2tncm91bmRcIjpmYWxzZSxcImlzUmVhY3RcIjpmYWxzZSxcInJ1bnRpbWVzXCI6W1wic2NyaXB0LXJ1bnRpbWVcIl0sXCJob3N0XCI6XCJsb2NhbGhvc3RcIixcInBvcnRcIjoxODE1LFwiZW50cnlGaWxlUGF0aFwiOlwiL1VzZXJzL21lbmdkb25ncWkvRG9jdW1lbnRzL1Byb2plY3RzL3BsYXNtby1tdjMtbGF6eS1hbnRkLW1vYmlsZS9jb250ZW50LnRzXCIsXCJidW5kbGVJZFwiOlwiMzcxNmM5NjU2NzJjYWM2YlwiLFwiZW52SGFzaFwiOlwiZTc5MmZiYmRhYTc4ZWU4NFwiLFwidmVyYm9zZVwiOlwiZmFsc2VcIixcInNlY3VyZVwiOmZhbHNlLFwic2VydmVyUG9ydFwiOjU1NjQ5fTttb2R1bGUuYnVuZGxlLkhNUl9CVU5ETEVfSUQ9bi5idW5kbGVJZDtnbG9iYWxUaGlzLnByb2Nlc3M9e2FyZ3Y6W10sZW52OntWRVJCT1NFOm4udmVyYm9zZX19O3ZhciBEPW1vZHVsZS5idW5kbGUuTW9kdWxlO2Z1bmN0aW9uIEkoZSl7RC5jYWxsKHRoaXMsZSksdGhpcy5ob3Q9e2RhdGE6bW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdLF9hY2NlcHRDYWxsYmFja3M6W10sX2Rpc3Bvc2VDYWxsYmFja3M6W10sYWNjZXB0OmZ1bmN0aW9uKHQpe3RoaXMuX2FjY2VwdENhbGxiYWNrcy5wdXNoKHR8fGZ1bmN0aW9uKCl7fSl9LGRpc3Bvc2U6ZnVuY3Rpb24odCl7dGhpcy5fZGlzcG9zZUNhbGxiYWNrcy5wdXNoKHQpfX0sbW9kdWxlLmJ1bmRsZS5ob3REYXRhW2VdPXZvaWQgMH1tb2R1bGUuYnVuZGxlLk1vZHVsZT1JO21vZHVsZS5idW5kbGUuaG90RGF0YT17fTt2YXIgbD1nbG9iYWxUaGlzLmJyb3dzZXJ8fGdsb2JhbFRoaXMuY2hyb21lfHxudWxsO2Z1bmN0aW9uIGIoKXtyZXR1cm4hbi5ob3N0fHxuLmhvc3Q9PT1cIjAuMC4wLjBcIj9cImxvY2FsaG9zdFwiOm4uaG9zdH1mdW5jdGlvbiBDKCl7cmV0dXJuIG4ucG9ydHx8bG9jYXRpb24ucG9ydH12YXIgRT1cIl9fcGxhc21vX3J1bnRpbWVfc2NyaXB0X1wiO2Z1bmN0aW9uIEwoZSx0KXtsZXR7bW9kdWxlczpvfT1lO3JldHVybiBvPyEhb1t0XTohMX1mdW5jdGlvbiBPKGU9QygpKXtsZXQgdD1iKCk7cmV0dXJuYCR7bi5zZWN1cmV8fGxvY2F0aW9uLnByb3RvY29sPT09XCJodHRwczpcIiYmIS9sb2NhbGhvc3R8MTI3LjAuMC4xfDAuMC4wLjAvLnRlc3QodCk/XCJ3c3NcIjpcIndzXCJ9Oi8vJHt0fToke2V9L2B9ZnVuY3Rpb24gQihlKXt0eXBlb2YgZS5tZXNzYWdlPT1cInN0cmluZ1wiJiZ4KFwiW3BsYXNtby9wYXJjZWwtcnVudGltZV06IFwiK2UubWVzc2FnZSl9ZnVuY3Rpb24gUChlKXtpZih0eXBlb2YgZ2xvYmFsVGhpcy5XZWJTb2NrZXQ+XCJ1XCIpcmV0dXJuO2xldCB0PW5ldyBXZWJTb2NrZXQoTygpKTtyZXR1cm4gdC5hZGRFdmVudExpc3RlbmVyKFwibWVzc2FnZVwiLGFzeW5jIGZ1bmN0aW9uKG8pe2xldCByPUpTT04ucGFyc2Uoby5kYXRhKTtpZihyLnR5cGU9PT1cInVwZGF0ZVwiJiZhd2FpdCBlKHIuYXNzZXRzKSxyLnR5cGU9PT1cImVycm9yXCIpZm9yKGxldCBhIG9mIHIuZGlhZ25vc3RpY3MuYW5zaSl7bGV0IHc9YS5jb2RlZnJhbWV8fGEuc3RhY2s7bShcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIithLm1lc3NhZ2UrYFxuYCt3K2BcblxuYCthLmhpbnRzLmpvaW4oYFxuYCkpfX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsQiksdC5hZGRFdmVudExpc3RlbmVyKFwib3BlblwiLCgpPT57dihgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3RlZCB0byBITVIgc2VydmVyIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsb3NlXCIsKCk9PnttKGBbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogQ29ubmVjdGlvbiB0byB0aGUgSE1SIHNlcnZlciBpcyBjbG9zZWQgZm9yICR7bi5lbnRyeUZpbGVQYXRofWApfSksdH12YXIgcz1cIl9fcGxhc21vLWxvYWRpbmdfX1wiO2Z1bmN0aW9uICQoKXtsZXQgZT1nbG9iYWxUaGlzLndpbmRvdz8udHJ1c3RlZFR5cGVzO2lmKHR5cGVvZiBlPlwidVwiKXJldHVybjtsZXQgdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJ0cnVzdGVkLXR5cGVzXCJdJyk/LmNvbnRlbnQ/LnNwbGl0KFwiIFwiKSxvPXQ/dFt0Py5sZW5ndGgtMV0ucmVwbGFjZSgvOy9nLFwiXCIpOnZvaWQgMDtyZXR1cm4gdHlwZW9mIGU8XCJ1XCI/ZS5jcmVhdGVQb2xpY3kob3x8YHRydXN0ZWQtaHRtbC0ke3N9YCx7Y3JlYXRlSFRNTDphPT5hfSk6dm9pZCAwfXZhciBUPSQoKTtmdW5jdGlvbiBnKCl7cmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHMpfWZ1bmN0aW9uIGYoKXtyZXR1cm4hZygpfWZ1bmN0aW9uIEYoKXtsZXQgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2UuaWQ9cztsZXQgdD1gXG4gIDxzdHlsZT5cbiAgICAjJHtzfSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xuICAgICAgYm94LXNoYWRvdzogIzMzMyA0LjdweCA0LjdweDtcbiAgICB9XG5cbiAgICAjJHtzfTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTNlM2UzO1xuICAgICAgY29sb3I6ICM0NDQ7XG4gICAgfVxuXG4gICAgQGtleWZyYW1lcyBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIHtcbiAgICAgIDAlIHtcbiAgICAgICAgZmlsbDogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG4gICAgXG4gICAgICAxMDAlIHtcbiAgICAgICAgZmlsbDogIzMzMztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAjJHtzfSAuc3ZnLWVsZW0tMSB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC44cyBib3RoIGluZmluaXRlO1xuICAgIH1cblxuICAgICMke3N9IC5zdmctZWxlbS0yIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAwLjlzIGJvdGggaW5maW5pdGU7XG4gICAgfVxuICAgIFxuICAgICMke3N9IC5zdmctZWxlbS0zIHtcbiAgICAgIGFuaW1hdGlvbjogcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCAxLjQ3cyBjdWJpYy1iZXppZXIoMC40NywgMCwgMC43NDUsIDAuNzE1KSAxcyBib3RoIGluZmluaXRlO1xuICAgIH1cblxuICAgICMke3N9IC5oaWRkZW4ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgPC9zdHlsZT5cbiAgXG4gIDxzdmcgaGVpZ2h0PVwiMzJcIiB3aWR0aD1cIjMyXCIgdmlld0JveD1cIjAgMCAyNjQgMzU0XCIgZmlsbD1cIm5vbmVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gICAgPHBhdGggZD1cIk0xMzkuMjIxIDI4Mi4yNDNDMTU0LjI1MiAyODIuMjQzIDE2Ni45MDMgMjk0Ljg0OSAxNjEuMzM4IDMwOC44MTJDMTU5LjQ4OSAzMTMuNDU0IDE1Ny4xNSAzMTcuOTEzIDE1NC4zNDcgMzIyLjEwOUMxNDYuNDY0IDMzMy45MDkgMTM1LjI2IDM0My4xMDcgMTIyLjE1MSAzNDguNTM4QzEwOS4wNDMgMzUzLjk2OSA5NC42MTgyIDM1NS4zOSA4MC43MDIyIDM1Mi42MjFDNjYuNzg2MSAzNDkuODUyIDU0LjAwMzQgMzQzLjAxOCA0My45NzA1IDMzMi45ODNDMzMuOTM3NSAzMjIuOTQ3IDI3LjEwNSAzMTAuMTYyIDI0LjMzNjkgMjk2LjI0MkMyMS41Njg5IDI4Mi4zMjMgMjIuOTg5NSAyNjcuODk1IDI4LjQxOTMgMjU0Ljc4M0MzMy44NDkxIDI0MS42NzEgNDMuMDQ0MSAyMzAuNDY0IDU0Ljg0MTYgMjIyLjU3OUM1OS4wMzUzIDIxOS43NzcgNjMuNDkwOCAyMTcuNDM4IDY4LjEyOTUgMjE1LjU4OEM4Mi4wOTE1IDIxMC4wMjEgOTQuNjk3OCAyMjIuNjcxIDk0LjY5NzggMjM3LjcwM0w5NC42OTc4IDI1NS4wMjdDOTQuNjk3OCAyNzAuMDU4IDEwNi44ODMgMjgyLjI0MyAxMjEuOTE0IDI4Mi4yNDNIMTM5LjIyMVpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tMVwiID48L3BhdGg+XG4gICAgPHBhdGggZD1cIk0xOTIuMjYxIDE0Mi4wMjhDMTkyLjI2MSAxMjYuOTk2IDIwNC44NjcgMTE0LjM0NiAyMTguODI5IDExOS45MTNDMjIzLjQ2OCAxMjEuNzYzIDIyNy45MjMgMTI0LjEwMiAyMzIuMTE3IDEyNi45MDRDMjQzLjkxNSAxMzQuNzg5IDI1My4xMSAxNDUuOTk2IDI1OC41MzkgMTU5LjEwOEMyNjMuOTY5IDE3Mi4yMiAyNjUuMzkgMTg2LjY0OCAyNjIuNjIyIDIwMC41NjdDMjU5Ljg1NCAyMTQuNDg3IDI1My4wMjEgMjI3LjI3MiAyNDIuOTg4IDIzNy4zMDhDMjMyLjk1NSAyNDcuMzQzIDIyMC4xNzMgMjU0LjE3NyAyMDYuMjU2IDI1Ni45NDZDMTkyLjM0IDI1OS43MTUgMTc3LjkxNiAyNTguMjk0IDE2NC44MDcgMjUyLjg2M0MxNTEuNjk5IDI0Ny40MzIgMTQwLjQ5NSAyMzguMjM0IDEzMi42MTIgMjI2LjQzNEMxMjkuODA4IDIyMi4yMzggMTI3LjQ3IDIxNy43NzkgMTI1LjYyIDIxMy4xMzdDMTIwLjA1NiAxOTkuMTc0IDEzMi43MDcgMTg2LjU2OCAxNDcuNzM4IDE4Ni41NjhMMTY1LjA0NCAxODYuNTY4QzE4MC4wNzYgMTg2LjU2OCAxOTIuMjYxIDE3NC4zODMgMTkyLjI2MSAxNTkuMzUyTDE5Mi4yNjEgMTQyLjAyOFpcIiBmaWxsPVwiIzMzM1wiIGNsYXNzPVwic3ZnLWVsZW0tMlwiID48L3BhdGg+XG4gICAgPHBhdGggZD1cIk05NS42NTIyIDE2NC4xMzVDOTUuNjUyMiAxNzkuMTY3IDgzLjIyNzkgMTkxLjcyNSA2OC44MDEzIDE4Ny41MDVDNTkuNTE0NSAxODQuNzg4IDUwLjY0MzIgMTgwLjY2MyA0Mi41MTA2IDE3NS4yMjdDMjYuNzgwNiAxNjQuNzE0IDE0LjUyMDYgMTQ5Ljc3MiA3LjI4MDg5IDEzMi4yODlDMC4wNDExODMgMTE0LjgwNyAtMS44NTMwNSA5NS41Njk3IDEuODM3NzIgNzcuMDEwNEM1LjUyODQ5IDU4LjQ1MTEgMTQuNjM4NSA0MS40MDMzIDI4LjAxNTcgMjguMDIyOEM0MS4zOTMgMTQuNjQyMyA1OC40MzY2IDUuNTMwMDYgNzYuOTkxNCAxLjgzODM5Qzk1LjU0NjEgLTEuODUzMjkgMTE0Ljc3OSAwLjA0MTQxNjIgMTMyLjI1NyA3LjI4MjlDMTQ5LjczNSAxNC41MjQ0IDE2NC42NzQgMjYuNzg3NCAxNzUuMTg0IDQyLjUyMTJDMTgwLjYyIDUwLjY1NzYgMTg0Ljc0NCA1OS41MzMyIDE4Ny40NiA2OC44MjQ1QzE5MS42NzggODMuMjUxOSAxNzkuMTE5IDk1LjY3NTkgMTY0LjA4OCA5NS42NzU5TDEyMi44NjkgOTUuNjc1OUMxMDcuODM3IDk1LjY3NTkgOTUuNjUyMiAxMDcuODYxIDk1LjY1MjIgMTIyLjg5Mkw5NS42NTIyIDE2NC4xMzVaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTNcIj48L3BhdGg+XG4gIDwvc3ZnPlxuICA8c3BhbiBjbGFzcz1cImhpZGRlblwiPkNvbnRleHQgSW52YWxpZGF0ZWQsIFByZXNzIHRvIFJlbG9hZDwvc3Bhbj5cbiAgYDtyZXR1cm4gZS5pbm5lckhUTUw9VD9ULmNyZWF0ZUhUTUwodCk6dCxlLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCIsZS5zdHlsZS5wb3NpdGlvbj1cImZpeGVkXCIsZS5zdHlsZS5ib3R0b209XCIxNC43cHhcIixlLnN0eWxlLnJpZ2h0PVwiMTQuN3B4XCIsZS5zdHlsZS5mb250RmFtaWx5PVwic2Fucy1zZXJpZlwiLGUuc3R5bGUuZGlzcGxheT1cImZsZXhcIixlLnN0eWxlLmp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIsZS5zdHlsZS5hbGlnbkl0ZW1zPVwiY2VudGVyXCIsZS5zdHlsZS5wYWRkaW5nPVwiMTQuN3B4XCIsZS5zdHlsZS5nYXA9XCIxNC43cHhcIixlLnN0eWxlLmJvcmRlclJhZGl1cz1cIjQuN3B4XCIsZS5zdHlsZS56SW5kZXg9XCIyMTQ3NDgzNjQ3XCIsZS5zdHlsZS5vcGFjaXR5PVwiMFwiLGUuc3R5bGUudHJhbnNpdGlvbj1cImFsbCAwLjQ3cyBlYXNlLWluLW91dFwiLGV9ZnVuY3Rpb24gTihlKXtyZXR1cm4gbmV3IFByb21pc2UodD0+e2RvY3VtZW50LmRvY3VtZW50RWxlbWVudD8oZigpJiYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFwcGVuZENoaWxkKGUpLHQoKSksdCgpKTpnbG9iYWxUaGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCk9PntmKCkmJmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCl9KX0pfXZhciBrPSgpPT57bGV0IGU7aWYoZigpKXtsZXQgdD1GKCk7ZT1OKHQpfXJldHVybntzaG93OmFzeW5jKHtyZWxvYWRCdXR0b246dD0hMX09e30pPT57YXdhaXQgZTtsZXQgbz1nKCk7by5zdHlsZS5vcGFjaXR5PVwiMVwiLHQmJihvLm9uY2xpY2s9cj0+e3Iuc3RvcFByb3BhZ2F0aW9uKCksZ2xvYmFsVGhpcy5sb2NhdGlvbi5yZWxvYWQoKX0sby5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpLG8uc3R5bGUuY3Vyc29yPVwicG9pbnRlclwiLG8uc3R5bGUucG9pbnRlckV2ZW50cz1cImFsbFwiKX0saGlkZTphc3luYygpPT57YXdhaXQgZTtsZXQgdD1nKCk7dC5zdHlsZS5vcGFjaXR5PVwiMFwifX19O3ZhciBXPWAke0V9JHttb2R1bGUuaWR9X19gLGksQT0hMSxNPWsoKTthc3luYyBmdW5jdGlvbiBoKCl7YyhcIlNjcmlwdCBSdW50aW1lIC0gcmVsb2FkaW5nXCIpLEE/Z2xvYmFsVGhpcy5sb2NhdGlvbj8ucmVsb2FkPy4oKTpNLnNob3coe3JlbG9hZEJ1dHRvbjohMH0pfWZ1bmN0aW9uIFIoKXtpPy5kaXNjb25uZWN0KCksaT1sPy5ydW50aW1lLmNvbm5lY3Qoe25hbWU6V30pLGkub25EaXNjb25uZWN0LmFkZExpc3RlbmVyKCgpPT57aCgpfSksaS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZT0+e2UuX19wbGFzbW9fY3NfcmVsb2FkX18mJmgoKSxlLl9fcGxhc21vX2NzX2FjdGl2ZV90YWJfXyYmKEE9ITApfSl9ZnVuY3Rpb24gaigpe2lmKGw/LnJ1bnRpbWUpdHJ5e1IoKSxzZXRJbnRlcnZhbChSLDI0ZTMpfWNhdGNoe3JldHVybn19aigpO1AoYXN5bmMgZT0+e2MoXCJTY3JpcHQgcnVudGltZSAtIG9uIHVwZGF0ZWQgYXNzZXRzXCIpLGUuZmlsdGVyKG89Pm8uZW52SGFzaD09PW4uZW52SGFzaCkuc29tZShvPT5MKG1vZHVsZS5idW5kbGUsby5pZCkpJiYoTS5zaG93KCksbD8ucnVudGltZT9pLnBvc3RNZXNzYWdlKHtfX3BsYXNtb19jc19jaGFuZ2VkX186ITB9KTpzZXRUaW1lb3V0KCgpPT57aCgpfSw0NzAwKSl9KTtcbiIsImltcG9ydCB0eXBlIHsgUGxhc21vQ1NDb25maWcgfSBmcm9tIFwicGxhc21vXCJcblxuLy8gSU1QT1JUQU5UOiBUaGlzIGVudHJ5IG11c3Qgc3RheSAudHMsIG5vdCAudHN4LiBObyBSZWFjdC9BbnREL0NTUyBpbXBvcnRzIGhlcmUuXG5leHBvcnQgY29uc3QgY29uZmlnOiBQbGFzbW9DU0NvbmZpZyA9IHtcbiAgbWF0Y2hlczogW1wiaHR0cHM6Ly9leGFtcGxlLmNvbS8qXCJdLFxuICBydW5fYXQ6IFwiZG9jdW1lbnRfaWRsZVwiXG59XG5cbnR5cGUgUGFuZWxDb250cm9sbGVyID0geyB0b2dnbGUoKTogYm9vbGVhbiB9XG5cbmNvbnN0IGhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG5ob3N0LmlkID0gXCJwbGFzbW8tbGF6eS1kZW1vLWhvc3RcIlxuaG9zdC5zdHlsZS5jc3NUZXh0ID0gW1xuICBcInBvc2l0aW9uOmZpeGVkXCIsXG4gIFwicmlnaHQ6MTZweFwiLFxuICBcImJvdHRvbToxNnB4XCIsXG4gIFwiei1pbmRleDoyMTQ3NDgzNjQ3XCIsXG4gIFwicG9pbnRlci1ldmVudHM6YXV0b1wiXG5dLmpvaW4oXCI7XCIpXG5cbi8vIFRoZSBob3N0IHBhZ2UgY2FuIHNlZSB0aGUgZWxlbWVudCwgYnV0IG5vdCB0aGUgY29udGVudCBzY3JpcHQncyBKUyB2YXJpYWJsZXMuXG5jb25zdCBzaGFkb3dSb290ID0gaG9zdC5hdHRhY2hTaGFkb3coeyBtb2RlOiBcIm9wZW5cIiB9KVxuY29uc3QgbGF1bmNoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpXG5sYXVuY2hlci50eXBlID0gXCJidXR0b25cIlxubGF1bmNoZXIudGV4dENvbnRlbnQgPSBcIk9wZW4gVUlcIlxubGF1bmNoZXIudGl0bGUgPSBcIkxvYWQgQW50IERlc2lnbiBNb2JpbGUgb25seSBvbiBmaXJzdCBjbGlja1wiXG5sYXVuY2hlci5zdHlsZS5jc3NUZXh0ID0gW1xuICBcImZvbnQ6NjAwIDEzcHggc3lzdGVtLXVpLHNhbnMtc2VyaWZcIixcbiAgXCJjb2xvcjp3aGl0ZVwiLFxuICBcImJhY2tncm91bmQ6IzE2NzdmZlwiLFxuICBcImJvcmRlcjowXCIsXG4gIFwiYm9yZGVyLXJhZGl1czo5OTlweFwiLFxuICBcImJveC1zaGFkb3c6MCA1cHggMjJweCAjMDAwM1wiLFxuICBcInBhZGRpbmc6MTJweCAxOHB4XCIsXG4gIFwiY3Vyc29yOnBvaW50ZXJcIlxuXS5qb2luKFwiO1wiKVxuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChsYXVuY2hlcilcbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChob3N0KVxuXG5sZXQgY29udHJvbGxlclByb21pc2U6IFByb21pc2U8UGFuZWxDb250cm9sbGVyPiB8IHVuZGVmaW5lZFxubGV0IG9wZW5pbmcgPSBmYWxzZVxuXG5hc3luYyBmdW5jdGlvbiB0b2dnbGVVaSgpIHtcbiAgLy8gUHJldmVudCB0d28gcmFwaWQgY2xpY2tzIGZyb20gb3BlbmluZyBhbmQgaW1tZWRpYXRlbHkgY2xvc2luZyB0aGUgcGFuZWwuXG4gIGlmIChvcGVuaW5nKSByZXR1cm5cbiAgb3BlbmluZyA9IHRydWVcbiAgbGF1bmNoZXIuZGlzYWJsZWQgPSB0cnVlXG4gIGxhdW5jaGVyLnRleHRDb250ZW50ID0gXCJMb2FkaW5nLi4uXCJcblxuICB0cnkge1xuICAgIC8vIFRoaXMgcmVsYXRpdmUsIHN0YXRpY2FsbHkgYW5hbHl6YWJsZSBpbXBvcnQgaXMgdGhlIGNvZGUtc3BsaXR0aW5nIGJvdW5kYXJ5LlxuICAgIC8vIFBhcmNlbCByZXNvbHZlcyB0aGUgZW1pdHRlZCBjaHVuayBmaWxlbmFtZSBhbmQgV0FSIGR1cmluZyBidWlsZC5cbiAgICBjb250cm9sbGVyUHJvbWlzZSA/Pz0gaW1wb3J0KFwiLi91aS9tb3VudFwiKVxuICAgICAgLnRoZW4oKHsgbW91bnRQYW5lbCB9KSA9PlxuICAgICAgICBtb3VudFBhbmVsKHNoYWRvd1Jvb3QsIChpc09wZW4pID0+IHtcbiAgICAgICAgICBsYXVuY2hlci50ZXh0Q29udGVudCA9IGlzT3BlbiA/IFwiQ2xvc2UgVUlcIiA6IFwiT3BlbiBVSVwiXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnRyb2xsZXJQcm9taXNlID0gdW5kZWZpbmVkXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9KVxuXG4gICAgY29uc3QgY29udHJvbGxlciA9IGF3YWl0IGNvbnRyb2xsZXJQcm9taXNlXG4gICAgY29uc3QgaXNPcGVuID0gY29udHJvbGxlci50b2dnbGUoKVxuICAgIGxhdW5jaGVyLnRleHRDb250ZW50ID0gaXNPcGVuID8gXCJDbG9zZSBVSVwiIDogXCJPcGVuIFVJXCJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiW2xhenktcGxhc21vXSBVSSBsb2FkIGZhaWxlZFwiLCBlcnJvcilcbiAgICBsYXVuY2hlci50ZXh0Q29udGVudCA9IFwiUmV0cnkgVUlcIlxuICB9IGZpbmFsbHkge1xuICAgIGxhdW5jaGVyLmRpc2FibGVkID0gZmFsc2VcbiAgICBvcGVuaW5nID0gZmFsc2VcbiAgfVxufVxuXG5sYXVuY2hlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB2b2lkIHRvZ2dsZVVpKClcbn0pXG5cbi8vIE9wdGlvbmFsIGtleWJvYXJkIHRyaWdnZXIgd2l0aCBubyBSZWFjdCBpbml0aWFsaXphdGlvbi5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICBpZiAoZXZlbnQuYWx0S2V5ICYmIGV2ZW50LnNoaWZ0S2V5ICYmIGV2ZW50LmtleS50b0xvd2VyQ2FzZSgpID09PSBcImxcIikge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICB2b2lkIHRvZ2dsZVVpKClcbiAgfVxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0gUHJvbWlzZS5hbGwoW3JlcXVpcmUoXCIuL2hlbHBlcnMvYnJvd3Nlci9jc3MtbG9hZGVyXCIpKHJlcXVpcmUoJy4vaGVscGVycy9idW5kbGUtdXJsJykuZ2V0QnVuZGxlVVJMKCc0SmVJWicpICsgXCJtb3VudC45YzkzMDNiMS5jc3NcIiArIFwiP1wiICsgRGF0ZS5ub3coKSkuY2F0Y2goZXJyID0+IHtkZWxldGUgbW9kdWxlLmJ1bmRsZS5jYWNoZVttb2R1bGUuaWRdOyB0aHJvdyBlcnI7fSksIHJlcXVpcmUoXCIuL2hlbHBlcnMvYnJvd3Nlci9qcy1sb2FkZXJcIikocmVxdWlyZSgnLi9oZWxwZXJzL2J1bmRsZS11cmwnKS5nZXRCdW5kbGVVUkwoJzRKZUlaJykgKyBcIm1vdW50Ljg1MjRiZjk3LmpzXCIgKyBcIj9cIiArIERhdGUubm93KCkpLmNhdGNoKGVyciA9PiB7ZGVsZXRlIG1vZHVsZS5idW5kbGUuY2FjaGVbbW9kdWxlLmlkXTsgdGhyb3cgZXJyO30pXSkudGhlbigoKSA9PiBtb2R1bGUuYnVuZGxlLnJvb3QoJzFnOXJIJykpOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FjaGVMb2FkZXIgPSByZXF1aXJlKCcuLi9jYWNoZUxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlTG9hZGVyKGZ1bmN0aW9uIChidW5kbGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBEb24ndCBpbnNlcnQgdGhlIHNhbWUgbGluayBlbGVtZW50IHR3aWNlIChlLmcuIGlmIGl0IHdhcyBhbHJlYWR5IGluIHRoZSBIVE1MKVxuICAgIHZhciBleGlzdGluZ0xpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpbmsnKTtcblxuICAgIGlmIChbXS5jb25jYXQoZXhpc3RpbmdMaW5rcykuc29tZShmdW5jdGlvbiBpc0N1cnJlbnRCdW5kbGUobGluaykge1xuICAgICAgcmV0dXJuIGxpbmsuaHJlZiA9PT0gYnVuZGxlICYmIGxpbmsucmVsLmluZGV4T2YoJ3N0eWxlc2hlZXQnKSA+IC0xO1xuICAgIH0pKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgbGluay5ocmVmID0gYnVuZGxlO1xuXG4gICAgbGluay5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIGxpbmsub25lcnJvciA9IGxpbmsub25sb2FkID0gbnVsbDtcbiAgICAgIGxpbmsucmVtb3ZlKCk7XG4gICAgICByZWplY3QoZSk7XG4gICAgfTtcblxuICAgIGxpbmsub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgbGluay5vbmVycm9yID0gbGluay5vbmxvYWQgPSBudWxsO1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH07XG5cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGxpbmspO1xuICB9KTtcbn0pOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FjaGVkQnVuZGxlcyA9IHt9O1xudmFyIGNhY2hlZFByZWxvYWRzID0ge307XG52YXIgY2FjaGVkUHJlZmV0Y2hlcyA9IHt9O1xuXG5mdW5jdGlvbiBnZXRDYWNoZSh0eXBlKSB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgJ3ByZWxvYWQnOlxuICAgICAgcmV0dXJuIGNhY2hlZFByZWxvYWRzO1xuXG4gICAgY2FzZSAncHJlZmV0Y2gnOlxuICAgICAgcmV0dXJuIGNhY2hlZFByZWZldGNoZXM7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGNhY2hlZEJ1bmRsZXM7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobG9hZGVyLCB0eXBlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoYnVuZGxlKSB7XG4gICAgdmFyIGNhY2hlID0gZ2V0Q2FjaGUodHlwZSk7XG5cbiAgICBpZiAoY2FjaGVbYnVuZGxlXSkge1xuICAgICAgcmV0dXJuIGNhY2hlW2J1bmRsZV07XG4gICAgfVxuXG4gICAgcmV0dXJuIGNhY2hlW2J1bmRsZV0gPSBsb2FkZXIuYXBwbHkobnVsbCwgYXJndW1lbnRzKS5jYXRjaChmdW5jdGlvbiAoZSkge1xuICAgICAgZGVsZXRlIGNhY2hlW2J1bmRsZV07XG4gICAgICB0aHJvdyBlO1xuICAgIH0pO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGJ1bmRsZVVSTCA9IHt9O1xuXG5mdW5jdGlvbiBnZXRCdW5kbGVVUkxDYWNoZWQoaWQpIHtcbiAgdmFyIHZhbHVlID0gYnVuZGxlVVJMW2lkXTtcblxuICBpZiAoIXZhbHVlKSB7XG4gICAgdmFsdWUgPSBnZXRCdW5kbGVVUkwoKTtcbiAgICBidW5kbGVVUkxbaWRdID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldEJ1bmRsZVVSTCgpIHtcbiAgdHJ5IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgdmFyIG1hdGNoZXMgPSAoJycgKyBlcnIuc3RhY2spLm1hdGNoKC8oaHR0cHM/fGZpbGV8ZnRwfChjaHJvbWV8bW96fHNhZmFyaS13ZWIpLWV4dGVuc2lvbik6XFwvXFwvW14pXFxuXSsvZyk7XG5cbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgLy8gVGhlIGZpcnN0IHR3byBzdGFjayBmcmFtZXMgd2lsbCBiZSB0aGlzIGZ1bmN0aW9uIGFuZCBnZXRCdW5kbGVVUkxDYWNoZWQuXG4gICAgICAvLyBVc2UgdGhlIDNyZCBvbmUsIHdoaWNoIHdpbGwgYmUgYSBydW50aW1lIGluIHRoZSBvcmlnaW5hbCBidW5kbGUuXG4gICAgICByZXR1cm4gZ2V0QmFzZVVSTChtYXRjaGVzWzJdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gJy8nO1xufVxuXG5mdW5jdGlvbiBnZXRCYXNlVVJMKHVybCkge1xuICByZXR1cm4gKCcnICsgdXJsKS5yZXBsYWNlKC9eKCg/Omh0dHBzP3xmaWxlfGZ0cHwoY2hyb21lfG1venxzYWZhcmktd2ViKS1leHRlbnNpb24pOlxcL1xcLy4rKVxcL1teL10rJC8sICckMScpICsgJy8nO1xufSAvLyBUT0RPOiBSZXBsYWNlIHVzZXMgd2l0aCBgbmV3IFVSTCh1cmwpLm9yaWdpbmAgd2hlbiBpZTExIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQuXG5cblxuZnVuY3Rpb24gZ2V0T3JpZ2luKHVybCkge1xuICB2YXIgbWF0Y2hlcyA9ICgnJyArIHVybCkubWF0Y2goLyhodHRwcz98ZmlsZXxmdHB8KGNocm9tZXxtb3p8c2FmYXJpLXdlYiktZXh0ZW5zaW9uKTpcXC9cXC9bXi9dKy8pO1xuXG4gIGlmICghbWF0Y2hlcykge1xuICAgIHRocm93IG5ldyBFcnJvcignT3JpZ2luIG5vdCBmb3VuZCcpO1xuICB9XG5cbiAgcmV0dXJuIG1hdGNoZXNbMF07XG59XG5cbmV4cG9ydHMuZ2V0QnVuZGxlVVJMID0gZ2V0QnVuZGxlVVJMQ2FjaGVkO1xuZXhwb3J0cy5nZXRCYXNlVVJMID0gZ2V0QmFzZVVSTDtcbmV4cG9ydHMuZ2V0T3JpZ2luID0gZ2V0T3JpZ2luOyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY2FjaGVMb2FkZXIgPSByZXF1aXJlKCcuLi9jYWNoZUxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNhY2hlTG9hZGVyKGZ1bmN0aW9uIChidW5kbGUpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBEb24ndCBpbnNlcnQgdGhlIHNhbWUgc2NyaXB0IHR3aWNlIChlLmcuIGlmIGl0IHdhcyBhbHJlYWR5IGluIHRoZSBIVE1MKVxuICAgIHZhciBleGlzdGluZ1NjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG5cbiAgICBpZiAoW10uY29uY2F0KGV4aXN0aW5nU2NyaXB0cykuc29tZShmdW5jdGlvbiBpc0N1cnJlbnRCdW5kbGUoc2NyaXB0KSB7XG4gICAgICByZXR1cm4gc2NyaXB0LnNyYyA9PT0gYnVuZGxlO1xuICAgIH0pKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByZWxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIHByZWxvYWRMaW5rLmhyZWYgPSBidW5kbGU7XG4gICAgcHJlbG9hZExpbmsucmVsID0gJ3ByZWxvYWQnO1xuICAgIHByZWxvYWRMaW5rLmFzID0gJ3NjcmlwdCc7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChwcmVsb2FkTGluayk7XG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBzY3JpcHQuc3JjID0gYnVuZGxlO1xuXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGVycm9yID0gbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkeW5hbWljYWxseSBpbXBvcnRlZCBtb2R1bGU6IFwiLmNvbmNhdChidW5kbGUsIFwiLiBFcnJvcjogXCIpLmNvbmNhdChlLm1lc3NhZ2UpKTtcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gICAgICBzY3JpcHQucmVtb3ZlKCk7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgIH07XG5cbiAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9KTtcbn0pOyIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJjb250ZW50LjY3MmNhYzZiLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);