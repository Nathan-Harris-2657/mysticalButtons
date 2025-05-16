const messageContainer = document.getElementById('messageContainer')

const numbers = [2]

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
})