class Chain{
    constructor(bodyA,bodyB){
 var option= {
     bodyA:bodyA,
     bodyB:bodyB,
     stiffness:0.5,
 }
 this.chain=Matter.Constraint.create(option)
 World.add(world,this.chain)
    }
    display(){
        var a = this.chain.bodyA.position
        var b= this.chain.bodyB.position
        strokeWeight(4)
        line (a.x,a.y,b.x,b.y)
    }
}