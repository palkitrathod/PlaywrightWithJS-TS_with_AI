let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 400],
    ["search", "pass", 100]
]

for (let i=0; i<testMatrix.length; i++)
{
    for (let j=0; j<testMatrix[i].length; j++)
    {
        console.log(testMatrix[i][j]);
        if (testMatrix[i][j] >= 200 && testMatrix[i][j] < 300) 
        {
            console.log("Test case passed!");
        }   
        else if (testMatrix[i][j] >= 400 && testMatrix[i][j] < 500) 
        {
            console.log("Test case failed!");
        }
    }
}

//ForEach loop
testMatrix.forEach(row => {
    row.forEach(
        cell => proces.stdout.write(cell + " ")

    )
    conssole.log("\n");
})
