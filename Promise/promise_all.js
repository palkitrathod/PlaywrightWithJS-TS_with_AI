let checkAuth = Promise.resolve("User is Authenticated");
let checkDB = Promise.resolve("Database Connection Error")
let checkCache = Promise.resolve("Cache is Valid")

Promise.all([checkAuth, checkDB, checkCache]).then(function(responses){
    console.log(responses)
}).catch(function(error){
    console.log(error)
})