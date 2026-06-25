class Bank
{
    #balance = 200

    deposit(amount)
    {
        if (amount > 0)
        {
            this.#balance += amount
        }
    }

    getBalance()
    {
        return this.#balance
    }

}

const obj_ref = new Bank()
obj_ref.deposit(500)
console.log(obj_ref.getBalance())