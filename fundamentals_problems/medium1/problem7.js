function invoiceTotal(...amounts) {
  return amounts.reduce((total, amount) => total + amount, 0);
}

console.log(invoiceTotal(20, 30, 40, 50));          // 140
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // 220