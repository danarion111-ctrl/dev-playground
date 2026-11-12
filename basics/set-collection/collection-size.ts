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


const firstCatalog:string[] = [
    "Phone",
    "Laptop",
    "Tablet",
    "Phone",
    "Monitor",
];

const secondCatalog:string[] = [
    "Keyboard",
    "Mouse",
    "Monitor",
    "Keyboard",
];


function compareCatalogSizes(first:string[] , second:string[]){
    const catalogNrOne = new Set(first);
    const catalogNrTwo = new Set(second);

    let firstUniqueCount = catalogNrOne.size;
    let secondUniqueCount = catalogNrTwo.size;
    let sameUniqueCount = firstUniqueCount === secondUniqueCount;


    return {
        first : firstUniqueCount,
        second : secondUniqueCount,
        same : sameUniqueCount
    }
}
console.log(compareCatalogSizes(firstCatalog , secondCatalog));