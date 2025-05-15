const body = document.querySelector('body')
const fire = document.getElementById('fire')

body.id.add('fireMode')

fire.addEventListener('click', () =>{
    body.style.toggle('#fireMode')
})