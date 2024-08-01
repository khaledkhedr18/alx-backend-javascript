type objecttt = string | string[];


function wrapInArray (obj: objecttt) {
  if (typeof obj === 'string') {
    return [obj];
  }
  return obj;
}


const result1 = wrapInArray('John');
const result2 = wrapInArray(['John', 'Jane']);

console.log(result1);
console.log(result2);

console.log(typeof result1);
console.log(typeof result2);
