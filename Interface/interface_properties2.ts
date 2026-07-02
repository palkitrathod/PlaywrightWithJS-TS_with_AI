interface Browser
{
    name : string
    version : number
    open() : void
    close() : void
}

class GoogleChrome implements Browser
{
    name : string = "Google Chrome"
    version : number = 91.0
    open() : void
    {
        console.log(this.name + " is opening")
    }
    close() : void
    {
        console.log(this.name + " is closing")
    }
}

let obj_ref = new GoogleChrome()
obj_ref.open()
obj_ref.close()