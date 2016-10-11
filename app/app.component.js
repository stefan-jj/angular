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
var PEOPLE = [
    { id: 1, name: 'John', fact: 'Has webbed feet' },
    { id: 2, name: 'Jeff', fact: 'Is a Jedi master' },
    { id: 3, name: 'Eric', fact: 'Is 8 foot tall' },
    { id: 4, name: 'Stan', fact: 'Is a billionnaire' },
    { id: 5, name: 'Kevin', fact: 'Is a cult leader' },
    { id: 6, name: 'Steve', fact: 'Professional athlete' },
    { id: 7, name: 'Jenny', fact: 'Owns a restaurant' },
    { id: 8, name: 'Stacey', fact: 'Secret super hero' },
    { id: 9, name: 'Andy', fact: 'Has a robotic arm' },
    { id: 10, name: 'Ben', fact: 'Shady warehouse worker' },
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'List of people';
        this.people = PEOPLE;
    }
    AppComponent.prototype.onSelect = function (person) {
        this.selectedPerson = person;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/template.html',
            styleUrls: ['app/style.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map