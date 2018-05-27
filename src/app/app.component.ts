import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  myFavLang = [
    {'name' : 'HTML' , 'type' : 'frontend'},
    {'name' : 'CSS' , 'type' : 'frontend'},
    {'name' : 'JS' , 'type' : 'frontend'},
    {'name' : 'PHP' , 'type' : 'backend'},
  ];
}
