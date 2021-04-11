class Tree{
    constructor(x,y){
        var options={
            isStatic:true

        }
		this.tree = Bodies.rectangle(x,y,450,600,options);
		World.add(world,this.tree);
		this.image = loadImage("images/tree.png");
		
    }
display(){
   
    var pos = this.tree.position;
  
	
	
	
			push()
			translate(pos.x, pos.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-300,450, 600);
			pop()
}
}