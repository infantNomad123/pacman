const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

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
let pacman = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
   
   
]








// const coordinates = {x:0,y:0}

let ghostX =10;
let ghostY = 10;

let pacmanX =70;
let pacmanY =15;

function gost(){


//Shallow copy ghost
// ctx.clearRect(0,0,canvas.width, canvas.height)
for(let j =0; j<ghost.length; j++){
    
    for(let k = 0; k<ghost[j].length; k++){
        let x = ghostX + k*2;
        let y = ghostY + j*2;
        
        if(ghost[j][k] === 1)ctx.fillStyle = "red"
       else if(ghost[j][k] === 2)ctx.fillStyle = "white"
        else if(ghost[j][k] === 3)ctx.fillStyle = "blue"
        else continue;
           
        

        ctx.fillRect(x,y,2,2);

    }
}


}

function moveGhost(){
    ghostX+=2;
    if(ghostX > canvas.width) ghostX = 0;

    for(let i =16; i < ghost.length; i++){
        for(let j =0; j< ghost[0].length; j++){
            ghost[i][j] = ghost[i][j] === 0 ? 1 : 0;   

        }
    }

}

function movePacman(){
    pacmanX += 2;
    if(pacmanX >  canvas.width) pacmanX = 0;

    for(let i =8; i<12; i++){
        for(let j =8; j<17; j++){
            pacman[i][j] = pacman[i][j] === 0 ? 1 : 0;
        }
    }
}

function drawPacman(){
    
    for(let i =0; i< pacman.length; i++){
        for(let j = 0; j<pacman[i].length; j++){
            let x = pacmanX + j * 2;
            let y = pacmanY + i * 2;
            if(pacman[i][j] === 1) {
                ctx.fillStyle = "yellow";
            }else if(pacman[i][j] === 2){
                ctx.fillStyle = "red";
            }else if(pacman[i][j] === 3){
                ctx.fillStyle = "white";
            }
            else continue;
            ctx.fillRect(x,y,2,2);
        }
    }

}




function  animate(){
    
    ctx.clearRect(0,0,canvas.width, canvas.height);
    // if(frameCounter % 20 === 0){
    moveGhost();
    drawPacman();

    movePacman();

    // }
    gost();
    // frameCounter ++;
    // requestAnimationFrame(animate);
    // setTimeout(animate,200);
    // await delay(500);

    
   
}

setInterval(animate,200);







// // animateGhostOne();

// // const canvas = document.getElementById("canvas");
// // const ctx = canvas.getContext('2d');

// // // Define the size of each grid cell (width and height)
// // const cellSize = 2;

// // // Define the ghost's shape using a 2D array
// // let ghost = [
// //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// //     [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
// //     [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
// //     [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
// //     [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
// //     [0, 0, 0, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 0, 0, 0],
// //     [0, 0, 0, 1, 2, 2, 3, 3, 1, 1, 2, 2, 3, 3, 1, 1, 1, 0, 0, 0],
// //     [0, 0, 0, 1, 2, 2, 3, 3, 1, 1, 2, 2, 3, 3, 1, 1, 1, 0, 0, 0],
// //     [0, 1, 1, 1, 2, 2, 3, 3, 1, 1, 2, 2, 3, 3, 1, 1, 1, 1, 1, 0],
// //     [0, 1, 1, 1, 2, 2, 3, 3, 1, 1, 2, 2, 3, 3, 1, 1, 1, 1, 1, 0],
// //     [0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 0],
// //     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
// //     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
// //     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
// //     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
// //     [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
// //     [0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0],
// //     [0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0],
// //     [0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0]
// // ];

// // // Starting position for ghost drawing
// // let ghostX = 0;
// // let ghostY = 0

// // // Function to draw the ghost on the canvas based on the 2D array
// // function drawGhost() {
// //     ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas before each redraw

// //     for (let i = 0; i < ghost.length; i++) {
// //         for (let j = 0; j < ghost[i].length; j++) {
// //             let x = ghostX +  j * cellSize; // X coordinate based on the grid position
// //             let y = ghostY + i * cellSize; // Y coordinate based on the grid position

// //             // Set different colors for different ghost parts
// //             if (ghost[i][j] === 1) ctx.fillStyle = "red";      // Red for ghost body
// //             else if (ghost[i][j] === 2) ctx.fillStyle = "white"; // White for ghost eyes
// //             else if (ghost[i][j] === 3) ctx.fillStyle = "blue";  // Blue for ghost pupils
// //             else continue;

// //             ctx.fillRect(x, y, cellSize, cellSize); // Draw each cell of the ghost
// //         }
// //     }
// // }

// // // Function to animate the ghost by moving it horizontally
// // function moveGhost() {
// //     ghostX += 2; // Increment ghost's X position
// //     if (ghostX> canvas.width) ghostX = 0; // Reset position when reaching the end of the canvas
// //     for(let i =16; i < ghost.length; i++){
// //         for(let j =0; j< ghost[0].length; j++){
// //             ghost[i][j] = ghost[i][j] === 0 ? 1 : 0;   

// //         }
// //     }
// // }

// // Animation loop
// function animate() {
//     moveGhost(); // Update ghost position
//     drawGhost(); // Render ghost at new position
//     requestAnimationFrame(animate); // Loop animation
// }

// // Start the animation
// animate();


