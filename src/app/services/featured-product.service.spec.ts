import { TestBed, inject } from '@angular/core/testing';

import { FeaturedProductService } from './featured-product.service';

describe('FeaturedProductService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeaturedProductService]
    });
  });

  it('should be created', inject([FeaturedProductService], (service: FeaturedProductService) => {
    expect(service).toBeTruthy();
  }));
});
