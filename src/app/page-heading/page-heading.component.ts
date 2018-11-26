import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.css']
})
export class PageHeadingComponent implements OnInit {
  public title: string;
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
   this.title = 'Product';
  }

}
