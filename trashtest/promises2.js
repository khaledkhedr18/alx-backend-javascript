/**
 * This function creates a new Promise that resolves with the given message after a 300ms delay.
 * It also demonstrates the usage of Promises with the then() and catch() methods.
 *
 * @function myPromise
 * @returns {Promise} A Promise that resolves with a string message after 300ms.
 *
 * @example
 * myPromise.then((message) => {
 *   console.log(message); // Outputs: "Foo"
 * }).catch((message) => {
 *   console.log(message); // This block will not be executed
 * });
 */
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Foo");
  }, 300);
});

myPromise.then((message) => {
  console.log(message);
}).catch((message) => {
  console.log(message);
});