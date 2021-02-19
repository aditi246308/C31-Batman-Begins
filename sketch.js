const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var man, thunder1, thunder2, thunder3, thunder4, thunder, umbrella, rain = [], rand, maxDrops = 100, thunderFrame = 0;

function preload(){
   thunder1 = loadImage("thunderbolt/1.png");
   thunder2 = loadImage("thunderbolt/2.png");
   thunder3 = loadImage("thunderbolt/3.png");
   thunder4 = loadImage("thunderbolt/4.png");
   
}

function setup(){
   engine = Engine.create();
   world = engine.world;
   createCanvas(400,700);

   umbrella = new Umbrella(200,500);

   //creating drops

   if(frameCount%100 === 0){
       for(var i = 0; i<maxDrops; i++){
           rain.push(new createDrop(random(0,400),random(0,700)));
       }
   }

    
}

function draw(){
   background("black");
   Engine.update(engine);
   
   umbrella.display();
   
   //creating thunder

   rand = Math.round(random(1,4));
   if(frameCount%80 === 0){
     thunderFrame = frameCount;
     thunder = createSprite(random(10,370),random(10,30),10,10);
     switch(rand){
         case 1: thunder.addImage(thunder1);
         break;
         case 2: thunder.addImage(thunder2);
         break;
         case 3: thunder.addImage(thunder3);
         break;
         case 4: thunder.addImage(thunder4);
         break;
         default:break;
         
     }  
      thunder.scale = random(0.3,0.7);
      
   }

   if(thunderFrame+10 === frameCount && thunder){
       thunder.destroy();
   }

   //displaying raindrops
  for(var i = 0; i<maxDrops; i++){
   rain[i].showDrop();
   rain[i].updateY();   
  }

   drawSprites();
}   

