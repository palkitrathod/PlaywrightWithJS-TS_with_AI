interface Employee
{
    id : number
    name : string
    salary? : number
    department? : string
}

let emp1 : Employee =
{
    id: 1,
    name: "Paklit"
};

let emp2 : Employee = 
{
    id: 1,
    name: "Rathod",
    salary : 50000,
    department : "IT"
};

let emp3 : Employee =
{
    id : 2,
    name : "John",
    salary : 60000,
    department : "HR"
}
console.log(emp1)
console.log(emp2)
console.log(emp3)