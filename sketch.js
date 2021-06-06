var car, carImg;
var backgroundImg, welcomeHome;
var blugermImg, blugreengermImg, blupurpgermImg, greengermImg, lightblugermImg, pinkgermImg, purpgermImg, redevilgermImg, redgermImg;
var blugerm, blugreengerm, blupurpgerm, greengerm, lightblugerm, pinkgerm, purpgerm, redevilgerm, redgerm;

function preload() {
    backgroundImg = loadImage("images/cars on road.png");

    welcomeHome = loadImage("images/welcome-home-img-2.jpg");

    carImg = loadImage("images/pink car.png");

    blugermImg = loadImage("images/blugerm.png");
    blugreengermImg = loadImage("images/blugreengerm.png");
    blupurpgermImg = loadImage("images/blupurpgerm.png");
    greengermImg = loadImage("images/greengerm.png");
    lightblugermImg = loadImage("images/lightblugerm.png");
    pinkgermImg = loadImage("images/pinkgerm.png");
    purpgermImg = loadImage("images/purpgerm.png");
    redevilgermImg = loadImage("images/redevilgerm.png");
    redgermImg = loadImage("images/redgerm.png");
}

function setup(){
    createCanvas(1020, 900);

    car = createSprite(580, 700);
    car.addImage(carImg);
    car.scale = 0.35;

    blugerm = createSprite(150, 600);
    blugerm.addImage(blugermImg);
    blugerm.scale = 0.2;

    blugreengerm = createSprite(280, 850);
    blugreengerm.addImage(blugreengermImg);
    blugreengerm.scale = 0.2;

    blupurpgerm = createSprite(280, 100);
    blupurpgerm.addImage(blupurpgermImg);
    blupurpgerm.scale = 0.2;

    greengerm = createSprite(530, 800);
    greengerm.addImage(greengermImg);
    greengerm.scale = 0.2;

    lightblugerm = createSprite(400, 500);
    lightblugerm.addImage(lightblugermImg);
    lightblugerm.scale = 0.2;

    pinkgerm = createSprite(780, 200);
    pinkgerm.addImage(pinkgermImg);
    pinkgerm.scale = 0.2;

    purpgerm = createSprite(780, 870);
    purpgerm.addImage(purpgermImg);
    purpgerm.scale = 0.2;

    redevilgerm = createSprite(900, 500);
    redevilgerm.addImage(redevilgermImg);
    redevilgerm.scale = 0.2;

    redgerm = createSprite(1030, 200);
    redgerm.addImage(redgermImg);
    redgerm.scale = 0.2;
}

function draw(){
    background(backgroundImg);

    fill(255, 0, 0);
    textSize(30);
    text("🦠 GO HOME! SAVE YOURSELF FROM COVID-19! 🦠", 200, 1100);

    drawSprites();

    
    camera.position.x = car.x;
    camera.position.y = car.y;
            

    if(keyDown(UP_ARROW)) {
        car.y -= 10;
   }
   
   if(car.y <= -400) {
    background("white");

    textSize(60);
    fill("black");
    background(welcomeHome);

    car.y = (580, -400);

    drawSprites();
   }
}
