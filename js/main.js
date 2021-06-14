
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

	let xx = document.getElementById("x").value;
    let yy = document.getElementById("y").value;
    let zz = document.getElementById("z").value;

    let x = parseInt(xx);
    let y = parseInt(yy);
    let z = parseInt(zz);

	if ((x != 0) && (y != 0) && (z != 0)) {

	  if ((x + y <= z) || (x + z <= y) || (y + z <= x)) {
	  	  context.font = "20px Arial";
	      context.fillText("Not possible",150, 260);
	  }

	  else if ((x == y) && (x != z) || (x == z) && (x != y) || (y == z) && (y != x)) {
	  	  context.font = "20px Georgia";
	      context.fillText("Isosceles triangle",125, 260);
	  }

	  else if ((x != y) && (y != z)) {
	  	  context.font = "20px Georgia";
	      context.fillText("Scalene triangle",125, 260);
	  }

	  else if ((x == y) && (y == z)) {
	  	  context.font = "20px Georgia";
	      context.fillText("Equilateral triangle",125, 260);
	  }
	} else {
		context.font = "20px Georgia";
	    context.fillText("'0' cant be a side lenght",105, 260);
	}

};

