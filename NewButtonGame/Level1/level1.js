const messageContainer = document.getElementById('messageContainer')
const gameContainer = document.getElementById('gameContainer')

document.addEventListener('DOMContentLoaded',() =>{
    const message = document.createElement('div')
    message.setAttribute('id', 'prolog')
    message.innerHTML ="In the silent corridors of fate, where shadows whisper and time holds its breath,<br/> the right decision is the key that unlocks unseen doors revealing paths only the wise can walk."
    message.style.opacity = '0'
    message.style.transition = 'all 1s ease-in-out'
    messageContainer.appendChild(message)
    setInterval(() => {
        message.style.opacity = '1'
            setInterval(() => {
                message.style.opacity = '0'
            }, 6000);
    }, 2000);
})

document.addEventListener('DOMContentLoaded', ()=>{
    const inputContainer = document.createElement('div')
    inputContainer.setAttribute('id', 'inputContainer')
    inputContainer.style.opacity = '0'
    inputContainer.style.transition = 'all 1s ease'

    const getName = document.createElement('input')
    getName.type = 'text'
    getName.setAttribute('id', 'getName')

    const type = document.createElement('div')
    type.setAttribute('id', 'type')
    type.textContent = "What is Your Name:"

        gameContainer.append(inputContainer)
        inputContainer.appendChild(type)
        inputContainer.appendChild(getName)
    setInterval(() => {
        inputContainer.style.opacity = '1'
    }, 4000);
    
    
})