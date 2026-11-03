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


const messages:string[] = [
    "HELLO!",
    "How Are You?",
    "GOOD MORNING",
    "See You Later",
    "THANK YOU"
];

const normalizedMessages:string[] = messages.map(message => message.toLowerCase());
console.log(normalizedMessages)