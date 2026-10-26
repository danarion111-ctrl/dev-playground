export{}

const products :string[] = [
    "Ноутбук",
    "Мышь",
    "Клавиатура",
    "Монитор",
    "Наушники",
    "Микрофон",
    "Коврик",
    "Веб-камера"
];
const featuredProducts = products.slice(2 ,5)
console.log(featuredProducts);
const lastProducts = products.slice(-3)
console.log(lastProducts);


const users :string[] = [
    "Алексей",
    "Мария",
    "Иван",
    "Елена",
    "Дмитрий",
    "Анна",
    "Максим",
    "Ольга",
    "София",
    "Михаил",
    "Виктор"
];

const pageSize = 4
const page1 = users.slice(0 , pageSize)
const page2 = users.slice(pageSize , pageSize*2)
const page3 = users.slice(pageSize*2, pageSize*3)
console.log(page1)
console.log(page2)
console.log(page3)


const purchases :string[] = [
    "Книга",
    "Рюкзак",
    "Наушники",
    "Мышь",
    "Клавиатура",
    "Монитор",
    "Микрофон",
    "Камера"
];


const historyLimit = 3
const recentPurchases = purchases.slice(-historyLimit)
const oldPurchases = purchases.slice(0 ,-historyLimit)

console.log("Последние покупки:", recentPurchases);
console.log("Старые покупки:", oldPurchases);


const grades :number[] = [
    6, 8, 10, 7, 9,
    5, 10, 8, 6, 9,
    10, 7, 8, 9, 10
];
const group = 5
const group1 = grades.slice(0 , group)
const group2 = grades.slice(group , 2*group)
const group3 = grades.slice(group*2 , 3*group)

const groups = [group1 , group2, group3];

for(let i = 0 ; i < groups.length ; i++ ){
    console.log(`Group ${i + 1} is ${groups[i]}`);
}