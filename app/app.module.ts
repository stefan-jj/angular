import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }            from './app.component';
import { PersonDetailComponent }   from './person-detail.component';
import { PersonsComponent }        from './persons.component';
import { PersonService }           from './person.service';
import { DashboardComponent }      from './dashboard.component';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id',
        component: PersonDetailComponent  
      },
      {
        path: 'persons',
        component: PersonsComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonDetailComponent,
    PersonsComponent
  ],
  providers: [
    PersonService  
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }