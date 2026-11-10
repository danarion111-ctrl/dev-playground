export{}

const registeredUsers = [
    "Alex",
    "Daniel",
    "Maria",
    "Arion",
];

function isUserRegistered(users:string[] , user:string){
    return new Set (users).has(user)
}
console.log(isUserRegistered(registeredUsers, "Maria"))
console.log(isUserRegistered(registeredUsers, "Andrew"))