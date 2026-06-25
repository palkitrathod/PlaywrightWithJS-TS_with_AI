class Car
{
    #carSpeed = 0

    accelerate(value)
    {
        
        if (value <= 0)
        {
            console.log("Speed can not be in negative")
            
        }
        else
        {
            this.#carSpeed += value
            console.log("Car Speed Now : " + this.#carSpeed)
        }    
        
    }
//Rules
//Speed cannot become negative.
//If brake is larger than speed, speed becomes 0.
    brake(value)
    {
        if (value <= 0)
        {
            console.log("Break Value can not go below 0")
        }
        else if (value >= this.#carSpeed)
        {
            console.log("Brake Value : " + value)
            this.#carSpeed = 0
            console.log("Brake is larger than Speed, hence speed become : " + this.#carSpeed)
        }
        else
        {
            this.#carSpeed = this.#carSpeed - value
            console.log("Current speed after brake : " + this.#carSpeed)
        }
    }
    showSpeed()
    {
        return this.#carSpeed
    }

    
}

const obj = new Car()
obj.accelerate(100)
obj.brake(-50)
console.log("Final Current Speed : " + obj.showSpeed())