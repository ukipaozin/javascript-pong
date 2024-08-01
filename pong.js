//apertar control f5 prra recaregar de vdd
let xBolinha = 300;
let yBolinha = 200;
let tamBolinha = 25;
let raiobolinha = tamBolinha/2;
let xRaquete = 5;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;
let xvelo= 6;
let yvelo= 6;

function setup(){
    createCanvas(600,400);
}

function draw(){
    background(140,255,255); 
    criaBolinha(xBolinha, yBolinha, tamBolinha);
    moveBolinha();
    Borda();
    criaRaquete(xRaquete, yRaquete, larguraRaquete, alturaRaquete);
    MovimentaRaquete();
    colideRaquete();
}

function criaBolinha(xBolinha, yBolinha,tamBolinha){
    circle (xBolinha,yBolinha,tamBolinha);
}

function moveBolinha(){


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

function criaRaquete(xRaquete,yRaquete,larguraRaquete,alturaRaquete){
    fill("blue");
    rect(xRaquete,yRaquete,larguraRaquete,alturaRaquete);
}
//função responsavel pelo movimento da raquete

function MovimentaRaquete(){
if(keyIsDown(UP_ARROW)){
    yRaquete -=10;
}
if(keyIsDown(DOWN_ARROW)){
    yRaquete +=10;
}
}
//função responsavel pela bolinha bater na aquete ela retornar na posição contrario

function colideRaquete(){
    if(xBolinha - raiobolinha < xRaquete + larguraRaquete && yBolinha - raiobolinha < yRaquete + alturaRaquete && yBolinha + raiobolinha > yRaquete){
        xvelo *= -1;
    }
}


// Criar um elemento HTML para exibir o placar
const scoreElement = document.createElement("div");
scoreElement.id = "score";
document.body.appendChild(scoreElement);

// Inicializar os pontos para ambos os jogadores
let player1Score = 0;
let player2Score = 0;

// Definir as variáveis para a bola
let ballX = 200;
let ballY = 200;
let ballSpeedX = 3;
let ballSpeedY = 3;
let ballRadius = 10;

// Definir as variáveis para as paredes
let player1WallX = 50;
let player2WallX = 550;
let wallHeight = 200;

// Função para atualizar o placar
function updateScore(player) {
  if (player === 1) {
    player1Score++;
  } else if (player === 2) {
    player2Score++;
  }
  scoreElement.innerHTML = `Player 1: ${player1Score} - Player 2: ${player2Score}`;
}

// Função para verificar se a bola bateu na parede do adversário
function checkCollision() {
  if (ballX - ballRadius < player1WallX) {
    // Bola bateu na parede do jogador 1
    updateScore(2);
    ballSpeedX = -ballSpeedX;
  } else if (ballX + ballRadius > player2WallX) {
    // Bola bateu na parede do jogador 2
    updateScore(1);
    ballSpeedX = -ballSpeedX;
  }
}

// Função para atualizar a posição da bola
function updateBallPosition() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Verificar se a bola bateu na parede superior ou inferior
  if (ballY - ballRadius < 0 || ballY + ballRadius > 400) {
    ballSpeedY = -ballSpeedY;
  }

  // Verificar se a bola bateu na parede do adversário
  checkCollision();
}

// Função para desenhar a bola e as paredes
function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // Desenhar a bola
  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();

  // Desenhar as paredes
  ctx.beginPath();
  ctx.rect(player1WallX, 0, 10, wallHeight);
  ctx.fillStyle = "white";
  ctx.fill();

  ctx.beginPath();
  ctx.rect(player2WallX, 0, 10, wallHeight);
  ctx.fillStyle = "white";
  ctx.fill();
}

// Função para atualizar o jogo
function update() {
  updateBallPosition();
  draw();
  requestAnimationFrame(update);
}

// Iniciar o jogo
update();