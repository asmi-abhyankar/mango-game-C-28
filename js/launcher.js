class launcher{
    constructor(bodyA,pointB){
       var Options={
           bodyA:bodyA,
           pointB:pointB,
           stiffness:0.004,
           length:1.5
       }
       this.bodyA=bodyA;
       this.pointB=pointB;

       this.launcher=Constraint.create(Options);
       World.add(world,this.launcher);
    }
    fly(){
        this.launcher.bodyA=null;
    }
    display(){
        if(this.launcher.bodyA){
            var pointA=this.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(3);
            stroke(0);
            line (pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}