//Hasif Ahmed
//SoftDev Pd08
//2019-03-15
//K11 - Ask Circles [Change || Die] ...While On the Go

var pic = document.getElementById('vimage');
pic.innerHTML = '';
var clear_button = document.getElementById('but_clear');
var move_button = document.getElementById('but_move');
var requestID;
var moving = false;

var draw = (e) => {
  var c = createChild(e.offsetX, e.offsetY, 'red');
  pic.appendChild(c);

};

var createChild = (x,y, color) => {
  var c = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  c.setAttribute("cx", x);
  c.setAttribute("cy", y);
  c.setAttribute("r", 15);
  c.setAttribute("fill", color);
  c.setAttribute("stroke", "black");

  c.setAttribute('xVel', 1);
  c.setAttribute('yVel', 1);
  
  c.addEventListener('click', function(e) {
		if(c.getAttribute('fill') == 'green'){
			changeColor(e, c);
		}
		else if (c.getAttribute('fill') == 'blue' || Math.random() < .75){
			changeBlue(e, c);
		}
		else{
			changeColor(e, c);
		}

  });
  return c;

}

//regular color swap
var changeColor = (e, c) => {
  // console.log(e);
  if (c.getAttribute('fill') == 'red'){
    c.setAttribute('fill', 'green');
  }
  else if (c.getAttribute('fill') == 'green'){
    var randchild = createChild(Math.random() * 500, Math.random() * 500, 'red');
    pic.appendChild(randchild);
    c.remove();
		//prevent pic's EventListener
    e.stopPropagation();

  }
}

//changing to blue
var changeBlue = (e, c) => {

  if (c.getAttribute('fill') == 'red'){
    c.setAttribute('fill', 'blue');
  }
  else if (c.getAttribute('fill') == 'blue'){
    var randchild = createChild(Math.random() * 500, Math.random() * 500, 'red');
    pic.appendChild(randchild);
    c.remove();
    e.stopPropagation();

  }
}
//setting attribute to the necessary color
var swapColor = (c) =>{
  if (c.getAttribute('fill') == 'green' || c.getAttribute('fill') == 'blue'){
    c.setAttribute('fill', 'red');
  } else{
		if ( Math.random() < .75){
			c.setAttribute('fill', 'blue');
		}
		else {
			c.setAttribute('fill', 'green');
		}
  };

}

var removeChild = (c) =>{
  console.log(c.getAttribute('fill'));
}
var clear = (e) => {
  pic.innerHTML='';
  moving = false;
  window.cancelAnimationFrame( requestID );
};

var pic_function = (e) => {
  var children = pic.childNodes;
  var index;
  var make_circle = true;
  if (children.length != 0) {
    for (index = 0; index < children.length; index++ ){
      var child = children[index];

      if (Math.sqrt(Math.pow(e.offsetX - child.getAttribute("cx"), 2) + Math.pow(e.offsetY - child.getAttribute("cy"), 2)) < 10){
        return;
      }
    }
    draw(e);
  }
  else{
    draw(e);
  }
}

var set_move = () => {
  var children = pic.childNodes;
  if (children.length == 0){
    return;
  }
  window.cancelAnimationFrame( requestID );

  var height = parseInt(pic.getAttribute('height')) - 10;
  var width = parseInt(pic.getAttribute('width')) - 10;
  moving = true;

  var move = () =>{
    window.cancelAnimationFrame( requestID );
    children.forEach( (child) => {

        var x = parseInt(child.getAttribute('cx'));
        var y = parseInt(child.getAttribute('cy'));
        var xVel = parseInt(child.getAttribute('xVel'));
        var yVel = parseInt(child.getAttribute('yVel'));
        var xChange = false;
        var yChange = false;
        if (x >= width || x <= 10){
           xVel *= -1;
           xChange = true;
           swapColor(child);
         };
        if (y >= height || y <= 10){
           yVel *= -1;
           yChange = true;
           swapColor(child);
        };

        if (width / 2 == x || height / 2 == y){
          swapColor(child);
        }


        child.setAttribute('cx', x + xVel);
        child.setAttribute('cy', y + yVel);

        if (xChange){
          child.setAttribute('xVel', xVel);
        };
        if (yChange){
          child.setAttribute('yVel', yVel);
        };
      // };
    });
    requestID = window.requestAnimationFrame( move );
  };
  move();
};

pic.addEventListener('click', pic_function);
clear_button.addEventListener('click', clear);
move_button.addEventListener('click', function(){
  if (!moving){
    set_move();
  };
});
