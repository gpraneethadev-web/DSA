/** Input: arr[] = [1, 4, 3, 2, 6, 5]  
Output:  [5, 6, 2, 3, 4, 1]
Explanation: The first element 1 moves to last position, the second element 4 moves to second-last and so on.

Input: arr[] = [4, 5, 1, 2]
Output: [2, 1, 5, 4]
Explanation: The first element 4 moves to last position, the second element 5 moves to second last and so on. */

// TC: O(N) SC: O(N)
function reverseArray1(arr) {
    let result = []
    for (let i=arr.length-1;i>=0;i--) {
        result.push(arr[i])
    }
    return result
}

// TC: O(N) SC: O(1)
function reverseArray2(arr) {
    let i = 0
    let j = arr.length-1
    while (i < j) {
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i++
        j--
    }
    return arr
}

// inbuild method
function reverseArray3(arr) {
    return arr.reverse()
}

// let array = [1, 4, 3, 2, 6, 5] 
let array =  [4, 5, 1, 2]
console.log(reverseArray3(array))

module.exports = { reverseArray3 };