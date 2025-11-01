/** Given an integer array, find a maximum product of a triplet in the array.

Examples: 

Input:  arr[ ] = [10, 3, 5, 6, 20]
Output: 1200
Explanation: Multiplication of 10, 6 and 20

Input:  arr[ ] =  [-10, -3, -5, -6, -20]
Output: -90

Input: arr[ ] =  [1, -4, 3, -6, 7, 0]
Output: 168 */

// TC: O(n**3)
function threeGreatCandidates(arr) {
    let result = -Infinity
    for (let i=0;i<arr.length-2;i++) {
        for (let j=i+1;j<arr.length-1;j++) {
            for (let k=j+1;k<arr.length;k++) {
                result = Math.max(result, arr[i]*arr[j]*arr[k])
            }
        }
    }
    return result
}

function threeGreatCandidates2(arr) {
    arr.sort((a,b)=>(a-b)) // O(n.logn)
    let n = arr.length
    return Math.max((arr[n-1]*arr[n-2]*arr[n-3]), arr[n-1]*arr[0]*arr[1])
}

// greedy approach O(n)
function threeGreatCandidates3(arr) {
    let max1 = -Infinity
    let max2 = -Infinity
    let max3 = -Infinity
    let min1 = Infinity
    let min2 = Infinity
    for (let i=0;i<arr.length;i++) {
        if (arr[i]>max1) {
            max3= max2
            max2 = max1
            max1 = arr[i]
        } else if (arr[i]>max2) {
            max3 = max2
            max2 = arr[i]
        } else if (arr[i]>max3) {
            max3 = arr[i]
        }
        if (arr[i]<min1) {
            min2 = min1
            min1 = arr[i]
        } else if (arr[i]<min2) {
            min2 = arr[i]
        }
    }
    return Math.max((max1*max2*max3),(min1*min2*max3))
}

let array = [-10, -3, -5, -6, -20]
console.log(threeGreatCandidates3(array))