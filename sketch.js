var lane1,lane2,lane3,lane4;
var deformation;
var car;
var car1;
var car2;
var car3;
var wall;
var speed,speed1,speed2,speed3, weight;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
lane1  = createSprite(400,90,800,10);
lane2  = createSprite(400,180,800,10);
lane3  = createSprite(400,270,800,10);
lane4  = createSprite(400,360,800,10);
wall = createSprite(750,200,10,400);
car = createSprite(80,45,30,30);
car1 = createSprite(80,135,30,30);
car2 = createSprite(80,225,30,30);
car3= createSprite(80,315,30,30);

weight=random(400,1500);
weight1=random(400,1500);
weight2=random(400,1500);
weight3=random(400,1500);


speed = random(55,90);
speed1 = random(55,90);
speed2 = random(55,90);
speed3 = random(55,90);

car.velocityX=speed;
car1.velocityX = speed1;
car2.velocityX=speed2;
car3.velocityX = speed3;

}

function draw() {
  background(0);  

if (wall.x - car.x < car.width/2 +wall.width/2){
var deformation = 0.5*weight*speed*speed/22500;
car.velocityX = -1;


if(deformation>180){
car.shapeColor = "red";
text("C",780,45);
}
if(deformation<180 && deformation>100){
car.shapeColor = "yellow";
text("B",780,45);
}

if(deformation<100){
  car.shapeColor = "green";
  text("A",780,45);
}

}

if (wall.x - car1.x < car1.width/2 +wall.width/2){
  var deformation = 0.5*weight1*speed1*speed1/22500;
  car1.velocityX = -1;
  
  
  if(deformation>180){
  car1.shapeColor = "red";
  text("C",780,135);
  }
  if(deformation<180 && deformation>100){
  car1.shapeColor = "yellow";
  text("B",780,135);
  }
  
  if(deformation<100){
    car1.shapeColor = "green";
    text("A",780,135);
  }
  }
  
  if (wall.x - car2.x < car2.width/2 +wall.width/2){
    var deformation = 0.5*weight2*speed2*speed2/22500;
    car2.velocityX = -1;
    
    
    if(deformation>180){
    car2.shapeColor = "red";
    text("C",780,225);
    }
    if(deformation<180 && deformation>100){
    car2.shapeColor = "yellow";
    text("B",780,225);
    }
    
    if(deformation<100){
      car2.shapeColor = "green";
      text("A",780,225);
    }
    
    }
    
    if (wall.x - car3.x < car3.width/2 +wall.width/2){
      var deformation = 0.5*weight3*speed3*speed3/22500;
      car3.velocityX = -1;
      
      
      if(deformation>180){
      car3.shapeColor = "red";
      text("C",780,315);
      }
      if(deformation<180 && deformation>100){
      car3.shapeColor = "yellow";
      text("B",780,315);
      }
      
      if(deformation<100){
        car3.shapeColor = "green";
        text("A",780,315);
      }
      
      }
      

  drawSprites();

}