// A function that, given two numbers, returns a boolean representing whether or not the two numbers are equal.

function isEqual(a, b) {
    if (a === b) {
        return true
    } else {
        return false
    }
}

// Test cases

console.log("isEqual(4, 4) : ", isEqual(4, 4), " should be true");
console.log("isEqual(0, 0) : ", isEqual(0, 0), " should be true");
console.log("isEqual(-4, -4) : ", isEqual(-4, -4), " should be true");
console.log("isEqual(4, -4) : ", isEqual(4, -4), " should be false");
console.log("isEqual(0, 1) : ", isEqual(0, 1), " should be false");