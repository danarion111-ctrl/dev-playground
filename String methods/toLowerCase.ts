export{}

const users:string[] = [
    "DanArion",
    "Mike_200",
    "ALEX",
    "SarahDev",
    "John"
];

const search = "alex";

const alexName = users
    .find(name => name.toLowerCase() === search.toLowerCase())
console.log(alexName)