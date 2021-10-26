function best(arr) {
    let bestProfit = 0; // Storage for the result

    for (let i = 0; i < arr.length - 1; i++) { // check all but the last number. It will be compared as a 'Sell' in the last loop

        // In this iteration of the loop, the best selling point is the biggest number in the remaining portion of the array
        const thisBestSell = arr.slice(i+1,arr[arr.length]).reduce((big, current) => Math.max(big, current));
        const thisBuy = arr[i]; // the number being considered for the best buy point

        if (thisBestSell - thisBuy > bestProfit) {

            bestProfit = thisBestSell - thisBuy;

        }

    }

    return bestProfit;

}

console.log(best([15, 10, 20, 22, 1, 9]));
console.log(best([1, 2, 3, 4, 5]));
console.log(best([2, 3, 10, 6, 4, 8, 1]));
console.log(best([7, 9, 5, 6, 3, 2]));
console.log(best([0, 100]));
console.log(best([5, 4 , 3, 2, 1]));
console.log(best([100]));
console.log(best([100, 0]));