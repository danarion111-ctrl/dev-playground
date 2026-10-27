export{}

const shopping:string[] = ["Хлеб", "Молоко", "Яблоки", "Сыр", "Чай"];
shopping.splice(2 ,1 , "Бананы")
console.log(shopping)


const grades = [3, 4, 2, 5, 3, 4];
grades.splice(1 ,3 , 5 , 5)
console.log(grades)



const names = ["Ира", "Максим", "Оля", "Максим", "Дима"];
const index = names.indexOf("Максим");
if(index > -1){
    names.splice(index, 1);
}
console.log(names)