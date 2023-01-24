export function printOwing(invoice) {
  printBanner();

  // calculate outstanding
  let outstanding = calculateOutstanding(invoice);

  // record due date
  recordDueDate(invoice);

  //print details
  printDetails(invoice, outstanding);
}

const printBanner = () => {
  console.log("***********************");
  console.log("**** Customer Owes ****");
  console.log("***********************");
};
const calculateOutstanding = (invoice) => {
  return invoice.orders.reduce((sum, orders) => (sum += orders.amount), 0);
};
const recordDueDate = (invoice) => {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};
const printDetails = (invoice, outstanding) => {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
};

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: "엘리",
};
printOwing(invoice);
