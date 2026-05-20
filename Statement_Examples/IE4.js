//Build Health Reporter
// Given the percentage of test casespassed in CI bild, report build health as follows:
//100% -> Green Build
//90-99% -> Stable (Investigate Failures)
//70-89% -> Unstable
//Below 70% -> Broken Build (Fix Immediately)

let buildPercentage = 101

if (buildPercentage == 100)
{
    console.log("Greeen Build")
}
else if (buildPercentage >=90 && buildPercentage <=99)
{
    console.log("Stable (Investigate Failures)")
}
else if (buildPercentage >=70 && buildPercentage <=89)
{
    console.log("Unstable")
}
else
{
    console.log("Broken Build (block deployment)")
}