function calculateValues(num1, num2) {
  // Перевірка на нульові значення
  if (num1 === 0 || num2 === 0) {
    return "Будь ласка, введіть ненульові значення.";
  }

  // Обчислення суми
  const sum = num1 + num2;

  // Обчислення різниці
  const difference = num1 - num2;

  // Обчислення добутку
  const product = num1 * num2;

  // Обчислення частки
  const quotient = num1 / num2;

  // Обчислення модуля
  const modulus = num1 % num2;

  // Виведення результатів
  console.log("Сума:", sum);
  console.log("Різниця:", difference);
  console.log("Добуток:", product);
  console.log("Частка:", quotient);
  console.log("Модуль:", modulus);

  // Додаткові перевірки та обчислення
  if (sum > 100) {
    console.log("Сума більша за 100!");
  }

  if (difference < 0) {
    console.log("Різниця менша за 0!");
  }

  if (product > 1000) {
    console.log("Добуток більший за 1000!");
  }

  if (quotient < 1) {
    console.log("Частка менша за 1!");
  }

  if (modulus > 5) {
    console.log("Модуль більший за 5!");
  }

  return { sum, difference, product, quotient, modulus };
}