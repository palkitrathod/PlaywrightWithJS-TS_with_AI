let apiStatus = new Promise (function (resolve,reject){

    reject({status : 400, body :"Error from Client Side"})
})


apiStatus.then(function(response)
{
    console.log(response.status)
    console.log(response.body)
}).catch(function(error){
    console.log(error.status)
    console.log(error.body)
    console.log("catch block executed")
}).finally(function(){ //this code always get executed      
    console.log("API call completed")
})