var base, fan1, fan2;
var state;

function setup() {
  createCanvas(400, 400);
  base = createSprite(200,280,20,180);
  base.shapeColor = 'white';
  
  fan1 = createSprite(200,200,120,15);
  fan1.shapeColor = 'red';
  
  fan2 = createSprite(200,200,15,120);
  fan2.shapeColor = 'green'; 
 
  fan1.rotation = 10;
  fan2.rotation = 10;
  
  state = "stop";
  
    
  
}

function draw() {
  background(220);
  
  if(state==="stop"){
    fan1.rotationSpeed = 0;
    fan2.rotationSpeed = 0;
  }
  
  else if(state==="start"){
    fan1.rotationSpeed = 20;
    fan2.rotationSpeed = 20;
  }
  
  else if(state==="fast"){
    fan1.rotationSpeed = 40;
    fan2.rotationSpeed = 40;
  }
  else if (state==="slow"){
    fan1.rotationSpeed = 5;
    fan2.rotationSpeed = 5;
  }
  
  if(keyDown("f")){
    state = "fast";
  }
  else if(keyDown("s")){
    state = "slow";
  }
  else if(keyDown("space") && state==="stop"){
    state = "start"
  }
  else if(keyDown("space") && state==="start"){
    state = "stop"
  }
  
  drawSprites();
}
