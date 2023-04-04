let playerText = document.getElementsById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
//code above is to ensure the input of x is saved so that you can't punch in the same box again

let spaces = Array(9).fill(null)

//code below is to start the game
const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}
//startGame and boxes add an event listener to each box

function boxClicked(e) {
    const id = e.target.id
}

startGame()