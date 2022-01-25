// Logo animation--------------------------------
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


// Handle hamburger menu----------------------------
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


// Handle routing------------------------------------
const routes = {
    '/' : home,
    '/index.html': home,
    '/about' : about,
    '/portfolio' : portfolio,
    '/contact' : contact
  };
  
  const rootDiv = document.getElementById('root');
  rootDiv.innerHTML = routes[window.location.pathname];
  
  const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]
  }
  
  window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
  }