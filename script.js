const logo = document.getElementById('logo');

let i = 1;
let txt = 'Söderström';
let speed = 60;

function changeLogo() {
    if (i < txt.length) {
        logo.innerHTML += txt.charAt(i);
        i++;
        setTimeout(changeLogo, speed);
    }
}

window.addEventListener("load", changeLogo);

const toggleButton = document.getElementsByClassName('toggle-menu')[0];
const navLinks = document.getElementsByClassName('nav-links')[0];

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})

navLinks.addEventListener('click', () => {
    if (navLinks.classList[1]) {
        navLinks.classList.toggle('active');
    }
    
})