import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }   from './app.component';
import { CatalogueComponent }      from './catalogue';
import { MainPageComponent }  from './mainPage';
import { ItemService }           from './item.service';
import { ItemDetailComponent }   from './item-detail';
import { CategoryItemPipe }    from './category-pipe';
//import { ItemSearchComponent }  from './item-search.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      RouterModule.forRoot([
        
        {
          path: 'catalog',
          component: CatalogueComponent
        },
          
        {
          path: '',
          redirectTo: 'home',
          pathMatch: 'full'
        },
          
        {
          path: 'home',
          component: MainPageComponent
        },
        {
          path: 'detail',
          redirectTo: 'detail/:id',
          pathMatch: 'full'
        },
        {
          path: 'detail/:id',
          component: ItemDetailComponent  
        },
//        {
//          path: 'items',
//          component: ItemsComponent
//        }
        ])
    ],
  declarations: [ AppComponent, CatalogueComponent, MainPageComponent, ItemDetailComponent, CategoryItemPipe ],
    
  providers: [
    ItemService  
  ],
    
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
