const numbers1 = [1,2,1,3,4,4,5];
const numbers2 = [1,2,3,4,5];

function checkIfSorted(nums) {
    for (let i=1;i<nums.length;i++) {
        if (nums[i]<nums[i-1]) {
            return false
        }
    }
    return true;
}

console.log(checkIfSorted(numbers1));
console.log(checkIfSorted(numbers2));