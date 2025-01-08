'use strict'
let selectedRating = 0
const submitBtn = document.querySelector('.submit-btn')
const ratingNums = document.querySelectorAll('.rating')
const secondCard = document.querySelector('.second-card-container')
const firstCard = document.querySelector('.card-container')
const selectText = document.querySelector('.select-text')



const nextPage = function(){
   secondCard.classList.remove('hidden')
   firstCard.classList.add('hidden')
   selectText.textContent = `You selected ${selectedRating} out of 5`

}

for(let i = 0; i< ratingNums.length; i++){
    ratingNums[i].addEventListener('click', () => {
        ratingNums.forEach((num) => {
            num.style.backgroundColor = ''
        })
        ratingNums[i].style.backgroundColor = 'hsl(25, 97%, 53%)'
        selectedRating = i + 1
    })
  
}

submitBtn.addEventListener('click', nextPage)

