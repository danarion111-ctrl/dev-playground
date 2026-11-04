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