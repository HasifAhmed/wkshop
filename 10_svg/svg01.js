/*
Hasif Ahmed
SoftDev2 pd8
K#10 -- Ask Circles [Change || Die]
2019-03-14
*/

var pic = document.getElementById("vimage");

var drawDot = function(e){

    var children = pic.children;
    var blue = false;

    for(child of children){

      if( inBounds(child,e)){
        makeBlue(child);
        blue = true;
        break;
      }
      else {
        blue = false;
      }
    }

    if (!(blue)) {
      pic.appendChild(createCircle(e.offsetX, e.offsetY));
    }


};


var clear = function(){
  while (pic.hasChildNodes()){
		pic.removeChild(pic.lastChild);

  }


};

// Check if inbounds using d^2 < r^2
var inBounds = function(circle, event){

 //circle coords
 var cx = circle.getAttribute("cx")
 var cy = circle.getAttribute("cy")

 // point coords
 var px = event.offsetX
 var py = event.offsetY

 var r = circle.getAttribute("r")

 return Math.pow( (px-cx), 2) + Math.pow( (py-cy), 2) < Math.pow(r,2)
}

var createCircle = function(x,y){
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 10);
  c.setAttribute("fill", "red");
  c.setAttribute("stroke", "black");
  return c;

}

var makeBlue = function(circle){
  if(circle.getAttribute("fill") == "red"){
    circle.setAttribute("fill", "blue")
  }
  else{
    //new circle at random loc
    var rand = createCircle(Math.random() * 500, Math.random() * 500)
    pic.appendChild(rand)
    pic.removeChild(circle)
  }
}

pic.addEventListener("click",drawDot);
document.getElementById("but_clear").addEventListener("click", clear);
