import { tweetsData } from "./data.js"


const tweetBtn = document.getElementById('tweet-btn')

tweetBtn.addEventListener('click', function(){
    console.log(tweetsData)
})