export{}
const passwords: string[] = [
    "abc123",
    "qwerty",
    "MyPass2026",
    "helloWorld"
];

console.log(passwords.some(password => password.length >= 10 ));
console.log(passwords.every(password => password.length >= 6 ));


