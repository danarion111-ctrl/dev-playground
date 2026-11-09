export {}

function removeDuplicateOrders(ID:string[]){
    return [ ... new Set(ID)]
}
const orderIds: string[] = [
    "ORD-104",
    "ORD-105",
    "ORD-104",
    "ORD-108",
    "ORD-105",
    "ORD-110",
];
const goodIds = removeDuplicateOrders(orderIds)
console.log(goodIds)


const mainCategories:string[] = [
    "Programming",
    "Design",
    "Music",
    "Books"
];

const importedCategories:string[] = [
    "Music",
    "Games",
    "Books",
    "Education",
];

function mergeUniqueCategories(category:string[] , anotherCategory:string[]){
    const allCategories = category.concat(anotherCategory);
    const uniqueCategories = [...new Set(allCategories)];
    return uniqueCategories;
}
console.log(mergeUniqueCategories(mainCategories , importedCategories));