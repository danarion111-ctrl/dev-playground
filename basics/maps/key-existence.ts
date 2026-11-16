export {}
const promoCods = new Map<string, number>()
promoCods.set('WELCOME0' , 0)
promoCods.set('SALE20' , 20)
promoCods.set('NEWUSER' , 10)

console.log(promoCods.has('SALE20'))
console.log(promoCods.has('NEWUSER'))
console.log(promoCods.has('INVALID'))

const emails = new Map<number , string>()

emails.set(101, 'alex@example.com')
emails.set(205, 'maria@example.com')
emails.set(309, 'john@example.com')

const requestedIds = [101, 999, 309, 205, 777];

requestedIds.forEach(id => {
    if(emails.has(id)) {
        console.log('User exists')
    }else
    {console.log('User not found')}
})