const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d')
// let startAngle = 0.85*Math.PI
// let endAngle = (0.12*9.9) * Math.PI;

let startAngle;
let endAngle ;

let centerY = canvas.height/2;
let centerX = canvas.width/2;
let validity = false;
const radius = 10;

let directions = "UP"


const grid = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ];
  
       
makeGrid();
function makeGrid(){
    // ctx.clearCanvas(0,0,canvas.width, canvas.height)
    for(let i =0; i<grid.length; i++){
        for(let j =0; j<grid[0].length;j++){
            if(grid[i][j] === 1){
                ctx.fillRect(j*20,i*20,20,20)
                ctx.fillStyle = "blue";
            }
        }
    }
    
}

function pacman(){
        
ctx.clearRect(0,0,canvas.width, canvas.height)
        ctx.beginPath();
         
        ctx.arc(centerX,centerY,radius, startAngle, endAngle,validity);
        ctx.lineTo(centerX, centerY);
        ctx.closePath();
        
        ctx.fillStyle = "yellow";
        ctx.fill();

        startAngle -= 0.07;
        endAngle += 0.07;

        
        

       
}

function animatePacman()  {
   
    if(directions === "RIGHT"){
        startAngle = 0.2 * Math.PI;
        endAngle = (0.2*9) * Math.PI;
        validity=false;
        centerX +=1;

        if(endAngle - startAngle > endAngle){
            startAngle = 0.2 *Math.PI
            endAngle = (0.2*9) * Math.PI;
        }
    }
    if(directions === "LEFT"){
        startAngle = -(0.8 * Math.PI);
        endAngle = -(1.2* Math.PI);
        validity = false;
        centerX -= 1;

        if(endAngle - startAngle > endAngle){
            startAngle = -(0.8 *Math.PI);
            endAngle = -(1.2 * Math.PI);
        }
    }
    if(directions === "UP"){
        startAngle = -(0.7 *Math.PI)
        endAngle = -((0.2*11.5) * Math.PI);
        validity = true;
        centerY -= 1

        if(endAngle - startAngle > endAngle){
            startAngle = -(0.7 *Math.PI)
        endAngle = -((0.2*11.5) * Math.PI);
        }
    }
    if(directions === "DOWN"){
        startAngle = 0.7 *Math.PI
        endAngle = (0.2*11.5) * Math.PI;
        validity = false;
        centerY += 1;

        if(endAngle - startAngle > endAngle){
            startAngle = 0.7 *Math.PI
        endAngle = (0.2*11.5) * Math.PI;
        }
    }
    return{x:centerX, y:centerY}
   
    // pacman();    
    
}
document.addEventListener('keydown', setDirections);
function setDirections(e){
	if(e.keyCode === 37 ){
		directions = 'LEFT'
	}
	if(e.keyCode === 38){
		directions = 'UP'
	}
	if(e.keyCode === 39){
		directions = 'RIGHT'
	}
	if(e.keyCode === 40){
		directions = 'DOWN'
	}
    
    
}

function gameLoop(){
    // pacman();
    animatePacman();
    // console.log(movePacman().x,)
}

let pacmanMove = setInterval(pacman,1)
setInterval(gameLoop,10);
// // gameLoop()


    
   

   




