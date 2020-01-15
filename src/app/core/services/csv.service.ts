import { Injectable } from '@angular/core';

import { MT940, MT940Creator } from 'src/app/models/mt940.model';

@Injectable({
  providedIn: 'root'
})
export class CSVService implements MT940Creator {

  public getMT940(data: string | ArrayBuffer): Array<MT940> {
    const records = (data as string).split(/\r\n|\n/);
    const headers = (records[0] as string).split(',');
    return this.createMT940ObjectArray(records, headers.length);
  }

  createMT940ObjectArray(records: string[], headerLength: number) {
    const mt940arr: Array<MT940> = [];
    for (let i = 1; i < records.length; i++) {
      const splitRecords = (records[i] as string).split(',');
      if (splitRecords.length === headerLength) {
        const mt940: MT940 = this.createMT940Object(splitRecords);
        mt940arr.push(mt940);
      }
    }
    return mt940arr;
  }

  createMT940Object(records: Array<string>): MT940 {
    const mt940: MT940 = {
      TransactionReference: Number(records[0].trim()),
      AccountNumber: records[1].trim(),
      Description: records[2].trim(),
      StartBalance: Number(records[3].trim()),
      Mutation: Number(records[4].trim()),
      EndBalance: Number(records[5].trim())
    };
    return mt940;
  }
}
