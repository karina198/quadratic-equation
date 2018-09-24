module.exports = function solveEquation(equation) {
  // your implementation
  let arr = equation.split(" ");
  let a = +arr[0];
  let b = +(arr[3] + arr[4]);
  let c = +(arr[7] + arr[8]);
  let disc = b * b - 4 * a * c;
  let x1 = Math.round((-b + Math.sqrt(disc)) / (2 * a));
  let x2 = Math.round((-b - Math.sqrt(disc)) / (2 * a));
  if (a > 0) {
  	return [x2, x1];
  }
  return [x1, x2];

}
