// day 8
// buatlah sebuah function untuk menjumlahkan seluruh deret angka
console.log(
  deepSum([
    [1, 4, 2, 5],
    [5, 7, 8, 9],
    [6, 4, 8, 1],
  ])
); // 60
console.log(
    deepSum([
      [40, 6, 11, 3],
      [7, 90, 13, 52],
      [90, 77, 78, 44],
    ])
  ); // 511
console.log(deepSum([])) // []





// day 9
// buatlah function untuk mencari nilai terbesar dari sebuah array of object
console.log(findBigValue([
    {name: 'susi', nilai: 90},
    {name: 'ahmad', nilai: 88},
    {name: 'Lala', nilai: 91},
])) 
// output
// nilai terbesar adalah lala dengan nilai 91
console.log(findBigValue([])) // data kosong


