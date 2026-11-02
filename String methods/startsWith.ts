const email:string = "admin@gmail.com";
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


const links = [
    "https://google.com",
    "http://example.com",
    "https://github.com",
    "ftp://files.com",
    "https://nodejs.org"
];

const secureLinks:string[] = links.filter(link => link.startsWith("https://"));
console.log(secureLinks);