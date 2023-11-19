// 1. default value
// 2. kondisi loop / stoper
// 3. counting

function cariMean(array) {
    let i = 0;
    let total = 0;
    let hasil = 0;
  
    while (i < array.length) {
      total = total + array[i];
      // i = i + 1
      i++;
    }
  
    hasil = total / array.length;
    let newHasil = Math.ceil(hasil);
  
    return newHasil;
  }
  
  // let test = cariMean([1, 2, 3, 4, 8, 9, 5]);
  // console.log(test);
  
  
  // console.log(test);
  
  // TEST CASES
  // console.log(cariMean([1, 2, 3, 4, 8, 9, 5])); // 5
  // console.log(cariMean([3, 5, 7, 5, 3])); // 5
  // console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  // console.log(cariMean([7, 7, 7, 7, 7])); // 7

  

  

// [INSTRUCTION]

// Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa string.
// Function akan me-return string yang telah bersih dari berbagai simbol, hanya menyisakan a-z dan angka 0-9.


// tolong dilanjutkan ya,
function hapusSimbol(string) {
    let simbol = '$% @#!~+-*=';
    let hasil = '';
    let i = 0;
    let j = 0;


    while(i < string.length) {
        while(j < simbol.length) {
            if(string[i] !== simbol[j]) {
                hasil = hasil + string[i];
            }
            j++;
        }
        i++;
    }


    console.log(hasil);
    // return;
}


// TEST CASE
console.log(hapusSimbol('test%$4aa')); // test4aa
// console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
// console.log(hapusSimbol('ma@#k!an~')); // makan
// console.log(hapusSimbol('coding')); // coding
// console.log(hapusSimbol('1+3-5*2=100')); // 1352100

