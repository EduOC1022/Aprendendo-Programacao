// Definição das variáveis que serão utilizadas

// Ordem em que a máquina vai acender as luzes
let order = [];

// ordem que o jogador vai apertar os botões
let playerOrder = [];

// Acão de piscar a luz
let piscar;

// Contador de turnos
let turno;

// Booleano que diz se o jogados acertou ou não a ordem dos botões
let good;

// Booleano que diz se é a vez da máquina ou do jogador acender as luzes
let compTurn;

// Intervalo de tempo entre o acpagr de uma luz e o acender da próxima
let idIntervalo;

// Fala se o botão Strict está ligado ou não
let strict = false;

// Básicamente vai dizer que quando o link do som for solicitado o som vai tocar
let som = true;

// Fala se o botão Power foi ligado ou não
let on = false;

// Vai dizer se o jogador acertou todas as luzes e ganhou o jogo ou não
let win;


// Aqui estão todas as constantes que servem para representar elementos do HTML no Javascript
/*
"const" é o comando utilizado para definir as constantes.
o que vem apo´s é o nome dado a constante.
"document.querySelector()"diz para a máquina que tipo de conteúdo ela vai resgatar do html.
Nesses casos todos são IDs.
*/
const contadorTurno = document.querySelector("#turno");
const superiorEsquerdo = document.querySelector("#superior-esquerdo");
const superiorDireito = document.querySelector("#superior-direito");
const inferiorEsquerdo = document.querySelector("#inferior-esquerdo");
const inferiorDireito = document.querySelector("#inferior-direito");
const botaoStrict = document.querySelector("#strict");
const botaoOn = document.querySelector("#on");
const botaoStart = document.querySelector("#start");

// A partir daqui serão adicionados os eventos para que o jogo rode
/*
1 - referenciar uma constante criada anteriormente;
2 - "".addEventListener()" serve para adicionar um evento que vai fazer com 
    que o script "escute" o que acontece com os botões;
3 - "click" é o nome dado ao evento que o script vai "escutar";
4 - "(event) => {}" é como se referencia o evento;
*/


/* 
Esse evento diz: se o valor do botão strict for true (se ele estiver selecionado),
a variavel strict vai receber o valor true. Se o valor do botão for false, ovalor da variável 
também será.
*/
botaoStrict.addEventListener("click", (event) => {
    if (botaoStrict.checked == true) {
        strict = true;
    } else {strict = false;}
});


/* 
Esse evento diz: se o valor do botão Power for true (se ele estiver selecionado),
 a variavel on vai receber o valor true e no HTML com a constante contadorTurno
 vai aparecer a string que está escrita entre aspas. Se o valor do botão for false,
 o valor da variável também será, contador de turno ficará em branco, vai rodar a 
 função "clearColor()" e a "clearInterval(idIntervalo)". A primeira apagará todas
 as luzes que estiverem acesas e a segunda vai zerar o intevalo de tempo entre uma
 e outra
*/
botaoOn.addEventListener("click", (event) => {
    if (botaoOn.checked == true) {
        on = true;
        contadorTurno.innerHTML = "-"
    } else {
        on = false;
        contadorTurno.innerHTML = "";
        clearColor();
        clearInterval(idIntervalo);
    }
});

botaoStart.addEventListener("click", (event) => {
    if (on || win) {

    }
});