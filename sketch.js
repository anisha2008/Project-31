var maxDrops;
var dropsImg;
var dropsGrp
var man,manImg
var thunder,thunder1,thunder2,thunder3,thunder4;
var rand;

function preload(){
    dropsImg=loadImage("proc41images/images/circle.png")
    manImg=loadImage("proc41images/images/Walking Frame/walking_1.png")
    thunder1=loadImage("proc41images/images/thunderbolt/1.png");
    thunder2=loadImage("proc41images/images/thunderbolt/2.png");
    thunder3=loadImage("proc41images/images/thunderbolt/3.png");
    thunder4=loadImage("proc41images/images/thunderbolt/4.png");
}

function setup(){
   createCanvas(400,650)
    
   man=createSprite(180,490,10,10)
   man.addImage("abc",manImg)
   man.scale=0.4

   ground=createSprite(100,640,700,20)

   dropsGrp=new Group()
}

function draw(){
    background("black")
    
    

      Rain()
      Thunderstrom()

  drawSprites()


}   

function Rain(){
    maxDrops=100
    for(var i=0 ; i<maxDrops ; i++){
    maxDrops=createSprite(random(0,400),random(0,100),5,5)
    maxDrops.addImage(dropsImg)
    }
    maxDrops.scale=0.01
    maxDrops.velocityY=7
    maxDrops.lifetime=200
    dropsGrp.add(maxDrops)
}

function Thunderstrom(){
    if(frameCount % 200===0){ 
        thunder=createSprite(random(0,300),20,20,20)
        var rand =Math.round(random(1,4));
        switch(rand) {
          case 1: thunder.addImage(thunder1);
                  break;
          case 2: thunder.addImage(thunder2);
                  break;
          case 3: thunder.addImage(thunder3);
                  break;
          case 4: thunder.addImage(thunder4);
                  break;
       }
       thunder.lifetime=100;
       thunder.scale=0.5

        
    }

}
