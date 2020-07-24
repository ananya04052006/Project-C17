var ball,paddle;
  
function setup() {
  createCanvas(800, 400);
  paddle = createSprite(700, 200, 20, 100);
  paddle.shapeColor  = "white";
  ball = createSprite(400, 200, 20, 20);
  ball.shapeColor = "yellow";
  ball.velocityX = -9;

}

function draw() {
  background(0);

  ball.velocityX = 3;
  ball.velocityY = 4;

  createEdgeSprites();
  ball.bounceOff(TopEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(paddle);
  paddle.collide(bottomEdge);
  paddle.collide(TopEdge);
  
  if(keyDown(UP_ARROW)) {
    paddle.y = paddle.y - 20;
  }
  
  if(keyDown(DOWN_ARROW)) {
    paddle.y = paddle.y + 20;
  }

  randomVelocity();

  drawSprites();
  
}

function randomVelocity() {

  if(ball.bounceOff(paddle)) {
    ball.velocityY = 3;
    ball.velocityX = -3;
  }

}