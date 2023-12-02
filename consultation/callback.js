// Callback adalah sebuah fungsi yang disampaikan sebagai argumen ke fungsi lain dan dijalankan setelah fungsi yang diberikan selesai dieksekusi. Fungsi yang menerima callback disebut higher-order function.

function fetchData(callback) {
  // Proses pengambilan data (mungkin asinkron)
  const data = "Data yang diambil";

  // Memanggil callback setelah data diambil
  callback(data);
}

function processData(data) {
  console.log("Data yang diproses:", data);
}

// Memanggil fetchData dengan callback processData
fetchData(processData);

/// ----------
function queryDatabase(query, callback) {
  // Proses kueri ke basis data (misalnya, menggunakan AJAX)
  const result = performQuery(query);

  // Memanggil callback setelah kueri selesai
  callback(result);
}

function displayResult(result) {
  console.log("Hasil kueri:", result);
}

// Memanggil queryDatabase dengan callback displayResult
queryDatabase("SELECT * FROM users", displayResult);

// --------
readFile("file1.txt", function (err, data1) {
  if (err) throw err;
  readFile("file2.txt", function (err, data2) {
    if (err) throw err;
    readFile("file3.txt", function (err, data3) {
      if (err) throw err;
      // Proses data1, data2, dan data3
    });
  });
});
