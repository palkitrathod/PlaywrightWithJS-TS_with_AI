interface Hunter
{
    name : string 
    age : number 

    hunt() : void

}
class Caveman implements Hunter
{
    name : string = ""
    age : number  = 0
    hunt() : void
    {
        console.log(this.name + " is hunting")
        console.log("Age: " + this.age)
    }  

}

let hunter1 = new Caveman()
hunter1.name = "Ragnar"
hunter1.age = 30
hunter1.hunt()