// data base server
let siswa = {
  name: "lala",
  nilai: 60,

  get ambilNilai() {
    return this.nilai;
  },
  set setNilai(param) {
    this.nilai = param;
  },

  get ambilNama() {
    return this.name;
  },
  //   set setNama(param) {
  //     this.name = param;
  //   },

  setNama: function (param) {
    this.name = param;
  },

  get nilaiName() {
    return `${this.nilai} ${this.name}`;
  },
};

// proses di client
// siswa.nilai = 90;

// siswa.setNama("tono");
// siswa.setNama = "tono";
console.log(siswa.nilaiName);
