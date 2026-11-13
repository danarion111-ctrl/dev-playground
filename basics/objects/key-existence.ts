export{}

const user =  {
        name: "Alex",
        age: 15,
    }
const requiredFields =
    ["name",
    "age",
    "email",
    "phone"]


function getMissingFields(object: object ,fields:string[] ){
return fields.filter((field)=> !(field in object) )
}
console.log(getMissingFields(user, requiredFields))