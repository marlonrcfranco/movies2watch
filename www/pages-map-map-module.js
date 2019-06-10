(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-map-module"],{

/***/ "./src/app/pages/map/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.page */ "./src/app/pages/map/map.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"]
    }
];
var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_5__["MapPage"]]
        })
    ], MapPageModule);
    return MapPageModule;
}());



/***/ }),

/***/ "./src/app/pages/map/map.page.html":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"header\">\n  <ion-toolbar color=\"white\">\n    <ion-img src=\"../../assets/logo.png\" class=\"logo\"></ion-img>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <ion-card-header>\n          <ion-card-subtitle class=\"text-primary\">Clique em um cinema no mapa<br>para mais informações</ion-card-subtitle>\n          <!-- <ion-card-subtitle class=\"subtitulo\">Praça Shopping Rio Grande</ion-card-subtitle> -->\n        </ion-card-header>\n        <div #map id=\"map\"></div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"cardMap mt-2\">\n          <!-- <ion-card>\n            <ion-card-header>\n              <ion-card-title class=\"text-primary\">movies2watch</ion-card-title>\n              <ion-card-subtitle class=\"subtitulo\">Find movies in local cinemas</ion-card-subtitle>\n            </ion-card-header>\n            <ion-card-content class=\"content1\">\n              <div class=\"row\">\n                <div class=\"col\">\n                  <span> &nbsp;\n                  Descubra quais filmes estão em cartaz nos cinemas da região. </span>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  \n                </div>\n              </div>\n            </ion-card-content>\n          </ion-card> -->\n          <ion-card>\n            <ion-card-header>\n              <ion-card-title class=\"text-primary\">Sobre</ion-card-title>\n              <!-- <ion-card-subtitle class=\"subtitulo\"> subtitle </ion-card-subtitle> -->\n            </ion-card-header>\n            <ion-card-content class=\"content2\">\n              <div class=\"row\">\n                <div class=\"col\">\n                    <span><i class=\"fas fa-phone\" style=\"color: white\"></i>\n                      <br>Aplicativo para a disciplina de Tópicos Avançados em Sistemas para Internet.\n                      <br>\n                      <br> Desenvolvido por Marlon R. C. Franco\n                      <br>\n                      <br> Engenharia de Computação\n                      <br> Centro de Ciências Computacionais - C3\n                      <br> Universidade Federal do Rio Grande - FURG\n                      <br>\n                      <br>Rio Grande/RS, Brasil, 2019.\n                      <br>\n                    </span>\n                    <a href=\"https://github.com/okode/movies-app.git\">Baseado no projeto de @okode</a>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col\">\n                  <a href=\"https://github.com/marlonrcfranco/movies2watch.git\"><ion-icon name=\"logo-github\" style=\"zoom:4.0;\"></ion-icon></a>\n                </div>\n              </div>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/map/map.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  height: 500px; }\n\n.cardMap {\n  margin-top: -7px; }\n\n.google-map {\n  height: 160px;\n  pointer-events: none;\n  margin: 0 -20px; }\n\n.card0 {\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border: 0;\n  margin-bottom: 30px;\n  background: linear-gradient(87deg, #808183 0, #363636 100%) !important; }\n\n.card-header {\n  text-align: right; }\n\n.text-primary {\n  color: #0a0a0a !important;\n  font-size: 20px;\n  text-shadow: 2px 2px 2px rgba(189, 187, 187, 0.7);\n  text-align: left; }\n\n.subtitulo {\n  color: #f5f4f4 !important;\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7) !important; }\n\n.endereco {\n  color: #fff !important;\n  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7) !important; }\n\n.logo {\n  height: 66px;\n  width: 291px; }\n\n.button {\n  background-color: #4CAF50;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 20px;\n  margin: 4px 2px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/pages/map/map.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/map/map.page.ts ***!
  \***************************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cinema_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/cinema-service */ "./src/app/services/cinema-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, router, ngZone, cinemaService) {
        this.navCtrl = navCtrl;
        this.router = router;
        this.ngZone = ngZone;
        this.cinemaService = cinemaService;
    }
    MapPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Carregando mapa");
            _this.cinemas = _this.cinemaService.getAll();
            _this.loadMap();
        }, 100);
    };
    MapPage.prototype.addInfoWindowToMarker = function (marker, cinema) {
        var _this = this;
        var infoWindowContent = '<style>' +
            '.button {' +
            '  background-color: #4CAF50; /* Green */' +
            '  border: none;' +
            '  color: white;' +
            '  text-align: center;' +
            '  text-decoration: none;' +
            '  display: inline-block;' +
            '  font-size: 16px;' +
            '  margin: 4px 2px;' +
            '  cursor: pointer;' +
            '}' +
            '.button1 {padding: 10px 24px;}' +
            '</style>' +
            '<div id="content">' +
            ' <h1 id="firstHeading" class="firstHeading">' + marker.title + '</h1>' +
            ' <button type="button" id="botao" class="button1">Acessar filmes em cartaz</button>' +
            // ' <button type="button" id="botao" style="background-color: #4CAF50;border: none;color: white; padding: 15px 32px; text-align: center;text-decoration: none; display: inline-block; font-size: 17px; margin: 4px 2px;">Acessar filmes em cartaz</button>'+
            // this.getInfoFromCinema(marker.title)+
            '<div (click)="goEmCartaz(marker.title)">' +
            ' <img src="' + cinema.img + '" alt="' + cinema.nome + '" height="100" width="200">' +
            '</div>' +
            '<h4>' + cinema.loc + '</h4>' +
            '<p>' + cinema.end + '<br>Telefone: ' + cinema.tel + '</p>';
        '</div>';
        var infoWindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });
        google.maps.event.addListenerOnce(infoWindow, 'domready', function () {
            document.getElementById('botao').addEventListener('click', function () {
                _this.goEmCartaz(marker.id);
            });
        });
        marker.addListener('click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    MapPage.prototype.loadMap = function () {
        var _this = this;
        var mapEle = document.getElementById('map');
        var map = new google.maps.Map(mapEle, {
            center: new google.maps.LatLng(-32.051737, -52.148030),
            zoom: 10
        });
        this.cinemas.forEach(function (cinema) {
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(cinema.lat, cinema.long),
                map: map,
                id: cinema.id,
                title: cinema.nome
            });
            _this.addInfoWindowToMarker(marker, cinema);
        });
    };
    MapPage.prototype.goEmCartaz = function (cinema_id) {
        this.router.navigate(['cinema-detail', cinema_id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('map'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MapPage.prototype, "mapElement", void 0);
    MapPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-map',
            template: __webpack_require__(/*! ./map.page.html */ "./src/app/pages/map/map.page.html"),
            styles: [__webpack_require__(/*! ./map.page.scss */ "./src/app/pages/map/map.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _services_cinema_service__WEBPACK_IMPORTED_MODULE_3__["CinemaService"]])
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-map-map-module.js.map