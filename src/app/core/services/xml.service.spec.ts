import { TestBed, inject } from '@angular/core/testing';

import { XMLService } from 'src/app/core/services/xml.service';

import { MT940 } from 'src/app/models/mt940.model';

import { ValidMT940XMLStub, InvalidMT940XMLStub } from '../.././../../mock-server/stubs/mt940.stubs';

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

  describe('Create MT940 from XML', () => {
    it('return MT940 Object in case of valid XML format', inject([XMLService], (service: XMLService) => {
      const result: Array<MT940> = service.getMT940(ValidMT940XMLStub);
      const response: Array<MT940> = [
        {
          transactionReference: 164702,
          accountNumber: 'NL46ABNA0625805417',
          description: 'Flowers for Rik Dekker',
          startBalance: 81.89,
          mutation: 5.99,
          endBalance: 87.88
        },
        {
          transactionReference: 189177,
          accountNumber: 'NL27SNSB0917829871',
          description: 'Subscription for Erik Dekker',
          startBalance: 5429,
          mutation: -939,
          endBalance: 6368
        }];
      expect(result).toEqual(response);
    }));

    it('should return empty array in case of invalid CSV format', inject([XMLService], (service: XMLService) => {
      const result: Array<MT940> = service.getMT940(InvalidMT940XMLStub);
      expect(result).toEqual([]);
    }));
  });
});
