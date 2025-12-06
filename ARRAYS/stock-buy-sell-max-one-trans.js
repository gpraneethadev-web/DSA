/* Input: prices[] = {7, 10, 1, 3, 6, 9, 2}
Output: 8
Explanation: Buy for price 1 and sell for price 9. 

Input: prices[] = {7, 6, 4, 3, 1} 
Output: 0
Explanation: Since the array is sorted in decreasing order, 0 profit can be made without making any transaction.

Input: prices[] = {1, 3, 6, 9, 11} 
Output: 10
Explanation: Since the array is sorted in increasing order, we can make maximum profit by buying at price[0] and selling at price[n-1]
*/

// TC: O(N*2)
function stockBuySellMaxOneTrans(arr) {
    let profit = 0
    for (let i=0;i<arr.length-1;i++) {
        max = arr[i]
        for (let j=i+1;j<arr.length;j++) {
            if (arr[j] > max) {
                max = arr[j]
            }
        }
        profit = Math.max(profit, max-arr[i])
    }
    return profit
}

// TC: O(N)
function stockBuySellMaxOneTrans2(arr) {
    let minSoFar = arr[0]
    let profit = 0

    for (let i=1;i<arr.length;i++) {
        if (arr[i]<minSoFar) {
            minSoFar = arr[i]
        } else {
            profit = Math.max(profit, arr[i]-minSoFar)
        }
    }
    return profit
}

let prices1 = [7, 10, 3, 6, 9, 2, 1]
let prices2 = [7, 6, 4, 3, 1]
let prices3 = [1, 3, 6, 9, 11]
let profit = stockBuySellMaxOneTrans2(prices3)
console.log(profit)