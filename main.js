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

// Age calculation

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
