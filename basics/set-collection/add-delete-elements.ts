export{}
const currentMembers:string[] = [
    "Alex",
    "Daniel",
    "Maria",
];

const incomingMembers: string[] = [
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





const selectedCategories:string[] = [
    "Programming",
    "Music",
    "Games",
    "Books",
];

const blockedCategories:string[] = [
    "Music",
    "Books",
    "Travel",
];

function  removeBlockedCategories(select:string[] , block:string[]){
    const selected = new Set(select);
    let removedCount = 0


    for( let category of block){
        if( selected.delete(category)){
            removedCount++;
        }

    }

    return {categories: Array.from(selected) ,
    removedCount
}}
console.log(removeBlockedCategories(selectedCategories, blockedCategories));