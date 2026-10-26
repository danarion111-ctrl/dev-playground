export{}

const numbers = [3, 11, 6, 15, 8];
console.log(numbers.find(n => n > 10))


const anotherNumbers = [14, 7, 21, 9, 30];
console.log(anotherNumbers.findIndex(num => num < 10  ));


const users = [
    { id: 5, name: "Alex", age: 16 },
    { id: 8, name: "Maria", age: 21 },
    { id: 12, name: "Dan", age: 18 }
];
const idOfUser  = users.find(user => user.id === 12)
if(idOfUser === undefined){
    console.log('User id not found');
}else{
    console.log(idOfUser)
}

