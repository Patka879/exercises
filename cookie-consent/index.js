const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')

setTimeout(function(){
    modal.style.display = 'block'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})