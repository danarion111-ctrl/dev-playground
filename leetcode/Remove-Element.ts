export {}
function removeElement(nums:number[] , val:number) {
    let k = 0

 for (let i = 0 ; i < nums.length ; i++){
     if(nums[i] !== val){
         nums[k] = nums[i]
         k++
     }
 }
 return nums;
}

console.log(removeElement([2 , 5, 7 ,8] , 5))