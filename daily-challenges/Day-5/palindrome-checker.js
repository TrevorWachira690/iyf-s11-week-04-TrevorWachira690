// Function to check if a string is a palindrome
function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().replace(" ", "");
    // Check if the cleaned string is equal to its reverse
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// Example usage
const testString1 = "A man, a plan, a canal panama";
console.log(`Is "${testString1}" a palindrome?`, isPalindrome(testString1)); // true

const testString2 = "Hello, World!";
console.log(`Is "${testString2}" a palindrome?`, isPalindrome(testString2)); // false