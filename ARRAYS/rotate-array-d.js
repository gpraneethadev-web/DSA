/** Input: arr[] = {1, 2, 3, 4, 5, 6}, d = 2
Output: {3, 4, 5, 6, 1, 2}
Explanation: After first left rotation, arr[] becomes {2, 3, 4, 5, 6, 1} and after the second rotation, arr[] becomes {3, 4, 5, 6, 1, 2}

Input: arr[] = {1, 2, 3}, d = 4
Output: {2, 3, 1}
Explanation: The array is rotated as follows:

After first left rotation, arr[] = {2, 3, 1}
After second left rotation, arr[] = {3, 1, 2}
After third left rotation, arr[] = {1, 2, 3}
After fourth left rotation, arr[] = {2, 3, 1} */

const { reverseArray3 } = require("./array-reverse")

// TC: O(d*n) SC: O(1)
function rotateArrayByD(arr, d) {
    for (let i=0;i<d;i++) {
        let first = arr[0]
        for (let i=0;i<arr.length-1;i++) {
            arr[i] = arr[i+1]
        }
        arr[arr.length-1] = first
        // console.log(arr)
    }
    return arr
}

// TC: O(N) SC: O(1)
function rotateArrayByD2(arr,k) {
    let result = new Array(arr.length)
    let j = d
    let n=arr.length
    // Coply last n-d elements to first n-d positions
    for (let i=0;i<n-d;i++) {
        result[i] = arr[j]
        j++
    }   
    j=0
    // Copy first d elements to last d positions
    for (let i=n-d;i<n;i++) {
        result[i] = arr[j]
        j++
    }
    return result
}

// Reversal algorithm
function rotateArrayByD3(arr, d) {
   return (arr.slice(0,d).reverse().join() + ',' + arr.slice(d).reverse().join()).split(',').reverse().map(Number)
}

let array = [1, 2, 3, 4, 5, 6]
let d = 2
console.log( rotateArrayByD3(array, d))