class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  // ...
  static calculate(shape) {
    if (shape instanceof Square) {
      return shape.side * shape.side; // Área del cuadrado
    } else if (shape instanceof Rectangle) {
      return shape.width * shape.height; // Área del rectángulo
    } else if (shape instanceof Circle) {
      return Math.PI * shape.radius ** 2; // Área del círculo
    } else {
      console.log("Figura no encontrada");
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));