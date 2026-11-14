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



const oldSettings = {
    theme: "dark",
    language: "ru",
    notifications: true,
    fontSize: 14,
};

const newSettings = {
    theme: "light",
    language: "ru",
    notifications: false,
    fontSize: 14,
};
function getChangeKeys(
    before: Record<string, string | number | boolean>,
    after: Record<string, string | number | boolean>,
){
    return Object.keys(before).filter(key => before[key] !== after[key]);
}
console.log(getChangeKeys(oldSettings, newSettings));