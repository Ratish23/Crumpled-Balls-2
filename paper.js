class Paper {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2  
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("images/Paper.png");

        World.add(world, this.body);
    }
    display(){
        push();
        var pos =this.body.position;
        imageMode(RADIUS);
        fill("pink");
        image(this.image,pos.x,pos.y,this.radius,this.radius);
        pop();
    }
}