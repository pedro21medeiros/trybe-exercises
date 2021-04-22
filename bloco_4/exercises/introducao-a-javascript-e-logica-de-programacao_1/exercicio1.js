// Exercício 1:

let a = 10;
let b = 5;

console.log("soma: " + (a + b));
console.log("subração: " + (a - b));
console.log("multiplicação: " + (a * b));
console.log("divisão: " + (a / b));
console.log("módulo: " + (a % b));

// Exercício 2:

let c = 1;
let d = 2;
let e = 3;

switch(c > d) {
    case "c é maior": 
    console.log("c é maior");
    break;
    default: 
    console.log("d é maior");
}

// Exercício 3:

let c = 1;
let d = 2;
let e = 3;

if (c > d && c > e) {
    console.log("O maior é C")
} else if (d > c && d > e) {
    console.log("O maior é D")
} else {
    console.log("O maior é E")
}

// Exercício 4:

let numero = 10;

if (numero > 0) {
    console.log("positive")
} else if (numero < 0) {
    console.log("negative")
} else {
    console.log("zero")
}

// Exercício 5:

let up = 60;
let left = 80;
let right = 40;

if ((up + left + right) == 180) {
    console.log("true")
} else {
    console.log("false")
}

// Exercício 6:

let cavalo = "cavalo"

switch(cavalo.toLowerCase()) {
    case "rainha":
        console.log("Anda livremente");
        break;
    case "rei":
        console.log("anda de 1 em 1 em qqr direção");
        break;
    case "torre":
        console.log("anda quantas casas quiser para frente, tras e lados");
        break;
    case "peao":
        console.log("anda 1 pra frente");
        break;
    case "cavalo":
        console.log("anda em L");
        break;
    default:
        console.log("Deu ruim!");
        break;
}