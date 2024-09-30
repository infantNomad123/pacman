let ghost = [

    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,1,1,2,2,1,1,1,1,2,2,1,1,1,1,0,0,0],
    [0,0,0,1,2,2,3,3,1,1,2,2,3,3,1,1,1,0,0,0],
    [0,0,0,1,2,2,3,3,1,1,2,2,3,3,1,1,1,0,0,0],
    [0,1,1,1,2,2,3,3,1,1,2,2,3,3,1,1,1,1,1,0],
    [0,1,1,1,2,2,3,3,1,1,2,2,3,3,1,1,1,1,1,0],
    [0,1,1,1,1,2,2,1,1,1,1,2,2,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0],
    [0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0],
    [0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0]
]


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

const coordinates = {x:0,y:0}

function gost(){

    for(let i =0; i<ghost.length; i++){
        for(let j =0; j<ghost[0].length; j++){
    
            if(ghost[i][j] === 1){
                ctx.fillRect(j*2,i*2,2,2);
                ctx.fillStyle = "red"
               
                
                // ctx.fill()
            }
            if(ghost[i][j] === 2){
                ctx.fillRect(j*2,i*2,2,2);
                ctx.fillStyle = "white"
                // ctx.fill()
            }
            if(ghost[i][j] === 3){
                ctx.fillRect(j*2,i*2,2,2);
                ctx.fillStyle = "blue"
                // ctx.fill()
            }
         

           
            // if(ghost[i][j] === 1){
            //     ghost[i][j] = 0;

            // }
            
        }
    }
}

function moveGhost(){

for(let i =16; i < ghost.length; i++){
    for(let j =0; j< ghost[0].length; j++){
        ghost[i][j] = ghost[i][j] === 0 ? 1 : 0;   
        
    }
}

}



async function  animate(){
    
    ctx.clearRect(0,0,canvas.width, canvas.height);
    // if(frameCounter % 20 === 0){
    moveGhost();

    // }
    gost();
    // frameCounter ++;
    // requestAnimationFrame(animate);
    setTimeout(animate,200);
    // await delay(500);

    
   
}

animate();







// animateGhostOne();

