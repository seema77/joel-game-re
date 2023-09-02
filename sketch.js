var bk;
var PLAY
var END
var gameState=PLAY;
var ball;
var topLine,bottomLine,leftLine,rightLine

function preload(){
bkImg=loadImage("table.jpg");
r1Img=loadImage("r1.png");
r2Img=loadImage("r2.png");
ballImg=loadImage("ball.png");
}


function setup(){
createCanvas(1200,600); // width height

racket1=createSprite(40,430,10,10);
racket1.addImage(r1Img);
racket1.scale=0.3; // left or right button

racket2=createSprite(1150,120,10,10);
racket2.addImage(r2Img);
racket2.scale=0.3; // up or down button // create ball

ball=createSprite(600,300,20,20)
ball.addImage(ballImg)
ball.scale =0.1 

racket1.setCollider("circle",0,-60,100)
racket1.debug=false

topLine=createSprite(600,60,1200,3);
topLine.shapeColor="black"

bottomLine=createSprite(600,540,1200,3);
bottomLine.shapeColor="black"

leftLine=createSprite(10,300,5,600);
leftLine.shapeColor="black"

rightLine=createSprite(1190,300,5,600);
rightLine.shapeColor="black"
}

function draw(){
background(bkImg);

if(gameState===PLAY){
    if(keyDown("space")){
        ball.velocityX=10
        ball.velocityY=-10
    }
    if(keyDown("up")){
        racket1.y=racket1.y-10
        }
        racket2.y=ball.y;
        if(keyDown("down")){
            racket1.y=racket1.y+10
            }
           
            if(ball.isTouching(leftLine) || ball.isTouching(rightLine)){
               // ball.destroy()
                gameState=END;
               
            }  
           
 ball.bounceOff(racket1);
ball.bounceOff(racket2);
racket1.bounceOff(topLine);
racket1.bounceOff(bottomLine);
racket2.bounceOff(topLine);
ball.bounceOff(topLine)
 racket2.bounceOff(bottomLine);
ball.bounceOff(bottomLine)
            drawSprites()
           
}
else if(gameState===END){
   ball.destroy()
    textSize(30)
    fill("red")
text("Game Over!!!",1000,300);
}


}
