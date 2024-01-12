//import calculate to import the function and readline
const readline = require("readline");
const calculate = require("./calculate");

//i create an object that can handle the information that comes in from the user and from the terminal
//rl const is what handles the questions that will allow me to prompt the user
//process.stdin is the user input
//process.stdout is the terminal output eg. the text that u see on the terminal
//interface is a class that handles input and outputs in node.js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//define a function to collect the details needed from the user with a callback
//then change the string that inputted into numbers using parse function
const userInput = () => {
  rl.question("Enter the first number:", (a) => {
    rl.question("Enter second number:", (b) => {
      rl.question("Enter an operator (+, -, *, /): ", (c) => {
        const a1 = parseFloat(a);
        const b1 = parseFloat(b);
        //call the function from the previous js sheet specify the name of thr js then the function name for it to work
        const result = calculate.calculate(a1, b1, c);
        //display the results in color coding
        //check if the result is valid >=0 consol log
        //color code using a terminal color coding eg.chalk (chalk didn't work had to use ANSI)
        if (result !== null && !isNaN(result)) {
          if (result > 0) {
            console.log("\x1b[31m%s\x1b[0m", `result: ${result}`);
          } else if (result < 0) {
            console.log("\x1b[32m%s\x1b[0m", `result: ${result}`);
          } else {
            console.log("\x1b[33m%s\x1b[0m", "invalid input");
          }
          userInput();
        }
      });
    });
  });
};
// Set up an event listener for when the interface is closed
rl.on("close", () => {
  console.log("calculation ended.");
  process.exit(0); // Terminate the Node.js process
});

userInput();
