const x = 5;
const y = 5;
const z = "5"
const w = 3

// IGUALDADE
if (x == y) {
    console.log(`${x} e ${y} são iguais`);
};

// VALOR E TIPO IGUAIS
if (x === z){
    console.log(`${x} e ${z} tem valores e tipos iguais`);
} else {
    console.log(`${x} e ${z} tem valores e/ou tipos diferentes`);
}

// VALOR E TIPO DIFERENTES
if (x !== z){
    console.log(`${x} e ${z} tem valores e/ou tipos diferentes`);
} else {
    console.log(`${x} e ${z} tem valores iguais`);
}

// DIFERENTES
if (x != w) {
    console.log(`${x} e ${w} tem valores diferentes`);
}

// Maior que
if (x > w) {
    console.log(`${x} é maior que ${w}`);
}

// Menor que
if (w < x) {
    console.log(`${w} é menor que ${x}`);
}

// Maior ou igual
if (x >= w) {
    console.log(`${x} é maior ou igual a ${w}`);
}

// Menor ou igual
if (x <= w) {
    console.log(`${x} é menor ou igual a ${w}`);
}


