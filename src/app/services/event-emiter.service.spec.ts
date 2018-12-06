import { TestBed, inject } from '@angular/core/testing';

import { EventEmiterService } from './event-emiter.service';

describe('EventEmiterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventEmiterService]
    });
  });

  it('should be created', inject([EventEmiterService], (service: EventEmiterService) => {
    expect(service).toBeTruthy();
  }));
});
