export{}

const values : (number | string)[] = [
    10,
    'Hi',
    25 ,
    'hello'
]

console.log(values)
console.log(values.filter(v => typeof v === 'number'))
console.log(values.filter(v => typeof v === 'string'))


