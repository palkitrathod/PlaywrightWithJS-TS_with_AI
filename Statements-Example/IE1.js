// Task : write a code which conclude the heading based on the API Status Code as per the series

let statusCode = 100

if (statusCode >= 200 && statusCode <= 299) {
    console.log("Success")
}
else if (statusCode >= 300 && statusCode <= 399) {
    console.log("Redirection")
}
else if (statusCode >= 400 && statusCode <= 499) {
    console.log("Client Error")
}
else if (statusCode >= 500 && statusCode <= 599) {
    console.log("Server Error")
}
else {
    console.log("Unknown Status Code")
}