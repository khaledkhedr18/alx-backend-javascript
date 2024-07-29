const arr = [3, 4, 5];
arr.copyWithin(0, 1, 2);

const arr2 = arr.slice().copyWithin(0, 1, 2);
const arr3 = [...arr2].copyWithin(0, 1, 2);
console.log(arr3);
