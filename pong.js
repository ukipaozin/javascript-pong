//apertar control f5 prra recaregar de vdd
//aqui irei criar minha bolinha
let xbolinha = 300
let ybolinha = 200
let tambolinha = 25

//config bolinha eba uau que legal aaaaaaaaaaaa primeiro velocidade
let xvelo = 2
let yvelo = 6
function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(1000,700);
}

function draw(){
    //aqui vou por a cor da "mesa"
    background(200,255,255);
    criarbolinha(xbolinha,ybolinha,tambolinha)
    movebolinha();
}

//funçao bolinha
function criarbolinha(xbolinha,ybolinha,tambolinha){
    circle(xbolinha,ybolinha,tambolinha);


}
//funçao move bolinha
function movebolinha(){
    yvelo = 20/ybolinha -500/(ybolinha -500/ybolinha -500) + yvelo
    xbolinha = xvelo + xbolinha
    ybolinha = yvelo + ybolinha
}