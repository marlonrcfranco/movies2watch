(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-person-detail-person-detail-module"],{

/***/ "./src/app/pages/person-detail/person-detail.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/person-detail/person-detail.module.ts ***!
  \*************************************************************/
/*! exports provided: PersonDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailPageModule", function() { return PersonDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _person_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./person-detail.page */ "./src/app/pages/person-detail/person-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PersonDetailPageModule = /** @class */ (function () {
    function PersonDetailPageModule() {
    }
    PersonDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _person_detail_page__WEBPACK_IMPORTED_MODULE_4__["PersonDetailPage"] }])
            ],
            declarations: [_person_detail_page__WEBPACK_IMPORTED_MODULE_4__["PersonDetailPage"]]
        })
    ], PersonDetailPageModule);
    return PersonDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/person-detail/person-detail.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/person-detail/person-detail.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ person?.name }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class=\"profile-photo\" *ngIf=\"person\">\n    <img *ngIf=\"person.profile_path\" class=\"profile-photo\" [src]=\"'https://image.tmdb.org/t/p/w500' + person.profile_path\">\n    <img *ngIf=\"person.profile_path\" class=\"profile-photo-effect\" [src]=\"'https://image.tmdb.org/t/p/w500' + person.profile_path\">\n  </div>\n\n  <div class=\"basic-data\">\n    <h1>{{ person?.name }}</h1>\n    <p *ngIf=\"person?.birthday\"><b>{{ person?.birthday | date:'dd/MM/yyyy' }} </b> <span *ngIf=\"person?.deathday\"> ({{ person?.deathday | date:'dd/MM/yyyy' }})</span></p>\n    <p *ngIf=\"person?.place_of_birth\">{{ person?.place_of_birth }}</p>  \n  </div>\n\n  <div class=\"clearfix\"></div>\n\n  <div class=\"biography\" *ngIf=\"person?.biography\">\n    <h1><ion-icon name=\"contact\"></ion-icon> Biografia</h1>\n    <div>{{ person?.biography }}</div>\n  </div>\n\n  <div class=\"movies\" *ngIf=\"person?.credits?.cast && person?.credits?.cast.length > 0\">\n    <h1><ion-icon name=\"ios-film\"></ion-icon> Filmografía</h1>\n    <ion-virtual-scroll [items]=\"person?.credits?.cast\">\n      <div class=\"movie\" *virtualItem=\"let item\" (click)=\"onMovieDetail(item.id)\">\n        <ion-icon class=\"arrow\" name=\"arrow-forward\"></ion-icon>\n        <div class=\"poster\">\n          <img *ngIf=\"item.poster_path\" class=\"poster\" [src]=\"'https://image.tmdb.org/t/p/w500' + item.poster_path\">\n          <img *ngIf=\"item.poster_path\" class=\"poster-effect\" [src]=\"'https://image.tmdb.org/t/p/w500' + item.poster_path\">\n        </div>\n        <div class=\"data\">\n          <div class=\"title\">{{item.title }}</div>\n          <div class=\"year\">{{item.release_date | date:'yyyy' }}</div>\n        </div>\n      </div>\n    </ion-virtual-scroll>\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/person-detail/person-detail.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/person-detail/person-detail.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-ios ion-title {\n  padding: 0 70px 1px; }\n\nion-content div.profile-photo {\n  float: left;\n  width: 120px;\n  height: 170px;\n  background: #eee;\n  border-radius: 6px; }\n\nion-content div.profile-photo img.profile-photo, ion-content div.profile-photo img.profile-photo-effect {\n    width: 120px;\n    height: 170px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 6px;\n    position: relative;\n    z-index: 9999;\n    -webkit-transform: translateZ(0);\n    -webkit-perspective: 1000;\n    -webkit-backface-visibility: hidden; }\n\nion-content div.profile-photo img.profile-photo.profile-photo-effect, ion-content div.profile-photo img.profile-photo-effect.profile-photo-effect {\n      z-index: 999;\n      margin-top: -225px;\n      opacity: 0.4;\n      -webkit-filter: blur(4px);\n              filter: blur(4px);\n      -webkit-transform: scale(0.9) translateZ(0);\n              transform: scale(0.9) translateZ(0); }\n\nion-content div.basic-data {\n  float: left;\n  width: calc(100% - 120px);\n  padding-top: 8px;\n  padding-left: 16px; }\n\nion-content div.basic-data h1 {\n    margin: 0px !important;\n    font-size: 36px;\n    line-height: 34px;\n    padding-bottom: 10px;\n    font-weight: 700; }\n\nion-content div.basic-data p {\n    color: #aaa;\n    margin: 3px 0 !important; }\n\nion-content div.clearfix {\n  clear: both; }\n\nion-content div.biography h1 {\n  padding-left: 50px;\n  padding-top: 10px;\n  font-weight: 300;\n  color: #aaa; }\n\nion-content div.biography h1 ion-icon {\n    font-size: 32px;\n    position: absolute;\n    margin-bottom: -10px;\n    margin-left: -42px; }\n\nion-content div.biography div {\n  letter-spacing: -0.03em;\n  font-size: 16px;\n  line-height: 18px;\n  padding: 0;\n  margin: 15px 0 15px 0;\n  max-height: 145px;\n  overflow: auto;\n  color: #888;\n  font-weight: 100; }\n\nion-content div.movies h1 {\n  padding-left: 50px;\n  padding-top: 10px;\n  font-weight: 300;\n  color: #aaa; }\n\nion-content div.movies h1 ion-icon {\n    font-size: 32px;\n    position: absolute;\n    margin-bottom: -10px;\n    margin-left: -42px; }\n\nion-content div.movies div.movie {\n  padding: 15px 8px;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 30px;\n  margin-bottom: 10px;\n  display: flex;\n  cursor: pointer; }\n\nion-content div.movies div.movie:last-child {\n    border-bottom: none; }\n\nion-content div.movies div.movie ion-icon.arrow {\n    position: absolute;\n    right: 0px;\n    top: calc(50% - 20px);\n    font-size: 26px;\n    opacity: 0.15; }\n\nion-content div.movies div.movie div.poster {\n    position: relative;\n    width: 75px;\n    height: 100px;\n    border-radius: 6px;\n    background: #eee; }\n\nion-content div.movies div.movie div.poster img.poster, ion-content div.movies div.movie div.poster img.poster-effect {\n      width: 100%;\n      height: 100%;\n      -o-object-fit: cover;\n         object-fit: cover;\n      border-radius: 6px;\n      z-index: 9999;\n      position: relative;\n      margin-bottom: -85px;\n      -webkit-transform: translateZ(0);\n      -webkit-perspective: 1000;\n      -webkit-backface-visibility: hidden; }\n\nion-content div.movies div.movie div.poster img.poster.poster-effect, ion-content div.movies div.movie div.poster img.poster-effect.poster-effect {\n        z-index: 999;\n        opacity: 0.4;\n        -webkit-filter: blur(4px);\n                filter: blur(4px);\n        -webkit-transform: scale(0.9) translateZ(0);\n                transform: scale(0.9) translateZ(0); }\n\nion-content div.movies div.movie .data {\n    width: calc(100% - 75px);\n    padding: 5px 15px 5px 20px; }\n\nion-content div.movies div.movie .data .title {\n      width: 100%;\n      font-weight: 800;\n      letter-spacing: -0.05em;\n      font-size: 18px;\n      line-height: 18px;\n      padding: 5px 0 5px 0; }\n\nion-content div.movies div.movie .data .year {\n      width: 100%;\n      color: #aaa;\n      font-size: 16px;\n      padding-bottom: 8px; }\n"

/***/ }),

/***/ "./src/app/pages/person-detail/person-detail.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/person-detail/person-detail.page.ts ***!
  \***********************************************************/
/*! exports provided: PersonDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailPage", function() { return PersonDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tmdb.service */ "./src/app/services/tmdb.service.ts");
/* harmony import */ var _services_track_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/track.service */ "./src/app/services/track.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PersonDetailPage = /** @class */ (function () {
    function PersonDetailPage(activatedRoute, router, tmdb, track) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.tmdb = tmdb;
        this.track = track;
    }
    PersonDetailPage.prototype.ngOnInit = function () {
        var personId = this.activatedRoute.snapshot.params['id'];
        this.getPersonDetail(personId);
    };
    PersonDetailPage.prototype.onMovieDetail = function (id) {
        this.router.navigate(['movie-detail', id]);
    };
    PersonDetailPage.prototype.getPersonDetail = function (id) {
        var _this = this;
        this.tmdb.getPersonDetail(id).subscribe(function (res) {
            _this.person = res;
            _this.track.viewPerson(id, _this.person.name);
        });
    };
    PersonDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-person-detail',
            template: __webpack_require__(/*! ./person-detail.page.html */ "./src/app/pages/person-detail/person-detail.page.html"),
            styles: [__webpack_require__(/*! ./person-detail.page.scss */ "./src/app/pages/person-detail/person-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"],
            _services_track_service__WEBPACK_IMPORTED_MODULE_3__["TrackService"]])
    ], PersonDetailPage);
    return PersonDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-person-detail-person-detail-module.js.map