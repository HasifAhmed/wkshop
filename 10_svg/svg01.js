/*
Hasif Ahmed
SoftDev2 pd8
K#10 -- Ask Circles [Change || Die]
2019-03-14
*/

var pic = document.getElementById("vimage");

const radius = 10;

//kills off children
document.getElementById('but_clear').addEventListener('click', function(e)
	{
	while (pic.hasChildNodes()){
		pic.removeChild(pic.lastChild)
	}
	});

//returns mouse coords
function mouseCoords(e)
{
	return { x: e.offsetX, y: e.offsetY };
}

//randomizes numbers - useful for the random coords
function random(x)
{
	return Math.floor(Math.random()*x)
}

//if mouse coords have no color -> make circle
//if mouse coords have color of red -> make circle blue
//if mouse coords have color of blue -> new circle random coords
pic.addEventListener('click', function(e)
	{
		color=e.target.getAttribute("fill");
		var mousePos = mouseCoords(e);

    //if empty
		if(color == null){
			var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
			c.setAttribute("cx", mousePos.x);
			c.setAttribute("cy", mousePos.y);
			c.setAttribute("r", radius);
			c.setAttribute("fill", "red");
			c.setAttribute("stroke", "black");
			pic.appendChild(c);
			a=pic.childNodes
		}
		//if red
		else if(color == "red"){
			e.target.setAttribute("fill","blue");
		}
		//if blue
		else{
			e.target.setAttribute("cx",random(501));
			e.target.setAttribute("cy",random(501));
			e.target.setAttribute("fill","red");
		}
});
