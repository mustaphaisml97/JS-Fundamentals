#!/usr/bin/node
// 5-to_integer.js

const num = process.argv[2];
const parsedInt = parseInt(num);

if (isNaN(parsedInt)) {
  console.log('Not a number');
} else {
  console.log(`My number: ${parsedInt}`);
}
if (isNaN(parsedInt) || num !== parsedInt.toString()) {
  console.log('Not a number');
}
