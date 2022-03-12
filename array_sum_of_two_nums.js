// find two numbers that sums up to the target 
function sumNumOfArray(arr, target) {
    let left = 0
    let right = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        if (arr[left] + arr[right] === target) {
            return [arr[left], arr[right]]
        } else if (arr[left] + arr[right] > target) {
            right -= 1
        } else {
            left += 1
        }
    }
    return false
}

console.log(sumNumOfArray([1, 3, 2, 5, 6], 11))