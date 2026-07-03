interface Animal
{
    eat() : void
}

class Dog implements Animal
{
    constructor()
    {
        console.log("Dog is created")
    }

    eat() : void
    {
        console.log("Dog is eating")
    }
}

let dog1 : Dog = new Dog()
dog1.eat()