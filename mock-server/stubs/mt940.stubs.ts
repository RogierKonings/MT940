export const UniqueTransactionReferenceStub = [
  {
    transactionReference: 136329,
    accountNumber: 'NL93ABNA0585619023',
    description: 'Clothes from Dani�l Bakker',
    startBalance: 81.7,
    mutation: -43.41,
    endBalance: 38.29
  },
  {
    transactionReference: 187928,
    accountNumber: 'NL43AEGO0773393871',
    description: 'Flowers from Richard Theu�',
    startBalance: 101.01,
    mutation: -30.45,
    endBalance: 70.56
  },
  {
    transactionReference: 163434,
    accountNumber: 'NL90ABNA0585647886',
    description: 'Flowers from Jan de Vries',
    startBalance: 71.87,
    mutation: -16.05,
    endBalance: 55.82
  }
];

export const NotUniqueTransactionReferenceStub = [
  {
    transactionReference: 156108,
    accountNumber: 'NL69ABNA0433647324',
    description: 'Flowers from Erik de Vries',
    startBalance: 13.92,
    mutation: -7.25,
    endBalance: 6.67
  },
  {
    transactionReference: 112806,
    accountNumber: 'NL93ABNA0585619023',
    description: 'Subscription from Rik Theu�',
    startBalance: 77.29,
    mutation: -23.99,
    endBalance: 53.3
  },
  {
    transactionReference: 181631,
    accountNumber: 'NL27SNSB0917829871',
    description: 'Tickets for Jan King',
    startBalance: 60.83,
    mutation: 41.96,
    endBalance: 102.79
  },
  {
    transactionReference: 147132,
    accountNumber: 'NL56RABO0149876948',
    description: 'Subscription for Richard Dekker',
    startBalance: 103.65,
    mutation: 2.58,
    endBalance: 106.23
  },
  {
    transactionReference: 112806,
    accountNumber: 'NL91RABO0315273637',
    description: 'Candy for Willem Theu�',
    startBalance: 52.21,
    mutation: -33.21,
    endBalance: 19
  }
];

export const NotNumberTransactionReferenceStub = [
  {
    transactionReference: '112806',
    accountNumber: 'NL91RABO0315273637',
    description: 'Candy for Willem Theu�',
    startBalance: 52.21,
    mutation: -33.21,
    endBalance: 19
  }
];

export const StartBalanceNumberStub = [
  {
    transactionReference: 112806,
    accountNumber: 'NL91RABO0315273637',
    description: 'Candy for Willem Theu�',
    startBalance: 52.21,
    mutation: -33.21,
    endBalance: 19
  }
];

export const StartBalanceNullStub = [
  {
    transactionReference: 112806,
    accountNumber: 'NL91RABO0315273637',
    description: 'Candy for Willem Theu�',
    startBalance: null,
    mutation: -33.21,
    endBalance: 19
  }
];

export const MutationEmptyStringStub = [
  {
    transactionReference: 112806,
    accountNumber: 'NL91RABO0315273637',
    description: 'Candy for Willem Theu�',
    startBalance: 52.21,
    mutation: '',
    endBalance: 19
  }
];

export const EndBalanceStringStub = [
  {
    transactionReference: 112806,
    accountNumber: 'NL91RABO0315273637',
    description: 'Candy for Willem Theu�',
    startBalance: 52.21,
    mutation: -33.21,
    endBalance: '19'
  }
];

export const EndBalanceCorrectStub = [
  {
    transactionReference: 134902,
    accountNumber: 'NL90ABNA0585647886',
    description: 'Clothes for Willem de Vries',
    startBalance: 22.2,
    mutation: 33.21,
    endBalance: 55.41
  },
  {
    transactionReference: 136329,
    accountNumber: 'NL93ABNA0585619023',
    description: 'Clothes from Dani�l Bakker',
    startBalance: 81.7,
    mutation: -43.41,
    endBalance: 38.29
  },
  {
    transactionReference: 187928,
    accountNumber: 'NL43AEGO0773393871',
    description: 'Flowers from Richard Theu�',
    startBalance: 101.01,
    mutation: -30.45,
    endBalance: 70.56
  },
  {
    transactionReference: 163434,
    accountNumber: 'NL90ABNA0585647886',
    description: 'Flowers from Jan de Vries',
    startBalance: 71.87,
    mutation: -16.05,
    endBalance: 55.82
  }
];

export const EndBalanceNotCorrectStub = [
  {
    transactionReference: 134902,
    accountNumber: 'NL90ABNA0585647886',
    description: 'Clothes for Willem de Vries',
    startBalance: 22.2,
    mutation: 33.21,
    endBalance: 55.4
  },
  {
    transactionReference: 136329,
    accountNumber: 'NL93ABNA0585619023',
    description: 'Clothes from Dani�l Bakker',
    startBalance: 81.7,
    mutation: -43.41,
    endBalance: 38.26
  },
  {
    transactionReference: 187928,
    accountNumber: 'NL43AEGO0773393871',
    description: 'Flowers from Richard Theu�',
    startBalance: 101.01,
    mutation: -30.45,
    endBalance: 70.57
  },
  {
    transactionReference: 163434,
    accountNumber: 'NL90ABNA0585647886',
    description: 'Flowers from Jan de Vries',
    startBalance: 71.87,
    mutation: -16.05,
    endBalance: 55.83
  }
];

export const ValidMT940CSVStub = `Reference,Account Number,Description,Start Balance,Mutation,End Balance
                                  134902,NL90ABNA0585647886,Clothes for Willem de Vries,22.2,+33.21,55.40`;

export const InvalidMT940CSVStub = `Reference,Account Number,Description,Start Balance,Mutation,End Balance
                                    134902,NL90ABNA0585647886,+33.21,55.40`;

export const ValidMT940XMLStub = `<records>
  <record reference="164702">
    <accountNumber>NL46ABNA0625805417</accountNumber>
    <description>Flowers for Rik Dekker</description>
    <startBalance>81.89</startBalance>
    <mutation>+5.99</mutation>
    <endBalance>87.88</endBalance>
  </record>
  <record reference="189177">
    <accountNumber>NL27SNSB0917829871</accountNumber>
    <description>Subscription for Erik Dekker</description>
    <startBalance>5429</startBalance>
    <mutation>-939</mutation>
    <endBalance>6368</endBalance>
  </record>
</records>`;

export const InvalidMT940XMLStub = `<records>
  <record reference="164702">
    <accountNumber>NL46ABNA0625805417</accountNumber>
    <description>Flowers for Rik Dekker</description>
    <startBalance>81.89</startBalance>
    <mutation>+5.99</mutation>
    <endBalance>87.88</endBalance>`;
