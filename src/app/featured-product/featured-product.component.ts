import { FeaturedProductService } from './../services/featured-product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'featured-product',
  templateUrl: './featured-product.component.html',
  styleUrls: ['./featured-product.component.css']
})
export class FeaturedProductComponent implements OnInit {

  isLoader = true;
  products: any[];
  constructor(private service: FeaturedProductService) {
  }

  ngOnInit() {

    this.service.getFeaturedProduct(20).subscribe( response => {
    this.products = response.body.dataitem.product_list;

    this.isLoader = false;
    console.log(this.products);
  });
  }

}
