import { Component } from '@angular/core';
import { Person } from './person';

const PEOPLE: Person[] = [
  { id: 1, name: 'John', fact: 'Has webbed feet' },
  { id: 2, name: 'Jeff', fact: 'Is a Jedi master' },
  { id: 3, name: 'Eric', fact: 'Is 8 foot tall' },
  { id: 4, name: 'Stan', fact: 'Is a billionnaire' },
  { id: 5, name: 'Kevin', fact: 'Is a cult leader' },
  { id: 6, name: 'Steve', fact: 'Professional athlete' },
  { id: 7, name: 'Jenny', fact: 'Owns a restaurant' },
  { id: 8, name: 'Stacey', fact: 'Secret super hero' },
  { id: 9, name: 'Andy', fact: 'Has a robotic arm' },
  { id: 10, name: 'Ben', fact: 'Shady warehouse worker' },
];
@Component({
  selector: 'my-app',
  templateUrl: 'app/template.html',
  styleUrls: ['app/style.css']
})
export class AppComponent {
  title = 'List of people';
  people = PEOPLE;
  selectedPerson: Person;
  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
}