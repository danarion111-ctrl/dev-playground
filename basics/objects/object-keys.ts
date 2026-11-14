export {}
function getFilledFields(form: Record<string, string>){
const keys = Object.keys(form)
const fields: string[] = []
for(let key of keys){
        if (form[key].trim() !== ''){
        fields.push(key)
        }
}
return fields
}
console.log(getFilledFields({
    username: "Alex",
    email: "",
    password: "123456",
    phone: "   ",
    country: "Moldova",
}))