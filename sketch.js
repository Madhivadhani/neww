const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var engine , world
var box;
  
function setup() {
  createCanvas(400,400);
  engine = Engine.create();

  world = engine.world;
  var option ={
    isStatic : false
  }
box = Bodies.rectangle(100,200,50,50,option)
World.add(world,box);

}

function draw() {
  background("red"); 
  Engine.update(engine); 
  rectMode(CENTER)
  rect(box.position.x,box.position.y,50,50)

  }