//aqui irei criar minha bolinha
let xbolinha = 300
let ybolinha = 200
let tambolinha = 25

function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}

function draw(){
    //aqui vou por a cor da "mesa"
    background(224,255,255);
}

//funçao bolinha
function criarbolinha(xbolinha,ybolinha,tambolinha){
    circle(xbolinha,ybolinha,tambolinha);

    criabolinha(xbolinha, ybolinha, tambolinha)
}