function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
  console.log('running calculateBill');
  const total = billAmount + billAmount * taxRate + billAmount * tipRate;
  return total;
}

const myTotal = calculateBill(100, 0.13);
const myTotal2 = calculateBill(200, 0.13);
console.log(`Your total is £${myTotal}`);
console.log(`Your total is £${myTotal2}`);

function sayHiTo(firstName) {
  console.log(`Hello ${firstName}`);
  return calculateBill(100, 0.15);
};

let greeting = sayHiTo('Gideon');
console.log(greeting);

function doctorise(name) {
  return `Dr ${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}

const skipTaxRate = calculateBill(200, undefined, 0.2);

console.log(skipTaxRate);