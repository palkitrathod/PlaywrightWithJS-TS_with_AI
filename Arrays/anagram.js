let name1 = "Read"
let name2 = "Dare"

let str1 = console.log(name1.toLowerCase().split('').sort().join(''))
let str2 = console.log(name2.toLowerCase().split('').sort().join(''))

if (str1 === str2)
{
    console.log("String are anagrams")
}
else
{
    console.log("Strigs are not anagrams")
}