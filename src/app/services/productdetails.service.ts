import { DataService } from './data.service';
import { Http} from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductdetailsService extends DataService {
  category_id: number;
  product_id: number;
  constructor(http: Http) {
    super('http://142.93.57.132:8002/api/v1/categories', http);
  }

  getProductDetails(category_id: number, product_id: number) {
    if (category_id != null) {
      this.category_id = category_id;
    }
    if (product_id != null) {
      this.product_id = product_id;
    }
    return this.getAll( this.category_id + '/products' + '/' + this.product_id );
  }
}
