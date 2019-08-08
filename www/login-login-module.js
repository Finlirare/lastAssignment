(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"] }])
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Login page</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-col>\n        <ion-row>\n          <ion-button (click)=\"doGoogleLogin()\">Login with google</ion-button>\n        </ion-row>\n     </ion-col>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");







var LoginPage = /** @class */ (function () {
    function LoginPage(googlePlus, loadingController, router, platform, alertController, navCtrl, storage, loginService) {
        this.googlePlus = googlePlus;
        this.loadingController = loadingController;
        this.router = router;
        this.platform = platform;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.loginService = loginService;
    }
    /*
      async doGoogleLogin(){
        const loading = await this.loadingController.create({
          message: 'Please wait...'
        });
        this.presentLoading(loading);
        this.googlePlus.login({
          'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
          'webClientId': '705830739244-ap66lon7fne6c8v2p558m27i3oslth5a.apps.googleusercontent.com', // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
          'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
          })
          .then(user => {
            //save user data on the native storage
            this.storage.set('google_user', {
              name: user.displayName,
              email: user.email,
              picture: user.imageUrl
            })
            .then(() => {
              this.navCtrl.navigateForward('/tabs/tab1');
              // this.router.navigate(["/user"]);
            }, (error) => {
              console.log(error);
            })
            loading.dismiss();
          }, err => {
            console.log(err);
            if(!this.platform.is('cordova')){
              this.presentAlert();
            }
            loading.dismiss();
          })
      }
    
      async presentAlert() {
        const alert = await this.alertController.create({
           message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
           buttons: ['OK']
         });
    
        await alert.present();
      }
    
      async presentLoading(loading) {
          return await loading.present();
      }
      */
    LoginPage.prototype.doGoogleLogin = function () {
        this.loginService.login();
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
            _services_login_service__WEBPACK_IMPORTED_MODULE_6__["LoginService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/dist/index.js");






var LoginService = /** @class */ (function () {
    function LoginService(googlePlus, navCtrl, socket, storage) {
        this.googlePlus = googlePlus;
        this.navCtrl = navCtrl;
        this.socket = socket;
        this.storage = storage;
    }
    LoginService.prototype.login = function () {
        var _this = this;
        this.googlePlus.login({
            'scopes': '',
            'webClientId': 'webClientId.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) {
            _this.socket.emit('login', res);
            _this.user = {
                name: res.displayName,
                email: res.email,
                picture: res.imageUrl
            };
            _this.storage.set('google_user', _this.user).then(function () {
                _this.navCtrl.navigateRoot('/tabs/tab1');
            }, function (err) {
                console.log('err');
            });
            //emitting the user data to the server to store it in the database
            _this.user = res;
        })
            .catch(function (err) {
            console.error(err);
        });
    };
    LoginService.prototype.getuser = function () {
        this.socket.on('user', function (err, res) {
            if (err) {
                console.log(err);
            }
            else {
                console.log(res);
            }
        });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], ng_socket_io__WEBPACK_IMPORTED_MODULE_4__["Socket"], _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"]])
    ], LoginService);
    return LoginService;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map