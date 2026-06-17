// Normal Function

function greet()
{
    return "Hello World"
}

const result = greet();
console.log(result);

//With Async 

async function greetAsync()
{
    return "Hello World GreetAsync"
}
const result2 = greetAsync()
console.log(result2)


//With Await
async function greet() {
  return "Hello";
}

async function main() {
  const result = await greet();
  console.log(result);
}

main();