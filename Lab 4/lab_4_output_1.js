class Animal {
  speak() {
    console.log("Animal sound");
  }

  move() {
    console.log("Animal moving");
  }
}

class Dog {
  constructor() {
    this.animal = new Animal();
  }

  speak() {
    this.animal.speak();
  }

  move() {
    this.animal.move();
  }
}

const dog = new Dog();
dog.speak();
dog.move();