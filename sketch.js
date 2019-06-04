const birdRadius = 10;
const pigRadius = 10;
const birdsCount = 5;
const pigsCount = 5;
var birds = [];
var pigs = [];
var sling;
var pigSkins = [];
pigSkins[0] = tryToLoad("pig_1");

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < birdsCount; ++i) {
    birds.push(new Bird(i * birdRadius * 3 + birdRadius, height / 2 - birdRadius, birdRadius));
  }

    for (let i = 0; i < pigsCount; ++i) {
        pigs.push(new Pig(width / 1.5 + i * pigRadius * 3, height / 2 - pigRadius, pigRadius));
    }

  sling = new Sling(200, height / 2 - 50, birds[0]);
}

function draw() {
  //drawing the background and the sling
  background(0);
  sling.show();

    let isSlingEmpty = true;
    //drawing the birds
  for (let bird of birds) {
    if (bird.isHeld) {
      bird.setPos(sling.pos.x, sling.pos.y);
    }
    if (bird.equals(sling.bird)) {
      isSlingEmpty = false;
    }
    bird.show();
  }

  if (isSlingEmpty) {
    if (birds.length > 0) {
      sling.bird = birds[0];
      birds[0].isHeld = true;
    }
  }
    //drawing the pigs
    for (let pig of pigs) {
        pig.show();
    }
}
