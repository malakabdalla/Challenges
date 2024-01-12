//i import the file that makes the user input in terminal
const readline = require("readline");
//i create an object that can handle the information that comes in from the user and from the terminal
//rl const is what handles the questions that will allow me to prompt the user
//process.stdin is the user input
//process.stdout is the terminal output eg. the text that u see on the terminal
//interface is a class that handles input and outputs in node.js
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//make a function that oes the counting
const countdown = (number) => {
  for (let i = number; i >= 0; i--) {
    if (i === 0) {
      console.log("BLASTOFF");
    } else {
      console.log(i);
    }
  }
};
//list my question in the rl.question with user input identified
//this is a method that takes two arguments : prompt and a call back
//i need to get the prompt aka question
//i need to get a callback argument userInput
//i need then to change the string coming in from the user to a numerical value
//use parseIn to get the numerical value
//the 10 to represent the radix
//then i need to make sure that what is entered is a number otherwise prompts an error message
//if number then preforms the countdown from the function above
//close the interface to allow node.js to end the section and start a new line
rl.question("Enter a number to start the countdown: ", (userInput) => {
  const startingNumber = parseInt(userInput, 10);

  if (!isNaN(startingNumber)) {
    countdown(startingNumber);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }

  rl.close();
});
