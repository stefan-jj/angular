import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'my-person-detail',
  template: `
    <div *ngIf="person">
      <h2>{{person.name}} details!</h2>
      <div><label>id: </label>{{person.id}}</div>
      <div>
        <label>name: </label>
        {{person.name}}
      </div>
    </div>
  `
})
export class PersonDetailComponent {
  @Input()
  perosn: Person;
}
