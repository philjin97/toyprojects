const Game = () => {
    let gameBoard = ['none','none','none','none','none','none','none','none', 'none']

    const set_gameBoard = () => {
        const screen = document.querySelector('screen')
        for (i=0; i<gameBoard.length; i++){
            if (gameBoard[i] == 'none'){
                const div = document.createElement('div')
                const button = document.createElement('button')
                button.classList.add('empty_button')
                div.appendChild(button)
            } else if (gameBoard[i] == 'o'){
                const div = document.createElement('div')
                const button = document.createElement('button')
                button.classList.add('circle_button')
                div.appendChild(button)
            } else if (gameBoard[i] == 'x'){
                const div = document.createElement('div')
                const button = document.createElement('button')
                button.classList.add('cross_button')
                div.appendChild(button)
            }

        }
    }

}