class Student
{
    #studentMark = 0

    addmarks(percentage)
    {
        if (percentage > 0)
        {
            this.#studentMark += percentage
        }
    }

    getMarks()
    {
        return this.#studentMark
    }
}

const obj_ref = new Student()
obj_ref.addmarks(80)
console.log("Marks : " + obj_ref.getMarks())