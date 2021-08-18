
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;


var ball1

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   
   var ball_options = {
    restitution: 0.2,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
ball1lo={
  restitution:0.99,
  frictionAir:0.05
}
  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
ball1=Bodies.circle(300,0,20,ball1lo)
World.add(world,ball1);

console.log(
  ball
)
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  

  fill("green");
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 ellipse(ball1.position.x,ball1.position.y,25,25)
}

