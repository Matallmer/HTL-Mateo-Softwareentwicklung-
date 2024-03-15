const { fakerDE } = require("@faker-js/faker");

for (let i = 0; i < 10; i++) {
  console.log(fakerDE.person.firstName());
}

for (let i = 0; i < 10; i++) {
  console.log(fakerDE.finance.accountName());
}

for (let i = 0; i < 10; i++) {
  console.log(fakerDE.finance.creditCardNumber());
}

for (let i = 0; i < 10; i++) {
  console.log(fakerDE.finance.pin());
}

for (let i = 0; i < 10; i++) {
  console.log(fakerDE.finance.currencyName());
}
