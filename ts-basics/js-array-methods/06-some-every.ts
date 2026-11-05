export{}
const passwords: string[] = [
    "abc123",
    "qwerty",
    "MyPass2026",
    "helloWorld"
];

console.log(passwords.some(password => password.length >= 10 ));
console.log(passwords.every(password => password.length >= 6 ));


interface product {
name: string;
price: number;
inStock: boolean;
}
const products = [
    { name: "Laptop", price: 900, inStock: true },
    { name: "Mouse", price: 25, inStock: false },
    { name: "Keyboard", price: 70, inStock: true },
    { name: "Monitor", price: 300, inStock: true },
    { name: "Headphones", price: 120, inStock: false }
];

console.log(products.some(prod => prod.price > 500));
console.log(products.every(prod => prod.inStock === true))
console.log(products.some(prod => prod.inStock === true && prod.price > 100));
console.log(products.every(prod => prod.price > 20 && prod.price < 1000));


interface student{
    name: string;
    grades: number[]
}
const students : student[] = [
    { name: "Alex", grades: [8, 9, 7] },
    { name: "Maria", grades: [10, 9, 10] },
    { name: "Ion", grades: [4, 6, 5] },
    { name: "Elena", grades: [7, 8, 9] }
];

console.log(students.some(stud => stud.grades.some(grade => grade >= 8)))
console.log(students.some(stud => stud.grades.some(grade => grade < 5)))
console.log(students.some(stud => stud.grades.every(grade => grade <= 5 ) && stud.grades.some(grade=> grade === 10)))

