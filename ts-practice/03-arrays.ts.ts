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

const scores: number[] = [40, 70, 90];

const passingScores = scores
    .filter(score => score >= 60)
    .map(score => `Score: ${score}`);


console.log(passingScores);

