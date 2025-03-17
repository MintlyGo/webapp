interface Transaction {
  transactionDay: string;
  transactionDate: string;
  transactionMerchant: string;
  category: string;
  transactionAmount: number;
  currentBalance: number;
  id: number;
}

export const transactions: Transaction[] = [
  {
    transactionDay: "Sat",
    transactionDate: "Jan 2",
    transactionMerchant: "VENTRA MOBILE CHICAGO IL",
    category: "Travel/Entertainment",
    transactionAmount: 5.0,
    currentBalance: 12.15,
    id: 1,
  },
  {
    transactionDay: "Fri",
    transactionDate: "Jan 1",
    transactionMerchant: "INTERNET PAYMENT - THANK YOU",
    category: "Payments and Credits",
    transactionAmount: -702.66,
    currentBalance: 7.15,
    id: 2,
  },
  {
    transactionDay: "Fri",
    transactionDate: "Jan 1",
    transactionMerchant: "WHOLEFDS SLP 10171 CHICAGO IL",
    category: "Supermarkets",
    transactionAmount: 7.15,
    currentBalance: 709.81,
    id: 3,
  },
  {
    transactionDay: "Mon",
    transactionDate: "Jan 20",
    transactionMerchant:
      "SQ *METRO MARKET CHICAGO IL 00023058430208908465MANFB ASDJsdfsdgsdfgfsdfgsgsfdgfdhsdh",
    category: "Supermarkets",
    transactionAmount: 20.94,
    currentBalance: 702.66,
    id: 4,
  },
  {
    transactionDay: "Sun",
    transactionDate: "Jan 27",
    transactionMerchant:
      "CSC SERVICEWORKS, INC. CHICAGO IL GOOGLE PAY ENDING IN 4297",
    category: "Services",
    transactionAmount: 2.75,
    currentBalance: 681.72,
    id: 5,
  },
  {
    transactionDay: "Sun",
    transactionDate: "Jan 27",
    transactionMerchant: "CSC SERVICEWORKS, INC. PLAINVIEW NY",
    category: "Services",
    transactionAmount: 10.0,
    currentBalance: 678.97,
    id: 6,
  },
  {
    transactionDay: "Fri",
    transactionDate: "Jan 25",
    transactionMerchant: "SP BLUEPRINT.BRYANJOHN 3238942606 CA",
    category: "Supermarkets",
    transactionAmount: 57.31,
    currentBalance: 668.97,
    id: 7,
  },
];
