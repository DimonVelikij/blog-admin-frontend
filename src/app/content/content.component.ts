import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatSidenav } from "@angular/material/sidenav";

@Component({
  selector: 'blog-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @Output()
  public setSideNavControl: EventEmitter<MatSidenav> = new EventEmitter();

  @ViewChild('sidenav', {static: true})
  public sidenav: MatSidenav;

  constructor() { }

  ngOnInit() {
    this.setSideNavControl.emit(this.sidenav);
  }

}
