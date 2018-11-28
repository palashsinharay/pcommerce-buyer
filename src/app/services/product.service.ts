import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends DataService {
  items = 10;
  page = 1;
  category_id = 7;

  constructor(http: Http) {
    super('http://142.93.57.132:8002/api/v1/categories',http);
  }

  getProducts(category_id?: number, items?: number, page?: number) {
    if (category_id != null) {
      this.category_id = category_id;
    }
    return this.getAll(this.category_id + '/products' + '/' + this.items + '/' + this.page);
  }
}
