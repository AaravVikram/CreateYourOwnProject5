class Ball{
    constructor(x,y,r){
        var options={ 
            density: 0.8,
            restitution: 0.2
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r=r;
        World.add(world,this.body);
        this.image = loadImage("sprites/soccer-ball.png")
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0,0,50,70)
        pop();
    }

    
}

