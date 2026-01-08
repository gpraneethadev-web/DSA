/** Input: arr[] = [2, 2, 2, 2, 2]
Output: [2]
Explanation: All the elements are 2, So only keep one instance of 2.

Input: arr[] = [1, 2, 2, 3, 4, 4, 4, 5, 5]
Output: [1, 2, 3, 4, 5]

Input: arr[] = [1, 2, 3]
Output: [1, 2, 3]
Explanation : No change as all elements are distinct.
*/

// using hash set
// TC: O(N) SC: O(N)
function removeDuplicatesSortedArr(arr) {
    let i=0
    let ht = {}
    for (let j=0;j<arr.length;j++) {
        if (!ht[arr[j]]) {
            ht[arr[j]] = 1
            arr[i] = arr[j]
            i++
        }
    }
    return arr.slice(0,i)
}

// TC: O(N) SC: O(1)
function removeDuplicatesSortedArr2(arr) {
    let i=1
    for (let j=1;j<arr.length;j++) {
        if (arr[j]!==arr[j-1]) {
            arr[i++]=arr[j]
        }
    }
    return arr.slice(0,i)
}

let arr1 = [2,2,2,2,3]
let arr2 = [1, 2, 2, 3, 4, 4, 4, 5, 5]
let arr3 = [1, 2, 3]
let result = removeDuplicatesSortedArr2(arr2)
console.log(result)