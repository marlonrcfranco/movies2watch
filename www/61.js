(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/@ionic/core/dist/esm/es5/t81xagha.js":
/*!***********************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/es5/t81xagha.js ***!
  \***********************************************************/
/*! exports provided: IonReorder, IonReorderGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonReorder", function() { return Reorder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonReorderGroup", function() { return ReorderGroup; });
/* harmony import */ var _ionic_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ionic.core.js */ "./node_modules/@ionic/core/dist/esm/es5/ionic.core.js");
/* harmony import */ var _chunk_c311c162_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunk-c311c162.js */ "./node_modules/@ionic/core/dist/esm/es5/chunk-c311c162.js");
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
var Reorder=function(){function e(){}return e.prototype.render=function(){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null,Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-icon",{class:"reorder-icon",name:"reorder"}))},Object.defineProperty(e,"is",{get:function(){return"ion-reorder"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"reorder"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder[slot]{display:none;line-height:0}.reorder-enabled .reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected .reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;z-index:100;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;-webkit-transition:none!important;transition:none!important}.reorder-icon{-webkit-transform:translate3d(160%,0,0);transform:translate3d(160%,0,0);display:block;font-size:1.3em;-webkit-transition:-webkit-transform 140ms ease-in;transition:-webkit-transform 140ms ease-in;transition:transform 140ms ease-in;transition:transform 140ms ease-in,-webkit-transform 140ms ease-in}.reorder-icon svg{min-width:1em}.reorder[slot=start] .reorder-icon{-webkit-transform:translate3d(-160%,0,0);transform:translate3d(-160%,0,0)}.reorder-visible .reorder .reorder-icon{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.item .reorder[slot]{margin-top:0;margin-bottom:0}.reorder-ios .reorder-icon{font-size:2em;opacity:2em}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),ReorderGroup=function(){function e(){this.cachedHeights=[],this.scrollEl=null,this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.enabled=!1,this.iconVisible=!1,this.activated=!1,this.disabled=!0}return e.prototype.disabledChanged=function(e){var t=this;e?(this.iconVisible=!1,setTimeout(function(){return t.enabled=!1},400)):(this.enabled=!0,this.queue.read(function(){t.iconVisible=!0}))},e.prototype.componentDidLoad=function(){this.containerEl=this.el.querySelector("ion-gesture"),this.scrollEl=this.el.closest("ion-scroll"),this.disabled||this.disabledChanged(!1)},e.prototype.componentDidUnload=function(){this.onDragEnd()},e.prototype.canStart=function(e){if(this.selectedItemEl)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var r=findReorderItem(t,this.containerEl);return r?(e.data=r,!0):(console.error("reorder node not found"),!1)},e.prototype.onDragStart=function(e){var t=this.selectedItemEl=e.data,r=this.cachedHeights;r.length=0;var o=this.containerEl.children;if(o&&0!==o.length){for(var n=0,i=0;i<o.length;i++){var l=o[i];n+=l.offsetHeight,r.push(n),l.$ionIndex=i}var s=this.containerEl.getBoundingClientRect();if(this.containerTop=s.top,this.containerBottom=s.bottom,this.scrollEl){var a=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=a.top+AUTO_SCROLL_MARGIN,this.scrollElBottom=a.bottom-AUTO_SCROLL_MARGIN}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=indexForItem(t),this.selectedItemHeight=t.offsetHeight,this.activated=!0,t.classList.add(ITEM_REORDER_SELECTED),Object(_chunk_c311c162_js__WEBPACK_IMPORTED_MODULE_1__["c"])()}},e.prototype.onDragMove=function(e){var t=this.selectedItemEl;if(t){var r=this.autoscroll(e.currentY),o=this.containerTop-r,n=this.containerBottom-r,i=Math.max(o,Math.min(e.currentY,n)),l=r+i-e.startY,s=i-o,a=this.itemIndexForTop(s);if(void 0!==a&&a!==this.lastToIndex){var c=indexForItem(t);this.lastToIndex=a,Object(_chunk_c311c162_js__WEBPACK_IMPORTED_MODULE_1__["a"])(),this.reorderMove(c,a)}t.style.transform="translateY("+l+"px)"}},e.prototype.onDragEnd=function(){var e=this;this.activated=!1;var t=this.selectedItemEl;if(t){var r=this.containerEl.children,o=this.lastToIndex,n=indexForItem(t),i=n<o?r[o+1]:r[o];this.containerEl.insertBefore(t,i);for(var l=r.length,s=0;s<l;s++)r[s].style.transform="";var a=function(){e.selectedItemEl&&(e.selectedItemEl.style.transition="",e.selectedItemEl.classList.remove(ITEM_REORDER_SELECTED),e.selectedItemEl=void 0)};o===n?(t.style.transition="transform 200ms ease-in-out",setTimeout(a,200)):a(),Object(_chunk_c311c162_js__WEBPACK_IMPORTED_MODULE_1__["b"])()}},e.prototype.itemIndexForTop=function(e){var t=this.cachedHeights,r=0;for(r=0;r<t.length&&!(t[r]>e);r++);return r},e.prototype.reorderMove=function(e,t){for(var r=this.selectedItemHeight,o=this.containerEl.children,n=0;n<o.length;n++){var i=o[n].style,l="";n>e&&n<=t?l="translateY("+-r+"px)":n<e&&n>=t&&(l="translateY("+r+"px)"),i.transform=l}},e.prototype.autoscroll=function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-SCROLL_JUMP:e>this.scrollElBottom&&(t=SCROLL_JUMP),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial},e.prototype.hostData=function(){return{class:{"reorder-enabled":this.enabled,"reorder-list-active":this.activated,"reorder-visible":this.iconVisible}}},e.prototype.render=function(){return Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ion-gesture",Object.assign({},{canStart:this.canStart.bind(this),onStart:this.onDragStart.bind(this),onMove:this.onDragMove.bind(this),onEnd:this.onDragEnd.bind(this),disabled:this.disabled,disableScroll:!0,gestureName:"reorder",gesturePriority:30,type:"pan",direction:"y",threshold:0,attachTo:"window"}),Object(_ionic_core_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot",null))},Object.defineProperty(e,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"host",{get:function(){return{theme:"reorder-group"}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},enabled:{state:!0},iconVisible:{state:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder-group>ion-gesture{display:block}.reorder-list-active ion-gesture>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}"},enumerable:!0,configurable:!0}),e}();function indexForItem(e){return e.$ionIndex}function findReorderItem(e,t){for(var r,o=0;e&&o<6;){if((r=e.parentNode)===t)return e;e=r,o++}return null}var AUTO_SCROLL_MARGIN=60,SCROLL_JUMP=10,ITEM_REORDER_SELECTED="reorder-selected";

/***/ })

}]);
//# sourceMappingURL=61.js.map