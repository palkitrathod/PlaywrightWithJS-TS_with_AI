class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
    }
}

class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age); // Calls the Person constructor
        this.subject = subject;
    }

    displayInfo() {
        super.displayInfo(); // Calls the Person's displayInfo()
        console.log("Subject: " + this.subject);
    }
}

const obj_ref = new Teacher("Rahul", 35, "Mathematics");

obj_ref.displayInfo();