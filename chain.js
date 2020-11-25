class Rope{
    constructor(body1, body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.04
        }
        this.body=Constraint.create(options)
        World.add(world, this.body)
    }
    display(){
        var startpoint = this.body.bodyA.position
        var endpoint = this.body.bodyB.position
        strokeWeight(4);
        line(startpoint.x, startpoint.y, endpoint.x, endpoint.y)
    }
}