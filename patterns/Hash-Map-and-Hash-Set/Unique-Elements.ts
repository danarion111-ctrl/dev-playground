export {}
function getUniqueNumbers(nums:number[]){
    const set = new Set()
    for(let num of nums){
        set.add(num)
    }
    return [...set]

}
console.log(getUniqueNumbers([1, 2, 2, 3, 4, 4, 5]))
console.log(getUniqueNumbers([7, 7, 7, 7]))