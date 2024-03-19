/*
Fazer um levantamento de dados
Trazer soma de salarios de 5 usuarios
os usuários devem ter:

nome
sobrenome
idade
CPF
salario

Fazer a soma dos salarios depois a media
e saudação 

"seu nome é nome sua idades... seu cpf... sua conta..."
*/

const firstName = [];
const lastName = [];
const age = [];
const bankName = [];
const salary = [];
let totalSalary = 0;
let media = 0;
const greeting = "";

for (let i = 0; i < 5; i++) {
    const nameInput = prompt( "Digite o seu nome: ");
    firstName.push(nameInput);
    const lastNameInput = prompt( "Digite o seu sobrenome: ");
    lastName.push(lastNameInput);
    const ageInput = parseInt(prompt("Digite a sua idade: "));
    age.push(ageInput);
    const bankNameInput = (prompt("Digite o nome da sua instituição financeira: "));
    bankName.push(bankNameInput);
    const salaryInput = parseInt(prompt("Digite seu salário: "));
    salary.push(salaryInput);
    
    totalSalary = totalSalary + salary[i];
}

media = (totalSalary / salary.length);
console.log(media);

for (let i = 0; i < 5; i++) {
    console.log(`Ola, ${firstName[i]} ${lastName[i]}! você já tem: ${age[i]} anos. Seu banco é ${bankName[i]} e seu salário é ${salary[i]} \n`);
}



