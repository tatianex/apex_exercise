
/*
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).

Interpolation
Template String provide an easy way to interpolate variables and expressions into strings.
The method is called string interpolation.
The syntax is: ${...}

Template Strings allow multiline strings:
let text =
`The quick
brown fox
jumps over
the lazy dog`;

*/

/*
BOLETIM ESCOLAR

Aprovado com nota A
Aprovado com nota B
Aprovado com nota C
Aprovado com nota D
Reprovado!

Bonus fazer criativo
*/

for (let i = 0; i < 5; i++) {
    const gradeInputs = prompt( "Digite a sua nota A/B/C/D/E/F: ");

    if(grades[i] == "A") {
        console.log(`Você tem a nota máxima ${gradeInputs} e está aprovado(a)`);
    } else if(grades[i] == "B") {
        console.log(`Sua nota ${gradeInputs} é ótima mas pode melhorar`);
    } else if(grades[i] == "C"){
        console.log(`Sua nota ${gradeInputs} é boa mas pode melhorar`);
    } else if(grades[i] == "D") {
        console.log(`Sua nota ${gradeInputs} é ruim e pode melhorar`);
    } else {
        console.log(`REPROVADO`);
    }
}