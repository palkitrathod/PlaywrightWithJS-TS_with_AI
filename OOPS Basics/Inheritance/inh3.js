class Person
{
    constructor(name)
    {
        this.name = name
    }
    introduce()
    {
        console.log("Hi, i am " + this.name )
    }
}

class Student extends Person
{
    study(grade)
    {
        console.log(this.name + " is studying")
        console.log("Grade : "+grade)
    }
}

const obj = new Student("John")
obj.introduce()
obj.study("A")