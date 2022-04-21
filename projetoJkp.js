const prompt = require('prompt-sync')();
do {
    console.clear();
    let vitorias = 0 
    let derrotas = 0
    let empate = 0
    let alternativas = [0,1,2]
    console.log("Esse é um pequeno jogo de Jokenpo, um jogo simples, em que temos 3 escolhas, sendo elas: pedra, papel e tesoura");
    console.log("Sendo que: PEDRA VENCE DE TESOURA; TESOURA VENCE DE PAPEL; PAPEL VENCE DE PEDRA.");
    console.log();
const rodadas = +prompt("Quantas rodadas você quer jogar? ");
for(let i=0;i<rodadas;i++){
    let escolha = +prompt("Escolha entre [0]pedra, [1]papel e [2]tesoura: ");
    while(escolha!=0 && escolha!=1 &&escolha!=2){
        escolha = +prompt("Escolha entre [0]pedra, [1]papel e [2]tesoura: ");
    }
    console.log();
    console.log(`Você escolheu ${escolha}`);

    let escolhaPC = alternativas[Math.floor(Math.random()*alternativas.length)];
    console.log(`PC escolheu ${escolhaPC}`)

    if(escolha==0 && escolhaPC==2 || escolha==1 && escolhaPC==0 || escolha==2 && escolhaPC==1){
        vitorias++
        console.log();
        console.log("VOCÊ VENCEU!!");

    }else if(escolhaPC==0 && escolha==2 || escolhaPC==1 && escolha==0 || escolhaPC==2 && escolha==1){
        derrotas++
        console.log();
        console.log("VOCÊ PERDEU!!");
    }else{
        empate++
        console.log();
        console.log("VOCÊ EMPATOU!!");
    }
}
    if(vitorias>derrotas){
        console.log();
        console.log(`VOCÊ VENCEU ${vitorias} VEZES, FOI DERROTADO ${derrotas} VEZES E EMPATOU ${empate} VEZES`);
        console.log("VOCÊ FOI O CAMPEÃO!!");
    }else if(derrotas>vitorias){
        console.log();
    console.log(`VOCÊ VENCEU ${vitorias} VEZES, FOI DERROTADO ${derrotas} VEZES E EMPATOU ${empate} VEZES`);
    console.log("PC FOI O CAMPEÃO");
    }else if(vitorias==derrotas){
        console.log(`VOCÊ VENCEU ${vitorias} VEZES, FOI DERROTADO ${derrotas} VEZES E EMPATOU ${empate} VEZES`);
        console.log("VOCÊ EMPATOU");
    }
    var jogar = prompt("Deseja continuar?(sim/não): ");
  if(jogar=="sim"){
      continue;
  }else if(jogar=="não"){
      console.log("Tudo bem, muito obrigado.");
      break;
  }
} while (jogar=="sim");