class Sling {
  constructor(xPos, yPos, bird) {
    this.pos = createVector(xPos, yPos);
    this.birdHeld = bird;
    bird.isHeld = true;
  }

  show() {
    noStroke();
    fill(255, 0, 0);
    rect(this.pos.x, this.pos.y, 10, 50);
  }
}
