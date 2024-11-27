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
})({"j8JCP":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3c0f79533fad8024";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        if (e.message) console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"eaPHn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var process = require("c816184f70aea6a7");
var __dirname = "node_modules/box2d-wasm/dist/es";
var Box2D = function() {
    var _scriptDir = "file:///node_modules/box2d-wasm/dist/es/Box2D.simd.js";
    return function(Box2D) {
        Box2D = Box2D || {};
        var a;
        a || (a = typeof Box2D !== "undefined" ? Box2D : {});
        var aa, ba;
        a.ready = new Promise(function(b, c) {
            aa = b;
            ba = c;
        });
        var ca = {}, da;
        for(da in a)a.hasOwnProperty(da) && (ca[da] = a[da]);
        var ea = "object" === typeof window, fa = "function" === typeof importScripts, ha = "", ia, ja, ka, la, ma;
        if ("object" === typeof process && "object" === typeof process.versions && "string" === typeof process.versions.node) ha = fa ? require("8ae2bffd29666746").dirname(ha) + "/" : __dirname + "/", ia = function(b, c) {
            la || (la = require("5a6be442a7e4ca1f"));
            ma || (ma = require("8ae2bffd29666746"));
            b = ma.normalize(b);
            return la.readFileSync(b, c ? null : "utf8");
        }, ka = function(b) {
            b = ia(b, !0);
            b.buffer || (b = new Uint8Array(b));
            b.buffer || na("Assertion failed: undefined");
            return b;
        }, ja = function(b, c, d) {
            la || (la = require("5a6be442a7e4ca1f"));
            ma || (ma = require("8ae2bffd29666746"));
            b = ma.normalize(b);
            la.readFile(b, function(f, p) {
                f ? d(f) : c(p.buffer);
            });
        }, 1 < process.argv.length && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(b) {
            throw b;
        }), process.on("unhandledRejection", function(b) {
            throw b;
        }), a.inspect = function() {
            return "[Emscripten Module object]";
        };
        else if (ea || fa) fa ? ha = self.location.href : "undefined" !== typeof document && document.currentScript && (ha = document.currentScript.src), _scriptDir && (ha = _scriptDir), ha = 0 !== ha.indexOf("blob:") ? ha.substr(0, ha.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", ia = function(b) {
            var c = new XMLHttpRequest;
            c.open("GET", b, !1);
            c.send(null);
            return c.responseText;
        }, fa && (ka = function(b) {
            var c = new XMLHttpRequest;
            c.open("GET", b, !1);
            c.responseType = "arraybuffer";
            c.send(null);
            return new Uint8Array(c.response);
        }), ja = function(b, c, d) {
            var f = new XMLHttpRequest;
            f.open("GET", b, !0);
            f.responseType = "arraybuffer";
            f.onload = function() {
                200 == f.status || 0 == f.status && f.response ? c(f.response) : d();
            };
            f.onerror = d;
            f.send(null);
        };
        var oa = a.print || console.log.bind(console), pa = a.printErr || console.warn.bind(console);
        for(da in ca)ca.hasOwnProperty(da) && (a[da] = ca[da]);
        ca = null;
        var qa;
        a.wasmBinary && (qa = a.wasmBinary);
        var noExitRuntime = a.noExitRuntime || !0;
        "object" !== typeof WebAssembly && na("no native wasm support detected");
        var ra, sa = !1, ta = "undefined" !== typeof TextDecoder ? new TextDecoder("utf8") : void 0;
        function ua(b, c, d) {
            var f = c + d;
            for(d = c; b[d] && !(d >= f);)++d;
            if (16 < d - c && b.subarray && ta) return ta.decode(b.subarray(c, d));
            for(f = ""; c < d;){
                var p = b[c++];
                if (p & 128) {
                    var W = b[c++] & 63;
                    if (192 == (p & 224)) f += String.fromCharCode((p & 31) << 6 | W);
                    else {
                        var Ia = b[c++] & 63;
                        p = 224 == (p & 240) ? (p & 15) << 12 | W << 6 | Ia : (p & 7) << 18 | W << 12 | Ia << 6 | b[c++] & 63;
                        65536 > p ? f += String.fromCharCode(p) : (p -= 65536, f += String.fromCharCode(55296 | p >> 10, 56320 | p & 1023));
                    }
                } else f += String.fromCharCode(p);
            }
            return f;
        }
        function va(b) {
            return b ? ua(wa, b, void 0) : "";
        }
        var xa, wa, ya, za, Aa;
        function Ba() {
            var b = ra.buffer;
            xa = b;
            a.HEAP8 = new Int8Array(b);
            a.HEAP16 = new Int16Array(b);
            a.HEAP32 = ya = new Int32Array(b);
            a.HEAPU8 = wa = new Uint8Array(b);
            a.HEAPU16 = new Uint16Array(b);
            a.HEAPU32 = new Uint32Array(b);
            a.HEAPF32 = za = new Float32Array(b);
            a.HEAPF64 = Aa = new Float64Array(b);
        }
        var Ca, Da = [], Ea = [], Fa = [], Ga = !1;
        function Ha() {
            var b = a.preRun.shift();
            Da.unshift(b);
        }
        var Ja = 0, Ka = null, La = null;
        a.preloadedImages = {};
        a.preloadedAudios = {};
        function na(b) {
            if (a.onAbort) a.onAbort(b);
            b = "Aborted(" + b + ")";
            pa(b);
            sa = !0;
            b = new WebAssembly.RuntimeError(b + ". Build with -s ASSERTIONS=1 for more info.");
            ba(b);
            throw b;
        }
        function Ma() {
            return Na.startsWith("data:application/octet-stream;base64,");
        }
        var Na;
        if (a.locateFile) {
            if (Na = "Box2D.simd.wasm", !Ma()) {
                var Oa = Na;
                Na = a.locateFile ? a.locateFile(Oa, ha) : ha + Oa;
            }
        } else Na = new URL(require("225a2dd62e292c4c")).toString();
        function Pa() {
            var b = Na;
            try {
                if (b == Na && qa) return new Uint8Array(qa);
                if (ka) return ka(b);
                throw "both async and sync fetching of the wasm failed";
            } catch (c) {
                na(c);
            }
        }
        function Qa() {
            if (!qa && (ea || fa)) {
                if ("function" === typeof fetch && !Na.startsWith("file://")) return fetch(Na, {
                    credentials: "same-origin"
                }).then(function(b) {
                    if (!b.ok) throw "failed to load wasm binary file at '" + Na + "'";
                    return b.arrayBuffer();
                }).catch(function() {
                    return Pa();
                });
                if (ja) return new Promise(function(b, c) {
                    ja(Na, function(d) {
                        b(new Uint8Array(d));
                    }, c);
                });
            }
            return Promise.resolve().then(function() {
                return Pa();
            });
        }
        var Ra = {
            10530: function(b, c) {
                b = a.getCache(a.JSContactListener)[b];
                if (!b.hasOwnProperty("BeginContact")) throw "a JSImplementation must implement all functions, you forgot JSContactListener::BeginContact.";
                b.BeginContact(c);
            },
            10768: function(b, c) {
                b = a.getCache(a.JSContactListener)[b];
                if (!b.hasOwnProperty("EndContact")) throw "a JSImplementation must implement all functions, you forgot JSContactListener::EndContact.";
                b.EndContact(c);
            },
            11E3: function(b, c, d) {
                b = a.getCache(a.JSContactListener)[b];
                if (!b.hasOwnProperty("PreSolve")) throw "a JSImplementation must implement all functions, you forgot JSContactListener::PreSolve.";
                b.PreSolve(c, d);
            },
            11229: function(b, c, d) {
                b = a.getCache(a.JSContactListener)[b];
                if (!b.hasOwnProperty("PostSolve")) throw "a JSImplementation must implement all functions, you forgot JSContactListener::PostSolve.";
                b.PostSolve(c, d);
            },
            11461: function(b, c, d, f, p) {
                b = a.getCache(a.JSRayCastCallback)[b];
                if (!b.hasOwnProperty("ReportFixture")) throw "a JSImplementation must implement all functions, you forgot JSRayCastCallback::ReportFixture.";
                return b.ReportFixture(c, d, f, p);
            },
            11718: function(b, c) {
                b = a.getCache(a.JSQueryCallback)[b];
                if (!b.hasOwnProperty("ReportFixture")) throw "a JSImplementation must implement all functions, you forgot JSQueryCallback::ReportFixture.";
                return b.ReportFixture(c);
            },
            11962: function(b, c, d) {
                b = a.getCache(a.JSContactFilter)[b];
                if (!b.hasOwnProperty("ShouldCollide")) throw "a JSImplementation must implement all functions, you forgot JSContactFilter::ShouldCollide.";
                return b.ShouldCollide(c, d);
            },
            12209: function(b, c) {
                b = a.getCache(a.JSDestructionListener)[b];
                if (!b.hasOwnProperty("SayGoodbyeJoint")) throw "a JSImplementation must implement all functions, you forgot JSDestructionListener::SayGoodbyeJoint.";
                b.SayGoodbyeJoint(c);
            },
            12464: function(b, c) {
                b = a.getCache(a.JSDestructionListener)[b];
                if (!b.hasOwnProperty("SayGoodbyeFixture")) throw "a JSImplementation must implement all functions, you forgot JSDestructionListener::SayGoodbyeFixture.";
                b.SayGoodbyeFixture(c);
            },
            12725: function(b, c, d, f) {
                b = a.getCache(a.JSDraw)[b];
                if (!b.hasOwnProperty("DrawPolygon")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawPolygon.";
                b.DrawPolygon(c, d, f);
            },
            12944: function(b, c, d, f) {
                b = a.getCache(a.JSDraw)[b];
                if (!b.hasOwnProperty("DrawSolidPolygon")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawSolidPolygon.";
                b.DrawSolidPolygon(c, d, f);
            },
            13178: function(b, c, d, f) {
                b = a.getCache(a.JSDraw)[b];
                if (!b.hasOwnProperty("DrawCircle")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawCircle.";
                b.DrawCircle(c, d, f);
            },
            13394: function(b, c, d, f, p) {
                b = a.getCache(a.JSDraw)[b];
                if (!b.hasOwnProperty("DrawSolidCircle")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawSolidCircle.";
                b.DrawSolidCircle(c, d, f, p);
            },
            13628: function(b, c, d, f) {
                b = a.getCache(a.JSDraw)[b];
                if (!b.hasOwnProperty("DrawSegment")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawSegment.";
                b.DrawSegment(c, d, f);
            },
            13847: function(b, c) {
                b = a.getCache(a.JSDraw)[b];
                if (!b.hasOwnProperty("DrawTransform")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawTransform.";
                b.DrawTransform(c);
            },
            14066: function(b, c, d, f) {
                b = a.getCache(a.JSDraw)[b];
                if (!b.hasOwnProperty("DrawPoint")) throw "a JSImplementation must implement all functions, you forgot JSDraw::DrawPoint.";
                b.DrawPoint(c, d, f);
            }
        };
        function Sa(b) {
            for(; 0 < b.length;){
                var c = b.shift();
                if ("function" == typeof c) c(a);
                else {
                    var d = c.AA;
                    "number" === typeof d ? void 0 === c.Mv ? Ta(d)() : Ta(d)(c.Mv) : d(void 0 === c.Mv ? null : c.Mv);
                }
            }
        }
        var Ua = [];
        function Ta(b) {
            var c = Ua[b];
            c || (b >= Ua.length && (Ua.length = b + 1), Ua[b] = c = Ca.get(b));
            return c;
        }
        var Va = [
            null,
            [],
            []
        ], Wa = {}, Xa = [];
        function Ya(b, c, d) {
            Xa.length = 0;
            var f;
            for(d >>= 2; f = wa[c++];)(f = 105 > f) && d & 1 && d++, Xa.push(f ? Aa[d++ >> 1] : ya[d]), ++d;
            return Ra[b].apply(null, Xa);
        }
        var Za = {
            f: function(b, c, d, f) {
                na("Assertion failed: " + va(b) + ", at: " + [
                    c ? va(c) : "unknown filename",
                    d,
                    f ? va(f) : "unknown function"
                ]);
            },
            d: function() {
                return 0;
            },
            h: function() {
                return 0;
            },
            j: function() {},
            n: function() {
                na("");
            },
            b: function(b, c) {
                throw "Array index " + b + " out of bounds: [0," + c + ")";
            },
            k: function(b, c, d) {
                return Ya(b, c, d);
            },
            a: Ya,
            m: function(b, c, d) {
                wa.copyWithin(b, c, c + d);
            },
            c: function(b) {
                var c = wa.length;
                b >>>= 0;
                if (2147483648 < b) return !1;
                for(var d = 1; 4 >= d; d *= 2){
                    var f = c * (1 + .2 / d);
                    f = Math.min(f, b + 100663296);
                    f = Math.max(b, f);
                    0 < f % 65536 && (f += 65536 - f % 65536);
                    a: {
                        try {
                            ra.grow(Math.min(2147483648, f) - xa.byteLength + 65535 >>> 16);
                            Ba();
                            var p = 1;
                            break a;
                        } catch (W) {}
                        p = void 0;
                    }
                    if (p) return !0;
                }
                return !1;
            },
            e: function() {
                return 0;
            },
            g: function(b, c, d, f) {
                b = Wa.BA(b);
                c = Wa.zA(b, c, d);
                ya[f >> 2] = c;
                return 0;
            },
            l: function() {},
            i: function(b, c, d, f) {
                for(var p = 0, W = 0; W < d; W++){
                    var Ia = ya[c >> 2], hb = ya[c + 4 >> 2];
                    c += 8;
                    for(var sb = 0; sb < hb; sb++){
                        var tb = wa[Ia + sb], ub = Va[b];
                        0 === tb || 10 === tb ? ((1 === b ? oa : pa)(ua(ub, 0)), ub.length = 0) : ub.push(tb);
                    }
                    p += hb;
                }
                ya[f >> 2] = p;
                return 0;
            }
        };
        (function() {
            function b(p) {
                a.asm = p.exports;
                ra = a.asm.o;
                Ba();
                Ca = a.asm.Wu;
                Ea.unshift(a.asm.p);
                Ja--;
                a.monitorRunDependencies && a.monitorRunDependencies(Ja);
                0 == Ja && (null !== Ka && (clearInterval(Ka), Ka = null), La && (p = La, La = null, p()));
            }
            function c(p) {
                b(p.instance);
            }
            function d(p) {
                return Qa().then(function(W) {
                    return WebAssembly.instantiate(W, f);
                }).then(function(W) {
                    return W;
                }).then(p, function(W) {
                    pa("failed to asynchronously prepare wasm: " + W);
                    na(W);
                });
            }
            var f = {
                a: Za
            };
            Ja++;
            a.monitorRunDependencies && a.monitorRunDependencies(Ja);
            if (a.instantiateWasm) try {
                return a.instantiateWasm(f, b);
            } catch (p) {
                return pa("Module.instantiateWasm callback failed with error: " + p), !1;
            }
            (function() {
                return qa || "function" !== typeof WebAssembly.instantiateStreaming || Ma() || Na.startsWith("file://") || "function" !== typeof fetch ? d(c) : fetch(Na, {
                    credentials: "same-origin"
                }).then(function(p) {
                    return WebAssembly.instantiateStreaming(p, f).then(c, function(W) {
                        pa("wasm streaming compile failed: " + W);
                        pa("falling back to ArrayBuffer instantiation");
                        return d(c);
                    });
                });
            })().catch(ba);
            return {};
        })();
        a.___wasm_call_ctors = function() {
            return (a.___wasm_call_ctors = a.asm.p).apply(null, arguments);
        };
        var $a = a._emscripten_bind_b2ContactListener___destroy___0 = function() {
            return ($a = a._emscripten_bind_b2ContactListener___destroy___0 = a.asm.q).apply(null, arguments);
        }, ab = a._emscripten_bind_b2Shape_GetType_0 = function() {
            return (ab = a._emscripten_bind_b2Shape_GetType_0 = a.asm.r).apply(null, arguments);
        }, bb = a._emscripten_bind_b2Shape_GetChildCount_0 = function() {
            return (bb = a._emscripten_bind_b2Shape_GetChildCount_0 = a.asm.s).apply(null, arguments);
        }, cb = a._emscripten_bind_b2Shape_TestPoint_2 = function() {
            return (cb = a._emscripten_bind_b2Shape_TestPoint_2 = a.asm.t).apply(null, arguments);
        }, db = a._emscripten_bind_b2Shape_RayCast_4 = function() {
            return (db = a._emscripten_bind_b2Shape_RayCast_4 = a.asm.u).apply(null, arguments);
        }, eb = a._emscripten_bind_b2Shape_ComputeAABB_3 = function() {
            return (eb = a._emscripten_bind_b2Shape_ComputeAABB_3 = a.asm.v).apply(null, arguments);
        }, fb = a._emscripten_bind_b2Shape_ComputeMass_2 = function() {
            return (fb = a._emscripten_bind_b2Shape_ComputeMass_2 = a.asm.w).apply(null, arguments);
        }, gb = a._emscripten_bind_b2Shape_get_m_type_0 = function() {
            return (gb = a._emscripten_bind_b2Shape_get_m_type_0 = a.asm.x).apply(null, arguments);
        }, ib = a._emscripten_bind_b2Shape_set_m_type_1 = function() {
            return (ib = a._emscripten_bind_b2Shape_set_m_type_1 = a.asm.y).apply(null, arguments);
        }, jb = a._emscripten_bind_b2Shape_get_m_radius_0 = function() {
            return (jb = a._emscripten_bind_b2Shape_get_m_radius_0 = a.asm.z).apply(null, arguments);
        }, kb = a._emscripten_bind_b2Shape_set_m_radius_1 = function() {
            return (kb = a._emscripten_bind_b2Shape_set_m_radius_1 = a.asm.A).apply(null, arguments);
        }, lb = a._emscripten_bind_b2Shape___destroy___0 = function() {
            return (lb = a._emscripten_bind_b2Shape___destroy___0 = a.asm.B).apply(null, arguments);
        }, mb = a._emscripten_bind_b2RayCastCallback___destroy___0 = function() {
            return (mb = a._emscripten_bind_b2RayCastCallback___destroy___0 = a.asm.C).apply(null, arguments);
        }, nb = a._emscripten_bind_b2QueryCallback___destroy___0 = function() {
            return (nb = a._emscripten_bind_b2QueryCallback___destroy___0 = a.asm.D).apply(null, arguments);
        }, ob = a._emscripten_bind_b2JointDef_b2JointDef_0 = function() {
            return (ob = a._emscripten_bind_b2JointDef_b2JointDef_0 = a.asm.E).apply(null, arguments);
        }, pb = a._emscripten_bind_b2JointDef_get_type_0 = function() {
            return (pb = a._emscripten_bind_b2JointDef_get_type_0 = a.asm.F).apply(null, arguments);
        }, qb = a._emscripten_bind_b2JointDef_set_type_1 = function() {
            return (qb = a._emscripten_bind_b2JointDef_set_type_1 = a.asm.G).apply(null, arguments);
        }, rb = a._emscripten_bind_b2JointDef_get_userData_0 = function() {
            return (rb = a._emscripten_bind_b2JointDef_get_userData_0 = a.asm.H).apply(null, arguments);
        }, vb = a._emscripten_bind_b2JointDef_set_userData_1 = function() {
            return (vb = a._emscripten_bind_b2JointDef_set_userData_1 = a.asm.I).apply(null, arguments);
        }, wb = a._emscripten_bind_b2JointDef_get_bodyA_0 = function() {
            return (wb = a._emscripten_bind_b2JointDef_get_bodyA_0 = a.asm.J).apply(null, arguments);
        }, xb = a._emscripten_bind_b2JointDef_set_bodyA_1 = function() {
            return (xb = a._emscripten_bind_b2JointDef_set_bodyA_1 = a.asm.K).apply(null, arguments);
        }, yb = a._emscripten_bind_b2JointDef_get_bodyB_0 = function() {
            return (yb = a._emscripten_bind_b2JointDef_get_bodyB_0 = a.asm.L).apply(null, arguments);
        }, zb = a._emscripten_bind_b2JointDef_set_bodyB_1 = function() {
            return (zb = a._emscripten_bind_b2JointDef_set_bodyB_1 = a.asm.M).apply(null, arguments);
        }, Ab = a._emscripten_bind_b2JointDef_get_collideConnected_0 = function() {
            return (Ab = a._emscripten_bind_b2JointDef_get_collideConnected_0 = a.asm.N).apply(null, arguments);
        }, Bb = a._emscripten_bind_b2JointDef_set_collideConnected_1 = function() {
            return (Bb = a._emscripten_bind_b2JointDef_set_collideConnected_1 = a.asm.O).apply(null, arguments);
        }, Cb = a._emscripten_bind_b2JointDef___destroy___0 = function() {
            return (Cb = a._emscripten_bind_b2JointDef___destroy___0 = a.asm.P).apply(null, arguments);
        }, Db = a._emscripten_bind_b2Joint_GetType_0 = function() {
            return (Db = a._emscripten_bind_b2Joint_GetType_0 = a.asm.Q).apply(null, arguments);
        }, Eb = a._emscripten_bind_b2Joint_GetBodyA_0 = function() {
            return (Eb = a._emscripten_bind_b2Joint_GetBodyA_0 = a.asm.R).apply(null, arguments);
        }, Fb = a._emscripten_bind_b2Joint_GetBodyB_0 = function() {
            return (Fb = a._emscripten_bind_b2Joint_GetBodyB_0 = a.asm.S).apply(null, arguments);
        }, Gb = a._emscripten_bind_b2Joint_GetAnchorA_0 = function() {
            return (Gb = a._emscripten_bind_b2Joint_GetAnchorA_0 = a.asm.T).apply(null, arguments);
        }, Hb = a._emscripten_bind_b2Joint_GetAnchorB_0 = function() {
            return (Hb = a._emscripten_bind_b2Joint_GetAnchorB_0 = a.asm.U).apply(null, arguments);
        }, Ib = a._emscripten_bind_b2Joint_GetReactionForce_1 = function() {
            return (Ib = a._emscripten_bind_b2Joint_GetReactionForce_1 = a.asm.V).apply(null, arguments);
        }, Jb = a._emscripten_bind_b2Joint_GetReactionTorque_1 = function() {
            return (Jb = a._emscripten_bind_b2Joint_GetReactionTorque_1 = a.asm.W).apply(null, arguments);
        }, Kb = a._emscripten_bind_b2Joint_GetNext_0 = function() {
            return (Kb = a._emscripten_bind_b2Joint_GetNext_0 = a.asm.X).apply(null, arguments);
        }, Lb = a._emscripten_bind_b2Joint_GetUserData_0 = function() {
            return (Lb = a._emscripten_bind_b2Joint_GetUserData_0 = a.asm.Y).apply(null, arguments);
        }, Mb = a._emscripten_bind_b2Joint_GetCollideConnected_0 = function() {
            return (Mb = a._emscripten_bind_b2Joint_GetCollideConnected_0 = a.asm.Z).apply(null, arguments);
        }, Nb = a._emscripten_bind_b2Joint_Dump_0 = function() {
            return (Nb = a._emscripten_bind_b2Joint_Dump_0 = a.asm._).apply(null, arguments);
        }, Ob = a._emscripten_bind_b2ContactFilter___destroy___0 = function() {
            return (Ob = a._emscripten_bind_b2ContactFilter___destroy___0 = a.asm.$).apply(null, arguments);
        }, Pb = a._emscripten_bind_b2DestructionListenerWrapper___destroy___0 = function() {
            return (Pb = a._emscripten_bind_b2DestructionListenerWrapper___destroy___0 = a.asm.aa).apply(null, arguments);
        }, Qb = a._emscripten_bind_b2Draw_SetFlags_1 = function() {
            return (Qb = a._emscripten_bind_b2Draw_SetFlags_1 = a.asm.ba).apply(null, arguments);
        }, Rb = a._emscripten_bind_b2Draw_GetFlags_0 = function() {
            return (Rb = a._emscripten_bind_b2Draw_GetFlags_0 = a.asm.ca).apply(null, arguments);
        }, Sb = a._emscripten_bind_b2Draw_AppendFlags_1 = function() {
            return (Sb = a._emscripten_bind_b2Draw_AppendFlags_1 = a.asm.da).apply(null, arguments);
        }, Tb = a._emscripten_bind_b2Draw_ClearFlags_1 = function() {
            return (Tb = a._emscripten_bind_b2Draw_ClearFlags_1 = a.asm.ea).apply(null, arguments);
        }, Ub = a._emscripten_bind_b2Draw___destroy___0 = function() {
            return (Ub = a._emscripten_bind_b2Draw___destroy___0 = a.asm.fa).apply(null, arguments);
        }, Vb = a._emscripten_bind_VoidPtr___destroy___0 = function() {
            return (Vb = a._emscripten_bind_VoidPtr___destroy___0 = a.asm.ga).apply(null, arguments);
        }, Wb = a._emscripten_bind_b2Contact_GetManifold_0 = function() {
            return (Wb = a._emscripten_bind_b2Contact_GetManifold_0 = a.asm.ha).apply(null, arguments);
        }, Xb = a._emscripten_bind_b2Contact_GetWorldManifold_1 = function() {
            return (Xb = a._emscripten_bind_b2Contact_GetWorldManifold_1 = a.asm.ia).apply(null, arguments);
        }, Yb = a._emscripten_bind_b2Contact_IsTouching_0 = function() {
            return (Yb = a._emscripten_bind_b2Contact_IsTouching_0 = a.asm.ja).apply(null, arguments);
        }, Zb = a._emscripten_bind_b2Contact_SetEnabled_1 = function() {
            return (Zb = a._emscripten_bind_b2Contact_SetEnabled_1 = a.asm.ka).apply(null, arguments);
        }, $b = a._emscripten_bind_b2Contact_IsEnabled_0 = function() {
            return ($b = a._emscripten_bind_b2Contact_IsEnabled_0 = a.asm.la).apply(null, arguments);
        }, ac = a._emscripten_bind_b2Contact_GetNext_0 = function() {
            return (ac = a._emscripten_bind_b2Contact_GetNext_0 = a.asm.ma).apply(null, arguments);
        }, bc = a._emscripten_bind_b2Contact_GetFixtureA_0 = function() {
            return (bc = a._emscripten_bind_b2Contact_GetFixtureA_0 = a.asm.na).apply(null, arguments);
        }, cc = a._emscripten_bind_b2Contact_GetChildIndexA_0 = function() {
            return (cc = a._emscripten_bind_b2Contact_GetChildIndexA_0 = a.asm.oa).apply(null, arguments);
        }, dc = a._emscripten_bind_b2Contact_GetFixtureB_0 = function() {
            return (dc = a._emscripten_bind_b2Contact_GetFixtureB_0 = a.asm.pa).apply(null, arguments);
        }, ec = a._emscripten_bind_b2Contact_GetChildIndexB_0 = function() {
            return (ec = a._emscripten_bind_b2Contact_GetChildIndexB_0 = a.asm.qa).apply(null, arguments);
        }, fc = a._emscripten_bind_b2Contact_SetFriction_1 = function() {
            return (fc = a._emscripten_bind_b2Contact_SetFriction_1 = a.asm.ra).apply(null, arguments);
        }, gc = a._emscripten_bind_b2Contact_GetFriction_0 = function() {
            return (gc = a._emscripten_bind_b2Contact_GetFriction_0 = a.asm.sa).apply(null, arguments);
        }, hc = a._emscripten_bind_b2Contact_ResetFriction_0 = function() {
            return (hc = a._emscripten_bind_b2Contact_ResetFriction_0 = a.asm.ta).apply(null, arguments);
        }, ic = a._emscripten_bind_b2Contact_SetRestitution_1 = function() {
            return (ic = a._emscripten_bind_b2Contact_SetRestitution_1 = a.asm.ua).apply(null, arguments);
        }, jc = a._emscripten_bind_b2Contact_GetRestitution_0 = function() {
            return (jc = a._emscripten_bind_b2Contact_GetRestitution_0 = a.asm.va).apply(null, arguments);
        }, kc = a._emscripten_bind_b2Contact_ResetRestitution_0 = function() {
            return (kc = a._emscripten_bind_b2Contact_ResetRestitution_0 = a.asm.wa).apply(null, arguments);
        }, lc = a._emscripten_bind_b2Contact_SetRestitutionThreshold_1 = function() {
            return (lc = a._emscripten_bind_b2Contact_SetRestitutionThreshold_1 = a.asm.xa).apply(null, arguments);
        }, mc = a._emscripten_bind_b2Contact_GetRestitutionThreshold_0 = function() {
            return (mc = a._emscripten_bind_b2Contact_GetRestitutionThreshold_0 = a.asm.ya).apply(null, arguments);
        }, nc = a._emscripten_bind_b2Contact_ResetRestitutionThreshold_0 = function() {
            return (nc = a._emscripten_bind_b2Contact_ResetRestitutionThreshold_0 = a.asm.za).apply(null, arguments);
        }, oc = a._emscripten_bind_b2Contact_SetTangentSpeed_1 = function() {
            return (oc = a._emscripten_bind_b2Contact_SetTangentSpeed_1 = a.asm.Aa).apply(null, arguments);
        }, pc = a._emscripten_bind_b2Contact_GetTangentSpeed_0 = function() {
            return (pc = a._emscripten_bind_b2Contact_GetTangentSpeed_0 = a.asm.Ba).apply(null, arguments);
        }, qc = a._emscripten_bind_JSContactListener_JSContactListener_0 = function() {
            return (qc = a._emscripten_bind_JSContactListener_JSContactListener_0 = a.asm.Ca).apply(null, arguments);
        }, rc = a._emscripten_bind_JSContactListener_BeginContact_1 = function() {
            return (rc = a._emscripten_bind_JSContactListener_BeginContact_1 = a.asm.Da).apply(null, arguments);
        }, sc = a._emscripten_bind_JSContactListener_EndContact_1 = function() {
            return (sc = a._emscripten_bind_JSContactListener_EndContact_1 = a.asm.Ea).apply(null, arguments);
        }, tc = a._emscripten_bind_JSContactListener_PreSolve_2 = function() {
            return (tc = a._emscripten_bind_JSContactListener_PreSolve_2 = a.asm.Fa).apply(null, arguments);
        }, uc = a._emscripten_bind_JSContactListener_PostSolve_2 = function() {
            return (uc = a._emscripten_bind_JSContactListener_PostSolve_2 = a.asm.Ga).apply(null, arguments);
        }, vc = a._emscripten_bind_JSContactListener___destroy___0 = function() {
            return (vc = a._emscripten_bind_JSContactListener___destroy___0 = a.asm.Ha).apply(null, arguments);
        }, wc = a._emscripten_bind_b2World_b2World_1 = function() {
            return (wc = a._emscripten_bind_b2World_b2World_1 = a.asm.Ia).apply(null, arguments);
        }, xc = a._emscripten_bind_b2World_SetDestructionListener_1 = function() {
            return (xc = a._emscripten_bind_b2World_SetDestructionListener_1 = a.asm.Ja).apply(null, arguments);
        }, yc = a._emscripten_bind_b2World_SetContactFilter_1 = function() {
            return (yc = a._emscripten_bind_b2World_SetContactFilter_1 = a.asm.Ka).apply(null, arguments);
        }, zc = a._emscripten_bind_b2World_SetContactListener_1 = function() {
            return (zc = a._emscripten_bind_b2World_SetContactListener_1 = a.asm.La).apply(null, arguments);
        }, Ac = a._emscripten_bind_b2World_SetDebugDraw_1 = function() {
            return (Ac = a._emscripten_bind_b2World_SetDebugDraw_1 = a.asm.Ma).apply(null, arguments);
        }, Bc = a._emscripten_bind_b2World_CreateBody_1 = function() {
            return (Bc = a._emscripten_bind_b2World_CreateBody_1 = a.asm.Na).apply(null, arguments);
        }, Cc = a._emscripten_bind_b2World_DestroyBody_1 = function() {
            return (Cc = a._emscripten_bind_b2World_DestroyBody_1 = a.asm.Oa).apply(null, arguments);
        }, Dc = a._emscripten_bind_b2World_CreateJoint_1 = function() {
            return (Dc = a._emscripten_bind_b2World_CreateJoint_1 = a.asm.Pa).apply(null, arguments);
        }, Ec = a._emscripten_bind_b2World_DestroyJoint_1 = function() {
            return (Ec = a._emscripten_bind_b2World_DestroyJoint_1 = a.asm.Qa).apply(null, arguments);
        }, Fc = a._emscripten_bind_b2World_Step_3 = function() {
            return (Fc = a._emscripten_bind_b2World_Step_3 = a.asm.Ra).apply(null, arguments);
        }, Gc = a._emscripten_bind_b2World_ClearForces_0 = function() {
            return (Gc = a._emscripten_bind_b2World_ClearForces_0 = a.asm.Sa).apply(null, arguments);
        }, Hc = a._emscripten_bind_b2World_DebugDraw_0 = function() {
            return (Hc = a._emscripten_bind_b2World_DebugDraw_0 = a.asm.Ta).apply(null, arguments);
        }, Ic = a._emscripten_bind_b2World_QueryAABB_2 = function() {
            return (Ic = a._emscripten_bind_b2World_QueryAABB_2 = a.asm.Ua).apply(null, arguments);
        }, Jc = a._emscripten_bind_b2World_RayCast_3 = function() {
            return (Jc = a._emscripten_bind_b2World_RayCast_3 = a.asm.Va).apply(null, arguments);
        }, Kc = a._emscripten_bind_b2World_GetBodyList_0 = function() {
            return (Kc = a._emscripten_bind_b2World_GetBodyList_0 = a.asm.Wa).apply(null, arguments);
        }, Lc = a._emscripten_bind_b2World_GetJointList_0 = function() {
            return (Lc = a._emscripten_bind_b2World_GetJointList_0 = a.asm.Xa).apply(null, arguments);
        }, Mc = a._emscripten_bind_b2World_GetContactList_0 = function() {
            return (Mc = a._emscripten_bind_b2World_GetContactList_0 = a.asm.Ya).apply(null, arguments);
        }, Nc = a._emscripten_bind_b2World_SetAllowSleeping_1 = function() {
            return (Nc = a._emscripten_bind_b2World_SetAllowSleeping_1 = a.asm.Za).apply(null, arguments);
        }, Oc = a._emscripten_bind_b2World_GetAllowSleeping_0 = function() {
            return (Oc = a._emscripten_bind_b2World_GetAllowSleeping_0 = a.asm._a).apply(null, arguments);
        }, Pc = a._emscripten_bind_b2World_SetWarmStarting_1 = function() {
            return (Pc = a._emscripten_bind_b2World_SetWarmStarting_1 = a.asm.$a).apply(null, arguments);
        }, Qc = a._emscripten_bind_b2World_GetWarmStarting_0 = function() {
            return (Qc = a._emscripten_bind_b2World_GetWarmStarting_0 = a.asm.ab).apply(null, arguments);
        }, Rc = a._emscripten_bind_b2World_SetContinuousPhysics_1 = function() {
            return (Rc = a._emscripten_bind_b2World_SetContinuousPhysics_1 = a.asm.bb).apply(null, arguments);
        }, Sc = a._emscripten_bind_b2World_GetContinuousPhysics_0 = function() {
            return (Sc = a._emscripten_bind_b2World_GetContinuousPhysics_0 = a.asm.cb).apply(null, arguments);
        }, Tc = a._emscripten_bind_b2World_SetSubStepping_1 = function() {
            return (Tc = a._emscripten_bind_b2World_SetSubStepping_1 = a.asm.db).apply(null, arguments);
        }, Uc = a._emscripten_bind_b2World_GetSubStepping_0 = function() {
            return (Uc = a._emscripten_bind_b2World_GetSubStepping_0 = a.asm.eb).apply(null, arguments);
        }, Vc = a._emscripten_bind_b2World_GetProxyCount_0 = function() {
            return (Vc = a._emscripten_bind_b2World_GetProxyCount_0 = a.asm.fb).apply(null, arguments);
        }, Wc = a._emscripten_bind_b2World_GetBodyCount_0 = function() {
            return (Wc = a._emscripten_bind_b2World_GetBodyCount_0 = a.asm.gb).apply(null, arguments);
        }, Xc = a._emscripten_bind_b2World_GetJointCount_0 = function() {
            return (Xc = a._emscripten_bind_b2World_GetJointCount_0 = a.asm.hb).apply(null, arguments);
        }, Yc = a._emscripten_bind_b2World_GetContactCount_0 = function() {
            return (Yc = a._emscripten_bind_b2World_GetContactCount_0 = a.asm.ib).apply(null, arguments);
        }, Zc = a._emscripten_bind_b2World_GetTreeHeight_0 = function() {
            return (Zc = a._emscripten_bind_b2World_GetTreeHeight_0 = a.asm.jb).apply(null, arguments);
        }, $c = a._emscripten_bind_b2World_GetTreeBalance_0 = function() {
            return ($c = a._emscripten_bind_b2World_GetTreeBalance_0 = a.asm.kb).apply(null, arguments);
        }, ad = a._emscripten_bind_b2World_GetTreeQuality_0 = function() {
            return (ad = a._emscripten_bind_b2World_GetTreeQuality_0 = a.asm.lb).apply(null, arguments);
        }, bd = a._emscripten_bind_b2World_SetGravity_1 = function() {
            return (bd = a._emscripten_bind_b2World_SetGravity_1 = a.asm.mb).apply(null, arguments);
        }, cd = a._emscripten_bind_b2World_GetGravity_0 = function() {
            return (cd = a._emscripten_bind_b2World_GetGravity_0 = a.asm.nb).apply(null, arguments);
        }, dd = a._emscripten_bind_b2World_IsLocked_0 = function() {
            return (dd = a._emscripten_bind_b2World_IsLocked_0 = a.asm.ob).apply(null, arguments);
        }, ed = a._emscripten_bind_b2World_SetAutoClearForces_1 = function() {
            return (ed = a._emscripten_bind_b2World_SetAutoClearForces_1 = a.asm.pb).apply(null, arguments);
        }, fd = a._emscripten_bind_b2World_GetAutoClearForces_0 = function() {
            return (fd = a._emscripten_bind_b2World_GetAutoClearForces_0 = a.asm.qb).apply(null, arguments);
        }, gd = a._emscripten_bind_b2World_GetProfile_0 = function() {
            return (gd = a._emscripten_bind_b2World_GetProfile_0 = a.asm.rb).apply(null, arguments);
        }, hd = a._emscripten_bind_b2World_Dump_0 = function() {
            return (hd = a._emscripten_bind_b2World_Dump_0 = a.asm.sb).apply(null, arguments);
        }, jd = a._emscripten_bind_b2World___destroy___0 = function() {
            return (jd = a._emscripten_bind_b2World___destroy___0 = a.asm.tb).apply(null, arguments);
        }, kd = a._emscripten_bind_b2FixtureUserData_get_pointer_0 = function() {
            return (kd = a._emscripten_bind_b2FixtureUserData_get_pointer_0 = a.asm.ub).apply(null, arguments);
        }, ld = a._emscripten_bind_b2FixtureUserData_set_pointer_1 = function() {
            return (ld = a._emscripten_bind_b2FixtureUserData_set_pointer_1 = a.asm.vb).apply(null, arguments);
        }, md = a._emscripten_bind_b2FixtureUserData___destroy___0 = function() {
            return (md = a._emscripten_bind_b2FixtureUserData___destroy___0 = a.asm.wb).apply(null, arguments);
        }, nd = a._emscripten_bind_b2FixtureDef_b2FixtureDef_0 = function() {
            return (nd = a._emscripten_bind_b2FixtureDef_b2FixtureDef_0 = a.asm.xb).apply(null, arguments);
        }, od = a._emscripten_bind_b2FixtureDef_get_shape_0 = function() {
            return (od = a._emscripten_bind_b2FixtureDef_get_shape_0 = a.asm.yb).apply(null, arguments);
        }, pd = a._emscripten_bind_b2FixtureDef_set_shape_1 = function() {
            return (pd = a._emscripten_bind_b2FixtureDef_set_shape_1 = a.asm.zb).apply(null, arguments);
        }, qd = a._emscripten_bind_b2FixtureDef_get_userData_0 = function() {
            return (qd = a._emscripten_bind_b2FixtureDef_get_userData_0 = a.asm.Ab).apply(null, arguments);
        }, rd = a._emscripten_bind_b2FixtureDef_set_userData_1 = function() {
            return (rd = a._emscripten_bind_b2FixtureDef_set_userData_1 = a.asm.Bb).apply(null, arguments);
        }, sd = a._emscripten_bind_b2FixtureDef_get_friction_0 = function() {
            return (sd = a._emscripten_bind_b2FixtureDef_get_friction_0 = a.asm.Cb).apply(null, arguments);
        }, td = a._emscripten_bind_b2FixtureDef_set_friction_1 = function() {
            return (td = a._emscripten_bind_b2FixtureDef_set_friction_1 = a.asm.Db).apply(null, arguments);
        }, ud = a._emscripten_bind_b2FixtureDef_get_restitution_0 = function() {
            return (ud = a._emscripten_bind_b2FixtureDef_get_restitution_0 = a.asm.Eb).apply(null, arguments);
        }, vd = a._emscripten_bind_b2FixtureDef_set_restitution_1 = function() {
            return (vd = a._emscripten_bind_b2FixtureDef_set_restitution_1 = a.asm.Fb).apply(null, arguments);
        }, wd = a._emscripten_bind_b2FixtureDef_get_restitutionThreshold_0 = function() {
            return (wd = a._emscripten_bind_b2FixtureDef_get_restitutionThreshold_0 = a.asm.Gb).apply(null, arguments);
        }, xd = a._emscripten_bind_b2FixtureDef_set_restitutionThreshold_1 = function() {
            return (xd = a._emscripten_bind_b2FixtureDef_set_restitutionThreshold_1 = a.asm.Hb).apply(null, arguments);
        }, yd = a._emscripten_bind_b2FixtureDef_get_density_0 = function() {
            return (yd = a._emscripten_bind_b2FixtureDef_get_density_0 = a.asm.Ib).apply(null, arguments);
        }, zd = a._emscripten_bind_b2FixtureDef_set_density_1 = function() {
            return (zd = a._emscripten_bind_b2FixtureDef_set_density_1 = a.asm.Jb).apply(null, arguments);
        }, Ad = a._emscripten_bind_b2FixtureDef_get_isSensor_0 = function() {
            return (Ad = a._emscripten_bind_b2FixtureDef_get_isSensor_0 = a.asm.Kb).apply(null, arguments);
        }, Bd = a._emscripten_bind_b2FixtureDef_set_isSensor_1 = function() {
            return (Bd = a._emscripten_bind_b2FixtureDef_set_isSensor_1 = a.asm.Lb).apply(null, arguments);
        }, Cd = a._emscripten_bind_b2FixtureDef_get_filter_0 = function() {
            return (Cd = a._emscripten_bind_b2FixtureDef_get_filter_0 = a.asm.Mb).apply(null, arguments);
        }, Dd = a._emscripten_bind_b2FixtureDef_set_filter_1 = function() {
            return (Dd = a._emscripten_bind_b2FixtureDef_set_filter_1 = a.asm.Nb).apply(null, arguments);
        }, Ed = a._emscripten_bind_b2FixtureDef___destroy___0 = function() {
            return (Ed = a._emscripten_bind_b2FixtureDef___destroy___0 = a.asm.Ob).apply(null, arguments);
        }, Fd = a._emscripten_bind_b2Fixture_GetType_0 = function() {
            return (Fd = a._emscripten_bind_b2Fixture_GetType_0 = a.asm.Pb).apply(null, arguments);
        }, Gd = a._emscripten_bind_b2Fixture_GetShape_0 = function() {
            return (Gd = a._emscripten_bind_b2Fixture_GetShape_0 = a.asm.Qb).apply(null, arguments);
        }, Hd = a._emscripten_bind_b2Fixture_SetSensor_1 = function() {
            return (Hd = a._emscripten_bind_b2Fixture_SetSensor_1 = a.asm.Rb).apply(null, arguments);
        }, Id = a._emscripten_bind_b2Fixture_IsSensor_0 = function() {
            return (Id = a._emscripten_bind_b2Fixture_IsSensor_0 = a.asm.Sb).apply(null, arguments);
        }, Jd = a._emscripten_bind_b2Fixture_SetFilterData_1 = function() {
            return (Jd = a._emscripten_bind_b2Fixture_SetFilterData_1 = a.asm.Tb).apply(null, arguments);
        }, Kd = a._emscripten_bind_b2Fixture_GetFilterData_0 = function() {
            return (Kd = a._emscripten_bind_b2Fixture_GetFilterData_0 = a.asm.Ub).apply(null, arguments);
        }, Ld = a._emscripten_bind_b2Fixture_Refilter_0 = function() {
            return (Ld = a._emscripten_bind_b2Fixture_Refilter_0 = a.asm.Vb).apply(null, arguments);
        }, Md = a._emscripten_bind_b2Fixture_GetBody_0 = function() {
            return (Md = a._emscripten_bind_b2Fixture_GetBody_0 = a.asm.Wb).apply(null, arguments);
        }, Nd = a._emscripten_bind_b2Fixture_GetNext_0 = function() {
            return (Nd = a._emscripten_bind_b2Fixture_GetNext_0 = a.asm.Xb).apply(null, arguments);
        }, Od = a._emscripten_bind_b2Fixture_GetUserData_0 = function() {
            return (Od = a._emscripten_bind_b2Fixture_GetUserData_0 = a.asm.Yb).apply(null, arguments);
        }, Pd = a._emscripten_bind_b2Fixture_TestPoint_1 = function() {
            return (Pd = a._emscripten_bind_b2Fixture_TestPoint_1 = a.asm.Zb).apply(null, arguments);
        }, Qd = a._emscripten_bind_b2Fixture_RayCast_3 = function() {
            return (Qd = a._emscripten_bind_b2Fixture_RayCast_3 = a.asm._b).apply(null, arguments);
        }, Rd = a._emscripten_bind_b2Fixture_GetMassData_1 = function() {
            return (Rd = a._emscripten_bind_b2Fixture_GetMassData_1 = a.asm.$b).apply(null, arguments);
        }, Sd = a._emscripten_bind_b2Fixture_SetDensity_1 = function() {
            return (Sd = a._emscripten_bind_b2Fixture_SetDensity_1 = a.asm.ac).apply(null, arguments);
        }, Td = a._emscripten_bind_b2Fixture_GetDensity_0 = function() {
            return (Td = a._emscripten_bind_b2Fixture_GetDensity_0 = a.asm.bc).apply(null, arguments);
        }, Ud = a._emscripten_bind_b2Fixture_GetFriction_0 = function() {
            return (Ud = a._emscripten_bind_b2Fixture_GetFriction_0 = a.asm.cc).apply(null, arguments);
        }, Vd = a._emscripten_bind_b2Fixture_SetFriction_1 = function() {
            return (Vd = a._emscripten_bind_b2Fixture_SetFriction_1 = a.asm.dc).apply(null, arguments);
        }, Wd = a._emscripten_bind_b2Fixture_GetRestitution_0 = function() {
            return (Wd = a._emscripten_bind_b2Fixture_GetRestitution_0 = a.asm.ec).apply(null, arguments);
        }, Xd = a._emscripten_bind_b2Fixture_SetRestitution_1 = function() {
            return (Xd = a._emscripten_bind_b2Fixture_SetRestitution_1 = a.asm.fc).apply(null, arguments);
        }, Yd = a._emscripten_bind_b2Fixture_GetRestitutionThreshold_0 = function() {
            return (Yd = a._emscripten_bind_b2Fixture_GetRestitutionThreshold_0 = a.asm.gc).apply(null, arguments);
        }, Zd = a._emscripten_bind_b2Fixture_SetRestitutionThreshold_1 = function() {
            return (Zd = a._emscripten_bind_b2Fixture_SetRestitutionThreshold_1 = a.asm.hc).apply(null, arguments);
        }, $d = a._emscripten_bind_b2Fixture_GetAABB_1 = function() {
            return ($d = a._emscripten_bind_b2Fixture_GetAABB_1 = a.asm.ic).apply(null, arguments);
        }, ae = a._emscripten_bind_b2Fixture_Dump_1 = function() {
            return (ae = a._emscripten_bind_b2Fixture_Dump_1 = a.asm.jc).apply(null, arguments);
        }, be = a._emscripten_bind_b2Fixture___destroy___0 = function() {
            return (be = a._emscripten_bind_b2Fixture___destroy___0 = a.asm.kc).apply(null, arguments);
        }, ce = a._emscripten_bind_b2Transform_b2Transform_0 = function() {
            return (ce = a._emscripten_bind_b2Transform_b2Transform_0 = a.asm.lc).apply(null, arguments);
        }, de = a._emscripten_bind_b2Transform_b2Transform_2 = function() {
            return (de = a._emscripten_bind_b2Transform_b2Transform_2 = a.asm.mc).apply(null, arguments);
        }, ee = a._emscripten_bind_b2Transform_SetIdentity_0 = function() {
            return (ee = a._emscripten_bind_b2Transform_SetIdentity_0 = a.asm.nc).apply(null, arguments);
        }, fe = a._emscripten_bind_b2Transform_Set_2 = function() {
            return (fe = a._emscripten_bind_b2Transform_Set_2 = a.asm.oc).apply(null, arguments);
        }, ge = a._emscripten_bind_b2Transform_get_p_0 = function() {
            return (ge = a._emscripten_bind_b2Transform_get_p_0 = a.asm.pc).apply(null, arguments);
        }, he = a._emscripten_bind_b2Transform_set_p_1 = function() {
            return (he = a._emscripten_bind_b2Transform_set_p_1 = a.asm.qc).apply(null, arguments);
        }, ie = a._emscripten_bind_b2Transform_get_q_0 = function() {
            return (ie = a._emscripten_bind_b2Transform_get_q_0 = a.asm.rc).apply(null, arguments);
        }, je = a._emscripten_bind_b2Transform_set_q_1 = function() {
            return (je = a._emscripten_bind_b2Transform_set_q_1 = a.asm.sc).apply(null, arguments);
        }, ke = a._emscripten_bind_b2Transform___destroy___0 = function() {
            return (ke = a._emscripten_bind_b2Transform___destroy___0 = a.asm.tc).apply(null, arguments);
        }, le = a._emscripten_bind_JSRayCastCallback_JSRayCastCallback_0 = function() {
            return (le = a._emscripten_bind_JSRayCastCallback_JSRayCastCallback_0 = a.asm.uc).apply(null, arguments);
        }, me = a._emscripten_bind_JSRayCastCallback_ReportFixture_4 = function() {
            return (me = a._emscripten_bind_JSRayCastCallback_ReportFixture_4 = a.asm.vc).apply(null, arguments);
        }, ne = a._emscripten_bind_JSRayCastCallback___destroy___0 = function() {
            return (ne = a._emscripten_bind_JSRayCastCallback___destroy___0 = a.asm.wc).apply(null, arguments);
        }, oe = a._emscripten_bind_JSQueryCallback_JSQueryCallback_0 = function() {
            return (oe = a._emscripten_bind_JSQueryCallback_JSQueryCallback_0 = a.asm.xc).apply(null, arguments);
        }, pe = a._emscripten_bind_JSQueryCallback_ReportFixture_1 = function() {
            return (pe = a._emscripten_bind_JSQueryCallback_ReportFixture_1 = a.asm.yc).apply(null, arguments);
        }, qe = a._emscripten_bind_JSQueryCallback___destroy___0 = function() {
            return (qe = a._emscripten_bind_JSQueryCallback___destroy___0 = a.asm.zc).apply(null, arguments);
        }, re = a._emscripten_bind_b2MassData_b2MassData_0 = function() {
            return (re = a._emscripten_bind_b2MassData_b2MassData_0 = a.asm.Ac).apply(null, arguments);
        }, se = a._emscripten_bind_b2MassData_get_mass_0 = function() {
            return (se = a._emscripten_bind_b2MassData_get_mass_0 = a.asm.Bc).apply(null, arguments);
        }, te = a._emscripten_bind_b2MassData_set_mass_1 = function() {
            return (te = a._emscripten_bind_b2MassData_set_mass_1 = a.asm.Cc).apply(null, arguments);
        }, ue = a._emscripten_bind_b2MassData_get_center_0 = function() {
            return (ue = a._emscripten_bind_b2MassData_get_center_0 = a.asm.Dc).apply(null, arguments);
        }, ve = a._emscripten_bind_b2MassData_set_center_1 = function() {
            return (ve = a._emscripten_bind_b2MassData_set_center_1 = a.asm.Ec).apply(null, arguments);
        }, we = a._emscripten_bind_b2MassData_get_I_0 = function() {
            return (we = a._emscripten_bind_b2MassData_get_I_0 = a.asm.Fc).apply(null, arguments);
        }, xe = a._emscripten_bind_b2MassData_set_I_1 = function() {
            return (xe = a._emscripten_bind_b2MassData_set_I_1 = a.asm.Gc).apply(null, arguments);
        }, ye = a._emscripten_bind_b2MassData___destroy___0 = function() {
            return (ye = a._emscripten_bind_b2MassData___destroy___0 = a.asm.Hc).apply(null, arguments);
        }, ze = a._emscripten_bind_b2Vec2_b2Vec2_0 = function() {
            return (ze = a._emscripten_bind_b2Vec2_b2Vec2_0 = a.asm.Ic).apply(null, arguments);
        }, Ae = a._emscripten_bind_b2Vec2_b2Vec2_2 = function() {
            return (Ae = a._emscripten_bind_b2Vec2_b2Vec2_2 = a.asm.Jc).apply(null, arguments);
        }, Be = a._emscripten_bind_b2Vec2_SetZero_0 = function() {
            return (Be = a._emscripten_bind_b2Vec2_SetZero_0 = a.asm.Kc).apply(null, arguments);
        }, Ce = a._emscripten_bind_b2Vec2_Set_2 = function() {
            return (Ce = a._emscripten_bind_b2Vec2_Set_2 = a.asm.Lc).apply(null, arguments);
        }, De = a._emscripten_bind_b2Vec2_op_add_1 = function() {
            return (De = a._emscripten_bind_b2Vec2_op_add_1 = a.asm.Mc).apply(null, arguments);
        }, Ee = a._emscripten_bind_b2Vec2_op_sub_1 = function() {
            return (Ee = a._emscripten_bind_b2Vec2_op_sub_1 = a.asm.Nc).apply(null, arguments);
        }, Fe = a._emscripten_bind_b2Vec2_op_mul_1 = function() {
            return (Fe = a._emscripten_bind_b2Vec2_op_mul_1 = a.asm.Oc).apply(null, arguments);
        }, Ge = a._emscripten_bind_b2Vec2_Length_0 = function() {
            return (Ge = a._emscripten_bind_b2Vec2_Length_0 = a.asm.Pc).apply(null, arguments);
        }, He = a._emscripten_bind_b2Vec2_LengthSquared_0 = function() {
            return (He = a._emscripten_bind_b2Vec2_LengthSquared_0 = a.asm.Qc).apply(null, arguments);
        }, Ie = a._emscripten_bind_b2Vec2_Normalize_0 = function() {
            return (Ie = a._emscripten_bind_b2Vec2_Normalize_0 = a.asm.Rc).apply(null, arguments);
        }, Je = a._emscripten_bind_b2Vec2_IsValid_0 = function() {
            return (Je = a._emscripten_bind_b2Vec2_IsValid_0 = a.asm.Sc).apply(null, arguments);
        }, Ke = a._emscripten_bind_b2Vec2_Skew_0 = function() {
            return (Ke = a._emscripten_bind_b2Vec2_Skew_0 = a.asm.Tc).apply(null, arguments);
        }, Le = a._emscripten_bind_b2Vec2_get_x_0 = function() {
            return (Le = a._emscripten_bind_b2Vec2_get_x_0 = a.asm.Uc).apply(null, arguments);
        }, Me = a._emscripten_bind_b2Vec2_set_x_1 = function() {
            return (Me = a._emscripten_bind_b2Vec2_set_x_1 = a.asm.Vc).apply(null, arguments);
        }, Ne = a._emscripten_bind_b2Vec2_get_y_0 = function() {
            return (Ne = a._emscripten_bind_b2Vec2_get_y_0 = a.asm.Wc).apply(null, arguments);
        }, Oe = a._emscripten_bind_b2Vec2_set_y_1 = function() {
            return (Oe = a._emscripten_bind_b2Vec2_set_y_1 = a.asm.Xc).apply(null, arguments);
        }, Pe = a._emscripten_bind_b2Vec2___destroy___0 = function() {
            return (Pe = a._emscripten_bind_b2Vec2___destroy___0 = a.asm.Yc).apply(null, arguments);
        }, Qe = a._emscripten_bind_b2Vec3_b2Vec3_0 = function() {
            return (Qe = a._emscripten_bind_b2Vec3_b2Vec3_0 = a.asm.Zc).apply(null, arguments);
        }, Re = a._emscripten_bind_b2Vec3_b2Vec3_3 = function() {
            return (Re = a._emscripten_bind_b2Vec3_b2Vec3_3 = a.asm._c).apply(null, arguments);
        }, Se = a._emscripten_bind_b2Vec3_SetZero_0 = function() {
            return (Se = a._emscripten_bind_b2Vec3_SetZero_0 = a.asm.$c).apply(null, arguments);
        }, Te = a._emscripten_bind_b2Vec3_Set_3 = function() {
            return (Te = a._emscripten_bind_b2Vec3_Set_3 = a.asm.ad).apply(null, arguments);
        }, Ue = a._emscripten_bind_b2Vec3_op_add_1 = function() {
            return (Ue = a._emscripten_bind_b2Vec3_op_add_1 = a.asm.bd).apply(null, arguments);
        }, Ve = a._emscripten_bind_b2Vec3_op_sub_1 = function() {
            return (Ve = a._emscripten_bind_b2Vec3_op_sub_1 = a.asm.cd).apply(null, arguments);
        }, We = a._emscripten_bind_b2Vec3_op_mul_1 = function() {
            return (We = a._emscripten_bind_b2Vec3_op_mul_1 = a.asm.dd).apply(null, arguments);
        }, Xe = a._emscripten_bind_b2Vec3_get_x_0 = function() {
            return (Xe = a._emscripten_bind_b2Vec3_get_x_0 = a.asm.ed).apply(null, arguments);
        }, Ye = a._emscripten_bind_b2Vec3_set_x_1 = function() {
            return (Ye = a._emscripten_bind_b2Vec3_set_x_1 = a.asm.fd).apply(null, arguments);
        }, Ze = a._emscripten_bind_b2Vec3_get_y_0 = function() {
            return (Ze = a._emscripten_bind_b2Vec3_get_y_0 = a.asm.gd).apply(null, arguments);
        }, $e = a._emscripten_bind_b2Vec3_set_y_1 = function() {
            return ($e = a._emscripten_bind_b2Vec3_set_y_1 = a.asm.hd).apply(null, arguments);
        }, af = a._emscripten_bind_b2Vec3_get_z_0 = function() {
            return (af = a._emscripten_bind_b2Vec3_get_z_0 = a.asm.id).apply(null, arguments);
        }, bf = a._emscripten_bind_b2Vec3_set_z_1 = function() {
            return (bf = a._emscripten_bind_b2Vec3_set_z_1 = a.asm.jd).apply(null, arguments);
        }, cf = a._emscripten_bind_b2Vec3___destroy___0 = function() {
            return (cf = a._emscripten_bind_b2Vec3___destroy___0 = a.asm.kd).apply(null, arguments);
        }, df = a._emscripten_bind_b2BodyUserData_get_pointer_0 = function() {
            return (df = a._emscripten_bind_b2BodyUserData_get_pointer_0 = a.asm.ld).apply(null, arguments);
        }, ef = a._emscripten_bind_b2BodyUserData_set_pointer_1 = function() {
            return (ef = a._emscripten_bind_b2BodyUserData_set_pointer_1 = a.asm.md).apply(null, arguments);
        }, ff = a._emscripten_bind_b2BodyUserData___destroy___0 = function() {
            return (ff = a._emscripten_bind_b2BodyUserData___destroy___0 = a.asm.nd).apply(null, arguments);
        }, gf = a._emscripten_bind_b2Body_CreateFixture_1 = function() {
            return (gf = a._emscripten_bind_b2Body_CreateFixture_1 = a.asm.od).apply(null, arguments);
        }, hf = a._emscripten_bind_b2Body_CreateFixture_2 = function() {
            return (hf = a._emscripten_bind_b2Body_CreateFixture_2 = a.asm.pd).apply(null, arguments);
        }, jf = a._emscripten_bind_b2Body_DestroyFixture_1 = function() {
            return (jf = a._emscripten_bind_b2Body_DestroyFixture_1 = a.asm.qd).apply(null, arguments);
        }, kf = a._emscripten_bind_b2Body_SetTransform_2 = function() {
            return (kf = a._emscripten_bind_b2Body_SetTransform_2 = a.asm.rd).apply(null, arguments);
        }, lf = a._emscripten_bind_b2Body_GetTransform_0 = function() {
            return (lf = a._emscripten_bind_b2Body_GetTransform_0 = a.asm.sd).apply(null, arguments);
        }, mf = a._emscripten_bind_b2Body_GetPosition_0 = function() {
            return (mf = a._emscripten_bind_b2Body_GetPosition_0 = a.asm.td).apply(null, arguments);
        }, nf = a._emscripten_bind_b2Body_GetAngle_0 = function() {
            return (nf = a._emscripten_bind_b2Body_GetAngle_0 = a.asm.ud).apply(null, arguments);
        }, of = a._emscripten_bind_b2Body_GetWorldCenter_0 = function() {
            return (of = a._emscripten_bind_b2Body_GetWorldCenter_0 = a.asm.vd).apply(null, arguments);
        }, pf = a._emscripten_bind_b2Body_GetLocalCenter_0 = function() {
            return (pf = a._emscripten_bind_b2Body_GetLocalCenter_0 = a.asm.wd).apply(null, arguments);
        }, qf = a._emscripten_bind_b2Body_SetLinearVelocity_1 = function() {
            return (qf = a._emscripten_bind_b2Body_SetLinearVelocity_1 = a.asm.xd).apply(null, arguments);
        }, rf = a._emscripten_bind_b2Body_GetLinearVelocity_0 = function() {
            return (rf = a._emscripten_bind_b2Body_GetLinearVelocity_0 = a.asm.yd).apply(null, arguments);
        }, sf = a._emscripten_bind_b2Body_SetAngularVelocity_1 = function() {
            return (sf = a._emscripten_bind_b2Body_SetAngularVelocity_1 = a.asm.zd).apply(null, arguments);
        }, tf = a._emscripten_bind_b2Body_GetAngularVelocity_0 = function() {
            return (tf = a._emscripten_bind_b2Body_GetAngularVelocity_0 = a.asm.Ad).apply(null, arguments);
        }, uf = a._emscripten_bind_b2Body_ApplyForce_3 = function() {
            return (uf = a._emscripten_bind_b2Body_ApplyForce_3 = a.asm.Bd).apply(null, arguments);
        }, vf = a._emscripten_bind_b2Body_ApplyForceToCenter_2 = function() {
            return (vf = a._emscripten_bind_b2Body_ApplyForceToCenter_2 = a.asm.Cd).apply(null, arguments);
        }, wf = a._emscripten_bind_b2Body_ApplyTorque_2 = function() {
            return (wf = a._emscripten_bind_b2Body_ApplyTorque_2 = a.asm.Dd).apply(null, arguments);
        }, xf = a._emscripten_bind_b2Body_ApplyLinearImpulse_3 = function() {
            return (xf = a._emscripten_bind_b2Body_ApplyLinearImpulse_3 = a.asm.Ed).apply(null, arguments);
        }, yf = a._emscripten_bind_b2Body_ApplyLinearImpulseToCenter_2 = function() {
            return (yf = a._emscripten_bind_b2Body_ApplyLinearImpulseToCenter_2 = a.asm.Fd).apply(null, arguments);
        }, zf = a._emscripten_bind_b2Body_ApplyAngularImpulse_2 = function() {
            return (zf = a._emscripten_bind_b2Body_ApplyAngularImpulse_2 = a.asm.Gd).apply(null, arguments);
        }, Af = a._emscripten_bind_b2Body_GetMass_0 = function() {
            return (Af = a._emscripten_bind_b2Body_GetMass_0 = a.asm.Hd).apply(null, arguments);
        }, Bf = a._emscripten_bind_b2Body_GetInertia_0 = function() {
            return (Bf = a._emscripten_bind_b2Body_GetInertia_0 = a.asm.Id).apply(null, arguments);
        }, Cf = a._emscripten_bind_b2Body_GetMassData_1 = function() {
            return (Cf = a._emscripten_bind_b2Body_GetMassData_1 = a.asm.Jd).apply(null, arguments);
        }, Df = a._emscripten_bind_b2Body_SetMassData_1 = function() {
            return (Df = a._emscripten_bind_b2Body_SetMassData_1 = a.asm.Kd).apply(null, arguments);
        }, Ef = a._emscripten_bind_b2Body_ResetMassData_0 = function() {
            return (Ef = a._emscripten_bind_b2Body_ResetMassData_0 = a.asm.Ld).apply(null, arguments);
        }, Ff = a._emscripten_bind_b2Body_GetWorldPoint_1 = function() {
            return (Ff = a._emscripten_bind_b2Body_GetWorldPoint_1 = a.asm.Md).apply(null, arguments);
        }, Gf = a._emscripten_bind_b2Body_GetWorldVector_1 = function() {
            return (Gf = a._emscripten_bind_b2Body_GetWorldVector_1 = a.asm.Nd).apply(null, arguments);
        }, Hf = a._emscripten_bind_b2Body_GetLocalPoint_1 = function() {
            return (Hf = a._emscripten_bind_b2Body_GetLocalPoint_1 = a.asm.Od).apply(null, arguments);
        }, If = a._emscripten_bind_b2Body_GetLocalVector_1 = function() {
            return (If = a._emscripten_bind_b2Body_GetLocalVector_1 = a.asm.Pd).apply(null, arguments);
        }, Jf = a._emscripten_bind_b2Body_GetLinearVelocityFromWorldPoint_1 = function() {
            return (Jf = a._emscripten_bind_b2Body_GetLinearVelocityFromWorldPoint_1 = a.asm.Qd).apply(null, arguments);
        }, Kf = a._emscripten_bind_b2Body_GetLinearVelocityFromLocalPoint_1 = function() {
            return (Kf = a._emscripten_bind_b2Body_GetLinearVelocityFromLocalPoint_1 = a.asm.Rd).apply(null, arguments);
        }, Lf = a._emscripten_bind_b2Body_GetLinearDamping_0 = function() {
            return (Lf = a._emscripten_bind_b2Body_GetLinearDamping_0 = a.asm.Sd).apply(null, arguments);
        }, Mf = a._emscripten_bind_b2Body_SetLinearDamping_1 = function() {
            return (Mf = a._emscripten_bind_b2Body_SetLinearDamping_1 = a.asm.Td).apply(null, arguments);
        }, Nf = a._emscripten_bind_b2Body_GetAngularDamping_0 = function() {
            return (Nf = a._emscripten_bind_b2Body_GetAngularDamping_0 = a.asm.Ud).apply(null, arguments);
        }, Of = a._emscripten_bind_b2Body_SetAngularDamping_1 = function() {
            return (Of = a._emscripten_bind_b2Body_SetAngularDamping_1 = a.asm.Vd).apply(null, arguments);
        }, Pf = a._emscripten_bind_b2Body_GetGravityScale_0 = function() {
            return (Pf = a._emscripten_bind_b2Body_GetGravityScale_0 = a.asm.Wd).apply(null, arguments);
        }, Qf = a._emscripten_bind_b2Body_SetGravityScale_1 = function() {
            return (Qf = a._emscripten_bind_b2Body_SetGravityScale_1 = a.asm.Xd).apply(null, arguments);
        }, Rf = a._emscripten_bind_b2Body_SetType_1 = function() {
            return (Rf = a._emscripten_bind_b2Body_SetType_1 = a.asm.Yd).apply(null, arguments);
        }, Sf = a._emscripten_bind_b2Body_GetType_0 = function() {
            return (Sf = a._emscripten_bind_b2Body_GetType_0 = a.asm.Zd).apply(null, arguments);
        }, Tf = a._emscripten_bind_b2Body_SetBullet_1 = function() {
            return (Tf = a._emscripten_bind_b2Body_SetBullet_1 = a.asm._d).apply(null, arguments);
        }, Uf = a._emscripten_bind_b2Body_IsBullet_0 = function() {
            return (Uf = a._emscripten_bind_b2Body_IsBullet_0 = a.asm.$d).apply(null, arguments);
        }, Vf = a._emscripten_bind_b2Body_SetSleepingAllowed_1 = function() {
            return (Vf = a._emscripten_bind_b2Body_SetSleepingAllowed_1 = a.asm.ae).apply(null, arguments);
        }, Wf = a._emscripten_bind_b2Body_IsSleepingAllowed_0 = function() {
            return (Wf = a._emscripten_bind_b2Body_IsSleepingAllowed_0 = a.asm.be).apply(null, arguments);
        }, Xf = a._emscripten_bind_b2Body_SetAwake_1 = function() {
            return (Xf = a._emscripten_bind_b2Body_SetAwake_1 = a.asm.ce).apply(null, arguments);
        }, Yf = a._emscripten_bind_b2Body_IsAwake_0 = function() {
            return (Yf = a._emscripten_bind_b2Body_IsAwake_0 = a.asm.de).apply(null, arguments);
        }, Zf = a._emscripten_bind_b2Body_SetEnabled_1 = function() {
            return (Zf = a._emscripten_bind_b2Body_SetEnabled_1 = a.asm.ee).apply(null, arguments);
        }, $f = a._emscripten_bind_b2Body_IsEnabled_0 = function() {
            return ($f = a._emscripten_bind_b2Body_IsEnabled_0 = a.asm.fe).apply(null, arguments);
        }, ag = a._emscripten_bind_b2Body_SetFixedRotation_1 = function() {
            return (ag = a._emscripten_bind_b2Body_SetFixedRotation_1 = a.asm.ge).apply(null, arguments);
        }, bg = a._emscripten_bind_b2Body_IsFixedRotation_0 = function() {
            return (bg = a._emscripten_bind_b2Body_IsFixedRotation_0 = a.asm.he).apply(null, arguments);
        }, cg = a._emscripten_bind_b2Body_GetFixtureList_0 = function() {
            return (cg = a._emscripten_bind_b2Body_GetFixtureList_0 = a.asm.ie).apply(null, arguments);
        }, dg = a._emscripten_bind_b2Body_GetJointList_0 = function() {
            return (dg = a._emscripten_bind_b2Body_GetJointList_0 = a.asm.je).apply(null, arguments);
        }, eg = a._emscripten_bind_b2Body_GetContactList_0 = function() {
            return (eg = a._emscripten_bind_b2Body_GetContactList_0 = a.asm.ke).apply(null, arguments);
        }, fg = a._emscripten_bind_b2Body_GetNext_0 = function() {
            return (fg = a._emscripten_bind_b2Body_GetNext_0 = a.asm.le).apply(null, arguments);
        }, gg = a._emscripten_bind_b2Body_GetUserData_0 = function() {
            return (gg = a._emscripten_bind_b2Body_GetUserData_0 = a.asm.me).apply(null, arguments);
        }, hg = a._emscripten_bind_b2Body_GetWorld_0 = function() {
            return (hg = a._emscripten_bind_b2Body_GetWorld_0 = a.asm.ne).apply(null, arguments);
        }, ig = a._emscripten_bind_b2Body_Dump_0 = function() {
            return (ig = a._emscripten_bind_b2Body_Dump_0 = a.asm.oe).apply(null, arguments);
        }, jg = a._emscripten_bind_b2BodyDef_b2BodyDef_0 = function() {
            return (jg = a._emscripten_bind_b2BodyDef_b2BodyDef_0 = a.asm.pe).apply(null, arguments);
        }, kg = a._emscripten_bind_b2BodyDef_get_type_0 = function() {
            return (kg = a._emscripten_bind_b2BodyDef_get_type_0 = a.asm.qe).apply(null, arguments);
        }, lg = a._emscripten_bind_b2BodyDef_set_type_1 = function() {
            return (lg = a._emscripten_bind_b2BodyDef_set_type_1 = a.asm.re).apply(null, arguments);
        }, mg = a._emscripten_bind_b2BodyDef_get_position_0 = function() {
            return (mg = a._emscripten_bind_b2BodyDef_get_position_0 = a.asm.se).apply(null, arguments);
        }, ng = a._emscripten_bind_b2BodyDef_set_position_1 = function() {
            return (ng = a._emscripten_bind_b2BodyDef_set_position_1 = a.asm.te).apply(null, arguments);
        }, og = a._emscripten_bind_b2BodyDef_get_angle_0 = function() {
            return (og = a._emscripten_bind_b2BodyDef_get_angle_0 = a.asm.ue).apply(null, arguments);
        }, pg = a._emscripten_bind_b2BodyDef_set_angle_1 = function() {
            return (pg = a._emscripten_bind_b2BodyDef_set_angle_1 = a.asm.ve).apply(null, arguments);
        }, qg = a._emscripten_bind_b2BodyDef_get_linearVelocity_0 = function() {
            return (qg = a._emscripten_bind_b2BodyDef_get_linearVelocity_0 = a.asm.we).apply(null, arguments);
        }, rg = a._emscripten_bind_b2BodyDef_set_linearVelocity_1 = function() {
            return (rg = a._emscripten_bind_b2BodyDef_set_linearVelocity_1 = a.asm.xe).apply(null, arguments);
        }, sg = a._emscripten_bind_b2BodyDef_get_angularVelocity_0 = function() {
            return (sg = a._emscripten_bind_b2BodyDef_get_angularVelocity_0 = a.asm.ye).apply(null, arguments);
        }, tg = a._emscripten_bind_b2BodyDef_set_angularVelocity_1 = function() {
            return (tg = a._emscripten_bind_b2BodyDef_set_angularVelocity_1 = a.asm.ze).apply(null, arguments);
        }, ug = a._emscripten_bind_b2BodyDef_get_linearDamping_0 = function() {
            return (ug = a._emscripten_bind_b2BodyDef_get_linearDamping_0 = a.asm.Ae).apply(null, arguments);
        }, vg = a._emscripten_bind_b2BodyDef_set_linearDamping_1 = function() {
            return (vg = a._emscripten_bind_b2BodyDef_set_linearDamping_1 = a.asm.Be).apply(null, arguments);
        }, wg = a._emscripten_bind_b2BodyDef_get_angularDamping_0 = function() {
            return (wg = a._emscripten_bind_b2BodyDef_get_angularDamping_0 = a.asm.Ce).apply(null, arguments);
        }, xg = a._emscripten_bind_b2BodyDef_set_angularDamping_1 = function() {
            return (xg = a._emscripten_bind_b2BodyDef_set_angularDamping_1 = a.asm.De).apply(null, arguments);
        }, yg = a._emscripten_bind_b2BodyDef_get_allowSleep_0 = function() {
            return (yg = a._emscripten_bind_b2BodyDef_get_allowSleep_0 = a.asm.Ee).apply(null, arguments);
        }, zg = a._emscripten_bind_b2BodyDef_set_allowSleep_1 = function() {
            return (zg = a._emscripten_bind_b2BodyDef_set_allowSleep_1 = a.asm.Fe).apply(null, arguments);
        }, Ag = a._emscripten_bind_b2BodyDef_get_awake_0 = function() {
            return (Ag = a._emscripten_bind_b2BodyDef_get_awake_0 = a.asm.Ge).apply(null, arguments);
        }, Bg = a._emscripten_bind_b2BodyDef_set_awake_1 = function() {
            return (Bg = a._emscripten_bind_b2BodyDef_set_awake_1 = a.asm.He).apply(null, arguments);
        }, Cg = a._emscripten_bind_b2BodyDef_get_fixedRotation_0 = function() {
            return (Cg = a._emscripten_bind_b2BodyDef_get_fixedRotation_0 = a.asm.Ie).apply(null, arguments);
        }, Dg = a._emscripten_bind_b2BodyDef_set_fixedRotation_1 = function() {
            return (Dg = a._emscripten_bind_b2BodyDef_set_fixedRotation_1 = a.asm.Je).apply(null, arguments);
        }, Eg = a._emscripten_bind_b2BodyDef_get_bullet_0 = function() {
            return (Eg = a._emscripten_bind_b2BodyDef_get_bullet_0 = a.asm.Ke).apply(null, arguments);
        }, Fg = a._emscripten_bind_b2BodyDef_set_bullet_1 = function() {
            return (Fg = a._emscripten_bind_b2BodyDef_set_bullet_1 = a.asm.Le).apply(null, arguments);
        }, Gg = a._emscripten_bind_b2BodyDef_get_enabled_0 = function() {
            return (Gg = a._emscripten_bind_b2BodyDef_get_enabled_0 = a.asm.Me).apply(null, arguments);
        }, Hg = a._emscripten_bind_b2BodyDef_set_enabled_1 = function() {
            return (Hg = a._emscripten_bind_b2BodyDef_set_enabled_1 = a.asm.Ne).apply(null, arguments);
        }, Ig = a._emscripten_bind_b2BodyDef_get_userData_0 = function() {
            return (Ig = a._emscripten_bind_b2BodyDef_get_userData_0 = a.asm.Oe).apply(null, arguments);
        }, Jg = a._emscripten_bind_b2BodyDef_set_userData_1 = function() {
            return (Jg = a._emscripten_bind_b2BodyDef_set_userData_1 = a.asm.Pe).apply(null, arguments);
        }, Kg = a._emscripten_bind_b2BodyDef_get_gravityScale_0 = function() {
            return (Kg = a._emscripten_bind_b2BodyDef_get_gravityScale_0 = a.asm.Qe).apply(null, arguments);
        }, Lg = a._emscripten_bind_b2BodyDef_set_gravityScale_1 = function() {
            return (Lg = a._emscripten_bind_b2BodyDef_set_gravityScale_1 = a.asm.Re).apply(null, arguments);
        }, Mg = a._emscripten_bind_b2BodyDef___destroy___0 = function() {
            return (Mg = a._emscripten_bind_b2BodyDef___destroy___0 = a.asm.Se).apply(null, arguments);
        }, Ng = a._emscripten_bind_b2Filter_b2Filter_0 = function() {
            return (Ng = a._emscripten_bind_b2Filter_b2Filter_0 = a.asm.Te).apply(null, arguments);
        }, Og = a._emscripten_bind_b2Filter_get_categoryBits_0 = function() {
            return (Og = a._emscripten_bind_b2Filter_get_categoryBits_0 = a.asm.Ue).apply(null, arguments);
        }, Pg = a._emscripten_bind_b2Filter_set_categoryBits_1 = function() {
            return (Pg = a._emscripten_bind_b2Filter_set_categoryBits_1 = a.asm.Ve).apply(null, arguments);
        }, Qg = a._emscripten_bind_b2Filter_get_maskBits_0 = function() {
            return (Qg = a._emscripten_bind_b2Filter_get_maskBits_0 = a.asm.We).apply(null, arguments);
        }, Rg = a._emscripten_bind_b2Filter_set_maskBits_1 = function() {
            return (Rg = a._emscripten_bind_b2Filter_set_maskBits_1 = a.asm.Xe).apply(null, arguments);
        }, Sg = a._emscripten_bind_b2Filter_get_groupIndex_0 = function() {
            return (Sg = a._emscripten_bind_b2Filter_get_groupIndex_0 = a.asm.Ye).apply(null, arguments);
        }, Tg = a._emscripten_bind_b2Filter_set_groupIndex_1 = function() {
            return (Tg = a._emscripten_bind_b2Filter_set_groupIndex_1 = a.asm.Ze).apply(null, arguments);
        }, Ug = a._emscripten_bind_b2Filter___destroy___0 = function() {
            return (Ug = a._emscripten_bind_b2Filter___destroy___0 = a.asm._e).apply(null, arguments);
        }, Vg = a._emscripten_bind_b2AABB_b2AABB_0 = function() {
            return (Vg = a._emscripten_bind_b2AABB_b2AABB_0 = a.asm.$e).apply(null, arguments);
        }, Wg = a._emscripten_bind_b2AABB_IsValid_0 = function() {
            return (Wg = a._emscripten_bind_b2AABB_IsValid_0 = a.asm.af).apply(null, arguments);
        }, Xg = a._emscripten_bind_b2AABB_GetCenter_0 = function() {
            return (Xg = a._emscripten_bind_b2AABB_GetCenter_0 = a.asm.bf).apply(null, arguments);
        }, Yg = a._emscripten_bind_b2AABB_GetExtents_0 = function() {
            return (Yg = a._emscripten_bind_b2AABB_GetExtents_0 = a.asm.cf).apply(null, arguments);
        }, Zg = a._emscripten_bind_b2AABB_GetPerimeter_0 = function() {
            return (Zg = a._emscripten_bind_b2AABB_GetPerimeter_0 = a.asm.df).apply(null, arguments);
        }, $g = a._emscripten_bind_b2AABB_Combine_1 = function() {
            return ($g = a._emscripten_bind_b2AABB_Combine_1 = a.asm.ef).apply(null, arguments);
        }, ah = a._emscripten_bind_b2AABB_Combine_2 = function() {
            return (ah = a._emscripten_bind_b2AABB_Combine_2 = a.asm.ff).apply(null, arguments);
        }, bh = a._emscripten_bind_b2AABB_Contains_1 = function() {
            return (bh = a._emscripten_bind_b2AABB_Contains_1 = a.asm.gf).apply(null, arguments);
        }, ch = a._emscripten_bind_b2AABB_RayCast_2 = function() {
            return (ch = a._emscripten_bind_b2AABB_RayCast_2 = a.asm.hf).apply(null, arguments);
        }, dh = a._emscripten_bind_b2AABB_get_lowerBound_0 = function() {
            return (dh = a._emscripten_bind_b2AABB_get_lowerBound_0 = a.asm.jf).apply(null, arguments);
        }, eh = a._emscripten_bind_b2AABB_set_lowerBound_1 = function() {
            return (eh = a._emscripten_bind_b2AABB_set_lowerBound_1 = a.asm.kf).apply(null, arguments);
        }, fh = a._emscripten_bind_b2AABB_get_upperBound_0 = function() {
            return (fh = a._emscripten_bind_b2AABB_get_upperBound_0 = a.asm.lf).apply(null, arguments);
        }, gh = a._emscripten_bind_b2AABB_set_upperBound_1 = function() {
            return (gh = a._emscripten_bind_b2AABB_set_upperBound_1 = a.asm.mf).apply(null, arguments);
        }, hh = a._emscripten_bind_b2AABB___destroy___0 = function() {
            return (hh = a._emscripten_bind_b2AABB___destroy___0 = a.asm.nf).apply(null, arguments);
        }, ih = a._emscripten_bind_b2CircleShape_b2CircleShape_0 = function() {
            return (ih = a._emscripten_bind_b2CircleShape_b2CircleShape_0 = a.asm.of).apply(null, arguments);
        }, jh = a._emscripten_bind_b2CircleShape_GetType_0 = function() {
            return (jh = a._emscripten_bind_b2CircleShape_GetType_0 = a.asm.pf).apply(null, arguments);
        }, kh = a._emscripten_bind_b2CircleShape_GetChildCount_0 = function() {
            return (kh = a._emscripten_bind_b2CircleShape_GetChildCount_0 = a.asm.qf).apply(null, arguments);
        }, lh = a._emscripten_bind_b2CircleShape_TestPoint_2 = function() {
            return (lh = a._emscripten_bind_b2CircleShape_TestPoint_2 = a.asm.rf).apply(null, arguments);
        }, mh = a._emscripten_bind_b2CircleShape_RayCast_4 = function() {
            return (mh = a._emscripten_bind_b2CircleShape_RayCast_4 = a.asm.sf).apply(null, arguments);
        }, nh = a._emscripten_bind_b2CircleShape_ComputeAABB_3 = function() {
            return (nh = a._emscripten_bind_b2CircleShape_ComputeAABB_3 = a.asm.tf).apply(null, arguments);
        }, oh = a._emscripten_bind_b2CircleShape_ComputeMass_2 = function() {
            return (oh = a._emscripten_bind_b2CircleShape_ComputeMass_2 = a.asm.uf).apply(null, arguments);
        }, ph = a._emscripten_bind_b2CircleShape_get_m_p_0 = function() {
            return (ph = a._emscripten_bind_b2CircleShape_get_m_p_0 = a.asm.vf).apply(null, arguments);
        }, qh = a._emscripten_bind_b2CircleShape_set_m_p_1 = function() {
            return (qh = a._emscripten_bind_b2CircleShape_set_m_p_1 = a.asm.wf).apply(null, arguments);
        }, rh = a._emscripten_bind_b2CircleShape_get_m_type_0 = function() {
            return (rh = a._emscripten_bind_b2CircleShape_get_m_type_0 = a.asm.xf).apply(null, arguments);
        }, sh = a._emscripten_bind_b2CircleShape_set_m_type_1 = function() {
            return (sh = a._emscripten_bind_b2CircleShape_set_m_type_1 = a.asm.yf).apply(null, arguments);
        }, th = a._emscripten_bind_b2CircleShape_get_m_radius_0 = function() {
            return (th = a._emscripten_bind_b2CircleShape_get_m_radius_0 = a.asm.zf).apply(null, arguments);
        }, uh = a._emscripten_bind_b2CircleShape_set_m_radius_1 = function() {
            return (uh = a._emscripten_bind_b2CircleShape_set_m_radius_1 = a.asm.Af).apply(null, arguments);
        }, vh = a._emscripten_bind_b2CircleShape___destroy___0 = function() {
            return (vh = a._emscripten_bind_b2CircleShape___destroy___0 = a.asm.Bf).apply(null, arguments);
        }, wh = a._emscripten_bind_b2EdgeShape_b2EdgeShape_0 = function() {
            return (wh = a._emscripten_bind_b2EdgeShape_b2EdgeShape_0 = a.asm.Cf).apply(null, arguments);
        }, xh = a._emscripten_bind_b2EdgeShape_SetOneSided_4 = function() {
            return (xh = a._emscripten_bind_b2EdgeShape_SetOneSided_4 = a.asm.Df).apply(null, arguments);
        }, yh = a._emscripten_bind_b2EdgeShape_SetTwoSided_2 = function() {
            return (yh = a._emscripten_bind_b2EdgeShape_SetTwoSided_2 = a.asm.Ef).apply(null, arguments);
        }, zh = a._emscripten_bind_b2EdgeShape_GetType_0 = function() {
            return (zh = a._emscripten_bind_b2EdgeShape_GetType_0 = a.asm.Ff).apply(null, arguments);
        }, Ah = a._emscripten_bind_b2EdgeShape_GetChildCount_0 = function() {
            return (Ah = a._emscripten_bind_b2EdgeShape_GetChildCount_0 = a.asm.Gf).apply(null, arguments);
        }, Bh = a._emscripten_bind_b2EdgeShape_TestPoint_2 = function() {
            return (Bh = a._emscripten_bind_b2EdgeShape_TestPoint_2 = a.asm.Hf).apply(null, arguments);
        }, Ch = a._emscripten_bind_b2EdgeShape_RayCast_4 = function() {
            return (Ch = a._emscripten_bind_b2EdgeShape_RayCast_4 = a.asm.If).apply(null, arguments);
        }, Dh = a._emscripten_bind_b2EdgeShape_ComputeAABB_3 = function() {
            return (Dh = a._emscripten_bind_b2EdgeShape_ComputeAABB_3 = a.asm.Jf).apply(null, arguments);
        }, Eh = a._emscripten_bind_b2EdgeShape_ComputeMass_2 = function() {
            return (Eh = a._emscripten_bind_b2EdgeShape_ComputeMass_2 = a.asm.Kf).apply(null, arguments);
        }, Fh = a._emscripten_bind_b2EdgeShape_get_m_vertex1_0 = function() {
            return (Fh = a._emscripten_bind_b2EdgeShape_get_m_vertex1_0 = a.asm.Lf).apply(null, arguments);
        }, Gh = a._emscripten_bind_b2EdgeShape_set_m_vertex1_1 = function() {
            return (Gh = a._emscripten_bind_b2EdgeShape_set_m_vertex1_1 = a.asm.Mf).apply(null, arguments);
        }, Hh = a._emscripten_bind_b2EdgeShape_get_m_vertex2_0 = function() {
            return (Hh = a._emscripten_bind_b2EdgeShape_get_m_vertex2_0 = a.asm.Nf).apply(null, arguments);
        }, Ih = a._emscripten_bind_b2EdgeShape_set_m_vertex2_1 = function() {
            return (Ih = a._emscripten_bind_b2EdgeShape_set_m_vertex2_1 = a.asm.Of).apply(null, arguments);
        }, Jh = a._emscripten_bind_b2EdgeShape_get_m_vertex0_0 = function() {
            return (Jh = a._emscripten_bind_b2EdgeShape_get_m_vertex0_0 = a.asm.Pf).apply(null, arguments);
        }, Kh = a._emscripten_bind_b2EdgeShape_set_m_vertex0_1 = function() {
            return (Kh = a._emscripten_bind_b2EdgeShape_set_m_vertex0_1 = a.asm.Qf).apply(null, arguments);
        }, Lh = a._emscripten_bind_b2EdgeShape_get_m_vertex3_0 = function() {
            return (Lh = a._emscripten_bind_b2EdgeShape_get_m_vertex3_0 = a.asm.Rf).apply(null, arguments);
        }, Mh = a._emscripten_bind_b2EdgeShape_set_m_vertex3_1 = function() {
            return (Mh = a._emscripten_bind_b2EdgeShape_set_m_vertex3_1 = a.asm.Sf).apply(null, arguments);
        }, Nh = a._emscripten_bind_b2EdgeShape_get_m_oneSided_0 = function() {
            return (Nh = a._emscripten_bind_b2EdgeShape_get_m_oneSided_0 = a.asm.Tf).apply(null, arguments);
        }, Oh = a._emscripten_bind_b2EdgeShape_set_m_oneSided_1 = function() {
            return (Oh = a._emscripten_bind_b2EdgeShape_set_m_oneSided_1 = a.asm.Uf).apply(null, arguments);
        }, Ph = a._emscripten_bind_b2EdgeShape_get_m_type_0 = function() {
            return (Ph = a._emscripten_bind_b2EdgeShape_get_m_type_0 = a.asm.Vf).apply(null, arguments);
        }, Qh = a._emscripten_bind_b2EdgeShape_set_m_type_1 = function() {
            return (Qh = a._emscripten_bind_b2EdgeShape_set_m_type_1 = a.asm.Wf).apply(null, arguments);
        }, Rh = a._emscripten_bind_b2EdgeShape_get_m_radius_0 = function() {
            return (Rh = a._emscripten_bind_b2EdgeShape_get_m_radius_0 = a.asm.Xf).apply(null, arguments);
        }, Sh = a._emscripten_bind_b2EdgeShape_set_m_radius_1 = function() {
            return (Sh = a._emscripten_bind_b2EdgeShape_set_m_radius_1 = a.asm.Yf).apply(null, arguments);
        }, Th = a._emscripten_bind_b2EdgeShape___destroy___0 = function() {
            return (Th = a._emscripten_bind_b2EdgeShape___destroy___0 = a.asm.Zf).apply(null, arguments);
        }, Uh = a._emscripten_bind_b2JointUserData_get_pointer_0 = function() {
            return (Uh = a._emscripten_bind_b2JointUserData_get_pointer_0 = a.asm._f).apply(null, arguments);
        }, Vh = a._emscripten_bind_b2JointUserData_set_pointer_1 = function() {
            return (Vh = a._emscripten_bind_b2JointUserData_set_pointer_1 = a.asm.$f).apply(null, arguments);
        }, Wh = a._emscripten_bind_b2JointUserData___destroy___0 = function() {
            return (Wh = a._emscripten_bind_b2JointUserData___destroy___0 = a.asm.ag).apply(null, arguments);
        }, Xh = a._emscripten_bind_b2WeldJoint_GetLocalAnchorA_0 = function() {
            return (Xh = a._emscripten_bind_b2WeldJoint_GetLocalAnchorA_0 = a.asm.bg).apply(null, arguments);
        }, Yh = a._emscripten_bind_b2WeldJoint_GetLocalAnchorB_0 = function() {
            return (Yh = a._emscripten_bind_b2WeldJoint_GetLocalAnchorB_0 = a.asm.cg).apply(null, arguments);
        }, Zh = a._emscripten_bind_b2WeldJoint_GetReferenceAngle_0 = function() {
            return (Zh = a._emscripten_bind_b2WeldJoint_GetReferenceAngle_0 = a.asm.dg).apply(null, arguments);
        }, $h = a._emscripten_bind_b2WeldJoint_SetStiffness_1 = function() {
            return ($h = a._emscripten_bind_b2WeldJoint_SetStiffness_1 = a.asm.eg).apply(null, arguments);
        }, ai = a._emscripten_bind_b2WeldJoint_GetStiffness_0 = function() {
            return (ai = a._emscripten_bind_b2WeldJoint_GetStiffness_0 = a.asm.fg).apply(null, arguments);
        }, bi = a._emscripten_bind_b2WeldJoint_SetDamping_1 = function() {
            return (bi = a._emscripten_bind_b2WeldJoint_SetDamping_1 = a.asm.gg).apply(null, arguments);
        }, ci = a._emscripten_bind_b2WeldJoint_GetDamping_0 = function() {
            return (ci = a._emscripten_bind_b2WeldJoint_GetDamping_0 = a.asm.hg).apply(null, arguments);
        }, di = a._emscripten_bind_b2WeldJoint_Dump_0 = function() {
            return (di = a._emscripten_bind_b2WeldJoint_Dump_0 = a.asm.ig).apply(null, arguments);
        }, ei = a._emscripten_bind_b2WeldJoint_GetType_0 = function() {
            return (ei = a._emscripten_bind_b2WeldJoint_GetType_0 = a.asm.jg).apply(null, arguments);
        }, fi = a._emscripten_bind_b2WeldJoint_GetBodyA_0 = function() {
            return (fi = a._emscripten_bind_b2WeldJoint_GetBodyA_0 = a.asm.kg).apply(null, arguments);
        }, gi = a._emscripten_bind_b2WeldJoint_GetBodyB_0 = function() {
            return (gi = a._emscripten_bind_b2WeldJoint_GetBodyB_0 = a.asm.lg).apply(null, arguments);
        }, hi = a._emscripten_bind_b2WeldJoint_GetAnchorA_0 = function() {
            return (hi = a._emscripten_bind_b2WeldJoint_GetAnchorA_0 = a.asm.mg).apply(null, arguments);
        }, ii = a._emscripten_bind_b2WeldJoint_GetAnchorB_0 = function() {
            return (ii = a._emscripten_bind_b2WeldJoint_GetAnchorB_0 = a.asm.ng).apply(null, arguments);
        }, ji = a._emscripten_bind_b2WeldJoint_GetReactionForce_1 = function() {
            return (ji = a._emscripten_bind_b2WeldJoint_GetReactionForce_1 = a.asm.og).apply(null, arguments);
        }, ki = a._emscripten_bind_b2WeldJoint_GetReactionTorque_1 = function() {
            return (ki = a._emscripten_bind_b2WeldJoint_GetReactionTorque_1 = a.asm.pg).apply(null, arguments);
        }, li = a._emscripten_bind_b2WeldJoint_GetNext_0 = function() {
            return (li = a._emscripten_bind_b2WeldJoint_GetNext_0 = a.asm.qg).apply(null, arguments);
        }, mi = a._emscripten_bind_b2WeldJoint_GetUserData_0 = function() {
            return (mi = a._emscripten_bind_b2WeldJoint_GetUserData_0 = a.asm.rg).apply(null, arguments);
        }, ni = a._emscripten_bind_b2WeldJoint_GetCollideConnected_0 = function() {
            return (ni = a._emscripten_bind_b2WeldJoint_GetCollideConnected_0 = a.asm.sg).apply(null, arguments);
        }, oi = a._emscripten_bind_b2WeldJoint___destroy___0 = function() {
            return (oi = a._emscripten_bind_b2WeldJoint___destroy___0 = a.asm.tg).apply(null, arguments);
        }, pi = a._emscripten_bind_b2WeldJointDef_b2WeldJointDef_0 = function() {
            return (pi = a._emscripten_bind_b2WeldJointDef_b2WeldJointDef_0 = a.asm.ug).apply(null, arguments);
        }, qi = a._emscripten_bind_b2WeldJointDef_Initialize_3 = function() {
            return (qi = a._emscripten_bind_b2WeldJointDef_Initialize_3 = a.asm.vg).apply(null, arguments);
        }, ri = a._emscripten_bind_b2WeldJointDef_get_localAnchorA_0 = function() {
            return (ri = a._emscripten_bind_b2WeldJointDef_get_localAnchorA_0 = a.asm.wg).apply(null, arguments);
        }, si = a._emscripten_bind_b2WeldJointDef_set_localAnchorA_1 = function() {
            return (si = a._emscripten_bind_b2WeldJointDef_set_localAnchorA_1 = a.asm.xg).apply(null, arguments);
        }, ti = a._emscripten_bind_b2WeldJointDef_get_localAnchorB_0 = function() {
            return (ti = a._emscripten_bind_b2WeldJointDef_get_localAnchorB_0 = a.asm.yg).apply(null, arguments);
        }, ui = a._emscripten_bind_b2WeldJointDef_set_localAnchorB_1 = function() {
            return (ui = a._emscripten_bind_b2WeldJointDef_set_localAnchorB_1 = a.asm.zg).apply(null, arguments);
        }, vi = a._emscripten_bind_b2WeldJointDef_get_referenceAngle_0 = function() {
            return (vi = a._emscripten_bind_b2WeldJointDef_get_referenceAngle_0 = a.asm.Ag).apply(null, arguments);
        }, wi = a._emscripten_bind_b2WeldJointDef_set_referenceAngle_1 = function() {
            return (wi = a._emscripten_bind_b2WeldJointDef_set_referenceAngle_1 = a.asm.Bg).apply(null, arguments);
        }, xi = a._emscripten_bind_b2WeldJointDef_get_stiffness_0 = function() {
            return (xi = a._emscripten_bind_b2WeldJointDef_get_stiffness_0 = a.asm.Cg).apply(null, arguments);
        }, yi = a._emscripten_bind_b2WeldJointDef_set_stiffness_1 = function() {
            return (yi = a._emscripten_bind_b2WeldJointDef_set_stiffness_1 = a.asm.Dg).apply(null, arguments);
        }, zi = a._emscripten_bind_b2WeldJointDef_get_damping_0 = function() {
            return (zi = a._emscripten_bind_b2WeldJointDef_get_damping_0 = a.asm.Eg).apply(null, arguments);
        }, Ai = a._emscripten_bind_b2WeldJointDef_set_damping_1 = function() {
            return (Ai = a._emscripten_bind_b2WeldJointDef_set_damping_1 = a.asm.Fg).apply(null, arguments);
        }, Bi = a._emscripten_bind_b2WeldJointDef_get_type_0 = function() {
            return (Bi = a._emscripten_bind_b2WeldJointDef_get_type_0 = a.asm.Gg).apply(null, arguments);
        }, Ci = a._emscripten_bind_b2WeldJointDef_set_type_1 = function() {
            return (Ci = a._emscripten_bind_b2WeldJointDef_set_type_1 = a.asm.Hg).apply(null, arguments);
        }, Di = a._emscripten_bind_b2WeldJointDef_get_userData_0 = function() {
            return (Di = a._emscripten_bind_b2WeldJointDef_get_userData_0 = a.asm.Ig).apply(null, arguments);
        }, Ei = a._emscripten_bind_b2WeldJointDef_set_userData_1 = function() {
            return (Ei = a._emscripten_bind_b2WeldJointDef_set_userData_1 = a.asm.Jg).apply(null, arguments);
        }, Fi = a._emscripten_bind_b2WeldJointDef_get_bodyA_0 = function() {
            return (Fi = a._emscripten_bind_b2WeldJointDef_get_bodyA_0 = a.asm.Kg).apply(null, arguments);
        }, Gi = a._emscripten_bind_b2WeldJointDef_set_bodyA_1 = function() {
            return (Gi = a._emscripten_bind_b2WeldJointDef_set_bodyA_1 = a.asm.Lg).apply(null, arguments);
        }, Hi = a._emscripten_bind_b2WeldJointDef_get_bodyB_0 = function() {
            return (Hi = a._emscripten_bind_b2WeldJointDef_get_bodyB_0 = a.asm.Mg).apply(null, arguments);
        }, Ii = a._emscripten_bind_b2WeldJointDef_set_bodyB_1 = function() {
            return (Ii = a._emscripten_bind_b2WeldJointDef_set_bodyB_1 = a.asm.Ng).apply(null, arguments);
        }, Ji = a._emscripten_bind_b2WeldJointDef_get_collideConnected_0 = function() {
            return (Ji = a._emscripten_bind_b2WeldJointDef_get_collideConnected_0 = a.asm.Og).apply(null, arguments);
        }, Ki = a._emscripten_bind_b2WeldJointDef_set_collideConnected_1 = function() {
            return (Ki = a._emscripten_bind_b2WeldJointDef_set_collideConnected_1 = a.asm.Pg).apply(null, arguments);
        }, Li = a._emscripten_bind_b2WeldJointDef___destroy___0 = function() {
            return (Li = a._emscripten_bind_b2WeldJointDef___destroy___0 = a.asm.Qg).apply(null, arguments);
        }, Mi = a._emscripten_bind_b2ChainShape_b2ChainShape_0 = function() {
            return (Mi = a._emscripten_bind_b2ChainShape_b2ChainShape_0 = a.asm.Rg).apply(null, arguments);
        }, Ni = a._emscripten_bind_b2ChainShape_Clear_0 = function() {
            return (Ni = a._emscripten_bind_b2ChainShape_Clear_0 = a.asm.Sg).apply(null, arguments);
        }, Oi = a._emscripten_bind_b2ChainShape_CreateLoop_2 = function() {
            return (Oi = a._emscripten_bind_b2ChainShape_CreateLoop_2 = a.asm.Tg).apply(null, arguments);
        }, Pi = a._emscripten_bind_b2ChainShape_CreateChain_4 = function() {
            return (Pi = a._emscripten_bind_b2ChainShape_CreateChain_4 = a.asm.Ug).apply(null, arguments);
        }, Qi = a._emscripten_bind_b2ChainShape_GetChildEdge_2 = function() {
            return (Qi = a._emscripten_bind_b2ChainShape_GetChildEdge_2 = a.asm.Vg).apply(null, arguments);
        }, Ri = a._emscripten_bind_b2ChainShape_GetType_0 = function() {
            return (Ri = a._emscripten_bind_b2ChainShape_GetType_0 = a.asm.Wg).apply(null, arguments);
        }, Si = a._emscripten_bind_b2ChainShape_GetChildCount_0 = function() {
            return (Si = a._emscripten_bind_b2ChainShape_GetChildCount_0 = a.asm.Xg).apply(null, arguments);
        }, Ti = a._emscripten_bind_b2ChainShape_TestPoint_2 = function() {
            return (Ti = a._emscripten_bind_b2ChainShape_TestPoint_2 = a.asm.Yg).apply(null, arguments);
        }, Ui = a._emscripten_bind_b2ChainShape_RayCast_4 = function() {
            return (Ui = a._emscripten_bind_b2ChainShape_RayCast_4 = a.asm.Zg).apply(null, arguments);
        }, Vi = a._emscripten_bind_b2ChainShape_ComputeAABB_3 = function() {
            return (Vi = a._emscripten_bind_b2ChainShape_ComputeAABB_3 = a.asm._g).apply(null, arguments);
        }, Wi = a._emscripten_bind_b2ChainShape_ComputeMass_2 = function() {
            return (Wi = a._emscripten_bind_b2ChainShape_ComputeMass_2 = a.asm.$g).apply(null, arguments);
        }, Xi = a._emscripten_bind_b2ChainShape_get_m_vertices_0 = function() {
            return (Xi = a._emscripten_bind_b2ChainShape_get_m_vertices_0 = a.asm.ah).apply(null, arguments);
        }, Yi = a._emscripten_bind_b2ChainShape_set_m_vertices_1 = function() {
            return (Yi = a._emscripten_bind_b2ChainShape_set_m_vertices_1 = a.asm.bh).apply(null, arguments);
        }, Zi = a._emscripten_bind_b2ChainShape_get_m_count_0 = function() {
            return (Zi = a._emscripten_bind_b2ChainShape_get_m_count_0 = a.asm.ch).apply(null, arguments);
        }, $i = a._emscripten_bind_b2ChainShape_set_m_count_1 = function() {
            return ($i = a._emscripten_bind_b2ChainShape_set_m_count_1 = a.asm.dh).apply(null, arguments);
        }, aj = a._emscripten_bind_b2ChainShape_get_m_prevVertex_0 = function() {
            return (aj = a._emscripten_bind_b2ChainShape_get_m_prevVertex_0 = a.asm.eh).apply(null, arguments);
        }, bj = a._emscripten_bind_b2ChainShape_set_m_prevVertex_1 = function() {
            return (bj = a._emscripten_bind_b2ChainShape_set_m_prevVertex_1 = a.asm.fh).apply(null, arguments);
        }, cj = a._emscripten_bind_b2ChainShape_get_m_nextVertex_0 = function() {
            return (cj = a._emscripten_bind_b2ChainShape_get_m_nextVertex_0 = a.asm.gh).apply(null, arguments);
        }, dj = a._emscripten_bind_b2ChainShape_set_m_nextVertex_1 = function() {
            return (dj = a._emscripten_bind_b2ChainShape_set_m_nextVertex_1 = a.asm.hh).apply(null, arguments);
        }, ej = a._emscripten_bind_b2ChainShape_get_m_type_0 = function() {
            return (ej = a._emscripten_bind_b2ChainShape_get_m_type_0 = a.asm.ih).apply(null, arguments);
        }, fj = a._emscripten_bind_b2ChainShape_set_m_type_1 = function() {
            return (fj = a._emscripten_bind_b2ChainShape_set_m_type_1 = a.asm.jh).apply(null, arguments);
        }, gj = a._emscripten_bind_b2ChainShape_get_m_radius_0 = function() {
            return (gj = a._emscripten_bind_b2ChainShape_get_m_radius_0 = a.asm.kh).apply(null, arguments);
        }, hj = a._emscripten_bind_b2ChainShape_set_m_radius_1 = function() {
            return (hj = a._emscripten_bind_b2ChainShape_set_m_radius_1 = a.asm.lh).apply(null, arguments);
        }, ij = a._emscripten_bind_b2ChainShape___destroy___0 = function() {
            return (ij = a._emscripten_bind_b2ChainShape___destroy___0 = a.asm.mh).apply(null, arguments);
        }, jj = a._emscripten_bind_b2Color_b2Color_0 = function() {
            return (jj = a._emscripten_bind_b2Color_b2Color_0 = a.asm.nh).apply(null, arguments);
        }, kj = a._emscripten_bind_b2Color_b2Color_3 = function() {
            return (kj = a._emscripten_bind_b2Color_b2Color_3 = a.asm.oh).apply(null, arguments);
        }, lj = a._emscripten_bind_b2Color_Set_3 = function() {
            return (lj = a._emscripten_bind_b2Color_Set_3 = a.asm.ph).apply(null, arguments);
        }, mj = a._emscripten_bind_b2Color_get_r_0 = function() {
            return (mj = a._emscripten_bind_b2Color_get_r_0 = a.asm.qh).apply(null, arguments);
        }, nj = a._emscripten_bind_b2Color_set_r_1 = function() {
            return (nj = a._emscripten_bind_b2Color_set_r_1 = a.asm.rh).apply(null, arguments);
        }, oj = a._emscripten_bind_b2Color_get_g_0 = function() {
            return (oj = a._emscripten_bind_b2Color_get_g_0 = a.asm.sh).apply(null, arguments);
        }, pj = a._emscripten_bind_b2Color_set_g_1 = function() {
            return (pj = a._emscripten_bind_b2Color_set_g_1 = a.asm.th).apply(null, arguments);
        }, qj = a._emscripten_bind_b2Color_get_b_0 = function() {
            return (qj = a._emscripten_bind_b2Color_get_b_0 = a.asm.uh).apply(null, arguments);
        }, rj = a._emscripten_bind_b2Color_set_b_1 = function() {
            return (rj = a._emscripten_bind_b2Color_set_b_1 = a.asm.vh).apply(null, arguments);
        }, sj = a._emscripten_bind_b2Color___destroy___0 = function() {
            return (sj = a._emscripten_bind_b2Color___destroy___0 = a.asm.wh).apply(null, arguments);
        }, tj = a._emscripten_bind_b2ContactEdge_b2ContactEdge_0 = function() {
            return (tj = a._emscripten_bind_b2ContactEdge_b2ContactEdge_0 = a.asm.xh).apply(null, arguments);
        }, uj = a._emscripten_bind_b2ContactEdge_get_other_0 = function() {
            return (uj = a._emscripten_bind_b2ContactEdge_get_other_0 = a.asm.yh).apply(null, arguments);
        }, vj = a._emscripten_bind_b2ContactEdge_set_other_1 = function() {
            return (vj = a._emscripten_bind_b2ContactEdge_set_other_1 = a.asm.zh).apply(null, arguments);
        }, wj = a._emscripten_bind_b2ContactEdge_get_contact_0 = function() {
            return (wj = a._emscripten_bind_b2ContactEdge_get_contact_0 = a.asm.Ah).apply(null, arguments);
        }, xj = a._emscripten_bind_b2ContactEdge_set_contact_1 = function() {
            return (xj = a._emscripten_bind_b2ContactEdge_set_contact_1 = a.asm.Bh).apply(null, arguments);
        }, yj = a._emscripten_bind_b2ContactEdge_get_prev_0 = function() {
            return (yj = a._emscripten_bind_b2ContactEdge_get_prev_0 = a.asm.Ch).apply(null, arguments);
        }, zj = a._emscripten_bind_b2ContactEdge_set_prev_1 = function() {
            return (zj = a._emscripten_bind_b2ContactEdge_set_prev_1 = a.asm.Dh).apply(null, arguments);
        }, Aj = a._emscripten_bind_b2ContactEdge_get_next_0 = function() {
            return (Aj = a._emscripten_bind_b2ContactEdge_get_next_0 = a.asm.Eh).apply(null, arguments);
        }, Bj = a._emscripten_bind_b2ContactEdge_set_next_1 = function() {
            return (Bj = a._emscripten_bind_b2ContactEdge_set_next_1 = a.asm.Fh).apply(null, arguments);
        }, Cj = a._emscripten_bind_b2ContactEdge___destroy___0 = function() {
            return (Cj = a._emscripten_bind_b2ContactEdge___destroy___0 = a.asm.Gh).apply(null, arguments);
        }, Dj = a._emscripten_bind_b2ContactFeature_get_indexA_0 = function() {
            return (Dj = a._emscripten_bind_b2ContactFeature_get_indexA_0 = a.asm.Hh).apply(null, arguments);
        }, Ej = a._emscripten_bind_b2ContactFeature_set_indexA_1 = function() {
            return (Ej = a._emscripten_bind_b2ContactFeature_set_indexA_1 = a.asm.Ih).apply(null, arguments);
        }, Fj = a._emscripten_bind_b2ContactFeature_get_indexB_0 = function() {
            return (Fj = a._emscripten_bind_b2ContactFeature_get_indexB_0 = a.asm.Jh).apply(null, arguments);
        }, Gj = a._emscripten_bind_b2ContactFeature_set_indexB_1 = function() {
            return (Gj = a._emscripten_bind_b2ContactFeature_set_indexB_1 = a.asm.Kh).apply(null, arguments);
        }, Hj = a._emscripten_bind_b2ContactFeature_get_typeA_0 = function() {
            return (Hj = a._emscripten_bind_b2ContactFeature_get_typeA_0 = a.asm.Lh).apply(null, arguments);
        }, Ij = a._emscripten_bind_b2ContactFeature_set_typeA_1 = function() {
            return (Ij = a._emscripten_bind_b2ContactFeature_set_typeA_1 = a.asm.Mh).apply(null, arguments);
        }, Jj = a._emscripten_bind_b2ContactFeature_get_typeB_0 = function() {
            return (Jj = a._emscripten_bind_b2ContactFeature_get_typeB_0 = a.asm.Nh).apply(null, arguments);
        }, Kj = a._emscripten_bind_b2ContactFeature_set_typeB_1 = function() {
            return (Kj = a._emscripten_bind_b2ContactFeature_set_typeB_1 = a.asm.Oh).apply(null, arguments);
        }, Lj = a._emscripten_bind_b2ContactFeature___destroy___0 = function() {
            return (Lj = a._emscripten_bind_b2ContactFeature___destroy___0 = a.asm.Ph).apply(null, arguments);
        }, Mj = a._emscripten_bind_JSContactFilter_JSContactFilter_0 = function() {
            return (Mj = a._emscripten_bind_JSContactFilter_JSContactFilter_0 = a.asm.Qh).apply(null, arguments);
        }, Nj = a._emscripten_bind_JSContactFilter_ShouldCollide_2 = function() {
            return (Nj = a._emscripten_bind_JSContactFilter_ShouldCollide_2 = a.asm.Rh).apply(null, arguments);
        }, Oj = a._emscripten_bind_JSContactFilter___destroy___0 = function() {
            return (Oj = a._emscripten_bind_JSContactFilter___destroy___0 = a.asm.Sh).apply(null, arguments);
        }, Pj = a._emscripten_bind_b2ContactID_get_cf_0 = function() {
            return (Pj = a._emscripten_bind_b2ContactID_get_cf_0 = a.asm.Th).apply(null, arguments);
        }, Qj = a._emscripten_bind_b2ContactID_set_cf_1 = function() {
            return (Qj = a._emscripten_bind_b2ContactID_set_cf_1 = a.asm.Uh).apply(null, arguments);
        }, Rj = a._emscripten_bind_b2ContactID_get_key_0 = function() {
            return (Rj = a._emscripten_bind_b2ContactID_get_key_0 = a.asm.Vh).apply(null, arguments);
        }, Sj = a._emscripten_bind_b2ContactID_set_key_1 = function() {
            return (Sj = a._emscripten_bind_b2ContactID_set_key_1 = a.asm.Wh).apply(null, arguments);
        }, Tj = a._emscripten_bind_b2ContactID___destroy___0 = function() {
            return (Tj = a._emscripten_bind_b2ContactID___destroy___0 = a.asm.Xh).apply(null, arguments);
        }, Uj = a._emscripten_bind_b2ContactImpulse_get_normalImpulses_1 = function() {
            return (Uj = a._emscripten_bind_b2ContactImpulse_get_normalImpulses_1 = a.asm.Yh).apply(null, arguments);
        }, Vj = a._emscripten_bind_b2ContactImpulse_set_normalImpulses_2 = function() {
            return (Vj = a._emscripten_bind_b2ContactImpulse_set_normalImpulses_2 = a.asm.Zh).apply(null, arguments);
        }, Wj = a._emscripten_bind_b2ContactImpulse_get_tangentImpulses_1 = function() {
            return (Wj = a._emscripten_bind_b2ContactImpulse_get_tangentImpulses_1 = a.asm._h).apply(null, arguments);
        }, Xj = a._emscripten_bind_b2ContactImpulse_set_tangentImpulses_2 = function() {
            return (Xj = a._emscripten_bind_b2ContactImpulse_set_tangentImpulses_2 = a.asm.$h).apply(null, arguments);
        }, Yj = a._emscripten_bind_b2ContactImpulse_get_count_0 = function() {
            return (Yj = a._emscripten_bind_b2ContactImpulse_get_count_0 = a.asm.ai).apply(null, arguments);
        }, Zj = a._emscripten_bind_b2ContactImpulse_set_count_1 = function() {
            return (Zj = a._emscripten_bind_b2ContactImpulse_set_count_1 = a.asm.bi).apply(null, arguments);
        }, ak = a._emscripten_bind_b2ContactImpulse___destroy___0 = function() {
            return (ak = a._emscripten_bind_b2ContactImpulse___destroy___0 = a.asm.ci).apply(null, arguments);
        }, bk = a._emscripten_bind_b2DestructionListener___destroy___0 = function() {
            return (bk = a._emscripten_bind_b2DestructionListener___destroy___0 = a.asm.di).apply(null, arguments);
        }, ck = a._emscripten_bind_JSDestructionListener_JSDestructionListener_0 = function() {
            return (ck = a._emscripten_bind_JSDestructionListener_JSDestructionListener_0 = a.asm.ei).apply(null, arguments);
        }, dk = a._emscripten_bind_JSDestructionListener_SayGoodbyeJoint_1 = function() {
            return (dk = a._emscripten_bind_JSDestructionListener_SayGoodbyeJoint_1 = a.asm.fi).apply(null, arguments);
        }, ek = a._emscripten_bind_JSDestructionListener_SayGoodbyeFixture_1 = function() {
            return (ek = a._emscripten_bind_JSDestructionListener_SayGoodbyeFixture_1 = a.asm.gi).apply(null, arguments);
        }, fk = a._emscripten_bind_JSDestructionListener___destroy___0 = function() {
            return (fk = a._emscripten_bind_JSDestructionListener___destroy___0 = a.asm.hi).apply(null, arguments);
        }, gk = a._emscripten_bind_b2DistanceJoint_GetLocalAnchorA_0 = function() {
            return (gk = a._emscripten_bind_b2DistanceJoint_GetLocalAnchorA_0 = a.asm.ii).apply(null, arguments);
        }, hk = a._emscripten_bind_b2DistanceJoint_GetLocalAnchorB_0 = function() {
            return (hk = a._emscripten_bind_b2DistanceJoint_GetLocalAnchorB_0 = a.asm.ji).apply(null, arguments);
        }, ik = a._emscripten_bind_b2DistanceJoint_GetLength_0 = function() {
            return (ik = a._emscripten_bind_b2DistanceJoint_GetLength_0 = a.asm.ki).apply(null, arguments);
        }, jk = a._emscripten_bind_b2DistanceJoint_SetLength_1 = function() {
            return (jk = a._emscripten_bind_b2DistanceJoint_SetLength_1 = a.asm.li).apply(null, arguments);
        }, kk = a._emscripten_bind_b2DistanceJoint_GetMinLength_0 = function() {
            return (kk = a._emscripten_bind_b2DistanceJoint_GetMinLength_0 = a.asm.mi).apply(null, arguments);
        }, lk = a._emscripten_bind_b2DistanceJoint_SetMinLength_1 = function() {
            return (lk = a._emscripten_bind_b2DistanceJoint_SetMinLength_1 = a.asm.ni).apply(null, arguments);
        }, mk = a._emscripten_bind_b2DistanceJoint_GetMaxLength_0 = function() {
            return (mk = a._emscripten_bind_b2DistanceJoint_GetMaxLength_0 = a.asm.oi).apply(null, arguments);
        }, nk = a._emscripten_bind_b2DistanceJoint_SetMaxLength_1 = function() {
            return (nk = a._emscripten_bind_b2DistanceJoint_SetMaxLength_1 = a.asm.pi).apply(null, arguments);
        }, ok = a._emscripten_bind_b2DistanceJoint_GetCurrentLength_0 = function() {
            return (ok = a._emscripten_bind_b2DistanceJoint_GetCurrentLength_0 = a.asm.qi).apply(null, arguments);
        }, pk = a._emscripten_bind_b2DistanceJoint_SetStiffness_1 = function() {
            return (pk = a._emscripten_bind_b2DistanceJoint_SetStiffness_1 = a.asm.ri).apply(null, arguments);
        }, qk = a._emscripten_bind_b2DistanceJoint_GetStiffness_0 = function() {
            return (qk = a._emscripten_bind_b2DistanceJoint_GetStiffness_0 = a.asm.si).apply(null, arguments);
        }, rk = a._emscripten_bind_b2DistanceJoint_SetDamping_1 = function() {
            return (rk = a._emscripten_bind_b2DistanceJoint_SetDamping_1 = a.asm.ti).apply(null, arguments);
        }, sk = a._emscripten_bind_b2DistanceJoint_GetDamping_0 = function() {
            return (sk = a._emscripten_bind_b2DistanceJoint_GetDamping_0 = a.asm.ui).apply(null, arguments);
        }, tk = a._emscripten_bind_b2DistanceJoint_GetType_0 = function() {
            return (tk = a._emscripten_bind_b2DistanceJoint_GetType_0 = a.asm.vi).apply(null, arguments);
        }, uk = a._emscripten_bind_b2DistanceJoint_GetBodyA_0 = function() {
            return (uk = a._emscripten_bind_b2DistanceJoint_GetBodyA_0 = a.asm.wi).apply(null, arguments);
        }, vk = a._emscripten_bind_b2DistanceJoint_GetBodyB_0 = function() {
            return (vk = a._emscripten_bind_b2DistanceJoint_GetBodyB_0 = a.asm.xi).apply(null, arguments);
        }, wk = a._emscripten_bind_b2DistanceJoint_GetAnchorA_0 = function() {
            return (wk = a._emscripten_bind_b2DistanceJoint_GetAnchorA_0 = a.asm.yi).apply(null, arguments);
        }, xk = a._emscripten_bind_b2DistanceJoint_GetAnchorB_0 = function() {
            return (xk = a._emscripten_bind_b2DistanceJoint_GetAnchorB_0 = a.asm.zi).apply(null, arguments);
        }, yk = a._emscripten_bind_b2DistanceJoint_GetReactionForce_1 = function() {
            return (yk = a._emscripten_bind_b2DistanceJoint_GetReactionForce_1 = a.asm.Ai).apply(null, arguments);
        }, zk = a._emscripten_bind_b2DistanceJoint_GetReactionTorque_1 = function() {
            return (zk = a._emscripten_bind_b2DistanceJoint_GetReactionTorque_1 = a.asm.Bi).apply(null, arguments);
        }, Ak = a._emscripten_bind_b2DistanceJoint_GetNext_0 = function() {
            return (Ak = a._emscripten_bind_b2DistanceJoint_GetNext_0 = a.asm.Ci).apply(null, arguments);
        }, Bk = a._emscripten_bind_b2DistanceJoint_GetUserData_0 = function() {
            return (Bk = a._emscripten_bind_b2DistanceJoint_GetUserData_0 = a.asm.Di).apply(null, arguments);
        }, Ck = a._emscripten_bind_b2DistanceJoint_GetCollideConnected_0 = function() {
            return (Ck = a._emscripten_bind_b2DistanceJoint_GetCollideConnected_0 = a.asm.Ei).apply(null, arguments);
        }, Dk = a._emscripten_bind_b2DistanceJoint___destroy___0 = function() {
            return (Dk = a._emscripten_bind_b2DistanceJoint___destroy___0 = a.asm.Fi).apply(null, arguments);
        }, Ek = a._emscripten_bind_b2DistanceJointDef_b2DistanceJointDef_0 = function() {
            return (Ek = a._emscripten_bind_b2DistanceJointDef_b2DistanceJointDef_0 = a.asm.Gi).apply(null, arguments);
        }, Fk = a._emscripten_bind_b2DistanceJointDef_Initialize_4 = function() {
            return (Fk = a._emscripten_bind_b2DistanceJointDef_Initialize_4 = a.asm.Hi).apply(null, arguments);
        }, Gk = a._emscripten_bind_b2DistanceJointDef_get_localAnchorA_0 = function() {
            return (Gk = a._emscripten_bind_b2DistanceJointDef_get_localAnchorA_0 = a.asm.Ii).apply(null, arguments);
        }, Hk = a._emscripten_bind_b2DistanceJointDef_set_localAnchorA_1 = function() {
            return (Hk = a._emscripten_bind_b2DistanceJointDef_set_localAnchorA_1 = a.asm.Ji).apply(null, arguments);
        }, Ik = a._emscripten_bind_b2DistanceJointDef_get_localAnchorB_0 = function() {
            return (Ik = a._emscripten_bind_b2DistanceJointDef_get_localAnchorB_0 = a.asm.Ki).apply(null, arguments);
        }, Jk = a._emscripten_bind_b2DistanceJointDef_set_localAnchorB_1 = function() {
            return (Jk = a._emscripten_bind_b2DistanceJointDef_set_localAnchorB_1 = a.asm.Li).apply(null, arguments);
        }, Kk = a._emscripten_bind_b2DistanceJointDef_get_length_0 = function() {
            return (Kk = a._emscripten_bind_b2DistanceJointDef_get_length_0 = a.asm.Mi).apply(null, arguments);
        }, Lk = a._emscripten_bind_b2DistanceJointDef_set_length_1 = function() {
            return (Lk = a._emscripten_bind_b2DistanceJointDef_set_length_1 = a.asm.Ni).apply(null, arguments);
        }, Mk = a._emscripten_bind_b2DistanceJointDef_get_minLength_0 = function() {
            return (Mk = a._emscripten_bind_b2DistanceJointDef_get_minLength_0 = a.asm.Oi).apply(null, arguments);
        }, Nk = a._emscripten_bind_b2DistanceJointDef_set_minLength_1 = function() {
            return (Nk = a._emscripten_bind_b2DistanceJointDef_set_minLength_1 = a.asm.Pi).apply(null, arguments);
        }, Ok = a._emscripten_bind_b2DistanceJointDef_get_maxLength_0 = function() {
            return (Ok = a._emscripten_bind_b2DistanceJointDef_get_maxLength_0 = a.asm.Qi).apply(null, arguments);
        }, Pk = a._emscripten_bind_b2DistanceJointDef_set_maxLength_1 = function() {
            return (Pk = a._emscripten_bind_b2DistanceJointDef_set_maxLength_1 = a.asm.Ri).apply(null, arguments);
        }, Qk = a._emscripten_bind_b2DistanceJointDef_get_stiffness_0 = function() {
            return (Qk = a._emscripten_bind_b2DistanceJointDef_get_stiffness_0 = a.asm.Si).apply(null, arguments);
        }, Rk = a._emscripten_bind_b2DistanceJointDef_set_stiffness_1 = function() {
            return (Rk = a._emscripten_bind_b2DistanceJointDef_set_stiffness_1 = a.asm.Ti).apply(null, arguments);
        }, Sk = a._emscripten_bind_b2DistanceJointDef_get_damping_0 = function() {
            return (Sk = a._emscripten_bind_b2DistanceJointDef_get_damping_0 = a.asm.Ui).apply(null, arguments);
        }, Tk = a._emscripten_bind_b2DistanceJointDef_set_damping_1 = function() {
            return (Tk = a._emscripten_bind_b2DistanceJointDef_set_damping_1 = a.asm.Vi).apply(null, arguments);
        }, Uk = a._emscripten_bind_b2DistanceJointDef_get_type_0 = function() {
            return (Uk = a._emscripten_bind_b2DistanceJointDef_get_type_0 = a.asm.Wi).apply(null, arguments);
        }, Vk = a._emscripten_bind_b2DistanceJointDef_set_type_1 = function() {
            return (Vk = a._emscripten_bind_b2DistanceJointDef_set_type_1 = a.asm.Xi).apply(null, arguments);
        }, Wk = a._emscripten_bind_b2DistanceJointDef_get_userData_0 = function() {
            return (Wk = a._emscripten_bind_b2DistanceJointDef_get_userData_0 = a.asm.Yi).apply(null, arguments);
        }, Xk = a._emscripten_bind_b2DistanceJointDef_set_userData_1 = function() {
            return (Xk = a._emscripten_bind_b2DistanceJointDef_set_userData_1 = a.asm.Zi).apply(null, arguments);
        }, Yk = a._emscripten_bind_b2DistanceJointDef_get_bodyA_0 = function() {
            return (Yk = a._emscripten_bind_b2DistanceJointDef_get_bodyA_0 = a.asm._i).apply(null, arguments);
        }, Zk = a._emscripten_bind_b2DistanceJointDef_set_bodyA_1 = function() {
            return (Zk = a._emscripten_bind_b2DistanceJointDef_set_bodyA_1 = a.asm.$i).apply(null, arguments);
        }, $k = a._emscripten_bind_b2DistanceJointDef_get_bodyB_0 = function() {
            return ($k = a._emscripten_bind_b2DistanceJointDef_get_bodyB_0 = a.asm.aj).apply(null, arguments);
        }, al = a._emscripten_bind_b2DistanceJointDef_set_bodyB_1 = function() {
            return (al = a._emscripten_bind_b2DistanceJointDef_set_bodyB_1 = a.asm.bj).apply(null, arguments);
        }, bl = a._emscripten_bind_b2DistanceJointDef_get_collideConnected_0 = function() {
            return (bl = a._emscripten_bind_b2DistanceJointDef_get_collideConnected_0 = a.asm.cj).apply(null, arguments);
        }, cl = a._emscripten_bind_b2DistanceJointDef_set_collideConnected_1 = function() {
            return (cl = a._emscripten_bind_b2DistanceJointDef_set_collideConnected_1 = a.asm.dj).apply(null, arguments);
        }, dl = a._emscripten_bind_b2DistanceJointDef___destroy___0 = function() {
            return (dl = a._emscripten_bind_b2DistanceJointDef___destroy___0 = a.asm.ej).apply(null, arguments);
        }, el = a._emscripten_bind_JSDraw_JSDraw_0 = function() {
            return (el = a._emscripten_bind_JSDraw_JSDraw_0 = a.asm.fj).apply(null, arguments);
        }, fl = a._emscripten_bind_JSDraw_DrawPolygon_3 = function() {
            return (fl = a._emscripten_bind_JSDraw_DrawPolygon_3 = a.asm.gj).apply(null, arguments);
        }, gl = a._emscripten_bind_JSDraw_DrawSolidPolygon_3 = function() {
            return (gl = a._emscripten_bind_JSDraw_DrawSolidPolygon_3 = a.asm.hj).apply(null, arguments);
        }, hl = a._emscripten_bind_JSDraw_DrawCircle_3 = function() {
            return (hl = a._emscripten_bind_JSDraw_DrawCircle_3 = a.asm.ij).apply(null, arguments);
        }, il = a._emscripten_bind_JSDraw_DrawSolidCircle_4 = function() {
            return (il = a._emscripten_bind_JSDraw_DrawSolidCircle_4 = a.asm.jj).apply(null, arguments);
        }, jl = a._emscripten_bind_JSDraw_DrawSegment_3 = function() {
            return (jl = a._emscripten_bind_JSDraw_DrawSegment_3 = a.asm.kj).apply(null, arguments);
        }, kl = a._emscripten_bind_JSDraw_DrawTransform_1 = function() {
            return (kl = a._emscripten_bind_JSDraw_DrawTransform_1 = a.asm.lj).apply(null, arguments);
        }, ll = a._emscripten_bind_JSDraw_DrawPoint_3 = function() {
            return (ll = a._emscripten_bind_JSDraw_DrawPoint_3 = a.asm.mj).apply(null, arguments);
        }, ml = a._emscripten_bind_JSDraw___destroy___0 = function() {
            return (ml = a._emscripten_bind_JSDraw___destroy___0 = a.asm.nj).apply(null, arguments);
        }, nl = a._emscripten_bind_b2FrictionJoint_GetLocalAnchorA_0 = function() {
            return (nl = a._emscripten_bind_b2FrictionJoint_GetLocalAnchorA_0 = a.asm.oj).apply(null, arguments);
        }, ol = a._emscripten_bind_b2FrictionJoint_GetLocalAnchorB_0 = function() {
            return (ol = a._emscripten_bind_b2FrictionJoint_GetLocalAnchorB_0 = a.asm.pj).apply(null, arguments);
        }, pl = a._emscripten_bind_b2FrictionJoint_SetMaxForce_1 = function() {
            return (pl = a._emscripten_bind_b2FrictionJoint_SetMaxForce_1 = a.asm.qj).apply(null, arguments);
        }, ql = a._emscripten_bind_b2FrictionJoint_GetMaxForce_0 = function() {
            return (ql = a._emscripten_bind_b2FrictionJoint_GetMaxForce_0 = a.asm.rj).apply(null, arguments);
        }, rl = a._emscripten_bind_b2FrictionJoint_SetMaxTorque_1 = function() {
            return (rl = a._emscripten_bind_b2FrictionJoint_SetMaxTorque_1 = a.asm.sj).apply(null, arguments);
        }, sl = a._emscripten_bind_b2FrictionJoint_GetMaxTorque_0 = function() {
            return (sl = a._emscripten_bind_b2FrictionJoint_GetMaxTorque_0 = a.asm.tj).apply(null, arguments);
        }, tl = a._emscripten_bind_b2FrictionJoint_GetType_0 = function() {
            return (tl = a._emscripten_bind_b2FrictionJoint_GetType_0 = a.asm.uj).apply(null, arguments);
        }, ul = a._emscripten_bind_b2FrictionJoint_GetBodyA_0 = function() {
            return (ul = a._emscripten_bind_b2FrictionJoint_GetBodyA_0 = a.asm.vj).apply(null, arguments);
        }, vl = a._emscripten_bind_b2FrictionJoint_GetBodyB_0 = function() {
            return (vl = a._emscripten_bind_b2FrictionJoint_GetBodyB_0 = a.asm.wj).apply(null, arguments);
        }, wl = a._emscripten_bind_b2FrictionJoint_GetAnchorA_0 = function() {
            return (wl = a._emscripten_bind_b2FrictionJoint_GetAnchorA_0 = a.asm.xj).apply(null, arguments);
        }, xl = a._emscripten_bind_b2FrictionJoint_GetAnchorB_0 = function() {
            return (xl = a._emscripten_bind_b2FrictionJoint_GetAnchorB_0 = a.asm.yj).apply(null, arguments);
        }, yl = a._emscripten_bind_b2FrictionJoint_GetReactionForce_1 = function() {
            return (yl = a._emscripten_bind_b2FrictionJoint_GetReactionForce_1 = a.asm.zj).apply(null, arguments);
        }, zl = a._emscripten_bind_b2FrictionJoint_GetReactionTorque_1 = function() {
            return (zl = a._emscripten_bind_b2FrictionJoint_GetReactionTorque_1 = a.asm.Aj).apply(null, arguments);
        }, Al = a._emscripten_bind_b2FrictionJoint_GetNext_0 = function() {
            return (Al = a._emscripten_bind_b2FrictionJoint_GetNext_0 = a.asm.Bj).apply(null, arguments);
        }, Bl = a._emscripten_bind_b2FrictionJoint_GetUserData_0 = function() {
            return (Bl = a._emscripten_bind_b2FrictionJoint_GetUserData_0 = a.asm.Cj).apply(null, arguments);
        }, Cl = a._emscripten_bind_b2FrictionJoint_GetCollideConnected_0 = function() {
            return (Cl = a._emscripten_bind_b2FrictionJoint_GetCollideConnected_0 = a.asm.Dj).apply(null, arguments);
        }, Dl = a._emscripten_bind_b2FrictionJoint___destroy___0 = function() {
            return (Dl = a._emscripten_bind_b2FrictionJoint___destroy___0 = a.asm.Ej).apply(null, arguments);
        }, El = a._emscripten_bind_b2FrictionJointDef_b2FrictionJointDef_0 = function() {
            return (El = a._emscripten_bind_b2FrictionJointDef_b2FrictionJointDef_0 = a.asm.Fj).apply(null, arguments);
        }, Fl = a._emscripten_bind_b2FrictionJointDef_Initialize_3 = function() {
            return (Fl = a._emscripten_bind_b2FrictionJointDef_Initialize_3 = a.asm.Gj).apply(null, arguments);
        }, Gl = a._emscripten_bind_b2FrictionJointDef_get_localAnchorA_0 = function() {
            return (Gl = a._emscripten_bind_b2FrictionJointDef_get_localAnchorA_0 = a.asm.Hj).apply(null, arguments);
        }, Hl = a._emscripten_bind_b2FrictionJointDef_set_localAnchorA_1 = function() {
            return (Hl = a._emscripten_bind_b2FrictionJointDef_set_localAnchorA_1 = a.asm.Ij).apply(null, arguments);
        }, Il = a._emscripten_bind_b2FrictionJointDef_get_localAnchorB_0 = function() {
            return (Il = a._emscripten_bind_b2FrictionJointDef_get_localAnchorB_0 = a.asm.Jj).apply(null, arguments);
        }, Jl = a._emscripten_bind_b2FrictionJointDef_set_localAnchorB_1 = function() {
            return (Jl = a._emscripten_bind_b2FrictionJointDef_set_localAnchorB_1 = a.asm.Kj).apply(null, arguments);
        }, Kl = a._emscripten_bind_b2FrictionJointDef_get_maxForce_0 = function() {
            return (Kl = a._emscripten_bind_b2FrictionJointDef_get_maxForce_0 = a.asm.Lj).apply(null, arguments);
        }, Ll = a._emscripten_bind_b2FrictionJointDef_set_maxForce_1 = function() {
            return (Ll = a._emscripten_bind_b2FrictionJointDef_set_maxForce_1 = a.asm.Mj).apply(null, arguments);
        }, Ml = a._emscripten_bind_b2FrictionJointDef_get_maxTorque_0 = function() {
            return (Ml = a._emscripten_bind_b2FrictionJointDef_get_maxTorque_0 = a.asm.Nj).apply(null, arguments);
        }, Nl = a._emscripten_bind_b2FrictionJointDef_set_maxTorque_1 = function() {
            return (Nl = a._emscripten_bind_b2FrictionJointDef_set_maxTorque_1 = a.asm.Oj).apply(null, arguments);
        }, Ol = a._emscripten_bind_b2FrictionJointDef_get_type_0 = function() {
            return (Ol = a._emscripten_bind_b2FrictionJointDef_get_type_0 = a.asm.Pj).apply(null, arguments);
        }, Pl = a._emscripten_bind_b2FrictionJointDef_set_type_1 = function() {
            return (Pl = a._emscripten_bind_b2FrictionJointDef_set_type_1 = a.asm.Qj).apply(null, arguments);
        }, Ql = a._emscripten_bind_b2FrictionJointDef_get_userData_0 = function() {
            return (Ql = a._emscripten_bind_b2FrictionJointDef_get_userData_0 = a.asm.Rj).apply(null, arguments);
        }, Rl = a._emscripten_bind_b2FrictionJointDef_set_userData_1 = function() {
            return (Rl = a._emscripten_bind_b2FrictionJointDef_set_userData_1 = a.asm.Sj).apply(null, arguments);
        }, Sl = a._emscripten_bind_b2FrictionJointDef_get_bodyA_0 = function() {
            return (Sl = a._emscripten_bind_b2FrictionJointDef_get_bodyA_0 = a.asm.Tj).apply(null, arguments);
        }, Tl = a._emscripten_bind_b2FrictionJointDef_set_bodyA_1 = function() {
            return (Tl = a._emscripten_bind_b2FrictionJointDef_set_bodyA_1 = a.asm.Uj).apply(null, arguments);
        }, Ul = a._emscripten_bind_b2FrictionJointDef_get_bodyB_0 = function() {
            return (Ul = a._emscripten_bind_b2FrictionJointDef_get_bodyB_0 = a.asm.Vj).apply(null, arguments);
        }, Vl = a._emscripten_bind_b2FrictionJointDef_set_bodyB_1 = function() {
            return (Vl = a._emscripten_bind_b2FrictionJointDef_set_bodyB_1 = a.asm.Wj).apply(null, arguments);
        }, Wl = a._emscripten_bind_b2FrictionJointDef_get_collideConnected_0 = function() {
            return (Wl = a._emscripten_bind_b2FrictionJointDef_get_collideConnected_0 = a.asm.Xj).apply(null, arguments);
        }, Xl = a._emscripten_bind_b2FrictionJointDef_set_collideConnected_1 = function() {
            return (Xl = a._emscripten_bind_b2FrictionJointDef_set_collideConnected_1 = a.asm.Yj).apply(null, arguments);
        }, Yl = a._emscripten_bind_b2FrictionJointDef___destroy___0 = function() {
            return (Yl = a._emscripten_bind_b2FrictionJointDef___destroy___0 = a.asm.Zj).apply(null, arguments);
        }, Zl = a._emscripten_bind_b2GearJoint_GetJoint1_0 = function() {
            return (Zl = a._emscripten_bind_b2GearJoint_GetJoint1_0 = a.asm._j).apply(null, arguments);
        }, $l = a._emscripten_bind_b2GearJoint_GetJoint2_0 = function() {
            return ($l = a._emscripten_bind_b2GearJoint_GetJoint2_0 = a.asm.$j).apply(null, arguments);
        }, am = a._emscripten_bind_b2GearJoint_SetRatio_1 = function() {
            return (am = a._emscripten_bind_b2GearJoint_SetRatio_1 = a.asm.ak).apply(null, arguments);
        }, bm = a._emscripten_bind_b2GearJoint_GetRatio_0 = function() {
            return (bm = a._emscripten_bind_b2GearJoint_GetRatio_0 = a.asm.bk).apply(null, arguments);
        }, cm = a._emscripten_bind_b2GearJoint_GetType_0 = function() {
            return (cm = a._emscripten_bind_b2GearJoint_GetType_0 = a.asm.ck).apply(null, arguments);
        }, dm = a._emscripten_bind_b2GearJoint_GetBodyA_0 = function() {
            return (dm = a._emscripten_bind_b2GearJoint_GetBodyA_0 = a.asm.dk).apply(null, arguments);
        }, em = a._emscripten_bind_b2GearJoint_GetBodyB_0 = function() {
            return (em = a._emscripten_bind_b2GearJoint_GetBodyB_0 = a.asm.ek).apply(null, arguments);
        }, fm = a._emscripten_bind_b2GearJoint_GetAnchorA_0 = function() {
            return (fm = a._emscripten_bind_b2GearJoint_GetAnchorA_0 = a.asm.fk).apply(null, arguments);
        }, gm = a._emscripten_bind_b2GearJoint_GetAnchorB_0 = function() {
            return (gm = a._emscripten_bind_b2GearJoint_GetAnchorB_0 = a.asm.gk).apply(null, arguments);
        }, hm = a._emscripten_bind_b2GearJoint_GetReactionForce_1 = function() {
            return (hm = a._emscripten_bind_b2GearJoint_GetReactionForce_1 = a.asm.hk).apply(null, arguments);
        }, im = a._emscripten_bind_b2GearJoint_GetReactionTorque_1 = function() {
            return (im = a._emscripten_bind_b2GearJoint_GetReactionTorque_1 = a.asm.ik).apply(null, arguments);
        }, jm = a._emscripten_bind_b2GearJoint_GetNext_0 = function() {
            return (jm = a._emscripten_bind_b2GearJoint_GetNext_0 = a.asm.jk).apply(null, arguments);
        }, km = a._emscripten_bind_b2GearJoint_GetUserData_0 = function() {
            return (km = a._emscripten_bind_b2GearJoint_GetUserData_0 = a.asm.kk).apply(null, arguments);
        }, lm = a._emscripten_bind_b2GearJoint_GetCollideConnected_0 = function() {
            return (lm = a._emscripten_bind_b2GearJoint_GetCollideConnected_0 = a.asm.lk).apply(null, arguments);
        }, mm = a._emscripten_bind_b2GearJoint___destroy___0 = function() {
            return (mm = a._emscripten_bind_b2GearJoint___destroy___0 = a.asm.mk).apply(null, arguments);
        }, nm = a._emscripten_bind_b2GearJointDef_b2GearJointDef_0 = function() {
            return (nm = a._emscripten_bind_b2GearJointDef_b2GearJointDef_0 = a.asm.nk).apply(null, arguments);
        }, om = a._emscripten_bind_b2GearJointDef_get_joint1_0 = function() {
            return (om = a._emscripten_bind_b2GearJointDef_get_joint1_0 = a.asm.ok).apply(null, arguments);
        }, pm = a._emscripten_bind_b2GearJointDef_set_joint1_1 = function() {
            return (pm = a._emscripten_bind_b2GearJointDef_set_joint1_1 = a.asm.pk).apply(null, arguments);
        }, qm = a._emscripten_bind_b2GearJointDef_get_joint2_0 = function() {
            return (qm = a._emscripten_bind_b2GearJointDef_get_joint2_0 = a.asm.qk).apply(null, arguments);
        }, rm = a._emscripten_bind_b2GearJointDef_set_joint2_1 = function() {
            return (rm = a._emscripten_bind_b2GearJointDef_set_joint2_1 = a.asm.rk).apply(null, arguments);
        }, sm = a._emscripten_bind_b2GearJointDef_get_ratio_0 = function() {
            return (sm = a._emscripten_bind_b2GearJointDef_get_ratio_0 = a.asm.sk).apply(null, arguments);
        }, tm = a._emscripten_bind_b2GearJointDef_set_ratio_1 = function() {
            return (tm = a._emscripten_bind_b2GearJointDef_set_ratio_1 = a.asm.tk).apply(null, arguments);
        }, um = a._emscripten_bind_b2GearJointDef_get_type_0 = function() {
            return (um = a._emscripten_bind_b2GearJointDef_get_type_0 = a.asm.uk).apply(null, arguments);
        }, wm = a._emscripten_bind_b2GearJointDef_set_type_1 = function() {
            return (wm = a._emscripten_bind_b2GearJointDef_set_type_1 = a.asm.vk).apply(null, arguments);
        }, xm = a._emscripten_bind_b2GearJointDef_get_userData_0 = function() {
            return (xm = a._emscripten_bind_b2GearJointDef_get_userData_0 = a.asm.wk).apply(null, arguments);
        }, ym = a._emscripten_bind_b2GearJointDef_set_userData_1 = function() {
            return (ym = a._emscripten_bind_b2GearJointDef_set_userData_1 = a.asm.xk).apply(null, arguments);
        }, zm = a._emscripten_bind_b2GearJointDef_get_bodyA_0 = function() {
            return (zm = a._emscripten_bind_b2GearJointDef_get_bodyA_0 = a.asm.yk).apply(null, arguments);
        }, Am = a._emscripten_bind_b2GearJointDef_set_bodyA_1 = function() {
            return (Am = a._emscripten_bind_b2GearJointDef_set_bodyA_1 = a.asm.zk).apply(null, arguments);
        }, Bm = a._emscripten_bind_b2GearJointDef_get_bodyB_0 = function() {
            return (Bm = a._emscripten_bind_b2GearJointDef_get_bodyB_0 = a.asm.Ak).apply(null, arguments);
        }, Cm = a._emscripten_bind_b2GearJointDef_set_bodyB_1 = function() {
            return (Cm = a._emscripten_bind_b2GearJointDef_set_bodyB_1 = a.asm.Bk).apply(null, arguments);
        }, Dm = a._emscripten_bind_b2GearJointDef_get_collideConnected_0 = function() {
            return (Dm = a._emscripten_bind_b2GearJointDef_get_collideConnected_0 = a.asm.Ck).apply(null, arguments);
        }, Em = a._emscripten_bind_b2GearJointDef_set_collideConnected_1 = function() {
            return (Em = a._emscripten_bind_b2GearJointDef_set_collideConnected_1 = a.asm.Dk).apply(null, arguments);
        }, Fm = a._emscripten_bind_b2GearJointDef___destroy___0 = function() {
            return (Fm = a._emscripten_bind_b2GearJointDef___destroy___0 = a.asm.Ek).apply(null, arguments);
        }, Gm = a._emscripten_bind_b2JointEdge_b2JointEdge_0 = function() {
            return (Gm = a._emscripten_bind_b2JointEdge_b2JointEdge_0 = a.asm.Fk).apply(null, arguments);
        }, Hm = a._emscripten_bind_b2JointEdge_get_other_0 = function() {
            return (Hm = a._emscripten_bind_b2JointEdge_get_other_0 = a.asm.Gk).apply(null, arguments);
        }, Im = a._emscripten_bind_b2JointEdge_set_other_1 = function() {
            return (Im = a._emscripten_bind_b2JointEdge_set_other_1 = a.asm.Hk).apply(null, arguments);
        }, Jm = a._emscripten_bind_b2JointEdge_get_joint_0 = function() {
            return (Jm = a._emscripten_bind_b2JointEdge_get_joint_0 = a.asm.Ik).apply(null, arguments);
        }, Km = a._emscripten_bind_b2JointEdge_set_joint_1 = function() {
            return (Km = a._emscripten_bind_b2JointEdge_set_joint_1 = a.asm.Jk).apply(null, arguments);
        }, Lm = a._emscripten_bind_b2JointEdge_get_prev_0 = function() {
            return (Lm = a._emscripten_bind_b2JointEdge_get_prev_0 = a.asm.Kk).apply(null, arguments);
        }, Mm = a._emscripten_bind_b2JointEdge_set_prev_1 = function() {
            return (Mm = a._emscripten_bind_b2JointEdge_set_prev_1 = a.asm.Lk).apply(null, arguments);
        }, Nm = a._emscripten_bind_b2JointEdge_get_next_0 = function() {
            return (Nm = a._emscripten_bind_b2JointEdge_get_next_0 = a.asm.Mk).apply(null, arguments);
        }, Om = a._emscripten_bind_b2JointEdge_set_next_1 = function() {
            return (Om = a._emscripten_bind_b2JointEdge_set_next_1 = a.asm.Nk).apply(null, arguments);
        }, Pm = a._emscripten_bind_b2JointEdge___destroy___0 = function() {
            return (Pm = a._emscripten_bind_b2JointEdge___destroy___0 = a.asm.Ok).apply(null, arguments);
        }, Qm = a._emscripten_bind_b2Manifold_b2Manifold_0 = function() {
            return (Qm = a._emscripten_bind_b2Manifold_b2Manifold_0 = a.asm.Pk).apply(null, arguments);
        }, Rm = a._emscripten_bind_b2Manifold_get_points_1 = function() {
            return (Rm = a._emscripten_bind_b2Manifold_get_points_1 = a.asm.Qk).apply(null, arguments);
        }, Sm = a._emscripten_bind_b2Manifold_set_points_2 = function() {
            return (Sm = a._emscripten_bind_b2Manifold_set_points_2 = a.asm.Rk).apply(null, arguments);
        }, Tm = a._emscripten_bind_b2Manifold_get_localNormal_0 = function() {
            return (Tm = a._emscripten_bind_b2Manifold_get_localNormal_0 = a.asm.Sk).apply(null, arguments);
        }, Um = a._emscripten_bind_b2Manifold_set_localNormal_1 = function() {
            return (Um = a._emscripten_bind_b2Manifold_set_localNormal_1 = a.asm.Tk).apply(null, arguments);
        }, Vm = a._emscripten_bind_b2Manifold_get_localPoint_0 = function() {
            return (Vm = a._emscripten_bind_b2Manifold_get_localPoint_0 = a.asm.Uk).apply(null, arguments);
        }, Wm = a._emscripten_bind_b2Manifold_set_localPoint_1 = function() {
            return (Wm = a._emscripten_bind_b2Manifold_set_localPoint_1 = a.asm.Vk).apply(null, arguments);
        }, Xm = a._emscripten_bind_b2Manifold_get_type_0 = function() {
            return (Xm = a._emscripten_bind_b2Manifold_get_type_0 = a.asm.Wk).apply(null, arguments);
        }, Ym = a._emscripten_bind_b2Manifold_set_type_1 = function() {
            return (Ym = a._emscripten_bind_b2Manifold_set_type_1 = a.asm.Xk).apply(null, arguments);
        }, Zm = a._emscripten_bind_b2Manifold_get_pointCount_0 = function() {
            return (Zm = a._emscripten_bind_b2Manifold_get_pointCount_0 = a.asm.Yk).apply(null, arguments);
        }, $m = a._emscripten_bind_b2Manifold_set_pointCount_1 = function() {
            return ($m = a._emscripten_bind_b2Manifold_set_pointCount_1 = a.asm.Zk).apply(null, arguments);
        }, an = a._emscripten_bind_b2Manifold___destroy___0 = function() {
            return (an = a._emscripten_bind_b2Manifold___destroy___0 = a.asm._k).apply(null, arguments);
        }, bn = a._emscripten_bind_b2WorldManifold_b2WorldManifold_0 = function() {
            return (bn = a._emscripten_bind_b2WorldManifold_b2WorldManifold_0 = a.asm.$k).apply(null, arguments);
        }, cn = a._emscripten_bind_b2WorldManifold_Initialize_5 = function() {
            return (cn = a._emscripten_bind_b2WorldManifold_Initialize_5 = a.asm.al).apply(null, arguments);
        }, dn = a._emscripten_bind_b2WorldManifold_get_normal_0 = function() {
            return (dn = a._emscripten_bind_b2WorldManifold_get_normal_0 = a.asm.bl).apply(null, arguments);
        }, en = a._emscripten_bind_b2WorldManifold_set_normal_1 = function() {
            return (en = a._emscripten_bind_b2WorldManifold_set_normal_1 = a.asm.cl).apply(null, arguments);
        }, fn = a._emscripten_bind_b2WorldManifold_get_points_1 = function() {
            return (fn = a._emscripten_bind_b2WorldManifold_get_points_1 = a.asm.dl).apply(null, arguments);
        }, gn = a._emscripten_bind_b2WorldManifold_set_points_2 = function() {
            return (gn = a._emscripten_bind_b2WorldManifold_set_points_2 = a.asm.el).apply(null, arguments);
        }, hn = a._emscripten_bind_b2WorldManifold_get_separations_1 = function() {
            return (hn = a._emscripten_bind_b2WorldManifold_get_separations_1 = a.asm.fl).apply(null, arguments);
        }, jn = a._emscripten_bind_b2WorldManifold_set_separations_2 = function() {
            return (jn = a._emscripten_bind_b2WorldManifold_set_separations_2 = a.asm.gl).apply(null, arguments);
        }, kn = a._emscripten_bind_b2WorldManifold___destroy___0 = function() {
            return (kn = a._emscripten_bind_b2WorldManifold___destroy___0 = a.asm.hl).apply(null, arguments);
        }, ln = a._emscripten_bind_b2ManifoldPoint_b2ManifoldPoint_0 = function() {
            return (ln = a._emscripten_bind_b2ManifoldPoint_b2ManifoldPoint_0 = a.asm.il).apply(null, arguments);
        }, mn = a._emscripten_bind_b2ManifoldPoint_get_localPoint_0 = function() {
            return (mn = a._emscripten_bind_b2ManifoldPoint_get_localPoint_0 = a.asm.jl).apply(null, arguments);
        }, nn = a._emscripten_bind_b2ManifoldPoint_set_localPoint_1 = function() {
            return (nn = a._emscripten_bind_b2ManifoldPoint_set_localPoint_1 = a.asm.kl).apply(null, arguments);
        }, on = a._emscripten_bind_b2ManifoldPoint_get_normalImpulse_0 = function() {
            return (on = a._emscripten_bind_b2ManifoldPoint_get_normalImpulse_0 = a.asm.ll).apply(null, arguments);
        }, pn = a._emscripten_bind_b2ManifoldPoint_set_normalImpulse_1 = function() {
            return (pn = a._emscripten_bind_b2ManifoldPoint_set_normalImpulse_1 = a.asm.ml).apply(null, arguments);
        }, qn = a._emscripten_bind_b2ManifoldPoint_get_tangentImpulse_0 = function() {
            return (qn = a._emscripten_bind_b2ManifoldPoint_get_tangentImpulse_0 = a.asm.nl).apply(null, arguments);
        }, rn = a._emscripten_bind_b2ManifoldPoint_set_tangentImpulse_1 = function() {
            return (rn = a._emscripten_bind_b2ManifoldPoint_set_tangentImpulse_1 = a.asm.ol).apply(null, arguments);
        }, sn = a._emscripten_bind_b2ManifoldPoint_get_id_0 = function() {
            return (sn = a._emscripten_bind_b2ManifoldPoint_get_id_0 = a.asm.pl).apply(null, arguments);
        }, tn = a._emscripten_bind_b2ManifoldPoint_set_id_1 = function() {
            return (tn = a._emscripten_bind_b2ManifoldPoint_set_id_1 = a.asm.ql).apply(null, arguments);
        }, un = a._emscripten_bind_b2ManifoldPoint___destroy___0 = function() {
            return (un = a._emscripten_bind_b2ManifoldPoint___destroy___0 = a.asm.rl).apply(null, arguments);
        }, vn = a._emscripten_bind_b2Mat22_b2Mat22_0 = function() {
            return (vn = a._emscripten_bind_b2Mat22_b2Mat22_0 = a.asm.sl).apply(null, arguments);
        }, wn = a._emscripten_bind_b2Mat22_b2Mat22_2 = function() {
            return (wn = a._emscripten_bind_b2Mat22_b2Mat22_2 = a.asm.tl).apply(null, arguments);
        }, xn = a._emscripten_bind_b2Mat22_b2Mat22_4 = function() {
            return (xn = a._emscripten_bind_b2Mat22_b2Mat22_4 = a.asm.ul).apply(null, arguments);
        }, yn = a._emscripten_bind_b2Mat22_Set_2 = function() {
            return (yn = a._emscripten_bind_b2Mat22_Set_2 = a.asm.vl).apply(null, arguments);
        }, zn = a._emscripten_bind_b2Mat22_SetIdentity_0 = function() {
            return (zn = a._emscripten_bind_b2Mat22_SetIdentity_0 = a.asm.wl).apply(null, arguments);
        }, An = a._emscripten_bind_b2Mat22_SetZero_0 = function() {
            return (An = a._emscripten_bind_b2Mat22_SetZero_0 = a.asm.xl).apply(null, arguments);
        }, Bn = a._emscripten_bind_b2Mat22_GetInverse_0 = function() {
            return (Bn = a._emscripten_bind_b2Mat22_GetInverse_0 = a.asm.yl).apply(null, arguments);
        }, Cn = a._emscripten_bind_b2Mat22_Solve_1 = function() {
            return (Cn = a._emscripten_bind_b2Mat22_Solve_1 = a.asm.zl).apply(null, arguments);
        }, Dn = a._emscripten_bind_b2Mat22_get_ex_0 = function() {
            return (Dn = a._emscripten_bind_b2Mat22_get_ex_0 = a.asm.Al).apply(null, arguments);
        }, En = a._emscripten_bind_b2Mat22_set_ex_1 = function() {
            return (En = a._emscripten_bind_b2Mat22_set_ex_1 = a.asm.Bl).apply(null, arguments);
        }, Fn = a._emscripten_bind_b2Mat22_get_ey_0 = function() {
            return (Fn = a._emscripten_bind_b2Mat22_get_ey_0 = a.asm.Cl).apply(null, arguments);
        }, Gn = a._emscripten_bind_b2Mat22_set_ey_1 = function() {
            return (Gn = a._emscripten_bind_b2Mat22_set_ey_1 = a.asm.Dl).apply(null, arguments);
        }, Hn = a._emscripten_bind_b2Mat22___destroy___0 = function() {
            return (Hn = a._emscripten_bind_b2Mat22___destroy___0 = a.asm.El).apply(null, arguments);
        }, In = a._emscripten_bind_b2Mat33_b2Mat33_0 = function() {
            return (In = a._emscripten_bind_b2Mat33_b2Mat33_0 = a.asm.Fl).apply(null, arguments);
        }, Jn = a._emscripten_bind_b2Mat33_b2Mat33_3 = function() {
            return (Jn = a._emscripten_bind_b2Mat33_b2Mat33_3 = a.asm.Gl).apply(null, arguments);
        }, Kn = a._emscripten_bind_b2Mat33_SetZero_0 = function() {
            return (Kn = a._emscripten_bind_b2Mat33_SetZero_0 = a.asm.Hl).apply(null, arguments);
        }, Ln = a._emscripten_bind_b2Mat33_Solve33_1 = function() {
            return (Ln = a._emscripten_bind_b2Mat33_Solve33_1 = a.asm.Il).apply(null, arguments);
        }, Mn = a._emscripten_bind_b2Mat33_Solve22_1 = function() {
            return (Mn = a._emscripten_bind_b2Mat33_Solve22_1 = a.asm.Jl).apply(null, arguments);
        }, Nn = a._emscripten_bind_b2Mat33_GetInverse22_1 = function() {
            return (Nn = a._emscripten_bind_b2Mat33_GetInverse22_1 = a.asm.Kl).apply(null, arguments);
        }, On = a._emscripten_bind_b2Mat33_GetSymInverse33_1 = function() {
            return (On = a._emscripten_bind_b2Mat33_GetSymInverse33_1 = a.asm.Ll).apply(null, arguments);
        }, Pn = a._emscripten_bind_b2Mat33_get_ex_0 = function() {
            return (Pn = a._emscripten_bind_b2Mat33_get_ex_0 = a.asm.Ml).apply(null, arguments);
        }, Qn = a._emscripten_bind_b2Mat33_set_ex_1 = function() {
            return (Qn = a._emscripten_bind_b2Mat33_set_ex_1 = a.asm.Nl).apply(null, arguments);
        }, Rn = a._emscripten_bind_b2Mat33_get_ey_0 = function() {
            return (Rn = a._emscripten_bind_b2Mat33_get_ey_0 = a.asm.Ol).apply(null, arguments);
        }, Sn = a._emscripten_bind_b2Mat33_set_ey_1 = function() {
            return (Sn = a._emscripten_bind_b2Mat33_set_ey_1 = a.asm.Pl).apply(null, arguments);
        }, Tn = a._emscripten_bind_b2Mat33_get_ez_0 = function() {
            return (Tn = a._emscripten_bind_b2Mat33_get_ez_0 = a.asm.Ql).apply(null, arguments);
        }, Un = a._emscripten_bind_b2Mat33_set_ez_1 = function() {
            return (Un = a._emscripten_bind_b2Mat33_set_ez_1 = a.asm.Rl).apply(null, arguments);
        }, Vn = a._emscripten_bind_b2Mat33___destroy___0 = function() {
            return (Vn = a._emscripten_bind_b2Mat33___destroy___0 = a.asm.Sl).apply(null, arguments);
        }, Wn = a._emscripten_bind_b2MouseJoint_SetTarget_1 = function() {
            return (Wn = a._emscripten_bind_b2MouseJoint_SetTarget_1 = a.asm.Tl).apply(null, arguments);
        }, Xn = a._emscripten_bind_b2MouseJoint_GetTarget_0 = function() {
            return (Xn = a._emscripten_bind_b2MouseJoint_GetTarget_0 = a.asm.Ul).apply(null, arguments);
        }, Yn = a._emscripten_bind_b2MouseJoint_SetMaxForce_1 = function() {
            return (Yn = a._emscripten_bind_b2MouseJoint_SetMaxForce_1 = a.asm.Vl).apply(null, arguments);
        }, Zn = a._emscripten_bind_b2MouseJoint_GetMaxForce_0 = function() {
            return (Zn = a._emscripten_bind_b2MouseJoint_GetMaxForce_0 = a.asm.Wl).apply(null, arguments);
        }, $n = a._emscripten_bind_b2MouseJoint_SetStiffness_1 = function() {
            return ($n = a._emscripten_bind_b2MouseJoint_SetStiffness_1 = a.asm.Xl).apply(null, arguments);
        }, ao = a._emscripten_bind_b2MouseJoint_GetStiffness_0 = function() {
            return (ao = a._emscripten_bind_b2MouseJoint_GetStiffness_0 = a.asm.Yl).apply(null, arguments);
        }, bo = a._emscripten_bind_b2MouseJoint_SetDamping_1 = function() {
            return (bo = a._emscripten_bind_b2MouseJoint_SetDamping_1 = a.asm.Zl).apply(null, arguments);
        }, co = a._emscripten_bind_b2MouseJoint_GetDamping_0 = function() {
            return (co = a._emscripten_bind_b2MouseJoint_GetDamping_0 = a.asm._l).apply(null, arguments);
        }, eo = a._emscripten_bind_b2MouseJoint_GetType_0 = function() {
            return (eo = a._emscripten_bind_b2MouseJoint_GetType_0 = a.asm.$l).apply(null, arguments);
        }, fo = a._emscripten_bind_b2MouseJoint_GetBodyA_0 = function() {
            return (fo = a._emscripten_bind_b2MouseJoint_GetBodyA_0 = a.asm.am).apply(null, arguments);
        }, go = a._emscripten_bind_b2MouseJoint_GetBodyB_0 = function() {
            return (go = a._emscripten_bind_b2MouseJoint_GetBodyB_0 = a.asm.bm).apply(null, arguments);
        }, ho = a._emscripten_bind_b2MouseJoint_GetAnchorA_0 = function() {
            return (ho = a._emscripten_bind_b2MouseJoint_GetAnchorA_0 = a.asm.cm).apply(null, arguments);
        }, io = a._emscripten_bind_b2MouseJoint_GetAnchorB_0 = function() {
            return (io = a._emscripten_bind_b2MouseJoint_GetAnchorB_0 = a.asm.dm).apply(null, arguments);
        }, jo = a._emscripten_bind_b2MouseJoint_GetReactionForce_1 = function() {
            return (jo = a._emscripten_bind_b2MouseJoint_GetReactionForce_1 = a.asm.em).apply(null, arguments);
        }, ko = a._emscripten_bind_b2MouseJoint_GetReactionTorque_1 = function() {
            return (ko = a._emscripten_bind_b2MouseJoint_GetReactionTorque_1 = a.asm.fm).apply(null, arguments);
        }, lo = a._emscripten_bind_b2MouseJoint_GetNext_0 = function() {
            return (lo = a._emscripten_bind_b2MouseJoint_GetNext_0 = a.asm.gm).apply(null, arguments);
        }, mo = a._emscripten_bind_b2MouseJoint_GetUserData_0 = function() {
            return (mo = a._emscripten_bind_b2MouseJoint_GetUserData_0 = a.asm.hm).apply(null, arguments);
        }, no = a._emscripten_bind_b2MouseJoint_GetCollideConnected_0 = function() {
            return (no = a._emscripten_bind_b2MouseJoint_GetCollideConnected_0 = a.asm.im).apply(null, arguments);
        }, oo = a._emscripten_bind_b2MouseJoint___destroy___0 = function() {
            return (oo = a._emscripten_bind_b2MouseJoint___destroy___0 = a.asm.jm).apply(null, arguments);
        }, po = a._emscripten_bind_b2MouseJointDef_b2MouseJointDef_0 = function() {
            return (po = a._emscripten_bind_b2MouseJointDef_b2MouseJointDef_0 = a.asm.km).apply(null, arguments);
        }, qo = a._emscripten_bind_b2MouseJointDef_get_target_0 = function() {
            return (qo = a._emscripten_bind_b2MouseJointDef_get_target_0 = a.asm.lm).apply(null, arguments);
        }, ro = a._emscripten_bind_b2MouseJointDef_set_target_1 = function() {
            return (ro = a._emscripten_bind_b2MouseJointDef_set_target_1 = a.asm.mm).apply(null, arguments);
        }, so = a._emscripten_bind_b2MouseJointDef_get_maxForce_0 = function() {
            return (so = a._emscripten_bind_b2MouseJointDef_get_maxForce_0 = a.asm.nm).apply(null, arguments);
        }, to = a._emscripten_bind_b2MouseJointDef_set_maxForce_1 = function() {
            return (to = a._emscripten_bind_b2MouseJointDef_set_maxForce_1 = a.asm.om).apply(null, arguments);
        }, uo = a._emscripten_bind_b2MouseJointDef_get_stiffness_0 = function() {
            return (uo = a._emscripten_bind_b2MouseJointDef_get_stiffness_0 = a.asm.pm).apply(null, arguments);
        }, vo = a._emscripten_bind_b2MouseJointDef_set_stiffness_1 = function() {
            return (vo = a._emscripten_bind_b2MouseJointDef_set_stiffness_1 = a.asm.qm).apply(null, arguments);
        }, wo = a._emscripten_bind_b2MouseJointDef_get_damping_0 = function() {
            return (wo = a._emscripten_bind_b2MouseJointDef_get_damping_0 = a.asm.rm).apply(null, arguments);
        }, xo = a._emscripten_bind_b2MouseJointDef_set_damping_1 = function() {
            return (xo = a._emscripten_bind_b2MouseJointDef_set_damping_1 = a.asm.sm).apply(null, arguments);
        }, yo = a._emscripten_bind_b2MouseJointDef_get_type_0 = function() {
            return (yo = a._emscripten_bind_b2MouseJointDef_get_type_0 = a.asm.tm).apply(null, arguments);
        }, zo = a._emscripten_bind_b2MouseJointDef_set_type_1 = function() {
            return (zo = a._emscripten_bind_b2MouseJointDef_set_type_1 = a.asm.um).apply(null, arguments);
        }, Ao = a._emscripten_bind_b2MouseJointDef_get_userData_0 = function() {
            return (Ao = a._emscripten_bind_b2MouseJointDef_get_userData_0 = a.asm.vm).apply(null, arguments);
        }, Bo = a._emscripten_bind_b2MouseJointDef_set_userData_1 = function() {
            return (Bo = a._emscripten_bind_b2MouseJointDef_set_userData_1 = a.asm.wm).apply(null, arguments);
        }, Co = a._emscripten_bind_b2MouseJointDef_get_bodyA_0 = function() {
            return (Co = a._emscripten_bind_b2MouseJointDef_get_bodyA_0 = a.asm.xm).apply(null, arguments);
        }, Do = a._emscripten_bind_b2MouseJointDef_set_bodyA_1 = function() {
            return (Do = a._emscripten_bind_b2MouseJointDef_set_bodyA_1 = a.asm.ym).apply(null, arguments);
        }, Eo = a._emscripten_bind_b2MouseJointDef_get_bodyB_0 = function() {
            return (Eo = a._emscripten_bind_b2MouseJointDef_get_bodyB_0 = a.asm.zm).apply(null, arguments);
        }, Fo = a._emscripten_bind_b2MouseJointDef_set_bodyB_1 = function() {
            return (Fo = a._emscripten_bind_b2MouseJointDef_set_bodyB_1 = a.asm.Am).apply(null, arguments);
        }, Go = a._emscripten_bind_b2MouseJointDef_get_collideConnected_0 = function() {
            return (Go = a._emscripten_bind_b2MouseJointDef_get_collideConnected_0 = a.asm.Bm).apply(null, arguments);
        }, Ho = a._emscripten_bind_b2MouseJointDef_set_collideConnected_1 = function() {
            return (Ho = a._emscripten_bind_b2MouseJointDef_set_collideConnected_1 = a.asm.Cm).apply(null, arguments);
        }, Io = a._emscripten_bind_b2MouseJointDef___destroy___0 = function() {
            return (Io = a._emscripten_bind_b2MouseJointDef___destroy___0 = a.asm.Dm).apply(null, arguments);
        }, Jo = a._emscripten_bind_b2PolygonShape_b2PolygonShape_0 = function() {
            return (Jo = a._emscripten_bind_b2PolygonShape_b2PolygonShape_0 = a.asm.Em).apply(null, arguments);
        }, Ko = a._emscripten_bind_b2PolygonShape_Set_2 = function() {
            return (Ko = a._emscripten_bind_b2PolygonShape_Set_2 = a.asm.Fm).apply(null, arguments);
        }, Lo = a._emscripten_bind_b2PolygonShape_SetAsBox_2 = function() {
            return (Lo = a._emscripten_bind_b2PolygonShape_SetAsBox_2 = a.asm.Gm).apply(null, arguments);
        }, Mo = a._emscripten_bind_b2PolygonShape_SetAsBox_4 = function() {
            return (Mo = a._emscripten_bind_b2PolygonShape_SetAsBox_4 = a.asm.Hm).apply(null, arguments);
        }, No = a._emscripten_bind_b2PolygonShape_GetType_0 = function() {
            return (No = a._emscripten_bind_b2PolygonShape_GetType_0 = a.asm.Im).apply(null, arguments);
        }, Oo = a._emscripten_bind_b2PolygonShape_GetChildCount_0 = function() {
            return (Oo = a._emscripten_bind_b2PolygonShape_GetChildCount_0 = a.asm.Jm).apply(null, arguments);
        }, Po = a._emscripten_bind_b2PolygonShape_TestPoint_2 = function() {
            return (Po = a._emscripten_bind_b2PolygonShape_TestPoint_2 = a.asm.Km).apply(null, arguments);
        }, Qo = a._emscripten_bind_b2PolygonShape_RayCast_4 = function() {
            return (Qo = a._emscripten_bind_b2PolygonShape_RayCast_4 = a.asm.Lm).apply(null, arguments);
        }, Ro = a._emscripten_bind_b2PolygonShape_ComputeAABB_3 = function() {
            return (Ro = a._emscripten_bind_b2PolygonShape_ComputeAABB_3 = a.asm.Mm).apply(null, arguments);
        }, So = a._emscripten_bind_b2PolygonShape_ComputeMass_2 = function() {
            return (So = a._emscripten_bind_b2PolygonShape_ComputeMass_2 = a.asm.Nm).apply(null, arguments);
        }, To = a._emscripten_bind_b2PolygonShape_get_m_centroid_0 = function() {
            return (To = a._emscripten_bind_b2PolygonShape_get_m_centroid_0 = a.asm.Om).apply(null, arguments);
        }, Uo = a._emscripten_bind_b2PolygonShape_set_m_centroid_1 = function() {
            return (Uo = a._emscripten_bind_b2PolygonShape_set_m_centroid_1 = a.asm.Pm).apply(null, arguments);
        }, Vo = a._emscripten_bind_b2PolygonShape_get_m_vertices_1 = function() {
            return (Vo = a._emscripten_bind_b2PolygonShape_get_m_vertices_1 = a.asm.Qm).apply(null, arguments);
        }, Wo = a._emscripten_bind_b2PolygonShape_set_m_vertices_2 = function() {
            return (Wo = a._emscripten_bind_b2PolygonShape_set_m_vertices_2 = a.asm.Rm).apply(null, arguments);
        }, Xo = a._emscripten_bind_b2PolygonShape_get_m_normals_1 = function() {
            return (Xo = a._emscripten_bind_b2PolygonShape_get_m_normals_1 = a.asm.Sm).apply(null, arguments);
        }, Yo = a._emscripten_bind_b2PolygonShape_set_m_normals_2 = function() {
            return (Yo = a._emscripten_bind_b2PolygonShape_set_m_normals_2 = a.asm.Tm).apply(null, arguments);
        }, Zo = a._emscripten_bind_b2PolygonShape_get_m_count_0 = function() {
            return (Zo = a._emscripten_bind_b2PolygonShape_get_m_count_0 = a.asm.Um).apply(null, arguments);
        }, $o = a._emscripten_bind_b2PolygonShape_set_m_count_1 = function() {
            return ($o = a._emscripten_bind_b2PolygonShape_set_m_count_1 = a.asm.Vm).apply(null, arguments);
        }, ap = a._emscripten_bind_b2PolygonShape_get_m_type_0 = function() {
            return (ap = a._emscripten_bind_b2PolygonShape_get_m_type_0 = a.asm.Wm).apply(null, arguments);
        }, bp = a._emscripten_bind_b2PolygonShape_set_m_type_1 = function() {
            return (bp = a._emscripten_bind_b2PolygonShape_set_m_type_1 = a.asm.Xm).apply(null, arguments);
        }, cp = a._emscripten_bind_b2PolygonShape_get_m_radius_0 = function() {
            return (cp = a._emscripten_bind_b2PolygonShape_get_m_radius_0 = a.asm.Ym).apply(null, arguments);
        }, dp = a._emscripten_bind_b2PolygonShape_set_m_radius_1 = function() {
            return (dp = a._emscripten_bind_b2PolygonShape_set_m_radius_1 = a.asm.Zm).apply(null, arguments);
        }, ep = a._emscripten_bind_b2PolygonShape___destroy___0 = function() {
            return (ep = a._emscripten_bind_b2PolygonShape___destroy___0 = a.asm._m).apply(null, arguments);
        }, fp = a._emscripten_bind_b2PrismaticJoint_GetLocalAnchorA_0 = function() {
            return (fp = a._emscripten_bind_b2PrismaticJoint_GetLocalAnchorA_0 = a.asm.$m).apply(null, arguments);
        }, gp = a._emscripten_bind_b2PrismaticJoint_GetLocalAnchorB_0 = function() {
            return (gp = a._emscripten_bind_b2PrismaticJoint_GetLocalAnchorB_0 = a.asm.an).apply(null, arguments);
        }, hp = a._emscripten_bind_b2PrismaticJoint_GetLocalAxisA_0 = function() {
            return (hp = a._emscripten_bind_b2PrismaticJoint_GetLocalAxisA_0 = a.asm.bn).apply(null, arguments);
        }, ip = a._emscripten_bind_b2PrismaticJoint_GetReferenceAngle_0 = function() {
            return (ip = a._emscripten_bind_b2PrismaticJoint_GetReferenceAngle_0 = a.asm.cn).apply(null, arguments);
        }, jp = a._emscripten_bind_b2PrismaticJoint_GetJointTranslation_0 = function() {
            return (jp = a._emscripten_bind_b2PrismaticJoint_GetJointTranslation_0 = a.asm.dn).apply(null, arguments);
        }, kp = a._emscripten_bind_b2PrismaticJoint_GetJointSpeed_0 = function() {
            return (kp = a._emscripten_bind_b2PrismaticJoint_GetJointSpeed_0 = a.asm.en).apply(null, arguments);
        }, lp = a._emscripten_bind_b2PrismaticJoint_IsLimitEnabled_0 = function() {
            return (lp = a._emscripten_bind_b2PrismaticJoint_IsLimitEnabled_0 = a.asm.fn).apply(null, arguments);
        }, mp = a._emscripten_bind_b2PrismaticJoint_EnableLimit_1 = function() {
            return (mp = a._emscripten_bind_b2PrismaticJoint_EnableLimit_1 = a.asm.gn).apply(null, arguments);
        }, np = a._emscripten_bind_b2PrismaticJoint_GetLowerLimit_0 = function() {
            return (np = a._emscripten_bind_b2PrismaticJoint_GetLowerLimit_0 = a.asm.hn).apply(null, arguments);
        }, op = a._emscripten_bind_b2PrismaticJoint_GetUpperLimit_0 = function() {
            return (op = a._emscripten_bind_b2PrismaticJoint_GetUpperLimit_0 = a.asm.jn).apply(null, arguments);
        }, pp = a._emscripten_bind_b2PrismaticJoint_SetLimits_2 = function() {
            return (pp = a._emscripten_bind_b2PrismaticJoint_SetLimits_2 = a.asm.kn).apply(null, arguments);
        }, qp = a._emscripten_bind_b2PrismaticJoint_IsMotorEnabled_0 = function() {
            return (qp = a._emscripten_bind_b2PrismaticJoint_IsMotorEnabled_0 = a.asm.ln).apply(null, arguments);
        }, rp = a._emscripten_bind_b2PrismaticJoint_EnableMotor_1 = function() {
            return (rp = a._emscripten_bind_b2PrismaticJoint_EnableMotor_1 = a.asm.mn).apply(null, arguments);
        }, sp = a._emscripten_bind_b2PrismaticJoint_SetMotorSpeed_1 = function() {
            return (sp = a._emscripten_bind_b2PrismaticJoint_SetMotorSpeed_1 = a.asm.nn).apply(null, arguments);
        }, tp = a._emscripten_bind_b2PrismaticJoint_GetMotorSpeed_0 = function() {
            return (tp = a._emscripten_bind_b2PrismaticJoint_GetMotorSpeed_0 = a.asm.on).apply(null, arguments);
        }, up = a._emscripten_bind_b2PrismaticJoint_SetMaxMotorForce_1 = function() {
            return (up = a._emscripten_bind_b2PrismaticJoint_SetMaxMotorForce_1 = a.asm.pn).apply(null, arguments);
        }, vp = a._emscripten_bind_b2PrismaticJoint_GetMaxMotorForce_0 = function() {
            return (vp = a._emscripten_bind_b2PrismaticJoint_GetMaxMotorForce_0 = a.asm.qn).apply(null, arguments);
        }, wp = a._emscripten_bind_b2PrismaticJoint_GetMotorForce_1 = function() {
            return (wp = a._emscripten_bind_b2PrismaticJoint_GetMotorForce_1 = a.asm.rn).apply(null, arguments);
        }, xp = a._emscripten_bind_b2PrismaticJoint_GetType_0 = function() {
            return (xp = a._emscripten_bind_b2PrismaticJoint_GetType_0 = a.asm.sn).apply(null, arguments);
        }, yp = a._emscripten_bind_b2PrismaticJoint_GetBodyA_0 = function() {
            return (yp = a._emscripten_bind_b2PrismaticJoint_GetBodyA_0 = a.asm.tn).apply(null, arguments);
        }, zp = a._emscripten_bind_b2PrismaticJoint_GetBodyB_0 = function() {
            return (zp = a._emscripten_bind_b2PrismaticJoint_GetBodyB_0 = a.asm.un).apply(null, arguments);
        }, Ap = a._emscripten_bind_b2PrismaticJoint_GetAnchorA_0 = function() {
            return (Ap = a._emscripten_bind_b2PrismaticJoint_GetAnchorA_0 = a.asm.vn).apply(null, arguments);
        }, Bp = a._emscripten_bind_b2PrismaticJoint_GetAnchorB_0 = function() {
            return (Bp = a._emscripten_bind_b2PrismaticJoint_GetAnchorB_0 = a.asm.wn).apply(null, arguments);
        }, Cp = a._emscripten_bind_b2PrismaticJoint_GetReactionForce_1 = function() {
            return (Cp = a._emscripten_bind_b2PrismaticJoint_GetReactionForce_1 = a.asm.xn).apply(null, arguments);
        }, Dp = a._emscripten_bind_b2PrismaticJoint_GetReactionTorque_1 = function() {
            return (Dp = a._emscripten_bind_b2PrismaticJoint_GetReactionTorque_1 = a.asm.yn).apply(null, arguments);
        }, Ep = a._emscripten_bind_b2PrismaticJoint_GetNext_0 = function() {
            return (Ep = a._emscripten_bind_b2PrismaticJoint_GetNext_0 = a.asm.zn).apply(null, arguments);
        }, Fp = a._emscripten_bind_b2PrismaticJoint_GetUserData_0 = function() {
            return (Fp = a._emscripten_bind_b2PrismaticJoint_GetUserData_0 = a.asm.An).apply(null, arguments);
        }, Gp = a._emscripten_bind_b2PrismaticJoint_GetCollideConnected_0 = function() {
            return (Gp = a._emscripten_bind_b2PrismaticJoint_GetCollideConnected_0 = a.asm.Bn).apply(null, arguments);
        }, Hp = a._emscripten_bind_b2PrismaticJoint___destroy___0 = function() {
            return (Hp = a._emscripten_bind_b2PrismaticJoint___destroy___0 = a.asm.Cn).apply(null, arguments);
        }, Ip = a._emscripten_bind_b2PrismaticJointDef_b2PrismaticJointDef_0 = function() {
            return (Ip = a._emscripten_bind_b2PrismaticJointDef_b2PrismaticJointDef_0 = a.asm.Dn).apply(null, arguments);
        }, Jp = a._emscripten_bind_b2PrismaticJointDef_Initialize_4 = function() {
            return (Jp = a._emscripten_bind_b2PrismaticJointDef_Initialize_4 = a.asm.En).apply(null, arguments);
        }, Kp = a._emscripten_bind_b2PrismaticJointDef_get_localAnchorA_0 = function() {
            return (Kp = a._emscripten_bind_b2PrismaticJointDef_get_localAnchorA_0 = a.asm.Fn).apply(null, arguments);
        }, Lp = a._emscripten_bind_b2PrismaticJointDef_set_localAnchorA_1 = function() {
            return (Lp = a._emscripten_bind_b2PrismaticJointDef_set_localAnchorA_1 = a.asm.Gn).apply(null, arguments);
        }, Mp = a._emscripten_bind_b2PrismaticJointDef_get_localAnchorB_0 = function() {
            return (Mp = a._emscripten_bind_b2PrismaticJointDef_get_localAnchorB_0 = a.asm.Hn).apply(null, arguments);
        }, Np = a._emscripten_bind_b2PrismaticJointDef_set_localAnchorB_1 = function() {
            return (Np = a._emscripten_bind_b2PrismaticJointDef_set_localAnchorB_1 = a.asm.In).apply(null, arguments);
        }, Op = a._emscripten_bind_b2PrismaticJointDef_get_localAxisA_0 = function() {
            return (Op = a._emscripten_bind_b2PrismaticJointDef_get_localAxisA_0 = a.asm.Jn).apply(null, arguments);
        }, Pp = a._emscripten_bind_b2PrismaticJointDef_set_localAxisA_1 = function() {
            return (Pp = a._emscripten_bind_b2PrismaticJointDef_set_localAxisA_1 = a.asm.Kn).apply(null, arguments);
        }, Qp = a._emscripten_bind_b2PrismaticJointDef_get_referenceAngle_0 = function() {
            return (Qp = a._emscripten_bind_b2PrismaticJointDef_get_referenceAngle_0 = a.asm.Ln).apply(null, arguments);
        }, Rp = a._emscripten_bind_b2PrismaticJointDef_set_referenceAngle_1 = function() {
            return (Rp = a._emscripten_bind_b2PrismaticJointDef_set_referenceAngle_1 = a.asm.Mn).apply(null, arguments);
        }, Sp = a._emscripten_bind_b2PrismaticJointDef_get_enableLimit_0 = function() {
            return (Sp = a._emscripten_bind_b2PrismaticJointDef_get_enableLimit_0 = a.asm.Nn).apply(null, arguments);
        }, Tp = a._emscripten_bind_b2PrismaticJointDef_set_enableLimit_1 = function() {
            return (Tp = a._emscripten_bind_b2PrismaticJointDef_set_enableLimit_1 = a.asm.On).apply(null, arguments);
        }, Up = a._emscripten_bind_b2PrismaticJointDef_get_lowerTranslation_0 = function() {
            return (Up = a._emscripten_bind_b2PrismaticJointDef_get_lowerTranslation_0 = a.asm.Pn).apply(null, arguments);
        }, Vp = a._emscripten_bind_b2PrismaticJointDef_set_lowerTranslation_1 = function() {
            return (Vp = a._emscripten_bind_b2PrismaticJointDef_set_lowerTranslation_1 = a.asm.Qn).apply(null, arguments);
        }, Wp = a._emscripten_bind_b2PrismaticJointDef_get_upperTranslation_0 = function() {
            return (Wp = a._emscripten_bind_b2PrismaticJointDef_get_upperTranslation_0 = a.asm.Rn).apply(null, arguments);
        }, Xp = a._emscripten_bind_b2PrismaticJointDef_set_upperTranslation_1 = function() {
            return (Xp = a._emscripten_bind_b2PrismaticJointDef_set_upperTranslation_1 = a.asm.Sn).apply(null, arguments);
        }, Yp = a._emscripten_bind_b2PrismaticJointDef_get_enableMotor_0 = function() {
            return (Yp = a._emscripten_bind_b2PrismaticJointDef_get_enableMotor_0 = a.asm.Tn).apply(null, arguments);
        }, Zp = a._emscripten_bind_b2PrismaticJointDef_set_enableMotor_1 = function() {
            return (Zp = a._emscripten_bind_b2PrismaticJointDef_set_enableMotor_1 = a.asm.Un).apply(null, arguments);
        }, $p = a._emscripten_bind_b2PrismaticJointDef_get_maxMotorForce_0 = function() {
            return ($p = a._emscripten_bind_b2PrismaticJointDef_get_maxMotorForce_0 = a.asm.Vn).apply(null, arguments);
        }, aq = a._emscripten_bind_b2PrismaticJointDef_set_maxMotorForce_1 = function() {
            return (aq = a._emscripten_bind_b2PrismaticJointDef_set_maxMotorForce_1 = a.asm.Wn).apply(null, arguments);
        }, bq = a._emscripten_bind_b2PrismaticJointDef_get_motorSpeed_0 = function() {
            return (bq = a._emscripten_bind_b2PrismaticJointDef_get_motorSpeed_0 = a.asm.Xn).apply(null, arguments);
        }, cq = a._emscripten_bind_b2PrismaticJointDef_set_motorSpeed_1 = function() {
            return (cq = a._emscripten_bind_b2PrismaticJointDef_set_motorSpeed_1 = a.asm.Yn).apply(null, arguments);
        }, dq = a._emscripten_bind_b2PrismaticJointDef_get_type_0 = function() {
            return (dq = a._emscripten_bind_b2PrismaticJointDef_get_type_0 = a.asm.Zn).apply(null, arguments);
        }, eq = a._emscripten_bind_b2PrismaticJointDef_set_type_1 = function() {
            return (eq = a._emscripten_bind_b2PrismaticJointDef_set_type_1 = a.asm._n).apply(null, arguments);
        }, fq = a._emscripten_bind_b2PrismaticJointDef_get_userData_0 = function() {
            return (fq = a._emscripten_bind_b2PrismaticJointDef_get_userData_0 = a.asm.$n).apply(null, arguments);
        }, gq = a._emscripten_bind_b2PrismaticJointDef_set_userData_1 = function() {
            return (gq = a._emscripten_bind_b2PrismaticJointDef_set_userData_1 = a.asm.ao).apply(null, arguments);
        }, hq = a._emscripten_bind_b2PrismaticJointDef_get_bodyA_0 = function() {
            return (hq = a._emscripten_bind_b2PrismaticJointDef_get_bodyA_0 = a.asm.bo).apply(null, arguments);
        }, iq = a._emscripten_bind_b2PrismaticJointDef_set_bodyA_1 = function() {
            return (iq = a._emscripten_bind_b2PrismaticJointDef_set_bodyA_1 = a.asm.co).apply(null, arguments);
        }, jq = a._emscripten_bind_b2PrismaticJointDef_get_bodyB_0 = function() {
            return (jq = a._emscripten_bind_b2PrismaticJointDef_get_bodyB_0 = a.asm.eo).apply(null, arguments);
        }, kq = a._emscripten_bind_b2PrismaticJointDef_set_bodyB_1 = function() {
            return (kq = a._emscripten_bind_b2PrismaticJointDef_set_bodyB_1 = a.asm.fo).apply(null, arguments);
        }, lq = a._emscripten_bind_b2PrismaticJointDef_get_collideConnected_0 = function() {
            return (lq = a._emscripten_bind_b2PrismaticJointDef_get_collideConnected_0 = a.asm.go).apply(null, arguments);
        }, mq = a._emscripten_bind_b2PrismaticJointDef_set_collideConnected_1 = function() {
            return (mq = a._emscripten_bind_b2PrismaticJointDef_set_collideConnected_1 = a.asm.ho).apply(null, arguments);
        }, nq = a._emscripten_bind_b2PrismaticJointDef___destroy___0 = function() {
            return (nq = a._emscripten_bind_b2PrismaticJointDef___destroy___0 = a.asm.io).apply(null, arguments);
        }, oq = a._emscripten_bind_b2Profile_get_step_0 = function() {
            return (oq = a._emscripten_bind_b2Profile_get_step_0 = a.asm.jo).apply(null, arguments);
        }, pq = a._emscripten_bind_b2Profile_set_step_1 = function() {
            return (pq = a._emscripten_bind_b2Profile_set_step_1 = a.asm.ko).apply(null, arguments);
        }, qq = a._emscripten_bind_b2Profile_get_collide_0 = function() {
            return (qq = a._emscripten_bind_b2Profile_get_collide_0 = a.asm.lo).apply(null, arguments);
        }, rq = a._emscripten_bind_b2Profile_set_collide_1 = function() {
            return (rq = a._emscripten_bind_b2Profile_set_collide_1 = a.asm.mo).apply(null, arguments);
        }, sq = a._emscripten_bind_b2Profile_get_solve_0 = function() {
            return (sq = a._emscripten_bind_b2Profile_get_solve_0 = a.asm.no).apply(null, arguments);
        }, tq = a._emscripten_bind_b2Profile_set_solve_1 = function() {
            return (tq = a._emscripten_bind_b2Profile_set_solve_1 = a.asm.oo).apply(null, arguments);
        }, uq = a._emscripten_bind_b2Profile_get_solveInit_0 = function() {
            return (uq = a._emscripten_bind_b2Profile_get_solveInit_0 = a.asm.po).apply(null, arguments);
        }, vq = a._emscripten_bind_b2Profile_set_solveInit_1 = function() {
            return (vq = a._emscripten_bind_b2Profile_set_solveInit_1 = a.asm.qo).apply(null, arguments);
        }, wq = a._emscripten_bind_b2Profile_get_solveVelocity_0 = function() {
            return (wq = a._emscripten_bind_b2Profile_get_solveVelocity_0 = a.asm.ro).apply(null, arguments);
        }, xq = a._emscripten_bind_b2Profile_set_solveVelocity_1 = function() {
            return (xq = a._emscripten_bind_b2Profile_set_solveVelocity_1 = a.asm.so).apply(null, arguments);
        }, yq = a._emscripten_bind_b2Profile_get_solvePosition_0 = function() {
            return (yq = a._emscripten_bind_b2Profile_get_solvePosition_0 = a.asm.to).apply(null, arguments);
        }, zq = a._emscripten_bind_b2Profile_set_solvePosition_1 = function() {
            return (zq = a._emscripten_bind_b2Profile_set_solvePosition_1 = a.asm.uo).apply(null, arguments);
        }, Aq = a._emscripten_bind_b2Profile_get_broadphase_0 = function() {
            return (Aq = a._emscripten_bind_b2Profile_get_broadphase_0 = a.asm.vo).apply(null, arguments);
        }, Bq = a._emscripten_bind_b2Profile_set_broadphase_1 = function() {
            return (Bq = a._emscripten_bind_b2Profile_set_broadphase_1 = a.asm.wo).apply(null, arguments);
        }, Cq = a._emscripten_bind_b2Profile_get_solveTOI_0 = function() {
            return (Cq = a._emscripten_bind_b2Profile_get_solveTOI_0 = a.asm.xo).apply(null, arguments);
        }, Dq = a._emscripten_bind_b2Profile_set_solveTOI_1 = function() {
            return (Dq = a._emscripten_bind_b2Profile_set_solveTOI_1 = a.asm.yo).apply(null, arguments);
        }, Eq = a._emscripten_bind_b2Profile___destroy___0 = function() {
            return (Eq = a._emscripten_bind_b2Profile___destroy___0 = a.asm.zo).apply(null, arguments);
        }, Fq = a._emscripten_bind_b2PulleyJoint_GetGroundAnchorA_0 = function() {
            return (Fq = a._emscripten_bind_b2PulleyJoint_GetGroundAnchorA_0 = a.asm.Ao).apply(null, arguments);
        }, Gq = a._emscripten_bind_b2PulleyJoint_GetGroundAnchorB_0 = function() {
            return (Gq = a._emscripten_bind_b2PulleyJoint_GetGroundAnchorB_0 = a.asm.Bo).apply(null, arguments);
        }, Hq = a._emscripten_bind_b2PulleyJoint_GetLengthA_0 = function() {
            return (Hq = a._emscripten_bind_b2PulleyJoint_GetLengthA_0 = a.asm.Co).apply(null, arguments);
        }, Iq = a._emscripten_bind_b2PulleyJoint_GetLengthB_0 = function() {
            return (Iq = a._emscripten_bind_b2PulleyJoint_GetLengthB_0 = a.asm.Do).apply(null, arguments);
        }, Jq = a._emscripten_bind_b2PulleyJoint_GetRatio_0 = function() {
            return (Jq = a._emscripten_bind_b2PulleyJoint_GetRatio_0 = a.asm.Eo).apply(null, arguments);
        }, Kq = a._emscripten_bind_b2PulleyJoint_GetCurrentLengthA_0 = function() {
            return (Kq = a._emscripten_bind_b2PulleyJoint_GetCurrentLengthA_0 = a.asm.Fo).apply(null, arguments);
        }, Lq = a._emscripten_bind_b2PulleyJoint_GetCurrentLengthB_0 = function() {
            return (Lq = a._emscripten_bind_b2PulleyJoint_GetCurrentLengthB_0 = a.asm.Go).apply(null, arguments);
        }, Mq = a._emscripten_bind_b2PulleyJoint_GetType_0 = function() {
            return (Mq = a._emscripten_bind_b2PulleyJoint_GetType_0 = a.asm.Ho).apply(null, arguments);
        }, Nq = a._emscripten_bind_b2PulleyJoint_GetBodyA_0 = function() {
            return (Nq = a._emscripten_bind_b2PulleyJoint_GetBodyA_0 = a.asm.Io).apply(null, arguments);
        }, Oq = a._emscripten_bind_b2PulleyJoint_GetBodyB_0 = function() {
            return (Oq = a._emscripten_bind_b2PulleyJoint_GetBodyB_0 = a.asm.Jo).apply(null, arguments);
        }, Pq = a._emscripten_bind_b2PulleyJoint_GetAnchorA_0 = function() {
            return (Pq = a._emscripten_bind_b2PulleyJoint_GetAnchorA_0 = a.asm.Ko).apply(null, arguments);
        }, Qq = a._emscripten_bind_b2PulleyJoint_GetAnchorB_0 = function() {
            return (Qq = a._emscripten_bind_b2PulleyJoint_GetAnchorB_0 = a.asm.Lo).apply(null, arguments);
        }, Rq = a._emscripten_bind_b2PulleyJoint_GetReactionForce_1 = function() {
            return (Rq = a._emscripten_bind_b2PulleyJoint_GetReactionForce_1 = a.asm.Mo).apply(null, arguments);
        }, Sq = a._emscripten_bind_b2PulleyJoint_GetReactionTorque_1 = function() {
            return (Sq = a._emscripten_bind_b2PulleyJoint_GetReactionTorque_1 = a.asm.No).apply(null, arguments);
        }, Tq = a._emscripten_bind_b2PulleyJoint_GetNext_0 = function() {
            return (Tq = a._emscripten_bind_b2PulleyJoint_GetNext_0 = a.asm.Oo).apply(null, arguments);
        }, Uq = a._emscripten_bind_b2PulleyJoint_GetUserData_0 = function() {
            return (Uq = a._emscripten_bind_b2PulleyJoint_GetUserData_0 = a.asm.Po).apply(null, arguments);
        }, Vq = a._emscripten_bind_b2PulleyJoint_GetCollideConnected_0 = function() {
            return (Vq = a._emscripten_bind_b2PulleyJoint_GetCollideConnected_0 = a.asm.Qo).apply(null, arguments);
        }, Wq = a._emscripten_bind_b2PulleyJoint___destroy___0 = function() {
            return (Wq = a._emscripten_bind_b2PulleyJoint___destroy___0 = a.asm.Ro).apply(null, arguments);
        }, Xq = a._emscripten_bind_b2PulleyJointDef_b2PulleyJointDef_0 = function() {
            return (Xq = a._emscripten_bind_b2PulleyJointDef_b2PulleyJointDef_0 = a.asm.So).apply(null, arguments);
        }, Yq = a._emscripten_bind_b2PulleyJointDef_Initialize_7 = function() {
            return (Yq = a._emscripten_bind_b2PulleyJointDef_Initialize_7 = a.asm.To).apply(null, arguments);
        }, Zq = a._emscripten_bind_b2PulleyJointDef_get_groundAnchorA_0 = function() {
            return (Zq = a._emscripten_bind_b2PulleyJointDef_get_groundAnchorA_0 = a.asm.Uo).apply(null, arguments);
        }, $q = a._emscripten_bind_b2PulleyJointDef_set_groundAnchorA_1 = function() {
            return ($q = a._emscripten_bind_b2PulleyJointDef_set_groundAnchorA_1 = a.asm.Vo).apply(null, arguments);
        }, ar = a._emscripten_bind_b2PulleyJointDef_get_groundAnchorB_0 = function() {
            return (ar = a._emscripten_bind_b2PulleyJointDef_get_groundAnchorB_0 = a.asm.Wo).apply(null, arguments);
        }, br = a._emscripten_bind_b2PulleyJointDef_set_groundAnchorB_1 = function() {
            return (br = a._emscripten_bind_b2PulleyJointDef_set_groundAnchorB_1 = a.asm.Xo).apply(null, arguments);
        }, cr = a._emscripten_bind_b2PulleyJointDef_get_localAnchorA_0 = function() {
            return (cr = a._emscripten_bind_b2PulleyJointDef_get_localAnchorA_0 = a.asm.Yo).apply(null, arguments);
        }, dr = a._emscripten_bind_b2PulleyJointDef_set_localAnchorA_1 = function() {
            return (dr = a._emscripten_bind_b2PulleyJointDef_set_localAnchorA_1 = a.asm.Zo).apply(null, arguments);
        }, er = a._emscripten_bind_b2PulleyJointDef_get_localAnchorB_0 = function() {
            return (er = a._emscripten_bind_b2PulleyJointDef_get_localAnchorB_0 = a.asm._o).apply(null, arguments);
        }, fr = a._emscripten_bind_b2PulleyJointDef_set_localAnchorB_1 = function() {
            return (fr = a._emscripten_bind_b2PulleyJointDef_set_localAnchorB_1 = a.asm.$o).apply(null, arguments);
        }, gr = a._emscripten_bind_b2PulleyJointDef_get_lengthA_0 = function() {
            return (gr = a._emscripten_bind_b2PulleyJointDef_get_lengthA_0 = a.asm.ap).apply(null, arguments);
        }, hr = a._emscripten_bind_b2PulleyJointDef_set_lengthA_1 = function() {
            return (hr = a._emscripten_bind_b2PulleyJointDef_set_lengthA_1 = a.asm.bp).apply(null, arguments);
        }, ir = a._emscripten_bind_b2PulleyJointDef_get_lengthB_0 = function() {
            return (ir = a._emscripten_bind_b2PulleyJointDef_get_lengthB_0 = a.asm.cp).apply(null, arguments);
        }, jr = a._emscripten_bind_b2PulleyJointDef_set_lengthB_1 = function() {
            return (jr = a._emscripten_bind_b2PulleyJointDef_set_lengthB_1 = a.asm.dp).apply(null, arguments);
        }, kr = a._emscripten_bind_b2PulleyJointDef_get_ratio_0 = function() {
            return (kr = a._emscripten_bind_b2PulleyJointDef_get_ratio_0 = a.asm.ep).apply(null, arguments);
        }, lr = a._emscripten_bind_b2PulleyJointDef_set_ratio_1 = function() {
            return (lr = a._emscripten_bind_b2PulleyJointDef_set_ratio_1 = a.asm.fp).apply(null, arguments);
        }, mr = a._emscripten_bind_b2PulleyJointDef_get_type_0 = function() {
            return (mr = a._emscripten_bind_b2PulleyJointDef_get_type_0 = a.asm.gp).apply(null, arguments);
        }, nr = a._emscripten_bind_b2PulleyJointDef_set_type_1 = function() {
            return (nr = a._emscripten_bind_b2PulleyJointDef_set_type_1 = a.asm.hp).apply(null, arguments);
        }, or = a._emscripten_bind_b2PulleyJointDef_get_userData_0 = function() {
            return (or = a._emscripten_bind_b2PulleyJointDef_get_userData_0 = a.asm.ip).apply(null, arguments);
        }, pr = a._emscripten_bind_b2PulleyJointDef_set_userData_1 = function() {
            return (pr = a._emscripten_bind_b2PulleyJointDef_set_userData_1 = a.asm.jp).apply(null, arguments);
        }, qr = a._emscripten_bind_b2PulleyJointDef_get_bodyA_0 = function() {
            return (qr = a._emscripten_bind_b2PulleyJointDef_get_bodyA_0 = a.asm.kp).apply(null, arguments);
        }, rr = a._emscripten_bind_b2PulleyJointDef_set_bodyA_1 = function() {
            return (rr = a._emscripten_bind_b2PulleyJointDef_set_bodyA_1 = a.asm.lp).apply(null, arguments);
        }, sr = a._emscripten_bind_b2PulleyJointDef_get_bodyB_0 = function() {
            return (sr = a._emscripten_bind_b2PulleyJointDef_get_bodyB_0 = a.asm.mp).apply(null, arguments);
        }, tr = a._emscripten_bind_b2PulleyJointDef_set_bodyB_1 = function() {
            return (tr = a._emscripten_bind_b2PulleyJointDef_set_bodyB_1 = a.asm.np).apply(null, arguments);
        }, ur = a._emscripten_bind_b2PulleyJointDef_get_collideConnected_0 = function() {
            return (ur = a._emscripten_bind_b2PulleyJointDef_get_collideConnected_0 = a.asm.op).apply(null, arguments);
        }, vr = a._emscripten_bind_b2PulleyJointDef_set_collideConnected_1 = function() {
            return (vr = a._emscripten_bind_b2PulleyJointDef_set_collideConnected_1 = a.asm.pp).apply(null, arguments);
        }, wr = a._emscripten_bind_b2PulleyJointDef___destroy___0 = function() {
            return (wr = a._emscripten_bind_b2PulleyJointDef___destroy___0 = a.asm.qp).apply(null, arguments);
        }, xr = a._emscripten_bind_b2RayCastInput_get_p1_0 = function() {
            return (xr = a._emscripten_bind_b2RayCastInput_get_p1_0 = a.asm.rp).apply(null, arguments);
        }, yr = a._emscripten_bind_b2RayCastInput_set_p1_1 = function() {
            return (yr = a._emscripten_bind_b2RayCastInput_set_p1_1 = a.asm.sp).apply(null, arguments);
        }, zr = a._emscripten_bind_b2RayCastInput_get_p2_0 = function() {
            return (zr = a._emscripten_bind_b2RayCastInput_get_p2_0 = a.asm.tp).apply(null, arguments);
        }, Ar = a._emscripten_bind_b2RayCastInput_set_p2_1 = function() {
            return (Ar = a._emscripten_bind_b2RayCastInput_set_p2_1 = a.asm.up).apply(null, arguments);
        }, Br = a._emscripten_bind_b2RayCastInput_get_maxFraction_0 = function() {
            return (Br = a._emscripten_bind_b2RayCastInput_get_maxFraction_0 = a.asm.vp).apply(null, arguments);
        }, Cr = a._emscripten_bind_b2RayCastInput_set_maxFraction_1 = function() {
            return (Cr = a._emscripten_bind_b2RayCastInput_set_maxFraction_1 = a.asm.wp).apply(null, arguments);
        }, Dr = a._emscripten_bind_b2RayCastInput___destroy___0 = function() {
            return (Dr = a._emscripten_bind_b2RayCastInput___destroy___0 = a.asm.xp).apply(null, arguments);
        }, Er = a._emscripten_bind_b2RayCastOutput_get_normal_0 = function() {
            return (Er = a._emscripten_bind_b2RayCastOutput_get_normal_0 = a.asm.yp).apply(null, arguments);
        }, Fr = a._emscripten_bind_b2RayCastOutput_set_normal_1 = function() {
            return (Fr = a._emscripten_bind_b2RayCastOutput_set_normal_1 = a.asm.zp).apply(null, arguments);
        }, Gr = a._emscripten_bind_b2RayCastOutput_get_fraction_0 = function() {
            return (Gr = a._emscripten_bind_b2RayCastOutput_get_fraction_0 = a.asm.Ap).apply(null, arguments);
        }, Hr = a._emscripten_bind_b2RayCastOutput_set_fraction_1 = function() {
            return (Hr = a._emscripten_bind_b2RayCastOutput_set_fraction_1 = a.asm.Bp).apply(null, arguments);
        }, Ir = a._emscripten_bind_b2RayCastOutput___destroy___0 = function() {
            return (Ir = a._emscripten_bind_b2RayCastOutput___destroy___0 = a.asm.Cp).apply(null, arguments);
        }, Jr = a._emscripten_bind_b2RevoluteJoint_GetLocalAnchorA_0 = function() {
            return (Jr = a._emscripten_bind_b2RevoluteJoint_GetLocalAnchorA_0 = a.asm.Dp).apply(null, arguments);
        }, Kr = a._emscripten_bind_b2RevoluteJoint_GetLocalAnchorB_0 = function() {
            return (Kr = a._emscripten_bind_b2RevoluteJoint_GetLocalAnchorB_0 = a.asm.Ep).apply(null, arguments);
        }, Lr = a._emscripten_bind_b2RevoluteJoint_GetReferenceAngle_0 = function() {
            return (Lr = a._emscripten_bind_b2RevoluteJoint_GetReferenceAngle_0 = a.asm.Fp).apply(null, arguments);
        }, Mr = a._emscripten_bind_b2RevoluteJoint_GetJointAngle_0 = function() {
            return (Mr = a._emscripten_bind_b2RevoluteJoint_GetJointAngle_0 = a.asm.Gp).apply(null, arguments);
        }, Nr = a._emscripten_bind_b2RevoluteJoint_GetJointSpeed_0 = function() {
            return (Nr = a._emscripten_bind_b2RevoluteJoint_GetJointSpeed_0 = a.asm.Hp).apply(null, arguments);
        }, Or = a._emscripten_bind_b2RevoluteJoint_IsLimitEnabled_0 = function() {
            return (Or = a._emscripten_bind_b2RevoluteJoint_IsLimitEnabled_0 = a.asm.Ip).apply(null, arguments);
        }, Pr = a._emscripten_bind_b2RevoluteJoint_EnableLimit_1 = function() {
            return (Pr = a._emscripten_bind_b2RevoluteJoint_EnableLimit_1 = a.asm.Jp).apply(null, arguments);
        }, Qr = a._emscripten_bind_b2RevoluteJoint_GetLowerLimit_0 = function() {
            return (Qr = a._emscripten_bind_b2RevoluteJoint_GetLowerLimit_0 = a.asm.Kp).apply(null, arguments);
        }, Rr = a._emscripten_bind_b2RevoluteJoint_GetUpperLimit_0 = function() {
            return (Rr = a._emscripten_bind_b2RevoluteJoint_GetUpperLimit_0 = a.asm.Lp).apply(null, arguments);
        }, Sr = a._emscripten_bind_b2RevoluteJoint_SetLimits_2 = function() {
            return (Sr = a._emscripten_bind_b2RevoluteJoint_SetLimits_2 = a.asm.Mp).apply(null, arguments);
        }, Tr = a._emscripten_bind_b2RevoluteJoint_IsMotorEnabled_0 = function() {
            return (Tr = a._emscripten_bind_b2RevoluteJoint_IsMotorEnabled_0 = a.asm.Np).apply(null, arguments);
        }, Ur = a._emscripten_bind_b2RevoluteJoint_EnableMotor_1 = function() {
            return (Ur = a._emscripten_bind_b2RevoluteJoint_EnableMotor_1 = a.asm.Op).apply(null, arguments);
        }, Vr = a._emscripten_bind_b2RevoluteJoint_SetMotorSpeed_1 = function() {
            return (Vr = a._emscripten_bind_b2RevoluteJoint_SetMotorSpeed_1 = a.asm.Pp).apply(null, arguments);
        }, Wr = a._emscripten_bind_b2RevoluteJoint_GetMotorSpeed_0 = function() {
            return (Wr = a._emscripten_bind_b2RevoluteJoint_GetMotorSpeed_0 = a.asm.Qp).apply(null, arguments);
        }, Xr = a._emscripten_bind_b2RevoluteJoint_SetMaxMotorTorque_1 = function() {
            return (Xr = a._emscripten_bind_b2RevoluteJoint_SetMaxMotorTorque_1 = a.asm.Rp).apply(null, arguments);
        }, Yr = a._emscripten_bind_b2RevoluteJoint_GetMaxMotorTorque_0 = function() {
            return (Yr = a._emscripten_bind_b2RevoluteJoint_GetMaxMotorTorque_0 = a.asm.Sp).apply(null, arguments);
        }, Zr = a._emscripten_bind_b2RevoluteJoint_GetMotorTorque_1 = function() {
            return (Zr = a._emscripten_bind_b2RevoluteJoint_GetMotorTorque_1 = a.asm.Tp).apply(null, arguments);
        }, $r = a._emscripten_bind_b2RevoluteJoint_GetType_0 = function() {
            return ($r = a._emscripten_bind_b2RevoluteJoint_GetType_0 = a.asm.Up).apply(null, arguments);
        }, as = a._emscripten_bind_b2RevoluteJoint_GetBodyA_0 = function() {
            return (as = a._emscripten_bind_b2RevoluteJoint_GetBodyA_0 = a.asm.Vp).apply(null, arguments);
        }, bs = a._emscripten_bind_b2RevoluteJoint_GetBodyB_0 = function() {
            return (bs = a._emscripten_bind_b2RevoluteJoint_GetBodyB_0 = a.asm.Wp).apply(null, arguments);
        }, cs = a._emscripten_bind_b2RevoluteJoint_GetAnchorA_0 = function() {
            return (cs = a._emscripten_bind_b2RevoluteJoint_GetAnchorA_0 = a.asm.Xp).apply(null, arguments);
        }, ds = a._emscripten_bind_b2RevoluteJoint_GetAnchorB_0 = function() {
            return (ds = a._emscripten_bind_b2RevoluteJoint_GetAnchorB_0 = a.asm.Yp).apply(null, arguments);
        }, es = a._emscripten_bind_b2RevoluteJoint_GetReactionForce_1 = function() {
            return (es = a._emscripten_bind_b2RevoluteJoint_GetReactionForce_1 = a.asm.Zp).apply(null, arguments);
        }, gs = a._emscripten_bind_b2RevoluteJoint_GetReactionTorque_1 = function() {
            return (gs = a._emscripten_bind_b2RevoluteJoint_GetReactionTorque_1 = a.asm._p).apply(null, arguments);
        }, hs = a._emscripten_bind_b2RevoluteJoint_GetNext_0 = function() {
            return (hs = a._emscripten_bind_b2RevoluteJoint_GetNext_0 = a.asm.$p).apply(null, arguments);
        }, is = a._emscripten_bind_b2RevoluteJoint_GetUserData_0 = function() {
            return (is = a._emscripten_bind_b2RevoluteJoint_GetUserData_0 = a.asm.aq).apply(null, arguments);
        }, js = a._emscripten_bind_b2RevoluteJoint_GetCollideConnected_0 = function() {
            return (js = a._emscripten_bind_b2RevoluteJoint_GetCollideConnected_0 = a.asm.bq).apply(null, arguments);
        }, ks = a._emscripten_bind_b2RevoluteJoint___destroy___0 = function() {
            return (ks = a._emscripten_bind_b2RevoluteJoint___destroy___0 = a.asm.cq).apply(null, arguments);
        }, ls = a._emscripten_bind_b2RevoluteJointDef_b2RevoluteJointDef_0 = function() {
            return (ls = a._emscripten_bind_b2RevoluteJointDef_b2RevoluteJointDef_0 = a.asm.dq).apply(null, arguments);
        }, ms = a._emscripten_bind_b2RevoluteJointDef_Initialize_3 = function() {
            return (ms = a._emscripten_bind_b2RevoluteJointDef_Initialize_3 = a.asm.eq).apply(null, arguments);
        }, ns = a._emscripten_bind_b2RevoluteJointDef_get_localAnchorA_0 = function() {
            return (ns = a._emscripten_bind_b2RevoluteJointDef_get_localAnchorA_0 = a.asm.fq).apply(null, arguments);
        }, ps = a._emscripten_bind_b2RevoluteJointDef_set_localAnchorA_1 = function() {
            return (ps = a._emscripten_bind_b2RevoluteJointDef_set_localAnchorA_1 = a.asm.gq).apply(null, arguments);
        }, qs = a._emscripten_bind_b2RevoluteJointDef_get_localAnchorB_0 = function() {
            return (qs = a._emscripten_bind_b2RevoluteJointDef_get_localAnchorB_0 = a.asm.hq).apply(null, arguments);
        }, rs = a._emscripten_bind_b2RevoluteJointDef_set_localAnchorB_1 = function() {
            return (rs = a._emscripten_bind_b2RevoluteJointDef_set_localAnchorB_1 = a.asm.iq).apply(null, arguments);
        }, ss = a._emscripten_bind_b2RevoluteJointDef_get_referenceAngle_0 = function() {
            return (ss = a._emscripten_bind_b2RevoluteJointDef_get_referenceAngle_0 = a.asm.jq).apply(null, arguments);
        }, ts = a._emscripten_bind_b2RevoluteJointDef_set_referenceAngle_1 = function() {
            return (ts = a._emscripten_bind_b2RevoluteJointDef_set_referenceAngle_1 = a.asm.kq).apply(null, arguments);
        }, us = a._emscripten_bind_b2RevoluteJointDef_get_enableLimit_0 = function() {
            return (us = a._emscripten_bind_b2RevoluteJointDef_get_enableLimit_0 = a.asm.lq).apply(null, arguments);
        }, vs = a._emscripten_bind_b2RevoluteJointDef_set_enableLimit_1 = function() {
            return (vs = a._emscripten_bind_b2RevoluteJointDef_set_enableLimit_1 = a.asm.mq).apply(null, arguments);
        }, xs = a._emscripten_bind_b2RevoluteJointDef_get_lowerAngle_0 = function() {
            return (xs = a._emscripten_bind_b2RevoluteJointDef_get_lowerAngle_0 = a.asm.nq).apply(null, arguments);
        }, ys = a._emscripten_bind_b2RevoluteJointDef_set_lowerAngle_1 = function() {
            return (ys = a._emscripten_bind_b2RevoluteJointDef_set_lowerAngle_1 = a.asm.oq).apply(null, arguments);
        }, zs = a._emscripten_bind_b2RevoluteJointDef_get_upperAngle_0 = function() {
            return (zs = a._emscripten_bind_b2RevoluteJointDef_get_upperAngle_0 = a.asm.pq).apply(null, arguments);
        }, As = a._emscripten_bind_b2RevoluteJointDef_set_upperAngle_1 = function() {
            return (As = a._emscripten_bind_b2RevoluteJointDef_set_upperAngle_1 = a.asm.qq).apply(null, arguments);
        }, Bs = a._emscripten_bind_b2RevoluteJointDef_get_enableMotor_0 = function() {
            return (Bs = a._emscripten_bind_b2RevoluteJointDef_get_enableMotor_0 = a.asm.rq).apply(null, arguments);
        }, Cs = a._emscripten_bind_b2RevoluteJointDef_set_enableMotor_1 = function() {
            return (Cs = a._emscripten_bind_b2RevoluteJointDef_set_enableMotor_1 = a.asm.sq).apply(null, arguments);
        }, Ds = a._emscripten_bind_b2RevoluteJointDef_get_motorSpeed_0 = function() {
            return (Ds = a._emscripten_bind_b2RevoluteJointDef_get_motorSpeed_0 = a.asm.tq).apply(null, arguments);
        }, Es = a._emscripten_bind_b2RevoluteJointDef_set_motorSpeed_1 = function() {
            return (Es = a._emscripten_bind_b2RevoluteJointDef_set_motorSpeed_1 = a.asm.uq).apply(null, arguments);
        }, Fs = a._emscripten_bind_b2RevoluteJointDef_get_maxMotorTorque_0 = function() {
            return (Fs = a._emscripten_bind_b2RevoluteJointDef_get_maxMotorTorque_0 = a.asm.vq).apply(null, arguments);
        }, Gs = a._emscripten_bind_b2RevoluteJointDef_set_maxMotorTorque_1 = function() {
            return (Gs = a._emscripten_bind_b2RevoluteJointDef_set_maxMotorTorque_1 = a.asm.wq).apply(null, arguments);
        }, Hs = a._emscripten_bind_b2RevoluteJointDef_get_type_0 = function() {
            return (Hs = a._emscripten_bind_b2RevoluteJointDef_get_type_0 = a.asm.xq).apply(null, arguments);
        }, Is = a._emscripten_bind_b2RevoluteJointDef_set_type_1 = function() {
            return (Is = a._emscripten_bind_b2RevoluteJointDef_set_type_1 = a.asm.yq).apply(null, arguments);
        }, Js = a._emscripten_bind_b2RevoluteJointDef_get_userData_0 = function() {
            return (Js = a._emscripten_bind_b2RevoluteJointDef_get_userData_0 = a.asm.zq).apply(null, arguments);
        }, Ks = a._emscripten_bind_b2RevoluteJointDef_set_userData_1 = function() {
            return (Ks = a._emscripten_bind_b2RevoluteJointDef_set_userData_1 = a.asm.Aq).apply(null, arguments);
        }, Ls = a._emscripten_bind_b2RevoluteJointDef_get_bodyA_0 = function() {
            return (Ls = a._emscripten_bind_b2RevoluteJointDef_get_bodyA_0 = a.asm.Bq).apply(null, arguments);
        }, Ms = a._emscripten_bind_b2RevoluteJointDef_set_bodyA_1 = function() {
            return (Ms = a._emscripten_bind_b2RevoluteJointDef_set_bodyA_1 = a.asm.Cq).apply(null, arguments);
        }, Ns = a._emscripten_bind_b2RevoluteJointDef_get_bodyB_0 = function() {
            return (Ns = a._emscripten_bind_b2RevoluteJointDef_get_bodyB_0 = a.asm.Dq).apply(null, arguments);
        }, Os = a._emscripten_bind_b2RevoluteJointDef_set_bodyB_1 = function() {
            return (Os = a._emscripten_bind_b2RevoluteJointDef_set_bodyB_1 = a.asm.Eq).apply(null, arguments);
        }, Ps = a._emscripten_bind_b2RevoluteJointDef_get_collideConnected_0 = function() {
            return (Ps = a._emscripten_bind_b2RevoluteJointDef_get_collideConnected_0 = a.asm.Fq).apply(null, arguments);
        }, Qs = a._emscripten_bind_b2RevoluteJointDef_set_collideConnected_1 = function() {
            return (Qs = a._emscripten_bind_b2RevoluteJointDef_set_collideConnected_1 = a.asm.Gq).apply(null, arguments);
        }, Rs = a._emscripten_bind_b2RevoluteJointDef___destroy___0 = function() {
            return (Rs = a._emscripten_bind_b2RevoluteJointDef___destroy___0 = a.asm.Hq).apply(null, arguments);
        }, Ss = a._emscripten_bind_b2Rot_b2Rot_0 = function() {
            return (Ss = a._emscripten_bind_b2Rot_b2Rot_0 = a.asm.Iq).apply(null, arguments);
        }, Ts = a._emscripten_bind_b2Rot_b2Rot_1 = function() {
            return (Ts = a._emscripten_bind_b2Rot_b2Rot_1 = a.asm.Jq).apply(null, arguments);
        }, Us = a._emscripten_bind_b2Rot_Set_1 = function() {
            return (Us = a._emscripten_bind_b2Rot_Set_1 = a.asm.Kq).apply(null, arguments);
        }, Vs = a._emscripten_bind_b2Rot_SetIdentity_0 = function() {
            return (Vs = a._emscripten_bind_b2Rot_SetIdentity_0 = a.asm.Lq).apply(null, arguments);
        }, Ws = a._emscripten_bind_b2Rot_GetAngle_0 = function() {
            return (Ws = a._emscripten_bind_b2Rot_GetAngle_0 = a.asm.Mq).apply(null, arguments);
        }, Xs = a._emscripten_bind_b2Rot_GetXAxis_0 = function() {
            return (Xs = a._emscripten_bind_b2Rot_GetXAxis_0 = a.asm.Nq).apply(null, arguments);
        }, Ys = a._emscripten_bind_b2Rot_GetYAxis_0 = function() {
            return (Ys = a._emscripten_bind_b2Rot_GetYAxis_0 = a.asm.Oq).apply(null, arguments);
        }, Zs = a._emscripten_bind_b2Rot_get_s_0 = function() {
            return (Zs = a._emscripten_bind_b2Rot_get_s_0 = a.asm.Pq).apply(null, arguments);
        }, $s = a._emscripten_bind_b2Rot_set_s_1 = function() {
            return ($s = a._emscripten_bind_b2Rot_set_s_1 = a.asm.Qq).apply(null, arguments);
        }, at = a._emscripten_bind_b2Rot_get_c_0 = function() {
            return (at = a._emscripten_bind_b2Rot_get_c_0 = a.asm.Rq).apply(null, arguments);
        }, bt = a._emscripten_bind_b2Rot_set_c_1 = function() {
            return (bt = a._emscripten_bind_b2Rot_set_c_1 = a.asm.Sq).apply(null, arguments);
        }, ct = a._emscripten_bind_b2Rot___destroy___0 = function() {
            return (ct = a._emscripten_bind_b2Rot___destroy___0 = a.asm.Tq).apply(null, arguments);
        }, dt = a._emscripten_bind_b2WheelJoint_GetLocalAnchorA_0 = function() {
            return (dt = a._emscripten_bind_b2WheelJoint_GetLocalAnchorA_0 = a.asm.Uq).apply(null, arguments);
        }, et = a._emscripten_bind_b2WheelJoint_GetLocalAnchorB_0 = function() {
            return (et = a._emscripten_bind_b2WheelJoint_GetLocalAnchorB_0 = a.asm.Vq).apply(null, arguments);
        }, ft = a._emscripten_bind_b2WheelJoint_GetLocalAxisA_0 = function() {
            return (ft = a._emscripten_bind_b2WheelJoint_GetLocalAxisA_0 = a.asm.Wq).apply(null, arguments);
        }, gt = a._emscripten_bind_b2WheelJoint_GetJointTranslation_0 = function() {
            return (gt = a._emscripten_bind_b2WheelJoint_GetJointTranslation_0 = a.asm.Xq).apply(null, arguments);
        }, ht = a._emscripten_bind_b2WheelJoint_GetJointLinearSpeed_0 = function() {
            return (ht = a._emscripten_bind_b2WheelJoint_GetJointLinearSpeed_0 = a.asm.Yq).apply(null, arguments);
        }, it = a._emscripten_bind_b2WheelJoint_GetJointAngle_0 = function() {
            return (it = a._emscripten_bind_b2WheelJoint_GetJointAngle_0 = a.asm.Zq).apply(null, arguments);
        }, jt = a._emscripten_bind_b2WheelJoint_GetJointAngularSpeed_0 = function() {
            return (jt = a._emscripten_bind_b2WheelJoint_GetJointAngularSpeed_0 = a.asm._q).apply(null, arguments);
        }, kt = a._emscripten_bind_b2WheelJoint_IsLimitEnabled_0 = function() {
            return (kt = a._emscripten_bind_b2WheelJoint_IsLimitEnabled_0 = a.asm.$q).apply(null, arguments);
        }, lt = a._emscripten_bind_b2WheelJoint_EnableLimit_1 = function() {
            return (lt = a._emscripten_bind_b2WheelJoint_EnableLimit_1 = a.asm.ar).apply(null, arguments);
        }, mt = a._emscripten_bind_b2WheelJoint_GetLowerLimit_0 = function() {
            return (mt = a._emscripten_bind_b2WheelJoint_GetLowerLimit_0 = a.asm.br).apply(null, arguments);
        }, nt = a._emscripten_bind_b2WheelJoint_GetUpperLimit_0 = function() {
            return (nt = a._emscripten_bind_b2WheelJoint_GetUpperLimit_0 = a.asm.cr).apply(null, arguments);
        }, ot = a._emscripten_bind_b2WheelJoint_SetLimits_2 = function() {
            return (ot = a._emscripten_bind_b2WheelJoint_SetLimits_2 = a.asm.dr).apply(null, arguments);
        }, pt = a._emscripten_bind_b2WheelJoint_IsMotorEnabled_0 = function() {
            return (pt = a._emscripten_bind_b2WheelJoint_IsMotorEnabled_0 = a.asm.er).apply(null, arguments);
        }, qt = a._emscripten_bind_b2WheelJoint_EnableMotor_1 = function() {
            return (qt = a._emscripten_bind_b2WheelJoint_EnableMotor_1 = a.asm.fr).apply(null, arguments);
        }, rt = a._emscripten_bind_b2WheelJoint_SetMotorSpeed_1 = function() {
            return (rt = a._emscripten_bind_b2WheelJoint_SetMotorSpeed_1 = a.asm.gr).apply(null, arguments);
        }, st = a._emscripten_bind_b2WheelJoint_GetMotorSpeed_0 = function() {
            return (st = a._emscripten_bind_b2WheelJoint_GetMotorSpeed_0 = a.asm.hr).apply(null, arguments);
        }, tt = a._emscripten_bind_b2WheelJoint_SetMaxMotorTorque_1 = function() {
            return (tt = a._emscripten_bind_b2WheelJoint_SetMaxMotorTorque_1 = a.asm.ir).apply(null, arguments);
        }, ut = a._emscripten_bind_b2WheelJoint_GetMaxMotorTorque_0 = function() {
            return (ut = a._emscripten_bind_b2WheelJoint_GetMaxMotorTorque_0 = a.asm.jr).apply(null, arguments);
        }, vt = a._emscripten_bind_b2WheelJoint_GetMotorTorque_1 = function() {
            return (vt = a._emscripten_bind_b2WheelJoint_GetMotorTorque_1 = a.asm.kr).apply(null, arguments);
        }, wt = a._emscripten_bind_b2WheelJoint_SetStiffness_1 = function() {
            return (wt = a._emscripten_bind_b2WheelJoint_SetStiffness_1 = a.asm.lr).apply(null, arguments);
        }, xt = a._emscripten_bind_b2WheelJoint_GetStiffness_0 = function() {
            return (xt = a._emscripten_bind_b2WheelJoint_GetStiffness_0 = a.asm.mr).apply(null, arguments);
        }, yt = a._emscripten_bind_b2WheelJoint_SetDamping_1 = function() {
            return (yt = a._emscripten_bind_b2WheelJoint_SetDamping_1 = a.asm.nr).apply(null, arguments);
        }, zt = a._emscripten_bind_b2WheelJoint_GetDamping_0 = function() {
            return (zt = a._emscripten_bind_b2WheelJoint_GetDamping_0 = a.asm.or).apply(null, arguments);
        }, At = a._emscripten_bind_b2WheelJoint_GetType_0 = function() {
            return (At = a._emscripten_bind_b2WheelJoint_GetType_0 = a.asm.pr).apply(null, arguments);
        }, Bt = a._emscripten_bind_b2WheelJoint_GetBodyA_0 = function() {
            return (Bt = a._emscripten_bind_b2WheelJoint_GetBodyA_0 = a.asm.qr).apply(null, arguments);
        }, Ct = a._emscripten_bind_b2WheelJoint_GetBodyB_0 = function() {
            return (Ct = a._emscripten_bind_b2WheelJoint_GetBodyB_0 = a.asm.rr).apply(null, arguments);
        }, Dt = a._emscripten_bind_b2WheelJoint_GetAnchorA_0 = function() {
            return (Dt = a._emscripten_bind_b2WheelJoint_GetAnchorA_0 = a.asm.sr).apply(null, arguments);
        }, Et = a._emscripten_bind_b2WheelJoint_GetAnchorB_0 = function() {
            return (Et = a._emscripten_bind_b2WheelJoint_GetAnchorB_0 = a.asm.tr).apply(null, arguments);
        }, Ft = a._emscripten_bind_b2WheelJoint_GetReactionForce_1 = function() {
            return (Ft = a._emscripten_bind_b2WheelJoint_GetReactionForce_1 = a.asm.ur).apply(null, arguments);
        }, Gt = a._emscripten_bind_b2WheelJoint_GetReactionTorque_1 = function() {
            return (Gt = a._emscripten_bind_b2WheelJoint_GetReactionTorque_1 = a.asm.vr).apply(null, arguments);
        }, Ht = a._emscripten_bind_b2WheelJoint_GetNext_0 = function() {
            return (Ht = a._emscripten_bind_b2WheelJoint_GetNext_0 = a.asm.wr).apply(null, arguments);
        }, It = a._emscripten_bind_b2WheelJoint_GetUserData_0 = function() {
            return (It = a._emscripten_bind_b2WheelJoint_GetUserData_0 = a.asm.xr).apply(null, arguments);
        }, Jt = a._emscripten_bind_b2WheelJoint_GetCollideConnected_0 = function() {
            return (Jt = a._emscripten_bind_b2WheelJoint_GetCollideConnected_0 = a.asm.yr).apply(null, arguments);
        }, Kt = a._emscripten_bind_b2WheelJoint___destroy___0 = function() {
            return (Kt = a._emscripten_bind_b2WheelJoint___destroy___0 = a.asm.zr).apply(null, arguments);
        }, Lt = a._emscripten_bind_b2WheelJointDef_b2WheelJointDef_0 = function() {
            return (Lt = a._emscripten_bind_b2WheelJointDef_b2WheelJointDef_0 = a.asm.Ar).apply(null, arguments);
        }, Mt = a._emscripten_bind_b2WheelJointDef_Initialize_4 = function() {
            return (Mt = a._emscripten_bind_b2WheelJointDef_Initialize_4 = a.asm.Br).apply(null, arguments);
        }, Nt = a._emscripten_bind_b2WheelJointDef_get_localAnchorA_0 = function() {
            return (Nt = a._emscripten_bind_b2WheelJointDef_get_localAnchorA_0 = a.asm.Cr).apply(null, arguments);
        }, Ot = a._emscripten_bind_b2WheelJointDef_set_localAnchorA_1 = function() {
            return (Ot = a._emscripten_bind_b2WheelJointDef_set_localAnchorA_1 = a.asm.Dr).apply(null, arguments);
        }, Pt = a._emscripten_bind_b2WheelJointDef_get_localAnchorB_0 = function() {
            return (Pt = a._emscripten_bind_b2WheelJointDef_get_localAnchorB_0 = a.asm.Er).apply(null, arguments);
        }, Qt = a._emscripten_bind_b2WheelJointDef_set_localAnchorB_1 = function() {
            return (Qt = a._emscripten_bind_b2WheelJointDef_set_localAnchorB_1 = a.asm.Fr).apply(null, arguments);
        }, Rt = a._emscripten_bind_b2WheelJointDef_get_localAxisA_0 = function() {
            return (Rt = a._emscripten_bind_b2WheelJointDef_get_localAxisA_0 = a.asm.Gr).apply(null, arguments);
        }, St = a._emscripten_bind_b2WheelJointDef_set_localAxisA_1 = function() {
            return (St = a._emscripten_bind_b2WheelJointDef_set_localAxisA_1 = a.asm.Hr).apply(null, arguments);
        }, Tt = a._emscripten_bind_b2WheelJointDef_get_enableLimit_0 = function() {
            return (Tt = a._emscripten_bind_b2WheelJointDef_get_enableLimit_0 = a.asm.Ir).apply(null, arguments);
        }, Ut = a._emscripten_bind_b2WheelJointDef_set_enableLimit_1 = function() {
            return (Ut = a._emscripten_bind_b2WheelJointDef_set_enableLimit_1 = a.asm.Jr).apply(null, arguments);
        }, Vt = a._emscripten_bind_b2WheelJointDef_get_lowerTranslation_0 = function() {
            return (Vt = a._emscripten_bind_b2WheelJointDef_get_lowerTranslation_0 = a.asm.Kr).apply(null, arguments);
        }, Wt = a._emscripten_bind_b2WheelJointDef_set_lowerTranslation_1 = function() {
            return (Wt = a._emscripten_bind_b2WheelJointDef_set_lowerTranslation_1 = a.asm.Lr).apply(null, arguments);
        }, Xt = a._emscripten_bind_b2WheelJointDef_get_upperTranslation_0 = function() {
            return (Xt = a._emscripten_bind_b2WheelJointDef_get_upperTranslation_0 = a.asm.Mr).apply(null, arguments);
        }, Yt = a._emscripten_bind_b2WheelJointDef_set_upperTranslation_1 = function() {
            return (Yt = a._emscripten_bind_b2WheelJointDef_set_upperTranslation_1 = a.asm.Nr).apply(null, arguments);
        }, Zt = a._emscripten_bind_b2WheelJointDef_get_enableMotor_0 = function() {
            return (Zt = a._emscripten_bind_b2WheelJointDef_get_enableMotor_0 = a.asm.Or).apply(null, arguments);
        }, $t = a._emscripten_bind_b2WheelJointDef_set_enableMotor_1 = function() {
            return ($t = a._emscripten_bind_b2WheelJointDef_set_enableMotor_1 = a.asm.Pr).apply(null, arguments);
        }, au = a._emscripten_bind_b2WheelJointDef_get_maxMotorTorque_0 = function() {
            return (au = a._emscripten_bind_b2WheelJointDef_get_maxMotorTorque_0 = a.asm.Qr).apply(null, arguments);
        }, bu = a._emscripten_bind_b2WheelJointDef_set_maxMotorTorque_1 = function() {
            return (bu = a._emscripten_bind_b2WheelJointDef_set_maxMotorTorque_1 = a.asm.Rr).apply(null, arguments);
        }, cu = a._emscripten_bind_b2WheelJointDef_get_motorSpeed_0 = function() {
            return (cu = a._emscripten_bind_b2WheelJointDef_get_motorSpeed_0 = a.asm.Sr).apply(null, arguments);
        }, du = a._emscripten_bind_b2WheelJointDef_set_motorSpeed_1 = function() {
            return (du = a._emscripten_bind_b2WheelJointDef_set_motorSpeed_1 = a.asm.Tr).apply(null, arguments);
        }, eu = a._emscripten_bind_b2WheelJointDef_get_stiffness_0 = function() {
            return (eu = a._emscripten_bind_b2WheelJointDef_get_stiffness_0 = a.asm.Ur).apply(null, arguments);
        }, fu = a._emscripten_bind_b2WheelJointDef_set_stiffness_1 = function() {
            return (fu = a._emscripten_bind_b2WheelJointDef_set_stiffness_1 = a.asm.Vr).apply(null, arguments);
        }, gu = a._emscripten_bind_b2WheelJointDef_get_damping_0 = function() {
            return (gu = a._emscripten_bind_b2WheelJointDef_get_damping_0 = a.asm.Wr).apply(null, arguments);
        }, hu = a._emscripten_bind_b2WheelJointDef_set_damping_1 = function() {
            return (hu = a._emscripten_bind_b2WheelJointDef_set_damping_1 = a.asm.Xr).apply(null, arguments);
        }, iu = a._emscripten_bind_b2WheelJointDef_get_type_0 = function() {
            return (iu = a._emscripten_bind_b2WheelJointDef_get_type_0 = a.asm.Yr).apply(null, arguments);
        }, ju = a._emscripten_bind_b2WheelJointDef_set_type_1 = function() {
            return (ju = a._emscripten_bind_b2WheelJointDef_set_type_1 = a.asm.Zr).apply(null, arguments);
        }, ku = a._emscripten_bind_b2WheelJointDef_get_userData_0 = function() {
            return (ku = a._emscripten_bind_b2WheelJointDef_get_userData_0 = a.asm._r).apply(null, arguments);
        }, lu = a._emscripten_bind_b2WheelJointDef_set_userData_1 = function() {
            return (lu = a._emscripten_bind_b2WheelJointDef_set_userData_1 = a.asm.$r).apply(null, arguments);
        }, mu = a._emscripten_bind_b2WheelJointDef_get_bodyA_0 = function() {
            return (mu = a._emscripten_bind_b2WheelJointDef_get_bodyA_0 = a.asm.as).apply(null, arguments);
        }, nu = a._emscripten_bind_b2WheelJointDef_set_bodyA_1 = function() {
            return (nu = a._emscripten_bind_b2WheelJointDef_set_bodyA_1 = a.asm.bs).apply(null, arguments);
        }, ou = a._emscripten_bind_b2WheelJointDef_get_bodyB_0 = function() {
            return (ou = a._emscripten_bind_b2WheelJointDef_get_bodyB_0 = a.asm.cs).apply(null, arguments);
        }, pu = a._emscripten_bind_b2WheelJointDef_set_bodyB_1 = function() {
            return (pu = a._emscripten_bind_b2WheelJointDef_set_bodyB_1 = a.asm.ds).apply(null, arguments);
        }, qu = a._emscripten_bind_b2WheelJointDef_get_collideConnected_0 = function() {
            return (qu = a._emscripten_bind_b2WheelJointDef_get_collideConnected_0 = a.asm.es).apply(null, arguments);
        }, ru = a._emscripten_bind_b2WheelJointDef_set_collideConnected_1 = function() {
            return (ru = a._emscripten_bind_b2WheelJointDef_set_collideConnected_1 = a.asm.fs).apply(null, arguments);
        }, su = a._emscripten_bind_b2WheelJointDef___destroy___0 = function() {
            return (su = a._emscripten_bind_b2WheelJointDef___destroy___0 = a.asm.gs).apply(null, arguments);
        }, tu = a._emscripten_bind_b2MotorJoint_SetLinearOffset_1 = function() {
            return (tu = a._emscripten_bind_b2MotorJoint_SetLinearOffset_1 = a.asm.hs).apply(null, arguments);
        }, uu = a._emscripten_bind_b2MotorJoint_GetLinearOffset_0 = function() {
            return (uu = a._emscripten_bind_b2MotorJoint_GetLinearOffset_0 = a.asm.is).apply(null, arguments);
        }, vu = a._emscripten_bind_b2MotorJoint_SetAngularOffset_1 = function() {
            return (vu = a._emscripten_bind_b2MotorJoint_SetAngularOffset_1 = a.asm.js).apply(null, arguments);
        }, wu = a._emscripten_bind_b2MotorJoint_GetAngularOffset_0 = function() {
            return (wu = a._emscripten_bind_b2MotorJoint_GetAngularOffset_0 = a.asm.ks).apply(null, arguments);
        }, xu = a._emscripten_bind_b2MotorJoint_SetMaxForce_1 = function() {
            return (xu = a._emscripten_bind_b2MotorJoint_SetMaxForce_1 = a.asm.ls).apply(null, arguments);
        }, yu = a._emscripten_bind_b2MotorJoint_GetMaxForce_0 = function() {
            return (yu = a._emscripten_bind_b2MotorJoint_GetMaxForce_0 = a.asm.ms).apply(null, arguments);
        }, zu = a._emscripten_bind_b2MotorJoint_SetMaxTorque_1 = function() {
            return (zu = a._emscripten_bind_b2MotorJoint_SetMaxTorque_1 = a.asm.ns).apply(null, arguments);
        }, Au = a._emscripten_bind_b2MotorJoint_GetMaxTorque_0 = function() {
            return (Au = a._emscripten_bind_b2MotorJoint_GetMaxTorque_0 = a.asm.os).apply(null, arguments);
        }, Bu = a._emscripten_bind_b2MotorJoint_SetCorrectionFactor_1 = function() {
            return (Bu = a._emscripten_bind_b2MotorJoint_SetCorrectionFactor_1 = a.asm.ps).apply(null, arguments);
        }, Cu = a._emscripten_bind_b2MotorJoint_GetCorrectionFactor_0 = function() {
            return (Cu = a._emscripten_bind_b2MotorJoint_GetCorrectionFactor_0 = a.asm.qs).apply(null, arguments);
        }, Du = a._emscripten_bind_b2MotorJoint_GetType_0 = function() {
            return (Du = a._emscripten_bind_b2MotorJoint_GetType_0 = a.asm.rs).apply(null, arguments);
        }, Eu = a._emscripten_bind_b2MotorJoint_GetBodyA_0 = function() {
            return (Eu = a._emscripten_bind_b2MotorJoint_GetBodyA_0 = a.asm.ss).apply(null, arguments);
        }, Fu = a._emscripten_bind_b2MotorJoint_GetBodyB_0 = function() {
            return (Fu = a._emscripten_bind_b2MotorJoint_GetBodyB_0 = a.asm.ts).apply(null, arguments);
        }, Gu = a._emscripten_bind_b2MotorJoint_GetAnchorA_0 = function() {
            return (Gu = a._emscripten_bind_b2MotorJoint_GetAnchorA_0 = a.asm.us).apply(null, arguments);
        }, Hu = a._emscripten_bind_b2MotorJoint_GetAnchorB_0 = function() {
            return (Hu = a._emscripten_bind_b2MotorJoint_GetAnchorB_0 = a.asm.vs).apply(null, arguments);
        }, Iu = a._emscripten_bind_b2MotorJoint_GetReactionForce_1 = function() {
            return (Iu = a._emscripten_bind_b2MotorJoint_GetReactionForce_1 = a.asm.ws).apply(null, arguments);
        }, Ju = a._emscripten_bind_b2MotorJoint_GetReactionTorque_1 = function() {
            return (Ju = a._emscripten_bind_b2MotorJoint_GetReactionTorque_1 = a.asm.xs).apply(null, arguments);
        }, Ku = a._emscripten_bind_b2MotorJoint_GetNext_0 = function() {
            return (Ku = a._emscripten_bind_b2MotorJoint_GetNext_0 = a.asm.ys).apply(null, arguments);
        }, Lu = a._emscripten_bind_b2MotorJoint_GetUserData_0 = function() {
            return (Lu = a._emscripten_bind_b2MotorJoint_GetUserData_0 = a.asm.zs).apply(null, arguments);
        }, Mu = a._emscripten_bind_b2MotorJoint_GetCollideConnected_0 = function() {
            return (Mu = a._emscripten_bind_b2MotorJoint_GetCollideConnected_0 = a.asm.As).apply(null, arguments);
        }, Nu = a._emscripten_bind_b2MotorJoint___destroy___0 = function() {
            return (Nu = a._emscripten_bind_b2MotorJoint___destroy___0 = a.asm.Bs).apply(null, arguments);
        }, Ou = a._emscripten_bind_b2MotorJointDef_b2MotorJointDef_0 = function() {
            return (Ou = a._emscripten_bind_b2MotorJointDef_b2MotorJointDef_0 = a.asm.Cs).apply(null, arguments);
        }, Pu = a._emscripten_bind_b2MotorJointDef_Initialize_2 = function() {
            return (Pu = a._emscripten_bind_b2MotorJointDef_Initialize_2 = a.asm.Ds).apply(null, arguments);
        }, Qu = a._emscripten_bind_b2MotorJointDef_get_linearOffset_0 = function() {
            return (Qu = a._emscripten_bind_b2MotorJointDef_get_linearOffset_0 = a.asm.Es).apply(null, arguments);
        }, Ru = a._emscripten_bind_b2MotorJointDef_set_linearOffset_1 = function() {
            return (Ru = a._emscripten_bind_b2MotorJointDef_set_linearOffset_1 = a.asm.Fs).apply(null, arguments);
        }, Su = a._emscripten_bind_b2MotorJointDef_get_angularOffset_0 = function() {
            return (Su = a._emscripten_bind_b2MotorJointDef_get_angularOffset_0 = a.asm.Gs).apply(null, arguments);
        }, Tu = a._emscripten_bind_b2MotorJointDef_set_angularOffset_1 = function() {
            return (Tu = a._emscripten_bind_b2MotorJointDef_set_angularOffset_1 = a.asm.Hs).apply(null, arguments);
        }, Uu = a._emscripten_bind_b2MotorJointDef_get_maxForce_0 = function() {
            return (Uu = a._emscripten_bind_b2MotorJointDef_get_maxForce_0 = a.asm.Is).apply(null, arguments);
        }, Vu = a._emscripten_bind_b2MotorJointDef_set_maxForce_1 = function() {
            return (Vu = a._emscripten_bind_b2MotorJointDef_set_maxForce_1 = a.asm.Js).apply(null, arguments);
        }, Wu = a._emscripten_bind_b2MotorJointDef_get_maxTorque_0 = function() {
            return (Wu = a._emscripten_bind_b2MotorJointDef_get_maxTorque_0 = a.asm.Ks).apply(null, arguments);
        }, Xu = a._emscripten_bind_b2MotorJointDef_set_maxTorque_1 = function() {
            return (Xu = a._emscripten_bind_b2MotorJointDef_set_maxTorque_1 = a.asm.Ls).apply(null, arguments);
        }, Yu = a._emscripten_bind_b2MotorJointDef_get_correctionFactor_0 = function() {
            return (Yu = a._emscripten_bind_b2MotorJointDef_get_correctionFactor_0 = a.asm.Ms).apply(null, arguments);
        }, Zu = a._emscripten_bind_b2MotorJointDef_set_correctionFactor_1 = function() {
            return (Zu = a._emscripten_bind_b2MotorJointDef_set_correctionFactor_1 = a.asm.Ns).apply(null, arguments);
        }, $u = a._emscripten_bind_b2MotorJointDef_get_type_0 = function() {
            return ($u = a._emscripten_bind_b2MotorJointDef_get_type_0 = a.asm.Os).apply(null, arguments);
        }, av = a._emscripten_bind_b2MotorJointDef_set_type_1 = function() {
            return (av = a._emscripten_bind_b2MotorJointDef_set_type_1 = a.asm.Ps).apply(null, arguments);
        }, bv = a._emscripten_bind_b2MotorJointDef_get_userData_0 = function() {
            return (bv = a._emscripten_bind_b2MotorJointDef_get_userData_0 = a.asm.Qs).apply(null, arguments);
        }, cv = a._emscripten_bind_b2MotorJointDef_set_userData_1 = function() {
            return (cv = a._emscripten_bind_b2MotorJointDef_set_userData_1 = a.asm.Rs).apply(null, arguments);
        }, dv = a._emscripten_bind_b2MotorJointDef_get_bodyA_0 = function() {
            return (dv = a._emscripten_bind_b2MotorJointDef_get_bodyA_0 = a.asm.Ss).apply(null, arguments);
        }, ev = a._emscripten_bind_b2MotorJointDef_set_bodyA_1 = function() {
            return (ev = a._emscripten_bind_b2MotorJointDef_set_bodyA_1 = a.asm.Ts).apply(null, arguments);
        }, fv = a._emscripten_bind_b2MotorJointDef_get_bodyB_0 = function() {
            return (fv = a._emscripten_bind_b2MotorJointDef_get_bodyB_0 = a.asm.Us).apply(null, arguments);
        }, gv = a._emscripten_bind_b2MotorJointDef_set_bodyB_1 = function() {
            return (gv = a._emscripten_bind_b2MotorJointDef_set_bodyB_1 = a.asm.Vs).apply(null, arguments);
        }, hv = a._emscripten_bind_b2MotorJointDef_get_collideConnected_0 = function() {
            return (hv = a._emscripten_bind_b2MotorJointDef_get_collideConnected_0 = a.asm.Ws).apply(null, arguments);
        }, iv = a._emscripten_bind_b2MotorJointDef_set_collideConnected_1 = function() {
            return (iv = a._emscripten_bind_b2MotorJointDef_set_collideConnected_1 = a.asm.Xs).apply(null, arguments);
        }, jv = a._emscripten_bind_b2MotorJointDef___destroy___0 = function() {
            return (jv = a._emscripten_bind_b2MotorJointDef___destroy___0 = a.asm.Ys).apply(null, arguments);
        }, kv = a._emscripten_bind_b2RopeTuning_b2RopeTuning_0 = function() {
            return (kv = a._emscripten_bind_b2RopeTuning_b2RopeTuning_0 = a.asm.Zs).apply(null, arguments);
        }, lv = a._emscripten_bind_b2RopeTuning_get_stretchingModel_0 = function() {
            return (lv = a._emscripten_bind_b2RopeTuning_get_stretchingModel_0 = a.asm._s).apply(null, arguments);
        }, mv = a._emscripten_bind_b2RopeTuning_set_stretchingModel_1 = function() {
            return (mv = a._emscripten_bind_b2RopeTuning_set_stretchingModel_1 = a.asm.$s).apply(null, arguments);
        }, nv = a._emscripten_bind_b2RopeTuning_get_bendingModel_0 = function() {
            return (nv = a._emscripten_bind_b2RopeTuning_get_bendingModel_0 = a.asm.at).apply(null, arguments);
        }, ov = a._emscripten_bind_b2RopeTuning_set_bendingModel_1 = function() {
            return (ov = a._emscripten_bind_b2RopeTuning_set_bendingModel_1 = a.asm.bt).apply(null, arguments);
        }, pv = a._emscripten_bind_b2RopeTuning_get_damping_0 = function() {
            return (pv = a._emscripten_bind_b2RopeTuning_get_damping_0 = a.asm.ct).apply(null, arguments);
        }, qv = a._emscripten_bind_b2RopeTuning_set_damping_1 = function() {
            return (qv = a._emscripten_bind_b2RopeTuning_set_damping_1 = a.asm.dt).apply(null, arguments);
        }, rv = a._emscripten_bind_b2RopeTuning_get_stretchStiffness_0 = function() {
            return (rv = a._emscripten_bind_b2RopeTuning_get_stretchStiffness_0 = a.asm.et).apply(null, arguments);
        }, sv = a._emscripten_bind_b2RopeTuning_set_stretchStiffness_1 = function() {
            return (sv = a._emscripten_bind_b2RopeTuning_set_stretchStiffness_1 = a.asm.ft).apply(null, arguments);
        }, tv = a._emscripten_bind_b2RopeTuning_get_stretchHertz_0 = function() {
            return (tv = a._emscripten_bind_b2RopeTuning_get_stretchHertz_0 = a.asm.gt).apply(null, arguments);
        }, uv = a._emscripten_bind_b2RopeTuning_set_stretchHertz_1 = function() {
            return (uv = a._emscripten_bind_b2RopeTuning_set_stretchHertz_1 = a.asm.ht).apply(null, arguments);
        }, vv = a._emscripten_bind_b2RopeTuning_get_stretchDamping_0 = function() {
            return (vv = a._emscripten_bind_b2RopeTuning_get_stretchDamping_0 = a.asm.it).apply(null, arguments);
        }, wv = a._emscripten_bind_b2RopeTuning_set_stretchDamping_1 = function() {
            return (wv = a._emscripten_bind_b2RopeTuning_set_stretchDamping_1 = a.asm.jt).apply(null, arguments);
        }, xv = a._emscripten_bind_b2RopeTuning_get_bendStiffness_0 = function() {
            return (xv = a._emscripten_bind_b2RopeTuning_get_bendStiffness_0 = a.asm.kt).apply(null, arguments);
        }, yv = a._emscripten_bind_b2RopeTuning_set_bendStiffness_1 = function() {
            return (yv = a._emscripten_bind_b2RopeTuning_set_bendStiffness_1 = a.asm.lt).apply(null, arguments);
        }, zv = a._emscripten_bind_b2RopeTuning_get_bendHertz_0 = function() {
            return (zv = a._emscripten_bind_b2RopeTuning_get_bendHertz_0 = a.asm.mt).apply(null, arguments);
        }, Av = a._emscripten_bind_b2RopeTuning_set_bendHertz_1 = function() {
            return (Av = a._emscripten_bind_b2RopeTuning_set_bendHertz_1 = a.asm.nt).apply(null, arguments);
        }, Bv = a._emscripten_bind_b2RopeTuning_get_bendDamping_0 = function() {
            return (Bv = a._emscripten_bind_b2RopeTuning_get_bendDamping_0 = a.asm.ot).apply(null, arguments);
        }, Cv = a._emscripten_bind_b2RopeTuning_set_bendDamping_1 = function() {
            return (Cv = a._emscripten_bind_b2RopeTuning_set_bendDamping_1 = a.asm.pt).apply(null, arguments);
        }, Dv = a._emscripten_bind_b2RopeTuning_get_isometric_0 = function() {
            return (Dv = a._emscripten_bind_b2RopeTuning_get_isometric_0 = a.asm.qt).apply(null, arguments);
        }, Ev = a._emscripten_bind_b2RopeTuning_set_isometric_1 = function() {
            return (Ev = a._emscripten_bind_b2RopeTuning_set_isometric_1 = a.asm.rt).apply(null, arguments);
        }, Fv = a._emscripten_bind_b2RopeTuning_get_fixedEffectiveMass_0 = function() {
            return (Fv = a._emscripten_bind_b2RopeTuning_get_fixedEffectiveMass_0 = a.asm.st).apply(null, arguments);
        }, Gv = a._emscripten_bind_b2RopeTuning_set_fixedEffectiveMass_1 = function() {
            return (Gv = a._emscripten_bind_b2RopeTuning_set_fixedEffectiveMass_1 = a.asm.tt).apply(null, arguments);
        }, Hv = a._emscripten_bind_b2RopeTuning_get_warmStart_0 = function() {
            return (Hv = a._emscripten_bind_b2RopeTuning_get_warmStart_0 = a.asm.ut).apply(null, arguments);
        }, Iv = a._emscripten_bind_b2RopeTuning_set_warmStart_1 = function() {
            return (Iv = a._emscripten_bind_b2RopeTuning_set_warmStart_1 = a.asm.vt).apply(null, arguments);
        }, Jv = a._emscripten_bind_b2RopeTuning___destroy___0 = function() {
            return (Jv = a._emscripten_bind_b2RopeTuning___destroy___0 = a.asm.wt).apply(null, arguments);
        }, Kv = a._emscripten_bind_b2RopeDef_b2RopeDef_0 = function() {
            return (Kv = a._emscripten_bind_b2RopeDef_b2RopeDef_0 = a.asm.xt).apply(null, arguments);
        }, Lv = a._emscripten_bind_b2RopeDef_get_position_0 = function() {
            return (Lv = a._emscripten_bind_b2RopeDef_get_position_0 = a.asm.yt).apply(null, arguments);
        }, Mv = a._emscripten_bind_b2RopeDef_set_position_1 = function() {
            return (Mv = a._emscripten_bind_b2RopeDef_set_position_1 = a.asm.zt).apply(null, arguments);
        }, Nv = a._emscripten_bind_b2RopeDef_get_vertices_0 = function() {
            return (Nv = a._emscripten_bind_b2RopeDef_get_vertices_0 = a.asm.At).apply(null, arguments);
        }, Ov = a._emscripten_bind_b2RopeDef_set_vertices_1 = function() {
            return (Ov = a._emscripten_bind_b2RopeDef_set_vertices_1 = a.asm.Bt).apply(null, arguments);
        }, Pv = a._emscripten_bind_b2RopeDef_get_count_0 = function() {
            return (Pv = a._emscripten_bind_b2RopeDef_get_count_0 = a.asm.Ct).apply(null, arguments);
        }, Qv = a._emscripten_bind_b2RopeDef_set_count_1 = function() {
            return (Qv = a._emscripten_bind_b2RopeDef_set_count_1 = a.asm.Dt).apply(null, arguments);
        }, Rv = a._emscripten_bind_b2RopeDef_get_gravity_0 = function() {
            return (Rv = a._emscripten_bind_b2RopeDef_get_gravity_0 = a.asm.Et).apply(null, arguments);
        }, Sv = a._emscripten_bind_b2RopeDef_set_gravity_1 = function() {
            return (Sv = a._emscripten_bind_b2RopeDef_set_gravity_1 = a.asm.Ft).apply(null, arguments);
        }, Tv = a._emscripten_bind_b2RopeDef_get_tuning_0 = function() {
            return (Tv = a._emscripten_bind_b2RopeDef_get_tuning_0 = a.asm.Gt).apply(null, arguments);
        }, Uv = a._emscripten_bind_b2RopeDef_set_tuning_1 = function() {
            return (Uv = a._emscripten_bind_b2RopeDef_set_tuning_1 = a.asm.Ht).apply(null, arguments);
        }, Vv = a._emscripten_bind_b2RopeDef___destroy___0 = function() {
            return (Vv = a._emscripten_bind_b2RopeDef___destroy___0 = a.asm.It).apply(null, arguments);
        }, Wv = a._emscripten_bind_b2Rope_b2Rope_0 = function() {
            return (Wv = a._emscripten_bind_b2Rope_b2Rope_0 = a.asm.Jt).apply(null, arguments);
        }, Xv = a._emscripten_bind_b2Rope_Create_1 = function() {
            return (Xv = a._emscripten_bind_b2Rope_Create_1 = a.asm.Kt).apply(null, arguments);
        }, Yv = a._emscripten_bind_b2Rope_SetTuning_1 = function() {
            return (Yv = a._emscripten_bind_b2Rope_SetTuning_1 = a.asm.Lt).apply(null, arguments);
        }, Zv = a._emscripten_bind_b2Rope_Step_3 = function() {
            return (Zv = a._emscripten_bind_b2Rope_Step_3 = a.asm.Mt).apply(null, arguments);
        }, $v = a._emscripten_bind_b2Rope_Reset_1 = function() {
            return ($v = a._emscripten_bind_b2Rope_Reset_1 = a.asm.Nt).apply(null, arguments);
        }, aw = a._emscripten_bind_b2Rope_Draw_1 = function() {
            return (aw = a._emscripten_bind_b2Rope_Draw_1 = a.asm.Ot).apply(null, arguments);
        }, bw = a._emscripten_bind_b2Rope___destroy___0 = function() {
            return (bw = a._emscripten_bind_b2Rope___destroy___0 = a.asm.Pt).apply(null, arguments);
        }, cw = a._emscripten_bind_b2ClipVertex_b2ClipVertex_0 = function() {
            return (cw = a._emscripten_bind_b2ClipVertex_b2ClipVertex_0 = a.asm.Qt).apply(null, arguments);
        }, dw = a._emscripten_bind_b2ClipVertex_get_v_0 = function() {
            return (dw = a._emscripten_bind_b2ClipVertex_get_v_0 = a.asm.Rt).apply(null, arguments);
        }, ew = a._emscripten_bind_b2ClipVertex_set_v_1 = function() {
            return (ew = a._emscripten_bind_b2ClipVertex_set_v_1 = a.asm.St).apply(null, arguments);
        }, fw = a._emscripten_bind_b2ClipVertex_get_id_0 = function() {
            return (fw = a._emscripten_bind_b2ClipVertex_get_id_0 = a.asm.Tt).apply(null, arguments);
        }, gw = a._emscripten_bind_b2ClipVertex_set_id_1 = function() {
            return (gw = a._emscripten_bind_b2ClipVertex_set_id_1 = a.asm.Ut).apply(null, arguments);
        }, hw = a._emscripten_bind_b2ClipVertex___destroy___0 = function() {
            return (hw = a._emscripten_bind_b2ClipVertex___destroy___0 = a.asm.Vt).apply(null, arguments);
        }, iw = a._emscripten_enum_b2ShapeType_e_circle = function() {
            return (iw = a._emscripten_enum_b2ShapeType_e_circle = a.asm.Wt).apply(null, arguments);
        }, jw = a._emscripten_enum_b2ShapeType_e_edge = function() {
            return (jw = a._emscripten_enum_b2ShapeType_e_edge = a.asm.Xt).apply(null, arguments);
        }, kw = a._emscripten_enum_b2ShapeType_e_polygon = function() {
            return (kw = a._emscripten_enum_b2ShapeType_e_polygon = a.asm.Yt).apply(null, arguments);
        }, lw = a._emscripten_enum_b2ShapeType_e_chain = function() {
            return (lw = a._emscripten_enum_b2ShapeType_e_chain = a.asm.Zt).apply(null, arguments);
        }, mw = a._emscripten_enum_b2ShapeType_e_typeCount = function() {
            return (mw = a._emscripten_enum_b2ShapeType_e_typeCount = a.asm._t).apply(null, arguments);
        }, nw = a._emscripten_enum_b2BodyType_b2_staticBody = function() {
            return (nw = a._emscripten_enum_b2BodyType_b2_staticBody = a.asm.$t).apply(null, arguments);
        }, ow = a._emscripten_enum_b2BodyType_b2_kinematicBody = function() {
            return (ow = a._emscripten_enum_b2BodyType_b2_kinematicBody = a.asm.au).apply(null, arguments);
        }, pw = a._emscripten_enum_b2BodyType_b2_dynamicBody = function() {
            return (pw = a._emscripten_enum_b2BodyType_b2_dynamicBody = a.asm.bu).apply(null, arguments);
        }, qw = a._emscripten_enum_b2JointType_e_unknownJoint = function() {
            return (qw = a._emscripten_enum_b2JointType_e_unknownJoint = a.asm.cu).apply(null, arguments);
        }, rw = a._emscripten_enum_b2JointType_e_revoluteJoint = function() {
            return (rw = a._emscripten_enum_b2JointType_e_revoluteJoint = a.asm.du).apply(null, arguments);
        }, sw = a._emscripten_enum_b2JointType_e_prismaticJoint = function() {
            return (sw = a._emscripten_enum_b2JointType_e_prismaticJoint = a.asm.eu).apply(null, arguments);
        }, tw = a._emscripten_enum_b2JointType_e_distanceJoint = function() {
            return (tw = a._emscripten_enum_b2JointType_e_distanceJoint = a.asm.fu).apply(null, arguments);
        }, uw = a._emscripten_enum_b2JointType_e_pulleyJoint = function() {
            return (uw = a._emscripten_enum_b2JointType_e_pulleyJoint = a.asm.gu).apply(null, arguments);
        }, vw = a._emscripten_enum_b2JointType_e_mouseJoint = function() {
            return (vw = a._emscripten_enum_b2JointType_e_mouseJoint = a.asm.hu).apply(null, arguments);
        }, ww = a._emscripten_enum_b2JointType_e_gearJoint = function() {
            return (ww = a._emscripten_enum_b2JointType_e_gearJoint = a.asm.iu).apply(null, arguments);
        }, xw = a._emscripten_enum_b2JointType_e_wheelJoint = function() {
            return (xw = a._emscripten_enum_b2JointType_e_wheelJoint = a.asm.ju).apply(null, arguments);
        }, yw = a._emscripten_enum_b2JointType_e_weldJoint = function() {
            return (yw = a._emscripten_enum_b2JointType_e_weldJoint = a.asm.ku).apply(null, arguments);
        }, zw = a._emscripten_enum_b2JointType_e_frictionJoint = function() {
            return (zw = a._emscripten_enum_b2JointType_e_frictionJoint = a.asm.lu).apply(null, arguments);
        }, Aw = a._emscripten_enum_b2JointType_e_ropeJoint = function() {
            return (Aw = a._emscripten_enum_b2JointType_e_ropeJoint = a.asm.mu).apply(null, arguments);
        }, Bw = a._emscripten_enum_b2JointType_e_motorJoint = function() {
            return (Bw = a._emscripten_enum_b2JointType_e_motorJoint = a.asm.nu).apply(null, arguments);
        }, Cw = a._emscripten_enum_b2ContactFeatureType_e_vertex = function() {
            return (Cw = a._emscripten_enum_b2ContactFeatureType_e_vertex = a.asm.ou).apply(null, arguments);
        }, Dw = a._emscripten_enum_b2ContactFeatureType_e_face = function() {
            return (Dw = a._emscripten_enum_b2ContactFeatureType_e_face = a.asm.pu).apply(null, arguments);
        }, Ew = a._emscripten_enum_b2DrawFlag_e_shapeBit = function() {
            return (Ew = a._emscripten_enum_b2DrawFlag_e_shapeBit = a.asm.qu).apply(null, arguments);
        }, Fw = a._emscripten_enum_b2DrawFlag_e_jointBit = function() {
            return (Fw = a._emscripten_enum_b2DrawFlag_e_jointBit = a.asm.ru).apply(null, arguments);
        }, Gw = a._emscripten_enum_b2DrawFlag_e_aabbBit = function() {
            return (Gw = a._emscripten_enum_b2DrawFlag_e_aabbBit = a.asm.su).apply(null, arguments);
        }, Hw = a._emscripten_enum_b2DrawFlag_e_pairBit = function() {
            return (Hw = a._emscripten_enum_b2DrawFlag_e_pairBit = a.asm.tu).apply(null, arguments);
        }, Iw = a._emscripten_enum_b2DrawFlag_e_centerOfMassBit = function() {
            return (Iw = a._emscripten_enum_b2DrawFlag_e_centerOfMassBit = a.asm.uu).apply(null, arguments);
        }, Jw = a._emscripten_enum_b2ManifoldType_e_circles = function() {
            return (Jw = a._emscripten_enum_b2ManifoldType_e_circles = a.asm.vu).apply(null, arguments);
        }, Kw = a._emscripten_enum_b2ManifoldType_e_faceA = function() {
            return (Kw = a._emscripten_enum_b2ManifoldType_e_faceA = a.asm.wu).apply(null, arguments);
        }, Lw = a._emscripten_enum_b2ManifoldType_e_faceB = function() {
            return (Lw = a._emscripten_enum_b2ManifoldType_e_faceB = a.asm.xu).apply(null, arguments);
        }, Mw = a._emscripten_enum_b2PointState_b2_nullState = function() {
            return (Mw = a._emscripten_enum_b2PointState_b2_nullState = a.asm.yu).apply(null, arguments);
        }, Nw = a._emscripten_enum_b2PointState_b2_addState = function() {
            return (Nw = a._emscripten_enum_b2PointState_b2_addState = a.asm.zu).apply(null, arguments);
        }, Ow = a._emscripten_enum_b2PointState_b2_persistState = function() {
            return (Ow = a._emscripten_enum_b2PointState_b2_persistState = a.asm.Au).apply(null, arguments);
        }, Pw = a._emscripten_enum_b2PointState_b2_removeState = function() {
            return (Pw = a._emscripten_enum_b2PointState_b2_removeState = a.asm.Bu).apply(null, arguments);
        }, Qw = a._emscripten_enum_b2StretchingModel_b2_pbdStretchingModel = function() {
            return (Qw = a._emscripten_enum_b2StretchingModel_b2_pbdStretchingModel = a.asm.Cu).apply(null, arguments);
        }, Rw = a._emscripten_enum_b2StretchingModel_b2_xpbdStretchingModel = function() {
            return (Rw = a._emscripten_enum_b2StretchingModel_b2_xpbdStretchingModel = a.asm.Du).apply(null, arguments);
        }, Sw = a._emscripten_enum_b2BendingModel_b2_springAngleBendingModel = function() {
            return (Sw = a._emscripten_enum_b2BendingModel_b2_springAngleBendingModel = a.asm.Eu).apply(null, arguments);
        }, Tw = a._emscripten_enum_b2BendingModel_b2_pbdAngleBendingModel = function() {
            return (Tw = a._emscripten_enum_b2BendingModel_b2_pbdAngleBendingModel = a.asm.Fu).apply(null, arguments);
        }, Uw = a._emscripten_enum_b2BendingModel_b2_xpbdAngleBendingModel = function() {
            return (Uw = a._emscripten_enum_b2BendingModel_b2_xpbdAngleBendingModel = a.asm.Gu).apply(null, arguments);
        }, Vw = a._emscripten_enum_b2BendingModel_b2_pbdDistanceBendingModel = function() {
            return (Vw = a._emscripten_enum_b2BendingModel_b2_pbdDistanceBendingModel = a.asm.Hu).apply(null, arguments);
        }, Ww = a._emscripten_enum_b2BendingModel_b2_pbdHeightBendingModel = function() {
            return (Ww = a._emscripten_enum_b2BendingModel_b2_pbdHeightBendingModel = a.asm.Iu).apply(null, arguments);
        }, Xw = a._emscripten_bind_b2RopeDef_get_masses_0 = function() {
            return (Xw = a._emscripten_bind_b2RopeDef_get_masses_0 = a.asm.Ju).apply(null, arguments);
        }, Yw = a._emscripten_bind_b2RopeDef_set_masses_1 = function() {
            return (Yw = a._emscripten_bind_b2RopeDef_set_masses_1 = a.asm.Ku).apply(null, arguments);
        }, Zw = a._emscripten_bind_b2GetPointStates_4 = function() {
            return (Zw = a._emscripten_bind_b2GetPointStates_4 = a.asm.Lu).apply(null, arguments);
        }, $w = a._emscripten_bind_b2CollideCircles_5 = function() {
            return ($w = a._emscripten_bind_b2CollideCircles_5 = a.asm.Mu).apply(null, arguments);
        }, ax = a._emscripten_bind_b2CollidePolygonAndCircle_5 = function() {
            return (ax = a._emscripten_bind_b2CollidePolygonAndCircle_5 = a.asm.Nu).apply(null, arguments);
        }, bx = a._emscripten_bind_b2CollidePolygons_5 = function() {
            return (bx = a._emscripten_bind_b2CollidePolygons_5 = a.asm.Ou).apply(null, arguments);
        }, cx = a._emscripten_bind_b2CollideEdgeAndCircle_5 = function() {
            return (cx = a._emscripten_bind_b2CollideEdgeAndCircle_5 = a.asm.Pu).apply(null, arguments);
        }, dx = a._emscripten_bind_b2CollideEdgeAndPolygon_5 = function() {
            return (dx = a._emscripten_bind_b2CollideEdgeAndPolygon_5 = a.asm.Qu).apply(null, arguments);
        }, ex = a._emscripten_bind_b2ClipSegmentToLine_5 = function() {
            return (ex = a._emscripten_bind_b2ClipSegmentToLine_5 = a.asm.Ru).apply(null, arguments);
        }, fx = a._emscripten_bind_b2TestOverlap_6 = function() {
            return (fx = a._emscripten_bind_b2TestOverlap_6 = a.asm.Su).apply(null, arguments);
        }, gx = a._emscripten_bind_b2TestOverlap_2 = function() {
            return (gx = a._emscripten_bind_b2TestOverlap_2 = a.asm.Tu).apply(null, arguments);
        }, hx = a._emscripten_bind_b2LinearStiffness_6 = function() {
            return (hx = a._emscripten_bind_b2LinearStiffness_6 = a.asm.Uu).apply(null, arguments);
        }, ix = a._emscripten_bind_b2AngularStiffness_6 = function() {
            return (ix = a._emscripten_bind_b2AngularStiffness_6 = a.asm.Vu).apply(null, arguments);
        };
        a._malloc = function() {
            return (a._malloc = a.asm.Xu).apply(null, arguments);
        };
        a._free = function() {
            return (a._free = a.asm.Yu).apply(null, arguments);
        };
        var jx;
        La = function kx() {
            jx || lx();
            jx || (La = kx);
        };
        function lx() {
            function b() {
                if (!jx && (jx = !0, a.calledRun = !0, !sa)) {
                    Ga = !0;
                    Sa(Ea);
                    aa(a);
                    if (a.onRuntimeInitialized) a.onRuntimeInitialized();
                    if (a.postRun) for("function" == typeof a.postRun && (a.postRun = [
                        a.postRun
                    ]); a.postRun.length;){
                        var c = a.postRun.shift();
                        Fa.unshift(c);
                    }
                    Sa(Fa);
                }
            }
            if (!(0 < Ja)) {
                if (a.preRun) for("function" == typeof a.preRun && (a.preRun = [
                    a.preRun
                ]); a.preRun.length;)Ha();
                Sa(Da);
                0 < Ja || (a.setStatus ? (a.setStatus("Running..."), setTimeout(function() {
                    setTimeout(function() {
                        a.setStatus("");
                    }, 1);
                    b();
                }, 1)) : b());
            }
        }
        a.run = lx;
        if (a.preInit) for("function" == typeof a.preInit && (a.preInit = [
            a.preInit
        ]); 0 < a.preInit.length;)a.preInit.pop()();
        lx();
        function e() {}
        e.prototype = Object.create(e.prototype);
        e.prototype.constructor = e;
        e.prototype.$u = e;
        e.av = {};
        a.WrapperObject = e;
        function g(b) {
            return (b || e).av;
        }
        a.getCache = g;
        function h(b, c) {
            var d = g(c), f = d[b];
            if (f) return f;
            f = Object.create((c || e).prototype);
            f.Zu = b;
            return d[b] = f;
        }
        a.wrapPointer = h;
        a.castObject = function(b, c) {
            return h(b.Zu, c);
        };
        a.NULL = h(0);
        a.destroy = function(b) {
            if (!b.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
            b.__destroy__();
            delete g(b.$u)[b.Zu];
        };
        a.compare = function(b, c) {
            return b.Zu === c.Zu;
        };
        a.getPointer = function(b) {
            return b.Zu;
        };
        a.getClass = function(b) {
            return b.$u;
        };
        var mx = 0, nx = 0, ox = [], px = 0;
        function qx() {
            if (px) {
                for(var b = 0; b < ox.length; b++)a._free(ox[b]);
                ox.length = 0;
                a._free(mx);
                mx = 0;
                nx += px;
                px = 0;
            }
            mx || (nx += 128, (mx = a._malloc(nx)) || na("Assertion failed: undefined"));
        }
        function rx() {
            throw "cannot construct a b2ContactListener, no constructor in IDL";
        }
        rx.prototype = Object.create(e.prototype);
        rx.prototype.constructor = rx;
        rx.prototype.$u = rx;
        rx.av = {};
        a.b2ContactListener = rx;
        rx.prototype.__destroy__ = rx.prototype.bv = function() {
            $a(this.Zu);
        };
        function k() {
            throw "cannot construct a b2Shape, no constructor in IDL";
        }
        k.prototype = Object.create(e.prototype);
        k.prototype.constructor = k;
        k.prototype.$u = k;
        k.av = {};
        a.b2Shape = k;
        k.prototype.GetType = function() {
            return ab(this.Zu);
        };
        k.prototype.GetChildCount = function() {
            return bb(this.Zu);
        };
        k.prototype.TestPoint = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            return !!cb(d, b, c);
        };
        k.prototype.RayCast = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            return !!db(p, b, c, d, f);
        };
        k.prototype.ComputeAABB = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            eb(f, b, c, d);
        };
        k.prototype.ComputeMass = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            fb(d, b, c);
        };
        k.prototype.get_m_type = k.prototype.tv = function() {
            return gb(this.Zu);
        };
        k.prototype.set_m_type = k.prototype.wv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ib(c, b);
        };
        Object.defineProperty(k.prototype, "m_type", {
            get: k.prototype.tv,
            set: k.prototype.wv
        });
        k.prototype.get_m_radius = k.prototype.sv = function() {
            return jb(this.Zu);
        };
        k.prototype.set_m_radius = k.prototype.vv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            kb(c, b);
        };
        Object.defineProperty(k.prototype, "m_radius", {
            get: k.prototype.sv,
            set: k.prototype.vv
        });
        k.prototype.__destroy__ = k.prototype.bv = function() {
            lb(this.Zu);
        };
        function sx() {
            throw "cannot construct a b2RayCastCallback, no constructor in IDL";
        }
        sx.prototype = Object.create(e.prototype);
        sx.prototype.constructor = sx;
        sx.prototype.$u = sx;
        sx.av = {};
        a.b2RayCastCallback = sx;
        sx.prototype.__destroy__ = sx.prototype.bv = function() {
            mb(this.Zu);
        };
        function tx() {
            throw "cannot construct a b2QueryCallback, no constructor in IDL";
        }
        tx.prototype = Object.create(e.prototype);
        tx.prototype.constructor = tx;
        tx.prototype.$u = tx;
        tx.av = {};
        a.b2QueryCallback = tx;
        tx.prototype.__destroy__ = tx.prototype.bv = function() {
            nb(this.Zu);
        };
        function l() {
            this.Zu = ob();
            g(l)[this.Zu] = this;
        }
        l.prototype = Object.create(e.prototype);
        l.prototype.constructor = l;
        l.prototype.$u = l;
        l.av = {};
        a.b2JointDef = l;
        l.prototype.get_type = l.prototype.cv = function() {
            return pb(this.Zu);
        };
        l.prototype.set_type = l.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            qb(c, b);
        };
        Object.defineProperty(l.prototype, "type", {
            get: l.prototype.cv,
            set: l.prototype.ev
        });
        l.prototype.get_userData = l.prototype.dv = function() {
            return h(rb(this.Zu), m);
        };
        l.prototype.set_userData = l.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            vb(c, b);
        };
        Object.defineProperty(l.prototype, "userData", {
            get: l.prototype.dv,
            set: l.prototype.fv
        });
        l.prototype.get_bodyA = l.prototype.gv = function() {
            return h(wb(this.Zu), n);
        };
        l.prototype.set_bodyA = l.prototype.kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            xb(c, b);
        };
        Object.defineProperty(l.prototype, "bodyA", {
            get: l.prototype.gv,
            set: l.prototype.kv
        });
        l.prototype.get_bodyB = l.prototype.hv = function() {
            return h(yb(this.Zu), n);
        };
        l.prototype.set_bodyB = l.prototype.lv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            zb(c, b);
        };
        Object.defineProperty(l.prototype, "bodyB", {
            get: l.prototype.hv,
            set: l.prototype.lv
        });
        l.prototype.get_collideConnected = l.prototype.jv = function() {
            return !!Ab(this.Zu);
        };
        l.prototype.set_collideConnected = l.prototype.mv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Bb(c, b);
        };
        Object.defineProperty(l.prototype, "collideConnected", {
            get: l.prototype.jv,
            set: l.prototype.mv
        });
        l.prototype.__destroy__ = l.prototype.bv = function() {
            Cb(this.Zu);
        };
        function q() {
            throw "cannot construct a b2Joint, no constructor in IDL";
        }
        q.prototype = Object.create(e.prototype);
        q.prototype.constructor = q;
        q.prototype.$u = q;
        q.av = {};
        a.b2Joint = q;
        q.prototype.GetType = function() {
            return Db(this.Zu);
        };
        q.prototype.GetBodyA = function() {
            return h(Eb(this.Zu), n);
        };
        q.prototype.GetBodyB = function() {
            return h(Fb(this.Zu), n);
        };
        q.prototype.GetAnchorA = function() {
            return h(Gb(this.Zu), r);
        };
        q.prototype.GetAnchorB = function() {
            return h(Hb(this.Zu), r);
        };
        q.prototype.GetReactionForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Ib(c, b), r);
        };
        q.prototype.GetReactionTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return Jb(c, b);
        };
        q.prototype.GetNext = function() {
            return h(Kb(this.Zu), q);
        };
        q.prototype.GetUserData = function() {
            return h(Lb(this.Zu), m);
        };
        q.prototype.GetCollideConnected = function() {
            return !!Mb(this.Zu);
        };
        q.prototype.Dump = function() {
            Nb(this.Zu);
        };
        function ux() {
            throw "cannot construct a b2ContactFilter, no constructor in IDL";
        }
        ux.prototype = Object.create(e.prototype);
        ux.prototype.constructor = ux;
        ux.prototype.$u = ux;
        ux.av = {};
        a.b2ContactFilter = ux;
        ux.prototype.__destroy__ = ux.prototype.bv = function() {
            Ob(this.Zu);
        };
        function vx() {
            throw "cannot construct a b2DestructionListenerWrapper, no constructor in IDL";
        }
        vx.prototype = Object.create(e.prototype);
        vx.prototype.constructor = vx;
        vx.prototype.$u = vx;
        vx.av = {};
        a.b2DestructionListenerWrapper = vx;
        vx.prototype.__destroy__ = vx.prototype.bv = function() {
            Pb(this.Zu);
        };
        function wx() {
            throw "cannot construct a b2Draw, no constructor in IDL";
        }
        wx.prototype = Object.create(e.prototype);
        wx.prototype.constructor = wx;
        wx.prototype.$u = wx;
        wx.av = {};
        a.b2Draw = wx;
        wx.prototype.SetFlags = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Qb(c, b);
        };
        wx.prototype.GetFlags = function() {
            return Rb(this.Zu);
        };
        wx.prototype.AppendFlags = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Sb(c, b);
        };
        wx.prototype.ClearFlags = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Tb(c, b);
        };
        wx.prototype.__destroy__ = wx.prototype.bv = function() {
            Ub(this.Zu);
        };
        function xx() {
            throw "cannot construct a VoidPtr, no constructor in IDL";
        }
        xx.prototype = Object.create(e.prototype);
        xx.prototype.constructor = xx;
        xx.prototype.$u = xx;
        xx.av = {};
        a.VoidPtr = xx;
        xx.prototype.__destroy__ = xx.prototype.bv = function() {
            Vb(this.Zu);
        };
        function yx() {
            throw "cannot construct a b2Contact, no constructor in IDL";
        }
        yx.prototype = Object.create(e.prototype);
        yx.prototype.constructor = yx;
        yx.prototype.$u = yx;
        yx.av = {};
        a.b2Contact = yx;
        yx.prototype.GetManifold = function() {
            return h(Wb(this.Zu), t);
        };
        yx.prototype.GetWorldManifold = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Xb(c, b);
        };
        yx.prototype.IsTouching = function() {
            return !!Yb(this.Zu);
        };
        yx.prototype.SetEnabled = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Zb(c, b);
        };
        yx.prototype.IsEnabled = function() {
            return !!$b(this.Zu);
        };
        yx.prototype.GetNext = function() {
            return h(ac(this.Zu), yx);
        };
        yx.prototype.GetFixtureA = function() {
            return h(bc(this.Zu), u);
        };
        yx.prototype.GetChildIndexA = function() {
            return cc(this.Zu);
        };
        yx.prototype.GetFixtureB = function() {
            return h(dc(this.Zu), u);
        };
        yx.prototype.GetChildIndexB = function() {
            return ec(this.Zu);
        };
        yx.prototype.SetFriction = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            fc(c, b);
        };
        yx.prototype.GetFriction = function() {
            return gc(this.Zu);
        };
        yx.prototype.ResetFriction = function() {
            hc(this.Zu);
        };
        yx.prototype.SetRestitution = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ic(c, b);
        };
        yx.prototype.GetRestitution = function() {
            return jc(this.Zu);
        };
        yx.prototype.ResetRestitution = function() {
            kc(this.Zu);
        };
        yx.prototype.SetRestitutionThreshold = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            lc(c, b);
        };
        yx.prototype.GetRestitutionThreshold = function() {
            return mc(this.Zu);
        };
        yx.prototype.ResetRestitutionThreshold = function() {
            nc(this.Zu);
        };
        yx.prototype.SetTangentSpeed = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            oc(c, b);
        };
        yx.prototype.GetTangentSpeed = function() {
            return pc(this.Zu);
        };
        function zx() {
            this.Zu = qc();
            g(zx)[this.Zu] = this;
        }
        zx.prototype = Object.create(rx.prototype);
        zx.prototype.constructor = zx;
        zx.prototype.$u = zx;
        zx.av = {};
        a.JSContactListener = zx;
        zx.prototype.BeginContact = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rc(c, b);
        };
        zx.prototype.EndContact = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            sc(c, b);
        };
        zx.prototype.PreSolve = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            tc(d, b, c);
        };
        zx.prototype.PostSolve = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            uc(d, b, c);
        };
        zx.prototype.__destroy__ = zx.prototype.bv = function() {
            vc(this.Zu);
        };
        function v(b) {
            b && "object" === typeof b && (b = b.Zu);
            this.Zu = wc(b);
            g(v)[this.Zu] = this;
        }
        v.prototype = Object.create(e.prototype);
        v.prototype.constructor = v;
        v.prototype.$u = v;
        v.av = {};
        a.b2World = v;
        v.prototype.SetDestructionListener = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            xc(c, b);
        };
        v.prototype.SetContactFilter = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            yc(c, b);
        };
        v.prototype.SetContactListener = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            zc(c, b);
        };
        v.prototype.SetDebugDraw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ac(c, b);
        };
        v.prototype.CreateBody = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Bc(c, b), n);
        };
        v.prototype.DestroyBody = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Cc(c, b);
        };
        v.prototype.CreateJoint = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Dc(c, b), q);
        };
        v.prototype.DestroyJoint = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ec(c, b);
        };
        v.prototype.Step = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            Fc(f, b, c, d);
        };
        v.prototype.ClearForces = function() {
            Gc(this.Zu);
        };
        v.prototype.DebugDraw = function() {
            Hc(this.Zu);
        };
        v.prototype.QueryAABB = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Ic(d, b, c);
        };
        v.prototype.RayCast = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            Jc(f, b, c, d);
        };
        v.prototype.GetBodyList = function() {
            return h(Kc(this.Zu), n);
        };
        v.prototype.GetJointList = function() {
            return h(Lc(this.Zu), q);
        };
        v.prototype.GetContactList = function() {
            return h(Mc(this.Zu), yx);
        };
        v.prototype.SetAllowSleeping = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Nc(c, b);
        };
        v.prototype.GetAllowSleeping = function() {
            return !!Oc(this.Zu);
        };
        v.prototype.SetWarmStarting = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Pc(c, b);
        };
        v.prototype.GetWarmStarting = function() {
            return !!Qc(this.Zu);
        };
        v.prototype.SetContinuousPhysics = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Rc(c, b);
        };
        v.prototype.GetContinuousPhysics = function() {
            return !!Sc(this.Zu);
        };
        v.prototype.SetSubStepping = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Tc(c, b);
        };
        v.prototype.GetSubStepping = function() {
            return !!Uc(this.Zu);
        };
        v.prototype.GetProxyCount = function() {
            return Vc(this.Zu);
        };
        v.prototype.GetBodyCount = function() {
            return Wc(this.Zu);
        };
        v.prototype.GetJointCount = function() {
            return Xc(this.Zu);
        };
        v.prototype.GetContactCount = function() {
            return Yc(this.Zu);
        };
        v.prototype.GetTreeHeight = function() {
            return Zc(this.Zu);
        };
        v.prototype.GetTreeBalance = function() {
            return $c(this.Zu);
        };
        v.prototype.GetTreeQuality = function() {
            return ad(this.Zu);
        };
        v.prototype.SetGravity = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            bd(c, b);
        };
        v.prototype.GetGravity = function() {
            return h(cd(this.Zu), r);
        };
        v.prototype.IsLocked = function() {
            return !!dd(this.Zu);
        };
        v.prototype.SetAutoClearForces = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ed(c, b);
        };
        v.prototype.GetAutoClearForces = function() {
            return !!fd(this.Zu);
        };
        v.prototype.GetProfile = function() {
            return h(gd(this.Zu), w);
        };
        v.prototype.Dump = function() {
            hd(this.Zu);
        };
        v.prototype.__destroy__ = v.prototype.bv = function() {
            jd(this.Zu);
        };
        function Ax() {
            throw "cannot construct a b2FixtureUserData, no constructor in IDL";
        }
        Ax.prototype = Object.create(e.prototype);
        Ax.prototype.constructor = Ax;
        Ax.prototype.$u = Ax;
        Ax.av = {};
        a.b2FixtureUserData = Ax;
        Ax.prototype.get_pointer = Ax.prototype.Dv = function() {
            return kd(this.Zu);
        };
        Ax.prototype.set_pointer = Ax.prototype.Jv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ld(c, b);
        };
        Object.defineProperty(Ax.prototype, "pointer", {
            get: Ax.prototype.Dv,
            set: Ax.prototype.Jv
        });
        Ax.prototype.__destroy__ = Ax.prototype.bv = function() {
            md(this.Zu);
        };
        function x() {
            this.Zu = nd();
            g(x)[this.Zu] = this;
        }
        x.prototype = Object.create(e.prototype);
        x.prototype.constructor = x;
        x.prototype.$u = x;
        x.av = {};
        a.b2FixtureDef = x;
        x.prototype.get_shape = x.prototype.dy = function() {
            return h(od(this.Zu), k);
        };
        x.prototype.set_shape = x.prototype.cA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            pd(c, b);
        };
        Object.defineProperty(x.prototype, "shape", {
            get: x.prototype.dy,
            set: x.prototype.cA
        });
        x.prototype.get_userData = x.prototype.dv = function() {
            return h(qd(this.Zu), Ax);
        };
        x.prototype.set_userData = x.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rd(c, b);
        };
        Object.defineProperty(x.prototype, "userData", {
            get: x.prototype.dv,
            set: x.prototype.fv
        });
        x.prototype.get_friction = x.prototype.dx = function() {
            return sd(this.Zu);
        };
        x.prototype.set_friction = x.prototype.bz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            td(c, b);
        };
        Object.defineProperty(x.prototype, "friction", {
            get: x.prototype.dx,
            set: x.prototype.bz
        });
        x.prototype.get_restitution = x.prototype.$x = function() {
            return ud(this.Zu);
        };
        x.prototype.set_restitution = x.prototype.Zz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            vd(c, b);
        };
        Object.defineProperty(x.prototype, "restitution", {
            get: x.prototype.$x,
            set: x.prototype.Zz
        });
        x.prototype.get_restitutionThreshold = x.prototype.ay = function() {
            return wd(this.Zu);
        };
        x.prototype.set_restitutionThreshold = x.prototype.$z = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            xd(c, b);
        };
        Object.defineProperty(x.prototype, "restitutionThreshold", {
            get: x.prototype.ay,
            set: x.prototype.$z
        });
        x.prototype.get_density = x.prototype.Xw = function() {
            return yd(this.Zu);
        };
        x.prototype.set_density = x.prototype.Vy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            zd(c, b);
        };
        Object.defineProperty(x.prototype, "density", {
            get: x.prototype.Xw,
            set: x.prototype.Vy
        });
        x.prototype.get_isSensor = x.prototype.mx = function() {
            return !!Ad(this.Zu);
        };
        x.prototype.set_isSensor = x.prototype.kz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Bd(c, b);
        };
        Object.defineProperty(x.prototype, "isSensor", {
            get: x.prototype.mx,
            set: x.prototype.kz
        });
        x.prototype.get_filter = x.prototype.$w = function() {
            return h(Cd(this.Zu), Bx);
        };
        x.prototype.set_filter = x.prototype.Yy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Dd(c, b);
        };
        Object.defineProperty(x.prototype, "filter", {
            get: x.prototype.$w,
            set: x.prototype.Yy
        });
        x.prototype.__destroy__ = x.prototype.bv = function() {
            Ed(this.Zu);
        };
        function u() {
            throw "cannot construct a b2Fixture, no constructor in IDL";
        }
        u.prototype = Object.create(e.prototype);
        u.prototype.constructor = u;
        u.prototype.$u = u;
        u.av = {};
        a.b2Fixture = u;
        u.prototype.GetType = function() {
            return Fd(this.Zu);
        };
        u.prototype.GetShape = function() {
            return h(Gd(this.Zu), k);
        };
        u.prototype.SetSensor = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Hd(c, b);
        };
        u.prototype.IsSensor = function() {
            return !!Id(this.Zu);
        };
        u.prototype.SetFilterData = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Jd(c, b);
        };
        u.prototype.GetFilterData = function() {
            return h(Kd(this.Zu), Bx);
        };
        u.prototype.Refilter = function() {
            Ld(this.Zu);
        };
        u.prototype.GetBody = function() {
            return h(Md(this.Zu), n);
        };
        u.prototype.GetNext = function() {
            return h(Nd(this.Zu), u);
        };
        u.prototype.GetUserData = function() {
            return h(Od(this.Zu), Ax);
        };
        u.prototype.TestPoint = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return !!Pd(c, b);
        };
        u.prototype.RayCast = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            return !!Qd(f, b, c, d);
        };
        u.prototype.GetMassData = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Rd(c, b);
        };
        u.prototype.SetDensity = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Sd(c, b);
        };
        u.prototype.GetDensity = function() {
            return Td(this.Zu);
        };
        u.prototype.GetFriction = function() {
            return Ud(this.Zu);
        };
        u.prototype.SetFriction = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Vd(c, b);
        };
        u.prototype.GetRestitution = function() {
            return Wd(this.Zu);
        };
        u.prototype.SetRestitution = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Xd(c, b);
        };
        u.prototype.GetRestitutionThreshold = function() {
            return Yd(this.Zu);
        };
        u.prototype.SetRestitutionThreshold = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Zd(c, b);
        };
        u.prototype.GetAABB = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h($d(c, b), Cx);
        };
        u.prototype.Dump = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ae(c, b);
        };
        u.prototype.__destroy__ = u.prototype.bv = function() {
            be(this.Zu);
        };
        function Dx(b, c) {
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            this.Zu = void 0 === b ? ce() : void 0 === c ? _emscripten_bind_b2Transform_b2Transform_1(b) : de(b, c);
            g(Dx)[this.Zu] = this;
        }
        Dx.prototype = Object.create(e.prototype);
        Dx.prototype.constructor = Dx;
        Dx.prototype.$u = Dx;
        Dx.av = {};
        a.b2Transform = Dx;
        Dx.prototype.SetIdentity = function() {
            ee(this.Zu);
        };
        Dx.prototype.Set = Dx.prototype.Set = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            fe(d, b, c);
        };
        Dx.prototype.get_p = Dx.prototype.Ux = function() {
            return h(ge(this.Zu), r);
        };
        Dx.prototype.set_p = Dx.prototype.Tz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            he(c, b);
        };
        Object.defineProperty(Dx.prototype, "p", {
            get: Dx.prototype.Ux,
            set: Dx.prototype.Tz
        });
        Dx.prototype.get_q = Dx.prototype.Yx = function() {
            return h(ie(this.Zu), Ex);
        };
        Dx.prototype.set_q = Dx.prototype.Xz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            je(c, b);
        };
        Object.defineProperty(Dx.prototype, "q", {
            get: Dx.prototype.Yx,
            set: Dx.prototype.Xz
        });
        Dx.prototype.__destroy__ = Dx.prototype.bv = function() {
            ke(this.Zu);
        };
        function Fx() {
            this.Zu = le();
            g(Fx)[this.Zu] = this;
        }
        Fx.prototype = Object.create(sx.prototype);
        Fx.prototype.constructor = Fx;
        Fx.prototype.$u = Fx;
        Fx.av = {};
        a.JSRayCastCallback = Fx;
        Fx.prototype.ReportFixture = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            return me(p, b, c, d, f);
        };
        Fx.prototype.__destroy__ = Fx.prototype.bv = function() {
            ne(this.Zu);
        };
        function Gx() {
            this.Zu = oe();
            g(Gx)[this.Zu] = this;
        }
        Gx.prototype = Object.create(tx.prototype);
        Gx.prototype.constructor = Gx;
        Gx.prototype.$u = Gx;
        Gx.av = {};
        a.JSQueryCallback = Gx;
        Gx.prototype.ReportFixture = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return !!pe(c, b);
        };
        Gx.prototype.__destroy__ = Gx.prototype.bv = function() {
            qe(this.Zu);
        };
        function Hx() {
            this.Zu = re();
            g(Hx)[this.Zu] = this;
        }
        Hx.prototype = Object.create(e.prototype);
        Hx.prototype.constructor = Hx;
        Hx.prototype.$u = Hx;
        Hx.av = {};
        a.b2MassData = Hx;
        Hx.prototype.get_mass = Hx.prototype.Mx = function() {
            return se(this.Zu);
        };
        Hx.prototype.set_mass = Hx.prototype.Lz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            te(c, b);
        };
        Object.defineProperty(Hx.prototype, "mass", {
            get: Hx.prototype.Mx,
            set: Hx.prototype.Lz
        });
        Hx.prototype.get_center = Hx.prototype.Sw = function() {
            return h(ue(this.Zu), r);
        };
        Hx.prototype.set_center = Hx.prototype.Qy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ve(c, b);
        };
        Object.defineProperty(Hx.prototype, "center", {
            get: Hx.prototype.Sw,
            set: Hx.prototype.Qy
        });
        Hx.prototype.get_I = Hx.prototype.Cw = function() {
            return we(this.Zu);
        };
        Hx.prototype.set_I = Hx.prototype.Ay = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            xe(c, b);
        };
        Object.defineProperty(Hx.prototype, "I", {
            get: Hx.prototype.Cw,
            set: Hx.prototype.Ay
        });
        Hx.prototype.__destroy__ = Hx.prototype.bv = function() {
            ye(this.Zu);
        };
        function r(b, c) {
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            this.Zu = void 0 === b ? ze() : void 0 === c ? _emscripten_bind_b2Vec2_b2Vec2_1(b) : Ae(b, c);
            g(r)[this.Zu] = this;
        }
        r.prototype = Object.create(e.prototype);
        r.prototype.constructor = r;
        r.prototype.$u = r;
        r.av = {};
        a.b2Vec2 = r;
        r.prototype.SetZero = function() {
            Be(this.Zu);
        };
        r.prototype.Set = r.prototype.Set = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Ce(d, b, c);
        };
        r.prototype.op_add = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            De(c, b);
        };
        r.prototype.op_sub = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ee(c, b);
        };
        r.prototype.op_mul = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Fe(c, b);
        };
        r.prototype.Length = function() {
            return Ge(this.Zu);
        };
        r.prototype.LengthSquared = function() {
            return He(this.Zu);
        };
        r.prototype.Normalize = function() {
            return Ie(this.Zu);
        };
        r.prototype.IsValid = function() {
            return !!Je(this.Zu);
        };
        r.prototype.Skew = function() {
            return h(Ke(this.Zu), r);
        };
        r.prototype.get_x = r.prototype.fw = function() {
            return Le(this.Zu);
        };
        r.prototype.set_x = r.prototype.Aw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Me(c, b);
        };
        Object.defineProperty(r.prototype, "x", {
            get: r.prototype.fw,
            set: r.prototype.Aw
        });
        r.prototype.get_y = r.prototype.gw = function() {
            return Ne(this.Zu);
        };
        r.prototype.set_y = r.prototype.Bw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Oe(c, b);
        };
        Object.defineProperty(r.prototype, "y", {
            get: r.prototype.gw,
            set: r.prototype.Bw
        });
        r.prototype.__destroy__ = r.prototype.bv = function() {
            Pe(this.Zu);
        };
        function y(b, c, d) {
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            this.Zu = void 0 === b ? Qe() : void 0 === c ? _emscripten_bind_b2Vec3_b2Vec3_1(b) : void 0 === d ? _emscripten_bind_b2Vec3_b2Vec3_2(b, c) : Re(b, c, d);
            g(y)[this.Zu] = this;
        }
        y.prototype = Object.create(e.prototype);
        y.prototype.constructor = y;
        y.prototype.$u = y;
        y.av = {};
        a.b2Vec3 = y;
        y.prototype.SetZero = function() {
            Se(this.Zu);
        };
        y.prototype.Set = y.prototype.Set = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            Te(f, b, c, d);
        };
        y.prototype.op_add = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ue(c, b);
        };
        y.prototype.op_sub = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ve(c, b);
        };
        y.prototype.op_mul = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            We(c, b);
        };
        y.prototype.get_x = y.prototype.fw = function() {
            return Xe(this.Zu);
        };
        y.prototype.set_x = y.prototype.Aw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ye(c, b);
        };
        Object.defineProperty(y.prototype, "x", {
            get: y.prototype.fw,
            set: y.prototype.Aw
        });
        y.prototype.get_y = y.prototype.gw = function() {
            return Ze(this.Zu);
        };
        y.prototype.set_y = y.prototype.Bw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            $e(c, b);
        };
        Object.defineProperty(y.prototype, "y", {
            get: y.prototype.gw,
            set: y.prototype.Bw
        });
        y.prototype.get_z = y.prototype.zy = function() {
            return af(this.Zu);
        };
        y.prototype.set_z = y.prototype.yA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            bf(c, b);
        };
        Object.defineProperty(y.prototype, "z", {
            get: y.prototype.zy,
            set: y.prototype.yA
        });
        y.prototype.__destroy__ = y.prototype.bv = function() {
            cf(this.Zu);
        };
        function Ix() {
            throw "cannot construct a b2BodyUserData, no constructor in IDL";
        }
        Ix.prototype = Object.create(e.prototype);
        Ix.prototype.constructor = Ix;
        Ix.prototype.$u = Ix;
        Ix.av = {};
        a.b2BodyUserData = Ix;
        Ix.prototype.get_pointer = Ix.prototype.Dv = function() {
            return df(this.Zu);
        };
        Ix.prototype.set_pointer = Ix.prototype.Jv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ef(c, b);
        };
        Object.defineProperty(Ix.prototype, "pointer", {
            get: Ix.prototype.Dv,
            set: Ix.prototype.Jv
        });
        Ix.prototype.__destroy__ = Ix.prototype.bv = function() {
            ff(this.Zu);
        };
        function n() {
            throw "cannot construct a b2Body, no constructor in IDL";
        }
        n.prototype = Object.create(e.prototype);
        n.prototype.constructor = n;
        n.prototype.$u = n;
        n.av = {};
        a.b2Body = n;
        n.prototype.CreateFixture = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            return void 0 === c ? h(gf(d, b), u) : h(hf(d, b, c), u);
        };
        n.prototype.DestroyFixture = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            jf(c, b);
        };
        n.prototype.SetTransform = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            kf(d, b, c);
        };
        n.prototype.GetTransform = function() {
            return h(lf(this.Zu), Dx);
        };
        n.prototype.GetPosition = function() {
            return h(mf(this.Zu), r);
        };
        n.prototype.GetAngle = function() {
            return nf(this.Zu);
        };
        n.prototype.GetWorldCenter = function() {
            return h(of(this.Zu), r);
        };
        n.prototype.GetLocalCenter = function() {
            return h(pf(this.Zu), r);
        };
        n.prototype.SetLinearVelocity = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            qf(c, b);
        };
        n.prototype.GetLinearVelocity = function() {
            return h(rf(this.Zu), r);
        };
        n.prototype.SetAngularVelocity = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            sf(c, b);
        };
        n.prototype.GetAngularVelocity = function() {
            return tf(this.Zu);
        };
        n.prototype.ApplyForce = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            uf(f, b, c, d);
        };
        n.prototype.ApplyForceToCenter = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            vf(d, b, c);
        };
        n.prototype.ApplyTorque = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            wf(d, b, c);
        };
        n.prototype.ApplyLinearImpulse = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            xf(f, b, c, d);
        };
        n.prototype.ApplyLinearImpulseToCenter = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            yf(d, b, c);
        };
        n.prototype.ApplyAngularImpulse = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            zf(d, b, c);
        };
        n.prototype.GetMass = function() {
            return Af(this.Zu);
        };
        n.prototype.GetInertia = function() {
            return Bf(this.Zu);
        };
        n.prototype.GetMassData = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Cf(c, b);
        };
        n.prototype.SetMassData = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Df(c, b);
        };
        n.prototype.ResetMassData = function() {
            Ef(this.Zu);
        };
        n.prototype.GetWorldPoint = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Ff(c, b), r);
        };
        n.prototype.GetWorldVector = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Gf(c, b), r);
        };
        n.prototype.GetLocalPoint = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Hf(c, b), r);
        };
        n.prototype.GetLocalVector = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(If(c, b), r);
        };
        n.prototype.GetLinearVelocityFromWorldPoint = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Jf(c, b), r);
        };
        n.prototype.GetLinearVelocityFromLocalPoint = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Kf(c, b), r);
        };
        n.prototype.GetLinearDamping = function() {
            return Lf(this.Zu);
        };
        n.prototype.SetLinearDamping = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Mf(c, b);
        };
        n.prototype.GetAngularDamping = function() {
            return Nf(this.Zu);
        };
        n.prototype.SetAngularDamping = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Of(c, b);
        };
        n.prototype.GetGravityScale = function() {
            return Pf(this.Zu);
        };
        n.prototype.SetGravityScale = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Qf(c, b);
        };
        n.prototype.SetType = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Rf(c, b);
        };
        n.prototype.GetType = function() {
            return Sf(this.Zu);
        };
        n.prototype.SetBullet = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Tf(c, b);
        };
        n.prototype.IsBullet = function() {
            return !!Uf(this.Zu);
        };
        n.prototype.SetSleepingAllowed = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Vf(c, b);
        };
        n.prototype.IsSleepingAllowed = function() {
            return !!Wf(this.Zu);
        };
        n.prototype.SetAwake = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Xf(c, b);
        };
        n.prototype.IsAwake = function() {
            return !!Yf(this.Zu);
        };
        n.prototype.SetEnabled = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Zf(c, b);
        };
        n.prototype.IsEnabled = function() {
            return !!$f(this.Zu);
        };
        n.prototype.SetFixedRotation = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ag(c, b);
        };
        n.prototype.IsFixedRotation = function() {
            return !!bg(this.Zu);
        };
        n.prototype.GetFixtureList = function() {
            return h(cg(this.Zu), u);
        };
        n.prototype.GetJointList = function() {
            return h(dg(this.Zu), z);
        };
        n.prototype.GetContactList = function() {
            return h(eg(this.Zu), A);
        };
        n.prototype.GetNext = function() {
            return h(fg(this.Zu), n);
        };
        n.prototype.GetUserData = function() {
            return h(gg(this.Zu), Ix);
        };
        n.prototype.GetWorld = function() {
            return h(hg(this.Zu), v);
        };
        n.prototype.Dump = function() {
            ig(this.Zu);
        };
        function B() {
            this.Zu = jg();
            g(B)[this.Zu] = this;
        }
        B.prototype = Object.create(e.prototype);
        B.prototype.constructor = B;
        B.prototype.$u = B;
        B.av = {};
        a.b2BodyDef = B;
        B.prototype.get_type = B.prototype.cv = function() {
            return kg(this.Zu);
        };
        B.prototype.set_type = B.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            lg(c, b);
        };
        Object.defineProperty(B.prototype, "type", {
            get: B.prototype.cv,
            set: B.prototype.ev
        });
        B.prototype.get_position = B.prototype.bw = function() {
            return h(mg(this.Zu), r);
        };
        B.prototype.set_position = B.prototype.ww = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ng(c, b);
        };
        Object.defineProperty(B.prototype, "position", {
            get: B.prototype.bw,
            set: B.prototype.ww
        });
        B.prototype.get_angle = B.prototype.Ew = function() {
            return og(this.Zu);
        };
        B.prototype.set_angle = B.prototype.Cy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            pg(c, b);
        };
        Object.defineProperty(B.prototype, "angle", {
            get: B.prototype.Ew,
            set: B.prototype.Cy
        });
        B.prototype.get_linearVelocity = B.prototype.xx = function() {
            return h(qg(this.Zu), r);
        };
        B.prototype.set_linearVelocity = B.prototype.wz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rg(c, b);
        };
        Object.defineProperty(B.prototype, "linearVelocity", {
            get: B.prototype.xx,
            set: B.prototype.wz
        });
        B.prototype.get_angularVelocity = B.prototype.Hw = function() {
            return sg(this.Zu);
        };
        B.prototype.set_angularVelocity = B.prototype.Fy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            tg(c, b);
        };
        Object.defineProperty(B.prototype, "angularVelocity", {
            get: B.prototype.Hw,
            set: B.prototype.Fy
        });
        B.prototype.get_linearDamping = B.prototype.vx = function() {
            return ug(this.Zu);
        };
        B.prototype.set_linearDamping = B.prototype.uz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            vg(c, b);
        };
        Object.defineProperty(B.prototype, "linearDamping", {
            get: B.prototype.vx,
            set: B.prototype.uz
        });
        B.prototype.get_angularDamping = B.prototype.Fw = function() {
            return wg(this.Zu);
        };
        B.prototype.set_angularDamping = B.prototype.Dy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            xg(c, b);
        };
        Object.defineProperty(B.prototype, "angularDamping", {
            get: B.prototype.Fw,
            set: B.prototype.Dy
        });
        B.prototype.get_allowSleep = B.prototype.Dw = function() {
            return !!yg(this.Zu);
        };
        B.prototype.set_allowSleep = B.prototype.By = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            zg(c, b);
        };
        Object.defineProperty(B.prototype, "allowSleep", {
            get: B.prototype.Dw,
            set: B.prototype.By
        });
        B.prototype.get_awake = B.prototype.Iw = function() {
            return !!Ag(this.Zu);
        };
        B.prototype.set_awake = B.prototype.Gy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Bg(c, b);
        };
        Object.defineProperty(B.prototype, "awake", {
            get: B.prototype.Iw,
            set: B.prototype.Gy
        });
        B.prototype.get_fixedRotation = B.prototype.bx = function() {
            return !!Cg(this.Zu);
        };
        B.prototype.set_fixedRotation = B.prototype.$y = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Dg(c, b);
        };
        Object.defineProperty(B.prototype, "fixedRotation", {
            get: B.prototype.bx,
            set: B.prototype.$y
        });
        B.prototype.get_bullet = B.prototype.Pw = function() {
            return !!Eg(this.Zu);
        };
        B.prototype.set_bullet = B.prototype.Ny = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Fg(c, b);
        };
        Object.defineProperty(B.prototype, "bullet", {
            get: B.prototype.Pw,
            set: B.prototype.Ny
        });
        B.prototype.get_enabled = B.prototype.Yw = function() {
            return !!Gg(this.Zu);
        };
        B.prototype.set_enabled = B.prototype.Wy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Hg(c, b);
        };
        Object.defineProperty(B.prototype, "enabled", {
            get: B.prototype.Yw,
            set: B.prototype.Wy
        });
        B.prototype.get_userData = B.prototype.dv = function() {
            return h(Ig(this.Zu), Ix);
        };
        B.prototype.set_userData = B.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Jg(c, b);
        };
        Object.defineProperty(B.prototype, "userData", {
            get: B.prototype.dv,
            set: B.prototype.fv
        });
        B.prototype.get_gravityScale = B.prototype.gx = function() {
            return Kg(this.Zu);
        };
        B.prototype.set_gravityScale = B.prototype.ez = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Lg(c, b);
        };
        Object.defineProperty(B.prototype, "gravityScale", {
            get: B.prototype.gx,
            set: B.prototype.ez
        });
        B.prototype.__destroy__ = B.prototype.bv = function() {
            Mg(this.Zu);
        };
        function Bx() {
            this.Zu = Ng();
            g(Bx)[this.Zu] = this;
        }
        Bx.prototype = Object.create(e.prototype);
        Bx.prototype.constructor = Bx;
        Bx.prototype.$u = Bx;
        Bx.av = {};
        a.b2Filter = Bx;
        Bx.prototype.get_categoryBits = Bx.prototype.Rw = function() {
            return Og(this.Zu);
        };
        Bx.prototype.set_categoryBits = Bx.prototype.Py = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Pg(c, b);
        };
        Object.defineProperty(Bx.prototype, "categoryBits", {
            get: Bx.prototype.Rw,
            set: Bx.prototype.Py
        });
        Bx.prototype.get_maskBits = Bx.prototype.Lx = function() {
            return Qg(this.Zu);
        };
        Bx.prototype.set_maskBits = Bx.prototype.Kz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Rg(c, b);
        };
        Object.defineProperty(Bx.prototype, "maskBits", {
            get: Bx.prototype.Lx,
            set: Bx.prototype.Kz
        });
        Bx.prototype.get_groupIndex = Bx.prototype.jx = function() {
            return Sg(this.Zu);
        };
        Bx.prototype.set_groupIndex = Bx.prototype.hz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Tg(c, b);
        };
        Object.defineProperty(Bx.prototype, "groupIndex", {
            get: Bx.prototype.jx,
            set: Bx.prototype.hz
        });
        Bx.prototype.__destroy__ = Bx.prototype.bv = function() {
            Ug(this.Zu);
        };
        function Cx() {
            this.Zu = Vg();
            g(Cx)[this.Zu] = this;
        }
        Cx.prototype = Object.create(e.prototype);
        Cx.prototype.constructor = Cx;
        Cx.prototype.$u = Cx;
        Cx.av = {};
        a.b2AABB = Cx;
        Cx.prototype.IsValid = function() {
            return !!Wg(this.Zu);
        };
        Cx.prototype.GetCenter = function() {
            return h(Xg(this.Zu), r);
        };
        Cx.prototype.GetExtents = function() {
            return h(Yg(this.Zu), r);
        };
        Cx.prototype.GetPerimeter = function() {
            return Zg(this.Zu);
        };
        Cx.prototype.Combine = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            void 0 === c ? $g(d, b) : ah(d, b, c);
        };
        Cx.prototype.Contains = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return !!bh(c, b);
        };
        Cx.prototype.RayCast = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            return !!ch(d, b, c);
        };
        Cx.prototype.get_lowerBound = Cx.prototype.Ax = function() {
            return h(dh(this.Zu), r);
        };
        Cx.prototype.set_lowerBound = Cx.prototype.zz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            eh(c, b);
        };
        Object.defineProperty(Cx.prototype, "lowerBound", {
            get: Cx.prototype.Ax,
            set: Cx.prototype.zz
        });
        Cx.prototype.get_upperBound = Cx.prototype.vy = function() {
            return h(fh(this.Zu), r);
        };
        Cx.prototype.set_upperBound = Cx.prototype.uA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            gh(c, b);
        };
        Object.defineProperty(Cx.prototype, "upperBound", {
            get: Cx.prototype.vy,
            set: Cx.prototype.uA
        });
        Cx.prototype.__destroy__ = Cx.prototype.bv = function() {
            hh(this.Zu);
        };
        function C() {
            this.Zu = ih();
            g(C)[this.Zu] = this;
        }
        C.prototype = Object.create(k.prototype);
        C.prototype.constructor = C;
        C.prototype.$u = C;
        C.av = {};
        a.b2CircleShape = C;
        C.prototype.GetType = function() {
            return jh(this.Zu);
        };
        C.prototype.GetChildCount = function() {
            return kh(this.Zu);
        };
        C.prototype.TestPoint = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            return !!lh(d, b, c);
        };
        C.prototype.RayCast = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            return !!mh(p, b, c, d, f);
        };
        C.prototype.ComputeAABB = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            nh(f, b, c, d);
        };
        C.prototype.ComputeMass = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            oh(d, b, c);
        };
        C.prototype.get_m_p = C.prototype.Fx = function() {
            return h(ph(this.Zu), r);
        };
        C.prototype.set_m_p = C.prototype.Ez = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            qh(c, b);
        };
        Object.defineProperty(C.prototype, "m_p", {
            get: C.prototype.Fx,
            set: C.prototype.Ez
        });
        C.prototype.get_m_type = C.prototype.tv = function() {
            return rh(this.Zu);
        };
        C.prototype.set_m_type = C.prototype.wv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            sh(c, b);
        };
        Object.defineProperty(C.prototype, "m_type", {
            get: C.prototype.tv,
            set: C.prototype.wv
        });
        C.prototype.get_m_radius = C.prototype.sv = function() {
            return th(this.Zu);
        };
        C.prototype.set_m_radius = C.prototype.vv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            uh(c, b);
        };
        Object.defineProperty(C.prototype, "m_radius", {
            get: C.prototype.sv,
            set: C.prototype.vv
        });
        C.prototype.__destroy__ = C.prototype.bv = function() {
            vh(this.Zu);
        };
        function D() {
            this.Zu = wh();
            g(D)[this.Zu] = this;
        }
        D.prototype = Object.create(k.prototype);
        D.prototype.constructor = D;
        D.prototype.$u = D;
        D.av = {};
        a.b2EdgeShape = D;
        D.prototype.SetOneSided = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            xh(p, b, c, d, f);
        };
        D.prototype.SetTwoSided = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            yh(d, b, c);
        };
        D.prototype.GetType = function() {
            return zh(this.Zu);
        };
        D.prototype.GetChildCount = function() {
            return Ah(this.Zu);
        };
        D.prototype.TestPoint = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            return !!Bh(d, b, c);
        };
        D.prototype.RayCast = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            return !!Ch(p, b, c, d, f);
        };
        D.prototype.ComputeAABB = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            Dh(f, b, c, d);
        };
        D.prototype.ComputeMass = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Eh(d, b, c);
        };
        D.prototype.get_m_vertex1 = D.prototype.Ix = function() {
            return h(Fh(this.Zu), r);
        };
        D.prototype.set_m_vertex1 = D.prototype.Hz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Gh(c, b);
        };
        Object.defineProperty(D.prototype, "m_vertex1", {
            get: D.prototype.Ix,
            set: D.prototype.Hz
        });
        D.prototype.get_m_vertex2 = D.prototype.Jx = function() {
            return h(Hh(this.Zu), r);
        };
        D.prototype.set_m_vertex2 = D.prototype.Iz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ih(c, b);
        };
        Object.defineProperty(D.prototype, "m_vertex2", {
            get: D.prototype.Jx,
            set: D.prototype.Iz
        });
        D.prototype.get_m_vertex0 = D.prototype.Hx = function() {
            return h(Jh(this.Zu), r);
        };
        D.prototype.set_m_vertex0 = D.prototype.Gz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Kh(c, b);
        };
        Object.defineProperty(D.prototype, "m_vertex0", {
            get: D.prototype.Hx,
            set: D.prototype.Gz
        });
        D.prototype.get_m_vertex3 = D.prototype.Kx = function() {
            return h(Lh(this.Zu), r);
        };
        D.prototype.set_m_vertex3 = D.prototype.Jz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Mh(c, b);
        };
        Object.defineProperty(D.prototype, "m_vertex3", {
            get: D.prototype.Kx,
            set: D.prototype.Jz
        });
        D.prototype.get_m_oneSided = D.prototype.Ex = function() {
            return !!Nh(this.Zu);
        };
        D.prototype.set_m_oneSided = D.prototype.Dz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Oh(c, b);
        };
        Object.defineProperty(D.prototype, "m_oneSided", {
            get: D.prototype.Ex,
            set: D.prototype.Dz
        });
        D.prototype.get_m_type = D.prototype.tv = function() {
            return Ph(this.Zu);
        };
        D.prototype.set_m_type = D.prototype.wv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Qh(c, b);
        };
        Object.defineProperty(D.prototype, "m_type", {
            get: D.prototype.tv,
            set: D.prototype.wv
        });
        D.prototype.get_m_radius = D.prototype.sv = function() {
            return Rh(this.Zu);
        };
        D.prototype.set_m_radius = D.prototype.vv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Sh(c, b);
        };
        Object.defineProperty(D.prototype, "m_radius", {
            get: D.prototype.sv,
            set: D.prototype.vv
        });
        D.prototype.__destroy__ = D.prototype.bv = function() {
            Th(this.Zu);
        };
        function m() {
            throw "cannot construct a b2JointUserData, no constructor in IDL";
        }
        m.prototype = Object.create(e.prototype);
        m.prototype.constructor = m;
        m.prototype.$u = m;
        m.av = {};
        a.b2JointUserData = m;
        m.prototype.get_pointer = m.prototype.Dv = function() {
            return Uh(this.Zu);
        };
        m.prototype.set_pointer = m.prototype.Jv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Vh(c, b);
        };
        Object.defineProperty(m.prototype, "pointer", {
            get: m.prototype.Dv,
            set: m.prototype.Jv
        });
        m.prototype.__destroy__ = m.prototype.bv = function() {
            Wh(this.Zu);
        };
        function Jx() {
            throw "cannot construct a b2WeldJoint, no constructor in IDL";
        }
        Jx.prototype = Object.create(q.prototype);
        Jx.prototype.constructor = Jx;
        Jx.prototype.$u = Jx;
        Jx.av = {};
        a.b2WeldJoint = Jx;
        Jx.prototype.GetLocalAnchorA = function() {
            return h(Xh(this.Zu), r);
        };
        Jx.prototype.GetLocalAnchorB = function() {
            return h(Yh(this.Zu), r);
        };
        Jx.prototype.GetReferenceAngle = function() {
            return Zh(this.Zu);
        };
        Jx.prototype.SetStiffness = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            $h(c, b);
        };
        Jx.prototype.GetStiffness = function() {
            return ai(this.Zu);
        };
        Jx.prototype.SetDamping = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            bi(c, b);
        };
        Jx.prototype.GetDamping = function() {
            return ci(this.Zu);
        };
        Jx.prototype.Dump = function() {
            di(this.Zu);
        };
        Jx.prototype.GetType = function() {
            return ei(this.Zu);
        };
        Jx.prototype.GetBodyA = function() {
            return h(fi(this.Zu), n);
        };
        Jx.prototype.GetBodyB = function() {
            return h(gi(this.Zu), n);
        };
        Jx.prototype.GetAnchorA = function() {
            return h(hi(this.Zu), r);
        };
        Jx.prototype.GetAnchorB = function() {
            return h(ii(this.Zu), r);
        };
        Jx.prototype.GetReactionForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(ji(c, b), r);
        };
        Jx.prototype.GetReactionTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return ki(c, b);
        };
        Jx.prototype.GetNext = function() {
            return h(li(this.Zu), q);
        };
        Jx.prototype.GetUserData = function() {
            return h(mi(this.Zu), m);
        };
        Jx.prototype.GetCollideConnected = function() {
            return !!ni(this.Zu);
        };
        Jx.prototype.__destroy__ = Jx.prototype.bv = function() {
            oi(this.Zu);
        };
        function E() {
            this.Zu = pi();
            g(E)[this.Zu] = this;
        }
        E.prototype = Object.create(l.prototype);
        E.prototype.constructor = E;
        E.prototype.$u = E;
        E.av = {};
        a.b2WeldJointDef = E;
        E.prototype.Initialize = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            qi(f, b, c, d);
        };
        E.prototype.get_localAnchorA = E.prototype.nv = function() {
            return h(ri(this.Zu), r);
        };
        E.prototype.set_localAnchorA = E.prototype.pv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            si(c, b);
        };
        Object.defineProperty(E.prototype, "localAnchorA", {
            get: E.prototype.nv,
            set: E.prototype.pv
        });
        E.prototype.get_localAnchorB = E.prototype.ov = function() {
            return h(ti(this.Zu), r);
        };
        E.prototype.set_localAnchorB = E.prototype.qv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ui(c, b);
        };
        Object.defineProperty(E.prototype, "localAnchorB", {
            get: E.prototype.ov,
            set: E.prototype.qv
        });
        E.prototype.get_referenceAngle = E.prototype.Ev = function() {
            return vi(this.Zu);
        };
        E.prototype.set_referenceAngle = E.prototype.Kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            wi(c, b);
        };
        Object.defineProperty(E.prototype, "referenceAngle", {
            get: E.prototype.Ev,
            set: E.prototype.Kv
        });
        E.prototype.get_stiffness = E.prototype.xv = function() {
            return xi(this.Zu);
        };
        E.prototype.set_stiffness = E.prototype.yv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            yi(c, b);
        };
        Object.defineProperty(E.prototype, "stiffness", {
            get: E.prototype.xv,
            set: E.prototype.yv
        });
        E.prototype.get_damping = E.prototype.rv = function() {
            return zi(this.Zu);
        };
        E.prototype.set_damping = E.prototype.uv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ai(c, b);
        };
        Object.defineProperty(E.prototype, "damping", {
            get: E.prototype.rv,
            set: E.prototype.uv
        });
        E.prototype.get_type = E.prototype.cv = function() {
            return Bi(this.Zu);
        };
        E.prototype.set_type = E.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ci(c, b);
        };
        Object.defineProperty(E.prototype, "type", {
            get: E.prototype.cv,
            set: E.prototype.ev
        });
        E.prototype.get_userData = E.prototype.dv = function() {
            return h(Di(this.Zu), m);
        };
        E.prototype.set_userData = E.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ei(c, b);
        };
        Object.defineProperty(E.prototype, "userData", {
            get: E.prototype.dv,
            set: E.prototype.fv
        });
        E.prototype.get_bodyA = E.prototype.gv = function() {
            return h(Fi(this.Zu), n);
        };
        E.prototype.set_bodyA = E.prototype.kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Gi(c, b);
        };
        Object.defineProperty(E.prototype, "bodyA", {
            get: E.prototype.gv,
            set: E.prototype.kv
        });
        E.prototype.get_bodyB = E.prototype.hv = function() {
            return h(Hi(this.Zu), n);
        };
        E.prototype.set_bodyB = E.prototype.lv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ii(c, b);
        };
        Object.defineProperty(E.prototype, "bodyB", {
            get: E.prototype.hv,
            set: E.prototype.lv
        });
        E.prototype.get_collideConnected = E.prototype.jv = function() {
            return !!Ji(this.Zu);
        };
        E.prototype.set_collideConnected = E.prototype.mv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ki(c, b);
        };
        Object.defineProperty(E.prototype, "collideConnected", {
            get: E.prototype.jv,
            set: E.prototype.mv
        });
        E.prototype.__destroy__ = E.prototype.bv = function() {
            Li(this.Zu);
        };
        function F() {
            this.Zu = Mi();
            g(F)[this.Zu] = this;
        }
        F.prototype = Object.create(k.prototype);
        F.prototype.constructor = F;
        F.prototype.$u = F;
        F.av = {};
        a.b2ChainShape = F;
        F.prototype.Clear = function() {
            Ni(this.Zu);
        };
        F.prototype.CreateLoop = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Oi(d, b, c);
        };
        F.prototype.CreateChain = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            Pi(p, b, c, d, f);
        };
        F.prototype.GetChildEdge = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Qi(d, b, c);
        };
        F.prototype.GetType = function() {
            return Ri(this.Zu);
        };
        F.prototype.GetChildCount = function() {
            return Si(this.Zu);
        };
        F.prototype.TestPoint = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            return !!Ti(d, b, c);
        };
        F.prototype.RayCast = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            return !!Ui(p, b, c, d, f);
        };
        F.prototype.ComputeAABB = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            Vi(f, b, c, d);
        };
        F.prototype.ComputeMass = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Wi(d, b, c);
        };
        F.prototype.get_m_vertices = F.prototype.Vv = function() {
            return h(Xi(this.Zu), r);
        };
        F.prototype.set_m_vertices = F.prototype.pw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Yi(c, b);
        };
        Object.defineProperty(F.prototype, "m_vertices", {
            get: F.prototype.Vv,
            set: F.prototype.pw
        });
        F.prototype.get_m_count = F.prototype.Uv = function() {
            return Zi(this.Zu);
        };
        F.prototype.set_m_count = F.prototype.ow = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            $i(c, b);
        };
        Object.defineProperty(F.prototype, "m_count", {
            get: F.prototype.Uv,
            set: F.prototype.ow
        });
        F.prototype.get_m_prevVertex = F.prototype.Gx = function() {
            return h(aj(this.Zu), r);
        };
        F.prototype.set_m_prevVertex = F.prototype.Fz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            bj(c, b);
        };
        Object.defineProperty(F.prototype, "m_prevVertex", {
            get: F.prototype.Gx,
            set: F.prototype.Fz
        });
        F.prototype.get_m_nextVertex = F.prototype.Cx = function() {
            return h(cj(this.Zu), r);
        };
        F.prototype.set_m_nextVertex = F.prototype.Bz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            dj(c, b);
        };
        Object.defineProperty(F.prototype, "m_nextVertex", {
            get: F.prototype.Cx,
            set: F.prototype.Bz
        });
        F.prototype.get_m_type = F.prototype.tv = function() {
            return ej(this.Zu);
        };
        F.prototype.set_m_type = F.prototype.wv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            fj(c, b);
        };
        Object.defineProperty(F.prototype, "m_type", {
            get: F.prototype.tv,
            set: F.prototype.wv
        });
        F.prototype.get_m_radius = F.prototype.sv = function() {
            return gj(this.Zu);
        };
        F.prototype.set_m_radius = F.prototype.vv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            hj(c, b);
        };
        Object.defineProperty(F.prototype, "m_radius", {
            get: F.prototype.sv,
            set: F.prototype.vv
        });
        F.prototype.__destroy__ = F.prototype.bv = function() {
            ij(this.Zu);
        };
        function Kx(b, c, d) {
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            this.Zu = void 0 === b ? jj() : void 0 === c ? _emscripten_bind_b2Color_b2Color_1(b) : void 0 === d ? _emscripten_bind_b2Color_b2Color_2(b, c) : kj(b, c, d);
            g(Kx)[this.Zu] = this;
        }
        Kx.prototype = Object.create(e.prototype);
        Kx.prototype.constructor = Kx;
        Kx.prototype.$u = Kx;
        Kx.av = {};
        a.b2Color = Kx;
        Kx.prototype.Set = Kx.prototype.Set = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            lj(f, b, c, d);
        };
        Kx.prototype.get_r = Kx.prototype.Zx = function() {
            return mj(this.Zu);
        };
        Kx.prototype.set_r = Kx.prototype.Yz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            nj(c, b);
        };
        Object.defineProperty(Kx.prototype, "r", {
            get: Kx.prototype.Zx,
            set: Kx.prototype.Yz
        });
        Kx.prototype.get_g = Kx.prototype.ex = function() {
            return oj(this.Zu);
        };
        Kx.prototype.set_g = Kx.prototype.cz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            pj(c, b);
        };
        Object.defineProperty(Kx.prototype, "g", {
            get: Kx.prototype.ex,
            set: Kx.prototype.cz
        });
        Kx.prototype.get_b = Kx.prototype.Jw = function() {
            return qj(this.Zu);
        };
        Kx.prototype.set_b = Kx.prototype.Hy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rj(c, b);
        };
        Object.defineProperty(Kx.prototype, "b", {
            get: Kx.prototype.Jw,
            set: Kx.prototype.Hy
        });
        Kx.prototype.__destroy__ = Kx.prototype.bv = function() {
            sj(this.Zu);
        };
        function A() {
            this.Zu = tj();
            g(A)[this.Zu] = this;
        }
        A.prototype = Object.create(e.prototype);
        A.prototype.constructor = A;
        A.prototype.$u = A;
        A.av = {};
        a.b2ContactEdge = A;
        A.prototype.get_other = A.prototype.$v = function() {
            return h(uj(this.Zu), n);
        };
        A.prototype.set_other = A.prototype.uw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            vj(c, b);
        };
        Object.defineProperty(A.prototype, "other", {
            get: A.prototype.$v,
            set: A.prototype.uw
        });
        A.prototype.get_contact = A.prototype.Vw = function() {
            return h(wj(this.Zu), yx);
        };
        A.prototype.set_contact = A.prototype.Ty = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            xj(c, b);
        };
        Object.defineProperty(A.prototype, "contact", {
            get: A.prototype.Vw,
            set: A.prototype.Ty
        });
        A.prototype.get_prev = A.prototype.cw = function() {
            return h(yj(this.Zu), A);
        };
        A.prototype.set_prev = A.prototype.xw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            zj(c, b);
        };
        Object.defineProperty(A.prototype, "prev", {
            get: A.prototype.cw,
            set: A.prototype.xw
        });
        A.prototype.get_next = A.prototype.Yv = function() {
            return h(Aj(this.Zu), A);
        };
        A.prototype.set_next = A.prototype.sw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Bj(c, b);
        };
        Object.defineProperty(A.prototype, "next", {
            get: A.prototype.Yv,
            set: A.prototype.sw
        });
        A.prototype.__destroy__ = A.prototype.bv = function() {
            Cj(this.Zu);
        };
        function G() {
            throw "cannot construct a b2ContactFeature, no constructor in IDL";
        }
        G.prototype = Object.create(e.prototype);
        G.prototype.constructor = G;
        G.prototype.$u = G;
        G.av = {};
        a.b2ContactFeature = G;
        G.prototype.get_indexA = G.prototype.kx = function() {
            return Dj(this.Zu);
        };
        G.prototype.set_indexA = G.prototype.iz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ej(c, b);
        };
        Object.defineProperty(G.prototype, "indexA", {
            get: G.prototype.kx,
            set: G.prototype.iz
        });
        G.prototype.get_indexB = G.prototype.lx = function() {
            return Fj(this.Zu);
        };
        G.prototype.set_indexB = G.prototype.jz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Gj(c, b);
        };
        Object.defineProperty(G.prototype, "indexB", {
            get: G.prototype.lx,
            set: G.prototype.jz
        });
        G.prototype.get_typeA = G.prototype.sy = function() {
            return Hj(this.Zu);
        };
        G.prototype.set_typeA = G.prototype.rA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ij(c, b);
        };
        Object.defineProperty(G.prototype, "typeA", {
            get: G.prototype.sy,
            set: G.prototype.rA
        });
        G.prototype.get_typeB = G.prototype.ty = function() {
            return Jj(this.Zu);
        };
        G.prototype.set_typeB = G.prototype.sA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Kj(c, b);
        };
        Object.defineProperty(G.prototype, "typeB", {
            get: G.prototype.ty,
            set: G.prototype.sA
        });
        G.prototype.__destroy__ = G.prototype.bv = function() {
            Lj(this.Zu);
        };
        function Lx() {
            this.Zu = Mj();
            g(Lx)[this.Zu] = this;
        }
        Lx.prototype = Object.create(ux.prototype);
        Lx.prototype.constructor = Lx;
        Lx.prototype.$u = Lx;
        Lx.av = {};
        a.JSContactFilter = Lx;
        Lx.prototype.ShouldCollide = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            return !!Nj(d, b, c);
        };
        Lx.prototype.__destroy__ = Lx.prototype.bv = function() {
            Oj(this.Zu);
        };
        function Mx() {
            throw "cannot construct a b2ContactID, no constructor in IDL";
        }
        Mx.prototype = Object.create(e.prototype);
        Mx.prototype.constructor = Mx;
        Mx.prototype.$u = Mx;
        Mx.av = {};
        a.b2ContactID = Mx;
        Mx.prototype.get_cf = Mx.prototype.Tw = function() {
            return h(Pj(this.Zu), G);
        };
        Mx.prototype.set_cf = Mx.prototype.Ry = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Qj(c, b);
        };
        Object.defineProperty(Mx.prototype, "cf", {
            get: Mx.prototype.Tw,
            set: Mx.prototype.Ry
        });
        Mx.prototype.get_key = Mx.prototype.rx = function() {
            return Rj(this.Zu);
        };
        Mx.prototype.set_key = Mx.prototype.pz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Sj(c, b);
        };
        Object.defineProperty(Mx.prototype, "key", {
            get: Mx.prototype.rx,
            set: Mx.prototype.pz
        });
        Mx.prototype.__destroy__ = Mx.prototype.bv = function() {
            Tj(this.Zu);
        };
        function Nx() {
            throw "cannot construct a b2ContactImpulse, no constructor in IDL";
        }
        Nx.prototype = Object.create(e.prototype);
        Nx.prototype.constructor = Nx;
        Nx.prototype.$u = Nx;
        Nx.av = {};
        a.b2ContactImpulse = Nx;
        Nx.prototype.get_normalImpulses = Nx.prototype.Tx = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return Uj(c, b);
        };
        Nx.prototype.set_normalImpulses = Nx.prototype.Sz = function(b, c) {
            var d = this.Zu;
            qx();
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Vj(d, b, c);
        };
        Object.defineProperty(Nx.prototype, "normalImpulses", {
            get: Nx.prototype.Tx,
            set: Nx.prototype.Sz
        });
        Nx.prototype.get_tangentImpulses = Nx.prototype.py = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return Wj(c, b);
        };
        Nx.prototype.set_tangentImpulses = Nx.prototype.oA = function(b, c) {
            var d = this.Zu;
            qx();
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Xj(d, b, c);
        };
        Object.defineProperty(Nx.prototype, "tangentImpulses", {
            get: Nx.prototype.py,
            set: Nx.prototype.oA
        });
        Nx.prototype.get_count = Nx.prototype.Nv = function() {
            return Yj(this.Zu);
        };
        Nx.prototype.set_count = Nx.prototype.hw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Zj(c, b);
        };
        Object.defineProperty(Nx.prototype, "count", {
            get: Nx.prototype.Nv,
            set: Nx.prototype.hw
        });
        Nx.prototype.__destroy__ = Nx.prototype.bv = function() {
            ak(this.Zu);
        };
        function Ox() {
            throw "cannot construct a b2DestructionListener, no constructor in IDL";
        }
        Ox.prototype = Object.create(e.prototype);
        Ox.prototype.constructor = Ox;
        Ox.prototype.$u = Ox;
        Ox.av = {};
        a.b2DestructionListener = Ox;
        Ox.prototype.__destroy__ = Ox.prototype.bv = function() {
            bk(this.Zu);
        };
        function Px() {
            this.Zu = ck();
            g(Px)[this.Zu] = this;
        }
        Px.prototype = Object.create(vx.prototype);
        Px.prototype.constructor = Px;
        Px.prototype.$u = Px;
        Px.av = {};
        a.JSDestructionListener = Px;
        Px.prototype.SayGoodbyeJoint = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            dk(c, b);
        };
        Px.prototype.SayGoodbyeFixture = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ek(c, b);
        };
        Px.prototype.__destroy__ = Px.prototype.bv = function() {
            fk(this.Zu);
        };
        function Qx() {
            throw "cannot construct a b2DistanceJoint, no constructor in IDL";
        }
        Qx.prototype = Object.create(q.prototype);
        Qx.prototype.constructor = Qx;
        Qx.prototype.$u = Qx;
        Qx.av = {};
        a.b2DistanceJoint = Qx;
        Qx.prototype.GetLocalAnchorA = function() {
            return h(gk(this.Zu), r);
        };
        Qx.prototype.GetLocalAnchorB = function() {
            return h(hk(this.Zu), r);
        };
        Qx.prototype.GetLength = function() {
            return ik(this.Zu);
        };
        Qx.prototype.SetLength = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            jk(c, b);
        };
        Qx.prototype.GetMinLength = function() {
            return kk(this.Zu);
        };
        Qx.prototype.SetMinLength = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            lk(c, b);
        };
        Qx.prototype.GetMaxLength = function() {
            return mk(this.Zu);
        };
        Qx.prototype.SetMaxLength = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            nk(c, b);
        };
        Qx.prototype.GetCurrentLength = function() {
            return ok(this.Zu);
        };
        Qx.prototype.SetStiffness = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            pk(c, b);
        };
        Qx.prototype.GetStiffness = function() {
            return qk(this.Zu);
        };
        Qx.prototype.SetDamping = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rk(c, b);
        };
        Qx.prototype.GetDamping = function() {
            return sk(this.Zu);
        };
        Qx.prototype.GetType = function() {
            return tk(this.Zu);
        };
        Qx.prototype.GetBodyA = function() {
            return h(uk(this.Zu), n);
        };
        Qx.prototype.GetBodyB = function() {
            return h(vk(this.Zu), n);
        };
        Qx.prototype.GetAnchorA = function() {
            return h(wk(this.Zu), r);
        };
        Qx.prototype.GetAnchorB = function() {
            return h(xk(this.Zu), r);
        };
        Qx.prototype.GetReactionForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(yk(c, b), r);
        };
        Qx.prototype.GetReactionTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return zk(c, b);
        };
        Qx.prototype.GetNext = function() {
            return h(Ak(this.Zu), q);
        };
        Qx.prototype.GetUserData = function() {
            return h(Bk(this.Zu), m);
        };
        Qx.prototype.GetCollideConnected = function() {
            return !!Ck(this.Zu);
        };
        Qx.prototype.__destroy__ = Qx.prototype.bv = function() {
            Dk(this.Zu);
        };
        function H() {
            this.Zu = Ek();
            g(H)[this.Zu] = this;
        }
        H.prototype = Object.create(l.prototype);
        H.prototype.constructor = H;
        H.prototype.$u = H;
        H.av = {};
        a.b2DistanceJointDef = H;
        H.prototype.Initialize = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            Fk(p, b, c, d, f);
        };
        H.prototype.get_localAnchorA = H.prototype.nv = function() {
            return h(Gk(this.Zu), r);
        };
        H.prototype.set_localAnchorA = H.prototype.pv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Hk(c, b);
        };
        Object.defineProperty(H.prototype, "localAnchorA", {
            get: H.prototype.nv,
            set: H.prototype.pv
        });
        H.prototype.get_localAnchorB = H.prototype.ov = function() {
            return h(Ik(this.Zu), r);
        };
        H.prototype.set_localAnchorB = H.prototype.qv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Jk(c, b);
        };
        Object.defineProperty(H.prototype, "localAnchorB", {
            get: H.prototype.ov,
            set: H.prototype.qv
        });
        H.prototype.get_length = H.prototype.sx = function() {
            return Kk(this.Zu);
        };
        H.prototype.set_length = H.prototype.qz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Lk(c, b);
        };
        Object.defineProperty(H.prototype, "length", {
            get: H.prototype.sx,
            set: H.prototype.qz
        });
        H.prototype.get_minLength = H.prototype.Rx = function() {
            return Mk(this.Zu);
        };
        H.prototype.set_minLength = H.prototype.Qz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Nk(c, b);
        };
        Object.defineProperty(H.prototype, "minLength", {
            get: H.prototype.Rx,
            set: H.prototype.Qz
        });
        H.prototype.get_maxLength = H.prototype.Px = function() {
            return Ok(this.Zu);
        };
        H.prototype.set_maxLength = H.prototype.Oz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Pk(c, b);
        };
        Object.defineProperty(H.prototype, "maxLength", {
            get: H.prototype.Px,
            set: H.prototype.Oz
        });
        H.prototype.get_stiffness = H.prototype.xv = function() {
            return Qk(this.Zu);
        };
        H.prototype.set_stiffness = H.prototype.yv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Rk(c, b);
        };
        Object.defineProperty(H.prototype, "stiffness", {
            get: H.prototype.xv,
            set: H.prototype.yv
        });
        H.prototype.get_damping = H.prototype.rv = function() {
            return Sk(this.Zu);
        };
        H.prototype.set_damping = H.prototype.uv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Tk(c, b);
        };
        Object.defineProperty(H.prototype, "damping", {
            get: H.prototype.rv,
            set: H.prototype.uv
        });
        H.prototype.get_type = H.prototype.cv = function() {
            return Uk(this.Zu);
        };
        H.prototype.set_type = H.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Vk(c, b);
        };
        Object.defineProperty(H.prototype, "type", {
            get: H.prototype.cv,
            set: H.prototype.ev
        });
        H.prototype.get_userData = H.prototype.dv = function() {
            return h(Wk(this.Zu), m);
        };
        H.prototype.set_userData = H.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Xk(c, b);
        };
        Object.defineProperty(H.prototype, "userData", {
            get: H.prototype.dv,
            set: H.prototype.fv
        });
        H.prototype.get_bodyA = H.prototype.gv = function() {
            return h(Yk(this.Zu), n);
        };
        H.prototype.set_bodyA = H.prototype.kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Zk(c, b);
        };
        Object.defineProperty(H.prototype, "bodyA", {
            get: H.prototype.gv,
            set: H.prototype.kv
        });
        H.prototype.get_bodyB = H.prototype.hv = function() {
            return h($k(this.Zu), n);
        };
        H.prototype.set_bodyB = H.prototype.lv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            al(c, b);
        };
        Object.defineProperty(H.prototype, "bodyB", {
            get: H.prototype.hv,
            set: H.prototype.lv
        });
        H.prototype.get_collideConnected = H.prototype.jv = function() {
            return !!bl(this.Zu);
        };
        H.prototype.set_collideConnected = H.prototype.mv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            cl(c, b);
        };
        Object.defineProperty(H.prototype, "collideConnected", {
            get: H.prototype.jv,
            set: H.prototype.mv
        });
        H.prototype.__destroy__ = H.prototype.bv = function() {
            dl(this.Zu);
        };
        function Rx() {
            this.Zu = el();
            g(Rx)[this.Zu] = this;
        }
        Rx.prototype = Object.create(wx.prototype);
        Rx.prototype.constructor = Rx;
        Rx.prototype.$u = Rx;
        Rx.av = {};
        a.JSDraw = Rx;
        Rx.prototype.DrawPolygon = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            fl(f, b, c, d);
        };
        Rx.prototype.DrawSolidPolygon = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            gl(f, b, c, d);
        };
        Rx.prototype.DrawCircle = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            hl(f, b, c, d);
        };
        Rx.prototype.DrawSolidCircle = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            il(p, b, c, d, f);
        };
        Rx.prototype.DrawSegment = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            jl(f, b, c, d);
        };
        Rx.prototype.DrawTransform = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            kl(c, b);
        };
        Rx.prototype.DrawPoint = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            ll(f, b, c, d);
        };
        Rx.prototype.__destroy__ = Rx.prototype.bv = function() {
            ml(this.Zu);
        };
        function Sx() {
            throw "cannot construct a b2FrictionJoint, no constructor in IDL";
        }
        Sx.prototype = Object.create(q.prototype);
        Sx.prototype.constructor = Sx;
        Sx.prototype.$u = Sx;
        Sx.av = {};
        a.b2FrictionJoint = Sx;
        Sx.prototype.GetLocalAnchorA = function() {
            return h(nl(this.Zu), r);
        };
        Sx.prototype.GetLocalAnchorB = function() {
            return h(ol(this.Zu), r);
        };
        Sx.prototype.SetMaxForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            pl(c, b);
        };
        Sx.prototype.GetMaxForce = function() {
            return ql(this.Zu);
        };
        Sx.prototype.SetMaxTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rl(c, b);
        };
        Sx.prototype.GetMaxTorque = function() {
            return sl(this.Zu);
        };
        Sx.prototype.GetType = function() {
            return tl(this.Zu);
        };
        Sx.prototype.GetBodyA = function() {
            return h(ul(this.Zu), n);
        };
        Sx.prototype.GetBodyB = function() {
            return h(vl(this.Zu), n);
        };
        Sx.prototype.GetAnchorA = function() {
            return h(wl(this.Zu), r);
        };
        Sx.prototype.GetAnchorB = function() {
            return h(xl(this.Zu), r);
        };
        Sx.prototype.GetReactionForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(yl(c, b), r);
        };
        Sx.prototype.GetReactionTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return zl(c, b);
        };
        Sx.prototype.GetNext = function() {
            return h(Al(this.Zu), q);
        };
        Sx.prototype.GetUserData = function() {
            return h(Bl(this.Zu), m);
        };
        Sx.prototype.GetCollideConnected = function() {
            return !!Cl(this.Zu);
        };
        Sx.prototype.__destroy__ = Sx.prototype.bv = function() {
            Dl(this.Zu);
        };
        function I() {
            this.Zu = El();
            g(I)[this.Zu] = this;
        }
        I.prototype = Object.create(l.prototype);
        I.prototype.constructor = I;
        I.prototype.$u = I;
        I.av = {};
        a.b2FrictionJointDef = I;
        I.prototype.Initialize = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            Fl(f, b, c, d);
        };
        I.prototype.get_localAnchorA = I.prototype.nv = function() {
            return h(Gl(this.Zu), r);
        };
        I.prototype.set_localAnchorA = I.prototype.pv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Hl(c, b);
        };
        Object.defineProperty(I.prototype, "localAnchorA", {
            get: I.prototype.nv,
            set: I.prototype.pv
        });
        I.prototype.get_localAnchorB = I.prototype.ov = function() {
            return h(Il(this.Zu), r);
        };
        I.prototype.set_localAnchorB = I.prototype.qv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Jl(c, b);
        };
        Object.defineProperty(I.prototype, "localAnchorB", {
            get: I.prototype.ov,
            set: I.prototype.qv
        });
        I.prototype.get_maxForce = I.prototype.Bv = function() {
            return Kl(this.Zu);
        };
        I.prototype.set_maxForce = I.prototype.Hv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ll(c, b);
        };
        Object.defineProperty(I.prototype, "maxForce", {
            get: I.prototype.Bv,
            set: I.prototype.Hv
        });
        I.prototype.get_maxTorque = I.prototype.Xv = function() {
            return Ml(this.Zu);
        };
        I.prototype.set_maxTorque = I.prototype.rw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Nl(c, b);
        };
        Object.defineProperty(I.prototype, "maxTorque", {
            get: I.prototype.Xv,
            set: I.prototype.rw
        });
        I.prototype.get_type = I.prototype.cv = function() {
            return Ol(this.Zu);
        };
        I.prototype.set_type = I.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Pl(c, b);
        };
        Object.defineProperty(I.prototype, "type", {
            get: I.prototype.cv,
            set: I.prototype.ev
        });
        I.prototype.get_userData = I.prototype.dv = function() {
            return h(Ql(this.Zu), m);
        };
        I.prototype.set_userData = I.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Rl(c, b);
        };
        Object.defineProperty(I.prototype, "userData", {
            get: I.prototype.dv,
            set: I.prototype.fv
        });
        I.prototype.get_bodyA = I.prototype.gv = function() {
            return h(Sl(this.Zu), n);
        };
        I.prototype.set_bodyA = I.prototype.kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Tl(c, b);
        };
        Object.defineProperty(I.prototype, "bodyA", {
            get: I.prototype.gv,
            set: I.prototype.kv
        });
        I.prototype.get_bodyB = I.prototype.hv = function() {
            return h(Ul(this.Zu), n);
        };
        I.prototype.set_bodyB = I.prototype.lv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Vl(c, b);
        };
        Object.defineProperty(I.prototype, "bodyB", {
            get: I.prototype.hv,
            set: I.prototype.lv
        });
        I.prototype.get_collideConnected = I.prototype.jv = function() {
            return !!Wl(this.Zu);
        };
        I.prototype.set_collideConnected = I.prototype.mv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Xl(c, b);
        };
        Object.defineProperty(I.prototype, "collideConnected", {
            get: I.prototype.jv,
            set: I.prototype.mv
        });
        I.prototype.__destroy__ = I.prototype.bv = function() {
            Yl(this.Zu);
        };
        function Tx() {
            throw "cannot construct a b2GearJoint, no constructor in IDL";
        }
        Tx.prototype = Object.create(q.prototype);
        Tx.prototype.constructor = Tx;
        Tx.prototype.$u = Tx;
        Tx.av = {};
        a.b2GearJoint = Tx;
        Tx.prototype.GetJoint1 = function() {
            return h(Zl(this.Zu), q);
        };
        Tx.prototype.GetJoint2 = function() {
            return h($l(this.Zu), q);
        };
        Tx.prototype.SetRatio = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            am(c, b);
        };
        Tx.prototype.GetRatio = function() {
            return bm(this.Zu);
        };
        Tx.prototype.GetType = function() {
            return cm(this.Zu);
        };
        Tx.prototype.GetBodyA = function() {
            return h(dm(this.Zu), n);
        };
        Tx.prototype.GetBodyB = function() {
            return h(em(this.Zu), n);
        };
        Tx.prototype.GetAnchorA = function() {
            return h(fm(this.Zu), r);
        };
        Tx.prototype.GetAnchorB = function() {
            return h(gm(this.Zu), r);
        };
        Tx.prototype.GetReactionForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(hm(c, b), r);
        };
        Tx.prototype.GetReactionTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return im(c, b);
        };
        Tx.prototype.GetNext = function() {
            return h(jm(this.Zu), q);
        };
        Tx.prototype.GetUserData = function() {
            return h(km(this.Zu), m);
        };
        Tx.prototype.GetCollideConnected = function() {
            return !!lm(this.Zu);
        };
        Tx.prototype.__destroy__ = Tx.prototype.bv = function() {
            mm(this.Zu);
        };
        function J() {
            this.Zu = nm();
            g(J)[this.Zu] = this;
        }
        J.prototype = Object.create(l.prototype);
        J.prototype.constructor = J;
        J.prototype.$u = J;
        J.av = {};
        a.b2GearJointDef = J;
        J.prototype.get_joint1 = J.prototype.px = function() {
            return h(om(this.Zu), q);
        };
        J.prototype.set_joint1 = J.prototype.nz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            pm(c, b);
        };
        Object.defineProperty(J.prototype, "joint1", {
            get: J.prototype.px,
            set: J.prototype.nz
        });
        J.prototype.get_joint2 = J.prototype.qx = function() {
            return h(qm(this.Zu), q);
        };
        J.prototype.set_joint2 = J.prototype.oz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rm(c, b);
        };
        Object.defineProperty(J.prototype, "joint2", {
            get: J.prototype.qx,
            set: J.prototype.oz
        });
        J.prototype.get_ratio = J.prototype.dw = function() {
            return sm(this.Zu);
        };
        J.prototype.set_ratio = J.prototype.yw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            tm(c, b);
        };
        Object.defineProperty(J.prototype, "ratio", {
            get: J.prototype.dw,
            set: J.prototype.yw
        });
        J.prototype.get_type = J.prototype.cv = function() {
            return um(this.Zu);
        };
        J.prototype.set_type = J.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            wm(c, b);
        };
        Object.defineProperty(J.prototype, "type", {
            get: J.prototype.cv,
            set: J.prototype.ev
        });
        J.prototype.get_userData = J.prototype.dv = function() {
            return h(xm(this.Zu), m);
        };
        J.prototype.set_userData = J.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ym(c, b);
        };
        Object.defineProperty(J.prototype, "userData", {
            get: J.prototype.dv,
            set: J.prototype.fv
        });
        J.prototype.get_bodyA = J.prototype.gv = function() {
            return h(zm(this.Zu), n);
        };
        J.prototype.set_bodyA = J.prototype.kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Am(c, b);
        };
        Object.defineProperty(J.prototype, "bodyA", {
            get: J.prototype.gv,
            set: J.prototype.kv
        });
        J.prototype.get_bodyB = J.prototype.hv = function() {
            return h(Bm(this.Zu), n);
        };
        J.prototype.set_bodyB = J.prototype.lv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Cm(c, b);
        };
        Object.defineProperty(J.prototype, "bodyB", {
            get: J.prototype.hv,
            set: J.prototype.lv
        });
        J.prototype.get_collideConnected = J.prototype.jv = function() {
            return !!Dm(this.Zu);
        };
        J.prototype.set_collideConnected = J.prototype.mv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Em(c, b);
        };
        Object.defineProperty(J.prototype, "collideConnected", {
            get: J.prototype.jv,
            set: J.prototype.mv
        });
        J.prototype.__destroy__ = J.prototype.bv = function() {
            Fm(this.Zu);
        };
        function z() {
            this.Zu = Gm();
            g(z)[this.Zu] = this;
        }
        z.prototype = Object.create(e.prototype);
        z.prototype.constructor = z;
        z.prototype.$u = z;
        z.av = {};
        a.b2JointEdge = z;
        z.prototype.get_other = z.prototype.$v = function() {
            return h(Hm(this.Zu), n);
        };
        z.prototype.set_other = z.prototype.uw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Im(c, b);
        };
        Object.defineProperty(z.prototype, "other", {
            get: z.prototype.$v,
            set: z.prototype.uw
        });
        z.prototype.get_joint = z.prototype.ox = function() {
            return h(Jm(this.Zu), q);
        };
        z.prototype.set_joint = z.prototype.mz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Km(c, b);
        };
        Object.defineProperty(z.prototype, "joint", {
            get: z.prototype.ox,
            set: z.prototype.mz
        });
        z.prototype.get_prev = z.prototype.cw = function() {
            return h(Lm(this.Zu), z);
        };
        z.prototype.set_prev = z.prototype.xw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Mm(c, b);
        };
        Object.defineProperty(z.prototype, "prev", {
            get: z.prototype.cw,
            set: z.prototype.xw
        });
        z.prototype.get_next = z.prototype.Yv = function() {
            return h(Nm(this.Zu), z);
        };
        z.prototype.set_next = z.prototype.sw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Om(c, b);
        };
        Object.defineProperty(z.prototype, "next", {
            get: z.prototype.Yv,
            set: z.prototype.sw
        });
        z.prototype.__destroy__ = z.prototype.bv = function() {
            Pm(this.Zu);
        };
        function t() {
            this.Zu = Qm();
            g(t)[this.Zu] = this;
        }
        t.prototype = Object.create(e.prototype);
        t.prototype.constructor = t;
        t.prototype.$u = t;
        t.av = {};
        a.b2Manifold = t;
        t.prototype.get_points = t.prototype.aw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Rm(c, b), K);
        };
        t.prototype.set_points = t.prototype.vw = function(b, c) {
            var d = this.Zu;
            qx();
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Sm(d, b, c);
        };
        Object.defineProperty(t.prototype, "points", {
            get: t.prototype.aw,
            set: t.prototype.vw
        });
        t.prototype.get_localNormal = t.prototype.yx = function() {
            return h(Tm(this.Zu), r);
        };
        t.prototype.set_localNormal = t.prototype.xz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Um(c, b);
        };
        Object.defineProperty(t.prototype, "localNormal", {
            get: t.prototype.yx,
            set: t.prototype.xz
        });
        t.prototype.get_localPoint = t.prototype.Sv = function() {
            return h(Vm(this.Zu), r);
        };
        t.prototype.set_localPoint = t.prototype.mw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Wm(c, b);
        };
        Object.defineProperty(t.prototype, "localPoint", {
            get: t.prototype.Sv,
            set: t.prototype.mw
        });
        t.prototype.get_type = t.prototype.cv = function() {
            return Xm(this.Zu);
        };
        t.prototype.set_type = t.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ym(c, b);
        };
        Object.defineProperty(t.prototype, "type", {
            get: t.prototype.cv,
            set: t.prototype.ev
        });
        t.prototype.get_pointCount = t.prototype.Xx = function() {
            return Zm(this.Zu);
        };
        t.prototype.set_pointCount = t.prototype.Wz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            $m(c, b);
        };
        Object.defineProperty(t.prototype, "pointCount", {
            get: t.prototype.Xx,
            set: t.prototype.Wz
        });
        t.prototype.__destroy__ = t.prototype.bv = function() {
            an(this.Zu);
        };
        function Ux() {
            this.Zu = bn();
            g(Ux)[this.Zu] = this;
        }
        Ux.prototype = Object.create(e.prototype);
        Ux.prototype.constructor = Ux;
        Ux.prototype.$u = Ux;
        Ux.av = {};
        a.b2WorldManifold = Ux;
        Ux.prototype.Initialize = function(b, c, d, f, p) {
            var W = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            p && "object" === typeof p && (p = p.Zu);
            cn(W, b, c, d, f, p);
        };
        Ux.prototype.get_normal = Ux.prototype.Zv = function() {
            return h(dn(this.Zu), r);
        };
        Ux.prototype.set_normal = Ux.prototype.tw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            en(c, b);
        };
        Object.defineProperty(Ux.prototype, "normal", {
            get: Ux.prototype.Zv,
            set: Ux.prototype.tw
        });
        Ux.prototype.get_points = Ux.prototype.aw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(fn(c, b), r);
        };
        Ux.prototype.set_points = Ux.prototype.vw = function(b, c) {
            var d = this.Zu;
            qx();
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            gn(d, b, c);
        };
        Object.defineProperty(Ux.prototype, "points", {
            get: Ux.prototype.aw,
            set: Ux.prototype.vw
        });
        Ux.prototype.get_separations = Ux.prototype.cy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return hn(c, b);
        };
        Ux.prototype.set_separations = Ux.prototype.bA = function(b, c) {
            var d = this.Zu;
            qx();
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            jn(d, b, c);
        };
        Object.defineProperty(Ux.prototype, "separations", {
            get: Ux.prototype.cy,
            set: Ux.prototype.bA
        });
        Ux.prototype.__destroy__ = Ux.prototype.bv = function() {
            kn(this.Zu);
        };
        function K() {
            this.Zu = ln();
            g(K)[this.Zu] = this;
        }
        K.prototype = Object.create(e.prototype);
        K.prototype.constructor = K;
        K.prototype.$u = K;
        K.av = {};
        a.b2ManifoldPoint = K;
        K.prototype.get_localPoint = K.prototype.Sv = function() {
            return h(mn(this.Zu), r);
        };
        K.prototype.set_localPoint = K.prototype.mw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            nn(c, b);
        };
        Object.defineProperty(K.prototype, "localPoint", {
            get: K.prototype.Sv,
            set: K.prototype.mw
        });
        K.prototype.get_normalImpulse = K.prototype.Sx = function() {
            return on(this.Zu);
        };
        K.prototype.set_normalImpulse = K.prototype.Rz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            pn(c, b);
        };
        Object.defineProperty(K.prototype, "normalImpulse", {
            get: K.prototype.Sx,
            set: K.prototype.Rz
        });
        K.prototype.get_tangentImpulse = K.prototype.oy = function() {
            return qn(this.Zu);
        };
        K.prototype.set_tangentImpulse = K.prototype.nA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rn(c, b);
        };
        Object.defineProperty(K.prototype, "tangentImpulse", {
            get: K.prototype.oy,
            set: K.prototype.nA
        });
        K.prototype.get_id = K.prototype.Qv = function() {
            return h(sn(this.Zu), Mx);
        };
        K.prototype.set_id = K.prototype.kw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            tn(c, b);
        };
        Object.defineProperty(K.prototype, "id", {
            get: K.prototype.Qv,
            set: K.prototype.kw
        });
        K.prototype.__destroy__ = K.prototype.bv = function() {
            un(this.Zu);
        };
        function Vx(b, c, d, f) {
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            this.Zu = void 0 === b ? vn() : void 0 === c ? _emscripten_bind_b2Mat22_b2Mat22_1(b) : void 0 === d ? wn(b, c) : void 0 === f ? _emscripten_bind_b2Mat22_b2Mat22_3(b, c, d) : xn(b, c, d, f);
            g(Vx)[this.Zu] = this;
        }
        Vx.prototype = Object.create(e.prototype);
        Vx.prototype.constructor = Vx;
        Vx.prototype.$u = Vx;
        Vx.av = {};
        a.b2Mat22 = Vx;
        Vx.prototype.Set = Vx.prototype.Set = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            yn(d, b, c);
        };
        Vx.prototype.SetIdentity = function() {
            zn(this.Zu);
        };
        Vx.prototype.SetZero = function() {
            An(this.Zu);
        };
        Vx.prototype.GetInverse = function() {
            return h(Bn(this.Zu), Vx);
        };
        Vx.prototype.Solve = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Cn(c, b), r);
        };
        Vx.prototype.get_ex = Vx.prototype.Ov = function() {
            return h(Dn(this.Zu), r);
        };
        Vx.prototype.set_ex = Vx.prototype.iw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            En(c, b);
        };
        Object.defineProperty(Vx.prototype, "ex", {
            get: Vx.prototype.Ov,
            set: Vx.prototype.iw
        });
        Vx.prototype.get_ey = Vx.prototype.Pv = function() {
            return h(Fn(this.Zu), r);
        };
        Vx.prototype.set_ey = Vx.prototype.jw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Gn(c, b);
        };
        Object.defineProperty(Vx.prototype, "ey", {
            get: Vx.prototype.Pv,
            set: Vx.prototype.jw
        });
        Vx.prototype.__destroy__ = Vx.prototype.bv = function() {
            Hn(this.Zu);
        };
        function L(b, c, d) {
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            this.Zu = void 0 === b ? In() : void 0 === c ? _emscripten_bind_b2Mat33_b2Mat33_1(b) : void 0 === d ? _emscripten_bind_b2Mat33_b2Mat33_2(b, c) : Jn(b, c, d);
            g(L)[this.Zu] = this;
        }
        L.prototype = Object.create(e.prototype);
        L.prototype.constructor = L;
        L.prototype.$u = L;
        L.av = {};
        a.b2Mat33 = L;
        L.prototype.SetZero = function() {
            Kn(this.Zu);
        };
        L.prototype.Solve33 = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Ln(c, b), y);
        };
        L.prototype.Solve22 = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Mn(c, b), r);
        };
        L.prototype.GetInverse22 = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Nn(c, b);
        };
        L.prototype.GetSymInverse33 = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            On(c, b);
        };
        L.prototype.get_ex = L.prototype.Ov = function() {
            return h(Pn(this.Zu), y);
        };
        L.prototype.set_ex = L.prototype.iw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Qn(c, b);
        };
        Object.defineProperty(L.prototype, "ex", {
            get: L.prototype.Ov,
            set: L.prototype.iw
        });
        L.prototype.get_ey = L.prototype.Pv = function() {
            return h(Rn(this.Zu), y);
        };
        L.prototype.set_ey = L.prototype.jw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Sn(c, b);
        };
        Object.defineProperty(L.prototype, "ey", {
            get: L.prototype.Pv,
            set: L.prototype.jw
        });
        L.prototype.get_ez = L.prototype.Zw = function() {
            return h(Tn(this.Zu), y);
        };
        L.prototype.set_ez = L.prototype.Xy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Un(c, b);
        };
        Object.defineProperty(L.prototype, "ez", {
            get: L.prototype.Zw,
            set: L.prototype.Xy
        });
        L.prototype.__destroy__ = L.prototype.bv = function() {
            Vn(this.Zu);
        };
        function Wx() {
            throw "cannot construct a b2MouseJoint, no constructor in IDL";
        }
        Wx.prototype = Object.create(q.prototype);
        Wx.prototype.constructor = Wx;
        Wx.prototype.$u = Wx;
        Wx.av = {};
        a.b2MouseJoint = Wx;
        Wx.prototype.SetTarget = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Wn(c, b);
        };
        Wx.prototype.GetTarget = function() {
            return h(Xn(this.Zu), r);
        };
        Wx.prototype.SetMaxForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Yn(c, b);
        };
        Wx.prototype.GetMaxForce = function() {
            return Zn(this.Zu);
        };
        Wx.prototype.SetStiffness = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            $n(c, b);
        };
        Wx.prototype.GetStiffness = function() {
            return ao(this.Zu);
        };
        Wx.prototype.SetDamping = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            bo(c, b);
        };
        Wx.prototype.GetDamping = function() {
            return co(this.Zu);
        };
        Wx.prototype.GetType = function() {
            return eo(this.Zu);
        };
        Wx.prototype.GetBodyA = function() {
            return h(fo(this.Zu), n);
        };
        Wx.prototype.GetBodyB = function() {
            return h(go(this.Zu), n);
        };
        Wx.prototype.GetAnchorA = function() {
            return h(ho(this.Zu), r);
        };
        Wx.prototype.GetAnchorB = function() {
            return h(io(this.Zu), r);
        };
        Wx.prototype.GetReactionForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(jo(c, b), r);
        };
        Wx.prototype.GetReactionTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return ko(c, b);
        };
        Wx.prototype.GetNext = function() {
            return h(lo(this.Zu), q);
        };
        Wx.prototype.GetUserData = function() {
            return h(mo(this.Zu), m);
        };
        Wx.prototype.GetCollideConnected = function() {
            return !!no(this.Zu);
        };
        Wx.prototype.__destroy__ = Wx.prototype.bv = function() {
            oo(this.Zu);
        };
        function M() {
            this.Zu = po();
            g(M)[this.Zu] = this;
        }
        M.prototype = Object.create(l.prototype);
        M.prototype.constructor = M;
        M.prototype.$u = M;
        M.av = {};
        a.b2MouseJointDef = M;
        M.prototype.get_target = M.prototype.qy = function() {
            return h(qo(this.Zu), r);
        };
        M.prototype.set_target = M.prototype.pA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ro(c, b);
        };
        Object.defineProperty(M.prototype, "target", {
            get: M.prototype.qy,
            set: M.prototype.pA
        });
        M.prototype.get_maxForce = M.prototype.Bv = function() {
            return so(this.Zu);
        };
        M.prototype.set_maxForce = M.prototype.Hv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            to(c, b);
        };
        Object.defineProperty(M.prototype, "maxForce", {
            get: M.prototype.Bv,
            set: M.prototype.Hv
        });
        M.prototype.get_stiffness = M.prototype.xv = function() {
            return uo(this.Zu);
        };
        M.prototype.set_stiffness = M.prototype.yv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            vo(c, b);
        };
        Object.defineProperty(M.prototype, "stiffness", {
            get: M.prototype.xv,
            set: M.prototype.yv
        });
        M.prototype.get_damping = M.prototype.rv = function() {
            return wo(this.Zu);
        };
        M.prototype.set_damping = M.prototype.uv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            xo(c, b);
        };
        Object.defineProperty(M.prototype, "damping", {
            get: M.prototype.rv,
            set: M.prototype.uv
        });
        M.prototype.get_type = M.prototype.cv = function() {
            return yo(this.Zu);
        };
        M.prototype.set_type = M.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            zo(c, b);
        };
        Object.defineProperty(M.prototype, "type", {
            get: M.prototype.cv,
            set: M.prototype.ev
        });
        M.prototype.get_userData = M.prototype.dv = function() {
            return h(Ao(this.Zu), m);
        };
        M.prototype.set_userData = M.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Bo(c, b);
        };
        Object.defineProperty(M.prototype, "userData", {
            get: M.prototype.dv,
            set: M.prototype.fv
        });
        M.prototype.get_bodyA = M.prototype.gv = function() {
            return h(Co(this.Zu), n);
        };
        M.prototype.set_bodyA = M.prototype.kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Do(c, b);
        };
        Object.defineProperty(M.prototype, "bodyA", {
            get: M.prototype.gv,
            set: M.prototype.kv
        });
        M.prototype.get_bodyB = M.prototype.hv = function() {
            return h(Eo(this.Zu), n);
        };
        M.prototype.set_bodyB = M.prototype.lv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Fo(c, b);
        };
        Object.defineProperty(M.prototype, "bodyB", {
            get: M.prototype.hv,
            set: M.prototype.lv
        });
        M.prototype.get_collideConnected = M.prototype.jv = function() {
            return !!Go(this.Zu);
        };
        M.prototype.set_collideConnected = M.prototype.mv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ho(c, b);
        };
        Object.defineProperty(M.prototype, "collideConnected", {
            get: M.prototype.jv,
            set: M.prototype.mv
        });
        M.prototype.__destroy__ = M.prototype.bv = function() {
            Io(this.Zu);
        };
        function N() {
            this.Zu = Jo();
            g(N)[this.Zu] = this;
        }
        N.prototype = Object.create(k.prototype);
        N.prototype.constructor = N;
        N.prototype.$u = N;
        N.av = {};
        a.b2PolygonShape = N;
        N.prototype.Set = N.prototype.Set = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Ko(d, b, c);
        };
        N.prototype.SetAsBox = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            void 0 === d ? Lo(p, b, c) : void 0 === f ? _emscripten_bind_b2PolygonShape_SetAsBox_3(p, b, c, d) : Mo(p, b, c, d, f);
        };
        N.prototype.GetType = function() {
            return No(this.Zu);
        };
        N.prototype.GetChildCount = function() {
            return Oo(this.Zu);
        };
        N.prototype.TestPoint = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            return !!Po(d, b, c);
        };
        N.prototype.RayCast = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            return !!Qo(p, b, c, d, f);
        };
        N.prototype.ComputeAABB = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            Ro(f, b, c, d);
        };
        N.prototype.ComputeMass = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            So(d, b, c);
        };
        N.prototype.get_m_centroid = N.prototype.Bx = function() {
            return h(To(this.Zu), r);
        };
        N.prototype.set_m_centroid = N.prototype.Az = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Uo(c, b);
        };
        Object.defineProperty(N.prototype, "m_centroid", {
            get: N.prototype.Bx,
            set: N.prototype.Az
        });
        N.prototype.get_m_vertices = N.prototype.Vv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Vo(c, b), r);
        };
        N.prototype.set_m_vertices = N.prototype.pw = function(b, c) {
            var d = this.Zu;
            qx();
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Wo(d, b, c);
        };
        Object.defineProperty(N.prototype, "m_vertices", {
            get: N.prototype.Vv,
            set: N.prototype.pw
        });
        N.prototype.get_m_normals = N.prototype.Dx = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Xo(c, b), r);
        };
        N.prototype.set_m_normals = N.prototype.Cz = function(b, c) {
            var d = this.Zu;
            qx();
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Yo(d, b, c);
        };
        Object.defineProperty(N.prototype, "m_normals", {
            get: N.prototype.Dx,
            set: N.prototype.Cz
        });
        N.prototype.get_m_count = N.prototype.Uv = function() {
            return Zo(this.Zu);
        };
        N.prototype.set_m_count = N.prototype.ow = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            $o(c, b);
        };
        Object.defineProperty(N.prototype, "m_count", {
            get: N.prototype.Uv,
            set: N.prototype.ow
        });
        N.prototype.get_m_type = N.prototype.tv = function() {
            return ap(this.Zu);
        };
        N.prototype.set_m_type = N.prototype.wv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            bp(c, b);
        };
        Object.defineProperty(N.prototype, "m_type", {
            get: N.prototype.tv,
            set: N.prototype.wv
        });
        N.prototype.get_m_radius = N.prototype.sv = function() {
            return cp(this.Zu);
        };
        N.prototype.set_m_radius = N.prototype.vv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            dp(c, b);
        };
        Object.defineProperty(N.prototype, "m_radius", {
            get: N.prototype.sv,
            set: N.prototype.vv
        });
        N.prototype.__destroy__ = N.prototype.bv = function() {
            ep(this.Zu);
        };
        function O() {
            throw "cannot construct a b2PrismaticJoint, no constructor in IDL";
        }
        O.prototype = Object.create(q.prototype);
        O.prototype.constructor = O;
        O.prototype.$u = O;
        O.av = {};
        a.b2PrismaticJoint = O;
        O.prototype.GetLocalAnchorA = function() {
            return h(fp(this.Zu), r);
        };
        O.prototype.GetLocalAnchorB = function() {
            return h(gp(this.Zu), r);
        };
        O.prototype.GetLocalAxisA = function() {
            return h(hp(this.Zu), r);
        };
        O.prototype.GetReferenceAngle = function() {
            return ip(this.Zu);
        };
        O.prototype.GetJointTranslation = function() {
            return jp(this.Zu);
        };
        O.prototype.GetJointSpeed = function() {
            return kp(this.Zu);
        };
        O.prototype.IsLimitEnabled = function() {
            return !!lp(this.Zu);
        };
        O.prototype.EnableLimit = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            mp(c, b);
        };
        O.prototype.GetLowerLimit = function() {
            return np(this.Zu);
        };
        O.prototype.GetUpperLimit = function() {
            return op(this.Zu);
        };
        O.prototype.SetLimits = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            pp(d, b, c);
        };
        O.prototype.IsMotorEnabled = function() {
            return !!qp(this.Zu);
        };
        O.prototype.EnableMotor = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rp(c, b);
        };
        O.prototype.SetMotorSpeed = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            sp(c, b);
        };
        O.prototype.GetMotorSpeed = function() {
            return tp(this.Zu);
        };
        O.prototype.SetMaxMotorForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            up(c, b);
        };
        O.prototype.GetMaxMotorForce = function() {
            return vp(this.Zu);
        };
        O.prototype.GetMotorForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return wp(c, b);
        };
        O.prototype.GetType = function() {
            return xp(this.Zu);
        };
        O.prototype.GetBodyA = function() {
            return h(yp(this.Zu), n);
        };
        O.prototype.GetBodyB = function() {
            return h(zp(this.Zu), n);
        };
        O.prototype.GetAnchorA = function() {
            return h(Ap(this.Zu), r);
        };
        O.prototype.GetAnchorB = function() {
            return h(Bp(this.Zu), r);
        };
        O.prototype.GetReactionForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Cp(c, b), r);
        };
        O.prototype.GetReactionTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return Dp(c, b);
        };
        O.prototype.GetNext = function() {
            return h(Ep(this.Zu), q);
        };
        O.prototype.GetUserData = function() {
            return h(Fp(this.Zu), m);
        };
        O.prototype.GetCollideConnected = function() {
            return !!Gp(this.Zu);
        };
        O.prototype.__destroy__ = O.prototype.bv = function() {
            Hp(this.Zu);
        };
        function P() {
            this.Zu = Ip();
            g(P)[this.Zu] = this;
        }
        P.prototype = Object.create(l.prototype);
        P.prototype.constructor = P;
        P.prototype.$u = P;
        P.av = {};
        a.b2PrismaticJointDef = P;
        P.prototype.Initialize = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            Jp(p, b, c, d, f);
        };
        P.prototype.get_localAnchorA = P.prototype.nv = function() {
            return h(Kp(this.Zu), r);
        };
        P.prototype.set_localAnchorA = P.prototype.pv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Lp(c, b);
        };
        Object.defineProperty(P.prototype, "localAnchorA", {
            get: P.prototype.nv,
            set: P.prototype.pv
        });
        P.prototype.get_localAnchorB = P.prototype.ov = function() {
            return h(Mp(this.Zu), r);
        };
        P.prototype.set_localAnchorB = P.prototype.qv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Np(c, b);
        };
        Object.defineProperty(P.prototype, "localAnchorB", {
            get: P.prototype.ov,
            set: P.prototype.qv
        });
        P.prototype.get_localAxisA = P.prototype.Rv = function() {
            return h(Op(this.Zu), r);
        };
        P.prototype.set_localAxisA = P.prototype.lw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Pp(c, b);
        };
        Object.defineProperty(P.prototype, "localAxisA", {
            get: P.prototype.Rv,
            set: P.prototype.lw
        });
        P.prototype.get_referenceAngle = P.prototype.Ev = function() {
            return Qp(this.Zu);
        };
        P.prototype.set_referenceAngle = P.prototype.Kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Rp(c, b);
        };
        Object.defineProperty(P.prototype, "referenceAngle", {
            get: P.prototype.Ev,
            set: P.prototype.Kv
        });
        P.prototype.get_enableLimit = P.prototype.zv = function() {
            return !!Sp(this.Zu);
        };
        P.prototype.set_enableLimit = P.prototype.Fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Tp(c, b);
        };
        Object.defineProperty(P.prototype, "enableLimit", {
            get: P.prototype.zv,
            set: P.prototype.Fv
        });
        P.prototype.get_lowerTranslation = P.prototype.Tv = function() {
            return Up(this.Zu);
        };
        P.prototype.set_lowerTranslation = P.prototype.nw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Vp(c, b);
        };
        Object.defineProperty(P.prototype, "lowerTranslation", {
            get: P.prototype.Tv,
            set: P.prototype.nw
        });
        P.prototype.get_upperTranslation = P.prototype.ew = function() {
            return Wp(this.Zu);
        };
        P.prototype.set_upperTranslation = P.prototype.zw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Xp(c, b);
        };
        Object.defineProperty(P.prototype, "upperTranslation", {
            get: P.prototype.ew,
            set: P.prototype.zw
        });
        P.prototype.get_enableMotor = P.prototype.Av = function() {
            return !!Yp(this.Zu);
        };
        P.prototype.set_enableMotor = P.prototype.Gv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Zp(c, b);
        };
        Object.defineProperty(P.prototype, "enableMotor", {
            get: P.prototype.Av,
            set: P.prototype.Gv
        });
        P.prototype.get_maxMotorForce = P.prototype.Qx = function() {
            return $p(this.Zu);
        };
        P.prototype.set_maxMotorForce = P.prototype.Pz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            aq(c, b);
        };
        Object.defineProperty(P.prototype, "maxMotorForce", {
            get: P.prototype.Qx,
            set: P.prototype.Pz
        });
        P.prototype.get_motorSpeed = P.prototype.Cv = function() {
            return bq(this.Zu);
        };
        P.prototype.set_motorSpeed = P.prototype.Iv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            cq(c, b);
        };
        Object.defineProperty(P.prototype, "motorSpeed", {
            get: P.prototype.Cv,
            set: P.prototype.Iv
        });
        P.prototype.get_type = P.prototype.cv = function() {
            return dq(this.Zu);
        };
        P.prototype.set_type = P.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            eq(c, b);
        };
        Object.defineProperty(P.prototype, "type", {
            get: P.prototype.cv,
            set: P.prototype.ev
        });
        P.prototype.get_userData = P.prototype.dv = function() {
            return h(fq(this.Zu), m);
        };
        P.prototype.set_userData = P.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            gq(c, b);
        };
        Object.defineProperty(P.prototype, "userData", {
            get: P.prototype.dv,
            set: P.prototype.fv
        });
        P.prototype.get_bodyA = P.prototype.gv = function() {
            return h(hq(this.Zu), n);
        };
        P.prototype.set_bodyA = P.prototype.kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            iq(c, b);
        };
        Object.defineProperty(P.prototype, "bodyA", {
            get: P.prototype.gv,
            set: P.prototype.kv
        });
        P.prototype.get_bodyB = P.prototype.hv = function() {
            return h(jq(this.Zu), n);
        };
        P.prototype.set_bodyB = P.prototype.lv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            kq(c, b);
        };
        Object.defineProperty(P.prototype, "bodyB", {
            get: P.prototype.hv,
            set: P.prototype.lv
        });
        P.prototype.get_collideConnected = P.prototype.jv = function() {
            return !!lq(this.Zu);
        };
        P.prototype.set_collideConnected = P.prototype.mv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            mq(c, b);
        };
        Object.defineProperty(P.prototype, "collideConnected", {
            get: P.prototype.jv,
            set: P.prototype.mv
        });
        P.prototype.__destroy__ = P.prototype.bv = function() {
            nq(this.Zu);
        };
        function w() {
            throw "cannot construct a b2Profile, no constructor in IDL";
        }
        w.prototype = Object.create(e.prototype);
        w.prototype.constructor = w;
        w.prototype.$u = w;
        w.av = {};
        a.b2Profile = w;
        w.prototype.get_step = w.prototype.jy = function() {
            return oq(this.Zu);
        };
        w.prototype.set_step = w.prototype.iA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            pq(c, b);
        };
        Object.defineProperty(w.prototype, "step", {
            get: w.prototype.jy,
            set: w.prototype.iA
        });
        w.prototype.get_collide = w.prototype.Uw = function() {
            return qq(this.Zu);
        };
        w.prototype.set_collide = w.prototype.Sy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rq(c, b);
        };
        Object.defineProperty(w.prototype, "collide", {
            get: w.prototype.Uw,
            set: w.prototype.Sy
        });
        w.prototype.get_solve = w.prototype.ey = function() {
            return sq(this.Zu);
        };
        w.prototype.set_solve = w.prototype.dA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            tq(c, b);
        };
        Object.defineProperty(w.prototype, "solve", {
            get: w.prototype.ey,
            set: w.prototype.dA
        });
        w.prototype.get_solveInit = w.prototype.fy = function() {
            return uq(this.Zu);
        };
        w.prototype.set_solveInit = w.prototype.eA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            vq(c, b);
        };
        Object.defineProperty(w.prototype, "solveInit", {
            get: w.prototype.fy,
            set: w.prototype.eA
        });
        w.prototype.get_solveVelocity = w.prototype.iy = function() {
            return wq(this.Zu);
        };
        w.prototype.set_solveVelocity = w.prototype.hA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            xq(c, b);
        };
        Object.defineProperty(w.prototype, "solveVelocity", {
            get: w.prototype.iy,
            set: w.prototype.hA
        });
        w.prototype.get_solvePosition = w.prototype.gy = function() {
            return yq(this.Zu);
        };
        w.prototype.set_solvePosition = w.prototype.fA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            zq(c, b);
        };
        Object.defineProperty(w.prototype, "solvePosition", {
            get: w.prototype.gy,
            set: w.prototype.fA
        });
        w.prototype.get_broadphase = w.prototype.Ow = function() {
            return Aq(this.Zu);
        };
        w.prototype.set_broadphase = w.prototype.My = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Bq(c, b);
        };
        Object.defineProperty(w.prototype, "broadphase", {
            get: w.prototype.Ow,
            set: w.prototype.My
        });
        w.prototype.get_solveTOI = w.prototype.hy = function() {
            return Cq(this.Zu);
        };
        w.prototype.set_solveTOI = w.prototype.gA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Dq(c, b);
        };
        Object.defineProperty(w.prototype, "solveTOI", {
            get: w.prototype.hy,
            set: w.prototype.gA
        });
        w.prototype.__destroy__ = w.prototype.bv = function() {
            Eq(this.Zu);
        };
        function Xx() {
            throw "cannot construct a b2PulleyJoint, no constructor in IDL";
        }
        Xx.prototype = Object.create(q.prototype);
        Xx.prototype.constructor = Xx;
        Xx.prototype.$u = Xx;
        Xx.av = {};
        a.b2PulleyJoint = Xx;
        Xx.prototype.GetGroundAnchorA = function() {
            return h(Fq(this.Zu), r);
        };
        Xx.prototype.GetGroundAnchorB = function() {
            return h(Gq(this.Zu), r);
        };
        Xx.prototype.GetLengthA = function() {
            return Hq(this.Zu);
        };
        Xx.prototype.GetLengthB = function() {
            return Iq(this.Zu);
        };
        Xx.prototype.GetRatio = function() {
            return Jq(this.Zu);
        };
        Xx.prototype.GetCurrentLengthA = function() {
            return Kq(this.Zu);
        };
        Xx.prototype.GetCurrentLengthB = function() {
            return Lq(this.Zu);
        };
        Xx.prototype.GetType = function() {
            return Mq(this.Zu);
        };
        Xx.prototype.GetBodyA = function() {
            return h(Nq(this.Zu), n);
        };
        Xx.prototype.GetBodyB = function() {
            return h(Oq(this.Zu), n);
        };
        Xx.prototype.GetAnchorA = function() {
            return h(Pq(this.Zu), r);
        };
        Xx.prototype.GetAnchorB = function() {
            return h(Qq(this.Zu), r);
        };
        Xx.prototype.GetReactionForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Rq(c, b), r);
        };
        Xx.prototype.GetReactionTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return Sq(c, b);
        };
        Xx.prototype.GetNext = function() {
            return h(Tq(this.Zu), q);
        };
        Xx.prototype.GetUserData = function() {
            return h(Uq(this.Zu), m);
        };
        Xx.prototype.GetCollideConnected = function() {
            return !!Vq(this.Zu);
        };
        Xx.prototype.__destroy__ = Xx.prototype.bv = function() {
            Wq(this.Zu);
        };
        function Q() {
            this.Zu = Xq();
            g(Q)[this.Zu] = this;
        }
        Q.prototype = Object.create(l.prototype);
        Q.prototype.constructor = Q;
        Q.prototype.$u = Q;
        Q.av = {};
        a.b2PulleyJointDef = Q;
        Q.prototype.Initialize = function(b, c, d, f, p, W, Ia) {
            var hb = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            p && "object" === typeof p && (p = p.Zu);
            W && "object" === typeof W && (W = W.Zu);
            Ia && "object" === typeof Ia && (Ia = Ia.Zu);
            Yq(hb, b, c, d, f, p, W, Ia);
        };
        Q.prototype.get_groundAnchorA = Q.prototype.hx = function() {
            return h(Zq(this.Zu), r);
        };
        Q.prototype.set_groundAnchorA = Q.prototype.fz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            $q(c, b);
        };
        Object.defineProperty(Q.prototype, "groundAnchorA", {
            get: Q.prototype.hx,
            set: Q.prototype.fz
        });
        Q.prototype.get_groundAnchorB = Q.prototype.ix = function() {
            return h(ar(this.Zu), r);
        };
        Q.prototype.set_groundAnchorB = Q.prototype.gz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            br(c, b);
        };
        Object.defineProperty(Q.prototype, "groundAnchorB", {
            get: Q.prototype.ix,
            set: Q.prototype.gz
        });
        Q.prototype.get_localAnchorA = Q.prototype.nv = function() {
            return h(cr(this.Zu), r);
        };
        Q.prototype.set_localAnchorA = Q.prototype.pv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            dr(c, b);
        };
        Object.defineProperty(Q.prototype, "localAnchorA", {
            get: Q.prototype.nv,
            set: Q.prototype.pv
        });
        Q.prototype.get_localAnchorB = Q.prototype.ov = function() {
            return h(er(this.Zu), r);
        };
        Q.prototype.set_localAnchorB = Q.prototype.qv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            fr(c, b);
        };
        Object.defineProperty(Q.prototype, "localAnchorB", {
            get: Q.prototype.ov,
            set: Q.prototype.qv
        });
        Q.prototype.get_lengthA = Q.prototype.tx = function() {
            return gr(this.Zu);
        };
        Q.prototype.set_lengthA = Q.prototype.rz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            hr(c, b);
        };
        Object.defineProperty(Q.prototype, "lengthA", {
            get: Q.prototype.tx,
            set: Q.prototype.rz
        });
        Q.prototype.get_lengthB = Q.prototype.ux = function() {
            return ir(this.Zu);
        };
        Q.prototype.set_lengthB = Q.prototype.sz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            jr(c, b);
        };
        Object.defineProperty(Q.prototype, "lengthB", {
            get: Q.prototype.ux,
            set: Q.prototype.sz
        });
        Q.prototype.get_ratio = Q.prototype.dw = function() {
            return kr(this.Zu);
        };
        Q.prototype.set_ratio = Q.prototype.yw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            lr(c, b);
        };
        Object.defineProperty(Q.prototype, "ratio", {
            get: Q.prototype.dw,
            set: Q.prototype.yw
        });
        Q.prototype.get_type = Q.prototype.cv = function() {
            return mr(this.Zu);
        };
        Q.prototype.set_type = Q.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            nr(c, b);
        };
        Object.defineProperty(Q.prototype, "type", {
            get: Q.prototype.cv,
            set: Q.prototype.ev
        });
        Q.prototype.get_userData = Q.prototype.dv = function() {
            return h(or(this.Zu), m);
        };
        Q.prototype.set_userData = Q.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            pr(c, b);
        };
        Object.defineProperty(Q.prototype, "userData", {
            get: Q.prototype.dv,
            set: Q.prototype.fv
        });
        Q.prototype.get_bodyA = Q.prototype.gv = function() {
            return h(qr(this.Zu), n);
        };
        Q.prototype.set_bodyA = Q.prototype.kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rr(c, b);
        };
        Object.defineProperty(Q.prototype, "bodyA", {
            get: Q.prototype.gv,
            set: Q.prototype.kv
        });
        Q.prototype.get_bodyB = Q.prototype.hv = function() {
            return h(sr(this.Zu), n);
        };
        Q.prototype.set_bodyB = Q.prototype.lv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            tr(c, b);
        };
        Object.defineProperty(Q.prototype, "bodyB", {
            get: Q.prototype.hv,
            set: Q.prototype.lv
        });
        Q.prototype.get_collideConnected = Q.prototype.jv = function() {
            return !!ur(this.Zu);
        };
        Q.prototype.set_collideConnected = Q.prototype.mv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            vr(c, b);
        };
        Object.defineProperty(Q.prototype, "collideConnected", {
            get: Q.prototype.jv,
            set: Q.prototype.mv
        });
        Q.prototype.__destroy__ = Q.prototype.bv = function() {
            wr(this.Zu);
        };
        function Yx() {
            throw "cannot construct a b2RayCastInput, no constructor in IDL";
        }
        Yx.prototype = Object.create(e.prototype);
        Yx.prototype.constructor = Yx;
        Yx.prototype.$u = Yx;
        Yx.av = {};
        a.b2RayCastInput = Yx;
        Yx.prototype.get_p1 = Yx.prototype.Vx = function() {
            return h(xr(this.Zu), r);
        };
        Yx.prototype.set_p1 = Yx.prototype.Uz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            yr(c, b);
        };
        Object.defineProperty(Yx.prototype, "p1", {
            get: Yx.prototype.Vx,
            set: Yx.prototype.Uz
        });
        Yx.prototype.get_p2 = Yx.prototype.Wx = function() {
            return h(zr(this.Zu), r);
        };
        Yx.prototype.set_p2 = Yx.prototype.Vz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ar(c, b);
        };
        Object.defineProperty(Yx.prototype, "p2", {
            get: Yx.prototype.Wx,
            set: Yx.prototype.Vz
        });
        Yx.prototype.get_maxFraction = Yx.prototype.Ox = function() {
            return Br(this.Zu);
        };
        Yx.prototype.set_maxFraction = Yx.prototype.Nz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Cr(c, b);
        };
        Object.defineProperty(Yx.prototype, "maxFraction", {
            get: Yx.prototype.Ox,
            set: Yx.prototype.Nz
        });
        Yx.prototype.__destroy__ = Yx.prototype.bv = function() {
            Dr(this.Zu);
        };
        function Zx() {
            throw "cannot construct a b2RayCastOutput, no constructor in IDL";
        }
        Zx.prototype = Object.create(e.prototype);
        Zx.prototype.constructor = Zx;
        Zx.prototype.$u = Zx;
        Zx.av = {};
        a.b2RayCastOutput = Zx;
        Zx.prototype.get_normal = Zx.prototype.Zv = function() {
            return h(Er(this.Zu), r);
        };
        Zx.prototype.set_normal = Zx.prototype.tw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Fr(c, b);
        };
        Object.defineProperty(Zx.prototype, "normal", {
            get: Zx.prototype.Zv,
            set: Zx.prototype.tw
        });
        Zx.prototype.get_fraction = Zx.prototype.cx = function() {
            return Gr(this.Zu);
        };
        Zx.prototype.set_fraction = Zx.prototype.az = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Hr(c, b);
        };
        Object.defineProperty(Zx.prototype, "fraction", {
            get: Zx.prototype.cx,
            set: Zx.prototype.az
        });
        Zx.prototype.__destroy__ = Zx.prototype.bv = function() {
            Ir(this.Zu);
        };
        function R() {
            throw "cannot construct a b2RevoluteJoint, no constructor in IDL";
        }
        R.prototype = Object.create(q.prototype);
        R.prototype.constructor = R;
        R.prototype.$u = R;
        R.av = {};
        a.b2RevoluteJoint = R;
        R.prototype.GetLocalAnchorA = function() {
            return h(Jr(this.Zu), r);
        };
        R.prototype.GetLocalAnchorB = function() {
            return h(Kr(this.Zu), r);
        };
        R.prototype.GetReferenceAngle = function() {
            return Lr(this.Zu);
        };
        R.prototype.GetJointAngle = function() {
            return Mr(this.Zu);
        };
        R.prototype.GetJointSpeed = function() {
            return Nr(this.Zu);
        };
        R.prototype.IsLimitEnabled = function() {
            return !!Or(this.Zu);
        };
        R.prototype.EnableLimit = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Pr(c, b);
        };
        R.prototype.GetLowerLimit = function() {
            return Qr(this.Zu);
        };
        R.prototype.GetUpperLimit = function() {
            return Rr(this.Zu);
        };
        R.prototype.SetLimits = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Sr(d, b, c);
        };
        R.prototype.IsMotorEnabled = function() {
            return !!Tr(this.Zu);
        };
        R.prototype.EnableMotor = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ur(c, b);
        };
        R.prototype.SetMotorSpeed = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Vr(c, b);
        };
        R.prototype.GetMotorSpeed = function() {
            return Wr(this.Zu);
        };
        R.prototype.SetMaxMotorTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Xr(c, b);
        };
        R.prototype.GetMaxMotorTorque = function() {
            return Yr(this.Zu);
        };
        R.prototype.GetMotorTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return Zr(c, b);
        };
        R.prototype.GetType = function() {
            return $r(this.Zu);
        };
        R.prototype.GetBodyA = function() {
            return h(as(this.Zu), n);
        };
        R.prototype.GetBodyB = function() {
            return h(bs(this.Zu), n);
        };
        R.prototype.GetAnchorA = function() {
            return h(cs(this.Zu), r);
        };
        R.prototype.GetAnchorB = function() {
            return h(ds(this.Zu), r);
        };
        R.prototype.GetReactionForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(es(c, b), r);
        };
        R.prototype.GetReactionTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return gs(c, b);
        };
        R.prototype.GetNext = function() {
            return h(hs(this.Zu), q);
        };
        R.prototype.GetUserData = function() {
            return h(is(this.Zu), m);
        };
        R.prototype.GetCollideConnected = function() {
            return !!js(this.Zu);
        };
        R.prototype.__destroy__ = R.prototype.bv = function() {
            ks(this.Zu);
        };
        function S() {
            this.Zu = ls();
            g(S)[this.Zu] = this;
        }
        S.prototype = Object.create(l.prototype);
        S.prototype.constructor = S;
        S.prototype.$u = S;
        S.av = {};
        a.b2RevoluteJointDef = S;
        S.prototype.Initialize = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            ms(f, b, c, d);
        };
        S.prototype.get_localAnchorA = S.prototype.nv = function() {
            return h(ns(this.Zu), r);
        };
        S.prototype.set_localAnchorA = S.prototype.pv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ps(c, b);
        };
        Object.defineProperty(S.prototype, "localAnchorA", {
            get: S.prototype.nv,
            set: S.prototype.pv
        });
        S.prototype.get_localAnchorB = S.prototype.ov = function() {
            return h(qs(this.Zu), r);
        };
        S.prototype.set_localAnchorB = S.prototype.qv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rs(c, b);
        };
        Object.defineProperty(S.prototype, "localAnchorB", {
            get: S.prototype.ov,
            set: S.prototype.qv
        });
        S.prototype.get_referenceAngle = S.prototype.Ev = function() {
            return ss(this.Zu);
        };
        S.prototype.set_referenceAngle = S.prototype.Kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ts(c, b);
        };
        Object.defineProperty(S.prototype, "referenceAngle", {
            get: S.prototype.Ev,
            set: S.prototype.Kv
        });
        S.prototype.get_enableLimit = S.prototype.zv = function() {
            return !!us(this.Zu);
        };
        S.prototype.set_enableLimit = S.prototype.Fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            vs(c, b);
        };
        Object.defineProperty(S.prototype, "enableLimit", {
            get: S.prototype.zv,
            set: S.prototype.Fv
        });
        S.prototype.get_lowerAngle = S.prototype.zx = function() {
            return xs(this.Zu);
        };
        S.prototype.set_lowerAngle = S.prototype.yz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ys(c, b);
        };
        Object.defineProperty(S.prototype, "lowerAngle", {
            get: S.prototype.zx,
            set: S.prototype.yz
        });
        S.prototype.get_upperAngle = S.prototype.uy = function() {
            return zs(this.Zu);
        };
        S.prototype.set_upperAngle = S.prototype.tA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            As(c, b);
        };
        Object.defineProperty(S.prototype, "upperAngle", {
            get: S.prototype.uy,
            set: S.prototype.tA
        });
        S.prototype.get_enableMotor = S.prototype.Av = function() {
            return !!Bs(this.Zu);
        };
        S.prototype.set_enableMotor = S.prototype.Gv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Cs(c, b);
        };
        Object.defineProperty(S.prototype, "enableMotor", {
            get: S.prototype.Av,
            set: S.prototype.Gv
        });
        S.prototype.get_motorSpeed = S.prototype.Cv = function() {
            return Ds(this.Zu);
        };
        S.prototype.set_motorSpeed = S.prototype.Iv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Es(c, b);
        };
        Object.defineProperty(S.prototype, "motorSpeed", {
            get: S.prototype.Cv,
            set: S.prototype.Iv
        });
        S.prototype.get_maxMotorTorque = S.prototype.Wv = function() {
            return Fs(this.Zu);
        };
        S.prototype.set_maxMotorTorque = S.prototype.qw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Gs(c, b);
        };
        Object.defineProperty(S.prototype, "maxMotorTorque", {
            get: S.prototype.Wv,
            set: S.prototype.qw
        });
        S.prototype.get_type = S.prototype.cv = function() {
            return Hs(this.Zu);
        };
        S.prototype.set_type = S.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Is(c, b);
        };
        Object.defineProperty(S.prototype, "type", {
            get: S.prototype.cv,
            set: S.prototype.ev
        });
        S.prototype.get_userData = S.prototype.dv = function() {
            return h(Js(this.Zu), m);
        };
        S.prototype.set_userData = S.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ks(c, b);
        };
        Object.defineProperty(S.prototype, "userData", {
            get: S.prototype.dv,
            set: S.prototype.fv
        });
        S.prototype.get_bodyA = S.prototype.gv = function() {
            return h(Ls(this.Zu), n);
        };
        S.prototype.set_bodyA = S.prototype.kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ms(c, b);
        };
        Object.defineProperty(S.prototype, "bodyA", {
            get: S.prototype.gv,
            set: S.prototype.kv
        });
        S.prototype.get_bodyB = S.prototype.hv = function() {
            return h(Ns(this.Zu), n);
        };
        S.prototype.set_bodyB = S.prototype.lv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Os(c, b);
        };
        Object.defineProperty(S.prototype, "bodyB", {
            get: S.prototype.hv,
            set: S.prototype.lv
        });
        S.prototype.get_collideConnected = S.prototype.jv = function() {
            return !!Ps(this.Zu);
        };
        S.prototype.set_collideConnected = S.prototype.mv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Qs(c, b);
        };
        Object.defineProperty(S.prototype, "collideConnected", {
            get: S.prototype.jv,
            set: S.prototype.mv
        });
        S.prototype.__destroy__ = S.prototype.bv = function() {
            Rs(this.Zu);
        };
        function Ex(b) {
            b && "object" === typeof b && (b = b.Zu);
            this.Zu = void 0 === b ? Ss() : Ts(b);
            g(Ex)[this.Zu] = this;
        }
        Ex.prototype = Object.create(e.prototype);
        Ex.prototype.constructor = Ex;
        Ex.prototype.$u = Ex;
        Ex.av = {};
        a.b2Rot = Ex;
        Ex.prototype.Set = Ex.prototype.Set = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Us(c, b);
        };
        Ex.prototype.SetIdentity = function() {
            Vs(this.Zu);
        };
        Ex.prototype.GetAngle = function() {
            return Ws(this.Zu);
        };
        Ex.prototype.GetXAxis = function() {
            return h(Xs(this.Zu), r);
        };
        Ex.prototype.GetYAxis = function() {
            return h(Ys(this.Zu), r);
        };
        Ex.prototype.get_s = Ex.prototype.by = function() {
            return Zs(this.Zu);
        };
        Ex.prototype.set_s = Ex.prototype.aA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            $s(c, b);
        };
        Object.defineProperty(Ex.prototype, "s", {
            get: Ex.prototype.by,
            set: Ex.prototype.aA
        });
        Ex.prototype.get_c = Ex.prototype.Qw = function() {
            return at(this.Zu);
        };
        Ex.prototype.set_c = Ex.prototype.Oy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            bt(c, b);
        };
        Object.defineProperty(Ex.prototype, "c", {
            get: Ex.prototype.Qw,
            set: Ex.prototype.Oy
        });
        Ex.prototype.__destroy__ = Ex.prototype.bv = function() {
            ct(this.Zu);
        };
        function T() {
            throw "cannot construct a b2WheelJoint, no constructor in IDL";
        }
        T.prototype = Object.create(q.prototype);
        T.prototype.constructor = T;
        T.prototype.$u = T;
        T.av = {};
        a.b2WheelJoint = T;
        T.prototype.GetLocalAnchorA = function() {
            return h(dt(this.Zu), r);
        };
        T.prototype.GetLocalAnchorB = function() {
            return h(et(this.Zu), r);
        };
        T.prototype.GetLocalAxisA = function() {
            return h(ft(this.Zu), r);
        };
        T.prototype.GetJointTranslation = function() {
            return gt(this.Zu);
        };
        T.prototype.GetJointLinearSpeed = function() {
            return ht(this.Zu);
        };
        T.prototype.GetJointAngle = function() {
            return it(this.Zu);
        };
        T.prototype.GetJointAngularSpeed = function() {
            return jt(this.Zu);
        };
        T.prototype.IsLimitEnabled = function() {
            return !!kt(this.Zu);
        };
        T.prototype.EnableLimit = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            lt(c, b);
        };
        T.prototype.GetLowerLimit = function() {
            return mt(this.Zu);
        };
        T.prototype.GetUpperLimit = function() {
            return nt(this.Zu);
        };
        T.prototype.SetLimits = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            ot(d, b, c);
        };
        T.prototype.IsMotorEnabled = function() {
            return !!pt(this.Zu);
        };
        T.prototype.EnableMotor = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            qt(c, b);
        };
        T.prototype.SetMotorSpeed = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            rt(c, b);
        };
        T.prototype.GetMotorSpeed = function() {
            return st(this.Zu);
        };
        T.prototype.SetMaxMotorTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            tt(c, b);
        };
        T.prototype.GetMaxMotorTorque = function() {
            return ut(this.Zu);
        };
        T.prototype.GetMotorTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return vt(c, b);
        };
        T.prototype.SetStiffness = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            wt(c, b);
        };
        T.prototype.GetStiffness = function() {
            return xt(this.Zu);
        };
        T.prototype.SetDamping = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            yt(c, b);
        };
        T.prototype.GetDamping = function() {
            return zt(this.Zu);
        };
        T.prototype.GetType = function() {
            return At(this.Zu);
        };
        T.prototype.GetBodyA = function() {
            return h(Bt(this.Zu), n);
        };
        T.prototype.GetBodyB = function() {
            return h(Ct(this.Zu), n);
        };
        T.prototype.GetAnchorA = function() {
            return h(Dt(this.Zu), r);
        };
        T.prototype.GetAnchorB = function() {
            return h(Et(this.Zu), r);
        };
        T.prototype.GetReactionForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Ft(c, b), r);
        };
        T.prototype.GetReactionTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return Gt(c, b);
        };
        T.prototype.GetNext = function() {
            return h(Ht(this.Zu), q);
        };
        T.prototype.GetUserData = function() {
            return h(It(this.Zu), m);
        };
        T.prototype.GetCollideConnected = function() {
            return !!Jt(this.Zu);
        };
        T.prototype.__destroy__ = T.prototype.bv = function() {
            Kt(this.Zu);
        };
        function U() {
            this.Zu = Lt();
            g(U)[this.Zu] = this;
        }
        U.prototype = Object.create(l.prototype);
        U.prototype.constructor = U;
        U.prototype.$u = U;
        U.av = {};
        a.b2WheelJointDef = U;
        U.prototype.Initialize = function(b, c, d, f) {
            var p = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            f && "object" === typeof f && (f = f.Zu);
            Mt(p, b, c, d, f);
        };
        U.prototype.get_localAnchorA = U.prototype.nv = function() {
            return h(Nt(this.Zu), r);
        };
        U.prototype.set_localAnchorA = U.prototype.pv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ot(c, b);
        };
        Object.defineProperty(U.prototype, "localAnchorA", {
            get: U.prototype.nv,
            set: U.prototype.pv
        });
        U.prototype.get_localAnchorB = U.prototype.ov = function() {
            return h(Pt(this.Zu), r);
        };
        U.prototype.set_localAnchorB = U.prototype.qv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Qt(c, b);
        };
        Object.defineProperty(U.prototype, "localAnchorB", {
            get: U.prototype.ov,
            set: U.prototype.qv
        });
        U.prototype.get_localAxisA = U.prototype.Rv = function() {
            return h(Rt(this.Zu), r);
        };
        U.prototype.set_localAxisA = U.prototype.lw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            St(c, b);
        };
        Object.defineProperty(U.prototype, "localAxisA", {
            get: U.prototype.Rv,
            set: U.prototype.lw
        });
        U.prototype.get_enableLimit = U.prototype.zv = function() {
            return !!Tt(this.Zu);
        };
        U.prototype.set_enableLimit = U.prototype.Fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ut(c, b);
        };
        Object.defineProperty(U.prototype, "enableLimit", {
            get: U.prototype.zv,
            set: U.prototype.Fv
        });
        U.prototype.get_lowerTranslation = U.prototype.Tv = function() {
            return Vt(this.Zu);
        };
        U.prototype.set_lowerTranslation = U.prototype.nw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Wt(c, b);
        };
        Object.defineProperty(U.prototype, "lowerTranslation", {
            get: U.prototype.Tv,
            set: U.prototype.nw
        });
        U.prototype.get_upperTranslation = U.prototype.ew = function() {
            return Xt(this.Zu);
        };
        U.prototype.set_upperTranslation = U.prototype.zw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Yt(c, b);
        };
        Object.defineProperty(U.prototype, "upperTranslation", {
            get: U.prototype.ew,
            set: U.prototype.zw
        });
        U.prototype.get_enableMotor = U.prototype.Av = function() {
            return !!Zt(this.Zu);
        };
        U.prototype.set_enableMotor = U.prototype.Gv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            $t(c, b);
        };
        Object.defineProperty(U.prototype, "enableMotor", {
            get: U.prototype.Av,
            set: U.prototype.Gv
        });
        U.prototype.get_maxMotorTorque = U.prototype.Wv = function() {
            return au(this.Zu);
        };
        U.prototype.set_maxMotorTorque = U.prototype.qw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            bu(c, b);
        };
        Object.defineProperty(U.prototype, "maxMotorTorque", {
            get: U.prototype.Wv,
            set: U.prototype.qw
        });
        U.prototype.get_motorSpeed = U.prototype.Cv = function() {
            return cu(this.Zu);
        };
        U.prototype.set_motorSpeed = U.prototype.Iv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            du(c, b);
        };
        Object.defineProperty(U.prototype, "motorSpeed", {
            get: U.prototype.Cv,
            set: U.prototype.Iv
        });
        U.prototype.get_stiffness = U.prototype.xv = function() {
            return eu(this.Zu);
        };
        U.prototype.set_stiffness = U.prototype.yv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            fu(c, b);
        };
        Object.defineProperty(U.prototype, "stiffness", {
            get: U.prototype.xv,
            set: U.prototype.yv
        });
        U.prototype.get_damping = U.prototype.rv = function() {
            return gu(this.Zu);
        };
        U.prototype.set_damping = U.prototype.uv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            hu(c, b);
        };
        Object.defineProperty(U.prototype, "damping", {
            get: U.prototype.rv,
            set: U.prototype.uv
        });
        U.prototype.get_type = U.prototype.cv = function() {
            return iu(this.Zu);
        };
        U.prototype.set_type = U.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ju(c, b);
        };
        Object.defineProperty(U.prototype, "type", {
            get: U.prototype.cv,
            set: U.prototype.ev
        });
        U.prototype.get_userData = U.prototype.dv = function() {
            return h(ku(this.Zu), m);
        };
        U.prototype.set_userData = U.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            lu(c, b);
        };
        Object.defineProperty(U.prototype, "userData", {
            get: U.prototype.dv,
            set: U.prototype.fv
        });
        U.prototype.get_bodyA = U.prototype.gv = function() {
            return h(mu(this.Zu), n);
        };
        U.prototype.set_bodyA = U.prototype.kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            nu(c, b);
        };
        Object.defineProperty(U.prototype, "bodyA", {
            get: U.prototype.gv,
            set: U.prototype.kv
        });
        U.prototype.get_bodyB = U.prototype.hv = function() {
            return h(ou(this.Zu), n);
        };
        U.prototype.set_bodyB = U.prototype.lv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            pu(c, b);
        };
        Object.defineProperty(U.prototype, "bodyB", {
            get: U.prototype.hv,
            set: U.prototype.lv
        });
        U.prototype.get_collideConnected = U.prototype.jv = function() {
            return !!qu(this.Zu);
        };
        U.prototype.set_collideConnected = U.prototype.mv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ru(c, b);
        };
        Object.defineProperty(U.prototype, "collideConnected", {
            get: U.prototype.jv,
            set: U.prototype.mv
        });
        U.prototype.__destroy__ = U.prototype.bv = function() {
            su(this.Zu);
        };
        function $x() {
            throw "cannot construct a b2MotorJoint, no constructor in IDL";
        }
        $x.prototype = Object.create(q.prototype);
        $x.prototype.constructor = $x;
        $x.prototype.$u = $x;
        $x.av = {};
        a.b2MotorJoint = $x;
        $x.prototype.SetLinearOffset = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            tu(c, b);
        };
        $x.prototype.GetLinearOffset = function() {
            return h(uu(this.Zu), r);
        };
        $x.prototype.SetAngularOffset = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            vu(c, b);
        };
        $x.prototype.GetAngularOffset = function() {
            return wu(this.Zu);
        };
        $x.prototype.SetMaxForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            xu(c, b);
        };
        $x.prototype.GetMaxForce = function() {
            return yu(this.Zu);
        };
        $x.prototype.SetMaxTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            zu(c, b);
        };
        $x.prototype.GetMaxTorque = function() {
            return Au(this.Zu);
        };
        $x.prototype.SetCorrectionFactor = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Bu(c, b);
        };
        $x.prototype.GetCorrectionFactor = function() {
            return Cu(this.Zu);
        };
        $x.prototype.GetType = function() {
            return Du(this.Zu);
        };
        $x.prototype.GetBodyA = function() {
            return h(Eu(this.Zu), n);
        };
        $x.prototype.GetBodyB = function() {
            return h(Fu(this.Zu), n);
        };
        $x.prototype.GetAnchorA = function() {
            return h(Gu(this.Zu), r);
        };
        $x.prototype.GetAnchorB = function() {
            return h(Hu(this.Zu), r);
        };
        $x.prototype.GetReactionForce = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return h(Iu(c, b), r);
        };
        $x.prototype.GetReactionTorque = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            return Ju(c, b);
        };
        $x.prototype.GetNext = function() {
            return h(Ku(this.Zu), q);
        };
        $x.prototype.GetUserData = function() {
            return h(Lu(this.Zu), m);
        };
        $x.prototype.GetCollideConnected = function() {
            return !!Mu(this.Zu);
        };
        $x.prototype.__destroy__ = $x.prototype.bv = function() {
            Nu(this.Zu);
        };
        function V() {
            this.Zu = Ou();
            g(V)[this.Zu] = this;
        }
        V.prototype = Object.create(l.prototype);
        V.prototype.constructor = V;
        V.prototype.$u = V;
        V.av = {};
        a.b2MotorJointDef = V;
        V.prototype.Initialize = function(b, c) {
            var d = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            Pu(d, b, c);
        };
        V.prototype.get_linearOffset = V.prototype.wx = function() {
            return h(Qu(this.Zu), r);
        };
        V.prototype.set_linearOffset = V.prototype.vz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ru(c, b);
        };
        Object.defineProperty(V.prototype, "linearOffset", {
            get: V.prototype.wx,
            set: V.prototype.vz
        });
        V.prototype.get_angularOffset = V.prototype.Gw = function() {
            return Su(this.Zu);
        };
        V.prototype.set_angularOffset = V.prototype.Ey = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Tu(c, b);
        };
        Object.defineProperty(V.prototype, "angularOffset", {
            get: V.prototype.Gw,
            set: V.prototype.Ey
        });
        V.prototype.get_maxForce = V.prototype.Bv = function() {
            return Uu(this.Zu);
        };
        V.prototype.set_maxForce = V.prototype.Hv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Vu(c, b);
        };
        Object.defineProperty(V.prototype, "maxForce", {
            get: V.prototype.Bv,
            set: V.prototype.Hv
        });
        V.prototype.get_maxTorque = V.prototype.Xv = function() {
            return Wu(this.Zu);
        };
        V.prototype.set_maxTorque = V.prototype.rw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Xu(c, b);
        };
        Object.defineProperty(V.prototype, "maxTorque", {
            get: V.prototype.Xv,
            set: V.prototype.rw
        });
        V.prototype.get_correctionFactor = V.prototype.Ww = function() {
            return Yu(this.Zu);
        };
        V.prototype.set_correctionFactor = V.prototype.Uy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Zu(c, b);
        };
        Object.defineProperty(V.prototype, "correctionFactor", {
            get: V.prototype.Ww,
            set: V.prototype.Uy
        });
        V.prototype.get_type = V.prototype.cv = function() {
            return $u(this.Zu);
        };
        V.prototype.set_type = V.prototype.ev = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            av(c, b);
        };
        Object.defineProperty(V.prototype, "type", {
            get: V.prototype.cv,
            set: V.prototype.ev
        });
        V.prototype.get_userData = V.prototype.dv = function() {
            return h(bv(this.Zu), m);
        };
        V.prototype.set_userData = V.prototype.fv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            cv(c, b);
        };
        Object.defineProperty(V.prototype, "userData", {
            get: V.prototype.dv,
            set: V.prototype.fv
        });
        V.prototype.get_bodyA = V.prototype.gv = function() {
            return h(dv(this.Zu), n);
        };
        V.prototype.set_bodyA = V.prototype.kv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ev(c, b);
        };
        Object.defineProperty(V.prototype, "bodyA", {
            get: V.prototype.gv,
            set: V.prototype.kv
        });
        V.prototype.get_bodyB = V.prototype.hv = function() {
            return h(fv(this.Zu), n);
        };
        V.prototype.set_bodyB = V.prototype.lv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            gv(c, b);
        };
        Object.defineProperty(V.prototype, "bodyB", {
            get: V.prototype.hv,
            set: V.prototype.lv
        });
        V.prototype.get_collideConnected = V.prototype.jv = function() {
            return !!hv(this.Zu);
        };
        V.prototype.set_collideConnected = V.prototype.mv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            iv(c, b);
        };
        Object.defineProperty(V.prototype, "collideConnected", {
            get: V.prototype.jv,
            set: V.prototype.mv
        });
        V.prototype.__destroy__ = V.prototype.bv = function() {
            jv(this.Zu);
        };
        function X() {
            this.Zu = kv();
            g(X)[this.Zu] = this;
        }
        X.prototype = Object.create(e.prototype);
        X.prototype.constructor = X;
        X.prototype.$u = X;
        X.av = {};
        a.b2RopeTuning = X;
        X.prototype.get_stretchingModel = X.prototype.ny = function() {
            return lv(this.Zu);
        };
        X.prototype.set_stretchingModel = X.prototype.mA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            mv(c, b);
        };
        Object.defineProperty(X.prototype, "stretchingModel", {
            get: X.prototype.ny,
            set: X.prototype.mA
        });
        X.prototype.get_bendingModel = X.prototype.Nw = function() {
            return nv(this.Zu);
        };
        X.prototype.set_bendingModel = X.prototype.Ly = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ov(c, b);
        };
        Object.defineProperty(X.prototype, "bendingModel", {
            get: X.prototype.Nw,
            set: X.prototype.Ly
        });
        X.prototype.get_damping = X.prototype.rv = function() {
            return pv(this.Zu);
        };
        X.prototype.set_damping = X.prototype.uv = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            qv(c, b);
        };
        Object.defineProperty(X.prototype, "damping", {
            get: X.prototype.rv,
            set: X.prototype.uv
        });
        X.prototype.get_stretchStiffness = X.prototype.my = function() {
            return rv(this.Zu);
        };
        X.prototype.set_stretchStiffness = X.prototype.lA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            sv(c, b);
        };
        Object.defineProperty(X.prototype, "stretchStiffness", {
            get: X.prototype.my,
            set: X.prototype.lA
        });
        X.prototype.get_stretchHertz = X.prototype.ly = function() {
            return tv(this.Zu);
        };
        X.prototype.set_stretchHertz = X.prototype.kA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            uv(c, b);
        };
        Object.defineProperty(X.prototype, "stretchHertz", {
            get: X.prototype.ly,
            set: X.prototype.kA
        });
        X.prototype.get_stretchDamping = X.prototype.ky = function() {
            return vv(this.Zu);
        };
        X.prototype.set_stretchDamping = X.prototype.jA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            wv(c, b);
        };
        Object.defineProperty(X.prototype, "stretchDamping", {
            get: X.prototype.ky,
            set: X.prototype.jA
        });
        X.prototype.get_bendStiffness = X.prototype.Mw = function() {
            return xv(this.Zu);
        };
        X.prototype.set_bendStiffness = X.prototype.Ky = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            yv(c, b);
        };
        Object.defineProperty(X.prototype, "bendStiffness", {
            get: X.prototype.Mw,
            set: X.prototype.Ky
        });
        X.prototype.get_bendHertz = X.prototype.Lw = function() {
            return zv(this.Zu);
        };
        X.prototype.set_bendHertz = X.prototype.Jy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Av(c, b);
        };
        Object.defineProperty(X.prototype, "bendHertz", {
            get: X.prototype.Lw,
            set: X.prototype.Jy
        });
        X.prototype.get_bendDamping = X.prototype.Kw = function() {
            return Bv(this.Zu);
        };
        X.prototype.set_bendDamping = X.prototype.Iy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Cv(c, b);
        };
        Object.defineProperty(X.prototype, "bendDamping", {
            get: X.prototype.Kw,
            set: X.prototype.Iy
        });
        X.prototype.get_isometric = X.prototype.nx = function() {
            return !!Dv(this.Zu);
        };
        X.prototype.set_isometric = X.prototype.lz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ev(c, b);
        };
        Object.defineProperty(X.prototype, "isometric", {
            get: X.prototype.nx,
            set: X.prototype.lz
        });
        X.prototype.get_fixedEffectiveMass = X.prototype.ax = function() {
            return !!Fv(this.Zu);
        };
        X.prototype.set_fixedEffectiveMass = X.prototype.Zy = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Gv(c, b);
        };
        Object.defineProperty(X.prototype, "fixedEffectiveMass", {
            get: X.prototype.ax,
            set: X.prototype.Zy
        });
        X.prototype.get_warmStart = X.prototype.yy = function() {
            return !!Hv(this.Zu);
        };
        X.prototype.set_warmStart = X.prototype.xA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Iv(c, b);
        };
        Object.defineProperty(X.prototype, "warmStart", {
            get: X.prototype.yy,
            set: X.prototype.xA
        });
        X.prototype.__destroy__ = X.prototype.bv = function() {
            Jv(this.Zu);
        };
        function Y() {
            this.Zu = Kv();
            g(Y)[this.Zu] = this;
        }
        Y.prototype = Object.create(e.prototype);
        Y.prototype.constructor = Y;
        Y.prototype.$u = Y;
        Y.av = {};
        a.b2RopeDef = Y;
        Y.prototype.get_position = Y.prototype.bw = function() {
            return h(Lv(this.Zu), r);
        };
        Y.prototype.set_position = Y.prototype.ww = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Mv(c, b);
        };
        Object.defineProperty(Y.prototype, "position", {
            get: Y.prototype.bw,
            set: Y.prototype.ww
        });
        Y.prototype.get_vertices = Y.prototype.xy = function() {
            return h(Nv(this.Zu), r);
        };
        Y.prototype.set_vertices = Y.prototype.wA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Ov(c, b);
        };
        Object.defineProperty(Y.prototype, "vertices", {
            get: Y.prototype.xy,
            set: Y.prototype.wA
        });
        Y.prototype.get_count = Y.prototype.Nv = function() {
            return Pv(this.Zu);
        };
        Y.prototype.set_count = Y.prototype.hw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Qv(c, b);
        };
        Object.defineProperty(Y.prototype, "count", {
            get: Y.prototype.Nv,
            set: Y.prototype.hw
        });
        Y.prototype.get_gravity = Y.prototype.fx = function() {
            return h(Rv(this.Zu), r);
        };
        Y.prototype.set_gravity = Y.prototype.dz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Sv(c, b);
        };
        Object.defineProperty(Y.prototype, "gravity", {
            get: Y.prototype.fx,
            set: Y.prototype.dz
        });
        Y.prototype.get_tuning = Y.prototype.ry = function() {
            return h(Tv(this.Zu), X);
        };
        Y.prototype.set_tuning = Y.prototype.qA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Uv(c, b);
        };
        Object.defineProperty(Y.prototype, "tuning", {
            get: Y.prototype.ry,
            set: Y.prototype.qA
        });
        Y.prototype.__destroy__ = Y.prototype.bv = function() {
            Vv(this.Zu);
        };
        function ay() {
            this.Zu = Wv();
            g(ay)[this.Zu] = this;
        }
        ay.prototype = Object.create(e.prototype);
        ay.prototype.constructor = ay;
        ay.prototype.$u = ay;
        ay.av = {};
        a.b2Rope = ay;
        ay.prototype.Create = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Xv(c, b);
        };
        ay.prototype.SetTuning = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Yv(c, b);
        };
        ay.prototype.Step = function(b, c, d) {
            var f = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            c && "object" === typeof c && (c = c.Zu);
            d && "object" === typeof d && (d = d.Zu);
            Zv(f, b, c, d);
        };
        ay.prototype.Reset = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            $v(c, b);
        };
        ay.prototype.Draw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            aw(c, b);
        };
        ay.prototype.__destroy__ = ay.prototype.bv = function() {
            bw(this.Zu);
        };
        function by() {
            this.Zu = cw();
            g(by)[this.Zu] = this;
        }
        by.prototype = Object.create(e.prototype);
        by.prototype.constructor = by;
        by.prototype.$u = by;
        by.av = {};
        a.b2ClipVertex = by;
        by.prototype.get_v = by.prototype.wy = function() {
            return h(dw(this.Zu), r);
        };
        by.prototype.set_v = by.prototype.vA = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            ew(c, b);
        };
        Object.defineProperty(by.prototype, "v", {
            get: by.prototype.wy,
            set: by.prototype.vA
        });
        by.prototype.get_id = by.prototype.Qv = function() {
            return h(fw(this.Zu), Mx);
        };
        by.prototype.set_id = by.prototype.kw = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            gw(c, b);
        };
        Object.defineProperty(by.prototype, "id", {
            get: by.prototype.Qv,
            set: by.prototype.kw
        });
        by.prototype.__destroy__ = by.prototype.bv = function() {
            hw(this.Zu);
        };
        (function() {
            function b() {
                a.b2Shape.e_circle = iw();
                a.b2Shape.e_edge = jw();
                a.b2Shape.e_polygon = kw();
                a.b2Shape.e_chain = lw();
                a.b2Shape.e_typeCount = mw();
                a.b2_staticBody = nw();
                a.b2_kinematicBody = ow();
                a.b2_dynamicBody = pw();
                a.e_unknownJoint = qw();
                a.e_revoluteJoint = rw();
                a.e_prismaticJoint = sw();
                a.e_distanceJoint = tw();
                a.e_pulleyJoint = uw();
                a.e_mouseJoint = vw();
                a.e_gearJoint = ww();
                a.e_wheelJoint = xw();
                a.e_weldJoint = yw();
                a.e_frictionJoint = zw();
                a.e_ropeJoint = Aw();
                a.e_motorJoint = Bw();
                a.b2ContactFeature.e_vertex = Cw();
                a.b2ContactFeature.e_face = Dw();
                a.b2Draw.e_shapeBit = Ew();
                a.b2Draw.e_jointBit = Fw();
                a.b2Draw.e_aabbBit = Gw();
                a.b2Draw.e_pairBit = Hw();
                a.b2Draw.e_centerOfMassBit = Iw();
                a.b2Manifold.e_circles = Jw();
                a.b2Manifold.e_faceA = Kw();
                a.b2Manifold.e_faceB = Lw();
                a.b2_nullState = Mw();
                a.b2_addState = Nw();
                a.b2_persistState = Ow();
                a.b2_removeState = Pw();
                a.b2_pbdStretchingModel = Qw();
                a.b2_xpbdStretchingModel = Rw();
                a.b2_springAngleBendingModel = Sw();
                a.b2_pbdAngleBendingModel = Tw();
                a.b2_xpbdAngleBendingModel = Uw();
                a.b2_pbdDistanceBendingModel = Vw();
                a.b2_pbdHeightBendingModel = Ww();
            }
            Ga ? b() : Ea.unshift(b);
        })();
        Y.prototype.get_masses = Y.prototype.Nx = function() {
            return h(Xw(this.Zu), r);
        };
        Y.prototype.set_masses = Y.prototype.Mz = function(b) {
            var c = this.Zu;
            b && "object" === typeof b && (b = b.Zu);
            Yw(c, b);
        };
        Object.defineProperty(Y.prototype, "masses", {
            get: Y.prototype.Nx,
            set: Y.prototype.Mz
        });
        const Z = (b)=>"object" === typeof b ? b.Zu : b;
        a.b2GetPointStates = (b, c, d, f)=>{
            Zw(Z(b), Z(c), Z(d), Z(f));
        };
        a.b2CollideCircles = (b, c, d, f, p)=>{
            $w(Z(b), Z(c), Z(d), Z(f), Z(p));
        };
        a.b2CollidePolygonAndCircle = (b, c, d, f, p)=>{
            ax(Z(b), Z(c), Z(d), Z(f), Z(p));
        };
        a.b2CollidePolygons = (b, c, d, f, p)=>{
            bx(Z(b), Z(c), Z(d), Z(f), Z(p));
        };
        a.b2CollideEdgeAndCircle = (b, c, d, f, p)=>{
            cx(Z(b), Z(c), Z(d), Z(f), Z(p));
        };
        a.b2CollideEdgeAndPolygon = (b, c, d, f, p)=>{
            dx(Z(b), Z(c), Z(d), Z(f), Z(p));
        };
        a.b2ClipSegmentToLine = (b, c, d, f, p)=>ex(Z(b), Z(c), Z(d), f, p);
        a.b2TestOverlap = (b, c, d, f, p, W)=>void 0 === d ? !!gx(Z(b), Z(c)) : !!fx(Z(b), c, Z(d), f, Z(p), Z(W));
        a.reifyArray = (b, c, d, f)=>Array.from({
                length: c
            }, (p, W)=>h(b + W * d, f));
        a.pointsToVec2Array = (b)=>{
            const c = new Float32Array(2 * b.length);
            for(let f = 0; f < b.length; f++){
                const { x: p, y: W } = b[f];
                c[2 * f] = p;
                c[2 * f + 1] = W;
            }
            const d = a._malloc(c.byteLength);
            za.set(c, d >> 2);
            return [
                h(d, r),
                ()=>a._free(d)
            ];
        };
        a.tuplesToVec2Array = (b)=>{
            const c = new Float32Array(2 * b.length);
            for(let f = 0; f < b.length; f++){
                const [p, W] = b[f];
                c[2 * f] = p;
                c[2 * f + 1] = W;
            }
            const d = a._malloc(c.byteLength);
            za.set(c, d >> 2);
            return [
                h(d, r),
                ()=>a._free(d)
            ];
        };
        a.toFloatArray = (b)=>{
            b = new Float32Array(b);
            const c = a._malloc(b.byteLength);
            za.set(b, c >> 2);
            return [
                h(c),
                ()=>a._free(c)
            ];
        };
        a.sizeof = (b)=>{
            const c = new b;
            b = new b;
            const d = b.Zu - c.Zu;
            b.bv();
            c.bv();
            return d;
        };
        a.allocateArray = (b, c, d = 1)=>{
            c = new ArrayBuffer(c * d);
            const f = a._malloc(c.byteLength);
            wa.set(c, f);
            return [
                h(f, b),
                ()=>a._free(f)
            ];
        };
        a.b2LinearStiffness = (b, c, d, f, p, W)=>{
            hx(Z(b), Z(c), d, f, Z(p), Z(W));
        };
        a.b2AngularStiffness = (b, c, d, f, p, W)=>{
            ix(Z(b), Z(c), d, f, Z(p), Z(W));
        };
        function cy() {
            this.Lv = new Map;
            this.recordLeak = this.recordLeak.bind(this);
            this.safeWrapPointer = this.safeWrapPointer.bind(this);
            this.freeLeaked = this.freeLeaked.bind(this);
        }
        cy.prototype.constructor = cy;
        cy.freeFromCache = function(b, c = a.getClass(b)) {
            delete a.getCache(c)[a.getPointer(b)];
        };
        cy.prototype.recordLeak = function(b, c = a.getClass(b)) {
            const d = this.Lv.get(c) ?? new Set;
            d.add(b);
            this.Lv.set(c, d);
            return b;
        };
        cy.prototype.safeWrapPointer = function(b, c) {
            return this.CA(a.wrapPointer(b, c), c);
        };
        cy.prototype.freeLeaked = function() {
            Array.from(this.Lv.entries()).forEach(([b, c])=>{
                b = a.getCache(b);
                for (const d of c)delete b[a.getPointer(d)];
            });
            this.Lv.clear();
        };
        a.LeakMitigator = cy;
        return Box2D.ready;
    };
}();
exports.default = Box2D;

},{"c816184f70aea6a7":"d5jf4","8ae2bffd29666746":"loE3o","5a6be442a7e4ca1f":"jhUEF","225a2dd62e292c4c":"gZ0DR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gZ0DR":[function(require,module,exports) {
module.exports = require("1a9e2f6e4d072c2a").getBundleURL("59Hq6") + "Box2D.simd.2b7312ef.wasm" + "?" + Date.now();

},{"1a9e2f6e4d072c2a":"lgJ39"}]},["j8JCP"], null, "parcelRequire5cc2")

//# sourceMappingURL=Box2D.simd.3fad8024.js.map
