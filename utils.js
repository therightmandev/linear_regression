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

function draw_dot(x, y, position) {
	size = 10;
	if (position === "up") cx.fillStyle = "pink";
	else if (position === "down") cx.fillStyle = "green";
	else if (position === "on") cx.fillStyle = "black"; //on the line
	else cx.fillStyle = "red";

	t = size/2;
	cx.translate(-t, -t);
	cx.fillRect(x * width/graph_width, y*height/graph_height, size, size);
	cx.translate(t, t);
}

function get_random_point(width, height) {
	return {
		'x': Math.floor(Math.random()*width),
		'y': Math.floor(Math.random()*height)
	}
}

function draw_line(x1, y1, x2, y2, color) {
    cx.strokeStyle = color;
    cx.beginPath();
    cx.moveTo(x1, y1);
    cx.lineTo(x2, y2);
    cx.stroke();
}

function draw_grid() {
  for (var i=0; i<graph_width; i++) {
    var x = i*width/graph_width;
    draw_line(x, 0, x, height, "#27274a");
    cx.fillStyle = "white";
    cx.font = "10px Arial";
    cx.fillText("" + i, x, 15);
  }
  for (var i=0; i<graph_height/10+1; i++) {
    var y = i*width/graph_height*10;
    draw_line(0, y, width, y, "#27274a");
    cx.fillStyle = "white";
    cx.font = "10px Arial";
    cx.fillText(i*10, 5, y-1);
  }
}

function show_text(text) {
  var p = document.getElementById("show-number");
  p.innerHTML = text;
}
