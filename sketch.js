var MovingBody, FixedBody;

function setup() {
  createCanvas(800,400);
  MovingBody = createSprite(300, 200, 100, 50);
  MovingBody.shapeColor="black";
  FixedBody = createSprite(400, 200, 100, 50);
  FixedBody.shapeColor="white";

}

function draw() {
  background("red");
  console.log(FixedBody.y-MovingBody.y)
  MovingBody.x=mouseX;
  MovingBody.y=mouseY;

  algorithm1();
  


  drawSprites();
}

function algorithm1(){
  if(MovingBody.x-FixedBody.x<(MovingBody.width+FixedBody.width)/2
  &&FixedBody.x-MovingBody.x<(MovingBody.width+FixedBody.width)/2&&
  MovingBody.y-FixedBody.y<(MovingBody.height+FixedBody.height)/2&&
  FixedBody.y-MovingBody.y<(MovingBody.height+FixedBody.height)/2){
    MovingBody.shapeColor="green";
  }
  else{
    MovingBody.shapeColor="black";
  }
}