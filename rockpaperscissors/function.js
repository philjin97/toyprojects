const rock = document.querySelector('.btn-rock')
const paper = document.querySelector('.btn-paper')
const scissors = document.querySelector('.btn-scissors')
const screen = document.querySelector('.screen')
const score = document.querySelector('.score')

let computer = 0
let player = 0

let count_player = 0
let count_computer = 0

function game(){
    let player = this.value
    let computer = Math.floor(Math.random() * 3)

    if (player == computer) {
        screen.textContent = '<strong>Your score is:</strong> ${count_player} <strong>Computer score is:</strong> ${count_computer}Draw !'
        screen.style.color = 'white'
        console.log(computer)
        console.log(player)
    } else if ((player == 0 && computer == 2) || (player == 1 && computer == 0) || (player == 2 && computer == 1)) {
        screen.textContent = 'You Win !'
        screen.style.color = 'blue'
        count_player += 1
        score.innerHTML = `<strong>Your score is:</strong> ${count_player} <strong>Computer score is:</strong> ${count_computer}`
    } else {
        screen.textContent = 'You Lose !'
        screen.style.color = 'red'
        count_computer += 1
        score.innerHTML = `<strong>Your score is:</strong> ${count_player} <strong>Computer score is:</strong> ${count_computer}`
    }

    if (count_player == 5) {
        screen.textContent = 'Congratulations ! You have beaten the Computer'
        screen.style.color = 'white'
        count_player = 0
        count_computer = 0
        score.innerHTML = `<strong>Your score is:</strong> ${count_player} <strong>Computer score is:</strong> ${count_computer}`
    } else if (count_computer == 5) {
        screen.textContent = 'The Computer Beat You...'
        screen.style.color = 'white'
        count_player = 0
        count_computer = 0
        score.innerHTML = `<strong>Your score is:</strong> ${count_player} <strong>Computer score is:</strong> ${count_computer}`
    }
}

rock.addEventListener('click', game)
paper.addEventListener('click', game)
scissors.addEventListener('click', game)