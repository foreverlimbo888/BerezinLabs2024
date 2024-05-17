function calculateScore(user) {
  // Бізнес-логіка для розрахунку загального рейтингу
  const totalScore = user.scores.reduce((sum, score) => sum + score, 0);

  // Перевірка чи користувач є повнолітнім
  const isAdult = user.age >= 18;

  // Виведення результатів
  console.log("Name:", user.name);
  console.log("Age:", user.age);
  console.log("Gender:", user.gender);
  console.log("Height:", user.height);
  console.log("Weight:", user.weight);
  console.log("Total Score:", totalScore);
  console.log("Adult:", isAdult);
}

const user = {
  name: "John",
  age: 25,
  gender: "Male",
  height: 175,
  weight: 70,
  scores: [85, 90, 75, 88, 92],
};

calculateScore(user);