export{}

function findCommonElements(firstArr:number[] ,secondArr:number[]) {
    const numbers = new Set(firstArr)
    const result: number[] = []

        for(let secondNum of secondArr){
            if(numbers.has(secondNum)){
                result.push(secondNum)
            }
        }
    return [... new Set(result)]

}

console.log(findCommonElements(
    [1, 1, 2, 3],
    [1, 1, 4]
))