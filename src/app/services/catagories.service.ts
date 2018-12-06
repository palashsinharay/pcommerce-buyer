import { Http, Headers  } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CatagoriesService extends DataService {
  items = 10;
  page = 1;

  constructor(http: Http ) {
    super('http://142.93.57.132:8002/api/v1/categories', http);
  }

  getCataories(items?: number, page?: number) {

    if (items != null) {
      this.items = items;
    }
    if (page != null) {
      this.page = page;
    }
    return this.getAll(this.items + '/' + this.page);

  }
}
