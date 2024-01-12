//Look at this legacy code.
//Refactor/produce new code using the NEW JS approach (arrow, let, map etc)
// function isEven(number) {
//     return number % 2 === 0;
// }
let isEven = (number) => number % 2 === 0;

// function square(number) {
//     return number * number;
// }
let square = (number) => number * number;
//can also be done this way:
//const square = (numbers) => numbers.map(number => number * number); for an array

// function processNumbers(numbers) {
//     var processedNumbers = [];
//     for (var i = 0; i < numbers.length; i++) {
//         if (isEven(numbers[i])) {
//             processedNumbers.push(square(numbers[i]));
//         }
//     }
//     return processedNumbers;
// }

const processNumbers = (numbers) => {
  return numbers.filter(isEven).map(square);
};

// var numbers = [1, 2, 3, 4, 5, 6];
// var result = processNumbers(numbers);
// console.log(result); // Output: [4, 16, 36]
const inputArray = [1, 2, 3, 4, 5, 6];
const result = processNumbers(inputArray);

console.log(result);
