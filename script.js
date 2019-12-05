width = 500;
height = 500;

board = document.getElementById("cx");
board.style.width = width + "px";
board.style.height = height + "px";
board.width = width;
board.height = height;
cx = board.getContext("2d")

function get_position(x, y, m, b) {
  y_proj = x * m + b;
  if (y > y_proj) return "up";
  if (y < y_proj) return "down";
  return "on";
}

// Get random line
rl = get_random_line(width, height);
m = (rl.y2 - rl.y1)/width; //slope
b = rl.y1 // y intercept

// Draw line
cx.strokeStyle = "lightblue";
cx.beginPath();
cx.moveTo(rl.x1, rl.y1);
cx.lineTo(rl.x2, rl.y2);
cx.stroke();

// Draw single point
point = get_random_point(width, height);
position = get_position(point.x, point.y, m, b);
draw_dot(point.x, point.y, position);

const X = [17, 13, 12, 15, 16, 14, 16, 16, 18, 19];
const Y = [94, 73, 59, 80, 93, 85, 66, 79, 77, 91];

lin = new Linear(X, Y);
show_text("r: " + lin.r + "<br>" + 
          "m: " + m + "<br>" +
          "b: " + b);

for (var i=0; i<50; i++) {
  point = get_random_point(width, height);
  position = get_position(point.x, point.y, m, b);
  draw_dot(point.x, point.y, position);
}

draw_dot(100, 100, "", "orange");
