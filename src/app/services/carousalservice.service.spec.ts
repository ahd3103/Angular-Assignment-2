import { TestBed } from '@angular/core/testing';

import { CarousalserviceService } from './carousalservice.service';

describe('CarousalserviceService', () => {
  let service: CarousalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarousalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
