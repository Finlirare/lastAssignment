(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <!--<ion-toolbar>\r\n\t\t<ion-title>\r\n\t\t\tProfile \r\n\t\t</ion-title>\r\n\r\n    \t<ion-icon name=\"settings\" (click)=\"presentPopover()\" class=\"ion-align-self-end\">\r\n\t\t</ion-icon>\r\n\t  </ion-toolbar>\r\n\t  -->\r\n\t<ion-toolbar color=\"primary\">\r\n\t\t<ion-buttons slot=\"primary\">\r\n\t\t\t<ion-button (click)=\"presentPopover()\">\r\n\t\t\t\t<ion-icon name=\"settings\">\r\n\t\t\t\t</ion-icon>\r\n\t\t\t</ion-button>\r\n\t\t</ion-buttons>\r\n\t\t<ion-title>Profile</ion-title>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"user\">\r\n\t<ion-item>\r\n\t\t<ion-avatar slot=\"start\">\r\n\t\t\t<img [src]=\"user.avatar\">\r\n\t\t</ion-avatar>\r\n\t\t<ion-label> {{user.name}}</ion-label>\r\n\t</ion-item>\r\n\t<ion-item id=\"userBio\">\r\n\t\t<p>Bio</p>\r\n\t</ion-item>\r\n\t<ion-item>\r\n\t\t<img [src]=\"images\" alt=\"You don't have any images yet!\" />\r\n\t</ion-item>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXGNhcm9sXFxEb2N1bWVudHNcXEdpdEh1YlxcbGFzdEFzc2lnL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VsY29tZS1jYXJkIGlvbi1pbWcge1xyXG4gIG1heC1oZWlnaHQ6IDM1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _popover_settings_popover_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popover-settings/popover-settings.component */ "./src/app/popover-settings/popover-settings.component.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");










var Tab1Page = /** @class */ (function () {
    function Tab1Page(googlePlus, navCtrl, http, socket, storage, loginService, activatedRoute, popoverController) {
        this.googlePlus = googlePlus;
        this.navCtrl = navCtrl;
        this.http = http;
        this.socket = socket;
        this.storage = storage;
        this.loginService = loginService;
        this.activatedRoute = activatedRoute;
        this.popoverController = popoverController;
        this.myId = null;
    }
    Tab1Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        console.log('ngoninit');
        //	this.myId = this.activatedRoute.snapshot.paramMap.get('myid');
        this.storage.get('google_user').then(function (data) {
            console.log(data);
            _this.avatar = data.avatar;
            _this.user = data;
            _this.socket.emit('getImgs', _this.user);
            _this.socket.on('images', function (res) {
                console.log(res);
                res.forEach(function (img) {
                    console.log(img);
                    _this.images = img.image;
                });
            });
        });
        /*this.storage.get('google_user').then((val) => {
            console.log(val);
          });*/
    };
    //Getting images from db	
    Tab1Page.prototype.getData = function () {
        var _this = this;
        console.log('getData');
        this.socket.on('user', function (data) {
            _this.images = data;
            console.log(_this.images);
            console.log('lol');
        });
    };
    //Settings window on profile page
    Tab1Page.prototype.presentPopover = function (ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_settings_popover_settings_component__WEBPACK_IMPORTED_MODULE_8__["PopoverSettingsComponent"],
                            event: ev,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myNav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"])
    ], Tab1Page.prototype, "nav", void 0);
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"],
            ng_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_9__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map