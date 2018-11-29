import { Component, OnInit } from '@angular/core';
import { CatagoriesService } from './../services/catagories.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title;
  isLoader = true;
  catagories: any[];
  constructor(private service: CatagoriesService) {
  }

  ngOnInit() {
    this.title = 'home';
    this.service.getCataories(100, 1).subscribe( response => {
    this.catagories = response.body.dataitem;

    this.isLoader = false;
    console.log(this.catagories);

  });
}
}
