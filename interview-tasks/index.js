// Check if given sentence is a Pangram 

function isPangram(str) {

    const abc = 'abcdefghijklmnopqrstuvwxyz'
    let processedString = [...new Set(str.toLowerCase().split(' ').join(''))].sort().join('')
    return abc === processedString


    console.log(processedString)
}

console.log(isPangram("abcdefghijklmnopqrstuvwxyz"))

// API Array Method

const getUsers = async () => {
    const api = 'https://jsonplaceholder.typicode.com/users'
    const response = await fetch(api)
    const json = await response.json()
    
    const result = json.filter(v=>v.name.toLowerCase().includes('k')).map(v=>({name:v.name,email:v.email}))
    
    return result
    
}

(async function() {
    try{
     console.log(await getUsers())   
        
    }catch(err){
        console.log(err)
    }
})();