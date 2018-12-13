import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  orderTotal;
  shippingCost;
  tax;
  allTotal;
  constructor() { }

  ngOnInit() {
    this.orderTotal = '$446.00';
    this.shippingCost = '$10.00';
    this.tax = '$0.00';
    this.allTotal = '$456.00';
  }

}
