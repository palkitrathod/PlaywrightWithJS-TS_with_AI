let apiCall = new Promise (function(resolve,reject){
    
    resolve({status : 200, body :"success"})
})

apiCall.then(function(response){

    console.log(response.status)
    console.log(response.body)
}).catch(function(error){
    console.log(error)
})

//. then() runs only when promise resolved successfully
//. catch() runs only when promise is rejected
