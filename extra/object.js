function Siswa(nama, kelas) {
  this.nama = nama;
  this.kelas = kelas;
  this.showSiswa = function () {
    console.log(`Nama: ${this.nama}, Kelas: ${this.kelas}`);
  };
}

const siswa1 = new Siswa("lala", "3A");
const siswa2 = new Siswa("Tono", "2C");

