import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cartlist',
  templateUrl: './cartlist.component.html',
  styleUrls: ['./cartlist.component.css']
})
export class CartlistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.tableImg = '../../src/assets/images/product1.jpg';
    this.prodDetails = 'FUR COAT WITH VERY BUT VERY VERY LONG NAME';
    this.unitPrice = '$123.00';
    this.discount = '$0.00';
    this.totPrice = '$123.00';
  }

}
