var bridge,bridgeImage;
var back,backgroundImage;
var gargoyleImage1,gargoyleImage2,gargoyleImage3,gargoyleImage4,gargoyleImage5;
var gargoyle, gargoyleWalking;
var knightImage1,knightImage2,knightImage3,knightImage4,knightImage5,archerDown;
var knight, knightRunning;
var invisibleGround;
var spike,spikeImage,spikeGroup;

function preload()
{
  
  backgroundImage = loadImage("Images/Background1.PNG");
  spikeImage = loadImage("Images/spike.png");
  archerDown = loadImage("Images/KnightImages/archerDown1.png")
  gargoyleWalking = loadAnimation("Images/GargoyleImages/Walk1.png","Images/GargoyleImages/Walk2.png","Images/GargoyleImages/Walk3.png","Images/GargoyleImages/Walk4.png","Images/GargoyleImages/Walk5.png");
  knightRunning = loadAnimation("Images/KnightImages/Run1.png","Images/KnightImages/Run2.png","Images/KnightImages/Run3.png","Images/KnightImages/Run4.png","Images/KnightImages/Run5.png");
}

function setup()
{
  createCanvas(750,500);
  
  back = createSprite(520,150,750,500);
  back.addImage(backgroundImage);
  back.scale = 1.3;
  back.velocityX = -4;
  
  //gargoyle = createSprite(200,200);
  //gargoyle.addAnimation("gargoyleWalking",gargoyleWalking);
  //gargoyle.velocityX = 2;

  knight= createSprite(100,330);
  knight.addAnimation("knightRunning",knightRunning);
  
  invisibleGround = createSprite(375,420,750,20);
  invisibleGround.visible = false;

  spikeGroup = new Group();
}

function draw()
{
  background("white");
  
  if(back.x < 270)
  {
    back.x = 520;
  }

  if(keyIsDown(UP_ARROW))
  {
    knight.velocityY = -15;
  }
  knight.velocityY = knight.velocityY + 0.5;

  knight.collide(invisibleGround);

  if(keyIsDown(DOWN_ARROW))
  {
    knight.addAnimation("archreDown",archerDown)
    knight.changeAnimation("archreDown",archerDown)
  }

  spawnSpikes();
  drawSprites();
}

function spawnSpikes()
{
  if(frameCount % 100 === 0)
{
  spike = createSprite(800,380,50,50);
  spike.y = Math.round(random(200,380));
  spike.addImage(spikeImage);
  spike.velocityX = -4;
  spike.scale = 0.3;
  spike.lifetime = 200;
  spikeGroup.add(spike);
}
}