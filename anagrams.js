function anagram(str1, str2) {
    // check that the strings are of equal length 
    if (str1.length !== str2.length) return false
    // store the strings in a hash table 
    let lookup = {}
    for (let str of str1) {
        lookup[str] ? lookup[str] = lookup[str] + 1 : lookup[str] = 1
    }

    // console.log(lookup);
    for (let i = 0; i < str2.length; i++) {
        if (!lookup[i]) {
            return false
        } else {
            str1[i] -= 1
        }
    }
    return true

}
console.log(anagram("helloo", "helloi"))