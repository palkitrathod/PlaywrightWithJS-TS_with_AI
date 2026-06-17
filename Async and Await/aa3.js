function getToken()
{
    return Promise.resolve("fhalkdshfioewyh6578357843uidhfsd")
}

async function run()
{
    let token = await getToken()
    console.log(token)
}


run()