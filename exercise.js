                        //Question1
//Create a person array with two strings and a number, then access each and display the array values.
const person = ["Esther", "Nagawa", 22];

// Accessing and displaying each value
console.log("First name:", person[0]); 
console.log("Last name:", person[1]); 
console.log("Age:", person[2]); 

                        //Question=`2 
//Create an array with 5 elements, access it’s first and last array and display them
const myArray = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

const firstElement = myArray[0];
const lastElement = myArray[myArray.length - 1];

console.log("First element:", firstElement); 
console.log("Last element:", lastElement); 

                        //Question 3
// Write a JS function that checks if a variable is an array or not, log “Is Array” if true and “Not Array” if false.
function checkIfArray(variable) {
    if (Array.isArray(variable)) {
      console.log("Is Array");
    } else {
      console.log("Not Array");
    }
  }

  checkIfArray([1, 2, 3]); 
  checkIfArray("Hello");  
  checkIfArray({}); 
  

//More methods  
  // Splice
let numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 6); // Removes 1 element at index 2 and inserts 6
console.log(numbers); // Output: [1, 2, 6, 4, 5]

// Slice
let fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
let citrus = fruits.slice(1, 3); // Extracts elements from index 1 to 2 (3-1)
console.log(citrus); // Output: ["Orange", "Lemon"]

// Sort 
let fruitsToSort = ["Banana", "Orange", "Apple", "Mango"];
fruitsToSort.sort(); // Sorts alphabetically by default
console.log(fruitsToSort); // Output: ["Apple", "Banana", "Mango", "Orange"]
