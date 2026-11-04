export{}

const message = "Hello!!! How are you??? I'm fine!!!";
const cleanMessage = message
    .replaceAll('!' , '.')
    .replaceAll('?' , '.')
console.log(cleanMessage)