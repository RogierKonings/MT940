export interface MT940 {
  TransactionReference: number;
  AccountNumber: string;
  Description: string;
  StartBalance: number;
  Mutation: number;
  EndBalance: number;
}

export interface MT940Creator {
  getMT940(data: string | ArrayBuffer): Array<MT940>;
  createMT940ObjectArray(records: string[], headerLength: number): Array<MT940>;
  createMT940Object(records: Array<string>): MT940;
}
