
"use strict"

// Make a small grid inside the canvas 

let calculator = document.getElementById("calculator");
let context = calculator.getContext("2d");

for (let x = 0.5; x < 400; x += 10) {
  context.moveTo(x, 0);
  context.lineTo(x, 300);
}

for (let y = 0.5; y < 300; y += 10) {
  context.moveTo(0, y);
  context.lineTo(400, y);
}

context.moveTo(0,0);

context.strokeStyle = "#eee";
context.stroke();



// Function to calculate the triangle

function triangle() {

  let calculator = document.getElementById("calculator");
  let context = calculator.getContext("2d");

  let aSideParsed = document.getElementById("a_side").value;
  let bSideParsed = document.getElementById("b_side").value;
  let cSideParsed = document.getElementById("c_side").value;

  let a_side = parseInt(aSideParsed);
  let b_side = parseInt(bSideParsed);
  let c_side = parseInt(cSideParsed);

	if ((a_side != 0) && (b_side != 0) && (c_side != 0)) {

	  if ((a_side + b_side <= c_side) || (a_side + c_side <= b_side) || (b_side + c_side <= a_side)) {
	  	  context.font = "20px Arial";
	      context.fillText("Not possible",150, 260);
	  }

	  else if ((a_side == b_side) && (a_side != c_side) || (a_side == c_side) && (a_side != b_side) || (b_side == c_side) && (b_side != a_side)) {
	  	  context.font = "20px Georgia";
	      context.fillText("Isosceles triangle",125, 260);
	  }

	  else if ((a_side != b_side) && (b_side != c_side)) {
	  	  context.font = "20px Georgia";
	      context.fillText("Scalene triangle",125, 260);
	  }

	  else if ((a_side == b_side) && (b_side == c_side)) {
	  	  context.font = "20px Georgia";
	      context.fillText("Equilateral triangle",125, 260);
	  }
	} else {
		context.font = "20px Georgia";
	    context.fillText("'0' cant be a side lenght",105, 260);
	}

};

