var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var c1,c2,c3
var safe,safe1,safe2
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-32, width,62);
	groundSprite.shapeColor=color("lime")

	c1=createSprite(60,60,100,45);
	c1.shapeColor=color("white")

	c2=createSprite(650,105,125,38);
	c2.shapeColor=color("white")

	c3=createSprite(200,220,100,45);
	c3.shapeColor=color("white")

	safe=createSprite(width/2 , 645, 200,20);
	safe.shapeColor=color("red");

	safe1=createSprite(500,605,20,100);
	safe1.shapeColor=color("red");

	safe2=createSprite(300,605,20,100);
	safe2.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 648, width, 62 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  background("lightblue");

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  //keyPressed();

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody,false);
  }
}



