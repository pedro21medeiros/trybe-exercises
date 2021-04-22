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