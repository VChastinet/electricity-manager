webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__device_input_device_input_component__ = __webpack_require__("../../../../../src/app/device-input/device-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__front_page_front_page_component__ = __webpack_require__("../../../../../src/app/front-page/front-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_table_main_table_module__ = __webpack_require__("../../../../../src/app/main-table/main-table.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__device_data_service__ = __webpack_require__("../../../../../src/app/device-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__fare_data_service__ = __webpack_require__("../../../../../src/app/fare-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__total_cost_total_cost_component__ = __webpack_require__("../../../../../src/app/total-cost/total-cost.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__device_input_device_input_component__["a" /* DeviceInputComponent */],
            __WEBPACK_IMPORTED_MODULE_5__front_page_front_page_component__["a" /* FrontPageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__total_cost_total_cost_component__["a" /* TotalCostComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__main_table_main_table_module__["a" /* MainTableModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_7__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routing */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__device_data_service__["a" /* DeviceDataService */], __WEBPACK_IMPORTED_MODULE_9__fare_data_service__["a" /* FareDataService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__front_page_front_page_component__ = __webpack_require__("../../../../../src/app/front-page/front-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_input_device_input_component__ = __webpack_require__("../../../../../src/app/device-input/device-input.component.ts");



var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__front_page_front_page_component__["a" /* FrontPageComponent */] },
    { path: 'input', component: __WEBPACK_IMPORTED_MODULE_2__device_input_device_input_component__["a" /* DeviceInputComponent */] },
    { path: 'input/:id', component: __WEBPACK_IMPORTED_MODULE_2__device_input_device_input_component__["a" /* DeviceInputComponent */] },
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dexie_service__ = __webpack_require__("../../../../../src/app/core/dexie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CoreModule = (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__dexie_service__["a" /* DexieService */]
        ]
    }),
    __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Optional */])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* SkipSelf */])()),
    __metadata("design:paramtypes", [CoreModule])
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/dexie.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DexieService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dexie__ = __webpack_require__("../../../../dexie/dist/dexie.es.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var DexieService = (function (_super) {
    __extends(DexieService, _super);
    function DexieService() {
        var _this = _super.call(this, 'Manager') || this;
        _this.version(1).stores({
            devices: '++id',
            fare: '++id'
        });
        return _this;
    }
    return DexieService;
}(__WEBPACK_IMPORTED_MODULE_0_dexie__["a" /* default */]));

//# sourceMappingURL=dexie.service.js.map

/***/ }),

/***/ "../../../../../src/app/device-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_dexie_service__ = __webpack_require__("../../../../../src/app/core/dexie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeviceDataService = (function () {
    function DeviceDataService(dexieService) {
        this.dexieService = dexieService;
        this.table = this.dexieService.table('devices');
    }
    DeviceDataService.prototype.getById = function (id) {
        return this.table.get(id);
    };
    DeviceDataService.prototype.getAll = function () {
        return this.table.toArray();
    };
    DeviceDataService.prototype.add = function (data) {
        return this.table.add(data);
    };
    DeviceDataService.prototype.update = function (id, data) {
        return this.table.update(id, data);
    };
    DeviceDataService.prototype.remove = function (id) {
        return this.table.delete(id);
    };
    return DeviceDataService;
}());
DeviceDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_dexie_service__["a" /* DexieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_dexie_service__["a" /* DexieService */]) === "function" && _a || Object])
], DeviceDataService);

var _a;
//# sourceMappingURL=device-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/device-input/device-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  max-width: 80rem;\n}\n\n.input-group-addon{\n  max-width: 10rem;\n}\n\n#quantity, #unity{\n  width: 8rem;\n  border-radius: 4px;\n  border: .7px solid;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/device-input/device-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>adicione um dispositivo:</h2>\n  \n  <form (submit)=\"saveData($event)\">\n  \n    <label for=\"input-deviceInput\">dispositivo:</label>\n    \n    <div class=\"input-group\">\n\n      <input\n        placeholder=\"insira o nome do dispositivo\"\n        id=\"input-deviceInput\"\n        class=\"form-control\"\n        autocomplete=\"off\"\n        type=\"text\"\n        name=\"name\"\n        [(ngModel)]=\"deviceInput.name\">\n\n      <div class=\"input-group-addon\">\n\n        <input\n          id=\"quantity\"\n          name=\"quantity\"\n          type=\"number\"\n          [(ngModel)]=\"deviceInput.quantity\">\n      </div>\n    </div>\n\n  \n    <label for=\"input-potency\">potência (Watts):</label>\n    <input\n      placeholder=\"insira a potência do dispositivo em WATTS\"\n      id=\"input-potency\"\n      class=\"form-control\"\n      autocomplete=\"off\"\n      type=\"number\"\n      name=\"potency\"\n      [(ngModel)]=\"deviceInput.potency\">\n  \n  \n    <label for=\"input-usage\">tempo de uso</label>\n\n    <div class=\"input-group\">\n  \n      <input\n        placeholder=\"insira o tempo de uso do dispositivo\"\n        id=\"input-usage\"\n        class=\"form-control\"\n        autocomplete=\"off\"\n        type=\"number\"\n        name=\"usage\"\n        [(ngModel)]=\"deviceInput.usage\">\n  \n      <div class=\"input-group-addon\">\n  \n        <select\n        id=\"unity\"\n        name=\"unity\"\n        [(ngModel)]=\"deviceInput.unity\">\n\n          <option value=\"md\">min/dia</option>\n          <option value=\"hd\">hr/dia</option>\n          <option value=\"hs\">hr/sem</option>\n          <option value=\"hm\">hr/mês</option>\n          <option value=\"ds\">dias/sem</option>\n          <option value=\"dm\">dias/mês</option>\n\n        </select>\n        \n      </div>\n    </div>\n    <button class=\"btn btn-info\" type=\"submit\">salvar</button>\n  </form>\n  <button [routerLink]=\"'[/]'\" class=\"btn btn-info pull-right\">voltar</button>\n    \n</div>"

/***/ }),

/***/ "../../../../../src/app/device-input/device-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__device_component__ = __webpack_require__("../../../../../src/app/device.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__device_data_service__ = __webpack_require__("../../../../../src/app/device-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeviceInputComponent = (function () {
    function DeviceInputComponent(deviceDataService, route, router /*private fb: FormBuilder*/) {
        // this.myForm = fb.group({
        //   name: ["", Validators.compose([Validators.required, Validators.minLength(3)])],
        //   potency: ["", Validators.required]
        // })
        var _this = this;
        this.deviceDataService = deviceDataService;
        this.route = route;
        this.router = router; /*private fb: FormBuilder*/
        //private myForm = FormGroup;
        this.deviceList = [];
        this.deviceInput = new __WEBPACK_IMPORTED_MODULE_2__device_component__["a" /* DeviceComponent */];
        this.id = null;
        this.route.params.subscribe(function (params) {
            _this.id = Number(params.id);
            if (_this.id) {
                _this.deviceDataService
                    .getById(_this.id)
                    .then(function (device) {
                    _this.deviceInput = device.deviceInput;
                    _this.deviceInput.potency *= 1000;
                });
            }
        });
    }
    DeviceInputComponent.prototype.checkParams = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = Number(params.id);
            if (id) {
                _this.deviceDataService
                    .getById(id)
                    .then(function (device) {
                    _this.deviceInput = device.deviceInput;
                    _this.deviceInput.potency *= 1000;
                });
            }
        });
    };
    DeviceInputComponent.prototype.adjustValues = function (deviceInput) {
        switch (deviceInput.unity) {
            case "md":
                deviceInput.usage = (deviceInput.usage * 30) / 60;
                break;
            case "hd":
                deviceInput.usage = (deviceInput.usage * 30);
                break;
            case "hs":
                deviceInput.usage = (deviceInput.usage * 4);
                break;
            case "ds":
                deviceInput.usage = Math.floor((deviceInput.usage * 4.286) * 24);
                break;
            case "dm":
                deviceInput.usage = (deviceInput.usage * 24);
                break;
            default:
                break;
        }
        deviceInput.potency /= 1000;
        deviceInput.consume = ((deviceInput.potency * deviceInput.usage) * deviceInput.quantity).toFixed(2);
        deviceInput.unity = "hm";
    };
    DeviceInputComponent.prototype.saveData = function (event) {
        var _this = this;
        event.preventDefault();
        var deviceInput = this.deviceInput;
        this.adjustValues(deviceInput);
        var devices = {
            deviceInput: deviceInput
        };
        if (this.id) {
            var id_1 = this.id;
            this.deviceDataService
                .update(id_1, { deviceInput: deviceInput })
                .then(function () {
                var updateDevice = _this.deviceList.find(function (device) { return device.id === id_1; });
                _this.deviceList = _this.deviceList.filter(function (device) { return device.id != id_1; }).concat([Object.assign({}, updateDevice, { deviceInput: deviceInput })]);
                _this.router.navigate(['']);
            });
        }
        else {
            this.deviceDataService
                .add(devices)
                .then(function (id) {
                _this.deviceList = _this.deviceList.concat([Object.assign({}, devices, { id: id })]);
            });
            this.deviceInput = new __WEBPACK_IMPORTED_MODULE_2__device_component__["a" /* DeviceComponent */];
        }
    };
    return DeviceInputComponent;
}());
DeviceInputComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-device-input',
        template: __webpack_require__("../../../../../src/app/device-input/device-input.component.html"),
        styles: [__webpack_require__("../../../../../src/app/device-input/device-input.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__device_data_service__["a" /* DeviceDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__device_data_service__["a" /* DeviceDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] /*private fb: FormBuilder*/ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] /*private fb: FormBuilder*/) === "function" && _c || Object])
], DeviceInputComponent);

var _a, _b, _c;
//# sourceMappingURL=device-input.component.js.map

/***/ }),

/***/ "../../../../../src/app/device.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeviceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DeviceComponent = (function () {
    function DeviceComponent() {
        this.name = "";
        this.potency = null;
        this.usage = null;
        this.unity = "hd";
        this.quantity = 1;
        this.consume = null;
        this.cost = null;
    }
    return DeviceComponent;
}());

__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DeviceComponent.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], DeviceComponent.prototype, "potency", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], DeviceComponent.prototype, "usage", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], DeviceComponent.prototype, "unity", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], DeviceComponent.prototype, "quantity", void 0);
//# sourceMappingURL=device.component.js.map

/***/ }),

/***/ "../../../../../src/app/fare-data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FareDataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_dexie_service__ = __webpack_require__("../../../../../src/app/core/dexie.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FareDataService = (function () {
    function FareDataService(dexieService) {
        this.dexieService = dexieService;
        this.table = this.dexieService.table('fare');
    }
    FareDataService.prototype.getAll = function () {
        return this.table.toArray();
    };
    FareDataService.prototype.add = function (data) {
        return this.table.add(data);
    };
    FareDataService.prototype.update = function (id, data) {
        return this.table.update(id, data);
    };
    FareDataService.prototype.remove = function (id) {
        return this.table.delete(id);
    };
    return FareDataService;
}());
FareDataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_dexie_service__["a" /* DexieService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_dexie_service__["a" /* DexieService */]) === "function" && _a || Object])
], FareDataService);

var _a;
//# sourceMappingURL=fare-data.service.js.map

/***/ }),

/***/ "../../../../../src/app/fare/fare.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fare-modal{\n  z-index: 999;\n  text-align: center;\n  position: absolute;\n  width: 22%;\n  height: 18%;\n  left: calc(50% - 11%);\n  top: calc(50% - 9%);\n  \n  opacity: 1;\n  transition: all 0.3s;\n}\n\n.fare-modal input{\n  margin-top: 7%;\n  width: 75%;\n  height: 3rem;\n}\n\n.modal-bg{\n  z-index: 998;\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.4);\n\n  opacity: 1;\n  transition: all 0.3s;\n}\n\n.closed{\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.3s;\n}\n\n.fare-display:hover{\n  cursor: pointer;  \n}\n\n.fare-display{\n  margin: 20px 15px 0 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fare/fare.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"fare-modal panel panel-default closed\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">insira a tarifa</h3>\n  </div>\n  <div class=\"panel-body\">\n    <input\n    (keyup.enter)=\"closeAndSave(fareItem[0].id, fareInput)\"\n    id=\"fare\"\n    placeholder=\"valor da tarifa\"\n    type=\"number\"\n    step=\"0.001\"\n    min=\"0\"\n    name=\"fareInput\"\n    (input)=\"fareInput = $event.target.value\"\n    >\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"fare-display col-xs-1 pull-right input-group\" (click)=\"openModal()\">\n    <span class=\"input-group-addon\" id=\"fare-display\">tarifa:</span>\n    <p class=\"form-control\" aria-describedby=\"fare-display\"> {{ fareInput | currency:'BRL':true:'1.4-4' }}</p>\n  </div>\n</div>\n\n<div class=\"modal-bg closed\" (click)=\"closeAndSave(fareItem[0].id, fareInput)\"></div>"

/***/ }),

/***/ "../../../../../src/app/fare/fare.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FareComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fare_data_service__ = __webpack_require__("../../../../../src/app/fare-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FareComponent = (function () {
    function FareComponent(fareDataService) {
        this.fareDataService = fareDataService;
        this.fareItem = [];
        this.setFare = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    FareComponent.prototype.openModal = function () {
        document.querySelector('.fare-modal').classList.remove('closed');
        document.querySelector('.modal-bg').classList.remove('closed');
    };
    FareComponent.prototype.closeAndSave = function (id, fareInput) {
        var _this = this;
        console.log(fareInput);
        this.setFare.emit({ newFare: this.fareInput });
        this.fareDataService
            .update(id, { fareInput: fareInput })
            .then(function () {
            var updateFare = _this.fareItem.find(function (fare) { return fare.id === id; });
            _this.fareItem = _this.fareItem.filter(function (fare) { return fare.id != id; }).concat([Object.assign({}, updateFare, { fareInput: fareInput })]);
        });
        document.querySelector('.fare-modal').classList.add('closed');
        document.querySelector('.modal-bg').classList.add('closed');
    };
    FareComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fareDataService
            .getAll()
            .then(function (fare) {
            _this.fareItem = fare;
            _this.fareInput = Number(_this.fareItem[0].fareInput);
        }).catch(function () {
            var fareInput = _this.fareInput;
            fareInput = 0;
            var fare = {
                fareInput: fareInput
            };
            _this.fareDataService
                .add(fare)
                .then(function (id) {
                _this.fareItem = _this.fareItem.concat([Object.assign({}, fare, { id: id })]);
            });
        });
    };
    return FareComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], FareComponent.prototype, "setFare", void 0);
FareComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-fare',
        template: __webpack_require__("../../../../../src/app/fare/fare.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fare/fare.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fare_data_service__["a" /* FareDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fare_data_service__["a" /* FareDataService */]) === "function" && _a || Object])
], FareComponent);

var _a;
//# sourceMappingURL=fare.component.js.map

/***/ }),

/***/ "../../../../../src/app/front-page/front-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-primary{\n  width: 15.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/front-page/front-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <div class=\"jumbotron\">\n\n    <h1>\n      electronator\n    </h1>\n\n    <p>gerenciador de gastos de energia elétrica</p>\n\n  </div>\n</div>\n  \n<div class=\"container\">\n  <button [routerLink]=\"['/input']\" class=\"btn btn-primary\">Adicionar Dispositivo</button>\n</div>\n\n<div class=\"container\">\n  \n  <app-main-table> \n    <app-total-cost></app-total-cost>\n  </app-main-table>\n\n  \n</div>"

/***/ }),

/***/ "../../../../../src/app/front-page/front-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FrontPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrontPageComponent = (function () {
    function FrontPageComponent() {
    }
    FrontPageComponent.prototype.ngOnInit = function () {
    };
    return FrontPageComponent;
}());
FrontPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-front-page',
        template: __webpack_require__("../../../../../src/app/front-page/front-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/front-page/front-page.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FrontPageComponent);

//# sourceMappingURL=front-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-table/main-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".table-hide { \n  visibility: hidden; /* hides sub-menu */\n  opacity: 0;\n  width: 100%;\n  -webkit-transform: translateY(-2em);\n          transform: translateY(-2em);\n  transition: all 0.3s;\n}\n\n.table-show {\n  visibility: visible; /* shows sub-menu */\n  opacity: 1;\n  -webkit-transform: translateY(0em);\n          transform: translateY(0em);\n  transition: all 0.3s;\n}\n\n.glyphicon-trash{\n  cursor: pointer;\n  color: crimson;\n  margin-left: 10px;\n}\n\n.glyphicon-pencil{\n  cursor: pointer;\n  color: cornflowerblue;\n  border-right: solid 1px lightgray;\n  padding: 5px 15px 5px 0;\n}\n\n.btn-info{\n  margin: 20px 0 20px 0;\n  width: 15.5rem;\n}\n\nth{\n  text-transform: none !important;\n}\n\n.rtable .quantity{\n  position: relative;\n  float: left;\n  -ms-flex-item-align: center;\n      -ms-grid-row-align: center;\n      align-self: center;\n  border-style: dotted;\n  border-width: 0 1.2px 1.2px 0;\n  border-color: lightgray;\n  margin-right: 5px;\n  padding: 3px 8px 3px 8px;\n}\n.rtable .device-name{\n  display: inline-block;\n  margin: 8px 5px 0 0;\n}\n.rtable tbody td:first-child{\n  padding: 0;\n}\n\n@media (max-width: 750px){\n\n/*!\n// CSS only Responsive Tables\n// http://dbushell.com/2016/03/04/css-only-responsive-tables/\n// by David Bushell\n*/\n\n  .rtable th{\n    height: 3.7rem;\n    border-bottom: solid 1px lightgray !important;\n  }\n  .rtable thead tr:first-child{\n    border-top: solid 1px lightgray !important;\n  }\n  .rtable td{\n    height: 3.7rem;\n  }\n  \n  .rtable {\n    text-align: center;\n    vertical-align: top;\n    max-width: 100%;\n    white-space: nowrap;\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  \n  .rtable,\n  .rtable--flip tbody {\n    -webkit-overflow-scrolling: touch;\n  }\n  \n  .rtable th {\n    font-size: 11px;\n    text-align: left;\n    text-transform: uppercase;\n    background: #f2f0e6;\n  }\n  \n  .rtable th,\n  .rtable td {\n    border: 1px solid #d9d7ce;\n  }\n  \n  .rtable--flip {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    overflow: hidden;\n    background: none;\n  }\n  \n  .rtable--flip thead {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n    min-width: -webkit-min-content;\n    min-width: -moz-min-content;\n    min-width: min-content;\n  }\n  \n  .rtable--flip tbody {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    overflow-x: auto;\n    overflow-y: hidden;\n  }\n  \n  .rtable--flip tr {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    min-width: -webkit-min-content;\n    min-width: -moz-min-content;\n    min-width: min-content;\n    -ms-flex-negative: 0;\n        flex-shrink: 0;\n  }\n  \n  .rtable--flip td,\n  .rtable--flip th {\n    display: block;\n  }\n  \n  .rtable--flip td {\n    border-left: 0;\n  }\n  \n  .rtable--flip th:not(:last-child),\n  .rtable--flip td:not(:last-child) {\n    border-bottom: 0;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-table/main-table.component.html":
/***/ (function(module, exports) {

module.exports = "<app-fare (setFare)=\"onFareSet($event)\"></app-fare>\n\n  <table class=\"table table-striped rtable rtable--flip\">\n    <thead>\n      <tr>\n        <th>DISPOSITIVO</th>\n        <th>USO (Hora/Mês)</th>\n        <th>CONSUMO (KWh/mês)</th> \n        <th>CUSTO/MÊS</th>\n        <th>POTÊNCIA (KW)</th>\n        <th>ALTERAR</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let device of deviceList\">\n        <td>\n          <span class=\"quantity\">{{ device.deviceInput.quantity }}</span>\n          <span class=\"device-name\">{{ device.deviceInput.name }}</span>\n        </td>\n        <td>{{ device.deviceInput.usage }}</td>\n        <td>{{ device.deviceInput.consume }}</td>\n        <td>{{ device.deviceInput.cost | currency:'BRL':true:'1.2-2'}}</td>\n        <td>{{ device.deviceInput.potency }}</td>\n        <td>\n          <span [routerLink]=\"['/input', device.id]\" class=\"glyphicon glyphicon-pencil\"></span>\n          <span class=\"glyphicon glyphicon-trash\" (click)=\"remove(device.id)\"></span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n\n<button class=\"total-btn btn btn-default\" (click)=\"showTotal()\">Totais:</button>\n\n<ng-content></ng-content>\n\n<div id=\"total-table\" class=\"table-hide\">\n  <app-total-table [deviceList]=\"deviceList\">\n  </app-total-table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main-table/main-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__device_data_service__ = __webpack_require__("../../../../../src/app/device-data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fare_data_service__ = __webpack_require__("../../../../../src/app/fare-data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainTableComponent = (function () {
    function MainTableComponent(fareDataService, devicedataService) {
        var _this = this;
        this.fareDataService = fareDataService;
        this.devicedataService = devicedataService;
        this.fareDataService
            .getAll()
            .then(function (fare) {
            console.log("accessing fare database");
            _this.fare = fare[0].fareInput;
            _this.devicedataService
                .getAll()
                .then(function (devices) {
                _this.deviceList = devices;
                _this.deviceList.forEach(function (device) {
                    device.deviceInput.cost = (_this.fare * device.deviceInput.consume);
                });
            });
        })
            .catch(function () {
            console.log("creating new fare database");
            _this.devicedataService
                .getAll()
                .then(function (devices) {
                _this.deviceList = devices;
                _this.deviceList.forEach(function (device) {
                    device.deviceInput.cost = 0;
                });
            });
        });
    }
    MainTableComponent.prototype.onFareSet = function (event) {
        var _this = this;
        this.fare = event.newFare;
        this.deviceList.forEach(function (device) {
            device.deviceInput.cost = Number((_this.fare * device.deviceInput.consume).toFixed(2));
        });
    };
    MainTableComponent.prototype.remove = function (id, event) {
        var _this = this;
        this.devicedataService.remove(id)
            .then(function () {
            _this.deviceList = _this.deviceList.filter(function (device) { return device.id !== id; });
        });
    };
    MainTableComponent.prototype.showTotal = function () {
        var table = document.querySelector('#total-table');
        table.classList.toggle('table-hide');
        table.classList.toggle('table-show');
    };
    return MainTableComponent;
}());
MainTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-main-table',
        template: __webpack_require__("../../../../../src/app/main-table/main-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-table/main-table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__fare_data_service__["a" /* FareDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fare_data_service__["a" /* FareDataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__device_data_service__["a" /* DeviceDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__device_data_service__["a" /* DeviceDataService */]) === "function" && _b || Object])
], MainTableComponent);

var _a, _b;
//# sourceMappingURL=main-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/main-table/main-table.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainTableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__total_table_total_table_component__ = __webpack_require__("../../../../../src/app/main-table/total-table/total-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_table_component__ = __webpack_require__("../../../../../src/app/main-table/main-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fare_fare_component__ = __webpack_require__("../../../../../src/app/fare/fare.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MainTableModule = (function () {
    function MainTableModule() {
    }
    return MainTableModule;
}());
MainTableModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__app_routes__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__total_table_total_table_component__["a" /* TotalTableComponent */],
            __WEBPACK_IMPORTED_MODULE_4__main_table_component__["a" /* MainTableComponent */],
            __WEBPACK_IMPORTED_MODULE_5__fare_fare_component__["a" /* FareComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_3__total_table_total_table_component__["a" /* TotalTableComponent */],
            __WEBPACK_IMPORTED_MODULE_4__main_table_component__["a" /* MainTableComponent */]
        ]
    })
], MainTableModule);

//# sourceMappingURL=main-table.module.js.map

/***/ }),

/***/ "../../../../../src/app/main-table/total-table/total-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-table/total-table/total-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6\">\n    <table class=\"table table-striped\">\n    \n      <tbody>\n\n        <tr>\n          <td>custo mensal:</td>\n          <td><b>{{ totals('cost') | currency:'BRL':true:'1.2-2' }}</b></td>\n        </tr>\n    \n        <tr>\n          <td>dispositivos:</td>\n          <td><b>{{ totals('quantity') }}</b></td>\n        </tr>\n    \n        <tr>\n          <td>potência:</td>\n          <td><b>{{ totals('potency').toFixed(3) }}</b> KW</td>\n        </tr>\n    \n        <tr>\n          <td>consumo:</td>\n          <td><b>{{ totals('consume') }}</b> KWh/mês</td>\n        </tr>\n    \n      </tbody>\n    </table>\n\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/main-table/total-table/total-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TotalTableComponent = (function () {
    function TotalTableComponent() {
    }
    TotalTableComponent.prototype.totals = function (item) {
        var totalSum = 0;
        if (this.deviceList != undefined) {
            this.deviceList.forEach(function (device) {
                totalSum += Number(device.deviceInput[item]);
            });
        }
        return totalSum;
    };
    TotalTableComponent.prototype.ngOnInit = function () {
    };
    return TotalTableComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TotalTableComponent.prototype, "deviceList", void 0);
TotalTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-total-table',
        template: __webpack_require__("../../../../../src/app/main-table/total-table/total-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main-table/total-table/total-table.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TotalTableComponent);

//# sourceMappingURL=total-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/total-cost/total-cost.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/total-cost/total-cost.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  total-cost: <span>{{ cost }}</span>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/total-cost/total-cost.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TotalCostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TotalCostComponent = (function () {
    function TotalCostComponent() {
        this.cost = 100;
    }
    TotalCostComponent.prototype.ngOnInit = function () {
    };
    return TotalCostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TotalCostComponent.prototype, "deviceList", void 0);
TotalCostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-total-cost',
        template: __webpack_require__("../../../../../src/app/total-cost/total-cost.component.html"),
        styles: [__webpack_require__("../../../../../src/app/total-cost/total-cost.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TotalCostComponent);

//# sourceMappingURL=total-cost.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map