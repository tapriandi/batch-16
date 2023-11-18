// import { setDate } from "./common.js";
import { data } from "./data.js";

// console.log( setDate('11 sep 2023'))

for (let i = 0; i < data.length; i++) { // 4x
  let temp = "";
  for (let x = 0; x < data[i].hobi.length; x++) { // sebanyak hobi
    temp += data[i].hobi[x] + ' '
  }
  console.log("Hobi: ", temp);
}
