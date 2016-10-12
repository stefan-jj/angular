import { Injectable } from '@angular/core';

import { Person } from './person';
import { PERSONS } from './mock-persons';

@Injectable()
export class PersonService {
    getPersons(): Promise<Person[]> {
        return Promise.resolve(PERSONS);
    } 
    
    getPerson(id: number): Promise<Person> {
        return this.getPersons()
                 .then(persons => persons.find(person => person.id === id));
    }
    
}
