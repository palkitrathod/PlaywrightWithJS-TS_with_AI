interface Browser
{
    open () : void
    close () : void
    refresh () : void
}

class googleChrome implements Browser
{
    open(): void
    {
        console.log("Opening Chrome Browser")
    }
    close() : void
    {
        console.log("Closing Chrome Browser")
    }
    refresh() : void
    {
        console.log("Refreshing Chrome Browser")
    }
}

class firefox implements Browser
{
    open(): void
    {
        console.log("Opening Firefox Browser")
    }
    close() : void
    {
        console.log("Closing Firefox Browser")
    }
    refresh() : void
    {
        console.log("Refreshing Firefox Browser")
    }
}

let obj_ref = new googleChrome()
obj_ref.open()
obj_ref.refresh()
obj_ref.close()