class Pig {
    constructor(xPos, yPos, radius, /*skin*/) {
        this.pos = createVector(xPos, yPos);
        this.radius = radius;
        //this.skin = skin;
    }

    show() {
        //context.drawImage(this.skin, this.x, this.y, this.w, this.h);
        stroke("lime");
        noFill();
        strokeWeight(this.radius);
        point(this.pos.x, this.pos.y);
    }

    setPos(newXPos, newYPos) {
        this.pos = createVector(newXPos, newYPos);
    }
}
