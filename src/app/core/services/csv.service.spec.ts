import { TestBed, inject } from '@angular/core/testing';

import { CSVService } from 'src/app/core/services/csv.service';

import { MT940 } from 'src/app/models/mt940.model';

import { ValidMT940CSVStub, InvalidMT940CSVStub } from '../.././../../mock-server/stubs/mt940.stubs';

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

  describe('Create MT940 from CSV', () => {
    it('return MT940 Object in case of valid CSV format', inject([CSVService], (service: CSVService) => {
      const result: Array<MT940> = service.getMT940(ValidMT940CSVStub);
      const response: Array<MT940> = [
        {
          transactionReference: 134902,
          accountNumber: 'NL90ABNA0585647886',
          description: 'Clothes for Willem de Vries',
          startBalance: 22.2,
          mutation: 33.21,
          endBalance: 55.4
        }];
      expect(result).toEqual(response);
    }));

    it('should throw an error in case of invalid CSV format', inject([CSVService], (service: CSVService) => {
      expect(() => {
        service.getMT940(InvalidMT940CSVStub);
      }).toThrowError();
    }));
  });
});
