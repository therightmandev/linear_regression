function array_mean(X) {
  var mean = 0;
  x_len = X.length;
  X.forEach(e => mean += e / x_len);
  return mean;
}

function correlation_coefficient(X, Y) {
  /* X and Y must be arrays of integers and have the same length */

  var x_mean = array_mean(X)
  var y_mean = array_mean(Y)

  var top_sum = 0;
  var x_bottom_sum = 0;
  var y_bottom_sum = 0;
  for (i = 0; i < X.length; i++) {
    top_sum += (X[i] - x_mean) * (Y[i] - y_mean);
    x = (X[i] - x_mean) * (X[i] - x_mean);
    x_bottom_sum += x;
    //console.log("x: " + (X[i] - x_mean));
    y_bottom_sum += (Y[i] - y_mean) * (Y[i] - y_mean);
  }

  return top_sum / Math.sqrt(x_bottom_sum * y_bottom_sum);
}
