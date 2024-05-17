// Функція для обчислення суми
function calculateSum(num1, num2) {
  return num1 + num2;
}

// Функція для обчислення різниці
function calculateDifference(num1, num2) {
  return num1 - num2;
}

// Функція для обчислення добутку
function calculateProduct(num1, num2) {
  return num1 * num2;
}

// Функція для обчислення частки
function calculateQuotient(num1, num2) {
  return num1 / num2;
}

// Функція для обчислення модуля
function calculateModulus(num1, num2) {
  return num1 % num2;
}

// Функція для перевірки на нульові значення
function checkForZeroValues(num1, num2) {
  if (num1 === 0 || num2 === 0) {
    return "Будь ласка, введіть ненульові значення.";
  }
  return null;
}

// Функція для обчислення всіх значень
function calculateValues(num1, num2) {
  const error = checkForZeroValues(num1, num2);
  if (error) {
    return error;
  }

  const sum = calculateSum(num1, num2);
  const difference = calculateDifference(num1, num2);
  const product = calculateProduct(num1, num2);
  const quotient = calculateQuotient(num1, num2);
  const modulus = calculateModulus(num1, num2);

  return { sum, difference, product, quotient, modulus };
}