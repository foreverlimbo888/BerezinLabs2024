class Shape {
  constructor(shapeType) {
    this.shapeType = shapeType;
  }

  calculateArea() {
    let area = 0;
    if (this.shapeType === "circle") {
      const radius = parseFloat(prompt("Enter the radius of the circle: "));
      area = 3.14 * radius * radius;
    } else if (this.shapeType === "rectangle") {
      const length = parseFloat(prompt("Enter the length of the rectangle: "));
      const width = parseFloat(prompt("Enter the width of the rectangle: "));
      area = length * width;
    } else if (this.shapeType === "triangle") {
      const base = parseFloat(prompt("Enter the base of the triangle: "));
      const height = parseFloat(prompt("Enter the height of the triangle: "));
      area = 0.5 * base * height;
    }
    console.log("Area:", area);
  }
}

const shapeType = prompt("Enter the type of shape (circle, rectangle, triangle): ");
const shape = new Shape(shapeType);
shape.calculateArea();