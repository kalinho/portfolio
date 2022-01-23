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