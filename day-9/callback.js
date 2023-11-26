// syncronus
// console.log('callback 1')
// console.log('callback 2')

// asyncronus
// setTimeout(() => {
//   console.log("callback 1");
// }, 2000);

// setTimeout(() => {
//   console.log("callback 2");
// }, 1000);

// callback 1
// callback 2

// function salam(name, age) {
//   console.log("nama saya adalah " + name);
//   (function sayHi() {
//     console.log("usia saya adalah " + age);

//   })(age);
// }

// salam("lili", 12);

// function salam(name, age, cb) {
//   console.log("nama " + name);
//   cb(age);
// }

// function sayHi(age) {
//   console.log("umur " + age);
// }

// // salam("lili", 12, sayHi);

// function great(name, callback) {
//     console.log(`haloww nama saya ${name}`);

//     callback;
// }

// function hiYo(age) {
//     console.log(`hii yoooo ${age}`);
// }

// great("lili", hiYo(10));

function async1(callback) {
  setTimeout(() => {
    console.log("callback 1");
    callback();
  }, 1000);
}

function async2(callback) {
  setTimeout(() => {
    console.log("callback 2");
    callback();
  }, 1000);
}

function async3() {
  setTimeout(() => {
    console.log("callback 3");
  }, 1000);
}

// async1();
// async2();
// async3();

// async1(() => {
//   async2(() => {
//     async3(() => {
//       console.log("ini callback hell");
//     });
//   });
// });

// promise
// async1()
//   .then(async2)
//   .then(async3)
//   .then(() => {
//     console.log("lala");
//   });

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);

// async await

async function getData() {
  try {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getData()