class Customer {
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }

  getAddress() {
    return this.address;
  }
}

class ShippingService {
  calculateShippingCost(address) {
    if (address.includes("New York")) {
      return 5.00;
    } else if (address.includes("California")) {
      return 10.00;
    } else {
      return 15.00;
    }
  }
}

class Order {
  constructor(customer, product, quantity) {
    this.customer = customer;
    this.product = product;
    this.quantity = quantity;
    this.shippingService = new ShippingService();
  }

  printOrderDetails() {
    console.log(`Order for ${this.product} x ${this.quantity}`);
    console.log(`Shipping to ${this.customer.getAddress()}`);
  }

  calculateShippingCost() {
    return this.shippingService.calculateShippingCost(this.customer.getAddress());
  }
}