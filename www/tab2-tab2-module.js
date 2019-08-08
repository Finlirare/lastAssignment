(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/components/animated-like/animated-like.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/animated-like/animated-like.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-icon (click)=\"toggleLikeState()\" tappable [@star]=\"likeState\" size=\"large\" [name]=\"iconName\"></ion-icon>"

/***/ }),

/***/ "./src/app/components/animated-like/animated-like.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/animated-like/animated-like.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5pbWF0ZWQtbGlrZS9hbmltYXRlZC1saWtlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/animated-like/animated-like.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/animated-like/animated-like.component.ts ***!
  \*********************************************************************/
/*! exports provided: AnimatedLikeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimatedLikeComponent", function() { return AnimatedLikeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-socket-io */ "./node_modules/ng-socket-io/dist/index.js");
/* harmony import */ var ng_socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng_socket_io__WEBPACK_IMPORTED_MODULE_3__);




var AnimatedLikeComponent = /** @class */ (function () {
    function AnimatedLikeComponent(socket) {
        this.socket = socket;
        this.likeState = 'unliked';
        this.iconName = 'outline-star';
    }
    AnimatedLikeComponent.prototype.ngOnInit = function () {
    };
    AnimatedLikeComponent.prototype.toggleLikeState = function () {
        console.log(event);
        //var star = event.srcElement.nextElementSibling.src;
        //console.log(star);
        if (this.likeState == 'unliked') {
            this.likeState = 'liked';
            this.iconName = 'star';
            console.log('liked image');
            // this.socket.emit('star', star);
        }
        else {
            this.likeState = 'unliked';
            this.iconName = 'outline-star';
            //	this.socket.emit('disStar', star);
            console.log('already liked, disliked img');
        }
    };
    AnimatedLikeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animated-like',
            template: __webpack_require__(/*! ./animated-like.component.html */ "./src/app/components/animated-like/animated-like.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('star', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('unliked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        color: '#000000',
                        opacity: '0.5',
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('liked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        color: '#8ACAFE',
                        opacity: '1',
                        transform: 'scale(1.1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('unliked <=> liked', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('100ms ease-out'))
                ])
            ],
            styles: [__webpack_require__(/*! ./animated-like.component.scss */ "./src/app/components/animated-like/animated-like.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]])
    ], AnimatedLikeComponent);
    return AnimatedLikeComponent;
}());



/***/ }),

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
/* harmony import */ var _components_animated_like_animated_like_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/animated-like/animated-like.component */ "./src/app/components/animated-like/animated-like.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @agm/js-marker-clusterer */ "./node_modules/@agm/js-marker-clusterer/index.js");











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
                _agm_core__WEBPACK_IMPORTED_MODULE_9__["AgmCoreModule"].forRoot({ apiKey: 'AIzaSyCf5imGc4PIY7TyUWgsjHPH-lXhcgZbQ1o' }),
                _agm_js_marker_clusterer__WEBPACK_IMPORTED_MODULE_10__["AgmJsMarkerClustererModule"]
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"], _components_animated_like_animated_like_component__WEBPACK_IMPORTED_MODULE_8__["AnimatedLikeComponent"]]
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

module.exports = "<ion-header>\r\n\t<ion-toolbar>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t\t<ion-button (click)=\"showLikes()\">Show <ion-icon name=\"star\"></ion-icon> only</ion-button>\r\n\t\t\t<ion-button (click)=\"showAll()\">Show all</ion-button>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\t<agm-map [latitude]=\"lat\" [longitude]=\"lng\" [maxZoom]=\"200\">\r\n\t\t<!--<agm-marker-cluster [imagePath]=\"'https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m'\"\r\n\t\t\t\t\t\t[minimumClusterSize]=\"2\"\r\n\t\t\t\t\t\t[gridSize]=\"60\"\r\n\t\t\t\t\t\t>-->\r\n\r\n\t\t<agm-marker *ngFor=\"let mark of markers; let i = index\" [latitude]=\"mark.lat\" [longitude]=\"mark.long\">\r\n\t\t\t<agm-info-window>\r\n\t\t\t\t<p>{{mark.uploadTime}}</p>\r\n\t\t\t\t<p>{{mark.liked}}</p>\r\n\t\t\t\t<ion-button (click)=\"star(mark)\" slot=\"icon-only\" fill=\"clear\">\r\n\t\t\t\t\t<ion-icon [name]=\"mark.icon\" class=\"imgIcon\"></ion-icon>\r\n\t\t\t\t</ion-button>\r\n\t\t\t\t<img [attr.data-id]=\"mark._id\" [src]=\"mark.image\" width=\"200px\" />\r\n\t\t\t</agm-info-window>\r\n\t\t</agm-marker>\r\n\t\t<!--</agm-marker-cluster>-->\r\n\t</agm-map>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 100%; }\n\np {\n  display: inline-block; }\n\nimg {\n  display: block; }\n\n.imgIcon {\n  position: absolute;\n  top: 0; }\n\nion-icon {\n  color: lightcoral; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXGNhcm9sXFxEb2N1bWVudHNcXEdpdEh1YlxcbGFzdEFzc2lnL3NyY1xcYXBwXFx0YWIyXFx0YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxjQUFjLEVBQUE7O0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU0sRUFBQTs7QUFHUjtFQUNJLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGFnbS1tYXAge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICAuaW1nSWNvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgfVxyXG5cclxuICBpb24taWNvbiB7IFxyXG4gICAgICBjb2xvcjogbGlnaHRjb3JhbDtcclxuICAgICAgLy9kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB9XHJcbiJdfQ== */"

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
    function Tab2Page(maps, socket, socketService) {
        this.maps = maps;
        this.socket = socket;
        this.socketService = socketService;
        this.lat = '';
        this.lng = '';
        this.markers = [];
        this.likedMarkerss = [];
    }
    // Executed when this tab is displayed
    Tab2Page.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.showMap();
        this.socket.emit('getLikesMap');
        this.socket.on('likedImgs', function (likedImgs) {
            _this.likedMarkerss = likedImgs;
        });
        this.showAll();
    };
    // Show only liked images on the map
    Tab2Page.prototype.showLikes = function () {
        var _this = this;
        // emitting socket to server to fetch likes
        this.socket.emit('getLikesMap');
        // fetching socket from db with likes
        this.socket.on('likedImgs', function (likedImgs) {
            var likedMarkers = [];
            // Looping through the fetched likes and comparing them to all the markers in order to set the right icon
            likedImgs.forEach(function (likedImg) {
                _this.markers.forEach(function (marker) {
                    if (likedImg.imageId === marker._id) {
                        marker.icon = 'star';
                        likedMarkers.push(marker);
                    }
                });
            });
            _this.markers = likedMarkers;
        });
    };
    // Show all images on the map, also looping through the likes to display the right icon
    Tab2Page.prototype.showAll = function () {
        var _this = this;
        var newMarkers = [];
        this.socket.emit('getImgsMap');
        this.socket.on('imagesMap', function (images) {
            _this.socket.emit('getLikesMap');
            _this.socket.on('likedImgs', function (likes) {
                for (var i = 0; i < images.length; i++) {
                    var isLiked = false;
                    for (var j = 0; j < likes.length; j++) {
                        var like = likes[j];
                        if (like.imageId === images[i]._id) {
                            isLiked = true;
                            break;
                        }
                    }
                    if (isLiked) {
                        images[i].icon = 'star';
                        newMarkers.push(images[i]);
                    }
                    else {
                        images[i].icon = 'star-outline';
                        newMarkers.push(images[i]);
                    }
                    // this.markers.push(image[i]);
                }
                _this.markers = newMarkers;
            });
        });
    };
    Tab2Page.prototype.showMap = function () {
        var _this = this;
        this.maps.getLocation().subscribe(function (data) {
            console.log(data);
            _this.lat = data.latitude;
            _this.lng = data.longitude;
        });
    };
    // Like an image, called to "star" an image in our app
    Tab2Page.prototype.star = function (mark) {
        if (mark.icon === 'star') {
            console.log('already liked, disliked img');
            this.socket.emit('disStar', mark._id);
            mark.icon = 'star-outline';
        }
        else if (mark.icon === 'star-outline') {
            console.log('liked image');
            this.socket.emit('star', mark._id);
            mark.icon = 'star';
        }
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_map_service__WEBPACK_IMPORTED_MODULE_2__["MapsService"],
            ng_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map