import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Person } from './person';
import { PersonService } from './person.service';

@Component({
  moduleId: module.id,    
  selector: 'my-person-detail',
  templateUrl: './detailsTemplate.html',
  styleUrls: ['./detailsStyle.css']
})

export class PersonDetailComponent implements OnInit {
  person: Person;
    
  constructor(      
      private personService: PersonService,
      private route: ActivatedRoute,
      private location: Location
  ) {}
    
  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.personService.getPerson(id)
      .then(person => this.person = person);
  });
  }

  goBack(): void {
    this.location.back();
  }
    
  

}