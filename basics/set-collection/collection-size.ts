export{}

const names:string[] = [
    "Alex",
    "Maria",
    "Alex",
    "Daniel",
    "Maria",
    "Maria",
];
function analyzeDuplicateNames(namesArray:string[]){
    const allNames = new Set(namesArray);
    const totalNames:number = namesArray.length;
    let uniqueCount:number = allNames.size;
    let duplicatesCount:number = totalNames - uniqueCount

    return{
        total : totalNames ,
        unique : uniqueCount,
        duplicates:duplicatesCount,
        hasDuplicates: duplicatesCount>0,
    }

}

console.log(analyzeDuplicateNames(names))