const messageContainer = document.getElementById('messageContainer')
const gameContainer = document.getElementById('gameContainer')

const pleaseEnterName = document.getElementById('pleaseEnterName')
const inputName = document.getElementById('inputName')

const player = {}

inputName.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        const playerName = inputName.value
        player.name = playerName
    gameContainer.remove(messageContainer)
    
    }

    
})



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
console.log(player.name)






