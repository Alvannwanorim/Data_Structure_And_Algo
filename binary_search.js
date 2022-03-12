// find a number from an array
function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        let midVal = Math.floor((arr[left] + arr[right]) / 2)
        if (midVal === target) {
            return true
        } else if (midVal > target) {
            right -= 1
        } else {
            left += 1
        }
    }
    return false
}

console.log(binarySearch([1, 3, 2, 5, 6], 6))