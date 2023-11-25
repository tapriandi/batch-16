class Shape {
  area() {
    return 0;
  }
}

// inheritance
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

// inheritance
class Rectangle extends Shape {
  constructor(width, length) {
    super();
    this.width = width;
    this.length = length;
  }
  area() {
    return this.width * this.length;
  }
}

// poly
const shape = [new Circle(10).area(), new Rectangle(6, 10).area()];

console.log(shape)


// sumary
// inhritance --> extends
// poly --> instance (new Class)
// encapsulation -> method get (penyamaran properti key)
// abstaksi -> logika berat yang ada di dalam sebuah method
