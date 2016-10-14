//Exported products array

import { InMemoryDbService } from 'angular-in-memory-web-api';

export interface Category { category: string; }

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let items = [
        { id: 1, name: 'Lamp Gnome', price: 60, image: "./images/gnome3.png", category: "Gnome" },
        { id: 2, name: 'Mini Gnome', price: 30, image: "./images/gnome.png", category: "Gnome" },
        { id: 3, name: 'Cookie Gnome', price: 40, image: "./images/gnome4.png", category: "Gnome" },
        { id: 4, name: 'Whistling Gnome', price: 70, image: "./images/gnome2.png", category: "Gnome" },
        { id: 5, name: 'Wise Gnome', price: 100, image: "./images/gnome6.png", category: "Gnome" },
        { id: 6, name: 'Pretentious Gnome', price: 200, image: "./images/gnome55.png", category: "Gnome" },
        { id: 7, name: 'Mushroom Accessory', price: 20, image: "./images/accessory1.jpg", category: "Accessory" },
        { id: 8, name: 'Well Accessory', price: 10, image: "./images/accessory2.jpg", category: "Accessory" },
        { id: 9, name: 'Spy Accessory', price: 30, image: "./images/accessory3.jpg", category: "Accessory" }
    ];
      
    return {items};
  }
}
