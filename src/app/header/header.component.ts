import { Component, Input, OnInit } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: 'blog-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  public sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
  }

  public toggleSidenav(): void {
    this.sidenav.toggle();
  }

}
