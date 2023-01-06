const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm = document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
const modalInner = document.getElementById('modal-inner')

setTimeout(function(){
    modal.style.display = 'block'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})

consentForm.addEventListener('submit', function(e){
    e.preventDefault()

    const consentFormData = new FormData(consentForm)
    console.log(consentFormData)





    modalText.innerHTML = `
        <div class="modal-inner-loading">
            <img src="images/loading.svg" class="loading">
            <p id="upload-text">
                Uploading your data to the dark web...
            </p>
        </div>`
        setTimeout(function(){
            document.getElementById('upload-text').innerHTML = `Making the sale...`
        }, 1500) 
        setTimeout(function(){
            modalInner.innerHTML = `
            <h2>Thanks you sucker! </h2>
            <p>We just sold the rights to your eternal soul.</p>
            <div class="idiot-gif">
                <img src="images/hehe-pirate.gif">
            </div>
            `
        }, 3000)
    })