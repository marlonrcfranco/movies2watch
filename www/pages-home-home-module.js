(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_4__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title></ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-back-button></ion-back-button>\n      </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"onSearch()\">\n        <ion-icon name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <!-- <ion-img src=\"../../../assets/icon.png\" class=\"logo\" (click)=\"goHome()\"></ion-img> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngIf=\"cinema\">\n      <ion-card-header>\n        <ion-card-title class=\"text-primary\">{{cinema.nome }}</ion-card-title>\n        <ion-card-subtitle class=\"subtitulo\">{{cinema.loc }}</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content class=\"content1\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <span class=\"endereco\"><i class=\"fas fa-map-marker-alt\" style=\"color: white\"></i>{{cinema.end }} </span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <span class=\"endereco\"><i class=\"fas fa-phone\" style=\"color: white\"></i>{{cinema.tel }}</span>\n          </div>\n        </div>\n        <div class=\"row\">\n          <ion-chip color=\"secondary\" style=\"background: white\">\n            <!-- <ion-label style=\"color:black\" (click)=\"goEmCartazCinesystem()\">Acessar filmes em cartaz &nbsp;<i class=\"fas fa-sign-in-alt\"></i> -->\n            <ion-label style=\"color:black\">Inteira: {{cinema.inteira }} | Meia-Entrada: {{cinema.meia }}<i class=\"fas fa-sign-in-alt\"></i>\n            </ion-label>\n          </ion-chip>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n  <h1 *ngIf=\"movies && segment == 'popular'\">Populares</h1>\n  <h1 *ngIf=\"movies && segment == 'top'\">Top</h1>\n  <h1 *ngIf=\"movies && segment == 'upcoming'\">Lançamentos</h1>\n\n  <div class=\"movies-flex\" *ngIf=\"movies\">\n    <div class=\"movie\" *ngFor=\"let movie of movies\" (click)=\"onMovieDetail(movie.id)\">\n      <div class=\"poster\">\n        <img *ngIf=\"movie.poster_path\" class=\"poster\" [src]=\"'https://image.tmdb.org/t/p/w500' + movie.poster_path\">\n        <img *ngIf=\"movie.poster_path\" class=\"poster-effect\" [src]=\"'https://image.tmdb.org/t/p/w500' + movie.poster_path\">\n      </div>\n      <div class=\"title\">{{ movie.title }}</div>\n      <div class=\"year\">{{ movie.release_date | date:'yyyy' }}</div>\n      <div class=\"vote\"><ion-icon name=\"star\"></ion-icon><b>{{ movie.vote_average }}</b>/10</div>\n    </div>\n  </div>\n  \n  <div class=\"content-fullscreen-message\" *ngIf=\"movies && movies.length == 0\">\n    Não foram encontrados filmes.\n  </div>\n\n  <ion-button *ngIf=\"movies && movies.length > 0 && page < 5\" expand=\"full\" size=\"large\" fill=\"clear\" (click)=\"onNextPage()\">Ver mais</ion-button>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <div class=\"tabs\">\n      <div class=\"tab\" [ngClass]=\"{ 'active' : segment == 'popular' }\" (click)=\"onTabSelected('popular')\">\n        <ion-icon name=\"flame\"></ion-icon>\n        <div class=\"label\">Populares</div>\n      </div>\n      <div class=\"tab\" [ngClass]=\"{ 'active' : segment == 'top' }\" (click)=\"onTabSelected('top')\">\n        <ion-icon name=\"star\"></ion-icon>\n        <div class=\"label\">Top</div>\n      </div>\n      <div class=\"tab\" [ngClass]=\"{ 'active' : segment == 'upcoming' }\" (click)=\"onTabSelected('upcoming')\">\n        <ion-icon name=\"calendar\"></ion-icon>\n        <div class=\"label\">Lançamentos</div>\n      </div>\n\n      <div class=\"tab\" [ngClass]=\"{ 'active' : segment == 'upcoming' }\" (click)=\"onTabSelected('upcoming')\">\n        <ion-icon name=\"calendar\"></ion-icon>\n        <div class=\"label\">Lançamentos</div>\n      </div>\n      <div class=\"tab\" [ngClass]=\"{ 'active' : segment == 'upcoming' }\" (click)=\"onTabSelected('upcoming')\">\n          <ion-icon name=\"calendar\"></ion-icon>\n          <div class=\"label\">Lançamentos</div>\n      </div>\n      <div class=\"tab\" [ngClass]=\"{ 'active' : segment == 'upcoming' }\" (click)=\"onTabSelected('upcoming')\">\n          <ion-icon name=\"calendar\"></ion-icon>\n          <div class=\"label\">Lançamentos</div>\n      </div>\n      <div class=\"tab\" [ngClass]=\"{ 'active' : segment == 'upcoming' }\" (click)=\"onTabSelected('upcoming')\">\n          <ion-icon name=\"calendar\"></ion-icon>\n          <div class=\"label\">Lançamentos</div>\n      </div>\n      <div class=\"tab\" [ngClass]=\"{ 'active' : segment == 'upcoming' }\" (click)=\"onTabSelected('upcoming')\">\n          <ion-icon name=\"calendar\"></ion-icon>\n          <div class=\"label\">Lançamentos</div>\n      </div>\n      <div class=\"tab\" [ngClass]=\"{ 'active' : segment == 'upcoming' }\" (click)=\"onTabSelected('upcoming')\">\n          <ion-icon name=\"calendar\"></ion-icon>\n          <div class=\"label\">Lançamentos</div>\n      </div>\n      <div class=\"tab\" [ngClass]=\"{ 'active' : segment == 'upcoming' }\" (click)=\"onTabSelected('upcoming')\">\n          <ion-icon name=\"calendar\"></ion-icon>\n          <div class=\"label\">Lançamentos</div>\n      </div>\n    </div>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo {\n  height: 64px;\n  width: 64px;\n  justify-content: center; }\n\nion-header ion-icon {\n  font-size: 24px; }\n\nion-toolbar .tabs {\n  display: flex;\n  justify-content: center; }\n\nion-toolbar .tabs .tab {\n    text-align: center;\n    width: calc(100% / 3);\n    color: #8c8c8c; }\n\nion-toolbar .tabs .tab.active {\n      color: #488aff; }\n\nion-toolbar .tabs .tab ion-icon {\n      font-size: 30px; }\n\nion-toolbar .tabs .tab .label {\n      font-size: 10px;\n      margin-top: -2px; }\n\nh1 {\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  font-size: 32px;\n  line-height: 32px;\n  margin: 8px 0 16px 16px; }\n\n.movies-flex {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around; }\n\n.movies-flex .movie {\n    flex: 0 170px;\n    padding: 15px 8px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    align-items: flex-start;\n    align-content: flex-start;\n    cursor: pointer; }\n\n.movies-flex .movie div.poster {\n      position: relative;\n      width: 100%;\n      height: 230px;\n      background: #161515;\n      border-radius: 6px; }\n\n.movies-flex .movie div.poster img.poster, .movies-flex .movie div.poster img.poster-effect {\n        width: 100%;\n        height: 230px;\n        -o-object-fit: cover;\n           object-fit: cover;\n        border-radius: 6px;\n        z-index: 9999;\n        position: relative;\n        margin-bottom: -215px;\n        -webkit-transform: translateZ(0);\n        -webkit-perspective: 1000;\n        -webkit-backface-visibility: hidden; }\n\n.movies-flex .movie div.poster img.poster.poster-effect, .movies-flex .movie div.poster img.poster-effect.poster-effect {\n          z-index: 999;\n          opacity: 0.4;\n          -webkit-transform: scale(0.95) translateZ(0);\n                  transform: scale(0.95) translateZ(0);\n          -webkit-filter: blur(4px);\n                  filter: blur(4px); }\n\n.movies-flex .movie .title {\n      width: 100%;\n      font-weight: 800;\n      letter-spacing: -0.05em;\n      font-size: 15px;\n      line-height: 15px;\n      padding: 20px 0 5px 0; }\n\n.movies-flex .movie .year {\n      width: 50%;\n      color: #aaa;\n      font-size: 12px; }\n\n.movies-flex .movie .vote {\n      width: 50%;\n      text-align: right;\n      color: #aaa;\n      font-size: 12px; }\n\n.movies-flex .movie .vote b {\n        font-weight: 800;\n        color: #000; }\n\n.movies-flex .movie .vote ion-icon {\n        color: #fbcd00;\n        line-height: 0px;\n        position: absolute;\n        margin: 1px 0 0 -14px; }\n"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_tmdb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/tmdb.service */ "./src/app/services/tmdb.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_cinema_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cinema-service */ "./src/app/services/cinema-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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





var HomePage = /** @class */ (function () {
    function HomePage(activatedRoute, router, loadingCtrl, tmdb, cinemaService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.tmdb = tmdb;
        this.cinemaService = cinemaService;
    }
    HomePage.prototype.ngOnInit = function () {
        this.onTabSelected('upcoming');
        var movieId = this.activatedRoute.snapshot.params['id'];
        console.log(movieId);
        this.cinema = this.cinemaService.getItem(movieId);
        console.log(this.cinema);
    };
    HomePage.prototype.goHome = function () {
        this.router.navigate(['mapa']);
    };
    HomePage.prototype.onTabSelected = function (segmentValue) {
        this.segment = segmentValue;
        this.page = 1;
        this.movies = null;
        this.content.scrollToTop();
        this.loadMovies();
    };
    HomePage.prototype.onNextPage = function () {
        this.page++;
        this.loadMovies();
    };
    HomePage.prototype.onMovieDetail = function (id) {
        this.router.navigate(['movie-detail', id]);
    };
    HomePage.prototype.onSearch = function () {
        this.router.navigate(['search']);
    };
    HomePage.prototype.loadMovies = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var service, loadingOpts, loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        switch (this.segment) {
                            case 'popular':
                                service = this.tmdb.getPopularMovies(this.page);
                                break;
                            case 'top':
                                service = this.tmdb.getTopMovies(this.page);
                                break;
                            case 'upcoming':
                                service = this.tmdb.getUpcomingMovies(this.page);
                                break;
                        }
                        loadingOpts = { translucent: true, spinner: 'crescent', content: 'Carregando' };
                        return [4 /*yield*/, this.loadingCtrl.create(loadingOpts)];
                    case 1:
                        loading = _a.sent();
                        loading.present();
                        service.subscribe(function (res) {
                            if (!_this.movies) {
                                _this.movies = [];
                            }
                            _this.movies = _this.movies.concat(res);
                            loading.dismiss();
                        }, function (err) {
                            _this.movies = [];
                            loading.dismiss();
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Content"]),
        __metadata("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Content"])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _services_tmdb_service__WEBPACK_IMPORTED_MODULE_2__["TmdbService"],
            _services_cinema_service__WEBPACK_IMPORTED_MODULE_4__["CinemaService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map