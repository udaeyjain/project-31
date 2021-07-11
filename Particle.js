class Particle{
constructor(x,y,r){
var options={
restitution:0.5,
density:0.8
}
this.body=Bodies.circle(x,y,r,options);
World.add(World,this.body);
}

display(){
var pos = this.body.position;
elipseMode(CENTER);
this.colour=colour(random(0,255),random(0,255),random(0,2555));

}





}