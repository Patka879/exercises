import { catsData } from '/catsData.js'

const emotionRadios = document.getElementById('emotion-radios')
const getImgBtn = document.getElementById('get-image-btn')

emotionRadios.addEventListener("change", highlightCheckedOption) 
getImgBtn.addEventListener('click', getMatchingCatsArray)
    
function highlightCheckedOption(e) { 
    const highlightedElements = document.getElementsByClassName('highlight')
    for (let highlightedElement of highlightedElements) {
        highlightedElement.classList.remove('highlight')
    }
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

function getMatchingCatsArray() {
    const checkedRadio = document.querySelector('input[type="radio"]:checked').value 
    console.log(checkedRadio)
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

