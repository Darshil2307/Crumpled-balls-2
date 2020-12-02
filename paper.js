class Paper
{
constructor(x, y, radius ) 
{      
var options = {
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}
this.body = Bodies.circle(x,y,radius,options);
this.width = radius
this.height = radius
this.image = loadImage("Images/paper.png");
World.add(world,this.body);
}
display()
{
  imageMode(CENTER);
  image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
}
};
