var bullet,wall;
var speed,thickness,weight;

function setup() {
  createCanvas(1000,400);
 bullet= createSprite(50, 200, 50, 50);
 bullet.shapeColor="white";
 thickness=random(22,83);
 wall = createSprite(700,200,thickness,height/2);
wall.shapeColor="lightbrown";
 speed=random(223,321);
 weight=random(30,52)
 bullet.velocityX=speed;
}

function draw() {
  background(80,80); 
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<0){
    wall.shapeColor=color(0,255,0);
  }
  } 
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  } 
  return false;
}