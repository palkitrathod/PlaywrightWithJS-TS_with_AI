class Animal
{
    constructor(name)
    {
        this.name = name
    }
    eat()
    {
        console.log(this.name + " is eating")
    }
}

class Dog extends Animal
{
    bark()
    {
        console.log(this.name + " is barking")
    }
}
const obj = new Dog("Bruno")
obj.eat()
obj.bark()
