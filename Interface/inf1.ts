interface calculator //Its's box which is called is Calculatora and must have 4 things
{
    addition: (a:number, b:number) => number;
    subtraction: (a:number, b:number) => number;
    multiplication: (a:number, b:number) => number;
    division: (a:number, b:number) => number;
}

const obj_ref: calculator = {
    addition: (a, b) => a + b,
    subtraction: (a, b) => a - b,
    multiplication: (a, b) => a * b,
    division: (a, b) => a / b
};

console.log(obj_ref)
