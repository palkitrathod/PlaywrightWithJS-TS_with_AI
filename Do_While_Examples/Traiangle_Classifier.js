//Write a code that classifies a triangle based on its side lenghts. 
//Given threee inputs representins the lengths of the sides, 
//Determins if the traianlge is equailateral (all sides are equal), 
//Isoscelese(exactly two sides are equal) or 
//scalene(no sides are equal). Use an if-else statement to classify the traiangle.

let side1 = 5
let side2 = 5
let side3 = 7

if (side1 === side2 && side2 === side3) 
{
    console.log("The triangle is equilateral.")
}   
else if (side1 === side2 || side2 === side3 || side1 === side3) 
{
    console.log("The triangle is isosceles.")
}
else {
    console.log("The triangle is scalene.")
}
