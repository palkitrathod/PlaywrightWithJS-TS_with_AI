let apiCall = new Promise (function (resolve, reject){
    resolve({status : 200, body : "Success"})
})

apiCall.then (function(response){
    console.log(response);
    console.log(response.status); //200
    console.log(response.body); //Success
})



let OrderFood = new Promise (function (resolve, reject){
    reject ({status : 500, body : "Failed to place order"})
})

OrderFood.catch (function(response){
    console.log(response);
    console.log(response.status); //500
    console.log(response.body); //Failed to place order
})
