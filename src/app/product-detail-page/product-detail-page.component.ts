import { EventEmiterService } from './../services/event-emiter.service';
import { ProductdetailsService } from './../services/productdetails.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OffersService } from '../services/offers.service';

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
  offer_details: any[];
  product_other_details: any[];
  allVariants: any[];
  isLoader = true;
  constructor(private route: ActivatedRoute,
    private service: ProductdetailsService,
    private offerService: OffersService,
    private _eventEmiter: EventEmiterService
    ) { }

  ngOnInit() {
    this.title = 'Product detail';
    this.route.paramMap.subscribe(params => {
      this.catagory_id = +params.get('cat_id');
      this.product_id = +params.get('p_id');
      this.isLoader = true;
      this.service.getProductDetails(this.catagory_id, this.product_id)
      .subscribe( response => {
          this.product_details = response.body;
          this.product_other_details = this.product_details['product_other_details'];
          this._eventEmiter.sendMessage(this.product_details['image']);
          const variantObj = this.product_details['variant'];
          this.allVariants = Object.keys(variantObj).map((key) => {
            return { label: key , value: variantObj[key] };
          });
          this.offerService.getOffers(this.product_details['cat_id'], this.product_details['id']).subscribe(
            response => {
            this.offer_details = response.body.dataitem;
            console.log(this.offer_details);
            }
          );

          this.isLoader = false;
          console.log(this.product_details);
          // console.log(this.allVariants);
        }
      );
    });
  }

}
