const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
  return a-b;
};

const sum = function(arr) {
  let sum = 0;
  for(let i=0; i<arr.length; i++)
    sum = sum+arr[i];
  return sum; 
};

const multiply = function(...args) {
  let m = 1;
  for(let i=0; i<args.length; i++)
    m = m*args[i];
  return m;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(a) {
	if(a==0)
    return 1;
  let fact = 1;
  for(let i=a; i>0; i++)
    fact = fact*i;
  return fact;
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
