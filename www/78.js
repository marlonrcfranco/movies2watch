(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[78],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/ggtoqmf3.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/ggtoqmf3.js ***!
  \***********************************************************/
/*! exports provided: IonStatusTap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonStatusTap", function() { return StatusTap; });
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var StatusTap=function(){function t(){this.duration=300}return t.prototype.onStatusTap=function(){var t=this;this.queue.read(function(){var e=t.win.innerWidth,n=t.win.innerWidth,o=t.win.document.elementFromPoint(e/2,n/2);if(o){var r=o.closest("ion-scroll");r&&r.componentOnReady().then(function(){t.queue.write(function(){r.scrollToTop(t.duration)})})}})},Object.defineProperty(t,"is",{get:function(){return"ion-status-tap"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{duration:{type:Number,attr:"duration"},queue:{context:"queue"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:statusTap",method:"onStatusTap"}]},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=78.js.map