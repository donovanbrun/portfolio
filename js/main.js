import './Experience.js';
import './Project.js';
import './Stack.js';

// scroll to bottom
window.addEventListener('load', () => {
    window.scrollTo(0, document.body.scrollHeight);
});

var r = document.querySelector(':root')

let dark = true;
r.style.setProperty('--background-color', '#101010')
r.style.setProperty('--color-primary', 'white')
r.style.setProperty('--color-secondary', '#080808')
r.style.setProperty('--title-color', 'white')

function darkmode() {
    if (!dark) {
        dark = true;
        r.style.setProperty('--background-color', '#101010')
        r.style.setProperty('--color-primary', 'white')
        r.style.setProperty('--color-secondary', '#080808')
        r.style.setProperty('--title-color', 'white')
    }
    else {
        dark = false;
        r.style.setProperty('--background-color', 'white')
        r.style.setProperty('--color-primary', 'white')
        r.style.setProperty('--color-secondary', '#101010')
        r.style.setProperty('--title-color', '#101010')
    }
}

function navigate(section) {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
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
// const stackDiv = document.getElementById('Stack');
const contactDiv = document.getElementById('Contact');

const homeNav = document.getElementById('NavHome');
const aboutNav = document.getElementById('NavAbout');
// const stackNav = document.getElementById('NavStack');
const projectsNav = document.getElementById('NavProjects');
const contactNav = document.getElementById('NavContact');

homeNav.addEventListener('click', () => {
    navigate("Home");
});
aboutNav.addEventListener('click', () => {
    navigate("About");
});
// stackNav.addEventListener('click', () => {
//     navigate("Stack");
// });
projectsNav.addEventListener('click', () => {
    navigate("Projects");
});
contactNav.addEventListener('click', () => {
    navigate("Contact");
});

window.addEventListener('scroll', () => {
    // get percentage
    const scrollPercent = 100 - (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    const gradientPercent = scrollPercent / 100;
    const red = Math.round(119 - gradientPercent * 119); // Interpolating R value
    const g = Math.round(181 - gradientPercent * 181); // Interpolating G value
    const b = Math.round(254 - gradientPercent * 254); // Interpolating B value
    const color = `rgb(${red},${g},${b})`;
    r.style.setProperty('--background-color', color);

    homeInViewport(isInViewport(homeDiv));
    aboutInViewport(isInViewport(aboutDiv));
    // stackInViewport(isInViewport(stackDiv));
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
    }
    else {
        aboutNav.classList.remove('NavItemCurrent');
    }
}

// function stackInViewport(isInViewport) {
//     if (isInViewport) {
//         stackNav.classList.add('NavItemCurrent');
//     }
//     else {
//         stackNav.classList.remove('NavItemCurrent');
//     }
// }

function projectsInViewport(isInViewport) {
    if (isInViewport) {
        projectsNav.classList.add('NavItemCurrent');
    }
    else {
        projectsNav.classList.remove('NavItemCurrent');
    }
}

function contactInViewport(isInViewport) {
    if (isInViewport) {
        contactNav.classList.add('NavItemCurrent');
    }
    else {
        contactNav.classList.remove('NavItemCurrent');
    }
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const STAR_COUNT = 100
let result = ""
for (let i = 0; i < STAR_COUNT; i++) {
    result += `${randomNumber(-50, 50)}vw ${randomNumber(-50, 50)}vh ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
}
const background = document.getElementById('background');
background.style.boxShadow = result.substring(0, result.length - 1);