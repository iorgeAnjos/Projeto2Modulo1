const prompt = require('prompt-sync')();
let jogar;//variavel que vai fazer o jogo rodar novamente, caso o usuario queira; preferi botar aqui fora para não usar o var.
do {
    console.clear();//botei o console.clear aqui dentro do while, para quando o usuario escolher reiniciar, possa limpar o jogo anterior.
    let vitorias = 0 
    let derrotas = 0
    let empate = 0
    let alternativas = [0,1,2]//[0]pedra, [1]papel, [2]tesoura.
   
    console.log("Esse é um pequeno jogo de Jokenpo, um jogo simples, em que temos 3 escolhas, sendo elas: pedra, papel e tesoura");
    console.log("Sendo que: PEDRA VENCE DE TESOURA; TESOURA VENCE DE PAPEL; PAPEL VENCE DE PEDRA.");//introdução do jogo fora do for, para não ficar maçante a repetição
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
    jogar = prompt("Deseja continuar?(s/n): ").toLowerCase();
  while(jogar!="s" && jogar!="n"){
    console.log()  
    console.log('Responda apenas com "s" ou "n"')
    jogar = prompt("Deseja continuar?(s/n): ").toLowerCase();
  }
    if(jogar=="s"){
      continue;
  }else if(jogar=="n"){
    console.log()  
    console.log("Tudo bem, muito obrigado.");
      break;
  }
} while (jogar=="s");