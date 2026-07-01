class Device 
{
    turnOn() 
    {
        console.log("Device is turning on...");
    }
}

class Phone extends Device {
    turnOn() 
    {
        super.turnOn(); // Call parent method
        console.log("Phone is ready to use.");
    }
}

const obj = new Phone();

obj.turnOn();