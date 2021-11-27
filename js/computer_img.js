const computerHappy = document.getElementById('computer_happy');
const computerSad = document.getElementById('computer_sad');

computerSad.addEventListener('mouseover', () => {
    computerHappy.classList.remove('hide');
    computerSad.classList.add('hide');
})

computerHappy.addEventListener('mouseleave', () => {
    computerSad.classList.remove('hide');
    computerHappy.classList.add('hide');
})