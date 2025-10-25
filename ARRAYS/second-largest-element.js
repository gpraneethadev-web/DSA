class Solution {
    secondLargestElement(nums) {
        // brute O(N.logN + N)
        // nums.sort((a,b)=>(a-b))
        // let largest=nums[nums.length-1]
        // for (let i=nums.length-2;i>=0;i--) {
        //     if (nums[i]!==largest) return nums[i]
        // }
        // return -1

        // better TC-> O(2N)
        // let largest = nums[0]
        // for (let i=1;i<nums.length;i++) {
        //     if (nums[i]>largest) {
        //         largest = nums[i]
        //     }
        // }
        // let second_largest = -1
        // for (let i=0;i<nums.length;i++) {
        //     if (nums[i]>second_largest && nums[i]<largest) {
        //         second_largest = nums[i]
        //     }
        // }
        // return second_largest

        // optimal
        let largest = nums[0]
        let second_largest = -1
        for (let i=1;i<nums.length;i++) {
            if (nums[i]>largest) {
                second_largest = largest
                largest = nums[i]
            }
        }
        return second_largest


    }
}