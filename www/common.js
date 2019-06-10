(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-3b0e1c7b.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-3b0e1c7b.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKDROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return dismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return eventMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return present; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return dismissOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getTopOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return removeLastOverlay; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var lastId = 1;
function createOverlay(e, t) { Object.assign(e, t), e.overlayId = lastId++; var n = e.ownerDocument; return (n.querySelector("ion-app") || n.body).appendChild(e), e.componentOnReady(); }
function dismissOverlay(e, t, n, i) { i = i >= 0 ? i : getHighestId(n); var o = n.get(i); return o ? o.dismiss(e, t) : Promise.reject("overlay does not exist"); }
function getTopOverlay(e) { return e.get(getHighestId(e)); }
function getHighestId(e) { var t = -1; return e.forEach(function (e, n) { n > t && (t = n); }), t; }
function removeLastOverlay(e) { var t = getTopOverlay(e); return t ? t.dismiss() : Promise.resolve(); }
function present(e, t, n, i, o) {
    return __awaiter(this, void 0, void 0, function () { var a; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (e.presented)
                    return [2 /*return*/];
                e.presented = !0, e.willPresent.emit();
                a = e.enterAnimation ? e.enterAnimation : e.config.get(t, "ios" === e.mode ? n : i);
                return [4 /*yield*/, overlayAnimation(e, a, e.el, o)];
            case 1:
                _a.sent(), e.didPresent.emit();
                return [2 /*return*/];
        }
    }); });
}
function dismiss(e, t, n, i, o, a, s) {
    return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!e.presented)
                    return [2 /*return*/];
                e.presented = !1, e.willDismiss.emit({ data: t, role: n });
                r = e.leaveAnimation ? e.leaveAnimation : e.config.get(i, "ios" === e.mode ? o : a);
                return [4 /*yield*/, overlayAnimation(e, r, e.el, s)];
            case 1:
                _a.sent(), e.didDismiss.emit({ data: t, role: n }), e.el.remove();
                return [2 /*return*/];
        }
    }); });
}
function overlayAnimation(e, t, n, i) {
    return __awaiter(this, void 0, void 0, function () { var e_1, o, _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                if (e.keyboardClose) {
                    e_1 = n.ownerDocument.activeElement;
                    e_1 && e_1.blur && e_1.blur();
                }
                e.animation && (e.animation.destroy(), e.animation = void 0);
                _a = e;
                return [4 /*yield*/, e.animationCtrl.create(t, n, i)];
            case 1:
                o = _a.animation = _b.sent();
                e.animation = o, e.willAnimate || o.duration(0);
                return [4 /*yield*/, o.playAsync()];
            case 2:
                _b.sent(), o.destroy(), e.animation = void 0;
                return [2 /*return*/];
        }
    }); });
}
function eventMethod(e, t, n) { var i; var o = new Promise(function (e) { return i = e; }); return onceEvent(e, t, function (e) { var t = e.detail; n && n(t), i(t); }), o; }
function onceEvent(e, t, n) { var i = function (o) { e.removeEventListener(t, i), n(o); }; e.addEventListener(t, i); }
function isCancel(e) { return "cancel" === e || e === BACKDROP; }
var BACKDROP = "backdrop";



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-410a1e2e.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-410a1e2e.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h, i, j, k, l */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isCordova; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isElectron; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isIpad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isIphone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isPhablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isTablet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return matchMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return isHybrid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return needInputShims; });
function isIpad(i) { return testUserAgent(i, /iPad/i); }
function isIphone(i) { return testUserAgent(i, /iPhone/i); }
function isIOS(i) { return testUserAgent(i, /iPad|iPhone|iPod/i); }
function isAndroid(i) { return !isIOS(i); }
function isPhablet(i) { var t = i.innerWidth, n = i.innerHeight, e = Math.min(t, n), s = Math.max(t, n); return e > 390 && e < 520 && s > 620 && s < 800; }
function isTablet(i) { var t = i.innerWidth, n = i.innerHeight, e = Math.min(t, n), s = Math.max(t, n); return e > 460 && e < 820 && s > 780 && s < 1400; }
function isDevice(i) { return matchMedia(i, "(any-pointer:coarse)"); }
function isHybrid(i) { return isCordova(i) || isCapacitorNative(i); }
function isCordova(i) { var t = i; return !!(t.cordova || t.phonegap || t.PhoneGap); }
function isCapacitorNative(i) { var t = i.Capacitor; return !(!t || !t.isNative); }
function isElectron(i) { return testUserAgent(i, /electron/); }
function needInputShims(i) { return isIOS(i) && isDevice(i); }
function testUserAgent(i, t) { return t.test(i.navigator.userAgent); }
function matchMedia(i, t, n) {
    if (n === void 0) { n = !1; }
    return i.matchMedia ? i.matchMedia(t).matches : n;
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-50b4bfc6.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-50b4bfc6.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chunk_c311c162_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-c311c162.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-c311c162.js");
/* harmony import */ var _chunk_fe7f197d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-fe7f197d.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-fe7f197d.js");




/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-770a6cdb.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-770a6cdb.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e, f, g, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return deferEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return assert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isEndSide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return pointerCoord; });
function clamp(e, n, t) { return Math.max(e, Math.min(n, t)); }
function assert(e, n) { if (!e) {
    var e_1 = "ASSERT: " + n;
    throw console.error(e_1), new Error(e_1);
} }
function now(e) { return e.timeStamp || Date.now(); }
function pointerCoord(e) { if (e) {
    var n = e.changedTouches;
    if (n && n.length > 0) {
        var e_2 = n[0];
        return { x: e_2.clientX, y: e_2.clientY };
    }
    if (void 0 !== e.pageX)
        return { x: e.pageX, y: e.pageY };
} return { x: 0, y: 0 }; }
function isEndSide(e, n) { var t = "rtl" === e.document.dir; switch (n) {
    case "start": return t;
    case "end": return !t;
    default: throw new Error("\"" + n + "\" is not a valid value for [side]. Use \"start\" or \"end\" instead.");
} }
function deferEvent(e) { return debounceEvent(e, 0); }
function debounceEvent(e, n) { var t = e._original || e; return { _original: e, emit: debounce(t.emit.bind(t), n) }; }
function debounce(e, n) {
    if (n === void 0) { n = 0; }
    var t;
    return function () {
        var r = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            r[_i] = arguments[_i];
        }
        clearTimeout(t), t = setTimeout.apply(void 0, [e, n].concat(r));
    };
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-ab2696b0.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-ab2696b0.js ***!
  \*****************************************************************/
/*! exports provided: a, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachComponent; });
function attachComponent(e, o, n, t, r) { if (e)
    return e.attachViewToDom(o, n, r, t); if ("string" != typeof n && !(n instanceof HTMLElement))
    throw new Error("framework delegate is missing"); var a = "string" == typeof n ? o.ownerDocument.createElement(n) : n; return t && t.forEach(function (e) { return a.classList.add(e); }), r && Object.assign(a, r), o.appendChild(a), a.componentOnReady ? a.componentOnReady() : Promise.resolve(a); }
function detachComponent(e, o) { if (o) {
    if (e) {
        var n = o.parentElement;
        return e.removeViewFromDom(n, o);
    }
    o.remove();
} return Promise.resolve(); }



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-c311c162.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-c311c162.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticSelection; });
function hapticSelection() { var n = window.TapticEngine; n && n.selection(); }
function hapticSelectionStart() { var n = window.TapticEngine; n && n.gestureSelectionStart(); }
function hapticSelectionChanged() { var n = window.TapticEngine; n && n.gestureSelectionChanged(); }
function hapticSelectionEnd() { var n = window.TapticEngine; n && n.gestureSelectionEnd(); }



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-d7be1947.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-d7be1947.js ***!
  \*****************************************************************/
/*! exports provided: a, b, c, d, e */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createThemedClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return openURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getElementClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getButtonClassMap; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function createThemedClasses(e, t, s) { var n = {}; return getClassList(s).forEach(function (s) { n[s] = !0, e && (n[s + "-" + e] = !0, t && (n[s + "-" + t] = !0, n[s + "-" + e + "-" + t] = !0)); }), n; }
function getElementClassMap(e) { var t = {}; for (var s = 0; s < e.length; s++)
    t[e[s]] = !0; return t; }
function getButtonClassMap(e, t) { return e ? (_a = {}, _a[e] = !0, _a[e + "-" + t] = !0, _a) : {}; var _a; }
function getClassList(e) { return e ? (Array.isArray(e) ? e : e.split(" ")).filter(function (e) { return null != e; }).map(function (e) { return e.trim(); }).filter(function (e) { return "" !== e; }) : []; }
function getClassMap(e) { var t = {}; return getClassList(e).forEach(function (e) { return t[e] = !0; }), t; }
function openURL(e, t, s, n) {
    return __awaiter(this, void 0, void 0, function () { var r; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(t && "#" !== t[0] && -1 === t.indexOf("://"))) return [3 /*break*/, 2];
                r = e.document.querySelector("ion-router");
                if (!r) return [3 /*break*/, 2];
                s && s.preventDefault();
                return [4 /*yield*/, r.componentOnReady()];
            case 1: return [2 /*return*/, (_a.sent(), r.push(t, n))];
            case 2: return [2 /*return*/, Promise.resolve()];
        }
    }); });
}



/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm/es5/chunk-fe7f197d.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/chunk-fe7f197d.js ***!
  \*****************************************************************/
/*! exports provided: a, b */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return transition; });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var iosTransitionAnimation = function () { return __webpack_require__.e(/*! import() */ 96).then(__webpack_require__.bind(null, /*! ./ios.transition.js */ "./node_modules/@ionic/core/dist/esm/es5/ios.transition.js")); }, mdTransitionAnimation = function () { return __webpack_require__.e(/*! import() */ 97).then(__webpack_require__.bind(null, /*! ./md.transition.js */ "./node_modules/@ionic/core/dist/esm/es5/md.transition.js")); };
function transition(n) {
    return __awaiter(this, void 0, void 0, function () { var i; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                beforeTransition(n);
                return [4 /*yield*/, getAnimationBuilder(n)];
            case 1:
                i = _a.sent();
                return [2 /*return*/, i ? animation(i, n) : noAnimation(n)];
        }
    }); });
}
function getAnimationBuilder(n) {
    return __awaiter(this, void 0, void 0, function () { var _a, _b; return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                if (!(n.leavingEl && !1 !== n.animated && 0 !== n.duration)) return [3 /*break*/, 7];
                if (!n.animationBuilder) return [3 /*break*/, 1];
                _a = n.animationBuilder;
                return [3 /*break*/, 6];
            case 1:
                if (!("ios" === n.mode)) return [3 /*break*/, 3];
                return [4 /*yield*/, iosTransitionAnimation()];
            case 2:
                _b = (_c.sent()).iosTransitionAnimation;
                return [3 /*break*/, 5];
            case 3: return [4 /*yield*/, mdTransitionAnimation()];
            case 4:
                _b = (_c.sent()).mdTransitionAnimation;
                _c.label = 5;
            case 5:
                _a = _b;
                _c.label = 6;
            case 6: return [2 /*return*/, _a];
            case 7: return [2 /*return*/];
        }
    }); });
}
function beforeTransition(n) { var i = n.enteringEl, e = n.leavingEl; setZIndex(i, e, n.direction), n.showGoBack ? i.classList.add("can-go-back") : i.classList.remove("can-go-back"), i.hidden = !1, e && (e.hidden = !1); }
function animation(n, i) {
    return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, waitForReady(i, !0)];
            case 1:
                _a.sent();
                return [4 /*yield*/, i.animationCtrl.create(n, i.baseEl, i)];
            case 2:
                e = _a.sent();
                fireWillEvents(i.window, i.enteringEl, i.leavingEl);
                return [4 /*yield*/, playTransition(e, i)];
            case 3: return [2 /*return*/, (_a.sent(), e.hasCompleted && fireDidEvents(i.window, i.enteringEl, i.leavingEl), e)];
        }
    }); });
}
function noAnimation(n) {
    return __awaiter(this, void 0, void 0, function () { var i, e; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                i = n.enteringEl, e = n.leavingEl;
                i && i.classList.remove("hide-page"), e && e.classList.remove("hide-page");
                return [4 /*yield*/, waitForReady(n, !1)];
            case 1: return [2 /*return*/, (_a.sent(), fireWillEvents(n.window, i, e), fireDidEvents(n.window, i, e), null)];
        }
    }); });
}
function waitForReady(n, i) {
    return __awaiter(this, void 0, void 0, function () { var e; return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                e = (null != n.deepWait ? n.deepWait : i) ? [deepReady(n.enteringEl), deepReady(n.leavingEl)] : [shallowReady(n.enteringEl), shallowReady(n.leavingEl)];
                return [4 /*yield*/, Promise.all(e)];
            case 1:
                _a.sent();
                return [4 /*yield*/, notifyViewReady(n.viewIsReady, n.enteringEl)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    }); });
}
function notifyViewReady(n, i) {
    return __awaiter(this, void 0, void 0, function () { var _a; return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = n;
                if (!_a) return [3 /*break*/, 2];
                return [4 /*yield*/, n(i)];
            case 1:
                _a = (_b.sent());
                _b.label = 2;
            case 2:
                _a;
                return [2 /*return*/];
        }
    }); });
}
function playTransition(n, i) { var e = i.progressCallback, a = new Promise(function (i) { return n.onFinish(i); }); return e ? (n.progressStart(), e(n)) : n.play(), a; }
function fireWillEvents(n, i, e) { lifecycle(n, e, "ionViewWillLeave"), lifecycle(n, i, "ionViewWillEnter"); }
function fireDidEvents(n, i, e) { lifecycle(n, i, "ionViewDidEnter"), lifecycle(n, e, "ionViewDidLeave"); }
function lifecycle(n, i, e) { if (i) {
    var a = new (0, n.CustomEvent)(e, { bubbles: !1, cancelable: !1 });
    i.dispatchEvent(a);
} }
function shallowReady(n) { return n && n.componentOnReady ? n.componentOnReady() : Promise.resolve(); }
function deepReady(n) { return n ? customElements.get ? customElements.get(n.tagName.toLowerCase()) ? componentOnReady(n) : Promise.all(Array.from(n.children).map(deepReady)) : componentOnReady(n) : Promise.resolve(); }
function componentOnReady(n) { return n.componentOnReady ? n.componentOnReady() : Promise.all(Array.from(n.children).map(deepReady)); }
function setZIndex(n, i, e) { n && (n.style.zIndex = "back" === e ? "99" : "101"), i && (i.style.zIndex = "100"); }



/***/ }),

/***/ "./src/app/services/tmdb.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/tmdb.service.ts ***!
  \******************************************/
/*! exports provided: TmdbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TmdbService", function() { return TmdbService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TmdbService = /** @class */ (function () {
    function TmdbService(http) {
        this.http = http;
        this.baseUrl = 'https://api.themoviedb.org/3';
        this.params = {
            api_key: '6dea98b38f765ad962359956d3867301',
            language: 'pt-BR'
        };
    }
    TmdbService.prototype.getParams = function (params) {
        var obj = __assign({}, this.params, params);
        var str = [];
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
            }
        }
        return '?' + str.join('&');
    };
    TmdbService.prototype.getPopularMovies = function (page) {
        return this.http.get(this.baseUrl + "/movie/popular" + this.getParams({ page: page }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.results; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500));
    };
    TmdbService.prototype.getTopMovies = function (page) {
        return this.http.get(this.baseUrl + "/movie/top_rated" + this.getParams({ page: page }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.results; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500));
    };
    TmdbService.prototype.getUpcomingMovies = function (page) {
        return this.http.get(this.baseUrl + "/movie/upcoming" + this.getParams({ page: page }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.results; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500));
    };
    TmdbService.prototype.searchMovies = function (query) {
        return this.http.get(this.baseUrl + "/search/movie" + this.getParams({ query: query }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.results; }));
    };
    TmdbService.prototype.searchPersons = function (query) {
        return this.http.get(this.baseUrl + "/search/person" + this.getParams({ query: query }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.results; }));
    };
    TmdbService.prototype.searchPerson = function (name) {
        return this.http.get(this.baseUrl + "/search/person" + this.getParams({ query: name }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            if (res && res.results && res.results.length > 0) {
                return res.results[0];
            }
            return null;
        }));
    };
    TmdbService.prototype.getMovieDetail = function (id) {
        var append = '&append_to_response=credits';
        return this.http.get(this.baseUrl + "/movie/" + id + this.getParams() + append);
    };
    TmdbService.prototype.getPersonDetail = function (id) {
        var append = '&append_to_response=credits';
        return this.http.get(this.baseUrl + "/person/" + id + this.getParams() + append);
    };
    TmdbService.prototype.dicoverMovie = function (page, genre) {
        return this.http.get(this.baseUrl + "/discover/movie?" + this.getParams({ page: page, with_genres: genre }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.results; }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500));
    };
    TmdbService.prototype.getActionMovies = function (page) {
        return this.dicoverMovie(page, '28');
    };
    TmdbService.prototype.getAdventureMovies = function (page) {
        return this.dicoverMovie(page, '12');
    };
    TmdbService.prototype.getAnimationMovies = function (page) {
        return this.dicoverMovie(page, '16');
    };
    TmdbService.prototype.getComediaMovies = function (page) {
        return this.dicoverMovie(page, '35');
    };
    TmdbService.prototype.getCrimeMovies = function (page) {
        return this.dicoverMovie(page, '80');
    };
    TmdbService.prototype.getDocMovies = function (page) {
        return this.dicoverMovie(page, '99');
    };
    TmdbService.prototype.getDramaMovies = function (page) {
        return this.dicoverMovie(page, '18');
    };
    TmdbService.prototype.getFamilyMovies = function (page) {
        return this.dicoverMovie(page, '10751');
    };
    TmdbService.prototype.getFantasyMovies = function (page) {
        return this.dicoverMovie(page, '14');
    };
    TmdbService.prototype.getHistoryMovies = function (page) {
        return this.dicoverMovie(page, '36');
    };
    TmdbService.prototype.getTerrorMovies = function (page) {
        return this.dicoverMovie(page, '27');
    };
    TmdbService.prototype.getMusicMovies = function (page) {
        return this.dicoverMovie(page, '10402');
    };
    TmdbService.prototype.getMisteryMovies = function (page) {
        return this.dicoverMovie(page, '9648');
    };
    TmdbService.prototype.getRomanceMovies = function (page) {
        return this.dicoverMovie(page, '10749');
    };
    TmdbService.prototype.getScifiMovies = function (page) {
        return this.dicoverMovie(page, '878');
    };
    TmdbService.prototype.getTvMovies = function (page) {
        return this.dicoverMovie(page, '10770');
    };
    TmdbService.prototype.getThrillerMovies = function (page) {
        return this.dicoverMovie(page, '53');
    };
    TmdbService.prototype.getWarMovies = function (page) {
        return this.dicoverMovie(page, '10752');
    };
    TmdbService.prototype.getFaroestMovies = function (page) {
        return this.dicoverMovie(page, '37');
    };
    TmdbService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TmdbService);
    return TmdbService;
}());



/***/ }),

/***/ "./src/app/services/track.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/track.service.ts ***!
  \*******************************************/
/*! exports provided: TrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackService", function() { return TrackService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TrackService = /** @class */ (function () {
    function TrackService(platform) {
        this.platform = platform;
    }
    TrackService.prototype.viewContent = function (id, name, type) {
        if (this.platform.is('cordova')) {
            fabric.Answers.sendContentView(name, type, String(id));
        }
    };
    TrackService.prototype.viewPerson = function (id, name) {
        this.viewContent(id, name, 'person');
    };
    TrackService.prototype.viewMovie = function (id, title) {
        this.viewContent(id, title, 'movie');
    };
    TrackService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["Platform"]])
    ], TrackService);
    return TrackService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map