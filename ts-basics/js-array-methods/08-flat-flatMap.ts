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

interface user {
    name: string;
    hobbies: string[];
}
const users : user[] = [
    { name: "Анна", hobbies: ["Чтение", "Музыка"] },
    { name: "Иван", hobbies: ["Спорт"] },
    { name: "Марк", hobbies: ["Игры", "Программирование", "Музыка"] }
];

const allHobbies = users.flatMap(user => user.hobbies)
const hobbiesTwice = allHobbies.flatMap(hobby => [hobby , hobby])

console.log("allHobbies:", allHobbies);
console.log("hobbiesTwice:", hobbiesTwice);


const data: (number | number[])[][] = [
    [1, 2],
    [3, [4, 5]],
    [[6, 7], 8]
];

const levelOne = data.flat()
const fullyFlat = data.flat(Infinity)
console.log(data)
console.log(levelOne);
console.log(fullyFlat);