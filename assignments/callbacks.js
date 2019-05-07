// Create a higher order function and invoke the callback function to test your work. 
//You have been provided an example of a problem and a solution to see how this works with our items array.  
//Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];



  //Given this problem: 
  
  // function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  // }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  // function firstItem(arr, cb) {
    // return cb(arr[0]);
  // }

  // Function invocation 
  // firstItem(items, function(first) {
    // console.log(first)
  // });




function getLength(items, cb) {
  // getLength passes the length of the array into the callback.
  return cb(items.length);
};
console.log(getLength(items, length => items.length))

function last(items, cb) {
  // last passes the last item of the array into the callback.
  return cb(items[items.length -1]);
}
console.log(last(items, last => items[items.length - 1]))

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x, y);
}
console.log(sumNums(7, 8, (num1, num2) => num1 + num2))


function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x, y);
}
console.log(multiplyNums(9, 9, (num1, num2) => num1 * num2))

function contains(item, items, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(item, items);
}
console.log(contains(items[0], items, (item, items) => items.includes(item, 0)))


/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
