import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: './appComponent.html', 
    styleUrls: ['./appComponent.css']
})

export class AppComponent{
    title = 'List of People';
}