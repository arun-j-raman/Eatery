/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EateryService } from './eatery.service';

describe('Service: Eatery', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EateryService]
    });
  });

  it('should ...', inject([EateryService], (service: EateryService) => {
    expect(service).toBeTruthy();
  }));
});
