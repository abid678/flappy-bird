var can = document.querySelector("#canvas");
var ctx = can.getContext("2d");

var bg = new Image();
bg.src = "images.png";
var bird = new Image();
bird.src = "1620236291175.png";


var up = new Image();
up.src ="IMG_20210503929_732.png";
var down = new Image();
down.src = "1620236329232.png";
var bx = 100;
var by = 500;
var width = 1000;
var gap = -550;
var pipe =[];
pipe[0] = {
				x:width,
				y:700
				
				
}


can.addEventListener("click",function(){
			by-=80;	
})

function draw(){
			ctx.drawImage(bg,0,0,1000,1700)
			var cons = up.height-gap;
			for(var i=0; i<pipe.length;i++){
			
	ctx.drawImage(up,pipe[i].x , pipe[i].y,140,1200)
  ctx.drawImage(down,pipe[i].x , pipe[i].y+cons,140,710)	
  
	pipe[i].x-=2;	
			
if(pipe[i].x == 200) {
	pipe.push({
	x:width,
	y:Math.random()*-500+1			
					
	})	
}	
	
			
}
			ctx.drawImage(bird,bx,by,140,145)			
			by+=2;
		
		
		requestAnimationFrame(draw)
}
draw()











