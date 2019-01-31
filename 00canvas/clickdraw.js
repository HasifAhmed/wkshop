//retrieve node in DOM via ID
var shape = "rect";
var c = document.getElementById("slate");
//instantiate a CanvasRenderingContext2D
var ctx = c.getContext("2d");
//invoke interface methods
function changeShape() {
  if (shape == "rect"){
    shape = "dot";
  }
  else
  {
    shape = "rect"
  }
}

function Draw(ev){
  if (shape == "rect"){
    ctx.fillRect(ev.offsetX , ev.offsetY, 100, 200);
  }
  else if(shape == "dot"){
    ctx.beginPath();
    ctx.ellipse(ev.offsetX , ev.offsetY,  10, 10,0,0,7);
    ctx.stroke();
    ctx.fill();
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, c.width, c.height); //clear rectangle

}
