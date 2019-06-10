(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/nhqrfvu9.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/nhqrfvu9.js ***!
  \***********************************************************/
/*! exports provided: IonBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonBackButton", function() { return BackButton; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_d7be1947_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-d7be1947.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-d7be1947.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var BackButton=function(){function t(){}return t.prototype.onClick=function(t){var e=this.el.closest("ion-nav");e&&e.canGoBack()?(t.preventDefault(),e.pop()):this.defaultHref&&Object(_chunk_d7be1947_js__WEBPACK_IMPORTED_MODULE_1__["c"])(this.win,this.defaultHref,t,"back")},t.prototype.hostData=function(){return{class:{"show-back-button":!!this.defaultHref}}},t.prototype.render=function(){var t=this,e=this.icon||this.config.get("backButtonIcon","arrow-back"),n=null!=this.text?this.text:this.config.get("backButtonText","Back"),o=Object(_chunk_d7be1947_js__WEBPACK_IMPORTED_MODULE_1__["a"])(this.mode,this.color,"back-button"),r=Object.assign({},o,Object(_chunk_d7be1947_js__WEBPACK_IMPORTED_MODULE_1__["d"])(this.el.classList));return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button",{class:r,onClick:function(e){return t.onClick(e)}},Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{class:"back-button-inner"},e&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon",{name:e}),"ios"===this.mode&&n&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span",{class:"button-text"},n),"md"===this.mode&&Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-ripple-effect",{tapClick:!0})))},Object.defineProperty(t,"is",{get:function(){return"ion-back-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"host",{get:function(){return{theme:"back-button"}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},config:{context:"config"},defaultHref:{type:String,attr:"default-href"},el:{elementRef:!0},icon:{type:String,attr:"icon"},mode:{type:String,attr:"mode"},text:{type:String,attr:"text"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".back-button{display:none}.back-button.show-back-button,.can-go-back>ion-header .back-button{display:inline-block}.back-button button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;text-align:center;-moz-appearance:none;-ms-appearance:none;-webkit-appearance:none;appearance:none;position:relative;z-index:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border:0;outline:0;line-height:1;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;cursor:pointer;vertical-align:top;vertical-align:-webkit-baseline-middle;-webkit-transition:background-color,opacity .1s linear;transition:background-color,opacity .1s linear;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-font-kerning:none;font-kerning:none}.back-button-inner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.back-button-text{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.back-button-md{margin:1px 6px 0 0;padding:0 5px;min-width:44px;height:32px;border:0;font-size:14px;font-weight:500;text-transform:uppercase;color:var(--ion-toolbar-md-text-color,var(--ion-toolbar-text-color,#424242));background-color:transparent;-webkit-box-shadow:none;box-shadow:none}.back-button-md.activated{opacity:.4}.back-button-md ion-icon{padding-right:.3em;margin:0;padding:0 6px;text-align:left;text-align:start;font-size:24px;font-weight:400;line-height:.67;pointer-events:none}.back-button-md-primary{color:var(--ion-color-md-primary,var(--ion-color-primary,#3880ff))}.back-button-md-secondary{color:var(--ion-color-md-secondary,var(--ion-color-secondary,#0cd1e8))}.back-button-md-tertiary{color:var(--ion-color-md-tertiary,var(--ion-color-tertiary,#7044ff))}.back-button-md-success{color:var(--ion-color-md-success,var(--ion-color-success,#10dc60))}.back-button-md-warning{color:var(--ion-color-md-warning,var(--ion-color-warning,#ffce00))}.back-button-md-danger{color:var(--ion-color-md-danger,var(--ion-color-danger,#f04141))}.back-button-md-light{color:var(--ion-color-md-light,var(--ion-color-light,#f4f5f8))}.back-button-md-medium{color:var(--ion-color-md-medium,var(--ion-color-medium,#989aa2))}.back-button-md-dark{color:var(--ion-color-md-dark,var(--ion-color-dark,#222428))}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();

/***/ })

}]);
//# sourceMappingURL=11.js.map