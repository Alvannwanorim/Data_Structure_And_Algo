function sameOld(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    for (let i = 0; i < arr1.length; i++) {
        let index = arr2.indexOf(arr1[i] ** 2)

        if (index === -1) return false
        console.log(index);
        arr2.splice(index, 1)

    }
    return true
}

// let ans = sameOld([1, 3, 4], [1, 7, 16])
// console.log(ans);

function frequencyCounter(arr1, arr2) {
    if (arr1.length !== arr2.length) return false

    let frequencyTable1 = {}
    let frequencyTable2 = {}
    for (let item of arr1) {
        frequencyTable1[item] = (frequencyTable1[item] || 0) + 1

    }
    for (let item of arr2) {
        frequencyTable2[item] = (frequencyTable2[item] || 0) + 1

    }
    for (let key in frequencyTable1) {
        if (!(key ** 2 in frequencyTable2)) return false

        if (frequencyTable2[key ** 2] !== frequencyTable1[key]) return false
    }
    return true
}

console.log(frequencyCounter([1, 3, 4], [1, 9, 16]))
