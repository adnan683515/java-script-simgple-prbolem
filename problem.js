
// 01
const reverseString = (str) => {
    const makeArray = str.split('').reverse().join('')
    return makeArray

}
const ans = reverseString("hello")
console.log(ans)



// 02

const vowelcount = (str) => {
    const vowels = ['A', 'E', 'I', 'O', 'U']
    let count = 0
    for (let i = 0; i < str.length; i++) {
        {

            if (vowels.includes(str[i].toUpperCase())) {
                count++
            }
        }
    }
    return count
}
const result = vowelcount('programming')

console.log(result)



// 03
const palindrom = (str) => {
    const reverseStr = str.split('').reverse().join('')
    if (str == reverseStr) {
        console.log(true)
    }
    return false
}
const palans = palindrom('madam')
console.log(palans)



// 04
const maxiMum = (arr) => {
    const max = Math.max(...arr)
    return max
}

const maxAns = maxiMum([5, 1, 9, 3])
console.log(maxAns)


// 05
const removeDuplicate = (arr) => {

    const ans = [...new Set(arr)]
    console.log(ans)
}
const ansRemove = removeDuplicate([1, 2, 2, 3, 4, 4])
