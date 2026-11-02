import {filter} from "minimatch";

const email = "admin@gmail.com";
console.log(email.startsWith('admin'))

const website = "https://google.com";
console.log(website.startsWith('https://'))

const users:string[] = [
    "admin_dan",
    "user_mike",
    "admin_alex",
    "guest_john",
    "user_sarah"
];
const admins:string[] = users.filter(user => user.startsWith("admin"));
console.log(admins);