export interface MT940 {
  TransactionReference: number;
  AccountNumber: string;
  Description: string;
  StartBalance: number;
  // Mutation: '+' | '-' & number;
  Mutation: any;
  EndBalance: number;
}
