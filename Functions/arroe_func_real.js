// if (ourStatusCode >= 200 && ourStatusCode < 300)

//This is a perfectly normal function. 
function validateStatusCode(status) 
    {
        if (status >= 200 && status <= 300) {
        console.log("Request is fine! - validateStatusCode")
    }
}

// This is a function as an expression. 
const validateStatusCode_Exp = function (status) 
    {
        if (status >= 200 && status <= 300) {
        console.log("Request is fine! - validateStatusCode_Exp")
    }
}



// Arrow function 
const validateStatusCode_Arrow = (status) => 
    {
        if (status >= 200 && status <= 300) 
        {
        console.log("Request is fine! - validateStatusCode_Arrow")
    }
}

validateStatusCode(200);
validateStatusCode_Exp(200);
validateStatusCode_Arrow(200);