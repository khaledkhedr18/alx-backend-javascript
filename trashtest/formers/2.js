const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const doubledNumbers = numbers.map((number) => number * 2);

const evenNumbers = numbers.filter(function (n) {
  return n % 2 === 0;
});

const sumNumbers = numbers.reduce(function (sum, n) {
  return sum + n;
}, 0);

const sumNumbers2 = numbers.reduce((acc, n) => acc + n, 0);

const greaterThanZero = numbers.find(function (n) {
  return n > 0;
});

const greaterThanZero2 = numbers.find((n) => n > 5);

console.log(doubledNumbers);
console.log(evenNumbers);
console.log(sumNumbers);
console.log(sumNumbers2);
console.log(greaterThanZero);
console.log(greaterThanZero2);
