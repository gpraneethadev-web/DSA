/** Input: arr[] = [1, 2, 3, 4, 5, 6, 7, 8], k = 3
Output: [3, 2, 1, 6, 5, 4, 8, 7]
Explanation: Elements is reversed: [1, 2, 3] → [3, 2, 1], [4, 5, 6] → [6, 5, 4], and the last group [7, 8](size < 3) is reversed as [8, 7]. 

Input: arr[] = [1, 2, 3, 4, 5], k = 3
Output: [3, 2, 1, 5, 4]
Explanation: First group consists of elements 1, 2, 3. Second group consists of 4, 5.

Input: arr[] = [5, 6, 8, 9], k = 5
Output: [9, 8, 6, 5]
Explanation: Since k is greater than array size, the entire array is reversed. */
const { reverseArray3 } = require("./array-reverse");

function reverseArrayGroup(arr, k) {
    let i=0;
    let result = []
    while (i<arr.length) {
        if (i+k>=arr.length) {
            reverseArray3(arr.slice(i))
            result.push(...reverseArray3(arr.slice(i,i+k)))
            break
        }
        result.push(...reverseArray3(arr.slice(i,i+k)))
        i+=k
    }
    console.log(result)
    return result
}

let array = [1, 2, 3, 4, 5, 6, 7, 8]
let k =1
console.log(reverseArrayGroup(array, k))
