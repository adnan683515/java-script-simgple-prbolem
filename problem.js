
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




const sumOfNumber = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum
}
const sumAns = sumOfNumber([1, 2, 3, 4])
console.log(sumAns)


// 07
const findEvenNumber = (arr) => {
    const even = arr.filter((item) => item % 2 === 0)
    return even
}
const evenans = findEvenNumber([1, 2, 3, 4, 5, 6])
console.log(evenans)



// 08
const firstLetterMakecapital = (str) => {
    const makeArray = str.split(' ')

    let newStr = ''
    for (let i = 0; i < makeArray.length; i++) {

        const upperLetter = makeArray[i].split(' ')[0][0].toUpperCase()
        const lessletters = makeArray[i].split(' ')[0].slice(1, makeArray[i].split(' ')[0].length)

        newStr += upperLetter + lessletters + ' '
    }
    return newStr
}

const takeAns = firstLetterMakecapital("hello world")
console.log(takeAns)



// 09
const calculationFactorial = (number) => {

    let ans = 1
    for (let i = 2; i <= number; i++) {
        ans = ans * i
    }
    console.log(ans)
}
const ansFactorail = calculationFactorial(5)


// 10

const pingPongPrint = (number) => {

    for (let i = 1; i <= number; i++) {

        if (i % 3 == 0) {
            console.log("Ping")
        }
        else if (i % 5 === 0) {
            console.log("Pong")
        }
        else if (i % 3 === 0 && i % 5 === 0) {
            console.log("PingPong")
        }
        else {
            console.log(i)
        }
    }
}
pingPongPrint(20)