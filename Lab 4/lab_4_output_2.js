class Square {
  area(side) {
    return side ** 2;
  }
}

class Circle {
  area(radius) {
    return 3.14 * radius ** 2;
  }
}

const square = new Square();
console.log("Area of square:", square.area(5));

const circle = new Circle();
console.log("Area of circle:", circle.area(3));