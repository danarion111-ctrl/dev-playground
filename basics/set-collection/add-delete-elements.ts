export{}
const currentMembers = [
    "Alex",
    "Daniel",
    "Maria",
];

const incomingMembers = [
    "Maria",
    "Andrew",
    "Sofia",
    "Alex",
    "David",
];

function addNewMembers(current:string[] , incoming:string[]){
    const curentMemb = new Set(current)

    for( let member of incoming ){
        curentMemb.add(member)
    }

    return Array.from(curentMemb);
}

console.log(addNewMembers(currentMembers, incomingMembers));