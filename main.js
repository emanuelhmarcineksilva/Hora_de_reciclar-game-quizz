const perguntasPlayArrai = [
  `<div class="quizzCaixa">
            <h2>Em qual lixeira deve ser descartado o item a baixo?</h2>
            <div class="item-lixo"><img src="latinha.png" alt="Latinha" class="img-item-lixo"></div>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()"><img src="azul.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta acertou" onclick="acertou()"><img src="amarela.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="verde.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="vermelha.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="cinza.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="marrom.png" alt="" class="lixeira-resposta" id="marrom-lixeira"></button>
            </div>
            <a href="#" class="aprendeu" onclick="foiAprender()">Aprender</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Em qual lixeira deve ser descartado o item a baixo?</h2>
            <div class="item-lixo"><img src="esqueleto-peixe.png" alt="Esqueleto de peixe" class="img-item-lixo"></div>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()"><img src="azul.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="amarela.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="verde.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="vermelha.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="cinza.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta acertou" onclick="acertou()"><img src="marrom.png" alt="" class="lixeira-resposta" id="marrom-lixeira"></button>
            </div>
            <a href="#" class="aprendeu" onclick="foiAprender()">Aprender</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Em qual lixeira deve ser descartado o item a baixo?</h2>
            <div class="item-lixo"><img src="garrafa-plastico.png" alt="Garrafa de plástico" class="img-item-lixo"></div>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()"><img src="azul.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="amarela.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="verde.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta acertou" onclick="acertou()"><img src="vermelha.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="cinza.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="marrom.png" alt="" class="lixeira-resposta" id="marrom-lixeira"></button>
            </div>
            <a href="#" class="aprendeu" onclick="foiAprender()">Aprender</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Em qual lixeira deve ser descartado o item a baixo?</h2>
            <div class="item-lixo"><img src="remedio.png" alt="Remédio" class="img-item-remedio"></div>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()"><img src="azul.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="amarela.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="verde.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="vermelha.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta acertou" onclick="acertou()"><img src="cinza.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="marrom.png" alt="" class="lixeira-resposta" id="marrom-lixeira"></button>
            </div>
            <a href="#" class="aprendeu" onclick="foiAprender()">Aprender</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Em qual lixeira deve ser descartado o item a baixo?</h2>
            <div class="item-lixo"><img src="garrafa-vidro.png" alt="garrafa de vidro" class="img-item-lixo"></div>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()"><img src="azul.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="amarela.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta acertou" onclick="acertou()"><img src="verde.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="vermelha.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="cinza.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="marrom.png" alt="" class="lixeira-resposta" id="marrom-lixeira"></button>
            </div>
            <a href="#" class="aprendeu" onclick="foiAprender()">Aprender</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Em qual lixeira deve ser descartado o item a baixo?</h2>
            <div class="item-lixo"><img src="lista-papel.png" alt="Lista de papel" class="img-item-lixo"></div>
            <div class="respostasCaixa">
                <button class="btnResposta acertou" onclick="acertou()"><img src="azul.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="amarela.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="verde.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="vermelha.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="cinza.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="marrom.png" alt="" class="lixeira-resposta" id="marrom-lixeira"></button>
            </div>
            <a href="#" class="aprendeu" onclick="foiAprender()">Aprender</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Em qual lixeira deve ser descartado o item a baixo?</h2>
            <div class="item-lixo"><img src="resto-maça.png" alt="Resto de maçã" class="img-item-lixo"></div>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()"><img src="azul.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="amarela.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="verde.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="vermelha.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="cinza.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta acertou" onclick="acertou()"><img src="marrom.png" alt="" class="lixeira-resposta" id="marrom-lixeira"></button>
            </div>
            <a href="#" class="aprendeu" onclick="foiAprender()">Aprender</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Em qual lixeira deve ser descartado o item a baixo?</h2>
            <div class="item-lixo"><img src="perfume-vidro.png" alt="Perfume de vidro" class="img-item-lixo"></div>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()"><img src="azul.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="amarela.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta acertou" onclick="acertou()"><img src="verde.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="vermelha.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="cinza.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="marrom.png" alt="" class="lixeira-resposta" id="marrom-lixeira"></button>
            </div>
            <a href="#" class="aprendeu" onclick="foiAprender()">Aprender</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Em qual lixeira deve ser descartado o item a baixo?</h2>
            <div class="item-lixo"><img src="sacola-plastico.png" alt="Sacola plástica" class="img-item-lixo"></div>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()"><img src="azul.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="amarela.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="verde.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta acertou" onclick="acertou()"><img src="vermelha.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="cinza.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="marrom.png" alt="" class="lixeira-resposta" id="marrom-lixeira"></button>
            </div>
            <a href="#" class="aprendeu" onclick="foiAprender()">Aprender</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Em qual lixeira deve ser descartado o item a baixo?</h2>
            <div class="item-lixo"><img src="frauda.png" alt="Frauda" class="img-item-lixo"></div>
            <div class="respostasCaixa">
                <button class="btnResposta errou" onclick="errou()"><img src="azul.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="amarela.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="verde.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="vermelha.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta acertou" onclick="acertou()"><img src="cinza.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="marrom.png" alt="" class="lixeira-resposta" id="marrom-lixeira"></button>
            </div>
            <a href="#" class="aprendeu" onclick="foiAprender()">Aprender</a>
        </div>`,
        `<div class="quizzCaixa">
            <h2>Em qual lixeira deve ser descartado o item a baixo?</h2>
            <div class="item-lixo"><img src="saco-papel.png" alt="Saco de papel" class="img-item-lixo"></div>
            <div class="respostasCaixa">
                <button class="btnResposta acertou" onclick="acertou()"><img src="azul.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="amarela.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="verde.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="vermelha.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="cinza.png" alt="" class="lixeira-resposta"></button>
                <button class="btnResposta errou" onclick="errou()"><img src="marrom.png" alt="" class="lixeira-resposta" id="marrom-lixeira"></button>
            </div>
            <a href="#" class="aprendeu" onclick="foiAprender()">Aprender</a>
        </div>`,
  `<div class="quizzCaixa">
            <div class="img">
                <img src="logo-lixeira.png" alt="Quiz Test">
            </div>
            <h2>Parabéns!!! Você concluiu o desafio!</h2>
            <p class="avaliar">Avalie-nos</p>
            <div class="respostasAvaliacao">
                <a onclick="avaliacao1()" class="estrelas e1">⭐</a>
                <a onclick="avaliacao2()" class="estrelas e2">⭐</a>
                <a onclick="avaliacao3()" class="estrelas e3">⭐</a>
                <a onclick="avaliacao4()" class="estrelas e4">⭐</a>
                <a onclick="avaliacao5()" class="estrelas e5">⭐</a>
            </div>
        </div>`,
];

const comoJogarArrai = [
    `  `
]

const simPronto = document.querySelector(".sim");
const todosCaixotes1 = document.querySelector(".todosCaixotes1");
const todosCaixotes2 = document.querySelector(".todosCaixotes2");
const chance = document.querySelector(".chanceCaixa");
const home = document.querySelector(".home");
const acertouResposta = document.querySelector(".acertou");
const errouResposta = document.querySelector(".errou");
const perguntaLocal = document.querySelector(".quizzCaixaFlex");
const textoCaixaPrimaria = document.querySelector(".h3");
const botoesCaixaPrimaria = document.querySelector(".botoes");
const caixaDeAvaliacao = document.querySelector(".caixaAvaliacao");
const obrigadoPelaAvalicao = document.querySelector(".avali");
const nivelCaixa = document.querySelector(".nivelCaixaFlex");
const comoJogarAprender = document.querySelector(".ensinando-jogar");

const outrosBotoes =
  '<button class="btnCaixote sim" onclick="estouPronto()">SIM</button> <button class="btnCaixote nao" onclick="desvia(this)" onmouseover="desvia(this)">NÃO</button>';

//////// Iniciar

function estouPronto() {
  todosCaixotes1.style.display = "none";
  nivelCaixa.style.display = "flex";
}

//////// certeza

const convencer = [
  `<h3>Não quer mesmo?</h3>`,
  `<h3>Vamos! Não custa tentar!</h3>`,
  `<h3>Te dou até mais uma chance!</h3>`,
  `<h3>Vai mudar de ideia?</h3>`,
  `<h3>Hum... vou te dar uma mãozinha... vamos para o Test Quiz?</h3>`,
];

var certeza = 5;
let proximaTentativa = 0;

function temCerteza() {
  if (certeza != 0) {
    textoCaixaPrimaria.innerHTML = convencer[proximaTentativa];
    certeza = certeza - 1;
    proximaTentativa = proximaTentativa + 1;

    if (proximaTentativa == 3) {
      aumentarChance();
    }
  } else {
    botoesCaixaPrimaria.innerHTML = outrosBotoes;
  }
}

//////// Desviar

function desvia(botao) {
  const btn = botao;
  btn.style.position = "absolute";
  btn.style.bottom = numeroAleatorio(15, 90);
  btn.style.left = numeroAleatorio(0, 78);
}

function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min + "%";
}

//////// Chances

var quantidadeChances = 2;

function verChances() {
  let chances = `<p class="chance">CHANCES: ${quantidadeChances} </p>`;

  chance.innerHTML = chances;
}

verChances();

function errou() {
  if (quantidadeChances == 0) {
    acabouChances();
  } else {
    quantidadeChances = quantidadeChances - 1;

    verChances();
  }
}

function aumentarChance() {
  quantidadeChances = quantidadeChances + 1;

  verChances();
}

function acabouChances() {
  todosCaixotes2.style.display = "flex";
}

//////// Perguntas

let perguntas = perguntasPlayArrai;

function perguntasPlay() {
  perguntas = perguntasPlayArrai;
  colocarPergunta();
}

let proximaPergunta = 0;

function colocarPergunta() {
  perguntaLocal.innerHTML = perguntas[proximaPergunta];

  proximaPergunta = proximaPergunta + 1;

  nivelCaixa.style.display = "none";
  perguntaLocal.style.display = "flex";
}

function acertou() {
  colocarPergunta();
}

//////// Aprendeu

function comoJogar() {
    comoJogarAprender.style.display = "flex";
}

function foiAprender() {
  if (quantidadeChances == 0) {
    acabouChances();
  } else {
    quantidadeChances = quantidadeChances - 1;

    verChances();

    comoJogar();
  }
}

//////// Voltar aprendendo

function voltar() {
    comoJogarAprender.style.display = "none";
}

//////// Recomeçar

function denovo() {
  location.reload();
}

//////// Home

function homeAparecer() {
  home.style.display = "block";
}

//////// Avaliação

function avaliacao1() {
  caixaDeAvaliacao.style.display = "flex";
  perguntaLocal.style.display = "none";
  obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐</p>`;
  homeAparecer();
}
function avaliacao2() {
  caixaDeAvaliacao.style.display = "flex";
  perguntaLocal.style.display = "none";
  obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐⭐</p>`;
  homeAparecer();
}
function avaliacao3() {
  caixaDeAvaliacao.style.display = "flex";
  perguntaLocal.style.display = "none";
  obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐⭐⭐</p>`;
  homeAparecer();
}
function avaliacao4() {
  caixaDeAvaliacao.style.display = "flex";
  perguntaLocal.style.display = "none";
  obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐⭐⭐⭐</p>`;
  homeAparecer();
}
function avaliacao5() {
  caixaDeAvaliacao.style.display = "flex";
  perguntaLocal.style.display = "none";
  obrigadoPelaAvalicao.innerHTML = `<p class="respostaEstrela">⭐⭐⭐⭐⭐</p>`;
  homeAparecer();
}
