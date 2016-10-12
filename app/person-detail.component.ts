import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'my-person-detail',
  template: `
    <div *ngIf="person">
      <h2>{{person.name}}'s details!</h2>
    <div><label><b>ID:</b> </label>{{person.id}}</div>
      <div>
        <label><b>Name:</b> </label>
        <input [(ngModel)]="person.name" placeholder="name"/>
      </div>
      <div>
        <label><b>Fact:</b> </label>
        {{person.fact}}
      </div>
    </div>
  `
})

export class PersonDetailComponent {
  @Input()
  person: Person;
}