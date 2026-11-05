export{}

const messages:string[] = [
    "   Hello!   ",
    "  How are you? ",
    "Good morning    ",
    "   Bye! ",
    "   See you later   "
];
const cleanMessages:string[] = messages.map(message => message.trim());
console.log(cleanMessages);

const usernames:string[] = [
    "  DanArion",
    "Mike_200   ",
    "   AlexDev   ",
    "Sarah",
    "  John_15  "
];

const cleanNames = usernames
    .map(username => username.trim() )
    .find(username => username === 'AlexDev')
console.log(cleanNames);