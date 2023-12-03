// // Callback
// function tambah(num1, num2) {
//   return num1 + num2;
// }

// function kurang(num1, num2) {
//   return num1 - num2;
// }

// function render(callback, num1, num2) {
//   console.log("hasil", callback(num1, num2));

// }

// render(kurang, 1, 2);

// async -->
// sync --> linear

// Contoh fungsi yang mengembalikan Promise
function contohAsyncFunction(value) {
  return new Promise((resolve, reject) => {
    // Proses asynchronous di dalam Promise
    setTimeout(() => {
      if (value) {
        resolve("Berhasil: " + value);
      } else {
        reject("Gagal: Nilai tidak ada");
      }
    }, 1000); // Menggunakan setTimeout untuk simulasi operasi asynchronous
  });
}

// Menggunakan Promise dengan then() dan catch()
// contohAsyncFunction("Hello")
//   .then((data) => {
//     return hasil + " lala"; // Output: Berhasil: Hello
//   })
//   .then((hasil) => {
//     return hasil + " lili"; // Output: Berhasil: Hello
//   })
//   .then((hasil) => {
//     console.log(hasil); // Output: Berhasil: Hello
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Menggunakan Promise dengan async/await

fetch("https://dummyjson.com/products/1")
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

async function contohAsyncAwait() {
  try {
    const res = await fetch("https://dummyjson.com/products/1");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

contohAsyncAwait();
