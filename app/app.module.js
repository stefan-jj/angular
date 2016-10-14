"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
// Imports for loading & configuring the in-memory web api
var in_memory_web_api_module_1 = require('angular-in-memory-web-api/in-memory-web-api.module');
var in_memory_data_service_1 = require('./in-memory-data.service');
var app_component_1 = require('./app.component');
var catalogue_1 = require('./catalogue');
var mainPage_1 = require('./mainPage');
var item_service_1 = require('./item.service');
var item_detail_1 = require('./item-detail');
var category_pipe_1 = require('./category-pipe');
//import { ItemSearchComponent }  from './item-search.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                in_memory_web_api_module_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                router_1.RouterModule.forRoot([
                    {
                        path: 'catalog',
                        component: catalogue_1.CatalogueComponent
                    },
                    {
                        path: '',
                        redirectTo: 'home',
                        pathMatch: 'full'
                    },
                    {
                        path: 'home',
                        component: mainPage_1.MainPageComponent
                    },
                    {
                        path: 'detail',
                        redirectTo: 'detail/:id',
                        pathMatch: 'full'
                    },
                    {
                        path: 'detail/:id',
                        component: item_detail_1.ItemDetailComponent
                    },
                ])
            ],
            declarations: [app_component_1.AppComponent, catalogue_1.CatalogueComponent, mainPage_1.MainPageComponent, item_detail_1.ItemDetailComponent, category_pipe_1.CategoryItemPipe],
            providers: [
                item_service_1.ItemService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map