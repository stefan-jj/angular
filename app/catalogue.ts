//Component to dispaly all items

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';
import { CategoryItemPipe }  from './category-pipe';

@Component({
    moduleId: module.id,
    selector: 'my-catalog',
    templateUrl: './catalogue.html',
    styleUrls: ['./catalogue.css']
})

export class CatalogueComponent implements OnInit {
    items: Item[];
    selectedItem: Item;
    
    constructor(
    private router: Router,
    private itemService: ItemService) { }
    
    getItems(): void {
      this.itemService.getItems().then(items => this.items = items);
    }
    
    ngOnInit(): void {
      this.getItems();
    }
    
    gotoDetail(item: Item): void {
        this.router.navigate(['/detail', item.id]);
    }
    
//    onSelect(item: Item): void {
//      this.selectedItem = item;
//    }
    

//    isSelected(item: Item) { return item.id === this.selectedId; }
//
//    onSelect(item: Item) {
//        this.router.navigate(['/detail', item.id]);
//    }
    
    
//Add product
    add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.itemService.addItem(name)
        .then(item => {
          this.items.push(item);
          this.selectedItem = null;
        });
      }

//Delete product
      delete(item: Item): void {
          this.itemService
              .removeItem(item.id)
              .then(() => {
                this.items = this.items.filter(h => h !== item);
                if (this.selectedItem === item) { this.selectedItem = null; }
              });
      }
    
    
  }

