/* Exercício 1 -  Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o 
valor seja inválido e continue pedindo até que o usuário informe um valor válido.*/
// function nota() {
//     const aNum = document.getElementById('anum').value;
//     if (aNum >= 0 && aNum <= 10) {
//         document.getElementById('resposta1').innerHTML = "Nota registrada = " + aNum;
//     } else {
//         document.getElementById('resposta1').innerHTML = "A nota registrada deve ser de 0 a 10." + "<br>" + "Digite uma nota Válida ";
//     }
// }

/* Exercício 2 - . Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual 
ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.*/

/* Exercício 13 - Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro 
número elevado ao segundo número. Não utilize a função de potência da linguagem. */

/*Exercício 14 - A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um 
programa capaz de gerar a série até o n−ésimo termo.*/


function fibonacci() {
    let termo1 = 1;
    let termo2 = 1;
    let termo3 = termo1 + termo2;
    let enezimo = document.getElementById("14num").value;                                                                     
    if (enezimo == 1) {
        termo1 = termo1.toString()
        console.log(termo1);
        document.getElementById("resultado14").innerHTML = termo1;
    }
    if (enezimo == 2) {
        termo1 = termo1.toString()
        termo2 = termo2.toString()
        console.log(termo1 + " " +termo2);
        document.getElementById("resultado14").innerHTML = termo1 + ", " +termo2;
    }
    if (enezimo == 3) {
        termo1 = termo1.toString()
        termo2 = termo2.toString()
        termo3 = termo3.toString()
        console.log(termo1 + " " + termo2 + " " + termo3);
        document.getElementById("resultado14").innerHTML = termo1 + ", " + termo2 + ", " + termo3;
    }
    if (enezimo > 3) {
        const resultado14 = [termo1, termo2, termo3]
        for (i = 3; i < enezimo; i++) {
            termo1 = termo2
            termo2 = termo3;
            termo3 = termo1 + termo2;
            resultado14.push(termo3);
            
            
            console.log(termo3);
            document.getElementById("resultado14").innerHTML = resultado14;
        }
    }  
}
    
// let resultado = fibonacci()
// document.getElementById('resposta14').value = resultado;
// console.log(resultado)

// Fn = fn-1 + Fn-2

/*function numExpoente(num1, num2){

    let base = parseInt(document.getElementById(num1).value);
    let expoente = parseInt(document.getElementById(num2).value);
    let numF = 1;
  
   for(i=1; i<=expoente; i++){
    numF*= base;
  }
  
    document.getElementById("resultado13").innerHTML = numF;
  
  }*/