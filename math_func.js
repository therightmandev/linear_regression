class Linear {
  reduce_sum(accumulator, current_value) {
    return accumulator + current_value;
  }

  calc_mean(arr) {
    var sum = arr.reduce(this.reduce_sum, 0);
    return sum / arr.length;
  }

  calc_sq_dev(arr, mean) {
    return arr.map(e => (e - mean) * (e - mean)).reduce(this.reduce_sum, 0);
  }

  calc_correlation_coefficient(arr1, arr2) {
    var numerator = 0;
    var i;
    for (i = 0; i < arr1.length; i++) {
      numerator += (arr1[i] - this.x_mean) * (arr2[i] - this.y_mean);
    }
    return numerator / Math.sqrt(this.x_sq_dev * this.y_sq_dev);
  }

  calc_slope() {
    var y_std_dev = Math.sqrt(this.y_sq_dev / (this.Y.length - 1));
    var x_std_dev = Math.sqrt(this.x_sq_dev / (this.X.length - 1));
    console.log("y: " + y_std_dev + ", x: " + x_std_dev);
    return this.r * y_std_dev / x_std_dev;
  }

  constructor(X, Y) {
    this.X = X;
    this.Y = Y;
    this.x_mean = this.calc_mean(this.X);
    this.y_mean = this.calc_mean(this.Y);
    this.x_sq_dev = this.calc_sq_dev(this.X, this.x_mean); //x squared deviaton sum((xi-x)^2)
    this.y_sq_dev = this.calc_sq_dev(this.Y, this.y_mean); //y squared deviaton sum((yi-y)^2)
    this.r = this.calc_correlation_coefficient(this.X, this.Y) // correlation coefficient
    this.slope = this.calc_slope();
    console.log("slope " + this.slope);
  }

}



function get_slope(r, X, Y) {
  var std_deviation_of_y = Math.sqrt(y_squared_deviaton / (Y.length - 1));
  var std_deviation_of_x = Math.sqrt(x_squared_deviaton / (X.length - 1));
  slope = r * std_deviation_of_y / std_deviaton_of_x;
}
