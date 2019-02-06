const fib = function fibonacci(num) {
  if (num === 0 || num === 1) {
    return num;
  }
  return 0;
};

// Since this module is being created for Node we need to use the CommonJS
// style
module.exports = fib;
