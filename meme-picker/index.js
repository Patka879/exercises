import { catsData } from '/catsData.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImgBtn = document.getElementById('get-image-btn')
const gifsOnlyCheckbox = document.getElementById('gifs-only-option')

emotionRadios.addEventListener("change", highlightCheckedOption) 
getImgBtn.addEventListener('click', renderCat)
    
function highlightCheckedOption(e) { 
    const highlightedElements = document.getElementsByClassName('highlight')
    for (let highlightedElement of highlightedElements) {
        highlightedElement.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray() {
    
    if (document.querySelector('input[type="radio"]:checked')) {
        const selectedEmotion = document.querySelector('input[type="radio"]:checked').value 
        const isGif = gifsOnlyCheckbox.checked

        const matchingCatsArray = catsData.filter(function(meme) {
            if (isGif) {
                return meme.emotionTags.includes(selectedEmotion) && meme.isGif
            } else {
                return meme.emotionTags.includes(selectedEmotion)
            }
        })
        
        return matchingCatsArray
    }
}

function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
    if (catsArray.length === 1) {
        console.log(catsArray[0])
    } else {
        console.log(catsArray[Math.floor(Math.random() * catsArray.length)])
    }

}

function renderCat(){
    getSingleCatObject()
}
   

function getEmotionsArray(cats){
    const emotionsArray = []
    for (let cat of cats) {
        for (let emotion of cat.emotionTags) {
                if (!emotionsArray.includes(emotion))
                emotionsArray.push(emotion)
        }
    }
    emotionRadios.innerHTML = emotionsArray
    return emotionsArray
}

function renderEmotionsRadios(cats){

    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    for (let emotion of emotions){
        radioItems += `
                        <div class="radio">
                            <label for="${emotion}">${emotion}</label>
                                <input 
                                    type="radio" 
                                    id="${emotion}" 
                                    name="emotions" 
                                    value="${emotion}"}
                                >
                        </div>
        `
    }

    emotionRadios.innerHTML = radioItems
}
    
renderEmotionsRadios(catsData)

