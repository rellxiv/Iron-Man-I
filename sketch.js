var iron, ironImg;
var bg, backgroundImg;
var stoneImg;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImg = loadImage("images/iron.png");
  stoneImg = loadImage("images/stone.png")
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale = 2;
  iron = createSprite(150, 500)
  iron.addImage(ironImg);
  iron.scale = 0.3;
  stoneGroup = new Group();

 
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

  for (var i = 0; i < (stoneGroup).length; i++) {
    var temp;
    temp = (stoneGroup).get(i);
    if (temp.isTouching(iron)) {
        iron.collide(temp);
    }
  }

  generateStones()

    drawSprites();
   
}

function generateStones(){
  if (frameCount % 60 === 0) {
    var stone = createSprite(120, 0, 40, 10);
    stone.x = random(50, 900)
    stone.addImage(stoneImg);
    stone.scale = 0.5;
    stone.velocityY = 5;
    stone.lifetime = 250;
    stoneGroup.add(stone);
}
}

