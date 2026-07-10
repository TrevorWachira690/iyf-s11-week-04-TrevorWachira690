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

// Function to return tip amount
function calculateTip(billAmount, tipPercentage= 15) {
    return (billAmount * tipPercentage) / 100;
}
console.log(`Bill amount: $100, Tip percentage: 20%`);
console.log(`Tip amount: $${calculateTip(100, 20).toFixed(2)}`);

// ================
// CONTROL FLOW
// ================

// Exercise 1: If/Else Statements
function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}
console.log("Grade for score 85:", getGrade(85));
console.log("Grade for score 62:", getGrade(72));

// Exercise 2: Switch Statements
function getDayName(dayNumber) {
    switch(dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day number";
    }
}
console.log("Day name for day 1:", getDayName(1));
console.log("Day name for day 9(Invalid day):", getDayName(9));

// Exercise 3: loops
// For loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}

// For...of (arrays)
const colors = ["red", "green", "blue"];
for (const color of colors) {
    console.log(color);
}

// Exercises
// 1. Print numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}
// 2. Print even numbers from 1 to 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0)
        console.log(i);
    }
    
// 3. FizzBuzz: Print numbers from 1 to 100, but for multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both 3 and 5 print "FizzBuzz".
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 4. Print a triangle of stars
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "*";
    }
    console.log(stars);
}
