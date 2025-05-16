const messageContainer = document.getElementById('messageContainer')
const gameContainer = document.getElementById('gameContainer')

const inputContainer = document.getElementById('inputContainer')

const pleaseEnterName = document.getElementById('pleaseEnterName')
const inputName = document.getElementById('inputName')

const player = []

inputName.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        const playerName = inputName.value
        player.push(playerName)
    inputContainer.removeChild(pleaseEnterName)
    inputContainer.removeChild(inputName)
    const message2 = document.createElement('div')
    message2.setAttribute('id','prolog2')
    message2.innerHTML = `"Nice to meet you" ${player}` 
    message2.style.opacity = '0'
    message2.style.transition = 'all 1s ease-in-out'
    messageContainer.appendChild(message2)
    setTimeout(() => {
    message2.style.opacity = '1';
    setTimeout(() => {
        message2.style.opacity = '0';
    }, 6000);
}, 2000);

    }
})



document.addEventListener('DOMContentLoaded',() =>{
    const message = document.createElement('div')
    message.setAttribute('id', 'prolog')
    message.innerHTML ="In the silent corridors of fate, where shadows whisper and time holds its breath,<br/> the right decision is the key that unlocks unseen doors revealing paths only the wise can walk."
    message.style.opacity = '0'
    message.style.transition = 'all 1s ease-in-out'
    messageContainer.appendChild(message)
    setTimeout(() => {
    message.style.opacity = '1';
    setTimeout(() => {
        message.style.opacity = '0';
        setTimeout(() => {
            message.remove()
        }, 6500);
    }, 6000);
}, 2000);

})







