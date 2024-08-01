function wrapInArray(obj) {
    if (typeof obj === 'string') {
        return [obj];
    }
    return obj;
}
var result1 = wrapInArray('John');
var result2 = wrapInArray(['John', 'Jane']);
console.log(result1);
console.log(result2);
console.log(typeof result1);
console.log(typeof result2);
