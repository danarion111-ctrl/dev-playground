export {}
function countEqualPairs(nums: number[]) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
     for (let j = i+ 1; j < nums.length; j++) {
         if (nums[i] === nums[j]) {
             count++
         }
     }
    }
    return count
}
console.log(countEqualPairs([2 , 5 , 6 , 2 ,  9 , 2]))