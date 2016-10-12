import { Component } from '@angular/core';
import { Person } from './person';

const PERSONS: Person[] = [
  { id: 1, name: 'John', fact: 'has webbed feet' },
  { id: 2, name: 'Jeff', fact: 'is a Jedi master' },
  { id: 3, name: 'Eric', fact: 'is 8 foot tall' },
  { id: 4, name: 'Stan', fact: 'is a billionnaire' },
  { id: 5, name: 'Kevin', fact: 'is a cult leader' },
  { id: 6, name: 'Steve', fact: 'is a professional athlete' },
  { id: 7, name: 'Jenny', fact: 'owns a restaurant' },
  { id: 8, name: 'Stacey', fact: 'is a super hero' },
  { id: 9, name: 'Andy', fact: 'has a robotic arm' },
  { id: 10, name: 'Ben', fact: 'is a shady warehouse worker' }
];

@Component({
  selector: 'my-app',
  templateUrl: 'app/listTemplate.html',
  styleUrls: ['app/listStyle.css']
})

export class AppComponent {
  title = 'List of People';
  persons = PERSONS;
  selectedPerson: Person;
    
  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
}