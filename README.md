function add(a, b) {
  return a + b;
}

const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
  console.log('Please provide two valid numbers');
} else {
  console.log(add(num1, num2));
}
