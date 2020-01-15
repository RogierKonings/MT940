import { TestBed, inject } from '@angular/core/testing';

import { CSVService } from 'src/app/core/services/csv.service';

describe('CSVService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [CSVService],
    });
  });

  it('should be created', inject([CSVService], (service: CSVService) => {
    expect(service).toBeTruthy();
  }));
});
