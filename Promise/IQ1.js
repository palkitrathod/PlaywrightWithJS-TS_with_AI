let p = new Promise(function(resolve,reject){
    resolve(42)
})

p.then(function(value){
    console.log("Answer is : ", value)
})