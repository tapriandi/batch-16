class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  salam() {
    return `hello my name is ${this.name}, my age is ${this.age}`;
  }
}

//  {
// name: name
// age : age
// }

// const lala = new Person('lala', 20).salam();

// console.log(lala)

function Person2(name, age) {
  this.name = name;
  this.age = age;

  this.salam = () => {
    return `hello my name is ${this.name}, my age is ${this.age}`;
  };
}

console.log(new Person('lala', 21));