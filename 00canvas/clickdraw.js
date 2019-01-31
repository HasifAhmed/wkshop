//retrieve node in DOM via ID
var c = document.getElementById("slate");
//instantiate a CanvasRenderingContext2D
var ctx = c.getContext("2d");
//invoke interface methods
document.getElementById("Toggle").addEventListener("click", function() {
  if (document.getElementById("Toggle").innerHTML =="Draw-A-Rectangle"){
    document.getElementById("Toggle").innerHTML = "Draw-A-Dot";
  }
  else
  {
    document.getElementById("Toggle").innerHTML = "Draw-A-Rectangle";
  }
});

document.getElementById("slate").addEventListener("click", function(ev) {
  if (document.getElementById("Toggle").innerHTML =="Draw-A-Rectangle"){
    ctx.fillRect(ev.clientX - c.offsetLeft, ev.clientY - c.offsetTop, 100, 200);
  }
  else if(document.getElementById("Toggle").innerHTML == "Draw-A-Dot"){
    ctx.fillRect(ev.clientX - c.offsetLeft, ev.clientY - c.offsetTop, 5, 5);
  }
});

document.getElementById("Clear").addEventListener("click", function() {
  ctx.clearRect(0, 0, c.width, c.height); //clear rectangle

});
