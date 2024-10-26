//Retrieving HTML elements 
const innerDiv = document.querySelectorAll('.inner')
const x = document.getElementById('x')
const o = document.getElementById('o')
const restart = document.getElementById('restart')
const winner = document.getElementById('winner')
const intro = document.getElementById('intro')
let move = 0
let check = ''

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
    check = ''
    winner.innerHTML = ''
    intro.innerHTML = 'Select "X" or "O" to begin'
    x.style.display = 'inline-block'
    o.style.display = 'inline-block'
})

//Eventlistener for each tile
innerDiv.forEach(elem => {
    elem.addEventListener('click', () => {
        if(move === 'X' && elem.innerHTML === ''){
            elem.style.color = 'white'
            elem.innerHTML = 'X'
            move = 'O'
            intro.innerHTML = ''
        }else if(move === 'O' && elem.innerHTML === ''){
            elem.style.color = 'white'
            elem.innerHTML = 'O'
            move = 'X'
            intro.innerHTML = ''
        }

        let combo = [
            [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
        ]
        for(i=0; i<8; i++){
            let v0 = innerDiv[combo[i][0]].innerHTML
            let v1 = innerDiv[combo[i][1]].innerHTML
            let v2 = innerDiv[combo[i][2]].innerHTML

            if(v0 === v1 && v1 === v2 && v0 === 'X'){
                winner.innerHTML = "Player 'X' won!"
                move = 0
                check = ''
                break
            }

            else if(v0 === v1 && v1 === v2 && v0 === 'O'){
                winner.innerHTML = "Player 'O' won!"
                move = 0
                check = ''
                break
            }
        }

        for(i=0; i<8; i++){
            if(innerDiv[i].innerHTML==='X' || innerDiv[i].innerHTML==='O'){
                check += innerDiv[i].innerHTML
                console.log(check.length)
                if(check.length === 9){
                    winner.innerHTML = "It's a draw!"
                    move = 0
                }
                break
            }
        }
    })
});