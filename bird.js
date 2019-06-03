class Bird {
  constructor(xPos, yPos, radius) {
    this.pos = createVector(xPos, yPos);
    this.radius = radius;
    this.isHeld = false;
  }

  show() {
    stroke(255);
    noFill();
    strokeWeight(this.radius);
    point(this.pos.x, this.pos.y);
  }

  setPos(newXPos, newYPos) {
    this.pos = createVector(newXPos, newYPos);
  }

  updatePos() {

  }

  equals(bird) {
    if (!bird) {
      return false;
    }
    return this.pos.x == bird.pos.x &&
           this.pos.y == bird.pos.y &&
           this.radius == bird.radius;
  }
}
