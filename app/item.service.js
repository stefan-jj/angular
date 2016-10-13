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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
//import { PERSONS } from './mock-persons';
var ItemService = (function () {
    function ItemService(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.itemsUrl = 'app/items'; // URL to web api
    }
    ItemService.prototype.getItems = function () {
        return this.http.get(this.itemsUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    //    getPersons(): Promise<Person[]> {
    //        return Promise.resolve(PERSONS);
    //    } 
    ItemService.prototype.getItem = function (id) {
        return this.getItems()
            .then(function (items) { return items.find(function (item) { return item.id === id; }); });
    };
    //    update(person: Person): Promise<Person> {
    //      const url = `${this.personsUrl}/${person.id}`;
    //      return this.http
    //        .put(url, JSON.stringify(person), {headers: this.headers})
    //        .toPromise()
    //        .then(() => person)
    //        .catch(this.handleError);
    //    }
    //    addPerson(name: string): Promise<Person> {
    //      return this.http
    //        .post(this.personsUrl, JSON.stringify({name: name}), {headers: this.headers})
    //        .toPromise()
    //        .then(res => res.json().data)
    //        .catch(this.handleError);
    //    }
    //    
    //    
    //    removePerson(id: number): Promise<void> {
    //      const url = `${this.personsUrl}/${id}`;
    //      return this.http.delete(url, {headers: this.headers})
    //        .toPromise()
    //        .then(() => null)
    //        .catch(this.handleError);
    //    }
    ItemService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ItemService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=item.service.js.map