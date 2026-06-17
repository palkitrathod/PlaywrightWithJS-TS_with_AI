// *
// **
// ***

for (let i = 0; i < 3; i++)
{
    let row = "";
    for (let j = 0; j <= i; j++)
    {
        row += "* ";
        
    }
   console.log(row) 
}

// ***
// **
// *

for (let i =0; i<3; i++)
{
    let row = ""
    for (let j=0; j<3-i; j++)
    {
        row+="* "
    }
    console.log(row)
}


// ****
//  ***
//   **
//    *
console.log("---------------------------------")

for (let i=0; i<4; i++)
{
    for (let j=0; j<i-1; j++)
    {
        process.stdout.write(" ")
    }
    process.stdout.write("* \n")
}