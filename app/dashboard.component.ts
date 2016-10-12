import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'dashboardTemplate.html',
  styleUrls: [ 'dashboardStyle.css' ]
})

export class DashboardComponent implements OnInit {
    persons: Person[] = [];

    constructor(
      private router: Router,
      private personService: PersonService) { }

    ngOnInit(): void {
      this.personService.getPersons()
      .then(persons => this.persons = persons.slice(1, 5));
    }

    gotoDetail(person: Person): void { 
        let link = ['/detail', person.id];
        this.router.navigate(link);
    }
}
