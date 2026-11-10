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
})({"aRMc5":[function(require,module,exports) {
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
    "serverPort": 49676
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

},{"5179608730212446":"84Cr0","@parcel/transformer-js/src/esmodule-helpers.js":"6dfwG"}],"84Cr0":[function(require,module,exports) {
module.exports = Promise.all([
    require("a3d918ab9cb7ef8")(require("362d9dffe8f0bcc8").getBundleURL("4JeIZ") + "mount.9c9303b1.css" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    }),
    require("fb89e53db6401911")(require("362d9dffe8f0bcc8").getBundleURL("4JeIZ") + "mount.8524bf97.js" + "?" + Date.now()).catch((err)=>{
        delete module.bundle.cache[module.id];
        throw err;
    })
]).then(()=>module.bundle.root("1g9rH"));

},{"a3d918ab9cb7ef8":"2JGZb","362d9dffe8f0bcc8":"5Nlas","fb89e53db6401911":"bBRQ3"}],"2JGZb":[function(require,module,exports) {
"use strict";
var cacheLoader = require("eb857ff130c401f6");
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

},{"eb857ff130c401f6":"8Z95b"}],"8Z95b":[function(require,module,exports) {
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

},{}],"5Nlas":[function(require,module,exports) {
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

},{}],"bBRQ3":[function(require,module,exports) {
"use strict";
var cacheLoader = require("472f6cba153a28aa");
module.exports = cacheLoader(function(bundle) {
    // Load extension JS chunks in the Content Script's ISOLATED world.
    if (typeof chrome !== "undefined" && chrome.runtime?.id && location.protocol !== "chrome-extension:" && bundle.startsWith(chrome.runtime.getURL(""))) return require(bundle).then(()=>undefined);
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

},{"472f6cba153a28aa":"8Z95b"}],"6dfwG":[function(require,module,exports) {
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

},{}]},["aRMc5","71ecL"], "71ecL", "parcelRequireda14")

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxJQUFJLFVBQVUsZ0RBQWdELE9BQU8sUUFBUSxhQUFhLE9BQU8sRUFBRTtZQUMvRyxPQUFPLFVBQVUsT0FBTyxTQUFTO1lBQ2pDLE9BQU87WUFDUCxPQUFPO1FBQ1Q7UUFFQSxPQUFPLFNBQVM7WUFDZCxPQUFPLFVBQVUsT0FBTyxTQUFTO1lBQ2pDO1FBQ0Y7UUFFQSxTQUFTLHFCQUFxQixPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVk7SUFDdkQ7QUFDRjs7O0FDbERBLFFBQVEsaUJBQWlCLFNBQVUsQ0FBQztJQUNsQyxPQUFPLEtBQUssRUFBRSxhQUFhLElBQUk7UUFBQyxTQUFTO0lBQUM7QUFDNUM7QUFFQSxRQUFRLG9CQUFvQixTQUFVLENBQUM7SUFDckMsT0FBTyxlQUFlLEdBQUcsY0FBYztRQUFDLE9BQU87SUFBSTtBQUNyRDtBQUVBLFFBQVEsWUFBWSxTQUFVLE1BQU0sRUFBRSxJQUFJO0lBQ3hDLE9BQU8sS0FBSyxRQUFRLFFBQVEsU0FBVSxHQUFHO1FBQ3ZDLElBQUksUUFBUSxhQUFhLFFBQVEsZ0JBQWdCLEtBQUssZUFBZSxNQUNuRTtRQUdGLE9BQU8sZUFBZSxNQUFNLEtBQUs7WUFDL0IsWUFBWTtZQUNaLEtBQUs7Z0JBQ0gsT0FBTyxNQUFNLENBQUMsSUFBSTtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxPQUFPO0FBQ1Q7QUFFQSxRQUFRLFNBQVMsU0FBVSxJQUFJLEVBQUUsUUFBUSxFQUFFLEdBQUc7SUFDNUMsT0FBTyxlQUFlLE1BQU0sVUFBVTtRQUNwQyxZQUFZO1FBQ1osS0FBSztJQUNQO0FBQ0YiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy8ucG5wbS9AcGxhc21vaHErcGFyY2VsLXJ1bnRpbWVAMC4yNS4yL25vZGVfbW9kdWxlcy9AcGxhc21vaHEvcGFyY2VsLXJ1bnRpbWUvZGlzdC9ydW50aW1lLTk5OTIzOWMyZmNhYWE4ZmIuanMiLCJjb250ZW50LnRzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19wYXRjaF9oYXNoPXBiNzR1MnQybm1pYmJleHFnbHFpZ2VvcmlpX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWpzL2xpYi9ydW50aW1lLTA1ZjE4YWE3YjU3MTQ0MzkuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCtydW50aW1lLWpzQDIuOC4zX3BhdGNoX2hhc2g9cGI3NHUydDJubWliYmV4cWdscWlnZW9yaWlfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtanMvbGliL2hlbHBlcnMvYnJvd3Nlci9jc3MtbG9hZGVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19wYXRjaF9oYXNoPXBiNzR1MnQybm1pYmJleHFnbHFpZ2VvcmlpX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWpzL2xpYi9oZWxwZXJzL2NhY2hlTG9hZGVyLmpzIiwibm9kZV9tb2R1bGVzLy5wbnBtL0BwYXJjZWwrcnVudGltZS1qc0AyLjguM19wYXRjaF9oYXNoPXBiNzR1MnQybm1pYmJleHFnbHFpZ2VvcmlpX0BwYXJjZWwrY29yZUAyLjkuMy9ub2RlX21vZHVsZXMvQHBhcmNlbC9ydW50aW1lLWpzL2xpYi9oZWxwZXJzL2J1bmRsZS11cmwuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCtydW50aW1lLWpzQDIuOC4zX3BhdGNoX2hhc2g9cGI3NHUydDJubWliYmV4cWdscWlnZW9yaWlfQHBhcmNlbCtjb3JlQDIuOS4zL25vZGVfbW9kdWxlcy9AcGFyY2VsL3J1bnRpbWUtanMvbGliL2hlbHBlcnMvYnJvd3Nlci9qcy1sb2FkZXIuanMiLCJub2RlX21vZHVsZXMvLnBucG0vQHBhcmNlbCt0cmFuc2Zvcm1lci1qc0AyLjkuM19AcGFyY2VsK2NvcmVAMi45LjMvbm9kZV9tb2R1bGVzL0BwYXJjZWwvdHJhbnNmb3JtZXItanMvc3JjL2VzbW9kdWxlLWhlbHBlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGQ9Z2xvYmFsVGhpcy5wcm9jZXNzPy5hcmd2fHxbXTt2YXIgeT0oKT0+Z2xvYmFsVGhpcy5wcm9jZXNzPy5lbnZ8fHt9O3ZhciBIPW5ldyBTZXQoZCksXz1lPT5ILmhhcyhlKSxHPWQuZmlsdGVyKGU9PmUuc3RhcnRzV2l0aChcIi0tXCIpJiZlLmluY2x1ZGVzKFwiPVwiKSkubWFwKGU9PmUuc3BsaXQoXCI9XCIpKS5yZWR1Y2UoKGUsW3Qsb10pPT4oZVt0XT1vLGUpLHt9KTt2YXIgWj1fKFwiLS1kcnktcnVuXCIpLHA9KCk9Pl8oXCItLXZlcmJvc2VcIil8fHkoKS5WRVJCT1NFPT09XCJ0cnVlXCIscT1wKCk7dmFyIHU9KGU9XCJcIiwuLi50KT0+Y29uc29sZS5sb2coZS5wYWRFbmQoOSksXCJ8XCIsLi4udCk7dmFyIHg9KC4uLmUpPT5jb25zb2xlLmVycm9yKFwiXFx1ezFGNTM0fSBFUlJPUlwiLnBhZEVuZCg5KSxcInxcIiwuLi5lKSx2PSguLi5lKT0+dShcIlxcdXsxRjUzNX0gSU5GT1wiLC4uLmUpLG09KC4uLmUpPT51KFwiXFx1ezFGN0UwfSBXQVJOXCIsLi4uZSksUz0wLGM9KC4uLmUpPT5wKCkmJnUoYFxcdXsxRjdFMX0gJHtTKyt9YCwuLi5lKTt2YXIgbj17XCJpc0NvbnRlbnRTY3JpcHRcIjp0cnVlLFwiaXNCYWNrZ3JvdW5kXCI6ZmFsc2UsXCJpc1JlYWN0XCI6ZmFsc2UsXCJydW50aW1lc1wiOltcInNjcmlwdC1ydW50aW1lXCJdLFwiaG9zdFwiOlwibG9jYWxob3N0XCIsXCJwb3J0XCI6MTgxNSxcImVudHJ5RmlsZVBhdGhcIjpcIi9Vc2Vycy9tZW5nZG9uZ3FpL0RvY3VtZW50cy9Qcm9qZWN0cy9wbGFzbW8tbXYzLWxhenktYW50ZC1tb2JpbGUvY29udGVudC50c1wiLFwiYnVuZGxlSWRcIjpcIjM3MTZjOTY1NjcyY2FjNmJcIixcImVudkhhc2hcIjpcImU3OTJmYmJkYWE3OGVlODRcIixcInZlcmJvc2VcIjpcImZhbHNlXCIsXCJzZWN1cmVcIjpmYWxzZSxcInNlcnZlclBvcnRcIjo0OTY3Nn07bW9kdWxlLmJ1bmRsZS5ITVJfQlVORExFX0lEPW4uYnVuZGxlSWQ7Z2xvYmFsVGhpcy5wcm9jZXNzPXthcmd2OltdLGVudjp7VkVSQk9TRTpuLnZlcmJvc2V9fTt2YXIgRD1tb2R1bGUuYnVuZGxlLk1vZHVsZTtmdW5jdGlvbiBJKGUpe0QuY2FsbCh0aGlzLGUpLHRoaXMuaG90PXtkYXRhOm1vZHVsZS5idW5kbGUuaG90RGF0YVtlXSxfYWNjZXB0Q2FsbGJhY2tzOltdLF9kaXNwb3NlQ2FsbGJhY2tzOltdLGFjY2VwdDpmdW5jdGlvbih0KXt0aGlzLl9hY2NlcHRDYWxsYmFja3MucHVzaCh0fHxmdW5jdGlvbigpe30pfSxkaXNwb3NlOmZ1bmN0aW9uKHQpe3RoaXMuX2Rpc3Bvc2VDYWxsYmFja3MucHVzaCh0KX19LG1vZHVsZS5idW5kbGUuaG90RGF0YVtlXT12b2lkIDB9bW9kdWxlLmJ1bmRsZS5Nb2R1bGU9STttb2R1bGUuYnVuZGxlLmhvdERhdGE9e307dmFyIGw9Z2xvYmFsVGhpcy5icm93c2VyfHxnbG9iYWxUaGlzLmNocm9tZXx8bnVsbDtmdW5jdGlvbiBiKCl7cmV0dXJuIW4uaG9zdHx8bi5ob3N0PT09XCIwLjAuMC4wXCI/XCJsb2NhbGhvc3RcIjpuLmhvc3R9ZnVuY3Rpb24gQygpe3JldHVybiBuLnBvcnR8fGxvY2F0aW9uLnBvcnR9dmFyIEU9XCJfX3BsYXNtb19ydW50aW1lX3NjcmlwdF9cIjtmdW5jdGlvbiBMKGUsdCl7bGV0e21vZHVsZXM6b309ZTtyZXR1cm4gbz8hIW9bdF06ITF9ZnVuY3Rpb24gTyhlPUMoKSl7bGV0IHQ9YigpO3JldHVybmAke24uc2VjdXJlfHxsb2NhdGlvbi5wcm90b2NvbD09PVwiaHR0cHM6XCImJiEvbG9jYWxob3N0fDEyNy4wLjAuMXwwLjAuMC4wLy50ZXN0KHQpP1wid3NzXCI6XCJ3c1wifTovLyR7dH06JHtlfS9gfWZ1bmN0aW9uIEIoZSl7dHlwZW9mIGUubWVzc2FnZT09XCJzdHJpbmdcIiYmeChcIltwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBcIitlLm1lc3NhZ2UpfWZ1bmN0aW9uIFAoZSl7aWYodHlwZW9mIGdsb2JhbFRoaXMuV2ViU29ja2V0PlwidVwiKXJldHVybjtsZXQgdD1uZXcgV2ViU29ja2V0KE8oKSk7cmV0dXJuIHQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIixhc3luYyBmdW5jdGlvbihvKXtsZXQgcj1KU09OLnBhcnNlKG8uZGF0YSk7aWYoci50eXBlPT09XCJ1cGRhdGVcIiYmYXdhaXQgZShyLmFzc2V0cyksci50eXBlPT09XCJlcnJvclwiKWZvcihsZXQgYSBvZiByLmRpYWdub3N0aWNzLmFuc2kpe2xldCB3PWEuY29kZWZyYW1lfHxhLnN0YWNrO20oXCJbcGxhc21vL3BhcmNlbC1ydW50aW1lXTogXCIrYS5tZXNzYWdlK2BcbmArdytgXG5cbmArYS5oaW50cy5qb2luKGBcbmApKX19KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLEIpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwoKT0+e3YoYFtwbGFzbW8vcGFyY2VsLXJ1bnRpbWVdOiBDb25uZWN0ZWQgdG8gSE1SIHNlcnZlciBmb3IgJHtuLmVudHJ5RmlsZVBhdGh9YCl9KSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbG9zZVwiLCgpPT57bShgW3BsYXNtby9wYXJjZWwtcnVudGltZV06IENvbm5lY3Rpb24gdG8gdGhlIEhNUiBzZXJ2ZXIgaXMgY2xvc2VkIGZvciAke24uZW50cnlGaWxlUGF0aH1gKX0pLHR9dmFyIHM9XCJfX3BsYXNtby1sb2FkaW5nX19cIjtmdW5jdGlvbiAkKCl7bGV0IGU9Z2xvYmFsVGhpcy53aW5kb3c/LnRydXN0ZWRUeXBlcztpZih0eXBlb2YgZT5cInVcIilyZXR1cm47bGV0IHQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtuYW1lPVwidHJ1c3RlZC10eXBlc1wiXScpPy5jb250ZW50Py5zcGxpdChcIiBcIiksbz10P3RbdD8ubGVuZ3RoLTFdLnJlcGxhY2UoLzsvZyxcIlwiKTp2b2lkIDA7cmV0dXJuIHR5cGVvZiBlPFwidVwiP2UuY3JlYXRlUG9saWN5KG98fGB0cnVzdGVkLWh0bWwtJHtzfWAse2NyZWF0ZUhUTUw6YT0+YX0pOnZvaWQgMH12YXIgVD0kKCk7ZnVuY3Rpb24gZygpe3JldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzKX1mdW5jdGlvbiBmKCl7cmV0dXJuIWcoKX1mdW5jdGlvbiBGKCl7bGV0IGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtlLmlkPXM7bGV0IHQ9YFxuICA8c3R5bGU+XG4gICAgIyR7c30ge1xuICAgICAgYmFja2dyb3VuZDogI2YzZjNmMztcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzMzMztcbiAgICAgIGJveC1zaGFkb3c6ICMzMzMgNC43cHggNC43cHg7XG4gICAgfVxuXG4gICAgIyR7c306aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogI2UzZTNlMztcbiAgICAgIGNvbG9yOiAjNDQ0O1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgcGxhc21vLWxvYWRpbmctYW5pbWF0ZS1zdmctZmlsbCB7XG4gICAgICAwJSB7XG4gICAgICAgIGZpbGw6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuICAgIFxuICAgICAgMTAwJSB7XG4gICAgICAgIGZpbGw6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgIyR7c30gLnN2Zy1lbGVtLTEge1xuICAgICAgYW5pbWF0aW9uOiBwbGFzbW8tbG9hZGluZy1hbmltYXRlLXN2Zy1maWxsIDEuNDdzIGN1YmljLWJlemllcigwLjQ3LCAwLCAwLjc0NSwgMC43MTUpIDAuOHMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuc3ZnLWVsZW0tMiB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMC45cyBib3RoIGluZmluaXRlO1xuICAgIH1cbiAgICBcbiAgICAjJHtzfSAuc3ZnLWVsZW0tMyB7XG4gICAgICBhbmltYXRpb246IHBsYXNtby1sb2FkaW5nLWFuaW1hdGUtc3ZnLWZpbGwgMS40N3MgY3ViaWMtYmV6aWVyKDAuNDcsIDAsIDAuNzQ1LCAwLjcxNSkgMXMgYm90aCBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAjJHtzfSAuaGlkZGVuIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gIDwvc3R5bGU+XG4gIFxuICA8c3ZnIGhlaWdodD1cIjMyXCIgd2lkdGg9XCIzMlwiIHZpZXdCb3g9XCIwIDAgMjY0IDM1NFwiIGZpbGw9XCJub25lXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPlxuICAgIDxwYXRoIGQ9XCJNMTM5LjIyMSAyODIuMjQzQzE1NC4yNTIgMjgyLjI0MyAxNjYuOTAzIDI5NC44NDkgMTYxLjMzOCAzMDguODEyQzE1OS40ODkgMzEzLjQ1NCAxNTcuMTUgMzE3LjkxMyAxNTQuMzQ3IDMyMi4xMDlDMTQ2LjQ2NCAzMzMuOTA5IDEzNS4yNiAzNDMuMTA3IDEyMi4xNTEgMzQ4LjUzOEMxMDkuMDQzIDM1My45NjkgOTQuNjE4MiAzNTUuMzkgODAuNzAyMiAzNTIuNjIxQzY2Ljc4NjEgMzQ5Ljg1MiA1NC4wMDM0IDM0My4wMTggNDMuOTcwNSAzMzIuOTgzQzMzLjkzNzUgMzIyLjk0NyAyNy4xMDUgMzEwLjE2MiAyNC4zMzY5IDI5Ni4yNDJDMjEuNTY4OSAyODIuMzIzIDIyLjk4OTUgMjY3Ljg5NSAyOC40MTkzIDI1NC43ODNDMzMuODQ5MSAyNDEuNjcxIDQzLjA0NDEgMjMwLjQ2NCA1NC44NDE2IDIyMi41NzlDNTkuMDM1MyAyMTkuNzc3IDYzLjQ5MDggMjE3LjQzOCA2OC4xMjk1IDIxNS41ODhDODIuMDkxNSAyMTAuMDIxIDk0LjY5NzggMjIyLjY3MSA5NC42OTc4IDIzNy43MDNMOTQuNjk3OCAyNTUuMDI3Qzk0LjY5NzggMjcwLjA1OCAxMDYuODgzIDI4Mi4yNDMgMTIxLjkxNCAyODIuMjQzSDEzOS4yMjFaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTFcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNMTkyLjI2MSAxNDIuMDI4QzE5Mi4yNjEgMTI2Ljk5NiAyMDQuODY3IDExNC4zNDYgMjE4LjgyOSAxMTkuOTEzQzIyMy40NjggMTIxLjc2MyAyMjcuOTIzIDEyNC4xMDIgMjMyLjExNyAxMjYuOTA0QzI0My45MTUgMTM0Ljc4OSAyNTMuMTEgMTQ1Ljk5NiAyNTguNTM5IDE1OS4xMDhDMjYzLjk2OSAxNzIuMjIgMjY1LjM5IDE4Ni42NDggMjYyLjYyMiAyMDAuNTY3QzI1OS44NTQgMjE0LjQ4NyAyNTMuMDIxIDIyNy4yNzIgMjQyLjk4OCAyMzcuMzA4QzIzMi45NTUgMjQ3LjM0MyAyMjAuMTczIDI1NC4xNzcgMjA2LjI1NiAyNTYuOTQ2QzE5Mi4zNCAyNTkuNzE1IDE3Ny45MTYgMjU4LjI5NCAxNjQuODA3IDI1Mi44NjNDMTUxLjY5OSAyNDcuNDMyIDE0MC40OTUgMjM4LjIzNCAxMzIuNjEyIDIyNi40MzRDMTI5LjgwOCAyMjIuMjM4IDEyNy40NyAyMTcuNzc5IDEyNS42MiAyMTMuMTM3QzEyMC4wNTYgMTk5LjE3NCAxMzIuNzA3IDE4Ni41NjggMTQ3LjczOCAxODYuNTY4TDE2NS4wNDQgMTg2LjU2OEMxODAuMDc2IDE4Ni41NjggMTkyLjI2MSAxNzQuMzgzIDE5Mi4yNjEgMTU5LjM1MkwxOTIuMjYxIDE0Mi4wMjhaXCIgZmlsbD1cIiMzMzNcIiBjbGFzcz1cInN2Zy1lbGVtLTJcIiA+PC9wYXRoPlxuICAgIDxwYXRoIGQ9XCJNOTUuNjUyMiAxNjQuMTM1Qzk1LjY1MjIgMTc5LjE2NyA4My4yMjc5IDE5MS43MjUgNjguODAxMyAxODcuNTA1QzU5LjUxNDUgMTg0Ljc4OCA1MC42NDMyIDE4MC42NjMgNDIuNTEwNiAxNzUuMjI3QzI2Ljc4MDYgMTY0LjcxNCAxNC41MjA2IDE0OS43NzIgNy4yODA4OSAxMzIuMjg5QzAuMDQxMTgzIDExNC44MDcgLTEuODUzMDUgOTUuNTY5NyAxLjgzNzcyIDc3LjAxMDRDNS41Mjg0OSA1OC40NTExIDE0LjYzODUgNDEuNDAzMyAyOC4wMTU3IDI4LjAyMjhDNDEuMzkzIDE0LjY0MjMgNTguNDM2NiA1LjUzMDA2IDc2Ljk5MTQgMS44MzgzOUM5NS41NDYxIC0xLjg1MzI5IDExNC43NzkgMC4wNDE0MTYyIDEzMi4yNTcgNy4yODI5QzE0OS43MzUgMTQuNTI0NCAxNjQuNjc0IDI2Ljc4NzQgMTc1LjE4NCA0Mi41MjEyQzE4MC42MiA1MC42NTc2IDE4NC43NDQgNTkuNTMzMiAxODcuNDYgNjguODI0NUMxOTEuNjc4IDgzLjI1MTkgMTc5LjExOSA5NS42NzU5IDE2NC4wODggOTUuNjc1OUwxMjIuODY5IDk1LjY3NTlDMTA3LjgzNyA5NS42NzU5IDk1LjY1MjIgMTA3Ljg2MSA5NS42NTIyIDEyMi44OTJMOTUuNjUyMiAxNjQuMTM1WlwiIGZpbGw9XCIjMzMzXCIgY2xhc3M9XCJzdmctZWxlbS0zXCI+PC9wYXRoPlxuICA8L3N2Zz5cbiAgPHNwYW4gY2xhc3M9XCJoaWRkZW5cIj5Db250ZXh0IEludmFsaWRhdGVkLCBQcmVzcyB0byBSZWxvYWQ8L3NwYW4+XG4gIGA7cmV0dXJuIGUuaW5uZXJIVE1MPVQ/VC5jcmVhdGVIVE1MKHQpOnQsZS5zdHlsZS5wb2ludGVyRXZlbnRzPVwibm9uZVwiLGUuc3R5bGUucG9zaXRpb249XCJmaXhlZFwiLGUuc3R5bGUuYm90dG9tPVwiMTQuN3B4XCIsZS5zdHlsZS5yaWdodD1cIjE0LjdweFwiLGUuc3R5bGUuZm9udEZhbWlseT1cInNhbnMtc2VyaWZcIixlLnN0eWxlLmRpc3BsYXk9XCJmbGV4XCIsZS5zdHlsZS5qdXN0aWZ5Q29udGVudD1cImNlbnRlclwiLGUuc3R5bGUuYWxpZ25JdGVtcz1cImNlbnRlclwiLGUuc3R5bGUucGFkZGluZz1cIjE0LjdweFwiLGUuc3R5bGUuZ2FwPVwiMTQuN3B4XCIsZS5zdHlsZS5ib3JkZXJSYWRpdXM9XCI0LjdweFwiLGUuc3R5bGUuekluZGV4PVwiMjE0NzQ4MzY0N1wiLGUuc3R5bGUub3BhY2l0eT1cIjBcIixlLnN0eWxlLnRyYW5zaXRpb249XCJhbGwgMC40N3MgZWFzZS1pbi1vdXRcIixlfWZ1bmN0aW9uIE4oZSl7cmV0dXJuIG5ldyBQcm9taXNlKHQ9Pntkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ/KGYoKSYmKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZChlKSx0KCkpLHQoKSk6Z2xvYmFsVGhpcy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57ZigpJiZkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoZSksdCgpfSl9KX12YXIgaz0oKT0+e2xldCBlO2lmKGYoKSl7bGV0IHQ9RigpO2U9Tih0KX1yZXR1cm57c2hvdzphc3luYyh7cmVsb2FkQnV0dG9uOnQ9ITF9PXt9KT0+e2F3YWl0IGU7bGV0IG89ZygpO28uc3R5bGUub3BhY2l0eT1cIjFcIix0JiYoby5vbmNsaWNrPXI9PntyLnN0b3BQcm9wYWdhdGlvbigpLGdsb2JhbFRoaXMubG9jYXRpb24ucmVsb2FkKCl9LG8ucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKSxvLnN0eWxlLmN1cnNvcj1cInBvaW50ZXJcIixvLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJhbGxcIil9LGhpZGU6YXN5bmMoKT0+e2F3YWl0IGU7bGV0IHQ9ZygpO3Quc3R5bGUub3BhY2l0eT1cIjBcIn19fTt2YXIgVz1gJHtFfSR7bW9kdWxlLmlkfV9fYCxpLEE9ITEsTT1rKCk7YXN5bmMgZnVuY3Rpb24gaCgpe2MoXCJTY3JpcHQgUnVudGltZSAtIHJlbG9hZGluZ1wiKSxBP2dsb2JhbFRoaXMubG9jYXRpb24/LnJlbG9hZD8uKCk6TS5zaG93KHtyZWxvYWRCdXR0b246ITB9KX1mdW5jdGlvbiBSKCl7aT8uZGlzY29ubmVjdCgpLGk9bD8ucnVudGltZS5jb25uZWN0KHtuYW1lOld9KSxpLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKT0+e2goKX0pLGkub25NZXNzYWdlLmFkZExpc3RlbmVyKGU9PntlLl9fcGxhc21vX2NzX3JlbG9hZF9fJiZoKCksZS5fX3BsYXNtb19jc19hY3RpdmVfdGFiX18mJihBPSEwKX0pfWZ1bmN0aW9uIGooKXtpZihsPy5ydW50aW1lKXRyeXtSKCksc2V0SW50ZXJ2YWwoUiwyNGUzKX1jYXRjaHtyZXR1cm59fWooKTtQKGFzeW5jIGU9PntjKFwiU2NyaXB0IHJ1bnRpbWUgLSBvbiB1cGRhdGVkIGFzc2V0c1wiKSxlLmZpbHRlcihvPT5vLmVudkhhc2g9PT1uLmVudkhhc2gpLnNvbWUobz0+TChtb2R1bGUuYnVuZGxlLG8uaWQpKSYmKE0uc2hvdygpLGw/LnJ1bnRpbWU/aS5wb3N0TWVzc2FnZSh7X19wbGFzbW9fY3NfY2hhbmdlZF9fOiEwfSk6c2V0VGltZW91dCgoKT0+e2goKX0sNDcwMCkpfSk7XG4iLCJpbXBvcnQgdHlwZSB7IFBsYXNtb0NTQ29uZmlnIH0gZnJvbSBcInBsYXNtb1wiXG5cbi8vIElNUE9SVEFOVDogVGhpcyBlbnRyeSBtdXN0IHN0YXkgLnRzLCBub3QgLnRzeC4gTm8gUmVhY3QvQW50RC9DU1MgaW1wb3J0cyBoZXJlLlxuZXhwb3J0IGNvbnN0IGNvbmZpZzogUGxhc21vQ1NDb25maWcgPSB7XG4gIG1hdGNoZXM6IFtcImh0dHBzOi8vZXhhbXBsZS5jb20vKlwiXSxcbiAgcnVuX2F0OiBcImRvY3VtZW50X2lkbGVcIlxufVxuXG50eXBlIFBhbmVsQ29udHJvbGxlciA9IHsgdG9nZ2xlKCk6IGJvb2xlYW4gfVxuXG5jb25zdCBob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuaG9zdC5pZCA9IFwicGxhc21vLWxhenktZGVtby1ob3N0XCJcbmhvc3Quc3R5bGUuY3NzVGV4dCA9IFtcbiAgXCJwb3NpdGlvbjpmaXhlZFwiLFxuICBcInJpZ2h0OjE2cHhcIixcbiAgXCJib3R0b206MTZweFwiLFxuICBcInotaW5kZXg6MjE0NzQ4MzY0N1wiLFxuICBcInBvaW50ZXItZXZlbnRzOmF1dG9cIlxuXS5qb2luKFwiO1wiKVxuXG4vLyBUaGUgaG9zdCBwYWdlIGNhbiBzZWUgdGhlIGVsZW1lbnQsIGJ1dCBub3QgdGhlIGNvbnRlbnQgc2NyaXB0J3MgSlMgdmFyaWFibGVzLlxuY29uc3Qgc2hhZG93Um9vdCA9IGhvc3QuYXR0YWNoU2hhZG93KHsgbW9kZTogXCJvcGVuXCIgfSlcbmNvbnN0IGxhdW5jaGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxubGF1bmNoZXIudHlwZSA9IFwiYnV0dG9uXCJcbmxhdW5jaGVyLnRleHRDb250ZW50ID0gXCJPcGVuIFVJXCJcbmxhdW5jaGVyLnRpdGxlID0gXCJMb2FkIEFudCBEZXNpZ24gTW9iaWxlIG9ubHkgb24gZmlyc3QgY2xpY2tcIlxubGF1bmNoZXIuc3R5bGUuY3NzVGV4dCA9IFtcbiAgXCJmb250OjYwMCAxM3B4IHN5c3RlbS11aSxzYW5zLXNlcmlmXCIsXG4gIFwiY29sb3I6d2hpdGVcIixcbiAgXCJiYWNrZ3JvdW5kOiMxNjc3ZmZcIixcbiAgXCJib3JkZXI6MFwiLFxuICBcImJvcmRlci1yYWRpdXM6OTk5cHhcIixcbiAgXCJib3gtc2hhZG93OjAgNXB4IDIycHggIzAwMDNcIixcbiAgXCJwYWRkaW5nOjEycHggMThweFwiLFxuICBcImN1cnNvcjpwb2ludGVyXCJcbl0uam9pbihcIjtcIilcbnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQobGF1bmNoZXIpXG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoaG9zdClcblxubGV0IGNvbnRyb2xsZXJQcm9taXNlOiBQcm9taXNlPFBhbmVsQ29udHJvbGxlcj4gfCB1bmRlZmluZWRcbmxldCBvcGVuaW5nID0gZmFsc2VcblxuYXN5bmMgZnVuY3Rpb24gdG9nZ2xlVWkoKSB7XG4gIC8vIFByZXZlbnQgdHdvIHJhcGlkIGNsaWNrcyBmcm9tIG9wZW5pbmcgYW5kIGltbWVkaWF0ZWx5IGNsb3NpbmcgdGhlIHBhbmVsLlxuICBpZiAob3BlbmluZykgcmV0dXJuXG4gIG9wZW5pbmcgPSB0cnVlXG4gIGxhdW5jaGVyLmRpc2FibGVkID0gdHJ1ZVxuICBsYXVuY2hlci50ZXh0Q29udGVudCA9IFwiTG9hZGluZy4uLlwiXG5cbiAgdHJ5IHtcbiAgICAvLyBUaGlzIHJlbGF0aXZlLCBzdGF0aWNhbGx5IGFuYWx5emFibGUgaW1wb3J0IGlzIHRoZSBjb2RlLXNwbGl0dGluZyBib3VuZGFyeS5cbiAgICAvLyBQYXJjZWwgcmVzb2x2ZXMgdGhlIGVtaXR0ZWQgY2h1bmsgZmlsZW5hbWUgYW5kIFdBUiBkdXJpbmcgYnVpbGQuXG4gICAgY29udHJvbGxlclByb21pc2UgPz89IGltcG9ydChcIi4vdWkvbW91bnRcIilcbiAgICAgIC50aGVuKCh7IG1vdW50UGFuZWwgfSkgPT5cbiAgICAgICAgbW91bnRQYW5lbChzaGFkb3dSb290LCAoaXNPcGVuKSA9PiB7XG4gICAgICAgICAgbGF1bmNoZXIudGV4dENvbnRlbnQgPSBpc09wZW4gPyBcIkNsb3NlIFVJXCIgOiBcIk9wZW4gVUlcIlxuICAgICAgICB9KVxuICAgICAgKVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb250cm9sbGVyUHJvbWlzZSA9IHVuZGVmaW5lZFxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfSlcblxuICAgIGNvbnN0IGNvbnRyb2xsZXIgPSBhd2FpdCBjb250cm9sbGVyUHJvbWlzZVxuICAgIGNvbnN0IGlzT3BlbiA9IGNvbnRyb2xsZXIudG9nZ2xlKClcbiAgICBsYXVuY2hlci50ZXh0Q29udGVudCA9IGlzT3BlbiA/IFwiQ2xvc2UgVUlcIiA6IFwiT3BlbiBVSVwiXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIltsYXp5LXBsYXNtb10gVUkgbG9hZCBmYWlsZWRcIiwgZXJyb3IpXG4gICAgbGF1bmNoZXIudGV4dENvbnRlbnQgPSBcIlJldHJ5IFVJXCJcbiAgfSBmaW5hbGx5IHtcbiAgICBsYXVuY2hlci5kaXNhYmxlZCA9IGZhbHNlXG4gICAgb3BlbmluZyA9IGZhbHNlXG4gIH1cbn1cblxubGF1bmNoZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdm9pZCB0b2dnbGVVaSgpXG59KVxuXG4vLyBPcHRpb25hbCBrZXlib2FyZCB0cmlnZ2VyIHdpdGggbm8gUmVhY3QgaW5pdGlhbGl6YXRpb24uXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LmFsdEtleSAmJiBldmVudC5zaGlmdEtleSAmJiBldmVudC5rZXkudG9Mb3dlckNhc2UoKSA9PT0gXCJsXCIpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgdm9pZCB0b2dnbGVVaSgpXG4gIH1cbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFByb21pc2UuYWxsKFtyZXF1aXJlKFwiLi9oZWxwZXJzL2Jyb3dzZXIvY3NzLWxvYWRlclwiKShyZXF1aXJlKCcuL2hlbHBlcnMvYnVuZGxlLXVybCcpLmdldEJ1bmRsZVVSTCgnNEplSVonKSArIFwibW91bnQuOWM5MzAzYjEuY3NzXCIgKyBcIj9cIiArIERhdGUubm93KCkpLmNhdGNoKGVyciA9PiB7ZGVsZXRlIG1vZHVsZS5idW5kbGUuY2FjaGVbbW9kdWxlLmlkXTsgdGhyb3cgZXJyO30pLCByZXF1aXJlKFwiLi9oZWxwZXJzL2Jyb3dzZXIvanMtbG9hZGVyXCIpKHJlcXVpcmUoJy4vaGVscGVycy9idW5kbGUtdXJsJykuZ2V0QnVuZGxlVVJMKCc0SmVJWicpICsgXCJtb3VudC44NTI0YmY5Ny5qc1wiICsgXCI/XCIgKyBEYXRlLm5vdygpKS5jYXRjaChlcnIgPT4ge2RlbGV0ZSBtb2R1bGUuYnVuZGxlLmNhY2hlW21vZHVsZS5pZF07IHRocm93IGVycjt9KV0pLnRoZW4oKCkgPT4gbW9kdWxlLmJ1bmRsZS5yb290KCcxZzlySCcpKTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNhY2hlTG9hZGVyID0gcmVxdWlyZSgnLi4vY2FjaGVMb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUxvYWRlcihmdW5jdGlvbiAoYnVuZGxlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgLy8gRG9uJ3QgaW5zZXJ0IHRoZSBzYW1lIGxpbmsgZWxlbWVudCB0d2ljZSAoZS5nLiBpZiBpdCB3YXMgYWxyZWFkeSBpbiB0aGUgSFRNTClcbiAgICB2YXIgZXhpc3RpbmdMaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaW5rJyk7XG5cbiAgICBpZiAoW10uY29uY2F0KGV4aXN0aW5nTGlua3MpLnNvbWUoZnVuY3Rpb24gaXNDdXJyZW50QnVuZGxlKGxpbmspIHtcbiAgICAgIHJldHVybiBsaW5rLmhyZWYgPT09IGJ1bmRsZSAmJiBsaW5rLnJlbC5pbmRleE9mKCdzdHlsZXNoZWV0JykgPiAtMTtcbiAgICB9KSkge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IGJ1bmRsZTtcblxuICAgIGxpbmsub25lcnJvciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBsaW5rLm9uZXJyb3IgPSBsaW5rLm9ubG9hZCA9IG51bGw7XG4gICAgICBsaW5rLnJlbW92ZSgpO1xuICAgICAgcmVqZWN0KGUpO1xuICAgIH07XG5cbiAgICBsaW5rLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxpbmsub25lcnJvciA9IGxpbmsub25sb2FkID0gbnVsbDtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgfSk7XG59KTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNhY2hlZEJ1bmRsZXMgPSB7fTtcbnZhciBjYWNoZWRQcmVsb2FkcyA9IHt9O1xudmFyIGNhY2hlZFByZWZldGNoZXMgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q2FjaGUodHlwZSkge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICdwcmVsb2FkJzpcbiAgICAgIHJldHVybiBjYWNoZWRQcmVsb2FkcztcblxuICAgIGNhc2UgJ3ByZWZldGNoJzpcbiAgICAgIHJldHVybiBjYWNoZWRQcmVmZXRjaGVzO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBjYWNoZWRCdW5kbGVzO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxvYWRlciwgdHlwZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGJ1bmRsZSkge1xuICAgIHZhciBjYWNoZSA9IGdldENhY2hlKHR5cGUpO1xuXG4gICAgaWYgKGNhY2hlW2J1bmRsZV0pIHtcbiAgICAgIHJldHVybiBjYWNoZVtidW5kbGVdO1xuICAgIH1cblxuICAgIHJldHVybiBjYWNoZVtidW5kbGVdID0gbG9hZGVyLmFwcGx5KG51bGwsIGFyZ3VtZW50cykuY2F0Y2goZnVuY3Rpb24gKGUpIHtcbiAgICAgIGRlbGV0ZSBjYWNoZVtidW5kbGVdO1xuICAgICAgdGhyb3cgZTtcbiAgICB9KTtcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBidW5kbGVVUkwgPSB7fTtcblxuZnVuY3Rpb24gZ2V0QnVuZGxlVVJMQ2FjaGVkKGlkKSB7XG4gIHZhciB2YWx1ZSA9IGJ1bmRsZVVSTFtpZF07XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHZhbHVlID0gZ2V0QnVuZGxlVVJMKCk7XG4gICAgYnVuZGxlVVJMW2lkXSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRCdW5kbGVVUkwoKSB7XG4gIHRyeSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHZhciBtYXRjaGVzID0gKCcnICsgZXJyLnN0YWNrKS5tYXRjaCgvKGh0dHBzP3xmaWxlfGZ0cHwoY2hyb21lfG1venxzYWZhcmktd2ViKS1leHRlbnNpb24pOlxcL1xcL1teKVxcbl0rL2cpO1xuXG4gICAgaWYgKG1hdGNoZXMpIHtcbiAgICAgIC8vIFRoZSBmaXJzdCB0d28gc3RhY2sgZnJhbWVzIHdpbGwgYmUgdGhpcyBmdW5jdGlvbiBhbmQgZ2V0QnVuZGxlVVJMQ2FjaGVkLlxuICAgICAgLy8gVXNlIHRoZSAzcmQgb25lLCB3aGljaCB3aWxsIGJlIGEgcnVudGltZSBpbiB0aGUgb3JpZ2luYWwgYnVuZGxlLlxuICAgICAgcmV0dXJuIGdldEJhc2VVUkwobWF0Y2hlc1syXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcvJztcbn1cblxuZnVuY3Rpb24gZ2V0QmFzZVVSTCh1cmwpIHtcbiAgcmV0dXJuICgnJyArIHVybCkucmVwbGFjZSgvXigoPzpodHRwcz98ZmlsZXxmdHB8KGNocm9tZXxtb3p8c2FmYXJpLXdlYiktZXh0ZW5zaW9uKTpcXC9cXC8uKylcXC9bXi9dKyQvLCAnJDEnKSArICcvJztcbn0gLy8gVE9ETzogUmVwbGFjZSB1c2VzIHdpdGggYG5ldyBVUkwodXJsKS5vcmlnaW5gIHdoZW4gaWUxMSBpcyBubyBsb25nZXIgc3VwcG9ydGVkLlxuXG5cbmZ1bmN0aW9uIGdldE9yaWdpbih1cmwpIHtcbiAgdmFyIG1hdGNoZXMgPSAoJycgKyB1cmwpLm1hdGNoKC8oaHR0cHM/fGZpbGV8ZnRwfChjaHJvbWV8bW96fHNhZmFyaS13ZWIpLWV4dGVuc2lvbik6XFwvXFwvW14vXSsvKTtcblxuICBpZiAoIW1hdGNoZXMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09yaWdpbiBub3QgZm91bmQnKTtcbiAgfVxuXG4gIHJldHVybiBtYXRjaGVzWzBdO1xufVxuXG5leHBvcnRzLmdldEJ1bmRsZVVSTCA9IGdldEJ1bmRsZVVSTENhY2hlZDtcbmV4cG9ydHMuZ2V0QmFzZVVSTCA9IGdldEJhc2VVUkw7XG5leHBvcnRzLmdldE9yaWdpbiA9IGdldE9yaWdpbjsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNhY2hlTG9hZGVyID0gcmVxdWlyZSgnLi4vY2FjaGVMb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjYWNoZUxvYWRlcihmdW5jdGlvbiAoYnVuZGxlKSB7XG4gIC8vIExvYWQgZXh0ZW5zaW9uIEpTIGNodW5rcyBpbiB0aGUgQ29udGVudCBTY3JpcHQncyBJU09MQVRFRCB3b3JsZC5cbiAgaWYgKFxuICAgIHR5cGVvZiBjaHJvbWUgIT09IFwidW5kZWZpbmVkXCIgJiZcbiAgICBjaHJvbWUucnVudGltZT8uaWQgJiZcbiAgICBsb2NhdGlvbi5wcm90b2NvbCAhPT0gXCJjaHJvbWUtZXh0ZW5zaW9uOlwiICYmXG4gICAgYnVuZGxlLnN0YXJ0c1dpdGgoY2hyb21lLnJ1bnRpbWUuZ2V0VVJMKFwiXCIpKVxuICApIHtcbiAgICByZXR1cm4gaW1wb3J0KGJ1bmRsZSkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAvLyBEb24ndCBpbnNlcnQgdGhlIHNhbWUgc2NyaXB0IHR3aWNlIChlLmcuIGlmIGl0IHdhcyBhbHJlYWR5IGluIHRoZSBIVE1MKVxuICAgIHZhciBleGlzdGluZ1NjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc2NyaXB0Jyk7XG5cbiAgICBpZiAoW10uY29uY2F0KGV4aXN0aW5nU2NyaXB0cykuc29tZShmdW5jdGlvbiBpc0N1cnJlbnRCdW5kbGUoc2NyaXB0KSB7XG4gICAgICByZXR1cm4gc2NyaXB0LnNyYyA9PT0gYnVuZGxlO1xuICAgIH0pKSB7XG4gICAgICByZXNvbHZlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByZWxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIHByZWxvYWRMaW5rLmhyZWYgPSBidW5kbGU7XG4gICAgcHJlbG9hZExpbmsucmVsID0gJ3ByZWxvYWQnO1xuICAgIHByZWxvYWRMaW5rLmFzID0gJ3NjcmlwdCc7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChwcmVsb2FkTGluayk7XG4gICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICBzY3JpcHQuc3JjID0gYnVuZGxlO1xuXG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIGVycm9yID0gbmV3IFR5cGVFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkeW5hbWljYWxseSBpbXBvcnRlZCBtb2R1bGU6IFwiLmNvbmNhdChidW5kbGUsIFwiLiBFcnJvcjogXCIpLmNvbmNhdChlLm1lc3NhZ2UpKTtcbiAgICAgIHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gICAgICBzY3JpcHQucmVtb3ZlKCk7XG4gICAgICByZWplY3QoZXJyb3IpO1xuICAgIH07XG5cbiAgICBzY3JpcHQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgc2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICB9KTtcbn0pOyIsImV4cG9ydHMuaW50ZXJvcERlZmF1bHQgPSBmdW5jdGlvbiAoYSkge1xuICByZXR1cm4gYSAmJiBhLl9fZXNNb2R1bGUgPyBhIDoge2RlZmF1bHQ6IGF9O1xufTtcblxuZXhwb3J0cy5kZWZpbmVJbnRlcm9wRmxhZyA9IGZ1bmN0aW9uIChhKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCAnX19lc01vZHVsZScsIHt2YWx1ZTogdHJ1ZX0pO1xufTtcblxuZXhwb3J0cy5leHBvcnRBbGwgPSBmdW5jdGlvbiAoc291cmNlLCBkZXN0KSB7XG4gIE9iamVjdC5rZXlzKHNvdXJjZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKGtleSA9PT0gJ2RlZmF1bHQnIHx8IGtleSA9PT0gJ19fZXNNb2R1bGUnIHx8IGRlc3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBrZXksIHtcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHNvdXJjZVtrZXldO1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGRlc3Q7XG59O1xuXG5leHBvcnRzLmV4cG9ydCA9IGZ1bmN0aW9uIChkZXN0LCBkZXN0TmFtZSwgZ2V0KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkZXN0LCBkZXN0TmFtZSwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBnZXQsXG4gIH0pO1xufTtcbiJdLCJuYW1lcyI6W10sInZlcnNpb24iOjMsImZpbGUiOiJjb250ZW50LjY3MmNhYzZiLmpzLm1hcCJ9
 globalThis.define=__define;  })(globalThis.define);