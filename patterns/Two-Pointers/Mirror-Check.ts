export {}

function isSymmetric(nums:number[]){
    let left = 0
    let right = nums.length - 1;

    while (left < right){
        if (nums[left]!==nums[right]){
            return  false
        }
        left++
        right--
    }
return true
}

console.log(isSymmetric([1, 4, 7, 4, 1]))
console.log(isSymmetric([3, 8, 2, 8]))