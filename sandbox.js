const num = [1, 5, 6, 2, 7, 9, 10];
const string = "ini ibu budi";

const i1 = num.indexOf(7); // cari index
const i2 = num.find((a) => a > 1); // cari value berdasarkan kondisi
const i3 = num.findIndex((a) => a > 5); // cari index berdasarkan kondisi
const i4 = num.includes(10); // return boolean
const i5 = num.filter((a) => a > 8);
// const i6 = num.reverse();

const i7 = num.map((item, index) => {
  console.log("ini item ke: ", item, index);
});

const div = document.createElement("<div>");
// temp loop <p>value</p>

div.append()