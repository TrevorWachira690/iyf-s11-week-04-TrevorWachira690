// Day 4: Remove Duplicates

const numbers = [1, 2, 2, 3, 4, 4, 5];

// Approach 1 — Using Set
function removeDuplicatesSet(arr) {
    return [...new Set(arr)];
}
console.log("Set approach:", removeDuplicatesSet(numbers));

// Approach 2 — Using filter
function removeDuplicatesFilter(arr) {
    return arr.filter((num, index) => arr.indexOf(num) === index);
}
console.log("Filter approach:", removeDuplicatesFilter(numbers));