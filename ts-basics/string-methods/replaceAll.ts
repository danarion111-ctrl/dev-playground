export{}

const message:string = "Hello!!! How are you??? I'm fine!!!";
const cleanMessage:string = message
    .replaceAll('!' , '.')
    .replaceAll('?' , '.')
console.log(cleanMessage)



const phone:string = "+373 (69) 123-456";
const cleanPhone:string = phone
    .replaceAll(' ', '')
    .replaceAll('(' , '')
    .replaceAll(')', '')
    .replaceAll('-', '')
console.log(cleanPhone);