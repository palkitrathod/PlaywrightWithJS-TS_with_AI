//Write a code for FizzBuzz
//Print numbers from 1 to 100
//Print "Fizz" for multiples of 3
//Print "Buzz" for multiples of 5
//Print "FizzBuzz" for multiples of both 3 and 5
//using while and do while loop

//Using while loop

let num = 1
while (num <=100)
{
    
    if (num % 3 === 0 && num % 5 ===0) //for num 1 condition will become false
    {
        console.log("FizzBuzz")
    }
    else if (num % 5 === 0) //for num 1 condition will become false
    {
        console.log("Buzz")
    }
    else if (num % 3 === 0) //for num 1 condition will become false
    {
        console.log("Fizz")
    }
    else
    {
        console.log(num) //here it will print 1 and further increment by 1
    }
    num++ //here it become 2 and it will check the condition again and it will print 2 and further increment by 1 and it will continue till 100
    
}