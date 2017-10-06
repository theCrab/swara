webpackJsonp([2,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payments_payment_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__exchange_rate_service__ = __webpack_require__(66);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(paymentService, exchangeRateService) {
        this.paymentService = paymentService;
        this.exchangeRateService = exchangeRateService;
        this.title = 'Kutsh';
        this.maximumTransferable = 70000;
        this.fc = ['usd', 'gbp', 'eur'];
        this.lc = ['kes', 'tzs', 'ugx'];
        this.theRate = {};
        this.selectedFc = 'usd';
        this.selectedLc = 'kes';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.exchangeRateService.currencies().subscribe(function (c) { return _this.theRate = c; });
    };
    AppComponent.prototype.calcFee = function () {
        this.er();
        this.fee = this.amount >= 100 ? 2.80 : 1.40;
        this.totalAmount = this.fee + this.amount;
        this.amountReceived = this.amount ? this.exchangeRate * this.amount : this.exchangeRate;
        return this.fee;
    };
    AppComponent.prototype.er = function () {
        // this.exchangeRateService
        //     .getExchangeRate(this.selectedFc, this.selectedLc)
        //     .subscribe(res => this.exchangeRate = res[this.selectedLc])  
        for (var k in this.theRate) {
            if (this.theRate.hasOwnProperty(k) && k == this.selectedFc) {
                this.exchangeRate = this.theRate[k][this.selectedLc];
            }
        }
    };
    AppComponent.prototype.ngOnChanges = function () { };
    AppComponent.prototype.handlePayment = function () {
        var _this = this;
        this.handler = StripeCheckout.configure({
            key: __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].stripeKey,
            image: '/assets/images/kutsh-logo.jpg',
            locale: 'auto',
            token: function (token) {
                _this.paymentService.processPayment(token, _this.amount);
            }
        });
        this.handler.open({
            name: 'Kutsh',
            description: 'Transfer Funds to MPesa',
            zipCode: true,
            currency: 'gbp',
            // billingAddress: true,
            amount: this.totalAmount * 100
        });
    };
    AppComponent.prototype.onPopstate = function () {
        this.handler.close();
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:popstate'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onPopstate", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(173),
        styles: [__webpack_require__(167)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__payments_payment_service__["a" /* PaymentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__payments_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__payments_payment_service__["a" /* PaymentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__exchange_rate_service__["a" /* ExchangeRateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__exchange_rate_service__["a" /* ExchangeRateService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exchange_rate_service__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/* App Root */


/* Firebase */




// import { PaymentModule } from './payments/payment.module';
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].firebase),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */]
            // PaymentModule
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_5__exchange_rate_service__["a" /* ExchangeRateService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(67);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentService = (function () {
    function PaymentService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth)
                _this.userId = auth.uid;
        });
    }
    PaymentService.prototype.processPayment = function (token, amount) {
        var payment = { token: token, amount: amount };
        return this.db.list("/payments/" + this.userId).push(payment);
    };
    return PaymentService;
}());
PaymentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _b || Object])
], PaymentService);

var _a, _b;
//# sourceMappingURL=payment.service.js.map

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

module.exports = "<div class=\"container is-fluid is-widescreen\">\n    <section class=\"hero is-info is-fullheight\">\n        <div class=\"hero-head\">\n            <header class=\"nav\">\n                <div class=\"container\">\n                    <div class=\"nav-left\">\n                        <a class=\"nav-item\">\n                            <img src=\"images/bulma-type-white.png\" alt=\"Kutsh Lipa\">\n                        </a>\n                    </div>\n                    <div class=\"nav-right nav-menu\">\n                        <a class=\"nav-item is-active\">About</a>\n                        <span class=\"nav-item\">\n                            <button class=\"button is-dark is-inverted download\">\n                                <span class=\"icon\"><i class=\"fa fa-apple\"></i></span>\n                                <span>iPhone App</span>\n                            </button>\n                        </span>\n                        <span class=\"nav-item\">\n                            <button class=\"button is-success is-inverted download\">\n                                <span class=\"icon\"><i class=\"fa fa-android\"></i></span>\n                                <span>Android App</span>\n                            </button>\n                        </span>\n                    </div>\n                </div>\n            </header>\n        </div>\n        \n        <div class=\"hero-body\">\n            <div class=\"container has-text-centered\">\n                <h1 class=\"title\">{{ selectedLc | uppercase }} {{ amountReceived }}</h1>\n                <p class=\"subtitle\">Fee: {{ calcFee() | currency: selectedFc : true }}</p>\n                <div class=\"field has-addons has-addons-centered\">\n                    <p class=\"control\">\n                        <span class=\"select\">\n                            <select  [(ngModel)]=\"selectedFc\">\n                                <option *ngFor=\"let c of fc\" [ngValue]=\"c\">{{ c | uppercase }}</option>\n                            </select>\n                        </span>\n                    </p>\n                    <p class=\"control\">\n                        <input class=\"input\" [(ngModel)]=\"amount\" placeholder=\"{{ selectedFc | uppercase }} 1.00\" type=\"number\">\n                    </p>\n                    <p class=\"control\">\n                        <span class=\"select\" >\n                            <select [(ngModel)]=\"selectedLc\">\n                                <option *ngFor=\"let r of lc\" [ngValue]=\"r\">{{ r | uppercase }}</option>\n                            </select>\n                        </span>\n                    </p>\n                </div>\n                <p class=\"control has-text-centered\">\n                    <br>\n                    <button class=\"button is-dark is-large\">Pay {{ totalAmount | currency: selectedFc :true}}</button>\n                </p>\n            </div>\n        </div>\n    </section>\n\n    <div class=\"modal\" id=\"modal\">\n        <div class=\"modal-background\"></div>\n        <div class=\"modal-content\">Any other Bulma elements you want</div>\n        <button class=\"modal-close is-large\"></button>\n    </div>\n</div>\n"

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(99);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: true,
    stripeKey: 'pk_test_cO9tNF9wB3g6y5m3kZsNyfm0',
    firebase: {
        apiKey: "AIzaSyCyttTR6vivfWGnN5F0eBZ3YN3gcVA2f-k",
        authDomain: "kutsh-d749d.firebaseapp.com",
        databaseURL: "https://kutsh-d749d.firebaseio.com",
        projectId: "kutsh-d749d",
        storageBucket: "kutsh-d749d.appspot.com",
        messagingSenderId: "339076850636"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeRateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExchangeRateService = (function () {
    function ExchangeRateService(db) {
        this.db = db;
    }
    ExchangeRateService.prototype.currencies = function () {
        return this.db.object('/currencies');
    };
    ExchangeRateService.prototype.getExchangeRate = function (fc, lc) {
        return this.db.object("currencies/" + fc);
    };
    return ExchangeRateService;
}());
ExchangeRateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object])
], ExchangeRateService);

var _a;
//# sourceMappingURL=exchange-rate.service.js.map

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 98;


/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(34);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.bundle.js.map