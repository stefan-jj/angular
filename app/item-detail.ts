//Display all details for a specific item

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  moduleId: module.id,    
  selector: 'my-item-detail',
  templateUrl: './item-detailTem.html',
  styleUrls: ['./item-detailStyle.css']
})

export class ItemDetailComponent implements OnInit {
  item: Item;
    
  constructor(      
      private itemService: ItemService,
      private route: ActivatedRoute,
      private location: Location
  ) {}
    
  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.itemService.getItem(id)
      .then(item => this.item = item);
  });
  }

  goBack(): void {
    this.location.back();
  }
    
  save(): void {
    this.itemService.update(this.item)
    .then(() => this.goBack());
  }
    
  

}