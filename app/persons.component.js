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
var person_service_1 = require('./person.service');
var PersonsComponent = (function () {
    function PersonsComponent(router, personService) {
        this.router = router;
        this.personService = personService;
    }
    PersonsComponent.prototype.getPersons = function () {
        var _this = this;
        this.personService.getPersons().then(function (persons) { return _this.persons = persons; });
    };
    PersonsComponent.prototype.ngOnInit = function () {
        this.getPersons();
        //    this.persons.push( new persons(20,"Test","Test fact"););
    };
    PersonsComponent.prototype.onSelect = function (person) {
        this.selectedPerson = person;
    };
    PersonsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPerson.id]);
    };
    PersonsComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.personService.addPerson(name)
            .then(function (person) {
            _this.persons.push(person);
            _this.selectedPerson = null;
        });
    };
    PersonsComponent.prototype.delete = function (person) {
        var _this = this;
        this.personService
            .removePerson(person.id)
            .then(function () {
            _this.persons = _this.persons.filter(function (h) { return h !== person; });
            if (_this.selectedPerson === person) {
                _this.selectedPerson = null;
            }
        });
    };
    PersonsComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-persons',
            templateUrl: './listTemplate.html',
            styleUrls: ['./listStyle.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, person_service_1.PersonService])
    ], PersonsComponent);
    return PersonsComponent;
}());
exports.PersonsComponent = PersonsComponent;
//# sourceMappingURL=persons.component.js.map