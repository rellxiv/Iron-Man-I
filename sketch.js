var iron, ironImg;
var bg, backgroundImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImg = loadImage("images/iron.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
  iron = createSprite(150, 500)
  iron.addImage(ironImg);
  iron.scale = 0.3;

 
}

function draw() {
  
  bg.velocityY = 5;

  if (bg.y > 715){
   bg.y = bg.width / 4
  } 
  
  iron.velocityY = 0;
  iron.velocityX = 0;

  if (keyDown("up")){
    iron.velocityY = -8
  }

  if (keyDown("down")){
    iron.velocityY = 8
  }

  if (keyDown("left")){
    iron.velocityX = -8
  }

  if (keyDown("right")){
    iron.velocityX = 8
  }

    drawSprites();
   
}

