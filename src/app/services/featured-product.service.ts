import { Http, Headers  } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class FeaturedProductService extends DataService  {
  limit = 20;
  constructor(http: Http ) {
    super('http://142.93.57.132:8002/api/v1/products/featured', http);
  }

  getFeaturedProduct(limit?: number) {

    if (limit != null) {
      this.limit = limit;
    }

    return this.getAll(this.limit);

  }
}
