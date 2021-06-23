class Bob{
    constructor(x,y,radius){
     var options={
         'isStatic':false,
         'restitution':1.0,
         'friction':0.9,
         'density':1.0
     }
     this.radius= radius;
     this.body=Bodies.circle(x, y,radius, options)
     World.add(world, this.body);
    }
    display(){
        fill(0);
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y, this.radius, this.radius);
    }
}
