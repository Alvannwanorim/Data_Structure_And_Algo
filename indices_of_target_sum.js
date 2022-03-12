function indicesOfTargetSum(arr, target) {
    let left = 0;
    let right = arr.length - 1

    for (let i = 0; i < arr.length; i++) {
        console.log(arr);
        if (arr[left] + arr[right] === target) {
            firstIndex = arr.indexOf(arr[left])
            secondIndex = arr.indexOf(arr[right])
            return [firstIndex, secondIndex]
        } else if (arr[left] + arr[right] > target) {
            right -= 1
        } else {
            left += 1
        }
    }
}

function indicesOfTargetSumUnsortedArray(arr, target) {


    for (let i = 0; i < arr.length; i++) {
        let first = arr[i]
        console.log(first);
        for (let j = i + 1; j < arr.length; j++) {
            let second = arr[j]
            if (first + second === target) {

                return [i, j]
            }
        }
    }
}


//console.log(indicesOfTargetSumUnsortedArray([3, 4, 3, 5, 6, 2], 11));
function bet(h, t) {
    const rt = h + t
    rt = 9
    console.log(rt);

    // console.log(ite);
}
bet(45, 00);