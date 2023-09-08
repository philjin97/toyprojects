const Game = () => {
    // Saving game board data.
    let gameBoard = ['none','none','none','none','none','none','none','none', 'none']
    let winCombination = ['036','147','258','012','345','678','048','246']

    // To save the value of the clicked button instead of calling a new function. 
    let current

    let a = 0

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
        console.log(gameBoard[current])
        for (i=0; i<gameBoard.length; i++){
            if (gameBoard[i] == 'none'){
                const div = document.createElement('div')
                const button = document.createElement('button')
                div.classList.add('div_button')
                button.classList.add('empty_button')
                button.addEventListener('click', (event) => {
                    current = event.target.attributes.id.value
                    console.log(current)
                    game.gamePlay()
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
    const gamePlay = () => {
        

        if (typeof current == 'string'){
        if (a == 0){
            const narration = document.querySelector('.narration')
            narration.textContent = "It is Player 2's turn"
            gameBoard.splice(current, 1, 'x')
            let changeButton = document.getElementById(`${current}`)
            console.log(changeButton)
            changeButton.textContent = 'X'
            changeButton.classList.remove('empty_button', 'circle_button')
            changeButton.classList.add('cross_button')
            console.log(gameBoard)
            a = 1
            
            let player1 = ''
            let player2 = ''
            for (i=0; i<gameBoard.length; i++){
                    if (gameBoard[i] == 'x'){
                    player1 += i
                    } else if (gameBoard[i] == 'o'){
                    player2 += i}
            } 
            for (i=0; i<winCombination.length; i++){
                if (player1 == winCombination[i]){
                    const narration = document.querySelector('.narration')
                    narration.textContent = "Player 1 Wins!"
                    const resetButton = document.createElement('button')
                    
                } else if (player2 == winCombination[i]){
                    const narration = document.querySelector('.narration')
                    narration.textContent = "Player 2 Wins!"
                } 
            }
            
            
        } else if (a == 1){
            const narration = document.querySelector('.narration')
            narration.textContent = "It is Player 1's turn"
            console.log(current)
            gameBoard.splice(current, 1, 'o')
            let changeButton = document.getElementById(`${current}`)
            changeButton.textContent = 'O'
            changeButton.classList.remove('empty_button', 'cross_button')
            changeButton.classList.add('circle_button')
            a = 0

            let player1 = ''
            let player2 = ''
            for (i=0; i<gameBoard.length; i++){
                    if (gameBoard[i] == 'x'){
                    player1 += i
                    } else if (gameBoard[i] == 'o'){
                    player2 += i}
            } 
            for (i=0; i<winCombination.length; i++){
                if (player1 == winCombination[i]){
                    const narration = document.querySelector('.narration')
                    narration.textContent = "Player 1 Wins!"
                } else if (player2 == winCombination[i]){
                    const narration = document.querySelector('.narration')
                    narration.textContent = "Player 2 Wins!"
                } 
            }
    
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
