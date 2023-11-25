// 1. MajoritySweeper [INSTRUCTIONS]
// MajoritySweeper adalah function yang dibuat untuk mengeliminasi nilai array yang
// sering muncul (mayoritas) dari daftar nilai array
// console.log(MajoritySweeper([9, 1, 1, 1, 1, 1, 3, 3, 4, 2, 5, 5, 5])); // [ 9, 3, 3, 4, 2, 5, 5, 5 ]
// console.log(MajoritySweeper([22, 22, 100, 100, 100, 2000])); // [ 22, 22, 2000 ]
// console.log(MajoritySweeper([2, 2])); // []
// console.log(MajoritySweeper([4, 4, 4, 1, 1, 1, 2, 2])); // [ 1, 1, 1, 2, 2 ]

// 2. PerkalianUnik [INSTRUCTIONS]
// PerkalianUnik adalah function yang dibuat untuk mengkalikan semua nilai array kecuali dirinya sendiri
// TEST CASES
// console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
// console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
// console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
// console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
// console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]

// 3. AngkaPalindrome [INSTRUCTIONS]
// AngkaPalindrome adalah function yang dibuat untuk mencetak angka yang memenuhi kriteria palindrome. Jika nilai yang diinputkan bukan palindrome maka akan mencetak angka baru yang sesuai dengan cara ditambahkan satu per satu  console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001

// 4. MengelompokkanAngka [INSTRUCTIONS]
// MengelompokkanAngka adalah function yang dibuat untuk mengelompokan angka menjadi 3 kelompok. kelompok-1 adalah angka yang bisa dibagi 2, kelompok ke-2 adalah bilangan prima dan kelompok ke-3 adalah bilangan yang bisa dibagi 3

// TEST CASES
// console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
// console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
// console.log(mengelompokkanAngka([])); // [ [], [], [] ]

// 5. PrintDataSiswa [INSTRUCTIONS]
// PrintDataSiswa adalah function yang dibuat untuk menampilkan data siswa sesuai dengan output yang ditentukan

// const data = {
//   students: [
//     ["0001", "Ade Alamsyah ", "Jakarta", "21/05/2000", ["Membaca", "melukis", "menari"]],
//     ["0002", "Roman Alamsyah ", "Bandung", "15/01/1996", "Sepak bola"],
//     ["0003", "Ira Alamsyah ", "Bandar Lampung", "01/08/1999", ["Memasak", "berkebun"]],
//   ],
//   total: 3,
// };

// for (let i = 0; i < data.students.length; i++) {
//   console.log(data.students[i])  
// }


// OUTPUT
// # Siswa 1
//  - no: 0001
//  - nama: Ade Alamsyah
//  - tempat, tanggal lahir: Jakarta, 21 Mei 2000"
//  - hobi: membaca, melukis, menari

//  # Siswa 2
//  - no: 0001
//  - nama: Roman Alamsyah
//  - tempat, tanggal lahir: Bandung, 15 Januari 2000"
//  - hobi: Sepak bola

// # Siswa 3
//  - no: 0001
//  - nama: Ira Alamsyah
//  - tempat, tanggal lahir: Bandar Lampung, 21 Agustus 2000"
//  - hobi: Memasak, berkebun

