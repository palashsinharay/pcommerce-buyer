import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  private cat_id = 7;
  isLoader = true;
  products: any[];
  constructor(private service: ProductService, private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.service.getProducts(this.cat_id)
      .subscribe( response => {
          this.products = response.body.dataitem;
          this.isLoader = false;
          // console.log(this.products);
        }
      );


    this.route.paramMap.subscribe(params => {
      this.cat_id = +params.get('cat_id');
      this.isLoader = true;
      this.service.getProducts(this.cat_id)
      .subscribe( response => {
          this.products = response.body.dataitem;
          this.isLoader = false;
          // console.log(this.products);
        }
      );
    });
  }

}
