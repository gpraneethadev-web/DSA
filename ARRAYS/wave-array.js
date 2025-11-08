/** 
Input: arr[] = [1, 2, 3, 4, 5]
Output: [2, 1, 4, 3, 5]
Explanation: Array elements after sorting it in the waveform are 2, 1, 4, 3, 5.

Input: arr[] = [2, 4, 7, 8, 9, 10]
Output: [4, 2, 8, 7, 10, 9]
Explanation: Array elements after sorting it in the waveform are 4, 2, 8, 7, 10, 9.
 */
// TC: O(n) SC: O(1)
function waveArray(arr) {
    for (let i=1;i<arr.length;i+=2) {
        [arr[i-1],arr[i]] = [arr[i], arr[i-1]]
    }
    return arr;
}
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [2, 4, 7, 8, 9, 10]
console.log(waveArray(arr2))