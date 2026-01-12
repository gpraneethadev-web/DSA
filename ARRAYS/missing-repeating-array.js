/*
Input: arr[] = [3, 1, 3]
Output: [3, 2]
Explanation: 3 is occurs twice and 2 is missing.

Input: arr[] = [4, 3, 6, 2, 1, 1]
Output: [1, 5] 
Explanation: 1 is occurs twice and 5 is missing.
*/

// O(N) SC: O(N)
function missingRepeatingArray(arr) {
    let missing = 0
    let repeating = 0
    let freq = new Array(arr.length).fill(0)

    for (let i=0;i<arr.length;i++) {
        freq[arr[i]-1] = ++freq[arr[i]-1] || 1
    }
    console.log(freq)
    for (let i=0;i<arr.length;i++) {
        if (freq[i] === 0) missing = i+1
        if (freq[i] === 2) repeating = i+1
    }
    return [repeating, missing];
}

let arr1 = [3, 1, 3] 
let result = missingRepeatingArray(arr1)
console.log(result)