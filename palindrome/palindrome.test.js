const palindromeCheck = require('./palindrome')

describe('palindromeCheck', () => { 
    test('If true palindrome is handled correctly', () => {
        expect(palindromeCheck('Papa pap')).toBe(`Yes! It's a palindrome!`),
        expect(palindromeCheck('no lemon, no melon')).toBe(`Yes! It's a palindrome!`)
        expect(palindromeCheck('never odd or even')).toBe(`Yes! It's a palindrome!`)
        expect(palindromeCheck('I did, did I?')).toBe(`Yes! It's a palindrome!`) 
        expect(palindromeCheck('Eva, can I see bees in a cave?')).toBe(`Yes! It's a palindrome!`) 
    })
    test('If false palindrome is handled correctly', () => {
        expect(palindromeCheck("I am, am I?")).toBe(`No, it's not a palindrome.`)
        expect(palindromeCheck('parade')).toBe(`No, it's not a palindrome.`)
        expect(palindromeCheck('not a palindrome')).toBe(`No, it's not a palindrome.`)
        expect(palindromeCheck('papapappapa')).toBe(`No, it's not a palindrome.`)
        expect(palindromeCheck("alpaka")).toBe(`No, it's not a palindrome.`)
    })
})