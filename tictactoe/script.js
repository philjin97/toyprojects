const Game = () => {
    // Saving game board data.
    let gameBoard = ['x','none','none','none','none','none','none','none', 'none']

    // To save the value of the clicked button instead of calling a new function. 
    let current

    // Storing values for player1. 
    const player1 = (() => {
        const turn = () => {
            const narration = document.querySelector('.narration')
            narration.textContent = "It is Player 1's turn"
        }

    })()

    // Storing values for player2. 
    const player2 = (() => {
        const turn = () => {
            const narration = document.querySelector('.narration')
            narration.textContent = "It is Player 2's turn"
        }

    })()
    
    // Initially setting up the game board using the game board data. 
    const set_gameBoard = () => {
        const screen = document.querySelector('.screen')
        console.log(gameBoard[0])
        for (i=0; i<gameBoard.length; i++){
            if (gameBoard[i] == 'none'){
                const div = document.createElement('div')
                const button = document.createElement('button')
                div.classList.add('div_button')
                button.classList.add('empty_button')
                button.addEventListener('click', (event) => {
                    current = event.target.attributes.id.value
                    console.log(current)
                    game.gamePlay(0)
                    game.gamePlay(1)
                })
                button.setAttribute('id', `${i}`)
                div.appendChild(button)
                screen.appendChild(div)
            } else if (gameBoard[i] == 'o'){
                const div = document.createElement('div')
                const button = document.createElement('button')
                button.textContent = 'O'
                button.classList.add('circle_button')
                div.classList.add('div_button')
                button.addEventListener('click', (event) => {
                    current = event.target.attributes.id.value
                    console.log(current)
                })
                button.setAttribute('id', `${i}`)
                div.appendChild(button)
                screen.appendChild(div)
            } else if (gameBoard[i] == 'x'){
                const div = document.createElement('div')
                const button = document.createElement('button')
                button.textContent = 'X'
                button.classList.add('cross_button')
                div.classList.add('div_button')
                button.addEventListener('click', (event) => {
                    current = event.target.attributes.id.value
                    console.log(current)
                })
                button.setAttribute('id', `${i}`)
                div.appendChild(button)
                screen.appendChild(div)
            }
        }
        
    }


    // Running logic for game play. 
    const gamePlay = (turn) => {

        if (current != 'none'){
            if (turn == 0){
                const narration = document.querySelector('.narration')
                narration.textContent = "It is Player 1's turn"
                console.log(current)
                gameBoard.splice(current, 1, 'x')
                let changeButton = document.getElementById(`${current}`)
                changeButton.textContent = 'X'
                changeButton.classList.remove('empty_button', 'circle_button')
                changeButton.classList.add('cross_button')
                console.log(gameBoard)
                current = 'none'
                
            } else if (turn == 1){
                const narration = document.querySelector('.narration')
                narration.textContent = "It is Player 2's turn"
                console.log(current)
                gameBoard.splice(current, 1, 'o')
                let changeButton = document.getElementById(`${current}`)
                changeButton.textContent = 'O'
                changeButton.classList.remove('empty_button', 'circle_button')
                changeButton.classList.add('cross_button')
                current = 'none'
        
            }
    }}

    // Returning for a factory function. 
    return {
        player1, player2, set_gameBoard, gamePlay
    }

}

const game = Game();
game.set_gameBoard();
game.gamePlay();
