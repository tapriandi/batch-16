// function tambah(x, y) {
//   console.log(x + y);
// }

// tambah(5, 4, 7);

function tambah(...param) {
  console.log(param[3].name);
}

tambah(5, 4, 7, { name: "lala" });
