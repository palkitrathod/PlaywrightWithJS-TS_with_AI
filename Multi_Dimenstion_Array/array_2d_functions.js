let scores = [
    ["pass", "fail", "not attempted"],
    ["fail", "pass", "fail"],
    ["pass", "fail", "not attempted"]
];

for (let i=0; i<scores.length; i++) 
    {
    for (let j=0; j<scores[i].length; j++) 
        {
            if (scores[i][j].includes("fail"))
            {
                console.log(`Found "fail" in row ${i}, column ${j}`);
            }
        }
    }
