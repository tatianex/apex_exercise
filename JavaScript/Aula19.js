/**
In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.

JavaScript defines 7 types of primitive data types:

Examples
string
number
boolean
null
undefined
symbol
bigint

*/

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

/*

Map Methods
Method	Description
new Map()	Creates a new Map object
set()	Sets the value for a key in a Map
get()	Gets the value for a key in a Map
clear()	Removes all the elements from a Map
delete()	Removes a Map element specified by a key
has()	Returns true if a key exists in a Map
forEach()	Invokes a callback for each key/value pair in a Map
entries()	Returns an iterator object with the [key, value] pairs in a Map
keys()	Returns an iterator object with the keys in a Map
values()	Returns an iterator object of the values in a Map
Property	Description
size	Returns the number of Map elements

*/

// Create a Map
const fruits2 = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

// PESSOAL SEGUE ABAIXO ALGUNS EXEMPLOS DO "While"
// incluir neste codigo do ultimo Exercicio que fizemos. 

let x = 1;
while (x <= 10) {
  console.log(x);
  x++;
}

let num = 1;
while (num < 10) {
  console.log(num);
  num += 2; // Incrementa o número em 2 a cada iteração
}

const colors = ['red', 'green', 'blue', 'yellow'];
let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

let userInput;
while (true) {
  userInput = prompt('Digite "sair" para terminar:');
  if (userInput.toLowerCase() === 'sair') {
    break; // Sai do loop se a entrada for "sair"
  }
  console.log('Você digitou: ' + userInput);
}