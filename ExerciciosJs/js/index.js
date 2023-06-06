// Exercício 1
let aNum1 = 0
let aNum2 = 0

function soma() {
    let aNum1 = 14
    let aNum2 = 12
    document.getElementById("anum1").innerHTML = aNum1;
    document.getElementById("anum2").innerHTML = aNum2;
    return aNum1 + aNum2;
};

let resultado1 = soma();

document.getElementById("saida1").innerHTML = resultado1;
console.log(resultado1);


// Exercício 2

function parouimpar() {
    let bNum = 20;
    if (bNum % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let resultado2 = parouimpar();

document.getElementById("saida2").innerHTML = resultado2;
console.log(resultado2)


// Exercício 3
let cStringEntrada = "";

function contagem3() {
    let cStringEntrada = "Eduardo Coelho";
    document.getElementById("cstring").innerHTML = cStringEntrada;
    return cStringEntrada.length;
}

let resultado3 = contagem3();

document.getElementById("saida3").innerHTML = resultado3;
console.log(resultado3);


// Exercício 4
let dStringEntrada = "";

function inversao() {
    let dStringEntrada = "Eduardo Coelho";
    document.getElementById("dstring").innerHTML = dStringEntrada;
    return dStringEntrada.split("").reverse().join("");
}

let resultado4 = inversao();

document.getElementById("saida4").innerHTML = resultado4;
console.log(resultado4);


// Exercício 5
const elistaNumeros = [];

function maiorNumero() {
    const elistaNumeros = [1, 4, 6, 10, 3, 50];
    document.getElementById("estring").innerHTML = elistaNumeros;
    elistaNumeros.sort(function(a, b) {return b-a;});
    return elistaNumeros[0];
}

let resultado5 = maiorNumero();

document.getElementById("saida5").innerHTML = resultado5;


// Exercício 6
const flistaNumeros = [];
let soma2 = 0;

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
const pessoa = {};

function propriedades() {
    const pessoa = {nome:"Eduardo", sobrenome: "Coelho", idade:"19", cidade:"Antônio Carlos"};
    document.getElementById("gobjeto").innerHTML = pessoa.nome + " " + pessoa.sobrenome + " " + pessoa.idade + " " + pessoa.cidade;
    let caracteristicas = Object.values(pessoa)
    return caracteristicas.length
}
let resultado7 = propriedades();

document.getElementById("saida7").innerHTML = resultado7;


// Exercício 8
let hNum = 0;

function primo() {
    let hNum = 11;
    document.getElementById("hnum").innerHTML = hNum;
    for (let i = 2; i < hNum; i++) {
        if (hNum % i == 0) {
                    return false;
                } else {
                    return true;
                }
    }
}

let resultado8 = primo();

document.getElementById("saida8").innerHTML = resultado8;
console.log(resultado8);

// Exercício 9
function corte() {
    let iString = ["Eduardo", "19", "Coelho", "Casa"];
    document.getElementById("iarray").innerHTML = iString;
    let result = [];
    for (let i of iString) {
        if (i.length > 5) {
            result.push(i);
        }
    }
    return result.join(", ");
}

document.getElementById("saida9").innerHTML = corte();


// Exercício 10
function corte2() {
    let jString = [2, 4, 5, 7, 10, 1];
    document.getElementById("jarray").innerHTML = jString;
    let result = [];
    for (let j of jString) {
        if (j % 2 == 0) {
            result.push(j);
        }
    }
    return result.join(", ");
}

document.getElementById("saida10").innerHTML = corte2();