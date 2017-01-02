/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ReadingsService } from './app.readings.service';

describe('ReadingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReadingsService]
    });
  });

  it('should ...', inject([ReadingsService], (service: ReadingsService) => {
    expect(service).toBeTruthy();
  }));
});
