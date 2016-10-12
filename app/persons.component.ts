import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from './person';
import { PersonService } from './person.service';


@Component({
  moduleId: module.id,
  selector: 'my-persons',
  templateUrl: './listTemplate.html',
  styleUrls: ['./listStyle.css']
})

export class PersonsComponent implements OnInit{
  persons: Person[];
  selectedPerson: Person;
    
  constructor(
    private router: Router,
    private personService: PersonService) { }
    
  getPersons(): void {
    this.personService.getPersons().then(persons => this.persons = persons);
  }
    
  ngOnInit(): void {
    this.getPersons();
//    this.persons.push( new persons(20,"Test","Test fact"););
  }
    
  onSelect(person: Person): void {
    this.selectedPerson = person;
  }
    
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedPerson.id]);
  }
    
  add(name: string): void {
      name = name.trim();
      if (!name) { return; }
      this.personService.addPerson(name)
        .then(person => {
          this.persons.push(person);
          this.selectedPerson = null;
        });
  }
    
    
  delete(person: Person): void {
      this.personService
          .removePerson(person.id)
          .then(() => {
            this.persons = this.persons.filter(h => h !== person);
            if (this.selectedPerson === person) { this.selectedPerson = null; }
          });
  }
    
    
}