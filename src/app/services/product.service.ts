import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url = 'http://142.93.57.132:8002/api/v1/categories';
  items = 10;
  page = 1;
  category_id = 7;
  // tslint:disable-next-line:max-line-length
  auth_token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI3MmU1OGQwZjczYjU4NWMxOGUwMzE3YzRhMWYxN2VlNTFiMTk2NTg2ZDE1ZmZhZjI0YzZhNGMzZDdkZTU3OTExYTI5ODhmMDYxOTE2MWE4In0.eyJhdWQiOiIxIiwianRpIjoiYjcyZTU4ZDBmNzNiNTg1YzE4ZTAzMTdjNGExZjE3ZWU1MWIxOTY1ODZkMTVmZmFmMjRjNmE0YzNkN2RlNTc5MTFhMjk4OGYwNjE5MTYxYTgiLCJpYXQiOjE1Mzg2NDQ4MzksIm5iZiI6MTUzODY0NDgzOSwiZXhwIjoxNTcwMTgwODM5LCJzdWIiOiIyIiwic2NvcGVzIjpbXX0.UN7gZhNB427x8yArxn4a6PEFEPVpMWhBf5FZB-4aL6BmBihBSfYvFHGg6Rphgh0VUaCgJDtLqBltBnFbUdVQ2sfAitP4n1ayU2bLHNnDFSbWfuonvcoiEPWupQp3H0TW8c0ZYpbFDr6qZc6H6x9jL9EC-id9j_QySV0ZnxYfMpdv9-CoVxC6gPGMEERi4Tdm0OTrT5XEiPGl_jLsuQtWw6nCzJfHTP10UhACJcbC2Jd2EnjS5__7wO_uOYtQfCl2OgjhM2UMBsBEBmkCiSZrw66eGoV-C6wdI4BGe9WPlyMttoaUREZSuEH0NyeoSWh6P4JMsNSsvRbwTsq45w4OAcmQLNttwkpVvLIZ-7FZlMXMSlX7ymgiSmEOU4MdmQLaD7zAlOrvCW77lq6SYWGWfDcK6AjHEDfRdyqkOXhs775K2RRn-RhWUIkyg6Iy4K2cXCIT8n6uZpMiQ9m_wCZ3wPpCFGxTbpvAllXMt3HkAYC7gSgIWssr2NPb-ZbX-fO6OrNp1ppyG_mCq21OgR1JY_zvU2GR5AGqLYan3EX385HHv-mVDDDpe-aFb_F3jbuBOfYqqIy_6BIY0UBFd09W_6ffoahaXwlP1WKp5LyciSTziZYOs0uvYVDzrdPEzq0uAaXdM3B9XzjYrrsYZwXsj7agv8RdQLyDVC-tsq9nbvI';
  headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': this.auth_token
  });

  constructor(private http: Http ) {

  }

  getProducts(category_id?: number, items?: number, page?: number) {
    if (category_id != null) {
      this.category_id = category_id;
    }
    return this.http.get(this.url + '/' + this.category_id + '/products' + '/' + this.items + '/' + this.page, { headers: this.headers });
  }
}
