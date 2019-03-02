import {Component} from '@angular/core'

@Component({
  selector: 'angular-2-component',
  template: '<div class="angular-2-component">{{name}}</div>',
})
export class AppComponent {
  name:string;
  
  constructor() {
    this.name = 'This is an Angular 2.x component'
  }
}
