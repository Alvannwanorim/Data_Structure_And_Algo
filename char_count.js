function isAlphaNumeric(char) {
    let code = char.charCodeAt(0)
    if (!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)) {
        return false
    }
    return true
}


function charCount(str) {
    let result = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i].toLowerCase()

        if (isAlphaNumeric(char)) {

            result[char] ? result[char] += 1 : result[char] = 1
        }

    }
    return result
}

console.log(charCount('hello Horld'));