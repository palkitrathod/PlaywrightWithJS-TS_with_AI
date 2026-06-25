class Wallet
{
    #money = 0
    addMoney(amount)
    {
        this.#money += amount
        console.log("Total Added Money : " + this.#money)
        
    }
    spendMoney(amount)
    {
        //Cannot spend more than available money.
        if(amount > this.#money)
        {
            console.log("You can not spend more than available money")
        }
        else
        {
            this.#money -=amount
            console.log("Money after spend : " + this.#money)
        }
        if (this.#money === 0)
        {
            console.log("No Money left")
        }
    }
    showMoeny()
    {
        return this.#money
    }
}
const obj = new Wallet()
obj.addMoney(100)
obj.spendMoney(100)
console.log("Money Left : " + obj.showMoeny())