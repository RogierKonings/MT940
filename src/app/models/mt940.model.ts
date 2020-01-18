export interface MT940 {
  transactionReference: number;
  accountNumber: string;
  description: string;
  startBalance: number;
  mutation: number;
  endBalance: number;
}

export interface MT940Parser {
  getMT940(data: string | ArrayBuffer): Array<MT940>;
  parseToList(records: Array<string>, headerLength?: number): Array<MT940>;
  mapToMT940(record: any): MT940;
}
