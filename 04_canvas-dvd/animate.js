//Hasif Ahmed
//SoftDev pd8
//K3 -- They lock us in the tower whenever we get caught
//2019-02-06
var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var shape = "circle";

var stopButton  = document.getElementById("stop");

var dotButton = document.getElementById("circle");

var dvdButton = document.getElementById("dvd");

/* image code !!!
var logo = new Image();
logo.src = "logo_dvd.jpg";
ctx.drawImage();
  */
var growing = true;

var requestID;

var radius = 1;


var dvdLogoSetup = function(){

  window.cancelAnimationFrame( requestID );

  var rectWidth = 100;
  var rectHeight = 50;

  var rectX = Math.floor( Math.random() * (c.width - rectWidth) );

  var xVel = 1;
  var yVel = 1;

  var logo = new Image();
  logo.src = "logo_dvd.jpg";

  var dvdLogo = function() {
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.drawImage(dvdButton, 0,0);

      requestID = window.requestAnimationframe(dvdLogo);

  };
  dvdLogo();
};

var draw = function(e){
    if (requestID == null)
    {
      drawDot();
    }
    else
    {
      e.preventDefault();
      console.log("Nope");																//resets value of requestID to null
    }
}
var drawDot = function() {

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
	ctx.ellipse(c.width / 2, c.height / 2, radius, radius, 0, 0, 2 * Math.PI);
	ctx.stroke();
	ctx.fill();
	requestID = window.requestAnimationFrame(drawDot);


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

dvdButton.addEventListener("click", dvdLogoSetup );
dotButton.addEventListener("click", draw);
stopButton.addEventListener("click", stopIt);
