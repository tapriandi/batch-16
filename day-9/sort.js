const num = [1, 1000, 300, 100, 10, 20];
const str = ["aa", "a", "pisang", "pasang", "pusing"];
const obj = [
  { name: "lili", age: 11 },
  { name: "lalala", age: 8 },
  { name: "lulu", age: 9 },
];
// pasang, pisang, pasang

const s1 = num.sort((a, b) => a - b);
const s2 = str.sort();
const s3 = obj.sort((a, b) => b.name - a.name);

console.log(s3);

// 1, 10, 100, 1000, 20, 300
