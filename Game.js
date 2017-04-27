var context;
var canvasWidth = 400;
var canvasHeight = 500;


function Game(ball){
	this.blocks = [];
	this.ball = ball;
	this.paddle;
	this.lives = 3;
	this.score = 0;
}

Game.prototype.resetCanvasAndContext = function(){
	var canvas = document.getElementById('canvas');
	context = canvas.getContext('2d');
	context.clearRect(0,0,canvasWidth,canvasHeight);
}

Game.prototype.addBlocks = function(){
	for (var i = 0; i <= 75; i = i+15) {
  		for (var j = 0; j <= 350 ; j = j+50) {
  			var blk = new Block(j,i,15,50);
  			this.blocks.push(blk);
  		}
  	}
}

Game.prototype.addPaddle = function(){
  	this.paddle = new Paddle(75,canvasHeight - 50,10,150);
}

Game.prototype.renderBlocks = function(){
  	for (var i = 0; i < this.blocks.length; i++) {
  		game.blocks[i].render(context);
  	}
}

Game.prototype.checkCollisionsWithBlocks = function(){
	for (var i = 0; i < this.blocks.length; i++) {
		if(isColliding(this.ball,this.blocks[i])){
			this.blocks[i].visible=false;
			this.ball.speed[0] = game.ball.speed[0]*-1;
			this.ball.speed[1] = game.ball.speed[1]*-1;
			this.score++;
		}
	}
}

Game.prototype.checkCollisionWithPaddle = function(){
	if(isColliding(this.ball, new Block(this.paddle.x,this.paddle.y,this.paddle.height,this.paddle.width))){
		this.ball.speed[0] = game.ball.speed[0]*-1;
		this.ball.speed[1] = game.ball.speed[1]*-1;
	}
}

function isColliding(ball, block) {
	var isXGreater = ball.centerX + ball.radius > block.x;
	var isXLower = ball.centerX - ball.radius < block.x + block.width;
	var isYGreater = ball.centerY + ball.radius > block.y;
	var isYLower = ball.centerY - ball.radius < block.y + block.height;
	return isXGreater && isYGreater && isXLower && isYLower && block.visible;
}

document.addEventListener('keydown', function(event) {
			
	if(event.keyCode == 37){
		game.paddle.moveLeft(canvasWidth);
	}

	if(event.keyCode == 39){
		game.paddle.moveRight(canvasWidth);
	}
  
}, false);

Game.prototype.play = function(){
	var game = this;

	game.resetCanvasAndContext();

	var intervalId = setInterval(function() {

		if(game.lives <= 0){
			alert("Game Over! Total Score: "+game.score);
			clearInterval(intervalId);
		}

		game.resetCanvasAndContext();
  		game.ball.render(context);
  		game.paddle.render(context);
  		game.renderBlocks();
		

  		if(game.ball.centerX === canvasWidth - game.ball.radius) {
  			game.ball.speed[0] = -1;
  		}
  		if(game.ball.centerX === game.ball.radius) {
  			game.ball.speed[0] = 1;
  		}
		if(game.ball.centerY === canvasHeight-game.ball.radius) {
			game.lives--;
			game.ball.speed[1] = -1;
		}
		if(game.ball.centerY === game.ball.radius) {
			game.ball.speed[1] = 1;
		}

  		game.ball.centerX += game.ball.speed[0];
  		game.ball.centerY += game.ball.speed[1];

  		game.checkCollisionsWithBlocks();
  		game.checkCollisionWithPaddle();
  			
	}, 2);
}

var ball = new Ball(100,300,10, [1,1]);
var game = new Game(ball);
game.addBlocks();
game.addPaddle();
game.play();

