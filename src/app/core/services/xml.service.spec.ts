import { TestBed, inject } from '@angular/core/testing';

import { XMLService } from 'src/app/core/services/xml.service';

describe('XMLService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [XMLService],
    });
  });

  it('should be created', inject([XMLService], (service: XMLService) => {
    expect(service).toBeTruthy();
  }));
});
