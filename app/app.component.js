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
var Person = (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
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
            template: "\n    <h1>{{title}}</h1>\n    <h2>Click a person to see their fact...</h2>\n    <ul class=\"people\">\n      <li *ngFor=\"let person of people\"\n        [class.selected]=\"person === selectedPerson\"\n        (click)=\"onSelect(person)\">\n        <span class=\"badge\">{{person.id}}</span> {{person.name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedPerson\">\n      <h2>{{selectedPerson.name}}'s details!</h2>\n      <div><label><b>ID:</b> </label>{{selectedPerson.id}}</div>\n      <div>\n        <label><b>Name:</b> </label>\n        {{selectedPerson.name}}\n      </div>\n      <div>\n        <label><b>Fact:</b> </label>\n        {{selectedPerson.fact}}\n      </div>\n    </div>\n  ",
            styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .people {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .people li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .people li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .people li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .people .text {\n      position: relative;\n      top: -3px;\n    }\n    .people .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map