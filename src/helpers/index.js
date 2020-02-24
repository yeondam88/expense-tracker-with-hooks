export function isNegative(amount) {
  return amount < 0;
}
export function currencyFormat(amount) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });
}

export function sum(transactions) {
  return transactions.reduce((prev, curr) => {
    return prev + curr.amount;
  }, 0);
}

export function sumIncome(transactions) {
  return transactions
    .filter(tran => tran.amount > 0)
    .reduce((prev, curr) => {
      return prev + curr.amount;
    }, 0);
}

export function sumExpense(transactions) {
  return transactions
    .filter(tran => tran.amount < 0)
    .reduce((prev, curr) => {
      return prev + curr.amount;
    }, 0);
}

export function generateUUID() {
  // Public Domain/MIT
  var d = new Date().getTime(); //Timestamp
  var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
}
