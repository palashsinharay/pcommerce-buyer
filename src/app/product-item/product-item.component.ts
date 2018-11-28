import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  isLoader = true;
  products: any[];
  constructor(private service: ProductService) { }

  ngOnInit() {
      this.service.getProducts()
      .subscribe( response => {
          this.products = response.body.dataitem;
          this.isLoader = false;
          // console.log(this.products);
        }
      );
  }
}
