class BaseTest
{
    setup()
    {
        console.log("Base : Open Browser")
    }
    teardown()
    {
        console.log("Base : Close Browser")
    }
}

class UITest extends BaseTest
{
    setup()
    {
        super.setup() //This will call parent class method
        console.log("UI : Maximise Window")
    }
    teardown()
    {
        console.log("UI : Take Screenshot")
        super.teardown() //This will call parent class method
    }
}

const obj = new UITest()
obj.setup()
obj.teardown()