interface Testcase
{
    id : number
    name : string
    status : string
    duration : number
}

let test1 :Testcase =
{
    id : 1,
    name : "Login with valid credentials",
    status : "PASS",
    duration : 1500
}
console.log(test1)
console.log(test1.id)
console.log(test1.name)
console.log(test1.status)
console.log(test1.duration)
