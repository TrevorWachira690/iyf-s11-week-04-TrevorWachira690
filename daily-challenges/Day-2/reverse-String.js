// Method 1: Using built-in methods

// string to reverse
let str = "Hello students";

// Function to reverse a string
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reversed:", reverseString(str));

// Method 2: Using a for loop

// Function to reverse a string using a for loop
function reverseStringForLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("Reversed (for loop):", reverseStringForLoop(str));