import { Component } from '@angular/core';
export class Person {
  id: number;
  name: string;
  fact: string;
}
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
  template: `
    <h1>{{title}}</h1>
    <h2>Click a person to see their fact...</h2>
    <ul class="people">
      <li *ngFor="let person of people"
        [class.selected]="person === selectedPerson"
        (click)="onSelect(person)">
        <span class="badge">{{person.id}}</span> {{person.name}}
      </li>
    </ul>
    <div *ngIf="selectedPerson">
      <h2>{{selectedPerson.name}}'s details!</h2>
      <div><label><b>ID:</b> </label>{{selectedPerson.id}}</div>
      <div>
        <label><b>Name:</b> </label>
        {{selectedPerson.name}}
      </div>
      <div>
        <label><b>Fact:</b> </label>
        {{selectedPerson.fact}}
      </div>
    </div>
  `,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .people {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .people li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .people li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .people li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .people .text {
      position: relative;
      top: -3px;
    }
    .people .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})
export class AppComponent {
  title = 'List of people';
  people = PEOPLE;
  selectedPerson: Person;
  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
}
