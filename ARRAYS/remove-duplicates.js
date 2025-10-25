const nums = [1,1,2,2,2,3,3];

// brute - using set 
const set = new Set(nums); // insertion into set N.logN
console.log(set.size);

// optimal - 2 pointer approach
let i = 0
for (let j=0;j<nums.length;j++) {
	if (nums[j]!==nums[i]) {
		nums[i+1] = nums[j]
		i++
	}
}
console.log(i+1)