import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'notfound-page',
  templateUrl: './notfound-page.component.html',
  styleUrls: ['./notfound-page.component.css']
})
export class NotfoundPageComponent implements OnInit {
  public title: string;
  constructor() { }

  ngOnInit() {
  this.title = 'page not found';
  }

}
