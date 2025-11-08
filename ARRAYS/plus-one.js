/** Input : [1, 2, 4]
Output : 125
Explanation: 124 + 1 = 125 

Input : [9, 9, 9]
Output: 1000
Explanation: 999 + 1 = 1000  */

function plusOne(arr) {
    return Number(arr.join("").toString()) + 1
}

function plusOne2(arr) {
    let numberStr = ''
    for (let item of arr) {
        numberStr+=item
    }
    return Number(numberStr) + 1
}

function plusOne3(arr) {

    let carry = 1
    for (let i=arr.length-1;i>=0;i--) {
        sum = arr[i]+carry
        arr[i] = sum % 10
        carry = Math.floor(sum/10)
    }
    if (carry>0) arr.unshift(carry)
    
    return arr
}
let arr1 = [1, 2, 4]
let arr2 = [9, 9, 9]
console.log(plusOne3(arr2))