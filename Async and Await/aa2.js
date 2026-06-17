async function testApi()
{
    try
    {
        let result = await Promise.reject("503 Server Error")
    }
    catch(error)
    {
        console.log("Error : ", error)
    }
    finally
    {
        console.log("Finally block executed")
    }
}

testApi()