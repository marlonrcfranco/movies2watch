(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-movie-detail-movie-detail-module"],{

/***/ "./src/app/pages/movie-detail/movie-detail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/movie-detail/movie-detail.module.ts ***!
  \***********************************************************/
/*! exports provided: MovieDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailPageModule", function() { return MovieDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_detail_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie-detail.page */ "./src/app/pages/movie-detail/movie-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MovieDetailPageModule = /** @class */ (function () {
    function MovieDetailPageModule() {
    }
    MovieDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _movie_detail_page__WEBPACK_IMPORTED_MODULE_4__["MovieDetailPage"] }])
            ],
            declarations: [_movie_detail_page__WEBPACK_IMPORTED_MODULE_4__["MovieDetailPage"]]
        })
    ], MovieDetailPageModule);
    return MovieDetailPageModule;
}());



/***/ }),

/***/ "./src/app/pages/movie-detail/movie-detail.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/movie-detail/movie-detail.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{ movie?.title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div class=\"backdrop\" *ngIf=\"movie\">\n    <img *ngIf=\"movie.backdrop_path\" [src]=\"'https://image.tmdb.org/t/p/original' + movie.backdrop_path\">\n  </div>\n  <div class=\"backdrop-separator1\"></div>\n  <div class=\"backdrop-separator2\"></div>\n\n  <div class=\"poster\" *ngIf=\"movie\">\n    <img *ngIf=\"movie.poster_path\" class=\"poster\" [src]=\"'https://image.tmdb.org/t/p/w500' + movie.poster_path\">\n    <img *ngIf=\"movie.poster_path\" class=\"poster-effect\" [src]=\"'https://image.tmdb.org/t/p/w500' + movie.poster_path\">\n  </div>\n\n  <div class=\"movie-data\" *ngIf=\"movie\">\n    <div class=\"title\">{{ movie.title }}</div>\n    <div class=\"year\">{{ movie.release_date | date:'yyyy' }}</div>\n    <div class=\"vote\">\n      <div class=\"text\">\n        <b>{{ movie.vote_average }}</b>/10\n      </div>\n      <div class=\"stars\">\n        <ion-icon [name]=\"movie.vote_average >= 2 ? 'star' : movie.vote_average >= 1 ? 'star-half' : 'star-outline'\"></ion-icon>\n        <ion-icon [name]=\"movie.vote_average >= 4 ? 'star' : movie.vote_average >= 3 ? 'star-half' : 'star-outline'\"></ion-icon>\n        <ion-icon [name]=\"movie.vote_average >= 6 ? 'star' : movie.vote_average >= 5 ? 'star-half' : 'star-outline'\"></ion-icon>\n        <ion-icon [name]=\"movie.vote_average >= 8 ? 'star' : movie.vote_average >= 7 ? 'star-half' : 'star-outline'\"></ion-icon>\n        <ion-icon [name]=\"movie.vote_average >= 10 ? 'star' : movie.vote_average >= 9 ? 'star-half' : 'star-outline'\"></ion-icon>\n      </div>\n      <div class=\"count\">{{ movie.vote_count }} votos</div>\n    </div>\n\n    <div class=\"overview\">{{ movie.overview }}</div>\n  \n    <div class=\"duration\" *ngIf=\"movie && movie.runtime\">\n      <div class=\"label\"><ion-icon name=\"md-time\"></ion-icon>Duracão</div>\n      <div class=\"value\">{{ movie.runtime }} mins</div>\n    </div>\n    <div class=\"genres\" *ngIf=\"movie && movie.genres && movie.genres.length\">\n      <div class=\"label\"><ion-icon name=\"md-pricetag\"></ion-icon>Gêneros</div>\n      <div class=\"value\"><span *ngFor=\"let genre of movie.genres; let last = last\">{{ genre.name }}<span *ngIf=\"!last\">, </span></span></div>\n    </div>\n\n    <div class=\"cast\" *ngIf=\"movie && movie.credits && movie.credits.cast && movie.credits.cast.length\">\n      <div class=\"label\"><ion-icon name=\"md-people\"></ion-icon>Elenco</div>\n      <div class=\"persons\">\n        <div *ngFor=\"let a of movie.credits.cast; let index = index\">\n          <div class=\"person\" *ngIf=\"index < 15\" [style.background-image]=\"a.profile_path ? 'url(https://image.tmdb.org/t/p/w500' + a.profile_path + ')' : ''\" (click)=\"onPersonDetail(a.id)\">\n            <div class=\"name\">{{ a.name }}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"companies\" *ngIf=\"movie && movie.production_companies && movie.production_companies.length > 0\">\n      <div class=\"company\" *ngFor=\"let company of movie.production_companies\">\n        <img *ngIf=\"company.logo_path\" [src]=\"'https://image.tmdb.org/t/p/w200' + company.logo_path\">\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/movie-detail/movie-detail.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/movie-detail/movie-detail.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-ios ion-title {\n  padding: 0 70px 1px; }\n\n.backdrop {\n  margin: -20px;\n  position: relative;\n  height: 300px;\n  overflow: hidden;\n  background: #ddd; }\n\n.backdrop img {\n    opacity: 1;\n    width: 100%;\n    height: 300px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n    position: absolute; }\n\n.backdrop-separator1 {\n  width: 0;\n  height: 0;\n  z-index: 9999;\n  position: absolute;\n  left: 0;\n  margin-top: calc(-120px + 20px + 1px);\n  border-top: 120px solid transparent;\n  border-left: 100vw solid white; }\n\n.backdrop-separator2 {\n  width: 0;\n  height: 0;\n  z-index: 9998;\n  position: absolute;\n  left: 0;\n  margin-top: calc(-240px + 20px + 1px);\n  border-top: 240px solid transparent;\n  border-left: 100vw solid rgba(255, 255, 255, 0.4); }\n\ndiv.poster {\n  position: absolute;\n  z-index: 99999;\n  margin-top: -200px;\n  left: 0px;\n  margin-left: calc(50% - (170px / 2));\n  width: 170px;\n  height: 230px;\n  background: #eee;\n  border-radius: 6px; }\n\ndiv.poster img.poster, div.poster img.poster-effect {\n    width: 170px;\n    height: 230px;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 6px;\n    position: relative;\n    z-index: 9999;\n    border: 3px solid white;\n    -webkit-transform: translateZ(0);\n    -webkit-perspective: 1000;\n    -webkit-backface-visibility: hidden; }\n\ndiv.poster img.poster.poster-effect, div.poster img.poster-effect.poster-effect {\n      z-index: 999;\n      margin-top: -225px;\n      opacity: 0.4;\n      -webkit-filter: blur(4px);\n              filter: blur(4px);\n      -webkit-transform: scale(0.9) translateZ(0);\n              transform: scale(0.9) translateZ(0); }\n\n.preco {\n  margin-top: -10px;\n  letter-spacing: -0.03em;\n  font-size: 18px;\n  line-height: 21px;\n  padding: 15px 0 15px 0;\n  color: #888;\n  font-weight: 100; }\n\n.movie-data {\n  margin-top: 50px; }\n\n.movie-data .title {\n    font-weight: 800;\n    letter-spacing: -0.03em;\n    font-size: 32px;\n    line-height: 32px;\n    padding: 5px 0 15px 0; }\n\n.movie-data .year {\n    width: 100px;\n    color: #aaa;\n    font-size: 20px;\n    float: left; }\n\n.movie-data .vote {\n    width: calc(100% - 100px);\n    float: right;\n    text-align: right; }\n\n.movie-data .vote .text {\n      float: right;\n      color: #aaa;\n      font-size: 13px; }\n\n.movie-data .vote .text b {\n        font-weight: 800;\n        font-size: 20px;\n        color: #000; }\n\n.movie-data .vote .stars {\n      float: right;\n      font-size: 22px;\n      margin-right: 10px; }\n\n.movie-data .vote .stars ion-icon {\n        color: #fbcd00;\n        line-height: 0px; }\n\n.movie-data .vote .count {\n      width: 100%;\n      clear: both;\n      color: #ccc; }\n\n.movie-data .overview {\n    margin-top: 50px;\n    letter-spacing: -0.03em;\n    font-size: 18px;\n    line-height: 21px;\n    padding: 15px 0 15px 0;\n    color: #888;\n    font-weight: 100; }\n\n.movie-data .duration, .movie-data .genres, .movie-data .cast {\n    font-size: 16px;\n    line-height: 18px;\n    padding: 15px 0 5px 0; }\n\n.movie-data .duration .label, .movie-data .genres .label, .movie-data .cast .label {\n      color: #aaa;\n      padding: 4px 0 4px 24px;\n      font-weight: 100; }\n\n.movie-data .duration .label ion-icon, .movie-data .genres .label ion-icon, .movie-data .cast .label ion-icon {\n        position: absolute;\n        margin-top: 1px;\n        margin-left: -24px; }\n\n.movie-data .duration .value, .movie-data .genres .value, .movie-data .cast .value {\n      color: #444;\n      font-weight: 400; }\n\n.movie-data .cast {\n    position: relative;\n    height: 190px; }\n\n.movie-data .cast .persons {\n      display: flex;\n      overflow-y: scroll;\n      position: absolute;\n      left: -16px;\n      right: -16px; }\n\n.movie-data .cast .persons > div:first-child {\n        padding-left: 16px; }\n\n.movie-data .cast .persons > div:last-child {\n        padding-right: 6px; }\n\n.movie-data .cast .persons .person {\n        width: 90px;\n        height: 130px;\n        background-size: cover;\n        background-position: center;\n        border-radius: 6px;\n        margin: 5px 10px 20px 0;\n        display: flex;\n        justify-content: flex-end;\n        flex-direction: column;\n        background-color: #eee; }\n\n.movie-data .cast .persons .person .name {\n          color: white;\n          font-size: 14px;\n          line-height: 14px;\n          padding: 4px;\n          font-weight: 600;\n          text-shadow: 1px 1px rgba(0, 0, 0, 0.3), -1px -1px rgba(0, 0, 0, 0.3), -1px 1px rgba(0, 0, 0, 0.3), 1px -1px rgba(0, 0, 0, 0.3); }\n\n.movie-data .companies {\n    width: 100%;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    border-top: 1px solid #eee;\n    margin-top: 25px;\n    padding-top: 20px;\n    padding-bottom: 30px; }\n\n.movie-data .companies .company img {\n      -o-object-fit: contain;\n         object-fit: contain;\n      max-width: 120px;\n      margin: 10px 20px;\n      height: 50px;\n      opacity: 0.4;\n      -webkit-filter: grayscale(100%);\n              filter: grayscale(100%); }\n"

/***/ }),

/***/ "./src/app/pages/movie-detail/movie-detail.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/movie-detail/movie-detail.page.ts ***!
  \*********************************************************/
/*! exports provided: MovieDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailPage", function() { return MovieDetailPage; });
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




var MovieDetailPage = /** @class */ (function () {
    function MovieDetailPage(activatedRoute, router, tmdb, track) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.tmdb = tmdb;
        this.track = track;
    }
    MovieDetailPage.prototype.ngOnInit = function () {
        var movieId = this.activatedRoute.snapshot.params['id'];
        this.getMovieDetail(movieId);
    };
    MovieDetailPage.prototype.getMovieDetail = function (id) {
        var _this = this;
        this.tmdb.getMovieDetail(id).subscribe(function (res) {
            _this.movie = res;
            _this.track.viewMovie(id, _this.movie.title);
        });
    };
    MovieDetailPage.prototype.onPersonDetail = function (id) {
        this.router.navigate(['person-detail', id]);
    };
    MovieDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-movie-detail',
            template: __webpack_require__(/*! ./movie-detail.page.html */ "./src/app/pages/movie-detail/movie-detail.page.html"),
            styles: [__webpack_require__(/*! ./movie-detail.page.scss */ "./src/app/pages/movie-detail/movie-detail.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"],
            _services_track_service__WEBPACK_IMPORTED_MODULE_3__["TrackService"]])
    ], MovieDetailPage);
    return MovieDetailPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-movie-detail-movie-detail-module.js.map