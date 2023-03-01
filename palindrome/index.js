const displayedResult = document.getElementById('yesorno')
let result 


function handleChange(e) {
     result = e.target.value ? palindromeCheck(e.target.value) : ''
}

  function handleClick() {
      displayedResult.innerText = result ? result : 'Please enter a sentence'
  }

