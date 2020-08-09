var ball,ballImage,paddleImage,paddle,edges;

function preload() {
  ballImage = loadImage("ball.png");
  paddleImage = loadImage("paddle.png");
}

function setup() {
  createCanvas(400, 400);
  
  //Objects
  ball = createSprite(200,200);
  paddle = createSprite(360,200);
  
  //Images
  ball.addImage(ballImage);
  paddle.addImage(paddleImage);
  
  //Ball Velocity
  ball.velocityX = -9;
  ball.velocityY = random(-15,15);
}

function draw() {
  background(205,153,0);
  
  //Ball Actions
  edges = createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  
  //Paddle Controls
  paddle.collide(edges[3]);
  paddle.collide(edges[2]);
  
  if(keyDown(UP_ARROW)){
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW)){
    paddle.y = paddle.y + 20;
  }
  
  randomVelocity();
  
  drawSprites();
}

function randomVelocity(){
  if(ball.isTouching(paddle)){
    ball.velocityY = random(1,15);
  }
}