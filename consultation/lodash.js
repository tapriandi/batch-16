import _ from "lodash";

const array = [1, 2, 3];
// const squared = _.map(array, (num) => num * num);
const squared = array.map(
  (item, index) => {
    return item * item;
  }
);
console.log(squared);

// 1
// 2
// Output: [1, 4, 9]

// const numbers = [1, 2, 3, 4, 5];
// const evens = _.filter(numbers, (num) => num % 2 === 0);
// // Output: [2, 4]

// const sum = _.reduce([1, 2, 3], (acc, num) => acc + num, 0);
// // Output: 6

// _.forEach([1, 2, 3], (num) => {
//   console.log(num);
// });
// // Output:
// // 1
// // 2
// // 3

// const users = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Doe", age: 22 },
// ];
// const user = _.find(users, { age: 30 });
// // Output: { name: 'Jane', age: 30 }

// const saveChanges = () => {
//   console.log("Changes saved");
// };
// const debouncedSave = _.debounce(saveChanges, 1000);
// // debouncedSave hanya dapat dipanggil setelah 1 detik sejak pemanggilan sebelumnya

// const original = { a: 1, b: { c: 2 } };
// const cloned = _.cloneDeep(original);
// // cloned adalah salinan mendalam dari original
