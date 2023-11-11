let usia = 17;
let input = 15;

if (input > usia) {
  console.log("anda bisa login");
}

let inputHari = "Minggu";
let jenisHari = "";

switch (inputHari) {
  case "Senin":
    jenisHari = "hari Kerja";
    break;

  case "Sabtu":
  case "Minggu":
    jenisHari = "hari libur";
    break;

  default:
    console.log("input hari salah");
    break;
}

// console.log(jenisHari);

//
if (inputHari === "Sabtu" || inputHari === "Minggu") {
  jenisHari = "hari libur";
} else if (inputHari === "Senin") {
  jenisHari = "hari kerja";
} else {
  console.log("input hari salah");
}

// console.log(jenisHari);

// login
let pass = "12345";
let user = "lili";

let passValid = false;
let userValid = false;

passValid = pass.length > 4 ? true : false;
userValid = user.length >= 4 ? true : false;

if (passValid && userValid) {
  console.log("anda berhasil login");
} else {
  console.log("nga bisa login");
}

// == primitif ==
// string --> text
  // number --> angka
    // boolean --> true / false
  // undefined
// null

// == non promitif ==
// array
// object
