const R = require("ramda");

// Addition
let f = R.add(5);
console.log(f(6));

//Subtraction
let dec = R.subtract(R.__, R.__); //R.__ is used to stage the parameters i.e. telling that the order of args
let f1 = dec(10);
console.log(f1(6));

//curry
let greet = (greeting, name) => console.log(greeting, name);
greet = R.curry(greet);
let temp = greet("Hello");

temp("Krish");
