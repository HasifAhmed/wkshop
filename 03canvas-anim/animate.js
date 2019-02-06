var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var shape = "circle";

var stopButton  = document.getElementById("stop");

var dotButton = document.getElementById("circle");


var growing = true;

var requestID;

var radius = 1;

var drawDot = function() {
    if (requestID != null)
	{
		e.preventDefault();
		console.log("Animation Ocurring!");
	}
	else {
	if(radius>=c.width/2 || radius <= 0){
		growing=!growing;
	}
	if( growing ) {
		radius += 1; 
	} else {
		radius -= 1;
	}
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.fillStyle = "#00FFFF";
	ctx.beginPath();
	window.requestAnimationFrame();
	ctx.ellipse(c.width / 2, c.height / 2, radius, radius, 0, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	requestID = window.requestAnimationFrame(drawDot);
	}

}

var stopIt = function() {
    if (requestID == null)
	{
		e.preventDefault();																//prevents default action of the stop mechanism from running
		console.log("Shouldn't do anything");			
	}
	else
	{
		console.log("request ID:" + requestID );		
		window.cancelAnimationFrame(requestID);											//cancels the animation frame
		requestID = null;																//resets value of requestID to null
	}
    
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt); 
