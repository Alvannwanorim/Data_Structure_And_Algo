function slidingWindow(arr, num) {
    if (!arr.length) return null

    let maxSum = 0
    let tempSum = 0

    if (arr.length < num) return false

    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    for (let j = num; j < arr.length; j++) {
        tempSum = tempSum - arr[i - num]
        maxSum = Math.max(maxSum, tempSum)
    }
    return maxSum

}


slidingWindow([1, 2, 3, 4, 5, 6,], 2)