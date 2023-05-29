import './Project.js';
import './Stack.js';

var r = document.querySelector(':root')
r.style.setProperty('--color-primary', 'white')
r.style.setProperty('--color-secondary', 'black')

function darkmode() {
    var r = document.querySelector(':root')
    if (r.style.getPropertyValue('--color-primary') === 'white') {
        r.style.setProperty('--color-primary', 'black')
        r.style.setProperty('--color-secondary', 'white')
    }
    else {
        r.style.setProperty('--color-primary', 'white')
        r.style.setProperty('--color-secondary', 'black')
    }
}

const darkmodeButton = document.getElementById('DarkModeBtn')
darkmodeButton.addEventListener('click', darkmode)

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const windowWidth = window.innerWidth || document.documentElement.clientWidth;

    const midpointX = rect.left + rect.width / 2;
    const midpointY = rect.top + rect.height / 2;

    return midpointX >= 0 && midpointX <= windowWidth && midpointY >= 0 && midpointY <= windowHeight;
}

const homeDiv = document.getElementById('Home');
const aboutDiv = document.getElementById('About');
const projectsDiv = document.getElementById('Projects');
const stackDiv = document.getElementById('Stack');
const contactDiv = document.getElementById('Contact');

const homeNav = document.getElementById('NavHome');
const aboutNav = document.getElementById('NavAbout');
const stackNav = document.getElementById('NavStack');
const projectsNav = document.getElementById('NavProjects');
const contactNav = document.getElementById('NavContact');

window.addEventListener('scroll', () => {
    if (isInViewport(homeDiv)) {
        homeNav.classList.add('NavItemCurrent');
        aboutNav.classList.remove('NavItemCurrent');
        projectsNav.classList.remove('NavItemCurrent');
        stackNav.classList.remove('NavItemCurrent');
        contactNav.classList.remove('NavItemCurrent');
    }
    else if (isInViewport(aboutDiv)) {
        homeNav.classList.remove('NavItemCurrent');
        aboutNav.classList.add('NavItemCurrent');
        projectsNav.classList.remove('NavItemCurrent');
        stackNav.classList.remove('NavItemCurrent');
        contactNav.classList.remove('NavItemCurrent');
    }
    else if (isInViewport(projectsDiv)) {
        homeNav.classList.remove('NavItemCurrent');
        aboutNav.classList.remove('NavItemCurrent');
        projectsNav.classList.add('NavItemCurrent');
        stackNav.classList.remove('NavItemCurrent');
        contactNav.classList.remove('NavItemCurrent');
    }
    else if (isInViewport(stackDiv)) {
        homeNav.classList.remove('NavItemCurrent');
        aboutNav.classList.remove('NavItemCurrent');
        projectsNav.classList.remove('NavItemCurrent');
        stackNav.classList.add('NavItemCurrent');
        contactNav.classList.remove('NavItemCurrent');
    }
    else if (isInViewport(contactDiv)) {
        homeNav.classList.remove('NavItemCurrent');
        aboutNav.classList.remove('NavItemCurrent');
        projectsNav.classList.remove('NavItemCurrent');
        stackNav.classList.remove('NavItemCurrent');
        contactNav.classList.add('NavItemCurrent');
    }
});