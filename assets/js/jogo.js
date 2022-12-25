/*
JOGO DO BAÚ v1.0

AUTOR: Ravi Zuriel
PROGRAMADOR: Ravi Zuriel

2022

*/

const Direcao = {
	DIREITA: "direita",
	ESQUERDA: "esquerda"
	};

const botaoIniciar = document.getElementById("botaoIniciar");
const botaoEsquerdo = document.getElementById("botaoEsquerdo");
const botaoDireito = document.getElementById("botaoDireito");
const imagemItens = document.getElementById("imagemItens");
const imagemJogador = document.getElementById("imagemJogador");
const imagemBau = document.getElementById("imagemBau");
const ITENS = [	
	"cogumelo.png",
	"flor.png",
	"moeda.png",
	"ovo.png"
	];

var indice = 0;	
var pontos = 0;
var jogoIniciado = false;

function iniciar(){		
	imagemItens.src = "assets/img/sprites/vazio.png";
	imagemBau.src = "assets/img/sprites/bauFechado.png";
	imagemJogador.src = "assets/img/sprites/cogumelo.png";
	botaoIniciar.value = "Abrir baú";
	indice = 0;
	jogoIniciado = false;
}

function girarItens(){	
	if(!jogoIniciado){		
		let numAleatorio = Math.floor(Math.random() * 4);
		imagemItens.src = "assets/img/sprites/" + ITENS[numAleatorio];
		imagemBau.src = "assets/img/sprites/bauAberto.png";
		ponto(numAleatorio,indice);
		botaoIniciar.value = "Reniciar!";
		jogoIniciado = true;
		console.log(numAleatorio);
	}else{
		iniciar();
	}
}

function ponto(imagemCPU,imagemJogador){
	if(imagemCPU==imagemJogador){
		let monitorPontos = document.getElementById("monitorPontos");
		monitorPontos.innerText = "Pontos: " + pontos++;
	}
}

function selecionarItensDireita(){
	
	if((indice>=0) && (indice<3)){
		indice++;
	}else{
		indice = 0;
	}
	imagemJogador.src = "assets/img/sprites/" + ITENS[indice];
	console.log(indice);	
	
}

function selecionarItensEsquerda(){
	
	if((indice<=3) && (indice>0)){
		indice--;
	}else{
		indice = 3;
	}
	imagemJogador.src = "assets/img/sprites/" + ITENS[indice];
	console.log(indice);
	
}


document.addEventListener("DOMContentLoaded",iniciar,false);

botaoIniciar.addEventListener("click",girarItens,false);
botaoEsquerdo.addEventListener("click",selecionarItensEsquerda,false);
botaoDireito.addEventListener("click",selecionarItensDireita,false);