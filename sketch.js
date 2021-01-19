
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4;
var rope;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(400,400,50);
	bob2 = new Bob(450,400,50);
	bob3 = new Bob(500,400,50);
	bob4 = new Bob(550,400,50);
	roof = new Roof(400,150,500,50);
	bobDiameter = 60;
	rope = new Rope(bob1.body, roof.body,-bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();
  rope.display();
}



