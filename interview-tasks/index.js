// Check if given sentence is a Pangram 

function isPangram(str) {

    const abc = 'abcdefghijklmnopqrstuvwxyz'
    let processedString = [...new Set(str.toLowerCase().split(' ').join(''))].sort().join('')
    return abc === processedString


    console.log(processedString)
}

console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))