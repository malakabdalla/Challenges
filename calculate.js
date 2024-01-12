function calculate(a, b, c) {
  let result;

  switch (c) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "*":
      result = a * b;
      break;
      default: result = null;
      break;
  }

  return result;
}

module.exports = { calculate };
