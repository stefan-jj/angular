import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Item } from './item';
//import { PERSONS } from './mock-persons';

@Injectable()
export class ItemService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private itemsUrl = 'app/items';  // URL to web api

    constructor(private http: Http) { }

    getItems(): Promise<Item[]> {
        return this.http.get(this.itemsUrl)
                   .toPromise()
                   .then(response => response.json().data as Item[])
                   .catch(this.handleError);
    }
    
    
    
//    getPersons(): Promise<Person[]> {
//        return Promise.resolve(PERSONS);
//    } 
    
    getItem(id: number): Promise<Item> {
        return this.getItems()
                 .then(items => items.find(item => item.id === id));
    }
    
    update(item: Item): Promise<Item> {
      const url = `${this.itemsUrl}/${item.id}`;
      return this.http
        .put(url, JSON.stringify(item), {headers: this.headers})
        .toPromise()
        .then(() => item)
        .catch(this.handleError);
    }
    
    
    addItem(name: string): Promise<Item> {
      return this.http
        .post(this.itemsUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }
    
    
    removeItem(id: number): Promise<void> {
      const url = `${this.itemsUrl}/${id}`;
      return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
    }
    
    
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
    
}
