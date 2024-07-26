class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  get area() {
    return this.width * this.height;
  }

  *getSides() {
    yield this.width;
    yield this.height;
    yield this.width;
    yield this.height;
  }

  get perimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle1 = new Rectangle(5, 4);

console.log(rectangle1.area);
var i = 1;
for (const side of rectangle1.getSides()) {
  console.log(`Side No. ${i} is: ${side}`);
  i++;
}

console.log([...rectangle1.getSides()]);
