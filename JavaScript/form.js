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
let totalSalary = 0;
let media = 0;

for (let i = 0; i < 3; i++) {
  const nameInput = prompt("Digite o seu nome: ");
  firstName.push(nameInput);
  const lastNameInput = prompt("Digite o seu sobrenome: ");
  lastName.push(lastNameInput);
  const cityInput = prompt("Digite a sua cidade: ");
  city.push(cityInput);
  const cpfInput = prompt("Digite seu CPF: ");
  cpf.push(cpfInput);
  const bankNameInput = prompt("Digite o nome da sua instituição financeira: ");
  bankName.push(bankNameInput);
  const salaryInput = parseInt(prompt("Digite seu salário: "));
  salary.push(salaryInput);

  totalSalary += salaryInput

  if (salary[i] > 0 && salary[i] < 1413) {
    console.log(`Você recebe um salário mínimo ${salary[i]}`);
  } else if (salary[i] < 7061) {
    console.log(
      `Você recebe ${salary[i]}, menos que 5 salarios mínimos e você pertence a classe média`
    );
  } else if (salary[i] < 14130) {
    console.log(`Você recebe ${salary[i]}, entre 5 e 10 salários mínimos e é rico`);
  } else if (salary[i] < 999_999) {
    console.log(`Você tem renda de ${salary[i]} e você é bem de vida`);
  } else if (salary[i] > 1_000_000) {
    console.log(`Você tem renda de ${salary[i]} e você é milionário`);
  } else {
    console.log(`Seu salário ${salary[i]} é um valor inválido`);
  }
}

media = totalSalary / salary.length;
console.log(media);

for (let i = 0; i < salary.length; i++) {
  console.log(
    `Ola, ${firstName[i]} ${lastName[i]}! Sua cidade é ${city[i]}, Seu CPF é ${cpf[i]} seu banco é ${bankName[i]} e seu salário é ${salary[i]} \n`
  );
}
