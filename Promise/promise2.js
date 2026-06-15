let apiCall = new Promise (function(resolve,reject){
    reject("500 Server Error")
})

apiCall.then(function(Data){
    console.log("Data is success!!");
}).catch(function(error){
    console.log(error);
})