// Line comment
/* Block comment

In a programming language, variables are used to store data values.
JavaScript uses the keywords var, let and const to declare variables.
An equal sign is used to assign values to variables.

*/

var n1 = 50;
var n2 = 60;
var soma = n1 + n2;
var subtracao = n1 - n2;
var multiplicacao = n1 * n2;
var divisao = n1 / n2;
var expo = n1 ** n2;
var sobra = n1 % n2;

console.log(soma);
console.log(subtracao);
console.log(multiplicacao);
console.log(divisao);
console.log(expo);
console.log(sobra);

/* 
When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.
*/