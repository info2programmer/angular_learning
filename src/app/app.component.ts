import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  visible=true;
  toogleDiv(){
    this.visible=!this.visible;
  }
  myFavLang={
    'frontEnd' : ['html','css','javascript'],
    'backEnd' : ['php','python','ruby','nodejs']
  }
}
