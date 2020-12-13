class Rope{
    constructor(bodyA,bodyB){
        var options = {
            bodyA : bodyA,//first object
            bodyB : bodyB,//second object
            stiffness : 0.2,//tightness
            length : 20
        }
        this.r1 = Constraint.create(options);//creating constraint
        World.add(world,this.r1);//adding it to the world

    }

    display(){
        var pointA = this.r1.bodyA.position;
        var pointB = this.r1.bodyB.position;
        
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);//displaying the line

    }
}