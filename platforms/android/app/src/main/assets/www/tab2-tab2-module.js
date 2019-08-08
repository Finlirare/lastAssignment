(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/services/map.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/map.service.ts ***!
  \*****************************************/
/*! exports provided: MapsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsService", function() { return MapsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MapsService = /** @class */ (function () {
    function MapsService(http) {
        this.http = http;
    }
    MapsService.prototype.getLocation = function () {
        return this.http.get('http://api.ipapi.com/check?access_key=756b800cd942342960e3bf62ce88dc88');
    };
    MapsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MapsService);
    return MapsService;
}());



/***/ }),

/***/ "./src/app/services/socket.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/socket.service.ts ***!
  \********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_2__);



var SocketService = /** @class */ (function () {
    function SocketService(socket) {
        this.socket = socket;
        this.markers = [];
        this.imageMarker = '';
    }
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_socket_io__WEBPACK_IMPORTED_MODULE_2__["Socket"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");









var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }]), _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_8__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCf5imGc4PIY7TyUWgsjHPH-lXhcgZbQ1o' })
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>\r\n        Tab Two\r\n      </ion-title>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n  \r\n  <ion-content>\r\n      <agm-map [latitude]=\"lat\" [longitude]=\"lng\">\r\n          <!--<agm-marker *ngFor=\"let mark of markers; let i = index\" [latitude]=\"mark.lat\" [longitude]=\"mark.long\" [iconUrl]='{\"url\": mark.image,\"scaledSize\": {\"height\": 40, \"width\": 40}}'>-->\r\n          <agm-marker *ngFor=\"let mark of markers; let i = index\" [latitude]=\"mark.lat\" [longitude]=\"mark.long\">\r\n              <agm-info-window>\r\n                  <p>{{mark.uploadTime}}</p>\r\n                  <img [src]=\"mark.image\" width=\"200px\"/>\r\n                  <!-- <img src=\"{{img}}\" alt=\"marker img\"> -->\r\n              </agm-info-window>\r\n          </agm-marker>\r\n              <!-- <agm-marker *ngFor=\"let marker of markers; let i = index\"\r\n                [latitude]=\"marker.lat\"\r\n                [longitude]=\"marker.lang\"\r\n                [title]=\"marker.title\"\r\n                [visible]=\"true\">\r\n            \r\n              </agm-marker>\r\n            -->\r\n    </agm-map>\r\n  </ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXGNhcm9sXFxEb2N1bWVudHNcXEdpdEh1YlxcbGFzdEFzc2lnL3NyY1xcYXBwXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/map.service */ "./src/app/services/map.service.ts");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/socket.service */ "./src/app/services/socket.service.ts");





var Tab2Page = /** @class */ (function () {
    //socket:any;
    // markers: Array<any> = [];
    function Tab2Page(map, socket, socketService) {
        this.map = map;
        this.socket = socket;
        this.socketService = socketService;
        this.lat = '';
        this.lng = '';
        this.markers = [];
    }
    Tab2Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.showMap();
        this.socket.emit('getImgsMap');
        //loading images to map
        this.socket.on('imagesMap', function (images) {
            _this.markers = images;
            console.log(_this.markers);
            console.log('markers');
        });
    };
    //Shows current position
    Tab2Page.prototype.showMap = function () {
        var _this = this;
        this.map.getLocation().subscribe(function (data) {
            console.log(data);
            _this.lat = data.latitude;
            _this.lng = data.longitude;
        });
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_map_service__WEBPACK_IMPORTED_MODULE_2__["MapsService"], ng_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"], _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map