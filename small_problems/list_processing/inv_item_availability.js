const transactionsFor = (itemId, transactions) => {
  return transactions.filter(transaction => transaction.id === itemId);
};

const getInOrOutsTotal = (inOrOut, transactions) => {
  return transactions.filter(transaction => transaction.movement === inOrOut)
                     .map(transaction => transaction.quantity)
                     .reduce((sum, num) => sum + num, 0);
};

const isItemAvailable = (itemId, transactions) => {
  const filteredTransactions = transactionsFor(itemId, transactions);
  const outs = getInOrOutsTotal('out', filteredTransactions);
  const ins =  getInOrOutsTotal('in', filteredTransactions);

  return ins > outs;
};

const transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                       { id: 105, movement: 'in',  quantity: 10 },
                       { id: 102, movement: 'out', quantity: 17 },
                       { id: 101, movement: 'in',  quantity: 12 },
                       { id: 103, movement: 'out', quantity: 15 },
                       { id: 102, movement: 'out', quantity: 15 },
                       { id: 105, movement: 'in',  quantity: 25 },
                       { id: 101, movement: 'out', quantity: 18 },
                       { id: 102, movement: 'in',  quantity: 22 },
                       { id: 103, movement: 'out', quantity: 15 }, ];

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true