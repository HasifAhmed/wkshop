//retrieve node in DOM via ID
var c = document.getElementById("slate");
//instantiate a CanvasRenderingContext2D
var ctx = c.getContext("2d");
//invoke interface methods
ctx.fillStyle = "#ff0000" //make rectangle red
ctx.fillRect(50, 50, 100, 200); //fill rectangle
