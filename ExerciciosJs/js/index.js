// Exercício 1
let aNum1 = 3
let aNum2 = 1

const numero1 = document.getElementById("anum1");
const numero2 = document.getElementById("anum2");
const ex1 = document.getElementById("saida1");

function soma() {
    return aNum1 + aNum2;
};

let resultado1 = soma();

numero1.innerHTML = aNum1;
numero2.innerHTML = aNum2;
ex1.innerHTML = resultado1;
console.log(resultado1);


// Exercício 2
let bNum = 8;

const ex2 = document.getElementById("saida2");

function parouimpar() {
    if (bNum % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let resultado2 = parouimpar();
ex2.innerHTML = resultado2;
console.log(resultado2)


// Exercício 3
let cStringEntrada = "Eduardo Coelho";

const cString = document.getElementById("cstring");
const ex3 = document.getElementById("saida3");

function contagem3() {
    return cStringEntrada.length;
}

let resultado3 = contagem3();
cString.innerHTML = cStringEntrada;
ex3.innerHTML = resultado3;
console.log(resultado3);


// Exercício 4
let dStringEntrada = "Eduardo Coelho";

const ex4 = document.getElementById("saida4");
const dString = document.getElementById("dstring");

function inversao() {
    return dStringEntrada.split("").reverse().join("");
}

let resultado4 = inversao();
dString.innerHTML = dStringEntrada;
ex4.innerHTML = resultado4;
console.log(resultado3);


// Exercício 5

