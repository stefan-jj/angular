import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let items = [
      { id: 1, name: 'Lamp Gnome', price: 60, image: "./images/gnome3.png" },
        { id: 2, name: 'Mini Gnome', price: 30, image: "./images/gnome.png" },
        { id: 3, name: 'Cookie Gnome', price: 40, image: "./images/gnome4.png" },
        { id: 4, name: 'Whistling Gnome', price: 70, image: "./images/gnome2.png" },
        { id: 5, name: 'Wise Gnome', price: 100, image: "./images/gnome6.png" },
        { id: 6, name: 'Pretentious Gnome', price: 200, image: "./images/gnome55.png" }
    ];
      
    return {items};
  }
}
