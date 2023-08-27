const board = document.querySelector('.board')
const board_size = document.querySelector('.board_size')
const question = document.querySelector('p')
const reset = document.querySelector('.reset')
const question_new = document.querySelector('.question_new')


size = 16

function changeColor(){
    this.style.backgroundColor = 'black'
}

function createBoard(){
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (i = 0; i < size * size; i++) {
        board.innerHTML += '<div class="board_element" style="border: 1px solid black;" ></div>'
    }

    const board_elements = document.querySelectorAll('.board_element')
    board_elements.forEach(element => element.addEventListener('mouseover', changeColor))
}

createBoard()



function changeQuestion(){
    let name = ['Phil Jin', 'Phil Joo', 'Phil Ho']
    let adjective = ['Fat', 'Skinny', 'No Muscle', 'Dancing', 'Swimming']
    let name1 = name[Math.floor(Math.random()*3)]
    let adjective1 = adjective[Math.floor(Math.random()*3)]
    question.textContent = `Draw a ${adjective1} ${name1}`
}

changeQuestion()

function changeSize(){
    size = prompt('Input a Number less than 20')
    const board_elements = document.querySelectorAll('.board_element')
    board_elements.forEach(board_element => board_element.style.backgroundColor = 'white')
    createBoard()
}

function reset_new(){
    const board_elements = document.querySelectorAll('.board_element')
    board_elements.forEach(board_element => board_element.style.backgroundColor = 'white')
}

board_size.addEventListener('click', changeSize)
reset.addEventListener('click', reset_new)
question_new.addEventListener('click', changeQuestion)









