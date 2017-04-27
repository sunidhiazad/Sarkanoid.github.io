function Block(x, y, height, width){
	this.x = x;
	this.y = y;
	this.height = height;
	this.width = width;
	this.color = getRandomLightColor();
	this.visible = true;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getRandomLightColor() {
    var letters = 'BCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

function getRandomShadesOfBlue(){
	h = 240;
	s = Math.floor(Math.random() * 100);
	l = Math.floor(Math.random() * 100);
	color = 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
	return color;
}

Block.prototype.toString = function(){
	console.log('['+this.x+','+this.y+']: w='+this.width+', h='+this.height);
}

Block.prototype.render = function(context){
if(this.visible){
	context.beginPath();
  	context.fillStyle = this.color;
	context.fillRect(this.x, this.y, this.width, this.height);
	context.fill();
}
}

