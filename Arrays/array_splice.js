//splice() - Add or Remove Elements from an Array

//The splice() method is used to add or remove elements from an array at a specific index. 
// It modifies the original array and returns an array containing the removed elements (if any).    

let fruits = ["apple", "banana", "orange", "grape"];
fruits.splice(2, 0, "kiwi");
//starts from index 2, remove 0 element and add "kiwi"
console.log(fruits); // Output: ["apple", "banana", "kiwi", "orange", "grape"]

// Add
fruits.splice(3, 0, "mango");
//starts from index 3, remove 0 element and add "mango"
console.log(fruits); // Output: ["apple", "banana", "kiwi", "mango", "orange", "grape"]