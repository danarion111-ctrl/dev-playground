export {}
function findMostFrequent(nums:number[]) {
    const seen = new Map()
    let mostFrequent = 0
    let maxCount = 0

    for(let num of nums){
        const count = (seen.get(num) ?? 0) + 1
        seen.set(num, count)

        if(count > maxCount){
            maxCount = count
            mostFrequent = num
        }
    }

    return mostFrequent

}

console.log(findMostFrequent([1, 2, 2, 3, 3, 3, 4]))