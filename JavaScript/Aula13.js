/** 
 * Variáveis declaradas com var tem escopo de função.
 * Isso significa que são visíveis em toda a função,
 * independentemente de onde são declaradas
 */

var one; 

/**
 * Variáveis declaradas com let são acessíveis apenas dentro do bloco em que foram definidas.
 */

if (one) {
    var let;
}

/**
 * const é usado para declarar variáveis cujo valor não deve ser reatribuído após a inicialização.
 */

const name = "Maria da Silva";

// dados sempre terá os mesmos valores
const dados = {
    nome: 'João',
    idade: 25,
    cidade: 'Chuvaville'
};

console.log("Nome: ", dados.nome);
console.log("Idade: ", dados.idade);
console.log("Cidade: ", dados.cidade);

// dicionario pode alterar tanto os valores quanto as propriedades
let dicionario = {
    nome: 'Lucas',
    idade: 23,
    cidade: 'Blumenau'
};

console.log("Nome: ", dicionario.nome);
console.log("Idade: ", dicionario.idade);
console.log("Cidade: ", dicionario.cidade);