function uniqueCountValues(arr) {
    let i = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
        console.log(i, j);
    }
    return i + 1
}


console.log(uniqueCountValues([1, 2, 3, 4, 4, 5,]));