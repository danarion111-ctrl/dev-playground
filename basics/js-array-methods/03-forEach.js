const messages = ['Привет', 'Как дела?', 'Увидимся'];

messages.forEach((item , index) => {
    console.log(`Message ${index + 1 }: ${ item}`);
})

const users = [
    { name: 'Анна', online: true },
    { name: 'Иван', online: false },
    { name: 'Марк', online: true },
    { name: 'Елена', online: false }
];

const onlineUsers = users
    .filter(user => user.online)
    .map((user) =>{ return user.name})

onlineUsers.forEach((u)=>{console.log(u)})
