function getToken() {
    return Promise.resolve("abc123");
}

async function run() {
    let token = await getToken();
    console.log(token);
}

run();