// Exercício 1
// function soma() {
//     let aNum1 = parseInt(document.getElementById("anum1").value);
//     let aNum2 = parseInt(document.getElementById("anum2").value);
//     document.getElementById("saida1").innerHTML = aNum1 + aNum2;
//     console.log(aNum1 + aNum2);  
// };

// const botao1 = document.getElementById("ok1");
// botao1.addEventListener("click", () => {
//     let aNum1 = parseInt(document.getElementById("anum1").value);
//     let aNum2 = parseInt(document.getElementById("anum2").value);
//     document.getElementById("saida1").innerHTML = aNum1 + aNum2;
//     console.log(aNum1 + aNum2);
// });


// Exercício 2
// function parouimpar() {
//     let bNum = parseInt(document.getElementById("bnum").value);
//     if (bNum % 2 == 0) {
//         document.getElementById("saida2").innerHTML = "Verdadero";
//         console.log("Verdadero");
//     } else {
//         document.getElementById("saida2").innerHTML = "Falso";
//         console.log("Falso")
//     }
// }

// const botao2 = document.getElementById("ok2");
// botao2.addEventListener("click", () => {
//     let bNum = parseInt(document.getElementById("bnum").value);
//     if (bNum % 2 == 0) {
//         document.getElementById("saida2").innerHTML = "Verdadero";
//         console.log("Verdadero");
//     } else {
//         document.getElementById("saida2").innerHTML = "Falso";
//         console.log("Falso")
//     }
// });


// Exercício 3
// function contagem() {
//     let cString = document.getElementById("cstring").value;
//     document.getElementById("saida3").innerHTML = cString.length;
//     console.log(cString.length);
// }

// const botao3 = document.getElementById("ok3");

// botao3.addEventListener("click", () => {
//     let cString = document.getElementById("cstring").value;
//     document.getElementById("saida3").innerHTML = cString.length;
//     console.log(cString.length);
// });


// Exercício 4
// function inversao() {
//     let dStringEntrada = document.getElementById("dstring").value;
//     document.getElementById("saida4").innerHTML = dStringEntrada.split("").reverse().join("");
//     console.log(dStringEntrada.split("").reverse().join(""));
// }

// const botao4 = document.getElementById("ok3");
// function inversao() {
//     let dStringEntrada = document.getElementById("dstring").value;
//     document.getElementById("saida4").innerHTML = dStringEntrada.split("").reverse().join("");
//     console.log(dStringEntrada.split("").reverse().join(""));
// }


// Exercício 5
// function maiorNumero() {
//     const elistaNumeros = document.getElementById("estring").value.split(" ");
//     elistaNumeros.sort(function(a, b) {return b-a;});
//     document.getElementById("saida5").innerHTML =  elistaNumeros [0];
// }

// const botao5 = document.getElementById("ok5");

// botao5.addEventListener("click", () => {
//     const elistaNumeros = document.getElementById("estring").value.split(" ");
//     elistaNumeros.sort(function(a, b) {return b-a;});
//     document.getElementById("saida5").innerHTML =  elistaNumeros [0];
// });


// Exercício 6

function mediaNumero(i) {
    const flistaNumeros = [5, 10, 5, 5, 10, 10]
    document.getElementById("fstring").innerHTML = flistaNumeros;
    for(var i = 0; i < flistaNumeros.length; i++) {
        soma2 += flistaNumeros[i];
    }

    return soma2 / (flistaNumeros.length);
}

let resultado6 = mediaNumero();

const fArray = document.getElementById("farray");

document.getElementById("saida6").innerHTML = resultado6;



// Exercício 7
// const pessoa = {};

// function propriedades() {
//     const pessoa = {nome:"Eduardo", sobrenome: "Coelho", idade:"19", cidade:"Antônio Carlos"};
//     document.getElementById("gobjeto").innerHTML = pessoa.nome + " " + pessoa.sobrenome + " " + pessoa.idade + " " + pessoa.cidade;
//     let caracteristicas = Object.values(pessoa)
//     return caracteristicas.length
// }
// let resultado7 = propriedades();

// document.getElementById("saida7").innerHTML = resultado7;


// Exercício 8
// let hNum = 0;

// function primo() {
//     let hNum = 11;
//     document.getElementById("hnum").innerHTML = hNum;
//     for (let i = 2; i < hNum; i++) {
//         if (hNum % i == 0) {
//                     return false;
//                 } else {
//                     return true;
//                 }
//     }
// }

// let resultado8 = primo();

// document.getElementById("saida8").innerHTML = resultado8;
// console.log(resultado8);

// Exercício 9
// function corte() {
//     let iString = ["Eduardo", "19", "Coelho", "Casa"];
//     document.getElementById("iarray").innerHTML = iString;
//     let result = [];
//     for (let i of iString) {
//         if (i.length > 5) {
//             result.push(i);
//         }
//     }
//     return result.join(", ");
// }

// document.getElementById("saida9").innerHTML = corte();


// Exercício 10
// function corte2() {
//     let jString = [2, 4, 5, 7, 10, 1];
//     document.getElementById("jarray").innerHTML = jString;
//     let result = [];
//     for (let j of jString) {
//         if (j % 2 == 0) {
//             result.push(j);
//         }
//     }
//     return result.join(", ");
// }

// document.getElementById("saida10").innerHTML = corte2();