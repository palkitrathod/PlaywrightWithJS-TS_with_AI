interface Payment
{
    pay (amount : number) : void
}


class GooglePay implements Payment
{
    pay(amount: number): void {
        console.log(amount + "Paying using Google Pay")
    }
}

class PhonePe implements Payment
{
    pay(amount: number): void {
        console.log(amount + "Paying using PhonePe")
    }
}

// Create objects (cavemen) and tell them to pay
let gpay = new GooglePay();
gpay.pay(100);   // Prints: Paying using Google Pay

let phonepe = new PhonePe();
phonepe.pay(200); // Prints: Paying using PhonePe

