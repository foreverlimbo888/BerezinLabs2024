class ShapeCalculator {
  calculateArea(shapeType) {
    if (shapeType === "circle") {
      this.calculateCircleArea();
    } else if (shapeType === "rectangle") {
      this.calculateRectangleArea();
    } else if (shapeType === "triangle") {
      this.calculateTriangleArea();
    }
  }

  calculateCircleArea() {
    const radius = parseFloat(prompt("Enter the radius of the circle: "));
    const area = 3.14 * radius * radius;
    console.log("Area:", area);
  }

  calculateRectangleArea() {
    const length = parseFloat(prompt("Enter the length of the rectangle: "));
    const width = parseFloat(prompt("Enter the width of the rectangle: "));
    const area = length * width;
    console.log("Area:", area);
  }

  calculateTriangleArea() {
    const base = parseFloat(prompt("Enter the base of the triangle: "));
    const height = parseFloat(prompt("Enter the height of the triangle: "));
    const area = 0.5 * base * height;
    console.log("Area:", area);
  }
}

const calculator = new ShapeCalculator();
calculator.calculateArea("circle");