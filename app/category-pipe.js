//Never got my filter working
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
var CategoryItemPipe = (function () {
    function CategoryItemPipe() {
    }
    CategoryItemPipe.prototype.transform = function (value) {
        return value.filter(function (item) { return item.name.startsWith('w'); });
    };
    CategoryItemPipe = __decorate([
        core_1.Pipe({ name: 'categoryItem' }), 
        __metadata('design:paramtypes', [])
    ], CategoryItemPipe);
    return CategoryItemPipe;
}());
exports.CategoryItemPipe = CategoryItemPipe;
//import {Pipe, PipeTransform} from 'angular2/core';
//
//@Pipe({name: 'values'})
//export class ValuesPipe implements PipeTransform {
//    transform(value: any, args?: any[]): Object[] {
//        let keyArr: any[] = Object.keys(value),
//            dataArr = [],
//            keyName = args[0];
//
//        keyArr.forEach((key: any) => {
//            value[key][keyName] = key;
//            dataArr.push(value[key])
//        });
//
//        if(args[1]) {
//            dataArr.sort((a: Object, b: Object): number => {
//                return a[keyName] > b[keyName] ? 1 : -1;
//            });
//        }
//
//        return dataArr;
//    }
//} 
//# sourceMappingURL=category-pipe.js.map