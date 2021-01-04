class Paper{
    construction(x,y){
        var options= {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,50,options);
        this.radius=50;
        
        World.add(world,this.body);
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius*2,this.radius*2);
        fill("white");
        pop();
    }
}