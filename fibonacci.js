const fib = function fibonacci(num) {
  let a = 0;
  let b = 1;

  if (num === 0) {
    return a;
  }
  if (num === 1) {
    return b;
  }

  for (let i = 2; i <= num; i += 1) {
    const c = a + b;
    a = b;
    b = c;
  }

  return b;
};

// Since this module is being created for Node we need to use the CommonJS
// style
module.exports = fib;
