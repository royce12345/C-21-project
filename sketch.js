var bullet,wall,thickness;

var speed,weight;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83)

bullet = createSprite(50, 200, 50, 10);
wall = createSprite(1200,200,thickness,100)


speed=random(223,321);
weight = random(30,52);



bullet . velocityX = speed;





}



function draw() {
  background("black");
  
  if(wall.x-bullet.x <(bullet.width+wall.width)/2)
  {
    bullet.velocityX = 0;

     deformation = 0.5* weight * speed* speed/22509;
}
    if(deformation > 180)
  {
bullet.shapeColour = colour("white");
  }

  if(deformation<180 && deformation>100)
{
  bullet.shapeColour = colour("white")
}

if(deformation<100)
{
  bullet.shapeColour = colour("white")
}

if(hasCollided(bullet,wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed* speed/(thickness *thickness *thickness);
}

if(damage>10)
{
  wall.shapeColour="red";
}
if(damage<10)
{
  wall.shapeColour="green"
}


  drawSprites();
}
 

function hasCollided (lbllet,lwall){
  bulletRightEdge = lbullet.x +lbullet.weigth;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}







