// Messages will be generates here
const messageContainer = document.getElementById('messageContainer')

// Mini games will take place inside here
const gameContainer = document.getElementById('gameContainer')

// if i need to get any info from the player
const inputContainer = document.getElementById('inputContainer')

// div/input element with text to get players name
const pleaseEnterName = document.getElementById('pleaseEnterName')
const inputName = document.getElementById('inputName')

// hidden elements on page
const b1 = document.getElementById('b1')
const b2 = document.getElementById('b2')
const b3 = document.getElementById('b3')

// players name will be stored
const player = []

// Stores Message
// Message storage
let message;

// Initial message setup when page loads
document.addEventListener("DOMContentLoaded", () => {
    message = document.createElement("div");
    message.setAttribute("id", "prolog");
    message.style.opacity = "0";
    message.style.transition = "all 2s ease";
    message.innerHTML =
        "In the silent corridors of fate, where shadows whisper and time holds its breath,<br/> the right decision is the key that unlocks unseen doors revealing paths only the wise can walk.";

    messageContainer.appendChild(message);

    setTimeout(() => {
        message.style.opacity = "1";
        setTimeout(() => {
            message.style.opacity = "0";
            
        }, 6000);
    }, 2000);
});

// Handle name input and replace message with greeting
inputName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const playerName = inputName.value.trim();
        if (playerName) {
            player.push(playerName);
            pleaseEnterName.style.display = "none";
            inputName.style.display = "none";

            // Remove the previous message before adding a new one
            const oldMessage = document.getElementById("prolog");
            if (oldMessage) {
                messageContainer.removeChild(oldMessage);
            }

            const oldGreeting = document.getElementById("prolog2");
            if (oldGreeting) {
                messageContainer.removeChild(oldGreeting);
            }

            // Create new message
            message = document.createElement("div");
            message.setAttribute("id", "prolog2");
            message.style.opacity = "0";
            message.style.transition = "all 2s ease";
            message.innerHTML = `Nice to meet you, ${player.join(", ")}, please make a selection below and we will began!`;

            messageContainer.appendChild(message);

            setTimeout(() => {
                message.style.opacity = "1";
                setTimeout(() => {
                    message.style.opacity = "0";
                    setTimeout(() => {
                        b1.style.opacity = '1'
                        setTimeout(() => {
                            b2.style.opacity = '1'
                            setTimeout(() => {
                                b3.style.opacity = '1'
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 4000);
            }, 1000);
        }
    }
});

b1.addEventListener('click', ()=>{
    window.location.href = './memory/memory.html'
})
b2.addEventListener('click', ()=>{
    window.location.href = './wisdom/wisdom.html'
})
b3.addEventListener('click', ()=>{
    window.location.href = './speed/speed.html'
})











