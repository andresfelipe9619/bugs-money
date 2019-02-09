const test = {
  transactions: [
    {
      id: 115216345,
      description: "Remesa",
      date: "Today",
      normalizedDate: "2019-02-06",
      type: "expense",
      transactionType: "expense",
      amount: 300000,
      expenseAmount: 300000,
      accountId: 0,
      accountName: null,
      tags: "Comida",
      tagNames: ["Comida"],
      status: "cleared",
      isFutureDated: false
    },
    {
      id: 115216308,
      description: "Pago enero",
      date: "Today",
      normalizedDate: "2019-02-06",
      type: "income",
      transactionType: "income",
      amount: 2500000,
      expenseAmount: -2500000,
      accountId: 0,
      accountName: null,
      tags: "Salary",
      tagNames: ["Salary"],
      status: "cleared",
      isFutureDated: false
    },
    {
      id: 115218723,
      description: "Salario Diciembre",
      date: "29 Dec",
      normalizedDate: "2018-12-29",
      type: "income",
      transactionType: "income",
      amount: 3000000,
      expenseAmount: -3000000,
      accountId: 1078207,
      accountName: "Billetera",
      tags: "Salary",
      tagNames: ["Salary"],
      status: "cleared",
      isFutureDated: false
    }
  ],
  accounts: [
    {
      id: 1078207,
      name: "Billetera",
      bank: "Other",
      balance: 3000000,
      currency: "USD"
    },
    {
      id: 1078208,
      name: "Mastercard",
      bank: "Other",
      balance: 0,
      currency: "USD"
    }
  ],
  budgets: [
    {
      id: 944602,
      categoryId: 10634104,
      name: "Home",
      nature: "expense",
      limit: 400000,
      spent: 0,
      balance: 400000,
      period: "Feb"
    },
    {
      id: 944603,
      categoryId: 10634105,
      name: "Comida",
      nature: "expense",
      limit: 300000,
      spent: 300000,
      balance: 0,
      period: "Feb"
    },
    {
      id: 944604,
      categoryId: 10634106,
      name: "Salary",
      nature: "income",
      limit: 2500000,
      spent: 2500000,
      balance: 0,
      period: "Feb"
    },
    {
      id: 944614,
      categoryId: 10634136,
      name: "Cristopher",
      nature: "expense",
      limit: 500000,
      spent: 0,
      balance: 500000,
      period: "Feb"
    },
    {
      id: 944615,
      categoryId: 10634137,
      name: "Membresias de Software",
      nature: "expense",
      limit: 150000,
      spent: 0,
      balance: 150000,
      period: "Feb"
    }
  ]
};
export default test;
