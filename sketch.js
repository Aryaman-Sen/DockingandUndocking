var iss;
var issI;
var spaceCraft;
var spaceCraftA;
var spaceBg;
var hasDocked;
var spc1,spc2,spc3,spc3,spc4;

function preload(){
issI=loadImage("iss.png");
spaceCraftA=loadAnimation("spc1,spc2");
spaceBg=loadImage("spacebg.jpg");
spc1=loadImage("spacecraft1.png");
spc2=loadImage("spacecraft2.png");
spc3=loadImage("spacecraft3.png");
spc4=loadImage("spacecraft4.png")
}

function setup() {
  createCanvas(800,400);

  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issI);
  iss.scale=0.4;

  spaceCraft=createSprite(400,-200,50,50);
  spaceCraft.addImage(spaceCraftA);
  spaceCraft.scale=0.2

}

function draw() {
  background("255,255,255");
  
  
if(!hasDocked){
  spaceCraft.x=400;

  if(keyDown(UP_ARROW)){
    spaceCraft.Y = 2;
    spaceCraft.addImage(spc2);
  }

  if(keyDown(DOWN_ARROW)){
    spaceCraft.Y = -2;
    spaceCraft.addImage(spc1);
  }

  if(keyDown(LEFT_ARROW)){
    spaceCraft.X = -2;
    spaceCraft.addImage(spc3);
  }

  if(keyDown(RIGHT_ARROW)){
    spaceCraft.X = 2;
    spaceCraft.addImage(spc4);
  }
   
  if(spaceCraft.isTouching(iss)){
    text("Docked!");
    spaceCraft.X=0;
    spaceCraft.Y=0;
  }
}


  drawSprites();
}