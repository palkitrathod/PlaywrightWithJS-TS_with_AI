//Track failed login attempts. Lock the account after 3 failed attempts.

let failedAttempts = 4;

if (failedAttempts >= 3)    
{
    console.log("Account Locked")
}
else if (failedAttempts == 2)
{
    console.log("Warning: One more failed attempt will lock the account")
}   
else if (failedAttempts == 1)
{
    console.log("Warning: Two more failed attempts will lock the account")
}
else
{
    console.log("No failed attempts")
}