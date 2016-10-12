import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'my-person-detail',
  templateUrl: 'app/template2.html' 
    
})
export class PersonDetailComponent {
  @Input()
  perosn: Person;
//  selectedPerson: Person;
}
