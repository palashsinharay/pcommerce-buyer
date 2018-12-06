import { Component, OnInit } from '@angular/core';
import { EventEmiterService } from '../services/event-emiter.service';

@Component({
  selector: 'prod-image-gal',
  templateUrl: './prod-image-gal.component.html',
  styleUrls: ['./prod-image-gal.component.css']
})
export class ProdImageGalComponent implements OnInit {
  images;
  constructor(private _eventEmiter: EventEmiterService) { }

  ngOnInit() {
    this._eventEmiter.dataStr.subscribe(data => {
      console.log(data);
      this.images = data;
   });
  }


}
