class Solution {
    largestElement(nums) {
        // brute ; TC-> O(N.logN)
        // nums.sort((a,b)=> a-b);
        // return nums[nums.length-1];

        // optimal
        let largest = nums[0];
        for (let i=1;i<nums.length;i++) {
            if (nums[i]>largest) {
                largest = nums[i]
            }
        }
        return largest

    }
}