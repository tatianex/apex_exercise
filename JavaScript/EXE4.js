// EXE4

// trazer os seguintes dados de 6 usuarios 

// NOME 
// SOBRENOME
// CIDADE 
// CPF 
// NOME DA AGENCIA DE BANCO EX: NUBANK, SANTANDER...
// SALARIO 
// FAZER A SOMA DOS SALDOS SALARIAIS 
// DEPOIS FAZER A DIVISAO POR 6
// E FAZER UMA IF E ELSE COM O VALOR DIVIDIDO DOS SALARIOS..
// SE A PESSSOA É MILHONARIA, RICA, BEM DE VIDA, CLASSE MEDIA E POBRE 

// DEPOIS FAZER UMA SAUDACAO 
// EX:  seu nome é lucas... sua idade.. seu cpf.. sua conta... 

const firstName = [];
const lastName = [];
const city = [];
const cpf = [];
const bankName = [];
const salary = [];

for (let i = 0; i < 7; i++) {
  let totalSalary = 0;
  let media = 0;
  salary.push();

  if (salary[i] > 0 && salary[i] < 1413) {
    console.log(`Você recebe um salário mínimo ${salary}`);
  } else if (salary[i] < 7061) {
    console.log(`Você recebe ${salary}, menos que 5 salarios mínimos e você pertence a classe média`);
  } else if (salary[i] < 14130) {
    console.log(`Você recebe ${salary}, entre 5 e 10 salários mínimos é rico`);
  } else if (salary[i] < 999_999) {
    console.log(`Você tem renda de ${salary} e você é bem de vida`);
  } else if (salary[i] > 1_000_000) {
    console.log(`Você tem renda de ${salary} e você é milionário`);
  } else {
    console.log(`Seu salário ${salary} é um valor inválido`);
  }

  media = totalSalary / salary.length;
  console.log(media);

  for (let i = 0; i < 5; i++) {
    console.log(
      `Ola, ${firstName[i]} ${lastName[i]}! Sua cidade é ${city[i]}, Seu CPF é ${cpf[i]} seu banco é ${bankName[i]} e seu salário é ${salary[i]} \n`
    );
  }
}
