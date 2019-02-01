
var c = document.getElementById("playground");
//instantiate a CanvasRenderingContext2D
var ctx = c.getContext("2d");
//invoke interface methods


function Draw(ev){
    //resets or else ellipses are connected
    ctx.ellipse(ev.offsetX , ev.offsetY,  10, 10,0,0,7);
    ctx.stroke(); //the outside ring
    ctx.closePath();
    ctx.moveTo(ev.offsetX, ev.offsetY);
    ctx.fill(); //inside fill up
    //ctx.beginPath();
}

function clearCanvas() {
  ctx.beginPath();
  ctx.clearRect(0, 0, c.width, c.height); //clear rectangle

}
