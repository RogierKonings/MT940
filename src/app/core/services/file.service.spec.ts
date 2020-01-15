import { TestBed, inject } from '@angular/core/testing';

import { FileService } from 'src/app/core/services/file.service';

describe('FileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [FileService],
    });
  });

  it('should be created', inject([FileService], (service: FileService) => {
    expect(service).toBeTruthy();
  }));
});
