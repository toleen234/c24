const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var boxtreS;
var boxquatrE;
var pIguNo;
var pIgDoS;
var loGunO;
var loGdeuX;
var ground;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20)
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pIguNo= new pIg(810,350) 
    loGunO= new loG (810,260,300,PI/2)
    boxtreS= new Box(700,240,70,70)
    boxquatrE= new Box(920,240,70,70)
    pIgDoS= new pIg(810,220)
    loGdeuX= new loG(810,180,300,PI/2)

}

function draw(){
    background("Yellow");
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    boxtreS.display();
    boxquatrE.display();
    ground.display();
    pIguNo.display();
    loGunO.display();
    pIgDoS.display();
    loGdeuX.display();
}