function Paddle(x, y, height, width){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.color = 'blue';
}

Paddle.prototype.toString = function(){
	console.log('x: '+this.x+', y: '+this.y+', width: '+this.width+', height: '+this.height);
}

Paddle.prototype.render = function(context){
	context.beginPath();
	//var thickness = 2;
	//context.fillStyle='#000';
  	//context.fillRect(this.x - (thickness), this.y - (thickness), this.width + (thickness * 2), this.height + (thickness * 2));
  	context.fillStyle = this.color;
	context.fillRect(this.x, this.y, this.width, this.height);
	context.fill();
}

Paddle.prototype.moveLeft = function(canvasWidth){
	if(this.x >= 20){
		this.x-=20;
	}
}

Paddle.prototype.moveRight = function(canvasWidth){
	if(this.x + this.width <= canvasWidth - 20){
		this.x+=20;
	}
}

