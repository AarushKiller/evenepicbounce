var movingRect, fixedRect

function setup() {
  createCanvas(800,800);
  movingRect = createSprite(400, 0, 50, 50);
  fixedRect = createSprite(400, 800, 50, 50);
  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "red"
  movingRect.velocityY = 4;
  fixedRect.velocityY = -4;

}

function draw() {
  background("black");
 
   
   console.log(movingRect.x-fixedRect.x);
   console.log (movingRect.width/2 + fixedRect.width/2)
  

   if (movingRect.x-fixedRect.x <= movingRect.width/2 + fixedRect.width/2 
      && fixedRect.x-movingRect.x <= movingRect.width/2 + fixedRect.width/2 
      
    ){
      fixedRect.velocityX = -fixedRect.velocityX;
      movingRect.velocityX = -movingRect.velocityX;
      

   }
   
if(movingRect.y- fixedRect.y <= movingRect.height/2 + fixedRect.height/2 
  && fixedRect.y-movingRect.y <= movingRect.height/2 + fixedRect.height/2 ){
  
    fixedRect.velocityY = -fixedRect.velocityY;
    movingRect.velocityY = -movingRect.velocityY; 
  
  }

  drawSprites();
}