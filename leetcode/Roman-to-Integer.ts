export {}

function RomanToInteger(s:string) {
    const romanValues : Record<string, number>= {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let result = 0
    const value = s.split('');

for (let i = 0; i < value.length; i++) {

    const current = romanValues[value[i]]
    const next = romanValues[value[i + 1]];

if(current < next) {
    result -=  current;
}else {
    result += current;
}
}
return result;}

console.log(RomanToInteger('MCMXCIV') )