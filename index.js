
for (let i = 1; i <= 30; i++){
    if (i < 10) { console.log("."); }
    else if (i <= 20) { console.log("x"); }
    else { console.log("X"); }
}

//functions are ways you can repeat code
//function getLarger(a,b){
    //if (a>b){
   //     return a
  //  } else {
   //     return b
  //  }
//
//from now on we use arrow functions

const getLarger = (a,b) => {
    if (a>b){
        return a
    } else {
        return b
    }
}

const square = a => a ** 2 
//declare function const
 //name of the function
 //single argument
 //now do this
 //return square 2

//objects 
const exampleobject ={
    firstName: "malak",
    lastName:"abdalla",
    Age: "25",
}

//array is a way to pop in similar elemnts together

let fruit = ["apple", "pear", "lemon"]

//ordered
//indexed
//changeable

//indexOf (to check the place of the item in an array)

// when u use differnt arries in inside an array
let y =[[1,2],[3,4],[5,6]]
//if you want to get 4 think of it as a table
console.log(y[1][1])

// write a function called add ten that takes number and add 10 to it 

//const addTen = i => i + 10

//define object use PascalCase and (everythingelse in JS) use camelCase 
//snake-case (python)

//let numbers = [ 45, 87, 92, 101, 4]

//let result = numbers.map(addTen)
//result.forEach(n => console.log(n))
//map function applies the function loop between to the array

//a function filter 

//ages = [40, 28, 18, 15, 12, 99]

//let results = ages.filter(age => age >= 18)

//let a =[11, 12, 44, 19, 203]

//let found = a.find(e => e > 40)

//this will return the first value over 40

//let founds = a.some (e => e < 10)

//some return true if any of the arry is a true returns true
//every return true if all element return true
//mdn into google to take u to development document abbout js



const isPrime = require('prime-number-check');

// Check if a number is prime

const result = isPrime(7); // Example usage

console.log(result)

