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
    ctx.beginPath(); //resets or else ellipses are connected
    ctx.ellipse(ev.offsetX , ev.offsetY,  10, 10,0,0,7);
    ctx.stroke(); //the outside ring
    ctx.fill(); //inside fill up
  }
}

function clearCanvas() {
  ctx.clearRect(0, 0, c.width, c.height); //clear rectangle

}
/*
e.preventDefault(); - prevents event function from executing it's default operation
ctx.beginPath(); - when ellipses are drawn they are connected and act as vertices to a bigger shape, therefore this command resets that aspect and so everytime this command is used the
next drawn ellipses is not connected to any of the previously drawn ones
e.offsetX - x-coordinate of mouse pointer when an event is triggered within the canvas
e.offsetY - y-coordinate of mouse pointer when an event is triggered within the canvas
*/
