import { Component } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public sidenav: MatSidenav;

  public setSideNav(sidenav: MatSidenav): void {
    Promise.resolve().then(() => this.sidenav = sidenav);
  }
}
