//Tomato - Hasif Ahmed, Tania Cao
//SoftDev pd8
//K4 -- What is it saving the screen from?
//2019-02-07
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
  var rectY = Math.floor(Math.random() * (c.height - rectHeight) );

  var xVel = 1;
  var yVel = 1;

  var logo = new Image();
  logo.src = "logo_dvd.jpg";

  var dvdLogo = function() {
    window.cancelAnimationFrame(requestID);

    ctx.clearRect(0, 0, c.width, c.height);

    //if outside range reverse appropritately 
    if (rectX <= 0 || rectX >= c.width - rectWidth) {
      xVel *= -1;
    }
    if (rectY <= 0 || rectY >= c.height - rectHeight) {
      yVel *= -1;
    }
    rectX += xVel;
    rectY += yVel;
    ctx.drawImage(logo, rectX, rectY, rectWidth, rectHeight);
    requestID = window.requestAnimationFrame(dvdLogo);

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
		e.preventDefault();																//prevents default action
		console.log("Shouldn't do anything");
	}
	else
	{
		console.log("request ID:" + requestID );
		window.cancelAnimationFrame(requestID);											//cancels animation frame
		requestID = null;																//resets requestID -> null
	}

}

dvdButton.addEventListener("click", dvdLogoSetup );
dotButton.addEventListener("click", draw);
stopButton.addEventListener("click", stopIt);
