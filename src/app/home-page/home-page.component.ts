import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  // let pageHeading:string="Home";
  title;
  constructor() {
    // this.pageHeading = 'Home';
  }

  ngOnInit() {
    this.title = 'home';
  }

}
