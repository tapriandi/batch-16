// Let

var nilai = 80;
let name = "lili";

if (nilai > 75) {
  //   console.log("Lulus");
  name = name + "lala"; // lililala

  if (true) {
    name = name + "tono"; //lililalatono
  }
}

// console.log(name);
// lili tono
// lili lala tono

// Const
let name1 = "lili";
name1 = "tono";

// console.log(name1);

// var -> global, bisa di reassign/update valuenya
// let -> block scope {}, bisa di reassign/update valuenya
// const -> block scope {}, tidak bisa di reassign/update valuenya

// null vs undefined
let number = "string";
console.log(typeof number); // 0

const array = ["pisang"];
array.push("nangka");

console.log(array);
// error
// lili
