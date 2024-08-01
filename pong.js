//apertar control f5 prra recaregar de vdd
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let xvelo= 10;
let yvelo= 6;

function setup(){
    createCanvas(1200,800);
}

function draw(){
    background(140,255,255); 
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    moveBolinha();
    Borda();
}

function criaBolinha(xBolinha, yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
}

function moveBolinha(){

    if (yBolinha<500) {
        if(yvelo<10){
            yvelo=yvelo+0.001
        }
    } else {
        if(yvelo>10){
            yvelo=yvelo-0.001
        }
    }
    xBolinha = xvelo + xBolinha;
    yBolinha = yvelo + yBolinha;
}

function Borda(){
    if (xBolinha > width || xBolinha < 0){
        xvelo *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelo *= -1;
    }
}
//criar função raquete
function criaRaquete({

})