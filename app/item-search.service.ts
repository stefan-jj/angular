import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Item } from './item';

@Injectable()
export class ItemSearchService {
  constructor(private http: Http) { }

  search(term: string): Observable<Item[]> {
    return this.http
      .get(`app/items/?name=${term}`)
      .map((r: Response) => r.json().data as Item[]);
  }
}