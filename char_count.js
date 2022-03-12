function charCount(str) {
    let result = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()

        if (/[a-z0-9]/.test(char)) {

            result[char] ? result[char] += 1 : result[char] = 1
        }

    }
    return result
}

console.log(charCount('hello Horld'));