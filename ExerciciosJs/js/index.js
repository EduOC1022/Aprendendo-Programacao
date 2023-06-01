// Exercício 1
// let aNum1 = 0
// let aNum2 = 0

// function soma() {
//     let aNum1 = 14
//     let aNum2 = 12
//     document.getElementById("anum1").innerHTML = aNum1;
//     document.getElementById("anum2").innerHTML = aNum2;
//     return aNum1 + aNum2;
// };

// let resultado1 = soma();

// document.getElementById("saida1").innerHTML = resultado1;
// console.log(resultado1);


// Exercício 2
// let bNum = 0;

// function parouimpar() {
//     let bNum = 20;
//     if (bNum % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }

// let resultado2 = parouimpar();

// document.getElementById("saida2").innerHTML = resultado2;
// console.log(resultado2)


// Exercício 3
// let cStringEntrada = "";

// function contagem3() {
//     let cStringEntrada = "Eduardo Coelho";
//     document.getElementById("cstring").innerHTML = cStringEntrada;
//     return cStringEntrada.length;
// }

// let resultado3 = contagem3();

// document.getElementById("saida3").innerHTML = resultado3;
// console.log(resultado3);


// Exercício 4
// let dStringEntrada = "";

// function inversao() {
//     let dStringEntrada = "Eduardo Coelho";
//     document.getElementById("dstring").innerHTML = dStringEntrada;
//     return dStringEntrada.split("").reverse().join("");
// }

// let resultado4 = inversao();

// document.getElementById("saida4").innerHTML = resultado4;
// console.log(resultado4);


// Exercício 5
// const elistaNumeros = [];

// function maiorNumero() {
//     const elistaNumeros = [1, 4, 6, 10, 3, 50];
//     document.getElementById("fstring").innerHTML = elistaNumeros;
//     elistaNumeros.sort(function(a, b) {return b-a;});
//     return elistaNumeros[0];
// }

// let resultado5 = maiorNumero();

// document.getElementById("saida5").innerHTML = resultado5;


// Exercício 6
const flistaNumeros = [];
let soma = 0;

function mediaNumero(i) {
    const flistaNumeros = [20, 4, 10, 10, 3, 50]
    for(var i = 0; i < flistaNumeros.length; i++) {
        soma += flistaNumeros[i];
    }
    return soma;
}

let resultado6 = mediaNumero();

const fArray = document.getElementById("farray");

document.getElementById("fstring").innerHTML = flistaNumeros;
document.getElementById("saida6").innerHTML = resultado6;


// Exercício 7
const pessoa = {};

function propriedades() {
    const pessoa = {nome:"Eduardo", sobrenome: "Coelho", Idade:"19", cidade:"Antônio Carlos"}
    return pessoa.length 
}

console.log(propriedades());

