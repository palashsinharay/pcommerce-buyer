import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-heading',
  templateUrl: './page-heading.component.html',
  styleUrls: ['./page-heading.component.css']
})
export class PageHeadingComponent implements OnInit {
  title = 'dfsdfsdf';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.title = this.route.snapshot.queryParamMap.get('heading');
    console.log(this.route.snapshot.queryParamMap.get('heading'));
  }

}
