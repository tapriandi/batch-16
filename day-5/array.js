// let buah = ["nanas", "pisang", "jambu", "semangka"];

// // buah.push("durian"); // add to latest index
// // buah.pop(); // remove latest index
// // buah.unshift('mangga'); // add to first index
// // buah.shift(); // remove first index

// // console.log(buah);

// // let result = [];

// // for (let i = 0; i < buah.length; i++) {
// //   result.push(buah[i]);
// //   if (buah[i] === "pisang") {
// //     result.push("alpukat");
// //   }
// // }

// // console.log(result);

// let matrix = [
//   [3, 7, 2],
//   [9, 1, 6],
//   [4, 5, 8],
// ];

// let angkaTerbesar = matrix[0][0];

// for (let i = 0; i < matrix.length; i++) {
//   for (let j = 0; j < matrix[i].length; j++) {
//     if (matrix[i][j] > angkaTerbesar) {
//       angkaTerbesar = matrix[i][j];
//     }
//   }
// }

// matrix

let array2Dimensi = [
  [1, 2, 3], // 0
  [4, 5, 6], // 1
  [[7], [8], [9]], // 2
];

console.log(array2Dimensi[2][2][0])