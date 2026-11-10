export{}

const registeredUsers:string[] = [
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


const allFeatures:string[] = [
    "Dark mode",
    "Notifications",
    "Cloud sync",
    "Offline mode",
    "Automatic backup",
];

const enabledFeatures:string[] = [
    "Dark mode",
    "Cloud sync",
];

function findUnselectedFeatures(){
    const enabledSet= new Set(enabledFeatures);
    const result = []

    for(let feature of allFeatures){
        if(!enabledSet.has(feature)){
            result.push(feature);
        }
    }
    return result;

}

console.log(findUnselectedFeatures());