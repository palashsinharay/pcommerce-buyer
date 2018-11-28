import { CatagoriesService } from './../services/catagories.service';
import { Component, OnInit } from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'catagory-sidebar',
  templateUrl: './catagory-sidebar.component.html',
  styleUrls: ['./catagory-sidebar.component.css']
})
export class CatagorySidebarComponent implements OnInit {
  isLoader = true;
  catagories: any[];
  constructor(private service: CatagoriesService) {
  }

  ngOnInit() {
    this.service.getCataories().subscribe( response => {
    this.catagories = response.json().body.dataitem;
    this.isLoader = false;
    // console.log(this.catagories);
  });
  }

}
