const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((sum, currentItem) => sum + currentItem, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((product, currentItem) => product * currentItem, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
