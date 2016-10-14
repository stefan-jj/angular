//Never got my filter working

import { Pipe, PipeTransform } from '@angular/core';

//import { Category } from './in-memory-data.service';
import { Item }  from  './item';

@Pipe({ name: 'categoryItem' })

export class CategoryItemPipe implements PipeTransform {
    transform(value) {
        return value.filter((item)=>item.name.startsWith('w'));
  }
}







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