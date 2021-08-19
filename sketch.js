var ship, ship_floating;
var sea, seaFlowing;
function preload(){
ship_floating=loadAnimation("ship-1.png", "ship-2.png")
seaFlowing=loadImage("sea.png");
}

function setup(){
  createCanvas(600,600);
  sea = createSprite (200,180,400,20);
  sea.addImage(seaFlowing);

  ship = createSprite (105,250,20,50);
  ship.addAnimation("floating",ship_floating);
  ship.scale=0.3;


}

function draw() {
  background("blue");
  sea.velocityX=-2;

  if (sea.x<0){
    sea.x=sea.width/2;
  }

 drawSprites();
}