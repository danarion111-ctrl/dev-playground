const numbers = [ 3 ,7 , 10 , 15]

const bigNum = numbers.map ( n => {
    return n * 3})

console.log(bigNum)


const users = [
    {username: "Alex" , age : 15},
    {username: "Maria" , age :17},
    {username: "Ion" , age :14 }
]

const names = users.map( u => {
 return u.username})

console.log(names)
