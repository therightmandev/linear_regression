function get_random_line(width, height) {
	x1 = 0;
	random_y1 = Math.floor(Math.random()*height);
	x2 = width;
	random_y2 = Math.floor(Math.random()*height);
	return {'x1': x1,
		'y1': random_y1,
		'x2': x2,
		'y2': random_y2
		};
}

function draw_dot(x, y, position, color = undefined) {
	size = 10;
	if (position === "up") cx.fillStyle = "pink";
	else if (position === "down") cx.fillStyle = "green";
	else if (position === "on") cx.fillStyle = "black"; //on the line
	else cx.fillStyle = "red";

  cx.fillStyle = (typeof(color) !== 'undefined')? cx.fillStyle : color;

	cx.translate(-size/2, -size/2);
	cx.fillRect(x, y, size, size);
}

function get_random_point(width, height) {
	return {
		'x': Math.floor(Math.random()*width),
		'y': Math.floor(Math.random()*height)
	}
}

function show_text(text) {
  var p = document.getElementById("show-number");
  p.innerHTML = text;
}
