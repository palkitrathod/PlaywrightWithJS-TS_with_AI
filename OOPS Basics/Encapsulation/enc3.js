class Mobile
{
    #battery = 0

    charge(amount)
    {
        this.#battery += amount
        console.log("Current Battery : " + this.#battery)
    }

     use(amount)
     {
         if (amount <= this.#battery )
         {
             
             console.log("After usage : ", this.#battery -= amount)
            
         }
         if (this.#battery === 0)
         {
            console.log("Battery Low")
         }
        
     }

     getBattery()
     {
         return this.#battery
     }

}

const obj_ref = new Mobile()
obj_ref.charge(100)
obj_ref.use(100)
console.log("Battery Currently : " + obj_ref.getBattery())