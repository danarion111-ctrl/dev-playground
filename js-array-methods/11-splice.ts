export{}

const shopping:string[] = ["Хлеб", "Молоко", "Яблоки", "Сыр", "Чай"];
shopping.splice(2 ,1 , "Бананы")
console.log(shopping)


const grades:number[] = [3, 4, 2, 5, 3, 4];
grades.splice(1 ,3 , 5 , 5)
console.log(grades)



const names:string[] = ["Ира", "Максим", "Оля", "Максим", "Дима"];
const index:number = names.indexOf("Максим");
if(index > -1){
    names.splice(index, 1);
}
console.log(names)



const numbers:number[] = [12, -4, 0, -7, 8, -1, 5];
for(let i:number = numbers.length -1 ; i>= 0 ; i--){
    if(numbers[i] < 0){
        numbers.splice(i,1);
    }
}
console.log(numbers);



const tasks:string[] = ["Учёба", "Игры", "Уборка", "Прогулка", "Сон"];
const gamesIndex:number = tasks.indexOf("Игры")
if(gamesIndex > -1){
    tasks.splice(gamesIndex ,1 )
}
const sleepIndex:number = tasks.indexOf("Сон")
if(sleepIndex > -1){
    tasks.splice(sleepIndex , 0 ,  "Спорт" , "Чтение")
}

console.log(tasks)



const letters:string[] = ["A", "B", "C", "D", "E"];
const deletedLetters = letters.splice(1 ,2)
const newLetters:string[] = letters.concat(deletedLetters)
console.log(newLetters)