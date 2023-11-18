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


