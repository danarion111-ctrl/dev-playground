export{}

type user = {
    name: string,
    age:number,
    isOnline: boolean,
    nickname?: string
}

const users : user[] = [
    {name: ' Alex', age:23, isOnline:false},
    {name: 'Anna', age:17, isOnline:true},
    {name: 'Ion', age:12, isOnline:true},
    ]

const onlineUsers = users
    .filter(u => u.isOnline === true)
    .map(u => u.name)


console.log('All users' , users);
console.log('Online users' , onlineUsers);



