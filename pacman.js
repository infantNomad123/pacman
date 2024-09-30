const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d')

/*Pointing to its x or -x direction*/ 



/*Pointing to its y or -y direction*/ 
// let startAngle = 0.7 *Math.PI
// let endAngle = (0.2*11.5) * Math.PI;

/* Pointing pacman to its -x direction */
// let startAngle = 0.85*Math.PI
// let endAngle = (0.12*9.9) * Math.PI;

const startAngleArr = [];
const endAngleArr = [];

let centerY = canvas.height/2;
let centerX = canvas.width/2;
const radius = 10;

let directions = 'STATIONARY';

let left;
let right;
let up;
let down;
        
function pacman(startAngle, endAngle, validity){


        ctx.clearRect(0,0,canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(centerX,centerY,radius, startAngle, endAngle, validity);
        ctx.lineTo(centerX, centerY);
        ctx.closePath();

        
        
        ctx.fillStyle = "yellow";
        ctx.fill();

        startAngle -= 0.07;
        endAngle += 0.07;

        // pacman(startAngle, endAngle, validity)

        if(endAngle -  startAngle > endAngle){
            pacman(startAngle, endAngle, validity)
        }

        
        
        
        
}

function movePacman(){
    if(directions === 'LEFT'){
        let startAngle = 0.80*Math.PI
        let endAngle = (0.12*9.9) * Math.PI;
        let validity = true;
        centerX -= 20;
        pacman(startAngle, endAngle, validity);

       
    
        
    }
    if(directions === 'RIGHT'){
        let startAngle = 0.2 *Math.PI
        let endAngle = (0.2 * 9) * Math.PI;
        let validity = false;
        centerX += 20
        pacman(startAngle, endAngle, validity)
    }
    if(directions === 'UP'){
        let startAngle = -0.7 *Math.PI
        let endAngle = -((0.2*11.5) * Math.PI);
        let validity = true;
        centerY -= 20
        pacman(startAngle, endAngle, validity)
    }
    if(directions === 'DOWN'){
        let startAngle = 0.7 *Math.PI
        let endAngle = (0.2*11.5) * Math.PI;
        let validity = false;
        centerY += 20;
        pacman(startAngle, endAngle, validity)
    }

    if(directions === 'STATIONARY'){
        pacman(0.2 * Math.PI, (0.2*9)*Math.PI, false)
    }
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
        // rotatePacman();
        movePacman();
       
      
    }
setInterval(gameLoop,50);


