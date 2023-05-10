import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaAngular2';

  constructor( private router: Router) {
  
  }

  navegarAHome() {
    this.router.navigate(['']);
  }

  navegarAAcercaDe() {
    this.router.navigate(['acercade']);
  }
}
