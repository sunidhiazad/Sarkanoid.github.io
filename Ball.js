function Ball(centerX, centerY, radius, speed){
	this.centerX = centerX;
	this.centerY = centerY;
	this.radius = radius;
	this.color = '#ff0000';
	this.speed = speed;
}

Ball.prototype.toString = function(){
	console.log('['+this.centerX+','+this.centerY+']: r='+this.radius);
}

Ball.prototype.render = function(context){
	context.beginPath();
	context.fillStyle = this.color;
	context.arc(this.centerX, this.centerY, this.radius, 0, 2 * Math.PI, false);
	context.fill();
}