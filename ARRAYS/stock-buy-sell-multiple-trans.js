/** 
 * Input: prices[] = [100, 180, 260, 310, 40, 535, 695]
Output: 865
Explanation: Buy the stock on day 0 and sell it on day 3 = 310 - 100 = 210 and Buy the stock on day 4 and sell it on day 6 = 695 - 40 = 655 so the Maximum Profit  is = 210 + 655 = 865.

total_profit
 
Input: prices[] = [4, 2]
Output: 0
Explanation: Stock prices keep decreasing, there is no chance to sell at a higher price after buying, so no profit can be made.
 */

/*
Brute force: Recursion
1. express everything in (index, buy)
2. explore possibilities on that day
3. take the max of all profits
4. base case
f(0,1) -> max profit if you buy on first day
*/
function stockBuySellMultipleTrans(arr) {
    let profit = 0
    for (let i=1;i<arr.length;i++) {
        if (arr[i]>arr[i-1]) {
            profit += (arr[i]-arr[i-1])
        }
    }    
    return profit
}

let prices = [100, 180, 260, 310, 40, 535, 695]
let result = stockBuySellMultipleTrans(prices)
console.log(result)