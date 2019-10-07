import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <a routerLinkActive="active" 
       routerLink="/componentA"> Subscribers Route </a> |

    <a routerLinkActive="active" 
       routerLink="/componentB">Home</a>
    <router-outlet></router-outlet>
  </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

}