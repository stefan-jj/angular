import { Pipe, PipeTransform } from '@angular/core';

//import { Category } from './in-memory-data.service';
import { Item }  from  './item';

@Pipe({ name: 'categoryItem' })

export class CategoryItemPipe implements PipeTransform {
    transform(value, args) {
          let [categ] = args;
            return value.filter(item=> {
                return item.category >= +categ;
            });
  }
}
