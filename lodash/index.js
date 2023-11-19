// import _ from "lodash";

// const array = [1, 2, 2, 4, 4]; // 1,2,4
// const array1 = [1, 2, 2, 4, 4]; // 1,2,4

// console.log(_.isEqual(array, array1));

// katak === katak = true
// kotak === katok = false

// rekursif
// function doSomething(action) {
//   console.log(`I am ${action}.`);
//   doSomething(action);
// }

// doSomething("running");

function doSomething(n) {
  if (n === 0) {
    console.log("TASK COMPLETED!");
    return;
  }
  console.log("I'm doing something.");
  doSomething(n - 1);
}
doSomething(3);


function factorial(n) {
    // Base case: if n is 0 or 1, return 1
    if (n === 0 || n === 1) {
      return 1;
    } else {
      // Recursive case: n! = n * (n-1)!
      return n * factorial(n - 1);
    }
  }
  
  // Example usage
  console.log(factorial(5)); // Output: 120