var birdRadius = 10;

var birds = [];
var sling;

function setup() {
  createCanvas(600, 600);
  for (let i = 0; i < 5; ++i) {
    birds.push(new Bird(i * birdRadius * 3 + birdRadius, height / 2 - birdRadius, birdRadius));
  }

  sling = new Sling(200, height / 2 - 50, birds[0]);
}

function draw() {
  background(0);
  sling.show();

  let isSlingEmpty = true;
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
}