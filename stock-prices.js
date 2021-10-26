function best(arr) {
    let bestProfit = 0; // Storage for the result

    // These first two while loop 'pre-treat' the array, removing elements that can't possibly be part of the solution prior to the
    // search for the solution.
    let continueLoop = true;

    while (arr.length > 1 && continueLoop) {
        if (arr[arr.length - 2] >= arr[arr.length -1]) {
            arr.pop()
        } else {
            continueLoop = false;
        }
    }

    continueLoop = true;
    
    while (arr.length > 1 && continueLoop) {
        if (arr[1] <= arr[0]) {
            arr.shift();
        } else {
            continueLoop = false;
        }
    }

    if (arr.length > 1) {

        for (let i = 0; i < arr.length - 1; i++) { // check all but the last number. It will be compared as a 'Sell' in the last loop

            // In this iteration of the loop, the best selling point is the biggest number in the remaining portion of the array
            const thisBestSell = arr.slice(i+1,arr.length).reduce((big, current) => Math.max(big, current));
            const thisBuy = arr[i]; // the number being considered for the best buy point
    
            if (thisBestSell - thisBuy > bestProfit) {
    
                bestProfit = thisBestSell - thisBuy;
    
            }
    
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