export{}

const categories:string[][] = [
    ["Телефон", "Планшет"],
    ["Клавиатура", "Мышь", "Монитор"],
    ["Наушники"]
];

const allProducts = categories.flat()
console.log(categories)
console.log(allProducts)


interface order {
    id: number;
    items: string[]
}
const orders : order[] = [
    {
        id: 101,
        items: ["Хлеб", "Молоко"]
    },
    {
        id: 102,
        items: ["Яблоки", "Бананы", "Груши"]
    },
    {
        id: 103,
        items: ["Сыр"]
    }
];

const allItems = orders.flatMap(item => item.items)
console.log(allItems)


