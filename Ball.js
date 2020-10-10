class Ball {
  constructor(x,y,radius) {
    var options ={
        //frictionAir: 0,
        //friction: 0,
        //frictionStatic: 1,
        inertia: 100,
        restitution: 0.10
    }
    this.body = Bodies.circle(x, y, radius, options);
this.radius = radius
World.add(world, this.body);

  }




  display() {
    var pos = this.body.position
    ellipse(pos.x, pos.y, this.radius, this.radius)

  }
}
