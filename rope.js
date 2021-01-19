class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x:this.offsetX, y:this.offsetY}
        }  
        this.rope = Constraint.create(options);
        World.add(world, this.rope);          
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var ptB =  this.rope.bodyB.position;
        strokeWeight(2);
        line(pointA.x,pointA.y, ptB.x + this.offsetX, ptB.y + this.offsetY);
    
    }
}