const prompt = require('prompt-sync')();
do {
console.clear();
    let rodadas = 0
let vitorias = 0
let derrotas = 0
let empate = 0
let pontosU = 0
let pontosP = 0
let alternativas = [0, 1, 2];
rodadas = +prompt("Quantas rodadas você quer jogar?: ")
for(let i=0; i<rodadas; i++){
    let escolha = +prompt("Escolha entre [0]pedra, [1]papel e [2]tesoura: ")
    while (escolha != 0 && escolha != 1 && escolha != 2){
        console.log('Responda apenas com 0, 1 ou 2');
        escolha = +prompt("Escolha entre [0]pedra, [1]papel e [2]tesoura: ").toLowerCase();
    }
    console.log()
    console.log(`Você escolheu ${escolha}`)
    let escolhaPC = alternativas[Math.floor(Math.random()*alternativas.length)];
    console.log(`PC escolheu ${escolhaPC}`)
    if(escolha==0&&escolhaPC==2 || escolha==2&&escolhaPC==1 || escolha==1&&escolhaPC==0){
        pontosU++
        console.log("VOCÊ VENCEU")
    }else if(escolhaPC==0&&escolha==2|| escolhaPC==2&&escolha==1 || escolhaPC==1&&escolha==0){
        pontosP++
        console.log("VOCÊ PERDEU")
    }else{
        console.log("VOCÊ EMPATOU")
    }   
 if(pontosU>pontosP){
     vitorias++
 }else if(pontosP>pontosU){
     derrotas++
 }else if(pontosP==pontosU){
     empate++
 }
}
if(vitorias>derrotas){
    console.log()
    console.log(`VOCÊ VENCEU ${vitorias} VEZES, FOI DERROTADO ${derrotas} VEZES E EMPATOU ${empate} VEZES`)
    console.log("VOCÊ VENCEU!!")
 }else if(derrotas>vitorias){
    console.log()
    console.log(`VOCÊ VENCEU ${vitorias} VEZES, FOI DERROTADO ${derrotas} VEZES E EMPATOU ${empate} VEZES`)
    console.log("VOCÊ PERDEU")
 }else if(empate==empate){
     console.log(`VOCÊ VENCEU ${vitorias} VEZES, FOI DERROTADO ${derrotas} VEZES E EMPATOU ${empate} VEZES`)
     console.log("VOCÊ EMPATOU")
 }
  var jogar = prompt("Deseja continuar?(sim/não): ")
  if(jogar=="sim"){
      continue;
  }else if(jogar=="não"){
      console.log("Tudo bem, muito obrigado.")
      break;
  }
} while (jogar=="sim");