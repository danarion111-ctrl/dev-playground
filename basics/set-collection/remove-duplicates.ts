export {}

function removeDuplicateOrders(ID:string[]){
    return [ ... new Set(ID)]
}
const orderIds = [
    "ORD-104",
    "ORD-105",
    "ORD-104",
    "ORD-108",
    "ORD-105",
    "ORD-110",
];
const goodIds = removeDuplicateOrders(orderIds)
console.log(goodIds)