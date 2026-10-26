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