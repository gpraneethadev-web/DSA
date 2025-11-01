// Brute TC: O(N) SC: O(N)
function moveAllZeroesToEndOfArray(arr) {
    let zeroCount = 0
    let temp = []
    for (let i=0;i<arr.length;i++) {
        if (arr[i] !== 0) {
            temp.push(arr[i])
        } else {
            zeroCount+=1
        }
    }
    for (let i=0;i<zeroCount;i++) {
        temp.push(0)
    }
    return temp
}

function moveAllZeroesToEndOfArray2(arr) {
    let i=0
    for (let j=0;j<arr.length;j++) {
        if (arr[j] !== 0) {
            arr[i]=arr[j]
            i++
        }
    }
    while (i<arr.length) {
        arr[i] = 0
        i++
    }
    return arr
}

function moveAllZeroesToEndOfArray3(arr) {
    let counter = 0
    for (let i=0;i<arr.length;i++) {
        if (arr[i]!==0) {
            [arr[i], arr[counter]] = [arr[counter], arr[i]]
            counter += 1
        }
    }
    return arr
}
let array =  [1, 2, 0, 0, 4, 3, 0, 5, 0]
console.log(moveAllZeroesToEndOfArray2(array))