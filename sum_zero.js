function sumZero(arr) {
    let left = 0
    let right = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        if (arr[left] + arr[right] === 0) {
            return [arr[left], arr[right]]
        } else if (arr[left] + arr[right] > 0) {
            right -= 1
        } else {
            left += 1
        }
    }
    return false
}



console.log(sumZero([-2, -1, 2, 5, 6]))