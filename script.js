var width = 500;
var height = 500;
var graph_width = 20;
var graph_height = 100;


var board = document.getElementById("cx");
board.style.width = width + "px";
board.style.height = height + "px";
board.width = width;
board.height = height;
var cx = board.getContext("2d")

function get_position(x, y, m, b) {
  y_proj = x * m + b;
  if (y > y_proj) return "up";
  if (y < y_proj) return "down";
  return "on";
}

const X = [17, 13, 12, 15, 16, 14, 16, 16, 18, 19];
const Y = [94, 73, 59, 80, 93, 85, 66, 79, 77, 91];

lin = new Linear(X, Y);
show_text("m: " + lin.slope + "<br>" +
          "b: " + lin.y_intercept);


//norm_x = X.map(el => el*25);
//norm_y =Y.map(el => el*5);
data = [];
for (i=0; i<X.length; i++) data[i] = [X[i], Y[i]];

draw_grid();
// Draw vector points
for (i=0; i<data.length; i++) {
	draw_dot(data[i][0], data[i][1], "hi");
}

draw_line(0, lin.y_intercept*height/graph_height,
          width, lin.func(graph_width)*height/graph_height, "white");
