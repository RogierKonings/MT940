/**
 * Service responsible for validating the different fields of a MT940
 */
import { Injectable } from '@angular/core';

import * as IBAN from 'iban';

import { MT940 } from 'src/app/models/mt940.model';
import { ValidationField, ValidationErrorMessages } from 'src/app/models/validation.model';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  public validateMT940(values: Array<MT940>): Array<ValidationField> {
    const validationReport: Array<ValidationField> = [];

    values.forEach((mt940: MT940, index: number, arr: Array<MT940>) => {
      const validationField: ValidationField = {
        transactionReference: mt940.transactionReference,
        errors: []
      };

      if (!this.isUniqueValue(mt940.transactionReference, arr)) {
        validationField.errors.push({
          message: ValidationErrorMessages.TransactionReferenceNotUnique
        });
      }
      if (!this.isNumber(mt940.transactionReference)) {
        validationField.errors.push({
          message: ValidationErrorMessages.TransactionReferenceNotValidNumber
        });
      }
      if (!IBAN.isValid(mt940.accountNumber)) {
        validationField.errors.push({
          message: ValidationErrorMessages.TransactionReferenceNotUnique
        });
      }
      if (!this.isNumber(mt940.startBalance)) {
        validationField.errors.push({
          message: ValidationErrorMessages.StartBalanceNotValidNumber
        });
      }
      if (!this.isNumber(mt940.mutation)) {
        validationField.errors.push({
          message: ValidationErrorMessages.MutationNotValidNumber
        });
      }
      if (!this.isNumber(mt940.endBalance)) {
        validationField.errors.push({
          message: ValidationErrorMessages.EndBalanceNotValidNumber
        });
      }
      if (
        !this.isValidEndBalance(mt940.startBalance, mt940.mutation, mt940.endBalance)) {
          validationField.errors.push({
            message: ValidationErrorMessages.EndBalanceNotValidCalculation
          });
      }
      validationReport.push(validationField);
    });
    return validationReport;
  }

  private isUniqueValue(value: any, values: Array<MT940>): boolean {
    const referenceArr: Array<number> = [];
    values.forEach((mt940: MT940) => {
      referenceArr.push(mt940.transactionReference);
    });
    return referenceArr.filter(item => item === value).length === 1;
  }

  private isNumber(value: any): boolean {
    return typeof(value) === 'number' && !isNaN(value);
  }

  private isValidEndBalance(startBalance: number, mutation: number, endBalance: number): boolean {
    return (Math.round(startBalance * 100) + Math.round(mutation * 100)) / 100 === endBalance;
  }

}
