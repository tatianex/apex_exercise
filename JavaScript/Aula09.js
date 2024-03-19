
const weekday = prompt("Digite o dia da semana ");

switch (weekday) {
    case "Domingo":
        day = console.log("Domingo");
        break;
    case "Segunda":
        day = console.log("Segunda");
        break;
    case "Terça":
        day = console.log("Terça");
        break;
    case "Quarta":
        day = console.log("Quarta");
        break;
    case "Quinta":
        day = console.log("Quinta");
        break;
    case "Sexta":
        day = console.log("Sexta");
        break;
    case "Sábado":
        day = console.log("Sábado");
}


switch (new Date().getDay()) {
    case 6:
        text = console.log("Today is Saturday");
        break;
    case 0:
        text = console.log("Today is Sunday");
        break;
    default:
        text = console.log("Looking forward to the Weekend");
}


// In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:
switch (new Date().getDay()) {
    case 4:
    case 5:
        text = console.log("Soon it is Weekend");
        break;
    case 0:
    case 6:
        text = console.log("It is Weekend");
        break;
    default:
        text = console.log("Looking forward to the Weekend");
}