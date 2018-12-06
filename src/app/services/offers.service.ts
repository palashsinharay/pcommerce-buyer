import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http, Headers  } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class OffersService extends DataService {
  items = 1;
  page = 1;
  constructor(http: Http ) {
    super('http://142.93.57.132:8002/api/v1/categories', http);
  }

  getOffers(category_id: number,  product_id:  number , items?: number, page?: number) {
    return this.getAll(category_id + '/products/' + product_id + '/offers/' + this.items + '/' + this.page);
  }
}
