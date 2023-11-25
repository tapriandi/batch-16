// 1. mostFrequentLargestNumbers[INSTRUCTIONS]
// Anda diminta untuk membuat sebuah function untuk mencari nilai terbesar dan hitung berapa kali muncul dalam deret nilai:

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(
  mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150])
);
//'angka paling besar adalah 135 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''

// 2. Password Generator
// [INSTRUCTIONS] Anda diminta untuk membuat sebuah function untuk mengenkripsi sebuah password dengan ketentuan sebagai berikut:
// - Mengubah hufuf besar menjadi kecil dan sebaliknya - menghilangkan spasi dan menggantinya menjadi ‘&’- setiap bertemu huruf vocal harus diganti dengan huruf selanjutnya(+1) sesuai urutan alfabet
// - membalik urutan huruf
console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'

// 3. naikAngkot [INSTRUCTIONS]
// Anda diminta untuk membuat sebuah function untuk mengubah data dan menghitung ongkos penumpang angkot, berkut ketentuannya:
//  - Rute angkot, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

console.log(
  naikAngkot([
    ["Melati", "B", "F"],
    ["Herman", "C", "D"],
  ])
);
// [ { penumpang: 'Melati', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Herman', naikDari: 'C', tujuan: 'D', bayar: 2000 } ]
console.log(
  naikAngkot([
    ["Lala", "A", "D"],
    ["Andre", "A", "F"],
    ["Saeful", "B", "F"],
  ])
);
// [ { penumpang: 'Lala', naikDari: 'A', tujuan: 'D', bayar: 6000 },
//   { penumpang: 'Andre', naikDari: 'A', tujuan: 'F', bayar: 10000 },
//   { penumpang: 'Saeful', naikDari: 'B', tujuan: 'F', bayar: 8000 } ]
console.log(naikAngkot([])); //[]

// 4. shoppingTime[INSTRUCTIONS]Anda diminta untuk membuat sebuah function untuk menghitung berapa banyak yang bisa dibelanjakan dari saldo tersebutketentuan sebagai berikut:
// - Toko Makmur sedang melakukan SALE untuk beberapa barang, yaitu:
// // Gula Pasir seharga 15000
// // Beras seharga 12000
// // Mie Instan seharga 2500
// // Minyak Goreng seharga 18500
// // Telor Ayam seharga 24600
// - output berupa object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.
// - Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja"
// - Jika uang yang dimiliki kurang dari 2500 maka tampilkan "Mohon maaf, uang tidak cukup"
// - Member yang berbelanja di toko Makmur akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.

// TEST CASES
console.log(shoppingTime("12kTsasdAl", 75000));
//{ memberId: 12kTsasdAl,
// money: 75000,
// listPurchased:
//  [ 'Telor Ayam',
//    'Minyak Goreng',
//    'Gula Pasir',
//    'Beras',
//    'Mie Instan' ],
// changeMoney: 2400 }
console.log(shoppingTime("13KasdfG3D", 30000));
//{ memberId: '13KasdfG3D',
// money: 30000,
// listPurchased:
//  [ 'Telor Ayam', ‘Mie Ayam’ ],
// changeMoney: 2900 }
console.log(shoppingTime("", 25700)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime("234JdRxa53", 1500)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); //Mohon maaf, toko X hanya berlaku untuk member saja

// 5. graduates[INSTRUCTIONS]Anda diminta untuk membuat sebuah function untuk menentukan dan mengelompokan kelulusan, dengan ketentuan sebagai berikut
// - hasil output berupa array of object
// - dikempokan berdasarkan kelas
// - data yang ditampilkan yang memiliki nilai minimal 75
// - jika data tidak ada, maka return object kosong

// TEST CASE
console.log(
  graduates([
    { name: "Luffi", score: 90, class: "2A" },
    { name: "Sanji", score: 85, class: "2C" },
    { name: "Zoro", score: 74, class: "2A" },
    { name: "Usop", score: 78, class: "2C" },
  ])
);
//OUTPUT
// { 2A: [  { name: 'Luffi', score: 90 } ],
//   2C: [  { name: 'Sanji' , score: 85 }, { name: 'Usop', score: 78 } ] }
console.log(
  graduates([
    { name: "Naruto", score: 100, class: "ninja" },
    { name: "Sarada", score: 76, class: "berkebun" },
    { name: "Sasuke", score: 92, class: "ninja" },
    { name: "Lee", score: 71, class: "olahraga" },
    { name: "Shikamaru", score: 80, class: "catur" },
  ])
);
//OUTPUT
// { ninja: [ { name: 'Naruto', score: 100 }, { name: 'Sasuke', score: 92 }  ],
//   olahraga: [ { name: 'Sarada', score: 76 }, ],
//   catur: [ { name: 'Shikamaru', score: 80 } ]
// }

console.log(graduates([]));
//OUTPUT
//{}
