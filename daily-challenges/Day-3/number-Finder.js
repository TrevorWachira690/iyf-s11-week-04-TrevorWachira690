// Function that finds the largest number in an array

// Method 1: Using a loop
function findLargestNumber(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log("Largest number(Using loop):", findLargestNumber([10, 5, 8, 20, 3]));

// Method 2: Using reduce()
function findLargestNumberReduce(arr) {
    return arr.reduce((largest, current) => {
        return current > largest ? current : largest;
    });
}
console.log("Largest number(Using reduce):", findLargestNumberReduce([10, 5, 8, 20, 3]));