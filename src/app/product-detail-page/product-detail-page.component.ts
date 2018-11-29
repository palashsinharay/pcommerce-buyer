import { ProductdetailsService } from './../services/productdetails.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.css']
})
export class ProductDetailPageComponent implements OnInit {
  title;
  catagory_id;
  product_id;
  product_details: any[];
  product_other_details: any[];
  isLoader = true;
  constructor(private route: ActivatedRoute, private service: ProductdetailsService) { }

  ngOnInit() {
    this.title = 'Product detail';
    this.route.paramMap.subscribe(params => {
      this.catagory_id = +params.get('cat_id');
      this.product_id = +params.get('p_id');
      this.isLoader = true;
      this.service.getProductDetails(this.catagory_id, this.product_id)
      .subscribe( response => {
          this.product_details = response.body;
          // this.product_other_details = JSON.parse(this.product_details.product_other_details);
          this.isLoader = false;
          console.log(this.product_details);
        }
      );
    });
  }

}
