(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/animal-image/animal-image.component.css":
/*!*********************************************************!*\
  !*** ./src/app/animal-image/animal-image.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hbC1pbWFnZS9hbmltYWwtaW1hZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/animal-image/animal-image.component.html":
/*!**********************************************************!*\
  !*** ./src/app/animal-image/animal-image.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  \n    \"animal-image\" works!\n    <br>        \n    number of entries in animalImage array: {{ getAnimalImage().length }}\n    <br>\n    <li *ngFor=\"let animalImage of getAnimalImage()\" > \n        {{ animalImage.id }}\n        <br>\n        {{ animalImage.animalId }}\n        <br>\n        {{ animalImage.imageId}}\n\n    </li>\n      \n</p>"

/***/ }),

/***/ "./src/app/animal-image/animal-image.component.ts":
/*!********************************************************!*\
  !*** ./src/app/animal-image/animal-image.component.ts ***!
  \********************************************************/
/*! exports provided: AnimalImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalImageComponent", function() { return AnimalImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimalImageComponent = /** @class */ (function () {
    function AnimalImageComponent() {
        this.animalImage = [
            {
                id: 1,
                animalId: 101,
                imageId: 1
            },
            {
                id: 2,
                animalId: 102,
                imageId: 1
            },
            {
                id: 3,
                animalId: 101,
                imageId: 2
            }
        ];
    }
    AnimalImageComponent.prototype.ngOnInit = function () {
    };
    AnimalImageComponent.prototype.getAnimalImage = function () {
        return this.animalImage;
    };
    AnimalImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animal-image',
            template: __webpack_require__(/*! ./animal-image.component.html */ "./src/app/animal-image/animal-image.component.html"),
            styles: [__webpack_require__(/*! ./animal-image.component.css */ "./src/app/animal-image/animal-image.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimalImageComponent);
    return AnimalImageComponent;
}());



/***/ }),

/***/ "./src/app/animals/animals.component.css":
/*!***********************************************!*\
  !*** ./src/app/animals/animals.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuaW1hbHMvYW5pbWFscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/animals/animals.component.html":
/*!************************************************!*\
  !*** ./src/app/animals/animals.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  \n  \"animals\" works!\n  <br>\n  number of entries in animal array: {{ getAnimals().length }}\n  <br>\n    <li *ngFor=\"let critter of getAnimals()\" >\n        {{ critter.id }}\n        <br>\n        {{ critter.sn }}\n        <br>\n        <div *ngFor=\"let cmn of critter.cn\" >\n          {{ cmn }}\n        </div>\n    </li>\n\n</p>\n"

/***/ }),

/***/ "./src/app/animals/animals.component.ts":
/*!**********************************************!*\
  !*** ./src/app/animals/animals.component.ts ***!
  \**********************************************/
/*! exports provided: AnimalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimalsComponent", function() { return AnimalsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AnimalsComponent = /** @class */ (function () {
    function AnimalsComponent() {
        this.animals = [
            { id: "101",
                cn: [
                    "Eastern Gray Squirrel"
                ],
                sn: "Sciurus carolinensis"
            },
            { id: "102",
                cn: [
                    "English sparrow",
                    "House sparrow"
                ],
                sn: "Passer domesticus"
            }
        ];
    }
    AnimalsComponent.prototype.ngOnInit = function () { };
    AnimalsComponent.prototype.getAnimals = function () {
        return this.animals;
    };
    AnimalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-animals',
            template: __webpack_require__(/*! ./animals.component.html */ "./src/app/animals/animals.component.html"),
            styles: [__webpack_require__(/*! ./animals.component.css */ "./src/app/animals/animals.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AnimalsComponent);
    return AnimalsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n    color: darkblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgzIHtcbiAgICBjb2xvcjogZGFya2JsdWU7XG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class = \"col-xs-12\">\n            <h3>I'm here, in images admin!</h3>\n            <hr>\n            <app-images></app-images>\n            <hr>\n            <app-animals></app-animals>\n            <hr>\n            <app-animal-image></app-animal-image>\n        </div>\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h2>Image</h2>\n            <form action=\"http://10.0.1.14/src/app/imageDescription.php?imageId=$imageId\">\n                Image #:\n                <input type=\"number\" name=\"imageId\" value=\"1\">\n                <input type=\"submit\" value=\"Select\">\n            </form>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images.component.ts");
/* harmony import */ var _animals_animals_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./animals/animals.component */ "./src/app/animals/animals.component.ts");
/* harmony import */ var _animal_image_animal_image_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animal-image/animal-image.component */ "./src/app/animal-image/animal-image.component.ts");




// import { HttpModule } from '@angular/http';




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _images_images_component__WEBPACK_IMPORTED_MODULE_5__["ImagesComponent"],
                _animals_animals_component__WEBPACK_IMPORTED_MODULE_6__["AnimalsComponent"],
                _animal_image_animal_image_component__WEBPACK_IMPORTED_MODULE_7__["AnimalImageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/images/images.component.html":
/*!**********************************************!*\
  !*** ./src/app/images/images.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<p>\n  \n    \"images\" works!\n    <br>        \n    number of entries in animal array: {{ getImages().length }}\n    <br>\n    <li *ngFor=\"let image of getImages()\" > \n        {{ image.id }}\n        <br>\n        {{ image.image }}\n        <br>\n        {{ image.icon }}\n        <br>\n        {{ image.description }}\n    </li>\n      \n</p>\n"

/***/ }),

/***/ "./src/app/images/images.component.ts":
/*!********************************************!*\
  !*** ./src/app/images/images.component.ts ***!
  \********************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImagesComponent = /** @class */ (function () {
    function ImagesComponent() {
        this.images = [
            {
                id: 1,
                image: "image201806220958_pi00.jpg",
                icon: "icon_image201806220958_pi00.jpg",
                description: "Thats a squirrel on *MY* feeder!?!?",
            },
            {
                id: 2,
                image: "image201806220929_pi00.jpg",
                icon: "icon_image201806220929_pi00.jpg",
                description: "new"
            },
            {
                id: 3,
                image: "image201811251053_pi15 jpg",
                icon: "icon_image201811251053_pi15.jpg",
                description: "Feeder #3"
            },
            {
                id: 4,
                image: "image201807071944_pi15 jpg",
                icon: "icon_image201807071944_pi15.jpg",
                description: "Feeder #2"
            },
            {
                id: 5,
                image: "BirdFeeder.jpeg",
                icon: "icon_BirdFeeder.jpg",
                description: "Feeder #1"
            }
        ];
    }
    ImagesComponent.prototype.getImages = function () {
        return this.images;
    };
    ImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/images/images.component.html")
        })
    ], ImagesComponent);
    return ImagesComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/brianbiggs/code/bf-image-admin/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map