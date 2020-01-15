import { Injectable } from '@angular/core';

import * as IBAN from 'iban';

import { MT940 } from 'src/app/models/mt940.model';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  public validateMT940(values: Array<MT940>): boolean {
    const issueArr: Array<string> = [];

    values.forEach((value: MT940, index: number, arr: Array<MT940>) => {
      // create ErrorValidation Object
      if (!this.isUniqueValue(value.TransactionReference, arr)) {
        issueArr.push(`Transaction Reference is not an unique value at index: ${index}`);
      }
      if (!this.isValidNumber(value.TransactionReference)) {
        issueArr.push(`Transaction Reference is not a valid number at index: ${index}`);
      }
      if (!this.isValidIban(value.AccountNumber)) {
        issueArr.push(`Account Number is not a valid Iban at index: ${index}`);
      }
      if (!this.isValidString(value.Description)) {
        issueArr.push(`Description is not a valid string at index: ${index}`);
      }
      if (!this.isValidNumber(value.StartBalance)) {
        issueArr.push(`Start Balance is not a valid number at index: ${index}`);
      }
      if (!this.isValidNumber(value.Mutation)) {
        issueArr.push(`Mutation is not a valid number at index: ${index}`);
      }
      if (!this.isValidNumber(value.EndBalance)) {
        issueArr.push(`End Balance is not a valid number at index: ${index}`);
      }
      if (
        this.isValidNumber(value.StartBalance) &&
        this.isValidNumber(value.Mutation) &&
        this.isValidNumber(value.EndBalance) &&
        !this.isValidEndBalance(value.StartBalance, value.Mutation, value.EndBalance)
        ) {
        issueArr.push(`The calculation of the end balance is not valid at index ${index}`);
      }
    });
    console.log(issueArr);
  }

  private isUniqueValue(value: any, values: Array<MT940>): boolean {
    const referenceArr: Array<number> = [];
    values.forEach((mt940: MT940) => {
      referenceArr.push(mt940.TransactionReference);
    });
    return referenceArr.filter(item => item === value).length === 1;
  }

  private isValidNumber(value: any): boolean {
    return this.isType(value, 'Number');
  }

  private isValidString(value: any): boolean {
    return this.isType(value, 'String');
  }

  private isValidIban(value: any): boolean {
    return this.isValidString(value) && IBAN.isValid(value);
  }

  private isValidEndBalance(startBalance: number, mutation: number, endBalance: number): boolean {
    return (Math.round(startBalance * 100) + Math.round(mutation * 100)) / 100 === endBalance;
  }

  private isType(value: any, type: string): boolean {
    return Object.prototype.toString.call(value) === `[object ${type}]`;
  }


}
