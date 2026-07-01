class parent
{
    setup()
    {
        console.log("parent method called")
    }
}

class child extends parent
{
    setup()
    {
        console.log("child method called")
    }
}

const obj = new child()
obj.setup()