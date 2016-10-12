import { Component, OnInit } from '@angular/core';

import { Person } from './person';
import { PersonService } from './person.service';


@Component({
  selector: 'my-app',
  templateUrl: 'app/listTemplate.html',
  styleUrls: ['app/listStyle.css'],
  providers: [PersonService]
})

export class AppComponent implements OnInit{
  title = 'List of People';
  persons: Person[];
  selectedPerson: Person;
    
  constructor(private personService: PersonService) { }
    
  getPersons(): void {
    this.personService.getPersons().then(persons => this.persons = persons);
  }
    
  ngOnInit(): void {
    this.getPersons();
  }
    
  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
}