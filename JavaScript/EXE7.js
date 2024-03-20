// EXE7

// trazer os seguintes dados de 5 usuarios

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
// UTILIZAR O FOR NA ATIVIDADE
// E FAZER UM ARRAY

// DEPOIS FAZER UMA SAUDACAO
// EX:  seu nome é lucas... sua idade.. seu cpf.. sua conta...

const firstName = [];
const lastName = [];
const cpf = [];
const city = [];
const bankName = [];
const salary = [];

for (let i = 0; i < 5; i++) {
  let totalSalary = 0;
  let media = 0;
  salary.push();

  const nameInput = prompt("Digite o seu nome: ");
  firstName.push(nameInput);
  const lastNameInput = prompt("Digite o seu sobrenome: ");
  lastName.push(lastNameInput);
  const cpfInput = prompt("Digite o seu CPF: ");
  cpf.push(cpfInput);
  const cityInput = prompt("Digite a sua cidade: ");
  city.push(cityInput);
  const bankNameInput = prompt("Digite o nome da sua instituição financeira: ");
  bankName.push(bankNameInput);
  const salaryInput = parseInt(prompt("Digite seu salário: "));
  salary.push(salaryInput);

  if (salary[i] > 0 && salary[i] < 1413) {
    console.log(
      `Ola, ${firstName[i]} ${lastName[i]}! 
      Sua cidade é ${city[i]},
      Seu CPF é ${cpf[i]},
      seu banco é ${bankName[i]} 
      e seu salário é ${salary[i]}, 
      Você recebe um salário mínimo ${salary[i]}
    `
    );
  } else if (salary[i] < 7061) {
    console.log(
      `Ola, ${firstName[i]} ${lastName[i]}! 
      Sua cidade é ${city[i]},
      Seu CPF é ${cpf[i]},
      seu banco é ${bankName[i]} 
      e seu salário é ${salary[i]}, 
      Você recebe ${salary[i]}, menos que 5 salarios mínimos e você pertence a classe média`
    );
  } else if (salary[i] < 14130) {
    console.log(
      `Ola, ${firstName[i]} ${lastName[i]}! 
      Sua cidade é ${city[i]},
      Seu CPF é ${cpf[i]},
      seu banco é ${bankName[i]} 
      e seu salário é ${salary[i]}, 
      Você recebe ${salary[i]}, entre 5 e 10 salários mínimos é rico`
    );
  } else if (salary[i] < 999_999) {
    console.log(`
    Ola, ${firstName[i]} ${lastName[i]}! 
    Sua cidade é ${city[i]},
    Seu CPF é ${cpf[i]},
    seu banco é ${bankName[i]} 
    e seu salário é ${salary[i]}, 
    Você tem renda de ${salary[i]} e você é bem de vida`);
  } else if (salary[i] > 1_000_000) {
    console.log(
      `Ola, ${firstName[i]} ${lastName[i]}! 
      Sua cidade é ${city[i]},
      Seu CPF é ${cpf[i]},
      seu banco é ${bankName[i]} 
      e seu salário é ${salary[i]}, 
      Você tem renda de ${salary[i]} e você é milionário`
    );
  } else {
    console.log(`Seu salário ${salary[i]} é um valor inválido`);
  }

  media = totalSalary / salary.length;
  console.log(media);
}