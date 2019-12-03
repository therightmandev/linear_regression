width = 500;
height = 500

board = document.getElementById("cx");
board.style.width = width + "px";
board.style.height = height + "px";
board.width = width;
board.height = height;
cx = board.getContext("2d")


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
	size = 6;
	if (position === "up") cx.fillStyle = "blue";
	else if (position === "down") cx.fillStyle = "green";
	else if (position === "on") cx.fillStyle = "black"; //on the line
	else cx.fillStyle = "red";

	cx.translate(-size/2, -size/2);
	cx.fillRect(x, y, size, size);
}

function get_random_point(width, height) {
	return {
		'x': Math.floor(Math.random()*width),
		'y': Math.floor(Math.random()*height)
	}
}

rl = get_random_line(width, height);
m = (rl.y2 - rl.y1)/width; //slope
b = rl.y1
console.log(m)

cx.strokeStyle = "lightblue";
cx.beginPath();
cx.moveTo(rl.x1, rl.y1);
cx.lineTo(rl.x2, rl.y2);
cx.stroke();



point = get_random_point(width, height);

position = "?";
y_proj = point.x * m + b;

if (point.y > y_proj) position = "up";
else {
	if (point.y < y_proj) position = "down";
	else position = "on";
}

draw_dot(point.x, point.y, position);
