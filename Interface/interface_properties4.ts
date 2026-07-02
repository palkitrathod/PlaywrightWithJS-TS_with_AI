interface Student
{
    rollNo : number;
    name : string;
    marks : number;
    study() : void;
}

class EngineeringStudent implements Student
{
    constructor(
        public rollNo : number,    
        public name : string,
        public marks : number)
    { 
    }
  
    study(): void
    {
        console.log("Roll Number : " + this.rollNo)
        console.log("Name of Student : " + this.name)
        console.log("Marks : " + this.marks)
        console.log("Engineering Student is studying")
    }
}
class MedicalStudent implements Student
{
    constructor(
        public rollNo : number,    
        public name : string,
        public marks : number)
    {
    }
    study(): void
    {
        console.log("Roll Number : " + this.rollNo)
        console.log("Name of Student : " + this.name)
        console.log("Marks : " + this.marks)
        console.log("Medical Student is studying")
    }
}

let es = new EngineeringStudent(1, "Palkit Rathod", 80)
es.study()
let ms = new MedicalStudent(2, "Krimit Yadav", 90)
ms.study()

