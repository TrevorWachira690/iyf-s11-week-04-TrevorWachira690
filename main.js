// Variable declarations
let name = "Trevor Wachira";
let age = 18;
const birthYear = 2007;

// typeof operator
console.log(typeof name);       // string
console.log(typeof age);        // number
console.log(typeof true);       // boolean

// let vs const
let score = 100;
score = 150;  // Works!

const PI = 3.14159;
// PI = 3;  
// Error! const cannot be reassigned

// Exercise: Variable Practice

// My name (string)
let studentName = "Trevor Wachira";

// My age (number)
let studentAge = 18;

// Whether I'm a student (boolean)
let isStudent = true;

// My favorite colors (array)
let favoriteColors = ["blue", "Midnight black", "Crimson red"];

// Today's date
let todaysDate = new Date();

// Log everything to verify
console.log("Name:", studentName);
console.log("Age:", studentAge + " years old");
console.log("Student authentication:", isStudent);
console.log("Favorite colors:", favoriteColors);
console.log("Today's date:", todaysDate);

//================
// Age calculation
//================
const ageInYears = 18;
const currentYear = 2026;

// 1. Age in days (approximately)
const ageInDays = ageInYears * 365;
console.log(`Age in days: ${ageInDays} days`);

// 2. Age in hours
const ageInHours = ageInDays * 24;
console.log(`Age in hours: ${ageInHours} hours`);

// 3. The year you'll turn 100
const yearTurn100 = birthYear + 100;
console.log("Year I'll turn 100:", yearTurn100);

//==================
// FUNCTIONS
//==================

// Exercise 1: Function Declarations
let Name = "Trevor";
let a = 6;
let b = 7;

// Function declaration
function greet(Name) {
    return `Hello, ${Name}!`;
}
console.log(greet(Name));

console.log("a=", a);
console.log("b=", b);
// Function expression
const add = function(a, b) {
    return a + b;
};
console.log("Addition:", add(a, b));

// Arrow function
const multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(a, b));

// Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};
console.log("Division:", divide(a, b));

// Exercise 2: Function Building 

// Rectangle calculation
function calculateArea(width, height) {
    return width * height;
}
console.log(`Area= width(${67}) * height(${89}):`, calculateArea(67, 89));

// Temperature Conversion
const celsiusToFahrenheit = (celsius) => {
    return (celsius * 9/5) + 32;
}
console.log(`Celsius(${25}) to Fahrenheit:`, celsiusToFahrenheit(25));

// Even number verification (Returns true if even, odd if otherwise)
function isEven(number) {
    return number % 2 === 0;
}
console.log(`Is the number ${9} even?`, isEven(9));

// Function to return initials (e.g "John Doe" --> "JD")
function getInitials(fullName) {
    let names = fullName.split(" ");
    let initials = "";
    for (let i = 0; i < names.length; i++) {
        initials += names[i][0].toUpperCase();
    }
    return initials;
}
console.log("Initials:", getInitials("Trevor Wachira"));

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reversed:", reverseString("Hello, World!"));