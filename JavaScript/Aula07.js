// const idade1 = 18;

// // IF ELSE
// if (idade1 >= 18) {
//     console.log("Voce é maior de idade")
// } else {
//     console.log("Você ainda é menor de idade")
// }

/*
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
x ** y produces the same result as Math.pow(x,y):
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
 */


/*
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator
*/

/*

The ??= Operator

If the first value is undefined or null, the second value is assigned.
let x;
x ??= 5;

*/

/*
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date
*/

/*
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");
*/

/*
A JavaScript function is a block of code designed to perform a particular task.
A JavaScript function is executed when "something" invokes it (calls it).

function name(parameter1, parameter2, parameter3) {
  // code to be executed
}

Objects are variables too. But objects can contain many values.

// Events
HTML events are "things" that happen to HTML elements.
When JavaScript is used in HTML pages, JavaScript can "react" on these events.
*/

/*
// SCAPE

\b	Backspace
\f	Form Feed
\n	New Line
\r	Carriage Return
\t	Horizontal Tabulator
\v	Vertical Tabulator

ISO 8601 is the international standard for the representation of dates and times.
The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:
const d = new Date("2015-03-25");

*/

/* 
Exercício com IF/ELSE
você é criança 0 > 12
você é adolescente > 12 < 18
você tem 18 anos
você é adulto > 18 < 60
você é idoso > 60 < 100
idade inválida < 0 > 100
*/

/*
ARROW FUNCTIONS

hello = function() {
  return "Hello World!";
}

hello = () => {
  return "Hello World!";
}

It gets shorter! 
If the function has only one statement, and the statement returns a value, 
you can remove the brackets and the return keyword:

hello = () => "Hello World!";

A JavaScript class is not an object.
It is a template for JavaScript objects.
*/

const age = [];

for (let i = 0; i < 5; i++) {
    const ageInput = prompt( "Digite a sua idade: ");
    age.push(ageInput);

    if(age[i] > 0 && age[i] < 12) {
        console.log(`Sua idade é ${ageInput} e você é criança`);
    } else if(age[i] <18) {
        console.log(`Sua idade é ${ageInput} e você é adolescente`);
    } else if(age[i] <60){
        console.log(`Sua idade é ${ageInput} e você é adulto`);
    } else if(age[i] <120) {
        console.log(`Sua idade é ${ageInput} e você é idoso`);
    } else {
        console.log(`Sua idade ${ageInput} é uma idade inválida`);
    }
}

const idade = prompt("idade")
if(idade >= 0, idade <12) {
    console.log("Você é uma criança.");
} else if(idade >= 12, idade < 18) {
    console.log("Você é um adolescente.");
} else if(idade == 18) {
    console.log("Você tem 18 anos");
} else if(idade > 18, idade < 60) {
    console.log("Você é um adulto");
} else if(idade >= 60) {
    console.log("Você é um idoso");
} else {
    console.log("Idade inválida");
}

