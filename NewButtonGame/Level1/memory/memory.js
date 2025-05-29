const messageContainer = document.getElementById('messageContainer')

const screenContainer = document.getElementById('screenContainer')
const guessContainer = document.getElementById('guessContainer')
const screen = document.getElementById('screen')
const guess = document.getElementById('guess')
// Celebration Squares
const box1 = document.getElementById('box1')
const box2 = document.getElementById('box2')
const box3 = document.getElementById('box3')
const box4 = document.getElementById('box4')
const celeBox = document.getElementsByClassName('celeBox')


let numberSet1 = "1"
let numberSet2 = "25"
let numberSet3 = "312"
let numberSet4 = "4817"
let numberSet5 = "54821"
let numberSet6 = "987694"

let message;

document.addEventListener('DOMContentLoaded', ()=>{
    message = document.createElement('div')
    message.setAttribute('class','prolog')
    message.style.opacity = '0'
    message.style.transition = 'all 2s ease'
    message.innerHTML = "Memory is the compass that guides us through life's journey, shaping our<br/>path with lessons from the past and dreams of the future."
    messageContainer.appendChild(message)
    setTimeout(() => {
        message.style.opacity = '1'
        setTimeout(() => {
            message.style.opacity = '0'
        }, 4000);
    }, 1000);

    const message2 = document.createElement('div')
    message2.setAttribute('class', 'prolog')
    message2.style.opacity = '0'
    message2.style.transition = 'all 2s ease'
    message2.innerHTML = "Lets start off with something easy"
    setTimeout(() => {
        messageContainer.replaceChild(message2,message)
            setTimeout(() => {
                message2.style.opacity = '1'
                setTimeout(() => {
                    message2.style.opacity = '0'
                }, 3000);
            }, 1000);
    }, 7000);

    setTimeout(() => {
        screenContainer.style.opacity = '1'
        screen.style.opacity = '1'
        screen.style.height = '270px'
        screen.style.width = '320px'
    }, 12000);

    setTimeout(() => {
        guessContainer.style.opacity = '1'
    }, 13500);
})  

setTimeout(() => {
    screen.style.color = 'black'
    screen.textContent = numberSet1
    setTimeout(() => {
        screen.textContent = ""
    }, 500);
    
}, 14500);

guess.addEventListener('change', ()=>{
    if(guess.value === numberSet1){
        screen.textContent = "Thats Correct"
        guess.value = ""
        numberSet1 = 'null'

        box1.style.transition = 'all 1s ease'
        box1.style.opacity = '1'
        box1.textContent = "Correct!"

        box2.style.transition = 'all 1s ease'
        box2.style.opacity = '1'
        box2.textContent = "Correct!!"

        box3.style.transition = 'all 1s ease'
        box3.style.opacity = '1'
        box3.textContent = "Correct!!!"

        box4.style.transition = 'all 1s ease'
        box4.style.opacity = '1'
        box4.textContent = "Correct!"
        
        
        setTimeout(() => {
            screen.textContent = ""
            box1.textContent = ""
            box2.textContent = ""
            box3.textContent = ""
            box4.textContent = ""

        }, 3000);
    }
    else{
        screen.textContent = "Wrong"
        guess.value = ""

        box1.style.transition = 'all 1s ease'
        box1.style.opacity = '1'
        box1.textContent = "WRONG"

        box2.style.transition = 'all 1s ease'
        box2.style.opacity = '1'
        box2.textContent = "NOT RIGHT!!!"

        box3.style.transition = 'all 1s ease'
        box3.style.opacity = '1'
        box3.textContent = "KEEP TRYING!!"

        box4.style.transition = 'all 1s ease'
        box4.style.opacity = '1'
        box4.textContent = "BETTER LUCK NEXT TIME!"

        setTimeout(() => {
            screen.textContent = ""
            box1.textContent = ""
            box2.textContent = ""
            box3.textContent = ""
            box4.textContent = ""

        }, 3000);
    }
})

