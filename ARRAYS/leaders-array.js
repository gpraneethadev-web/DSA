// TC: O(n*2) SC: O(n)
function leaders_in_array(arr) {
    let result = []
    for (let i=0;i<arr.length;i++) {
        let elem = arr[i]
        let isLeader = true
        for (let j=i+1;j<arr.length;j++) {
            if (arr[j]>elem) {
                isLeader = false
            }
        }
        if (isLeader) result.push(arr[i])
    }
    return result
}

// Better Approach - Suffix Method
function leaders_in_array2(arr) {
    let n = arr.length-1
    let maxTillNow = arr[n]
    let result = []
    result.push(maxTillNow)
    for (let i=n-1;i>=0;i--) {
        if (arr[i]>maxTillNow)  {
            result.push(arr[i])
            maxTillNow = arr[i]
        }
    }
    return result.reverse()
}
let arr1 = [16, 17, 4, 3, 5, 2]
let arr2 = [1, 2, 3, 4, 5, 2]
let res = leaders_in_array2(arr1)
console.log('res', res)