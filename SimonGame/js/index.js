// ordem em que a máquina vai acender as luzes
let order = [];
let playerOrder = [];
let piscar;
let turno;
let good;
let compTurn;
let idIntervalo;
let strict = false;
let som = true;
let on = false;
let win;

const contadorTurno = document.querySelector("#turno");
const superiorEsquerdo = document.querySelector("#superior-esquerdo");
const superiorDireito = document.querySelector("#superior-direito");
const inferiorEsquerdo = document.querySelector("#inferior-esquerdo");
const inferiorDireito = document.querySelector("#inferior-direito");
const botaoStrict = document.querySelector("#strict");
const botaoOn = document.querySelector("#on");
const botaoStart = document.querySelector("#start");


botaoStrict.addEventListener("click", (event) => {
    if (botaoStrict.checked == true) {
        strict = true;
    } else {strict = false;}
});

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