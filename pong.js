//apertar control f5 prra recaregar de vdd
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let xvelocidadeBolinha = 10;
let yvelocidadeBolinha = 6;

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
    xBolinha = xvelocidadeBolinha + xBolinha;
    yBolinha = yvelocidadeBolinha + yBolinha;
}

function Borda(){
    if (xBolinha > width || xBolinha < 0){
        xvelocidadeBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0){
        yvelocidadeBolinha *= -1;
    }
}
