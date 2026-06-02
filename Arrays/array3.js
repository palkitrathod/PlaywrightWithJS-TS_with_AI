//accessing the array elementsa and add remove at specific position

let arr = ["a", "b", "c", "d", "e"];
//arr.splice(2, 0, "x"); // add "x" at index 2 without removing any element
//starts from index 2, remove 0 element and add "x"
//console.log(arr); // Output: ["a", "b", "x", "c", "d", "e"]

arr.splice(3, 1); // remove 1 element at index 3
//starts from index 3, remove 1 element and add nothing
console.log(arr); // Output: ["a", "b", "x", "d", "e"]

//Includes method is used to check if an array contains a specific element or not. 
// It returns true if the element is found in the array, otherwise it returns false.

console.log(arr.includes("x"));

//indexOf
console.log(arr)
console.log(arr.indexOf("a")); // Output: 2