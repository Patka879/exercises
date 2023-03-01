function palindromeCheck(value) {
    value = value.toLowerCase()
    if (value.replace(/\W/g, "") === value.replace(/\W/g, "").split("").reverse().join("")) {
      return `Yes! It's a palindrome!`
    } else {
      return `No, it's not a palindrome.`
    }
}

module.exports = palindromeCheck