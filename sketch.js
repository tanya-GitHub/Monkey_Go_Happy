var monkey, monkey_running
var ground
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  monkey = createSprite(100,360,20,20);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(200,400,800,20);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  score = 0;
  
}


function draw() {
  background("white");
  
  stroke("black");
  textSize(20);
  score = Math.ceil(frameCount/frameRate())
  text("Survival Time: "+score, 130, 30);
  
  if(keyDown("space")&& monkey.y > 345){
    monkey.velocityY = -16;
  }
  monkey.velocityY = monkey.velocityY + 0.6;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  monkey.collide(ground);
  
  food();
  rocks();
  
  drawSprites();
}

function food(){
  if(frameCount%80 == 0){
  banana = createSprite(400,200,20,20);
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.y = Math.round(random(120,200));
  banana.velocityX = -5;
  banana.lifetime = 100;
  foodGroup.add(banana);
  }
  
}

function rocks(){
  if(frameCount%300 == 0){
  obstacle = createSprite(400,375,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.13;
  obstacle.velocityX = -5;
  obstacle.lifetime = 100;
  obstacleGroup.add(obstacle);
  }
}


