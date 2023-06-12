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
    if (isInViewport(homeDiv)) {
        homeNav.classList.add('NavItemCurrent');
        aboutNav.classList.remove('NavItemCurrent');
        projectsNav.classList.remove('NavItemCurrent');
        stackNav.classList.remove('NavItemCurrent');
        contactNav.classList.remove('NavItemCurrent');

        // aboutContainer.classList.remove('slideLeft');
        // aboutContainer.classList.add('unslideLeft');
        // stackContainer.classList.remove('slideRight');
        // stackContainer.classList.add('unslideRight');
        // projectsContainer.classList.remove('slideLeft');
        // projectsContainer.classList.add('unslideLeft');
        // contactContainer.classList.remove('slideRight');
        // contactContainer.classList.add('unslideRight');
    }
    else if (isInViewport(aboutDiv)) {
        homeNav.classList.remove('NavItemCurrent');
        aboutNav.classList.add('NavItemCurrent');
        projectsNav.classList.remove('NavItemCurrent');
        stackNav.classList.remove('NavItemCurrent');
        contactNav.classList.remove('NavItemCurrent');

        // aboutContainer.classList.remove('unslideLeft');
        // aboutContainer.classList.add('slideLeft');
        // stackContainer.classList.remove('slideRight');
        // stackContainer.classList.add('unslideRight');
        // projectsContainer.classList.remove('slideLeft');
        // projectsContainer.classList.add('unslideLeft');
        // contactContainer.classList.remove('slideRight');
        // contactContainer.classList.add('unslideRight');
    }
    else if (isInViewport(stackDiv)) {
        homeNav.classList.remove('NavItemCurrent');
        aboutNav.classList.remove('NavItemCurrent');
        projectsNav.classList.remove('NavItemCurrent');
        stackNav.classList.add('NavItemCurrent');
        contactNav.classList.remove('NavItemCurrent');

        // aboutContainer.classList.remove('slideLeft');
        // aboutContainer.classList.add('unslideLeft');
        // stackContainer.classList.remove('unslideRight');
        // stackContainer.classList.add('slideRight');
        // projectsContainer.classList.remove('slideLeft');
        // projectsContainer.classList.add('unslideLeft');
        // contactContainer.classList.remove('slideRight');
        // contactContainer.classList.add('unslideRight');
    }
    else if (isInViewport(projectsDiv)) {
        homeNav.classList.remove('NavItemCurrent');
        aboutNav.classList.remove('NavItemCurrent');
        projectsNav.classList.add('NavItemCurrent');
        stackNav.classList.remove('NavItemCurrent');
        contactNav.classList.remove('NavItemCurrent');

        // aboutContainer.classList.remove('slideLeft');
        // aboutContainer.classList.add('unslideLeft');
        // stackContainer.classList.remove('slideRight');
        // stackContainer.classList.add('unslideRight');
        // projectsContainer.classList.remove('unslideLeft');
        // projectsContainer.classList.add('slideLeft');
        // contactContainer.classList.remove('slideRight');
        // contactContainer.classList.add('unslideRight');
    }
    else if (isInViewport(contactDiv)) {
        homeNav.classList.remove('NavItemCurrent');
        aboutNav.classList.remove('NavItemCurrent');
        projectsNav.classList.remove('NavItemCurrent');
        stackNav.classList.remove('NavItemCurrent');
        contactNav.classList.add('NavItemCurrent');

        // aboutContainer.classList.remove('slideLeft');
        // aboutContainer.classList.add('unslideLeft');
        // stackContainer.classList.remove('slideRight');
        // stackContainer.classList.add('unslideRight');
        // projectsContainer.classList.remove('slideLeft');
        // projectsContainer.classList.add('unslideLeft');
        // contactContainer.classList.remove('unslideRight');
        // contactContainer.classList.add('slideRight');
    }
});