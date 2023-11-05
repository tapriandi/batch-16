let nilai1 = false;
let nilai2 = 75;

// if (nilai1 != nilai2 ) {
//     console.log('==> benar')
// } else {
//     console.log('==> salah')
// }

// == tipe data di skip
// === dilihat juga tipedatanya

// console.log(nilai1 - nilai2);

// konjungsi --> and >> &&
// disjungsi --> or >> ||
// negasi --> nilai kebalikan >> !

const users = [
  {
    username: "lala",
    password: "password",
    role: "admin",
    jenis_account: "premium",
  },
  {
    username: "tono",
    password: "password",
    role: "admin",
    jenis_account: "basic",
  },
];

// yang boleh login role = admin, tapi jangan si lili

// login
for (let i = 0; i < users.length; i++) {
  if (
    (users[i].role === "admin" && users[i].username !== "lili") ||
    users[i].jenis_account === "premium"
  ) {
    console.log("login success");
  } else {
    console.log("login fail");
  }
}

// ++ --> num = num + 2 --> num++
// -- --> num = num - 1 --> num--
let num = 1;
--num;

num = 1 + num

console.log(false + 1);