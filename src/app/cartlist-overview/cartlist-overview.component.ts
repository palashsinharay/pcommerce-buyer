import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cartlist-overview',
  templateUrl: './cartlist-overview.component.html',
  styleUrls: ['./cartlist-overview.component.css']
})
export class CartlistOverviewComponent implements OnInit {
  tableImg;
  prodDetails;
  prodCount;
  unitPrice;
  discount;
  totPrice;
  constructor() { }

  ngOnInit() {
    this.tableImg = '../../src/assets/images/product1.jpg';
    this.prodDetails = 'FUR COAT WITH VERY BUT VERY VERY LONG NAME';
    this.prodCount = '2';
    this.unitPrice = '$123.00';
    this.discount = '$0.00';
    this.totPrice = '$123.00';
  }

}
