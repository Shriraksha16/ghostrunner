var tower, towerImage;
var ghost, ghostImage;
var gameState="play";

function preload (){
  towerImage=loadImage("tower.png")
  ghostImage=loadImage("ghost-standing.png")
  
}

function setup(){
  createCanvas(600,600);
  
  tower=createSprite(300,300)
  tower.addImage(towerImage)
  tower.velocityY=1;
  
  ghost=createSprite(200,200,50,50)
  ghost.addImage(ghostImage)
  ghost.scale=0.3
  
}

function draw(){
  background("pink")
  
  if(gameState==="play"){
     
    if(keyDown("LEFT_ARROW")){
      ghost.x=ghost.x-3;
    }
    
    if(keyDown("LEFT_ARROW")){
      ghost.x=ghost.x-3;
    }
    
    
  }
  
  drawSprites();
}


