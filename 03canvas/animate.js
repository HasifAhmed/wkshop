var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var shape = "circle";

var stopButton  = document.getElementById("stop");

var dotButton = document.getElementById("circle");


var growing = true;

var requestID = false;

var radius = 10;

var drawDot = function() {
    if(requestID){
	    stopIt();
    }
	clear;
	ctx.fillStyle = "#00FFFF";
	ctx.beginPath();
	if(radius==0 || radius==c.height/2 || radius==c.width/2){
		growing=!growing;
	}
	if( growing ) {
		radius += 1; 
	} else {
		radius -= 1;
	}
	window.requestAnimationFrame();
	ctx.arc( c.width / 2, c.height / 2, radius,  0, 2*Math.PI);
	ctx.stroke();
	ctx.fill();
	requestID = window.requestAnimationFrame(drawDot);
	

}

var stopIt = function() {
    console.log( requestID );
    window.cancelAnimationFrame(requestID);
    requestID=false;
    
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt); 
