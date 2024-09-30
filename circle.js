const canvas = document.getElementById("canvas");
const ctx =  canvas.getContext('2d');
const radius = 20;
let x = canvas.width/2;
let y = canvas.height/2;


function clearArc(ctx, x,y,radius, startAngle = 0, endAngle = 2* Math.PI){
    ctx.save();
    ctx.beginPath();
    ctx.arc(x,y,radius, startAngle,endAngle);
    ctx.clip();
    ctx.clearRect(x-radius, y-radius,radius*2,radius*2)
    ctx.restore();

}

function moveCircle(){
    ctx.clearRect(0,0,canvas.width, canvas.height)

    ctx.beginPath();
    ctx.arc(150, 150, 50, 0, Math.PI * 2);
    ctx.fillStyle = 'blue';
    ctx.fill();
    x+=20;
}

setInterval(moveCircle,20)







