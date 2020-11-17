var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var invisibleGround;
var survivalTime=0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  invisibleGround=createSprite(400,360,900,10);
  invisibleGround.visible=false;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
  
}

function draw() {
  
  background(255);
  
  createCanvas(400,400);
  
  spawnFood();
  spawnObstacles();
  
  if(ground.x<0){
    ground.x = ground.width/2
  }
  
    if(keyDown("space")&&monkey.y >= 235) {
      monkey.velocityY = -13; 
    }
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(invisibleGround);
  
  stroke("black");
  textSize(20);
  fill("black");
  text("Score: " + score, 500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  drawSprites();
}

function spawnFood(){
  
   if(World.frameCount%80===0){ 
   banana=createSprite(600,200,20,20);
   banana.scale=0.10;
   banana.y=Math.round(random(120,200));
   banana.velocityX=-9;
   banana.setlifetime=200;
   banana.addImage("banana",bananaImage);

   foodGroup.add(banana);
     
   }
}

function spawnObstacles(){
  
  
   if(World.frameCount%300===0){ 
   obstacle=createSprite(400,335,20,20);
   obstacle.scale=0.10;
   obstacle.y=335;
   obstacle.velocityX=-9;
   obstacle.setlifetime=200;
   obstacle.addImage("obstacle",obstacleImage);

   obstacleGroup.add(obstacle);
  
}

}
