import { TestBed, inject } from '@angular/core/testing';

import { ValidationService } from 'src/app/core/services/validation.service';

describe('FileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ValidationService],
    });
  });

  it('should be created', inject([ValidationService], (service: ValidationService) => {
    expect(service).toBeTruthy();
  }));
});
