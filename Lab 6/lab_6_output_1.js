function calculateBasePrice(productPrices, discount) {
  let totalPrice = 0;
  for (const price of productPrices) {
    if (discount) {
      totalPrice += price * 0.9; // 10% discount
    } else {
      totalPrice += price;
    }
  }
  return totalPrice;
}

function calculateTotalPrice(productPrices, discount) {
  return calculateBasePrice(productPrices, discount);
}

function calculateTotalPriceWithTax(productPrices, discount, taxRate) {
  const basePrice = calculateBasePrice(productPrices, discount);
  return basePrice * (1 + taxRate);
}