class Roof{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.roof = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.roof);
    }
    display(){
        var pos = this.roof.position;
        push();
        translate(pos.x, pos.y);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop()
    }
}