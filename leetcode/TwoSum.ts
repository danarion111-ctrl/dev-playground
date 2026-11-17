export{}

const nums = [2 , 11, 15 , 7];

function twoSum(nums: number[] , target: number) {
    const seen = new Map<number, number>();

    for(let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const needed = target - currentNum;

        const previousIndex = seen.get(needed);

        if(previousIndex !== undefined){
        }
    seen.set(currentNum, i);
    }
    return []
}

console.log(twoSum(nums , 9))