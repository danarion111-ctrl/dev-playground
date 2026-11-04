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