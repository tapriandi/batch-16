// non - primitif

let object = {
  nama: "lili",
  kelas: "1A",
  nilai: "80",
  array: [1, 2, 3, 4, 5],
};

let array = ["pisang", "mangga", "jeruk", object];

// console.log(array[2]);
console.log("===>", array[3].nama);

// ---------  yang punya .length itu hanya array ------

// function nameFunc() {
//     console.log('lala')
// }
// nameFunc();

let obj = {
  hitung: function (angka1, angka2) {
    console.log(angka1 + angka2);
  },
};

// case
// let siswa = {
//     nama: "lili",
//     kelas: "1A",
//     nilai: "80",
// }
// output:
// halo nama saya lili, saya ada di kelas 1A dan saya dapat nilai 80

let siswa = {
  nama: "lili",
  kelas: "1A",
  nilai: "80",
  //   umur: 20,
  //   halo: function() {
  //     console.log('halo nama saya '+ this.nama + ', saya ada di kelas '+ this.kelas + ' dan saya dapat nilai '+ this.nilai)
  //   }
};

// console.log('halo nama saya ' + siswa.nama + `,  saya ada di kelas` + siswa.kelas + `dan saya dapat milai ` + siswa.nilai);

let kalimat = `halo nama saya ${siswa.nama}, saya ada di kelas ${siswa.kelas} dan saya dapat nilai ${siswa.nilai}`;

// console.log(kalimat);
// siswa.halo();

// siswa.nama = 'tono';
// siswa.umur = 20;

siswa.halo = function () {
  console.log(
    "halo nama saya " +
      this.nama +
      ", saya ada di kelas " +
      this.kelas +
      " dan saya dapat nilai " +
      this.nilai
  );
};

console.log({ ...siswa, umur: 20 });
