//Component to dispaly all items
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
var router_1 = require('@angular/router');
var item_service_1 = require('./item.service');
var CatalogueComponent = (function () {
    function CatalogueComponent(router, itemService) {
        this.router = router;
        this.itemService = itemService;
    }
    CatalogueComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems().then(function (items) { return _this.items = items; });
    };
    CatalogueComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    CatalogueComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    //    Navigate to product page
    CatalogueComponent.prototype.isSelected = function (item) { return item.id === this.selectedId; };
    CatalogueComponent.prototype.onSelect = function (item) {
        this.router.navigate(['/detail', item.id]);
    };
    //    Add item
    CatalogueComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.itemService.addItem(name)
            .then(function (item) {
            _this.items.push(item);
            _this.selectedItem = null;
        });
    };
    //    Delete item
    CatalogueComponent.prototype.delete = function (item) {
        var _this = this;
        this.itemService
            .removeItem(item.id)
            .then(function () {
            _this.items = _this.items.filter(function (h) { return h !== item; });
            if (_this.selectedItem === item) {
                _this.selectedItem = null;
            }
        });
    };
    CatalogueComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-catalog',
            templateUrl: './catalogue.html',
            styleUrls: ['./catalogue.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, item_service_1.ItemService])
    ], CatalogueComponent);
    return CatalogueComponent;
}());
exports.CatalogueComponent = CatalogueComponent;
//# sourceMappingURL=catalogue.js.map