// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
let addition = (function () {
  // The counter is protected by the scope of the outer function
  let counter = 0;
  return function () {counter++; return counter} // <---This function is within the outter function so it can see the counter variable
})();
// Everytime addition() is called it increments the count by 1
console.log(addition()); // 1
console.log(addition()); // 2
console.log(addition()); // 3
console.log(addition()); // 4

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ==== ***MY CHALLENGE 1 IS ALSO CHALLENGE 2 ***
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
