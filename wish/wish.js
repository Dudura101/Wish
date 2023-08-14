let userName = prompt('Enter you name')
userName ? alert(`hi, ${userName}`):
alert('No name has been entered');

const wishQuestion = prompt('Ask your question please')

wishQuestion ? alert(`Your question is: ${wishQuestion}`):
alert('No question has been entered');


let randomNumber = Math.floor(Math.random() * 2)
const valueAdded = document.getElementById('text')
const yesAns = document.getElementById('yes')
const noAns = document.getElementById('no')

if (randomNumber === 0) {
    yesAns.classList.remove('hide')
} else {
    noAns.classList.remove('hide')
}





