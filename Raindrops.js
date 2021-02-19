class createDrop {
    constructor(x, y) {

        var options = {
            restitution: 0.2,
            friction: 0.001
        }

        this.drop = Bodies.circle(x, y, 2, options);
        this.radius = 2;
        World.add(world, this.drop);

    }

    updateY() {
        if (this.drop.position.y > height) {
            Matter.Body.setPosition(this.drop, { x: random(0, 400), y: random(0, 700) })
        }
    }

    showDrop() {
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.drop.position.x,this.drop.position.y,this.radius,this.radius);
    }

}