var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1300,400);
  bullet=createSprite(50, 200, 50, 50);
  bullet.shapeColor=color(255, 255, 255);
  wall=createSprite(1200, 200, thickness, height/2);
  speed=random(233,321);
  thickness=random(22,83);
  weight=random(30,52);
}

function draw() {
  background(19,4,117);
  
  bullet.velocityX=speed;
  wall.visible=true;

  if (hascollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
    }

  drawSprites();
}

function hascollided(bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if (bulletRightEdge>=wallLeftEdge){
  return true
}
return false;
}