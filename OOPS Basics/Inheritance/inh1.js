class parent
{

    #netWorth
    familyName(name,val)
    {
        return name
        this.#netWorth 
    }
}   

class child extends parent
{
    companyName(cname)
    {
        return cname
    }
}

const obj = new child()
console.log(obj.familyName("Rathod's", 1000))