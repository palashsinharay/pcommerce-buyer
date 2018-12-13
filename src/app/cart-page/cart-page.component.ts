import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  title;
  cartCount;
  constructor() { }

  ngOnInit() {
    this.title = 'Shopping Cart';
    this.cartCount = '9';
  }

}
