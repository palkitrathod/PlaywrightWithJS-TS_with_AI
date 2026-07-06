function getFirstResult<T>(Result : T [])
{
    return Result[0];
}

let obj =  getFirstResult<string> (["Hello", "World"]);

console.log(obj)
console.log(obj)