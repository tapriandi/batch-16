// looping

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// data ke 1
// data ke 2 ...

// for(let idx = 0; idx < array.length; idx++){
//     console.log(`data ke ${array[idx]}`);
// }

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let hasil = 0
for (let i = 0; i < matrix.length; i++) {
  for (let x = 0; x < matrix[i].length; x++) {
    // hasil = hasil + matrix[i][x];
    hasil += matrix[i][x];
    // console.log('matrix ke: ', i+ 1, ', value nya: ', matrix[i][x])
  }
}

console.log(hasil)

//
