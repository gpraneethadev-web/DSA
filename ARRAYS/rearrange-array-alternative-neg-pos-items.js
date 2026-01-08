/**
 * 
Input:  arr[] = [1, 2, 3, -4, -1, 4]
Output: arr[] = [1, -4, 2, -1, 3, 4]

Input:  arr[] = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
Output: arr[] = [5, -5, 2, -2, 4, -8, 7, 1, 8, 0]
 */

function rearrangeArrayAlternativeNegPosItems(arr) {
    let pos = []
    let neg = []
    for (let i=0;i<arr.length;i++) {
        if (arr[i]>=0) pos.push(arr[i])
        else neg.push(arr[i])
    }
    let i=0
    let arrInd = 0
    while (i<pos.length && i<neg.length) {
        arr[arrInd++] = pos[i]
        arr[arrInd++] = neg[i]
        i++
    }
    while (i<pos.length) {
        arr[arrInd++] = pos[i++]
    }
    while (i<neg.length) {
        arr[arrInd++] = neg[i++]
    }
    return arr
}

let arr1 = [1, 2, 3, -4, -1, 4]
let arr2 = [-5, -2, 5, 2, 4, 7, 1, 8, 0, -8]
let result = rearrangeArrayAlternativeNegPosItems(arr2)
console.log('res', result)