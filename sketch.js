const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, bridge;
var leftWall, rightWall;
var jointPoint;
var jointLink;

var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0, height - 10, width * 2, 20, "#795548", true);
  leftWall = new Base(50, 300, 100, 100, "#8d6e63", true);
  rightWall = new Base(760, 300, 100, 100, "#8d6e63", true);

  //crie a ponte amarela aqui
  bridge = new Bridge(17,{x:70,y:250})
  jointPoint = new Base(700,280,40,20,"#8d6e63",true)
  Matter.Composite.add(bridge.body, jointPoint);
  jointLink = new Link(bridge, jointPoint);


  //defina o número de pedras aqui
  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  //chame os objetos aqui
  bridge.show()
  leftWall.show()
  rightWall.show()
  for (var stone of stones) {
    stone.show();
  }
}
