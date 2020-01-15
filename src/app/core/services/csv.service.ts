import { Injectable } from '@angular/core';

import { MT940 } from 'src/app/core/models/mt940.model';

@Injectable({
  providedIn: 'root'
})
export class CSVService {

   public getCSVData(data: string | ArrayBuffer): Array<MT940> {

    const records = (data as string).split(/\r\n|\n/);
    const headers = (records[0] as string).split(',');
    const result = this.getDataRecordsArrayFromCSVFile(records, headers.length);
    return result;
  }

  private getDataRecordsArrayFromCSVFile(records: string[], headerLength: number) {
    const mt940arr: Array<MT940> = [];
    for (let i = 1; i < records.length; i++) {
      const splitRecords = (records[i] as string).split(',');
      if (splitRecords.length === headerLength) {
        const mt940: MT940 = {
          TransactionReference: Number(splitRecords[0].trim()),
          AccountNumber: splitRecords[1].trim(),
          Description: splitRecords[2].trim(),
          StartBalance: Number(splitRecords[3].trim()),
          Mutation: splitRecords[4].trim().substr(0, 1) + Number(splitRecords[4].trim().substr(1)),
          EndBalance: Number(splitRecords[5].trim())
        };

        mt940arr.push(mt940);
      }
    }
    return mt940arr;
  }

}
