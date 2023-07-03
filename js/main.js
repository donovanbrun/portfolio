import './Project.js';
import './Stack.js';
import './Experience.js';

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

const aboutContainer = document.getElementById('AboutContainer');
const stackContainer = document.getElementById('StackContainer');
const projectsContainer = document.getElementById('ProjectsContainer');
const contactContainer = document.getElementById('ContactContainer');

window.addEventListener('scroll', () => {
    homeInViewport(isInViewport(homeDiv));
    aboutInViewport(isInViewport(aboutDiv));
    stackInViewport(isInViewport(stackDiv));
    projectsInViewport(isInViewport(projectsDiv));
    contactInViewport(isInViewport(contactDiv));
});

function homeInViewport(isInViewport) {
    if (isInViewport) {
        homeNav.classList.add('NavItemCurrent');
    }
    else {
        homeNav.classList.remove('NavItemCurrent');
    }
}

function aboutInViewport(isInViewport) {
    if (isInViewport) {
        aboutNav.classList.add('NavItemCurrent');
        // aboutContainer.classList.remove('unslideLeft');
        // aboutContainer.classList.add('slideLeft');
    }
    else {
        aboutNav.classList.remove('NavItemCurrent');
        // aboutContainer.classList.remove('slideLeft');
        //aboutContainer.classList.add('unslideLeft');
    }
}

function stackInViewport(isInViewport) {
    if (isInViewport) {
        stackNav.classList.add('NavItemCurrent');
        // stackContainer.classList.remove('unslideRight');
        // stackContainer.classList.add('slideRight');
    }
    else {
        stackNav.classList.remove('NavItemCurrent');
        // stackContainer.classList.remove('slideRight');
        // stackContainer.classList.add('unslideRight');
    }
}

function projectsInViewport(isInViewport) {
    if (isInViewport) {
        projectsNav.classList.add('NavItemCurrent');
        // projectsContainer.classList.remove('unslideLeft');
        // projectsContainer.classList.add('slideLeft');
    }
    else {
        projectsNav.classList.remove('NavItemCurrent');
        // projectsContainer.classList.remove('slideLeft');
        // projectsContainer.classList.add('unslideLeft');
    }
}

function contactInViewport(isInViewport) {
    if (isInViewport) {
        contactNav.classList.add('NavItemCurrent');
        // contactContainer.classList.remove('unslideRight');
        // contactContainer.classList.add('slideRight');
    }
    else {
        contactNav.classList.remove('NavItemCurrent');
        // contactContainer.classList.remove('slideRight');
        // contactContainer.classList.add('unslideRight');
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 150
let result = ""
for(let i = 0; i < STAR_COUNT; i++){
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
}
const background = document.getElementById('background');
background.style.boxShadow = result.substring(0, result.length - 1);