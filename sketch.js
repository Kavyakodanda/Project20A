var tom,jerry,jerryImg,tomImg1,tomImg2,tomImg3,jerryImg1,jerryImg2,jerryImg3,garden;

function preload() {
    //load the images here
    tomImg1=loadAnimation("images/tomOne.png");
    tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg3=loadAnimation("images/tomFour.png");
    
    garden=loadImage("images/garden.png");

    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg3=loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800,500);
    tom.addAnimation("tomIMAGE",tomImg1);
    tom.scale=0.2;

    jerry=createSprite(200,500);
    jerry.addAnimation("jerryIMAGE",jerryImg1);
    jerry.scale=0.12;

}

function draw() {

    background(garden);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width-jerry.width)/2){
        tom.velocityX=0;
        tom.x=300;
        tom.scale=0.2;
        tom.addAnimation("TomFunny",tomImg3);
        jerry.addAnimation("jerryFunny",jerryImg3)

        tom.changeAnimation("TomFunny");
        jerry.changeAnimation("jerryFunny");
        jerry.scale=0.12;
    }
    
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      tom.velocityX=-4;
      tom.addAnimation("TomFunnyHai",tomImg2);
      tom.changeAnimation("TomFunnyHai");
      
      jerry.addAnimation("jerryFunnyHai",jerryImg2)
      jerry.frameDelay=25;
      jerry.changeAnimation("jerryFunnyHai");  
  }
}
