var white1 , white2 , white3;
var paper1,dustbin1,Dustbin2;
var ground1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin1 = loadImage("Images/dustbin1.png");
}

function setup() 
{
 createCanvas(800, 700);
 
	engine = Engine.create();
  world = engine.world;
  

  ground1 = new ground (400,650,800,20);

  paper1 = new Paper (200,200,20);
  
	white1=	new Dustbin (605,590,20,100);
	white2=	new Dustbin (785,590,20,100);
	white3=	new Dustbin (695,630,200,20);
	
	Engine.run(engine);
  
}


function draw() {
  
  rectMode(CENTER);
  background(0);

  white1.display();
  white2.display();
  white3.display();

  paper1.display();

  ground1.display();
  image(dustbin1,100,100);
  
  drawSprites();
 
}

function keyPressed(){
if (keyCode === UP_ARROW)
{
   Matter.Body.applyForce(paper1.body,paper1.body.position, {x:25, y:-25})
}

}


