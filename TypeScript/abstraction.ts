function buildEndPoint(base: string, path : string):string
{
    return base + path
}

function isSuccessCode (code : number) : boolean
{
    return code >= 200 && code <300
}

function logTestStep(step : string) : void{
    console.log("[STEP]" + step)
}

console.log(buildEndPoint("https://api.com","/users"))
console.log("200 is Success : ", isSuccessCode(200))
console.log("404 is Sucess : ", isSuccessCode(400))
logTestStep("Navigate to login page")