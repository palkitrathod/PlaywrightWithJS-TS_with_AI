interface Employee
{
    id : number
    name : string
    salary : number
    work () : void
}

class Developer implements Employee
{
    id : number = 0
    name : string = ""
    salary : number = 0
    work () : void
    {   
        console.log(" ID : " + this.id)
        console.log(" Name : " + this.name)
        console.log(" Salary : " + this.salary)
    }
}

const obj_Ref = new Developer()
obj_Ref.id = 101
obj_Ref.name = "John Doe"
obj_Ref.salary = 50000
obj_Ref.work()