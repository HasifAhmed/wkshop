/*
Hasif Ahmed
SoftDev2 pd6
K#09 -- Connect the Dots
2019-03-13
*/

var pic = document.getElementById("vimage");

var previous = 0;

var drawDot = function(e){
  //first dot no line
  if (previous != 0)
  {
      var line = document.createElementNS("http://www.w3.org/2000/svg", "line");

      //making the line
      line.setAttribute("x1", previous.getAttribute( "cx" ) );
      line.setAttribute("y1", previous.getAttribute("cy") );
      line.setAttribute("x2", e.offsetX);
      line.setAttribute("y2", e.offsetY);
      line.setAttribute("stroke", "black");

      //moves curr pos to new pos
      pic.appendChild(line);
    }


    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    //creating the dot
    c.setAttribute("cx", e.offsetX);
    c.setAttribute("cy", e.offsetY);
    c.setAttribute("r", 10);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");

    pic.appendChild(c);


    previous = c;
};


var clear = function(){
  //reloads page - resets the board
  location.reload();
};

pic.addEventListener("click",drawDot);
document.getElementById("but_clear").addEventListener("click", clear);
