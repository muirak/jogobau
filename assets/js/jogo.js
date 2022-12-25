/*
JOGO DO BAÚ v1.0

AUTOR: Ravi Zuriel
PROGRAMADOR: Ravi Zuriel

2022

*/

const botaoIniciar = document.getElementById("botaoIniciar");
const imagemItens = document.getElementById("imagemItens");
const imagemBau = document.getElementById("imagemBau");
const ITENS = [	
	"cogumelo.png",
	"flor.png",
	"moeda.png",
	"ovo.png"
	];
	
var jogoIniciado = false;

function iniciar(){		
	imagemItens.src = "assets/img/sprites/vazio.png";
	imagemBau.src = "assets/img/sprites/bauFechado.png";
	botaoIniciar.value = "Abrir baú";
	jogoIniciado = false;
}

function girarItens(){	
	if(!jogoIniciado){
		
		let numAleatorio = Math.floor(Math.random() * 4);
		imagemItens.src = "assets/img/sprites/" + ITENS[numAleatorio];
		imagemBau.src = "assets/img/sprites/bauAberto.png";
		botaoIniciar.value = "Reniciar!";
		jogoIniciado = true;
	}else{
		iniciar();
	}
}


document.addEventListener("DOMContentLoaded",iniciar,false);

botaoIniciar.addEventListener("click",girarItens,false);