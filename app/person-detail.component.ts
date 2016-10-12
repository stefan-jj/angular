import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'my-person-detail',
    templateUrl: 'app/detailsTemplate.html',
    styleUrls: ['app/detailsStyle.css']
})

export class PersonDetailComponent {
  @Input()
  person: Person;
}