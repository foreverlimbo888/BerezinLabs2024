class Product {
  constructor(productId, name, category, price) {
    this._productId = productId; // Приватне поле
    this._name = name; // Приватне поле
    this._category = category; // Приватне поле
    this._price = price; // Приватне поле
  }

  get productId() {
    return this._productId;
  }

  get name() {
    return this._name;
  }

  get category() {
    return this._category;
  }

  get price() {
    return this._price;
  }
}

class InventoryManagement {
  constructor(products) {
    this.products = products;
  }

  printProductDetails(productId) {
    for (const product of this.products) {
      if (product.productId === productId) {
        console.log(
          `Product ID: ${product.productId}, Name: ${product.name}, Category: ${product.category}, Price: ${product.price}`
        );
      }
    }
  }
}