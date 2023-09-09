const Game = () => {
    // Saving game board data.
    let gameBoard = ['none','none','none','none','none','none','none','none', 'none']
    let winCombination = [[0,3,6],[1,4,7],[2,5,8],[0,1,2],[3,4,5],[6,7,8],[0,4,8],[2,4,6]]
    let css_winCombination 

    // To save the value of the clicked button instead of calling a new function. 
    let current

    // To switch between player 1 and player 2. 
    let a = 0

    // To record the current choices of player 1 and player 2. 
    
    
    
    // Initially setting up the game board using the game board data. 
    const set_gameBoard = () => {
        const screen = document.querySelector('.screen')

        for (i=0; i<gameBoard.length; i++){
            if (gameBoard[i] == 'none'){
                const div = document.createElement('div')
                const button = document.createElement('button')
                div.classList.add('div_button')
                button.classList.add('empty_button')
                button.addEventListener('click', (event) => {
                    current = event.target.attributes.id.value
                    console.log(current)
                    checkGame.gamePlay()
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
                    checkGame.gamePlay()
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
                    checkGame.gamePlay()
                })
                button.setAttribute('id', `${i}`)
                div.appendChild(button)
                screen.appendChild(div)
            }
        }
        
    }

    
    // Running logic for game play. 
    const gamePlay = () => {

        let player1 = []
        let player2 = []
        
        if (typeof current == 'string'){
            if (a == 0){
            const narration = document.querySelector('.narration')
            narration.textContent = "It is Player 2's turn"
            gameBoard.splice(current, 1, 'x')
            let changeButton = document.getElementById(`${current}`)
            changeButton.textContent = 'X'
            changeButton.classList.remove('empty_button', 'circle_button')
            changeButton.classList.add('cross_button')
            console.log(gameBoard)
            a = 1
            
            

            for (i=0; i<gameBoard.length; i++){
                    if (gameBoard[i] == 'x'){
                        player1.push(i)
                    } else if (gameBoard[i] == 'o'){
                        player2.push(i)}
            } 

            
            // includes() vs in. Includes() checks for the existence of a value in an array, 
            // while the in operator checks for the existence of a key in an object. 

            let win = 0
            for (i=0; i<winCombination.length; i++){
                
                for (x=0; x<player1.length; x++){
                    if (winCombination[i].includes(player1[x])){
                        
                        win += 1
                        
                        
                    } else {win += 0}
                }
                
                if (win == 3){
                    css_winCombination = winCombination[i]
                    checkGame.addWinAnimation()
                    const narration = document.querySelector('.narration')
                    narration.textContent = "Player 1 Wins!"
                    break
                } else {
                win = 0}
            }   

            if (!gameBoard.includes('none')){
                const narration = document.querySelector('.narration')
                narration.textContent = "Draw!"
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

            for (i=0; i<gameBoard.length; i++){
                    if (gameBoard[i] == 'x'){
                        player1.push(i)
                    } else if (gameBoard[i] == 'o'){
                        player2.push(i)}
            } 

            

            let win = 0
            for (i=0; i<winCombination.length; i++){
                for (x=0; x<player2.length; x++){
                    if (winCombination[i].includes(player2[x])){
                        win += 1
                        
                    }
                }
                console.log(win)
                if (win == 3){
                    css_winCombination = winCombination[i]
                    checkGame.addWinAnimation()
                    const narration = document.querySelector('.narration')
                    narration.textContent = "Player 2 Wins!"
                    break
                } else {
                win = 0}
            }
            
            if (!gameBoard.includes('none')){
                const narration = document.querySelector('.narration')
                narration.textContent = "Draw!"
            }
            }
        }
    }

    const addWinAnimation = () => {
        for (x in css_winCombination){
            console.log(css_winCombination[x])
            console.log(x)
            const css_winAnimation = document.getElementById(`${css_winCombination[x]}`)
            css_winAnimation.classList.add('winAnimation')
        }
    }

    // Returning for a factory function. 
    return {
        set_gameBoard, 
        gamePlay,
        addWinAnimation
    }

    
}

const checkGame = Game();
checkGame.set_gameBoard();

