//Retrieving HTML elements 
const innerDiv = document.querySelectorAll('.inner')
const x = document.getElementById('x')
const o = document.getElementById('o')
const restart = document.getElementById('restart')
const winner = document.getElementById('winner')
const intro = document.getElementById('intro')
let move = 0

//Onscreen instructions
intro.innerHTML = 'Select "X" or "O" to begin'

//Eventlistener for selecting 'X'
x.addEventListener('click', () =>{
    move = 'X'
    x.style.display = 'none'
    o.style.display = 'none'
    intro.innerHTML = 'Click a tile to make a move!'
})

//Eventlistener for selecting 'O'
o.addEventListener('click', () =>{
    move = 'O'
    x.style.display = 'none'
    o.style.display = 'none'
    intro.innerHTML = 'Click a tile to make a move!'
})

//Eventlistener for the restart button
restart.addEventListener('click', () =>{
    move = 0
    innerDiv.forEach(elem =>{
        elem.innerHTML = ''
    })
    winner.innerHTML = ''
    intro.innerHTML = 'Select "X" or "O" to begin'
    x.style.display = 'inline-block'
    o.style.display = 'inline-block'
})

//Eventlistener for each tile
innerDiv.forEach(elem => {
    elem.addEventListener('click', () => {
        if(move === 'X' && !elem.innerHTML){
            elem.innerHTML = 'X'
            move = 'O'
            intro.innerHTML = ''
        }else if(move === 'O' && !elem.innerHTML){
            elem.innerHTML = 'O'
            move = 'X'
            intro.innerHTML = ''
        }

        //if and else if commands for each possible winning scenario
        if(innerDiv[0].innerHTML === 'X' && innerDiv[1].innerHTML === 'X' && innerDiv[2].innerHTML === 'X'){
            winner.innerHTML = "Player 'X' won!"
            move = 0
        }else if(innerDiv[0].innerHTML === 'O' && innerDiv[1].innerHTML === 'O' && innerDiv[2].innerHTML === 'O'){
            winner.innerHTML = "Player 'O' won!"
            move = 0
        }else if(innerDiv[3].innerHTML === 'X' && innerDiv[4].innerHTML === 'X' && innerDiv[5].innerHTML === 'X'){
            winner.innerHTML = "Player 'X' won!"
            move = 0
        }else if( innerDiv[3].innerHTML === 'O' && innerDiv[4].innerHTML === 'O' && innerDiv[5].innerHTML === 'O' ){
            winner.innerHTML = "Player 'O' won!"
            move = 0
        }else if(innerDiv[6].innerHTML === 'X' && innerDiv[7].innerHTML === 'X' && innerDiv[8].innerHTML === 'X' ){
            winner.innerHTML = "Player 'X' won!"
            move = 0
        }else if(innerDiv[6].innerHTML === 'O' && innerDiv[7].innerHTML === 'O' && innerDiv[8].innerHTML === 'O' ){
            winner.innerHTML = "Player 'O' won!"
            move = 0
        }else if(innerDiv[0].innerHTML === 'X' && innerDiv[4].innerHTML === 'X' && innerDiv[8].innerHTML === 'X' ){
            winner.innerHTML = "Player 'X' won!"
            move = 0
        }else if(innerDiv[0].innerHTML === 'O' && innerDiv[4].innerHTML === 'O' && innerDiv[8].innerHTML === 'O' ){
            winner.innerHTML = "Player 'O' won!"
            move = 0
        }else if(innerDiv[2].innerHTML === 'X' && innerDiv[4].innerHTML === 'X' && innerDiv[6].innerHTML === 'X' ){
            winner.innerHTML = "Player 'X' won!"
            move = 0
        }else if(innerDiv[2].innerHTML === 'O' && innerDiv[4].innerHTML === 'O' && innerDiv[6].innerHTML === 'O' ){
            winner.innerHTML = "Player 'O' won!"
            move = 0
        }else if(innerDiv[0].innerHTML === 'X' && innerDiv[3].innerHTML === 'X' && innerDiv[6].innerHTML === 'X' ){
            winner.innerHTML = "Player 'X' won!"
            move = 0
        }else if(innerDiv[0].innerHTML === 'O' && innerDiv[3].innerHTML === 'O' && innerDiv[6].innerHTML === 'O' ){
            winner.innerHTML = "Player 'O' won!"
            move = 0
        }else if(innerDiv[1].innerHTML === 'X' && innerDiv[4].innerHTML === 'X' && innerDiv[7].innerHTML === 'X' ){
            winner.innerHTML = "Player 'X' won!"
            move = 0
        }else if(innerDiv[1].innerHTML === 'O' && innerDiv[4].innerHTML === 'O' && innerDiv[7].innerHTML === 'O' ){
            winner.innerHTML = "Player 'O' won!"
            move = 0
        }else if(innerDiv[2].innerHTML === 'X' && innerDiv[5].innerHTML === 'X' && innerDiv[8].innerHTML === 'X'){
            winner.innerHTML = "Player 'X' won!"
            move = 0
        }else if(innerDiv[2].innerHTML === 'O' && innerDiv[5].innerHTML === 'O' && innerDiv[8].innerHTML === 'O' ){
            winner.innerHTML = "Player 'O' won!"
            move = 0
        }
        else if(innerDiv[0].innerHTML && innerDiv[1].innerHTML && innerDiv[2].innerHTML && innerDiv[3].innerHTML &&
                innerDiv[4].innerHTML && innerDiv[5].innerHTML && innerDiv[6].innerHTML && innerDiv[7].innerHTML &&
                innerDiv[8].innerHTML){
            winner.innerHTML = "It's a draw!"
            move = 0
            }
    })
});