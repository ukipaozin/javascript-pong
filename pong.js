//apertar control f5 prra recaregar de vdd
//aqui irei criar minha bolinha
let xbolinha = 300
let ybolinha = 200
let tambolinha = 25

//config bolinha eba uau que legal aaaaaaaaaaaa primeiro velocidade
let xvelo = 6
let yvelo = 2
function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //aqui vou por a cor da "mesa"
    background(200,255,255);
    criarbolinha(xbolinha,ybolinha,tambolinha)
}

//funçao bolinha
function criarbolinha(xbolinha,ybolinha,tambolinha){
    circle(xbolinha,ybolinha,tambolinha);


}
//funçao move bolinha
function movebolinha(){
    xbolinha = xbolinha + xbolinha
    ybolinha = xvelo + ybolinha
}