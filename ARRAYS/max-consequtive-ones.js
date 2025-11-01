// TC: O(n^2) SC: O(1)
function maxConsequtiveOnes(arr) {
    let result = 1
    for (let i=0;i<arr.length-1;i++) {
        let count = 1
        for (let j=i+1;j<arr.length;j++) {
            if (arr[j]!=arr[j-1]) break;
            count+=1
        }
        result = Math.max(result, count)
    }
    return result
}

// O(N)
function maxConsequtiveOnes2(arr) {
    let result = 1
    let left = 0
    for (let right=1;right<arr.length;right++) {
        if (arr[left] != arr[right]) {
            left = right
            continue;
        }
        result = Math.max(result, right-left+1)
    }
    return result
}

// Simple traversal TC: O(N) SC:O(1)
function maxConsequtiveOnes3(arr) {
    let counter = 1
    let result = 1
    for (let i=1;i<arr.length;i++) {
        if (arr[i]!=arr[i-1]) {
            counter = 0
        }
        counter+=1
        result = Math.max(result, counter)
    }
    return result
}

// Bit manipulation TC: O(N) SC:O(1); 
// XOR of 2 same numbers is 0; XOR of 2 different numbers is 1
function maxConsequtiveOnes4(arr) {
    let result = 1
    let counter = 1
    for (let i=1;i<arr.length;i++) {
        if (arr[i]^arr[i-1] === 1) {
            counter = 1
            continue
        }
        counter+=1
        result = Math.max(result, counter)
    }
    return result
}

let array = [0, 1, 0, 1, 1, 1, 1]
console.log(maxConsequtiveOnes4(array))