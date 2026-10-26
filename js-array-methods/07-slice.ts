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


