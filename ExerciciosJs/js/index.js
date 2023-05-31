// Exercício 1
// let aNum1 = 3
// let aNum2 = 1

// const numero1 = document.getElementById("anum1");
// const numero2 = document.getElementById("anum2");
// const ex1 = document.getElementById("saida1");

// function soma() {
//     return aNum1 + aNum2;
// };

// let resultado1 = soma();

// numero1.innerHTML = aNum1;
// numero2.innerHTML = aNum2;
// ex1.innerHTML = resultado1;
// console.log(resultado1);


// Exercício 2
let bNum = 8;
const bNumOriginal = toString(bNum);

function parouimpar() {
    if (bNum % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let resultado2 = parouimpar();
document.getElementById("bentradahtml").innerHTML = bNumOriginal;
document.getElementById("saida2").innerHTML = resultado2;
console.log(resultado2)


// Exercício 3
// let cStringEntrada = "Eduardo Coelho";

// function contagem3() {
//     return cStringEntrada.length;
// }

// let resultado3 = contagem3();

// document.getElementById("cstring").innerHTML = cStringEntrada;
// document.getElementById("saida3").innerHTML = resultado3;
// console.log(resultado3);


// Exercício 4
// let dStringEntrada = "Eduardo Coelho";

// function inversao() {
//     return dStringEntrada.split("").reverse().join("");
// }

// let resultado4 = inversao();

// document.getElementById("dstring").innerHTML = dStringEntrada;
// document.getElementById("saida4").innerHTML = resultado4;
// console.log(resultado4);


// Exercício 5
// const elistaNumeros = [1, 4, 6, 10, 3, 50];
// const elistaNumerosOriginal = [...elistaNumeros]

// function maiorNumero() {
//     elistaNumeros.sort(function(a, b) {return b-a;});
//     return elistaNumeros[0];
// }

// let resultado5 = maiorNumero();

// document.getElementById("fstring").innerHTML = elistaNumerosOriginal;
// document.getElementById("saida5").innerHTML = resultado5;


// Exercício 6

// const flistaNumeros = [20, 4, 10, 10, 3, 50]
// let soma = 0

// function mediaNumero(i) {
//     for(var i = 0; i < flistaNumeros.length; i++) {
//         soma += flistaNumeros[i];
//     }
//     return soma;
// }

// let resultado6 = mediaNumero();

// const fArray = document.getElementById("farray");

// document.getElementById("fstring").innerHTML = flistaNumeros;
// document.getElementById("saida6").innerHTML = resultado6;
