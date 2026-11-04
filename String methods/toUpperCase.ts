export{}

const statuses:string[] = [
    "online",
    "offline",
    "away",
    "busy",
    "do not disturb"
];

const formattedStatuses = statuses.map(status => status.toUpperCase())
console.log(formattedStatuses);


const codes:string[] = [
    "msg_102",
    "img_204",
    "aud_301",
    "doc_405",
    "msg_502"
];

const formattedCodes:string[] = codes.map(code => code.toUpperCase())
console.log(formattedCodes , formattedCodes[0]);