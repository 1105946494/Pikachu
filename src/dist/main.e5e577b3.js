// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "\n.skin *{box-sizing: border-box;margin: 0;padding: 0;}\n.skin *::before, .skin *::after{box-sizing: border-box;}\n/*\n * \u9996\u5148\uFF0C\u9700\u8981\u51C6\u5907\u76AE\u5361\u4E18\u7684\u76AE\n */\n.skin{\n    background: #ffe600;\n    min-height: 50vh;\n    position: relative;\n}\n/*\n* \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u9F3B\u5B50\n*/\n.nose{\n    border:10px solid black;\n    border-color: black transparent transparent;\n    position: relative;\n    border-bottom: none;\n    width: 0px;\n    height: 0px;\n    left: 50%;\n    top: 145px;\n    margin-left: -10px;\n    z-index: 10;\n}\n@keyframes wave{\n    0%{\n        transform: rotate(0deg);\n    }\n    33%{\n        transform: rotate(10deg);\n    }\n    66%{\n        transform: rotate(-10deg);\n    }\n    100%{\n        transform: rotate(0deg);\n    }\n}\n.nose:hover{\n    transform-origin: 50% 100%;\nanimation: wave 300ms infinite linear;\n}\n/*\n* \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u7EA2\u5708\n*/\n.yuan{\n    position: absolute;\n    width: 20px;\n    height: 6px;\n    top: -16px;\n    left: -10px;\n    background:black;\n    border-radius: 10px 10px 0px 0px;\n}\n/*\n* \u63A5\u4E0B\u6765\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u773C\u775B\n*/\n.eye{\n    border: 2px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background:#2e2e2e;\n    border-radius: 50%;\n}\n/*\n* \u773C\u775B\u91CC\u9762\u7684\u73E0\u5B50\n*/\n.eye::before{\n    content: '';\n    display: block;\n    border: 3px solid #000;\n    width: 30px;\n    height: 30px;\n    background: white;\n    border-radius: 50%;\n    position: absolute;\n    left: 4px;\n    top: 2px;\n}\n/*\n* \u5DE6\u773C\u5728\u5DE6\u8FB9\uFF08\u5E9F\u8BDD\uFF09\n*/\n.eye.left{\n    transform:translateX(-100px);\n}\n/*\n* \u53F3\u773C\u5728\u53F3\u8FB9\uFF08\u5E9F\u8BDD\uFF09\n*/\n.eye.right{\n    transform: translateX(100px);\n}\n.mouth{\nwidth: 200px;\nheight: 200px;\nposition: absolute;\nleft: 50%;\ntop: 170px;\nmargin-left: -100px;\n}\n.mouth .up{\nposition: relative;\ntop: -20px;\nz-index: 1;\n}\n.mouth .up .lip{\n    background: #ffe600;\n    border: 3px solid black;\n    height: 30px;\n    width: 100px; \n    border-top-color: transparent;\n    border-right-color: transparent;\n    position: relative;\n    position: absolute;\n    left: 50%;\n    margin-left: -50px;\n}\n.mouth .up .lip.left{\nborder-radius: 0 0 0 50px;\ntransform: rotate(-15deg) translateX(-53px);\n}\n.mouth .up .lip.right{\n    border-radius: 0 0 50px 0;\n    transform: rotate(15deg) translateX(53px);\n}\n.mouth .up .lip::before{\n    content: '';\n    display: block;\n    width: 7px;\n    height: 30px;\n    position: absolute;\n    bottom: 0;\n    background: #ffe600;\n}\n.mouth .up .lip.left::before{\n    right: -6px;\n}\n.mouth .up .lip.right::before{\n    left: -6px;\n}\n.mouth .down{\nheight: 180px;\nposition: absolute;\ntop: 6px;\nwidth: 100%;\noverflow: hidden;\n}\n.mouth .down .yuan1{\nborder: 3px solid black;\nwidth: 150px;\nheight: 10000px;\nposition: absolute;\nbottom: 0;\nleft: 50%;\nmargin-left: -75px;\nborder-radius: 75px/300px;\nbackground: #9b000a;\noverflow: hidden;\n}\n.mouth .down .yuan1 .yuan2{\n    width: 200px;\n    height: 300px;\n    background:#ff485f;\n    position: absolute;\n    bottom: -155px;\n    left: 50%;\n    margin-left: -100px;\n    border-radius: 100px;\n}\n/*\n* \u7136\u540E\uFF0C\u753B\u76AE\u5361\u4E18\u7684\u8138\n*/\n.face{\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n    z-index: 2;\n}\n/*\n* \u5C06\u8138\u653E\u5230\u6B63\u786E\u7684\u4F4D\u7F6E\n*/\n.face.left{\n    transform: translateX(-180px);\n    background: #ff0000;\n    border-radius: 50%;\n}\n.face.right{\n    transform: translateX(180px);\n    background: #ff0000;\n    border-radius: 50%;\n}\n/*\n* \u597D\u4E86\uFF0C\u8FD9\u53EA\u76AE\u5361\u4E18\u9001\u7ED9\u4F60\n*/";
var _default = string;
exports.default = _default;
},{}],"epB2":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var demo = document.querySelector("#demo");
var demo2 = document.querySelector("#demo2");
var n = 1;
var time = 10;
var id;
var player = {
  init: function init() {
    id = player.play();
    demo.innerHTML = _css.default.substr(0, n);
    demo2.innerText = _css.default.substr(0, n);

    document.querySelector("#bofan").onclick = function () {
      player.pause(), player.play(), player.remove("bofan");
    };

    player.bindEvents();
  },
  remove: function remove(xxx) {
    var list = {
      zanting: "zanting",
      mansu: "mansu",
      zhongsu: "zhongsu",
      kuaisu: "kuaisu",
      bofan: "bofan"
    };

    for (var key in list) {
      document.getElementById(key).classList.remove("active");
    }

    document.getElementById(xxx).classList.add("active");
  },
  bindEvents: function bindEvents() {
    var hashtable = {
      "#zanting": player.pause,
      "#mansu": player.solw,
      "#zhongsu": player.normal,
      "#kuaisu": player.fast
    };

    for (var key in hashtable) {
      document.querySelector(key).onclick = hashtable[key];
    }
  },
  a: function a() {
    n += 1;

    if (n > _css.default.length) {
      window.clearInterval(id);
      return;
    }

    demo.innerHTML = _css.default.substr(0, n);
    demo2.innerText = _css.default.substr(0, n);
    demo2.scrollTop = demo2.scrollHeight;
  },
  play: function play() {
    return id = setInterval(player.a, time);
  },
  pause: function pause() {
    window.clearInterval(id);
    player.remove("zanting");
  },
  solw: function solw() {
    player.pause();
    time = 100;
    player.play();
    player.remove("mansu");
  },
  normal: function normal() {
    player.pause();
    time = 50;
    player.play();
    player.remove("zhongsu");
  },
  fast: function fast() {
    player.pause();
    time = 0;
    player.play();
    player.remove("kuaisu");
  }
};
player.init();
},{"./css":"K4Xi"}]},{},["epB2"], null)
//# sourceMappingURL=main.e5e577b3.js.map