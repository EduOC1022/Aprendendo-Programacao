// Exercício 1
let anum1 = 3
let anum2 = 12

const numero1 = document.getElementById("anum1");
const numero2 = document.getElementById("anum2");
const ex1 = document.getElementById("saida1");

function soma() {
    return anum1 + anum2;
};

let resultado1 = soma();

numero1.innerHTML = anum1;
numero2.innerHTML = anum2;
ex1.innerHTML = resultado1;
console.log(resultado1);

// Exercício 2
let bnum1 = 8;

const ex2 = document.getElementById("saida2");

function parouimpar() {
    if (bnum1 % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let resultado2 = parouimpar();
ex2.innerHTML = resultado2;
console.log(resultado2)





