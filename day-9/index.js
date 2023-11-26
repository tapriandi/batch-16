const div = document.createElement("div");
const numbers = [10, 2, 8, 4, 6];
numbers.map((item, index) => {
  let p = document.createElement("p");
  p.innerHTML = "ini adalah item-" + item;
  div.append(p);
});
let app = document.getElementById("app");
app.append(div);
