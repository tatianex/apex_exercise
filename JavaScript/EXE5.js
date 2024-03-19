// EXE%

/*
Fazer uma lista - Array com os 10 nomes de usuários
e fazendo a impressao de todos 
colocar mais um usario utilizando o push
e retirando um usuario usando o pop
*/
const myClassmates = [];

for (let i = 0; i < 10; i++) {
    const nameInput = prompt( "Digite o seu nome: ");
    myClassmates.push(nameInput);
}

myClassmates.push("Tatiane");
console.log`${myClassmates}`

delete myClassmates[0];
console.log`${myClassmates}`
