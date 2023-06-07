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

/* Exercício 2 - Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual 
ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.*/
// function cadastro(){
//     let usuario = document.getElementById("usuario").value;
//     let senha = document.getElementById("senha").value;
//     if (usuario == senha) {
//         document.getElementById("usuario").value = "";
//         document.getElementById("senha").value = "";
//         document.getElementById("resposta2").innerHTML = "O usuário e a senha não podem ser iguais." + "<br>" + "Tente nevamente";
//         return false
//     } else {
//         document.getElementById("usuario").value = "";
//         document.getElementById("senha").value = "";
//         document.getElementById("resposta2").innerHTML = "Registrado";
//         return true 
//     }
// }


/* Exercício 3 - Faça um programa que leia e valide as seguintes informações: 
a. Nome: maior que 3 caracteres; 
b. Idade: entre 0 e 150; 
c. Salário: maior que zero; 
d. Sexo: 'f' ou 'm'; 
e. Estado Civil: 's', 'c', 'v', 'd';*/
// const nome = document.getElementById('nome').value;
// const idade = document.getElementById('idade').value;
// const salario = document.getElementById('salario').value;
// const sexo = document.getElementById('sexo').value;
// const estadoCivil = document.getElementById('estaocivil').value;

// function validacaogeral() {
//     switch () {

//     }
// }


/* Exercício 13 - Faça um programa que peça dois números, base e expoente, calcule e mostre o primeiro 
número elevado ao segundo número. Não utilize a função de potência da linguagem. */
// function potencia() {
//     let base = document.getElementById("13base").value;
//     let expoente = document.getElementById("13expoente").value;
//     let operador = 1;

//     for (i=1; i<=expoente; i++) {
//         operador = operador * base;
//     }
//     document.getElementById("resposta13").innerHTML = operador;
// }


/*Exercício 14 - A série de Fibonacci é formada pela seqüência 1,1,2,3,5,8,13,21,34,55,... Faça um 
programa capaz de gerar a série até o n−ésimo termo.*/
function fibonacci() {
    let termo1 = 1;
    let termo2 = 1;
    let termox = termo1 + termo2;
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
        document.getElementById("resultado14").innerHTML = termo1 + "<br>" +termo2;
    }
    if (enezimo == 3) {
        termo1 = termo1.toString()
        termo2 = termo2.toString()
        termox = termox.toString()
        console.log(termo1 + " " + termo2 + " " + termox);
        document.getElementById("resultado14").innerHTML = termo1 + "<br>" + termo2 + "<br>" + termox;
    }
    if (enezimo > 3) {
        const resultado14 = [termo1, termo2, termox]
        for (i = 3; i < enezimo; i++) {
            termo1 = termo2
            termo2 = termox;
            termox = termo1 + termo2;
            resultado14.push(termox);
            
            
            console.log(termox);
            document.getElementById("resultado14").innerHTML = resultado14.join("<br>");
        }
    }  
}

