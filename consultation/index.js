// const data1 = [
//   {
//     firstname: "daffa",
//     lastname: "test",
//     alamat: "Jakarta",
//     ttl: "30/09/2020",
//     hobi: ["jogging", "melukis"],
//   },
//   {
//     firstname: "andi",
//     lastname: "test",
//     alamat: "Bandung",
//     ttl: "30/09/2020",
//     hobi: ["memancing", "masak"],
//   },
// ];

// // moment.js

// // nama: fn + ln
// // alamat:
// // hobi:

// function date(date) {
//   // 30/09/2020 --> 30 september 2020

//   let bulan = "";
//   switch (date[3] + date[4]) {
//     case "09":
//       bulan = "september";
//     default:
//       break;
//   }

//   const tanggal = date[0] + date[1];
//   const tahun = date[6] + date[date.length - 1];
//   const result = `${tanggal} ${bulan} ${tahun}`;

//   return result;
// }

// function olahData(data) {
//   let result = "";

//   for (let i = 0; i < data1.length; i++) {
//     result = `
//         nama: ${data1[i].firstname} ${data1[i].lastname}
//         alamat: ${data1[i].alamat}
//         hobi: ${data1[i].hobi}
//         `;
//     result = result + `tanggal: ${date(data1[i].ttl)}`;
//   }

//   console.log(result);
// }
// olahData();

// Rest Operator
const arr1 = [1, 2, 3, 4];
const arr2 = ["a", "b", "c", "d"];

// function join(...param) {
//   console.log(param[0]);
// }

// join(arr1, arr2);
// [ [ 1, 2, 3, 4 ], [ 'a', 'b', 'c', 'd' ] ]

//  Spread Operator
let obj1 = { name: "lala" };
let obj2 = { alamat: "jakarta" };

const res = { ...obj1, ...obj2 };

// console.log(res);
// output as array ->> [ 'a', 'b', 'c', 'd', 1,   2,   3,   4]
// { '0': 1, '1': 2, '2': 3, '3': 4 }
