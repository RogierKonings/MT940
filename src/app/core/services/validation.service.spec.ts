
import { TestBed, inject } from '@angular/core/testing';

import { ValidationService } from 'src/app/core/services/validation.service';

import { ValidationField, ValidationErrorMessages } from 'src/app/models/validation.model';

import {
  UniqueTransactionReferenceStub,
  NotUniqueTransactionReferenceStub,
  NotNumberTransactionReferenceStub,
  StartBalanceNumberStub,
  StartBalanceNullStub,
  MutationEmptyStringStub,
  EndBalanceStringStub,
  EndBalanceCorrectStub,
  EndBalanceNotCorrectStub
 } from '../.././../../mock-server/stubs/mt940.stubs';


describe('ValidationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ValidationService],
    });
  });

  it('should be created', inject([ValidationService], (service: ValidationService) => {
    expect(service).toBeTruthy();
  }));

  describe('Validates MT940', () => {

    describe('Transaction Reference', () => {
      it('should return empty errors when unique', inject([ValidationService], (service: ValidationService) => {
        const results: Array<ValidationField> = service.validateMT940(UniqueTransactionReferenceStub);
        results.forEach((value: ValidationField) => expect(value.errors.length).toEqual(0));
      }));

      it('should return proper error message if not unique', inject([ValidationService], (service: ValidationService) => {
        const results: Array<ValidationField> = service.validateMT940(NotUniqueTransactionReferenceStub);
        expect(results[1].errors[0].message).toEqual(ValidationErrorMessages.TransactionReferenceNotUnique);
        expect(results[4].errors[0].message).toEqual(ValidationErrorMessages.TransactionReferenceNotUnique);
      }));

      it('should return proper error message if not a number', inject([ValidationService], (service: ValidationService) => {
        // @ts-ignore
        const results: Array<ValidationField> = service.validateMT940(NotNumberTransactionReferenceStub);
        expect(results[0].errors[0].message).toEqual(ValidationErrorMessages.TransactionReferenceNotValidNumber);
      }));
    });

    describe('Start Balance, Mutation, End Balance', () => {
      it('should return empty errors if a number', inject([ValidationService], (service: ValidationService) => {
          const results: Array<ValidationField> = service.validateMT940(StartBalanceNumberStub);
          results.forEach((value: ValidationField) => expect(value.errors.length).toEqual(0));
      }));

      it('should return proper error message if not a number', inject([ValidationService], (service: ValidationService) => {
        // @ts-ignore
        const resultsStartBalance: Array<ValidationField> = service.validateMT940(StartBalanceNullStub);
        expect(resultsStartBalance[0].errors[0].message).toEqual(ValidationErrorMessages.StartBalanceNotValidNumber);
        // @ts-ignore
        const resultsMutation: Array<ValidationField> = service.validateMT940(MutationEmptyStringStub);
        expect(resultsMutation[0].errors[0].message).toEqual(ValidationErrorMessages.MutationNotValidNumber);
        // @ts-ignore
        const resultsEndBalance: Array<ValidationField> = service.validateMT940(EndBalanceStringStub);
        expect(resultsEndBalance[0].errors[0].message).toEqual(ValidationErrorMessages.EndBalanceNotValidNumber);
      }));

      it('should return empty errors message if end balance is correct', inject([ValidationService], (service: ValidationService) => {
        const results: Array<ValidationField> = service.validateMT940(EndBalanceCorrectStub);
        results.forEach((value: ValidationField) => expect(value.errors.length).toEqual(0));
      }));

      it('should return proper error message if end balance is not correct', inject([ValidationService], (service: ValidationService) => {
        const resultsEndBalance: Array<ValidationField> = service.validateMT940(EndBalanceNotCorrectStub);
        expect(resultsEndBalance[0].errors[0].message).toEqual(ValidationErrorMessages.EndBalanceNotValidCalculation);
        expect(resultsEndBalance[1].errors[0].message).toEqual(ValidationErrorMessages.EndBalanceNotValidCalculation);
        expect(resultsEndBalance[2].errors[0].message).toEqual(ValidationErrorMessages.EndBalanceNotValidCalculation);
        expect(resultsEndBalance[3].errors[0].message).toEqual(ValidationErrorMessages.EndBalanceNotValidCalculation);
      }));
    });

  });

});
