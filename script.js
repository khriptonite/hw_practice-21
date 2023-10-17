// ==================================

function getFibonacci(num) {
  let x = 0;
  let y = 1;
  let z;
  for (i = 1; i <= num; i++) {
    console.log(x);
    z = x + y;
    x = y;
    y = z;
  }
}

getFibonacci(10);

// ==================================

const greet = function (arg, arg2) {
  return `${arg}, my name is ${this.name} ${this.surname}, and I'm ${this.age} years old${arg2}`;
};

const pers = {
  name: "Giovanni",
  surname: "Piccolo",
  age: 21,
  greet: greet,
};

const pers2 = {
  name: "Ignacio",
  surname: "Salamanca",
  age: 45,
  greet: greet,
};

const pers3 = {
  name: "Dominic",
  surname: "Toretto",
  age: 40,
  greet: greet,
};

const withBind = greet.bind(pers2);

console.log(pers.greet("Hi", "!"));
console.log(pers2.greet("Hola", "!"));
console.log(pers3.greet("Sup", "!"));
console.log(pers3.greet.call(pers, "Hey", "!"));
console.log(pers2.greet.apply(pers3, ["Yo", "!"]));
console.log(withBind("Buenas dias", " y quiero una cerveza"));
