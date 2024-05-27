class Customer {
  constructor(account) {
    this.account = account;
  }

  getAccount() {
    return this.account;
  }
}

class Account {
  constructor(balance) {
    this.balance = balance;
  }

  getBalance() {
    return this.balance;
  }
}

class Bank {
  constructor(customer) {
    this.customer = customer;
  }

  getBalance() {
    return this.customer.getAccount().getBalance();
  }
}

const bank = new Bank(new Customer(new Account(1000)));
const balance = bank.getBalance();
console.log(`The balance is: ${balance}`);