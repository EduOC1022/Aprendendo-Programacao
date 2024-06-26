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
let turnoMaquina;

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
4 - "(event) => {}" diz o que acontecerá durante o evento.
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
 e outra (nesse momento o intervalo ainda não foi definido)
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


/*
"on || win" é uma forma "encolhida" de falar: if on = true or win = true, then...
A função play() não foi definida nesse momento.
"(event) => {}" é chamada função arrow. É uma das formas possíveis de se definir 
uma função.
*/
botaoStart.addEventListener("click", (event) => {
    if (on || win) {
        play();
    }
});

function play() {
    /* Faz com que o valor de win seja false e portanto, faz com que o evento
    acima pare de aconteccer. */
    win = false;
    /* Faz com que a variável volte a ser uma array vazia, pois nesse momento 
    o jogo está recomeçando e não há uma sequência definida */
    order = [];
    /* Faz com que a variável volte a ser uma array vazia, pois nesse momento 
    o jogador está recomeçando e não selecionou nenhum botão ainda */
    playerOrder = [];
    /* Faz com que as luzes parem de piscar */
    piscar = 0;
    /* Zera o intervalo entre uma luz e outra */
    idIntervalo = 0;
    /* Muda o número do turno para 1 */
    turno = 1;
    /* Faz o mostrador de turnos trocar a string pelo número 1 */
    contadorTurno.innerHTML = 1;
    /* Diz que o jogador não errou ainda */
    good = true;
    /* Faz com que a máquina escolha os números 1, 2, 3 ou 4 até 20 vezes 
    e que a variável order receba esse número*/
    for (var i = 0; i < 20; i++) {
        order.push(Math.floor(Math.random() * 4) +1);
    }
    /* Diz que o é a vez da máquina escolher a sequência de cores que o 
    jogador deve repetir */
    turnoMaquina = true;
    /* Define um intervalo de tempo em que a função turno jogo irá rodar.
    basicamente, ela que inicia o jogo. Ela irá parar quando a função 
    idIntervalo tiver o valor falso */
    idIntervalo = setInterval(turnoJogo, 800)
}


// Define quando termina a vez da máquina "escolher" a sequência de cores.
function turnoJogo() {
    // Para que o jogador não consiga clicar enquanto aparece a ordem
    on = false;
    /* Se o número de luzes que acenderam for igual o número do turno em que 
    o jogo está (o turno da máquina acabou)... */
    if (piscar==turno) {
        /* fará com que pare de repetir o código anterior */
        clearInterval(idIntervalo);
        /* Faz com que a máquina pare de escolher a sequência de cores */
        turnoMaquina = false;
        /* Apaga as luzes que estão acesas. Neste momento ainda não foi 
        definida */
        clearColor();
        /* Diz que é a vez do jogador. Faz com que a máquina pare de 
        escolher as cores e permite o jogador clicar nas cores */
        on = true;
    }
    
    // Se turnoMaquina = true, ...
    if (turnoMaquina) {
        /* "Apaga" as luzes que estão acesas. Neste momento ainda não foi 
        definida */
        clearColor();
        /* Um intervalo de tempo que define que a cada 200 irá rodar o evento abaixo novamente. 
        Se o "primeiro número a array" (Array = order / piscar é um número entre 1 e 4) for igual 
        a um dos números irá rodar a função específica. Nesse ponto as funções ainda não foram
        definidas*/
        setTimeout(() => {
            if(order[piscar] == 1) um();
            if(order[piscar] == 2) dois();
            if(order[piscar] == 3) tres();
            if(order[piscar] == 4) quatro();
            piscar++;
        }, 200)
    }
}

/* Os 4 codigos abaixo são as definições das funções utilizadas na função anterior.
Cada uma "acende uma das luzes" do jogo*/



function um() {
    /* Chama a váriavel som e diz que se ela ocorrer uma outra variável "audio"
    será criada e vai rodar com o comando (audio.play)*/
    if (som) {
        let audio = document.getElementById("som1");
        audio.play();
    }
    som = true;
    // Faz com que troque a cor do respectivo botão. Dando a aparência de que piscou.
    superiorEsquerdo.style.backgroundColor = "lightgreen";
}
function dois() {
    /* Chama a váriavel som e diz que se ela ocorrer uma outra variável "audio"
    será criada e vai rodar com o comando (audio.play)*/
    if (som) {
        let audio = document.getElementById("som2");
        audio.play();
    }
    som = true;
    // Faz com que troque a cor do respectivo botão. Dando a aparência de que piscou.
    superiorDireito.style.backgroundColor = "tomato";
}
function tres() {
    /* Chama a váriavel som e diz que se ela ocorrer uma outra variável "audio"
    será criada e vai rodar com o comando (audio.play)*/
    if (som) {
        let audio = document.getElementById("som3");
        audio.play();
    }
    som = true;
    // Faz com que troque a cor do respectivo botão. Dando a aparência de que piscou.
    inferiorEsquerdo.style.backgroundColor = "yellow";
}

function quatro() {
    /* Chama a váriavel som e diz que se ela ocorrer uma outra variável "audio"
    será criada e vai rodar com o comando (audio.play)*/
    if (som) {
        let audio = document.getElementById("som4");
        audio.play();
    }
    som = true;
    // Faz com que troque a cor do respectivo botão. Dando a aparência de que piscou.
    inferiorDireito.style.backgroundColor = "lightskyblue";
}

/*Essa função faz com que as cores de fundo dos botões retornem às cores originais
do html*/
function clearColor() {
    superiorEsquerdo.style.backgroundColor = "darkgreen";
    superiorDireito.style.backgroundColor = "darkred";
    inferiorEsquerdo.style.backgroundColor = "goldenrod";
    inferiorDireito.style.backgroundColor = "darkblue";
}

/* Faz com que todas as luzer "pisquem ao mesmo tempo"*/
function piscarLuz() {
    superiorEsquerdo.style.backgroundColor = "lightgreen";
    superiorDireito.style.backgroundColor = "tomato";
    inferiorEsquerdo.style.backgroundColor = "yellow";
    inferiorDireito.style.backgroundColor = "lightskyblue"; 
}

/*Os comandos a seguir servem para representar a vez do jogador. São adicionados os
eventos de click e caso o jogador não tenha vencido, as luzes se apagam logo após
o click*/
superiorEsquerdo.addEventListener("click", (event) => {
    /* Se o jogador clicar, ou seja, se for o turno do jogador e o botão for clicado
    o primeiro elemento do array playerOrder vai ser um (playerOrder.push(1)).*/
    if (on) {
        playerOrder.push(1);
        /*Variável que confirmará se o jogador clicou na sequência certa ou não.
        Neste momento ainda não foi definida*/
        check();
        /*Acionará a função um() definida anteriormente*/
        um();
        /*Se win = false, define uma "contagem requeciva" para "apagar" a luz*/
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

superiorDireito.addEventListener("click", (event) => {
    /* Se o jogador clicar, ou seja, se for o turno do jogador e o botão for clicado
    o primeiro elemento do array playerOrder vai ser um (playerOrder.push(1)).*/
    if (on) {
        playerOrder.push(2);
        /*Variável que confirmará se o jogador clicou na sequência certa ou não.
        Neste momento ainda não foi definida*/
        check();
        /*Acionará a função um() definida anteriormente*/
        dois();
        /*Se win = false, define uma "contagem requeciva" para "apagar" a luz*/
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

inferiorEsquerdo.addEventListener("click", (event) => {
    /* Se o jogador clicar, ou seja, se for o turno do jogador e o botão for clicado
    o primeiro elemento do array playerOrder vai ser um (playerOrder.push(1)).*/
    if (on) {
        playerOrder.push(3);
        /*Variável que confirmará se o jogador clicou na sequência certa ou não.
        Neste momento ainda não foi definida*/
        check();
        /*Acionará a função um() definida anteriormente*/
        tres();
        /*Se win = false, define uma "contagem requeciva" para "apagar" a luz*/
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

inferiorDireito.addEventListener("click", (event) => {
    /* Se o jogador clicar, ou seja, se for o turno do jogador e o botão for clicado
    o primeiro elemento do array playerOrder vai ser um (playerOrder.push(1)).*/
    if (on) {
        playerOrder.push(4);
        /*Variável que confirmará se o jogador clicou na sequência certa ou não.
        Neste momento ainda não foi definida*/
        check();
        /*Acionará a função um() definida anteriormente*/
        quatro();
        /*Se win = false, define uma "contagem requeciva" para "apagar" a luz*/
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300);
        }
    }
})

/*É a função que vai conferir se o jogador acertou ou errou e decidir o que 
acontecerá em seguida*/
function check() {
    /*Se o conteúdo da array do jogador for diferente do da máquina, good = 
    false, ou seja, o jogador errou*/
    if (playerOrder[playerOrder.length -1] !== order[playerOrder.length -1])
    good = false;
    /*Se o conteúdo da array do jogador for igual a 20 e good = true 
    (acertou todos os turnos até 20), a função winGame irá rodar 
    (Ainda não foi definida)*/
    if (playerOrder.length == 20 && good) {
        winGame();
    }
    /*vai definir o que acontece se o jogador errar*/
    if (good == false) {
        // Ainda não definida
        piscarLuz();
        // Trocará a mensagem do contador de turno para ERROU!

        contadorTurno.innerHTML = "NO!";
        /* Define um equeno intervalo de tempo que confere se o botão strict
        estiver ativado, o jogo começará do zero com a função play()*/
        setTimeout(() => {
            if (strict) {
                play();
                /*Caso o botão strict esteja desativado...*/
            } else {
                // A máquina definirá outra sequência
                turnoMaquina = true;
                // As luzer vão resetar
                piscar = 0;
                // o jogador poderá escolher novamente com a array limpa
                playerOrder = [];
                // Como se o jogador não tivesse errado
                good = true;
                /*Define um intervalo até que a máquina entregue outra 
                sequência de cores (para que rode a função turnoJogo)*/
                idIntervalo = setInterval(turnoJogo, 800);
            }
        }, 800);
        // Fará com que não toque nenhum som se o jogador clicar
        som = false;
    }
    /*Caso de o jogador acertar e continuar o jogo (ainda não ganhou)*/
    if (turno == playerOrder.length && good && !win) {
        // O número do turno não aumentará
        turno++;
        // vai limpar as escolhas do turno passado, limpando a array do jogador
        playerOrder = [];
        // A máquina definirá outra sequência
        turnoMaquina = true;
        // As luzer vão resetar
        piscar = 0;
        // O contador de turnos aumentará em um
        contadorTurno.innerHTML = turno;
        // Define quando a máquina terminou de escolhes as cores
        idIntervalo = setInterval(turnoJogo, 800);
    }
}

// Função que aparece quando ganha o jogo
function winGame() {
    // Todas as luzes acendem ao mesmo tempo
    piscarLuz();
    // O contador mostrará a mensagem WIN!
    contadorTurno.innerHTML = "WIN!";
    // O jogador não pode mais clicar nas cores
    on = false;
    // Faz com que o jogo comece novamente.
    win = true;
}
