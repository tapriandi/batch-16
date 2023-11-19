// ...

let number = [1, 2, 3];
// let newNumber = [4, 5, 6];

// [1, 2, 3, 4, 5, 6]

// for (let i = 0; i < newNumber.length; i++) {
//   number.push(newNumber[i]);
// }

// console.log("loop :", number);

// console.log([...number, ...newNumber]);

let obj1 = { nama: "subhan" }; // 10 properti
let obj2 = { alamat: "jakarta" }; // 15 properti

// { nama: "subhan", alamat: "jakarta "}

let newObj = { ...obj1, ...obj2 };

// gabungin object dan array ?

// let gabung = { ...number, ...obj1 };
// { '0': 1, '1': 2, '2': 3, nama: 'subhan' }

let gabung = [...number, obj1];
// [ 1, 2, 3, { nama: 'subhan' } ]

console.log(gabung);