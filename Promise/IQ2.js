let p = new Promise (function(resolve,reject){
    reject("Something went wrong")
})

p.catch(function(error){
    console.log("Caught : ", error)
})