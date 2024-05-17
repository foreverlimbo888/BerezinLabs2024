class Product {
  constructor(name, price, type) {
    this.name = name;
    this.price = price;
    this.type = type;
  }
}

class ProductService {
  searchProduct(query) {
    // Пошук товару за запитом
    console.log(`Search product by query: ${query}`);
  }

  displayProduct(product) {
    // Відображення інформації про товар
    console.log(`Name: ${product.name}, Price: ${product.price}, Type: ${product.type}`);
  }

  orderProduct(product, quantity) {
    // Замовлення товару
    console.log(`Order product: ${product.name}, Quantity: ${quantity}`);
  }
}

const product = new Product("Apple", 1.5, "Fruit");
const productService = new ProductService();

productService.searchProduct("Apple");
productService.displayProduct(product);
productService.orderProduct(product, 2);